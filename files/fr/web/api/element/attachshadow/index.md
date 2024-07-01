---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
---

{{APIRef('Shadow DOM')}} {{SeeCompatTable}}

La méthode **`Element.attachShadow()`** attache un arbre Shadow DOM à un élément spécifié et retourne une référence à son [`ShadowRoot`](/fr/docs/Web/API/ShadowRoot).

## Syntaxe

```js
var shadowroot = element.attachShadow(shadowRootInit);
```

### Paramètres

- `shadowRootInit`

  - : Un dictionnaire `ShadowRootInit`, avec les propriétés suivantes :

    - `mode`&nbsp;: une chaîne de caractères spécifiant le _mode d'encapsulation_ de l'arbre du Shadow DOM, parmi les options suivantes&nbsp;:
      - `open`&nbsp;: spécifie une encapsulation ouverte.
      - `closed`&nbsp;: spécifie une encapsulation fermée.

### Retour

Retourne un {{domxref("ShadowRoot")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
