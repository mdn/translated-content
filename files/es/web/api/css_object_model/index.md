---
title: CSS Object Model
slug: Web/API/CSS_Object_Model
tags:
  - API
  - CSSOM
  - Referencia
translation_of: Web/API/CSS_Object_Model
---
{{DefaultAPISidebar('CSSOM')}}

El Modelo de objetos CSS (**CSS Object Model**) es un conjunto de APIs que permite manipular CSS desde JavaScript. Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. Permite leer y modificar el estilo de CSS de forma dinámica.

## Referencia

- {{domxref("AnimationEvent")}}
- {{domxref("CaretPosition")}}
- {{domxref("CSS")}}
- {{domxref("CSSCharsetRule")}}
- {{domxref("CSSConditionRule")}}
- {{domxref("CSSCounterStyleRule")}}
- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFeatureValuesMap")}}
- {{domxref("CSSFontFeatureValuesRule")}}
- {{domxref("CSSGroupingRule")}}
- {{domxref("CSSImportRule")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}
- {{domxref("CSSMarginRule")}}
- {{domxref("CSSMediaRule")}}
- {{domxref("CSSNamespaceRule")}}
- {{domxref("CSSPageRule")}}
- {{domxref("CSSRule")}}
- {{domxref("CSSRuleList")}}
- {{domxref("CSSStyleSheet")}}
- {{domxref("CSSStyleDeclaration")}}
- {{domxref("CSSSupportsRule")}}
- {{domxref("CSSVariablesMap")}}
- {{domxref("CSSViewportRule")}}
- {{domxref("ElementCSSInlineStyle")}}
- {{domxref("GeometryUtils")}}
- {{domxref("GetStyleUtils")}}
- {{domxref("LinkStyle")}}
- {{domxref("MediaList")}}
- {{domxref("MediaQueryList")}}
- {{domxref("PseudoElement")}}
- {{domxref("Screen")}}
- {{domxref("StyleSheet")}}
- {{domxref("StyleSheetList")}}
- {{domxref("TransitionEvent")}}

Algunas otras interfaces también son complementadas por las especificaciones relacionadas con CSSOM: {{domxref("Document")}}, {{domxref("Window")}}, {{domxref("Element")}}, {{domxref("HTMLElement")}}, {{domxref("HTMLImageElement")}}, {{domxref("Range")}}, {{domxref("MouseEvent")}}, y {{domxref("SVGElement")}}.

## Tutoriales

- [Determinar las dimensiones de los elementos](/es/docs/Determining_the_dimensions_of_elements) (Necesita actualización porque se realizó con DHTML/Ajax).
- [Gestionando la orientación de la pantalla](/es/docs/WebAPI/Managing_screen_orientation)

## Especificaciones

| Epecificacion                                    | Estado                                       | Comentario |
| ------------------------------------------------ | -------------------------------------------- | ---------- |
| {{SpecName("CSSOM")}}                     | {{Spec2("CSSOM")}}                     |            |
| {{SpecName("CSSOM View")}}             | {{Spec2("CSSOM View")}}             |            |
| {{SpecName("Screen Orientation")}}     | {{Spec2("Screen Orientation")}}     |            |
| {{SpecName("CSS3 Fonts")}}             | {{Spec2("CSS3 Fonts")}}             |            |
| {{SpecName("CSS3 Animations")}}         | {{Spec2("CSS3 Animations")}}         |            |
| {{SpecName("CSS3 Transitions")}}     | {{Spec2("CSS3 Transitions")}}     |            |
| {{SpecName("CSS3 Variables")}}         | {{Spec2("CSS3 Variables")}}         |            |
| {{SpecName("CSS3 Conditional")}}     | {{Spec2("CSS3 Conditional")}}     |            |
| {{SpecName("CSS3 Device")}}             | {{Spec2("CSS3 Device")}}             |            |
| {{SpecName("CSS3 Counter Styles")}} | {{Spec2("CSS3 Counter Styles")}} |            |

## Notas de compatibilidad con los navegadores

Todas estas funcionalidades han sido añadidas a los navegadores poco a poco durante los años: Es un complejo proceso que no puede ser resumido en una simple tabla. Por favor busca la disponibilidad en navegadores en las interfaces específicas.
