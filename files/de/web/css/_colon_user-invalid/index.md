---
title: ':-moz-ui-invalid'
slug: Web/CSS/:user-invalid
tags:
  - CSS
  - CSS Referenz
  - NeedsExample
  - NeedsMobileBrowserCompatibility
  - Non-standard
  - Pseudoklasse
translation_of: Web/CSS/:user-invalid
original_slug: Web/CSS/:-moz-ui-invalid
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `:-moz-ui-invalid` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes validierte Formularelement, dessen Wert nicht auf dessen [Validierungsbeschränkungen](/de/docs/Web/Guide/HTML/Formulare_in_HTML#Beschränkungsvalidierung) basiert, unter bestimmten Umständen. Diese Pseudoklasse wird anhand der folgenden Regeln angewendet:

- Falls das Steuerungselement nicht den Fokus hat und der Wert ungültig ist, wende diese Pseudoklasse an.
- Falls das Steuerungselement den Fokus hat und der Wert gültig war (einschließlich leer) als es den Fokus erhielt, wende die Pseudoklasse nicht an.
- Falls das Steuerungselement den Fokus hat und der Wert ungültig war als es den Fokus erhielt, werte ihn bei jedem Tastendruck erneut aus.
- Falls das Steuerungselement ein Pflichtfeld ist, werden die vorherigen Regeln nur angewandt, falls der Benutzer den Wert geändert hat oder versucht, das Formular abzuschicken.

Das Ergebnis ist, dass wenn das Steuerungselement gültig war als der Benutzer angefangen hat, mit ihm zu interagieren, das Gültigkeitsstyling nur geändert wird, falls der Benutzer den Fokus auf ein anderes Steuerungselement setzt. Falls der Benutzer jedoch versucht, einen zuvor markierten Wert zu korrigieren, zeigt das Steuerungselement sofort an, wenn der Wert gültig wird. Auf Pflichtfelder wird die Pseudoklasse nur angewendet, falls der Benutzer diese ändert oder versucht, einen unveränderten gültigen Wert abzuschicken.

Standardmäßig wendet Gecko einen Stil an, der ein rotes "Leuchten" (unter Vernwendung der {{cssxref("box-shadow")}} Eigenschaft) um Felder erzeugt, die diese Pseudoklasse zugewiesen haben. Siehe die {{cssxref(":invalid")}} Pseudoklasse für ein Beispiel, das zeigt, wie der Standardstil überschrieben werden kann.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":valid")}}
- {{cssxref(":invalid")}}
- {{cssxref(":required")}}
- {{cssxref(":optional")}}
- {{cssxref(":-moz-ui-valid")}}
