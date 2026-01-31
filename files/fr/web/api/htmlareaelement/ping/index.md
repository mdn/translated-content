---
title: "HTMLAreaElement : propriété ping"
short-title: ping
slug: Web/API/HTMLAreaElement/ping
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La propriété **`ping`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une liste d'URL séparées par des espaces. Lorsque le lien est suivi, le navigateur enverra des requêtes {{HTTPMethod("POST")}} avec le corps PING à ces URL.

Elle reflète l'attribut `ping` de l'élément {{HTMLElement("area")}}.

> [!NOTE]
> Cette propriété n'est pas effective dans Firefox et son usage peut être limité pour des raisons de confidentialité et de sécurité.

## Exemple

```html
<map name="example-map" id="example-map">
  <area
    href="https://exemple.fr"
    ping="https://exemple-tracking.fr https://exemple-analytics.fr"
    alt="example" />
</map>
```

```js
const areaCollection = document.getElementById("example-map").areas;
console.log(areaCollection[0].ping); // Affiche : "https://exemple-tracking.fr https://exemple-analytics.fr"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLAnchorElement.ping")}}
