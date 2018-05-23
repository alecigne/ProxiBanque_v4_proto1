import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ClientModule } from './client/client.module';
import { ClientListComponent } from './client/client-list/client-list.component';
import { CompteModule } from './compte/compte.module';
import { ChartDemoComponent } from './demo/chart-demo/chart-demo.component';
import { VisuClientComponent } from './visu-client/visu-client.component';
import { ClientItemComponent } from './visu-client/client-item/client-item.component';
import { CcItemComponent } from './visu-client/cc-item/cc-item.component';
import { CeItemComponent } from './visu-client/ce-item/ce-item.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AccueilComponent } from './accueil/accueil.component';
import { OperationsModule } from './operations/operations.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChartDemoComponent,
    VisuClientComponent,
    ClientItemComponent,
    CcItemComponent,
    CeItemComponent,
    LoginComponent,
    AccueilComponent,
],

  imports: [
    BrowserModule,
    ClientModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CompteModule,
    ReactiveFormsModule,
    SharedModule,
    OperationsModule,

  ],
  providers: [
    AuthService,
    { provide: 'BACKEND_URL', useValue: 'http://localhost:8080/proxibanquesi/' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
