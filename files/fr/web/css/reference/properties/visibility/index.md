---
title: Propriété CSS `visibility`
short-title: visibility
slug: Web/CSS/Reference/Properties/visibility
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`visibility`** affiche ou masque un élément sans modifier la disposition d'un document. La propriété peut également masquer des lignes ou des colonnes dans un tableau ({{HTMLElement("table")}}).

{{InteractiveExample("Démonstration CSS&nbsp;: visibility")}}

```css interactive-example-choice
visibility: visible;
```

```css interactive-example-choice
visibility: hidden;
```

```css interactive-example-choice
visibility: collapse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Cachez-moi</div>
    <div>Élément 2</div>
    <div>Élément 3</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  width: 80%;
  max-height: 300px;
  display: flex;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex: 1;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

Pour cacher un élément _et le retirer de la disposition du document_, utilisez la propriété {{CSSxRef("display")}} avec la valeur `none` au lieu d'utiliser `visibility`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* Valeurs globales */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
```

La propriété `visibility` est définie avec l'un des mots-clés suivants.

### Valeurs

- `visible`
  - : La valeur par défaut, la boîte est visible.
- `hidden`
  - : La boîte de l'élément est invisible (non dessinée), mais continue d'affecter la disposition comme d'habitude. Les descendants de l'élément seront visibles s'ils ont `visibility` défini sur `visible`. L'élément ne peut pas recevoir le focus (par exemple lors de la navigation à travers les [index de tabulation](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)).
- `collapse`
  - : Le mot-clé `collapse` a des effets différents selon les éléments&nbsp;:
    - Pour les lignes, colonnes, groupes de colonnes et groupes de lignes d'un {{HTMLElement("table")}}, les lignes ou colonnes sont masquées et l'espace qu'elles auraient occupé est supprimé (comme si `{{CSSxRef("display")}}: none` avait été appliqué à la colonne/ligne du tableau). Cependant, la taille des autres lignes et colonnes est toujours calculée comme si les cellules des lignes ou colonnes repliées étaient présentes. Cette valeur permet de retirer rapidement une ligne ou une colonne d'un tableau sans forcer le recalcul des largeurs et hauteurs pour l'ensemble du tableau.
    - Les éléments flexibles repliés et les annotations ruby sont masqués, et l'espace qu'ils auraient occupé est supprimé.
    - Pour les autres éléments, `collapse` est traité de la même manière que `hidden`.

## Accessibilité

Utiliser la propriété `visibility` avec la valeur `hidden` retirera l'objet de [l'arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#api_daccessibilité). Les éléments ciblés, ainsi que leurs éléments descendants ne seront plus annoncés par les lecteurs d'écran.

## Interpolation

Lorsqu'elle est animée, les valeurs de `visibility` sont interpolées entre _visible_ et _non visible_. L'une des valeurs de début ou de fin doit donc être `visible`, sinon aucune {{Glossary("interpolation")}} ne peut se produire. La valeur est interpolée comme une étape discrète, où les valeurs de la fonction d'accélération entre `0` et `1` correspondent à `visible` et les autres valeurs de la fonction d'accélération (qui se produisent uniquement au début/à la fin de la transition ou à la suite de fonctions `cubic-bezier()` avec des valeurs y en dehors de \[0, 1]) correspondent au point final le plus proche.

## Notes

- Le support de `visibility: collapse` est manquant ou partiellement incorrect dans certains navigateurs modernes. Il peut ne pas être correctement traité comme `visibility: hidden` sur des éléments autres que les lignes et colonnes de tableau.
- Lorsqu'il est appliqué aux lignes de tableau, si le tableau contient des cellules (éléments HTML {{HTMLElement("td")}} et {{HTMLElement("th")}}) qui s'étendent à la fois sur des lignes visibles et repliées, la cellule peut s'afficher de manière inattendue. Si la cellule étendue est définie dans une ligne repliée, les navigateurs ne rendent pas la cellule du tableau, comme si les cellules des lignes suivantes étaient présentes avec `visibility: collapse` appliqué. Lorsque la cellule est définie dans une ligne visible et s'étend sur une ligne repliée, le contenu de la cellule n'est pas réorganisé, mais la présentation de la cellule elle-même varie selon le navigateur. La plupart des navigateurs réduisent la taille du bloc de la cellule de la taille du bloc de la ligne masquée. Cela signifie que le contenu peut être plus grand que la cellule dans la direction de la taille du bloc. Selon le navigateur, le contenu débordant est soit coupé, comme si `overflow: hidden` était défini, tandis que le contenu déborde dans la ligne suivante dans d'autres navigateurs comme si `overflow: visible` était défini. Dans d'autres navigateurs, la cellule est rendue comme si la ligne n'était pas repliée, toutes les autres cellules de la ligne étant masquées comme si `visibility: collapse` était défini sur les cellules individuelles plutôt que sur la ligne elle-même.
- `visibility: collapse` peut modifier la disposition d'un tableau si le tableau contient des tableaux imbriqués dans les cellules qui sont repliées, sauf si `visibility: visible` est défini explicitement sur les tableaux imbriqués.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<p class="visible">Le premier paragraphe est visible.</p>
<p class="not-visible">Le deuxième paragraphe n'est PAS visible.</p>
<p class="visible">
  Le troisième paragraphe est visible. Remarquez que le deuxième paragraphe
  occupe toujours de l'espace.
</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Exemple sur un tableau

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>1.1</td>
      <td class="collapse">1.2</td>
      <td>1.3</td>
    </tr>
    <tr class="collapse">
      <td>2.1</td>
      <td>2.2</td>
      <td>2.3</td>
    </tr>
    <tr>
      <td>3.1</td>
      <td>3.2</td>
      <td>3.3</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

#### Résultat

{{EmbedLiveSample("Exemple sur un tableau")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("display")}}
- L'attribut SVG {{SVGAttr("visibility")}}
