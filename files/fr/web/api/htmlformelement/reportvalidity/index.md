---
title: "HTMLFormElement : méthode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

La méthode **`reportValidity()`** de l'interface {{DOMxRef("HTMLFormElement")}} effectue les mêmes vérifications de validité que la méthode {{DOMxRef("HTMLFormElement.checkValidity", "checkValidity()")}}. De plus, pour chaque évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} déclenché et non annulé, le navigateur affiche le problème à l'utilisateur·ice.

## Syntaxe

```js
HTMLFormElement.reportValidity();
```

### Paramètres

Aucun.

### Valeur de retour

Retourne `true` si les valeurs des contrôles associés ne présentent aucun problème de validité&nbsp;; sinon, retourne `false`.

## Exemple

```js
document.forms["my-form"].addEventListener("submit", () => {
  document.forms["my-form"].reportValidity();
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLFormElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation des formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
