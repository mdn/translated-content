---
title: Element.firstElementChild
slug: Web/API/Element/firstElementChild
translation_of: Web/API/Element/firstElementChild
browser-compat: api.Element.firstElementChild
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Element.firstElementChild`** renvoie le premier nœud enfant de type [`Element`](/fr/docs/Web/API/Element) d'un élément, ou `null` s'il n'en a pas.

`Element.firstElementChild` ne renvoie que les nœuds de type élément. Pour récupérer tous les types de nœuds fils, y compris des nœuds texte et des commentaires, il faut utiliser la propriété [`Node.firstChild`](/fr/docs/Web/API/Node/firstChild).

## Valeur

Un objet [`Element`](/fr/docs/Web/API/Element) ou `null`.

## Exemples

```html
<ul id="liste">
  <li>Premier (1)</li>
  <li>Deuxième (2)</li>
  <li>Troisième (3)</li>
</ul>

<script>
const liste = document.getElementById('liste');
console.log(liste.firstElementChild.textContent);
// affiche "Premier (1)" dans la console
</script>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.nextElementSibling`](/fr/docs/Web/API/Element/nextElementSibling)
- [`Element.lastElementChild`](/fr/docs/Web/API/Element/lastElementChild)
