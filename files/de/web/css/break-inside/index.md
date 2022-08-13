---
title: break-inside
slug: Web/CSS/break-inside
translation_of: Web/CSS/break-inside
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`break-inside`** gibt an, wie Seiten, Spalten oder Abschnitte innerhalb einer generierten Box umbrechen. Wenn es keine generierte Box gibt, wird die Eigenschaft ignoriert.

```css
/* Spezifische Werte */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* Globale Werte */
break-inside: inherit;
break-inside: initial;
break-inside: unset;
```

Alle Begrenzungen eines Elements sind ein möglicher Brechpunkt. Dieser wird von drei Eigenschaften beeinflusst:

- Dem Wert für {{cssxref("break-after")}} des vorherigen Elements.
- Dem Wert für {{cssxref("break-before")}} des nachfolgenden Elements.
- Dem Wert für `break-inside` des Elternelements.

Um zu ermitteln, ob ein Umbruch erfolgen muss, werden folgende Regeln angewendet:

1. Besitzt eine der drei Eigenschaften einen _forced break value_ (`always`, `left`, `right`, `page`, `column`, oder `region`), so hat sie Vorrang. Wenn mehrere Eigenschaften einen _forced break value_ besitzen, gewinnt das Element, welches als letztes im Flow auftritt. Das heißt: `break-before` überwiegt `break-after`, welches wiederum `break-inside` überwiegt.
2. Besitzt eine der drei Eigenschaften einen _avoid break value_ (`avoid`, `avoid-page`, `avoid-region`, or `avoid-column`), so erfolgt kein Umbruch.

Nachdem erzwungene Umbrüche gemacht wurden, werden bei Bedarf weiche Umbrüche hinzugefügt. Davon ausgenommen sind Elementbegrenzungen, für die der Wert `avoid` gilt.

{{cssinfo}}

## Syntax

Die `break-inside`-Eigenschaft wird durch einen der folgenden Werte spezifiziert.

### Werte

- `auto`
  - : Initialwert. Erlaubt jede Art von Umbruch (Seiten-, Spalten- oder Abschnittsumbruch) innerhalb der Box, erzwingt ihn aber nicht.
- `avoid`
  - : Vermeidet jede Art von Umbruch (Seiten-, Spalten- oder Abschnittsumbruch) innerhalb der Box.
- `avoid-page`
  - : Vermeidet Seitenumbrüche innerhalb der Box.
- `avoid-column`
  - : Vermeidet Spaltenumbrüche innerhalb der Box.
- `avoid-region` {{experimental_inline}}
  - : Vermeidet Regionsumbrüche innerhalb der Box.

### Formale Syntax

{{csssyntax}}

## Page-break-Aliasse

Aus Gründen der Kompatibilität soll die veraltete Eigenschaft {{cssxref("page-break-inside")}} von Browsern als ein Alias für `break-inside` behandelt werden. So wird sichergestellt, dass Projekte mit `page-break-inside` sich weiterhin wie konzipiert verhalten. Für folgende Werte sollen die aufgeführten Aliasse gelten:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Spezifikationen

| Spezifikation                                                                                                        | Status                                   | Bemerkung                                     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------- |
| {{SpecName('CSS3 Fragmentation', '#break-within', 'break-inside')}}                             | {{Spec2('CSS3 Fragmentation')}} | Keine Änderungen.                             |
| {{SpecName('CSS3 Regions', '#region-flow-break', 'break-inside')}}                             | {{Spec2('CSS3 Regions')}}         | Erweitert die Eigenschaft um Regionsumbrüche. |
| {{SpecName('CSS3 Multicol', '#break-before-break-after-break-inside', 'break-inside')}} | {{Spec2('CSS3 Multicol')}}     | Initiale Spezifikation.                       |

## Browser-Kompatibilität

{{Compat("css.properties.break-inside", 4)}}

### Anmerkungen zur Kompatibilität

Vor Firefox 65 kann die veraltete {{cssxref("page-break-inside")}}-Eigenschaft zur Vermeidung von Spalten- und Seitenumbrüchen genutzt werden. Verwenden Sie für Rückwärtskompatibilität beide Eigenschaften.

Für ältere WebKit-basierte Browser können Sie die Präfix-Eigenschaft `-webkit-column-break-inside` verwenden, um Spaltenumbrüche zu steuern.
