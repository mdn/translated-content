---
title: "HTMLTextAreaElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLTextAreaElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} retourne une valeur booléenne qui indique si l'élément respecte les règles de [validation de contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation) qui lui sont appliquées. Si équivalent à faux, la méthode déclenche aussi un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} sur l'élément. Comme il n'y a pas de comportement par défaut du navigateur pour `checkValidity()`, annuler cet évènement `invalid` n'a aucun effet.

> [!NOTE]
> Un élément HTML {{HTMLElement("textarea")}} avec une {{DOMxRef("HTMLTextAreaElement.validationMessage", "validationMessage")}} non nulle est considéré comme non valide, correspondra à la pseudo-classe CSS {{CSSxRef(":invalid")}} et fera que `checkValidity()` retourne équivalent à faux. Utilisez la méthode {{DOMxRef("HTMLTextAreaElement.setCustomValidity()")}} pour définir la {{DOMxRef("HTMLTextAreaElement.validationMessage")}} sur une chaîne vide afin de rendre l'état {{DOMxRef("HTMLTextAreaElement.validity", "validity")}} valide.

## Syntaxe

```js-nolint
checkValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si la valeur de l'élément ne présente aucun problème de validité&nbsp;; sinon, retourne `false`.

## Exemples

Dans l'exemple suivant, l'appel à `checkValidity()` retourne soit équivalent à vrai, soit équivalent à faux.

```js
const element = document.getElementById("myTextArea");
console.log(element.checkValidity());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTextAreaElement.reportValidity()")}}
- Les éléments HTML {{HTMLElement("textarea")}}
- Les éléments HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudos-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
