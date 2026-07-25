---
title: "Node : méthode appendChild()"
short-title: appendChild()
slug: Web/API/Node/appendChild
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("DOM")}}

La méthode **`appendChild()`** de l'interface {{DOMxRef("Node")}} ajoute un nœud à la fin de la liste des enfants d'un nœud parent défini.

> [!NOTE]
> Si l'enfant donné est une référence à un nœud existant dans le document, `appendChild()` le déplace de sa position actuelle vers la nouvelle position.

Si l'enfant donné est un objet {{DOMxRef("DocumentFragment")}}, le contenu entier du {{DOMxRef("DocumentFragment")}} est déplacé dans la liste d'enfants du nœud parent défini.

`appendChild()` retourne le nœud nouvellement ajouté, ou si l'enfant est un {{DOMxRef("DocumentFragment")}}, le fragment vidé.

> [!NOTE]
> Contrairement à cette méthode, la méthode {{DOMxRef("Element.append()")}} prend en charge plusieurs arguments et l'ajout de chaînes de caractères. Vous pouvez préférer l'utiliser si votre nœud est un élément.

## Syntaxe

```js-nolint
appendChild(child)
```

### Paramètres

- `child`
  - : Le nœud à ajouter au nœud parent donné (généralement un élément).

### Valeur de retour

Un {{DOMxRef("Node")}} qui est l'enfant ajouté (`child`), sauf lorsque `child` est un {{DOMxRef("DocumentFragment")}}, auquel cas le {{DOMxRef("DocumentFragment")}} vide est retourné.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque les contraintes de l'arbre DOM sont violées, c'est-à-dire si l'un des cas suivants se produit&nbsp;:
    - Si le parent de `child` n'est pas un objet {{DOMxRef("Document")}}, un objet {{DOMxRef("DocumentFragment")}} ou un objet {{DOMxRef("Element")}}.
    - Si l'insertion de `child` entraîne un cycle, c'est-à-dire si `child` est un ancêtre du nœud.
    - Si `child` n'est pas un objet {{DOMxRef("DocumentFragment")}}, un objet {{DOMxRef("DocumentType")}}, un objet {{DOMxRef("Element")}}, ou un objet {{DOMxRef("CharacterData")}}.
    - Si le nœud actuel est un objet {{DOMxRef("Text")}}, et que son parent est un objet {{DOMxRef("Document")}}.
    - Si le nœud actuel est un objet {{DOMxRef("DocumentType")}} et que son parent n'est _pas_ un objet {{DOMxRef("Document")}}, car un _doctype_ doit toujours être un descendant direct d'un _document_.
    - Si le parent du nœud est un objet {{DOMxRef("Document")}} et que `child` est un objet {{DOMxRef("DocumentFragment")}} avec plus d'un enfant {{DOMxRef("Element")}}, ou qui a un enfant {{DOMxRef("Text")}}.
    - Si l'insertion de `child` entraîne un objet {{DOMxRef("Document")}} avec plus d'un enfant {{DOMxRef("Element")}}.

## Description

Si l'enfant donné est une référence à un nœud existant dans le document, `appendChild()` le déplace de sa position actuelle à la nouvelle position — il n'est pas nécessaire de retirer le nœud de son parent avant de l'ajouter à un autre nœud. Cela signifie qu'un nœud ne peut pas être à deux endroits du document simultanément. La méthode {{DOMxRef("Node.cloneNode()")}} peut être utilisée pour créer une copie du nœud avant de l'ajouter sous le nouveau parent. Les copies créées avec `cloneNode` ne sont pas automatiquement synchronisées.

`appendChild()` retourne le nœud nouvellement ajouté, au lieu du nœud parent. Cela signifie que vous pouvez ajouter le nouveau nœud dès sa création sans perdre la référence à celui-ci&nbsp;:

```js
const paragraphe = document.body.appendChild(document.createElement("p"));
// Vous pouvez ajouter d'autres éléments au paragraphe plus tard
```

D'un autre côté, vous ne pouvez pas utiliser `appendChild()` dans un style [d'API fluide <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Fluent_interface) (comme jQuery).

```js example-bad
// Cela n'ajoute pas trois paragraphes :
// les trois éléments sont imbriqués au lieu d'être des voisins
document.body
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"));
```

## Exemples

### Ajouter un paragraphe au corps du document

```js
// Crée un nouvel élément paragraphe et l'ajoute à la fin du corps du document
const p = document.createElement("p");
document.body.appendChild(p);
```

### Créer une structure DOM imbriquée

Dans cet exemple, nous essayons de créer une structure DOM imbriquée en utilisant le moins de variables temporaires possible.

```js
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "bonjour le monde";

document.body.appendChild(fragment);
```

Cela génère l'arbre DOM suivant&nbsp;:

```html
<section>
  <ul>
    <li>bonjour le monde</li>
  </ul>
</section>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Node.removeChild()")}}
- La méthode {{DOMxRef("Node.replaceChild()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}}
- La méthode {{DOMxRef("Node.hasChildNodes()")}}
- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
- La méthode {{DOMxRef("Element.append()")}}
