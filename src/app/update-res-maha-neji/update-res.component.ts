import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { residences } from '../model-maha-neji/model.module';
import { ServiceService } from '../feature-maha-neji/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-res',
  templateUrl: './update-res.component.html',
  styleUrls: ['./update-res.component.css']
})
export class UpdateResComponent implements OnInit {
  residence: residences = new residences();
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.loading = false;
      return;
    }

    this.service.getSuggestionById(id).subscribe({
      next: (res: residences) => {
        this.residence = (res as unknown) as residences;
        this.loading = false;
      },
      error: (err: unknown) => {
        console.error('Erreur lors du chargement de la résidence', err);
        this.loading = false;
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || !this.residence.id) {
      return;
    }

    this.service.updateSuggestion(this.residence.id, this.residence).subscribe({
      next: () => {
        this.router.navigate(['/residences']);
      },
      error: (err: unknown) => {
        console.error('Erreur lors de la mise à jour de la résidence', err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/residences']);
  }
}
