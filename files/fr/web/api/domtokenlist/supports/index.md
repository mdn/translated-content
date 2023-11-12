---
title: DOMTokenList.supports()
slug: Web/API/DOMTokenList/supports
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La méthode **`supports()`** de l'interface {{domxref("DOMTokenList")}} renvoie `true` (_vrai_) si une marque (_token)_ donnée se trouve parmi les marques prises en charge dans l'attribut associé. Cette méthode est destinée à la détection des fonctionnalités.

## Syntaxe

```js
var boolean = element.supports(token);
```

### Paramètres

- _`token`_
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) contenant la marque à interroger.

### Renvoie

un {{jsxref("Boolean")}} (_booléen_) indiquant si la marque a été trouvée.

## Exemple

```js
var iframe = document.getElementById("display");
if (iframe.sandbox.supports("an-upcoming-feature")) {
  // code de support pour la future et mystérieuse fonctionnalité
} else {
  // code de secours
}

if (iframe.sandbox.supports("allow-scripts")) {
  // instruction cadre de l'exécution de JavaScript
  // NOTE: ceci fonctionne bien mais est juste un exemple!
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
