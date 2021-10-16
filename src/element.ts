class Elem {
  public name: string;
  public img: ImageBitmap;
  public x: number;
  public y: number;

  constructor(img: ImageBitmap, name: string) {
    this.img = img;
    this.name = name;
    this.x = 0;
    this.y = 0;
  }
}
