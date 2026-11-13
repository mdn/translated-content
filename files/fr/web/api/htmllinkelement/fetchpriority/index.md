---
title: "HTMLLinkElement : propriété fetchPriority"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`fetchPriority`** de l'interface {{DOMxRef("HTMLLinkElement")}} représente une indication pour le navigateur sur la façon de prioriser la récupération d'une ressource particulière par rapport à d'autres ressources du même type.
Elle reflète l'attribut de contenu [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/link#fetchpriority) de l'élément HTML `<link>`.

## Valeur

Une chaîne de caractères. Pour les valeurs autorisées, voir l'attribut HTML [`fetchpriority`](/fr/docs/Web/HTML/Reference/Attributes/fetchpriority).

## Exemples

```js
const preloadLink = document.createElement("link");
preloadLink.href = "mon-image.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.fetchPriority")}}
- La propriété {{DOMxRef("HTMLScriptElement.fetchPriority")}}
- L'en-tête HTTP {{HTTPHeader("Link")}}
- [Optimiser le chargement des ressources avec l'API Fetch Priority <sup>(angl.)</sup>](https://web.dev/articles/fetch-priority?hl=fr#browser_priority_and_fetchpriority) pour des informations sur la façon dont cette API affecte les priorités dans Chrome.
