---
title: background-position
slug: Web/CSS/background-position
browser-compat: css.properties.background-position
translation_of: Web/CSS/background-position
---
{{CSSRef}}

La propriété **`background-position`** permet de définir la position initiale, relative à l'origine définie par [`background-origin`](/fr/docs/Web/CSS/background-origin), pour chaque image d'arrière-plan.

{{EmbedInteractiveExample("pages/css/background-position.html")}}

## Syntaxe

```css
/* Valeurs utilisant un mot-clé */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* Valeurs proportionnelles à la boîte */
/* Type <percentage>                   */
background-position: 25% 75%;

/* Valeurs de longueur */
/* Type <length>       */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Plusieurs valeurs pour plusieurs arrières-plans */
background-position: 0 0, center;

/* Valeurs exprimant un décalage relatif aux côtés */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Valeurs globales */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: unset;
```

La propriété `background-position` peut être définie grâce à une ou plusieurs valeurs `<position>`, séparées par des virgules.

### Valeurs

- `<position>`

  - : Une valeur [`<position>`](/fr/docs/Web/CSS/position). Une position définit un couple de coordonnées XY qui permet de placer un objet par rapport aux bords de la boîte d'un élément. Une position peut être définie avec une ou deux valeurs. La première correspond à la position horizontale et la seconde à la position verticale.

    **Définition avec une valeur&nbsp;:** la valeur peut être&nbsp;:

    - Le mot-clé `center` qui centre l'image.
    - Un mot-clé parmi `top`, `left`, `bottom`, `right`. Ce mot-clé indique le bord par rapport auquel placer l'élément. Pour l'autre dimension, on utilisera la moitié de la boîte (50%).
    - Une longueur ([`<length>`](/fr/docs/Web/CSS/length)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Cette valeur définit l'abscisse du point par rapport au bord gauche. L'ordonnée est fixée à 50%.

    **Définition avec deux valeurs&nbsp;:** la première valeur définit l'abscisse (la coordonnée horizontale X) et la seconde définit l'ordonnée (la coordonnée verticale Y). Chaque valeur peut être&nbsp;:

    - Un des mots-clés parmi `top`, `left`, `bottom`, `right`. Si `left` ou `right` est utilisé, la valeur définit l'abscisse et l'autre définira l'ordonnée. Si `top` ou `bottom` est indiqué, cette valeur définira l'ordonnée et l'autre valeur définira X.
    - Une valeur de longueur ([`<length>`](/fr/docs/Web/CSS/length)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)). Si l'autre valeur vaut `left` ou `right`, cette valeur définira l'ordonnée par rapport au bord haut. Si l'autre valeur est `top` ou `bottom`, cette valeur définira l'abscisse relativement au bord gauche. Si les deux valeurs sont des longueurs ou des pourcentages, la première définira l'abscisse et la seconde l'ordonnée.

    > **Note :** Si une valeur est `top` ou `bottom`, la seconde ne peut pas être `top` ou `bottom`. Si une valeur est `left` ou `right`, la seconde ne peut pas être `left` ou `right`. Autrement dit `top top` ou `left right` seront considérées comme invalides.

    **Définition avec 3 valeurs&nbsp;:** Deux valeurs sont des mots-clés et la troisième est le décalage appliqué à la valeur qui précède.

    - La première valeur est l'un des mots-clés `top`, `left`, `bottom`, `right`, ou `center`. Si `left` ou `right` sont fournis, cela définit la position sur l'axe horizontale et si `top` or `bottom` sont fournis, cela définit la position sur l'axe vertical et l'autre mot-clé définit la position sur l'axe horizontal.
    - La longueur (type [`<length>`](/fr/docs/Web/CSS/length)) ou le pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), s'il est utilisé en deuxième valeur, sera considéré comme le décalage à appliquer pour la première valeur. S'il s'agit de la troisième valeur, ce sera le décalage à appliquer à la deuxième valeur.
    - Il n'y a qu'une seule longueur ou qu'un seul pourcentage attendu pour définir le décalage de la valeur précédente. Toute combinaison d'un mot-clé avec deux longueurs ou deux pourcentages sera considérée comme invalide.

    **Définition avec 4 valeurs&nbsp;:** La première et la troisième valeur sont des mots-clés pour la position horizontale d'une part et verticale d'autre part. La deuxième et la quatrième valeur sont des décalages pour les valeurs qui les précèdent&nbsp;:

    - La première et la troisième valeur utilisent l'un des mots-clés suivant&nbsp;: `top`, `left`, `bottom`, `right`. Si `left` ou `right` sont utilisés, cela définit la position horizontale. Si `top` ou `bottom` sont utilisés, cela définit la position verticale et l'autre mot-clé définit alors la valeur horizontale.
    - La deuxième et la quatrième valeur sont des longueurs ([`<length>`](/fr/docs/Web/CSS/length)) ou des pourcentages ([`<percentage>`](/fr/docs/Web/CSS/percentage)). La deuxième valeur est le décalage pour le premier mot-clé tandis que la quatrième valeur est le décalage correspondant au deuxième mot-clé.

