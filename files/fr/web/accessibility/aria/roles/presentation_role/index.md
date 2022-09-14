---
title: Utiliser le rôle presentation
slug: Web/Accessibility/ARIA/Roles/presentation_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role
---
Cette page présente l'usage du rôle [`presentation`](https://www.w3.org/TR/wai-aria-practices-1.1/#presentation_role) et décrit l'effet qu'il a sur les navigateurs et les technologies d'assistance.

## Description

Le rôle `presentation` est utilisé pour retirer toute représentation sémantique pour un élément donné ainsi que pour ses descendants. Par exemple, un tableau utilisé pour la mise en page pourrait avoir un rôle `presentation` appliqué sur l'élément `table` pour retirer la sémantique de l'élément en lui-même ainsi que tout ses sous-éléments, comme l'en-tête de tableau ou même les données de tableau elles-mêmes.

## Effets possibles sur les agents utilisateurs et les technologies d’assistance

Les agents utilisateurs ou les technologies d'assistance ne devrait normalement pas lire les éléments marqués comme étant de rôle `presentation`.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

## Exemples

### Exemple 1: Les icônes-fontes

Une des recommandations d'accessibilité propose que les couleurs ou les représentations imagées (icônes par exemple) ne soient pas l'unique méthode pour transmettre une information. Ainsi nous pouvons partir du postula que votre icône est un complément décoratif à un texte explicite. Il faut donc lui appliquer un rôle `presentation`.

```html
<i class="icon-user" role="presentation"></i>
```

#### Exemples concrets&nbsp;:

Par exemple, en reprenant le bouton de la navigation principale de ce site web, nous pourrions écrire.

```html
<button type="button" aria-haspopup="true">
    Technologies
    <span class="main-menu-arrow" role="presentation">▼</span>
</button>
```

### Exemple 2 : Inline SVG

De plus en plus d'images sont proposées sous la forme de compositions SVG directement insérées dans le document HTML. À l'image de l'attribut `alt` vide sur un élément `img`, il est possible d'indiquer qu'un élément SVG est purement décoratif grâce au rôle `presentation`.

```html
<svg role="presentation">
…
</svg>
```

## Autres ressources

Using Aria - 2.9 Use of Role=presentation or Role=none: <https://www.w3.org/TR/using-aria/#presentation>
