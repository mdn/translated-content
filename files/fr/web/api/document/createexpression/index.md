---
title: "Document : méthode createExpression()"
short-title: createExpression()
slug: Web/API/Document/createExpression
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}

La méthode **`createExpression()`** de l'interface {{DOMxRef("Document")}} compile une expression {{DOMxRef("XPathExpression")}} qui peut ensuite être utilisée pour des évaluations (répétées).

Cette méthode doit être appelée sur le même document que celui sur lequel on exécutera l'expression.

## Syntaxe

```js-nolint
createExpression(xpathText, namespaceURLMapper)
```

### Paramètres

- `xpathText`
  - : Une chaîne de caractères qui est l'expression XPath à compiler.
- `namespaceURLMapper`
  - : Une fonction qui fait correspondre un préfixe d'espace de noms à une URL d'espace de noms (ou `null` si aucune correspondance est nécessaire).

### Valeur de retour

Un objet {{DOMxRef("XPathExpression")}}.

## Exemples

```js
const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // retourne un objet XPathResult
const nodeContext = document.querySelector("nav");
// Réutilise l'expression XPathExpression "xpathExpr"
const otherResult = xpathExpr.evaluate(nodeContext); // retourne un objet XPathResult
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.evaluate()")}}
- L'interface {{DOMxRef("XPathExpression")}}
