import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importez FormsModule ici
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [[FormsModule],[HttpClientModule],[NgIf]],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})
export class UserModalComponent implements OnInit {
testId= 0;
  ngOnInit(): void {
    this.testId = this.route.snapshot.params['id'];
    this.isAddMode = !this.testId;
    console.log('isAddMode:', this.isAddMode);
    console.log(this.testId);

}

user = {
    nom: '',
    email: '',
    num_tel: ''
  };
  isAddMode = true;
  constructor(
    private http: HttpClient,
     private router: Router,
     private route: ActivatedRoute,
  ) { }

  onSubmit(): void {
    this.http.post('http://localhost:8081/user/add', this.user)
      .subscribe(response => {
        this.router.navigate(['/user']);
      });
  }

  edit(): void {
const user_put={
  id : this.testId,
  nom: this.user.nom,
  email: this.user.email,
  num_tel: this.user.num_tel
}

    // this.http.put('http://localhost:8081/edit/${this.testId}', user_put)
    this.http.put(`http://localhost:8081/user/edit/${this.testId }` , user_put)
    .subscribe(response => {
      console.log(this.testId);
      this.router.navigate(['/user']);
    });
  }
}