---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

## Описание

[CSS](/ru/docs/CSS) Свойство **`font-size`** определяет размер шрифта. Это свойство также используется для вычисления размера `em`, `ex` и других относительных единиц. Подробнее: {{cssxref("&lt;length&gt;")}}.

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## Синтаксис

```css
/* значения в <абсолютных размерах> */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* значения в <относительных размерах> */
font-size: larger;
font-size: smaller;

/* <значения длины> */
font-size: 12px;
font-size: 0.8em;

/* <процентные значения> */
font-size: 80%;

/* Глобальные значения */
font-size: inherit;
font-size: initial;
font-size: unset;
```

Свойство `font-size` устанавливается одним из следующих способов:

- Ключевым словом из перечня абсолютных значений или относительных значений
- Как `<значение длины>` или `<процентное значение>`, по отношению к размеру родительского элемента.

### Значения

- `xx-small, x-small, small, medium, large, x-large, xx-large`
  - : Набор ключевых слов абсолютных значений, по отношению к пользовательскому размеру шрифта по умолчанию (им считается `medium` - среднее).
- `larger, smaller`
  - : Больше (larger) или меньше (smaller). Ключевые слова для относительного размера. Шрифт будет больше или меньше по отношению в размеру шрифта родительского элемента.Примерно на такое же соотношение, которое используется в ключевых словах абсолютного размера выше.
- {{cssxref("&lt;length&gt;")}}
  - : Положительное значение длины {{cssxref("&lt;length&gt;")}}. Для большинства единиц измерения, зависимых от шрифта (таких как `em` и `ex`), размер шрифта будет зависеть от размера шрифта родительских элементов.Для единиц измерения, зависимых от шрифта, которые зависят от корневых единиц (таких как `rem`), размер шрифта будет коррелироваться по отношению к шрифту, используемому корневым элементом {{HTMLElement("html")}} (root).
- `<процентные значения>`
  - : Положительное процентное {{cssxref("&lt;percentage&gt;")}} значение по отношению к размеру шрифта родительского элемента.

> **Примечание:** Для обеспечения максимальной совместимости обычно лучше использовать значения, относящиеся к размеру шрифта пользователя по умолчанию.

### Формальный синтаксис

{{csssyntax}}

## Возможные подходы

Существуют разные способы задания размера шрифта. С помощью ключевых слов или с помощью числовых значений для размера пикселей или размера ems. Выберите подходящий метод в зависимости от потребностей конкретной веб-страницы.

### Ключевые слова

Keywords are a good way to set the size of fonts on the web. By setting a keyword font size on the body element, you can set relative font-sizing everywhere else on the page, giving you the ability to easily scale the font up or down on the entire page accordingly.

### Pixels

Setting the font size in pixel values (`px`) is a good choice when you need pixel accuracy. A px value is static. This is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified. The results may vary slightly across browsers, as they may use different algorithms to achieve a similar effect.

Font sizing settings can also be used in combination. For example, if a parent element is set to `16px` and its child element is set to `larger`, the child element displays larger than the parent element in the page.

> **Примечание:** Defining font sizes in pixel is _[not accessible](https://en.wikipedia.org/wiki/Web_accessibility)_, because the user cannot change the font size from the browser. (For example, users with limited vision may wish to set the font size much larger than the size chosen by a web designer.) Therefore, avoid using pixels for font sizes if you wish to create an inclusive design.

### Ems

Another way of setting the font size is with `em` values. The size of an `em` value is dynamic. When defining the `font-size` property, an em is equal to the size of the font that applies to the parent of the element in question. If you haven't set the font size anywhere on the page, then it is the browser default, which is probably 16px. So, by default 1em = 16px, and 2em = 32px. If you set a `font-size` of 20px on the body element, then 1em = 20px and 2em = 40px. Note that the value 2 is essentially a multiplier of the current em size.

In order to calculate the em equivalent for any pixel value required, you can use this formula:

```
em = desired element pixel value / parent element font-size in pixels
```

For example, suppose the font-size of the body of the page is set to 1em, with the browser standard of 1em = 16px; if the font-size you want is 12px, then you should specify 0.75em (because 12/16 = 0.75). Similarly, if you want a font size of 10px, then specify 0.625em (10/16 = 0.625); for 22px, specify 1.375em (22/16).

A popular technique to use throughout the document is to set the the font-size of the body to 62.5% (that is 62.5% of the default of 16px), which equates to 10px, or 0.625em. Now you can set the font-size for any elements using em units, with an easy-to-remember conversion, by dividing the px value by 10. This way 6px = 0.6em, 8px = 0.8em, 12px = 1.2em, 14px = 1.4em, 16px = 1.6em. For example:

```css
body {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6em; /* 1.6em = 16px */
}
```

The em is a very useful unit in CSS, since it automatically adapts its length relative to the font that the reader chooses to use.

One important fact to keep in mind: em values compound. Take the following HTML and apply it with the previous CSS above:

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

The result is:

{{EmbedLiveSample("Ems", 400, 40)}}

Assuming that the browser's default `font-size` is 16px, the words "outer" would be rendered at 16px, but the word "inner" would be rendered at 25.6px. This is because the inner span's `font-size` is 1.6 em which is relative to its parent's `font-size`, which is in turn relative to its parent's `font-size`. This is often called **compounding**.

### Rems

`rem` values were invented in order to sidestep the compounding problem. `rem` values are relative to the root `html` element, not the parent element. In other words, it lets you specify a font size in a relative fashion without being affected by the size of the parent, thereby eliminating compounding.

The CSS below is nearly identical to the previous example. The only exception is that the unit has been changed to `rem`.

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6rem;
}
```

Then we apply this CSS to the same HTML, which looks like this:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 40)}}

In this example, the words "outer inner outer" are all displayed at 16px (assuming that the browser's font-size has been left at the default value of 16px).

## Примеры

### Пример 1

```css
/* Set paragraph text to be very large. */
p {
  font-size: xx-large;
}

/* Set h1 (level 1 heading) text to be 2.5 times the size
 * of the text around it. */
h1 {
  font-size: 250%;
}

/* Sets text enclosed within span tag to be 16px */
span {
  font-size: 16px;
}
```

### Пример 2

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### Live Sample

{{EmbedLiveSample('Пример_2','600','200')}}

## Примечание

`em` and `ex` units on the {{Cssxref("font-size")}} property are relative to the parent element's font size (unlike all other properties, where they're relative to the font size on the element). This means `em` units and percentages do the same thing for {{Cssxref("font-size")}}.

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}
