---
title: Document.adoptNode()
slug: Web/API/Document/adoptNode
translation_of: Web/API/Document/adoptNode
---
{{ ApiRef("DOM") }}

Überträgt einen Knoten. Der Knoten und sein Unterbaum werden aus dem Dokument, in dem sie sich befinden entfernt (so vorhanden), und sein [`ownerDocument`](/en-US/docs/DOM/Node.ownerDocument "DOM/Node.ownerDocument") wird zu dem aktuellen Dokument geändert. Der Knoten kann dann in das aktuelle Dokument eingefügt werden.

**Unterstützt seit Gecko 1.9 (Firefox 3)**

## Syntax

    knoten = document.adoptNode(externerKnoten);

- `knoten`
  - : Ist der übertragene Knoten, welcher nun dieses Dokument als sein `ownerDocument`hat. Der Elternknoten ([`parentNode`](/en-US/docs/DOM/Node.parentNode)) is `null`, da er noch nicht in den Dokumentenbaum eingefügt wurde. Zu beachten ist, dass `knoten` und `externerKnoten` nach dem Funktionsaufruf das gleiche Objekt sind.
- `externerKnoten`
  - : Ist der Knoten eines anderes Dokumentes, der übertragen werden soll.

## Beispiel

{{todo}}

## Anmerkungen

Es kann oassieren, dass der Aufruf von `adoptNode` fehlschlägt, wenn der Ursprungsknoten von einer anderen Implementierung kommt, was aber bei Browser-Implementierungen kein Problem darstellen sollte.

Nodes from external documents should be cloned using [`document.importNode()`](/de/docs/Web/API/Document/importNode "Die Document-Methode importNode() erzeugt eine neue Kopie eines konkreten Knotens (Node) oder Dokumenten-Fragments (DocumentFragment) eines anderen Dokuments, so dass diese dann in das aktuelle Dokument eingefügt werden kann. ") (or adopted using [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode "Überträgt einen Knoten. Der Knoten und sein Unterbaum werden aus dem Dokument, in dem sie sich befinden entfernt (so vorhanden), und sein ownerDocument wird zu dem aktuellen Dokument geändert. Der Knoten kann dann in das aktuelle Dokument eingefügt werden.")) before they
can be inserted into the current document. For more on the [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument "Die Beschreibung hierüber wurde bisher noch nicht geschrieben. Bitte überlege, mitzuwirken!") issues, see the
[W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many
sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for
improved future compatibility.

## Spezifikation

- [DOM Level 3 Core: Document.adoptNode](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Document3-adoptNode)

## Siehe auch

- [document.importNode](/de/docs/DOM/document.importNode)
