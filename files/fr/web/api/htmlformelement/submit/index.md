---
title: HTMLFormElement.submit()
slug: Web/API/HTMLFormElement/submit
---

{{APIRef("HTML DOM")}}

La méthode **`HTMLFormElement.submit()`** soumet un {{HtmlElement("form")}} donné

Cette méthode est similaire, mais pas identique, à l'activation du script submit {{HtmlElement ("button")}}. Lors de l'appel direct de cette méthode, cependant:

- Aucun événement [`submit`](/fr/docs/Web/API/HTMLFormElement/submit_event) n'est déclenché. En particulier, le gestionnaire d'événement {{domxref("GlobalEventHandlers.onsubmit", "onsubmit")}} du formulaire n'est pas exécuté.
- [Constraint validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) n'est pas déclenché .

Si un contrôle de formulaire (tel qu'un submit bouton ) a un `name` ou un `id` de `submit`, cette méthode masquera la méthode d'envoi du formulaire.

## Syntaxe

```js
HTMLFormElement.submit();
```

## Exemple

```js
document.forms["myform"].submit();
```

## Specification

[HTML Living standard: The form element](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)

## Compatibilité des navigateurs

{{Compat}}
