---
title: DocumentFragment
slug: Web/API/DocumentFragment
tags:
  - API
  - DOM
  - DocumentFragment
  - Documents
  - Interface
  - Reference
  - Web Components
translation_of: Web/API/DocumentFragment
---
{{ APIRef("DOM") }}

Das **`DocumentFragment`** interface stellt ein einfaches Objekt dar, welches ohne Bezug zu einem parent erstellt und verwendet werden kann. Es kann somit verstanden werden als eine leichtgewichtige Variante des {{domxref("Document")}}, die einen Ausschnitt einer Dokumentstruktur aus Element-Knoten abbildet. Der zentrale Unterschied dabei ist jedoch, dass das Fragment nicht Bestandteil der aktiven Seitenstruktur und des DOM-Baums ist. Dadurch haben Änderungen an dem Fragment keine Auswirkungen auf das aktive Dokument, wodurch unerwünschte Seiteneffekte von DOM-Änderungen wie {{Glossary("reflow")}} oder Performanceeinbußen verhindert werden können.

Üblicherweise wird das `DocumentFragment` dazu verwendet, um einen neuen DOM-Teilbaum für eine Seite zu erzeugen und darin beliebig Fragmente und Knoten vorbereiten zu können, diese über das {{domxref("Node")}} interface mittels Methoden wie {{domxref("Node.appendChild", "appendChild()")}} und {{domxref("Node.insertBefore", "insertBefore()")}} hinzuzufügen. Wenn das Frament schließlich in die aktive Dokumentstruktur und deren DOM eingefügt wird, bleibt ein leeres `DocumentFragment`zurück. Da alle Knoten auf einmal in das aktive Dokument hinzugefügt werden, wird lediglich ein einzelner reflow und render Prozess ausgelöst, anstelle von potentiell unzähligen für jeden einzelnen, separat eingefügten Knoten.

Das interface wird ebenso bei Web components verwendet: {{HTMLElement("template")}}-Elemente beinhalten ein `DocumentFragment` in ihrer {{domxref("HTMLTemplateElement.content")}} Eigenschaft.

Ein leeres `DocumentFragment` kann jederzeit erzeugt werden über {{domxref("document.createDocumentFragment()")}} oder über den constructor.

{{InheritanceDiagram}}

## Eigenschaften

_Das interface hat keine spezifischen Eigenschaften, erhält jedoch über Vererbung die des übergeordneten_ _{{domxref("Node")}} und implementiert darüber hinaus jene des {{domxref("ParentNode")}} interfaces zusätzlich._

- {{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}
  - : Stellt eine aktuelle {{domxref("HTMLCollection")}} bereit mit allen {{domxref("Element")}} Objekten, die dem `DocumentFragment` angehören.
- {{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Stellt das {{domxref("Element")}} bereit, welches aktuell das erste Kind des `DocumentFragment` ist. `null` falls es keines gibt.
- {{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Stellt das {{domxref("Element")}} bereit, welches aktuell das letzte Kind des `DocumentFragment` ist. `null` falls es keines gibt.
- {{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}
  - : Stellt als `unsigned long` die Anzahl der Kindelemente des `DocumentFragment`bereit.

## Constructor

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }} {{experimental_inline}}
  - : Erzeugt ein neues, leeres `DocumentFragment` Objekt.

## Methoden

_Das interface erbt die Methoden von {{domxref("Node")}}_, u*nd implementiert darüber hinaus jene des {{domxref("ParentNode")}} interfaces zusätzlich.*

- {{domxref("DocumentFragment.find()")}} {{experimental_inline}}
  - : Liefert das erste zutreffende {{domxref("Element")}} innerhalb des Baums des `DocumentFragment`.
- {{domxref("DocumentFragment.findAll()")}} {{experimental_inline}}
  - : Liefert eine {{domxref("NodeList")}} mit allen zutreffenden {{domxref("Element")}} innerhalb des Baums des `DocumentFragment`.
- {{domxref("DocumentFragment.querySelector()")}}
  - : Liefert den {{domxref("Element")}} Knoten im `DocumentFragment`, der in der Reihenfolge im document als erstes zu dem Selektor passt.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Liefert eine {{domxref("NodeList")}} mit allen {{domxref("Element")}} Knoden im `DocumentFragment`, die zu dem angegebenen Selektor passen.

- {{domxref("DocumentFragment.getElementById()")}}
  - : Liefert den ersten {{domxref("Element")}} Knoten im `DocumentFragment`, dem in der document Reihenfolge zuerst die angegebene ID zugeordnet ist.

## Spezifikationen

| Spezifikation                                                                                            | Status                                       | Anmerkungen                                                                       |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#interface-documentfragment', 'DocumentFragment')}} | {{Spec2('DOM WHATWG')}}             | Added the constructor and the implementation of {{domxref("ParentNode")}}. |
| {{SpecName('Selectors API Level 2', '#the-apis', 'DocumentFragment')}}             | {{Spec2('Selectors API Level 2')}} | Added the `find()` and `findAll()` methods.                                       |
| {{SpecName('Selectors API Level 1', '#the-apis', 'DocumentFragment')}}             | {{Spec2('Selectors API Level 1')}} | Added the `querySelector()` and `querySelectorAll()` methods.                     |
| {{SpecName('DOM3 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}             | {{Spec2('DOM3 Core')}}                 | No change from {{SpecName('DOM2 Core')}}                                   |
| {{SpecName('DOM2 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}             | {{Spec2('DOM2 Core')}}                 | No change from {{SpecName('DOM1')}}                                       |
| {{SpecName('DOM1', 'level-one-core.html#ID-B63ED1A3', 'DocumentFragment')}}     | {{Spec2('DOM1')}}                     | Initial definition                                                                |

## Browserkompatibilität

{{Compat}}

## See also

- [The DOM interfaces index.](/de/docs/DOM/DOM_Reference)
