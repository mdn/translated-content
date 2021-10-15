---
title: ShadowRoot.delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
tags:
  - API
  - Non-standard
  - Propriété
  - Reference
  - ShadowRoot
translation_of: Web/API/ShadowRoot/delegatesFocus
---
{{APIRef("Shadow DOM")}}

**`delegatesFocus`** est une propriété en lecture seule, rattachée à l'interface {{domxref("ShadowRoot")}} et qui renvoie un booléen indiquant si l'option `delegatesFocus` a été intialisée lors de l'attachement de la racine _shadow_ (cf. {{domxref("Element.attachShadow()")}}).

> **Attention :** Cette fonctionnalité est expérimentale, non-standard et uniquement disponible dans Chrome.

## Syntaxe

    var df = shadowRoot.delegatesFocus

### Valeur

Un booléen : `true` si la racine _shadow_ délègue la gestion du focus et `false` sinon.

## Exemples

```js
let customElem = document.querySelector('mon-element-shadow-dom');
let shadow = customElem.shadowRoot;

  ...

// Est-ce que la racine gère la délégation du focus ?
let hostElem = shadow.delegatesFocus;
```

## Spécifications

Cette fonctionnalité n'est actuellement décrite dans aucune spécification.

## Compatibilité des navigateurs

{{Compat("api.ShadowRoot.delegatesFocus")}}
