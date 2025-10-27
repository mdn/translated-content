---
title: "HTMLScriptElement : propriété src"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: 2231cbd5847dff1ca21f8f7fb59d72cae615f088
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une chaîne de caractères qui représente l'URL d'un script externe&nbsp;; cela peut être utilisé comme alternative à l'intégration directe d'un script dans un document.

Elle reflète l'attribut `src` de l'élément HTML {{HTMLElement("script")}}.

## Valeur

Une chaîne de caractères.

## Exemples

Supposons que le code s'exécute sur un site dont l'URL est «&nbsp;https://exemple.com&nbsp;».

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

```js
const script_with_src = document.getElementById("script-with-src");
console.log(script_with_src.src); // Affiche : "https://example.com/main.js"
const script_without_src = document.getElementById("script-without-src");
console.log(script_without_src.src); // Affiche : ""
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
