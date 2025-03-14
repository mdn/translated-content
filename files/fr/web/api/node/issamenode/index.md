---
title: Node.isSameNode()
slug: Web/API/Node/isSameNode
---

{{APIRef("DOM")}}

La méthode **`Node.isSameNode()`** teste si deux noeuds sont identiques, c'est-à-dire, s'ils font référence au même objet.

## Syntaxe

```js
var isSameNode = node.isSameNode(other);
```

### Paramètres

- `other` Le {{domxref("Node")}} à tester.

## Exemple

Dans cet exemple, nous créons 3 blocs {{HTMLElement("div")}}. Le premier et le troisième ont les mêmes contenus et attributs, alors que le second est différent. Ensuite, nous exécutons du JavaScript pour comparer les nœuds en utilisant `isSameNode()` et sortons les résultats.

### HTML

```html
<div>This is the first element.</div>
<div>This is the second element.</div>
<div>This is the first element.</div>

<p id="output"></p>
```

```css hidden
#output {
  width: 440px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  display: block;
}
```

### JavaScript

```js
let output = document.getElementById("output");
let divList = document.getElementsByTagName("div");

output.innerHTML +=
  "div 0 same as div 0: " + divList[0].isSameNode(divList[0]) + "<br/>";
output.innerHTML +=
  "div 0 same as div 1: " + divList[0].isSameNode(divList[1]) + "<br/>";
output.innerHTML +=
  "div 0 same as div 2: " + divList[0].isSameNode(divList[2]) + "<br/>";
```

### Résultats

{{ EmbedLiveSample('Exemple', 480) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Node.isEqualNode()")}}
