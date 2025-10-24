---
title: fill-opacity
slug: Web/SVG/Reference/Attribute/fill-opacity
---

{{SVGRef}}

« [Справочник SVG атрибутов](/ru/docs/Web/SVG/Reference/Attribute)

Этот атрибут определяет прозрачность цвета заполнения содержимого элемента.

## Контекст использования

| Категория                  | Атрибут оформления                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------ |
| Значение                   | [\<opacity-value>](/en-US/SVG/Content_type#opacity_value) \| inherit                 |
| Предустановленное значение | 1                                                                                    |
| Анимируемый                | Да                                                                                   |
| Спецификация               | [SVG 1.1 (2nd Edition)](https://www.w3.org/TR/SVG/painting.html#FillOpacityProperty) |

## Примеры

### SVG

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" />
</svg>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" fill-opacity="0.25" />
</svg>
```

### результат

{{EmbedLiveSample('Примеры', 200, 200)}}

## Элементы

Следующие группы элементов могут быть использованы с атрибутом `fill-opacity`:

- [Элементы графических форм (Shape elements](/en-US/SVG/Element#shape))
- [Текстовые элементы](/en-US/SVG/Element#textcontent)

## Смотрите также

- {{ SVGAttr("stroke-opacity") }}
- {{ SVGAttr("opacity") }}
