---
title: "@media"
slug: Web/CSS/@media
---

{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/At-rule) **`@media`** permet d'appliquer une partie d'une feuille de styles en fonction du résultat d'une ou plusieurs [requêtes média (<i lang="en">media queries</i>)](/fr/docs/Web/CSS/Media_Queries). Grâce à cette règle, on peut indiquer une requête média et un ensemble de règles CSS qui s'appliquent uniquement si la requête média est vérifiée pour l'appareil, le contexte avec lequel le contenu est consulté.

> **Note :** Il est possible de manipuler la règle @ `@media` via le CSSOM (et JavaScript) grâce à l'interface [`CSSMediaRule`](/fr/docs/Web/API/CSSMediaRule).

## Syntaxe

Une requête média (type `<media-query>`) est composée d'un type de média (optionnel) et/ou de différentes caractéristiques relatives au média. Une requête média peut être imbriquée dans une autre [règle conditionnelle](/fr/docs/Web/CSS/At-rule#les_règles_de_groupe_conditionnelles).

```css
/* Au niveau le plus haut du code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Imbriquée dans une autre règle-@ conditionnelle */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

Pour plus d'informations sur la syntaxe des requêtes média, voir [Utiliser les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries).

## Description

### Types de média

_Les types de média_ décrivent la catégorie générale d'un appareil. Sauf quand on utilise les opérateurs `not` ou `only`, le type de média est optionnel et correspond à `all` par défaut.

- `all`
  - : Applicable à tous les appareils.
- `print`
  - : Destiné pour le contenu paginé et les documents visualisés sur un écran en aperçu d'impression. Voir [la page sur les médias paginés](/fr/docs/Web/CSS/Paged_Media) pour plus d'informations sur les aspects de formatage spécifiques à ces formats.
- `screen`
  - : Destiné principalement aux écrans.

> **Note :** CSS2.1 et [le module de spécification sur les requêtes média de niveau 3](https://drafts.csswg.org/mediaqueries-3/#background) ont défini des types de média supplémentaires (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, et `aural`), mais ceux-ci ont été dépréciés avec [le module de spécification sur les requêtes média de niveau 4](https://dev.w3.org/csswg/mediaqueries/#media-types) et ne devraient donc pas être utilisés.

### Caractéristiques de média

_Les caractéristiques de média_ (<i lang="en">media features</i> en anglais) décrivent des caractéristiques spécifiques de l'agent utilisateur, de l'appareil ou de l'environnement.
Les expressions de caractéristique de média testent la présence ou la valeur de ces caractéristiques et sont optionnelles. Chaque expression de caractéristique de média doit être entourée de parenthèses.

- [`any-hover`](/fr/docs/Web/CSS/@media/any-hover)
  - : Indique si le mécanisme d'entrée permet de survoler les éléments. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`any-pointer`](/fr/docs/Web/CSS/@media/any-pointer)
  - : Indique si un dispositif de pointage est disponible et, le cas échéant, sa précision. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`aspect-ratio`](/fr/docs/Web/CSS/@media/aspect-ratio)
  - : Le facteur de forme largeur/hauteur de la zone d'affichage (<i lang="en">viewport</i>)
- [`color`](/fr/docs/Web/CSS/@media/color)
  - : Le nombre de bits pour chaque composante de couleur sur l'appareil de sortie, ou zéro si l'appareil n'a pas de couleur.
- [`color-gamut`](/fr/docs/Web/CSS/@media/color-gamut)
  - : L'intervalle de couleurs approximatif pris en charge par l'agent utilisateur et l'appareil de sortie. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`color-index`](/fr/docs/Web/CSS/@media/color-index)
  - : Le nombre d'éléments dans le tableau des couleurs de l'appareil de sortie, ou zéro si l'appareil ne dispose pas d'un tel tableau.
- [`device-aspect-ratio`](/fr/docs/Web/CSS/@media/device-aspect-ratio) {{deprecated_inline}}
  - : Le facteur de forme largeur/hauteur de l'appareil de sortie. Dépréciée avec le module de spécification sur les requêtes média de niveau 4.
- [`device-height`](/fr/docs/Web/CSS/@media/device-height) {{deprecated_inline}}
  - : La hauteur de la surface de rendu de l'appareil de sortie. Dépréciée avec le module de spécification sur les requêtes média de niveau 4.
- [`device-width`](/fr/docs/Web/CSS/@media/device-width) {{deprecated_inline}}
  - : La largeur de la surface de rendu de l'appareil de sortie. Dépréciée avec le module de spécification sur les requêtes média de niveau 4.
- [`display-mode`](/fr/docs/Web/CSS/@media/display-mode)
  - : Le mode d'affichage de l'application, tel qu'indiqué par la propriété [`display`](/fr/docs/Web/Manifest#display) du manifeste de l'application. Définie par [la spécification du manifeste des applications web](https://w3c.github.io/manifest/#the-display-mode-media-feature).
- [`dynamic-range`](/fr/docs/Web/CSS/@media/dynamic-range)
  - : Une combinaison de la luminosité, du taux de contraste et de la profondeur de couleur pris en charge par l'agent utilisateur et l'appareil de sortie. Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`forced-colors`](/fr/docs/Web/CSS/@media/forced-colors)
  - : Indique si l'agent utilisateur restreint la palette de couleur utilisée. Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`grid`](/fr/docs/Web/CSS/@media/grid)
  - : Indique si l'appareil utilise un écran matriciel ou avec une grille.
- [`height`](/fr/docs/Web/CSS/@media/height)
  - : La hauteur de la zone d'affichage (<i lang="en">viewport</i>).
- [`hover`](/fr/docs/Web/CSS/@media/hover)
  - : Indique si le mécanisme de saisie primaire permet de survoler les éléments. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`inverted-colors`](/fr/docs/Web/CSS/@media/inverted-colors)
  - : Indique si l'agent utilisateur ou si le système d'exploitation sous-jacent inverse les couleurs. Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`monochrome`](/fr/docs/Web/CSS/@media/monochrome)
  - : Le nombre de bits par pixel pour le tampon d'affichage de l'appareil de sortie s'il est monochrome, zéro sinon.
- [`orientation`](/fr/docs/Web/CSS/@media/orientation)
  - : L'orientation de la zone d'affichage (<i lang="en">viewport</i>).
- [`overflow-block`](/fr/docs/Web/CSS/@media/overflow-block)
  - : Indique s'il est possible de faire défiler le contenu qui dépasse de la zone d'affichage sur l'axe de bloc. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`overflow-inline`](/fr/docs/Web/CSS/@media/overflow-inline)
  - : Indique s'il est possible de faire défiler le contenu qui dépasse de la zone d'affichage sur l'axe en ligne. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`pointer`](/fr/docs/Web/CSS/@media/pointer)
  - : Indique si le mécanisme de saisie principal est un appareil de pointage et, le cas échéant, sa précision. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`prefers-color-scheme`](/fr/docs/Web/CSS/@media/prefers-color-scheme)
  - : Indique si la personne préfère utiliser un thème clair ou un thème sombre. Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`prefers-contrast`](/fr/docs/Web/CSS/@media/prefers-contrast)
  - : Détecte si la personne a demandé une augmentation ou une réduction du contraste entre les couleurs adjacentes. Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`prefers-reduced-motion`](/fr/docs/Web/CSS/@media/prefers-reduced-motion)
  - : Indique la préférence de la personne pour utiliser moins de mouvement sur la page. Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`resolution`](/fr/docs/Web/CSS/@media/resolution)
  - : La densité de pixel de l'appareil de sortie.
- [`scripting`](/fr/docs/Web/CSS/@media/scripting)
  - : Indique la disponibilité d'un moteur de script (par exemple JavaScript). Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`update`](/fr/docs/Web/CSS/@media/update-frequency)
  - : Indique la fréquence à laquelle l'appareil de sortie peut modifier l'apparence du contenu. Ajoutée dans le module de spécification sur les requêtes média de niveau 4.
- [`video-dynamic-range`](/fr/docs/Web/CSS/@media/video-dynamic-range)
  - : Une combinaison de la luminosité, du taux de contraste et de la profondeur de couleur pris en charge par l'agent utilisateur et l'appareil de sortie. Ajoutée dans le module de spécification sur les requêtes média de niveau 5.
- [`width`](/fr/docs/Web/CSS/@media/width)
  - : La largeur de la zone d'affichage (<i lang="en">viewport</i>) en incluant la largeur de la barre de défilement.

### Opérateurs logiques

_Les opérateurs logiques_ `not`, `and`, et `only` peuvent être utilisés pour composer une requête média complexe.
Il est aussi possible de combiner plusieurs requêtes média en une seule règle en les séparant avec des virgules.

- `and`
  - : Cet opérateur permet de combiner plusieurs tests de caractéristiques afin que le résultat du test vaille `true` si chacun des tests individuels vaut `true`. Il permet également de joindre des tests de caractéristiques média et des tests de type de média.
- `not`

  - : Cet opérateur donne la négation d'une requête média, renvoyant `true` si la requête devait renvoyer `false`. Si cet opérateur est présent dans une liste de requêtes séparées par des virgules, la négation portera uniquement sur la requête sur laquelle l'opérateur est appliqué. Si l'opérateur `not` est utilisé, il _est nécessaire_ d'indiquer un type de média.

    > **Note :** Dans la spécification de niveau 3, le mot-clé `not` permet uniquement de prendre la négation d'une requête média entière (et pas d'une caractéristique seule).

- `only`
  - : Applique la mise en forme uniquement si toute la requête correspond. Ce mot-clé est utile pour empêcher les anciens navigateurs d'appliquer les styles en question. Sans utiliser `only`, les anciens navigateurs interpréteraient la requête `screen and (max-width: 500px)` comme `screen`, en ignorant le reste et en appliquant donc le style à tous les écrans. Si l'opérateur `only` est utilisé, il _est nécessaire_ d'indiquer un type de média.
- `,` (virgule)
  - : Les virgules sont utilisées pour combiner plusieurs requêtes média en une seule règle. Chaque requête d'une liste de requêtes séparées par des virgules est traitée séparément des autres. Ainsi, si une des requêtes de la liste vaut `true`, l'ensemble de l'instruction renverra `true`. Autrement dit, la virgule agit comme un opérateur logique `or`.

## Accessibilité

Pour une meilleure interaction, notamment avec les personnes qui zooment sur une page pour accroître la taille du texte ou qui définissent une taille de police par défaut pour l'ensemble du navigateur, on utilisera l'unité [`em`](/fr/docs/Web/CSS/length#em) comme valeur pour [les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries) lorsqu'il faut utiliser une longueur (valeur de type [`<length>`](/fr/docs/Web/CSS/length)).

Les unités [`em`](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#longueur_et_taille) et [`px`](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#longueur_et_taille) sont toutes les deux valides mais [`em`](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#longueur_et_taille) s'adapte mieux quand la taille de la police du navigateur a été ajustée.

On privilégiera, autant que possible, les requêtes média de la spécification de niveau 4 afin d'améliorer l'ergonomie. On pourra, par exemple, se baser sur [`prefers-reduced-motion` afin de détecter si l'utilisateur souhaite minimiser les animations ou les déplacements](/fr/docs/Web/CSS/@media/prefers-reduced-motion).

## Sécurité

Les requêtes média fournissent des informations quant aux capacités de l'appareil avec lequel on navigue. L'ensemble de ces capacités peut être détourné afin de construire une empreinte qui identifie l'appareil ou le catégorise de façon non-désirée.

Pour ces raisons, un navigateur peut choisir de mentir sur les valeurs renvoyées afin de contourner ce pistage. Ainsi, si la détection d'empreinte numérique est désactivée dans Firefox, la plupart des caractéristiques média renverront leurs valeurs par défaut afin d'éviter leur utilisation pour du pistage.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@media print {
  body {
    font-size: 10pt;
  }
}
@media screen {
  body {
    font-size: 13px;
  }
}
@media screen, print {
  body {
    line-height: 1.2;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    line-height: 1.4;
  }
}
```

Avec la mise à jour de la spécification pour les requêtes média, une nouvelle syntaxe, plus concise, peut être utilisée pour les tests d'intervalle :

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

Pour plus d'exemples, voir [Utiliser les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries)
- L'interface CSSOM [`CSSMediaRule`](/fr/docs/Web/API/CSSMediaRule) qui est associée avec cette règle @.
