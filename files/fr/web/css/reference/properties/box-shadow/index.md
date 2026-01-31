---
title: box-shadow
slug: Web/CSS/Reference/Properties/box-shadow
l10n:
  sourceCommit: 710429f3ae667556b60370b3d3d355cbdcc6ebf0
---

La propriété [CSS](/fr/docs/Web/CSS) **`box-shadow`** ajoute des effets d'ombre autour du cadre d'un élément. Vous pouvez définir plusieurs effets séparés par des virgules. Une ombre de boîte est décrite par des décalages X et Y relatifs à l'élément, un rayon de flou, un rayon d'étalement et une couleur.

{{InteractiveExample("Démonstration CSS&nbsp;: box-shadow")}}

```css interactive-example-choice
box-shadow: 10px 5px 5px red;
```

```css interactive-example-choice
box-shadow: 60px -16px teal;
```

```css interactive-example-choice
box-shadow: 12px 12px 2px 1px rgb(0 0 255 / 0.2);
```

```css interactive-example-choice
box-shadow: inset 5em 1em gold;
```

```css interactive-example-choice
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <p>Ceci est une boîte avec une ombre portée autour d'elle.</p>
  </div>
</section>
```

```css interactive-example
#example-element {
  margin: 20px auto;
  padding: 0;
  border: 2px solid #333333;
  width: 80%;
  text-align: center;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
box-shadow: none;

/* Une couleur et deux valeurs de longueur */
box-shadow: red 60px -16px;

/* Trois valeurs de longueur et une couleur */
box-shadow: 10px 5px 5px black;

/* Quatre valeurs de longueur et une couleur */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset, valeurs de longueur et une couleur */
box-shadow: inset 5em 1em gold;

/* Plusieurs ombres, séparées par des virgules */
box-shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;

/* Valeurs globales */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
```

Définir une seule ombre portée avec&nbsp;:

- Deux, trois ou quatre valeurs {{CSSxRef("length")}}.
  - Si seules deux valeurs sont données, elles sont interprétées comme les valeurs `<offset-x>` et `<offset-y>`.
  - Si une troisième valeur est donnée, elle est interprétée comme un `<blur-radius>`.
  - Si une quatrième valeur est donnée, elle est interprétée comme un `<spread-radius>`.

