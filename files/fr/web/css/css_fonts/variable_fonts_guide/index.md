---
title: Guide des polices variables
slug: Web/CSS/CSS_fonts/Variable_fonts_guide
---

{{CSSRef}}

**Les polices variables** sont une évolution de la spécification OpenType et qui permet d'activer différentes variations d'une police dans un seul fichier plutôt que d'avoir différents fichiers pour chaque taille, graisse ou style. En CSS, on peut accéder à l'ensemble des variations en utilisant une seule référence {{cssxref("@font-face")}}. Dans cet article, nous verrons tout ce qu'il faut savoir pour commencer à utiliser les polices variables.

> **Attention :** Afin d'utiliser les polices variables, il faut s'assurer que son système d'exploitation est à jour. Pour les systèmes basés sur GNU/Linux, il faut la version la plus récente de Linux Freetype. Pour macOS, les versions antérieures à 10.13 ne prennent pas en charge les polices variables. Si votre système d'exploitation n'est pas à jour ou ne prend pas en charge les polices variables, vous ne pourrez pas en bénéficier sur le Web ou dans les outils de développement Firefox par exemple.

## Qu'est-ce qu'une police variable ?

Pour mieux comprendre le fonctionnement des polices variables, revenons sur les polices « statiques » et comparons les deux systèmes.

### Les polices standard ou polices statiques

Auparavant, une police de caractères était représentées par différents fichiers pour les différentes fontes. Aussi, on avait par exemple différents fichiers pour 'Roboto Regular', 'Roboto Bold' et 'Roboto Bold Italic' et on pouvait avoir 20 à 30 fichiers distincts pour représenter l'intégralité d'une police.

Avec un tel scénario et pour utiliser une police de façon classique sur un site, il fallait au moins quatre fichier pour les différents styles : normal, italique, gras et gras-italique. Si on souhaitait ajouter un autre niveau de graisse (par exemple une fonte plus légère pour les légendes), il fallait rajouter un fichier. Sur le réseau, cela se traduisait par d'autres requêtes HTTP et plus de données téléchargées (environ 20Ko pour chaque fichier).

### Les polices variables

Avec une police variable, toutes ces combinaisons de style et de graisse sont contenues dans un seul fichier. On a donc un fichier plus gros qu'un fichier de police classique mais dont la taille est inférieure ou proche de celle des 4 fichiers qu'on chargerait pour la police principale d'un site. L'avantage d'une police variable est qu'on peut accéder à l'intégralité des corps, graisses et italiques sans être plus contraint par ceux du ou des fichiers chargés séparément.

Cela permet d'utiliser des techniques typographiques classiques pour avoir des niveaux de titre avec différents corps, d'utiliser une fonte plus étroite lorsqu'il y a plus de données à afficher, etc. Dans un magazine, par exemple, il n'est pas rare d'avoir un système typographique qui utilise 10 à 15 fontes qui sont autant de combinaisons de corps et de graisse.

#### Quelques notes à propos des familles de polices, des corps et des variantes

On a mentionné avant qu'on avait différents fichiers pour chaque graisse et italique et qu'on ne demandait pas au navigateur de synthétiser ces aspects. En effet, la plupart des polices ont des dessins spécifiques pour chaque graisse et chaque niveau d'italique (le a et le g minuscule sont souvent assez différents en italique par exemple). Afin de respecter ces spécificités et d'éviter les différences entre les implémentations des navigateurs, on préfèrera charger les fichiers correspondant à chaque graisse / italique lorsqu'on n'utilise pas de police variable.

Vous pourrez aussi remarquer que certaines polices viennent avec deux fichiers : un contenant les caractères sans italique et leurs variations et un autre contenant les variations italiques. Cette méthode est parfois choisie afin de réduire la taille du fichier lorsqu'on n'a pas besoin des italiques. Dans tous les cas, il est toujours possible de les lier avec un nom {{cssxref("font-family")}} et d'appeler chaque style avec la valeur pertinente pour {{cssxref("font-style")}}.

## L'axe de variation

Le concept clé des polices variables est celui d'**axe de variation** qui décrit l'intervalle autorisé pour faire varier un aspect donné d'une police. Ainsi, l'axe de la graisse décrit l'étendue entre les caractères les plus fins et les plus gras qui puissent être ; l'axe de la largeur parcourt l'étroitesse ou la largeur de la police ; l'axe italique décrit si des formes italiques sont présentes, etc. Un axe peut être un intervalle ou un choix binaire. Ainsi, la graisse pourra varier entre 1 et 999 tandis que l'italique pourrait être uniquement activable ou désactivable (1 ou 0 respectivement).

