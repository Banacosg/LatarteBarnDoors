import { Component } from '@angular/core';
import { GalleryItem } from './gallery';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css',
})
export class GallaryComponent {
  gallery: GalleryItem[] = [
    {
      image:
        'https://t3.ftcdn.net/jpg/04/19/75/40/360_F_419754096_IovlmWLaT1qXd1B7H0x9UxGxwmyQwCX4.jpg',
      city: 'San Francisco',
      state: 'California',
      country: 'USA',
      description:
        "This barn door changed my life. Every day I wake up and look out the window and see that mass of wood. The beautiful grain, smooth yet rugged. I recommend with my whole heart Latarte's Barn Doors.",
    },
    {
      image:
        'https://thumbs.dreamstime.com/b/rustic-barn-doors-wooden-pattern-them-65266177.jpg',
      city: 'Toronto',
      state: 'Ontario',
      country: 'Canada',
      description:
        'The moment we installed this barn door, our home felt transformed. It’s more than just a door; it’s a statement piece with exquisite craftsmanship. The rustic charm and solid build of Latarte’s Barn Doors have exceeded all our expectations. Highly recommended!',
    },
    {
      image:
        'https://c8.alamy.com/comp/EX628E/old-double-wooden-cross-braced-shop-doors-with-faded-peeling-paint-EX628E.jpg',
      city: 'Melbourne',
      state: 'Victoria',
      country: 'Australia',
      description:
        'I can’t stop admiring this barn door. It’s not just functional but a true work of art. The attention to detail and the quality of the wood are unparalleled. Every time I pass by it, I feel a sense of pride in my home. Latarte’s Barn Doors are worth every penny!',
    },
    {
      image:
        'https://www.shutterstock.com/image-photo/red-old-barn-door-600nw-192175187.jpg',
      city: 'Munich',
      state: 'Bavaria',
      country: 'Germany',

      description:
        'Our new barn door from Latarte has brought a fresh, stylish touch to our living space. The rich texture and perfect finish make it a focal point in the room. It’s sturdy, beautiful, and an absolute delight. I wouldn’t hesitate to recommend it to anyone!',
    },
    {
      image:
        'https://as2.ftcdn.net/v2/jpg/02/15/03/83/1000_F_215038301_VwWekJOkWyt2XGUEnwJ8Lxzok2WzxlUJ.jpg',
      city: 'Tokyo',
      state: 'Tokyo',
      country: 'Japan',
      description:
        'This barn door is simply stunning. From the intricate grain patterns to the flawless installation, it has brought a touch of elegance and rustic charm to our home. Latarte’s Barn Doors are top-notch and worth every bit of the investment!',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/06/96/38/71/360_F_696387125_szGI4iygMYJGwVZEK1lUHWWNsCqjhin1.jpg',
      city: 'Paris',
      state: 'Île-de-France',
      country: 'France',
      description:
        'Installing this barn door was one of the best decisions we’ve made for our home. It’s a perfect blend of functionality and aesthetics. The craftsmanship is exceptional, and the quality is evident in every detail. Latarte’s Barn Doors are truly exceptional!',
    },
    {
      image:
        'https://c8.alamy.com/comp/HNM2PF/old-barn-wooden-bracing-frame-with-zinc-sheet-door-HNM2PF.jpg',
      city: 'São Paulo',
      state: 'São Paulo',
      country: 'Brazil',
      description:
        'I’m amazed by the transformation this barn door has brought to our space. The design is sophisticated yet rustic, and the build quality is impeccable. It’s more than just a door; it’s a piece of art. I wholeheartedly recommend Latarte’s Barn Doors to anyone looking for a stylish upgrade!',
    },
  ];
  // imageUrl: string[] = [
  //   'https://t3.ftcdn.net/jpg/04/19/75/40/360_F_419754096_IovlmWLaT1qXd1B7H0x9UxGxwmyQwCX4.jpg',
  //   'https://thumbs.dreamstime.com/b/rustic-barn-doors-wooden-pattern-them-65266177.jpg',
  //   'https://c8.alamy.com/comp/EX628E/old-double-wooden-cross-braced-shop-doors-with-faded-peeling-paint-EX628E.jpg',
  //   'https://www.shutterstock.com/image-photo/red-old-barn-door-600nw-192175187.jpg',
  //   'https://as2.ftcdn.net/v2/jpg/02/15/03/83/1000_F_215038301_VwWekJOkWyt2XGUEnwJ8Lxzok2WzxlUJ.jpg',
  //   'https://t4.ftcdn.net/jpg/06/96/38/71/360_F_696387125_szGI4iygMYJGwVZEK1lUHWWNsCqjhin1.jpg',
  //   'https://c8.alamy.com/comp/HNM2PF/old-barn-wooden-bracing-frame-with-zinc-sheet-door-HNM2PF.jpg',
  // ];
}
