---
title: Animation SVG avec SMIL
slug: Web/SVG/SVG_animation_with_SMIL
tags:
  - Animation
  - Firefox 4
  - Gecko 2.0
  - HTML Animation
  - SVG
  - SVG Animation
  - XML
translation_of: Web/SVG/SVG_animation_with_SMIL
---
> **Attention :** Bien que Chrome 45 déprécie SMIL en faveur des animations CSS et des animations Web, les développeurs Chrome ont depuis [suspendu](https://groups.google.com/a/chromium.org/d/msg/blink-dev/5o0yiO440LM/YGEJBsjUAwAJ) cette décision.

Firefox 4 introduit le support pour les animations [SVG](/fr/SVG "en/SVG") en utilisant [Synchronized Multimedia Integration Language](http://www.w3.org/TR/REC-smil) (SMIL). SMIL permet :

- d'animer les attributs numériques d'un élément (x, y, ...)
- d'animer la transformation des attributs (translation ou rotation)
- d'animer les attributs de couleur
- de créer un mouvement en suivant un tracé donné

Pour ce faire, on utilise un élément SVG tel que {{ SVGElement("animate") }}. Vous trouverez ci-dessous des exemples illustrant les quatres différents manières de procéder.

## Animation pour un attribut

L'exemple suivant anime l'attribut **`cx`** d'un cercle. Pour ce faire, on ajoute un élément {{ SVGElement("animate") }}  dans l'élément {{ SVGElement("circle") }}. Les attributs importants pour {{ SVGElement("animate") }} sont :

- **`attributeName`**
  - : Le nom de l'attribut à animer.
- `from`
  - : La valeur initiale de l'attribut.
- `to`
  - : La valeur finale.
- `dur`
  - : La durée de l'animation (par exemple, écrire '5s' pour 5 secondes).

Si vous voulez animer plus d'attributs dans le même élément, ajoutez simplement d'autres éléments {{ SVGElement("animate") }}.

```html
<svg width="300" height="100">
  <title>Attribute Animation with SMIL</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animate
       attributeName="cx" from="0" to="100"
       dur="5s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample("Animation_pour_un_attribut", '100%', 120) }}

## Animer une transformation d'attributs

L'élement {{ SVGElement("animateTransform") }} permet d'animer la **transformation** d'attributs. Ce nouvel élément est nécéssaire parce que nous n'animons pas un simple attribut tel que **x,** qui est juste un nombre.
Les attributs pour la rotation sont ainsi : `rotation(theta, x, y)`, où `theta` est l'angle en degrés, `x` et `y` sont les positions absolues.
Dans l'exemple ci dessous, on anime le centre de rotation et l'angle.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with transform</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect x="0" y="50" width="15" height="34" fill="blue" stroke="black" stroke-width="1">
    <animateTransform
       attributeName="transform"
       begin="0s"
       dur="20s"
       type="rotate"
       from="0 60 60"
       to="360 100 60"
       repeatCount="indefinite"
      />
  </rect>
</svg>
```

{{ EmbedLiveSample("Animer_une_transformation_d'attributs", '100%', 120) }}

## Animation suivant un tracé (chemin)

L'élement {{ SVGElement("animateMotion") }} permet d'animer la position et la rotation d'éléments en suivant un tracé spécifique. Ce chemin est définit de la même manière que dans {{ SVGElement("path") }}.

### Exemple 1: Mouvement linéaire

Dans cet exemple, un cercle bleu rebondit indéfiniment entre les bords gauche et droit d'une boîte noir. L'animation est ici gérée par l'élément {{ SVGElement("animateMotion") }}.

On crée ici un chemin avec les commandes **M**oveTo, pour définir le point de départ de l'animation**, H**orizontal-line, pour déplacer le cercle de 300 pixels vers la droite, et la commande **Z**, pour fermer le chemin — ce qui permet d'établir une boucle qui revient au début. En définissant la valeur de l'attribut **repeatCount** à `indefinite`, on indique que l'animation doit boucler indéfiniment, tant que l'image SVG existe.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion
       path="M 0 0 H 300 Z"
       dur="3s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{ EmbedLiveSample('Exemple_1_Mouvement_linéaire', '100%', 120) }}

### Exemple 2: Mouvement en courbe

Le même exemple que précédemment mais avec une trajectoire courbe.

```html
<svg width="300" height="100">
  <title>SVG SMIL Animate with Path</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect x="0" y="0" width="20" height="20" fill="blue" stroke="black" stroke-width="1">
    <animateMotion
       path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
       dur="3s" repeatCount="indefinite" rotate="auto" />
  </rect>
</svg>
```

{{ EmbedLiveSample('Exemple_2_Mouvement_en_courbe', '100%', 120) }}

## Voir aussi

- [SVG](/fr/SVG "en/SVG")
- [SVG Animation Specification](http://www.w3.org/TR/SVG/animate.html)
- [SMIL Specification](http://www.w3.org/TR/REC-smil)
