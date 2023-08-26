---
title: <animateMotion>
slug: Web/SVG/Element/animateMotion
---

{{SVGRef}}

Элемент **`<animateMotion>`** вызывает перемещение ссылочного элемента вдоль пути движения.

## Контекст использования

{{svginfo}}

## Атрибуты

### Глобальные атрибуты

- [Условные атрибуты обработки](/ru/docs/SVG/Attribute#Conditional_processing_attributes)
- [Основные атрибуты](/ru/docs/SVG/Attribute#Core_attributes)
- [Атрибуты события анимации](/ru/docs/SVG/Attribute#Animation_event_attributes)
- [Атрибуты Xlink](/ru/docs/SVG/Attribute#XLink_attributes)
- [Атрибуты времени анимации](/ru/docs/SVG/Attribute#Animation_timing_attributes)
- [Величина атрибутов анимации](/ru/docs/SVG/Attribute#Animation_value_attributes)
- [Атрибуты добавления анимации](/ru/docs/SVG/Attribute#Animation_addition_attributes)
- {{SVGAttr("externalResourcesRequired")}}

### Собственные атрибуты

- {{SVGAttr("calcMode")}}
- {{SVGAttr("path")}}
- {{SVGAttr("keyPoints")}}
- {{SVGAttr("rotate")}}
- {{SVGAttr("origin")}}

## DOM интерфейс

Этот элемент реализует интерфейс {{domxref("SVGAnimateMotionElement")}}.

## Пример

### SVG

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Рисуем серый контур движения с двумя
       маленькими кружками в ключевых точках -->
  <path
    id="theMotionPath"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110" />
  <circle cx="10" cy="110" r="3" fill="lightgrey" />
  <circle cx="110" cy="10" r="3" fill="lightgrey" />

  <!-- Рисуем красный круг, который будет перемещаться
       вдоль траектории движения. -->
  <circle cx="" cy="" r="5" fill="red">
    <!-- Определяем анимацию пути движения -->
    <animateMotion dur="6s" repeatCount="indefinite">
      <mpath xlink:href="#theMotionPath" />
    </animateMotion>
  </circle>
</svg>
```

### Результат

{{EmbedLiveSample("Пример", 120, 120)}}

## Характеристики

| Спецификация                                                                         | Статус                        | Комментарий           |
| ------------------------------------------------------------------------------------ | ----------------------------- | --------------------- |
| {{SpecName("SVG Animations 2", "#AnimateMotionElement", "&lt;animateMotion&gt;")}}   | {{Spec2("SVG Animations 2")}} | Без изменений         |
| {{SpecName('SVG1.1', 'animate.html#AnimateMotionElement', '&lt;animateMotion&gt;')}} | {{Spec2('SVG1.1')}}           | Начальное определение |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("mpath")}}
