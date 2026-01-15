---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLOutputElement`** fournit des propriétés et méthodes (en plus de celles héritées de {{DOMxRef("HTMLElement")}}) pour manipuler la présentation et la mise en page des éléments HTML {{HTMLElement("output")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite aussi des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLOutputElement.defaultValue")}}
  - : Une chaîne de caractères représentant la valeur par défaut de l'élément, initialement la chaîne vide.
- {{DOMxRef("HTMLOutputElement.form")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLFormElement")}} indiquant le formulaire associé au contrôle, reflétant l'attribut HTML [`form`](/fr/docs/Web/HTML/Reference/Elements/output#form) s'il est défini.
- {{DOMxRef("HTMLOutputElement.htmlFor")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("DOMTokenList")}} reflétant l'attribut HTML [`for`](/fr/docs/Web/HTML/Reference/Elements/output#for), contenant une liste d'identifiants d'autres éléments du même document qui contribuent (ou affectent) la valeur calculée de `value`.
- {{DOMxRef("HTMLOutputElement.labels")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("NodeList")}} d'éléments HTML {{HTMLElement("label")}} associés à l'élément.
- {{DOMxRef("HTMLOutputElement.name")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/output#name), contenant le nom du contrôle envoyé avec les données du formulaire.
- {{DOMxRef("HTMLOutputElement.type")}} {{ReadOnlyInline}}
  - : La chaîne de caractères `"output"`.
- {{DOMxRef("HTMLOutputElement.validationMessage")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant un message localisé décrivant les contraintes de validation non satisfaites (le cas échéant). Chaîne vide si le contrôle n'est pas candidat à la validation de contraintes (`willValidate` est `false`), ou s'il satisfait ses contraintes.
- {{DOMxRef("HTMLOutputElement.validity")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("ValidityState")}} représentant les états de validité de cet élément.
- {{DOMxRef("HTMLOutputElement.value")}}
  - : Une chaîne de caractères représentant la valeur du contenu de l'élément. Se comporte comme la propriété {{DOMxRef("Node.textContent")}}.
- {{DOMxRef("HTMLOutputElement.willValidate")}} {{ReadOnlyInline}}
  - : Retourne une valeur booléenne indiquant si l'élément est candidat à la validation de contraintes. Toujours `false` pour les objets `HTMLOutputElement`.

## Méthodes d'instance

_Cette interface hérite aussi des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLOutputElement.checkValidity()")}}
  - : Vérifie la validité de l'élément et retourne une valeur booléenne indiquant le résultat du test.
- {{DOMxRef("HTMLOutputElement.reportValidity()")}}
  - : Cette méthode signale à l'utilisateur·ice les problèmes de contraintes sur l'élément, le cas échéant. S'il y a des problèmes, déclenche un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} sur l'élément et retourne `false`&nbsp;; s'il n'y a pas de problème, retourne `true`.

    Lorsque le problème est signalé, l'agent utilisateur peut sélectionner l'élément et faire défiler le document ou effectuer une autre action pour attirer l'attention de l'utilisateur·ice. Les agents utilisateurs peuvent signaler plusieurs violations de contraintes si cet élément présente plusieurs problèmes à la fois. Si l'élément n'est pas affiché, l'agent utilisateur peut signaler l'erreur pour le script en cours d'exécution au lieu de notifier l'utilisateur·ice.

- {{DOMxRef("HTMLOutputElement.setCustomValidity()")}}
  - : Définit un message de validité personnalisé pour l'élément. Si ce message n'est pas une chaîne vide, l'élément présente une erreur de validité personnalisée et n'est pas valide.

## Modes

Cet élément fonctionne selon deux modes&nbsp;: le mode _par défaut_ et le mode _valeur_.

### Mode par défaut

Initialement, l'élément est en mode par défaut, donc le contenu de l'élément représente à la fois la valeur de l'élément et sa valeur par défaut.

Si l'élément est en mode par défaut lorsque les descendants de l'élément sont modifiés de quelque manière que ce soit, la propriété `defaultValue` est définie sur la valeur de la propriété {{DOMxRef("Node.textContent","textContent")}}.

Réinitialiser le formulaire place l'élément en mode par défaut et définit la propriété {{DOMxRef("Node.textContent","textContent")}} sur la valeur de la propriété `defaultValue`.

### Mode valeur

L'élément passe en mode valeur lorsque la propriété `value` est définie. La propriété `value` se comporte alors comme la propriété {{DOMxRef("Node.textContent","textContent")}}. Lorsque l'élément est en mode valeur, la valeur par défaut n'est accessible que via la propriété `defaultValue`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("output")}}.
