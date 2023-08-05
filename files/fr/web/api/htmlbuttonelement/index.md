---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLButtonElement`** fournit des propriétés et méthodes (en plus de celles fournies par l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) dont elle hérite) qui permettent de manipuler les éléments [`<button>`](/fr/docs/Web/HTML/Element/Button).

{{InheritanceDiagram}}

## Propriétés

_Hérite des propriétés de son parent, [`HTMLElement`](/fr/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.accessKey`](/fr/docs/Web/API/HTMLButtonElement/accessKey)
  - : Une chaîne de caractères qui indique la touche du clavier (unique) qui donne accès à ce bouton.
- [`HTMLButtonElement.autofocus`](/fr/docs/Web/API/HTMLButtonElement/autofocus)
  - : Un booléen qui indique si le contrôle devrait avoir le focus au chargement de la page, à moins que l'utilisatrice ou l'utilisateur passe outre, par exemple en saisissant dans un autre contrôle. Seul un élément du document, associé à un formulaire, peut avoir cet attribut.
- [`HTMLButtonElement.disabled`](/fr/docs/Web/API/HTMLButtonElement/disabled)
  - : Un booléen qui indique si le contrôle est désactivé, signifiant alors qu'il n'accepte aucun clic.
- [`HTMLButtonElement.form`](/fr/docs/Web/API/HTMLButtonElement/form) {{readonlyInline}}
  - : Un objet [`HTMLFormElement`](/fr/docs/Web/API/HTMLFormElement) qui reflète l'élément de formulaire auquel ce bouton est associé. Si le bouton est un descendant de l'élément du formulaire, cet attribut sera une référence à l'objet `HTMLFormElement` associé à ce formulaire. Si le bouton n'est pas un descendant de l'élément du formulaire, l'attribut peut être une référence à n'importe quel élément `HTMLFormElement` associé du même document, ou la valeur `null` si aucun ne correspond.
- [`HTMLButtonElement.formAction`](/fr/docs/Web/API/HTMLButtonElement/formAction)
  - : Une chaîne de caractères qui reflète l'URI d'une ressource qui traite les informations envoyées par ce bouton. S'il est présent, cet attribut surcharge l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#action) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel est associé cet élément.
