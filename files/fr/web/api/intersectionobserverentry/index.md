---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
---

{{SeeCompatTable}}{{APIRef("Intersection Observer API")}}

L'interface **`IntersectionObserverEntry`** de l'[API Intersection Observer](/fr/docs/Web/API/Intersection_Observer_API) décrit l'intersection entre l'élément cible et son conteneur (appelé racine) à un moment spécifique de transition.

Les instances de `IntersectionObserverEntry` sont délivrées à une fonction de rappel de l'{{domxref("IntersectionObserver")}} en tant que paramètres `entries` ; autrement, ces objets ne peuvent être obtenus qu'en appelant {{domxref("IntersectionObserver.takeRecords()")}}.

## Propriétés

- {{domxref("IntersectionObserverEntry.boundingClientRect")}} {{readonlyinline}}
  - : Retourne les limites de la zone couverte par l'élément cible comme {{domxref("DOMRectReadOnly")}}. Ces limites sont calculées comme décrit dans la documentation pour {{domxref("Element.getBoundingClientRect()")}}.
- {{domxref("IntersectionObserverEntry.intersectionRatio")}} {{readonlyinline}}
  - : Retourne le ratio de l'`intersectionRect` au `boundingClientRect`.
- {{domxref("IntersectionObserverEntry.intersectionRect")}} {{readonlyinline}}
  - : Retourne un {{domxref("DOMRectReadOnly")}} représentant la partie visible de l'élément cible.
- {{domxref("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : Retourne une valeur booléenne valant `true` si l'élément cible s'entrecoupe avec la zone d'intersection de l'élément racine. S'il vaut `true`, alors `IntersectionObserverEntry` décrit une transition vers un état d'intersection ; S'il vaut `false`, alors la transition se fait d'un état d'intersection à un état de non-intersection.
- {{domxref("IntersectionObserverEntry.rootBounds")}} {{readonlyinline}}
  - : Retourne un {{domxref("DOMRectReadOnly")}} pour la zone d'intersection de l'élément racine.
- {{domxref("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : L'{{domxref("Element")}} dont l'intersection avec la racine a changé d'état.
- {{domxref("IntersectionObserverEntry.time")}} {{readonlyinline}}
  - : Un {{domxref("DOMHighResTimeStamp")}} indiquant l'instant auquel l'intersection a été enregistrée, relative au [temps originel](/fr/docs/Web/API/DOMHighResTimeStamp#The_time_origin) de l'`IntersectionObserver`.

## Méthodes

_Cette interface n'a pas de méthode._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
