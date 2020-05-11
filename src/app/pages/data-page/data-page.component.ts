import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.sass']
})
export class DataPageComponent implements OnInit {
  data = [
    {
      propertyName: 'Current Date',
      value: new Date().toISOString()
    },
    {
      propertyName: 'Repository Name',
      value: undefined
    },
    {
      propertyName: 'watchers_count',
      value: undefined
    },
    {
      propertyName: 'forks_count',
      value: undefined
    },
    {
      propertyName: 'network_count',
      value: undefined
    },
    {
      propertyName: 'subscribers_count',
      value: undefined
    },
    {
      propertyName: 'open_issues_count ',
      value: undefined
    }
  ];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepo().subscribe(data => {
      console.log(data);
      this.data.reduce((prev, curr) => {
        return {
          ...curr, value: data[curr.propertyName]
        };
      });
    });
  }

}
