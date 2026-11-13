---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
l10n:
  sourceCommit: 05ed02a77bcfe1f7f22a74ece5757b44f21fdbc1
---

{{APIRef("Intersection Observer API")}}

L'interface **`IntersectionObserverEntry`** de [l'API Intersection Observer](/fr/docs/Web/API/Intersection_Observer_API) décrit l'intersection entre l'élément cible et son conteneur (appelé racine) à un moment spécifique de transition.

Les instances de `IntersectionObserverEntry` sont délivrées à une fonction de rappel de l'{{DOMxRef("IntersectionObserver")}} en tant que paramètres `entries`&nbsp;; autrement, ces objets ne peuvent être obtenus qu'en appelant {{DOMxRef("IntersectionObserver.takeRecords()")}}.

## Constructeur

- {{DOMxRef("IntersectionObserverEntry.IntersectionObserverEntry", "IntersectionObserverEntry()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `IntersectionObserverEntry`.

## Propriétés d'instance

- {{DOMxRef("IntersectionObserverEntry.boundingClientRect")}} {{ReadOnlyInline}}
  - : Retourne les limites de la zone couverte par l'élément cible comme {{DOMxRef("DOMRectReadOnly")}}. Ces limites sont calculées comme décrit dans la documentation pour {{DOMxRef("Element.getBoundingClientRect()")}}.
- {{DOMxRef("IntersectionObserverEntry.intersectionRatio")}} {{ReadOnlyInline}}
  - : Retourne le ratio de l'`intersectionRect` au `boundingClientRect`.
- {{DOMxRef("IntersectionObserverEntry.intersectionRect")}} {{ReadOnlyInline}}
  - : Retourne un {{DOMxRef("DOMRectReadOnly")}} représentant la partie visible de l'élément cible.
- {{DOMxRef("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : Retourne une valeur booléenne valant `true` si l'élément cible s'entrecoupe avec la zone d'intersection de l'élément racine. S'il vaut `true`, alors `IntersectionObserverEntry` décrit une transition vers un état d'intersection ; S'il vaut `false`, alors la transition se fait d'un état d'intersection à un état de non-intersection.
- {{DOMxRef("IntersectionObserverEntry.rootBounds")}} {{ReadOnlyInline}}
  - : Retourne un {{DOMxRef("DOMRectReadOnly")}} pour la zone d'intersection de l'élément racine.
- {{DOMxRef("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("Element")}} dont l'intersection avec la racine a changé d'état.
- {{DOMxRef("IntersectionObserverEntry.time")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("DOMHighResTimeStamp")}} indiquant l'instant auquel l'intersection a été enregistrée, relative au [temps originel](/fr/docs/Web/API/Performance/timeOrigin) de l'objet `IntersectionObserver`.

## Méthodes d'instance

_Cette interface n'a pas de méthode._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
