---
title: blur()
slug: Web/CSS/filter-function/blur
---

{{cssref}}

Функция [CSS](/ru/docs/Web/CSS) **`blur()`** применяет [размытие по Гауссу](https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D1%82%D1%80_%D0%93%D0%B0%D1%83%D1%81%D1%81%D0%B0) к входному изображению. Его результатом является {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## Синтаксис

```
blur(radius)
```

### Параметры

- `radius`
  - : Радиус размытия, выраженный в {{cssxref("&lt;length&gt;")}}. Он определяет отклонение от стандартной функции Гаусса, то есть как много пикселей на экране смешиваются друг с другом. Таким образом, большее значение даст большее размытие. Значение `0` оставит изображение без изменений.

## Пример

```css
blur(0)        /* Без эффекта */
blur(8px)      /* Размытие с радиусом 8px */
blur(1.17rem)  /* Размытие с радиусом 1.17rem */
```

## Смотрите также

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
