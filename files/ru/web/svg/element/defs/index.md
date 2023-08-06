---
title: <defs>
slug: Web/SVG/Element/defs
---

{{SVGRef}}

SVG позволяет задавать графические объекты для последующего использования. Рекомендуется там, где это возможно, объявлять подобные элементы внутри элемента **`<defs>`**. Объекты, созданные внутри элемента `<defs>` не отображаются немедленно; рассматривайте их, как шаблоны или макросы, созданные для будущего использования.

Создание подобных элементов внутри элемента `<defs>` способствует лучшему пониманию содержимого SVG и поэтому способствует также доступности. Вы можете использовать элемент {{SVGElement("use")}}, чтобы отрисовать данные элементы в любом месте области просмотра.

`<defs>` также можно использовать для создания градиентов; в качестве иллюстрации можно посмотреть пример для атрибута {{SVGAttr("x1")}}.

## Контекст использования

{{svginfo}}

## Атрибуты

### Глобальные атрибуты

- [Conditional processing attributes](/ru/docs/Web/SVG/Attribute#Conditional_processing_attributes)
- [Core attributes](/ru/docs/Web/SVG/Attribute#Core_attributes)
- [Graphical event attributes](/ru/docs/Web/SVG/Attribute#Graphical_event_attributes)
- [Presentation attributes](/ru/docs/Web/SVG/Attribute#Presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Специфичные атрибуты

_Нет_

## Интерфейс DOM

Элемент реализует интерфейс {{domxref("SVGDefsElement")}}.

## Пример

```xml
<svg width="80px" height="30px" viewBox="0 0 80 30"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="60" height="10"
        fill="url(#Gradient01)" />
</svg>
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Связанные темы

- {{SVGElement("use")}}
