---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
l10n:
  sourceCommit: 2406bfdc031740afbd500a1fc953a76a4b7f8484
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLFieldSetElement`** fournit des propriétés et méthodes spéciales (au-delà de l'interface {{DOMxRef("HTMLElement")}} dont elle dispose également par héritage) pour manipuler la mise en page et la présentation des éléments HTML {{HTMLElement("fieldset")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLFieldSetElement.disabled")}}
  - : Une valeur booléenne reflétant l'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Elements/fieldset#disabled), indiquant si l'utilisateur peut interagir avec le contrôle.
- {{DOMxRef("HTMLFieldSetElement.elements")}} {{ReadOnlyInline}}
  - : Les éléments appartenant à ce jeu de champs. Le type de cette propriété dépend de la version de la spécification implémentée par le navigateur.
- {{DOMxRef("HTMLFieldSetElement.form")}} {{ReadOnlyInline}}
  - : Une {{DOMxRef("HTMLFormControlsCollection")}} ou une {{DOMxRef("HTMLCollection")}} référant l'élément de formulaire contenant, si cet élément se trouve dans un formulaire.
    Si le fieldset n'est pas un descendant d'un élément de formulaire, alors cet attribut peut être l'ID de n'importe quel élément de formulaire du même document auquel il est lié, ou la valeur `null` si aucun ne correspond.
- {{DOMxRef("HTMLFieldSetElement.name")}}
  - : Une chaîne reflétant l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/fieldset#name), contenant le nom du fieldset. Ceci peut être utilisé pour accéder au fieldset en JavaScript. Ce n'est _pas_ une partie des données envoyées au serveur.
- {{DOMxRef("HTMLFieldSetElement.type")}} {{ReadOnlyInline}}
  - : La chaîne `"fieldset"`.
- {{DOMxRef("HTMLFieldSetElement.validationMessage")}} {{ReadOnlyInline}}
  - : Une chaîne représentant un message localisé décrivant les contraintes de validation que l'élément ne satisfait pas (le cas échéant). C'est la chaîne vide si l'élément n'est pas candidat à la validation par contrainte (`willValidate` est `false`), ou s'il satisfait ses contraintes.
- {{DOMxRef("HTMLFieldSetElement.validity")}} {{ReadOnlyInline}}
  - : Un {{DOMxRef("ValidityState")}} représentant les états de validité dans lesquels se trouve cet élément.
- {{DOMxRef("HTMLFieldSetElement.willValidate")}} {{ReadOnlyInline}}
  - : Une valeur booléenne `false`, car les objets {{HTMLElement("fieldset")}} ne sont jamais candidats à la validation par contrainte.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLFieldSetElement.checkValidity()")}}
  - : Retourne toujours `true`, car les objets {{HTMLElement("fieldset")}} ne sont jamais candidats à la validation par contrainte.
- {{DOMxRef("HTMLFieldSetElement.reportValidity()")}}
  - : Retourne toujours `true`, car les objets {{HTMLElement("fieldset")}} ne sont jamais candidats à la validation par contrainte.
- {{DOMxRef("HTMLFieldSetElement.setCustomValidity()")}}
  - : Définit un message de validité personnalisé pour le fieldset. Si ce message n'est pas la chaîne vide, alors le fieldset souffre d'une erreur de validité personnalisée et n'est pas valide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("fieldset")}}.
