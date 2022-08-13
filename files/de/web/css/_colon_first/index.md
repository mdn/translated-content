---
title: ':first'
slug: Web/CSS/:first
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/:first
---
{{CSSRef}}

## Übersicht

Die `:first` {{cssxref("@page")}} [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) beschreibt das Styling der ersten Seite, wenn ein Dokument gedruckt wird.

> **Note:** **Hinwweis:** Nicht alle CSS Eigenschaften sind veränderbar. Es können nur Ränder, [Schusterjungen](https://de.wikipedia.org/wiki/Hurenkind_und_Schusterjunge#Schusterjunge), [Hurenkinder](https://de.wikipedia.org/wiki/Hurenkind_und_Schusterjunge#Hurenkind) und Seitenumbrüche innerhalb des Dokuments geändert werden. Alle anderen CSS Eigenschaften werden ignoriert.

## Beispiele

```css
@page :first {
  margin: 2in 3in;
}
```

> **Note:** **Hinwweis:** Nur die absoluten Längeneinheiten können verwendet werden, wenn ein Rand definiert wird. Bitte schaue dir die Seite über [Längen](/de/docs/Web/CSS/length#Absolute_L.C3.A4ngenangaben) für mehr Informationen an.

## Spezifikationen

| Spezifikation                                                                        | Status                                   | Kommentar                |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Paged Media', '#left-right-first', ':first')}} | {{Spec2('CSS3 Paged Media')}} | Keine Änderung           |
| {{SpecName('CSS2.1', 'page.html#page-selectors', ':first')}}     | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.first")}}

## Siehe auch

- {{Cssxref("@page")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
