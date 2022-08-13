---
title: u
slug: Web/HTML/Element/u
tags:
  - Element
  - Unterstrich
translation_of: Web/HTML/Element/u
---
## Übersicht

Das _HTML Underline Element_ (`<u>`) versieht Text mit einem Unterstrich, also einer Linie unter der Basislinie des Textinhalts.

In HTML5, repräsentiert dieses Element ein Textfeld mit einem unausgesprochenen, also nur gerenderten, nicht-textuellen Vermerk, so wie die Beschreibung eines Textes, als sei es eine Eigenschaft eines chinesisches Textes (eine chinesische Textmarkierung), oder als ob der Text falsch buchstabiert sei.

> **Note:** **Gebrauchsnotiz:** So wie alle stylisierenden Elemente, wird {{ HTMLElement("u") }} in HTML 4 und XHTML 1 nicht mehr unterstützt. Das Attribut wurde aber wieder in HTML5 zusammen mit anderen Wortbedeutungen aufgenommen. Wenn ein Text unterstrichen werden soll in einer nicht-begriffsbestimmenden Art und Weise, sollte ein {{ HTMLElement("span") }} Element eingesetzt werden, oder andere angepasste Elemente, und es mit [CSS](/en/CSS "en/CSS") formatieren {{ cssxref("text-decoration") }}, also mit der underline Eigenschaft.

## Attribute

Dieses Element enthält nur das [globale Attribut](/de/docs/HTML/Global_attributes "HTML/Global attributes").

## Tips und Bemerkungen

**Tip:** Das {{ HTMLElement("u") }} Element nicht benutzen wo es mit einem Hyperlink verwechselt werden kann.

> **Note:** **Notiz:** Die HTML 5 Spezifikation errinnert Entwickler dass andere Elemente passender sind als {{ HTMLElement("u") }}.

## DOM Interface

Dieses Element implementiert das [`HTMLElement`](/en/DOM/element "en/DOM/element") Interface.

> **Note:** **Implementation-Notiz:** bis zur Version Gecko 1.9.2 inklusive, implementiert Firefox das {{ domxref("HTMLSpanElement") }} Interface für dieses Element.

## Beispiel

```html
<u>Today's Special</u>: Salmon<br />
<span style="text-decoration:underline;">Today's Special</span>: Salmon
```

Today's Special: Salmon

Today's Special: Salmon

```html
<p><u>All</u> of that is explained in <u>Dive into Python</u>.
```

All of that is explained in Dive into Python.

Sollte ersetzt werden durch

```html
<p><em>All</em> of that is explained in <cite>Dive into Python</cite>.
```

_All_ of that is explained in Dive into Python.

CSS sollte benutzt werden um diese Elemente zu formatieren.

## Siehe auch

- Die {{ HTMLElement("span") }}, {{ HTMLElement("i") }}, {{ HTMLElement("em") }}, and {{ HTMLElement("cite") }} Elemente sollten, vom Fall abhängend, anstatt benutzt werden.
- Die CSS {{ cssxref("text-decoration") }} Eigenschaft sollte benutzt werden für dasselbe Aussehen als das {{ HTMLElement("u") }} Element.

{{ languages({"ja":"ja/HTML/Element/u","en":"en/HTML/Element/u"}) }}

{{ HTMLRef }}
