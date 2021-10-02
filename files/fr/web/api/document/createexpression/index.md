---
title: Document.createExpression()
slug: Web/API/Document/createExpression
tags:
  - API
  - DOM
  - Méthode
  - XPath
translation_of: Web/API/Document/createExpression
---
{{ ApiRef("DOM") }}

Cette méthode compile une [`XPathExpression`](/fr/docs/Web/API/XPathExpression) qui peut ensuite être utilisée pour des évaluations (répétées).

## Syntaxe

    xpathExpr = document.createExpression(xpathText, namespaceURLMapper);

### Paramètres

- String (_chaîne de caractères_) `xpathText` (l'expression XPath à compiler)
- Fonction `namespaceURLMapper` (mappe un préfixe d'espace de noms à une URL d'espace de noms (ou null si aucun n'est nécessaire)).

{{ Fx_minversion_note(3, "Avant Firefox 3, vous pouviez appeler cette méthode sur des documents autres que celui que vous aviez prévu d'exécuter avec XPath. Sous Firefox 3, vous devez l'appeler sur le même document.") }}

### Valeur retournée

[XPathExpression](/fr/docs/Web/API/XPathExpression)
