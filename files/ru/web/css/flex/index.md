---
title: flex
slug: Web/CSS/flex
---

{{CSSRef}}

## Описание

Свойство [CSS](/ru/docs/CSS) **`flex`** - это [сокращённое свойство](/ru/docs/Web/CSS/Shorthand_properties), определяющее способность гибкого элемента растягиваться или сжиматься для заполнения собой доступного свободного пространства. Это свойство устанавливает [flex-grow](/ru/docs/Web/CSS/flex-grow), [flex-shrink](/ru/docs/Web/CSS/flex-shrink) и [flex-basis](/ru/docs/Web/CSS/flex-basis).

{{cssinfo}}

Для более полной информации читайте [Использование flex-контейнеров CSS](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

## Синтаксис

```css
/* 0 0 auto */
flex: none;

/* Одно значение, число без единиц: flex-grow */
flex: 2;

/* Одно значение, ширина/высота: flex-basis */
flex: 10em;
flex: 30%;
flex: min-content;

/* Два значения: flex-grow | flex-basis */
flex: 1 30px;

/* Два значения: flex-grow | flex-shrink */
flex: 2 2;

/* Три значения: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Глобальные значения */
flex: inherit;
flex: initial;
flex: unset;
```

### Значения

- `<'flex-grow'>`
  - : Определяет `{{cssxref("flex-grow")}}` для флекс элемента. Смотри {{cssxref("&lt;number&gt;")}} для большей информации. Негативные значения считаются недействительными. Значение по умолчанию `0`, если не указано.
- `<'flex-shrink'>`
  - : Определяет `{{cssxref("flex-shrink")}}` для флекс элемента. Смотри {{cssxref("&lt;number&gt;")}} для большей информации. Негативные значения считаются недействительными. Значение по умолчанию `1`, если не указано.
- `<'flex-basis'>`
  - : Определяет `{{cssxref("flex-basis")}}` для флекс элемента. Любое корректное значение для высоты(height) и ширины(width) - корректно и для данного свойства. Предпочтительный размер 0 должен иметь единицу измерения, чтобы не восприниматься как гибкий. Значение по умолчанию `0%`, если не указано.
- `none`
  - : Размер элемента устанавливается в соответствии с его свойствами `width` и `height`. Он полностью негибкий: не сжимается и не увеличивается по отношению к гибкому контейнеру. Эквивалентно значению "`flex: 0 0 auto`".

### Формальный синтаксис

{{csssyntax}}

## Пример

```css
#flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}

#flex-container > .flex-item {
  -webkit-flex: auto;
  flex: auto;
}

#flex-container > .raw-item {
  width: 5rem;
}
```

```html
<div id="flex-container">
  <div class="flex-item" id="flex">Flex box (click to toggle raw box)</div>
  <div class="raw-item" id="raw">Raw box</div>
</div>
```

```js hidden
var flex = document.getElementById("flex");
var raw = document.getElementById("raw");
flex.addEventListener("click", function () {
  raw.style.display = raw.style.display == "none" ? "block" : "none";
});
```

```css hidden
#flex-container {
  width: 100%;
  font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
  border: 1px solid #f00;
  padding: 1rem;
}

#flex-container > .raw-item {
  border: 1px solid #000;
}
```

### Результат

{{EmbedLiveSample('Пример','100%','60')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Using CSS flexible boxes](/ru/docs/Web/Guide/CSS/Flexible_boxes)
