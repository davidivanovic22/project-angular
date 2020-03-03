import { fakeBackendProvider } from './module/fake-backend';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { routerComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { materialModule } from './app-material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { BookSettingsComponent } from 'src/book-home/book-settings/book-settings.component';
import { BookAddCartComponent } from 'src/book-home/book-add-cart/book-add-cart.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from 'src/services/authentication.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './module/jwt.interceptor';
import { ErrorInterceptor } from './module/error-interceptor';
import { DataService } from 'src/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    routerComponents,
    BookSettingsComponent,
    BookAddCartComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [
    BookSettingsComponent
  ],
  providers: [
    AuthenticationService,
    fakeBackendProvider,
    DataService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    { provide: MAT_DATE_LOCALE, useValue: "sr" },


    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
