---
title: "HTMLElement: propriété popover"
short-title: popover
slug: Web/API/HTMLElement/popover
page-type: web-api-instance-property
browser-compat: api.HTMLElement.popover
---

{{ APIRef("HTML DOM") }}

La propriété **`popover`** de l'interface {{domxref("HTMLElement")}} récupère et définit l'état popover d'un élément via JavaScript (`"auto"` ou `"manual"`), et peut être utilisée pour la détection de fonctionnalités.

Elle reflète la valeur de l'attribut HTML global {{htmlattrdef("popover")}}.

## Valeur

Une valeur énumérée ; les valeurs possibles sont :

- `"auto"` : Dans l'[état automatique](/fr/docs/Web/API/Popover_API/Using#l_état_auto_et_la_suppression_légère) :
  - Le popover peut être « _Light Dismiss_ » — cela signifie que vous pouvez masquer le popover en cliquant en dehors ou en appuyant sur la touche <kbd>Esc</kbd>.
  - Habituellement, un seul popover peut être affiché à la fois — afficher un deuxième popover quand un est déjà affiché masquera le premier. Les popovers automatiques imbriqués sont la seul exception à cette règle. Voir [Popovers imbriqués](/fr/docs/Web/API/Popover_API/Using#popover_imbriqués) pour plus de détails.
- `"manual"` : Dans l'[état manuel](/fr/docs/Web/API/Popover_API/Using#utiliser_l_état_manuel) :
  - Le popover ne peut pas être « _Light Dismiss_ », bien que les boutons déclaratifs d'affichage/masquage/basculement fonctionneront toujours.
  - Plusieurs popovers indépendants peuvent être affichés en même temps.

## Exemples

### Détection de fonctionnalités

Vous pouvez utiliser l'attribut `popover` pour détecter la [Popover API](/fr/docs/Web/API/Popover_API) :

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

### Configuration d'un popover de manière programmatique

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
