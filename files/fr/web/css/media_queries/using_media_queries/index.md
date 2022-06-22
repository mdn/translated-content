---
title: Media queries
slug: Web/CSS/Media_Queries/Using_media_queries
translation_of: Web/CSS/Media_Queries/Using_media_queries
original_slug: Web/CSS/Requêtes_média/Utiliser_les_Media_queries
---
{{CSSRef}}

**Les requêtes média (_media queries_)** permettent de modifier l'apparence d'un site ou d'une application en fonction du type d'appareil (impression ou écran par exemple) et de ses caractéristiques (la résolution d'écran ou la largeur de la zone d'affichage (_viewport_) par exemple).

Les requêtes média sont utilisées afin :

- D'appliquer certains styles de façon conditionnelle avec le [CSS](/fr/docs/Web/CSS) grâce [aux règles @](/fr/docs/Web/CSS/At-rule) [`@media`](/fr/docs/Web/CSS/@media) et [`@import`](/fr/docs/Web/CSS/@import).
- De cibler certains médias pour les éléments [`<style>`](/fr/docs/Web/HTML/Element/style), [`<link>`](/fr/docs/Web/HTML/Element/link), [`<source>`](/fr/docs/Web/HTML/Element/Source) et d'autres éléments [HTML](/fr/docs/Web/HTML) grâce à l'attribut `media=`.
- De [tester et surveiller l'état d'un média](/fr/docs/Web/CSS/Media_Queries/Testing_media_queries) grâce aux méthodes [`Window.matchMedia()`](/fr/docs/Web/API/Window/matchMedia) et [`MediaQueryList.addListener()`](/fr/docs/Web/API/MediaQueryList/addListener).

> **Note :** Les exemples de cet article utilisent `@media` à des fins d'illustration. Toutefois, la syntaxe est la même pour les différents types de requêtes média.

## Syntaxe

Une requête média se compose d'un _type de média_ optionnel et d'une ou plusieurs expressions de _caractéristiques de média_. Plusieurs requêtes peuvent être combinées entre elles grâce à des opérateurs logiques. Les requêtes média ne sont pas sensibles à la casse.

Une requête média vaut `true` si le type de média correspond à l'appareil utilisé pour l'affichage du document et si toutes les expressions relatives aux caractéristiques sont vraies. Les requêtes qui utilisent des types de média inconnus valent toujours `false`.

> **Note :** Lorsqu'une feuille de style est attachée à un élément [`<link>`](/fr/docs/Web/HTML/Element/link) comportant une requếte média, cette feuille de style [sera toujours téléchargée](http://scottjehl.github.com/CSS-Download-Tests/), même si la requête renvoie `false`. Toutefois, le contenu de cette feuille n'est pas appliquée tant que le résultat de la requête ne devient pas `true`.

### Types de média

Un type de média définit une catégorie générale d'appareil. Le type de média est optionnel dans une requête média, sauf si celle-ci utilise les opérateurs logiques `not` ou `only`. Par défaut, le type de média utilisé est `all`.

- `all`
  - : Correspond pour tous les appareils.
- `print`
  - : Correspond aux matériaux paginés et aux documents consultés en aperçu avant impression. Pour plus d'informations, voir l'article sur [les médias paginés](/fr/docs/Web/CSS/Paged_Media).
- `screen`
  - : Correspond aux appareils dotés d'un écran.
- `speech`
  - : Correspond aux outils de synthèse vocale.

