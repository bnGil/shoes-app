import axios from "axios";

export const API = axios.create({
  baseURL: "https://6290d729665ea71fe13bdd00.mockapi.io",
});

// [
//   {
//     "name": "Nike Air Force 1 '07",
//     "description": "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.",
//     "price": "499.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-ZLZpmn.png",
//     "id": "1"
//   },
//   {
//     "name": "Nike Air Max 95 Premium",
//     "description": "For style that's as natural as it looks, let the Nike Air Max 95 Premium be your guide. Taking inspiration from the human body and '90s athletics aesthetics, this icon mixes unbelievable comfort with head-turning style. From suedes to textured full-grain leather to airy mesh, the upper gets the crème de la crème of materials while keeping the iconic side panels. Cool colours add a contemporary feel while visible Air in the heel and forefoot cushions your journey.",
//     "price": "799.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/71be58fe-0c07-4861-8894-def02e47bb63/air-max-95-shoe-fKj1WC.png",
//     "id": "2"
//   },
// {
//   "name": "Nike Air Presto",
//   "description": "With a sleek design that's more comfortable than your favourite T-shirt, the Nike Air Presto is made to feel good and look fast. Its stretchy sleeve creates a cosy, sock-like fit while the super-soft foam adds spring to your step.Put them on and you'll never want to take them off.",
//   "price": "549.90",
//   "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png",
//   "id": "3"
//  },
//   {
//     "name": "Nike Air Max 90",
//     "description": "Built on the classic Waffle outsole, with stitched overlays and TPU accents, the Nike Air Max 90 is the unmistakable sneaker you know and love. This version has ice-cold colours with pinwheel details. A hanging charm tops off the look.",
//     "price": "669.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28b1ea02-d216-4151-8035-7583d125106d/air-max-90-shoes-t7CFSd.png",
//     "id": "4"
//   },
//   {
//     "name": "Nike Air Max 97",
//     "description": "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort.",
//     "price": "799.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fjfip8ga1ep22vhxdcew/air-max-97-shoe-z3TlrlVN.png",
//     "id": "5"
//   },
//   {
//     "name": "Nike SB Chron 2",
//     "description": "Flexible and breathable, the Nike SB Chron 2 is a sequel worthy of its predecessor.The revamped design includes a reshaped collar and heel for an improved fit—all while maintaining the comfort and performance you expect from Nike SB.",
//     "price": "269.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/10a5d4a8-6726-4986-b096-c6ce78b129e7/sb-chron-2-skate-shoe-zr8R7R.png",
//     "id": "6"
//   },
//   {
//     "name": "LeBron Witness 6",
//     "description": "For this iteration of the LeBron Witness, we swapped out Zoom Air for visible Max Air cushioning—LeBron's favourite—to help dissipate impact forces and provide a responsive sensation.The lightweight, reinforced mesh upper keeps you contained all round, from the webbing that harnesses your forefoot to the external moulded pieces that lock in your heel.",
//     "price": "459.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1f33d975-61de-4db6-9082-a69de03a575b/lebron-witness-6-basketball-shoes-ZW0zn5.png",
//     "id": "7"
//   },
//   {
//     "name": "Nike Air Force Max II",
//     "description": "The game has gone small, so bigs have to be faster, more agile and more versatile to stay relevant. Keeping pace with ever-evolving player needs, the Nike Air Force Max II provides the responsive cushioning that allows big players to keep crashing the boards and banging in the post, while helping them stay light and quick on the break.",
//     "price": "439.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc84a96f-ab84-4278-a4a0-8ac4b4eb5407/air-force-max-ii-basketball-shoe-ZXgnrV.png",
//     "id": "8"
//   },
//   {
//     "name": "Nike Victori One",
//     "description": "From the beach to the bleachers, the Nike Victori One perfects a classic, must-have design. Delivering lightweight comfort that's easy to wear, it's updated with softer, more responsive foam. The contoured grip pattern helps cradle and hold your foot in place while the new padded strap feels as good as it looks.",
//     "price": "129.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/77874acd-bf25-4037-bf21-9b442d1b28eb/victori-one-slide-XvDFHt.png",
//     "id": "9"
//   },
//   {
//     "name": "Jordan Play",
//     "description": "Get all of the underfoot support you need with these essential slides. Enjoy the cushioning of thick, lightweight foam for beach days or post-game hangouts.",
//     "price": "179.90",
//     "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/96adae51-ea2a-4868-9072-7afdeddb0d68/jordan-play-slides-5VQp8k.png",
//     "id": "10"
//   }
// ]
