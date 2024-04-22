---
title: Element.lastElementChild
slug: Web/API/Element/lastElementChild
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Element.lastElementChild`** renvoie un objet [`Element`](/fr/docs/Web/API/Element) correspondant au dernier élément enfant de l'élément courant (celui sur lequel on a appelé la propriété), ou `null` s'il n'y a pas d'éléments enfants.

`Element.lastElementChild` ne porte que sur les nœuds qui sont des éléments. Pour consulter l'ensemble des nœuds enfants, y compris ceux qui ne sont pas des éléments comme les nœuds de texte et de commentaires, il faudra utiliser [`Node.lastChild`](/fr/docs/Web/API/Node/lastChild).

## Valeur

Un objet [`Element`](/fr/docs/Web/API/Element) ou `null`

## Exemples

```html
<ul id="list">
  <li>Premier (1)</li>
  <li>Deuxième (2)</li>
  <li>Troisième (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.lastElementChild.textContent);
  // Troisième  (3)
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.previousElementSibling`](/fr/docs/Web/API/Element/previousElementSibling)
- [`Element.firstElementChild`](/fr/docs/Web/API/Element/firstElementChild)
