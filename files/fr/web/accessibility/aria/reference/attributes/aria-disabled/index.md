---
title: "ARIA : attribut aria-disabled"
short-title: aria-disabled
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-disabled
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

L'état `aria-disabled` indique que l'élément est perceptible mais désactivé, donc non modifiable ni utilisable.

## Description

L'attribut `aria-disabled`, lorsqu'il est défini à `true`, indique que l'élément sur lequel il est appliqué, ainsi que tous ses descendants focalisables, doivent être considérés comme désactivés. Cette déclaration informe les utilisateur·ice·s de technologies d'assistance, comme les lecteurs d'écran, que ces éléments ne sont pas censés être modifiables ou utilisables.

Contrairement à l'attribut booléen HTML [`disabled`](/fr/docs/Web/HTML/Reference/Elements/input#disabled), qui communique qu'un contrôle de formulaire est désactivé, modifie son apparence et supprime toute fonctionnalité (y compris la participation à la soumission du formulaire), `aria-disabled="true"` <strong>expose uniquement</strong> ces éléments comme désactivés sur le plan sémantique. Les développeur·euse·s doivent s'assurer manuellement que la fonctionnalité de ces éléments est effectivement désactivée.

Pour désactiver des contrôles de formulaire HTML natifs, il faut utiliser l'attribut `disabled`, qui fournit toutes les fonctionnalités attendues par défaut. Cependant, il existe des cas où des éléments doivent être exposés comme désactivés tout en restant accessibles à la navigation au clavier (<kbd>Tab</kbd>). Cela améliore leur découvrabilité, car ils ne sont pas retirés de l'ordre de tabulation, et `aria-disabled` ne modifie pas la focalisation ni l'apparence par défaut. Quelques exemples d'usage pertinent&nbsp;:

- Le bouton d'en-tête d'un panneau d'accordéon non repliable,
- Un bouton qui doit rester dans l'ordre de tabulation mais dont l'action est momentanément indisponible (ex. : soumission d'un formulaire),
- Des éléments temporairement inactifs dans un menu qui seraient sinon ignorés par la navigation clavier standard.

Dans ces cas, on souhaite que les utilisateur·ice·s trouvent ces éléments via la navigation clavier, même si leur fonctionnalité est désactivée. Il faut alors utiliser JavaScript pour désactiver la fonctionnalité et modifier l'apparence de l'élément afin que les utilisateur·ice·s voyant·e·s sachent qu'il est désactivé.

> [!NOTE]
> L'état désactivé s'applique à l'élément avec `aria-disabled="true"` et à tous ses descendants focalisables. Soyez vigilant·e lors de l'utilisation sur des conteneurs, notamment s'ils contiennent à la fois des contrôles de formulaire et des liens&nbsp;: l'intention peut être de désactiver les contrôles sans désactiver les liens.

Un autre cas d'usage de `aria-disabled` plutôt que l'attribut HTML `disabled` concerne les contrôles personnalisés qui doivent être marqués comme désactivés, mais qui ne supportent pas l'attribut `disabled`. Par exemple, dans l'extrait suivant, un `<div>` est utilisé pour créer un bouton personnalisé devant être désactivé. Or, `<div>` n'accepte pas l'attribut `disabled`, même avec `role="button"`. Il faut donc utiliser `aria-disabled`.

```html
<div role="button" aria-disabled="true" tabindex="-1">Modifier</div>
```

Comme pour la désactivation fonctionnelle, il faut aussi adapter le style. Contrairement à l'attribut HTML `disabled`, qui applique les styles `:disabled` du navigateur, `aria-disabled="true"` n'applique aucun style par défaut. On peut styliser l'élément avec le [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[aria-disabled="true"]`.

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

Si vous souhaitez que le contrôle reste dans l'ordre de tabulation, notamment si l'élément représente un contenu important, il faudra veiller à ce que le style conserve un contraste suffisant. Par exemple, un bouton désactivé qui introduit un panneau d'accordéon non repliable doit rester lisible.

```css
@media (forced-colors: active) {
  [aria-disabled="true"] {
    border-color: GrayText;
    color: GrayText;
  }
}
```

La [requête média `forced-colors`](/fr/docs/Web/CSS/Reference/At-rules/@media/forced-colors) détecte si l'agent utilisateur a activé un mode couleurs forcées&nbsp;: dans ce cas, la couleur du texte et des bordures est définie sur la couleur système [GrayText](/fr/docs/Web/CSS/system-color#syntax).

À noter&nbsp;: avec `aria-disabled`, il faut toujours prévoir le style visuel pour signaler l'état désactivé, notamment en mode contraste élevé sous Windows.

> [!NOTE]
> Si vous utilisez [`pointer-events: none;`](/fr/docs/Web/CSS/Reference/Properties/pointer-events) pour rendre un élément non cliquable, pensez à désactiver aussi l'interactivité côté JavaScript. `pointer-events: none;` bloque les clics souris, mais n'empêche pas l'activation clavier.

```js
function onClick(event) {
  event.preventDefault();
}

function toggleDisabled(element, status, update) {
  if (status) {
    // element.input.disabled = false;
    element.setAttribute("aria-disabled", "false");
    update.textContent = "L'élément est maintenant activé.";
    element.addEventListener("click", onClick);
  } else {
    // element.input.disabled = true;
    element.setAttribute("aria-disabled", "true");
    update.textContent = "L'élément est maintenant désactivé.";
    element.removeEventListener("click", onClick);
  }
}
```

Quand vous basculez de `aria-disabled="true"` à `"false"`, utilisez JavaScript pour&nbsp;:

1. Passer la valeur à `false` (ou retirer l'attribut),
2. Activer l'élément,
3. Informer l'utilisateur·ice que le contrôle est activé.

Si vous n'utilisez que le CSS pour styliser l'état désactivé via un sélecteur d'attribut, ce style ne s'appliquera plus dès que l'attribut sera retiré ou modifié.

## Valeurs

- `true`
  - : L'élément est désactivé

- `false`
  - : L'élément n'est pas désactivé

## Interfaces associées

- {{domxref("Element.ariaDisabled")}}
  - : La propriété [`ariaDisabled`](/fr/docs/Web/API/Element/ariaDisabled), qui fait partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-disabled`, qui indique que l'élément est perceptible mais désactivé, donc non modifiable ni utilisable.
- {{domxref("ElementInternals.ariaDisabled")}}
  - : La propriété [`ariaDisabled`](/fr/docs/Web/API/ElementInternals/ariaDisabled) de l'interface {{domxref("ElementInternals")}} reflète la valeur de l'attribut `aria-disabled`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`input`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/input_role)
- [`link`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)

Hérité par les rôles&nbsp;:

- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`select`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [Rendre les boutons désactivés plus inclusifs <sup>(angl.)</sup>](https://css-tricks.com/making-disabled-buttons-more-inclusive/)
- [Styliser pour le contraste élevé Windows avec les nouveaux standards de couleurs forcées <sup>(angl.)</sup>](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- L'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled)
- {{domxref("Element.ariaDisabled")}}
- {{domxref("ElementInternals.ariaDisabled")}}
- L'attribut ARIA [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- L'attribut ARIA [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
