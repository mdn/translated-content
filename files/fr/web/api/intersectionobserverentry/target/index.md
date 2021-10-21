---
title: IntersectionObserverEntry.target
slug: Web/API/IntersectionObserverEntry/target
tags:
  - API
  - Intersection Observer
  - IntersectionObserver
  - Propriété
  - target
translation_of: Web/API/IntersectionObserverEntry/target
---
{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

La propriété en lecture seule **`target`** de l'interface {{domxref("IntersectionObserverEntry")}} indique quel {{domxref("Element")}} ciblé a changé sa proportion d'intersection avec l'élément racine.

## Syntaxe

    var target = IntersectionObserverEntry.target;

### Valeur

La propriété `target` de l'`IntersectionObserverEntry` spécifie quel {{domxref("Element")}} précédemment ciblé par l'appel à {{domxref("IntersectionObserver.observe()")}} dont l'intersection avec la racine a changé.

## Exemple

Dans cet exemple, la valeur de la propriété CSS {{cssxref("opacity")}} de chaque élément cible vaut son {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}}.

```js
function intersectionCallback(entries) {
  entries.forEach(function(entry) {
    entry.target.opacity = entry.intersectionRatio;
  });
}
```

Ainsi, l'élément devient visible seulement lorsqu'il est entièrement visible, c'est-à-dire que la zone qu'il couvre est contenue dans celle de la racine. Autrement, son opacité diminue graduellement avec sa proportion d'intersection avec son élément racine.

Pour voir un exemple plus concret, vous pouvez vous renseigner sur l'{{SectionOnPage("/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility", "Handling intersection changes")}}.

## Spécifications

| Spécification                                                                                                                                            | Statut                                       | Commentaire         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------- |
| {{SpecName('IntersectionObserver', '#dom-intersectionobserverentry-target', 'IntersectionObserverEntry.target')}} | {{Spec2('IntersectionObserver')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.IntersectionObserverEntry.target")}}
