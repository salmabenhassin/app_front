import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ListClassesComponent } from './list-classes/list-classes.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { EtudiantCreateComponent } from './etudiant-create/etudiant-create.component';
import { EtudiantReadComponent } from './etudiant-read/etudiant-read.component';
import { EtudiantUpdateComponent } from './etudiant-update/etudiant-update.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { AddclasseComponent } from './addclasse/addclasse.component';
import { ListMatieresComponent } from './list-matieres/list-matieres.component';
import { UpdateMatiereComponent } from './update-matiere/update-matiere.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { ListSpecialitesComponent } from './list-specialites/list-specialites.component';
import { UpdateSpecialiteComponent } from './update-specialite/update-specialite.component';
import { AddSpecialiteComponent } from './add-specialite/add-specialite.component';
import { ListMModulesComponent } from './list-mmodules/list-mmodules.component';
import { UpdatemoduleComponent } from './updatemodule/updatemodule.component';
import { AddmoduleComponent } from './addmodule/addmodule.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChefDepartementDashboardComponent } from './chef-departement-dashboard/chef-departement-dashboard.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { LoginComponent } from './login/login.component';
import { EmployeeService } from './Services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ListClassesComponent,
    UpdateClasseComponent,
    EtudiantCreateComponent,
    EtudiantReadComponent,
    EtudiantUpdateComponent,
    EtudiantListComponent,
    AddclasseComponent,
    ListMatieresComponent,
    UpdateMatiereComponent,
    AddMatiereComponent,
    ListSpecialitesComponent,
    UpdateSpecialiteComponent,
    AddSpecialiteComponent,
    ListMModulesComponent,
    UpdatemoduleComponent,
    AddmoduleComponent,
    NoteListComponent,
    NoteCreateComponent,
    FooterComponent,
    DashboardComponent,
    NavbarComponent,
    ChefDepartementDashboardComponent,
    AgentDashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),// Ajoutez withFetch() ici
    EmployeeService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
