---
title: <url>
slug: Web/CSS/url
tags:
  - CSS
  - Layout
  - Referenz
  - URI
  - URL
translation_of: Web/CSS/url()
translation_of_original: Web/CSS/url
original_slug: Web/CSS/url()
---
{{ CssRef() }}

Der **`<url>`** [CSS](/de/docs/Web/CSS "CSS")-[Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet einen Zeiger auf eine Ressource, z.B. ein Bild oder eine Schriftart. URLs können in zahlreichen CSS Eigenschaften verwendet werden, wie etwa {{ Cssxref("background-image") }}, {{ Cssxref("cursor") }}, und {{ cssxref("list-style") }}.

> **Note:** **URI oder URL?** Es gibt einen Unterschied zwischen einem [URI](https://de.wikipedia.org/wiki/Uniform_Resource_Identifier) und einem [URL](https://de.wikipedia.org/wiki/Uniform_Resource_Locator). Ein URI identifiziert einfach eine Ressource. Ein URL ist eine Art von URI und beschreibt den _Speicherort_ einer Ressource. Ein URI kann entweder ein URL oder ein Name ([URN](https://de.wikipedia.org/wiki/Uniform_Resource_Name)) einer Ressource sein.In CSS1 die funktionale Notation `url()` beschrieb nur echte URLs. In CSS2.1 die Definition von `url()` wurde erweitert, um alle URIs zu beschreiben, ob URL oder URN. Verwirrenderweise bedeutete es, dass `url()` verwendet werden konnte, um ein `<uri>` CSS-Datentyp zu erstellen. Diese Änderung war nicht nur ungünstig, sondern auch überflüßig, weil die URNs so oft wie nie in CSS verwendet werden. Um die Verwirrung zu vermindern, kehrte CSS3 zu der engeren Anfangsdefinition. Jetzt bezeichnet `url()` nur echte `<url>`s.

## Syntax

Der `<url>` Datentyp wird mit der funktionalen Notation [`url()`]() spezifiziert. Es kann sowohl ohne Anführungszeichen als auch mit einfachen oder doppelten Anführungszeichen geschrieben werden. Relative URLs sind erlaubt und sind relativ zum URL des Stylesheets (nicht zum URL der Webseite).

    <a_css_property>: url("http://mysite.example.com/mycursor.png")
    <a_css_property>: url('http://mysite.example.com/mycursor.png')
    <a_css_property>: url(http://mysite.example.com/mycursor.png)

> **Note:** **Hinweis:** Steuerzeichen über 0x7e sind ab Firefox 15 in URLs ohne Anführungszeichen nicht erlaubt. Sieh {{Bug(752230)}} für mehr Details.

## Beispiele

```css
.topbanner {
  background: url("topbanner.png") #00D no-repeat fixed;
}
```

```css
ul {
  list-style: square url(http://www.example.com/redball.png);
}
```

## Spezifikationen

| Specification                                                                    | Status                               | Comment                                |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------- |
| {{ SpecName('CSS3 Values', '#urls', '&lt;url&gt;') }}         | {{ Spec2('CSS3 Values') }} | Keine wichtige Änderungen seit CSS2.1. |
| {{ Specname('CSS2.1', 'syndata.html#uri', '&lt;uri&gt;') }} | {{ Spec2('CSS2.1') }}         | Keine wichtige Änderungen seit CSS1.   |
| {{ SpecName('CSS1', '#url', '&lt;url&gt;') }}                     | {{ Spec2('CSS1') }}             | Erste Definition.                      |

## Browserkompatibilität

{{Compat("css.types.url")}}
