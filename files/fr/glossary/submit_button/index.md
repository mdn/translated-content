---
title: Bouton de soumission
slug: Glossary/Submit_button
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **bouton de soumission** est un {{Glossary("element", "élément")}} HTML qui permet d'envoyer un {{HTMLElement("form", "formulaire")}}. Les éléments natifs de bouton de soumission sont&nbsp;:

- {{HTMLElement("button")}} (son `type` par défaut est `"submit"`)
- `{{HTMLElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HTMLElement('input/image', '&lt;input type="image"&gt;')}}`

En plus de soumettre un formulaire, un bouton de soumission peut influencer le comportement du formulaire et les données envoyées.

## Modifier le comportement du formulaire

Les boutons de soumission peuvent modifier le comportement d'envoi du formulaire via différents attributs&nbsp;:

- `{{HTMLElement("button#formaction", "formaction")}}`&nbsp;: Remplace l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du formulaire.
- `{{HTMLElement("button#formenctype", "formenctype")}}`&nbsp;: Remplace l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) du formulaire.
- `{{HTMLElement("button#formmethod", "formmethod")}}`&nbsp;: Remplace l'attribut [`method`](/fr/docs/Web/HTML/Reference/Elements/form#method) du formulaire.
- `{{HTMLElement("button#formnovalidate", "formnovalidate")}}`&nbsp;: Remplace l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) du formulaire.
- `{{HTMLElement("button#formtarget", "formtarget")}}`&nbsp;: Remplace l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/form#target) du formulaire.

## Données envoyées par le formulaire

Si le bouton de soumission est un élément HTML {{HTMLElement("button")}} ou `{{HTMLElement('input/submit', '&lt;input type="submit"&gt;')}}` et possède un attribut `name`, l'ensemble des données du formulaire inclura une entrée pour son nom (`name`) et sa valeur (`value`).

Si le bouton de soumission est un élément HTML `{{HTMLElement('input/image', '&lt;input type="image"&gt;')}}`, l'ensemble des données du formulaire inclura les coordonnées X et Y sur lesquelles l'utilisateur·ice a cliqué (par exemple, `x=100&y=200` ou `buttonName.x=123&buttonName.y=234`).

## Voir aussi

- [Contrôles de formulaire natifs de base](/fr/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Envoyer des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
