---
title: Множественные фоны
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

## Краткое описание

С помощью [CSS3](/en/CSS/CSS3) вы можете применить несколько фонов к элементам. Они будут располагаться поверх друг друга: фон, заданный первым - в самом верху, последний фон - в самом низу.

Задать множественные фоны легко:

```css
.myclass {
  background:
    background1,
    background 2,
    ...,
    backgroundN;
}
```

Вы можете сделать это сокращённым свойством {{ cssxref("background") }} и отдельными свойствами кроме {{ cssxref("background-color") }}. Таким образом, следующие свойства могут быть определены в виде списка по одному на фон: {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## Пример

В этом примере три фона: логотип Firefox, [линейный градиент](/en/CSS/linear-gradient) и изображение пузырей:

### HTML

```html
<div class="multi_bg_example"></div>
```

### CSS

```css
.multi_bg_example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
  background:
    -moz-linear-gradient(
      to right,
      rgba(30, 75, 115, 1),
      rgba(255, 255, 255, 0)
    ),
    -webkit-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
    -ms-linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
    linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
}
```

## Результат

(If image does not appear in CodePen, click the TIdy button in the CSS section)

{{EmbedLiveSample('Example','600','400')}}

Как вы можете видеть, логотип Firefox (первый в списке) расположен сверху, далее идёт градиент и в самом низу фон с пузырями. Каждое последующее под-свойство ({{ cssxref("background-repeat") }} и {{ cssxref("background-position") }}) применяется к соответствующим фонам. Например первое значение свойства {{ cssxref("background-repeat") }} применяется к первому фону, и т.д.

## Смотрите также

- [Using CSS gradients](/ru/docs/CSS/Using_CSS_gradients)
