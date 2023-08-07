---
title: ":host()"
slug: Web/CSS/:host_function
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) функция-[псевдокласс](/ru/docs/Web/CSS/%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B) **`:host()`** выбирает shadow хоста (носителя) [shadow DOM](/ru/docs/Web/Web_Components/Using_shadow_DOM)-a, который содержит CSS, используемый внутри (так что вы можете выбрать пользовательский элемент изнутри его shadow DOM) — но только если селектор, переданный как параметр функции, соответствует shadow хосту.

Самый очевидный способ использовать его — поставить некоторый класс только на определённые экземпляры пользовательских элементов, а затем передать соответствующий классовый селектор как аргумент функции. Вы не можете использовать псевдокласс c селектором наследника, чтобы выбрать только экземпляры пользовательского элемента, которые находятся внутри определённого предка. Это работа {{CSSxRef(":host-context()")}}.

> **Примечание:** Псевдокласс не имеет эффекта вне shadow DOM.

```css
/* Выбирает хоста shadow root, только
  если он соответствует аргументу селектора */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## Синтаксис

{{CSSSyntax}}

## Примеры

### Селективная стилизация shadow хостов

Следующие ниже фрагменты взяты из нашего примера [host-selectors](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([также смотрите вживую](https://mdn.github.io/web-components-examples/host-selectors/)).

В этом примере у нас есть простой пользовательский элемент — `<context-span>` — который мы оборачиваем вокруг текста:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Внутри конструктора элемента мы создаём элементы `style` и `span`, заполняем `span` контентом пользовательского элемента и заполняем элемент `style` CSS-правилами:

```js
let style = document.createElement("style");
let span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgba(0,0,0,0.1); padding: 2px 5px; }";
```

Правило `:host(.footer) { color : red; }` стилизует все экземпляры элемента `<context-span>` (shadow хост в данном случае) в документе, которые имеют класс `footer` — мы использовали его, чтобы дать экземплярам элемента внутри {{htmlelement("footer")}} особый цвет.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Веб-компоненты](/ru/docs/Web/Web_Components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context()")}}
