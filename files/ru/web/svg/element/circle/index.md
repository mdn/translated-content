---
title: <circle>
slug: Web/SVG/Element/circle
---

{{SVGRef}}

`Элемент circle` — базовая SVG фигура, используется для создания кругов c помощью координат центра и размера радиуса.

## Информация

{{svginfo}}

## Пример

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 120 120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
```

» [circle.svg](circle2.svg)

## Атрибуты

### Унаследованные

- [Условные атрибуты](/ru/docs/Web/SVG/Attribute#conditional_processing_attributes) »
- [Ключевые атрибуты](/ru/docs/Web/SVG/Attribute#core_attributes) »
- [Атрибуты графических событий](/ru/docs/Web/SVG/Attribute#graphical_event_attributes) »
- [Атрибуты представления](/ru/docs/Web/SVG/Attribute#presentation_attributes) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Особые

- {{ SVGAttr("cx") }}

Координата центра окружности по оси x.

- {{ SVGAttr("cy") }}

Координата центра окружности по оси y.

- {{ SVGAttr("r") }}

Радиус окружности.

## Интерфейс DOM

Этот элемент реализует интерфейс {{ domxref("SVGCircleElement") }}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ SVGElement("ellipse") }}
- [SVG Circle](https://www.svg-expert.ru/svg/circle/)
