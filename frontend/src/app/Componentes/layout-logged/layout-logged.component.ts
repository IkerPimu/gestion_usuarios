import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-logged',
  imports: [],
  templateUrl: './layout-logged.component.html',
  styleUrl: './layout-logged.component.css'
})
export class LayoutLoggedComponent {
  private router!: Router;
  logout(){
    window.sessionStorage.clear();
    this.router.navigate(['/verUsuarios']);
  }

}
