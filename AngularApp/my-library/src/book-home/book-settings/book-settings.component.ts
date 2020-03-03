import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-book-settings',
  templateUrl: './book-settings.component.html',
  styleUrls: ['./book-settings.component.css']
})
export class BookSettingsComponent implements OnInit {
  purpose;
  active1 = false;
  active2 = false;

  @ViewChild('radioBtnLight') radioBtnLight;
  @ViewChild('radioBtnDark') radioBtnDark;

  constructor(public dialogRef: MatDialogRef<AppComponent>) { }
  fifthSector:any = {in_stock:0};
  ngOnInit(): void {
    // this.changeTheme(localStorage.getItem("bk_a"));
    if(localStorage.getItem("bk_a") == "0"){
      this.active1 = true;
      this.active2 = false;

    }else{
      this.active1 = false;
      this.active2 = true;

    }
  }



  changeTheme(choice) {
    if (choice.value == 1) {
      document.body.classList.remove("default-theme");
      document.body.classList.add("dark-theme"); 
      localStorage.setItem("bk_a", "1");
    } else if (choice.value == 0) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("default-theme");
      localStorage.setItem("bk_a", "0");
    }
  }
}
