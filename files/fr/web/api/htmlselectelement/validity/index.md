---
title: "HTMLSelectElement : propriété validity"
short-title: validity
slug: Web/API/HTMLSelectElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validity`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne un objet {{DOMxRef("ValidityState")}} qui représente les états de validité dans lesquels se trouve cet élément.

## Valeur

Un objet {{DOMxRef("ValidityState")}}.

## Exemple

L'exemple suivant récupère l'état de validité d'un élément select et le traite s'il n'est pas valide&nbsp;:

```js
const select = document.getElementById("mySelect");
const validityState = select.validity;
if (!validityState.valid) {
  // Tester chaque état de validité
}
```

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
