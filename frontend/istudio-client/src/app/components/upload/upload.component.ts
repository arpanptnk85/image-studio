import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import * as componentData from './data';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {

  imageFormats = componentData.validImageFormats; // Accept only 
  selectedFiles: any = [];
  filesMetaData: any = {};
  isStatsVisible: boolean = false;
  batchName: string = "";
  batchJobID: string = "";
  batchTimestamp: string = "";
  batchComment: string = "";

  getBatchTimestamp() {
    let today: any = new Date();
    return today.toISOString();
  }

  getBatchID() {
    const uuid: string = crypto.randomUUID();
    return uuid;
  }

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
      this.batchJobID = this.getBatchID();
      this.batchTimestamp = this.getBatchTimestamp();
      this.filesMetaData = metaData;
      this.isStatsVisible = true;
    }
  }

  bytesToMegabytes(value: number) {
    if (value === null || value === undefined) {
      return value;
    }
    const valueMB = (value * 0.000001).toFixed(2);
    return valueMB.toString();
  }

  uploadFiles() {
    if (
      this.selectedFiles.length > 0 &&
      this.batchName.length >= 5
    ) {
      console.log("Uploading...");
      const data: any = {
        job_name: this.batchName,
        job_id: this.batchJobID,
        job_files: this.selectedFiles,
        job_timestamp: this.batchTimestamp,
        job_description: this.batchComment,
      }
      console.log(data);
      this.resetUploadForm();
    }
  }

  resetUploadForm() {
    this.selectedFiles = [];
    this.batchName = "";
    this.batchJobID = "";
    this.batchComment = "";
    this.batchTimestamp = "";
    this.filesMetaData = {};
    setTimeout(() => {
      this.isStatsVisible = false;
    }, 2000);
  }

}
