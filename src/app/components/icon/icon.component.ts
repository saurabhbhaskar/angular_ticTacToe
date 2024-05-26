import { Component, OnInit, Input } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements OnInit {
  // getting from app.component.ts
  @Input() iconName: string = '';

  // to use icons in the icon.component.html
  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;
  constructor() {}

  ngOnInit(): void {}
}
