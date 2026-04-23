---
title: "ARIA : attribut aria-invalid"
short-title: aria-invalid
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-invalid
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

L'attribut `aria-invalid` indique l'état de la valeur saisie comme ne correspondant pas au format attendu par l'application.

## Description

L'attribut `aria-invalid` est utilisé pour indiquer que la valeur saisie dans un champ de saisie n'est pas dans un format ou une valeur acceptée par l'application. Cela peut inclure des formats comme les adresses e-mail ou les numéros de téléphone. `aria-invalid` peut aussi être utilisé pour indiquer qu'un champ obligatoire est vide.

L'attribut `aria-invalid` peut être utilisé avec n'importe quel élément de formulaire HTML classique, et n'est pas limité aux éléments ayant un rôle ARIA attribué.

L'attribut doit être défini avec JavaScript à la suite d'un processus de validation. Si une valeur est jugée invalide ou hors plage, définissez `aria-invalid="true"` **et** informez l'utilisateur·ice qu'il y a une erreur. Pour une meilleure expérience, fournissez des suggestions pour corriger l'erreur. Ne définissez pas `aria-invalid="true"` sur les éléments obligatoires vides tant que l'utilisateur·ice n'a pas tenté de soumettre le formulaire. Il·Elle peut encore être en train de le remplir.

> [!NOTE]
> Lorsque `aria-invalid` est utilisé avec l'attribut `aria-required`, `aria-invalid` ne doit pas être défini à true avant la soumission du formulaire — uniquement en réponse à la validation.

Il existe actuellement quatre valeurs&nbsp;: en plus de `true` et `false`, on trouve `grammar` pour une erreur grammaticale détectée et `spelling` pour une erreur d'orthographe. Si l'attribut n'est pas présent, ou que sa valeur est `false` ou une chaîne de caractères vide, la valeur par défaut est `false`. Toute autre valeur est traitée comme si `true` était défini.

### Validation native HTML

HTML propose une validation native des formulaires. Lorsqu'un·e utilisateur·ice soumet un formulaire avec un contrôle contenant des erreurs, le premier contrôle de formulaire avec une valeur invalide affiche un message d'erreur, nativement.

S'il y a un attribut [`required`](/fr/docs/Web/HTML/Reference/Attributes/required) sur un contrôle de formulaire non rempli, le formulaire ne sera pas soumis et un message d'erreur s'affichera, du type «&nbsp;Veuillez remplir ce champ&nbsp;» ou similaire. Le message de validation natif varie selon le navigateur et ne peut pas être mis en forme.

```html
<input type="number" step="2" min="0" max="100" required />
```

Si l'utilisateur·ice saisit une valeur supérieure au maximum, inférieure au minimum, ou qui ne correspond pas à l'incrément, un message d'erreur s'affichera. Si l'utilisateur·ice saisit «&nbsp;3&nbsp;», le message d'erreur natif sera du type «&nbsp;Veuillez saisir une valeur valide&nbsp;».

Si vous créez vos propres scripts de validation de formulaire, veillez à inclure `aria-invalid` sur les contrôles invalides, ainsi que du style (utilisez le sélecteur d'attribut `[aria-invalid="true"]`) et des messages (avec [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)) pour aider les utilisateur·ice·s à comprendre où se trouve l'erreur et comment la corriger.

## Valeurs

- `grammar`
  - : Une erreur grammaticale a été détectée.
- `false` (par défaut)
  - : Aucune erreur détectée dans la valeur.
- `spelling`
  - : Une erreur d'orthographe a été détectée.
- `true`
  - : La valeur saisie par l'utilisateur·ice n'a pas passé la validation.

Toute valeur non présente dans cette liste sera traitée comme `true`.

## Exemple

L'extrait suivant montre une version simplifiée de deux champs de formulaire avec une fonction de validation attachée à l'événement blur. Notez que, puisque la valeur par défaut de `aria-invalid` est `false`, il n'est pas strictement nécessaire d'ajouter l'attribut à l'entrée.

```html
<ul>
  <li>
    <label for="name">Nom complet</label>
    <input
      type="text"
      name="name"
      id="name"
      aria-required="true"
      aria-invalid="false" />
  </li>
  <li>
    <label for="email">Adresse e-mail</label>
    <input
      type="email"
      name="email"
      id="email"
      aria-required="true"
      aria-invalid="false" />
  </li>
</ul>
```

```js
document.getElementById("name").addEventListener("blur", () => {
  checkValidity("name", " ", "Nom invalide saisi (prénom et nom requis)");
});

document.getElementById("email").addEventListener("blur", () => {
  checkValidity("email", "@", "Adresse e-mail invalide");
});
```

Notez qu'il n'est pas nécessaire de valider les champs immédiatement à la désélection&nbsp;; l'application peut attendre la soumission du formulaire (ce qui n'est pas forcément recommandé).

L'extrait ci-dessous montre une fonction de validation, qui ne vérifie que la présence d'un caractère particulier (dans la réalité, la validation sera probablement plus sophistiquée)&nbsp;:

```js
function checkValidity(id, searchTerm, msg) {
  const elem = document.getElementById(id);
  if (elem.value.includes(searchTerm)) {
    elem.setAttribute("aria-invalid", "false");
    updateAlert();
  } else {
    elem.setAttribute("aria-invalid", "true");
    updateAlert(msg);
  }
}
```

L'extrait ci-dessous montre les fonctions d'alerte, qui ajoutent (ou retirent) le message d'erreur&nbsp;:

```js
function updateAlert(msg) {
  const oldAlert = document.getElementById("alert");
  if (oldAlert) {
    oldAlert.remove();
  }

  if (msg) {
    const newAlert = document.createElement("div");
    newAlert.setAttribute("role", "alert");
    newAlert.setAttribute("id", "alert");
    const content = document.createTextNode(msg);
    newAlert.appendChild(content);
    document.body.appendChild(newAlert);
  }
}
```

Notez que l'alerte possède l'attribut de rôle ARIA [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

## Interfaces associées

- {{domxref("Element.ariaInvalid")}}
  - : La propriété [`ariaInvalid`](/fr/docs/Web/API/Element/ariaInvalid), qui fait partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-invalid`, qui indique si l'élément est exposé à une API d'accessibilité.
- {{domxref("ElementInternals.ariaInvalid")}}
  - : La propriété [`ariaInvalid`](/fr/docs/Web/API/ElementInternals/ariaInvalid), qui fait partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-invalid`.

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

Hérité dans le rôle&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- La pseudo-classe CSS {{CSSXRef(':valid')}}
- La pseudo-classe CSS {{CSSXRef(':invalid')}}
- [Validation de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
