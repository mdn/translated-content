---
title: background-position-x
slug: Web/CSS/Reference/Properties/background-position-x
original_slug: Web/CSS/background-position-x
---

{{CSSRef}}

Свойство **`background-position-x`** - это [CSS](/ru/docs/Web/CSS) - свойство, которое устанавливает начальную горизонтальную позицию для каждого фонового изображения. Эта позиция является относительной к позиции слоя, установленной с помощью свойства {{cssxref("background-origin")}}.

{{InteractiveExample("CSS Demo: background-position-x")}}

```css interactive-example-choice
background-position-x: left;
```

```css interactive-example-choice
background-position-x: center;
```

```css interactive-example-choice
background-position-x: 25%;
```

```css interactive-example-choice
background-position-x: 2rem;
```

```css interactive-example-choice
background-position-x: right 32px;
```

```html interactive-example
<section class="display-block" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: navajowhite;
  background-image: url("/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  height: 100%;
}
```

Значение этого свойства отменяется любой декларацией {{cssxref("background")}} или коротким свойством {{cssxref("background-position")}} применёнными после его объявления.

## Синтаксис

```css
/* Keyword values */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* <percentage> values */
background-position-x: 25%;

/* <length> values */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Side-relative values */
background-position-x: right 3px;
background-position-x: left 25%;

/* Multiple values */
background-position-x: 0px, center;

/* Global values */
background-position-x: inherit;
background-position-x: initial;
background-position-x: unset;
```

Свойство `background-position-x` принимает одно или несколько значений, разделённых запятыми.

### Значения

- `left`
  - : Выравнивает левый край фонового изображения по левому краю фонового позиционирующего слоя.
- `center`
  - : Выравнивает центр фонового изображения по центру фонового позиционирующего слоя.
- `right`
  - : Выравнивает правый край фонового изображения по правому краю фонового позиционирующего слоя.
- {{cssxref("&lt;length&gt;")}}
  - : Смещение левого вертикального края данного фонового изображения от левого вертикального края фонового слоя. (Некоторые браузеры позволяют назначать правый край для смещения).
- {{cssxref("&lt;percentage&gt;")}}
  - : Смещение горизонтальной позиции заданного фонового изображения относительно контейнера. Значение 0% означает, что левый край фонового изображения выровнен с левым краем контейнера, а значение 100% означает, что правый край фонового изображения выровнен с правым краем контейнера, таким образом значение 50% горизонтально центрирует фоновое изображение.

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("background-position")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Использование множественных фонов](/ru/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
