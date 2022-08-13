---
title: ruby-align
slug: Web/CSS/ruby-align
tags:
  - CSS
  - CSS Referenz
  - CSS Ruby
  - Eigenschaft
  - Referenz
translation_of: Web/CSS/ruby-align
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Die **`ruby-align`** CSS Eigenschaft definiert die Verteilung der verschiedenen {{Glossary("Ruby")}}elemente über die Basis.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
ruby-align: start;
ruby-align: center;
ruby-align: space-between;
ruby-align: space-around;

/* Globale Werte */
ruby-align: inherit;
ruby-align: initial;
ruby-align: unset;
```

### Werte

- `start`
  - : Ist ein Schlüsselwort, dass angibt, dass die Anmerkung am dem Start des Basistexts ausgerichtet wird.
- `center`
  - : Ist ein Schlüsselwort, dass angibt, dass die Anmerkung mittig am Basistext ausgerichtet wird.
- `space-between`
  - : Ist ein Schlüsselwort, das angibt, dass der zusätzliche Abstand zwischen die Elemente der Anmerkung verteilt wird.
- `space-around`
  - : Ist ein Schlüsselwort, das angibt, dass der zusätzliche Abstand zwischen und um die Elemente der Anmerkung verteilt wird.

### Formale Syntax

{{csssyntax}}

## Beispiele

Dieses HTML wird mit jedem Wert von `ruby-align` unterschiedlich dargestellt:

```html
<ruby>
  <rb>Dies ist ein langer Text als Beispiel</rb>
  <rp>（</rp><rt>kurzes Ruby</rt><rp>）</rp>
</ruby>
```

### Ruby am Start des Basistexts ausgerichtet

```html
<ruby>
  <rb>Dies ist ein langer Text als Beispiel</rb>
  <rp>（</rp><rt>kurzes Ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
    ruby-align:start;
}
```

Dies ergibt folgende Ausgabe:

{{EmbedLiveSample("Ruby_am_Start_des_Basistexts_ausgerichtet", 240, 40)}}

### Ruby mittig am Basistext ausgerichtet

```html
<ruby>
  <rb>Dies ist ein langer Text als Beispiel</rb>
  <rp>（</rp><rt>kurzes Ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
    ruby-align:center;
}
```

Dies ergibt folgende Ausgabe:

{{EmbedLiveSample("Ruby_mittig_am_Basistext_ausgerichtet", 240, 40)}}

### Zusätzlicher Abstand verteilt zwischen Rubyelementen

```html
<ruby>
  <rb>Dies ist ein langer Text als Beispiel</rb>
  <rp>（</rp><rt>kurzes Ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
    ruby-align:space-between;
}
```

Dies ergibt folgende Ausgabe:

{{EmbedLiveSample("Zusätzlicher_Abstand_verteilt_zwischen_Rubyelementen", 240, 40)}}

### Zusätzlicher Abstand verteilt zwischen und um Rubyelemente

```html
<ruby>
  <rb>Dies ist ein langer Text als Beispiel</rb>
  <rp>（</rp><rt>kurzes Ruby</rt><rp>）</rp>
</ruby>
```

```css
ruby {
    ruby-align:space-around;
}
```

Dies ergibt folgende Ausgabe:

{{EmbedLiveSample("Zusätzlicher_Abstand_verteilt_zwischen_und_um_Rubyelemente", 240, 40)}}

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar                |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------ |
| {{SpecName('CSS3 Ruby', '#ruby-align-property', 'ruby-align')}} | {{Spec2('CSS3 Ruby')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.ruby-align")}}

## Siehe auch

- HTML Ruby Elemente: {{HTMLElement("ruby")}}, {{HTMLElement("rt")}}, {{HTMLElement("rp")}} und {{HTMLElement("rtc")}}.
- CSS Ruby Eigenschaften: {{cssxref("ruby-position")}}, {{cssxref("ruby-merge")}}.
