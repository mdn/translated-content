---
title: "HTMLButtonElement : propriété popoverTargetAction"
slug: Web/API/HTMLButtonElement/popoverTargetAction
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("DOM")}}

La propriété **`popoverTargetAction`** de l'interface [`HTMLButtonElement`](/fr/docs/Web/API/HTMLButtonElement) permet de lire et de définir l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur un élément <i lang="en">popover</i> contrôlé par un bouton.

Elle reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

## Valeur

Une valeur énumérée. Les valeurs possibles sont&nbsp;:

- `"hide"`
  - : Le bouton masquera un <i lang="en">popover</i> affiché. Si vous essayez de masquer un <i lang="en">popover</i> déjà masqué, aucune action ne sera effectuée.
- `"show"`
  - : Le bouton affichera un <i lang="en">popover</i> masqué. Si vous essayez d'afficher un <i lang="en">popover</i> déjà affiché, aucune action ne sera effectuée.
- `"toggle"`
  - : Le bouton basculera un <i lang="en">popover</i> entre les états visible et masqué. Si le <i lang="en">popover</i> est masqué, il sera affiché&nbsp;; si le <i lang="en">popover</i> est affiché, il sera masqué. Si `popoverTargetAction` n'est pas défini, `"toggle"` est l'action par défaut qui sera effectuée par le bouton de contrôle.

## Exemples

### L'action `toggle` avec un <i lang="en">popover</i> automatique

Cet exemple montre l'utilisation de base de l'API Popover avec la valeur `toggle` définie pour la propriété `popoverTargetAction`. L'attribut `popover` est défini sur [`"auto"`](/fr/docs/Web/API/Popover_API/Using#l_état_automatique_et_la_fermeture_légère), de sorte que le popover peut être fermé («&nbsp;<i lang="en">light-dismissed</i>&nbsp;») en cliquant en dehors de la zone du <i lang="en">popover</i>.

Tout d'abord, nous définissons un élément HTML `<button>` que nous utiliserons pour afficher et masquer le <i lang="en">popover</i>, et un `<div>` qui sera le <i lang="en">popover</i>. Dans ce cas, nous ne définissons pas l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#l_attribut_popovertargetaction) sur le `<button>` ou l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) sur le `<div>`, car nous le ferons de manière programmatique.

```html
<button id="toggleBtn">Afficher/masquer le popover</button>
<div id="monpopover">Ceci est le contenu du popover !</div>
```

Le code JavaScript récupère d'abord une référence vers les éléments `<div>` et `<button>`. Il définit ensuite une fonction pour vérifier la prise en charge du <i lang="en">popover</i>.

```js
const popover = document.getElementById("monpopover");
const toggleBtn = document.getElementById("toggleBtn");

// Vérifie la prise en charge de l'API Popover.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Si l'API Popover est prise en charge, le code définit l'attribut `popover` de l'élément `<div>` sur `"auto"` et en fait la cible du <i lang="en">popover</i> du bouton de basculement. Nous définissons ensuite la `popoverTargetAction` du `<button>` sur `"toggle"`. Si l'API Popover n'est pas prise en charge, nous changeons le contenu textuel de l'élément `<div>` pour indiquer cela, et masquons le bouton de basculement.

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
> Un élément <i lang="en">popover</i> est masqué par défaut, mais si l'API n'est pas prise en charge, il s'affichera de façon classique.

Vous pouvez essayer l'exemple ci-après. Affichez et masquez le <i lang="en">popover</i> en activant le bouton. Le <i lang="en">popover</i> `"auto"` peut également être fermé facilement («&nbsp;<i lang="en">light-dismissed</i>&nbsp;») en cliquant en dehors des limites du <i lang="en">popover</i>.

{{EmbedLiveSample("", "100%")}}

### L'action `show`/`hide` avec un <i lang="en">popover</i> manuel

Cet exemple montre comment utiliser les valeurs `"show"` et `"hide"` de l'attribut `popoverTargetAction`.

Le code est quasiment identique à l'exemple précédent, sauf qu'il y a deux `<button>` et que le <i lang="en">popover</i> est défini avec la valeur [`"manual"`](/fr/docs/Web/API/Popover_API/Using#l_état_manuel). Un popover manuel doit être fermé explicitement et ne peut pas être fermé facilement par un clic hors du <i lang="en">popover</i>.

```html
<button id="showBtn">Afficher le popover</button>
<button id="hideBtn">Masquer le popover</button>
<div id="monpopover">Ceci est le contenu du popover !</div>
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

Le popover peut être affiché en cliquant sur le bouton «&nbsp;Afficher le popover&nbsp;» et masqué en cliquant sur le bouton «&nbsp;Masquer le popover&nbsp;».

{{EmbedLiveSample("", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
