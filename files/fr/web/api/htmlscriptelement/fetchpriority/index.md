---
title: "HTMLScriptElement : propriété fetchPriority"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

La propriété **`fetchPriority`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente une indication pour le navigateur sur la façon de prioriser la récupération d'un script externe par rapport à d'autres scripts externes.
Elle reflète l'attribut [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/script#fetchpriority) de l'élément HTML {{HTMLElement("script")}}.

## Valeur

Une chaîne de caractères. Pour les valeurs autorisées, voir l'attribut HTML [`fetchpriority`](/fr/docs/Web/HTML/Reference/Attributes/fetchpriority).

## Exemples

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // Affiche : "high"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLImageElement.fetchPriority")}}
- La propriété {{DOMxRef("HTMLLinkElement.fetchPriority")}}
- L'en-tête HTTP {{HTTPHeader("Link")}}
- [Optimiser le chargement des ressources avec l'API Fetch Priority <sup>(angl.)</sup>](https://web.dev/articles/fetch-priority?hl=fr#browser_priority_and_fetchpriority) pour des informations sur la façon dont cette API affecte les priorités dans Chrome.
