---
title: element.previousSibling
slug: Web/API/Node/previousSibling
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Node.previousSibling`** renvoie le nœud (`node`) précédant immédiatement le nœud courant dans la liste {{domxref("Node.childNodes", "childNodes")}} de son parent, ou `null` s'il s'agit du premier nœud de la liste.

## Syntaxe

```js
previousNode = node.previousSibling;
```

## Exemple

```js
// <a><b1 id="b1"/><b2 id="b2"/></a>

alert(document.getElementById("b1").previousSibling); // null
alert(document.getElementById("b2").previousSibling.id); // "b1"
```

## Notes

Les navigateurs basés sur Gecko insèrent des nœuds texte dans un document pour représenter des espaces
vides dans le balisage source. Par conséquent, un nœud obtenu par exemple via [`Node.firstChild`](/fr/docs/Web/API/Node/firstChild) ou
[`Node.previousSibling`](/fr/docs/Web/API/Node/previousSibling) peut faire référence à un nœud texte contenant des espaces plutôt qu'au véritable élément
que l'auteur comptait obtenir.

Consultez [Gestion des espaces dans le DOM](/fr/docs/Gestion_des_espaces_dans_le_DOM)
et [_Why are some Text nodes empty?_
dans la FAQ DOM 3 du W3C](http://www.w3.org/DOM/faq.html#emptytext) pour plus d'informations.

L'opération inverse [`Node.nextSibling`](/fr/docs/Web/API/Node/nextSibling) permet de rechercher l'élément suivant.

## Spécifications

- [DOM Level 1 Core: previousSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling) — [traduction](http://xmlfr.org/w3c/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling) (non normative)
- [DOM Level 2 Core: previousSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8) — [traduction](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8) (non normative)
- [DOM Level 3 Core: previousSibling](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

{{domxref("Node.nextSibling")}}
