import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../feature-maha-neji/service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id?: number;
  loading = false;
  error?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {
    const param = this.route.snapshot.paramMap.get('id');
    this.id = param ? Number(param) : undefined;
  }

  confirmDelete(): void {
    if (this.id == null) {
      this.error = 'Identifiant invalide';
      return;
    }

    this.loading = true;
    this.service.deleteSuggestion(this.id).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/residences']);
      },
      error: (err: unknown) => {
        this.loading = false;
        this.error = 'Erreur lors de la suppression';
        console.error(err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/residences']);
  }
}
