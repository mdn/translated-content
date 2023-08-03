---
title: ":indeterminate"
slug: Web/CSS/:indeterminate
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) **`:indeterminate`** находит элементы в неопределённом состоянии.

```css
/* Выбирает все элементы <input>, которые находятся в неопределённом состоянии */
input:indeterminate {
  background: lime;
}
```

Селектор находит следующие элементы:

- Элементы [`<input type="checkbox">`](/ru/docs/Web/HTML/Element/input/checkbox), свойство `indeterminate` которых было установлено в `true` через [JavaScript](/ru/docs/Web/JavaScript)
- Элементы [`<input type="radio">`](/ru/docs/Web/HTML/Element/input/radio), когда все радио переключатели в одной группе (с одинаковым атрибутом `name`) не выбраны
- Элементы {{HTMLElement("progress")}} в неопределённом состоянии

## Синтаксис

{{csssyntax}}

## Примеры

### Чекбокс и радио переключатели

В этом примере специальные стили применяются к меткам, которые привязаны к неопределённым полям формы.

#### HTML

```html
<div>
  <input type="checkbox" id="checkbox" />
  <label for="checkbox">Эта метка будет зелёной.</label>
</div>
<div>
  <input type="radio" id="radio" />
  <label for="radio">Эта метка будет зелёной.</label>
</div>
```

#### CSS

```css
input:indeterminate + label {
  background: lime;
}
```

#### JavaScript

```js
var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

{{EmbedLiveSample('Чекбокс_и_радио_переключатели', 'auto', 50)}}

### Полоса прогресса

#### HTML

```html
<progress></progress>
```

#### CSS

```css
progress {
  margin: 4px;
}

progress:indeterminate {
  opacity: 0.5;
  background-color: lightgray;
  box-shadow: 0 0 2px 1px red;
}
```

### Результат

{{EmbedLiveSample('Полоса_прогресса', 'auto', 30)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