### À propos des pourcentages

Lorsqu'on exprime un décalage en pourcentage, ce dernier est relatif au conteneur. Ainsi, une valeur de 0% indiquera que le côté gauche (ou haut) du bord de l'image est aligné avec le bord gauche (ou haut) du conteneur. Une valeur de 100% indiquera que le côté droit (ou bas) de l'image d'arrière-plan est alignée avec le bord droit (ou bas) du conteneur. Une valeur de 50% permettra de centrer l'image.

Autrement dit, lorsqu'on utilise un pourcentage, celui-ci s'inscrit dans la formule suivante&nbsp;:

```
(largeur conteneur - largeur image) * (position en %) = (décalage horizontal)
(hauteur conteneur - hauteur image) * (position en %) = (décalage vertical)
```

En utilisant l'axe horizontal pour un exemple, prenons une image dont la largeur mesure 300px, qu'on utilise celle-ci dans un conteneur dont la largeur mesure 100px et que `background-size` vaut `auto`&nbsp;:

```
100px - 300px = -200px (différence entre le conteneur et l'image)
```

Voici donc les décalages, exprimés en pixels, qu'on obtient avec les pourcentages -25%, 0%, 50%, 100% et 125%&nbsp;:

```
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

On notera donc que si l'image d'arrière-plan a les mêmes dimensions que le conteneur, les valeurs en pourcentage pour `background-position` n'auront aucun effet. Il faudra utiliser des valeurs absolues pour décaler l'image.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples utilisant plusieurs images

Dans cet exemple, on a trois éléments jaunes qui ont chacun une étoile située différemment. Le rectangle final possède deux images d'arrière-plan, chacune à une position différente.

#### HTML

```html
<div class="exemple_un">Premier exemple</div>
<div class="exemple_deux">Deuxième exemple</div>
<div class="exemple_trois">Troisième exemple</div>
```

#### CSS

```css
div {
  background-color: #FFEE99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* On utilise la propriété raccourcie background */
.exemple_un {
  background: url("startransparent.gif") #FFEE99 2.5cm bottom no-repeat;
}
.exemple_deux {
  background: url("startransparent.gif") #FFEE99 3em 50% no-repeat;
}

/*
Plusieurs images d'arrière-plan chacune positionnée
différemment, on voit les virgules dans les déclarations.
L'ordre est le même entre background-image et -position.
*/
.exemple_trois {
  background-image: url("startransparent.gif"), url("catfront.png");
  background-position: 0px 0px, center;
}
```

#### Résultat

{{EmbedLiveSample('', 420, 320)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gérer plusieurs arrières-plans](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
- [`background-position-x`](/fr/docs/Web/CSS/background-position-x)
- [`background-position-y`](/fr/docs/Web/CSS/background-position-y)
- [`background-position-inline`](/fr/docs/Web/CSS/background-position-inline)
- [`background-position-block`](/fr/docs/Web/CSS/background-position-block)
- [`transform-origin`](/fr/docs/Web/CSS/transform-origin)
