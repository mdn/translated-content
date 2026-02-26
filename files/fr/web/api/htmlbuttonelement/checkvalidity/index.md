---
title: "HTMLButtonElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLButtonElement")}} retourne une valeur booléenne qui indique si l'élément satisfait toutes les règles de [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) qui lui sont appliquées. Si la valeur est équivalente à faux, la méthode déclenche également un événement {{DOMxRef("HTMLElement/invalid_event", "invalid")}} sur l'élément. Comme il n'existe pas de comportement par défaut du navigateur pour `checkValidity()`, annuler cet événement `invalid` n'a aucun effet. Cette méthode retourne toujours vrai si la propriété {{DOMxRef("HTMLButtonElement/type", "type")}} de l'élément {{HTMLElement("button")}} vaut `"button"` ou `"reset"`, car ces boutons ne sont jamais candidats à la [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation).

> [!NOTE]
> Un élément HTML {{HTMLElement("button")}} de type `"submit"` avec une {{DOMxRef("HTMLButtonElement.validationMessage", "validationMessage")}} non nulle est considéré comme non valide, correspondra à la pseudo-classe CSS {{CSSxRef(":invalid")}} et fera que `checkValidity()` retourne faux. Utilisez la méthode {{DOMxRef("HTMLButtonElement.setCustomValidity()")}} pour définir le {{DOMxRef("HTMLButtonElement.validationMessage")}} à la chaîne vide afin de rendre l'état {{DOMxRef("HTMLButtonElement.validity", "validity")}} valide.

## Syntaxe

```js-nolint
checkValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si la valeur de l'élément ne présente aucun problème de validité&nbsp;; sinon, retourne `false`.

## Exemples

Dans l'exemple suivant, l'appel à `checkValidity()` retourne soit `true`, soit `false`.

```js
const element = document.getElementById("myButton");
console.log(element.checkValidity());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("HTMLButtonElement.reportValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
