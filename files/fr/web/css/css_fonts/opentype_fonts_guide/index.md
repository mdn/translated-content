---
title: Guide des caractéristiques de police OpenType
slug: Web/CSS/CSS_Fonts/OpenType_fonts_guide
tags:
  - CSS
  - Fonts
  - Guide
  - Polices
translation_of: Web/CSS/CSS_Fonts/OpenType_fonts_guide
original_slug: Web/CSS/CSS_Fonts/Guide_caractéristiques_police_OpenType
---
{{CSSRef}}

Les caractéristiques de police ou variantes font référence à différents glyphes ou styles de caractère contenus dans une police OpenType. Cela inclut notamment les ligatures (des caractères spéciaux qui permettent de combiner des caractères entre eux comme œ qui est la ligature entre o et e), le crénage (_kerning_ en anglais) qui définit l'espacement entre certaines lettres, les fractions et styles numériques, etc. Toutes ces caractéristiques sont des caractéristiques OpenType Features et peuvent être utilisées sur le Web grâce à certaines propriétés spécifiques qui permettent un contrôle de bas niveau comme {{cssxref("font-feature-settings")}}. Dans cet article, nous verrons tout ce qu'il faut savoir pour manipuler les caractéristiques OpenType avec CSS.

Pour certaines polices, une ou plusieurs caractéristiques sont activées par défaut (le crénage et les ligatures classiques sont souvent activées par exemple). D'autres caractéristiques sont inactives et peuvent être activées par choix dans certaines situations.

En plus des caractéristiques communément utilisées telles que les ligatures ou [les chiffres elzéviriens](https://fr.wikipedia.org/wiki/Chiffres_elz%C3%A9viriens), il existe d'autres caractéristiques spécifiques telles que les ensembles stylistiques, les ensembles alternatifs voire des ensembles avec des altérations spécifiques pour une langue donnée. Pour ce dernier cas, ces altérations sont nécessaires à l'expression correcte du langage et il s'agit donc d'une caractéristique qui dépasse largement l'aspect purement stylistique d'autres caractéristiques.

> **Attention :** Il existe de nombreuses propriétés CSS qui permettent de manipuler les caractéristiques de police. Cependant, la plupart ne sont pas encore complètement implémentées ni prises en charge de façon homogène. Nous les verrons dans cet article mais il faudra la plupart du temps utiliser {{cssxref("font-feature-settings")}} pour les définir à un plus bas niveau. Il est possible d'écrire du CSS qui gère ces deux cas mais c'est plus laborieux. Mais lorsqu'on utilise `font-feature-settings` pour chaque caractéristique, il est nécessaire de réécrire la chaîne entière même si on ne souhaite changer qu'une caractéristique.

## Découvrir la disponibilité des caractéristiques pour certaines polices

Il est parfois délicat de savoir quelles caractéristiques sont disponibles pour une police donnée si celle-ci n'est pas accompagnée d'une documentation (la plupart des fonderies proposeront une page d'exemple et du CSS). Certains sites permettent de contourner ce problème : vous pouvez visiter [wakamaifondue.com](https://wakamaifondue.com), y uploader le fichier de la police et recevoir un rapport complet peu de temps après ; le site [Axis-praxis.org](https://axis-praxis.org) fournit des fonctionnalités analogues et permet de cliquer pour activer/désactiver une ou plusieurs caractéristiques sur un bloc de texte donné.

## Pourquoi utiliser les caractéristiques d'une police ?

Étant donné que ces caractéristiques peuvent être difficilement accessibles, on peut légitiement se demander pourquoi il faudrait les utiliser. Pour répondre à cette question, il faut voir comment ces caractéristiques peuvent aider à rendre un site plus lisible, accessible, élégant :

- **Les ligatures** telles que œ ou celles qui existent entre 'ff' répartissent plus également l'espace entre les lettres et permettent un lecture plus douce.
- **Les fractions** permettent d'améliorer la compréhension et la lecture de certains textes (des recettes par exemple).
- **L'écriture des nombres** au sein de paragraphes qui suivent la ligne de base du texte ou au contraire dont les jambages passent sous la ligne de base.

Bien qu'aucune de ces caractéristiques ne soit critique pour l'utilisabilité d'un site, chacune d'elle peut rendre un site plus lisible voire raffiné

> Les caractéristiques OpenType ressemblent à des compartiments secrets : en les déverouillant, une police peut évoluer de façon subtile ou complète. Toutes les caractéristiques OpenType ne doivent pas être utilisées tout le temps mais certaines d'entre elles sont majeures pour obtenir une typographie de premier rang. _Tim Brown, Directeur de la typographie chez Adobe_.

### Au-delà du style : le contenu même

Il existe certains cas (notamment avec {{cssxref("font-variant-east-asian")}}) où les caractéristiques OpenType sont directement liées à l'utilisation de formes différentes pour certains glyphes. Ces caractéristiques auront un impact sur la lisibilité mais aussi et surtout sur la signification du texte. Dans ces cas, les caractéristiques de police ne sont pas un outil de style mais font partie intégrante du contenu.

## Les caractéristiques

Il existe une variété de caractéristiques. Nous les avons ici regroupées selon leurs attributs principaux et les options développées dans les spécifications du W3C.

> **Note :** Les exemples qui suivent illustrent certaines propriétés et des combinaisons d'exemple et sont accompagnés des équivalents utilisant la syntaxe de plus bas niveau. Il est possible que ces deux versions d'exemple ne correspondent pas exactement selon l'implémentation des navigateurs. Les polices utilisées ici sont Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script et Kokoro (qui sont libres d'utilisation et disponibles via différents services tels que Google Fonts).

### Le crénage (_kerning_) ({{cssxref("font-kerning")}})

Le crénage correspond à l'espace entre les caractères pour certaines combinaisons de caractères. Cette caractéristique, comme recommandé par la spécification OpenType, est généralement activée par défaut. On notera également que la propriété {{cssxref("letter-spacing")}} permet d'imposer un crénage supplémentaire au texte.

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### Les formes alternatives ({{cssxref("font-variant-alternates")}})

Les polices peuvent fournir différentes formes pour différents glyphes. Cette propriété permet d'activer un ensemble de formes alternatives ou une forme alternative spécifique selon la valeur utilisée. Dans l'exemple qui suit, on voit différentes formes d'utilisation des caractères alternatifs. Les polices qui possèdent des glyphes alternatifs peuvent les rendre disponibles sur la grille de caractères ou dans des ensembles stylistiques séparés voire pour des caractères individuels. Dans cet exemple, on utilise deux polices et la règle-@ {{cssxref("@font-feature-values")}}. Cette méthode permet de définir des raccourcis ou des options nommées qui peuvent ensuite être utilisée sur un ensemble de polices. Ainsi, on peut avoir une option appliquée à une police ou appliquée plus généralement.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}} Dans ce cas, `@stylistic(alternates)` affichera tous les caractères alternatifs pour chacune des polices. En appliquant uniquement ces règles au mot 'My', seul l'affichage de la lettre 'M' est modifié. Si on applique  `@styleset(alt-a)`, seule l'apparence de la lettre a minuscule changera.

Vous pouvez modifier :

```css
font-variant-alternates: styleset(alt-a);
```

en :

```css
font-variant-alternates: styleset(alt-g);
```

et voir comment la lettre a retrouve sa forme normale et comment la lettre g est modifiée.

#### En savoir plus sur les formes alternatives

- [Lien vers la spécification de la propriété `font-variant-alternates`](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)
- {{cssxref("font-variante-alternates")}}

### Les ligatures ({{cssxref("font-variant-ligatures")}})

Les ligatures sont des glyphes qui remplacent deux ou plusieurs glyphes afin de les représenter de façon plus harmonieuse (pour l'espacement et l'esthétique notamment). Certaines de ces ligatures sont fréquemment utilisées (œ) et d'autres sont plus spécialisées et moins usitées (on parle de « ligatures discrétionaires », de « ligatures historiques » ou encore d' « alternatifs contextuels »).

