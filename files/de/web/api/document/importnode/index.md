---
title: Document.importNode()
slug: Web/API/Document/importNode
tags:
  - API
  - DOM
  - Dokument
  - Knoten
  - Kopie
  - Méthode
  - Referenz
  - importNode
translation_of: Web/API/Document/importNode
---
{{APIRef("DOM")}}

Die {{domxref("Document")}}-Methode **`importNode()`** erzeugt eine neue Kopie eines konkreten Knotens ({{domxref("Node")}}) oder Dokumenten-Fragments ({{domxref("DocumentFragment")}}) eines anderen Dokuments, so dass diese dann in das aktuelle Dokument eingefügt werden kann. An dieser Stelle ist es noch nicht im Dokumentenbaum eingefügt, um das zu erreichen, muss eine Methode wie {{domxref("Node.appendChild", "appendChild()")}} oder {{domxref("Node.insertBefore", "insertBefore()")}} aufgerufen werden.

## Syntax

    var knoten = document.importNode(externerKnoten, deep);

- `externerKnoten`
  - : Der neue Knoten oder das neue Dokumenten-Fragment, welches in das aktuelle Dokument importiert werden soll. Nach dem Import ist der Elternknoten `null`, da der neue Knoten noch nicht in den Dokumentenbaum eingefügt wurde.
- `deep`
  - : Ein boolscher Wert der anzeigt, ob der komplette Unterbaum von`externalNode`importiert werden soll. Ist dieser Parameter `true`, werden `externalNode` so wie all seine Nachfahren kopiert; Ist er `false`, wird nur der einzelne Knoten, `externalNode`, importiert.

> **Note:** In der DOM4-Spezifikation, ist `deep` als optionales Argument angeführt. Wird es weggelassen, verhält sich die Methode als ob der Wert von `deep`**`true`**wäre, was zu standardmäßigen tiefen Kopieren führt. Um flach zu kopieren, muss `deep` explizit auf `false` gesetzt werden.Dieses Verhalten wurde in der letzten Spezifikation geändert, der Wert von `deep` wird bei Weglassen auf **`false`**gesetzt. Obwohl es immer noch optional ist, empfehlen wir für Vorwärts- und Rückwärtskompatibilität das `deep`-Argument immer explizit anzugeben. Seit Gecko 28.0 {{geckoRelease(28)}} ist eine Konsolenwarnung implementiert, wenn das Argument weggelassen wird. Seit Gecko 29.0 {{geckoRelease(29)}}) ist flaches Kopieren das Standardverhalten.

## Beispiel

```js
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Anmerkungen

Der Originalknoten wird nicht aus dem Ursprungsdokument entfernt. Der importierte Knoten ist des Weiteren eine Kopie des ursprünglichen.

Nodes from external documents should be cloned using [`document.importNode()`](/de/docs/Web/API/Document/importNode "Die Document-Methode importNode() erzeugt eine neue Kopie eines konkreten Knotens (Node) oder Dokumenten-Fragments (DocumentFragment) eines anderen Dokuments, so dass diese dann in das aktuelle Dokument eingefügt werden kann. ") (or adopted using [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode "Überträgt einen Knoten. Der Knoten und sein Unterbaum werden aus dem Dokument, in dem sie sich befinden entfernt (so vorhanden), und sein ownerDocument wird zu dem aktuellen Dokument geändert. Der Knoten kann dann in das aktuelle Dokument eingefügt werden.")) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument "Die Beschreibung hierüber wurde bisher noch nicht geschrieben. Bitte überlege, mitzuwirken!") issues, see the [W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## Spezifikationen

| Spezifikationen                                                                                                      | Status                           | Kommentar                |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName("DOM WHATWG", "#dom-document-importnode", "document.importNode()")}}             | {{Spec2("DOM WHATWG")}} |                          |
| {{SpecName("DOM2 Core", "core.html#Core-Document-importNode", "document.importNode()")}} | {{Spec2("DOM2 Core")}}     | Ursprüngliche Definition |

## Browserkompatibilität

{{Compat("api.Document.importNode")}}

## Siehe auch

- {{domxref("document.adoptNode()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
