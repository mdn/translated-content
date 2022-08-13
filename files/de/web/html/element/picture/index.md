---
title: <picture>
slug: Web/HTML/Element/picture
translation_of: Web/HTML/Element/picture
---
{{HTMLRef}}

Das **HTML-Element `<picture>` **ist ein Container, der zur Angabe mehrerer {{HTMLElement("source")}}s (Bildquellen) für ein {{HTMLElement("img")}} dient. Der Browser wird die Quelle verwenden, die aufgrund des gegenwärtigen Seitenlayouts (die Begrenzungen der Box, in der das Bild auftaucht) und dem Anzeigegerät (z.B. ein normales or hiDPI-Gerät) am geeignesten erscheint.

## Usage Context

| [Content categories](/de/docs/Web/HTML/Content_categories) | [Flow content](/de/docs/Web/HTML/Content_categories#Flow_content), phrasing content, embedded content                                                                      |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | Null oder mehr {{HTMLElement("source")}}-Elemente, gefolgt von einem {{HTMLElement("img")}}-Element, optional vermischt mit Skript-unterstützenden Elementen. |
| Tag omission                                               | {{no_tag_omission}}                                                                                                                                                   |
| Permitted parent elements                                  | Jegliches Element, das eingebetteten Inhalt erlaubt.                                                                                                                       |
| DOM interface                                              | {{domxref("HTMLPictureElement")}}                                                                                                                               |

## Attribute

Dieses Element beinhaltet nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiel 1: Verwendung des Attributs `media`

Das Attribut `media` erlaubt die Angabe eines Media-Query, das der User Agent auswertet, um das gewünschte {{HTMLElement("source")}}-Element auszuwählen. Wenn ein Media Query zu `false` evaluiert, wird das {{HTMLElement("source")}}-Element übersprungen.

```html
<picture>
 <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
 <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```

## Beispiel 2: Verwendung des Attributs `type`

Das Attribut type erlaubt die Angabe eines MIME-Typs für Ressourcen, die im Attribut srcset des Elements {{HTMLElement("source")}} angegeben sind. Wenn der User Agent den angegebenen Typ nicht unterstützt, wird das {{HTMLElement("source")}}-Element übersprungen.

```html
​<picture>
 <source srcset="mdn-logo.svg" type="image/svg+xml">
 <img src="mdn-logo.png" alt="MDN">
</picture>
```

## Beispiel 3: Verwendung des Attributs `srcset`

Das Attribut srcset erlaubt es verschiedene Bildgrößen auszuliefern. Höhere Auflösungen werden bei höheren Zoomstufen im Browser, oder bei Bildschirmen mit hohen Pixeldichten (DPI) geladen.

```html
​<picture>
 <source srcset="mdn-logo.png 1x, mdn-logo_x2.png 2x, mdn-logo_x3.png 3x">
 <img src="mdn-logo.png" alt="MDN">
</picture>
```

## Spezifikation

| Spezifikation                                                                                                            | Status                           | Kommentar          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', 'embedded-content.html#the-picture-element', '&lt;picture&gt;')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Browser Kompatibilität

{{Compat("html.elements.picture")}}

## Siehe auch

- {{HTMLElement("img")}}-Element
