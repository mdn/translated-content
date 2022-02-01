---
title: ShadowRoot.innerHTML
slug: Web/API/ShadowRoot/innerHTML
tags:
  - API
  - Propriété
  - Reference
  - ShadowRoot
  - innerHTML
  - shadow dom
translation_of: Web/API/ShadowRoot/innerHTML
---
{{APIRef("Shadow DOM")}}

La propriété **`innerHTML`**, rattachée à l'interface {{domxref("ShadowRoot")}}, permet de définir ou de récupérer une référence à l'arbre DOM contenu dans la racine `ShadowRoot`.

## Syntaxe

    var domString = shadowRoot.innerHTML
    shadowRoot.innerHTML = domString

### Valeur

Une chaîne de caractères {{domxref("DOMString")}}.

## Exemples

```js
let customElem = document.querySelector('mon-element-shadow-dom');
let shadow = customElem.shadowRoot;

shadow.innerHTML = '<strong>Cet élément devrait être plus important !</strong>';
```

## Spécifications

Cette propriété ne fait pas encore partie d'une spécification. Voir [cette _issue_](https://github.com/w3c/DOM-Parsing/issues/21) pour le projet de spécification.

## Compatibilité des navigateurs

{{Compat("api.ShadowRoot.innerHTML")}}
