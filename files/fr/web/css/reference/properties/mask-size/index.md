---
title: mask-size
slug: Web/CSS/Reference/Properties/mask-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-size`** définit les dimensions des images utilisées comme masques. La taille de l'image peut être contrainte, partiellement ou complètement, afin de conserver ses proportions intrinsèques.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-size: cover;
mask-size: contain;
mask-size: auto;

/* Syntaxe avec une valeur */
/* La largeur du masque. Définit la hauteur à 'auto'. */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;

/* Syntaxe avec deux valeurs */
/* Première valeur : largeur du masque. Deuxième valeur : hauteur du masque. */
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto 50%;

/* Valeurs multiples */
mask-size: auto, contain;
mask-size:
  50%,
  50% 25%,
  auto 25%;
mask-size: 6px, auto, contain;

/* Valeurs globales */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

### Valeurs

La propriété `mask-size` accepte une liste séparée par des virgules de valeurs `<bg-size>`. Une valeur `<bg-size>` est soit `cover`, `contain`, une paire de valeurs définissant la largeur et la hauteur (dans cet ordre), ou une seule valeur définissant la largeur (dans ce cas, la hauteur est définie sur `auto`). Les valeurs incluent&nbsp;:

- `contain`
  - : Redimensionne l'image du masque vers le haut ou vers le bas, tout en conservant son rapport d'aspect, pour que le masque soit aussi grand que possible dans son conteneur sans le recadrer ni l'étirer.
    Si l'image du masque est plus petite que le conteneur, le masque sera répété, sauf si la propriété {{CSSxRef("mask-repeat")}} est définie sur `no-repeat`.

- `cover`
  - : Redimensionne l'image du masque à la plus petite taille possible pour remplir le conteneur tout en conservant son rapport d'aspect. Si le rapport d'aspect de l'image du masque diffère de celui de l'élément, elle sera recadrée verticalement ou horizontalement.

- `auto`
  - : Conserve le rapport d'aspect original de la source du masque. Lorsqu'il est défini pour la largeur et la hauteur, la taille d'origine de la ressource du masque est utilisée. Sinon, `auto` redimensionne l'image du masque dans la direction correspondante de manière à ce que son rapport d'aspect original soit maintenu.

- {{CSSxRef("&lt;length&gt;")}}
  - : Affiche l'image du masque à la longueur définie dans la dimension correspondante (largeur si définie comme première ou seule valeur, hauteur si définie comme deuxième valeur). Les valeurs négatives ne sont pas autorisées.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Affiche l'image du masque dans la dimension correspondante en fonction du pourcentage défini de la zone d'origine de la boîte telle que définie par la propriété {{CSSxRef("mask-origin")}}, qui par défaut est `padding-box`. Les valeurs négatives ne sont pas autorisées.

## Description

La propriété `mask-size` est utilisée pour définir la taille des calques de masque.

Un élément peut avoir plusieurs calques de masque appliqués. Le nombre de calques de masque est déterminé par le nombre de valeurs séparées par des virgules dans la valeur de la propriété {{CSSxRef("mask-image")}} (une valeur crée un calque de masque, même si c'est `none`).

Chaque valeur `mask-size` dans la liste de valeurs séparées par des virgules est associée à un calque de masque correspondant tel que défini par la liste des valeurs `mask-image`, dans l'ordre. Si le nombre de valeurs dans les deux propriétés diffère&nbsp;:

- Si `mask-size` a plus de valeurs que `mask-image`, les valeurs excédentaires de `mask-size` ne sont pas utilisées.
- Si `mask-size` a moins de valeurs que `mask-image`, les valeurs de `mask-size` sont répétées.

Chaque valeur `mask-size` est une valeur `<bg-size>`. Il existe trois façons de déclarer chaque `<bg-size>`&nbsp;: un mot-clé, deux longueurs, pourcentages ou le mot-clé `auto`, ou une longueur, un pourcentage ou `auto`&nbsp;:

- Les mots-clés disponibles sont `cover` et `contain`.
- Lorsque deux valeurs sont définies, la première définit la largeur du masque et la seconde définit sa hauteur.
- Lorsque une seule valeur est définie, elle définit uniquement la largeur du masque, la hauteur étant définie sur `auto`.

Les valeurs de largeur et de hauteur sont une laongueur ({{CSSxRef("&lt;length&gt;")}}), un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou le mot-clé `auto`, qui est la valeur par défaut. Définir une ou les deux valeurs sur `auto` maintient le rapport d'aspect original de l'image du masque.

La taille rendue de l'image du masque est calculée comme suit&nbsp;:

- Si les deux composants de `mask-size` sont définis et ne sont pas `auto`, l'image du masque est rendue à la taille définie.
- Si `mask-size` est `contain` ou `cover`, l'image est rendue en préservant son rapport d'aspect à la plus grande taille contenue dans ou couvrant la zone de positionnement du masque. Si l'image n'a pas de proportion intrinsèque, comme avec les dégradés, elle est alors rendue à la taille de la zone de positionnement du masque.
- Si `mask-size` est `auto` (ce qui se résout en `auto auto`), elle est rendue à la taille à laquelle le masque serait affiché si aucun CSS n'était appliqué pour modifier le rendu&nbsp;; c'est sa {{Glossary("intrinsic size", "taille intrinsèque")}}. Si elle n'a pas de dimensions intrinsèques et pas de proportion intrinsèque, comme c'est le cas avec les [dégradés CSS](/fr/docs/Web/CSS/Reference/Values/gradient), elle est rendue à la taille de la zone de positionnement du masque, définie par la {{CSSxRef("mask-origin")}} (qui par défaut est `border-box`).
  Si la source du masque n'a pas de dimensions mais a une proportion (rapport d'aspect), une valeur de `auto` la rendra comme si `contain` avait été défini à la place. Si l'image a une dimension intrinsèque et une proportion, elle est rendue à la taille déterminée par cette dimension et la proportion. Si l'image a une dimension intrinsèque mais pas de proportion, elle est rendue en utilisant la dimension intrinsèque et la dimension correspondante de la zone de positionnement du masque.
- Si `mask-size` a un composant `auto` et un composant qui n'est pas `auto`, ce qui s'applique à toutes les valeurs à un seul composant, le rapport d'aspect est maintenu si la source du masque a une proportion intrinsèque. S'il n'y a pas de proportions intrinsèques, la valeur `auto` est supposée être la dimension de la zone de positionnement du masque.

Comme pour tous les composants en notation longue d'une propriété raccourcie, si la propriété raccourcie {{CSSxRef("mask")}} est définie et que la valeur de la propriété `mask-size` n'est pas définie dans une couche de masque, la valeur de `mask-size` est réinitialisée à sa valeur initiale `auto` pour ces couches de masque.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille du masque en pourcentages

Cet exemple montre l'utilisation de base, tout en démontrant les valeurs en pourcentage pour `mask-size`.

#### HTML

Nous inclusons deux éléments HTML {{HTMLElement("div")}}&nbsp;:

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

Les éléments `<div>` sont définis pour être deux fois plus hauts que larges, avec un fond en dégradé et un masque&nbsp;:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mdn.svg");
}
```

