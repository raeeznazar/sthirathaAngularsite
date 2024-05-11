import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-index3',
  templateUrl: './index3.component.html',
  styleUrls: ['./index3.component.scss']
})
export class Index3Component implements OnInit {


  data = [
    {title : 'DIGITAL PRINTING',
      src:"assets/images/home/bg-home4.jpg",
      tag: "Turning your brightest ideas into stunning visuals with unparalleled precision, speed, and creativity where every print tells a story"
    },
    {title : 'PHOTOCOPY SERVICE',
      src:"assets/images/home/photostat.png",
      tag: "We provide best quality colour photocopy and mono colour photocopy"
    },
    {title : 'HARD BINDING',
      src:"assets/images/home/hand-binding.png",
      tag: "Crafting Durability, Preserving Quality: Expert Hard Book Binding."
    },
    {title : 'ID CARD PRINTING',
      src:"assets/images/home/id-png.png",
      tag: "Precision ID Card Printing: Secure, Professional, Customized"
    },
    {title : 'PRE INK STAMPS',
      src:"assets/images/home/stamp-png.png",
      tag: "Efficient Stamping Solutions: Pre-Inked for Precision and Clarity"
    },
    {title : 'SPIRAL BINDING',
      src:"assets/images/home/spiral-binding.png",
      tag: "Secure and Stylish: Premium Spiral Binding for All Your Documents."
    }
  ]

  constructor() {}

  ngOnInit() {
  }
  
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><i class="mdi mdi-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="mdi mdi-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024, // for screens >= 1024px wide
        settings: {
          arrows: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // for screens >= 768px wide
        settings: {
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  };









}
