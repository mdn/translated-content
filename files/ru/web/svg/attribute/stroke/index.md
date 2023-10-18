---
title: stroke
slug: Web/SVG/Attribute/stroke
---

« [SVG Attribute reference home](/en/SVG/Attribute)

Атрибут обводки определяет цвет контура в данном графическом элементе. Значение по умолчанию для атрибута обводки — **None**.

## Контекст использования

| Категория            | Presentation attribute                                                         |
| -------------------- | ------------------------------------------------------------------------------ |
| Значения             | [\<paint>](/en/SVG/Content_type#Paint), `context-fill`, `context-stroke`       |
| Анимируемый          | Да                                                                             |
| Нормативный документ | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/painting.html#StrokeProperty) |

## Примеры

### SVG Line с stroke

#### Пример 1: Нарисуйте прямую зелёную линию, используя **stroke**

```html
<svg height="50" width="300">
  <path stroke="green" d="M5 20 1215 0" />
</svg>
```

{{EmbedLiveSample('Пример_1_Нарисуйте_прямую_зелёную_линию_используя_stroke', '300', '50')}}

#### Пример 2: Нарисуйте чёрный круг с синей рамкой используя stroke

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="2" fill="black" />
</svg>
```

{{EmbedLiveSample('Пример_2_Нарисуйте_чёрный_круг_с_синей_рамкой_используя_stroke', '100', '120')}}

## Использование `context-stroke`

Информацию об использовании значения нестандартного и ограниченного `context-stroke` (и `context-fill`) смотреть в документации для свойства {{cssxref("-moz-context-properties")}}.

## Элементы

Следующие элементы могут использовать атрибут `stroke`.

- [Shape elements](/en/SVG/Element#Shape)
- [Text content elements](/en/SVG/Element#TextContent)
