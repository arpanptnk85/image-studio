import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../../modules/icons/icons.module';
import { 
  faAnglesRight, 
  faDatabase, 
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-preprocess',
  standalone: true,
  imports: [CommonModule, FormsModule, IconsModule],
  templateUrl: './preprocess.component.html',
  styleUrl: './preprocess.component.scss',
})
export class PreprocessComponent {
  fasAnglesRight = faAnglesRight;
  fasDatabase = faDatabase;
  fasChevronLeft = faChevronLeft;
  fasChevronRight = faChevronRight;
  datasets: any[] = [
    { id: 1, name: 'train_batch01' },
    { id: 2, name: 'train_batch02' },
    { id: 3, name: 'train_batch03' },
    { id: 4, name: 'train_batch04' },
    { id: 5, name: 'train_batch05' },
    { id: 6, name: 'train_batch06' },
    { id: 7, name: 'train_batch07' },
    { id: 8, name: 'train_batch08' },
    { id: 9, name: 'train_batch09' },
    { id: 10, name: 'train_batch10' },
    { id: 11, name: 'train_batch11' },
    { id: 12, name: 'train_batch12' },
    { id: 13, name: 'train_batch13' },
    { id: 14, name: 'train_batch14' },
    { id: 15, name: 'train_batch15' },
    { id: 16, name: 'train_batch16' },
  ];

  selectedDatasetID: number | null = null;
  selectedDataset: any | null = null;

  onDatasetClick(datasetID: number) {
    this.selectedDatasetID = datasetID;
  }
  
  loadDataset() {
    if (this.selectedDatasetID) {
      const data = this.datasets.filter((item) => item.id === this.selectedDatasetID);
      try {
        this.selectedDataset = data[0];
      } catch(err) {
        console.log(err);
      }
    }
  }
}
