---
title: DocumentFragment.querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
tags:
  - API
  - DOM
  - Document
  - Méthodes
  - fragment
translation_of: Web/API/DocumentFragment/querySelectorAll
---
{{ApiRef("DOM")}}

La méthode **`DocumentFragment.querySelectorAll()`** renvoie une {{domxref("NodeList")}} (_liste de noeuds_) des éléments du {{domxref("DocumentFragment")}} (en utilisant la traversée en profondeur des noeuds du document), qui correspondent avec le groupe spécifié de sélecteurs.

Si les sélecteurs spécifiés dans paramètre sont invalides une {{domxref("DOMException")}} avec une valeur `SYNTAX_ERR` est lancée.

> **Note :** La définition de cet API a été déplacé vers l'interface {{domxref("ParentNode")}}.

## Syntaxe

    elementList = documentframgment.querySelectorAll(selectors);

### Paramètres

- _selectors_
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) contenant un ou plusieurs sélecteurs CSS séparés par des virgules.

## Exemples

Cet exemple renvoie une liste de tous les éléments `div` du `DocumentFragment` avec une classe soit "`note`" soit "`alert`" :

```js
var matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## Spécifications

| Spécification                                                                                                                | Statut                                       | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Selectors API Level 1', '#queryselector', 'DocumentFragment.querySelectorAll')}} | {{Spec2('Selectors API Level 1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DocumentFragment.querySelectorAll")}}

## Voir aussi

- L'interface {{domxref("DocumentFragment")}} à laquelle elle appartient.
