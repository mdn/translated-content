---
title: visibility
slug: Web/CSS/visibility
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - Layout
  - NeedsLiveSample
  - Referenz
  - Web
translation_of: Web/CSS/visibility
---
{{CSSRef}}

## Übersicht

Die `visibility` Eigenschaft legt fest, ob ein Element sichtbar ist.

Sie kann dazu verwendet werden, ein Element zu verstecken, aber den Raum, den es eingenommen hätte zu belassen. Sie kann auch Zeilen oder Spalten einer Tabelle verstecken.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Globale Werte */
visibility: inherit;
visibility: initial;
visibility: unset;
```

### Werte

- `visible`
  - : Standardwert. Das Element ist sichtbar.
- `hidden`
  - : Das Element ist unsichtbar (komplett transparent), es beeinflusst jedoch immernoch das Layout. Kindelemente mit `visibility:visible` sind sichtbar (funktioniert nicht im IE bis Version 7).
- `collapse`
  - : Bei Tabellenzeilen, Spalten und Zeilengruppen wird/werden die Spalte(n) bzw. Zeile(n) entfernt und der Platz, den sie eingenommen hätten, wird entfernt (als ob `{{cssxref("display")}}: none;` für die Zeile/Spalte der Tabelle angegeben worden wäre). Jedoch wird die Größe der anderen Zeilen und Spalten immer noch so berechnet, als ob die zusammengefallene(n) Zeile(n)/Spalte(n) da wären. Die Funktion ist zum schnellen Entfernen von Tabellenspalten/-zeilen gedacht ohne die Breiten und Höhen jedes Teils der Tabelle neuberechnen zu müssen. Für XUL-Elemente ist die berechnete Größe des Elements immer 0, unabhängig von anderen Styles, die normalerweise die Größe beeinflussen würden. Jedoch werden Außenabstände immer noch berücksichtigt. Bei anderen Elementen ist `collapse` gleichbedeutend zu `hidden`.

### Interpolation

Sichtbarkeitswerte sind interpolierbar zwischen _sichtbar_ und _nicht sichtbar_. Einer der Start- oder Endwerte muss daher `visible` sein, damit eine Interpolation stattfinden kann. Falls einer der Werte `visible` ist, wird er in einem einzelnen Schritt interpoliert, wobei Werte der Timingfunktion zwischen `0` und `1` auf `visible` und andere Werte der Timingfunktion (welche nur am Start/Ende des Übergangs oder als das Ergebnis aus `cubic-bezier()` Funktionen mit y-Werten außerhalb von \[0, 1]) abgebildet werden.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
p        { visibility: hidden; }    /* Absätze sind unsichtbar */
p.showme { visibility: visible; }   /* Absätze der Klasse "showme" sind sichtbar */
tr.col   { visibility: collapse; }  /* Tabellenzeilen mit der Klasse "col" fallen zusammen. */
```

### Hinweise

Die Unterstützung von `visibility:collapse` fehlt oder ist teilweise fehlerhaft in manchen modernen Browsern. In einigen Fällen wird es bei Elementen mit Ausnahme von Tabellenzeilen und -spalten nicht korrekt interpretiert.

`visibility:collapse` kann die Darstellung einer Tabelle ändern, falls die Tabelle verschachtelte Tabellen in den zusammengefallenen Zellen beinhaltet, sofern `visibility:visible` explizit bei den Tabellen angegeben ist.

## Spezifikationen

| Spezifikation                                                                            | Status                                   | Kommentar                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------- |
| {{SpecName('CSS3 Box', '#the-visibility-property', 'visibility')}} | {{Spec2('CSS3 Box')}}             | Keine Änderungen                       |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'visibility')}} | {{Spec2('CSS3 Transitions')}} | Definiert `visibility` als animierbar. |
| {{SpecName('CSS2.1', 'visufx.html#visibility', 'visibility')}}     | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition               |

## Browserkompatibilität

{{Compat("css.properties.visibility")}}
