import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-content">
      <h1>Hello, host-app</h1>
      <p>Welcome! Select MFE1 or MFE2 from the navigation above to load a microfrontend.</p>
    </div>
  `,
  styles: [
    `
      .home-content {
        text-align: center;
        padding: 2rem;
      }
      .home-content h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      .home-content p {
        color: #666;
      }
    `,
  ],
})
export class HomeComponent {}
