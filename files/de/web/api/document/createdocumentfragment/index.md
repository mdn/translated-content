---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
tags:
  - API
  - DOM
  - Document
  - DocumentFragment
  - Method
  - Reference
translation_of: Web/API/Document/createDocumentFragment
---
{{ApiRef("DOM")}}

Erzeugt ein neues {{domxref("DocumentFragment")}} Objekt.

## Syntax

    var fragment = document.createDocumentFragment();

`fragment` ist hierbei eine Referenz zu einem neu erstellten, leeren {{domxref("DocumentFragment")}} Objekt.

## Beschreibung

`DocumentFragment`s sind DOM Knoten (DOM Nodes). Sie sind nicht Teil des Haupt- oder Seiten-DOM-Baums. Üblicherweise werden sie verwendet, um einen Teilbaum mit Objekten und Unterobjekten zu erstellen und das Ergebnis anschließend in den Seiten-DOM-Baum einzufügen. In dem DOM-Baum wird das document fragment dann ersetzt mit allen Kindelementen.

Da das gesamte DocumentFragment **nur im Speicher** vorliegt ("in memory"**)** und nicht Teil des Seiten-DOM-Baums ist, führen Veränderungen in dem DocumentFragment, wie etwa das Hinzufügen von Elementen, nicht zu einem page [reflow](https://developers.google.com/speed/articles/reflow?csw=1) (die Berechnung der Element Positionen und Geometrie). Dementsprechend führt die Nutzung von DocumentFragments zu einer [besseren Performance](http://ejohn.org/blog/dom-documentfragments/).

## Beispiel

Dieses Beispiel erzeugt eine Liste gängiger Browser.

### HTML

```html
<ul id="ul">
</ul>
```

### JavaScript

```js
var element  = document.getElementById('ul'); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera',
    'Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);
```

### Resultat

{{EmbedLiveSample("Example", 600, 140)}}

## Spezifikationen

| Specification                                                                                                                            | Status                           | Anmerkungen                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-document-createdocumentfragment', 'Document.createDocumentFragment()')}} | {{Spec2('DOM WHATWG')}} | Initiale Definition in der DOM 1 Spezifikation |

## Browserkompatibilität

{{Compat}}

## See also

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
