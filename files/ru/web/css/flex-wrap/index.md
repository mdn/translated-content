---
title: flex-wrap
slug: Web/CSS/flex-wrap
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`flex-wrap`** задаёт правила вывода flex-элементов — в одну строку или в несколько, с переносом блоков. Если перенос разрешён, то возможно задать направление, в котором выводятся блоки.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

{{cssinfo}}

Подробнее о свойствах и дополнительную информацию смотрите [Основные понятия Flexbox](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

## Синтаксис

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Глобальные значения */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

Свойство `flex-wrap` может содержать одно из следующих ниже значений.

### Значения

Допускаются следующие значения:

- `nowrap`
  - : Расположение в одну линию, может привести к переполнению контейнера. Свойство **cross-start** эквивалентно **start** или **before** в зависимости от значения {{cssxref("flex-direction")}}.
- `wrap`
  - : Расположение в несколько линий. Свойство **cross-start** эквивалентно **start** или **before** в зависимости от значения `flex-direction` и свойство **cross-end** противоположно **cross-start**.
- `wrap-reverse`
  - : Ведёт себя так же, как и `wrap`, но **cross-start** и **cross-end** инвертированы.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
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

### Результат

{{EmbedLiveSample('Examples', '100%', '700')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using CSS flexible boxes](/ru/docs/CSS/Using_CSS_flexible_boxes)
