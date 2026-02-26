---
title: "HTMLSelectElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne un booléen qui indique si l'élément satisfait aux règles de [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) qui lui sont appliquées. Si la valeur retournée est équivalente à faux, la méthode déclenche également un évènement {{DOMxRef("HTMLElement/invalid_event", "invalid")}} sur l'élément. Comme il n'existe pas de comportement par défaut du navigateur pour `checkValidity()`, annuler cet évènement `invalid` n'a aucun effet.

> [!NOTE]
> Un élément HTML {{HTMLElement("select")}} dont la propriété {{DOMxRef("HTMLSelectElement.validationMessage", "validationMessage")}} n'est pas une chaîne de caractères nulle est considéré comme non valide, correspond à la pseudo-classe CSS {{CSSxRef(":invalid")}}, et provoque le retour de la valeur équivalente à faux par `checkValidity()`. Utilisez la méthode {{DOMxRef("HTMLSelectElement.setCustomValidity()")}} pour définir la propriété {{DOMxRef("HTMLSelectElement.validationMessage")}} sur une chaîne de caractères vide afin de rendre l'état {{DOMxRef("HTMLSelectElement.validity", "validity")}} valide.

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
const element = document.getElementById("mySelect");
console.log(element.checkValidity());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLSelectElement.reportValidity()")}}
- L'élément HTML {{HTMLElement("textarea")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
