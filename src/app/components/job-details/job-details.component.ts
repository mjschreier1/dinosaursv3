import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service'
import { Jobs } from '../../models/Jobs'

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobs: Jobs;

  constructor(public jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs
    })
  }

}
