---
title: "Element : méthode removeAttribute()"
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`removeAttribute()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), supprime l'attribut ayant le nom indiqué de l'élément.

## Syntaxe

```js-nolint
removeAttribute(attrName)
```

### Paramètres

- `nomAttribut`
  - : Une chaîne de caractères qui indique le nom de l'attribut à supprimer de l'élément. Si l'attribut indiqué n'existe pas, `removeAttribute()` finit son exécution sans générer d'erreur.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Notes d'utilisation

`removeAttribute()` devrait être utilisée plutôt que de passer la valeur de l'attribut à `null` (que ce soit directement ou en appelant [`setAttribute()`](/fr/docs/Web/API/Element/setAttribute). De nombreux attributs ne fonctionneront pas comme espéré si on les passe à `null`.

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

- [`Element.hasAttribute()`](/fr/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/fr/docs/Web/API/Element/getAttribute)
- [`Element.setAttribute()`](/fr/docs/Web/API/Element/setAttribute)
- [`Element.toggleAttribute()`](/fr/docs/Web/API/Element/toggleAttribute)
- [`Element.removeAttributeNode()`](/fr/docs/Web/API/Element/removeAttributeNode)
- [`Element.removeAttributeNS()`](/fr/docs/Web/API/Element/removeAttributeNS)
