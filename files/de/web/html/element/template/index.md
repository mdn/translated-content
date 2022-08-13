---
title: <template>
slug: Web/HTML/Element/template
tags:
  - Element
  - HTML
  - Referenz
  - Web
  - Web Components
translation_of: Web/HTML/Element/template
---
## Zusammenfassung

Das **[HTML](/de/docs/Web/HTML) template-Element `<template>`** dient dazu, Client-seitige Inhalte zu gruppieren, die nicht gerendert werden, wenn die Seite geladen wird, sondern anschließend zur Laufzeit mittels JavaScript gerendert werden können.

Template kann als Inhaltsfragment aufgefasst werden, das für eine spätere Verwendung im Dokument gespeichert wird. Die Inhalte von **`<template>`** werden allerdings beim Laden der Seite geparst, um Ihre Validität sicher zu stellen.

| [Inhaltskategorien](/de/docs/Web/HTML/Content_categories "HTML/Content_categories") | [Metadata content](/de/docs/Web/HTML/Content_categories#Metadata_content), [flow content](/de/docs/Web/HTML/Content_categories#Flow_content), [phrasing content](/de/docs/Web/Guide/HTML/Content_categories#Phrasing_content), script-supporting element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubte Inhalte                                                                    | [Metadata content](/de/docs/Web/HTML/Content_categories#Metadata_content), [flow content,](/de/docs/Web/HTML/Content_categories#Flow_content)jeder gültige HTML Inhalt, der innerhalb der folgenden Elemente {{HTMLElement("ol")}}, {{HTMLElement("dl")}}, {{HTMLElement("figure")}}, {{HTMLElement("ruby")}}, {{HTMLElement("object")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}}, {{HTMLElement("table")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("tr")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("select")}}, {{HTMLElement("details")}} erlaubt ist und {{HTMLElement("menu")}}, dessen type-Attribut sich im Zustand popup menu befindet. |
| Tag omission                                                                        | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Permitted parent elements                                                           | {{HTMLElement("body")}}, {{HTMLElement("frameset")}}, {{HTMLElement("head")}} und {{HTMLElement("colgroup")}} ohne `span` Attribut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| DOM interface                                                                       | {{domxref("HTMLTemplateElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Attribute

Das Element beinhaltet die [global attributes](/de/docs/Web/HTML/Global_attributes).

Es gibt auch ein `content` Attribut, das nur read-only, also nur leseberechtigt ist. Dieses Attribut gewährt Zugriff auf die Inhalte von template. Das `content` Attribut wird oftmals genutzt, um den Browser-Support eines bestimmten Browsers für das **`<template>` **Element festzustellen.

## Beispiele

Im Folgenden zuerst der HTML Code des Beispiels:

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existierende Daten könnten optional hier eingefügt werden -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Im Weiteren der JavaScript Code, mit dem der HTML Code instantiiert werden könnte:

```js
// Browsersupport-Check, indem die Existenz des content Attributs
// des template Elements geprüft wird.
if ('content' in document.createElement('template')) {

  // Tabelle mit dem existierenden HTML tbody und der Zeile (row) aus dem template Element instantiieren
  var t = document.querySelector('#productrow'),
  td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // Neue Zeile (row) klonen und in die Tabelle einfügen
  var tb = document.getElementsByTagName("tbody");
  var clone = document.importNode(t.content, true);
  tb[0].appendChild(clone);

  // Neue Zeile erstellen
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // Neue Zeile klonen und in die Tabelle einfügen
  var clone2 = document.importNode(t.content, true);
  tb[0].appendChild(clone2);

} else {
  // Wenn das HTML template element nicht unterstützt wird
  // muss die Tabelle auf anderem Weg erzeugt werden
}
```

Das Ergebnis ist die ursprüngliche HTML Tabelle, an die zwei neue Zeilen mittels JavaScript angehängt wurde.

[Hier](http://jsbin.com/qimaw/1/) kann das live-Beispiel aufgerufen werden (Code kann [hier](http://jsbin.com/qimaw/1/edit) eingesehen werden).

## Spezifikationen

| Spezifikationen                                                                                                      | Status                           | Kommentar          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG','/scripting-1.html#the-template-element','template element')}} | {{Spec2('HTML WHATWG')}} | No change          |
| {{SpecName('HTML5 W3C','/scripting-1.html#the-template-element','template element')}}     | {{Spec2('HTML5 W3C')}}     | Initial definition |

## Browser Kompabilität

{{Compat}}

## Siehe auch

- Web components: {{HTMLElement("content")}}, {{HTMLElement("shadow")}}

{{HTMLRef}}
