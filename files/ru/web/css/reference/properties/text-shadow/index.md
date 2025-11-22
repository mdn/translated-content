---
title: text-shadow
slug: Web/CSS/Reference/Properties/text-shadow
original_slug: Web/CSS/text-shadow
---

{{CSSRef}}

CSS-свойство **`text-shadow`** добавляет тени к тексту. Свойство задаётся разделённым запятыми списком теней, которые будут применены к тексту и к любым его свойствам [`decorations`](/ru/docs/Web/CSS/text-decoration). Любая тень описывается комбинацией смещений по осям X и Y относительно элемента, радиусом размытия и цветом.

{{InteractiveExample("CSS Demo: text-shadow")}}

```css interactive-example-choice
text-shadow: 1px 1px 2px pink;
```

```css interactive-example-choice
text-shadow: #fc0 1px 0 10px;
```

```css interactive-example-choice
text-shadow: 5px 5px #558abb;
```

```css interactive-example-choice
text-shadow: red 2px 5px;
```

```css interactive-example-choice
text-shadow: 5px 10px;
```

```css interactive-example-choice
text-shadow:
  1px 1px 2px red,
  0 0 1em blue,
  0 0 0.2em blue;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Far out in the uncharted backwaters of the unfashionable end of the western
    spiral arm of the Galaxy...
  </p>
</section>
```

```css interactive-example
p {
  font:
    1.5em Georgia,
    serif;
}
```

## Syntax

```css
/* смещение-x | смещение-y | радиус-размытия | цвет */
text-shadow: 1px 1px 2px black;

/* цвет | смещение-x | смещение-y | радиус-размытия */
text-shadow: #fc0 1px 0 10px;

/* смещение-x | смещение-y | цвет */
text-shadow: 5px 5px #558abb;

/* цвет | смещение-x | смещение-y */
text-shadow: white 2px 5px;

/* смещение-x | смещение-y
/* Используем значения по умолчанию для цвета и радиуса-размытия */
text-shadow: 5px 10px;

/* Глобальные значения */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

Это свойство определено как разделённый запятыми список теней.

Каждая тень определена как два или три значения `<длина>`, за которыми следует необязательное значение `<цвет>`. Первые два значения `<длина>` определяют параметры `<смещение-x>` и `<смещение-y>`. Третье необязательное значение `<длина> задаёт` `<радиус-размытия>`. Значение `<цвет>` определяет цвет тени.

Если определены больше чем одна тень, тени накладываются друг на друга в порядке обратном порядку их определения, что значит, первая тень окажется поверх последующих.

Это свойство можно применить к [псевдо-элементам](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-elements) {{cssxref("::first-line")}} и {{cssxref("::first-letter")}}.

### Значения

- {{cssxref("&lt;цвет&gt;")}}
  - : Необязательный. Цвет тени. Параметр может быть определён как до, так и после значений смещений. Если значение не задано, то его цвет будет определяться браузером пользователя, поэтому, для сохранения согласованности в отображении в браузерах, рекомендуется определить значение цвета явно.
- `<смещение-x> <смещение-y>`
  - : Обязательные. Эти величины {{cssxref("&lt;длина&gt;")}} задают расстояние тени от текста. `<смещение-x>` определяет горизонтальное расстояние; отрицательное значение размещает тень левее от текста. `<смещение-y>` определяет вертикальное расстояние; отрицательное значение размещает тень выше текста. Если оба значения заданы в `0`, тень будет располагаться прямо за текстом, она может быть видна из-за эффекта `<радиус-размытия>`.
- `<радиус-размытия>`
  - : Необязательный. Это величина {{cssxref("&lt;длина&gt;")}}. Чем больше значение, тем сильнее задаётся размытие; тень становится шире и светлее. Значение по умолчанию `0`, в случае когда параметр не определён.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Простая тень

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample('Простая_тень', '660px', '90px')}}

### Множественные тени

```css
.white-text-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
    serif;
}
```

```html
<p class="white-text-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
</p>
```

{{EmbedLiveSample('Множественные_тени', '660px', '170px')}}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

### Примечание Quantum CSS

- В движке Gecko есть программная ошибка в результате которой метод перехода ({{cssxref("transition")}}) не будет производить переход от элемента со свойством `text-shadow` с заданным цветом к элементу со свойством `text-shadow` без заданного цвета ([Firefox bug 726550](https://bugzil.la/726550)). Данная ошибка была исправлена в параллельной ветке движка CSS для Firefox (так же известном как [Quantum CSS](https://wiki.mozilla.org/Quantum) или [Stylo](https://wiki.mozilla.org/Quantum/Stylo), выпуск которого запланирован уже в версии Firefox 57).

## Смотрите также

- [Text Shadow CSS Generator](https://cssgenerator.org/text-shadow-css-generator.html) - Интерактивный генератор теней CSS.
- {{cssxref("box-shadow")}}
- Тип данных {{cssxref("&lt;color&gt;")}} (для определения цвета теней)
- [Определение цвета для элемента HTML посредством CSS](/ru/docs/Web/CSS/CSS_colors/Applying_color)
