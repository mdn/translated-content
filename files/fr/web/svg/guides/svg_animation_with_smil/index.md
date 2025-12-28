---
title: Animation SVG avec SMIL
slug: Web/SVG/Guides/SVG_animation_with_SMIL
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

[Synchronized Multimedia Integration Language <sup>(angl.)</sup>](https://www.w3.org/TR/SMIL/) (SMIL) est un langage basé sur XML pour écrire des présentations multimédias interactives.
Les auteur·ice·s peuvent utiliser la syntaxe SMIL dans d'autres langages basés sur XML pour définir le minutage et la disposition des éléments pour l'animation.

SMIL permet de&nbsp;:

- animer les attributs numériques d'un élément ({{SVGAttr("x")}}, {{SVGAttr("y")}}, etc.)
- animer les attributs de [transformation](/fr/docs/Web/SVG/Reference/Attribute/transform) ([déplacement](/fr/docs/Web/SVG/Reference/Attribute/transform#translate), [rotation](/fr/docs/Web/SVG/Reference/Attribute/transform#rotate), etc.)
- animer les attributs de [couleur](/fr/docs/Web/SVG/Reference/Attribute/color)
- suivre un [chemin](/fr/docs/Web/SVG/Reference/Element/path) de mouvement

Les sections suivantes montrent comment utiliser SMIL dans [SVG](/fr/docs/Web/SVG) pour ces quatre cas d'usage.

## Animation pour un attribut

L'exemple suivant anime l'[attribut `cx`](/fr/docs/Web/SVG/Reference/Attribute/cx) d'un cercle. Pour ce faire, on ajoute un élément {{SVGElement("animate")}} dans l'élément {{SVGElement("circle")}}. Les attributs importants pour {{SVGElement("animate")}} sont&nbsp;:

- `attributeName`
  - : Le nom de l'attribut à animer.
- `from`
  - : La valeur initiale de l'attribut.
- `to`
  - : La valeur finale.
- `dur`
  - : La durée de l'animation (par exemple, écrire '5s' pour 5 secondes).

Si vous voulez animer plus d'attributs dans le même élément, ajoutez simplement d'autres éléments {{SVGElement("animate")}}.

```html
<svg width="300" height="100">
  <title>Animation d'attribut avec SMIL</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animate
      attributeName="cx"
      from="0"
      to="500"
      dur="5s"
      repeatCount="indefinite" />
  </circle>
</svg>
```

{{EmbedLiveSample("Animation pour un attribut", '100%', 120)}}

## Animer les attributs de transformation

L'élément {{SVGElement("animateTransform")}} permet d'animer les attributs de [transformation](/fr/docs/Web/SVG/Reference/Attribute/transform). Cet élément est nécessaire car nous n'animons pas un simple attribut comme [x](/fr/docs/Web/SVG/Reference/Attribute/x) qui est juste un nombre. Les attributs pour la rotation sont ainsi&nbsp;: `rotation(theta, x, y)`, où `theta` est l'angle en degrés, et `x` et `y` sont les positions absolues. Dans l'exemple ci-dessous, on anime le centre de rotation et l'angle.

```html
<svg width="300" height="100">
  <title>Animation SVG SMIL avec transformation</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="50"
    width="15"
    height="34"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateTransform
      attributeName="transform"
      begin="0s"
      dur="20s"
      type="rotate"
      from="0 60 60"
      to="360 100 60"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Animer les attributs de transformation", '100%', 120)}}

## Animation suivant un tracé (chemin)

L'élement {{SVGElement("animateMotion")}} permet d'animer la position et la rotation d'éléments en suivant un tracé spécifique. Ce chemin est définit de la même manière que dans {{SVGElement("path")}}.

### Exemple 1 : Mouvement linéaire

Dans cet exemple, un cercle bleu rebondit indéfiniment entre les bords gauche et droit d'une boîte noir. L'animation est ici gérée par l'élément {{SVGElement("animateMotion")}}.

On crée ici un chemin avec les commandes **MoveTo**, pour définir le point de départ de l'animation, **Horizontal-line**, pour déplacer le cercle de 300 pixels vers la droite, et la commande **Z**, pour fermer le chemin — ce qui permet d'établir une boucle qui revient au début. En définissant la valeur de l'attribut **repeatCount** à `indefinite`, on indique que l'animation doit boucler indéfiniment, tant que l'image SVG existe.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
  <title>Animation SVG SMIL avec chemin</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
  </circle>
</svg>
```

{{EmbedLiveSample('Exemple 1 : Mouvement linéaire', '100%', 120)}}

### Exemple 2 : Mouvement en courbe

Le même exemple que précédemment mais avec une trajectoire courbe.

```html
<svg width="300" height="100">
  <title>Animation SVG SMIL avec chemin</title>
  <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
  <rect
    x="0"
    y="0"
    width="20"
    height="20"
    fill="blue"
    stroke="black"
    stroke-width="1">
    <animateMotion
      path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
      dur="3s"
      repeatCount="indefinite"
      rotate="auto" />
  </rect>
</svg>
```

{{EmbedLiveSample('Exemple 2 : Mouvement en courbe', '100%', 120)}}

## Voir aussi

- [SVG](/fr/docs/Web/SVG)
- [Spécification de l'animation SVG <sup>(angl.)</sup>](https://svgwg.org/svg2-draft/animate.html)
- [Spécification SMIL <sup>(angl.)</sup>](https://www.w3.org/TR/SMIL/)
