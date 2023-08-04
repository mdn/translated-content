---
title: Lignes directrices du CSS
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
---

{{MDNSidebar}}

Les directives suivantes couvrent la manière d'écrire les CSS pour les exemples de code MDN.

## Dans cet article

- [Lignes directrices de haut niveau](#high-level_guidelines)

  - [N'utilisez pas de préprocesseurs](#dont_use_preprocessors)
  - [N'utilisez pas de méthodologies CSS spécifiques](#dont_use_specific_css_methodologies)
  - [Utiliser des unités flexibles/relatives](#use_flexiblerelative_units)
  - [Ne pas utiliser de réinitialisation](#dont_use_resets)
  - [Planifiez votre CSS — évitez les surcharges](#plan_your_css_—_avoid_overriding)

- [Style général de codage CSS](#general_css_coding_style)

  - [Utiliser une syntaxe étendue](#use_expanded_syntax)
  - [Privilégiez les règles longues aux règles raccourcies](#favor_longhand_rules_over_terse_shorthand)
  - [Utilisez des guillemets doubles autour des valeurs](#use_double_quotes_around_values)
  - [Espacement autour des paramètres de la fonction](#spacing_around_function_parameters)
  - [Commentaires CSS](#css_comments)
  - [Ne pas utiliser !important](#dont_use_!important)

- [Points de syntaxe CSS spécifiques](#specific_css_syntax_points)

  - [Désactiver les bordures et autres propriétés](#turning_off_borders_and_other_properties)
  - [Utilisez des requêtes média "mobile first"](#use_mobile_first_media_queries)

- [Sélecteurs](#selectors)

  - [N'utilisez pas de sélecteurs ID](#dont_use_id_selectors)
  - [Mettre les sélecteurs multiples sur des lignes séparées](#put_multiple_selectors_on_separate_lines)

## Lignes directrices de haut niveau

### N'utilisez pas de préprocesseurs

N'utilisez pas la syntaxe des préprocesseurs, ex. [Sass](https://sass-lang.com/), [Less](http://lesscss.org/), ou [Stylus,](http://stylus-lang.com/) dans votre code d'exemple MDN. MDN documente le langage CSS classique, et l'utilisation de préprocesseurs ne sert qu'à élever la barre pour comprendre les exemples, ce qui peut potentiellement perdre les lecteurs.

### N'utilisez pas de méthodologies CSS spécifiques

Dans le même esprit que la directive précédente, n'écrivez pas de code d'exemple MDN en utilisant une méthodologie CSS spécifique telle que [BEM](http://getbem.com/naming/) ou [SMACSS](https://smacss.com/). Même s'il s'agit de syntaxe CSS valide, les conventions de dénomination peuvent prêter à confusion pour les personnes qui ne sont pas familières avec ces méthodologies.

### Utiliser des unités flexibles/relatives

Pour une flexibilité maximale sur le plus grand nombre possible d'appareils, il est judicieux de dimensionner les conteneurs, le `padding`, etc. en utilisant des unités relatives comme les `em` et les `rem`, ou des pourcentages et des unités de « viewport » si vous souhaitez qu'ils varient en fonction de la largeur du « viewport ». Vous pouvez en savoir plus à ce sujet dans notre article [Éléments de construction d'un design adaptatif (Responsive Design)](/fr/docs/Learn/CSS/CSS_layout/Responsive_Design#fluid_grids).

### Ne pas utiliser de réinitialisation

Pour un contrôle maximal des CSS sur toutes les plates-formes, beaucoup de gens avaient l'habitude d'utiliser les réinitialisations CSS pour supprimer tous les styles, avant de reconstruire les choses eux-mêmes. Cette méthode a certainement ses mérites, mais surtout dans le monde moderne, les réinitialisations CSS peuvent être excessives et entraîner beaucoup de temps supplémentaire passé à réimplémenter des choses qui n'étaient pas complètement cassées au départ, comme les marges par défaut, les styles de liste, etc.

Si vous avez vraiment envie d'utiliser une réinitialisation, envisagez d'utiliser [normalize.css de Nicolas Gallagher](https://necolas.github.io/normalize.css/), qui vise simplement à rendre les choses plus cohérentes d'un navigateur à l'autre, à se débarrasser de certains désagréments par défaut que nous supprimons toujours (les marges sur `<body>`, par exemple) et à corriger quelques bogues.

### Planifiez votre CSS — évitez les surcharges

Avant de vous lancer dans l'écriture de gros morceaux de CSS, planifiez soigneusement vos styles. Quels styles généraux seront nécessaires, quelles mises en page différentes devrez-vous créer, quelles redéfinitions spécifiques devront être créées et seront-elles réutilisables ? Par-dessus tout, vous devez essayer d'éviter de créer trop de redéfinitions. Si vous vous retrouvez constamment en train d'écrire des styles pour ensuite les annuler quelques règles plus bas, vous devez probablement repenser votre stratégie.

## Style général de codage CSS

### Utiliser une syntaxe étendue

Vous pouvez utiliser différents styles d'écriture CSS, mais nous préférons le style étendu, avec le sélecteur/l'accolade ouvrante, l'accolade fermante et chaque déclaration sur une ligne distincte. Cela optimise la lisibilité et favorise la cohérence sur le MDN.

Utilisez ceci :

```css example-good
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

Pas cela :

```css-nolint example-bad
p { color: white; background-color: black; padding: 1rem; }
```

En outre, gardez ces spécificités à l'esprit :

- Insérez un espace entre le(s) sélecteur(s) et l'accolade ouvrante.
- Incluez toujours un point-virgule à la fin de la dernière déclaration, même si ce n'est pas strictement nécessaire.
- Mettez l'accolade de fermeture sur une nouvelle ligne.
- Dans chaque déclaration, mettez un espace après les deux points de séparation, mais pas avant.
- Utilisez 2 espaces pour l'indentation du code.

### Privilégiez les règles longues aux règles raccourcies

En général, lorsque vous enseignez les spécificités de la syntaxe CSS, il est plus clair et plus évident d'utiliser des propriétés longues plutôt que des raccourcies (à moins bien sûr que l'enseignement du raccourci ne soit le but de l'exemple). N'oubliez pas que les exemples du MDN ont pour but d'enseigner aux gens, et non d'être efficaces ou astucieuses.

Tout d'abord, il est souvent plus difficile de comprendre ce que fait le raccourci. Il faut un certain temps pour comprendre exactement ce que fait la syntaxe [`font`](/fr/docs/Web/CSS/font), par exemple :

```css
font: small-caps bold 2rem/1.5 sans-serif;
```

Alors que celle-ci est plus immédiate en termes de compréhension :

```css
font-variant: small-caps;
font-weight: bold;
font-size: 2rem;
line-height: 1.5;
font-family: sans-serif;
```

Deuxièmement, les raccourcis CSS comportent des pièges potentiels supplémentaires : des valeurs par défaut sont définies pour des parties de la syntaxe que vous n'avez pas explicitement définies, ce qui peut produire des réinitialisations inattendues des valeurs que vous avez définies plus tôt dans la cascade, ou d'autres effets attendus. Par exemple, la propriété [`grid`](/fr/docs/Web/CSS/grid) définit toutes les valeurs par défaut suivantes pour les éléments qui ne sont pas spécifiés :

- [`grid-template-rows`](/fr/docs/Web/CSS/grid-template-rows): `none`
- [`grid-template-columns`](/fr/docs/Web/CSS/grid-template-columns): `none`
- [`grid-template-areas`](/fr/docs/Web/CSS/grid-template-areas): `none`
- [`grid-auto-rows`](/fr/docs/Web/CSS/grid-auto-rows): `auto`
- [`grid-auto-columns`](/fr/docs/Web/CSS/grid-auto-columns): `auto`
- [`grid-auto-flow`](/fr/docs/Web/CSS/grid-auto-flow): `row`
- [`column-gap`](/fr/docs/Web/CSS/column-gap): `0`
- [`row-gap`](/fr/docs/Web/CSS/row-gap): `0`
- [`column-gap`](/fr/docs/Web/CSS/column-gap): `normal`
- [`row-gap`](/fr/docs/Web/CSS/row-gap): `normal`

En outre, certains raccourcis ne fonctionnent comme prévu que si vous incluez les différents composants de la valeur dans un certain ordre. Dans les animations CSS, par exemple :

```css
/* duration | timing-function | delay | iteration-count
   direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;
```

À titre d'exemple, la première valeur qui peut être analysée comme un [`<time>`](/fr/docs/Web/CSS/time) est affecté à la propriété [`animation-duration`](/fr/docs/Web/CSS/animation-duration), et la seconde est affectée à [`animation-delay`](/fr/docs/Web/CSS/animation-delay). Pour plus de détails, lisez l'intégralité de [syntaxe de l'animation](/fr/docs/Web/CSS/animation#syntax).

### Utilisez des guillemets doubles autour des valeurs

Lorsque des guillemets peuvent ou doivent être inclus, utilisez-les, et utilisez des guillemets doubles. Par exemple :

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

### Espacement autour des paramètres de la fonction

Les paramètres des fonctions doivent comporter des espaces après les virgules de séparation, mais pas avant :

```css example-good
color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);
```

### Commentaires CSS

Utilisez des commentaires de style CSS pour commenter le code qui n'est pas auto-documenté :

```css example-good
/* Il s'agit d'un commentaire de style CSS */
```

Mettez vos commentaires sur des lignes séparées précédant le code auquel ils se réfèrent :

```css example-good
h3 {
  /* Crée une ombre portée rouge, décalée de 1px vers la droite et le bas, avec un rayon de flou de 2px. */
  text-shadow: 1px 1px 2px red;
  /* Définit la taille de la police au double de la taille de la police du document par défaut. */
  font-size: 2rem;
}
```

Notez également que vous devez laisser un espace entre les astérisques et le commentaire, dans chaque cas.

### Ne pas utiliser !important

`!important` est un dernier recours généralement utilisé uniquement lorsque vous devez remplacer quelque chose et qu'il n'y a pas d'autre moyen. Il s'agit d'une mauvaise pratique que vous devez éviter dans la mesure du possible.

Mauvais usage :

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## Points de syntaxe CSS spécifiques

### Désactiver les bordures et autres propriétés

Lorsque vous désactivez les bordures (et toute autre propriété qui peut prendre `0` ou `none` comme valeurs), utilisez `0` plutôt que `none` :

```css example-good
border: 0;
```

### Utilisez des requêtes média "mobile first"

Lorsque vous incluez différents ensembles de styles pour différentes tailles de fenêtres d'affichage à l'aide de requêtes de médias dans la même feuille de style, il est judicieux de faire en sorte que le style par défaut avant l'application de toute requête de médias au document soit le style pour écran étroit/mobile, puis de le remplacer pour les fenêtres d'affichage plus larges dans des requêtes de médias successives.

```css example-good
/* Mise en page CSS par défaut pour les écrans étroits */

@media (min-width: 480px) {
  /* CSS pour les écrans de largeur moyenne */
}

@media (min-width: 800px) {
  /* CSS pour les écrans larges */
}

@media (min-width: 1100px) {
  /* CSS pour les écrans très larges */
}
```

Cela présente de nombreux avantages, exposés dans notre article [Priorité aux mobiles](/fr/docs/Web/Progressive_web_apps/Responsive/Mobile_first).

## Sélecteurs

### N'utilisez pas de sélecteurs ID

Il n'est pas vraiment nécessaire d'utiliser des sélecteurs d'ID - ils sont moins flexibles (vous ne pouvez pas en ajouter d'autres si vous découvrez que vous en avez besoin de plus d'un), et il est plus difficile de les remplacer si nécessaire, car ils sont plus spécifiques que les classes.

Bonne pratique :

```css example-good
.editorial-summary {
  ...
}
```

Mauvaise pratique :

```css example-bad
#editorial-summary {
  ...
}
```

### Mettre les sélecteurs multiples sur des lignes séparées

Lorsqu'une règle comporte plusieurs sélecteurs, placez chaque sélecteur sur une nouvelle ligne. La liste des sélecteurs est ainsi plus facile à lire et les lignes de code sont plus courtes.

Faites ceci :

```css example-good
h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}
```

Pas ça :

```css-nolint example-bad
h1, h2, h3 {
  font-family: sans-serif;
  text-align: center;
}
```

## De bons exemples de CSS sur MDN

Vous pouvez trouver de bons extraits CSS concis et significatifs en haut de nos pages de référence des propriétés CSS - parcourez notre [index des mots-clés CSS](/fr/docs/Web/CSS/Reference#keyword_index) pour en trouver. Nos exemples interactifs sont généralement écrits pour suivre les directives ci-dessus, mais sachez qu'ils peuvent différer à certains endroits, car ils ont pour la plupart été écrits avant la nouvelle rédaction des directives.
