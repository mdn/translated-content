---
title: "Window : propriété navigation"
short-title: navigation
slug: Web/API/Window/navigation
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`navigation`** de l'interface {{DOMxRef("Window")}} retourne l'objet {{DOMxRef("Navigation")}} associé à la `window` actuelle.

C'est le point d'entrée pour {{DOMxRef("Navigation API", "l'API Navigation", "", 1)}}.

## Valeur

Une instance de l'objet {{DOMxRef("Navigation")}}.

## Exemples

```js
let currentNavEntries = window.navigation.entries();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: L'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Explication de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Démo en direct de l'API Navigation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/navigation-api/) ([voir le code source de la démo <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/navigation-api))
