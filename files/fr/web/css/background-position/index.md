---
title: background-position
slug: Web/CSS/background-position
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-position
---
{{CSSRef}}

La propriété **`background-position`** permet de définir la position initiale, relative à l'origine définie par {{cssxref("background-origin")}}, pour chaque image d'arrière-plan.

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
background-position: unset;
```

La propriété `background-position` peut être définie grâce à une ou plusieurs valeurs [`<position>`](#<position>), séparées par des virgules.

### Valeurs

- `<position>`

  - : Une valeur {{cssxref("&lt;position&gt;")}}. Une position définit un couple de coordonnées XY qui permet de placer un objet par rapport aux bords de la boîte d'un élément. Une position peut être définie avec une ou deux valeurs.La première correspond à la position horizontale et la seconde à la position verticale.

    **Définition avec une valeur :** la valeur peut être :

    - Le mot-clé `center` qui centre l'image.
    - Un mot-clé parmi `top`, `left`, `bottom`, `right`. Ce mot-clé indique le bord par rapport auquel placer l'élément. Pour l'autre dimension, on utilisera la moitié de la boîte (50%).
    - Une longeur ({{cssxref("&lt;length&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Cette valeur définit l'abscisse du point par rapport au bord gauche. L'ordonnée est fixée à 50%.

    **Définition avec deux valeurs :** la première valeur définit l'abscisse (la coordonnée horizontale X) et la seconde définit l'ordonnée (la coordonnée verticale Y). Chaque valeur peut être :

    - Un des mots-clés parmi `top`, `left`, `bottom`, `right`. Si `left` ou `right` est utilisé, la valeur définit l'abscisse et l'autre définira l'ordonnée. Si `top` ou `bottom` est indiqué, cette valeur définira l'ordonnée et l'autre valeur définira X.
    - Une valeur de longueur ({{cssxref("&lt;length&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Si l'autre valeur vaut `left` ou `right`, cette valeur définira l'ordonnée par rapport au bord haut. Si l'autre valeur est `top` ou `bottom`,  cette valeur définira l'abscisse relativement au bord gauche. Si les deux valeurs sont des longueurs ou des pourcentages, la première définira l'abscisse et la seconde l'ordonnée.

    On notera que :

    - si une valeur est `top` ou `bottom`, la seconde ne peut pas être `top` ou `bottom`.
    - si une valeur est `left` ou `right`, la seconde ne peut pas être `left` ou `right`.

    Autrement dit "`top top"` ou "`left right`" seront considérées comme invalides.

    **À propos des pourcentages :** lorsqu'on exprime un décalage en pourcentage, ce dernier est relatif au conteneur. Ainsi, une valeur de 0% indiquera que le côté gauche (ou haut) du bord de l'image est aligné avec le bord gauche (ou haut) du conteneur. Une valeur de 100% indiquera que le côté droit (ou bas) de l'image d'arrière-plan est alignée avec le bord droit (ou bas) du conteneur. Une valeur de 50% permettra de centrer l'image.

    Autrement dit, lorsqu'on utilise un pourcentage, celui-ci s'inscrit dans la formule suivante :

    `(largeur conteneur - largeur image) * (position en %) = (décalage horizontal)`
    `(hauteur conteneur - hauteur image) * (position en %) = (décalage vertical)`.

    On notera donc que si l'image d'arrière-plan a les mêmes dimensions que le conteneur, les valeurs en pourcentage pour `background-position` n'auront aucun effet. Il faudra utiliser des valeurs absolues pour décaler l'image.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples utilisant plusieurs images

Dans cet exemple, on a trois éléments jaunes qui ont chacun une étoile située différemment. Le rectangle final possède deux images d'arrière-plan, chacune à une position différente.

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
  background: url("https://mdn.mozillademos.org/files/11987/startransparent.gif") #FFEE99 2.5cm bottom no-repeat;
}
.exemple_deux {
  background: url("https://mdn.mozillademos.org/files/11987/startransparent.gif") #FFEE99 3em 50% no-repeat;
}

/*
Plusieurs images d'arrière-plan chacune positionnée
différemment, on voit les virgules dans les déclarations.
L'ordre est le même entre background-image et -position.
*/
.exemple_trois {
  background-image:    url("https://mdn.mozillademos.org/files/11987/startransparent.gif"),
                       url("https://mdn.mozillademos.org/files/7693/catfront.png");
  background-position: 0px 0px,
                       center;
}
```

#### HTML

```html
<div class="exemple_un">Premier exemple</div>
<div class="exemple_deux">Deuxième exemple</div>
<div class="exemple_trois">Troisième exemple</div>
```

#### Résultat

{{EmbedLiveSample('Exemples', 420, 200)}}

## Spécifications

| Spécification                                                                                                        | État                                     | Commentaires                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#background-position', 'background-position')}}             | {{Spec2('CSS3 Backgrounds')}} | La gestion de plusieurs arrières-plans a été ajoutée. La syntaxe avec quatre valeurs a été ajoutée. La définition des valeurs en pourcentages a été modifiée pour correspondre aux implémentations. |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-position', 'background-position')}} | {{Spec2('CSS2.1')}}                 | Cette spécification permet de mélanger les valeurs qui sont des mots-clés, les valeurs de type {{cssxref("&lt;length&gt;")}} et {{cssxref("&lt;percentage&gt;")}}.            |
| {{SpecName('CSS1', '#background-position', 'background-position')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                                                                                                |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.background-position")}}

### Notes relatives à Quantum CSS

- Un bug de Gecko empêche la transition de `background-position` entre deux valeurs qui contiennent différents nombres de valeurs {{cssxref("&lt;position&gt;")}} (par exemple `background-position: 10px 10px;` d'une part et `background-position: 20px 20px, 30px 30px;` d'autre part) (cf. {{bug(1390446)}}). Le nouveau moteur CSS de Firefox (appelé [Quantum CSS](https://wiki.mozilla.org/Quantum) ou [Stylo](https://wiki.mozilla.org/Quantum/Stylo), prévu pour Firefox 57) corrige ce problème.

## Voir aussi

- [Gérer plusieurs arrières-plans](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- {{cssxref("transform-origin")}}
