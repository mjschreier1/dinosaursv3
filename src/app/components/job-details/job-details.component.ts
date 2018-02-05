import { Component, OnInit, ViewChild } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Jobs } from '../../models/Jobs';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobs: Jobs;
  @ViewChild(InputFormComponent) inputForm;

  constructor(public jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs
    })
  }

}
