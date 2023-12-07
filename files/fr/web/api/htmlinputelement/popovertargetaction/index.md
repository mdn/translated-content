---
title: "HTMLInputElement: propriété popoverTargetAction"
short-title: popoverTargetAction
slug: Web/API/HTMLInputElement/popoverTargetAction
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.popoverTargetAction
---

{{APIRef("DOM")}}

La propriété **`popoverTargetAction`** de l'interface {{domxref("HTMLInputElement")}} permet de lire et définit l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur un élément popover contrôlé par {{htmlelement("input")}} avec l'attribut `type="button"`.

Elle reflète la valeur de l'attribut HTML [`popovertargetaction`](/en-US/docs/Web/HTML/Element/input#popovertargetaction).

## Valeur

Une valeur énumérée. Les valeurs possibles sont :

- `"hide"`
  - : Le bouton masquera un popover affiché. Si vous essayez de masquer un popover déjà masqué, aucune action ne sera effectuée.
- `"show"`
  - : Le bouton affichera un popover masqué. Si vous essayez d'afficher un popover déjà affiché, aucune action ne sera effectuée.
- `"toggle"`
  - : Le bouton basculera un popover entre les états visible et masqué. Si le popover est masqué, il sera affiché ; si le popover est affiché, il sera masqué. Si `popoverTargetAction` n'est pas défini, `"toggle"` est l'action par défaut qui sera effectuée par le bouton de contrôle.

## Exemples

### L'action `toggle` avec un popover automatique

Cet exemple montre l'utilisation de base de l'API popover avec la valeur `toggle` définie pour la propriété `popoverTargetAction`.
L'attribut `popover` est défini sur [`"auto"`](/fr/docs/Web/API/Popover_API/Using#l_état_auto_et_la_suppression_légère), de sorte que le popover peut être fermé (« _Light Dismissed_ ») en cliquant en dehors de la zone du popover.

Tout d'abord, nous définissons un élément HTML `<button>` que nous utiliserons pour afficher et masquer le popover, et un `<div>` qui sera le popover.
Dans ce cas, nous ne définissons pas l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Element/input#l_attribut_popovertargetaction) sur le `<button>` ou l'attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) sur le `<div>`, car nous le ferons de manière programmatique.

```html
<input id="toggleBtn" type="button" value="Afficher/masquer le popover" />
<div id="mypopover">Ceci est le contenu du popover !</div>
```

Le code JavaScript récupère d'abord une référence vers les éléments `<div>` et `<input>`.
Il définit ensuite une fonction pour vérifier la prise en charge du popover.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Vérifie la prise en charge de l'API popover.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Si l'API popover est prise en charge, le code définit l'attribut `popover` de l'élément `<div>` sur `"auto"` et en fait la cible du popover du bouton de basculement.
Nous définissons ensuite la `popoverTargetAction` du `<button>` sur `"toggle"`.
Si l'API popover n'est pas prise en charge, nous changeons le contenu textuel de l'élément `<div>` pour indiquer cela, et masquons le bouton de basculement.

```js
if (supportsPopover()) {
  // Définit l'élément <div> comme étant un popover automatique
  popover.popover = "auto";
  // Définit le bouton comme étant le contrôle du popover
 toggleBtn.popoverTargetElement = popover;

  // Définit que le bouton peut afficher/masquer le popover
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "L'API popover n'est pas prise en charge.";
  toggleBtn.hidden = true;
}
```

> **Note :** Un élément popover est masqué par défaut, mais si l'API n'est pas prise en charge, votre élément s'affichera « _comme d'habitude_ ».

Vous pouvez essayer l'exemple ci-après.
Affichez et masquez le popover en activant le bouton.
Le popover `"auto"` peut également être « _Light Dismissed_ » en cliquant en dehors des limites du popover.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### L'action `show`/`hide` avec un popover manuel

Cet exemple montre comment utiliser les valeurs `"show"` et `"hide"` de l'attribut `popoverTargetAction`.

Le code est quasiment identique à l'exemple précédent, sauf qu'il y a deux `<button>` et que le popover est définis avec la valeur [`"manual"`](/en-US/docs/Web/API/Popover_API/Using#utiliser_l_état_manuel).
Un popover `manual` doit être fermé explicitement et ne peut pas être « _Light Dismissed_ » par un clique hors du popover.

```html
<input id="showBtn" type="button" value="Afficher le popover" />
<input id="hideBtn" type="button" value="Masquer le popover" />
<div id="mypopover">Ceci est le contenu du popover !</div>
```

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
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

Le popover peut être affiché en cliquant sur le bouton « _Afficher le popover_ » et masqué en cliquant sur le bouton « _Masquer le popover_ ».

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [L'API Popover](/en-US/docs/Web/API/Popover_API)
