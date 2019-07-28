import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/_interfaces/owner.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[];
  errorMessage = '';

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.getAllOwner();
  }

  public getAllOwner() {
    const addressUrl = 'api/owner';
    this.repository.getData(addressUrl)
      .subscribe(res => {
        this.owners = res as Owner[];
      }, error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      });
  }

  getOwnerDetails(id) {
    const detailsUrl = `/owner/details/${id}`;
    this.router.navigate([detailsUrl]);
  }

  redirectToUpdatePage(id) {
    const updateUrl = `owner/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  redirectToDeletePage(id) {
    const deleteUrl = `owner/delete/${id}`;
    this.router.navigate([deleteUrl]);
  }

}
