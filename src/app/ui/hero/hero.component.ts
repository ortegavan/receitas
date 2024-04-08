import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [
        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        ButtonModule,
    ],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent {}
