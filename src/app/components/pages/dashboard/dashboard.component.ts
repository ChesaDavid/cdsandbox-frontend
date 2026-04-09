import {Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

interface ProjectResponse {
  id: string;
  name: string;
  description: string;
  ownerId: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  projects = signal<any[]>([]);

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    const userId = this.authService.currentUser().id;
    this.http.get<any[]>(`http://localhost:5154/api/projects/user/${userId}`).subscribe({
      next: (data) => this.projects.set(data),
      error: (err) => console.error("Could not load projects", err)
    });
  }

  authService = inject(AuthService);
  private http = inject(HttpClient);

  linkProfile = "localhost:4200/profile";
  currentUser = this.authService.currentUser;
  isSidebarVisible = signal(true)

  toggleSidebarVisibility() {
    this.isSidebarVisible.set(!this.isSidebarVisible);
    console.log(this.isSidebarVisible());
  }
  showNewProjectModal = signal(false);
  projectName = '';
  projectDescription = '';

  private generateEntryCode():string{
    const segment = () => Math.floor(100 + Math.random() * 900).toString()
    return `${segment()}-${segment()}-${segment()}-${segment()}-${segment()}-${segment()}`;
  }

  createProject() {
    const newProject = {
      Name: this.projectName,
      Description: this.projectDescription,
      OwnerId: this.authService.currentUser().id,
      EntryCode: this.generateEntryCode(),
      Language: 'nodejs'
    };

    this.http.post('http://localhost:5154/api/projects', newProject).subscribe({
      next: (res:any) => {
        console.log("Proiect creat cu key:", res.entryCode);
        this.showNewProjectModal.set(false);
        this.projectName = '';
        this.projectDescription = '';
      },
      error:(err:any) => {
        console.log("Error creating project: ", err);
      }
    });

  }
}
