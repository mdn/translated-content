---
title: Node.cloneNode
slug: Web/API/Node/cloneNode
translation_of: Web/API/Node/cloneNode
---
{{APIRef("DOM")}}

## Übersicht

Gibt ein Duplikat des Knotens, auf dem diese Methode aufgerufen wurde, zurück.

## Syntax

    var dupNode = node.cloneNode(deep);

- `node`
  - : Der Knoten, welcher dupliziert werden soll.
- `dupNode`
  - : Der duplizierte Knoten.
- `deep`
  - : `true` wenn die Kindknoten des Knotens ebenfalls dupliziert werden sollen, `false` wenn nur der Knoten dupliziert werden soll.

> **Hinweis:** In der DOM4 Spezifikation (implementiert in Gecko 13.0 {{geckoRelease(13)}}), ist das Argument `deep` optional. Es ist dann laut Spezifikation **`true`**.Leider wurde dies in der letzten Spezifikation geändert, sodass der Standardwert nun **`false`** ist. Auch wenn es immer noch optional ist, sollte man das Argument `deep` aus diesen Kompatibilitätsgründen setzen. Ab Gecko 28.0 {{geckoRelease(28)}} warnt die Konsole den Entwickler, wenn das Argument nicht gesetzt ist.

## Beispiel

```js
    var p = document.getElementById("para1");
    var p_prime = p.cloneNode(true);
```

## Hinweise

Der duplizierte Knoten enthält alle Attribute und deren Werte, aber nicht die Eventlistener welche via [`addEventListener()`](/de/docs/DOM/element.addEventListener) oder über die jeweilige Elementeigenschaft (z.B. `node.onclick = function`) gesetzt wurden. Im Fall eines `<canvas>`-Elements wird das gezeichnete Bild _nicht_ mitkopiert.

Der mit `cloneNode()` duplizierte Knoten ist noch nicht Teil des Dokuments und hat keinen Elternknoten bis er mithilfe der Methode {{domxref("Node.appendChild()")}} oder einer anderen vergleichbaren Methode in das Dokument eingefügt wird.

Wenn `deep` auf `false` gesetzt ist, werden die Kindknoten nicht mitkopiert. Dies schließt ebenfalls alle Textelemente mit ein, da diese in einem oder mehreren Kindknoten enthalten sind.

> **Warnung:** Die Verwendung von `cloneNode()` kann dazu führen, dass die selbe ID im Dokument mehrmals existiert.

Wenn der Originalknoten eine ID hat, sollte diese im dupliziertem Knoten geändert oder gelöscht werden, um Probleme zu vermeiden. Dies sollte auch für das `name` Attribut überlegt werden.

Um einen Knoten aus einem anderen Dokument zu kopieren sollte die {{domxref("Document.importNode()")}} verwendet werden.

## Browserkompatibilität

{{Compat}}

## Spezifikationen

- {{Spec("http://w3.org/TR/DOM-Level-2-Core/core.html#ID-3A0ED0A4","DOM Level 2 Core: cloneNode","REC")}}
- {{Spec("http://w3.org/TR/DOM-Level-3-Core/core.html#ID-3A0ED0A4","DOM Level 3 Core: cloneNode","REC")}}
- [DOM4: cloneNode](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-node-clonenode) (draft)
