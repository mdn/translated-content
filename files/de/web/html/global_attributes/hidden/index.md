---
title: hidden
slug: Web/HTML/Global_attributes/hidden
tags:
  - Attribut
  - Globales Attribut
  - HTML
  - Reference
  - Referenz
translation_of: Web/HTML/Global_attributes/hidden
original_slug: Web/HTML/Globale_Attribute/hidden
---
> **Note:** {{HTMLSidebar("Global_attributes")}}

Das [globale Attribut](/de/docs/Web/HTML/Global_attributes) **hidden** ist ein boolesches Attribut welches angibt, dass das Element nicht oder nicht länger _relevant_ ist. Zum Beispiel, kann es benutzt werden, um Elemente einer Seite zu verstecken, die nicht benötigt werden, wenn ein Anmeldeprozess erfolgreich durchgeführt wurde. Der Browser wird solche Elemente nicht anzeigen.

Dieses Attribut soll nicht benutzt werden, um Inhalt zu verstecken, der rechtmäßig angzeigt werden könnte. Zum Beispiel sollte es nicht benutzt werden, um Seiten eines Tabelleninterface zu verstecken. Dies ist eine Gestaltungsfrage.

Versteckte Elemente sollten nicht mit sichtbaren Elementen verlinkt sein. Elemente, die von versteckten Elementen abstammen, sind trotzdem aktiv, was bedeutet, dass Skript-Elemente immer noch ausgeführt und Form-Elemente gesendet werden können.

> **Note:** **Bemerkung:** Das Abändern des Wertes der CSS {{cssxref("display")}} Eigenschaft eines Elementes mit dem `hidden` Attribut überschreibt das Verhalten. Also wird ein Element mit Style `display: flex` angezeigt, egal ob das `hidden` Attribut gesetzt ist oder nicht.

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Bemerkung                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#the-hidden-attribute", "hidden")}} | {{Spec2('HTML WHATWG')}} | Keine Änderung seit letztem Snapshot, {{SpecName('HTML5.1')}} |
| {{SpecName('HTML5.1', "editing.html#the-hidden-attribute", "hidden")}}             | {{Spec2('HTML5.1')}}     | Snapshot von {{SpecName('HTML WHATWG')}}, initiale Definition |

## Browserkompatibilität

{{Compat("html.global_attributes.hidden")}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
