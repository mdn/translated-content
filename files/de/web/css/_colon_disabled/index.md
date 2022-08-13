---
title: ':disabled'
slug: Web/CSS/:disabled
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:disabled
---
{{CSSRef}}

## Übersicht

Die `:disabled` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) steht für alle deaktivierten Elemente. Ein Element gilt als deaktiviert, wenn es nicht aktiviert (d.h. ausgewählt, angeklickt oder mit Text gefüllt) oder fokussiert werden kann. Das Element verfügt außerdem über einen Status, in dem es aktiviert oder fokussiert werden kann.

## Beispiele

### Beispielselektoren

- input:disabled
  - : Wählt alle deaktivierten Eingabefelder aus.
- select.country:disabled
  - : Wählt ein deaktiviertes Zielelement mit der Klasse country aus.

### Anwendungsbeispiel

Das folgende CSS:

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

Angewendet auf das folgende HTML5 Beispiel:

```html
<form action="#">
  <fieldset>
    <legend>Shipping address</legend>
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Address">
    <input type="text" placeholder="Zip Code">
  </fieldset>
  <fieldset id="billing">
    <legend>Billing address</legend>
    <label for="billing_is_shipping">Same as shipping address:</label>
    <input type="checkbox" onchange="javascript:toggleBilling()" checked>
    <br />
    <input type="text" placeholder="Name" disabled>
    <input type="text" placeholder="Address" disabled>
    <input type="text" placeholder="Zip Code" disabled>
  </fieldset>
</form>
```

```html
<form action="#">
  <fieldset>
    <legend>Empfängeradresse</legend>
    <input type="text" placeholder="Name">
    <input type="text" placeholder="Adresse">
    <input type="text" placeholder="PLZ">
  </fieldset>
  <fieldset>
    <legend>Rechnungsadresse</legend>
    <label for="billing_is_shipping">Rechnungsadresse entspricht der Empfängeradresse:</label>
    <input type="checkbox" onchange="javascript:toggleBilling()" checked>
    <br />
    <input type="text" placeholder="Name" disabled>
    <input type="text" placeholder="Address" disabled>
    <input type="text" placeholder="Zip Code" disabled>
  </fieldset>
</form>
```

Mit ein wenig JavaScript:

```js
function toggleBilling() {
  var billingItems = document.querySelectorAll('#billing input[type="text"]');
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

Führt zu einem ergrautem Hintergrund aller Texteingabefelder im {{HTMLElement("fieldset")}} der Rechnungsadresse.

{{EmbedLiveSample('Anwendungsbeispiel', '300px', '250px', '', 'Web/CSS/:disabled')}}

## Spezifikationen

| Spezifikation                                                                        | Status                               | Kommentar                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-disabled', ':disabled')}} | {{Spec2('HTML WHATWG')}}     | Keine Änderung                                                    |
| {{SpecName('HTML5 W3C', '#selector-disabled', ':disabled')}}     | {{Spec2('HTML5 W3C')}}         | Beschreibt die Semantik von HTML und Formularen.                  |
| {{SpecName('CSS4 Selectors', '#enableddisabled', ':disabled')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung                                                    |
| {{SpecName('CSS3 UI', '#pseudo-classes', ':disabled')}}             | {{Spec2('CSS3 UI')}}         | Verweis auf Selektors Level 3                                     |
| {{SpecName('CSS3 Selectors', '#enableddisabled', ':disabled')}} | {{Spec2('CSS3 Selectors')}} | Beschreibt die Pseudoklasse,aber nicht die dazugehörige Semantik. |

## Browserkompatibilität

{{Compat("css.selectors.disabled")}}

## Siehe auch

- {{Cssxref(":enabled")}}
