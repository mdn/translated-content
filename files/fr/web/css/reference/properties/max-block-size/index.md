---
title: max-block-size
slug: Web/CSS/Reference/Properties/max-block-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La propriété [CSS](/fr/docs/Web/CSS) **`max-block-size`** définit la taille maximale d'un élément selon l'axe perpendiculaire (l'axe de bloc) au sens d'écriture défini par {{CSSxRef("writing-mode")}}. Cela signifie que si le sens d'écriture est horizontal, `max-block-size` est équivalent à {{CSSxRef("max-height")}}&nbsp;; si le sens d'écriture est vertical, `max-block-size` est équivalent à {{CSSxRef("max-width")}}.

La longueur maximale de l'autre dimension est définie à l'aide de la propriété {{CSSxRef("max-inline-size")}}.

Ceci est utile car `max-width` est toujours utilisé pour les tailles horizontales et `max-height` est toujours utilisé pour les tailles verticales, et si vous devez définir des longueurs en fonction de la taille de votre contenu textuel, vous devez pouvoir le faire en tenant compte de la direction d'écriture.

Chaque fois que vous utiliseriez normalement `max-height` ou `max-width`, vous devriez plutôt utiliser `max-block-size` pour définir la «&nbsp;hauteur&nbsp;» maximale du contenu (même si cela peut ne pas être une valeur verticale) et `max-inline-size` pour définir la «&nbsp;largeur&nbsp;» maximale du contenu (même si cela peut être vertical plutôt qu'horizontal). Voir les [exemples de `writing-mode`](/fr/docs/Web/CSS/Reference/Properties/writing-mode#exemples), qui montrent les différents modes d'écriture en action.

{{InteractiveExample("Démonstration CSS&nbsp;: max-block-size")}}

```css interactive-example-choice
max-block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
max-block-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
max-block-size: 75%;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez changer la taille maximale du bloc.
    <br />
    Cela limitera la taille dans la dimension du bloc, pouvant provoquer un
    débordement.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
max-block-size: 300px;
max-block-size: 25em;
max-block-size: anchor-size(--my-anchor self-inline, 250px);
max-block-size: calc(anchor-size(width) / 2);

/* Valeurs de type <percentage> */
max-block-size: 75%;

/* Valeurs avec un mot-clé */
max-block-size: none;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content;
max-block-size: fit-content(20em);

/* Valeurs globales */
max-block-size: inherit;
max-block-size: initial;
max-block-size: revert;
max-block-size: revert-layer;
max-block-size: unset;
```

### Valeurs

La valeur de la propriété `max-block-size` peut être n'importe quelle valeur légale pour les propriétés {{CSSxRef("max-width")}} et {{CSSxRef("max-height")}}&nbsp;:

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la valeur de `max-block-size` avec une longueur absolue.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la valeur `max-block-size` comme un pourcentage de la taille du bloc englobant sur l'axe de bloc.
- `none`
  - : Aucune limite n'est imposée à la taille de la boîte.
- {{CSSxRef("max-content")}}
  - : La valeur intrinsèque préférée de `max-block-size`.
- {{CSSxRef("min-content")}}
  - : La valeur intrinsèque minimale de `max-block-size`.
- {{CSSxRef("fit-content")}}
  - : Utilise l'espace disponible, mais pas plus que {{CSSxRef("max-content")}}, c'est-à-dire `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/fr/docs/Web/CSS/Reference/Values/fit-content_function) {{Experimental_Inline}}
  - : Utilise la formule `fit-content` avec l'espace disponible remplacé par l'argument spécifié, c'est-à-dire `min(max-content, max(min-content, argument))`.

### Comment le mode d'écriture affecte la directionnalité

Les valeurs de `writing-mode` affectent la correspondance de `max-block-size` avec `max-width` ou `max-height` comme suit&nbsp;:

| Valeurs de `writing-mode`                                                 | `max-block-size` est équivalent à |
| ------------------------------------------------------------------------- | --------------------------------- |
| `horizontal-tb`, `lr`, `lr-tb`, `rl`, `rb`, `rb-rl`                       | {{CSSxRef("max-height")}}         |
| `vertical-rl`, `vertical-lr`, `sideways-rl`, `sideways-lr`, `tb`, `tb-rl` | {{CSSxRef("max-width")}}          |

> [!NOTE]
> Les valeurs `sideways-lr` et `sideways-rl` pour `writing-mode` ont été retirées du module de spécification CSS sur les modes d'écriture de niveau 3 en fin de processus et pourraient être réintroduites dans la spécification de niveau 4.

> [!NOTE]
> Les modes d'écritures `lr`, `lr-tb`, `rl`, `rb` et `rb-tl` ne sont plus autorisées dans les contextes {{Glossary("HTML")}}&nbsp;; elles ne peuvent être utilisées que dans les contextes {{Glossary("SVG")}} 1.x.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir `max-block-size` pour des textes horizontaux et verticaux

Dans cet exemple, le même texte (les phrases d'ouverture du roman _[Moby-Dick](https://fr.wikipedia.org/wiki/Moby-Dick)_ de [Herman Melville](https://fr.wikipedia.org/wiki/Herman_Melville)) est présenté dans les modes d'écriture `horizontal-tb` et `vertical-rl`.

Tout le reste concernant les deux boîtes est identique, y compris les valeurs utilisées pour `max-block-size`.

#### HTML

Le fragment HTML se compose de deux blocs {{HTMLElement("div")}} dont le mode d'écriture sera défini avec la propriété {{CSSxRef("writing-mode")}} selon que la classe HTML utilisée vaut `horizontal` ou `vertical`. Les deux boîtes utilisent la classe `standard-box`, qui fournit la coloration, le remplissage et les valeurs pour `max-block-size`.

```html
<p>Writing mode <code>horizontal-tb</code> (par défaut)&nbsp;:</p>
<div class="standard-box horizontal">
  Je m'appelle Ishmaël. Il y a quelques années, sans préciser davantage, n'ayant
  plus d'argent ou presque et rien de particulier à faire à terre, l'envie me
  prit de naviguer encore un peu et de revoir le monde de l'eau. C'est ma façon
  à moi de chasser le cafard et de me purger le sang.
</div>

<p>Writing mode <code>vertical-rl</code>&nbsp;:</p>
<div class="standard-box vertical">
  Je m'appelle Ishmaël. Il y a quelques années, sans préciser davantage, n'ayant
  plus d'argent ou presque et rien de particulier à faire à terre, l'envie me
  prit de naviguer encore un peu et de revoir le monde de l'eau. C'est ma façon
  à moi de chasser le cafard et de me purger le sang.
</div>
```

#### CSS

Le CSS définit trois classes. D'abord `standard-box`, qui est appliquée aux deux boîtes. Celle-ci fournit la mise en forme de base avec les tailles de bloc minimales et maximales, la taille de la police et ainsi de suite.

On a ensuite les classes `horizontal` et `vertical`, qui ajoutent la propriété {{CSSxRef("writing-mode")}} à la boîte avec la valeur `horizontal-tb` ou `vertical-rl` selon la classe utilisée.

```css
.standard-box {
  padding: 4px;
  background-color: #abcdef;
  color: black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  max-block-size: 160px;
  min-block-size: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

#### Résultat

{{EmbedLiveSample("Définir `max-block-size` pour des textes horizontaux et verticaux", 600, 850)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("max-width")}} et {{CSSxRef("max-height")}}
- Définir la taille maximale dans l'autre direction&nbsp;: {{CSSxRef("max-inline-size")}}
- La propriété {{CSSxRef("writing-mode")}}
