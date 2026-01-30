---
title: background-size
slug: Web/CSS/Reference/Properties/background-size
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-size`** définit la taille de l'image d'arrière-plan de l'élément.
L'image peut conserver sa taille naturelle, être étirée ou ajustée pour occuper l'espace disponible.

Les espaces non couverts par une image d'arrière-plan sont remplis avec la propriété {{CSSxRef("background-color")}} et la couleur d'arrière-plan sera visible derrière les images d'arrière-plan qui comportent de la transparence ou de la translucidité.

{{InteractiveExample("Démonstration CSS&nbsp;: background-size")}}

```css interactive-example-choice
background-size: contain;
```

```css interactive-example-choice
background-size: contain;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-size: cover;
```

```css interactive-example-choice
background-size: 30%;
```

```css interactive-example-choice
background-size: 200px 100px;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/hand.jpg");
  min-width: 100%;
  min-height: 100%;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-size: cover;
background-size: contain;

/* Une seule valeur */
/* La largeur de l'image (la hauteur vaut 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Deux valeurs */
/* Première valeur : la largeur / Seconde valeur : la hauteur  */
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
background-size: revert;
background-size: revert-layer;
background-size: unset;
```

La propriété `background-size` peut être définie de différentes façons&nbsp;:

- En utilisant les valeurs de mot-clé `contain` ou `cover`.
- En utilisant uniquement une valeur de largeur, auquel cas la hauteur vaut `auto` par défaut.
- En utilisant à la fois une valeur de largeur et une valeur de hauteur, auquel cas la première définit la largeur et la seconde définit la hauteur.
  Chaque valeur peut être une {{CSSxRef("&lt;length&gt;")}}, une {{CSSxRef("&lt;percentage&gt;")}}, ou `auto`.

Pour définir la taille de plusieurs images d'arrière-plan, séparez la valeur de chacune par une virgule.

### Valeurs

- `contain`
  - : Redimensionne l'image pour qu'elle soit aussi grande que possible dans son conteneur sans rogner ni déformer l'image.
    Si le conteneur est plus grand que l'image, cela provoque un pavage de l'image, sauf si la propriété {{CSSxRef("background-repeat")}} vaut `no-repeat`.
- `cover`
  - : Redimensionne l'image (en conservant ses proportions) à la plus petite taille possible pour remplir le conteneur (c'est-à-dire&nbsp;: sa hauteur et sa largeur recouvrent entièrement _le conteneur_), sans laisser d'espace vide.
    Si les proportions de l'arrière-plan diffèrent de celles de l'élément, l'image est rognée verticalement ou horizontalement.
- `auto`
  - : Redimensionne l'image d'arrière-plan dans la direction concernée de façon à conserver ses proportions intrinsèques.
- {{CSSxRef("&lt;length&gt;")}}
  - : Étire l'image dans la dimension concernée à la longueur indiquée. Les valeurs négatives ne sont pas autorisées.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Étire l'image dans la dimension concernée au pourcentage indiqué de la _zone de positionnement de l'arrière-plan_.
    La zone de positionnement de l'arrière-plan est déterminée par la valeur de {{CSSxRef("background-origin")}} (par défaut, la boîte de remplissage).
    Cependant, si la propriété {{CSSxRef("background-attachment")}} de l'arrière-plan vaut `fixed`, la zone de positionnement est alors l'ensemble de la {{Glossary("viewport", "zone d'affichage")}}.
    Les valeurs négatives ne sont pas autorisées.

### Dimensions intrinsèques et proportions

Le calcul des valeurs dépend des dimensions intrinsèques de l'image (sa largeur et sa hauteur) et de ses proportions intrinsèques (le rapport entre la largeur et la hauteur). Voici les différents cas de figures possibles&nbsp;:

- Une image matricielle (telle qu'une image JPG) possède toujours des dimensions intrinsèques et des proportions intrinsèques.
- Une image vectorielle (telle qu'une image SVG) ne possède pas nécessairement de dimensions intrinsèques.
  Si elle possède à la fois une dimension verticale et une dimension horizontale intrinsèques, elle possèdera alors des proportions intrinsèques.
  Si elle ne possède qu'une ou aucune dimension intrinsèque, elle peut avoir ou ne pas avoir de proportions.
- Les {{CSSxRef("gradient")}} CSS n'ont pas de dimensions intrinsèques ni de proportions intrinsèques.
- Les images d'arrière-plan créées avec la fonction {{CSSxRef("element()")}} utilisent les dimensions et proportions intrinsèques de l'élément générateur.

> [!NOTE]
> Pour Gecko, les images d'arrière-plan créées avec la fonction {{CSSxRef("element()")}} sont actuellement traitées comme des images ayant les dimensions de l'élément ou, si la zone de positionnement est un élément SVG, avec les proportions intrinsèques. Ce comportement n'est pas standard.

Selon le caractère intrinsèque ou non des dimensions et des proportions, la taille d'affichage de l'image d'arrière-plan est calculée de la façon suivante&nbsp;:

- **Si les deux composants de `background-size` sont définis et qu'aucun ne vaut `auto`&nbsp;:** L'image utilise la taille définie.
- **Si `background-size` vaut `contain` ou `cover`&nbsp;:** L'image est affichée et ses proportions sont conservées pour que l'image soit contenue dans la zone ou la recouvre complètement.
  Si l'image ne possède pas de proportions intrinsèques&nbsp;; elle est affichée avec la taille de la zone de positionnement de l'arrière-plan.
- **Si `background-size` vaut `auto` ou `auto auto`&nbsp;:**
  - Si l'image possède deux dimensions intrinsèques, c'est cette taille qui est utilisée.
  - Si elle ne possède pas de dimension intrinsèque ni de proportion intrinsèque, elle est affichée avec la taille de la zone dédiée à l'arrière-plan.
  - Si elle n'a aucune dimension mais possède une proportion, elle sera affichée comme si la valeur `contain` avait été utilisée.
  - Si l'image possède une dimension intrinsèque et une proportion, elle est affichée avec cette dimension et cette proportion.
    L'autre dimension est calculée à partir de la dimension indiquée et des proportions intrinsèques.
  - Si l'image possède une dimension intrinsèque mais aucune proportion, elle sera affichée avec la dimension intrinsèque et l'autre dimension suivra la taille de la zone pour l'arrière-plan.

  > [!NOTE]
  > Les images SVG peuvent contenir un attribut [`preserveAspectRatio`](/fr/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) pour lequel la valeur par défaut est équivalente à `contain`. Une valeur explicite pour `background-size` permet d'ignorer `preserveAspectRatio`.

- **Si `background-size` possède une composante `auto` et que l'autre composante est différente de `auto`&nbsp;:**
  - Si l'image possède une proportion intrinsèque, elle sera affichée avec la dimension indiquée et la deuxième sera calculée grâce à la proportion.
  - Si l'image ne possède aucune proportion intrinsèque, la dimension indiquée sera utilisée pour la dimension concernée et on utilisera la dimension intrinsèque de l'image pour l'autre axe si elle existe. Sinon, on prendra la dimension de la zone de l'arrière-plan pour cet axe.

> [!NOTE]
> Le dimensionnement des images d'arrière-plan qui sont des images vectorielles sans dimension ou proportion intrinsèque n'est pas implémenté par l'ensemble des navigateurs.
> Attention à bien vérifier le résultat obtenu dans les différents navigateurs par rapport aux règles émises ci-avant.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Réaliser un pavage

Prenons une image d'une taille qui ne correspond pas forcément à notre document cible. Ici, on a une image de 189x189 pixels et on souhaite réaliser un pavage avec quatre exemplaires de l'image dans un élément qui mesure 300x300 pixels. Pour cela, on fixe la valeur de `background-size` à 150 pixels.

#### HTML

```html
<div class="tiledBackground"></div>
```

#### CSS

```css
.tiledBackground {
  background-image: url("https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png");
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Réaliser un pavage", 340, 340)}}

Voir [Redimensionner des images d'arrière-plan](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Redimensionner les images d'arrière-plan](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [Redimensionner les arrière-plans SVG](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
- La propriété {{CSSxRef("object-fit")}}
