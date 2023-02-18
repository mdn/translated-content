---
title: Document.createExpression()
slug: Web/API/Document/createExpression
l10n:
  sourceCommit: c3a0924949863b43957b4ba2ad5e64558165672d
---

{{ ApiRef("DOM") }}

Cette méthode compile une [`XPathExpression`](/fr/docs/Web/API/XPathExpression) qui peut ensuite être utilisée pour des évaluations (répétées).

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

[`XPathExpression`](/fr/docs/Web/API/XPathExpression)

## Exemples

```js
const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // renvoie un objet XPathResult
const nodeContext = document.querySelector("nav");
// Réutilise l'expression XPathExpression "xpathExpr"
const otherResult = xpathExpr.evaluate(nodeContext); // renvoie un objet XPathResult
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Document.evaluate()`](/fr/docs/Web/API/Document/evaluate)
- [`XPathExpression`](/fr/docs/Web/API/XPathExpression)
