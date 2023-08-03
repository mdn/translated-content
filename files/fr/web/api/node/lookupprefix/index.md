---
title: Node.lookupPrefix()
slug: Web/API/Node/lookupPrefix
---

{{APIRef("DOM")}}

La méthode **`Node.lookupPrefix()`** renvoie une {{domxref("DOMString")}} (_chaîne de caractères_) contenant le préfixe d'un URI d'un espace de nom donné, s'il est présent, et `null` sinon. Quand plusieurs préfixes sont possibles, le résultat dépend de l'implémentation.

En raison du [bug 312019](https://bugzilla.mozilla.org/show_bug.cgi?id=312019), cette méthode ne fonctionne plus avec les espaces de nom définis dynamiquement, c'est-à-dire ceux qui sont fixés avec la propriété {{domxref("Node.prefix")}}.

## Voir aussi

- [http://www.w3.org/TR/DOM-Level-3-Cor...amespacePrefix](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix)
