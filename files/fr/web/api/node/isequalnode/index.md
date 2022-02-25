---
title: Node.isEqualNode()
slug: Web/API/Node/isEqualNode
translation_of: Web/API/Node/isEqualNode
---
{{APIRef("DOM")}}

La méthode **`Node.isEqualNode()`** permet de tester l'égalité entre deux éléments du DOM. Deux noeuds sont équivalents s'ils ont le même type, les mêmes caractéristiques de définition (ID, nombre d'enfants et autres), des attributs qui correspondent etc. L'ensemble spécifique de points des données qui doit correspondre varie en fonction des types de nœuds.

## Syntaxe

    var isEqualNode = node.isEqualNode(otherNode);

- `otherNode` : Le noeud à comparer.

## Exemple

Dans cet exemple, nous créons trois blocs {{HTMLElement("div")}}. Le premier et le troisième ont les mêmes contenus et attributs, alors que le second est différent. Alors, nous éxécutons du JavaScript pour comparer les noeuds en utilisant `isEqualNode()` et sortons les résultats.

### HTML

```html
<div>This is the first element.</div>
<div>This is the second element.</div>
<div>This is the first element.</div>

<p id="output"></p>
```

### CSS

```css
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
let divList  = document.getElementsByTagName("div");

output.innerHTML += "div 0 equals div 0: " + divList[0].isEqualNode(divList[0]) + "<br/>";
output.innerHTML += "div 0 equals div 1: " + divList[0].isEqualNode(divList[1]) + "<br/>";
output.innerHTML += "div 0 equals div 2: " + divList[0].isEqualNode(divList[2]) + "<br/>";
```

### Résultats

{{ EmbedLiveSample('Exemple', 480) }}

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('DOM WHATWG', '#dom-node-isequalnode', 'Node.isEqualNode')}} | {{Spec2('DOM WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Node.isEqualNode")}}

## Voir aussi

- {{domxref("Node.isSameNode()")}}
