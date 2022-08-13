---
title: ':link'
slug: Web/CSS/:link
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:link
---
{{CSSRef}}

## Übersicht

Die `:link` [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes "Pseudo-classes") erlaubt es, Links innerhalb von Elementen auszuwählen. Dies wählt jeden Link aus, der bisher noch nicht besucht wurde, auch die, die bereits durch andere Selektoren anderer linkbezogener Pseudoklassen wie {{cssxref(":hover")}}, {{cssxref(":active")}} oder {{cssxref(":visited")}} gestylt wurden. Um nur die unbesuchten Links anzusprechen, ist es deshalb wichtig, die _LVHA-Reihenfolge_ einzuhalten: `:link` — `:visited` — `:hover` — `:active`. Die {{cssxref(":focus")}} Pseudoklasse wird normalerweise direkt neben `:hover` platziert, je nach gewünschtem Effekt davor oder danach.

## Beispiele

    a:link {
      color: slategray;
    }

    .external:link {
      background-color: lightblue;
    }

## Spezifikationen

| Spezifikation                                                                                | Status                                   | Kommentar                                             |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| {{ SpecName('CSS4 Selectors', '#link', ':link') }}                         | {{ Spec2('CSS4 Selectors') }} | Keine Änderung                                        |
| {{ SpecName('CSS3 Selectors', '#link', ':link') }}                         | {{ Spec2('CSS3 Selectors') }} | Keine Änderung                                        |
| {{ SpecName('CSS2.1', 'selector.html#link-pseudo-classes', ':link') }} | {{ Spec2('CSS2.1') }}             | Berenzung auf {{HTMLElement("a")}} aufgehoben |
| {{ SpecName('CSS1', '#anchor-pseudo-classes', ':link') }}                 | {{ Spec2('CSS1') }}                 | Ursprüngliche Definition                              |

## Browser Kompatibilität

{{Compat("css.selectors.link")}}

## Siehe auch

- {{cssxref(":visited")}}, {{cssxref(":hover")}}, {{cssxref(":active")}}
