---
title: "HTMLInputElement : propriété popoverTargetAction"
slug: Web/API/HTMLInputElement/popoverTargetAction
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{APIRef("Popover API")}}

La propriété **`popoverTargetAction`** de l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) permet de lire et définit l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur une fenêtre contextuelle (<i lang="en">popover</i> en anglais) contrôlée par un élément [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) avec l'attribut `type="button"`.

Elle reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/input#popovertargetaction).

## Valeur

Une valeur énumérée. Les valeurs possibles sont&nbsp;:

- `"hide"`
  - : Le bouton masquera une fenêtre contextuelle (<i lang="en">popover</i> en anglais) affichée. Si vous essayez de masquer une fenêtre contextuelle déjà masquée, aucune action ne sera effectuée.
- `"show"`
  - : Le bouton affichera une fenêtre contextuelle masquée. Si vous essayez d'afficher une fenêtre contextuelle déjà affichée, aucune action ne sera effectuée.
- `"toggle"`
  - : Le bouton basculera une fenêtre contextuelle entre l'état visible et l'état masquée. Si la fenêtre contextuelle est masquée, elle sera affichée&nbsp;; si la fenêtre contextuelle est affichée, elle sera masquée. Si `popoverTargetAction` n'est pas défini, `"toggle"` est l'action par défaut qui sera effectuée par le bouton de contrôle.

## Exemples

### L'action `toggle` avec une fenêtre contextuelle automatique

Cet exemple montre l'utilisation basique de l'API de fenêtre contextuelle (<i lang="en">
Popover</i> en anglais) avec la valeur `"toggle"` définie pour la propriété `popoverTargetAction`.
L'attribut `popover` est défini sur [`"auto"`](/fr/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), ainsi la fenêtre contextuelle peut être fermée («&nbsp;fermeture légère&nbsp;») en cliquant en dehors de la zone de la fenêtre contextuelle.

On commence par définir un [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input/button) de `type="button"` qui servira à afficher et masquer la fenêtre contextuelle, ainsi qu'un `<div>` qui sera la fenêtre contextuelle.
Dans ce cas, nous ne définissons pas l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction) sur le bouton ni l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) sur le `<div>`, car cela sera fait par programmation.

```html
<input id="toggleBtn" type="button" value="Afficher/masquer la fenêtre" />
<div id="mypopover">Ceci est le contenu de la fenêtre contextuelle&nbsp;!</div>
```

Le code JavaScript récupère d'abord une référence vers les éléments `<div>` et `<input>`.
Il définit ensuite une fonction pour vérifier la prise en charge de la fenêtre contextuelle.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Vérifie la prise en charge de l'API Popover.
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Si l'API de fenêtre contextuelle est prise en charge, le code définit l'attribut `popover` de l'élément `<div>` sur `"auto"` et en fait la cible de la fenêtre contextuelle du bouton de basculement.
Nous définissons ensuite la propriété `popoverTargetAction` du bouton sur `"toggle"`.
Si l'API de fenêtre contextuelle n'est pas prise en charge, nous modifions le contenu textuel de l'élément `<div>` pour l'indiquer et masquons le bouton de basculement.

```js
if (supportsPopover()) {
  // Définit l'élément <div> comme étant un popover automatique
  popover.popover = "auto";
  // Définit le bouton comme étant le contrôle du popover
  toggleBtn.popoverTargetElement = popover;

  // Définit que le bouton peut afficher/masquer le popover
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Un élément de fenêtre contextuelle est masqué par défaut, mais si l'API n'est pas prise en charge, votre élément s'affichera «&nbsp;comme d'habitude&nbsp;».

Vous pouvez essayer l'exemple ci-dessous.
Affichez et masquez la fenêtre contextuelle en activant le bouton.
La fenêtre contextuelle «&nbsp;automatique&nbsp;» peut également être fermée en cliquant en dehors des limites du texte de la fenêtre contextuelle.

{{EmbedLiveSample("L'action `toggle` avec une fenêtre contextuelle automatique", "100%")}}

### L'action `show`/`hide` avec une fenêtre contextuelle manuelle

Cet exemple montre comment utiliser les valeurs `"show"` et `"hide"` de l'attribut `popoverTargetAction`.

Le code est quasiment identique à l'exemple précédent, sauf qu'il y a deux éléments `<button>` et que la fenêtre contextuelle (<i lang="en">popover</i> en anglais) est définie avec la valeur [`"manual"`](/fr/docs/Web/API/Popover_API/Using#létat_manuel_des_fenêtres_contextuelles).
Une fenêtre contextuelle «&nbsp;manuelle&nbsp;» doit être fermée explicitement et ne peut pas être fermée simplement («&nbsp;fermeture légère&nbsp;») en cliquant en dehors de la zone de la fenêtre contextuelle.

```html
<input id="showBtn" type="button" value="Afficher la fenêtre" />
<input id="hideBtn" type="button" value="Masquer la fenêtre" />
<div id="mypopover">Ceci est le contenu de la fenêtre contextuelle&nbsp;!</div>
```

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}

const popover = document.getElementById("mypopover");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

const popoverSupported = supportsPopover();

if (supportsPopover()) {
  // Définit l'élément <div> comme étant un popover manuel
  popover.popover = "manual";

  // Définit les boutons comme étant les contrôles du popover
  showBtn.popoverTargetElement = popover;
  hideBtn.popoverTargetElement = popover;

  // Définit les actions cibles comme étant afficher/masquer
  showBtn.popoverTargetAction = "show";
  hideBtn.popoverTargetAction = "hide";
} else {
  popover.textContent = "L'API popover n'est pas prise en charge.";
  showBtn.hidden = true;
  hideBtn.hidden = true;
}
```

Le popover peut être affiché en cliquant sur le bouton «&nbsp;Afficher la fenêtre&nbsp;» et masqué en cliquant sur le bouton «&nbsp;Masquer la fenêtre&nbsp;».

{{EmbedLiveSample("L'action `show`/`hide` avec une fenêtre contextuelle manuelle", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attibut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
