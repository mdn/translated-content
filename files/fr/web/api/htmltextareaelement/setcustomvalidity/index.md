---
title: "HTMLTextAreaElement : méthode setCustomValidity()"
short-title: setCustomValidity()
slug: Web/API/HTMLTextAreaElement/setCustomValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`setCustomValidity()`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} définit le message de validité personnalisé pour l'élément HTML {{HTMLElement("textarea")}}. Utilisez la chaîne de caractères vide pour indiquer que l'élément n'a _pas_ d'erreur de validité personnalisée.

## Syntaxe

```js-nolint
setCustomValidity(string)
```

### Paramètres

- `string`
  - : La chaîne de caractères contenant le message d'erreur. La chaîne de caractères vide retire toute erreur de validité personnalisée.

### Valeur retournée

Aucune ({{JSxRef("undefined")}}).

## Exemples

Dans cet exemple, si le `<textarea>` ne passe pas la validation des contraintes, nous fournissons des erreurs personnalisées selon la contrainte qui échoue. Si la valeur est valide, nous définissons l'erreur personnalisée sur une chaîne de caractères vide&nbsp;:

```js
const comment = document.getElementById("comment");
if (comment.validity.valueMissing) {
  comment.setCustomValidity(
    "Nous ne pouvons pas envoyer un commentaire vide !",
  );
} else if (comment.validity.tooShort) {
  comment.setCustomValidity(
    "Dites-nous en plus ! Votre commentaire est trop court.",
  );
} else if (comment.validity.tooLong) {
  comment.setCustomValidity(
    "Vous êtes bien bavard·e ! Limitez-vous à moins de 800 caractères !",
  );
} else {
  comment.setCustomValidity("");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'interface {{DOMxRef("HTMLTextAreaElement")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.validity")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLTextAreaElement.reportValidity()")}}
- [Validation de formulaire](/fr/docs/Web/HTML/Guides/Constraint_validation).
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
