import { BaseComponent, Component } from "../component.js";

export interface Composable {
  addChild(child: Component): void;
}

// 아무런 인자도 받지 않고 반환하지도 않음. 그냥 닫혔다는라는 상태를 알려주기만 하는 콜백함수.
type OnCloseListener = () => void;
class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  // 외부로부터 전달받은 콜백함수를 저장하고 있을 변수. 전달받지 않을 경우 undefined가 될 수 있도록 옵셔널로 설정.
  private closeLisener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      // 클로즈 버튼이 클릭 되면 closeLisener가 있는지 확인하고, 있는 경우 closeLisener를 호출한다.
      this.closeLisener && this.closeLisener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(".page-item__body")! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeLisener = listener;
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
