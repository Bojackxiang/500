import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slide-show",
  templateUrl: "./slide-show.component.html",
  styleUrls: ["./slide-show.component.css"]
})
export class SlideShowComponent implements OnInit {
  imageUrls = [
    {
      url:
        "../../../assets/banners/banner1.jpg",
      caption: "The first slide",
      href: "#config"
    },
    {
      url:
      "../../../assets/banners/banner2.jpg",
    },
    {
      url:
      "../../../assets/banners/banner3.jpg",
      caption: "Apple TV",
      href: "https://www.apple.com/"
    },
    
  ];
  height: string = "400px";
  minHeight: string;
  arrowSize: string = "30px";
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = true;
  backgroundSize: string = "cover";
  backgroundPosition: string = "center center";
  backgroundRepeat: string = "no-repeat";
  showDots: boolean = true;
  dotColor: string = "#FFF";
  showCaptions: boolean = true;
  captionColor: string = "#FFF";
  captionBackground: string = "rgba(0, 0, 0, .35)";
  lazyLoad: boolean = false;
  width: string = "100%";

  constructor() {}

  ngOnInit() {}

  banner = [
    "../../../assets/banners/banner1.jpg",
    "../../../assets/banners/banner2.jpg",
    "../../../assets/banners/banner3.jpg"
  ];

  number = 0;
  showImg = this.banner[0];

  change(event) {
    var targetId = Number(event.target["id"]) - 1;
    this.showImg = this.banner[targetId];
  }
}