Bien qu'elles soient plus fréquemment utilisées avec les polices d'écriture, dans l'exemple qui suit, on les utilise afin de créer des flèches :

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### Les positions ({{cssxref("font-variant-position")}})

Les variantes de positions permettent d'activer le support typographique des glyphes pour les exposants et les indices. Celles-ci sont utilisées dans le texte sans modifier la ligne de base ou l'interlignage (c'est un des avantages par rapport à l'utilisation des éléments HTML {{htmlelement("sub")}} et {{cssxref("sup")}}).

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### Les capitales ({{cssxref("font-variant-caps")}})

Une utilisation fréquente des caractéristiques OpenType est l'activation de « vraies » [petites capitales](https://fr.wikipedia.org/wiki/Petite_capitale) qui sont généralement utilisées pour les acronymes et les abréviations.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### Les chiffres ({{cssxref("font-variant-numeric")}})

Il existe généralement différents types de chiffre dans les polices :

- Les chiffres classiques (ou chiffres Didot) qui sont alignées sur la ligne de base du texte et qui ont la même hauteur que les majuscules
- [Les chiffres elzéviriens](https://fr.wikipedia.org/wiki/Chiffres_elz%C3%A9viriens) qui ont des jambages et des hampes à la façon des autres lettres minuscules. Ces chiffres sont conçus pour être utilisés en incise et se « fondre » au sein des glyphes alentours, à la manières des petites capitales.

On y retrouve également la notion d'espacement. L'espacement proportionnel est le réglage par défaut et l'espacement tabulaire permet d'avoir un espace identique entre chaque chiffre, quelle que soit la largeur du caractère. Ce dernier mode est notamment utile pour l'affichage de nombre dans des tableaux (où on peut souhaiter comparer des montants d'une ligne à l'autre).

Deux types de fractions peuvent être prises en charge avec cette propriété :

- Les fractions avec barre diagonale.
- Les fractions empilées verticalement.

Les nombres ordinaux peuvent également être pris en charge (« 1er », « 2e ») s'ils sont présents dans la police. De même on peut utiliser un zéro barré si celui-ci est disponible.

#### Chiffres classiques et chiffres elzéviriens

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### Fractions, nombres ordinaux et zéro barré

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### Caractères d'Asie orientale ({{cssxref("font-variant-east-asian")}})

Cette caractéristique permet d'accéder à différentes formes alternatives de glyphes dans une police. L'exemple qui suit illustre une chaîne de glyphes où seul l'ensemble OpenType 'jis78' est activé. Vous pouvez décocher la case et voir alors d'autres caractères s'afficher.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> **Note :** Ces glyphes ont été copiés à partir d'un exemple et le texte qu'ils constituent n'ont aucun sens particulier.

### Propriété raccourcie ({{Cssxref("font-variant")}})

La propriété raccourcie `font-variant` permet de définir l'ensemble des caractéristiques précédentes. Lorsqu'on utilise la valeur `normal`, toutes les caractéristiques sont réinitialisées et retrouvent leurs valeurs par défaut. En utilisant `none`,  `font-variant-ligatures` vaudra `none` et toutes les autres propriétés récupèreront leurs valeurs initiales (cela signifie entre autres que si le crénage est activé par défaut, il sera toujours activé, même lorsque `none` est fourni).

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## Utiliser `font-feature-settings`

La propriété {{cssxref("font-feature-settings")}} permet d'utiliser une syntaxe « bas niveau » qui permet un accès explicite à chaque caractéristique OpenType disponible. On dispose ainsi d'un contrôle accru mais on perd l'héritage et il faut tout redéclarer à chaque fois qu'on souhaite modifier une caractéristique (sauf à utiliser [des propriétés CSS personnalisées](/en-US/docs/Web/CSS/Using_CSS_custom_properties) afin de définir les valeurs). Aussi, mieux vaut utiliser les propriétés standards lorsque c'est possible.

Il existe une myriade de caractéristiques possibles. Vous pouvez en voir quelques exemples ici et il existe plusieurs ressources pour en exploiter d'autres.

La syntaxe générale suivra cette structure :

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Selon la spécification, on peut fournir le code à quatre caractères de la caractéristique ou fournir le code suivi d'un 1 pour activer la fonctionnalité ou suivi d'un 0 pour la désactiver. Ainsi, si on dispose de caractéristiques liées à la ligatures et qui sont activées par défaut, on peut les désactiver de la façon suivante :

```css
.no-ligatures {
  font-feature-settings: "liga" 0, "dlig" 0;
}
```

#### En savoir plus sur les codes des caractéristiques `font-feature-settings`

- [Une démonstration des caractéristiques OpenType](https://sparanoid.com/lab/opentype-features/)
- [La liste des caractéristiques OpenType sur Wikipédia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Utiliser la détection de fonctionnalités CSS

Étant donné que toutes les propriétés ne sont pas implémentées de façon homogène, il est préférable d'utiliser la règle @ {{cssxref("@supports")}} pour vérifier quelles propriétés peuvent être utilisées correctement et s'en remettre à {{cssxref("font-feature-settings")}} si nécessaire.

Ainsi, les petites capitales peuvent être activées de différentes façons mais si on veut s'assurer que la mise en forme fonctionne quelle que soit la capitalisation, il faudra 2 paramètres avec `font-feature-settings` et une seule valeur pour {{cssxref("font-variant-caps")}}.

```css
.small-caps {
   font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
   .small-caps {
       font-feature-settings: normal;
       font-variant-caps: all-small-caps;
   }
}
```

## Voir aussi

### Démonstrations de caractéristiques OpenType en CSS

- [Démonstration CSS complète des caractéristiques OpenType (en anglais)](https://sparanoid.com/lab/opentype-features/)

  - Note : la complétude invoquée dans le titre n'est pas garantie…

### Outils web d'analyse de polices

- [Wakamai Fondue (en anglais)](https://wakamaifondue.com)
- [Axis Praxis (en anglais)](https://axis-praxis.org)

### Spécifications W3C

- [Les propriétés relatives aux caractéristiques de police dans le module CSS Fonts de niveau 3 (en anglais)](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [`font-variant-alternatives`, spécifiée dans le module CSS Fonts de niveau 4 (en anglais)](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### Autres ressources

- [Utiliser les caractéristiques OpenType (en anglais)](https://helpx.adobe.com/fonts/using/use-open-type-features.html), écrit par Tim Brown
- [La syntaxe Adobe pour les caractéristiques OpenType en CSS (en anglais)](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
