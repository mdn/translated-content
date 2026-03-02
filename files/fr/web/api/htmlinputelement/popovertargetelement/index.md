---
title: "HTMLInputElement : propriété popoverTargetElement"
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Popover API")}}

La propriété **`popoverTargetElement`** de l'interface {{DOMxRef("HTMLInputElement")}} permet de lire et de définir l'élément de fenêtre contextuelle (<i lang="en">popover</i> en anglais) à contrôler via un élément HTML {{HTMLElement("input")}} avec l'attribut `type="button"`.

Elle est l'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).

Établir une relation entre une fenêtre contextuelle et son bouton d'activation avec la propriété `popoverTargetElement` a deux effets supplémentaires utiles&nbsp;:

- Le navigateur crée une relation implicite entre [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) et [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entre la fenêtre contextuelle et son élément d'activation, et place la fenêtre contextuelle à une position logique dans l'ordre de navigation au clavier lors de son affichage. Cela rend la fenêtre contextuelle plus accessible aux utilisateur·ice·s du clavier et des technologies d'assistance (voir aussi [Fonctionnalités d'accessibilité des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#accessibilité_des_fenêtres_contextuelles)).
- Le navigateur crée une référence d'ancrage implicite entre les deux, ce qui facilite grandement le positionnement des fenêtres contextuelles par rapport à leurs contrôles à l'aide de la [mise en forme d'ancrage CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). Voir [Positionnement par ancrage des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#positionnement_dancrage_des_fenêtres_contextuelles) pour plus de détails.

## Valeur

Une référence à un élément de fenêtre contextuelle dans le DOM.

## Exemples

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}

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

### Action de basculement d'une fenêtre contextuelle avec une fenêtre contextuelle automatique

Cet exemple montre l'utilisation basique de l'API des fenêtres contextuelles, un élément `<div>` est défini comme fenêtre contextuelle, puis il est désigné comme `popoverTargetElement` d'un [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input/button) de `type="button"`.
L'attribut `popover` est défini sur [`"auto"`](/fr/docs/Web/API/Popover_API/Using#létat_automatique_et_la_fermeture_légère), donc la fenêtre contextuelle peut être fermée («&nbsp;fermeture légère&nbsp;») en cliquant en dehors de sa zone.

Nous définissons d'abord un `<input>` que nous utiliserons pour afficher et masquer la fenêtre contextuelle, et un `<div>` qui sera la fenêtre contextuelle.
Dans ce cas, nous ne définissons pas l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction) sur le `<input>` ni l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) sur le `<div>`, car nous le faisons par programmation.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

Le code JavaScript obtient d'abord une référence vers les éléments `<div>` et `<input>`.
Il définit ensuite une fonction pour vérifier la prise en charge des fenêtres contextuelles.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Vérifie la prise en charge de l'API des fenêtres contextuelles.
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

Si l'API des fenêtres contextuelles est prise en charge, le code définit l'attribut `popover` de l'élément `<div>` sur `"auto"` et en fait la cible de la fenêtre contextuelle du bouton de basculement.
Nous définissons ensuite la propriété `popoverTargetAction` du bouton sur `"toggle"`.
Si l'API des fenêtres contextuelles n'est pas prise en charge, nous modifions le contenu textuel de l'élément `<div>` pour l'indiquer, et masquons le champ de saisie.

```js
if (supportsPopover()) {
  // Définit l'élément <div> comme fenêtre contextuelle automatique
  popover.popover = "auto";

  // Définit le bouton comme cible de la fenêtre contextuelle
  toggleBtn.popoverTargetElement = popover;

  // Définit que le bouton bascule la visibilité de la fenêtre contextuelle
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Un élément de fenêtre contextuelle est masqué par défaut, mais si l'API n'est pas prise en charge, votre élément s'affichera «&nbsp;comme d'habitude&nbsp;».

Vous pouvez essayer l'exemple ci-dessous.
Affichez et masquez la fenêtre contextuelle en basculant le bouton.
La fenêtre contextuelle «&nbsp;automatique&nbsp;» peut aussi être fermée («&nbsp;fermeture légère&nbsp;») en cliquant en dehors du texte de la fenêtre contextuelle.

{{EmbedLiveSample("Action de basculement d'une fenêtre contextuelle avec une fenêtre contextuelle automatique", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attibut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- [L'API Popover](/fr/docs/Web/API/Popover_API)
