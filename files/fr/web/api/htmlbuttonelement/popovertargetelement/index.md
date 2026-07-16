---
title: "HTMLButtonElement : propriété popoverTargetElement"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La propriété **`popoverTargetElement`** de l'interface {{DOMxRef("HTMLButtonElement")}} permet d'obtenir et de définir l'élément de fenêtre contextuelle (<i lang="en">popover</i> en anglais) à contrôler via un bouton.

Il s'agit de l'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).

Établir une relation entre une fenêtre contextuelle et son bouton d'invocation à l'aide de la propriété `popoverTargetElement` a deux effets supplémentaires utiles&nbsp;:

- Le navigateur crée une relation implicite [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) et [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) entre la fenêtre contextuelle et l'invocateur, et place la fenêtre contextuelle à une position logique dans l'ordre de navigation au clavier lorsqu'elle est affichée. Cela rend la fenêtre contextuelle plus accessible aux utilisateur·ices de clavier et de technologies d'assistance (voir aussi [Fonctionnalités d'accessibilité des fenêtres contextuelles](/fr/docs/Web/API/Popover_API/Using#fonctionnalites_daccessibilite_des_fenetres_contextuelles)).
- Le navigateur crée une ancre implicite entre les deux, ce qui facilite grandement le positionnement des fenêtres contextuelles par rapport à leurs contrôles à l'aide du [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning). Voir [Positionnement d'ancre de fenêtre contextuelle](/fr/docs/Web/API/Popover_API/Using#positionnement_dancre_de_fenetre_contextuelle) pour plus de détails.

## Valeur

Une référence vers un élément de fenêtre contextuelle dans le DOM.

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
