---
title: ':required'
slug: Web/CSS/:required
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/:required
---
{{CSSRef}}

## Übersicht

Die `:required` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes "Pseudo-classes") repräsentiert jedes {{HTMLElement("input")}} Element, welches das Attribut {{htmlattrxref("required", "input")}} beinhaltet. So kann das Aussehen von Pflichtfeldern einfach angepasst werden.

Die {{cssxref(":optional")}} Pseudoklasse hingegen kann für die Darstellung von Nicht-Pflichtfeldern verwendet werden.

## Beispiele

Siehe {{cssxref(":invalid")}}.

## Spezifikationen

| Spezifikation                                                                                | Status                               | Kommentar                                                          |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', '#selector-required', ':required')}}         | {{Spec2('HTML WHATWG')}}     | Keine Änderung                                                     |
| {{SpecName('HTML5 W3C', '#selector-required', ':required')}}             | {{Spec2('HTML5 W3C')}}         | Definiert die Semantik bezüglich HTML und Beschränkungsvalidierung |
| {{SpecName('CSS4 Selectors', '#opt-pseudos', ':required')}}             | {{Spec2('CSS4 Selectors')}} | Keine Änderung                                                     |
| {{SpecName('CSS3 Basic UI', '#pseudo-required-value', ':required')}} | {{Spec2('CSS3 Basic UI')}} | Definiert die Pseudoklasse, aber nicht die zugehörige Semantik     |

## Browser Kompatibilität

{{Compat("css.selectors.required")}}

## Siehe auch

- {{cssxref(":optional")}}, {{cssxref(":invalid")}}, {{cssxref(":valid")}}