Comme indiqué dans la spécification, deux types d'axe existent : **les axes enregistrés** et **les axes spécifiques** (_custom axes_) :

- Les axes enregistrés sont ceux que l'on rencontre le plus souvent et qui ont donc été standardisés dans la spécification. À l'heure actuelle, il existe 5 axes enregistrés : le corps, la largeur, la pente, l'italique et la taille optique. Chacun de ces axes possède un attribut CSS correspondant.
- Les axes spécifiques peuvent être n'importe quel axe défini par le concepteur de la police. Chaque axe doit simplement être défini par une étiquette avec quatre lettres qui permettront de l'identifier. Ces étiquettes pourront être utilisées dans le code CSS pour indiquer quel niveau de variation utiliser (cf. exemples ci-après).

### Les axes enregistrés et les attributs CSS existants

Dans cette section, nous verrons en détails les cinq axes enregistrés ainsi que des exemples CSS associés. Dans les cas où c'est possible, nous inclurons la syntaxe standard et la syntaxe de plus bas niveau qui utilise ({{cssxref("font-variation-settings")}}).

Cette propriété fut le premier mécanisme implémenté pour tester les premières implémentations des polices variables et elle reste nécessaire pour utiliser de nouveaux axes ou des axes spécifiques au-delà des cinq axes enregistrés. Toutefois, lorsque c'est possible, cette syntaxe ne doit pas être utilisée si une propriété de plus haut niveau est disponible. Autrement dit, `font-variation-settings` doit uniquement être utilisée afin de définir des valeurs pour des axes qui ne seraient pas accessibles autrement.

#### Notes

1. Les noms d'axes utilisés avec `font-variation-settings` sont sensibles à la casse. Les noms des axes enregistrés doivent être écrits en minuscules et les noms des axes spécifiques doivent être écrits en majuscules. Ainsi, dans ce cas :

   ```css
   font-variation-settings:
     "wght" 375,
     "GRAD" 88;
   ```

   `wght` correspondra à l'axe enregistré du même nom et `GRAD` à un axe spécifique.

2. Si on a défini des valeurs avec `font-variation-settings` et qu'on souhaite changer une de ces valeurs, il sera nécessaire de redéclarer l'ensemble des valeurs (de la même façon qu'on doit redéclarer l'ensemble des caractéristiques OpenType avec {{cssxref("font-feature-settings")}}). Il est possible de contourner cet écueil en utilisant [des propriétés CSS personnalisées](/fr/docs/Web/CSS/Using_CSS_custom_properties) pour les valeurs individuelles et en modifiant uniquement la valeur d'une des propriétés personnalisée (cf. l'exemple en fin d'article).

### La graisse (_weight_)

