---
title: aria-required
slug: Web/Accessibility/ARIA/Attributes/aria-required
---

L'attribut `aria-required` indique qu'une saisie de l'utilisatrice ou de l'utilisateur est requise pour cet élément avant qu'un formulaire puisse être envoyé.

## Description

Lorsqu'un élément sémantique HTML [`<input>`](/fr/docs/Web/HTML/Element/input), [`<select>`](/fr/docs/Web/HTML/Element/select), ou [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) doit contenir une valeur, il devrait porter l'attribut [`required`](/fr/docs/Web/HTML/Element/input#required). L'attribut HTML `required` désactive l'envoi du formulaire à moins que les contrôles du formulaire concernés possèdent des valeurs valides, tout en permettant à celles et ceux qui naviguent à l'aide d'outils d'assistance de comprendre quels contrôles doivent avoir une valeur valide pour permettre l'envoi du formulaire.

Lorsque des contrôles de formulaire sont créés avec des éléments non-sémantiques (comme un élément [`<div>`](/fr/docs/Web/HTML/Element/div) auquel on a greffé [le rôle ARIA](/fr/docs/Web/Accessibility/ARIA/Roles) [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Roles/checkbox_role)), l'attribut `aria-required` devrait être ajouté avec une valeur `true` afin d'indiquer aux technologies d'assistance qu'une saisie est nécessaire dans cet élément pour que le formulaire puisse être envoyé. L'attribut `aria-required` peut être utilisé avec les éléments de formulaire HTML, il n'est pas limité aux éléments qui ont un rôle ARIA affecté.

À l'instar de l'attribut HTML `required` pour les contrôles de formulaire en HTML sémantique, l'attribut `aria-required` exprime explicitement aux outils d'assistance que l'élément doit être rempli avant que le formulaire puisse être envoyé. L'attribut `required` d'un contrôle de formulaire en HTML sémantique empêchera l'envoi du formulaire si aucune valeur n'est présente, fournissant un message d'erreur natif pour certains navigateurs si une valeur requise est invalide lors de la tentative d'envoi du formulaire. L'attribut `aria-required`, comme tous les états et propriétés ARIA, n'a aucun impact sur les fonctionnalités de l'élément. Toute fonctionnalité et comportement doit être implémenté à l'aide de JavaScript.

> **Note :** ARIA modifie uniquement l'arbre d'accessibilité, modifiant ainsi la façon dont les outils d'assistance présentent le contenu aux personnes qui les utilisent. ARIA ne modifie en rien les fonctionnalités ou le comportement d'un élément. Lorsqu'on utilise des éléments HTML en dehors de leur sémantique et de leurs fonctionnalités prévues, il faudra utiliser JavaScript pour gérer le comportement, le focus et les états ARIA.

Les pseudo-classes CSS [`:required`](/fr/docs/Web/CSS/:required) et [`:optional`](/fr/docs/Web/CSS/:optional) ciblent les éléments [`<input>`](/fr/docs/Web/HTML/Element/input), [`<select>`](/fr/docs/Web/HTML/Element/select), et [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) selon qu'ils sont obligatoires ou optionnels. Lorsqu'on utilise un élément non-sémantique pour un contrôle de formulaire, ces pseudo-classes ne le ciblent pas. En revanche, il est possible d'utiliser des sélecteurs d'attribut pour déterminer si l'attribut est présent&nbsp;: `[aria-required="true"]` ou `[aria-required="false"]`.

Si un formulaire contient à la fois des éléments de formulaire obligatoires et optionnels, les éléments obligatoires devraient être indiqués visuellement d'une façon qui ne repose pas uniquement sur une couleur. Généralement, on utilise un texte descriptif et/ou une icône.

> **Note :** Les éléments obligatoires devraient être distinguables pour toutes les personnes. Assurez-vous que la présentation visuelle indique que le contrôle est obligatoire d'une façon claire, cohérente et visible et rappelez-vous que la couleur ne suffit pas à communiquer cette information.

## Exemples

Dans le fragment HTML qui suit, si la personne doit nécessairement remplir une adresse électronique dans l'élément avec le rôle [`textbox`](/fr/docs/Web/Accessibility/ARIA/Roles/textbox_role), on y inclut `aria-required="true"`.

```html
<div id="tbLabel">Adresse mail (obligatoire)</div>
<div
  role="textbox"
  contenteditable
  aria-labelledby="tblabel"
  aria-required="true"
  id="email1"></div>
```

Dans cet exemple, il faudrait recourir à JavaScript pour empêcher l'envoi du formulaire tant que la boîte de texte n'a pas de contenu.

On peut tout à fait réécrire ce qui précède de façon sémantique, sans avoir besoin de JavaScript par ailleurs&nbsp;:

```html
<label for="email1">Adresse mail (obligatoire)</label>
<input type="email" id="email1" required />
```

## Valeurs

- `true`
  - : L'élément doit contenir une valeur ou doit être vérifié avant que le formulaire puisse être envoyé.
- `false`
  - : La valeur de l'élément n'est pas obligatoire.

## API `ARIAMixin`

- [`Element.ariaRequired`](/fr/docs/Web/API/Element/ariaRequired)
  - : La propriété [`ariaRequired`](/fr/docs/Web/API/Element/ariaRequired), rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), reflète la valeur de l'attribut `aria-required`.
- [`ElementInternals.ariaRequired`](/fr/docs/Web/API/ElementInternals/ariaRequired)
  - : La propriété [`ariaRequired`](/fr/docs/Web/API/ElementInternals/ariaRequired), rattachée à l'interface [`ElementInternals`](/fr/docs/Web/API/ElementInternals), reflète la valeur de l'attribut `aria-required`.

## Rôles associés

Cet attribut peut être utilisé pour les rôles&nbsp;:

- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`radiogroup`](/fr/docs/web/accessibility/aria/roles/radiogroup_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Roles/tree_role)

Et est hérité pour les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Roles/Switch_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [L'attribut HTML `required`](/fr/docs/Web/HTML/Element/input#required)
- [La pseudo-classe CSS `:optional`](/fr/docs/Web/CSS/:optional)
- [La pseudo-classe CSS `:required`](/fr/docs/Web/CSS/:required)
- [L'attribut `aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [Comprendre les règles WCAG, explications de la règle 3.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_—_input_assistance_help_users_avoid_and_correct_mistakes)
- [Comprendre les critères de succès 3.3.2 - Guide W3C pour la compréhension de WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

<section id="Quick_links">
<strong><a href="/fr/docs/Web/Accessibility/ARIA/Attributes">États et propriétés WAI-ARIA</a></strong>
{{ListSubpagesForSidebar("/fr/docs/Web/Accessibility/aria/Attributes")}}
</section>
