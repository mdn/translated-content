---
title: flex-wrap
slug: Web/CSS/flex-wrap
translation_of: Web/CSS/flex-wrap
---

{{ CSSRef}}

Свойство [CSS](/ru/docs/CSS) **`flex-wrap`** задаёт правила вывода flex-элементов — в одну строку или в несколько, с переносом блоков. Если перенос разрешён, то возможно задать направление, в котором выводятся блоки.

```css
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: unset;
```

{{cssinfo}}

Подробнее по свойствам и общей информации смотрите [Using CSS flexible boxes](/en/CSS/Using_CSS_flexible_boxes).

## Syntax

Свойство `flex-wrap` может содержать одно из следующих ниже значений.

### Значения

Допускаются следующие значения:

- `nowrap`
  - : Расположение в одну линию, может привести к переполнению контейнера. Свойство **cross-start** эквивалентно **start** или **before** в зависимости от значения {{cssxref("flex-direction")}}.
- `wrap`
  - : Расположение в несколько линий. Свойство **cross-start** эквивалентно **start** или **before** в зависимости от значения `flex-direction` и свойство **cross-end** противоположно **cross-start**.
- `wrap-reverse`
  - : Ведёт себя так же, как и `wrap` но **cross-start** и **cross-end** инвертированы.

### Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<h4>This is an example for flex-wrap:wrap </h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap </h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse </h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
    color: #fff;
    font: 100 24px/100px sans-serif;
    height: 150px;
    text-align: center;
}

.content div,
.content1 div,
.content2 div {
    height: 50%;
    width: 50%;
}
.red {
    background: orangered;
}
.green {
    background: yellowgreen;
}
.blue {
    background: steelblue;
}

/* Flexbox Styles */
.content {
    display: flex;
    flex-wrap: wrap;
}
.content1 {
    display: flex;
    flex-wrap: nowrap;
}
.content2 {
    display: flex;
    flex-wrap: wrap-reverse;
}
```

### Results

{{ EmbedLiveSample('Examples', '100%', '700') }}

## Specifications

| Specification                                                                            | Status                               | Comment |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{ SpecName('CSS3 Flexbox', '#flex-wrap-property', 'flex-wrap') }} | {{ Spec2('CSS3 Flexbox') }} |         |

## Browser compatibility

{{Compat}}

## See also

- [Using CSS flexible boxes](/ru/docs/CSS/Using_CSS_flexible_boxes)
