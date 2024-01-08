import { Component } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl:String;
  constructor(private imageService: ImageServiceService) {
    const imageName = 'example.jpg'; // Replace with the actual image name
    this.imageUrl = this.imageService.getImageUrl(imageName);
  }

}
