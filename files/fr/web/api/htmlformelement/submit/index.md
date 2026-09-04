---
title: "HTMLFormElement : méthode submit()"
short-title: submit()
slug: Web/API/HTMLFormElement/submit
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`submit()`** de l'interface {{DOMxRef("HTMLFormElement")}} soumet l'élément HTML {{HTMLElement("form")}} fourni.

Cette méthode est similaire, mais pas identique, à l'activation du {{HTMLElement("button")}} de soumission d'un formulaire. Lorsqu'on appelle directement cette méthode, toutefois&nbsp;:

- Aucun évènement {{DOMxRef("HTMLFormElement/submit_event", "submit")}} n'est déclenché. En particulier, le gestionnaire d'évènements `onsubmit` du formulaire n'est pas exécuté.
- La [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) n'est pas déclenchée.

La méthode {{DOMxRef("HTMLFormElement.requestSubmit()")}} est équivalente à l'activation du {{HTMLElement("button")}} de soumission du formulaire et ne présente pas ces différences.

Un contrôle de formulaire (par exemple un bouton de soumission) dont le `name` ou `id` est `submit` masquera la méthode `submit` du formulaire. Tenter d'appeler `myForm.submit();` provoque une erreur «&nbsp;submit is not a function&nbsp;» parce que, dans ce cas, `submit` désigne le contrôle de formulaire qui a pour `name` ou `id` la valeur `submit`.

Un {{HTMLElement("input")}} avec l'attribut `type="submit"` ne sera pas soumis avec le formulaire lorsque l'on utilise **`HTMLFormElement.submit()`**, alors qu'il le serait lors d'une soumission via le formulaire HTML classique.

## Syntaxe

```js-nolint
submit()
```

### Paramètres

Aucun.

### Valeur de retour

Aucun ({{JSxRef("undefined")}}).

## Exemples

```js
document.forms["my-form"].submit();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
