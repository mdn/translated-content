---
title: "ARIA : attribut aria-checked"
short-title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-checked` indique l'état actuel («&nbsp;sélectionné&nbsp;» ou non) des cases à cocher, boutons radio et autres widgets.

> [!NOTE]
> Dans la mesure du possible, utilisez un élément HTML {{htmlelement("input")}} avec `type="checkbox"` ou `type="radio"`&nbsp;: ces éléments possèdent une sémantique intégrée et ne nécessitent pas d'attributs ARIA.

## Description

L'attribut `aria-checked` indique si l'élément est sélectionné (`true`), non sélectionné (`false`), ou si l'état de sélection est indéterminé (`mixed`), c'est-à-dire ni sélectionné ni non sélectionné. La valeur `mixed` est prise en charge par les rôles de saisie à trois états&nbsp;: [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) et [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role).

La valeur `mixed` n'est pas prise en charge sur [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) ou [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) ni sur les éléments qui héritent de ces rôles. Si `mixed` est défini alors qu'il n'est pas pris en charge, la valeur sera considérée comme `false`.

```html
<span
  role="checkbox"
  id="caseACocher"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="libelle-chk15"></span>
<label id="libelle-chk15">S'abonner à la lettre d'information</label>
```

L'attribut `tabindex` est nécessaire pour permettre la sélection clavier. JavaScript est requis pour basculer l'état `aria-checked`. Et, si cette case à cocher fait partie d'un formulaire à soumettre, il faut encore plus de JavaScript pour définir un nom et une valeur.
L'exemple ci-dessus pourrait être écrit ainsi&nbsp;:

```html
<input type="checkbox" id="libelle-chk15" name="Abonnement" />
<label for="libelle-chk15">S'abonner à la lettre d'information</label>
```

En utilisant l'élément {{htmlelement("input")}} avec `type="checkbox"` au lieu d'ARIA, aucun JavaScript n'est nécessaire.

## Valeurs

- false
  - : L'élément peut être sélectionné mais ne l'est pas actuellement.
- true
  - : L'élément est sélectionné.
- mixed
  - : Pour [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) et [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) uniquement, équivalent à «&nbsp;indéterminé&nbsp;», indique une valeur mixte, ni sélectionné ni non sélectionné.
- undefined (valeur par défaut)
  - : L'élément ne prend pas en charge la sélection.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## Interfaces associées

- {{domxref("Element.ariaChecked")}}
  - : La propriété [`ariaChecked`](/fr/docs/Web/API/Element/ariaChecked), qui fait partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-checked`.
- {{domxref("ElementInternals.ariaChecked")}}
  - : La propriété [`ariaChecked`](/fr/docs/Web/API/ElementInternals/ariaChecked), qui fait partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-checked`.

```js
monElementHTML.ariaChecked = true;
```

## Spécifications

{{Specifications}}

## Voir aussi

- [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/fr/docs/Web/HTML/Reference/Elements/input/radio)
- L'attribut ARIA [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- L'attribut ARIA [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [Exemple de case à cocher à deux états <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html)
- [Exemple de case à cocher à état mixte <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html)
