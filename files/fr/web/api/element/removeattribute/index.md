---
title: "Element : méthode removeAttribute()"
short-title: removeAttribute()
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

La méthode **`removeAttribute()`** de l'interface {{DOMxRef("Element")}} supprime l'attribut ayant le nom indiqué de l'élément.

## Syntaxe

```js-nolint
removeAttribute(attrName)
```

### Paramètres

- `attrName`
  - : Une chaîne de caractères qui indique le nom de l'attribut à supprimer de l'élément. Si l'attribut indiqué n'existe pas, `removeAttribute()` finit son exécution sans générer d'erreur.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Notes d'utilisation

`removeAttribute()` devrait être utilisée plutôt que de passer la valeur de l'attribut à `null` que ce soit directement ou en appelant {{DOMxRef("Element.setAttribute", "setAttribute()")}}.
De nombreux attributs ne fonctionneront pas comme espéré si on les passe à `null`.

## Exemple

```js
// Si initialement on a : <div id="div1" disabled width="200px">
document.getElementById("div1").removeAttribute("disabled");
// Après on aura : <div id="div1" width="200px">
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttribute()")}}
- La méthode {{DOMxRef("Element.getAttribute()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}
- La méthode {{DOMxRef("Element.toggleAttribute()")}}
