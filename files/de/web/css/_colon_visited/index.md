---
title: ':visited'
slug: Web/CSS/:visited
tags:
  - CSS
  - CSS Pseudoklasse
  - CSS3
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/:visited
---
{{ CSSRef() }}

## Übersicht

Die `:visited` [Pseudoklasse](/en/CSS/Pseudo-classes "Pseudo-classes") betrifft nur bereits besuchte Links. Die Stile können von weiteren Pseudoklassen überschrieben werden: {{ cssxref(":link") }}, {{ cssxref(":hover") }}, und {{ cssxref(":active") }}. Um nur besuchte Links auszuwählen, ist es deshalb wichtig, die _LVHA-Reihenfolge_ einzuhalten: `:link` — `:visited` — `:hover` — `:active`.

> **Hinweis:** Aus Datenschutzgründen ist der Einsatzbereich dieser Pseudoklasse auf die folgenden Eigenschaften begränzt: {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("column-rule-color") }}, `fill` und `stroke`. Beachte, dass auch der Alphakanal ignoriert wird: die Alphakomponente der nicht besuchten Regel wird stattdessen verwendet (außer, wenn die Deckkraft 0 ist. In diesem Fall wird die gesamte Farbe ignoriert und die Farbe der nicht besuchten Regel verwendet).Da sich die Farbe ändern kann, liefert `getComputedStyle` immer den Wert von unbesuchten Links zurück.Für mehr informationen zu den Schutzmasnahmen siehe [Privacy and the :visited selector](/de/docs/CSS/Privacy_and_the_:visited_selector).

## Beispiele

```css
a:visited { color: #4b2f89; }
a:visited { background-color: white }
```

## Spezifikationen

| Spezifikation                                                                                    | Status                                   | Anmerkung                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS4 Selectors', '#link', ':visited') }}                         | {{ Spec2('CSS4 Selectors') }} | Keine Änderung                                                                                                 |
| {{ SpecName('CSS3 Selectors', '#link', ':visited') }}                         | {{ Spec2('CSS3 Selectors') }} | Keine Änderung                                                                                                 |
| {{ SpecName('CSS2.1', 'selector.html#link-pseudo-classes', ':visited') }} | {{ Spec2('CSS2.1') }}             | Berenzung auf {{ HTMLElement("a") }} aufgehoben. Beschränkt aus Datenschutzgründen das Browserverhalten. |
| {{ SpecName('CSS1', '#anchor-pseudo-classes', ':visited') }}                 | {{ Spec2('CSS1') }}                 | Standard Wert definiert                                                                                        |

## Browser Kompatibilität

{{Compat("css.selectors.visited")}}

## Siehe auch

- [Privatsphäre und der :visited Selektor](/de/docs/CSS/Privacy_and_the_:visited_selector)
- Weitere Link-Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":active")}} und {{cssxref(":hover")}}.
