---
title: border-style
slug: Web/CSS/Reference/Properties/border-style
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`border-style`** permet de définir le style de ligne pour les quatre côtés de la bordure d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-style")}}

```css interactive-example-choice
border-style: none;
```

```css interactive-example-choice
border-style: dotted;
```

```css interactive-example-choice
border-style: inset;
```

```css interactive-example-choice
border-style: dashed solid;
```

```css interactive-example-choice
border-style: dashed double none;
```

```css interactive-example-choice
border-style: dashed groove none dotted;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec une bordure autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}

body {
  background-color: white;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("border-bottom-style")}}
- {{CSSxRef("border-left-style")}}
- {{CSSxRef("border-right-style")}}
- {{CSSxRef("border-top-style")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/*  côtés horizontaux | côtés verticaux */
border-style: dotted solid;

/* haut | côtés verticaux | bas */
border-style: hidden double dashed;

/* haut | droite | bas | gauche */
border-style: none solid dotted dashed;

/* Valeurs globales */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: revert-layer;
border-style: unset;
```

La propriété `border-style` peut être définie avec une, deux, trois ou quatre valeurs.

- Avec **une valeur**, celle-ci s'applique aux **quatre côtés**.
- Avec **deux valeurs**, la première s'applique aux côtés **haut et bas** et la seconde aux côtés **gauche et droit**.
- Avec **trois valeurs**, la première s'applique au côté **haut**, la deuxième aux côtés **gauche et droit** puis la troisième au côté **bas**.
- Avec **quatre valeurs**, les valeurs s'appliquent dans le sens des aiguilles d'une montre (la première sur le côté **haut**, la deuxième sur le côté **droit**, la troisième sur le côté **bas** et la quatrième sur le côté **gauche**).

Chacune des valeurs peut être un des mots-clés parmi la liste suivante.

### Valeurs

- `<line-style>`
  - : Un mot-clé qui décrit le style utilisé pour la bordure sur les côtés de la boîte. Ce mot-clé peut prendre l'une des valeurs suivantes&nbsp;:
    - `none`
      - : L'effet obtenu est le même qu'avec `hidden`&nbsp;: aucune bordure n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est définie (avec {{CSSxRef("background-image")}}), la valeur calculée de {{CSSxRef("border-width")}} sera `0`, même si cette dernière indique une autre valeur. Lorsqu'utilisée sur une cellule d'un tableau avec la fusion des bordures, `none` a la priorité la plus _basse_&nbsp;; donc, si une autre bordure est définie et fusionne avec celle-ci, elle sera affichée.
    - `hidden`
      - : L'effet obtenu est le même qu'avec `none`&nbsp;: aucune bordure n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est définie (avec {{CSSxRef("background-image")}}), la valeur calculée de {{CSSxRef("border-width")}} sera `0`, même si cette dernière indique une autre valeur. Lorsqu'utilisée sur une cellule d'un tableau avec la fusion des bordures, `hidden` a _la plus haute priorité_ et donc si une autre bordure est définie et fusionne avec celle-ci, aucune ne sera affichée.
    - `dotted`
      - : Affiche une série de points ronds. L'espace entre ces points n'est pas défini par la spécification et est donc laissé à l'implémentation. Le rayon des points correspond à la moitié de {{CSSxRef("border-width")}}.
    - `dashed`
      - : Affiche une série de tirets. La taille de ces tirets n'est pas définie par la spécification et est laissée à l'implémentation.
    - `solid`
      - : Affiche une ligne droite continue.
    - `double`
      - : Deux lignes droites sont affichées dont la somme des épaisseurs correspond à la valeur fournie par {{CSSxRef("border-width")}}.
    - `groove`
      - : La bordure crée un effet 3D donnant l'impression qu'elle a été gravée dans le document. On obtient un effet opposé à `ridge`.
    - `ridge`
      - : La bordure crée un effet 3D donnant l'impression que la bordure ressort du document. L'effet obtenu est opposé à celui obtenu avec `groove`.
    - `inset`
      - : La bordure crée un effet 3D qui donne l'impression que la boîte est renfoncée dans le document (l'effet obtenu est opposé à celui obtenu avec `outset`). Lorsqu'elle est appliquée sur une cellule de tableau et que {{CSSxRef("border-collapse")}} vaut `collapsed`, cette valeur se comporte comme `groove`.
    - `outset`
      - : La bordure crée un effet 3D qui fait ressortir la boîte (l'effet est opposé à `inset`). Lorsqu'elle est utilisée sur une cellule de tableau avec {{CSSxRef("border-collapse")}} qui vaut `collapsed`, cette valeur se comporte comme `ridge`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Toutes les valeurs de `border-style`

Voici un exemple utilisant toutes les valeurs de cette propriété.

#### HTML

```html
<pre class="b1">none</pre>
<pre class="b2">hidden</pre>
<pre class="b3">dotted</pre>
<pre class="b4">dashed</pre>
<pre class="b5">solid</pre>
<pre class="b6">double</pre>
<pre class="b7">groove</pre>
<pre class="b8">ridge</pre>
<pre class="b9">inset</pre>
<pre class="b10">outset</pre>
```

#### CSS

```css
pre {
  height: 80px;
  width: 120px;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  background-color: palegreen;
  border-width: 5px;
  box-sizing: border-box;
}

/* Voici des classes pour les exemples */
.b1 {
  border-style: none;
}

.b2 {
  border-style: hidden;
}

.b3 {
  border-style: dotted;
}

.b4 {
  border-style: dashed;
}

.b5 {
  border-style: solid;
}

.b6 {
  border-style: double;
}

.b7 {
  border-style: groove;
}

.b8 {
  border-style: ridge;
}

.b9 {
  border-style: inset;
}

.b10 {
  border-style: outset;
}
```

#### Résultat

{{EmbedLiveSample("Toutes les valeurs de `border-style`", 1200, 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés raccourcies liées aux bordures&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-width")}}, {{CSSxRef("border-color")}}, {{CSSxRef("border-radius")}}
