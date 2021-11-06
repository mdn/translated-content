---
title: XPathExpression
slug: Web/API/XPathExpression
tags:
  - API
  - DOM
  - Document
  - XPath
translation_of: Web/API/XPathExpression
---
{{APIRef}}

Une `XPathExpression` est une requête de XPath compilé renvoyée par {{domxref("document.createExpression()")}}. Elle a une méthode `evaluate()` qui peut être utilisée pour exécuter le XPath compilé.

## Méthodes

- evaluate (`contextNode`, `type`, `result`) - fournit un noeud / document contextuel, une constante {{domxref("XPathResult")}} et `XPathResult` pour stocker la requête ou null pour renvoyer un nouveau XPathResult.
- evaluateWithContext (`contextNode`, `contextPosition`, `contextSize`, `type`, `result`) - fournit un noeud / document, une position et une taille contextuels, une constante `XPathResult` et un `XPathResult` pour stocker la requête ou null pour renvoyer un nouveau XPathResult.
