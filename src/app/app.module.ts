import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiConfiguration, ApiConfigurationInterface } from 'src/app/core/api/api-configuration';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ApiConfiguration,
      useValue: { rootUrl: 'root_api_url_here' } as ApiConfigurationInterface
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
