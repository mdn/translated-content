---
title: "Attribut HTML : fetchpriority"
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

L'attribut **`fetchpriority`** permet au développeur·euse d'indiquer que le chargement anticipé d'une ressource (par exemple une image) a plus ou moins d'impact sur l'expérience utilisateur que ce que le navigateur peut raisonnablement déduire lorsqu'il assigne une priorité interne.
Cela permet au navigateur d'augmenter ou de diminuer la priorité, et potentiellement de charger l'image plus tôt ou plus tard qu'il ne le ferait autrement.

Cet attribut peut être appliqué aux éléments HTML {{HTMLElement("img")}}, {{HTMLElement("link")}} et {{HTMLElement("script")}}. Il possède également un [équivalent SVG](/fr/docs/Web/SVG/Reference/Attribute/fetchpriority).

La priorité de récupération peut compléter le mécanisme de [préchargement](/fr/docs/Web/HTML/Reference/Attributes/rel/preload), en permettant au développeur·euse d'augmenter la priorité d'une ressource importante par rapport à d'autres ressources moins critiques qui auraient une priorité par défaut plus élevée.
Par exemple, si vous savez qu'une image contribue de manière significative au {{Glossary("Largest Contentful Paint")}} (LCP) d'une page, vous pouvez ajouter un [`<link rel="preload">`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) pour cette image puis renforcer sa priorité avec l'attribut `fetchpriority`.

Notez que la priorité interne d'une opération de récupération, ainsi que l'impact de `fetchpriority` sur cette priorité, dépendent entièrement du navigateur.

Cet attribut est {{Glossary("Enumerated", "énuméré")}} et peut prendre l'une des valeurs suivantes&nbsp;:

- `high`
  - : Récupère la ressource externe avec une priorité élevée par rapport aux autres ressources externes.
- `low`
  - : Récupère la ressource externe avec une priorité faible par rapport aux autres ressources externes.
- `auto`
  - : Ne définit pas de préférence pour la priorité de récupération.
    Cette valeur est utilisée si aucune valeur n'est fournie ou si la valeur fournie est invalide.
    C'est la valeur par défaut.

## Notes d'utilisation

Cet attribut doit être utilisé avec parcimonie, car une priorisation excessive ou incorrecte peut dégrader les performances.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("fetchpriority")}}
