---
title: <div>
slug: Web/HTML/Element/div
tags:
  - Element
  - HTML
  - HTML Gruppierungsinhalt
  - HTML:Flow content
  - Referenz
  - Web
translation_of: Web/HTML/Element/div
---
{{HTMLRef}}

## Übersicht

Das [HTML](/de/docs/Web/HTML)-Element** `<div>`** (Englisch: _HTML Document Division Element_) ist ein allgemeiner Container für fließenden Inhalt, dem keine semantische Bedeutung zugeordnet wird.

Der wesentliche Unterschied zwischen `<div>` und anderen Block-Elementen wie beispielsweise {{HTMLElement("article")}} oder {{HTMLElement("p")}} ist die semantische Bedeutung bzw. das Fehlen dieser. Während `<article>` einen Artikel, einen eigenständigen Bereich eines Dokuments darstellt und `<p>` einen Textabsatz, gibt `<div>` seinem Inhalt keine Bedeutung.
`<div>` sollte deshalb nur genutzt werden, falls kein anderes Block-Element eine zutreffendere Aussage macht.

Der Einsatzbereich von `<div>` ist die Gruppierung von Elementen alleine zum Zweck der Gestaltung oder des programmatischen Zugriffs (mit Hilfe des **class**- oder **id**-Attributs), oder weil sie die gleichen Attribut-Werte besitzen, wie zum Beispiel das Attribut **lang**.

| [Inhaltskategorien](/de/docs/Web/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content), greifbarer Inhalt.          |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                    | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content).                             |
| Tag Auslassung                                                                      | {{no_tag_omission}}                                                                            |
| Erlaubte Elternelemente                                                             | Jedes Element, dass [fließenden Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content) erlaubt. |
| DOM-Schnittstelle                                                                   | {{domxref("HTMLDivElement")}}                                                            |

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), insbesondere {{htmlattrxref("class")}} und {{htmlattrxref("id")}}.

{{HTMLVersionInline(5)}} {{obsolete_inline}} Das **align**-Attribut ist für `<div>`-Elemente nicht mehr zulässig.

## Beispiel

### HTML

```html
<div class="beispiel">
  <p>Dies ist ein sehr interessanter Hinweis
     in einem hübsch dekorierten Kasten.
  </p>
</div>
```

### CSS

```css
.beispiel {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

### Ergebnis

{{EmbedLiveSample("Beispiel", 650, 60)}}

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-div-element', '&lt;div&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-div-element', '&lt;div&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.4', '&lt;div&gt;')}}                     | {{Spec2('HTML4.01')}}     |           |

## Browserkompatibilität

{{CompatibilityTable}}

## Siehe auch

- Semantische Sektionselemente: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- {{HTMLElement("span")}} Element für die Darstellung von Formulierungsinhalten
