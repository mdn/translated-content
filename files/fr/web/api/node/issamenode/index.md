---
title: "Node : méthode isSameNode()"
short-title: isSameNode()
slug: Web/API/Node/isSameNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

La méthode **`isSameNode()`** de l'interface {{DOMxRef("Node")}} est un alias hérité de l'opérateur de stricte égalité `===` en JavaScript.
Autrement dit, elle teste si deux nœuds sont identiques (c'est-à-dire s'ils font référence au même objet).

> [!NOTE]
> Il n'est pas nécessaire d'utiliser `isSameNode()`&nbsp;; utilisez plutôt l'opérateur de stricte égalité `===`.

## Syntaxe

```js-nolint
isSameNode(otherNode)
```

### Paramètres

- `otherNode`
  - : L'objet {{DOMxRef("Node")}} à comparer.
    > [!NOTE]
    > Ce paramètre n'est pas optionnel, mais peut être défini sur `null`.

### Valeur de retour

Une valeur booléenne qui est `true` si les deux nœuds sont strictement égaux, sinon `false`.

## Exemples

Dans cet exemple, nous créons 3 blocs {{HTMLElement("div")}}. Le premier et le troisième ont les mêmes contenus et attributs, alors que le second est différent. Ensuite, nous exécutons du JavaScript pour comparer les nœuds en utilisant `isSameNode()` et sortons les résultats.

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
const sortie = document.getElementById("sortie");
const divList = document.getElementsByTagName("div");

sortie.innerText += `div 0 same as div 0: ${divList[0].isSameNode(
  divList[0],
)}\n`;
sortie.innerText += `div 0 same as div 1: ${divList[0].isSameNode(
  divList[1],
)}\n`;
sortie.innerText += `div 0 same as div 2: ${divList[0].isSameNode(
  divList[2],
)}\n`;
```

### Résultats

{{EmbedLiveSample("Exemples", "100%", 205)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.isEqualNode()")}}
