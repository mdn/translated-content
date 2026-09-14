---
title: "HTMLInputElement : propriété validity"
short-title: validity
slug: Web/API/HTMLInputElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validity`** de l'interface {{DOMxRef("HTMLInputElement")}} retourne un objet {{DOMxRef("ValidityState")}} qui représente les états de validité dans lesquels se trouve cet élément.

## Valeur

Un objet {{DOMxRef("ValidityState")}}.

## Exemples

L'exemple suivant obtient l'état de validité d'un élément d'entrée de formulaire et le traite s'il n'est pas valide&nbsp;:

```js
const input = document.getElementById("myInput");
const validityState = input.validity;
if (!validityState.valid) {
  // vérifier chaque état de validité
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLInputElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Valider les formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
