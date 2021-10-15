---
title: Node.lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
tags:
  - API
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/Node/lookupNamespaceURI
---
{{APIRef("DOM")}}

La méthode **`Node.lookupNamespaceURI()`** accepte un préfixe et renvoie l'URI de l'espace de nom associé avec lui sur le noeud donné s'il le trouve (et `null` sinon). La fourniture de `null` pour le préfixe renverra l'espace de nom par défaut.

Du fait du [bug 312019](https://bugzilla.mozilla.org/show_bug.cgi?id=312019), cette méthode ne fonctionne pas avec les espaces de noms attribués dynamiquement (c'est-à-dire ceux qui sont définis par [Node.prefix](/en/DOM/Node.prefix)).

## Voir aussi

- [http://www.w3.org/TR/DOM-Level-3-Cor...upNamespaceURI](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI)
