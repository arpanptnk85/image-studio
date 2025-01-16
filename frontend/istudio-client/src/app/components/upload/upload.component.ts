import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

  imageFormats = [
    "image/png",
    "image/jpg",
    "image/jpeg",
  ]; // Accept only 
  selectedFiles: any = [];
  filesMetaData: any = {};
  isStatsVisible: boolean = false;

  handleSelectedFiles(e: any) {
    const files: any[] = e.target.files;
    for (let file of files) {
      if (this.imageFormats.includes(file.type)) {
        this.selectedFiles.push(file);
      }
    }
  }

  handleNext() {
    const files: any[] = this.selectedFiles;
    if (this.selectedFiles.length > 0) {
      const metaData: any = {
        fileCount: files.length,
        totalSize: 0,
        fileNames: [],
      };
      for (const file of files) {
        metaData.totalSize += file.size;
        metaData.fileNames.push(file.name);
      }
      this.filesMetaData = metaData;
      this.selectedFiles = [];
      this.isStatsVisible = true;
    }
  }

  uploadFiles() {
    if (this.selectedFiles) {
      console.log("Uploading...");
    }
  }

}
