---
title: stroke-width
slug: Web/SVG/Attribute/stroke-width
---

« [Справочник SVG атрибутов](/ru/docs/Web/SVG/Attribute)

Атрибут `stroke-width` указывает ширину контура текущего объекта. Его значение по умолчанию: 1. Если используется \<percentage>, значение представляет собой процент от текущего окна просмотра. Если используется значение 0, контур не будет нарисован.

В качестве атрибута представления он также может использоваться как свойство непосредственно внутри таблицы стилей CSS

## Usage context

| **Категория**        | Атрибут представления                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| **Значения**         | [\<length>](/en/SVG/Content_type#Length) \| [\<percentage>](/en/SVG/Content_type#Percentage) \| inherit |
| **Анимируемый**      | Да                                                                                                      |
| Нормативный документ | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty)                     |

## Example

### SVG

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" />
</svg>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" stroke="#ff0" stroke-width="10" />
</svg>
```

### Результат

{{EmbedLiveSample('Example', 200, 200)}}

## Элементы

Следующие элементы могут использовать атрибут `stroke-width`.

- [Элементы форм](/ru/SVG/Element#Shape)
- [Текстовые элементы](/ru/SVG/Element#TextContent)
