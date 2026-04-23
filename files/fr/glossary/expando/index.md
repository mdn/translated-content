---
title: Expando
slug: Glossary/Expando
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les propriétés **expando** sont des propriétés ajoutées aux nœuds {{Glossary("DOM")}} en {{Glossary("JavaScript")}} mais qui ne figurent pas dans la spécification DOM des {{Glossary("Object", "objets")}}&nbsp;:

```js
window.document.toto = 5; // toto est une propriété expando
```

Le terme peut également être appliqué aux propriétés ajoutées à des objets sans respecter l'objectif original de l'objet, comme ajouter des propriétés nommées non numériques pour un {{Glossary("Array", "tableau")}}.
