---
title: ':not()'
slug: Web/CSS/:not
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - Referenz
  - Selektoren
  - Web
translation_of: Web/CSS/:not
---
{{ CSSRef() }}

## Übersicht

Die [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes "Pseudo-classes") `:not(X)` ist eine Negation zu einem Selektor _X_ als Argument und wird als Funktion angegeben. Sie passt auf Elemente, die nicht durch das Argument repräsentiert werden. X darf keinen weiteren Negationsselektor beinhalten.

Die [Spezifität](/de/docs/Web/CSS/Spezifit%C3%A4t) der `:not` Pseudoklasse entspricht der Spezifität seines Arguments. Die `:not` Pseudoklasse hat im Gegensatz zu anderen Pseudoklassen keinen Einfluss auf die Spezifität.

> **Note:** **Hinweise:\*** Mit der Negation können auch irrationale Selektoren erstellt werden, z. B. `:not(*)`, welche alle Elemente auswählen würde, die keine Elemente sind.
>
> - Es ist möglich, andere Regeln zu überschreiben. `A:not(B)` hat den selben Effekt wie `A`, aber eine höhere Spezifität.
> - `:not(bla){}` passt auf alle Elemente, die nicht `bla` sind **einschließlich `html` und `body`**.

## Syntax

    :not(selector) { Stileigenschaften }

## Beispiele

```css
p:not(.classy) { color: red; }
:not(p) { color: green; }
```

auf folgendes HTML angewandt:

```html
<p>Irgendein Text.</p>
<p class="classy">Irgendein anderer Text.</p>
<span>Noch mehr Text<span>
```

ergibt:

{{EmbedLiveSample('Beispiele', '100%', '150')}}

## Spezifikationen

| Spezifikation                                                            | Status                               | Kommentar                                                  |
| ------------------------------------------------------------------------ | ------------------------------------ | ---------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#negation', ':not()')}} | {{Spec2('CSS4 Selectors')}} | Argument erweitert, um komplexe Selektoren zu ermöglichen. |
| {{SpecName('CSS3 Selectors', '#negation', ':not()')}} | {{Spec2('CSS3 Selectors')}} | Ursprüngliche Definition                                   |

## Browser Kompatibilität

{{Compat("css.selectors.not")}}
