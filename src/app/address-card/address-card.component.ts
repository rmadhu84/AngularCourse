import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { User } from "./user.model";

@Component({
  selector: "app-address-card",
  templateUrl: "./address-card.component.html",
  styleUrls: ["./address-card.component.css"],
})
export class AddressCardComponent implements OnInit {
  @Input("user2") user: User;
  @Input("state") state: string;
  @Input("zip") zip: number;
  isCollapsed: boolean = true;
  constructor() {}
  ngOnInit() {}
  toggleCollaspse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
