---
title: "NavigateEvent : propriété sourceElement"
short-title: sourceElement
slug: Web/API/NavigateEvent/sourceElement
l10n:
  sourceCommit: 06ab986fc58ffb4e12b9f9962ee3c2783ce1290b
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`sourceElement`** de l'interface {{DOMxRef("NavigateEvent")}} retourne un objet {{DOMxRef("Element")}} représentant l'élément initiateur, dans les cas où la navigation a été initiée par un élément.

L'élément initiateur peut être&nbsp;:

- Un élément HTML {{HTMLElement("a")}} (ou un élément SVG {{SVGElement("a")}}).
- Un élément HTML {{HTMLElement("area")}}.
- Un bouton d'envoi (`{{HTMLElement("input/submit", "&lt;input type=\"submit\"&gt;")}}` ou `{{HTMLElement("button", "&lt;button type=\"submit\"&gt;")}}`).
- Un élément {{HTMLElement("form")}} envoyé.

## Valeur

Un objet {{DOMxRef("Element")}} représentant l'élément qui a initié la navigation, ou `null` si la navigation n'a pas été initiée par un élément.

## Exemples

### Obtenir le `sourceElement` pour un évènement

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.sourceElement);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
