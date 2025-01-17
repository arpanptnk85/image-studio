import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../modules/icons/icons.module';
import { 
  faHomeAlt,
  faUpload,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, IconsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  fasUpload = faUpload;
  fasHomeAlt = faHomeAlt;
  fasIndustry = faIndustry;
}
