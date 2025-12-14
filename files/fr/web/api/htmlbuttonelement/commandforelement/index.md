---
title: "HTMLButtonElement : propriété commandForElement"
short-title: commandForElement
slug: Web/API/HTMLButtonElement/commandForElement
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{APIRef("Invoker Commands API")}}

La propriété **`commandForElement`** de l'interface {{DOMxRef("HTMLButtonElement")}} permet d'obtenir et de définir l'élément à contrôler via un bouton.

Il s'agit de l'équivalent JavaScript de l'attribut HTML [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor).

## Valeur

Une référence à un objet {{DOMxRef("Element")}} existant que le bouton contrôle.

## Exemples

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.commandForElement = popover;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Invoker Commands API", "L'API Invoker Commands", "", "nocode")}}
- La propriété {{DOMxRef("HTMLButtonElement.command")}}
- L'interface {{DOMxRef("CommandEvent")}}
