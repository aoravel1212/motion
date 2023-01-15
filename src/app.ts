import { NoteComponenet } from "./components/page/item/note.js";
import { TodoComponenet } from "./components/page/item/todo.js";
import { ImageComponenet } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
import { VideoComponenet } from "./components/page/item/video.js";
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponenet(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");

    const note = new NoteComponenet("Note Title", "Note Body");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponenet("Todo Title", "Todo Item");
    todo.attachTo(appRoot, "beforeend");

    const video = new VideoComponenet(
      "Video Title",
      "https://www.youtube.com/embed/0qvSCmcMUc0"
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
