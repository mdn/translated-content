---
title: "HTMLScriptElement : propriété noModule"
short-title: noModule
slug: Web/API/HTMLScriptElement/noModule
l10n:
  sourceCommit: a16dd5636df94af17c519d5e1eaaaf967acd8203
---

{{APIRef("HTML DOM")}}

La propriété **`noModule`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une valeur booléenne qui indique si le script doit être exécuté dans les navigateurs qui prennent en charge les [modules](/fr/docs/Web/JavaScript/Guide/Modules). Concrètement, cela permet de fournir des scripts de repli aux anciens navigateurs qui ne prennent pas en charge les modules JavaScript.

Elle reflète l'attribut `nomodule` de l'élément HTML {{HTMLElement("script")}}.

## Valeur

Un booléen. `true` signifie que le script ne doit pas être exécuté dans les navigateurs qui prennent en charge les modules, `false` dans le cas contraire.

## Exemples

```html
<script id="el" nomodule>
  // Si le navigateur prend en charge les modules JavaScript, le script suivant ne sera pas exécuté.
  console.log("Le navigateur ne prend pas en charge les modules JavaScript");
</script>
```

```js
const el = document.getElementById("el");
console.log(el.noModule); // Affiche : true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
