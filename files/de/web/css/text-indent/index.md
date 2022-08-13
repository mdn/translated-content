---
title: text-indent
slug: Web/CSS/text-indent
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Text
  - Layout
  - Referenz
translation_of: Web/CSS/text-indent
---
{{CSSRef}}

## Übersicht

Die CSS Eigenschaft `text-indent` legt den Einzug vor der ersten Zeile eines Textes fest. Dabei wird der Abstand zur linken Seite des enthaltenden Elements angegeben.

{{cssinfo}}

## Syntax

    Formal syntax: {{csssyntax("text-indent")}}

    text-indent: 3mm       /* Beispielwerte */
    text-indent: 40px
    text-indent: 15%       /* Prozentuale Angaben sind relativ zur Breite des Blockelements */
    text-indent: each-line /* Festgelegte Werte */
    text-indent: hanging

    text-indent: inherit

### Werte

- `<length>`
  - : Der Einzug wird absolut angegeben. Negative Angaben sind erlaubt. Für mögliche Einheiten, siehe {{cssxref("&lt;length&gt;")}} .
- `<percentage>`
  - : Abstand wird prozentual {{cssxref("&lt;percentage&gt;")}} zur Breite des enthaltenden Blockelements angegeben.
- `each-line` {{experimental_inline}}
  - : Der Einzug beeinflusst die erste Zeile des Blockelements sowie jede Zeile nach einem erzwungenem Zeilenumbruch (_forced line break_ ), lässt Zeilen nach einem _soft wrap break_ allerdings unberührt.
- `hanging` {{experimental_inline}}
  - : Kehrt den Texteinzug um. Jede Zeile, außer der ersten, wird eingerückt.

## Beispiel mit absoluter Angabe

### HTML

```html
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
```

### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

{{ EmbedLiveSample('Simple_indent','100%','100%') }}

## Beispiel mit prozentualer Angabe

### HTML Content

```html
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
```

### CSS Content

```css
p {
  text-indent: 30%;
  background: plum;
}
```

{{ EmbedLiveSample('Percentage_indent_example','100%','100%') }}

## Details

| Specification                                                                            | Status                                   | Kommentar                                                                               |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text', '#text-indent', 'text-indent')}}             | {{Spec2('CSS3 Text')}}             | Schlüsselwerte `hanging` und `each-line` hinzugefügt                                    |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'text-indent')}} | {{Spec2('CSS3 Transitions')}} | `text-indent` als Eigenschaft, die animiert werden kann                                 |
| {{SpecName('CSS2.1', 'text.html#indentation-prop', 'text-indent')}} | {{Spec2('CSS2.1')}}                 | Verhalten von `display: inline-block` und anderen `block`Containern explizit definiert |
| {{SpecName('CSS1', '#text-indent', 'text-indent')}}                     | {{Spec2('CSS1')}}                 |                                                                                         |

## Browserkompatibilität

{{Compat("css.properties.text-indent")}}
