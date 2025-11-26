---
title: "HTMLScriptElement : propriété async"
short-title: async
slug: Web/API/HTMLScriptElement/async
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

La propriété **`async`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une valeur booléenne qui contrôle la façon dont le script est exécuté. Pour les scripts classiques, si la propriété `async` vaut `true`, le script externe est récupéré en parallèle de l'analyse et exécuté dès qu'il est disponible. Pour les [scripts modules](/fr/docs/Web/JavaScript/Guide/Modules), si la propriété `async` vaut `true`, le script et toutes ses dépendances sont récupérés en parallèle de l'analyse et exécutés dès qu'ils sont disponibles.

Elle reflète l'attribut `async` de l'élément {{HTMLElement("script")}}.

## Valeur

Un booléen.

## Exemples

```html
<script id="el" src="/example.js" async></script>
```

```js
const el = document.getElementById("el");
console.log(el.async); // Affiche : true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLScriptElement.defer")}}
