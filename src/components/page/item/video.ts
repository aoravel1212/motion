import { BaseComponent } from "../../component.js";

export class VideoComponenet extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player"><iframe class="video__iframe" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>
            <h2 class="video__title"></h2>
          </section>`);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbededURL(url);

    // https://www.youtube.com/watch?v=0qvSCmcMUc0
    // https://www.youtube.com/embed/0qvSCmcMUc0

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbededURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9(-|_)]{11}))|(?:youtu.be\/([a-zA-Z0-9(-|_)]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
