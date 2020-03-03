import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css']
})
export class BookHomeComponent implements OnInit {

  sidenavWidth = 4;
  ngStyle: string;
  imgList: any = [
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 2, rows: 1, color: "yellow" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "green" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/alan-turing-manjunath-r-8a42aac107da4def84c746ab2a4fe87a.png", cols: 1, rows: 1, color: "blue" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/an-easy-route-to-peace-cf9107085fbcf93c6bb653bf5fc86cb0.jpg", cols: 1, rows: 1, color: "orange" },
    { name: "David", subname: "Ivanovic", url: "https://www.obooko.com/images-cache/faradays-cage-mcgee-9d633803dc6568ee7a2ebbef992c9ad9.jpg", cols: 1, rows: 1, color: "red" },

  ];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  obs: Observable<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }
  dataSource = new MatTableDataSource<any>(this.imgList);
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

}  
