---
title: Propriété CSS `background-position`
short-title: background-position
slug: Web/CSS/Reference/Properties/background-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-position`** définit la position initiale de chaque image d'arrière-plan. La position est relative à la couche de position définie par {{CSSxRef("background-origin")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: background-position")}}

```css interactive-example-choice
background-position: top;
```

```css interactive-example-choice
background-position: left;
```

```css interactive-example-choice
background-position: center;
```

```css interactive-example-choice
background-position: 25% 75%;
```

```css interactive-example-choice
background-position: bottom 50px right 100px;
```

```css interactive-example-choice
background-position: right 35% bottom 45%;
```

```html interactive-example
<section class="display-block" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: navajowhite;
  background-image: url("/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  height: 100%;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* Valeur de pourcentage <percentage> */
background-position: 25% 75%;

/* Valeur de longueur <length> */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Plusieurs images */
background-position:
  0 0,
  center;

/* Valeurs exprimant un décalage relatif aux côtés */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Valeurs globales */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: revert-layer;
background-position: unset;
```

La propriété `background-position` peut être définie grâce à une ou plusieurs valeurs `<position>`, séparées par des virgules.

### Valeurs

- `<position>`
  - : Une valeur {{CSSxRef("&lt;position&gt;")}}. Une position définit un couple de coordonnées XY qui permet de placer un objet par rapport aux bords de la boîte d'un élément. Une position peut être définie avec une à quatre valeurs. Si deux valeurs qui ne sont pas des mots-clés sont utilisées, la première représente la position horizontale et la seconde la position verticale. Si une seule valeur est indiquée, la deuxième sera `center` par défaut. Si trois ou quatre valeurs sont utilisées, les valeurs de longueur-pourcentage sont des décalages relatifs au(x) mot(s)-clé(s) précédent(s).

    **Définition avec une valeur&nbsp;:** la valeur peut être&nbsp;:
    - Le mot-clé `center` qui centre l'image.
    - Un mot-clé parmi `top`, `left`, `bottom`, `right`. Ce mot-clé indique le bord par rapport auquel placer l'élément. Pour l'autre dimension, on utilisera la moitié de la boîte (50%) et l'élément sera placé au milieu de cet axe.
    - Une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Cette valeur définit l'abscisse du point par rapport au bord gauche. L'ordonnée est fixée à 50%.

    **Définition avec deux valeurs&nbsp;:** la première valeur définit l'abscisse (la coordonnée horizontale X) et la seconde définit l'ordonnée (la coordonnée verticale Y). Chaque valeur peut être&nbsp;:
    - Un des mots-clés parmi `top`, `left`, `bottom`, `right`. Si `left` ou `right` est utilisé, la valeur définit l'abscisse et l'autre définira l'ordonnée. Si `top` ou `bottom` est indiqué, cette valeur définira l'ordonnée et l'autre valeur définira X.
    - Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Si l'autre valeur vaut `left` ou `right`, cette valeur définira l'ordonnée par rapport au bord haut. Si l'autre valeur est `top` ou `bottom`, cette valeur définira l'abscisse relativement au bord gauche. Si les deux valeurs sont des longueurs ou des pourcentages, la première définira l'abscisse et la seconde l'ordonnée.
    - Notez que si une valeur est `top` ou `bottom`, la seconde ne peut pas être `top` ou `bottom`. Si une valeur est `left` ou `right`, la seconde ne peut pas être `left` ou `right`. Autrement dit, les combinaisons `top top`, `bottom bottom`, `top bottom`, `bottom top`, `right right`, `left left`, `left right` et `right left` seront considérées comme invalides.
    - L'ordre des mots-clés n'est pas important, le navigateur pourra les réarranger si besoin. Ainsi, `top left` et `left top` auront le même effet. En revanche, si on associe une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) avec un mot-clé, l'ordre est important et la valeur définissant l'abscisse doit arriver avant l'ordonnée&nbsp;: `right 20px` ne sera pas équivalent à `20px right` et cette dernière forme sera invalide. Les valeurs `left 20%` ou `20% bottom` sont valides car les abscisses et ordonnées sont bien rangées.
    - La valeur par défaut est `left top` ou `0% 0%`.

    **Définition avec 3 valeurs&nbsp;:** Deux valeurs sont des mots-clés et la troisième est le décalage appliqué à la valeur qui précède.
    - La première valeur est l'un des mots-clés `top`, `left`, `bottom`, `right`, ou `center`. Si `left` ou `right` sont fournis, cela définit la position sur l'axe horizontale et si `top` or `bottom` sont fournis, cela définit la position sur l'axe vertical et l'autre mot-clé définit la position sur l'axe horizontal.
    - La longueur (type {{CSSxRef("&lt;length&gt;")}}) ou le pourcentage (type {{CSSxRef("&lt;percentage&gt;")}}), s'il est utilisé en deuxième valeur, sera considéré comme le décalage à appliquer pour la première valeur. S'il s'agit de la troisième valeur, ce sera le décalage à appliquer à la deuxième valeur.
    - Il n'y a qu'une seule longueur ou qu'un seul pourcentage attendu pour définir le décalage de la valeur précédente. Toute combinaison d'un mot-clé avec deux longueurs ou deux pourcentages sera considérée comme invalide.

    **Définition avec 4 valeurs&nbsp;:** La première et la troisième valeur sont des mots-clés pour la position horizontale d'une part et verticale d'autre part. La deuxième et la quatrième valeur sont des décalages pour les valeurs qui les précèdent&nbsp;:
    - La première et la troisième valeur utilisent l'un des mots-clés suivant&nbsp;: `top`, `left`, `bottom`, `right`. Si `left` ou `right` sont utilisés, cela définit la position horizontale. Si `top` ou `bottom` sont utilisés, cela définit la position verticale et l'autre mot-clé définit alors la valeur horizontale.
    - La deuxième et la quatrième valeur sont des longueurs ({{CSSxRef("&lt;length&gt;")}}) ou des pourcentages ({{CSSxRef("&lt;percentage&gt;")}}). La deuxième valeur est le décalage pour le premier mot-clé tandis que la quatrième valeur est le décalage correspondant au deuxième mot-clé.

### À propos des pourcentages

Lorsqu'on exprime un décalage en pourcentage, ce dernier est relatif au conteneur. Ainsi, une valeur de 0% indiquera que le côté gauche (ou haut) du bord de l'image est aligné avec le bord gauche (ou haut) du conteneur. Une valeur de 100% indiquera que le côté droit (ou bas) de l'image d'arrière-plan est alignée avec le bord droit (ou bas) du conteneur. Une valeur de 50% permettra de centrer l'image.

Autrement dit, lorsqu'on utilise un pourcentage, celui-ci s'inscrit dans la formule suivante&nbsp;:

```plain
(largeur conteneur - largeur image) * (position en %) = (décalage horizontal)
(hauteur conteneur - hauteur image) * (position en %) = (décalage vertical)
```

En utilisant l'axe horizontal pour un exemple, prenons une image dont la largeur mesure 300px, qu'on utilise celle-ci dans un conteneur dont la largeur mesure 100px et que `background-size` vaut `auto`&nbsp;:

```plain
100px - 300px = -200px (différence entre le conteneur et l'image)
```

Voici donc les décalages, exprimés en pixels, qu'on obtient avec les pourcentages -25%, 0%, 50%, 100% et 125%&nbsp;:

```plain
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

Traduisons l'effet obtenu avec ces valeurs. Le **bord gauche** de **l'image** est décalé du **bord gauche** du **conteneur** de&nbsp;:

- \+ 50px (plaçant ainsi le bord gauche de l'image au centre du conteneur large de 100px)
- 0px (le bord gauche de l'image coïncide avec le bord gauche du conteneur)
- \-100px (le bord gauche de l'image est situé à 100px du bord gauche du conteneur, ce qui signifie pour notre exemple que c'est la partie centrale de l'image qui est inscrite dans le conteneur)
- \-200px (le bord gauche de l'image est situé à 200px du bord gauche du conteneur, ce qui signifie pour notre exemple que le bord droit de l'image coïncide avec le bord droit du conteneur)
- \-250px (le bord gauche de l'image est situé à 250px du bord gauche du conteneur, ce qui signifie pour notre exemple que le bord droit de l'image de 300px est au centre du conteneur).

On notera donc que si l'image d'arrière-plan a les mêmes dimensions que le conteneur, les valeurs en pourcentage pour `background-position` n'auront aucun effet (car la différence entre l'image et le conteneur est alors nulle). Il faudra utiliser des valeurs absolues pour décaler l'image.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Positionner des images d'arrière-plan

Chacun de ces trois exemples utilise la propriété {{CSSxRef("background")}} pour créer un élément rectangulaire jaune contenant une image d'étoile. Dans chaque exemple, l'étoile est à une position différente. Le troisième exemple montre comment définir des positions pour deux images d'arrière-plan différentes dans un même élément.

#### HTML

```html
<div class="exemple-un">Premier exemple</div>
<div class="exemple-deux">Deuxième exemple</div>
<div class="exemple-trois">Troisième exemple</div>
```

#### CSS

```css
/* Partagé entre tous les <div> */
div {
  background-color: #ffee99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* On utilise la propriété raccourcie background */
.exemple-un {
  background: url("star-transparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.exemple-deux {
  background: url("star-transparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/*
Plusieurs images d'arrière-plan chacune positionnée
différemment, on voit les virgules dans les déclarations.
L'ordre est le même entre background-image et -position.
*/
.exemple-trois {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-position:
    0px 0px,
    right 3em bottom 2em;
}
```

#### Résultat

{{EmbedLiveSample("Positionner des images d'arrière-plan", 420, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-position-x")}}
- La propriété {{CSSxRef("background-position-y")}}
- [Utiliser plusieurs arrières-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- La propriété {{CSSxRef("transform-origin")}}
