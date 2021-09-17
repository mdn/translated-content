---
title: background-size
slug: Web/CSS/background-size
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-size
---
{{CSSRef}}

La propriété CSS **`background-size`** définit la taille des images d'arrière-plan pour l'élément. La taille de l'image peut être contrainte, complètement ou partiellement afin de conserver ses proportions.

{{EmbedInteractiveExample("pages/css/background-size.html")}}

> **Note :** L'espace qui n'est pas rempli par l'image d'arrière-plan aura la couleur définie par la propriété {{cssxref("background-color")}}. De plus, la couleur d'arrière-plan sera visible si l'image d'arrière-plan est transparente.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-size: cover;
background-size: contain;

/* Une seule valeur                         */
/* La valeur désigne la largeur de l'image. */
/* La hauteur vaut 'auto'.                  */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Deux valeurs                            */
/* Première valeur : la largeur de l'image */
/* Seconde valeur : la hauteur de l'image  */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Valeurs pour plusieurs arrière-plans */
background-size: auto, auto; /* À ne pas confondre avec `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Valeurs globales */
background-size: inherit;
background-size: initial;
background-size: unset;
```

La propriété `background-size` peut être définie de différentes façons :

- Avec l'un des mots-clés [`contain`](#contain) ou [`cover`](#cover).
- Avec une seule valeur qui indique la largeur de l'image (la hauteur vaut alors [`auto`](#auto) par défaut)
- Avec deux valeurs dont la première représente la largeur et la seconde la hauteur. Chaque valeur peut être une longueur (type {{cssxref("&lt;length&gt;")}}) ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}}) ou encore [`auto`](#auto).

Lorsqu'on souhaite paramétrer la taillle de plusieurs images d'arrière-plan, on peut séparer ces valeurs par des virgules (l'ordre utilisé entre les valeurs suit celui de {{cssxref("background-image")}}).

### Valeurs

- `contain`
  - : Un mot-clé qui redimensionne l'image afin qu'elle soit la plus grande possible et que l'image conserve ses proportions. L'image est contrainte dans le conteneur. Les zones éventuellement vide sont remplies avec la couleur d'arrière-plan (définie grâce à {{cssxref("background-color")}}). Par défaut, l'image est centrée sauf si {{cssxref("background-position")}} a été modifiée.
- `cover`
  - : Un mot-clé dont le comportement est opposé à celui de `contain`. L'image est redimensionnée pour être aussi grande que possible et pour conserver ses proportions. L'image couvre toute la largeur ou la hauteur du conteneur et les parties qui dépassent sont rognées si les proportions du conteneur sont différentes (il n'y aucun espace libre sur lequel on verrait la couleur d'arrière-plan).
- `auto`
  - : Un mot-clé qui redimensionne l'image d'arrière-plan afin que ses proportions soient conservées.
- `<length>`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} qui redimensionne l'image afin que celle-ci occupe la longueur indiquée dans la dimension concernée. Les valeurs négatives ne sont pas autorisées.
- `<percentage>`
  - : Une valeur de type {{cssxref("&lt;percentage&gt;")}} qui redimensionne l'image d'arrière-plan proportionnellement à la taille de la zone dédiée à l'arrière-plan, définie via {{cssxref("background-origin")}}. Par défaut, cette zone correspond à la boîte de contenu et de remplissage (_padding_) mais peut être modifiée pour contenir uniquement la boîte de contenu ou, à l'inverse, les boîtes de contenu, remplissage et marge. Si la propriété {{cssxref("background-attachment")}} vaut `fixed`, la zone de positionnement de l'arrière-plan sera la fenêtre du navigateur (sans les barres de défilement). Les valeurs négatives ne sont pas autorisées.

### Dimensions intrinsèques et proportions

Le calcul des valeurs dépend des dimensions intrinsèques de l'image (sa largeur et sa hauteur) et de ses proportions intrinsèques (le rapport entre la largeur et la hauteur). Voici les différents cas de figures possibles :

- Une image matricielle (telle qu'une image JPG) possède toujours des dimensions intrinsèques et des proportions intrinsèques.
- Une image vectorielle (telle qu'une image SVG) ne possède pas nécessairement de dimensions intrinsèque. Si elle possède à la fois une dimension verticale et une dimension horizontale intrinsèques, elle possèdera alors des proportions intrinsèques. Si elle ne possède qu'une ou aucune dimension intrinsèque, elle peut avoir ou ne pas avoir de proportions.
- Un dégradé CSS (cf. {{cssxref("&lt;gradient&gt;")}}) ne possède ni dimension ni proportion intrinsèque.
- Les images d'arrière-plan créées avec la fonction {{cssxref("element()")}} utiliseront les dimensions et proportions intrinsèques de l'élément générateur.

> **Note :** Le comportement associé aux dégradés (`<gradient>`) a été modifié avec Gecko 8.0 {{geckoRelease("8.0")}}. Auparavant, les dégradés étaient traités comme des images sans dimensions intrinsèques mais avec des proportions intrinsèques identiques à celles de la zone de positionnement de l'arrière-plan.

> **Note :** Pour Gecko, les images d'arrière-plan créées avec la fonction {{cssxref("element()")}} sont actuellement traitées comme des images ayant les dimensions de l'élément ou, si la zone de positionnement est un élément SVG, avec les proportions intrinsèques. Ce comportement n'est pas standard.

Selon le caractère intrinsèque ou non des dimensions et des proportions, la taille d'affichage de l'image d'arrière-plan est calculée de la façon suivante :

- Si les deux composants de `background-size` sont définis et qu'aucun ne vaut `auto` : L'image utilise la taille définie.
- Si `background-size` vaut `contain` ou `cover` : L'image est affichée et ses proportions sont conservées pour que l'image soit contenue dans la zone ou la recouvre complètement. Si l'image ne possède pas de proportions intrinsèques; elle est affichée avec la taille de la zone de positionnement de l'arrière-plan.
- Si `background-size` vaut `auto` ou `auto auto` :

  - Si l'image possède deux dimensions intrinsèques, c'est cette taille qui est utilisée.
  - Si elle ne possède pas de dimension intrinsèque ni de proportion intrinsèque, elle est affichée avec la taille de la zone dédiée à l'arrière-plan.
  - Si elle n'a aucune dimensions mais possède une proportion, elle sera affichée comme si la valeur `contain` avait été utilisée.
  - Si l'image possède une dimension intrinsèque et une proportion, elle est affichée avec cette dimension et cette proportion.
  - Si l'image possède une dimension intrinsèque mais aucune proportion, elle sera affichée avec la dimension intrinsèque et l'autre dimension suivra la taille de la zone pour l'arrière-plan.

  > **Note :** Les images SVG peuvent contenir un attribut [`preserveAspectRatio`](/fr/docs/Web/SVG/Attribute/preserveAspectRatio) pour lequel la valeur par défaut est équivalente à `contain`. Pour Firefox 43, à la différence de Chrome 52, une valeur explicite pour `background-size` permet d'ignorer `preserveAspectRatio`.

- Si `background-size` possède une composante `auto` et que l'autre composante est différente de `auto` :

  - Si l'image possède une proportion intrinsèque, elle sera affichée avec la dimension indiquée et la deuxième sera calculée grâce à la proportion.
  - Si l'image ne possède aucune proportion intrinsèque, la dimension indiquée sera utilisée pour la dimension concernée et on utilisera la dimension intrinsèque de l'image pour l'autre axe si elle existe. Sinon, on prendra la dimension de la zone de l'arrière-plan pour cet axe.

> **Note :** Le dimensionnement des images d'arrière-plan qui sont des images vectorielles sans dimension ou proportion intrinsèque n'est pas implémenté par l'ensemble des navigateur. Attention à bien vérifier le résultat obtenu dans les différents navigateurs par rapport aux règles émises ci-avant.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### `cover`

#### CSS

```css
div {
  height: 300px;
  width: 200px;
  background-color: palegreen;
  background-image: url(https://mdn.mozillademos.org/files/12988/p_201.jpg);
  background-repeat: no-repeat;
}

.exemple_cover {
  background-size: cover;
}
```

#### HTML

```html
<div class="exemple_cover"></div>
```

#### Résultat

{{EmbedLiveSample("cover","200","300")}}

### `contain`

#### CSS

```css
div {
  height: 300px;
  width: 200px;
  background-color: palegreen;
  background-image: url(https://mdn.mozillademos.org/files/12988/p_201.jpg);
  background-repeat: no-repeat;
}

.exemple_cover {
  background-size: contain;
}
```

#### HTML

```html
<div class="exemple_cover"></div>
```

#### Résultat

{{EmbedLiveSample("contain","200","300")}}

### `auto 50%`

#### CSS

```css
div {
  height: 300px;
  width: 200px;
  background-color: palegreen;
  background-image: url(https://mdn.mozillademos.org/files/12988/p_201.jpg);
  background-repeat: no-repeat;
}

.exemple_cover {
  background-size: auto 50%;
}
```

#### HTML

```html
<div class="exemple_cover"></div>
```

#### Résultat

{{EmbedLiveSample("auto_50","200","300")}}

## Notes

Si on utilise un dégradé (`<gradient>`) comme arrière-plan et qu'on définit une valeur associée pour la propriété `background-size`, mieux vaut ne pas définir une taille qui n'utilise qu'un seul composant `auto` ou qu'une seule largeur (par exemple `background-size: 50%`). En effet, le rendu de tels éléments a été modifié avec Firefox 8 et peut avoir un comportement différent entre les navigateurs (tous n'implémentent pas exactement la [spécification CSS3 pour `background-size`](https://www.w3.org/TR/css3-background/#the-background-size) et [la spécification CSS3 pour les images qui sont des dégradés](https://dev.w3.org/csswg/css3-images/#gradients)).

```css
.gradient-exemple {
  width: 50px;
  height: 100px;
  background-image: linear-gradient(blue, red);

  /* Méthode risquée */
  background-size: 25px;
  background-size: 50%;
  background-size: auto 50px;
  background-size: auto 50%;

  /* Sans risque */
  background-size: 25px 50px;
  background-size: 50% 50%;
}
```

On notera qu'il n'est pas recommandé d'utiliser une dimension exprimée en pixels et une autre dimension avec `auto` lorsqu'on manipule des dégradés car il est impossible d'obtenir le même rendu que celui de Firefox pour les versions antérieures à Firefox 8 sans connaître la taille exacte de l'élément dont on définit l'arrière-plan.

## Spécifications

| Spécification                                                                                        | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-size', 'background-size')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.background-size")}}

## Voir aussi

- [Redimensionner les images d'arrière-plan](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)
- [Redimensionner les arrière-plans SVG](/fr/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
