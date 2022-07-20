export function $(selector, el = document) {
  return el.querySelector(selector);
}

export function createElement(template) {
  const $el = document.createElement("template");
  $el.insertAdjacentHTML("afterbegin", template);
  return $el.firstElementChild.cloneNode(true);
}

export function dispatchCustomEvent(name, detail, target = window) {
  target.dispatchEvent(new CustomEvent(name, { detail }));
}

export function addCustomEventListener(name, callback, target = window) {
  target.addEventListener(name, ({ detail }) => callback(detail));
}