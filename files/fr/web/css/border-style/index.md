---
title: border-style
slug: Web/CSS/border-style
---

{{CSSRef}}

La propriété CSS **`border-style`** est une [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) qui permet de définir le style des lignes utilisées pour les bordures des quatre côtés de la boîte d'un élément.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## Propriétés détaillées correspondantes

Cette propriété est une propriété raccourcie pour les propriétés CSS&nbsp;:

- [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style)
- [`border-left-style`](/fr/docs/Web/CSS/border-left-style)
- [`border-right-style`](/fr/docs/Web/CSS/border-right-style)
- [`border-top-style`](/fr/docs/Web/CSS/border-top-style)

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
border-style: unset;
```

> **Note :** La valeur par défaut de `border-style` est `none`. Cela signifie que si on modifie [`border-width`](/fr/docs/Web/CSS/border-width) et [`border-color`](/fr/docs/Web/CSS/border-color), on ne verra pas la bordure tant que cette propriété n'est pas différente de `none` ou de `hidden`.

La propriété `border-style` peut être définie avec une, deux, trois ou quatre valeurs&nbsp;:

- Avec **une valeur**, celle-ci s'applique aux **quatre côtés**.
- Avec **deux valeurs**, la première s'applique aux côtés **haut et bas** et la seconde aux côtés **gauche et droit**.
- Avec **trois valeurs**, la première s'applique au côté **haut**, la deuxième aux côtés **gauche et droit** puis la troisième au côté **bas**.
- Avec **quatre valeurs**, les valeurs s'appliquent dans le sens des aiguilles d'une montre (la première sur le côté **haut**, la deuxième sur le côté **droit**, la troisième sur le côté **bas** et la quatrième sur le côté **gauche**).

Chacune des valeurs peut être un des mots-clés parmi la liste suivante.

### Valeurs

- `<line-style>`

  - : Un mot-clé qui décrit le style utilisé pour la bordure sur les côtés de la boîte. Ce mot-clé peut prendre l'une des valeurs suivantes&nbsp;:

    - `none`
      - : L'effet obtenu est le même qu'avec `hidden`&nbsp;: aucune bordure n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est définie (avec [`background-image`](/fr/docs/Web/CSS/background-image)), la valeur calculée de [`border-width`](/fr/docs/Web/CSS/border-width) sera `0`, même si cette dernière indique une autre valeur. Lorsqu'utilisée sur une cellule d'un tableau avec la fusion des bordures, `none` a la priorité la plus _basse_&nbsp;; donc, si une autre bordure est définie et fusionne avec celle-ci, elle sera affichée.
    - `hidden`
      - : L'effet obtenu est le même qu'avec `none`&nbsp;: aucune bordure n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est définie (avec [`background-image`](/fr/docs/Web/CSS/background-image)), la valeur calculée de [`border-width`](/fr/docs/Web/CSS/border-width) sera `0`, même si cette dernière indique une autre valeur. Lorsqu'utilisée sur une cellule d'un tableau avec la fusion des bordures, `hidden` a _la plus haute priorité_ et donc si une autre bordure est définie et fusionne avec celle-ci, aucune ne sera affichée.
    - `dotted`
      - : Affiche une série de points ronds. L'espace entre ces points n'est pas défini par la spécification et est donc laissé à l'implémentation. Le rayon des points correspond à la moitié de [`border-width`](/fr/docs/Web/CSS/border-width).
    - `dashed`
      - : Affiche une série de tirets. La taille de ces tirets n'est pas définie par la spécification et est laissée à l'implémentation.
    - `solid`
      - : Affiche une ligne droite continue.
    - `double`
      - : Deux lignes droites sont affichées dont la somme des épaisseurs correspond à la valeur fournie par [`border-width`](/fr/docs/Web/CSS/border-width).
    - `groove`
      - : La bordure crée un effet 3D donnant l'impression qu'elle a été gravée dans le document. On obtient un effet opposé à `ridge`.
    - `ridge`
      - : La bordure crée un effet 3D donnant l'impression que la bordure ressort du document. L'effet obtenu est opposé à celui obtenu avec `groove`.
    - `inset`
      - : La bordure crée un effet 3D qui donne l'impression que la boîte est renfoncée dans le document (l'effet obtenu est opposé à celui obtenu avec `outset`). Lorsqu'elle est appliquée sur une cellule de tableau et que [`border-collapse`](/fr/docs/Web/CSS/border-collapse) vaut `collapsed`, cette valeur se comporte comme `groove`.
    - `outset`
      - : La bordure crée un effet 3D qui fait ressortir la boîte (l'effet est opposé à `inset`). Lorsqu'elle est utilisée sur une cellule de tableau avec [`border-collapse`](/fr/docs/Web/CSS/border-collapse) qui vaut `collapsed`, cette valeur se comporte comme `ridge`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Toutes les valeurs de border-style

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

{{EmbedLiveSample('', '1200', 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés raccourcies liées aux bordures&nbsp;: [`border`](/fr/docs/Web/CSS/border), [`border-width`](/fr/docs/Web/CSS/border-width), [`border-color`](/fr/docs/Web/CSS/border-color), [`border-radius`](/fr/docs/Web/CSS/border-radius)
