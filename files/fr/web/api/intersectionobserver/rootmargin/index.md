---
title: IntersectionObserver.rootMargin
slug: Web/API/IntersectionObserver/rootMargin
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Property
  - Reference
  - rootMargin
translation_of: Web/API/IntersectionObserver/rootMargin
---
{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

La propriété **`rootMargin`** est une propriété en lecture seule de l'interface [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver). C'est une chaîne de caractères avec une syntaxe similaire à celle de la propriété CSS [`margin`](/fr/docs/Web/CSS/margin). Chaque côté de la zone rectangulaire représentée par `rootMargin` est ajouté au côté correspondant de la boîte englobante de la [racine](/fr/docs/Web/API/IntersectionObserver/root) de l'élément avant que le test d'intersection soit effectué. Cela permet, par exemple, d'ajuster les limites vers l'extérieur afin que l'élément cible soit considéré comme entièrement visible même si un certain nombre de pixels en largeur ou en hauteur sont rognés, ou encore pour traiter la cible comme partiellement masquée si une bordure est trop proche de celle de la boîte englobante de l'élément racine.

Voir [la section sur l'élément racine et sa marge externe](/fr/docs/Web/API/Intersection_Observer_API) pour une explication plus approfondie à propos de la marge externe de l'élément racine et son fonctionnement.

## Syntaxe

    marginString = IntersectionObserver.rootMargin;

### Valeur

Une chaîne de caractères, formatée d'une manière similaire à la valeur de la propriété CSS [`margin`](/fr/docs/Web/CSS/margin), contenant les décalages pour un ou plusieurs côtés de la boîte englobante de l'élément racine. Ces décalages sont ajoutés aux valeurs correspondantes de la boîte englobante de l'élément racine avant le calcul de l'intersection entre la zone rectangulaire résultante et celle couverte par l'élément cible.

La chaîne de caractères renvoyée par cette propriété peut ne pas correspondre à celle spécifiée lors de l'initialisation de l'[`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver). Le navigateur a la possibilité de modifier la valeur.

Si `rootMargin` n'est pas spécifiée à l'initialisation de l'objet, sa valeur par défaut vaudra `"0px 0px 0px 0px"`, signifiant que l'intersection sera calculée entre les limites non modifiées de l'élément racine et celles de l'élément cible. [La section sur l'élément racine et sa marge externe](/fr/docs/Web/API/Intersection_Observer_API) décrit avec plus de détails comment `rootMargin` est utilisée.

## Spécifications

| Spécification                                                                                                                                        | Statut                                       | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('IntersectionObserver', '#dom-intersectionobserver-rootMargin', 'IntersectionObserver.rootMargin')}} | {{Spec2('IntersectionObserver')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.IntersectionObserver.rootMargin")}}
