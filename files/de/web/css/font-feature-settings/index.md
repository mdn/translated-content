---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Layout
  - Reference
  - Référence(2)
translation_of: Web/CSS/font-feature-settings
---
{{CSSRef}} {{SeeCompatTable}}

## Zusammenfassung

Die Eigenschaft `font-feature-settings` ermöglicht die Kontrolle von erweiterten typografischen Eigenschaften in OpenType-Schriftarten.

> **Hinweis:** Wenn möglich sollte die Eigenschaft {{cssxref("font-variant")}} genutzt werden. Diese Eigenschaft wurde speziell für Fälle entwickelt, in denen es nicht möglich ist, eine OpenType-Eigenschaft zu aktivieren oder zu nutzen.
>
> Diese Eigenschaft sollte insbesondere nicht genutzt werden, um Kapitälchen zu aktivieren.

{{cssinfo}}

## Syntax

    Formale Syntax: {{csssyntax("font-feature-settings")}}

    font-feature-settings: normal
    font-feature-settings: "smcp"
    font-feature-settings: "smcp" on
    font-feature-settings: "swsh" 2
    font-feature-settings: "smcp", "swsh" 2

    font-feature-settings: inherit

### Werte

- `normal`
  - : Der Text wird mit Standardeinstellungen gesetzt.
- `<feature-tag-value>`
  - : Beim Rendern von Text wird die Liste der Tag-Wert-Paare an die Text-Layout-Engine übergeben um Eigenschaften zu aktivieren oder zu deaktivieren. Der Tag ist immer ein {{cssxref("&lt;string&gt;")}} aus 4 ASCII-Zeichen. Wenn eine andere Anzahl an Zeichen übergeben wird oder der Tag Zeichen außerhalb des Coderaumes von U+20 bis U+7E enthält, ist die komplette Eigenschaft ungültig.
    Der Wert ist eine positive Ganzzahl, wobei die Schlüsselwörter `on` und off entsprechend für `1` und `0` stehen. Wenn kein Wert übergeben wird, wird standardmäßig von `1` ausgegangen. Für nicht-boolsche OpenType-Eigenschaften (z.B. [Alternative Stile](http://www.microsoft.com/typography/otspec/features_pt.htm#salt)) selektiert der Wert ein bestimmtes Zeichen, während er für boolsche Eigenschaften einen Schalter darstellt.

## Beispiele

```css
/* Kapitälchen aktivieren */
.smallcaps { font-feature-settings: "smcp" on; }

/* Groß- und Kleinbuchstaben zu Kapitälchen konvertieren (Zeichensetzung eingeschlossen) */
.allsmallcaps { font-feature-settings: "c2sc", "smcp"; }

/* Historische Formen aktivieren */
.hist { font-feature-settings: "hist"; }

/* Verbreitete Ligaturen deaktivieren (standardmäßig eingeschaltet) */
.noligs { font-feature-settings: "liga" 0; }

/* Nichtproportionale Ziffern (monospace) aktivieren */
td.tabular { font-feature-settings: "tnum"; }

/* Automatische Brüche aktivieren */
.fractions { font-feature-settings: "frac"; }

/* Das zweite geschwungene Zeichen nutzen */
.swash { font-feature-settings: "swsh" 2; }

/* Alternativen Zeichensatz Nr.7 nutzen */
.fancystyle {
  font-family: Gabriola; /* Verfügbar ab Windows 7 und Mac OS */
  font-feature-settings: "ss07";
}
```

## Spezifikation

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-feature-settings', 'font-feature-settings')}} | {{Spec2('CSS3 Fonts')}} |           |

## Browserkompatibilität

{{Compat("css.properties.font-feature-settings")}}

## Siehe auch

- [FontFont OpenType User Guide (pdf)](https://www.fontfont.com/staticcontent/downloads/FF_OT_User_Guide.pdf)
- [OpenType Feature Tags](http://www.microsoft.com/typography/otspec/featurelist.htm) list
- [Using the whole font](http://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx) (The -moz syntax is the old one. On Gecko, use the -ms syntax but with -moz).
