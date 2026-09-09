---
title: "Element : propriété firstElementChild"
short-title: firstElementChild
slug: Web/API/Element/firstElementChild
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`firstElementChild`** de l'interface {{DOMxRef("Element")}} retourne le premier nœud enfant de type {{DOMxRef("Element")}} d'un élément, ou `null` s'il n'en a pas.

`Element.firstElementChild` inclut uniquement les nœuds de type élément.
Pour récupérer tous les types de nœuds fils, y compris des nœuds texte et des commentaires, il faut utiliser la propriété {{DOMxRef("Node.firstChild")}}.

## Valeur

Un objet {{DOMxRef("Element")}}, ou `null`.

## Exemples

```html
<ul id="liste">
  <li>Premier (1)</li>
  <li>Deuxième (2)</li>
  <li>Troisième (3)</li>
</ul>
```

```js
const liste = document.getElementById("liste");
console.log(liste.firstElementChild.textContent);
// affiche "Premier (1)" dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.nextElementSibling")}}
- La propriété {{DOMxRef("Element.lastElementChild")}}
