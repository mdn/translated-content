---
title: line-height
slug: Web/CSS/line-height
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/css) **`line-height`** устанавливает величину пространства между строками, например в тексте. В блочных элементах оно указывает минимальную высоту блоков строк внутри элемента. В [незамещаемых](/ru/docs/Web/CSS/%D0%97%D0%B0%D0%BC%D0%B5%D1%89%D0%B0%D0%B5%D0%BC%D1%8B%D0%B9_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82) внутристрочных элементах —указывает высоту, которая используется для вычисления высоты блоков строк.

{{EmbedInteractiveExample("pages/css/line-height.html")}}

## Синтаксис

```css
/* Keyword value */
line-height: normal;

/* Unitless values: use this number multiplied
by the element's font size */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: unset;
```

Свойство `line-height` задаётся с помощью:

- [`<числа>`](#number)
- [`<величины>`](#length)
- [`<процентного соотношения>`](#percentage)
- ключевого слова [`normal`](#normal).

### Значения

- [`normal`]()
  - : Зависит от пользовательского браузера. Компьютерные браузеры (включая Firefox) используют значение по умолчанию приблизительно **`1.2`**, в зависимости от элементов `font-family`.
- `<число> (без именования)`
  - : Значением `line-height` будет результат умножения указанного числа (без именования) на размер шрифта элементов. Указанное число, по сути, множитель. В большинстве случаев **это предпочтительный способ** указания значения `line-height`, потому что позволяет избежать непредвиденных результатов при наследовании.
- [`<величина>`]()
  - : Указанная {{cssxref("&lt;величина&gt;")}} используется при вычислении высоты блока строки. Значение, заданное в единицах **em** может привести к непредвидимым результатам (смотри пример ниже).
- [`<процентное соотношение>`]()
  - : Относительно размера шрифта самого элемента.Relative to the font size of the element itself. The computed value is this {{cssxref("&lt;percentage&gt;")}} multiplied by the element's computed font size. **Percentage** values may produce unexpected results (see the second example below).

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Basic example

```css
/* All rules below have the same resultant line height */

div {
  line-height: 1.2;
  font-size: 10pt;
} /* number */
div {
  line-height: 1.2em;
  font-size: 10pt;
} /* length */
div {
  line-height: 120%;
  font-size: 10pt;
} /* percentage */
div {
  font:
    10pt/1.2 Georgia,
    "Bitstream Charter",
    serif;
} /* font shorthand */
```

It is often more convenient to set `line-height` by using the {{cssxref("font")}} shorthand as shown above, but this requires the `font-family` property to be specified as well.

### Prefer unitless numbers for line-height values

This example shows why it is better to use {{cssxref("&lt;number&gt;")}} values instead of {{cssxref("&lt;length&gt;")}} values. We will use two {{HTMLElement("div")}} elements. The first, with the green border, uses a unitless `line-height` value. The second, with the red border, uses a `line-height` value defined in `em`s.

#### CSS

```css
.green {
  line-height: 1.1;
  border: solid limegreen;
}

.red {
  line-height: 1.1em;
  border: solid red;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}
```

#### HTML

```html
<div class="box green">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  length and percentage line-heights have poor inheritance behavior ...
</div>

<div class="box red">
  <h1>Avoid unexpected results by using unitless line-height.</h1>
  length and percentage line-heights have poor inheritance behavior ...
</div>

<!-- The first <h1> line-height is calculated from its own font-size   (30px × 1.1) = 33px  -->
<!-- The second <h1> line-height results from the red div's font-size  (15px × 1.1) = 16.5px,  probably not what you want -->
```

#### Result

{{EmbedLiveSample('Prefer_unitless_numbers_for_line-height_values', 600, 200)}}

## Specifications

| Specification                                                             | Status                        | Comment                              |
| ------------------------------------------------------------------------- | ----------------------------- | ------------------------------------ |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'line-height')}}        | {{Spec2('CSS3 Transitions')}} | Defines `line-height` as animatable. |
| {{SpecName('CSS2.1', 'visudet.html#propdef-line-height', 'line-height')}} | {{Spec2('CSS2.1')}}           | No change.                           |
| {{SpecName('CSS1', '#line-height', 'line-height')}}                       | {{Spec2('CSS1')}}             | Initial definition.                  |

{{cssinfo}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("font")}}, {{Cssxref("font-size")}}
