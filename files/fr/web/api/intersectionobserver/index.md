---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
tags:
  - API
  - Interface
  - Intersection Observer API
  - IntersectionObserver
  - Reference
  - observers
translation_of: Web/API/IntersectionObserver
---
{{APIRef("Intersection Observer API")}}

L'interface **`IntersectionObserver`** de l'[API _Intersection Observer_](/fr/docs/Web/API/Intersection_Observer_API) fournit un moyen d'observer de manière asynchrone les changements d'intersection d'un élément cible avec un élément ancêtre ou avec la fenêtre du document ([_viewport_](/fr/docs/Glossary/Viewport)). L'ancêtre ou la fenêtre du document est alors appelé racine dans ce contexte.

Lorsqu'un objet implémentant `IntersectionObserver` est créé, il est configuré pour surveiller des ratios donnés de visibilité au sein de la racine. La configuration ne peut être changée après initialisation de l'`IntersectionObserver`. Ainsi un certain observateur ne sera utile que pour surveiller certains changements spécifiques de visibilité ; toutefois, on peut observer de multiples éléments avec un unique observateur.

## Constructeur

- [`IntersectionObserver.IntersectionObserver()`](/fr/docs/Web/API/IntersectionObserver/IntersectionObserver) {{Experimental_inline}}
  - : Crée un nouvel objet `IntersectionObserver` qui exécutera une fonction de rappel lorsqu'il détectera que la visibilité de l'élément cible a franchi un ou plusieurs seuils.

## Propriétés

- [`IntersectionObserver.root`](/fr/docs/Web/API/IntersectionObserver/root) {{readonlyinline}} {{Experimental_inline}}
  - : L'[élément](/fr/docs/Web/API/Element) ou le [document](/fr/docs/Web/API/Document) dont les limites sont utilisées comme boîte englobante pour le test de l'intersection. Si aucune racine n'est passée au constructeur ou que sa valeur est `null`, c'est la zone d'affichage (_viewport_) de plus haut niveau qui est utilisée.
- [`IntersectionObserver.rootMargin`](/fr/docs/Web/API/IntersectionObserver/rootMargin) {{readonlyinline}} {{Experimental_inline}}
  - : Un rectangle de décalage appliqué à [la boîte englobante](/fr/docs/Glossary/bounding_box) de la racine lors du calcul des intersections. La zone de la racine est ainsi réduite ou étendue pour les calculs. La valeur renvoyée par cette propriété peut différer de celle spécifiée lors de l'appel du constructeur, car elle peut être modifiée pour répondre aux exigences internes. Chaque décalage peut être exprimé en pixels (px) ou en pourcentage (%). La valeur par défaut est `"0px 0px 0px 0px"`.
- [`IntersectionObserver.thresholds`](/fr/docs/Web/API/IntersectionObserver/thresholds) {{readonlyinline}} {{Experimental_inline}}
  - : Une liste de seuils, triée par ordre numérique croissant, où chaque seuil est un rapport de la surface d'intersection à la surface de la zone de délimitation de l'élément observé. Les notifications pour une cible sont émises dès lors qu'un seuil au moins est franchi pour cette cible. Si aucune valeur n'est donnée, 0 est utilisé comme seuil par défaut.

## Méthodes

- [`IntersectionObserver.disconnect()`](/fr/docs/Web/API/IntersectionObserver/disconnect) {{Experimental_inline}}
  - : Indique à l'objet `IntersectionObserver` de ne plus observer aucune cible.
- [`IntersectionObserver.observe()`](/fr/docs/Web/API/IntersectionObserver/observe) {{Experimental_inline}}
  - : Indique à l'objet `IntersectionObserver` un nouvel élément à observer.
- [`IntersectionObserver.takeRecords()`](/fr/docs/Web/API/IntersectionObserver/takeRecords) {{Experimental_inline}}
  - : Retourne un tableau d'objets [`IntersectionObserverEntry`](/fr/docs/Web/API/IntersectionObserverEntry) pour toutes les cibles observées et cesse de surveiller chacune d'elles.
- [`IntersectionObserver.unobserve()`](/fr/docs/Web/API/IntersectionObserver/unobserve) {{Experimental_inline}}
  - : Indique à l'objet `IntersectionObserver` de cesser d'observer un élément cible particuler.

## Exemple

```js
var intersectionObserver = new IntersectionObserver(function(entries) {
  // Si intersectionRatio vaut 0 ou moins, la cible
  // est hors de vue et rien n'est alors fait
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log('Nouveaux éléments chargés');
});
// début de l'observation
intersectionObserver.observe(document.querySelector('.scrollerFooter'));
```

## Spécifications

| Spécification                                    | Statut                                       | Commentaire |
| ------------------------------------------------ | -------------------------------------------- | ----------- |
| {{SpecName('IntersectionObserver')}} | {{Spec2('IntersectionObserver')}} |             |

## Compatibilité des navigateurs

{{Compat("api.IntersectionObserver")}}

## Voir aussi

- [`MutationObserver`](/fr/docs/Web/API/MutationObserver)
- [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver)
- [`ResizeObserver`](/fr/docs/Web/API/ResizeObserver)
