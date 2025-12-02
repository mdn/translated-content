---
title: "HTMLButtonElement : propriété popoverTargetAction"
short-title: popoverTargetAction
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{APIRef("Popover API")}}

La propriété **`popoverTargetAction`** de l'interface {{DOMxRef("HTMLButtonElement")}} permet d'obtenir et de définir l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur une fenêtre contextuelle (<i lang="en">popover</i> en anglais) contrôlée par un bouton.

Elle reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

## Valeur

Une valeur énumérée. Les valeurs possibles sont&nbsp;:

- `"hide"`
  - : Le bouton masquera une fenêtre contextuelle (<i lang="en">popover</i> en anglais) affichée. Si vous essayez de masquer une fenêtre contextuelle déjà masquée, aucune action ne sera effectuée.
- `"show"`
  - : Le bouton affichera une fenêtre contextuelle (<i lang="en">popover</i> en anglais) masquée. Si vous essayez d'afficher une fenêtre contextuelle déjà affichée, aucune action ne sera effectuée.
- `"toggle"`
  - : Le bouton basculera une fenêtre contextuelle (<i lang="en">popover</i> en anglais) entre affichée et masquée. Si la fenêtre contextuelle est masquée, elle sera affichée&nbsp;; si elle est affichée, elle sera masquée. Si `popoverTargetAction` n'est pas défini, `"toggle"` est l'action par défaut qui sera effectuée par le bouton de contrôle.

## Exemples

### L'action `toggle` avec une fenêtre contextuelle automatique

Cet exemple montre l'utilisation basique de l'API des fenêtres contextuelles (<i lang="en">popover</i> en anglais) avec la valeur `"toggle"` définie pour la propriété `popoverTargetAction`.
L'attribut `popover` est défini sur [`"auto"`](/fr/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), donc la fenêtre contextuelle peut être fermée («&nbsp;<i lang="en">light-dismissed</i>&nbsp;») en cliquant en dehors de la zone de la fenêtre contextuelle.

On définit d'abord un élément HTML `<button>` qui servira à afficher et masquer la fenêtre contextuelle, et un `<div>` qui sera la fenêtre contextuelle.
Dans ce cas, on ne définit pas l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction) sur le `<button>` ni l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) sur le `<div>`, car cela sera fait par programmation.

```html
<button id="toggleBtn">Afficher/masquer la fenêtre</button>
<div id="monpopover">Ceci est le contenu&nbsp;!</div>
```

Le code JavaScript commence par récupérer une référence vers les éléments `<div>` et `<button>`.
Il définit ensuite une fonction pour vérifier la prise en charge de l'API des fenêtres contextuelles.

```js
const popover = document.getElementById("monpopover");
const toggleBtn = document.getElementById("toggleBtn");

// Vérifie la prise en charge de l'API Popover.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Si l'API des fenêtres contextuelles est prise en charge, le code définit l'attribut `popover` de l'élément `<div>` à `"auto"` et fait de ce `<div>` la cible du bouton de bascule.
On définit ensuite la propriété `popoverTargetAction` du `<button>` à `"toggle"`.
Si l'API des fenêtres contextuelles n'est pas prise en charge, on modifie le texte du `<div>` pour l'indiquer et on masque le bouton de bascule.

```js
if (supportsPopover()) {
  // Définit l'élément <div> comme étant une fenêtre contextuelle automatique
  popover.popover = "auto";
  // Définit le bouton comme étant le contrôle de la fenêtre contextuelle
  toggleBtn.popoverTargetElement = popover;

  // Définit que le bouton peut afficher/masquer la fenêtre contextuelle
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Un élément fenêtre contextuelle (<i lang="en">popover</i> en anglais) est masqué par défaut, mais si l'API n'est pas prise en charge, votre élément s'affichera «&nbsp;comme d'habitude&nbsp;».

Vous pouvez essayer l'exemple ci-dessous.
Affichez et masquez la fenêtre contextuelle en cliquant sur le bouton.
La fenêtre contextuelle `"auto"` peut aussi être «&nbsp;<i lang="en">light-dismissed</i>&nbsp;» en cliquant en dehors du texte de la fenêtre contextuelle.

{{EmbedLiveSample("L'action `toggle` avec une fenêtre contextuelle automatique", "100%")}}

### L'action `show`/`hide` avec une fenêtre contextuelle manuelle

Cet exemple montre comment utiliser les valeurs `"show"` et `"hide"` de l'attribut `popoverTargetAction`.

Le code est quasiment identique à l'exemple précédent, sauf qu'il y a deux `<button>` et que le <i lang="en">popover</i> est défini avec la valeur [`"manual"`](/fr/docs/Web/API/Popover_API/Using#l_état_manuel). Une fenêtre contextuelle manuelle doit être fermée explicitement et ne peut pas être fermée facilement par un clic hors de la fenêtre contextuelle.

```html
<button id="showBtn">Afficher la fenêtre</button>
<button id="hideBtn">Masquer la fenêtre</button>
<div id="monpopover">Ceci est le contenu de la fenêtre&nbsp;!</div>
```

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = document.getElementById("monpopover");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

const popoverSupported = supportsPopover();

if (supportsPopover()) {
  // Définit l'élément <div> comme étant une fenêtre contextuelle manuelle
  popover.popover = "manual";

  // Définit les boutons comme étant les contrôles de la fenêtre contextuelle
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

La fenêtre contextuelle peut être affichée en cliquant sur le bouton «&nbsp;Afficher la fenêtre&nbsp;» et masquée en cliquant sur le bouton «&nbsp;Masquer la fenêtre&nbsp;».

{{EmbedLiveSample("L'action `show`/`hide` avec une fenêtre contextuelle manuelle", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