- [`HTMLButtonElement.formEnctype`](/fr/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Une chaîne de caractères qui reflète le type de contenu utilisé pour envoyer le formulaire au serveur. S'il est présent, cet attribut surcharge l'attribut [`enctype`](/fr/docs/Web/HTML/Element/Form#enctype) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel est associé cet élément.
- [`HTMLButtonElement.formMethod`](/fr/docs/Web/API/HTMLButtonElement/formMethod)
  - : Une chaîne de caractères qui reflète la méthode HTTP utilisée par le navigateur pour envoyer le formulaire. S'il est présent, cet attribut surcharge l'attribut [`method`](/fr/docs/Web/HTML/Element/Form#attr-method) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel est associé cet élément.
- [`HTMLButtonElement.formNoValidate`](/fr/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Un booléen qui indique que le formulaire ne devrait pas être validé pour l'envoi. S'il est présent, cet attribut surcharge l'attribut [`novalidate`](/fr/docs/Web/HTML/Element/Form#attr-novalidate) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel est associé cet élément.
- [`HTMLButtonElement.formTarget`](/fr/docs/Web/API/HTMLButtonElement/formTarget)
  - : Une chaîne de caractères qui reflète le nom ou un mot-clé de l'emplacement où afficher la réponse reçue après l'envoi du formulaire. S'il est présent, cet attribut surcharge l'attribut [`target`](/fr/docs/Web/HTML/Element/Form#attr-target) de l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) auquel est associé cet élément.
- [`HTMLButtonElement.labels`](/fr/docs/Web/API/HTMLButtonElement/labels) {{readonlyInline}}
  - : Un objet [`NodeList`](/fr/docs/Web/API/NodeList) qui représente une liste des éléments [`<label>`](/fr/docs/Web/HTML/Element/Label) qui sont des libellés pour ce bouton.
- [`HTMLButtonElement.menu`](/fr/docs/Web/API/HTMLButtonElement/menu) {{experimental_inline}}
  - : Un objet [`HTMLMenuElement`](/fr/docs/Web/API/HTMLMenuElement) qui représente l'élément de menu à afficher si on clique sur ce bouton et qu'il a `type="menu"`.
- [`HTMLButtonElement.name`](/fr/docs/Web/API/HTMLButtonElement/name)
  - : Une chaîne de caractères qui représente le nom de l'objet lorsqu'il est envoyé avec un formulaire. Si cet attribut est présent, sa valeur ne doit pas être la chaîne de caractères.
- [`HTMLButtonElement.tabIndex`](/fr/docs/Web/API/HTMLButtonElement/tabIndex)
  - : Une valeur numérique de type `long` qui représente la position de cet élément au sein de l'ordre de tabulation.
- [`HTMLButtonElement.type`](/fr/docs/Web/API/HTMLButtonElement/type)

  - : Une chaîne de caractères qui indique le comportement du bouton. Il s'agit d'un attribut à valeur contrainte parmi une liste&nbsp;:

    - `submit`
      - : Le bouton envoi le formulaire. Il s'agit de la valeur par défaut si l'attribut n'est pas indiqué ou s'il a été changé dynamiquement vers une valeur vide ou invalide.
    - `reset`
      - : Le bouton réinitialise le formulaire.
    - `button`
      - : Le bouton ne fait rien.
    - `menu`
      - : Le bouton affiche un menu. {{experimental_inline}}

- [`HTMLButtonElement.willValidate`](/fr/docs/Web/API/HTMLButtonElement/willValidate) {{readonlyInline}}
  - : Un booléen qui indique si le bouton est candidat à la validation de contraintes. Il vaut `false` si une condition l'empêche de participer à la validation des contraintes, y compris si sa propriété `type` vaut `reset` ou `button`&nbsp;; s'il a un ancêtre [`<datalist>`](/fr/docs/Web/HTML/Element/datalist)&nbsp;; ou si la propriété `disabled` vaut `true`.
- [`HTMLButtonElement.validationMessage`](/fr/docs/Web/API/HTMLButtonElement/validationMessage) {{readonlyInline}}
  - : Une chaîne de caractères représentant le message localisé qui décrit la validation de contrainte lorsque le contrôle ne respecte pas les contraintes éventuelles. Cet attribut vaudra la chaîne vide si le contrôle n'est pas candidat à la validation de contraintes (`willValidate` à `false`), ou s'il respecte les contraintes.
- [`HTMLButtonElement.validity`](/fr/docs/Web/API/HTMLButtonElement/validity) {{readonlyInline}}
  - : Un objet [`ValidityState`](/fr/docs/Web/API/ValidityState) représentant l'état de validité du bouton.
- [`HTMLButtonElement.value`](/fr/docs/Web/API/HTMLButtonElement/value)
  - : Une chaîne de caractères représentant la valeur de formulaire associé au contrôle du bouton.

## Méthodes

_Hérite des méthodes de son parent, [`HTMLElement`](/fr/docs/Web/API/HTMLElement)_

| Nom                                     | Valeur de retour | Description                                                          |
| --------------------------------------- | ---------------- | -------------------------------------------------------------------- |
| `checkValidity()`                       | Booléen          | Non prise en charge pour les éléments bouton ou de réinitialisation. |
| `reportValidity()`                      | Booléen          | Non prise en charge pour les éléments bouton ou de réinitialisation. |
| `setCustomValidity(in DOMString error)` | `void`           | Non prise en charge pour les éléments bouton ou de réinitialisation. |

Pour les navigateurs utilisant Gecko, la pseudo-classe non standard [`:-moz-submit-invalid`](/fr/docs/Web/CSS/:-moz-submit-invalid) permet de mettre en forme les boutons d'envoi de formulaire selon la validation du formulaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui porte cette interface&nbsp;: [`<button>`](/fr/docs/Web/HTML/Element/Button)
