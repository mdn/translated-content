---
title: IntersectionObserver.root
slug: Web/API/IntersectionObserver/root
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Property
  - Reference
  - root
translation_of: Web/API/IntersectionObserver/root
---
{{APIRef("Intersection Observer API")}}

La propriété en lecture seule **`root`** de l'interface [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) identifie l'[`Element`](/fr/docs/Web/API/Element) ou le [`Document`](/fr/docs/Web/API/Document) dont les bornes sont considérées comme la zone englobante (_bounding box_) de la zone d'affichage (_viewport_) au sein de laquelle les intersections avec la cible sont observées. Si `root` vaut `null`, ce sont les limites de la zone d'affichage (_viewport_) courantes qui sont utilisées.

## Syntaxe

    root = IntersectionObserver.root;

### Valeur

Un objet [`Element`](/fr/docs/Web/API/Element) ou [`Document`](/fr/docs/Web/API/Document) dont la boîte englobante est utilisée pour définir les limites de la zone de visibilité utilisée pour déterminer la proportion de l'élément cible qui est visible. L'intersection de ce rectangle délimiteur, décalé par toute marge spécifiée au moyen des options passées au constructeur de l'[`IntersectionObserver()`](/fr/docs/Web/API/IntersectionObserver/IntersectionObserver) (voir `options.rootMargin`), les limites de la zone recouverte par l'élément cible, moins les limites de la zone recouverte par chaque élément ou autre objet chevauchant l'élément cible, est considéré comme la partie visible de l'élément.

Si `root` vaut `null`, ce sera le document parent qui sera considéré comme racine et la zone d'intersection sera la zone d'affichage (_viewport_).

## Exemple

Cet exemple définit la propriété [`border`](/fr/docs/Web/CSS/border) de l'élément racine de l'observateur d'intersection comme une ligne verte moyenne de 2 pixels grâce aux propriétés exposées par CSSOM.

```js
observer.root.style.border = "2px solid #44aa44";
```

## Spécifications

| Spécification                                                                                                                | Statut                                       | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('IntersectionObserver', '#dom-intersectionobserver-root', 'IntersectionObserver')}} | {{Spec2('IntersectionObserver')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.IntersectionObserver.root")}}

## Voir aussi

- [Mesurer la visibilité d'un élément dans le temps l'API _Intersection Observer_](/fr/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
