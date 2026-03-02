import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../feature-maha-neji/service.service';
import { residences } from '../model-maha-neji/model.module';

@Component({
  selector: 'app-list-res',
  templateUrl: './list-res.component.html',
  styleUrls: ['./list-res.component.css']
})
export class ListResComponent implements OnInit {

  residences: residences[] = [];

  constructor(
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.loadResidences();
  }

  private loadResidences(): void {
    this.service.getSuggestionList().subscribe({
      next: (data: residences[]) => {
        this.residences = data;
      },
      error: (err: unknown) => {
        console.error('Erreur lors du chargement des résidences', err);
      }
    });
  }

  viewDetails(id: number | undefined) {
    if (id != null) {
      this.router.navigate(['/residence-details', id]);
    }
  }

  updateResidence(id: number | undefined) {
    if (id != null) {
      this.router.navigate(['/update-residence', id]);
    }
  }

  deleteResidence(id: number | undefined) {
    if (id != null) {
      this.router.navigate(['/delete-residence', id]);
    }
  }
}