---
title: Fonction CSS `random()`
short-title: random()
slug: Web/CSS/Reference/Values/random
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`random()`** génère une valeur aléatoire dans une plage définie, en limitant éventuellement les valeurs possibles aux intervalles de taille de pas entre ces limites. Elle peut être utilisée lors de la spécification d'une longueur ({{CSSxRef("&lt;length&gt;")}}), d'une fréquence ({{CSSxRef("&lt;frequency&gt;")}}), d'un angle ({{CSSxRef("angle")}}), d'un temps ({{CSSxRef("&lt;time&gt;")}}), d'une résolution ({{CSSxRef("&lt;resolution&gt;")}}), d'un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), d'un nombre ({{CSSxRef("&lt;number&gt;")}}) ou d'un entier ({{CSSxRef("&lt;integer&gt;")}}) dans une valeur de propriété.

{{InteractiveExample("Démonstration CSS&nbsp;: random()")}}

```html interactive-example
<div class="box"></div>
```

```css interactive-example
.box {
  rotate: random(element-shared, 0deg, 360deg);
  width: random(element-shared, 50px, 300px);
  background-color: hsl(random(element-shared, 0, 360) 50% 50%);
  height: random(element-shared, 50px, 300px);
}

@supports not (order: random(1, 2)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la fonction random().";
  }
}
```

## Syntaxe

```css
/* Utilisation simple */
random(0, 100)
random(10px, 500px)
random(0deg, 360deg)

/* Avec intervalle de pas */
random(0, 100, 10)
random(0rad, 1turn, 30deg)

/* Avec valeur de base */
random(auto, 0, 360)
random(element-shared, 0s, 5s)
random(--unique-base, 400px, 100px)
random(fixed 0.5, 1em, 40vw)
random(--unique-base element-shared, 100dpi, 300dpi)

/* Avec valeur de base et intervalle de pas */
random(element-shared, 0deg, 360deg, 45deg)
random(--my-base, 1em, 3rem, 2px)
```

### Paramètres

- `<random-value-sharing>` {{Optional_Inline}}
  - : Contrôle quelles fonctions `random()` dans le document partagent une valeur de base aléatoire et lesquelles obtiennent des valeurs distinctes.
    Cela peut être l'une des valeurs suivantes, ou à la fois une clé personnalisée et le terme clé `element-shared`, séparés par un espace&nbsp;:
    - `auto`
      - : Chaque utilisation de `random()` dans le style d'un élément obtient sa propre valeur de base aléatoire unique.
    - {{CSSxRef("dashed-ident")}}
      - : Une clé personnalisée (par exemple, `--my-random-key`) pour partager la même valeur de base aléatoire entre les propriétés d'un élément.
    - `element-shared`
      - : Une valeur de base aléatoire est partagée entre tous les éléments pour la même propriété utilisant ce terme clé. Cette valeur de base est indépendante des fonctions `random()` incluses dans les valeurs d'autres propriétés sur le même élément, sauf si les fonctions random incluent également la même clé personnalisée.
    - `fixed <number>`
      - : Définit une valeur de base comprise entre `0` et `1`, incluse, à partir de laquelle la valeur aléatoire est générée.

- `<calc-sum>, <calc-sum>`
  - : Deux valeurs requises, séparées par une virgule, `<number>`, `<dimension>`, ou `<percentage>`, ou des calculs résolvant à l'un de ces types, définissant respectivement les valeurs minimale et maximale. Les deux valeurs doivent être résolubles au même [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types). Si la valeur maximale est inférieure à la valeur minimale, la fonction retourne la première valeur `<calc-sum>`.

- `<calc-sum>` {{Optional_Inline}}
  - : La troisième `<calc-sum>` optionnelle, précédée d'une virgule, définit l'intervalle de pas. Si elle est présente, et du même type de données que les deux valeurs `<calc-sum>` minimales et maximales séparées par des virgules, elle définit la valeur de retour comme étant la valeur minimale ou à des incréments de la valeur de pas à partir de la valeur minimale, jusqu'à la valeur maximale.

### Valeur de retour

