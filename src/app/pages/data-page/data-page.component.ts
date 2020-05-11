import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.sass']
})
export class DataPageComponent implements OnInit {
  currentTime = new Date().toISOString()

  data = [
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
      propertyName: 'open_issues_count',
      value: undefined
    }
  ];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toISOString();
    }, 1000);
    this.githubService.getRepo().subscribe(data => {
      console.log(data);
      this.data = this.data.map((item) => ({ ...item, value: data[item.propertyName] ? data[item.propertyName] : item.value }));
    });
  }

}
