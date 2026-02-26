---
title: "HTMLOptionsCollection : propriété selectedIndex"
short-title: selectedIndex
slug: Web/API/HTMLOptionsCollection/selectedIndex
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("HTML DOM")}}

La propriété **`selectedIndex`** de l'interface {{DOMxRef("HTMLOptionsCollection")}} est l'indice numérique du premier élément HTML {{HTMLElement("option")}} sélectionné, s'il y en a un, ou `-1` si aucune `<option>` n'est sélectionnée. Définir cette propriété sélectionne l'option à cet indice et désélectionne toutes les autres options de cette collection, tandis que la définir à `-1` désélectionne tout élément actuellement sélectionné. Elle est exactement équivalente à la propriété {{DOMxRef("HTMLSelectElement.selectedIndex", "selectedIndex")}} de l'élément {{DOMxRef("HTMLSelectElement")}} qui possède cette collection.

## Valeur

Un nombre.

## Exemples

```js
const optionColl = document.getElementById("select").options;
console.log(`option sélectionnée : ${optionColl.selectedIndex}`); // l'indice de la première option sélectionnée, ou -1 si aucune option n'est sélectionnée
optionColl.selectedIndex = 0; // sélectionne le premier élément
optionColl.selectedIndex = -1; // désélectionne toute option sélectionnée
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLOptionsCollection.length")}}
- La méthode {{DOMxRef("HTMLOptionsCollection.add()")}}
- La méthode {{DOMxRef("HTMLOptionsCollection.remove()")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
- L'interface {{DOMxRef("HTMLOptionElement")}}
- L'interface {{DOMxRef("HTMLOptGroupElement")}}
- L'interface {{DOMxRef("HTMLSelectElement")}}