La graisse (représenté par l'étiquette `wght`) définit l'épaisseur des traits formants les caractères. En CSS, le descripteur {{cssxref("font-weight")}} a depuis longtemps permis d'utiliser différentes graisses avec des valeurs numériques comprises entre 100 et 900 (avec des incréments de 100) ou des mots-clés tels que `normal` ou `bold` qui étaient des alias pour une valeur numérique correspondante (400 et 700 ici). Ces valeurs sont toujours utilisables pour les polices statiques mais il est désormais possible d'utiliser n'importe quel entier entre 1 et 1000 dans le cas de polices variables.

On notera qu'il n'est pas possible d'utiliser la déclaration `@font-face` afin qu'un point donné sur cet axe corresponde au mot-clé `bold` (ou tout autre mot-clé). Cela pourra généralement être résolu simplement mais nécessitera d'écrire plus de CSS :

```css
font-weight: 375;

font-variation-settings: "wght" 375;
```

Vous pouvez éditer l'exemple CSS suivant pour voir l'effet sur la graisse de la police.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### La largeur (_width_)

La largeur (indiquée par l'étiquette `wdth`) correspond à l'axe selon lequel les caractères sont plus ou moins étroits ou larges. En CSS, c'est le descripteur {{cssxref("font-stretch")}} qui peut être utilisé avec un pourcentage inférieur ou supérieur à 100% (la largeur « normale ») ou avec n'importe quel nombre positif. Si une valeur numérique est fournie et se situe en dehors de l'intervalle couvert par la police variable, le navigateur devra choisir la valeur la plus proche possible.

> **Note :** Lorsqu'on utilise la notation « bas niveau » avec `font-variation-settings`, on n'écrit pas le caractère %.

```css
font-stretch: 115%;

font-variation-settings: "wdth" 115;
```

L'exemple suivant peut être édité pour observer les modifications des valeurs sur cet axe.

{{EmbedGHLiveSample("css-examples/variable-fonts/width.html", '100%', 520)}}

### L'italique

L'axe italique (`ital`) fonctionne différemment car il ne s'agit pas d'un intervalle mais d'une option activée ou désactivée : il n'y a pas de valeurs intermédiaires. Les caractères en italique sont la plupart du temps très différents de leur équivalent sans italique et passer d'un mode à l'autre entraîne généralement l'utilisation de glyphes différents. Attention à ne pas confondre l'italique et l'oblique (cf. l'axe de pente ci-après) : une police aura une forme italique ou une variabilité sur l'axe de pente mais rarement les deux.

En CSS, l'italique est appliqué grâce à la propriété {{cssxref("font-style")}} (qui permet aussi d'appliquer l'oblique). On notera l'apparition de la propriété `font-synthesis: none;` qui empêche les navigateurs de synthétiser l'italique en penchant les caractères (on pourra aussi utiliser cette valeur de façon équivalente pour éviter de synthétiser la graisse).

```css
font-style: italic;

font-variation-settings: "ital" 1;

font-synthesis: none;
```

L'exemple suivant peut être édité pour observer les modifications des valeurs sur cet axe.

{{EmbedGHLiveSample("css-examples/variable-fonts/italic.html", '100%', 520)}}

### La pente (_slant_)

La pente (indiquée par l'étiquette `slnt`), également appelée « oblique », diffère de l'italique car elle applique une pente sur les caractères mais ne change aucun des glyphes. Cet axe est un intervalle numérique allant généralement de 0 (droit) à 20 degrés. Toutefois, les valeurs allant de -90 et à 90 (degrés) sont autorisées. C'est également le descripteur `font-style` qui peut être utilisé pour cet axe.

> **Note :** Le mot-clé `deg` ne doit pas être utilisé comme unité pour la notation avec `font-variation-settings`.

```css
font-style: oblique 14deg;

font-variation-settings: "slnt" 14;
```

L'exemple suivant peut être édité pour observer les modifications des valeurs sur cet axe.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

### La taille optique

La taille optique, indiquée par l'étiquette `opsz`, correspond à la variation de l'épaisseur des traits formants le caractère afin de s'assurer que celui-ci puisse être lu avec un petit corps et ainsi de garantir une bonne impression ou un bon affichage à l'écran.

Ainsi, pour les petits corps, on pourra avoir des traits plus épais et pour des grands corps, on pourra avoir une variation d'épaisseur plus importante entre les différents traits du caractères pour développer correctement le dessin de la police.

La plupart du temps, les valeurs liées à la taille optique sont appliquées automatiquement avec les valeurs correspondantes de `font-size` mais on peut tout à fait les manipuler avec la syntaxe de bas niveau `font-variation-settings`.

Une nouvelle propriété CSS a été créée afin de prendre en charge cet axe avec une syntaxe haut niveau pour les polices variables : {{cssxref("font-optical-sizing")}}. Le descripteur `font-optical-sizing` permet uniquement d'utiliser les valeurs `auto` ou `none` et ainsi uniquement d'activer ou de désactiver le dimensionnement optique. Toutefois, avec `font-variation-settings: 'opsz' <num>`, on peut fournir une valeur numérique. Dans la plupart des cas, on utilisera la même valeur pour `font-size` et pour `opsz`. Il est ici permis d'utiliser une autre valeur spécifique afin d'améliorer la lisibilité ou d'obtenir un effet esthétique.

```css
font-optical-sizing: auto;

font-variation-settings: "opsz" 36;
```

L'exemple suivant peut être édité pour observer les modifications des valeurs sur cet axe.

{{EmbedGHLiveSample("css-examples/variable-fonts/optical-sizing.html", '100%', 1020)}}

### Les axes spécifiques

Les axes spécifiques sont introduits spécifiquement par les concepteurs de polices et peuvent correspondre à n'importe quelle variation. Il est possible que certains axes spécifiques deviennent fréquemment utilisés voire finissent par être intégrés aux axes enregistrés mais seul l'avenir le dira avec certitude.

### Le grade

Le grade est une variation qui consiste à épaissir certains des traits des glyphes sans agrandir la largeur totale du glyphe. En augmentant le grade, on a ainsi un caractère plus « dense ». Il ne faut pas confondre le corps et le grade : le premier augmente la taille générale, largeur incluse, des glyphes tandis que le second ne modifie pas l'espace physique occupé par le caractère. Le grade est un axe spécifique plutôt populaire car il permet de faire varier la densité apparente du texte sans modifier sa largeur et ainsi il évite de générer un décalage du texte.

```css
font-variation-settings: "GRAD" 88;
```

L'exemple suivant peut être édité pour observer les modifications des valeurs sur cet axe.

{{EmbedGHLiveSample("css-examples/variable-fonts/grade.html", '100%', 520)}}

### Utiliser une police variable : les changements pour `@font-face`

Pour charger une police variable, la syntaxe est proche de celle utilisée pour les polices statiques. Les quelques différences notables sont apportées par des ajouts à la syntaxe {{cssxref("@font-face")}} disponible dans la plupart des navigateurs modernes.

La syntaxe de base est la même mais on peut indiquer la technologie utilisée pour la police ainsi que les intervalles autorisés pour les descripteurs `font-weight` et `font-stretch`.

#### Exemple d'une police standard réale droite

```css
@font-face {
  font-family: "MyVariableFontName";
  src: "path/to/font/file/myvariablefont.woff2" format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: normal;
}
```

#### Exemple d'une police avec une forme droite et une forme italique

```css
@font-face {
  font-family: "MyVariableFontName";
  src: "path/to/font/file/myvariablefont.woff2" format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: oblique 0deg 20deg;
}
```

> **Note :** Il n'existe pas de valeur spécifique pour la mesure du degré supérieur. Les valeurs fournies à `font-style` indiquent simplement qu'un axe est présent afin que le navigateur puisse afficher correctement les caractères droits ou en italique.

#### Exemple d'une police qui ne contient que des italiques et aucun caractère droit

```css
@font-face {
  font-family: "MyVariableFontName";
  src: "path/to/font/file/myvariablefont.woff2" format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: italic;
}
```

#### Exemple d'une police avec un axe de pente

```css
@font-face {
  font-family: "MyVariableFontName";
  src: "path/to/font/file/myvariablefont.woff2" format("woff2-variations");
  font-weight: 125 950;
  font-stretch: 75% 125%;
  font-style: oblique 0deg 12deg;
}
```

> **Note :** La syntaxe complète n'est pas implémentée par l'ensemble des navigateurs et il faudra donc tester avec précaution. Tous les navigateurs qui prennent en charge les polices variables sauront les afficher même si seul le format de fichier est indiqué (plutôt que le format complet : par exemple `woff2` à la place de `woff2-variations`), mais mieux vaut utiliser la syntaxe la plus précise si possible.

> **Note :** Fournir des valeurs d'intervalle pour `font-weight`, `font-stretch` et `font-style` empêchera le navigateur d'afficher des polices en dehors de ces intervalles en utilisant les attributs `font-weight` ou `font-stretch`. En revanche, cela ne bloquera pas la syntaxe de plus bas niveau avec `font-variation-settings` !

## Amélioration progressive et anciens navigateurs

La prise en charge des polices variables peut être vérifié grâce à {{cssxref("@supports")}}. Il est donc possible d'utiliser des polices variables en production et de limiter la portée des polices variables à l'intérieur d'une requête de prise en charge.

```css
h1 {
  font-family: some-non-variable-font-family;
}

@supports (font-variation-settings: "wdth" 115) {
  h1 {
    font-family: some-variable-font-family;
  }
}
```

## Pages d'exemples

Les pages d'exemples suivantes illustrent deux façons pour structurer le CSS. La première utilise les attributs standards où c'est possible et la seconde utilise les propriétés personnalisées afin de définir les valeur pour la chaîne de caractères fournie à `font-variation-settings` et montre comment mettre à jour une valeur plutôt que de redéfinir l'intégralité de la chaîne de caractères. On notera aussi l'effet au survol (_hover_) sur l'élément `h2` qui ne joue que sur l'axe de grade.

{{EmbedGHLiveSample("css-examples/variable-fonts/sample-page.html", '100%', 1220)}}

## Voir aussi

- [Module de spécification CSS Fonts de niveau 4 (au stade de brouillon) (en anglais)](https://drafts.csswg.org/css-fonts-4)
- [Introduction Microsoft aux variations Open Type (en anglais)](https://docs.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [Registre des étiquettes d'axe de variation - Microsoft OpenType Design (en anglais)](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
- [Wakamai Fondue (en anglais)](https://wakamaifondue.com) (un site qui permet d'explorer les axes et caractéristiques d'une police)
- [Axis Praxis (en anglais)](https://www.axis-praxis.org) (une site qui permet de manipuler les axes de polices variables)
- [V-Fonts.com (en anglais)](https://v-fonts.com) (un catalogue de polices variables)
- [Font Playground (en anglais)](https://play.typedetail.com) (un autre site de manipulation des polices variables)
