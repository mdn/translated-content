---
title: "HTMLElement : propriété popover"
slug: Web/API/HTMLElement/popover
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

La propriété **`popover`** de l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) récupère et définit l'état d'un élément [de fenêtre contextuelle](/fr/docs/Web/API/Popover_API) (<i lang="en">popover</i> en anglais) via JavaScript (`"auto"`, `"hint"` ou `"manual"`), et peut être utilisée pour la détection de fonctionnalités.

Elle reflète la valeur de l'attribut HTML global [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover).

## Valeur

Une valeur énumérée&nbsp;; les valeurs possibles sont&nbsp;:

- `"auto"`
  - : Dans l'état [`auto`](/fr/docs/Web/API/Popover_API/Using#létat_automatique_et_la_fermeture_légère) des fenêtres contextuelles, elles peuvent être masquées en cliquant en dehors de la zone ou en appuyant sur la touche <kbd>Esc</kbd> (<i lang="en">light-dismissed</i>).

    Habituellement, une seule fenêtre contextuelle peut être affichée à la fois&nbsp;: en afficher une deuxième alors qu'une autre est déjà affichée masquera la première. Les fenêtres contextuelles automatiques imbriquées sont la seule exception à cette règle. Voir [la section sur les <i lang="en">popovers</i> imbriquées](/fr/docs/Web/API/Popover_API/Using#popovers_imbriqués) pour plus de détails.

- `"hint"` {{Experimental_Inline}}
  - : Les fenêtres contextuelles [`hint`](/fr/docs/Web/API/Popover_API/Using#utiliser_létat_«_hint_»_des_fenêtres_contextuelles) n'entraînent pas la fermeture des fenêtres contextuelles `auto` lorsqu'elles sont affichées, mais fermeront les autres fenêtres contextuelles d'indication.
    Elles peuvent être masquées par fermeture légère et répondront aux demandes de fermeture.

    Habituellement, elles sont affichées et masquées en réponse à des évènements JavaScript autres que le clic, comme [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)/[`mouseout`](/fr/docs/Web/API/Element/mouseout_event) et [`focus`](/fr/docs/Web/API/Element/focus_event)/[`blur`](/fr/docs/Web/API/Element/blur_event).
    Cliquer sur un bouton pour ouvrir une fenêtre contextuelle `hint` entraînera la fermeture légère d'une fenêtre contextuelle `auto` ouverte.

- `"manual"`
  - : Dans l'état [`manual`](/fr/docs/Web/API/Popover_API/Using#létat_manuel_des_fenêtres_contextuelles) des fenêtres contextuelles, elles ne peuvent pas être fermées en cliquant en dehors de la zone ou avec <kbd>Esc</kbd>, les boutons déclaratifs d'affichage/masquage/basculement fonctionneront toujours. Plusieurs fenêtres contextuelles indépendantes peuvent être affichées en même temps.

## Exemples

### Détection de fonctionnalités

Vous pouvez utiliser l'attribut `popover` pour détecter la prise en charge de [l'API Popover](/fr/docs/Web/API/Popover_API)&nbsp;:

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

### Configuration d'une fenêtre contextuelle de manière programmatique

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

- L'attribut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
