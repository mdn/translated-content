---
title: "HTMLInputElement: propriété popoverTargetElement"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: 0df415130c
---

{{ APIRef("DOM") }}

La propriété **`popoverTargetElement`** de l'interface {{domxref("HTMLInputElement")}} permet de lire et définit l'élément popover à contrôler via un {{htmlelement("input")}} avec l'attribut `type="button"`.

Elle est l'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Element/input#l_attribut_popovertarget).

## Valeur

Une référence vers un élément popover dans le DOM.

## Exemples

### L'action `toggle` avec un popover automatique

Cet exemple montre l'utilisation de base de l'API popover, en définissant un élément `<div>` comme popover, puis en le définissant comme `popoverTargetElement` d'un `<input type="button">`.
L'attribut `popover` est défini sur [`"auto"`](/fr/docs/Web/API/Popover_API/Using#l_état_auto_et_la_suppression_légère), de sorte que le popover peut être fermé (« _Light Dismissed_ ») en cliquant en dehors de la zone du popover.

Tout d'abord, nous définissons un élément HTML `<input type="button">` que nous utiliserons pour afficher et masquer le popover, et un `<div>` qui sera le popover.
Dans ce cas, nous ne définissons pas l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Element/input#popovertargetaction) sur le `<input type="button">` ou l'attribut {{htmlattrdef("popover")}} sur le `<div>`, car nous le ferons de manière programmatique.

```html
<<input id="toggleBtn" type="button" value="Afficher/masquer le popover" />
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
Nous définissons ensuite la `popoverTargetAction` du `<input type="button">` sur `"toggle"`.
Si l'API popover n'est pas prise en charge, nous changeons le contenu textuel de l'élément `<div>` pour indiquer cela, et masquons le bouton de basculement.

```js
if (supportsPopover()) {
  // Définit l'élément <div> comme étant un popover automatique
  popover.popover = "auto";

  // Définit la cible popover du bouton comme étant le popover
  toggleBtn.popoverTargetElement = popover;

  // Définit comment le bouton change la visibilité du popover
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "L'API popover n'est pas prise en charge.";
  toggleBtn.hidden = true;
}
```

> **Note :** Un élément popover est masqué par défaut, mais si l'API n'est pas prise en charge, votre élément s'affichera « comme d'habitude ».

Vous pouvez essayer l'exemple ci-après.
Affichez et masquez le popover en activant le bouton.
Le popover `"auto"` peut également être « _Light Dismissed_ » en cliquant en dehors des limites du popover.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