La largeur du masque d'un élément `<div>` est définie à `50%`, la hauteur étant par défaut `auto`. La hauteur du masque pour le deuxième élément `<div>` est définie à `50%` avec la largeur définie à `auto`&nbsp;:

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

Dans le cas de la `width`, le masque est rendu `100px` de large (`50%` de l'élément de `200px` de large). La hauteur par défaut est `auto`, ce qui maintient le rapport d'aspect du masque.
Dans le cas de la `height`, le masque est rendu `200px` de haut (`50%` du conteneur de `400px` de haut). La largeur est explicitement définie à `auto`, ce qui maintient le rapport d'aspect du masque.

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### Résultats

{{EmbedLiveSample("Définir la taille du masque en pourcentages", "", 430)}}

### Couvrir et contenir

Cet exemple montre les valeurs de mots-clés pour `mask-size`.

#### HTML

Trois éléments HTML {{HTMLElement("section")}} sont définis, chacun avec un nom de classe différent, et chacun contenant un `<div>`.

```html
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

#### CSS

Les éléments `<div>` sont définis pour être deux fois plus hauts que larges, avec un fond en dégradé et un masque&nbsp;:

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}
```

La propriété `mask-size` de deux des éléments `<div>` est définie sur l'une des valeurs de mots-clés de la propriété. Le troisième `<div>` a une `mask-size` de `auto` définie, démontrant les dimensions intrinsèques originales du masque&nbsp;:

```css
.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}
```

Les valeurs de la propriété sont affichées en utilisant [du contenu généré](/fr/docs/Web/CSS/Guides/Generated_content).

```css
section::before {
  content: "mask-size: " attr(class) ";";
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

#### Résultats

{{EmbedLiveSample("Couvrir et contenir", "", 430)}}

Avec `auto`, l'étoile est affichée à sa taille intrinsèque de `100px` par `100px`. Avec `cover`, l'étoile grandit pour atteindre `400px` de haut, couvrant toute la boîte d'origine. Avec `contain`, l'étoile grandit jusqu'à ce qu'une dimension soit égale à la même dimension de la [boîte d'origine](/fr/docs/Web/CSS/Reference/Properties/mask-origin), ce qui signifie que l'étoile est aussi grande que possible (`200px` de large) tout en restant contenue.

### Lorsque le masque est plus grand que le conteneur

En utilisant le même HTML et CSS que ci-dessus, avec juste une taille de boîte d'origine différente, cet exemple explore ce qui se passe lorsque la boîte d'origine est plus petite que les dimensions intrinsèques du masque.

```html hidden
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

```css hidden
div {
  background: blue linear-gradient(red, blue);
  mask-image: url("/shared-assets/images/examples/mask-star.svg");
}

.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}

section::before {
  content: attr(class);
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}

body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

La seule différence est la taille de la boîte contenant (et du contenu généré)&nbsp;:

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("Lorsque le masque est plus grand que le conteneur", "", 120)}}

La valeur `contain` contient le masque à l'intérieur de la boîte d'origine. La valeur `cover` le couvre. Dans les deux cas, le masque rétrécit tout en conservant le rapport d'aspect original. Avec `auto`, le masque est coupé car les dimensions intrinsèques sont plus grandes que celles de la boîte.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-size")}}
- La propriété raccourcie {{CSSxRef("mask")}}
- La propriété {{CSSxRef("mask-image")}}
- La propriété {{CSSxRef("mask-origin")}}
- La propriété {{CSSxRef("mask-position")}}
- La propriété {{CSSxRef("mask-repeat")}}
- La propriété {{CSSxRef("mask-image")}}
- La propriété {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("background-size")}}
- La propriété {{CSSxRef("mask-border-width")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
