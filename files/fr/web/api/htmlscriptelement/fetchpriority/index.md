---
title: "HTMLScriptElement : propriété fetchPriority"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`fetchPriority`** de l'interface {{DOMxRef("HTMLScriptElement")}} représente une indication pour le navigateur sur la façon de prioriser la récupération d'un script externe par rapport à d'autres scripts externes.
Elle reflète l'attribut [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/script#fetchpriority) de l'élément HTML {{HTMLElement("script")}}.

Cette propriété permet à un·e développeur·euse d'indiquer que la récupération d'un script particulier tôt ou tard dans le processus de chargement a plus ou moins d'impact sur l'expérience utilisateur que ce que le navigateur peut raisonnablement déduire lors de l'attribution d'une priorité interne.
Ceci permet au navigateur d'augmenter ou de diminuer la priorité, et potentiellement de charger le script plus tôt ou plus tard qu'il ne l'aurait fait autrement.
La propriété doit être utilisée avec parcimonie, car une priorisation excessive ou incorrecte peut dégrader les performances.

La priorité de récupération permet de diminuer la priorité des scripts placés en fin de corps de page, ou d'augmenter la priorité des scripts `async` sans avoir à utiliser le [préchargement](/fr/docs/Web/HTML/Reference/Attributes/rel/preload).
Lorsque le chargement anticipé d'un script est important, la priorité peut être utilisée en complément du préchargement, en augmentant la priorité par rapport à des ressources moins importantes qui ont une priorité par défaut plus élevée.

Notez que la priorité interne de toute opération de récupération, ainsi que l'impact de `fetchPriority` sur cette priorité, dépendent entièrement du navigateur.

## Valeur

Une chaîne de caractères représentant l'indication de priorité. Les valeurs possibles sont&nbsp;:

- `high`
  - : Récupère le script externe avec une priorité élevée par rapport aux autres scripts externes.
- `low`
  - : Récupère le script externe avec une priorité faible par rapport aux autres scripts externes.
- `auto`
  - : Ne définit pas de préférence pour la priorité de récupération.
    Il s'agit de la valeur par défaut.
    Elle est utilisée si aucune valeur n'est définie ou si une valeur invalide est définie.

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
