---
title: "Node : propriété isConnected"
short-title: isConnected
slug: Web/API/Node/isConnected
l10n:
  sourceCommit: cb10ea9c059e54e6b3fc61866e8db0f73fcdbce7
---

{{APIRef("DOM")}}

La propriété en lecture seule **`isConnected`** de l'interface {{DOMxRef("Node")}} retourne un booléen indiquant si le nœud est connecté (directement ou indirectement) à un objet {{DOMxRef("Document")}}.

## Valeur

Une valeur booléenne qui est `true` si le nœud est connecté à son objet contexte pertinent, sinon `false`.

> [!NOTE]
> Un nœud {{DOMxRef("Attr")}} retourne toujours `false` pour `isConnected`, même lorsque son {{DOMxRef("Attr.ownerElement", "ownerElement")}} est connecté.
> Cela s'explique par le fait que, bien qu'un attribut soit associé à un élément avec `ownerElement`, il ne fait pas partie de l'arbre des nœuds — il n'a pas de nœud parent et il est sa propre racine.
> Comme `isConnected` n'est vrai que lorsque la racine d'un nœud est un document, un nœud `Attr` n'est jamais considéré comme connecté.

## Exemples

### DOM standard

Un exemple de DOM standard&nbsp;:

```js
let test = document.createElement("p");
console.log(test.isConnected); // Retourne false
document.body.appendChild(test);
console.log(test.isConnected); // Retourne true
```

### DOM d'ombre

Un exemple de DOM d'ombre&nbsp;:

```js
// Crée une racine d'ombre
const ombre = this.attachShadow({ mode: "open" });

// Crée du CSS à appliquer au DOM d'ombre
const style = document.createElement("style");
console.log(style.isConnected); // Retourne false

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  positions: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3
}
`;

// Attache l'élément style créé au DOM d'ombre

ombre.appendChild(style);
console.log(style.isConnected); // Retourne true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
