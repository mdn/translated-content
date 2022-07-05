---
title: HTMLFormElement.submit()
slug: Web/API/HTMLFormElement/submit
tags:
  - HTML DOM
  - HTMLFormElement
  - Méthode
translation_of: Web/API/HTMLFormElement/submit
---
{{APIRef("HTML DOM")}}

La méthode  **`HTMLFormElement.submit()`**  soumet un {{HtmlElement("form")}} donné

Cette méthode est similaire, mais pas identique, à l’activation du script submit {{HtmlElement ("button")}}. Lors de l'appel direct de cette méthode, cependant:

- Aucun événement {{event ("submit")}} n'est déclenché. En particulier, le formulaire
- {{domxref("GlobalEventHandlers.onsubmit", "onsubmit")}}  le gestionnaire d'événement n'est pas exécuté .
- [Constraint validation](/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) n'est pas déclenché .

Si un contrôle de formulaire (tel qu'un submit bouton ) a un`name` ou un `id` de `submit`, cette méthode masquera la méthode d'envoi du formulaire.

## Syntax

    HTMLFormElement.submit()

## Exemple

```js
document.forms["myform"].submit();
```

## Specification

[HTML Living standard: The form element](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)

## Compatibilité des navigateurs

{{Compat("api.HTMLFormElement.submit")}}
