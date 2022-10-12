import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { GooglePayButtonModule } from "@google-pay/button-angular";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, GooglePayButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
