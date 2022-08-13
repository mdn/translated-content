---
title: word-break
slug: Web/CSS/word-break
tags:
  - CSS
  - CSS Eigenschaft
  - CSS3
  - Layout
  - NeedsContent
  - NeedsExample
  - Referenz
  - Web
  - css3-text
translation_of: Web/CSS/word-break
---
{{CSSRef}}

Die `word-break` [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um anzugeben, ob zwischen Wörtern Zeilenumbrüche sein können.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
word-break: normal;
word-break: break-all;
word-break: keep-all;

/* Globale Werte */
word-break: inherit;
word-break: initial;
word-break: unset;
```

### Werte

- `normal`
  - : Die Standardregeln für Zeilenumbrüche werden verwendet.
- `break-all`
  - : Zeilenumbrüche können bei Text, der nicht in CJK (chinesisch/japanisch/koreanisch) geschrieben ist, nach irgendeinem Zeichen eingefügt werden.
- `keep-all`
  - : Erlaubt keine Zeilenumbrüche in CJK-Text. Das Verhalten bei Nicht-CJK-Text ist das gleiche wie bei `normal`.

### Formale Syntax

{{csssyntax}}

## Beispiele

### HTML-Inhalt

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow"> Die Schönbrunn wurde von einem Donaudampfschiffahrtsgesellschaftskapitän gesteuert. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 </p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow"> Die Schönbrunn wurde von einem Donaudampfschiffahrtsgesellschaftskapitän gesteuert. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉 </p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keep narrow"> Die Schönbrunn wurde von einem Donaudampfschiffahrtsgesellschaftskapitän gesteuert. 次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉</p>
```

### CSS-Inhalt

```css
.narrow {
    padding: 5px;
    border: 1px solid;
    width: 8em;
}

.normal {
    word-break: normal;
}

.breakAll {
    word-break: break-all;
}

.keep {
    word-break: keep-all;
}
```

{{EmbedLiveSample('Beispiele', 600, 580, '', 'Web/CSS/word-break')}}

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------ |
| {{SpecName('CSS3 Text', '#word-break-property', 'word-break')}} | {{Spec2('CSS3 Text')}} | Ursprüngliche Definition |

## Browserkompatibilität

{{Compat("css.properties.word-break")}}

## Siehe auch

- {{cssxref("overflow-wrap")}}
