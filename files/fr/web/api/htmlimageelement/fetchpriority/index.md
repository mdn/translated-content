---
title: "HTMLImageElement : propriété fetchPriority"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`fetchPriority`** de l'interface {{domxref("HTMLImageElement")}} représente une indication pour le navigateur sur la façon de prioriser le chargement d'une image particulière par rapport aux autres images.
Elle reflète l'attribut [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/img#fetchpriority) de l'élément HTML {{htmlelement("img")}} correspondant.

Cette propriété permet à un·e développeur·euse d'indiquer que le chargement d'une image spécifique, tôt dans le processus de chargement, a plus ou moins d'impact sur l'expérience utilisateur·ice que ce que le navigateur pourrait déduire en attribuant une priorité interne.
Cela permet au navigateur d'augmenter ou de diminuer la priorité, et potentiellement de charger l'image plus tôt ou plus tard qu'il ne l'aurait fait autrement.
La propriété doit être utilisée avec parcimonie, car une priorisation excessive ou incorrecte peut dégrader les performances.

La priorité de chargement peut compléter le [préchargement](/fr/docs/Web/HTML/Reference/Attributes/rel/preload), permettant à un·e développeur·euse d'augmenter la priorité par rapport à des ressources moins importantes qui auraient une priorité par défaut plus élevée.
Par exemple, si un·e développeur·euse sait qu'une image contribue significativement au {{glossary("Largest Contentful Paint", "rendu du contenu le plus volumineux")}} (LCP) du site, il·elle peut ajouter [`<link rel="preload">`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) pour l'image puis augmenter encore la priorité avec la propriété `fetchpriority`.

Notez que la priorité interne de toute opération de chargement, ainsi que l'impact de `fetchPriority` sur cette priorité, dépendent entièrement du navigateur.

## Valeur

Une chaîne de caractères représentant l'indication de priorité.
Les valeurs possibles sont&nbsp;:

- `high`
  - : Charger l'image avec une priorité élevée par rapport aux autres images ayant la même priorité interne.
- `low`
  - : Charger l'image avec une priorité faible par rapport aux autres images ayant la même priorité interne.
- `auto`
  - : Ne pas définir de préférence utilisateur·ice pour la priorité de chargement. C'est la valeur par défaut, utilisée si aucune valeur n'est définie ou si une valeur invalide est définie.

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

- {{domxref("HTMLLinkElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
- L'en-tête HTTP {{httpheader("Link")}}
- [Optimiser le chargement des ressources avec l'API Fetch Priority <sup>(angl.)</sup>](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) pour plus d'informations sur l'impact de cette API sur les priorités dans Chrome.
