---
title: "HTMLAnchorElement : propriété ping"
short-title: ping
slug: Web/API/HTMLAnchorElement/ping
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ApiRef("HTML DOM")}}

La propriété **`ping`** de l'interface {{domxref("HTMLAnchorElement")}} est une liste d'URL séparées par des espaces. Lorsque le lien est suivi, le navigateur envoie des requêtes {{HTTPMethod("POST")}} avec le corps PING vers ces URL.

Elle reflète l'attribut `ping` de l'élément HTML {{HTMLElement("a")}}.

> [!NOTE]
> Cette propriété n'est pas active dans Firefox et son usage peut être limité pour des raisons de confidentialité et de sécurité.

## Exemple

```html
<a
  id="lienExemple"
  href="https://exemple.fr"
  ping="https://exemple-tracking.fr https://exemple-analytics.fr"
  >Lien d'exemple</a
>
```

```js
const anchorElement = document.getElementById("lienExemple");
console.log(anchorElement.ping); // Affiche : "https://exemple-tracking.fr https://exemple-analytics.fr"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLAreaElement.ping")}}
