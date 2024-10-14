import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent2 } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent2, config);

export default bootstrap;
