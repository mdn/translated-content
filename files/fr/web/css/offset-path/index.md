---
title: offset-path
slug: Web/CSS/offset-path
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/offset-path
---
{{SeeCompatTable}}{{CSSRef}}

La propriété **`offset-path`** définit le tracé d'un mouvement sur lequel un élément est positionné, relativement au conteneur parent ou au système de coordonnées SVG.

{{EmbedInteractiveExample("pages/css/offset-path.html")}}

Cette propriété sert à définir un chemin qu'un élément va suivre lors d'une animation.

La position exacte de l'élément sur ce tracé est déterminée grâce à la propriété {{cssxref("offset-distance")}}. Le tracé d'un mouvement peut être défini grâce à un chemin ou à plusieurs chemins successifs ou encore grâce à la géométrie d'une forme. Chaque forme ou chemin doit définir une position initiale pour la valeur calculée `0` de {{cssxref("offset-distance")}} ainsi qu'une direction initiale qui définit la rotation de l'objet dans sa position initiale.

> **Note :** Dans des versions antérieures des spécifications, cette propriété était intitulée `motion-path`. Le nom a été modifié en `offset-path` afin de décrire un chemin statique plutôt qu'un chemin en mouvement.

## Syntaxe

```css
/* Valeur par défaut */
offset-path: none;

/* Valeurs avec une notation fonctionnelle */
offset-path: ray(45deg closest-side contain);

/* URL */
offset-path: url(#path);

/* Formes */
offset-path: circle(50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path('M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200');

/* Boîtes géométriques */
offset-path: margin-box;
offset-path: stroke-box;

/* Valeurs globales */
offset-path: inherit;
offset-path: initial;
offset-path: unset;
```

### Valeurs

> **Attention :** À l'heure actuelle, seule la notation `path()` est prise en charge par les navigateurs.

- `ray()`
  - : Cette notation fonctionnelle prend jusqu'à trois valeurs et définit un chemin qui est un ligne commençant à la position de la boîte et qui suit la direction de l'angle indiqué (la valeur 0deg correspond à une direction verticale, vers le haut et les angles allant dans le sens horaire). La valeur de la taille est définie de façon semblable à celle utilisée pour les dégradés entre `closest-side` et `farthest-corner` avec le mot-clé `contain`.
- `url()`
  - : Cette notation fonctionnelle permet de faire référence à l'identifiant d'une forme SVG : `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline` ou `rect` et d'utiliser la géométrie de la forme visée pour construire le chemin.
- `<basic-shape>`

  - : Cette valeur indique une [forme CSS](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes) en utilisant les notations fonctionnelles `circle()`, `ellipse()`, `inset()`, `polygon()` ou `path()`.

    - `path()`
      - : Une chaîne de caractères qui définit un chemin avec la syntaxe des coordonnées SVG. À l'heure actuelle (16 novembre 2018), c'est la seule valeur qui est prise en charge.

- `none`
  - : Aucun chemin de mouvement n'est indiqué.

### Syntaxe formelle

{{csssyntax}}

## Exemples

L'exemple qui suit est tiré de [cette démo présente sur CodePen](https://codepen.io/ericwilligers/pen/bwVkNa). Le code SVG dessine la forme d'une maison avec une cheminée. Les propriétés `offset-path` utilisées permettent de déplacer l'icône (des ciseaux) autour de la maison. On notera que la pseudo-classe `:path()` est utilisée avec `offset-path` et que le document SVG contient `<path>`. Si on compare ces deux données, on verra qu'elles sont identiques.

### CSS

```css
.scissorHalf {
  offset-path: path('M900,190  L993,245 V201  A11,11 0 0,1 1004,190  H1075  A11,11 0 0,1 1086,201  V300  L1294,423 H1216  A11,11 0 0,0 1205,434  V789  A11,11 0 0,1 1194,800  H606  A11,11 0 0,1 595,789  V434  A11,11 0 0,0 584,423  H506 L900,190');
  animation: followpath 4s linear infinite;
}

@keyframes followpath {
   to {
     motion-offset: 100%;
     offset-distance: 100%;
   }
}
```

### SVG

Les moitiés supérieure et inférieure des ciseaux apparaîtront dans le coin en haut à gauche du canevas si elles ne sont pas positionnés sur le point de départ avec `offset-path`.

```html
<svg xmlns="http://www.w3.org/2000/svg"
     width="700"
     height="450"
     viewBox="350 0 1400 900">
  <title>House and Scissors</title>
  <rect x="595"
        y="423"
        width="610"
        height="377"
        fill="blue" />
  <polygon points="506,423 900,190 1294,423"
           fill="yellow" />
  <polygon points="993,245 993,190 1086,190 1086,300"
           fill="red" />
  <path id="house" d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
        fill="none"
        stroke="black"
        stroke-width="13"
        stroke-linejoin="round"
        stroke-linecap="round" />
  <path id="firstScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0"
        transform="translate(0,0)"
        fill="green"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" />
  <path id="secondScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0"
        transform="translate(0,0)"
        fill="forestgreen"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" />
</svg>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', '450')}}

## Spécifications

| Spécification                                                                                        | État                                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Motion Path Level 1', '#offset-path-property', 'offset-path')}} | {{Spec2('Motion Path Level 1')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.offset-path")}}

## Voir aussi

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotation")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-position")}}
- {{SVGElement("path")}}
