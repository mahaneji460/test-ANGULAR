import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { residences } from '../model-maha-neji/model.module';
import { ServiceService } from '../feature-maha-neji/service.service';

@Component({
  selector: 'app-detailes-res',
  templateUrl: './detailes-res.component.html',
  styleUrls: ['./detailes-res.component.css']
})
export class DetailesResComponent implements OnInit {
  residence?: residences;
  loading = true;
  error?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Identifiant invalide';
      this.loading = false;
      return;
    }

    this.service.getSuggestionById(id).subscribe({
      next: (res: residences) => {
        // backend retourne directement la résidence (pas {success, suggestion})
        this.residence = (res as unknown) as residences;
        this.loading = false;
      },
      error: (err: unknown) => {
        this.error = 'Erreur lors du chargement de la résidence';
        this.loading = false;
      }
    });
  }

  backToList(): void {
    this.router.navigate(['/residences']);
  }
}
