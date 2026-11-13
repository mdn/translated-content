---
title: "IntersectionObserverEntry : propriété target"
short-title: target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

La propriété en lecture seule **`target`** de l'interface {{DOMxRef("IntersectionObserverEntry")}} indique quel {{DOMxRef("Element")}} ciblé a vu sa proportion d'intersection avec la racine d'intersection changer.

## Valeur

La propriété `target` de `IntersectionObserverEntry` indique quel {{DOMxRef("Element")}} précédemment ciblé en appelant {{DOMxRef("IntersectionObserver.observe()")}} a vu sa proportion d'intersection avec la racine changer.

## Exemples

Dans cet exemple simple, chaque élément ciblé voit son {{CSSxRef("opacity")}} paramétrée avec la valeur de {{DOMxRef("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}}.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Pour un exemple plus concret, voir [Gérer les changements d'intersection](/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#gérer_les_changements_dintersection).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
