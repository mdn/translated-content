---
title: Détection de collisions en 2D
slug: Games/Techniques/2D_collision_detection
tags:
  - 2D
  - Algorithmes
  - Détection de collisions
  - JavaScript
  - Jeux
translation_of: Games/Techniques/2D_collision_detection
---
{{GamesSidebar}}

{{IncludeSubnav("/fr/docs/Jeux")}}

Les algorithmes de détection de collisions dans les jeux en 2 dimensions dépendent de la forme des objets à détecter (par exemple : rectangle contre rectangle, cercle contre rectangle, cercle contre cercle…). Habituellement, il est préférable d’utiliser une forme générique appelée masque de collision (« *hitbox* ») qui couvrira l’entité. Ainsi, les collisions ne seront pas assurées au pixel près mais cela permettra d’avoir de bonnes performances pour un grand nombre d’entités à tester.

Cet article donne un résumé des techniques les plus utilisées pour la détection des collisions dans les jeux en deux dimensions.

## Boîtes englobantes alignées sur les axes

Une des formes les plus simples de détection de collision est une collision entre deux rectangles alignés sur les mêmes axes (c’est-à-dire sans rotation). L’algorithme suivant fonctionne en vérifiant qu’il n’y a pas d’espace vide entre les 4 côtés du rectangle. Si l’ensemble du rectangle est entouré de vide, on en conclut qu’il n’y a pas de collision.

```js
var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision détectée !
}

// remplissage des valeurs =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision détectée !
}
```

> **Note :** vous pouvez tester un [exemple interactif de cet algorithme](http://jsfiddle.net/knam8/) sur jsFiddle, pour mieux comprendre le fonctionnement de ce code.

## Collision de cercles

Une autre forme simple de détection de collision est la collision entre deux cercles. Cet algorithme fonctionne en prenant le point central de deux cercles puis il vérifie que la distance entre ces deux points est inférieure à la somme des rayons de ces deux cercles.

```js
var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < circle1.radius + circle2.radius) {
    // collision détectée !
}
```

> **Note :** vous pouvez tester un [exemple interactif de cet algorithme](http://jsfiddle.net/gQ3hD/2/) sur jsFiddle, pour mieux comprendre le fonctionnement de ce code.

## Théorème des axes séparateurs

Cet algorithme permet de détecter une collision entre deux polygones _convexes_. Cet algorithme est plus compliqué à implémenter que les deux précédents mais il est bien plus puissant. La complexité d’un tel algorithme induit de prendre en considération l’optimisation des performances (voir section suivante).

L’implémentation de cet algorithme est hors de propos sur cette page, nous vous conseillons les articles suivants :

1.  [Separating Axis Theorem (SAT) explanation](http://www.sevenson.com.au/actionscript/sat/) ;
2.  [(Anglais) Collision detection and response (en)](http://www.metanetsoftware.com/technique/tutorialA.html) ;
3.  [Collision detection Using the Separating Axis Theorem (en)](http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169) ;
4.  [SAT (Separating Axis Theorem) (en)](http://www.codezealot.org/archives/55) ;
5.  [Separation of Axis Theorem (SAT) for Collision Detection (en)](http://rocketmandevelopment.com/blog/separation-of-axis-theorem-for-collision-detection/).

## Performances

Alors que la plupart de ces algorithmes de détection de collision sont très simples à calculer, cela peut être une perte de ressources de tester _chaque entité_ avec les autres entités. Habituellement les jeux découpent les collisions en deux phases : large (« *broad* ») et étroite (« *narrow* »).

### Phase large

La phase large sert à récupérer une liste d’entités qui _pourraient_ entrer en collision. Cela peut être facilement implémenté avec une structure de données spaciale qui vous donnera une meilleure idée d’où est situé chaque entité et de ce qui existe autour d’elle. Par exemple :

- Les _Quad Trees_ (exemple : [JavaScript QuadTree Implementation (en)](http://blogs.adobe.com/digitalmedia/2011/03/javascript-quadtree-implementation/)) ;
- Les _R-Trees_ (voir [R-Tree sur Wikipedia.org (en)](http://en.wikipedia.org/wiki/R-tree)) ;
- Une « *hashmap* ».

### Phase étroite

Quand vous avez une liste réduite d’entités à vérifier, il convient d’utiliser un algorithme de phase étroite tels que ceux décrits ci-dessus afin de détecter s’il y a bien une collision entre deux objets ou non.
