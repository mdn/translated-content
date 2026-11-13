---
title: Fonction CSS `polygon()`
short-title: polygon()
slug: Web/CSS/Reference/Values/basic-shape/polygon
l10n:
  sourceCommit: 6edb918a9e6bd17858d48dcfa5d76aa5ed5b9659
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`polygon()`** fait partie du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}. Elle permet de dessiner un [polygone](https://fr.wikipedia.org/wiki/Polygone) en fournissant une ou plusieurs paires de coordonnées, chacune représentant un sommet de la forme.

{{InteractiveExample("Démonstration CSS&nbsp;: polygon()")}}

```css interactive-example-choice
clip-path: polygon(
  0% 20%,
  60% 20%,
  60% 0%,
  100% 50%,
  60% 100%,
  60% 80%,
  0% 80%
);
```

```css interactive-example-choice
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntaxe

```css-nolint
/* Liste de coordonnées */
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0% 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* Liste de coordonnées avec règle de remplissage et/ou arrondi des valeurs */
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(round 20px, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd round 2em, 0% 0%, 50% 50%, 0% 100%)
```

### Paramètres

La fonction `polygon()` accepte un premier paramètre facultatif contenant des valeurs qui modifient l'apparence du polygone — un mot-clé {{SVGAttr("fill-rule")}}, le mot-clé `round` suivi d'une valeur {{CSSxRef("&lt;length&gt;")}}, ou les deux. Les composants du premier paramètre sont séparés par des espaces. Les autres paramètres sont des paires de coordonnées x/y de valeurs {{CSSxRef("&lt;length-percentage&gt;")}} séparées par des espaces.

- [`<fill-rule>`](/fr/docs/Web/SVG/Reference/Attribute/fill-rule) {{Optional_Inline}}
  - : Un mot-clé égal à `nonzero` (la valeur par défaut) ou `evenodd`, qui définit l'algorithme utilisé pour remplir la forme du polygone.
- `round <length>` {{Optional_Inline}}
  - : Le mot-clé `round` définit que le polygone possède des coins arrondis, et la valeur {{CSSxRef("length")}} associée définit le rayon de ces coins.
- {{CSSxRef("&lt;length-percentage&gt;")}}
  - : Chaque sommet, ou point, du polygone est représenté par une paire de valeurs `<length-percentage>` séparées par une espace et définissant les coordonnées x/y du sommet par rapport à la [boîte de référence](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside#la_boîte_de_référence) de la forme.

### Valeur de retour

Une valeur {{CSSxRef("basic-shape")}}.

## Description

Vous pouvez créer presque n'importe quelle forme avec la fonction `polygon()` en définissant les coordonnées x/y de ses sommets, ou points, sous forme de paires de valeurs {{CSSxRef("length-percentage")}} séparées par des virgules&nbsp;:

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

Bien qu'un seul point suffise pour créer une valeur valide de la fonction `polygon()`, au moins 3 points sont nécessaires pour créer une forme (un triangle). Le nombre de points définissables n'a pas de limite supérieure. La forme est dessinée en reliant les points définis dans l'ordre où ils apparaissent dans la fonction, une dernière ligne étant automatiquement dessinée entre le dernier et le premier point pour fermer la forme.

Vous pouvez définir les coordonnées d'une forme triangulaire comme ceci&nbsp;:

| axe | point 1 | point 2 | point 3 |
| --- | ------- | ------- | ------- |
| x   | 0%      | 100%    | 100%    |
| y   | 0%      | 0%      | 100%    |

Vous pouvez appliquer ces coordonnées à la propriété CSS {{CSSxRef("clip-path")}} dans une fonction `polygon()` comme suit&nbsp;:

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
```

Cela crée une forme triangulaire qui couvre la moitié de la surface de son conteneur parent en définissant les coordonnées de trois de ses quatre coins&nbsp;: en haut à gauche (`0% 0%`), en haut à droite (`100% 0%`) et en bas à droite (`100% 100%`). Si vous supposez un conteneur de 200x200px avec un arrière-plan vert&nbsp;:

```html hidden live-sample___basic
<div class="boite"></div>
```

```css hidden live-sample___basic
.boite {
  width: 200px;
  height: 200px;
  background-color: green;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
}
```

{{EmbedLiveSample("basic", "100%", 200)}}

### L'effet de l'ordre des points

L'ordre dans lequel vous définissez les points peut produire des formes différentes. Par exemple, les deux déclarations `clip-path` suivantes utilisent une fonction `polygon()` avec des paires de coordonnées X/Y pour les quatre coins du conteneur, mais dans un ordre différent.

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 100%);
```

```html hidden live-sample___different-order
<div class="boite"></div>
<div class="boite boite2"></div>
```

```css hidden live-sample___different-order
body {
  display: flex;
  gap: 20px;
}

