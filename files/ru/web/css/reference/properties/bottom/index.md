---
title: bottom
slug: Web/CSS/Reference/Properties/bottom
original_slug: Web/CSS/bottom
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`bottom`** частично определяет вертикальную позицию позиционируемого элемента. Оно не влияет на непозиционируемые элементы (т.е. **`bottom`** не применится, если задано `position: static`).

{{InteractiveExample("CSS Demo: bottom")}}

```css interactive-example-choice
bottom: 0;
```

```css interactive-example-choice
bottom: 4em;
```

```css interactive-example-choice
bottom: 10%;
```

```css interactive-example-choice
bottom: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

Эффект свойства `bottom` зависит от того, как позиционируется элемент (то есть от значения свойства {{cssxref("position")}}):

- Когда задано `position: absolute` или `fixed` — свойство `bottom` устанавливает расстояние между нижним краем элемента и нижним краем содержащего его блока.
- Когда задано `position: relative` — свойство `bottom` устанавливает расстояние, на которое нижний край элемента перемещается выше его обычной позиции.
- Когда задано `position: sticky` — свойство `bottom` работает так, как при `position: relative` во время нахождения элемента внутри области просмотра, и как `position: fixed` вне области просмотра.
- Когда задано `position: static` — свойство `bottom` _не имеет никакого эффекта_.

Когда заданы оба свойства {{cssxref("top")}} и `bottom`, а свойство {{cssxref("height")}} не задано, `auto` или равно `100%`, то оба свойства {{cssxref("top")}} и `bottom` учитываются. Если свойство {{cssxref("height")}} задано, то свойство {{cssxref("top")}} будет учтено, а `bottom` — проигнорировано.

## Синтаксис

```css
/* Ключевые слова */
bottom: auto;

/* Значения величин */
bottom: 3px;
bottom: 2.4em;

/* Процентные значения от высоты родительского блока */
bottom: 10%;

/* Глобальные значения */
bottom: inherit;
bottom: initial;
bottom: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Отрицательная, нулевая или положительная величина, которая представляет:
    - для _абсолютно позиционируемых элементов_ \&mdash расстояние до нижнего края содержащего их блока;
    - для _относительно позиционируемых элементов_ \&mdash расстояние, на которое элемент смещается вверх, относительно своего положения в нормальном потоке.
- {{cssxref("&lt;percentage&gt;")}}
  - : Процент от высоты родительского блока.
- `auto`
  - : Ключевое слово, которое указывает, что:
    - для _абсолютно спозиционированных элементов_ — позиция элемента опирается на свойство {{cssxref("top")}}, пока `height: auto` обрабатывается как высота в зависимости от содержимого; если так же и `bottom: auto`, то элемент располагается так же, как при статическом позиционировании.
    - для _относительно спозиционированных элементов_ — расстояние элемента от его обычной позиции основано на свойстве {{cssxref ("top")}}; если значение `top` также `auto`, элемент вообще не перемещается по вертикали.
- `inherit`
  - : Это ключевое слово указывает, что значение будет соответствовать вычисленному значению родительского блока (необязательно непосредственного родителя). Вычисляемое значение обрабатывается так же, как {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} или ключевое слово `auto`.

### Формальный синтаксис

{{csssyntax}}

## Пример

Этот пример демонстрирует разницу в поведении свойства `bottom`, когда {{cssxref("position")}} является `absolute` и `fixed`.

### HTML

```html
<h2>Эксперимент</h2>
<p>
  Здесь<br />мы<br />набираем<br />побольше<br />высоты<br />для<br />вящей<br />наглядности<br />нашего<br />скромного,<br />но<br />очень<br />убедительного<br />эксперимента.<br />-
  Вот.
</p>
<div class="fixed"><p>Я фиксирован</p></div>
<div class="absolute"><p>Я абсолютен</p></div>
```

### CSS

```css
p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgba(55, 55, 55, 0.4);
  border: 1px solid blue;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

### Результат

{{EmbedLiveSample('Пример','500','250')}}

## Характеристики

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}
