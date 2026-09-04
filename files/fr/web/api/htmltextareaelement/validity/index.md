---
title: "HTMLTextAreaElement : propriété validity"
short-title: validity
slug: Web/API/HTMLTextAreaElement/validity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validity`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} retourne un objet {{DOMxRef("ValidityState")}} qui représente les états de validité dans lesquels se trouve cet élément.

## Valeur

Un objet {{DOMxRef("ValidityState")}}.

## Exemples

L'exemple suivant récupère l'état de validité d'un élément de zone de texte et le traite s'il n'est pas valide&nbsp;:

```js
const textArea = document.getElementById("myTextArea");
const validityState = textArea.validity;
if (!validityState.valid) {
  // Tester chaque état de validité
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTextAreaElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("textarea")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
