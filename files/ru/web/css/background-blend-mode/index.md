---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
translation_of: Web/CSS/background-blend-mode
browser-compat: css.properties.background-blend-mode
---
{{CSSRef()}}

## Описание

Свойство `background-blend-mode` описывает то, как фоновое изображение элемента должно накладываться на фоны других элементов.</p>

{{EmbedInteractiveExample("pages/css/background-blend-mode.html")}}

<p>Режимы наложения должны быть определены в том же порядке что CSS свойство {{cssxref("background-image")}}. Если длины списка режимов наложения и фоновых изображений не равны, он будет повторяться и/или сокращаться до совпадения длин.</p>

## Cинтаксис

```css
/* Одно значение */
background-blend-mode: normal;

/* Два значение, по одному на каждый фон */
background-blend-mode: darken, luminosity;

/* Глобальные значения */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: revert;
background-blend-mode: unset;
```

### Значения

- {{cssxref("&lt;blend-mode&gt;")}}
  - : обозначающий режим наложения, который применён. Может быть несколько значений, разделённых запятыми.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Простой пример

```css
.item {
    width: 300px;
    height: 300px;
    background: url('image1.png'),url('image2.png');
    background-blend-mode: screen;
}
```

### Попробуйте разные режимы смешивания

```html hidden
<div id="div"></div>
<select id="select">
    <option>normal</option>
    <option>multiply</option>
    <option selected>screen</option>
    <option>overlay</option>
    <option>darken</option>
    <option>lighten</option>
    <option>color-dodge</option>
    <option>color-burn</option>
    <option>hard-light</option>
    <option>soft-light</option>
    <option>difference</option>
    <option>exclusion</option>
    <option>hue</option>
    <option>saturation</option>
    <option>color</option>
    <option>luminosity</option>
</select>
```

```css hidden
#div {
    width: 300px;
    height: 300px;
    background: url('https://mdn.mozillademos.org/files/8543/br.png'),url('https://mdn.mozillademos.org/files/8545/tr.png');
    background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = function(event) {
    document.getElementById("div").style.backgroundBlendMode = document.getElementById("select").selectedOptions[0].innerHTML;
}
console.log(document.getElementById('div'));
```

{{ EmbedLiveSample('Примеры', "330", "350") }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
