---
title: "Element : méthode setAttributeNode()"
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`setAttributeNode()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), ajoute un nouveau nœud [`Attr`](/fr/docs/Web/API/Attr) à l'élément courant.

S'il n'est pas nécessaire de travailler sur le nœud [`Attr`](/fr/docs/Web/API/Attr) avant de l'ajouter (par exemple en le clonant depuis un autre élément), on pourra utiliser la méthode [`setAttribute()`](/fr/docs/Web/API/Element/setAttribute) à la place.

## Syntaxe

```js-nolint
setAttributeNode(attribute)
```

### Paramètres

- `attribute`
  - : Le nœud `Attr` à définir sur l'élément.

### Valeur de retour

L'éventuel nœud [`Attr`](/fr/docs/Web/API/Attr) remplacé.

## Exemples

Cet exemple copie l'attribut `class` d'un élément à l'autre.

### HTML

```html
<div id="un" class="coucou">un</div>
<div id="deux">deux</div>
```

### JavaScript

```js
let d1 = document.getElementById("un");
let d2 = document.getElementById("deux");
let a = d1.getAttributeNode("class");

d2.setAttributeNode(a.cloneNode(true));

// Affiche "coucou" dans la console
console.log(d2.attributes[1].value);
```

## Notes

Si l'attribut nommé existe déjà sur l'élément, cet attribut est remplacé par le nouveau et le nœud remplacé est renvoyé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.setAttribute()`](/fr/docs/Web/API/Element/setAttribute)
- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Element.getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode)
- [`Element.removeAttributeNode()`](/fr/docs/Web/API/Element/removeAttributeNode)
- [`Element.setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS)
