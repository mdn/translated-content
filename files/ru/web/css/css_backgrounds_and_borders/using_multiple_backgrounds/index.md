---
title: Множественные фоны
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

К элементам можно применить несколько фонов. Они накладываются друг на друга: фон, заданный первым, станет верхним, а заданный последним — нижним. Только последний фон может включать цвет фона.

Задавать `множественные фоны` легко:

```css
.myclass {
  background:
    background1,
    background2,
    /* …, */ backgroundN;
}
```

Вы можете сделать это сокращённым свойством {{ cssxref("background") }} и отдельными свойствами кроме {{ cssxref("background-color") }}. Таким образом, следующие свойства могут быть определены в виде списка по одному на фон: {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## Пример

В этом примере заданы три фона: логотип Firefox, изображение пузырей и [линейный градиент](/ru/docs/Web/CSS/gradient/linear-gradient):

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image:
    url(firefox.png), url(bubbles.png),
    linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### Результат

{{EmbedLiveSample("Пример", 600, 400)}}

Как вы можете видеть, логотип Firefox (первый в списке {{ cssxref("background-image") }}) расположен сверху, далее идёт фон с пузырями и в самом низу градиент (указанный последним). Каждое последующее под-свойство ({{ cssxref("background-repeat") }} и {{ cssxref("background-position") }}) применяется к соответствующим фонам. Например, первое значение свойства {{ cssxref("background-repeat") }} применяется к первому фону и т.д.

## Смотрите также

- [Использование CSS-градиентов](/ru/docs/Web/CSS/CSS_images/Using_CSS_gradients)
