---
title: "HTMLImageElement : propriété fetchPriority"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`fetchPriority`** de l'interface {{DOMxRef("HTMLImageElement")}} représente une indication pour le navigateur sur la façon de prioriser le chargement d'une image particulière par rapport aux autres images.
Elle reflète l'attribut [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/img#fetchpriority) de l'élément HTML {{HTMLElement("img")}} correspondant.

## Valeur

Une chaîne de caractères dont la valeur est `high`, `low` ou `auto`. Pour leur signification, voir l'attribut HTML [`fetchpriority`](/fr/docs/Web/HTML/Reference/Attributes/fetchpriority).

## Exemples

```js
const img = new Image();
img.fetchPriority = "high";
img.src = "img/logo.png";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLLinkElement.fetchPriority")}}
- La propriété {{DOMxRef("HTMLScriptElement.fetchPriority")}}
- L'en-tête HTTP {{HTTPHeader("Link")}}
- [Optimiser le chargement des ressources avec l'API Fetch Priority <sup>(angl.)</sup>](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) pour plus d'informations sur l'impact de cette API sur les priorités dans Chrome.
