---
title: Media queries
slug: Web/CSS/CSS_media_queries
---

{{CSSRef("CSS3 Media Queries")}}

**Медиавыражения (media queries)** являются ключевым компонентом [отзывчивого дизайна](/ru/docs/Web/Apps/Progressive/Responsive), который делает возможным для CSS адаптироваться в зависимости от различных параметров или характеристик устройства. Например, медиавыражение может применить различные стили, если экран меньше определённого размера, или в зависимости от того находится устройство в портретном или альбомном режиме. {{cssxref("@media")}} at-правило используется чтобы задать условия применения стилей к документу.

Кроме того, синтаксис медиавыражений используется в других контекстах, таких как атрибут [`media`](/ru/docs/Web/HTML/Element/source#media) элемента {{HTMLElement("source")}}, для определения, нужно или нет использовать этот источник, когда выбирается определённое изображение для использования в элементе {{HTMLElement("picture")}}.

In addition, the {{domxref("Window.matchMedia()")}} method can be used to test the window against a media query. You can also use {{domxref("MediaQueryList.addListener()")}} to be notified whenever the state of the queries changes. With this functionality, your site or app can respond to changes in the device configuration, orientation, or state.

You can learn more about programmatically using media queries in [Testing media queries](/ru/docs/Web/CSS/Media_Queries/Testing_media_queries).

## Reference

### At-rules

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## Guides

- [Using media queries](/ru/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : Introduces media queries, their syntax, and the operators and media features which are used to construct media query expressions.
- [Testing media queries](/ru/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : Describes how to test media queries from your JavaScript code, programmatically, to determine the state of the device, and to set up listeners that let your code be notified when the results of media queries change (such as when the user rotates the screen, causing an orientation change).

## Specifications

| Specification                        | Status                          | Comment            |
| ------------------------------------ | ------------------------------- | ------------------ |
| {{SpecName('CSS3 Conditional')}}     | {{Spec2('CSS3 Conditional')}}   |                    |
| {{SpecName('CSS4 Media Queries')}}   | {{Spec2('CSS4 Media Queries')}} |                    |
| {{SpecName('CSS3 Media Queries')}}   | {{Spec2('CSS3 Media Queries')}} |                    |
| {{SpecName('CSS2.1', 'media.html')}} | {{Spec2('CSS2.1')}}             | Initial definition |
