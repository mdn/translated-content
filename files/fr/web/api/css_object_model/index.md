---
title: CSS Object Model
slug: Web/API/CSS_Object_Model
tags:
  - API
  - CSSOM
  - Reference
translation_of: Web/API/CSS_Object_Model
---
{{DefaultAPISidebar('CSSOM')}}

Le **CSS Object Model** est un ensemble d’API permettant de manipuler le CSS depuis JavaScript. C’est l’équivalent des API DOM et HTML, mais pour CSS. Il permet de lire et modifier des styles CSS dynamiquement.

## Référence

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
- {{domxref("CSSStylesheet")}}
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
- {{domxref("Stylesheet")}}
- {{domxref("StylesheetList")}}
- {{domxref("TransitionEvent")}}

Quelques autres interfaces sont également étentues par les spécifications relatives au CSSOM : {{domxref("Document")}}, {{domxref("Window")}}, {{domxref("Element")}}, {{domxref("HTMLElement")}}, {{domxref("HTMLImageElement")}}, {{domxref("Range")}}, {{domxref("MouseEvent")}}, et {{domxref("SVGElement")}}.

## Tutoriels

- [Déterminer les dimensions l’un élément](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements) (nécéssite une mise à jour, car datant de l’époque DHTML/Ajax).
- [Gérer l’orientation de l’écran](/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## Spécifications

| Spécification                                    | Statut                                       | Commentaire |
| ------------------------------------------------ | -------------------------------------------- | ----------- |
| {{SpecName("CSSOM")}}                     | {{Spec2("CSSOM")}}                     |             |
| {{SpecName("CSSOM View")}}             | {{Spec2("CSSOM View")}}             |             |
| {{SpecName("Screen Orientation")}}     | {{Spec2("Screen Orientation")}}     |             |
| {{SpecName("CSS3 Fonts")}}             | {{Spec2("CSS3 Fonts")}}             |             |
| {{SpecName("CSS3 Animations")}}         | {{Spec2("CSS3 Animations")}}         |             |
| {{SpecName("CSS3 Transitions")}}     | {{Spec2("CSS3 Transitions")}}     |             |
| {{SpecName("CSS3 Variables")}}         | {{Spec2("CSS3 Variables")}}         |             |
| {{SpecName("CSS3 Conditional")}}     | {{Spec2("CSS3 Conditional")}}     |             |
| {{SpecName("CSS3 Device")}}             | {{Spec2("CSS3 Device")}}             |             |
| {{SpecName("CSS3 Counter Styles")}} | {{Spec2("CSS3 Counter Styles")}} |             |

## Notes sur la compatibilité des navigateurs

Toutes ces fonctionnalités ont été ajoutées petit à petit au fil des années dans les différents navigateurs : ce fut un processus assez complexe, impossible à résumer en un simple tableau. Veuillez vous référer aux interfaces spécifiques pour connaître leurs disponibilités.
