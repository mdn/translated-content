---
title: "HTMLFormElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLFormElement")}} retourne une valeur booléenne qui indique si tous les contrôles associés respectent les règles de [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) qui leur sont appliquées. La méthode déclenche également un évènement annulable {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} sur chaque élément invalide, mais pas sur l'élément de formulaire lui‑même. Comme il n'existe pas de comportement navigateur par défaut pour `checkValidity()`, annuler cet évènement `invalid` n'a aucun effet.

> [!NOTE]
> Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} sont appliquées aux éléments `<form>` en fonction de la validité de leurs contrôles de formulaire propriétaires, et non de la validité de l'élément `<form>` lui‑même.

## Syntaxe

```js-nolint
checkValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si les valeurs des contrôles associés ne présentent aucun problème de validité&nbsp;; sinon, retourne `false`.

## Exemples

Dans l'exemple suivant, l'appel à `checkValidity()` renverra `true` ou `false` selon la validité des contrôles.

```js
const element = document.getElementById("myForm");
console.log(element.checkValidity());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLFormElement.reportValidity()")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation côté client des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
