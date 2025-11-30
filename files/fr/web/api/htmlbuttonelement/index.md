---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLButtonElement`** fournit des propriétés et des méthodes (en plus de l'interface régulière {{DOMxRef("HTMLElement")}} dont elle hérite) pour manipuler les éléments HTML {{HTMLElement("button")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLButtonElement.command")}}
  - : Une chaîne de caractères indiquant l'action à effectuer sur un élément contrôlé par ce bouton.
- {{DOMxRef("HTMLButtonElement.commandForElement")}}
  - : Une référence à un objet {{DOMxRef("Element")}} existant que le bouton contrôle.
- {{DOMxRef("HTMLButtonElement.disabled")}}
  - : Un booléen indiquant si le contrôle est désactivé, c'est-à-dire qu'il n'accepte pas les clics.
- {{DOMxRef("HTMLButtonElement.form")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLFormElement")}} représentant le formulaire auquel ce bouton est associé. Si le bouton est un descendant d'un élément formulaire, cet attribut est une référence à l'`HTMLFormElement` associé à ce formulaire.
    Si le bouton n'est pas un descendant d'un élément formulaire, l'attribut peut être une référence à n'importe quel élément `HTMLFormElement` du même document auquel il est lié, ou la valeur nulle (`null`) si aucun ne correspond.
- {{DOMxRef("HTMLButtonElement.formAction")}}
  - : Une chaîne de caractères représentant l'URI d'une ressource qui traite les informations soumises par le bouton. Si défini, cet attribut remplace l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) de l'élément HTML {{HTMLElement("form")}} qui possède ce bouton.
- {{DOMxRef("HTMLButtonElement.formEnctype")}}
  - : Une chaîne de caractères représentant le type de contenu utilisé pour soumettre le formulaire au serveur. Si défini, cet attribut remplace l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) de l'élément HTML {{HTMLElement("form")}} qui possède ce bouton.
- {{DOMxRef("HTMLButtonElement.formMethod")}}
  - : Une chaîne de caractères représentant la méthode HTTP utilisée par le navigateur pour soumettre le formulaire. Si défini, cet attribut remplace l'attribut [`method`](/fr/docs/Web/HTML/Reference/Elements/form#method) de l'élément HTML {{HTMLElement("form")}} qui possède ce bouton.
- {{DOMxRef("HTMLButtonElement.formNoValidate")}}
  - : Un booléen indiquant que le formulaire ne doit pas être validé lors de sa soumission. Si défini, cet attribut remplace l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) de l'élément HTML {{HTMLElement("form")}} qui possède ce bouton.
- {{DOMxRef("HTMLButtonElement.formTarget")}}
  - : Une chaîne de caractères représentant un nom ou un mot-clé indiquant où afficher la réponse reçue après la soumission du formulaire. Si défini, cet attribut remplace l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/form#target) de l'élément HTML {{HTMLElement("form")}} qui possède ce bouton.
- {{DOMxRef("HTMLButtonElement.labels")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("NodeList")}} représentant une liste d'éléments {{HTMLElement("label")}} qui sont des étiquettes pour ce bouton.
- {{DOMxRef("HTMLButtonElement.name")}}
  - : Une chaîne de caractères représentant le nom de l'objet lors de la soumission avec un formulaire. Si défini, il ne doit pas être une chaîne vide.
- {{DOMxRef("HTMLButtonElement.popoverTargetAction")}}
  - : Obtient et définit l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur un élément de fenêtre contextuelle (<i lang="en">popover</i> en anglais) contrôlé par un bouton de contrôle. Cela reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction).
- {{DOMxRef("HTMLButtonElement.popoverTargetElement")}}
  - : Obtient et définit l'élément de fenêtre contextuelle (<i lang="en">popover</i> en anglais) à contrôler via un bouton. L'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).
- {{DOMxRef("HTMLButtonElement.type")}}
  - : Une chaîne de caractères indiquant le comportement du bouton. Il s'agit d'un attribut énuméré avec les valeurs possibles suivantes&nbsp;:
    - `submit`&nbsp;: Le bouton soumet le formulaire. C'est la valeur par défaut si l'attribut n'est pas défini, ou s'il est modifié dynamiquement en une valeur vide ou invalide.
    - `reset`&nbsp;: Le bouton réinitialise le formulaire.
    - `button`&nbsp;: Le bouton n'a pas d'action.
    - `menu`&nbsp;: Le bouton affiche un menu. {{Experimental_Inline}}

- {{DOMxRef("HTMLButtonElement.willValidate")}} {{ReadOnlyInline}}
  - : Un booléen indiquant si le bouton est candidat à la validation de contraintes. Il est à `false` si certaines conditions l'empêchent d'être validé, notamment&nbsp;: sa propriété `type` est `reset` ou `button`&nbsp;; il a un ancêtre {{HTMLElement("datalist")}}&nbsp;; ou la propriété `disabled` est à `true`.
- {{DOMxRef("HTMLButtonElement.validationMessage")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant le message localisé décrivant les contraintes de validation non satisfaites (le cas échéant). Cet attribut est une chaîne vide si le contrôle n'est pas candidat à la validation de contraintes (`willValidate` est à `false`), ou s'il satisfait ses contraintes.
- {{DOMxRef("HTMLButtonElement.validity")}} {{ReadOnlyInline}}
  - : Un {{DOMxRef("ValidityState")}} représentant les états de validité de ce bouton.
- {{DOMxRef("HTMLButtonElement.value")}}
  - : Une chaîne de caractères représentant la valeur actuelle du contrôle de formulaire du bouton.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLButtonElement.checkValidity()")}}
  - : Retourne `true` si la valeur de l'élément ne présente aucun problème de validité&nbsp;; sinon, retourne `false`.
- {{DOMxRef("HTMLButtonElement.reportValidity()")}}
  - : Effectue la même action que `checkValidity()`, mais signale également le résultat à l'utilisateur·ice si l'événement `invalid` n'a pas été annulé.
- {{DOMxRef("HTMLButtonElement.setCustomValidity()")}}
  - : Définit le message de validité personnalisé pour l'élément. Utilisez la chaîne vide pour indiquer que l'élément n'a _pas_ d'erreur de validité personnalisée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("button")}}
