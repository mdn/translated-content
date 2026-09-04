---
title: "Element : méthode setAttributeNode()"
short-title: setAttributeNode()
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("DOM")}}

La méthode **`setAttributeNode()`** de l'interface {{DOMxRef("Element")}} ajoute un nouveau nœud {{DOMxRef("Attr")}} à l'élément défini.

S'il n'est pas nécessaire de travailler sur le nœud d'attribut (par exemple en le clonant depuis un autre élément) avant de l'ajouter, on peut utiliser la méthode {{DOMxRef("Element.setAttribute()", "setAttribute()")}} à la place.

## Syntaxe

```js-nolint
setAttributeNode(attribute)
```

### Paramètres

- `attribute`
  - : Le nœud {{DOMxRef("Attr")}} à définir sur l'élément.

### Valeur de retour

Le nœud d'attribut remplacé, le cas échéant, retourné par cette fonction.

## Exemples

Cet exemple copie l'attribut `class` d'un élément à l'autre.

### HTML

```html
<div id="one" lang="en-US">one</div>
<div id="deux">deux</div>
```

### JavaScript

```js
const d1 = document.getElementById("one");
const d2 = document.getElementById("deux");
const a = d1.getAttributeNode("lang");

d2.setAttributeNode(a.cloneNode(true));

// Retourne : 'en-US'
console.log(d2.attributes[1].value);
```

## Notes

Si l'attribut nommé existe déjà sur l'élément, cet attribut est remplacé par le nouveau et le nœud remplacé est retourné.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Element.getAttributeNode()")}}
- La méthode {{DOMxRef("Element.removeAttributeNode()")}}
