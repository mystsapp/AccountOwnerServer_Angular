import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/_interfaces/owner.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-delete',
  templateUrl: './owner-delete.component.html',
  styleUrls: ['./owner-delete.component.css']
})
export class OwnerDeleteComponent implements OnInit {
  errorMessage = '';
  owner: Owner;

  constructor(private repository: RepositoryService,
    private errorHandler: ErrorHandlerService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getOwnerById();
  }

  getOwnerById() {
    const ownerId = this.activeRoute.snapshot.params.id;
    const ownerByIdUrl = `api/owner/${ownerId}`;

    this.repository.getData(ownerByIdUrl)
      .subscribe(res => {
        this.owner = res as Owner;
      }, (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      });
  }

  redirectToOwnerList() {
    this.router.navigate(['/owner/list']);
  }

  deleteOwner() {
    const deleteUrl = `api/owner/${this.owner.id}`;

    this.repository.delete(deleteUrl)
      .subscribe(res => {
        $('#successModal').modal();
      }, (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      });
  }

}
