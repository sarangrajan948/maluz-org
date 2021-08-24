import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Malavikamohanan';
  langall = false;
  langmal = false;
  totalLength:32;
  page:number=1;
  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  languages = ['All', 'Malayalam', 'Tamil', 'Hindi']

  slides = [
    { img: "./assets/images/pattam.webp" },
    { img: "./assets/images/nir.webp" },
    { img: "./assets/images/naan11.webp" },
    { img: "./assets/images/great.webp" },
    { img: "./assets/images/beyond.webp" },
    { img: "./assets/images/petta.webp" },
    { img: "./assets/images/master11.jpg" },
    { img: "./assets/images/yudra.webp" },
    { img: "./assets/images/d43.webp" },
  ]
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 2000 };

  portfolio = [

    { img: "./assets/images/51.jpeg" },
    { img: "./assets/images/52.jpeg" },
    { img: "./assets/images/53.jpeg" },
    { img: "./assets/images/54.jpeg" },

    { img: "./assets/images/73.jpeg" },
    { img: "./assets/images/72.jpeg" },
    { img: "./assets/images/71.jpeg" },
    { img: "./assets/images/74.jpeg" },



    { img: "./assets/images/64.jpeg" },
    { img: "./assets/images/61.jpeg" },
    { img: "./assets/images/62.jpeg" },
    { img: "./assets/images/63.jpeg" },



    { img: "./assets/images/malavika.jpeg" },
    { img: "./assets/images/malavika1.jpeg" },
    { img: "./assets/images/malavika3.jpeg" },
    { img: "./assets/images/malavika4.jpeg" },


    { img: "./assets/images/malgal4.webp" },
    { img: "./assets/images/malgal5.webp" },
    { img: "./assets/images/malgal6.webp" },
    { img: "./assets/images/malgal7.webp" },

    { img: "./assets/images/3.webp" },
    { img: "./assets/images/14.webp" },
    { img: "./assets/images/portfolio9.webp" },
    { img: "./assets/images/15.webp" },

    // { img: "./assets/images/portfolio5.jpg" },
    // { img: "./assets/images/portfolio7.jpg" },
    // { img: "./assets/images/portfolio8.jpg" },
    // { img: "./assets/images/portfolio6.jpg" },

    { img: "./assets/images/malgal.webp" },
    { img: "./assets/images/maalgal10.webp" },
    { img: "./assets/images/maalgal.webp" },
    { img: "./assets/images/malgal9.webp" },

    // { img: "./assets/images/554.jpeg" },
    // { img: "./assets/images/552.jpeg" },
    // { img: "./assets/images/553.jpeg" },
    // { img: "./assets/images/551.jpeg" },


    { img: "./assets/images/galll.webp" },
    { img: "./assets/images/galll2.webp" },
    { img: "./assets/images/galll10.webp" },
    { img: "./assets/images/galll1.webp" },



  ]

  drawing = [
    { img: "./assets/images/rvidyadigambar.webp" },
    { img: "./assets/images/rdraw1.webp" },
    { img: "./assets/images/draw4.webp" },
    { img: "./assets/images/draw.webp" },

    // { img: "./assets/images/sketchbox.JPG" },
    // { img: "./assets/images/draw5.jpg" },
    // { img: "./assets/images/draw3.jpg" },
    // { img: "./assets/images/draw6.jpeg" },

    // { img: "./assets/images/draw7.jpg" },
    // { img: "./assets/images/draw8.jpg" },
    // { img: "./assets/images/draw9.jpg" },
    // { img: "./assets/images/draw11.jpg" },
  ]


  onChange(event) {
    console.log(event);

    if (event == this.langall) {
      this.langall = true;
    }
    else if (event == this.langmal) {
      this.langmal = true;
    }

  }


}
