---
title: flex-basis
slug: Web/CSS/Reference/Properties/flex-basis
l10n:
  sourceCommit: c4614bbe613c54975666cf8897ffc2a2ea7f8040
---

La propriété **`flex-basis`** [CSS](/fr/docs/Web/CSS) définit la taille principale initiale d'un {{Glossary("flex item", "élément flexible")}}. Elle définit la taille de la boîte de contenu sauf si elle est modifiée par {{CSSxRef("box-sizing")}}.

> [!NOTE]
> Il est recommandé d'utiliser la propriété raccourcie {{CSSxRef("flex")}} avec une valeur clé comme `auto` ou `initial` au lieu de définir `flex-basis` seule. Les [valeurs clés](/fr/docs/Web/CSS/Reference/Properties/flex#values) s'étendent en combinaisons fiables de {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} et `flex-basis`, ce qui permet d'obtenir les comportements flexibles couramment recherchés.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-basis")}}

```css interactive-example-choice
flex-basis: auto;
```

```css interactive-example-choice
flex-basis: 0;
```

```css interactive-example-choice
flex-basis: 200px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Élément un</div>
  <div>Élément deux</div>
  <div>Élément trois</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
```

Dans cet exemple, les propriétés {{CSSxRef("flex-grow")}} et {{CSSxRef("flex-shrink")}} sont toutes deux définies à `1` sur les trois éléments, ce qui indique que l'élément flexible peut croître et rétrécir à partir de la valeur initiale de `flex-basis`.

La démonstration modifie la valeur de `flex-basis` appliquée au premier élément flexible, ce qui le fait croître ou rétrécir pour occuper l'espace disponible. Les autres éléments flexibles vont également changer de taille&nbsp;; ils auront au moins la taille `min-content`. Par exemple, lorsque la valeur de `flex-basis` du premier élément est réglée à `200px`, il commence à `200px` mais rétrécit ensuite pour s'adapter à l'espace disponible.

Si la propriété `flex-basis` est définie sur une valeur autre que `auto` et qu'une propriété `width` (ou `height` dans le cas de `flex-direction: column`) est également définie pour ce même élément flexible, la valeur de `flex-basis` prévaut.

## Syntaxe

```css
/* Définit une largeur <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* Dimensions intrinsèques avec un mot-clé */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Taille automatique en fonction du contenu de l'élément  */
flex-basis: content;

/* Valeurs globales */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

La propriété `flex-basis` est définie grâce au mot-clé `content` ou grâce à une valeur de type `<'width'>`.

### Valeurs

- `content`
  - : Indique un dimensionnement automatique, basé sur le contenu de l'élément flexible.

- `<'width'>`
  - : L'une des unités suivantes&nbsp;:
    - {{CSSxRef("&lt;length&gt;")}} définit une valeur absolue.
    - {{CSSxRef("&lt;percentage&gt;")}} définit un pourcentage de la largeur ou de la hauteur de la zone de contenu du bloc englobant. Les valeurs en pourcentage de `flex-basis` sont calculées par rapport au conteneur flexible. Si la taille du conteneur flexible n'est pas définie, la valeur utilisée pour `flex-basis` est `content`.
    - `auto` utilise la valeur de {{CSSxRef("width")}} en mode d'écriture horizontal, et la valeur de {{CSSxRef("height")}} en mode d'écriture vertical&nbsp;; lorsque la valeur correspondante est aussi `auto`, la valeur `content` est utilisée à la place.
    - {{CSSxRef("max-content")}} définit la largeur intrinsèque préférée.
    - {{CSSxRef("min-content")}} définit la largeur intrinsèque minimale.
    - {{CSSxRef("fit-content")}} définit la taille maximale possible de la zone de contenu du bloc englobant, limitée par les valeurs `min-content` et `max-content`, et calculée en fonction du contenu de l'élément courant.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les tailles initiales des éléments flexibles

#### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

#### CSS

```css
.container {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### Résultat

{{EmbedLiveSample("Définir les tailles initiales des éléments flexibles", "", 360)}}

### `flex-basis` `0` contre `0%`

Cet exemple montre la différence entre une valeur de `flex-basis` de `0` et une valeur de `flex-basis` de `0%` lorsque `flex-direction` est définie sur `column` et que les conteneurs flexibles et les éléments flexibles n'ont pas de hauteur définie&nbsp;; tandis que `0` est une longueur absolue, les valeurs en pourcentage de `flex-basis` sont résolues en valeurs [`content`](#content).

#### HTML

Nous incluons deux conteneurs flexibles de même structure, qui seront mis en forme de façon similaire à l'exception de leur valeur de `flex-basis`. Chaque conteneur possède deux enfants&nbsp;: un en-tête `<div>` et une balise `<section>`. L'élément `<section>` contient un enfant `<div>` de contenu, qui ne sera pas défini comme élément flexible mais auquel une hauteur sera attribuée.

```html
<div class="container basis-0">
  <div>en-tête</div>
  <section>
    <div class="content">flex-basis: 0;</div>
  </section>
</div>
<div class="container basis-0-percent">
  <div>en-tête</div>
  <section>
    <div class="content">flex-basis: 0%;</div>
  </section>
</div>
```

#### CSS

Nous appliquons une mise en forme aux conteneurs pour qu'ils soient des conteneurs flexibles en ligne qui apparaissent côte à côte afin de faciliter leur comparaison. Nous définissons la propriété `flex-direction` à `column`. Les éléments flexibles du premier conteneur ont une valeur de `flex-basis` de `0`, tandis que ceux du second conteneur ont une valeur de `flex-basis` de `0%`. Ni les conteneurs flexibles ni leurs éléments flexibles n'ont de hauteur explicitement définie&nbsp;; cependant, la hauteur des éléments `section` doit être d'au moins `200px`, et celle de leurs enfants est de `300px`.

```css
.container {
  width: 40vw;
  padding: 1rem;
  border: 1px dashed blue;

  display: inline-flex;
  flex-direction: column;
}

section {
  outline: 1px solid red;

  overflow: auto;
  min-height: 200px;
}

.content {
  background: wheat;
  height: 300px;
}

.container.basis-0 > * {
  flex-basis: 0;
}
.container.basis-0-percent > * {
  flex-basis: 0%;
}
```

#### Résultat

{{EmbedLiveSample("`flex-basis` `0` contre `0%`", "100%", 400)}}

Dans le premier conteneur, avec `flex-basis: 0`, l'élément `<section>` a une taille principale initiale de zéro, et il grandit jusqu'à la hauteur minimale de `200px`. Dans le second conteneur, avec `flex-basis: 0%`, l'élément `<section>` a une taille principale initiale de `300px` car, comme le conteneur flexible n'a pas de hauteur définie, les valeurs en pourcentage de `flex-basis` sont résolues en valeur [`content`](#content).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("flex")}}
- La propriété {{CSSxRef("inline-size")}}
- [Les concepts de bases](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