Retourne un nombre (`<number>`), une dimension (`<dimension>`), ou un pourcentage (`<percentage>`) aléatoire compris entre les valeurs minimale et maximale, incluses, du même type que les paramètres `<calc-sum>`.

## Description

La fonction `random(SEED, MIN, MAX, STEP)` définit les valeurs minimale et maximale et les incréments de pas optionnels, en commençant par la valeur minimale. La fonction génère un résultat aléatoire dans la plage définie. La graine, un paramètre [optionnel `<random-value-sharing>`](#random-value-sharing), permet de partager ou de varier les valeurs de base aléatoires entre différentes propriétés et éléments.

Les valeurs minimale, maximale et de pas définies doivent être du même type de données pour que la fonction soit valide. Bien que les unités des deux à trois paramètres `<calc-sum>` n'aient pas besoin d'être les mêmes, elles doivent être du même type de données, comme un nombre ({{CSSxRef("&lt;number&gt;")}}), un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), une longueur ({{CSSxRef("&lt;length&gt;")}}), un angle ({{CSSxRef("&lt;angle&gt;")}}), un temps ({{CSSxRef("&lt;time&gt;")}}) ou une fréquence ({{CSSxRef("&lt;frequency&gt;")}}), pour être valides.

### Valeur de base aléatoire

