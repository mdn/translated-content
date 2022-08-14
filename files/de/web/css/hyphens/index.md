---
title: hyphens
slug: Web/CSS/hyphens
tags:
  - CSS
  - CSS Eigenschaft
  - Experimentell
  - Referenz
translation_of: Web/CSS/hyphens
---
{{CSSRef}}

## Übersicht

Die `hyphens `Eigenschaft regelt die automatische Silbentrennung. Dazu ist das HTML Attribut `lang`, bzw. xml:lang unter XML, zwingend notwendig.

> **Note:** **Hinweis:** Wie die Silbentrennung umgesetzt wird kann von Browser zu Browser, bzw. von Sprache zu Sprache, variieren.

{{cssinfo}}

## Syntax

{{csssyntax}}

    hyphens: none
    hyphens: manual
    hyphens: auto

    hyphens: inherit

### Werte

- `none`
  - : Keine Silbentrennung: Wörter werden nicht getrennt und automatische Zeilenumbrüche sind nur bei Leerzeichen möglich.
- `manual`
  - : Manuelle Silbentrennung: Wörter werden nur dann getrennt, wenn dies definiert wurde (siehe [Umbrüche manuell definieren](#umbrüche_manuell_definieren)).
- `auto`
  - : Automatische Silbentrennung: Der Browser trennt die Wörter automatisch. Manuell definierte Umbrüche werden dabei vorgezogen (siehe [Umbrüche manuell definieren](#umbrüche_manuell_definieren)).

## Umbrüche manuell definieren

Es gibt zwei Möglichkeiten, um Wörter manuell zu trennen. Dafür werden die beiden folgenden Unicode-Zeichen verwendet:

- U+2010 (Bindestrich)
  - : Dieser Bindestrich ist immer sichtbar, auch wenn das Wort gar nicht getrennt werden muss.
- U+00AD (SHY)
  - : Dieses Zeichen ist unsichtbar und kennzeichnet nur eine mögliche Trennstelle. Sobald eine Trennung notwendig wird, wird ein Bindestrich sichtbar. In HTML lässt sich das Zeichen mit `&shy;` einfügen.

## Beispiel

This CSS snippet creates three classes, one for each possible configuration of the `hyphens` property.

```html
<ul>
  <li><code>none</code>: no hyphen; overflow if needed
    <p lang="en" class="none">An extreme&shy;ly long English word</p>
  </li>
  <li><code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)
    <p lang="en" class="manual">An extreme&shy;ly long English word</p>
  </li>
  <li><code>auto</code>: hyphen where the algo is deciding (if needed)
    <p lang="en" class="auto">An extreme&shy;ly long English word</p>
  </li>
</ul>
```

```css
p {
  width: 55px;
  border: 1px solid black;
 }
p.none {
  -moz-hyphens: none;
  hyphens: none;
}
p.manual {
  -moz-hyphens: manual;
  hyphens: manual;
}
p.auto {
  -moz-hyphens: auto;
  hyphens: auto;
}
```

{{EmbedLiveSample("Beispiel", "100%", "470'")}}

## Spezifikations

| Spezifikation                                                    | Status                       | Anmerkung |
| ---------------------------------------------------------------- | ---------------------------- | --------- |
| {{SpecName('CSS3 Text', '#hyphens', 'hyphens')}} | {{Spec2('CSS3 Text')}} |           |

## Browser Kompatibilität

{{Compat("css.properties.hyphens")}}

## Siehe auch

- {{Cssxref("content")}}
