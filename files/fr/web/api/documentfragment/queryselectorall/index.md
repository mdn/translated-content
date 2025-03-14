---
title: DocumentFragment.querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
---

{{ApiRef("DOM")}}

La méthode **`DocumentFragment.querySelectorAll()`** renvoie une {{domxref("NodeList")}} (_liste de noeuds_) des éléments du {{domxref("DocumentFragment")}} (en utilisant la traversée en profondeur des noeuds du document), qui correspondent avec le groupe spécifié de sélecteurs.

Si les sélecteurs spécifiés dans paramètre sont invalides une {{domxref("DOMException")}} avec une valeur `SYNTAX_ERR` est lancée.

> [!NOTE]
> La définition de cet API a été déplacé vers l'interface {{domxref("ParentNode")}}.

## Syntaxe

```js
elementList = documentframgment.querySelectorAll(selectors);
```

### Paramètres

- _selectors_
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) contenant un ou plusieurs sélecteurs CSS séparés par des virgules.

## Exemples

Cet exemple renvoie une liste de tous les éléments `div` du `DocumentFragment` avec une classe soit "`note`" soit "`alert`" :

```js
var matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("DocumentFragment")}} à laquelle elle appartient.
