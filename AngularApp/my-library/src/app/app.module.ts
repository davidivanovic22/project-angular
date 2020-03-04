import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookSettingsComponent } from 'src/book-home/book-settings/book-settings.component';
import { BookAddCartComponent } from 'src/book-home/book-add-cart/book-add-cart.component';
import { RegisterComponent } from 'src/register/register.component';
import { LoginComponent } from 'src/login/login.component';
import { BookHomeComponent } from 'src/book-home/book-home.component';
import { materialModule } from './app-material.module';
import { routingComponents } from './app-routing.module';
import { AuthenticationService } from 'src/services/authentication.service';
import { fakeBackendProvider } from './module/fake-backend';
import { DataService } from 'src/services/data.service';
import { JwtInterceptor } from './module/jwt.interceptor';
import { ErrorInterceptor } from './module/error-interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    BookSettingsComponent,
    BookAddCartComponent,
    RegisterComponent,
    LoginComponent,
    BookHomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule,    
    routingComponents
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
