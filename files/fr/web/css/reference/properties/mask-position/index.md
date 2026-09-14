---
title: Propriété CSS `mask-position`
short-title: mask-position
slug: Web/CSS/Reference/Properties/mask-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-position`** définit la position initiale pour chaque image de masque utilisée. Cette position est relative au calque définit avec la propriété {{CSSxRef("mask-origin")}}.

## Syntaxe

```css
/* Valeurs avec un mot-clé de type <position> */
/* Définit la deuxième valeur à 'center' */
mask-position: left;
mask-position: center;
mask-position: right;
mask-position: top;
mask-position: bottom;

/* Valeurs avec deux mots-clés de type <position> */
mask-position: left center;
mask-position: right top;

/* Une valeur de type <position> en longueur ou pourcentage */
/* Position horizontale. Position verticale définie à 'center' */
mask-position: 25%;
mask-position: 0px;
mask-position: 8em;

/* Deux valeurs de type <position> en longueur ou pourcentage */
/* Première valeur : position horizontale. Deuxième valeur : position verticale */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Décalages par rapport aux bords : Quatre valeurs de type <position> */
mask-position: bottom 10px right 20px;
mask-position: right 3em bottom 10px;
mask-position: bottom 10px right 0;

/* Plusieurs valeurs de type <position> */
mask-position:
  top left,
  bottom 10px right 10px;
mask-position:
  1rem 1rem,
  center;

/* Valeurs globales */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

### Valeurs

Une ou plusieurs valeurs de type `<position>`, séparées par des virgules.

- {{CSSxRef("&lt;position&gt;")}}
  - : Une, deux ou quatre valeurs représentant une position 2D définissant les bords de la boîte de l'élément. Des décalages relatifs ou absolus peuvent être donnés.

## Description

La propriété `mask-position` définit la position de chaque calque de masque. Un élément peut avoir plusieurs calques de masque appliqués. Le nombre de calques est déterminé par le nombre de valeurs séparées par des virgules dans la valeur de la propriété {{CSSxRef("mask-image")}} (même les valeurs `none` créent un calque).

Chaque valeur `mask-position` dans la liste de valeurs séparées par des virgules est associée à un calque de masque correspondant, comme défini par la liste des valeurs `mask-image`, dans l'ordre. Si le nombre de valeurs dans les deux propriétés diffère&nbsp;:

- Si `mask-position` a plus de valeurs que `mask-image`, les valeurs excédentaires de `mask-position` ne sont pas utilisées.
- Si `mask-position` a moins de valeurs que `mask-image`, les valeurs de `mask-position` sont répétées.

Chaque `mask-position` définit la position du calque de masque associé par rapport à la valeur {{CSSxRef("mask-origin")}} associée. Les valeurs de la propriété `mask-origin` sont également associées aux valeurs de `mask-image`, dans l'ordre, les valeurs excédentaires de `mask-position` étant inutilisées ou les valeurs de `mask-position` étant répétées si elles sont moins nombreuses que les valeurs de `mask-origin`. Chaque calque de masque a donc une valeur `mask-origin` et `mask-position` associée.

Si aucun `mask-origin` n'est défini, la valeur par défaut est `padding-box`, ce qui signifie que l'origine de chaque `mask-position` est le [remplissage de la boîte](/fr/docs/Web/CSS/Reference/Values/box-edge#padding-box) de l'élément.

### Syntaxe à une valeur

Si une seule valeur `mask-position` est définie, la deuxième valeur est supposée être `center`. Si la valeur est une `<length>` ou un `<percentage>`, elle définit la position du masque le long de l'axe horizontal, le masque étant centré verticalement dans la boîte d'origine. Par exemple, `mask-position: 0%;` équivaut à `mask-position: 0% center`.

Si vous utilisez un seul mot-clé pour le positionnement, l'autre valeur sera résolue en `center`. La valeur par défaut de `mask-position` est `0% 0%`, ce qui équivaut à `mask-position: top left`. Cependant&nbsp;:

- `mask-position: top;` est équivalent à `mask-position: top center;`.
- `mask-position: left;` est équivalent à `mask-position: center left`.
- `mask-position: center;` est équivalent à `mask-position: center center`.

Si la valeur est une valeur de type {{CSSxRef("&lt;length&gt;")}}, elle représente la position horizontale comme un décalage par rapport au bord gauche du positionnement du masque. Une valeur positive représente un décalage vers l'intérieur à partir du bord gauche du conteneur de la boîte. La position peut être définie en dehors de la boîte de l'élément en utilisant une valeur négative — cela crée un décalage vers l'extérieur qui place l'élément en dehors du bord gauche du conteneur.

#### Valeurs en pourcentage

Une valeur de type {{CSSxRef("&lt;percentage&gt;")}} représente la position horizontale du masque par rapport à la largeur du conteneur, positionnée par rapport au bord gauche. Cependant, le décalage ne se fait pas du bord du masque au bord de la boîte. Au lieu de cela, la dimension de l'image du masque est [soustraite de la dimension du conteneur](/fr/docs/Web/CSS/Reference/Properties/background-position#à_propos_des_pourcentages), puis un pourcentage de la valeur résultante est utilisé comme décalage direct à partir du bord gauche de la boîte, ce qui est identique aux [valeurs en pourcentage pour `background-position`](/fr/docs/Web/CSS/Reference/Properties/background-position#à_propos_des_pourcentages).

L'équation est&nbsp;:

`(dimension du conteneur - dimension du masque) * position en pourcentage = valeur de décalage`

Étant donné un masque de `100px` de large et une boîte d'origine de `1000px` de large, définir `mask-position: 10%;` (l'équivalent de `10% 50%`) entraîne le centrage vertical du masque à `90px` du bord gauche. L'équation est `(1000 - 100) * 10% = 90`. Si le décalage gauche avait été `0%`, le bord gauche du masque serait aligné avec le bord gauche du conteneur (`(1000 - 100) * 0% = 0`).

