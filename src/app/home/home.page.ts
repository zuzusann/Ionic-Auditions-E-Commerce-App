import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  selectedSegment: string = 'all';

  auditions = [
    { title: 'Summer Season Audition', status: 'Available', color: 'success', image: '../../assets/image1.avif' },
    { title: 'Winter Season Audition', status: 'Ongoing', color: 'warning', image: '../../assets/image4.avif' },
    { title: 'Past Audition', status: 'Finished', color: 'tertiary', image: '../../assets/image3.avif' },
    { title: 'Past Audition', status: 'Finished', color: 'tertiary', image: '../../assets/image5.avif' },
    { title: 'Past Audition', status: 'Finished', color: 'tertiary', image: '../../assets/image2.avif' }
  ];

  constructor() {}

  getFilteredAuditions(){
    if(this.selectedSegment === 'all'){
      return this.auditions;
    }
    return this.auditions.filter(audition => audition.status === this.selectedSegment);
  }

}