> **Note :** Les types de média dépréciés CSS2.1 et [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) ont défini plusieurs types additionnels (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, and `aural`) qui ont ensuite été dépréciés avec [Media Queries 4](https://dev.w3.org/csswg/mediaqueries/#media-types). Ces types ne doivent donc plus être utilisés. Le type `aural` a été remplacé par le type `speech`.

### Caractéristiques média (<i lang="en">media features</i>)

Les caractéristiques média décrivent certaines caractéristiques spécifiques de l'agent utilisateur, de l'appareil d'affichage ou de l'environnement. Les expressions de caractéristique média testent leur présence ou leur valeur. Chaque expression de caractéristique doit être entourée de parenthèses.

| Nom                                                                                                           | Résumé                                                                                                                           | Notes                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("@media/width","width")}}                                                              | La largeur de la zone d'affichage (_viewport_)                                                                                   |                                                                                                                                           |
| {{cssxref("@media/height","height")}}                                                              | La hauteur de la zone d'affichage                                                                                                |                                                                                                                                           |
| {{cssxref("@media/aspect-ratio","aspect-ratio")}}                                              | Le rapport largeur/hauteur de la zone d'affichage                                                                                |                                                                                                                                           |
| {{cssxref("@media/orientation","orientation")}}                                              | L'orientation la zone d'affichage                                                                                                |                                                                                                                                           |
| {{cssxref("@media/resolution","resolution")}}                                                  | La densité de pixel pour l'appareil d'affichage                                                                                  |                                                                                                                                           |
| {{cssxref("@media/scan","scan")}}                                                                  | Le processus de scan de l'appareil d'affichage                                                                                   |                                                                                                                                           |
| {{cssxref("@media/grid","grid")}}                                                                  | Le type d'écran de l'appareil : matriciel ou grille ?                                                                            |                                                                                                                                           |
| {{cssxref("@media/update-frequency","update")}}                                              | La fréquence de modification du contenu par l'appareil d'affichage                                                               | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/overflow-block","overflow-block")}}                                      | La façon dont l'appareil d'affichage gère le contenu qui dépasse de la zone d'affichage selon l'axe de bloc                      | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/overflow-inline","overflow-inline")}}                                      | La possibilité de faire défiler (_scroll_) le contenu qui dépasse de la zone d'affichage sur l'axe en ligne                      | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/color","color")}}                                                              | Le nombre de bits pour chaque composante de couleur pour l'appareil d'affichage (ou 0 si l'appareil ne gère pas les couleurs)    |                                                                                                                                           |
| {{cssxref("@media/color-gamut","color-gamut")}}                                              | Un intervalle approximatif des couleurs prises en charge par l'agent utilisateur et l'appareil d'affichage                       | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/color-index","color-index")}}                                              | Le nombre d'éléments dans le tableau des couleurs de l'appareil d'affichage (ou 0 si l'appareil ne dispose pas d'un tel tableau) |                                                                                                                                           |
| {{cssxref("@media/display-mode","display-mode")}}                                              | Le mode d'affichage de l'application, tel qu'indiqué par la propriété [`display`](/fr/docs/Web/Manifest#display) du manifeste    | Définie dans [la spécification pour les manifestes des applications web](https://w3c.github.io/manifest/#the-display-mode-media-feature). |
| {{cssxref("@media/monochrome","monochrome")}}                                                  | Le nombre de bits par pixel pour le _frame buffer_ monochrome de l'appareil d'affichage ou 0 si l'appareil n'est pas monochrome  |                                                                                                                                           |
| {{cssxref("@media/inverted-colors","inverted-colors")}}                                      | L'inversion (ou non) des couleurs par l'agent utilisateur ou le système d'exploitation                                           | Reportée au niveau 5 du module de spécification _Media Queries_.                                                                          |
| {{cssxref("@media/pointer","pointer")}}                                                          | La présence d'un appareil de pointage comme mécanisme de saisie principal et sa précision                                        | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/hover","hover")}}                                                              | La capacité du mécanisme de saisie principal à survoler les éléments                                                             | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/any-pointer","any-pointer")}}                                              | La présence d'un appareil de pointage parmi les mécanismes de saisie et sa précision                                             | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/any-hover","any-hover")}}                                                      | La capacité d'un des mécanismes de saisie à survoler les éléments                                                                | Ajoutée avec le niveau 4 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/light-level","light-level")}}                                              | Le niveau de luminosité de l'environnement                                                                                       | Ajoutée avec le niveau 5 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}                  | L'utilisateur préfère que la quantité de mouvement sur la page soit réduite.                                                     | Ajoutée avec le niveau 5 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}  | L'utilisateur préfère que la transparence utilisée sur la page soit réduite.                                                     | Ajoutée avec le niveau 5 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/prefers-contrast", "prefers-contrast")}}                                  | L'utilisateur préfère que le contraste soit augmenté ou réduit entre des couleurs proches.                                       | Ajoutée avec le niveau 5 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}                      | L'utilisateur préfère utiliser un thème clair ou un thème sombre.                                                                | Ajoutée avec le niveau 5 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/forced-colors", "forced-colors")}}                                          | Détecte si l'agent utilisateur restreint la palette de couleurs.                                                                 | Ajoutée avec le niveau 5 du module de spécification _Media Queries_.                                                                      |
| {{cssxref("@media/scripting","scripting")}}                                                      | La disponibilité des fonctions de script (JavaScript par exemple)                                                                | Reportée au niveau 5 du module de spécification _Media Queries_.                                                                          |
| {{cssxref("@media/device-width","device-width")}} {{deprecated_inline}}                     | La largeur de la surface de rendu pour l'appareil d'affichage                                                                    | Dépréciée par le niveau 4 du module de spécification _Media Queries_.                                                                     |
| {{cssxref("@media/device-height","device-height")}} {{deprecated_inline}}                 | La hauteur de la surface de rendu pour l'appareil d'affichage                                                                    | Dépréciée par le niveau 4 du module de spécification _Media Queries_.                                                                     |
| {{cssxref("@media/device-aspect-ratio","device-aspect-ratio")}} {{deprecated_inline}} | Le rapport largeur/hauteur de la surface de rendu pour l'appareil d'affichage                                                    | Dépréciée par le niveau 4 du module de spécification _Media Queries_.                                                                     |

