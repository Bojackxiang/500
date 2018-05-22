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
        "https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg",
      caption: "The first slide",
      href: "#config"
    },
    {
      url:
        "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg"
    },
    {
      url:
        "https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg",
      caption: "Apple TV",
      href: "https://www.apple.com/"
    },
    "https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg"
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
