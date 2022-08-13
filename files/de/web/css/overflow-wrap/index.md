---
title: word-wrap
slug: Web/CSS/overflow-wrap
tags:
  - CSS
  - CSS Eigenschaft
  - NeedsLiveSample
  - Referenz
translation_of: Web/CSS/overflow-wrap
original_slug: Web/CSS/word-wrap
---
{{CSSRef}}

## Übersicht

Die `word-wrap` Eigenschaft wird verwendet, um anzugeben ob der Webbrowser Zeilenumbrüche innerhalb von Wörtern machen darf. Dies ist nötig um einem Overflow vorzubeugen, wenn ein sonst nicht trennbarer Text zu lang für die beinhaltende Box wäre.

> **Hinweis:** Die ursprünglich (unprefixed) proprietäre Erweiterung `word-wrap` von Microsoft wurde im aktuellen Entwurf der CSS3 Text Spezifikation in {{cssxref("overflow-wrap")}} umbenannt. `word-wrap` wird jetzt als "alternativer Name" für `overflow-wrap` angesehen. Stabile Builds von Google Chrome und Opera unterstützen die neue Syntax.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
word-wrap: normal;
word-wrap: break-word;

/* Global values */
word-wrap: inherit;
word-wrap: initial;
word-wrap: unset;
```

### Werte

- `normal`
  - : Zeilen dürfen nur bei normal Trennstellen von Wörtern umbrechen.
- `break-word`
  - : Normalerweise nicht trennbare Wörter dürfen an beliebigen Stellen getrennt werden, wenn es sonst keine anwendbaren Trennstellen in der Zeile gibt.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
p { width: 13em; background: gold; }
```

FStrPrivFinÄndG (Gesetz zur Änderung des Fernstraßenbauprivatfinanzierungsgesetzes und straßenverkehrsrechtlicher Vorschriften)

```css
p { width: 13em; background: gold; word-wrap: break-word; }
```

FStrPrivFinÄndG (Gesetz zur Änderung des Fernstraßenbauprivatfinanzierungsgesetzes und straßenverkehrsrechtlicher Vorschriften)

## Spezifikationen

| Spezifikation                                                                        | Status                           | Bemerkung           |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{ SpecName('CSS3 Text', '#propdef-word-wrap', 'word-wrap') }} | {{ Spec2('CSS3 Text') }} | Initiale Definition |

## Webbrowserkompatibilität

{{Compat("css.properties.overflow-wrap")}}

## Siehe auch

- {{cssxref("word-break")}}
