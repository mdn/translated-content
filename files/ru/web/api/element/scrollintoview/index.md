---
title: Element.scrollIntoView()
slug: Web/API/Element/scrollIntoView
---

{{ APIRef("DOM")}}

Метод **`Element.scrollIntoView()`** интерфейса {{domxref("Element")}} прокручивает контейнер родителя элемента так, чтобы элемент, на котором был вызван `scrollIntoView()`, стал виден пользователю.

## Синтаксис

```
element.scrollIntoView();
element.scrollIntoView(alignToTop); // аргумент типа Boolean
element.scrollIntoView(scrollIntoViewOptions); // аргумент типа Object
```

### Параметры

- `alignToTop` {{optional_inline}}

  - : Параметр типа {{jsxref("Boolean")}}:

    - `true`, верхняя граница элемента будет выровнена по верху видимой области прокрутки. Соответствует `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. Значение по умолчанию.
    - `false`, нижняя граница элемента будет выровнена по низу видимой области прокрутки. Соответствует `scrollIntoViewOptions: {block: "end", inline: "nearest"}`

- `scrollIntoViewOptions` {{optional_inline}} {{experimental_inline}}
  - : Объект со следующими свойствами:
- `behavior` {{optional_inline}}
  - : Анимация прокрутки. Принимает значения `"auto"` или `"smooth"`. По умолчанию `"auto"`.
- `block` {{optional_inline}}
  - : Вертикальное выравнивание.
    Одно из значений: `"start"`, `"center"`, `"end"` или `"nearest"`. По умолчанию `"start"`.
- `inline` {{optional_inline}}
  - : Горизонтальное выравнивание.
    Одно из значений: `"start"`, `"center"`, `"end"` или `"nearest"`. По умолчанию `"nearest"`.

## Пример

### HTML

```html
<button type="button" class="btn">Нажми на меня</button>

<div class="big"></div>

<div id="box" class="box">Скрытый элемент</div>
```

### CSS

```css
.big {
  background: #ccc;
  height: 300px;
}

.btn {
  font-size: 14px;
}

.box {
  background: lightgreen;
  height: 40px;
}
```

### JavaScript

```js
var hiddenElement = document.getElementById("box");
var btn = document.querySelector(".btn");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);
```

### Результат

{{EmbedLiveSample('Пример')}}

## Примечание

Область может не полностью прокручивается до элемента (вверх или вниз), это зависит от расположения других элементов.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
