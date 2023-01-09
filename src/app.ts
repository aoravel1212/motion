import { ImageComponenet } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
  private readonly page: PageComponent;
  private readonly image: ImageComponenet;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    this.image = new ImageComponenet(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.image.attachTo(appRoot, "beforebegin");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
