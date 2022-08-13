---
title: ':enabled'
slug: Web/CSS/:enabled
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:enabled
---
{{CSSRef}}

## Übersicht

Die `:enabled` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert alle aktivierten Elemente. Ein Element ist aktiviert, falls es aktiviert werden kann (z. B. markierte, angeklickte Elemente oder solche, die Texteingaben akzeptieren) oder die fokussiert werden können. Das Element hat auch einen deaktivierten Zustand, in welchem es nicht aktiviert werden oder fokussiert werden kann.

## Beispiel

Der folgende Code macht die Textfarbe grün, wenn das Element aktiviert ist, und grau, wenn es deaktiviert ist. Dies erlaubt es, dem Benutzer Feedback darüber zu geben, ob mit den Elementen interagiert werden kann oder nicht.

Das folgende HTML...

```html
<form action="url_of_form">
  <label for="FirstField">First field (enabled):</label> <input type="text" id="FirstField" value="Lorem"><br />
  <label for="SecondField">Second field (disabled):</label> <input type="text" id="SecondField" value="Ipsum" disabled="disabled"><br />
  <input type="button" value="Submit" />
</form>
```

...in Verwendung mit diesem CSS...

```css
input:enabled {
  color: #22AA22;
}

input:disabled {
  color: #D9D9D9;
}
```

...ergibt:

{{EmbedLiveSample("Aktivierte_deaktivierte_Inputs_Beispiel", 550, 95)}}Beachte, dass die Farbe des Buttontexts auch grün ist, da der Button ebenfalls aktiviert ist.

## Spezifikationen

| Spezifikation                                                                        | Status                               | Kommentar                                                       |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-enabled', ':enabled')}}     | {{Spec2('HTML WHATWG')}}     | Keine Änderung                                                  |
| {{SpecName('HTML5 W3C', '#selector-enabled', ':enabled')}}         | {{Spec2('HTML5 W3C')}}         | Definiert die Semantik in Bezug auf HTML und Formulare.         |
| {{SpecName('CSS4 Selectors', '#enableddisabled', ':enabled')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung                                                  |
| {{SpecName('CSS3 Basic UI', '#pseudo-classes', ':enabled')}}     | {{Spec2('CSS3 Basic UI')}} | Verknüpfung zu Selectors Level 3.                               |
| {{SpecName('CSS3 Selectors', '#enableddisabled', ':enabled')}} | {{Spec2('CSS3 Selectors')}} | Definiert die Pseudoklasse, aber nicht die zugehörige Semantik. |

## Browser Kompatibilität

{{Compat("css.selectors.enabled")}}

## Siehe auch

- {{cssxref(":disabled")}}
