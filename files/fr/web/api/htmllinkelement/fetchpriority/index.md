---
title: "HTMLLinkElement : propriété fetchPriority"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`fetchPriority`** de l'interface {{DOMxRef("HTMLLinkElement")}} représente une indication pour le navigateur sur la façon de prioriser la récupération d'une ressource particulière par rapport à d'autres ressources du même type.
Elle reflète l'attribut [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/link#fetchpriority) de l'élément HTML {{HTMLElement("link")}} correspondant.

La propriété permet à un·e développeur·euse d'indiquer que la récupération d'une ressource particulière tôt dans le processus de chargement a plus ou moins d'impact sur l'expérience utilisateur·ice que ce que le navigateur peut raisonnablement déduire lors de l'attribution d'une priorité interne, en particulier lors du préchargement de ressources.
Ceci permet au navigateur d'augmenter ou de diminuer la priorité, et potentiellement de charger la ressource plus tôt ou plus tard qu'il ne l'aurait fait autrement.
La propriété doit être utilisée avec parcimonie, car une priorisation excessive ou incorrecte peut dégrader les performances.

La priorité de récupération peut être utilisée pour compléter le [préchargement](/fr/docs/Web/HTML/Reference/Attributes/rel/preload), permettant à un·e développeur·euse d'augmenter la priorité d'une ressource par rapport à d'autres ressources moins importantes qui sont par défaut préchargées avec une priorité plus élevée.
Par exemple, si une image particulière contribue de manière significative au {{Glossary("Largest Contentful Paint", "Rendu du contenu le plus volumineux")}} (LCP) du site web, elle peut être préchargée et avoir une priorité de récupération élevée.

Notez que la priorité interne de toute opération de récupération, ainsi que l'impact de `fetchPriority` sur cette priorité, dépendent entièrement du navigateur.

## Valeur

Une chaîne de caractères représentant l'indication de priorité.
Les valeurs possibles sont&nbsp;:

- `high`
  - : Récupère la ressource avec une priorité élevée par rapport aux autres ressources du même type et à la priorisation interne.
- `low`
  - : Récupère la ressource avec une priorité faible par rapport aux autres ressources du même type et à la priorisation interne.
- `auto`
  - : Ne définit aucune préférence pour la priorité de récupération.
    Il s'agit de la valeur par défaut.
    Elle est utilisée si aucune valeur n'est définie ou si une valeur invalide est définie.

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
- L'en-tête HTTP {{httpheader("Link")}}
- [Optimiser le chargement des ressources avec l'API Fetch Priority <sup>(angl.)</sup>](https://web.dev/articles/fetch-priority?hl=fr#browser_priority_and_fetchpriority) pour des informations sur la façon dont cette API affecte les priorités dans Chrome.
