---
title: "HTMLOptionsCollection : méthode remove()"
short-title: remove()
slug: Web/API/HTMLOptionsCollection/remove
l10n:
  sourceCommit: 1c0dda60cb2b680a753264b538e2c46776ecd837
---

{{APIRef("HTML DOM")}}

La méthode **`remove()`** de l'interface {{DOMxRef("HTMLOptionsCollection")}} supprime l'élément HTML {{HTMLElement("option")}} défini par l'indice de la collection.

## Syntaxe

```js-nolint
remove(index)
```

### Paramètres

- `index`
  - : Un entier (commençant à 0) correspondant à l'indice de l'élément {{DOMxRef("HTMLOptionElement")}} dans la {{DOMxRef("HTMLOptionsCollection")}}. Si l'indice n'est pas trouvé, la méthode n'a aucun effet.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
const optionList = document.querySelector("select").options;
const listLength = optionList.length;
optionList.remove(listLength - 1); // supprime le dernier élément
optionList.remove(0); // supprime le premier élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLOptionsCollection.add()")}}
- La propriété {{DOMxRef("HTMLOptionsCollection.length")}}
- La propriété {{DOMxRef("HTMLOptionsCollection.selectedIndex")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
- La méthode {{DOMxRef("Element.remove()")}}
