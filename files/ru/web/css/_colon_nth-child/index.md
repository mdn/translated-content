---
title: ":nth-child"
slug: Web/CSS/:nth-child
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) **`:nth-child()`** находит один или более элементов, основываясь на их позиции среди группы соседних элементов.

```css
/* Выбирает каждый четвёртый элемент
   среди любой группы соседних элементов */
:nth-child(4n) {
  color: lime;
}
```

## Синтаксис

Псевдокласс `nth-child` указывается с единственным аргументом, описывающим паттерн для выбирания элементов.

### Ключевые слова

- `odd`
  - : Описывает элементы среди группы соседних с нечётными номерами 1, 3, 5, и т. д.
- `even`
  - : Описывает элементы среди группы соседних с чётными номерами 2, 4, 6, и т. д.

### Функциональная запись

- `<An+B>`
  - : Описывает элементы среди группы соседних с номерами, соответствующими паттерну `An+B` (для каждого целого числа n >= 0). Нумерация элементов начинается с единицы. Значения `A` и `B` должны быть {{cssxref("&lt;integer&gt;")}}s.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Примеры селекторов

- `tr:nth-child(odd)` или `tr:nth-child(2n+1)`
  - : Описывает нечётные строки HTML таблицы: 1, 3, 5, и т. д.
- `tr:nth-child(even)` or `tr:nth-child(2n)`
  - : Описывает чётные строки HTML таблицы: 2, 4, 6, и т. д.
- `:nth-child(7)`
  - : Описывает седьмой элемент.
- `:nth-child(5n)`
  - : Описывает элементы с номерами 5, 10, 15, и т. д.
- `:nth-child(3n+4)`
  - : Описывает элементы с номерами 4, 7, 10, 13, и т. д.
- `:nth-child(-n+3)`
  - : Описывает первые три элемента среди группы соседних элементов.
- `p:nth-child(n)`
  - : Описывает каждый элемент `<p>` среди группы соседних элементов. Эквивалентно простому селектору `p`.
- `p:nth-child(1)` или `p:nth-child(0n+1)`
  - : Описывает каждый элемент `<p>`, являющийся первым среди группы соседних элементов. Эквивалентно селектору {{cssxref(":first-child")}}.

### Подробный пример

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, БЕЗ элемента <code>&lt;em&gt;</code> в
  группе элементов-потомков.
</h3>
<p>Элементы 1, 3, 5 и 7 будут выбраны.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, С элементом <code>&lt;em&gt;</code> в
  группе элементов-потомков.
</h3>
<p>
  Элементы 1, 5 и 7 будут выбраны.<br />
  3 используется в подсчёте потому что это элемент-потомок, но он не выбран
  потому что он не <code>&lt;span&gt;</code>.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>Это `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, С элементом <code>&lt;em&gt;</code> в
  группе элементов-потомков.
</h3>
<p>
  Элементы 1, 4, 6 и 8 будут выбраны.<br />
  3 не используется в подсчёте и не выбран, потому что это
  <code>&lt;em&gt;</code>, но не <code>&lt;span&gt;</code>, а
  <code>nth-of-type</code> выбирает только потомков этого типа. Элемент
  <code>&lt;em&gt;</code> полностью пропускается и игнорируется.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>Это `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: lime;
}
```

#### Результат

{{EmbedLiveSample('Подробный_пример', 550, 550)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{ Cssxref(":nth-of-type") }}, {{ Cssxref(":nth-last-child") }}
