---
title: polygon()
slug: Web/CSS/Reference/Values/basic-shape/polygon
original_slug: Web/CSS/basic-shape/polygon
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
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
/* Spécifié comme liste de coordonnées */
/* polygon(<length-percentage> <length-percentage>, ... )*/
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0% 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* Spécifié comme liste de coordonnées et règle de remplissage */
/* polygon(<fill-rule> <length-percentage> <length-percentage>, ... )*/
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd, 0% 0%, 50% 50%, 0% 100%)
```

Les paramètres de `polygon()` sont séparés par une virgule et des espaces optionnels. Le premier paramètre est une valeur optionnelle [`<fill-rule>`](/fr/docs/Web/SVG/Reference/Attribute/fill-rule). Les paramètres suivants sont des points qui définissent le polygone. Chaque point est une paire de coordonnées x/y {{CSSxRef("length-percentage")}} séparées par un espace, par exemple «&nbsp;0 0&nbsp;» et «&nbsp;100% 100%&nbsp;» pour les coins en haut à gauche et en bas à droite.

Remarque&nbsp;: l'élément SVG [`<polygon>`](/fr/docs/Web/SVG/Reference/Element/polygon) possède des attributs séparés pour [`fill-rule`](/fr/docs/Web/SVG/Reference/Attribute/fill-rule) et [`points`](/fr/docs/Web/SVG/Reference/Attribute/points), et `points` accepte indifféremment les espaces ou les virgules comme séparateurs. En CSS, les règles de séparation de `polygon()` sont strictes.

### Paramètres

- [`<fill-rule>`](/fr/docs/Web/SVG/Reference/Attribute/fill-rule) {{Optional_Inline}}
  - : Valeur optionnelle `nonzero` (par défaut si omise) ou `evenodd`, qui définit la règle de remplissage.
- {{CSSxRef("length-percentage")}}
  - : Chaque sommet du polygone est représenté par une paire de valeurs `<length-percentage>`, qui donne les coordonnées x/y du sommet par rapport à la [boîte de référence](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) de la forme.

### Valeur de retour

Retourne une valeur {{CSSxRef("basic-shape")}}.

## Description

Vous pouvez créer presque n'importe quelle forme avec la fonction `polygon()` en définissant les coordonnées de ses points. L'ordre dans lequel vous définissez les points a de l'importance et peut produire des formes différentes. La fonction `polygon()` exige au moins 3 points (ce qui crée un triangle), mais il n'y a pas de limite supérieure.

La fonction `polygon()` accepte des coordonnées ou points séparés par des virgules. Chaque point est représenté par une paire de valeurs `x` et `y` séparées par un espace, qui indiquent les coordonnées du point dans le polygone.

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

La correspondance des coordonnées du conteneur peut être visualisée ainsi&nbsp;:

| axis | point 1 | point 2 | point 3 | point 4 | point n       |
| ---- | ------- | ------- | ------- | ------- | ------------- |
| x    | 0%      | 100%    | 100%    | 0%      | x<sub>n</sub> |
| y    | 0%      | 0%      | 100%    | 100%    | y<sub>n</sub> |

En appliquant ces coordonnées à la propriété CSS {{CSSxRef("clip-path")}} avec la fonction `polygon()`&nbsp;:

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
```

Cela crée un rectangle de la taille de son parent en définissant les coordonnées de ses quatre coins&nbsp;: en haut à gauche (`0% 0%`), en haut à droite (`100% 0%`), en bas à droite (`100% 100%`) et en bas à gauche (`0% 100%`).

## Syntaxe formelle

{{CSSSyntax}}

## Examples

### Créer un triangle

Dans cet exemple, un triangle est formé en définissant les coordonnées de ses trois points.

#### HTML

```html
<div class="triangle"></div>
```

#### CSS

```css
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### Résultat

{{EmbedLiveSample("créer_un_triangle", '100%', 400)}}

Les coordonnées du triangle sont le coin en haut à droite (`100% 0%`), le point central (`50% 50%`) et le coin en bas à droite (`100% 100%`) du conteneur.

### Définir un polygone pour shape-outside

Dans cet exemple, une forme est créée pour que le texte la suive grâce à la propriété {{CSSxRef("shape-outside")}}.

```html
<div class="box">
  <div class="shape"></div>
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

```css
.box {
  width: 250px;
}

.shape {
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

{{EmbedLiveSample("définir_un_polygone_pour_shape-outside", '100%', 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés utilisant ce type de données&nbsp;: {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}}
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
