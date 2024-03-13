---
title: IntersectionObserver.observe()
slug: Web/API/IntersectionObserver/observe
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

La méthode **`observe()`** de l'interface [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) ajoute un élément à l'ensemble des éléments cibles étant observés par l'`IntersectionObserver`. Un observateur possède un ensemble de seuils d'intersection et une racine, mais peut observer plusieurs éléments cibles en surveillant leurs changements de visibilité indépendamment. Pour cesser d'observer un élément, il faut appeler la méthode [`IntersectionObserver.unobserve()`](/fr/docs/Web/API/IntersectionObserver/unobserve).

Lorsque la visibilité d'un élément cible franchit l'un des seuils d'intersection de l'observateur (tel que listé dans [`IntersectionObserver.thresholds`](/fr/docs/Web/API/IntersectionObserver/thresholds), la fonction de rappel de l'observateur est executée avec comme argument un objet [`IntersectionObserverEntry`](/fr/docs/Web/API/IntersectionObserverEntry) représentant le changement d'intersection qui a été observé. À noter que cette conception permet à de multiples changements d'intersection d'éléments différents d'être traités par un unique appel à la fonction de rappel au moyen d'un tableau d'objets `IntersectionObserverEntry`.

## Syntaxe

```js
IntersectionObserver.observe(targetElement);
```

### Paramètres

- `targetElement`
  - : Un [élément](/fr/docs/Web/API/Element) dont on souhaite observer les changements de visibilité dans la racine. Cet élément doit nécessairement être un descendant de l'élément racine (ou contenu dans le document courant si la racine est la fenêtre du document).

### Valeur de retour

`undefined`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`IntersectionObserver.unobserve()`](/fr/docs/Web/API/IntersectionObserver/unobserve)
