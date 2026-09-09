---
title: "Node : méthode isEqualNode()"
short-title: isEqualNode()
slug: Web/API/Node/isEqualNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

La méthode **`isEqualNode()`** de l'interface {{DOMxRef("Node")}} permet de tester l'égalité entre deux nœuds.
Deux nœuds sont égaux lorsqu'ils ont le même type, les mêmes caractéristiques définissant le nœud (pour les éléments, cela inclut leur ID, le nombre d'enfants, etc.), leurs attributs correspondent, et ainsi de suite. L'ensemble spécifique de points de données qui doit correspondre varie en fonction des types de nœuds.

## Syntaxe

```js-nolint
isEqualNode(otherNode)
```

### Paramètres

- `otherNode`
  - : L'objet {{DOMxRef("Node")}} à comparer pour l'égalité.
    > [!NOTE]
    > Ce paramètre n'est pas optionnel, mais peut être défini sur `null`.

### Valeur de retour

Une valeur booléenne qui est `true` si les deux nœuds sont égaux, ou sinon `false`.
Si `otherNode` est `null`, `isEqualNode()` retourne toujours faux.

## Exemples

Dans cet exemple, nous créons trois blocs {{HTMLElement("div")}}. Le premier et le troisième ont les mêmes contenus et attributs, tandis que le second est différent. Ensuite, nous exécutons du JavaScript pour comparer les nœuds en utilisant `isEqualNode()` et afficher les résultats.

### HTML

```html
<div>Ceci est le premier élément.</div>
<div>Ceci est le deuxième élément.</div>
<div>Ceci est le troisième élément.</div>

<p id="sortie"></p>
```

```css hidden
#sortie {
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
let sortie = document.getElementById("sortie");
let divList = document.getElementsByTagName("div");

sortie.innerHTML +=
  "div 0 est égal à div 0: " + divList[0].isEqualNode(divList[0]) + "<br/>";
sortie.innerHTML +=
  "div 0 est égal à div 1: " + divList[0].isEqualNode(divList[1]) + "<br/>";
sortie.innerHTML +=
  "div 0 est égal à div 2: " + divList[0].isEqualNode(divList[2]) + "<br/>";
```

### Résultats

{{EmbedLiveSample("Exemples", "100%", 210)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.isSameNode()")}}
