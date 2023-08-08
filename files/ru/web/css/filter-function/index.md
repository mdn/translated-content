---
title: <filter-function>
slug: Web/CSS/filter-function
---

{{cssref}}

[Тип данных](/ru/docs/Web/CSS/CSS_Types) [CSS](/ru/docs/Web/CSS) **`<filter-function>`** представляет собой графический эффект, который может изменить внешний вид входного изображения. Он используется в свойствах {{cssxref("filter")}} и {{cssxref("backdrop-filter")}}.

## Синтаксис

Тип данных `<filter-function>` указывается с использованием одной из функций, указанных ниже. Каждая функция требует аргумент, который, если он неверен, не приводит к применению фильтра.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Применяет эффект размытия к изображению.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Делает изображение ярче или темнее.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Увеличивает или уменьшает контрастность изображения.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Применяет к изображению тень.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Преобразует изображение к тонам серого.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Изменяет оттенок изображения за счёт поворота на цветовом круге.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Инвертирует цвета изображения.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Изменяет прозрачность изображения.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Изменяет насыщенность цветов изображения.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Преобразует изображение в сепию.

## Спецификация

| Спецификация                                                                         | Статус                     | Комментарии         |
| ------------------------------------------------------------------------------------ | -------------------------- | ------------------- |
| {{ SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;') }} | {{ Spec2('Filters 1.0') }} | Первое определение. |

## Смотрите также

- Свойства, которые используют этот тип данных: {{cssxref("filter")}} и {{cssxref("backdrop-filter")}}