Si le décalage gauche avait été `100%`, le bord droit du masque serait aligné avec le bord droit du conteneur, car le bord gauche du masque de `100px` de large serait à `900px` (`(1000 - 100) * 100% = 900`) du bord gauche du conteneur (la largeur du masque de `100px` plus la distance de `900px` depuis le bord gauche signifie que le bord droit serait à `1000px` du bord gauche, ce qui correspond au bord droit du conteneur).

### Syntaxe à deux valeurs

Une `<position>` à deux valeurs définit la position de l'image du masque à l'intérieur de sa zone de positionnement, les valeurs de longueur et de pourcentage définissant les décalages par rapport au `left` et au `top` de la zone.

Si les deux valeurs sont des valeurs de type {{CSSxRef("&lt;length&gt;")}}, des valeurs de type {{CSSxRef("&lt;percentage&gt;")}} ou le mot-clé `center`, la première valeur représente la position horizontale comme un décalage par rapport au bord gauche de la zone de positionnement du masque, et la deuxième valeur représente la position verticale comme un décalage par rapport au bord supérieur, avec [les pourcentages étant décalés](#valeurs_en_pourcentage) par la taille du masque dans cette dimension.

De plus, si des valeurs de type {{CSSxRef("&lt;percentage&gt;")}} sont définies, la première valeur représente également la position horizontale par rapport au bord gauche, et la deuxième valeur représente également la position verticale par rapport au bord supérieur.

Une paire de mots-clés spécifiques à un axe peut être réordonnée, tout comme un mot-clé spécifique à un axe et une valeur de longueur ou de pourcentage, mais deux valeurs de longueur ou de pourcentage ne sont pas interchangeables.
Si l'une des deux valeurs est `top`, `right`, `bottom` ou `left`, l'ordre des deux valeurs n'a pas d'importance. Toute valeur `center` ou `<length-percentage>` dans la paire de valeurs sera appliquée à l'autre dimension.

### Syntaxe à quatre valeurs

La syntaxe à quatre valeurs consiste en deux paires de valeurs, chaque paire contenant un mot-clé définissant le bord à partir duquel décaler, et une valeur `<length>` et `<percentage>` définissant la distance de décalage. Par exemple, `mask-position: left 1em top 2em` définit un décalage horizontal de `1em` à partir du bord gauche de la boîte et un décalage vertical de `2em` à partir du bord supérieur. L'équivalent à deux valeurs serait `mask-position: 1em 2em`.

Comme nous définissons les bords de décalage lors de l'utilisation de la syntaxe à quatre valeurs, l'ordre n'a pas d'importance&nbsp;: `mask-position: top 2em left 1em` et `mask-position: left 1em top 2em` produisent le même résultat.

La véritable puissance de la syntaxe à quatre valeurs est qu'elle permet de définir des bords de décalage autres que `left` et `top`. Par exemple, `mask-position:  bottom 10px right 20px` crée un décalage vertical de `10px` vers le haut à partir du bord inférieur et un décalage horizontal de `20px` vers la gauche à partir du bord droit. Habituellement, la syntaxe à quatre valeurs est utilisée pour décaler à partir du bas et/ou de la droite. Mais cette syntaxe est également utile si vous ne vous souvenez pas de l'ordre des bords de décalage pour la syntaxe à deux valeurs.

Une chose à noter est que, contrairement aux valeurs de type `<bg-position>` pour {{CSSxRef("background-position")}}, les valeurs de type `<position>` pour `mask-position` ne permettent pas une syntaxe à 3 valeurs et ne permettent pas de décaler à partir du `center`. Lors du décalage du masque à partir du `bottom` ou du `right`, le `mask-position` nécessite que les quatre valeurs soient déclarées.

Pour que la syntaxe à quatre valeurs soit valide, elle doit définir soit `top` soit `bottom` comme bord de décalage vertical, avec la valeur de décalage verticale en longueur ou en pourcentage, et soit `left` soit `right` comme bord de décalage horizontal, avec la valeur de décalage horizontale en longueur ou en pourcentage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

```html
<section>
  <div></div>
</section>
```

```css
section {
  border: 1px solid black;
  width: 250px;
  height: 250px;
}

div {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  background: blue linear-gradient(red, blue);

  mask-image: url("/shared-assets/images/examples/mask-star.svg");
  mask-repeat: no-repeat;
  mask-position: top right;
}
```

{{EmbedLiveSample("Utilisation simple", "", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-position")}}
- La propriété {{CSSxRef("mask-image")}}
- La propriété {{CSSxRef("mask-origin")}}
- La propriété {{CSSxRef("mask-repeat")}}
- La propriété {{CSSxRef("mask-size")}}
- La propriété raccourcie {{CSSxRef("mask")}}
- La propriété {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("mask-border-outset")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
- La propriété {{CSSxRef("background-position")}}
- Le type de donnée {{CSSxRef("&lt;position&gt;")}}
