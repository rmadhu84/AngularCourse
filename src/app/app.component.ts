import { Component } from "@angular/core";
import { User } from "./address-card/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  inputText: string = "Initial Value";
  inputUser: User;

  constructor() {
    this.inputUser = new User();
    this.inputUser.name = "Madhu Ramachandran";
    this.inputUser.designation = "Software Developer";
    this.inputUser.address = "2350, Club Meridian Dr, A06";
    this.inputUser.phone = ["517-507-9422", "517-455-9202"];
  }
}
