export abstract class View<T> {

  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  abstract template(model: T): string;

  abstract update(model: T): void;
}