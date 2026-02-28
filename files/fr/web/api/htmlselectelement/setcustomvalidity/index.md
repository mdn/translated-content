---
title: "HTMLSelectElement : méthode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLSelectElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`setCustomValidity()`** de l'interface {{DOMxRef("HTMLSelectElement")}} définit le message de validation personnalisé de l'élément sélectionné avec le message renseigné. Utiliser une chaîne de caractère vide indique que l'élément _n'a pas_ de message d'erreur de validation personnalisé.

## Syntaxe

```js-nolint
setCustomValidity(string)
```

### Paramètres

- `string`
  - : La chaîne de caractères contenant le message d'erreur. Une chaîne vide supprime toute erreur de validité personnalisée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Validation du formulaire](/fr/docs/Web/HTML/Guides/Constraint_validation)
