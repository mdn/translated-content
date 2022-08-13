---
title: ':last-of-type'
slug: Web/CSS/:last-of-type
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/:last-of-type
---
{{CSSRef}}

## Übersicht

Die `:last-of-type` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert den letzten Geschwisterknoten eines Typs in der Liste von Kindknoten des Elternelements.

## Syntax

    element:last-of-type { Stileigenschaften }

## Beispiel

Um das letzte {{HTMLElement("em")}} Element innerhalb eines {{HTMLElement("p")}} Elements auszuwählen, kann folgender Code verwendet werden:

```css
p em:last-of-type {
  color: lime;
}
```

```html
<p>
  <em>Ich bin nicht grün. :(</em>
  <strong>Ich bin nicht grün. :(</strong>
  <em>Ich bin grün! :D</em>
  <strong>Ich bin auch nicht grün. :(</strong>
</p>

<p>
  <em>Ich bin nicht grün. :(</em>
  <span><em>Ich bin grün!</em></span>
  <strong>Ich bin nicht grün. :(</strong>
  <em>Ich bin grün! :D</em>
  <span><em>Ich bin auch grün!</em> <strike> Ich bin nicht grün. </strike></span>
  <strong>Ich bin auch nicht grün. :(</strong>
</p>
```

...entspricht:

{{EmbedLiveSample('Beispiel','100%', '120')}}

## Spezifikation

| Spezifikation                                                                                    | Status                               | Kommentar                |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#last-of-type-pseudo', ':last-of-type')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung           |
| {{SpecName('CSS3 Selectors', '#last-of-type-pseudo', ':last-of-type')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.last-of-type")}}

## Siehe auch

- {{Cssxref(":nth-last-of-type")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":nth-of-type")}}