### Opérateurs logiques

Les opérateurs logiques `not`, `and` et `only` peuvent être utilisés afin de construire une requête média complexe. Il est aussi possible de combiner plusieurs requêtes média en les séparant par des virgules.

#### `and`

L'opérateur `and` permet de combiner plusieurs requêtes média en une seule. Pour que la requête résultante soit vraie, il faut que chacune des sous-requêtes soit vraie. Cet opérateur est également utilisé afin de relier des caractéristiques média avec des types de média.

#### `not`

L'opérateur `not` est utilisé afin d'obtenir le résultat opposé d'une requête média (il renvoie `true` si l'opérande renvoie `false`). S'il est utilisé dans une liste de requêtes séparées par des virgules, il ne nie que la requête sur laquelle il est appliqué. Si l'opérateur `not` est utilisé, la requête doit nécessairement contenir un type de média.

> **Note :** Pour la spécification de niveau 3, l'opérateur `not` ne peut pas être utilisé afin de prendre l'opposé d'une expression de caractéristique de média, il ne peut servir qu'à l'échelle d'une requête média entière.

#### `only`

L'opérateur `only` est utilisé afin d'appliquer un style uniquement si l'intégralité de la requête est vérifiée. Il permet d'empêcher les anciens navigateurs d'appliquer les styles concernés. Si on utilise pas `only`, un ancien navigateur interprètera `screen and (max-width: 500px)` comme `screen` uniquement (appliquant ainsi le style à tous les écrans). Si l'opérateur `only` est utilisé, la requête doit nécessairement contenir un type de média.

#### `,` (virgule)

Les virgules permettent de combiner plusieurs requêtes en une. Chaque requête est traitée séparément. Autrement dit, si une des requêtes de la liste renvoie `true`, toute la requête combinée renverra `true`. En ce sens, l'opérateur `,` agit comme un opérateur booléen `or`.

## Cibler des types de média

Les types de média décrivent la catégorie générale de l'appareil utilisé. Bien que la plupart des sites web soient principalement conçus pour être affichés sur des écrans, il est possible d'avoir des styles spécifiques pour les impressions ou pour les lecteurs d'écran. Voici une requête qui permet de cibler les imprimantes ou autres appareils imprimant le contenu sur plusieurs pages :

```css
@media print { ... }
```

