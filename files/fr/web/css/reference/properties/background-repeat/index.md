---
title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: 1b3165b1717bbd0bfc1c90ad68c80a84e0b4fc8c
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-repeat`** définit la façon dont les images utilisées en arrière-plan sont répétées. Une image d'arrière-plan pourra ainsi être répétée sur l'axe horizontal, l'axe vertical ou bien ne pas être répétée.

{{InteractiveExample("Démonstration CSS&nbsp;: background-repeat")}}

```css interactive-example-choice
background-repeat: repeat-x;
```

```css interactive-example-choice
background-repeat: repeat;
```

```css interactive-example-choice
background-repeat: space;
```

```css interactive-example-choice
background-repeat: round;
```

```css interactive-example-choice
background-repeat: no-repeat;
```

```css interactive-example-choice
background-repeat: space repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") center /
    120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Syntaxe avec deux valeurs : horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Valeurs globales */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: revert-layer;
background-repeat: unset;
```

### Valeurs

La propriété accepte une liste de deux mots-clés `<repeat-style>` séparés par des virgules, ou un seul mot-clé comme raccourci pour les deux valeurs. La première valeur correspond à la répétition horizontale. La seconde valeur correspond au comportement vertical. Si une seule valeur différente de `repeat-x` ou `repeat-y` est définie, cette valeur est appliquée aux deux axes. Les valeurs incluent&nbsp;:

- `repeat`
  - : Valeur par défaut. L'image est répétée autant de fois que nécessaire pour couvrir toute la zone de peinture de l'arrière-plan, l'image sur le bord étant rognée si la dimension de la zone n'est pas un multiple de la dimension de l'image d'arrière-plan.

- `no-repeat`
  - : L'image n'est pas répétée (et donc la zone de peinture de l'image d'arrière-plan ne sera pas forcément entièrement couverte). La position de l'image d'arrière-plan non répétée est définie par la propriété CSS {{CSSxRef("background-position")}}.

- `space`
  - : L'image est répétée autant que possible sans être rognée. La première et la dernière image sont collées de chaque côté de l'élément, et l'espace blanc est réparti uniformément entre les images. La propriété {{CSSxRef("background-position")}} est ignorée sauf si une seule image peut être affichée sans rognage. Le seul cas où un rognage se produit avec `space` est lorsqu'il n'y a pas assez de place pour afficher une image.

- `round`
  - : Lorsque l'espace disponible augmente, les images répétées s'étirent (sans laisser d'espaces) jusqu'à ce qu'il y ait de la place pour en ajouter une de plus. C'est la seule valeur `<repeat-style>` qui peut entraîner une déformation du {{Glossary("aspect ratio", "rapport d'aspect")}} de l'image d'arrière-plan, ce qui se produit si le rapport d'aspect de l'image d'arrière-plan diffère de celui de la zone de peinture de l'arrière-plan.

- `repeat-x`
  - : Raccourci pour `repeat no-repeat`, l'image d'arrière-plan se répète uniquement horizontalement, l'image sur le bord étant rognée si la largeur de la zone de peinture n'est pas un multiple de la largeur de l'image d'arrière-plan.

- `repeat-y`
  - : Raccourci pour `no-repeat repeat`, l'image d'arrière-plan se répète uniquement verticalement, l'image sur le bord étant rognée si la hauteur de la zone de peinture n'est pas un multiple de la hauteur de l'image d'arrière-plan.

Lorsqu'un seul mot-clé `<repeat-style>` est fourni, la valeur est un raccourci pour la syntaxe à deux valeurs suivante&nbsp;:

| Valeur unique | Équivalence en deux valeurs |
| ------------- | --------------------------- |
| `repeat-x`    | `repeat no-repeat`          |
| `repeat-y`    | `no-repeat repeat`          |
| `repeat`      | `repeat repeat`             |
| `space`       | `space space`               |
| `round`       | `round round`               |
| `no-repeat`   | `no-repeat no-repeat`       |

## Description

La propriété accepte une liste de deux mots-clés [`<repeat-style>`](#values) séparés par des virgules, ou un seul mot-clé comme raccourci pour les deux valeurs. Lorsque deux valeurs sont fournies, la première définit le comportement de répétition horizontal et la seconde définit le comportement vertical.
Les valeurs de propriété peuvent être utilisées pour répéter uniquement horizontalement, verticalement ou pas du tout.

La valeur par défaut est `repeat repeat`. Avec cette valeur, l'image d'arrière-plan conserve son {{Glossary("aspect ratio", "rapport d'aspect")}} intrinsèque, se répétant à la fois horizontalement et verticalement pour couvrir toute la zone de peinture de l'arrière-plan, les images sur les bords étant rognées à la taille de l'élément. Les bords rognés dépendent de la valeur de la propriété {{CSSxRef("background-position")}} correspondante. Le nombre de répétitions et la quantité d'images rognées sur les bords dépendent de la taille de la zone de peinture de l'arrière-plan et de la valeur de {{CSSxRef("background-size")}} correspondante.

Les images répétées peuvent être espacées uniformément, ce qui garantit que l'image répétée conserve son rapport d'aspect sans être rognée. Avec la valeur `space`, si la zone de peinture de l'arrière-plan a un rapport d'aspect différent de celui de l'image ou n'a pas une taille qui est un multiple de la taille de l'arrière-plan dans l'une ou l'autre direction, il y aura des zones non couvertes par l'image d'arrière-plan.

L'image d'arrière-plan répétée peut aussi être étirée pour couvrir toute la zone sans rognage. Avec la valeur `round`, l'image répétée est étirée pour remplir tout l'espace disponible jusqu'à ce qu'il y ait de la place pour en ajouter une de plus, si le rapport d'aspect de l'image d'arrière-plan diffère de celui de la zone de peinture. Par exemple, pour une image d'arrière-plan de 100px sur 100px et une zone de peinture de 1099px sur 750px, l'image sera répétée 10 fois horizontalement et 7 fois verticalement, soit 70 répétitions au total, chaque image étant étirée dans les deux directions pour mesurer 109.9px sur 105px, modifiant ainsi le rapport d'aspect de l'image et pouvant la déformer. Si la largeur de la zone de peinture augmente de 1px pour atteindre 1100px, une 11e image pourra tenir horizontalement pour un total de 77 répétitions, chaque image étant alors peinte à 100px de large et 105px de haut, étirée uniquement dans le sens vertical.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un `background-repeat`

#### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="un"></div>
  </li>
  <li>
    repeat
    <div class="deux"></div>
  </li>
  <li>
    repeat-x
    <div class="trois"></div>
  </li>
  <li>
    repeat-y
    <div class="quatre"></div>
  </li>
  <li>
    space
    <div class="cinq"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (plusieurs images)
    <div class="sept"></div>
  </li>
</ol>
```

#### CSS

```css
/* Commun à tous les DIVS */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url("star-solid.gif");
  width: 160px;
  height: 70px;
}

/* background-repeat CSS */
.un {
  background-repeat: no-repeat;
}
.deux {
  background-repeat: repeat;
}
.trois {
  background-repeat: repeat-x;
}
.quatre {
  background-repeat: repeat-y;
}
.cinq {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* Plusieurs images */
.sept {
  background-image:
    url("star-solid.gif"), url("/shared-assets/images/examples/favicon32.png");
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### Résultat

Dans cet exemple, chaque élément de la liste illustre une valeur différente de `background-repeat`.

{{EmbedLiveSample("Exemples", 240, 560)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres composants raccourcis de {{CSSxRef("background")}}&nbsp;: {{CSSxRef("background-attachment")}}, {{CSSxRef("background-clip")}}, {{CSSxRef("background-color")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-origin")}}, {{CSSxRef("background-position")}} ({{CSSxRef("background-position-x")}} et {{CSSxRef("background-position-y")}}) et {{CSSxRef("background-size")}}
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Le module [d'arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders) module
- [Comprendre les proportions](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
