---
title: "HTMLScriptElement : propriété defer"
short-title: defer
slug: Web/API/HTMLScriptElement/defer
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

La propriété **`defer`** de l'interface {{DOMxRef("HTMLScriptElement")}} est une valeur booléenne qui contrôle la façon dont le script est exécuté. Pour les scripts classiques, si la propriété `defer` vaut `true`, le script externe sera exécuté après l'analyse du document, mais avant le déclenchement de l'événement {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}. Pour les [scripts modules](/fr/docs/Web/JavaScript/Guide/Modules), la propriété `defer` n'a aucun effet.

Elle reflète l'attribut `defer` de l'élément {{HTMLElement("script")}}.

## Valeur

Un booléen.

## Exemples

```html
<script id="el" src="/example.js" defer></script>
```

```js
const el = document.getElementById("el");
console.log(el.defer); // Affiche : true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLScriptElement.async")}}