.boite {
  width: 200px;
  height: 200px;
  background-color: purple;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.boite2 {
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 100%);
}
```

La première fonction dessine un carré, tandis que la seconde dessine une forme de sablier.

{{EmbedLiveSample("different-order", "100%", 200)}}

### Définir les modificateurs d'un polygone

La fonction `polygon()` accepte un premier paramètre facultatif qui modifie le rendu de la forme obtenue. La valeur du paramètre peut inclure l'un ou l'autre des éléments suivants, ou les deux, séparés par des espaces&nbsp;:

- Un mot-clé [`<fill-rule>`](/fr/docs/Web/SVG/Reference/Attribute/fill-rule) égal à `nonzero` (la valeur par défaut) ou `evenodd`, qui définit l'algorithme utilisé pour remplir la forme du polygone. Cela n'a un effet que lorsque les lignes tracées entre les valeurs de coordonnées se chevauchent.
- Le mot-clé `round` suivi d'une valeur {{CSSxRef("length")}}. Cela définit que le polygone possède des coins arrondis, la valeur `<length>` définissant le rayon de ces coins.

Par exemple, vous pouvez compléter l'exemple précédent du triangle et ajouter des coins arrondis&nbsp;:

```css
clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%);
```

```html hidden live-sample___basic-rounded
<div class="boite"></div>
```

```css hidden live-sample___basic-rounded
.boite {
  width: 200px;
  height: 200px;
  background-color: green;
  clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%);
}
```

Le résultat est la même forme triangulaire, mais avec des coins arrondis d'un rayon de `20px`&nbsp;:

{{EmbedLiveSample("basic-rounded", "100%", 200)}}

> [!NOTE]
> Dans chaque cas, le rayon des coins est limité afin de ne jamais dépasser la moitié de la longueur d'un segment de ligne. Le rayon maximal des coins est limité à la plus petite des valeurs de `tan(corner-angle/2) * (segment-length / 2)` évaluées par rapport aux deux segments de ligne qui forment le coin. [La spécification <sup>(angl.)</sup>](https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-polygon) contient davantage de détails pour les personnes intéressées.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer un triangle

Dans cet exemple, un triangle est formé en définissant les coordonnées de ses trois points.

#### HTML

```html live-sample___triangle
<div class="triangle"></div>
```

#### CSS

```css live-sample___triangle
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### Résultat

{{EmbedLiveSample("triangle", "100%", 400)}}

Les coordonnées du triangle sont le coin en haut à droite (`100% 0%`), le point central (`50% 50%`) et le coin en bas à droite (`100% 100%`) du conteneur.

### Créer une étoile arrondie

Dans cet exemple, nous créons une forme d'étoile et utilisons le mot-clé `round` pour arrondir ses coins.

#### HTML

```html live-sample___star
<div class="etoile"></div>
```

#### CSS

```css live-sample___star
.etoile {
  width: 400px;
  height: 400px;
  background-color: hotpink;
  clip-path: polygon(
    round 20px,
    50% 5%,
    60.85% 27.48%,
    85.22% 21.99%,
    74.38% 44.44%,
    93.88% 60.01%,
    69.57% 65.56%,
    69.53% 90.55%,
    50% 75%,
    30.47% 90.55%,
    30.43% 65.56%,
    6.12% 60.01%,
    25.62% 44.44%,
    14.78% 21.99%,
    39.15% 27.48%
  );
}
```

```css hidden live-sample___basic-rounded live-sample___star
@supports not (clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%)) {
  body::before {
    font-family: sans-serif;
    content: "Votre navigateur ne prend pas en charge le mot-clé round de la fonction polygon().";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Résultat

{{EmbedLiveSample("star", "100%", 400)}}

### Définir un polygone pour `shape-outside`

Dans cet exemple, une forme est créée pour que le texte la suive grâce à la propriété {{CSSxRef("shape-outside")}}.

```html live-sample___shape-outside
<div class="boite">
  <div class="forme"></div>
  <p>
    Une nuit de novembre en 1782, paraît‑il, deux frères étaient assis près de
    leur feu d'hiver dans la petite ville française d'Annonay, observant les
    volutes de fumée grises s'élever de la large cheminée. Ils s'appelaient
    Stephen et Joseph Montgolfier, ils exerçaient le métier de papetier, et
    étaient connus pour leur esprit réfléchi et leur vif intérêt pour toute
    connaissance scientifique et toute nouvelle découverte. Avant cette nuit—une
    nuit mémorable, comme elle devait le devenir—des centaines de millions de
    personnes avaient vu s'élever la fumée de leurs feux sans en tirer une
    inspiration particulière.
  </p>
</div>
```

```css live-sample___shape-outside
.boite {
  width: 250px;
}

.forme {
  float: left;
  shape-outside: polygon(
    0 5%,
    15% 12%,
    30% 15%,
    40% 26%,
    45% 35%,
    45% 45%,
    40% 55%,
    10% 90%,
    10% 98%,
    8% 100%,
    0 100%
  );
  width: 300px;
  height: 320px;
}

p {
  font-size: 0.9rem;
}
```

{{EmbedLiveSample("shape-outside", "100%", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés utilisant ce type de données&nbsp;: {{CSSxRef("border-shape")}}, {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
