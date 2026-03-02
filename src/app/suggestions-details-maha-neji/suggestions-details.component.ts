import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../feature/service.service';
import { Residence } from '../model/model.module';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {

  residence!: Residence;  

  constructor(
    private route: ActivatedRoute,
    private suggestionService: ServiceService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.suggestionService.getSuggestionById(id).subscribe({
      next: (data) => {
        this.residence = data;   // ⚠️ dépend du retour de ton API
      },
      error: (err) => console.error('Error fetching residence:', err)
    });
  }
}