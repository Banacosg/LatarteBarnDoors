import { Injectable } from '@angular/core';
import { Review } from './reviews';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  assetsPath: string = '../../assets/faces/';
  reviews: Review[] = [
    {
      photo: this.assetsPath + 'Face.jpeg',
      name: 'Sven',
      stars: 5,
      comment:
        "I couldn't be happier with the Gobi Desert barn door! Its weathered finish and solid build bring a rustic charm that perfectly complements my farmhouse decor. Every time I walk through it, I'm reminded of the vastness and beauty of the desert.",
    },
    {
      photo: this.assetsPath + 'Face (1).jpeg',
      name: 'Eva',
      stars: 4,
      comment:
        "The Amsterdam Canal barn door is a true masterpiece. Its intricate design and sturdy construction make it a focal point in my home. It's not just a door; it's a piece of history and art that adds character to my living space.",
    },
    {
      photo: this.assetsPath + 'Face (2).jpeg',
      name: 'Diego',
      stars: 5,
      comment:
        "Absolutely love my Patagonia Peaks barn door! The craftsmanship is impeccable, and it fits perfectly with my mountain-themed decor. It's more than just a door; it's a conversation starter that brings the rugged beauty of Patagonia right into my home.",
    },
    {
      photo: this.assetsPath + 'Face (3).jpeg',
      name: 'Layla',
      stars: 4,
      comment:
        "The Dubai Dunes barn door exceeded my expectations. Its elegant design and rich color add a touch of luxury to my living room. It's not only functional but also a statement piece that reflects the sophistication of Middle Eastern architecture.",
    },
    {
      photo: this.assetsPath + 'Face (4).jpeg',
      name: 'Sophie',
      stars: 5,
      comment:
        "The Provence Lavender barn door is simply enchanting. Its soft hues and floral patterns evoke the serene beauty of the French countryside. It's more than just a door; it's a work of art that brings a piece of Provence into my home.",
    },
    {
      photo: this.assetsPath + 'Face (5).jpeg',
      name: 'Kenji',
      stars: 4,
      comment:
        "I'm impressed with the Kyoto Zen barn door. Its minimalist design and smooth sliding mechanism create a sense of calm in my home office. It's both functional and aesthetically pleasing, adding a touch of Japanese serenity to my space.",
    },
    {
      photo: this.assetsPath + 'Face (6).jpeg',
      name: 'Marcela',
      stars: 5,
      comment:
        "The Rio Carnival barn door is a burst of joy in my hallway! Its vibrant colors and festive patterns instantly lift my mood every time I see it. It's more than just a door; it's a celebration of Brazilian culture that brings energy and life into my home.",
    },
    {
      photo: this.assetsPath + 'Face (7).jpeg',
      name: 'Liam',
      stars: 4,
      comment:
        "I'm really impressed with the Savannah Sunset barn door. Its craftsmanship is top-notch, and it slides effortlessly. It adds a touch of elegance and modernity to my farmhouse aesthetic, perfectly blending functionality with style.",
    },
    {
      photo: this.assetsPath + 'Face (8).jpeg',
      name: 'Yuki',
      stars: 5,
      comment:
        "I absolutely adore my Tokyo Sakura barn door! The delicate cherry blossom design is breathtaking, and the quality is exceptional. It's not just a door; it's a piece of art that brings a sense of tranquility and beauty from Japan into my home.",
    },
    {
      photo: this.assetsPath + 'Face (9).jpeg',
      name: 'Greta',
      stars: 4,
      comment:
        "The Bavarian Alps barn door is a perfect addition to my kitchen. Its warm wood and Alpine-inspired design create a cozy atmosphere. It's well-made and durable, adding a touch of rustic charm that I love.",
    },
    {
      photo: this.assetsPath + 'Face (10).jpeg',
      name: 'Amir',
      stars: 5,
      comment:
        "I'm blown away by the Cairo Citadel barn door! Its intricate patterns and robust build reflect the rich history and craftsmanship of Egypt. It's not just a door; it's a piece of art that makes a bold and elegant statement in my home.",
    },
    {
      photo: this.assetsPath + 'Face (11).jpeg',
      name: 'Nikoleta',
      stars: 4,
      comment:
        "The Athens Acropolis barn door is more than just a functional piece—it's a homage to Greek architecture and history. Its design is striking yet refined, making it a standout feature in my living room that sparks conversation.",
    },
    {
      photo: this.assetsPath + 'Face (12).jpeg',
      name: 'Étienne',
      stars: 5,
      comment:
        "I'm delighted with my Montreal Maple barn door! Its rich maple wood and smooth finish add warmth and character to my home. It's beautifully crafted and has become the focal point of my Canadian-themed decor.",
    },
    {
      photo: this.assetsPath + 'Face (13).jpeg',
      name: 'Jolene',
      stars: 4,
      comment:
        "I love my Rio Grande rocking chair! It's not just comfortable but also beautifully made. It fits perfectly on my porch, where I enjoy relaxing evenings with a book and a cup of tea. The craftsmanship is evident, and it adds a touch of southern charm to my home.",
    },
  ];

  constructor() {}

  getReviews() {
    return this.reviews;
  }
}
