
import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BookSettingsComponent } from 'src/book-home/book-settings/book-settings.component';
import { AuthenticationService } from 'src/services/authentication.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/services/data.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin = false;
  dataPassed: any;
  subscription: Subscription;
  isActiveLogOut = true;
  sidenavWidth = 4;
  isDarkActive = false;
  isLightActive = true;
  deviceInfo;
  responsive = true;
  ngStyle: string;
  title = 'my-library';
  isGrad: boolean = true;
  displayNavbar: string;
  isMobile = false;
  isTablet = true;
  isDesktopDevice = true;

  @ViewChild('sidenav', { static: false }) sidenav;

  constructor(private deviceService: DeviceDetectorService, private router: Router,
    private authenticationService: AuthenticationService, public dialog: MatDialog, private ds: DataService) {
    this.subscription = this.ds.getData().subscribe(x => {
      this.dataPassed = x;
      localStorage.setItem('is_log', this.dataPassed);
      if (this.dataPassed === "0") {
        this.isLogin = false;
      } else if (this.dataPassed === "1") {
        this.isLogin = true;
      }
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    if (localStorage.getItem('is_log') === "0") {
      this.isLogin = false;
    } else if (localStorage.getItem('is_log') === "1") {
      this.isLogin = true;
    }
    this.deviceInfo = this.deviceService.getDeviceInfo();
    //this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.changeThemeLoad();

  }
  onResize(event) {
    if (parseInt(event.target.innerWidth) <= 480) {
      this.isMobile = false;
    } else {
      this.isMobile = false;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookSettingsComponent, {
      width: '20%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  form = new FormGroup({
    david: new FormControl("", Validators.required)
  });


  changeThemeLoad() {

    console.log("U metodi:", localStorage.getItem("bk_a"));
    if (1 == parseInt(localStorage.getItem("bk_a"))) {
      document.body.classList.remove("default-theme");
      document.body.classList.add("dark-theme");
    } else if (0 == parseInt(localStorage.getItem("bk_a"))) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("default-theme");

    }
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.isLogin = false;
    this.dataPassed = "0";
    localStorage.setItem('is_log', this.dataPassed);
    if (this.dataPassed === "0") {
      this.isLogin = false;
    } else if (this.dataPassed === "1") {
      this.isLogin = true;
    }
      this.sidenav.close();
    
  }
}



