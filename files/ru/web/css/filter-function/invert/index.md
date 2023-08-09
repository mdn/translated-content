---
title: invert()
slug: Web/CSS/filter-function/invert
---

{{CSSRef}}

[Функция](/ru/docs/Web/CSS/CSS_Functions) [CSS](/ru/docs/Web/CSS) **`invert()`** инвертирует цвета изображения. Его результатом является {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## Синтаксис

```css
invert(amount)
```

### Parameters

- `amount`
  - : Степень преобразования, заданная в виде целого числа ({{cssxref("&lt;number&gt;")}}) или процента ({{cssxref("&lt;percentage&gt;")}}). Значение `100%` полностью инвертирует цвета, соответственно `0%` ничего не делает. Значения между `0%` и `100%` является линейными множителями эффекта. Начальное занчение для интерполяции — `0`.

## Примеры

### Примеры допустимых значений для invert()

```css
invert(0)     /* Ничего не делает */
invert(.6)    /* Инверсия цвета на 60% */
invert(100%)  /* Полностью инвертированный цвет */
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
