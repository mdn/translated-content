---
title: "HTMLElement : propriété popover"
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("HTML DOM")}}

La propriété **`popover`** de l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) récupère et définit l'état d'un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) via JavaScript (`"auto"` ou `"manual"`), et peut être utilisée pour la détection de fonctionnalités.

Elle reflète la valeur de l'attribut HTML global [`popover`](/fr/docs/Web/HTML/Global_attributes/popover).

## Valeur

Une valeur énumérée&nbsp;; les valeurs possibles sont&nbsp;:

- `"auto"`
  - : Dans l'[état automatique](/fr/docs/Web/API/Popover_API/Using#l_état_automatique_et_la_fermeture_légère) :
    - Le <i lang="en">popover</i> peut être masqué en cliquant en dehors de la zone ou en appuyant sur la touche <kbd>Esc</kbd> (<i lang="en">light-dismissed</i>).
    - Habituellement, un seul <i lang="en">popover</i> peut être affiché à la fois&nbsp;: afficher un deuxième <i lang="en">popover</i> alors qu'un autre est déjà affiché masquera le premier. Les <i lang="en">popovers</i> automatiques imbriqués sont la seule exception à cette règle. Voir [la section sur les <i lang="en">popovers</i> imbriqués](/fr/docs/Web/API/Popover_API/Using#popovers_imbriqués) pour plus de détails.
- `"manual"`
  - : Dans l'[état manuel](/fr/docs/Web/API/Popover_API/Using#l_état_manuel) :
    - Le popover ne peut pas être fermé en cliquant en dehors de la zone ou avec <kbd>Esc</kbd>, les boutons déclaratifs d'affichage/masquage/basculement fonctionneront toujours.
    - Plusieurs <i lang="en">popovers</i> indépendants peuvent être affichés en même temps.

## Exemples

### Détection de fonctionnalités

Vous pouvez utiliser l'attribut `popover` pour détecter la prise en charge de [l'API Popover](/fr/docs/Web/API/Popover_API)&nbsp;:

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

### Configuration d'un <i lang="en">popover</i> de manière programmatique

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  console.log("L'API Popover n'est pas prise en charge.");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
