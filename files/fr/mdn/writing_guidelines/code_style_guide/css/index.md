---
title: Guide pour rédiger des exemples de code CSS
short-title: Exemples CSS
slug: MDN/Writing_guidelines/Code_style_guide/CSS
original_slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
l10n:
  sourceCommit: 359d3c9cea9b2caa691c63ed3b01714ad4416372
---

Les consignes suivantes expliquent comment rédiger des exemples de code CSS pour MDN Web Docs.

## Lignes directrices générales pour les exemples de code CSS

### Choisir un format

Les opinions sur l'indentation correcte, les espaces et la longueur des lignes ont toujours été controversées. Les discussions sur ces sujets détournent de la création et de la maintenance du contenu.

Sur MDN Web Docs, nous utilisons [Prettier <sup>(angl.)</sup>](https://prettier.io/) comme formateur de code pour garder un style cohérent (et éviter les discussions hors sujet). Vous pouvez consulter notre [fichier de configuration <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/.prettierrc.json) pour connaître les règles actuelles, et lire la [documentation de Prettier <sup>(angl.)</sup>](https://prettier.io/docs/index.html).

Prettier formate tout le code et maintient un style cohérent. Cependant, il existe quelques règles supplémentaires à suivre.

### Planifiez votre CSS

Avant de vous lancer dans l'écriture de gros morceaux de CSS, planifiez soigneusement vos styles. Quels styles généraux seront nécessaires, quelles mises en page différentes devrez-vous créer, quelles redéfinitions spécifiques devront être créées et seront-elles réutilisables&nbsp;? Par-dessus tout, vous devez essayer d'**éviter trop de redéfinitions**. Si vous vous retrouvez constamment à écrire des styles pour ensuite les annuler quelques règles plus bas, vous devez probablement repenser votre stratégie.

### Utilisez les fonctionnalités CSS modernes lorsque c'est possible

Vous pouvez utiliser de nouvelles fonctionnalités dès lors que tous les principaux navigateurs — Chrome, Edge, Firefox et Safari — les prennent en charge (c'est-à-dire {{Glossary("Baseline")}}).

Cette règle ne s'applique pas à la fonctionnalité CSS documentée sur la page (qui est dictée par les [critères d'inclusion](/fr/docs/MDN/Writing_guidelines/Criteria_for_inclusion)). Par exemple, vous pouvez documenter des fonctionnalités [non standard ou expérimentales](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) et écrire des exemples complets montrant leur comportement, mais vous devez éviter d'utiliser ces fonctionnalités dans les démos d'autres fonctionnalités non liées, comme une API Web.

### Suivez les bonnes pratiques courantes

Il existe des principes universellement reconnus qu'il n'est pas nécessaire d'énumérer ici&nbsp;:

