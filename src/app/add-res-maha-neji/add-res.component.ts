import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { residences } from '../model-maha-neji/model.module';
import { ServiceService } from '../feature-maha-neji/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-res',
  templateUrl: './add-res.component.html',
  styleUrls: ['./add-res.component.css']
})
export class AddResComponent {
  residence: residences = new residences();

  constructor(
    private service: ServiceService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.service.addSuggestion(this.residence).subscribe({
      next: () => {
        this.router.navigate(['/residences']);
      },
      error: (err: unknown) => {
        console.error('Erreur lors de l’ajout de la résidence', err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/residences']);
  }
}
