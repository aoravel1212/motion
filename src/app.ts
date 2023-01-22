import { Component } from "./components/component";
import { NoteComponenet } from "./components/page/item/note.js";
import { TodoComponenet } from "./components/page/item/todo.js";
import { ImageComponenet } from "./components/page/item/image.js";
import { Composable, PageComponent } from "./components/page/page.js";
import { VideoComponenet } from "./components/page/item/video.js";
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponenet("Image Title", "https://picsum.photos/600/300");
    this.page.addChild(image);

    const note = new NoteComponenet("Note Title", "Note Body");
    this.page.addChild(note);

    const todo = new TodoComponenet("Todo Title", "Todo Item");
    this.page.addChild(todo);

    const video = new VideoComponenet("Video Title", "https://www.youtube.com/embed/0qvSCmcMUc0");
    this.page.addChild(video);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