- Assurez-vous que votre code ne comporte pas d'erreurs de syntaxe, ce qui peut entraîner l'[ignorance de la propriété ou de la déclaration](/fr/docs/Web/CSS/CSS_syntax/Error_handling). Une syntaxe standard non encore implémentée est acceptable, si elle respecte notre [règle générale sur les fonctionnalités CSS modernes](#utilisez_les_fonctionnalités_css_modernes_lorsque_cest_possible).
- N'utilisez pas de fonctionnalités [non standard, obsolètes ou dépréciées](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete). Cette règle s'étend aux [fonctionnalités préfixées](/fr/docs/Glossary/Vendor_Prefix#préfixes_css)&nbsp;: utilisez l'alternative préfixée _uniquement si_ la fonctionnalité standard n'est pas disponible (voir notre [règle générale sur les fonctionnalités CSS modernes](#utilisez_les_fonctionnalités_css_modernes_lorsque_cest_possible)). Si le lecteur a besoin d'une compatibilité plus large, il peut soit ajouter lui-même le préfixe de repli, soit utiliser un postprocesseur CSS.
- N'écrivez pas de code redondant ou non fonctionnel, ce qui est souvent le signe de bogues ou de restes de refactorisation. Cela inclut les propriétés répétées dans une déclaration, les déclarations vides, les commentaires vides ou les sélecteurs qui ne correspondent à aucun élément.

### N'utilisez pas de préprocesseurs

N'utilisez pas la syntaxe des préprocesseurs, comme [Sass <sup>(angl.)</sup>](https://sass-lang.com/), [Less <sup>(angl.)</sup>](https://lesscss.org/) ou [Stylus <sup>(angl.)</sup>](https://stylus-lang.com/), dans les exemples de code. Sur MDN Web Docs, nous documentons le langage CSS classique. L'utilisation de préprocesseurs ne fait qu'élever le niveau de compréhension nécessaire pour les exemples, ce qui peut potentiellement perdre les lecteurs.

### N'utilisez pas de méthodologies CSS spécifiques

Dans le même esprit que la directive précédente, n'écrivez pas de code d'exemple MDN en utilisant une méthodologie CSS spécifique telle que [BEM <sup>(angl.)</sup>](https://getbem.com/naming/) ou [SMACSS <sup>(angl.)</sup>](https://smacss.com/). Même s'il s'agit de syntaxe CSS valide, les conventions de nommage peuvent prêter à confusion pour les personnes qui ne sont pas familières avec ces méthodologies.

### N'utilisez pas de réinitialisation

Pour un contrôle maximal des CSS sur toutes les plates-formes, beaucoup de gens avaient l'habitude d'utiliser les réinitialisations CSS pour supprimer tous les styles, avant de reconstruire les choses eux-mêmes. Cette méthode a ses mérites, mais surtout dans le monde moderne, les réinitialisations CSS peuvent être excessives et entraîner beaucoup de temps supplémentaire passé à réimplémenter des choses qui n'étaient pas complètement cassées au départ, comme les marges par défaut, les styles de liste, etc.

### Syntaxe formelle et pseudo-code

La syntaxe formelle fait partie intégrante de la documentation CSS sur MDN (voir par exemple la section [Syntaxe formelle](/fr/docs/Web/CSS/Reference/Properties/background-image#syntaxe_formelle) de la page de la propriété `background-image`). Comme de nombreux développeur·euse·s sont familiers avec cette présentation, il est acceptable d'écrire du pseudo-code dans un style proche de la syntaxe formelle dans les descriptions et exemples. Cependant, tout code qui n'est pas du CSS syntaxiquement valide ne doit pas être marqué comme CSS. Les erreurs de syntaxe dans les blocs de code `css` rendent le code inanalysable par les vérificateurs statiques, troublent les lecteurs qui s'attendent à du CSS valide, et peuvent même entraîner une coloration syntaxique incohérente. Marquez alors votre bloc comme `plain`, ou utilisez la macro `CSSSyntaxRaw` pour afficher la syntaxe formelle complète.

N'écrivez pas de descriptions comme ceci (ce n'est pas une vraie syntaxe formelle, juste du pseudo-CSS avec des espaces réservés)&nbsp;:

````md example-bad
La propriété `border` a la forme générale suivante&nbsp;:

```css
border: <border-width> <border-style> <border-color>;
```
````

Utilisez plutôt `plain`&nbsp;:

````md example-good
La propriété `border` a la forme générale suivante&nbsp;:

```plain
border: <border-width> <border-style> <border-color>;
```
````

Ou, si cela vous semble approprié, écrivez la syntaxe formelle réelle avec la macro `CSSSyntaxRaw`&nbsp;:

```md example-good
La propriété `border` se définit comme une largeur de ligne, un style de ligne et une couleur, dans n'importe quel ordre&nbsp;:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

De plus, une seule valeur n'est pas du CSS syntaxiquement valide. Le code CSS requiert au minimum une propriété et sa valeur. Si vous documentez la fonction `rgb()`, écrivez ceci&nbsp;:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

N'utilisez pas ce style&nbsp;:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Notez que cette règle ne s'applique pas au premier bloc de code de la section «&nbsp;Syntaxe&nbsp;», qui est régi par [les sections de syntaxe](/fr/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax), et qui exige que les fonctions soient écrites sans le nom de la propriété.

## Animations

### Sélecteurs de `keyframes`

Lorsque vous définissez des keyframes, les sélecteurs `0%` et `100%` peuvent aussi être écrits comme `from` et `to`. Si une règle `@keyframes` _ne contient que_ ces deux sélecteurs, utilisez `from` et `to` à la place de `0%` et `100%`. Cela rend votre code plus sémantique.

Évitez donc ceci&nbsp;:

```css example-bad
@keyframes example {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

Utilisez plutôt `from` et `to`&nbsp;:

```css example-good
@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

En revanche, si votre règle `@keyframes` contient plus que les frames de début et de fin, utilisez les sélecteurs `0%` et `100%` pour l'uniformité.

```css example-good
@keyframes example {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
```

## Cascade, propriétés et sélecteurs

### Gestion de la spécificité

Si possible, évitez les surprises liées à l'augmentation ou la diminution de la spécificité, comme l'utilisation excessive de la pseudo-classe [`:where()`](/fr/docs/Web/CSS/Reference/Selectors/:where) ou la duplication de sélecteurs. Privilégiez plutôt les techniques suivantes pour gérer la spécificité&nbsp;:

- Modifier l'ordre des déclarations pour tirer parti de la cascade
- Réorganiser les propriétés dans chaque déclaration afin qu'elles ne se surchargent pas mutuellement
- Utiliser des sélecteurs d'ID, uniquement si l'attribut HTML [`id`] est justifié ([voir plus bas](#utiliser_les_sélecteurs_de_classe))

### !important

`!important` est un dernier recours, généralement utilisé uniquement lorsque vous devez surcharger quelque chose et qu'il n'y a pas d'autre moyen. L'utilisation de `!important` est une mauvaise pratique à éviter autant que possible.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Ordre des déclarations

En général, lorsque deux déclarations ciblent le(s) même(s) élément(s), celle avec la plus grande spécificité doit apparaître plus bas dans la feuille de style.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

À l'intérieur d'une déclaration, regroupez de préférence les propriétés liées (dimensionnement, positionnement, couleur, etc.). Les propriétés personnalisées doivent être déclarées en haut du bloc de déclaration pour permettre une identification rapide de toutes les propriétés disponibles.

### Lignes vides

Les lignes vides entre les blocs de déclaration sont recommandées. Vous pouvez les supprimer si les déclarations consécutives sont très liées, comme des variantes d'une même classe utilitaire.

Les lignes vides entre les propriétés doivent être utilisées avec parcimonie. Ajoutez-les uniquement lorsque chaque groupe de propriétés forme un bloc sémantique clair.

### Propriétés raccourcies

- Si _toutes_ les propriétés constitutives d'une propriété raccourcie reçoivent une valeur non par défaut, utilisez la propriété raccourcie à la place des propriétés longues. Cela rend votre code plus court et plus lisible.

  Remplacez ces propriétés longues&nbsp;:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  par leur raccourci correspondant&nbsp;:

  ```css example-good
  margin: 1em 2em;
  ```

- Si seulement _certaines_ propriétés constitutives d'une propriété raccourcie reçoivent une valeur non par défaut, l'utilisation de la propriété raccourcie est optionnelle. Les deux exemples suivants sont acceptables&nbsp;:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Utilisez la syntaxe raccourcie la plus courte possible. Écrivez ceci&nbsp;:

  ```css example-good
  margin: 1em;
  ```

  Évitez ceci&nbsp;:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Rédigez les propriétés raccourcies dans l'[ordre canonique](/fr/docs/Glossary/Canonical_order). Écrivez ceci&nbsp;:

  ```css example-good
  /* largeur style couleur */
  border: 1px solid red;
  ```

  N'écrivez pas ceci&nbsp;:

  ```css example-bad
  border: solid red 1px;
  ```

- Pour chaque propriété raccourcie, utilisez-la ou ses propriétés longues constitutives, mais jamais un mélange des deux, car la relation de surcharge est complexe et source de bugs. Évitez ceci&nbsp;:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Oups, margin-top est ignoré */

  border-width: 1px;
  border-bottom-width: 5px; /* Ne surcharge qu'une largeur de bordure */
  ```

### Utiliser les sélecteurs de classe

En général, privilégiez les [sélecteurs de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors) (et utilisez `class` au lieu de `id` dans votre HTML). Ils sont composables&nbsp;: plusieurs éléments peuvent utiliser la même classe, et la même classe peut être utilisée pour plusieurs éléments.

```css example-good
.footnote {
  /* ... */
}
```

```css example-bad
#footnote {
  /* ... */
}
```

Utilisez les classes pour la mise en forme, et réservez les ID à des usages non CSS, comme pour le JavaScript ou pour créer des ancres uniques (`<a href="#section1">`). Si l'utilisation d'un ID est justifiée, vous pouvez l'utiliser comme sélecteur, notamment pour [gérer la spécificité](#gestion_de_la_spécificité).

### Anciens sélecteurs de pseudo-éléments

Les pseudo-éléments `::before`, `::after`, `::first-letter` et `::first-line` peuvent aussi s'écrire avec un seul deux-points (comme `:before`). Évitez la syntaxe à un seul deux-points car elle est déconseillée et pourrait être confondue avec une [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`) par les lecteurs.

### Listes de sélecteurs complexes

Les pseudo-classes `:is()`, `:where()` et `:not()` acceptent des [listes de sélecteurs complexes](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#sélecteurs_complexes). Utilisez-les pour raccourcir vos sélecteurs.

Écrivez ceci&nbsp;:

```css example-good
input:not(:checked, :disabled) {
  /* ... */
}
```

N'écrivez pas ceci&nbsp;:

```css example-bad
input:not(:checked):not(:disabled) {
  /* ... */
}
```

## Casse

Par défaut, tous les identifiants doivent être en minuscules. Cela s'applique aux sélecteurs, fonctions et mots-clés. Les identifiants personnalisés doivent utiliser le [kebab-case](/fr/docs/Glossary/Kebab_case), comme `--custom-property` ou `my-animation`. Consultez le [guide de style HTML](/fr/docs/MDN/Writing_guidelines/Code_style_guide/HTML#convention_de_casse_sur_mdn) pour les conventions de casse des identifiants et classes HTML référencés comme sélecteurs CSS.

Des exceptions existent pour les mots-clés définis dans SVG, qui pour des raisons historiques sont en [camelCase](/fr/docs/Glossary/Camel_case), et doivent être écrits ainsi pour la lisibilité. Ces mots-clés incluent&nbsp;: [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor), les valeurs de {{CSSxRef("text-rendering")}}, {{CSSxRef("shape-rendering")}}, {{CSSxRef("pointer-events")}} et {{CSSxRef("color-interpolation-filters")}}.

## Couleurs

### Choisir une notation

En général, si la palette de couleurs précise n'est pas importante, privilégiez les noms de couleurs courants. Par exemple, utilisez `black` au lieu de `rgb(0 0 0)` ou `#000000`, et `green` au lieu de `chartreuse`.

Si une couleur précise est nécessaire, privilégiez la notation `rgb()`. `hsl()` et d'autres fonctions ne doivent être utilisées que si la représentation a un sens particulier (par exemple, une roue chromatique ou un dégradé). La notation hexadécimale est plus concise mais parfois moins lisible&nbsp;; elle est interchangeable avec `rgb()` selon ce qui est le plus pratique.

Quelle que soit la fonction couleur utilisée, employez toujours la syntaxe moderne (`rgb(31 41 59 / 0.26)`), et non l'ancienne syntaxe à virgules. Utilisez toujours la fonction sans le suffixe `a` (`rgb` au lieu de `rgba`), car c'est plus court et cela évite de devoir changer le nom si vous ajoutez ou retirez un canal alpha.

En notation hexadécimale, utilisez toujours la version à six (ou huit) chiffres pour éviter la charge cognitive&nbsp;: `#aabbcc` plutôt que `#abc`.

### Paramètres de couleur

Pour la cohérence, tous les paramètres doivent par défaut être des nombres plutôt que des pourcentages ou des degrés. Cela vaut aussi pour le canal alpha. Toutefois, si une représentation spécifique a du sens (par exemple dans les animations, dégradés ou calculs), utilisez le type adapté au contexte.

Si le canal alpha vaut `1`, omettez-le. Écrivez `rgb(31 41 59)` plutôt que `rgb(31 41 59 / 1)`.

### Choix des couleurs

En plus de la recommandation d'utiliser des noms de couleurs courants, votre palette doit respecter nos [consignes d'accessibilité](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance). En particulier, si les couleurs servent à distinguer des éléments (comme une «&nbsp;boîte rouge&nbsp;» et une «&nbsp;boîte bleue&nbsp;»), assurez-vous qu'elles restent discernables pour les personnes avec une déficience de la vision des couleurs. Visez au moins un [contraste de 4,5:1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (WCAG AA) entre le texte et l'arrière-plan.

## Commentaires

Utilisez des commentaires de style CSS pour commenter le code qui n'est pas auto-documenté. Veillez également à laisser un espace entre les astérisques et le commentaire.

```css example-good
/* Ceci est un commentaire de style CSS */
```

Placez vos commentaires sur des lignes séparées précédant le code auquel ils se réfèrent, comme ceci&nbsp;:

```css example-good
h3 {
  /* Crée une ombre portée rouge, décalée de 1px vers la droite et le bas, avec un rayon de flou de 2px. */
  text-shadow: 1px 1px 2px red;
  /* Définit la taille de la police au double de la taille de la police du document par défaut. */
  font-size: 2rem;
}
```

## Polices

### Définir les familles de polices

Lorsque vous indiquez une famille de polices, ajoutez toujours un [nom de famille générique](/fr/docs/Web/CSS/Reference/Properties/font-family#generic-name) en dernier recours. Cela garantit que si la police spécifiée n'est pas disponible, le navigateur affichera une police de remplacement plus appropriée. Les [polices sûres pour le Web](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals#polices_sûres_pour_le_web) sont exemptées de cette règle.

```css example-bad
body {
  font-family: "Helvetica";
}
```

```css example-good
body {
  /* La famille "sans-serif" n'est pas nécessaire car Arial est une police sûre pour le Web */
  font-family: "Helvetica", "Arial";
}

math {
  font-family: "Latin Modern Math", "STIX Two Math", math;
}
```

### Définir les graisses de police

Privilégiez les valeurs-mots-clés comme `normal` et `bold`, et les valeurs relatives comme `bolder` et `lighter`. N'utilisez des valeurs numériques que si un poids précis est souhaité. Remplacez toujours `400` par `normal` et `700` par `bold`, sauf lors de la déclaration de plages pour les polices variables, ou pour la cohérence avec d'autres déclarations similaires.

## Longueurs

### Utiliser des unités flexibles/relatives

Pour une flexibilité maximale sur le plus grand nombre d'appareils possible, privilégiez par défaut les unités relatives comme `em`, `rem`, les pourcentages et les unités de fenêtre d'affichage (si vous souhaitez qu'elles varient selon la largeur de la zone d'affichage (<i lang="en">viewport</i>)) pour toutes les longueurs. Vous pouvez en savoir plus dans notre [guide sur les valeurs et unités CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units#unités_de_longueur_relatives).

Écrivez ceci&nbsp;:

```css example-good
margin: 0.5em;
max-width: 50%;
```

Évitez ceci&nbsp;:

```css example-bad
margin: 20px;
max-width: 500px;
```

## Requêtes de média (media queries)

### Syntaxe de plage

Utilisez la syntaxe de plage moderne à la place de `min-` et `max-`. La première permet de spécifier des plages exclusives, de définir simultanément des bornes supérieure et inférieure, et est globalement plus concise et lisible.

```css example-good
@media (width >= 480px) {
  /* ... */
}
@media (600px < height < 900px) {
  /* ... */
}
```

```css example-bad
@media (min-width: 480px) {
  /* ... */
}
@media (min-height: 600px) and (max-height: 900px) {
  /* ... */
}
```

Ce principe s'étend à l'utilisation des requêtes de média en dehors du CSS, comme l'attribut [`media`](/fr/docs/Web/HTML/Reference/Elements/link#media) des éléments `<link>` ou {{DOMxRef("window.matchMedia()")}}.

Si vous avez différents styles alternatifs sélectionnés par des seuils de requêtes de média, soyez particulièrement attentif·ive à vos requêtes de média. Rappelez-vous que `width` et `height` peuvent être des valeurs fractionnaires&nbsp;: assurez-vous qu'à chaque valeur corresponde un seul style alternatif effectif.

### Requêtes de média « mobile first »

Dans une feuille de style qui contient des styles [media query](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour différentes tailles cibles de zone d'affichage (<i lang="en">viewport</i>), incluez d'abord la mise en forme pour les écrans étroits/mobiles avant toute autre media query. Ajoutez la mise en forme pour les tailles de zone d'affichage plus larges via des media queries successives. Suivre cette règle présente de nombreux avantages expliqués dans [Conception réactive](/fr/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

```css example-good
/* Mise en page CSS par défaut pour les écrans étroits */

@media (width >= 480px) {
  /* CSS pour les écrans de largeur moyenne */
}

@media (width >= 800px) {
  /* CSS pour les écrans larges */
}

@media (width >= 1100px) {
  /* CSS pour les très grands écrans */
}
```

## Chaînes de caractères

Lorsque les guillemets sont optionnels dans la syntaxe CSS, utilisez-les, et utilisez des guillemets doubles. Faites ainsi&nbsp;:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

N'écrivez pas ce qui suit, car les types de caractères autorisés sont plus limités et cela peut parfois entraîner des erreurs de syntaxe subtiles&nbsp;:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Avec la règle `@import`, indiquez le chemin du module comme une chaîne de caractères, et non comme un `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Voir aussi

[Index de référence CSS](/fr/docs/Web/CSS/Reference#index_des_mots-clés) — parcourez nos pages de référence des propriétés CSS pour découvrir des extraits CSS concis et pertinents. Nos exemples interactifs dans la section «&nbsp;Exemple interactif&nbsp;» sont généralement rédigés selon les consignes décrites sur cette page.
