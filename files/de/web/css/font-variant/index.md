---
title: font-variant
slug: Web/CSS/font-variant
tags:
  - CSS
  - CSS Eigenschaften
  - CSS Schriften
  - NeedsLiveSample
  - Referenz
translation_of: Web/CSS/font-variant
---
{{CSSRef}}

## Übersicht

Die CSS-Eigenschaft `font-variant` erlaubt die Darstellung der Schrift in Kapitälchen, Kleinbuchstaben in der Form von Großbuchstaben.

{{cssinfo}}

## Syntax

    Formal syntax: {{csssyntax("font-variant")}}

    font-variant: normal;
    font-variant: small-caps;
    font-variant: common-ligatures small-caps;

    font-variant: inherit;
    font-variant: initial;
    font-variant: unset;

### Werte

- `normal`
  - : Normale Schrift.
- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Stellt die Schrift in verschiedenen Arten von Kapitälchen dar, entsprechend {{cssxref("font-variant-caps")}}.
    Falls dies von der Schriftart nicht unterstützt wird, stellt Gecko den Effekt nach, indem die Kleinbuchstaben durch verkleinerte Grossbuchstaben ersetzt werden.

> **Note:** Der Wert `small-caps` hat in einigen Sprachen weitergehende Auswirkungen:\* In Turksprachen (wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Tatarisch (tt) und Baschkirisch (ba)), gibt es zwei verschiedene Buchstaben `i`, einen mit und einen ohne Punkt, und somit auch zwei verschiedene Buchstabenpaare: `i`/`İ` und `ı`/`I`.
>
> - Im Deutschen (de) wird das `ß` zu `SS`.
> - Im Griechischen (el) verlieren Vokale ihren Akzent, wenn sie großgeschrieben sind (`ά`/`Α`), eine Ausnahme ist Eta (`ή`/`Ή`). Auch Diphthongen mit einem Akzent im ersten Vokal verliern diesen, dafür erhält der zweite Vokal einen (`άι`/`ΑΪ`).Die Sprache wird in HTML mit dem Attribut `lang` und in XML mit `xml:lang` definiert.Diese spezifischen Anpassungen werden nicht von allen Browsern unterstützt, siehe [Browserkompatibilität](/de/docs/CSS/text-transform#Browser_compatibility "https://developer.mozilla.org/en-US/docs/CSS/text-transform#Browser_compatibility").

## Beispiel

### HTML

```html
<p class="normal">Firefox rocks!</p>
<p class="small">Firefox rocks!</p>
```

### CSS

```css
p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
```

### Result

{{ EmbedLiveSample('Example', '', '', '', 'Web/CSS/font-variant') }}

## Spezifikation

| Spezifikation                                                                                    | Status                           | Anmerkung                                                                          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-variant', 'font-variant')}}         | {{Spec2('CSS3 Fonts')}} | Sammeleigenschaft für `font-variant-*` (in diesem Artikel noch nicht beschrieben). |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-variant', 'font-variant')}} | {{Spec2('CSS2.1')}}         | Keine Änderung                                                                     |
| {{SpecName('CSS1', '#font-variant', 'font-variant')}}                         | {{Spec2('CSS1')}}         |                                                                                    |

## Browserkompatibilität

{{Compat("css.properties.font-variant")}}

## Siehe auch

- {{cssxref("text-transform")}}
