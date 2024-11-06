---
title: "HTMLInputElement : propriété popoverTargetElement"
slug: Web/API/HTMLInputElement/popoverTargetElement
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("DOM")}}

La propriété **`popoverTargetElement`** de l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) permet de lire et définir l'élément <i lang="en">popover</i> à contrôler via un élément [`<input>`](/fr/docs/Web/HTML/Element/input) avec l'attribut `type="button"`.

Elle est l'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Element/input#l_attribut_popovertarget).

## Valeur

Une référence vers un élément <i lang="en">popover</i> dans le DOM.

## Exemples

Cet exemple montre une utilisation simple l'API Popover, en définissant un élément `<div>` comme <i lang="en">popover</i>, puis en le définissant comme `popoverTargetElement` d'un `<input type="button">`. L'attribut `popover` est défini sur [`"auto"`](/fr/docs/Web/API/Popover_API/Using#l_état_automatique_et_la_fermeture_légère), de sorte que le <i lang="en">popover</i> peut être fermé en cliquant en dehors de sa zone (<i lang="en">light-dismissed</i>).

### HTML

Tout d'abord, nous définissons un élément HTML `<input type="button">` que nous utiliserons pour afficher et masquer le <i lang="en">popover</i>, et un `<div>` qui sera le <i lang="en">popover</i>. Dans ce cas, nous ne définissons pas l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Element/input#popovertargetaction) sur l'élément `<input type="button">` ou l'attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) sur l'élément `<div>`, car nous le ferons de manière programmatique.

```html
<input id="toggleBtn" type="button" value="Afficher/masquer le popover" />
<div id="mypopover">Ceci est le contenu du popover !</div>
```

### JavaScript

Le code JavaScript récupère d'abord une référence vers les éléments `<div>` et `<input>`. Il définit ensuite une fonction pour vérifier la prise en charge du <i lang="en">popover</i>.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Vérifie la prise en charge de l'API Popover.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

Si l'API Popover est prise en charge, le code définit l'attribut `popover` de l'élément `<div>` sur `"auto"` et en fait la cible du <i lang="en">popover</i> du bouton de basculement. Nous définissons ensuite la `popoverTargetAction` du `<input type="button">` sur `"toggle"`.

Si l'API Popover n'est pas prise en charge, nous changeons le contenu textuel de l'élément `<div>` pour indiquer cela, et masquons le bouton de basculement.

```js
if (supportsPopover()) {
  // Définit l'élément <div> comme étant un popover automatique
  popover.popover = "auto";

  // Définit la cible popover du bouton comme étant le popover
  toggleBtn.popoverTargetElement = popover;

  // Définit comment le bouton change la visibilité du popover
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "L'API Popover n'est pas prise en charge.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> Un élément <i lang="en">popover</i> est masqué par défaut, mais si l'API n'est pas prise en charge, il s'affichera de façon classique.

### Résultat

Vous pouvez essayer l'exemple ci-après. Affichez et masquez le <i lang="en">popover</i> en activant le bouton. Un tel <i lang="en">popover</i> automatique peut également être fermé en cliquant en dehors de ses limites (<i lang="en">light-dismissed</i>).

{{EmbedLiveSample("", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
