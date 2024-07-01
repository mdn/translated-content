---
title: <rect>
slug: Web/SVG/Element/rect
---

{{SVGRef}}

`<rect>` - это базовая SVG фигура, используется для отрисовки прямоугольников по координатам угла, длины и высоты прямоугольника. Также может использоваться для отрисовки прямоугольников со скруглёнными углами.

## Контекст использования

| Категория              | Простая фигура, Графический элемент                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Разрешённое содержимое | Любое количество указанных элементов в любом порядке: [Элементы анимации](/en/SVG/Element#Animation) » [Элементы описания](/en/SVG/Element#Descriptive) » |
| Нормативный документ   | [SVG 1.1 (2ое издание)](http://www.w3.org/TR/SVG/shapes.html#RectElement)                                                                                 |

## Пример

### Простой пример использования rect

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100"/>
</svg>
```

» [rect-1.svg](rect-1.svg)

### `<rect>` со скруглёнными углами

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10"
        width="100" height="100"
        rx="15" ry="15"/>

</svg>
```

» [rect-2.svg](rect-2.svg)

## Атрибуты

### Глобальные атрибуты

- [Атрибуты условной обработки](/en/SVG/Attribute#ConditionalProccessing)
- [Атрибуты ядра](/en/SVG/Attribute#Core)
- [Атрибуты графических собы](/en/SVG/Attribute#GraphicalEvent)тий
- [Атрибуты представления](/en/SVG/Attribute#Presentation)
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Специальные атрибуты

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("rx") }}
- {{ SVGAttr("ry") }}

## DOM Интерфейс

Данный элемент реализует интерфейс [`SVGRectElement`](/en/DOM/SVGRectElement).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ SVGElement("path") }}
