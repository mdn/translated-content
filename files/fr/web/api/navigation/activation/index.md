---
title: "Navigation : propriété activation"
short-title: activation
slug: Web/API/Navigation/activation
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`activation`** de l'interface {{DOMxRef("Navigation")}} retourne un objet {{DOMxRef("NavigationActivation")}} qui contient une information à propos de la navigation inter-document la plus récente, qui a «&nbsp;activé&nbsp;» ce Document. La propriété reste constante lors des navigations au sein du même document.

## Valeur

Un objet {{DOMxRef("NavigationActivation")}}, ou `null` si le document actuel est le document initial `about:blank`.

## Exemples

```js
if (navigation.activation) {
  console.log(navigation.activation.entry.url);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
