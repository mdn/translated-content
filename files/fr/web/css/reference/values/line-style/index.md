---
title: <line-style>
slug: Web/CSS/Reference/Values/line-style
original_slug: Web/CSS/line-style
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) {{glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<line-style>`** représente des mots-clés qui définissent le style d'une ligne, ou l'absence de ligne. Les valeurs de mot-clé `<line-style>` sont utilisées dans les propriétés [border](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders) et [column](/fr/docs/Web/CSS/Guides/Multicol_layout), aussi bien en version longue qu'en version abrégée&nbsp;:

- {{cssxref("border")}}, {{cssxref("border-style")}}
- {{cssxref("border-block")}}, {{cssxref("border-block-style")}}
- {{cssxref("border-block-end")}}, {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-start")}}, {{cssxref("border-block-start-style")}}
- {{cssxref("border-bottom")}}, {{cssxref("border-bottom-style")}}
- {{cssxref("border-inline")}}, {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-style")}}
- {{cssxref("border-left")}}, {{cssxref("border-left-style")}}
- {{cssxref("border-right")}}, {{cssxref("border-right-style")}}
- {{cssxref("border-top")}}, {{cssxref("border-top-style")}}
- {{cssxref("column-rule")}}, {{cssxref("column-rule-style")}}

## Syntaxe

### Valeurs

Le type énuméré `<line-style>` accepte l'une des valeurs listées ci-dessous&nbsp;:

- `none`
  - : N'affiche aucune ligne. La valeur calculée de l'épaisseur de la ligne est `0` même si une valeur d'épaisseur est spécifiée. Dans le cas des cellules de tableau et de la fusion des bordures, la valeur `none` a la priorité la plus _faible_. Si une autre bordure conflictuelle est définie, elle sera affichée. La valeur `none` est similaire à `hidden`.
- `hidden`
  - : N'affiche aucune ligne. La valeur calculée de l'épaisseur de la ligne est `0` même si une valeur d'épaisseur est spécifiée. Dans le cas des cellules de tableau et de la fusion des bordures, la valeur `hidden` a la priorité la plus _élevée_. Si une autre bordure conflictuelle est définie, elle ne sera pas affichée. La valeur `hidden` est similaire à `none`, mais `hidden` n'est pas une valeur valide pour les styles de contour.
- `dotted`
  - : Affiche une série de points ronds. Le rayon des points est égal à la moitié de la valeur calculée de l'épaisseur de la ligne. L'espacement des points n'est pas défini par la spécification et dépend de l'implémentation.
- `dashed`
  - : Affiche une série de petits tirets ou segments de ligne à extrémité carrée. La taille et la longueur exactes des segments ne sont pas définies par la spécification et dépendent de l'implémentation.
- `solid`
  - : Affiche une ligne droite et pleine.
- `double`
  - : Affiche deux lignes droites séparées par un espace. La longueur des lignes additionnées correspond à la taille en pixels définie par l'épaisseur de la ligne.
- `groove`
  - : Affiche une bordure avec un aspect creusé. Cette valeur est l'opposée de `ridge`.
- `ridge`
  - : Affiche une bordure avec un aspect en relief. Cette valeur est l'opposée de `groove`.
- `inset`
  - : Affiche une bordure qui donne l'impression que l'élément est enfoncé. Cette valeur est l'opposée de `outset`. Lorsqu'elle est appliquée à une bordure de cellule de tableau et que {{cssxref("border-collapse")}} est défini sur `collapsed`, cette valeur se comporte comme `groove`.
- `outset`
  - : Affiche une bordure qui donne l'impression que l'élément est en relief. Cette valeur est l'opposée de `inset`. Lorsqu'elle est appliquée à une cellule de tableau avec {{cssxref("border-collapse")}} défini sur `collapsed`, cette valeur se comporte comme `ridge`.

> [!NOTE]
> Lorsque `<outline-style>` est utilisé comme type de valeur pour les propriétés {{cssxref("outline")}} et {{cssxref("outline-style")}}, il est similaire à `<line-style>`, mais ne prend pas en charge `hidden` et inclut la valeur `auto`. Lorsque `auto` est défini, la valeur `<line-style>` définie par l'agent utilisateur est utilisée.

## Syntaxe formelle

{{CSSSyntaxRaw(`<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset`)}}

## Exemples

Le premier exemple présente toutes les valeurs de mot-clé `<line-style>`. Le second montre comment certaines couleurs de style de ligne peuvent s'afficher de manière inattendue.

### Définir les styles de ligne

Cet exemple montre toutes les valeurs `<line-style>` utilisées pour les propriétés CSS {{cssxref("border-style")}} et {{cssxref("column-rule-style")}}.

#### HTML

Cet exemple utilise plusieurs éléments {{HTMLElement("div")}}, chacun ayant une classe représentant la valeur `<line-style>` illustrée.

```html
<div class="{line-style}">
  <p>{line-style}</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

```html hidden
<div class="none">
  <p>none</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="hidden">
  <p>hidden</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dotted">
  <p>dotted</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dashed">
  <p>dashed</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="solid">
  <p>solid</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="double">
  <p>double</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="groove">
  <p>groove</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="ridge">
  <p>ridge</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="inset">
  <p>inset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="outset">
  <p>outset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

#### CSS

Dans le CSS de cet exemple, la bordure et la règle de colonne de tous les éléments `<p>` sont définies avec une épaisseur de `7px` et la valeur de style `double`. Pour chaque paragraphe, la valeur `double` est ensuite remplacée par une autre valeur `<line-style>` pour les propriétés `border-style` et `column-rule-style`.

```css hidden
div {
  display: flex;
  gap: 1em;
  list-style: none;
  align-items: center;
}
div:first-of-type {
  display: none;
}

p:first-of-type {
  text-align: center;
  line-height: 5em;
}
p {
  width: 10em;
  height: 5em;
  background-color: palegoldenrod;
}
```

```css
p {
  padding: 5px;
  border: double 7px #bada55;
}
p + p {
  columns: 3;
  column-gap: 20px;
  column-rule: double 7px;
  border-color: black;
}
.none p {
  border-style: none;
  column-rule-style: none;
}
.hidden p {
  border-style: hidden;
  column-rule-style: hidden;
}
.dotted p {
  border-style: dotted;
  column-rule-style: dotted;
}
.dashed p {
  border-style: dashed;
  column-rule-style: dashed;
}
.solid p {
  border-style: solid;
  column-rule-style: solid;
}
.double p {
  border-style: double;
  column-rule-style: double;
}
.groove p {
  border-style: groove;
  column-rule-style: groove;
}
.ridge p {
  border-style: ridge;
  column-rule-style: ridge;
}
.inset p {
  border-style: inset;
  column-rule-style: inset;
}
.outset p {
  border-style: outset;
  column-rule-style: outset;
}
```

#### Résultat

{{EmbedLiveSample("Defining_line_styles", "500", "800")}}

Vous remarquerez que la bordure noire n'est pas toujours noire.

### Définir les styles et couleurs de ligne

Cet exemple illustre le choix du style de ligne et de la couleur. Avec certaines valeurs de mot-clé `<line-style>`, la couleur de la ligne peut ne pas être celle attendue. Pour créer l'effet «&nbsp;3D&nbsp;» requis par les styles `groove`, `ridge`, `inset` et `outset` lorsqu'ils sont affichés en noir ou en blanc, les agents utilisateurs utilisent des calculs de couleur différents de ceux appliqués aux autres combinaisons style-couleur.

#### CSS

Les quatre côtés de chaque `<div>` ont une valeur `<line-style>` différente, et chaque élément de la liste utilise une valeur {{cssxref("color_value", "&lt;color>")}} différente. Nous utilisons le [contenu généré](/fr/docs/Web/CSS/Reference/Properties/content) pour afficher le CSS déclaré en ligne.

```css hidden live-sample___line_style_colors
body {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  text-transform: uppercase;
  font-family: monospace;
}
```

```css live-sample___line_style_colors
div {
  border-width: 10px;
  border-style: inset groove ridge outset;
  padding: 5px;
}
```

#### JavaScript

Le JavaScript crée dynamiquement des éléments {{HTMLElement("div")}}, chacun ayant une valeur `border-color` différente.

```js live-sample___line_style_colors
// prettier-ignore
const colors = [
  "#000000", "#000001", "#ffffff",
  "#ff00ff", "#ffff00", "#00ffff",
  "#cc33cc", "#cccc33", "#33cccc",
  "#ff0000", "#00ff00", "#0000ff",
  "#cc3333", "#33cc33", "#3333cc",
  "#993333", "#339933", "#333399",
];

for (const c of colors) {
  const div = document.createElement("div");
  div.style.borderColor = c;
  div.textContent = c;
  document.body.appendChild(div);
}
```

#### Résultat

{{EmbedLiveSample("line_style_colors", "500", "200")}}

Remarquez que la couleur presque noire `#000001` peut être différente du noir pur, et que le contraste entre les bords clairs et foncés est plus visible avec des couleurs claires.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module des [arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- Le module de [l'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
- Le module de [disposition multicolonne CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)
