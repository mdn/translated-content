---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
browser-compat: api.Element.removeAttribute
translation_of: Web/API/Element/removeAttribute
---
{{APIRef("DOM")}}

La méthode **`removeAttribute()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), supprime l'attribut ayant le nom indiqué de l'élément.

## Syntaxe

```js
element.removeAttribute(nomAttribut);
```

### Paramètres

- `nomAttribut`
  - : Une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) qui indique le nom de l'attribut à supprimer de l'élément. Si l'attribut indiqué n'existe pas, `removeAttribute()` finit son exécution sans générer d'erreur.

### Valeur de retour

`undefined`.

## Notes d'utilisation

`removeAttribute()` devrait être utilisée plutôt que de passer la valeur de l'attribut à `null` (que ce soit directement ou en appelant [`setAttribute()`](/fr/docs/Web/API/Element/setAttribute). De nombreux attributs ne fonctionneront pas comme espéré si on les passe à `null`.

{{ DOMAttributeMethods() }}

## Exemple

```js
// Si initialement on a : <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// Après on aura : <div id="div1" width="200px">
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}