La valeur de base aléatoire fonctionne comme une [graine pour l'aléatoire](/fr/docs/Glossary/RNG). C'est un nombre de départ utilisé pour générer le résultat aléatoire final. Lorsque deux fonctions `random()` partagent la même valeur de base, leurs résultats varient ensemble selon un schéma prévisible. Lorsqu'elles ont des valeurs de base différentes, leurs résultats sont complètement indépendants les uns des autres.

Le premier paramètre optionnel `<random-value-sharing>` contrôle la manière dont la valeur de base aléatoire est partagée. Le partage permet de réutiliser la même valeur générée aléatoirement, ce qui est nécessaire pour certains effets de conception. La valeur peut être définie pour utiliser `auto`, le mot-clé `element-shared`, un identifiant à tiret ({{CSSxRef("&lt;dashed-ident&gt;")}}) personnalisé, ou `fixed <number>`. Inclure un identifiant à tiret ({{CSSxRef("&lt;dashed-ident&gt;")}}) personnalisé avec le mot-clé `element-shared`, séparé par des espaces, est également valide.

#### Le mot-clé `element-shared`

Toutes les fonctions `random()` avec le mot-clé `element-shared` partagent la même valeur de base aléatoire pour une seule propriété à travers tous les éléments. Par exemple, lorsque ce qui suit est déclaré, `.a`, `.b` et `.c` sont des rectangles de taille identique, les trois ayant la même largeur aléatoire et les trois ayant la même hauteur aléatoire générée indépendamment&nbsp;:

```css
.a,
.b,
.c {
  width: random(element-shared, 10px, 200px);
  height: random(element-shared, 10px, 200px);
}
```

#### Noms personnalisés

Lorsque vous définissez un `<dashed-ident>` (par exemple, `--nom-personnalise`), chaque élément dans les styles d'un élément avec le même nom partage la même valeur de base aléatoire, et ceux avec des valeurs `<dashed-ident>` différentes se voient attribuer des valeurs de base aléatoires distinctes. Lorsque ce qui suit est déclaré, `.a`, `.b` et `.c` sont tous des carrés, car au sein de chaque élément, toutes les propriétés qui font référence au même ident partagent la même valeur de base. Par conséquent, la largeur de chacun est la même que sa hauteur. Notez que, dans ce cas, `.a`, `.b` et `.c` ont des tailles distinctes, car le partage de la valeur de base se fait entre les propriétés d'un élément, et non entre les éléments.

```css
.a,
.b,
.c {
  width: random(--nom-personnalise, 10px, 200px);
  height: random(--nom-personnalise, 10px, 200px);
}
```

#### Définir à la fois `<dashed-ident>` et `element-shared`

Combiner un `<dashed-ident>` avec `element-shared` (par exemple, `random(--nom-personnalise element-shared, 0, 100)`) partage la valeur de base aléatoire à la fois entre les éléments et les propriétés qui utilisent le même paramètre `<random-value-sharing>`. Étant donné ce qui suit, `.a`, `.b` et `.c` sont tous des carrés de la même taille&nbsp;:

```css
.a,
.b,
.c {
  width: random(--nom-personnalise element-shared, , 10px, 200px);
  height: random(--nom-personnalise element-shared, 10px, 200px);
}
```

#### Comportement automatique

Lorsque le premier paramètre est omis ou défini explicitement sur `auto`, un identifiant est généré automatiquement à partir du nom de la propriété et de sa position. Ce comportement peut entraîner un partage inattendu de la valeur de base aléatoire.

```css
.toto {
  width: random(100px, 200px);
}
.toto:hover {
  width: random(100px, 200px);
}
.truc {
  margin: random(1px, 100px) random(1px, 100px);
}
.truc:hover {
  margin: random(1px, 100px) random(1px, 100px) random(1px, 100px)
    random(1px, 100px);
}
```

Lorsque le paramètre `<random-value-sharing>` est omis ou défini explicitement sur `auto`, l'agent utilisateur génère automatiquement un nom de graine, ou _identifiant de partage de valeur généré_, suivant des règles cohérentes basées sur le nom de la propriété et l'ordre. En raison de cela, les fonctions `random()` peuvent finir par avoir le même nom de graine et, par conséquent, la même valeur de base aléatoire. Dans cet exemple, l'identifiant de partage de valeur généré pour la fonction `random()` dans la valeur de la propriété `width` est le même pour `.toto` que pour `.toto:hover`, donc la valeur ne change pas entre les états. De même, les deux premières fonctions `random()` dans les deux déclarations de `margin` ont le même identifiant de partage de valeur généré, ce qui signifie que les deux premières valeurs dans le raccourci `margin` restent inchangées lors du survol&nbsp;; lors du survol, les marges supérieures et droites de `truc` restent les mêmes, mais les marges inférieures et gauches obtiennent des valeurs aléatoires indépendantes. Pour obtenir une valeur indépendante pour chaque fonction `random()`, fournissez un identifiant à tirets ({{CSSxRef("&lt;dashed-ident&gt;")}}) unique.

### Propriétés personnalisées

Comme pour toutes les fonctions CSS, lorsqu'une fonction `random()` est incluse dans la valeur d'une propriété personnalisée, la valeur reste une fonction&nbsp;; elle se comporte comme un mécanisme de remplacement de texte, ne stockant pas une seule valeur de retour.

```css
--taille-aleatoire: random(1px, 100px);
```

Dans cet exemple, la propriété personnalisée `--taille-aleatoire` ne «&nbsp;stocke&nbsp;» pas le résultat généré aléatoirement. Lorsque `var(--taille-aleatoire)` est analysée, elle est effectivement remplacée par `random(1px, 100px)`, ce qui signifie que chaque utilisation crée un nouvel appel de fonction `random()` avec sa propre valeur de base en fonction du contexte dans lequel elle est utilisée.

Ce n'est pas vrai dans le cas de l'utilisation de `random()` lors de l'enregistrement d'une propriété personnalisée avec {{CSSxRef("@property")}}. Les propriétés personnalisées enregistrées calculent les valeurs aléatoires et les stockent.

Dans cet exemple, comme `--tailleParDefaut` est enregistrée, `.a`, `.b` et `.c` sont des carrés de taille égale, mais leurs couleurs sont aléatoires, car `--angle-aleatoire` n'a pas été enregistrée&nbsp;:

```css
@property --tailleParDefaut {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: random(100px, 200px);
}
:root {
  --angle-aleatoire: random(0deg, 360deg);
}
.a,
.b,
.c {
  background-color: hsl(var(--angle-aleatoire) 100% 50%);
  height: var(--tailleParDefaut);
  width: var(--tailleParDefaut);
}
```

## Accessibilité

Comme `random()` peut générer une valeur inconnue dans une plage, vous n'avez pas un contrôle total sur ce que vous obtenez. Cela peut conduire à des résultats inaccessibles. Par exemple, si vous utilisez `random()` pour générer la couleur du texte, vous pourriez obtenir une valeur ayant un faible contraste avec son arrière-plan. Il est important de tenir compte du contexte dans lequel `random()` est utilisé, en veillant à ce que vos résultats soient toujours accessibles.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans cet exemple, nous allons générer des couleurs aléatoires pour quelques badges circulaires afin de démontrer l'utilisation de base de la fonction `random()`.

#### HTML

Nous incluons cinq badges, dont un utilisant la classe `desaturee` et deux utilisant la classe `unique`.

```html
<div class="badge"></div>
<div class="badge"></div>
<div class="badge desaturee"></div>
<div class="badge unique"></div>
<div class="badge unique"></div>
```

#### CSS

Nous rendons les cinq badges sous forme de cercles. Nous utilisons la fonction `random()` dans une fonction de couleur {{CSSxRef("color_value/hsl()")}} pour définir un angle ({{CSSxRef("angle")}}) de la teinte ({{CSSxRef("hue")}}). Nous définissons `element-shared` pour partager la valeur de base aléatoire entre le badge par défaut et celui désaturé, de sorte qu'il s'agisse d'une version moins saturée de la même teinte ({{CSSxRef("hue")}}). Nous remplaçons ensuite les badges `unique` pour avoir une teinte ({{CSSxRef("hue")}}) vraiment aléatoire en laissant le paramètre de partage de la valeur de base par défaut sur `auto`.

```css
.badge {
  display: inline-block;
  width: 5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: hsl(random(element-shared, 0, 360) 50% 50%);
}
.badge.desaturee {
  background: hsl(random(element-shared, 0, 360) 10% 50%);
}
.badge.unique {
  background: hsl(random(0, 360) 50% 50%);
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la fonction random().";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 300)}}

### Partager une valeur aléatoire entre les propriétés

Dans cet exemple, nous créons un arrière-plan étoilé pour démontrer l'utilisation d'un `<dashed-ident>` afin de partager une valeur de départ entre les propriétés d'un élément.

#### HTML

Nous incluons cinq particules, toutes partageant le même nom de classe.

```html
<div class="particule"></div>
<div class="particule"></div>
<div class="particule"></div>
<div class="particule"></div>
<div class="particule"></div>
```

#### CSS

Chaque particule a les mêmes styles. Nous utilisons la fonction `random()` pour les valeurs de {{CSSxRef("height")}}, {{CSSxRef("width")}}, {{CSSxRef("top")}} et {{CSSxRef("left")}} afin de dimensionner et positionner aléatoirement chaque particule. Nous utilisons un `<dashed-ident>` comme valeur de base pour la hauteur (`height`) et la largeur (`width`), ce qui signifie que la taille des particules est indépendante les unes des autres, dans une plage définie, mais que la hauteur (`height`) de chaque particule est la même que sa largeur (`width`). Nous permettons à la valeur de base de se résoudre en `auto` pour les propriétés `top` et `left`, de sorte que la valeur de base pour chaque propriété et chaque élément soit indépendante les unes des autres.

```css
body {
  background: black;
}

.particule {
  border-radius: 50%;
  background: white;
  position: fixed;
  width: random(--taille-particule, 0.25em, 1em);
  height: random(--taille-particule, 0.25em, 1em);
  top: random(0%, 100%);
  left: random(0%, 100%);
  animation: move 1s alternate-reverse infinite;
}
```

```css hidden
@supports not (order: random(1, 2)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la fonction random().";
    color: white;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

{{EmbedLiveSample("Partager une valeur aléatoire entre les propriétés", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("calc()")}}
- Le module [des unités et valeurs CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- La méthode JavaScript {{JSxRef("Math.random()")}}
- [Lancer les dés avec `random()` CSS <sup>(angl.)</sup>](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/) sur webkit.org (2025)
- [Almanach CSS&nbsp;: random() <sup>(angl.)</sup>](https://css-tricks.com/almanac/functions/r/random/) sur CSS-Tricks.com
