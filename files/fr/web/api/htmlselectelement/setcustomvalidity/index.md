---
title: HTMLSelectElement.setCustomValidity()
slug: Web/API/HTMLSelectElement/setCustomValidity
translation_of: Web/API/HTMLSelectElement/setCustomValidity
---
{{ APIRef("HTML DOM") }}

La méthode **`HTMLSelectElement.setCustomValidity()`** définit le message de validation personnalisé de l'élément sélectionné avec le message renseigné. Utiliser une chaîne de caractère vide indique que l'élément _n'a pas_ de message d'erreur de validation personnalisé.

## Syntaxe

```js
ElmSelectionne.setCustomValidity(message);
```

### Paramètres

- *message* est le {{domxref("DOMString")}} contenant le message d'erreur.

## Spécifications

| Spécification                                                                                                                                | Statut                           | Commentaire                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-cva-setcustomvalidity', 'HTMLSelectElement.setCustomValidity()')}}         | {{Spec2('HTML WHATWG')}} | Pas de changement depuis la dernière snapshot, {{SpecName('HTML5 W3C')}}. |
| {{SpecName('HTML5 W3C', 'forms.html#dom-cva-setcustomvalidity', 'HTMLSelectElement.setCustomValidity()')}} | {{Spec2('HTML5 W3C')}}     | Définition initiale, snapshot de {{SpecName('HTML WHATWG')}}            |

## Compatibilité des navigateurs

{{Compat("api.HTMLSelectElement.setCustomValidity")}}

## Voir aussi

- [Validation du formulaire](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation).
