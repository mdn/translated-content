---
title: "ARIA : attribut aria-errormessage"
short-title: aria-errormessage
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-errormessage` sur un objet identifie le ou les éléments qui fournissent un message d'erreur pour cet objet.

## Description

Lorsqu'une erreur est générée par l'utilisateur·ice, il est important de l'en informer et de lui indiquer comment la corriger. Deux attributs sont nécessaires&nbsp;: définissez [`aria-invalid="true"`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) pour indiquer que l'objet est en état d'erreur, puis ajoutez l'attribut `aria-errormessage` avec pour valeur l'identifiant (`id`) de l'élément (ou des éléments) contenant le texte du message d'erreur pour cet objet.

L'attribut `aria-errormessage` ne doit être utilisé que lorsque la valeur d'un objet n'est pas valide, c'est-à-dire lorsque [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) est défini à `true`. Si l'objet est valide et que vous incluez l'attribut `aria-errormessage`, assurez-vous que l'élément référencé est masqué, car le message qu'il contient n'est pas pertinent.

Lorsque `aria-errormessage` est pertinent, le ou les éléments référencés doivent être visibles afin que les utilisateur·ice·s puissent voir ou entendre le message d'erreur.

Souvent, il est utile que l'élément contenant le message d'erreur soit une [région ARIA dynamique](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions), par exemple lorsqu'un message d'erreur s'affiche après que l'utilisateur·ice a fourni une valeur invalide. Le message d'erreur doit décrire le problème et indiquer à l'utilisateur·ice ce qui est requis pour valider l'objet. Ajouter le message d'erreur dans une région ARIA dynamique informe les technologies d'assistance que l'utilisateur·ice peut bénéficier du contenu du message d'erreur, même si ce message ne serait pas transmis autrement.

Incluez un message d'erreur visible et reliez l'objet invalide avec l'attribut `aria-errormessage` si l'échec est visible et qu'une description explicite de l'erreur est nécessaire.

## Exemple

Nous créons quelques styles pour&nbsp;:

1. Masquer tous les messages d'erreur,
2. Faire apparaître les objets invalides comme invalides,
3. Afficher les messages d'erreur qui sont des éléments adjacents suivant un objet invalide.

Nous utilisons `aria-invalid="true"` pour identifier les objets invalides&nbsp;:

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

Lorsqu'un objet est invalide, nous utilisons JavaScript pour ajouter `aria-invalid="true"`. Le CSS ci-dessus rend visible la classe `.errormessage` qui suit un objet invalide.

```html
<p>
  <label for="email">Adresse e-mail&nbsp;:</label>
  <input
    type="email"
    name="email"
    id="email"
    aria-invalid="true"
    aria-errormessage="err1" />
  <span id="err1" class="errormessage"
    >Erreur&nbsp;: saisissez une adresse e-mail valide</span
  >
</p>
```

Lorsque l'on passe d'un état valide à invalide, la seule modification JavaScript dans cet exemple est la mise à jour de `aria-invalid` sur le champ de saisie e-mail. Comme le message d'erreur suit le champ et devient visible et accessible dans l'arbre d'accessibilité, l'exemple reste simple. On pourrait aussi appliquer une propriété [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) ou utiliser un rôle de région dynamique comme [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

## Valeurs

- Liste de références d'identifiants
  - : L'identifiant (`id`) ou la liste d'identifiants (`id`) (séparés par des espaces) des éléments qui contiennent le message d'erreur pour l'élément courant.

## Interfaces associées

- {{domxref("Element.ariaErrorMessageElements")}}
  - : La propriété `ariaErrorMessageElements` fait partie de l'interface de chaque élément.
    Sa valeur est un tableau de sous-classes de l'interface {{domxref("Element")}} qui reflètent les identifiants référencés dans l'attribut `aria-errormessage` ([avec certaines restrictions](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).
- {{domxref("ElementInternals.ariaErrorMessageElements")}}
  - : La propriété `ariaErrorMessageElements` fait partie de l'interface de chaque élément personnalisé.
    Sa valeur est un tableau de sous-classes de l'élément {{domxref("Element")}} qui reflètent les identifiants référencés dans l'attribut `aria-errormessage` ([avec certaines restrictions](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies)).

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Hérite des rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spécifications

{{Specifications}}

## Voir aussi

- La pseudo-classe CSS {{CSSxref(':invalid')}}
- L'attribut ARIA [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- L'attribut ARIA [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- L'attribut ARIA [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
