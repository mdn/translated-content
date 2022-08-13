---
title: <dl>
slug: Web/HTML/Element/dl
tags:
  - Element
  - HTML
  - HTML Gruppierungsinhalt
  - Referenz
  - Web
translation_of: Web/HTML/Element/dl
---
Das **HTML `<dl>` Element** (oder _HTML_ _Description List Element_) umfasst eine Liste von Begriffspaaren und Beschreibungen. Üblicherweise wird das Element zur Implementierung eines Glossars oder zur Anzeige von Metadaten (eine Liste von Schlüsselwertpaaren) genutzt.

Vor HTML5, war \<dl> bekannt als Definition List.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content), wenn das `<dl>` Elementkind nur ein Wertepaar beinhaltet, dann greifbarer Inhalt. |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | Null oder mehr {{HTMLElement("dt")}} Elemente, jedes gefolgt von einem oder mehreren {{HTMLElement("dd")}} Elementen.                   |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                              |
| Erlaubte Elternelemente                                                         | Jedes Element, das [fließenden Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content") erlaubt.                 |
| DOM Schnittstelle                                                               | {{domxref("HTMLDListElement")}}                                                                                                              |

## Attribute

Dieses Element schließt [globale Attribute](/de/docs/Web/HTML/Globale_Attribute "HTML/Global attributes") ein.

- {{htmlattrdef("compact")}} {{Non-standard_inline}}
  - : Zwingt die Beschreibung dazu, in derselben Linie zu erscheinen wie der Begriff. Dieses Attribut wird aktuell nicht unterstützt.

## Beispiele

### Einzelbegriff und Beschreibung

```html
<dl>
  <dt>Firefox</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>

  <!-- other terms and definitions -->
</dl>
```

Ausgabe:

![Image:HTML-dl1.png](/@api/deki/files/241/=HTML-dl1.png)

### Multiple Begriffe, einzelne Beschreibung

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>

  <!-- other terms and definitions -->
</dl>
```

Ausgabe:

![Image:HTML-dl2.png](/@api/deki/files/242/=HTML-dl2.png)

### Einzelbegriff, multiple Beschreibungen

```html
<dl>
  <dt>Firefox</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>
  <dd>The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox,
      is a mostly herbivorous mammal, slightly larger than a domestic cat
      (60 cm long).</dd>

  <!-- other terms and definitions -->
</dl>
```

Ausgabe:

![Image:HTML-dl3.png](/@api/deki/files/243/=HTML-dl3.png)

### Multiple Begriffe und Beschreibungen

Es ist ebenfalls möglich, multiple Begriffe und Beschreibungen zu definieren, wenn man die oberen Beispiele kombiniert.

### Metadata

Description Lists sind nützlich um Metadaten als Wertepaar-Listen anzuzeigen.

    <dl>
        <dt>Name</dt>
        <dd>Godzilla</dd>
        <dt>Born</dt>
        <dd>1952</dd>
        <dt>Birthplace</dt>
        <dd>Japan</dd>
        <dt>Color</dt>
        <dd>Green</dd>
    </dl>

Tipp: Es kann hilfreich sein, Separatoren für Schlüsselwerte in CSS3 zu definieren, wie zum Beispiel:

```css
dt:after {
  content: ": ";
}
```

## Anmerkungen

Weder dieses Element, noch das {{HTMLElement("ul")}} Element, sollten genutzt werden, um bloß eine Einrückung vorzunehmen. Es funktioniert zwar, wird in der Praxis jedoch nicht angewendet und verfehlt die Definition einer Description List.

Um die Einrückung eines Begriffs zu ändern, sollte die [CSS](/de/docs/Web/CSS "CSS") {{cssxref("margin")}} Eigenschaft genutzt werden.

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------ |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-dl-element', '&lt;dl&gt;')}} | {{Spec2('HTML WHATWG')}} |                          |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-dl-element', '&lt;dl&gt;')}}     | {{Spec2('HTML5 W3C')}}     |                          |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dl&gt;')}}                     | {{Spec2('HTML4.01')}}     | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dt")}} Element
- {{HTMLElement("dd")}} Element

{{HTMLRef}}
