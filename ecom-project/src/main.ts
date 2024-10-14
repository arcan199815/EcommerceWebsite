import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent2 } from './app/app.component';

bootstrapApplication(AppComponent2, appConfig)
  .catch((err) => console.error(err));
