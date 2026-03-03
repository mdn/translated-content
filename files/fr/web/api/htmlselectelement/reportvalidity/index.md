---
title: "HTMLSelectElement : méthode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLSelectElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`reportValidity()`** de l'interface {{DOMxRef("HTMLSelectElement")}} effectue les mêmes étapes de vérification de validité que la méthode {{DOMxRef("HTMLSelectElement.checkValidity", "checkValidity()")}}. De plus, si l'évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} n'est pas annulé, le navigateur affiche le problème à l'utilisateur·ice.

## Syntaxe

```js-nolint
reportValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si la valeur de l'élément ne présente aucun problème de validité&nbsp;; sinon, retourne `false`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLSelectElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