- Optionnellement, le mot-clé `inset`.
- Optionnellement, une valeur de [`<color>`](#color).

Pour définir plusieurs ombres, fournissez une liste d'ombres séparées par des virgules.

### Valeurs

- `<color>` {{Optional_Inline}}
  - : Définit la couleur de l'ombre. Voir les valeurs {{CSSxRef("&lt;color&gt;")}} pour les mots-clés et notations possibles.
    Si elle n'est pas définie, la valeur de la propriété {{CSSxRef("color")}} définie dans l'élément parent est utilisée.

- `<length>`
  - : Définit la longueur de décalage de l'ombre. Ce paramètre accepte deux, trois ou quatre valeurs. Les troisième et quatrième valeurs sont optionnelles. Elles sont interprétées comme suit&nbsp;:
    - Si deux valeurs sont définies, elles sont interprétées comme les valeurs `<offset-x>` (décalage horizontal) et `<offset-y>` (décalage vertical). Une valeur `<offset-x>` négative place l'ombre à gauche de l'élément. Une valeur `<offset-y>` négative place l'ombre au-dessus de l'élément.\
      Si elles ne sont pas définies, la valeur `0` est utilisée pour la longueur manquante. Si `<offset-x>` et `<offset-y>` valent toutes deux `0`, l'ombre est placée derrière l'élément (et peut générer un effet de flou si `<blur-radius>` et/ou `<spread-radius>` est défini)
    - Si trois valeurs sont définies, la troisième valeur est interprétée comme `<blur-radius>`. Plus cette valeur est grande, plus le flou est important, donc l'ombre devient plus grande et plus légère. Les valeurs négatives ne sont pas autorisées. Si elle n'est pas définie, elle sera fixée à `0` (ce qui signifie que le bord de l'ombre sera net). La spécification n'inclut pas d'algorithme exact pour le calcul du rayon de flou&nbsp;; cependant, elle précise&nbsp;:

      > …pour un bord d'ombre long et droit, cela doit créer une transition de couleur sur la longueur de la distance de flou, perpendiculaire et centrée sur le bord de l'ombre, et qui va de la couleur complète de l'ombre à l'extrémité du rayon à l'intérieur de l'ombre jusqu'à totalement transparent à l'extrémité extérieure.

    - Si quatre valeurs sont définies, la quatrième valeur est interprétée comme `<spread-radius>`. Les valeurs positives feront que l'ombre s'étendra et deviendra plus grande, les valeurs négatives feront que l'ombre rétrécira. Si elle n'est pas définie, elle sera fixée à `0` (c'est-à-dire que l'ombre aura la même taille que l'élément).

- `inset` {{Optional_Inline}}
  - : Modifie l'ombre d'une ombre portée extérieure à une ombre portée intérieure (comme si le contenu était enfoncé dans la boîte). Les ombres intérieures sont dessinées à l'intérieur de la bordure de la boîte (même si la bordure est transparente), et elles apparaissent au-dessus de l'arrière-plan mais sous le contenu. Par défaut, l'ombre se comporte comme une ombre portée, donnant l'apparence que la boîte est surélevée par rapport à son contenu. C'est le comportement par défaut lorsque `inset` n'est pas défini.

### Interpolation

Lors de l'animation des ombres, par exemple lorsque plusieurs valeurs d'ombre sur une boîte changent lors d'un survol, les valeurs sont interpolées. {{Glossary("Interpolation")}} détermine les valeurs intermédiaires des propriétés, comme le rayon de flou, le rayon d'étalement et la couleur, lors de la transition des ombres. Pour chaque ombre dans une liste d'ombres, la couleur, x, y, flou et étalement changent&nbsp;; la couleur comme {{CSSxRef("&lt;color&gt;")}}, et les autres valeurs comme {{CSSxRef("length")}}.

Lors de l'interpolation de plusieurs ombres entre deux listes séparées par des virgules, les ombres sont appariées, dans l'ordre, avec interpolation entre les ombres appariées. Si les listes d'ombres ont des longueurs différentes, la liste la plus courte est complétée à la fin avec des ombres dont la couleur est `transparent`, et X, Y et flou sont à `0`, avec l'inset, ou l'absence d'inset, ajusté pour correspondre. Si, dans une paire d'ombres, l'une a `inset` et l'autre non, toute la liste d'ombres n'est pas interpolée&nbsp;; les ombres passeront aux nouvelles valeurs sans effet d'animation.

## Description

La propriété `box-shadow` permet d'appliquer une ombre portée à partir du cadre de presque n'importe quel élément. Si un {{CSSxRef("border-radius")}} est défini sur l'élément avec une ombre portée, l'ombre portée adopte les mêmes coins arrondis. L'ordre d'empilement de plusieurs ombres portées est le même que pour les [ombres de texte](/fr/docs/Web/CSS/Reference/Properties/text-shadow) (la première ombre définie est au-dessus).

Le [générateur d'ombres portées](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator) est un outil interactif permettant de générer une `box-shadow`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir trois ombres

Dans cet exemple, nous incluons trois ombres&nbsp;: une ombre intérieure, une ombre portée classique et une ombre de 2px qui crée un effet de bordure (nous aurions pu utiliser la propriété {{CSSxRef('outline')}} à la place pour cette troisième ombre).

#### HTML

```html
<blockquote>
  <q>
    Vous pouvez me transpercer avec vos mots,<br />
    Vous pouvez me blesser avec vos regards,<br />
    Vous pouvez me tuer avec votre haine,<br />
    Mais pourtant, comme l'air, je m'élèverai.
  </q>
  <p>&mdash; Maya Angelou</p>
</blockquote>
```

#### CSS

```css
blockquote {
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgb(0 200 0 / 30%),
    0 0 0 2px white,
    0.3em 0.3em 1em rgb(200 0 0 / 60%);
}
```

#### Résultat

{{EmbedLiveSample("Définir trois ombres", 300,300)}}

### Définir zéro pour le décalage et le flou

Lorsque les valeurs de `x-offset`, `y-offset` et `blur` sont toutes à zéro, l'ombre portée sera un contour uni de même taille sur tous les côtés. Les ombres sont dessinées de l'arrière vers l'avant, donc la première ombre se place au-dessus des suivantes. Lorsque la propriété `border-radius` est fixée à 0, ce qui est la valeur par défaut, les coins de l'ombre seront, eh bien, des coins. Si nous avions mis une valeur différente pour `border-radius`, les coins auraient été arrondis.

Nous avons ajouté une marge de la taille de la plus large ombre portée pour garantir que l'ombre ne chevauche pas les éléments adjacents et ne dépasse pas la bordure du bloc englobant. Une ombre portée n'affecte pas les dimensions du [modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model).

#### HTML

```html
<div><p>Bonjour le monde</p></div>
```

#### CSS

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9,
    0 0 0 4em #66ccff;
  margin: 4em;
  padding: 1em;
}
```

<!-- ces couleurs sont intentionnellement rose et bleu. WCAG exige un contraste de couleur entre le texte et l'arrière-plan, pas entre les couleurs de bordure. -->

#### Résultat

{{EmbedLiveSample("Définir zéro pour le décalage et le flou", 300, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- La propriété {{CSSxRef("text-shadow")}}
- La fonction {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
- [Introduction aux ombres de texte](/fr/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- Le module [des arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
