---
title: animate
slug: Web/SVG/Element/animate
tags:
  - Element
  - SVG
  - SVG Animation
translation_of: Web/SVG/Element/animate
---
{{SVGRef}}

Das `animate` Element wird innerhalb eines Shape Elements angelegt und definiert, wie ein Attribut des Elements sich durch die Animation verändert.Das Attribut wird sich innerhalb der angegebenen Dauer vom initialen- zum End-Wert ändern.

Es wird normalerweise innerhalb des Elements eingefügt, oder referenziert von einem `href` attribut des Zielelements.

## Usage context

{{svginfo}}

## Attribute

### Globale Attribute

- [Conditional processing attributes](/de/docs/SVG/Attribute#ConditionalProccessing "SVG/Attribute#ConditionalProccessing") »
- [Core attributes](/de/docs/SVG/Attribute#Core "SVG/Attribute#Core") »
- [Animation event attributes](/de/docs/SVG/Attribute#AnimationEvent "SVG/Attribute#AnimationEvent") »
- [Xlink attributes](/de/docs/SVG/Attribute#XLink "SVG/Attribute#XLink") »
- [Animation attribute target attributes](/de/docs/SVG/Attribute#AnimationAttributeTarget "SVG/Attribute#AnimationAttributeTarget") »
- [Animation timing attributes](/de/docs/SVG/Attribute#AnimationTiming "SVG/Attribute#AnimationTiming") »
- [Animation value attributes](/de/docs/SVG/Attribute#AnimationValue "SVG/Attribute#AnimationValue") »
- [Animation addition attributes](/de/docs/SVG/Attribute#AnimationAddition "SVG/Attribute#AnimationAddition") »
- {{SVGAttr("externalResourcesRequired")}}

### Spezifische Attribute

- {{SVGAttr("attributeName")}}
- {{SVGAttr("attributeType")}}
- {{SVGAttr("from")}}
- {{SVGAttr("to")}}
- {{SVGAttr("dur")}}
- {{SVGAttr("repeatCount")}}

## DOM Schnittstelle

Dieses Element implementiert die [`SVGAnimateElement`](/en-US/docs/DOM/SVGAnimateElement "DOM/SVGAElement") Schnittstelle.

## Beispiel

### SVG

```html
<?xml version="1.0"?>
<svg width="120" height="120" viewBox="0 0 120 120" version="1.1"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100">
    <animate attributeType="XML" attributeName="x" from="-100" to="120"
        dur="10s" repeatCount="indefinite"/>
  </rect>
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 120, 120)}}

## Bedenken bezüglich der Barrierefreiheit

Blinkende und blitzende Animation kann für Menschen mit kognitiven Problemen wie Aufmerksamkeitsdefizit Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Arten von Bewegungen ein Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Erwägen Sie, einen Mechanismus zum Anhalten oder Deaktivieren der Animation vorzusehen, sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) zu verwenden, um eine komplementäre Erfahrung für Benutzer zu schaffen, die eine Präferenz für keine Animationen haben.

- [Designen von sicheren Web Animationen für Bewegungsempfindlichkeit - Ein Artikel der Extraklasse](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsives Design für Bewegungen | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verstehen der WCAG, Guideline 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Verstehen der Erfolgskriteren 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

| Spezifikation                                                                                    | Status                                   | Kommentar           |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{SpecName("SVG Animations 2", "#AnimateElement", "&lt;animate&gt;")}}     | {{Spec2("SVG Animations 2")}} | Keine Änderung      |
| {{SpecName("SVG1.1", "animate.html#AnimateElement", "&lt;animate&gt;")}} | {{Spec2("SVG1.1")}}                 | Initiale Definition |

## Browser Kompatiblität

{{Compat("svg.elements.animate")}}
