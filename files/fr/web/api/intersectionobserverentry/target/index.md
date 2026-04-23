---
title: IntersectionObserverEntry.target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

{{APIRef("Intersection Observer API")}}

La propriété en lecture seule **`target`**, rattachée à l'interface [`IntersectionObserverEntry`](/fr/docs/Web/API/IntersectionObserverEntry) indique [l'élément](/fr/docs/Web/API/Element) ciblé pour lequel la proportion d'intersection avec la racine d'intersection a changé.

## Valeur

La propriété `target` de `IntersectionObserverEntry` indique [l'élément](/fr/docs/Web/API/Element) précédemment ciblé en appelant [`IntersectionObserver.observe()`](/fr/docs/Web/API/IntersectionObserver/observe) pour lequel un changement d'intersection avec la racine a eu lieu.

## Exemples

Dans cet exemple simple, chaque élément ciblé voit son [opacité](/fr/docs/Web/CSS/Reference/Properties/opacity) paramétrée avec la valeur de [`intersectionRatio`](/fr/docs/Web/API/IntersectionObserverEntry/intersectionRatio).

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.opacity = entry.intersectionRatio;
  });
}
```

Pour un exemple plus concret, voir [Gérer les changements d'intersection](/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#gerer_les_changements_dintersection).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