Il est possible de cibler plusieurs types à la fois. La règle suivante permet de cibler les écrans et les appareils d'impression :

```css
@media screen, print { ... }
```

Pour une liste complète des types de média, voir [ci-avant](#types). Ces types étant très génériques, peu de valeurs sont disponibles. Afin d'avoir un ciblage plus fin, on pourra utiliser les caractéristiques média.

## Cibler des caractéristiques média

Les caractéristiques média décrivent les caractéristiques spécifiques d'un agent utilisateur, d'un appareil d'affichage ou de l'environnement. On peut ainsi cibler différents styles pour les écrans larges, pour les ordinateurs qui disposent d'une souris ou pour les appareils utilisés dans une faible luminosité. Dans l'exemple qui suit, on a une requête qui vérifie si le mécanisme de saisie principal de l'appareil peut survoler les éléments :

```css
@media (hover: hover) { ... }
```

De nombreuses caractéristiques média sont des caractéristiques portant sur un intervalle et peuvent être préfixées par `min-` ou `max-` afin d'exprimer des seuils de valeurs. Par exemple, la requête suivante permet d'appliquer des styles à condition que la largeur de la zone d'affichage (_viewport_) soit inférieure à 1250px :

```css
@media (max-width: 1250px) { ... }
```

> **Note :** Selon la spécification du W3C, les barres de défilement font partie des dimensions de la page. Ainsi la barre de défilement vertical s'ajoute à la largeur du document tandis que la barre de défilement horizontal s'ajoute à la hauteur du document. Cependant tous les navigateurs n'ont pas adopté cette recommandation (Chrome par exemple) et tous n'ont pas opté pour la même taille de barre de défilement, ce qui mène à un développement plus difficile pour assurer une comptabilité sur tous les navigateurs.

Si on utilise une caractéristique média sans indiquer de valeur, la requête sera vérifiée tant que la valeur de cette caractéristique n'est pas nulle (ou `none` pour la spécification de niveau 4). Ainsi, la requête suivante permettra d'appliquer les styles qu'elle contient si l'appareil peut afficher des couleurs :

```css
@media (color) { ... }
```

Si une caractéristique ne s'applique pas à l'appareil, les expressions utilisant cette caractéristique renverront `false`. Ainsi, la requête suivante aura toujours la valeur `false` car aucun appareil de synthèse vocale ne possède de caractéristique relative à ses proportions d'écran :

```css
@media speech and (aspect-ratio: 11/5) { ... }
```

Pour plus d'exemples, voir les pages de référence de chacune de ces caractéristiques depuis [le tableau ci-dessus](#caractéristiques).

## Créer des requêtes média complexes

Il est parfois nécessaire d'avoir une requête qui repose sur plusieurs conditions. Pour cela, on peut utiliser les opérateurs logiques : `not`, `and`, `only` et la virgule (`,`) afin de combiner plusieurs requêtes média.

Dans l'exemple précédent, on a utilisé l'opérateur `and` afin de combiner un type de média et une caractéristique média. Cet opérateur peut également servir à assembler plusieurs requêtes média pour en former la conjonction logique. L'opérateur `not` permet d'obtenir la négation d'une requête média tandis que l'opérateur `only` empêche les anciens navigateurs d'appliquer les styles qu'une requête contient.

> **Note :** Dans la plupart des cas, le type de média `all` est utilisé par défaut si aucun autre type n'est fourni. Toutefois, lorsqu'on utilise les opérateurs `not` ou `only`, il est nécessaire de fournir un type de média explicite.

### Combiner plusieurs types ou caractéristiques

Le mot-clé `and` permet de combiner une caractéristique média avec un type de média ou avec d'autres caractéristiques média. L'exemple suivant permet de restreindre l'application d'un style aux appareils orientés en mode paysage et dont la largeur mesure au moins 30ems :

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

Si on souhaite restreindre ces règles aux écrans, on pourra ajouter une clause avec le type de média `screen` :

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

### Tester plusieurs requêtes

La virgule peut être utilisée afin de créer une disjonction (un OU logique) sur différentes clauses (types de média, caractéristiques ou états). Dans l'exemple qui suit, les styles de la requête sont appliqués si l'appareil possède une hauteur supérieure ou égale à 680 pixels ou si l'écran est en mode portrait :

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

Avec cet exemple, si l'utilisateur utilise une imprimante et que la page mesure 800 pixels de haut, la requête média aurait été vérifiée. Il en aurait été de même si l'utilisateur avait utilisé un smartphone avec une zone d'affichage haute de 480 pixels en portrait car la deuxième clause aurait renvoyée `true`.

### Opérer une négation

Le mot-clé `not` permet d'inverser le résultat d'une requête. Il inversera uniquement la requête sur laquelle il est appliqué (et non la liste des requêtes s'il est utilisé au sein de requêtes séparées par des virgules). Le mot-clé `not` ne peut pas être utilisé afin d'inverser une caractéristique média, il peut uniquement être utilisé pour une requête média complète. Dans la requête qui suit, l'opérateur `not` est évalué en dernier :

```css
@media not all and (monochrome) { ... }
```

La requête précédente est donc équivalente à :

```css
@media not (all and (monochrome)) { ... }
```

Mais elle n'est pas équivalente à :

```css example-bad
@media (not all) and (monochrome) { ... }
```

De même :

```css
@media not screen and (color), print and (color) { ... }
```

sera évaluée comme :

```css
@media (not (screen and (color))), print and (color) { ... }
```

### Améliorer la compatibilité avec les anciens navigateurs

Le mot-clé `only` empêche les navigateurs qui ne prennent pas en charge les requêtes média avec les caractéristiques média d'appliquer les styles concernés. Cet opérateur n'a aucun effet pour les navigateurs modernes*.*

```css
@media only screen and (color) { ... }
```

## Améliorations syntaxiques avec la spécification de niveau 4

La spécification de niveau 4 pour les requêtes média ajoute des améliorations syntaxiques pour les requêtes média qui portent sur un intervalle (par exemple les critères de largeur et de hauteur). On peut par exemple utiliser le préfixe `max-` pour les largeurs et écrire :

```css
@media (max-width: 30em) { ... }
```

Avec les requêtes média de niveau 4, on peut écrire :

```css
@media (width <= 30em) { ... }
```

Si on utilise `min-` et `max-` conjointement, on peut tester l'appartenance d'une valeur à un intervalle :

```css
@media (min-width: 30em) and (max-width: 50em) { ... }
```

Avec les requêtes média de niveau 4, on peut écrire :

```css
@media (30em <= width <= 50em ) { ... }
```

Les requêtes média de niveau 4 permettent également d'utiliser une logique booléenne avec les opérateurs `and`, `not` et `or`.

### Tester l'absence d'une caractéristique avec `not`

On peut utiliser l'opérateur `not()` autour d'une caractéristique média afin de tester l'absence de cette caractéristique. Ainsi, on peut `not(hover)` pour cibler les appareils qui ne permettent pas le survol d'un élément :

```css
@media (not(hover)) { ... }
```

### Tester plusieurs caractéristiques avec `or`

Il est possible d'utiliser l'opérateur `or` pour tester une correspondance sur plus d'une caractéristique. Dans l'exemple suivant, on cible les appareils qui ont un affichage monochrome (`not (color)`) ou qui permettent de survoler les éléments (`hover`) :

```css
@media (not (color)) or (hover) { ... }
```

## Voir aussi

- [Tester des requêtes média en script](/fr/docs/Web/CSS/Media_Queries/Testing_media_queries)
- [Utiliser les animations CSS entre les requêtes média (en anglais)](https://davidwalsh.name/animate-media-queries)
- [Les caractéristiques média spécifiques à Mozilla](/fr/docs/Web/CSS/Mozilla_Extensions#caract%c3%a9ristiques)
- [Les caractéristiques média spécifiques à WebKit](/fr/docs/Web/CSS/WebKit_Extensions#caract%c3%a9ristiques_m%c3%a9dia)
