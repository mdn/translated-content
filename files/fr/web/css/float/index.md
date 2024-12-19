---
title: float
slug: Web/CSS/float
l10n:
  sourceCommit: 6aa2d63aef51ada47960f4754b601af66a99d63c
---

{{CSSRef}}

La propriété CSS **`float`** indique qu'un élément doit être retiré du flux normal et doit être placé sur le côté droit ou sur le côté gauche de son conteneur. Le texte et les autres éléments en ligne (_inline_) entoureront alors l'élément flottant. L'élément est retiré du flux normal de la page mais s'inscrit toujours dans le flux (contrairement au [positionnement absolu](/fr/docs/Web/CSS/position#positionnement_absolu)).

{{EmbedInteractiveExample("pages/css/float.html")}}

Un **élément flottant** est un élément pour lequel [la valeur calculée](/fr/docs/Web/CSS/computed_value) de `float` est différente de `none`.

`float` implique l'utilisation d'une disposition en bloc, cette propriété modifie donc la valeur de [`display`](/fr/docs/Web/CSS/display) dans certains cas&nbsp;:

| [Valeur spécifiée](/fr/docs/Web/CSS/specified_value) | [Valeur calculée](/fr/docs/Web/CSS/computed_value) |
| ---------------------------------------------------- | -------------------------------------------------- |
| `inline`                                             | `block`                                            |
| `inline-block`                                       | `block`                                            |
| `inline-table`                                       | `table`                                            |
| `table-row`                                          | `block`                                            |
| `table-row-group`                                    | `block`                                            |
| `table-column`                                       | `block`                                            |
| `table-column-group`                                 | `block`                                            |
| `table-cell`                                         | `block`                                            |
| `table-caption`                                      | `block`                                            |
| `table-header-group`                                 | `block`                                            |
| `table-footer-group`                                 | `block`                                            |
| `inline-flex`                                        | `flex`                                             |
| `inline-grid`                                        | `grid`                                             |
| _autre_                                              | _inchangée_                                        |

> [!NOTE]
> Si vous utilisez cette propriété via JavaScript, comme propriété de l'objet [`HTMLElement.style`](/fr/docs/Web/API/HTMLElement/style), la plupart des navigateurs récents permettront d'utiliser `float`, mais il faudra utiliser `cssFloat` (attention à la casse) pour les navigateurs plus anciens. Pour Internet Explorer 8 et les versions antérieures, elle était appelée `styleFloat`. Le terme `float` étant réservé en JavaScript, ce cas de figure était une exception à la règle qui définit que le nom de la propriété DOM est une version [CamelCase](https://fr.wikipedia.org/wiki/CamelCase) de la propriété CSS construite avec des tirets. De même, `class` sera échappée en `className` et le `for` des éléments \<label> sera converti en `htmlFor`).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Valeurs globales */
float: inherit;
float: initial;
float: revert;
float: revert-layer;
float: unset;
```

La propriété `float` est définie à l'aide d'un mot-clé, parmi la liste des valeurs détaillées après.

### Valeurs

- `left`
  - : Un mot-clé indiquant que l'élément doit flotter du côté gauche du bloc qui le contient.
- `right`
  - : Un mot-clé indiquant que l'élément doit flotter du côté droit du bloc qui le contient.
- `none`
  - : Un mot-clé indiquant que l'élément ne doit pas flotter.
- `inline-start`
  - : Un mot-clé indiquant que l'élément doit flotter du côté du début du bloc qui le contient. Pour les scripts LTR (les langues qui s'écrivent de la gauche vers la droite), c'est le bord gauche&nbsp;; pour les scripts RTL, c'est le bord droit.
- `inline-end`
  - : Un mot-clé indiquant que l'élément doit flotter du côté de la fin du bloc qui le contient. Pour les scripts LTR (les langues qui s'écrivent de la gauche vers la droite), c'est le bord droit&nbsp;; pour les scripts RTL, c'est le bord gauche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Le positionnement des éléments flottants

Comme évoqué ci-avant, lorsqu'un élément flotte, il est retiré du flux normal du document (même s'il continue de faire partie du flux général) et il est décalé vers la droite ou vers la gauche jusqu'à ce qu'il touche le bord de son conteneur _ou un autre élément flottant_.

Dans cet exemple, on voit trois carrés rouges. Deux flottent à gauche et un flotte à droite. On voit que le deuxième carré à gauche est placé à droite du premier. Si on ajoutait d'autres carrés, ils s'empileraient sur la gauche jusqu'à remplir le conteneur, ensuite, on passerait sur une autre ligne.

Un élément flottant est au moins aussi grand que le plus grand de ses éléments enfants flottants. Nous avons dimensionné l'élément parent avec `width: 100%` et lui avons appliqué un flottement afin de s'assurer qu'il soit suffisamment grand pour contenir ses éléments enfants flottants et qu'il prenne toute la largeur de son parent afin de ne pas avoir à dégager les voisins adjacents.

#### HTML

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
    aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
    congue.
  </p>
</section>
```

#### CSS

```css
section {
  box-sizing: border-box;
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

#### Résultat

{{EmbedLiveSample('','400','190')}}

## Dégager des éléments du flottement

Parfois, on veut forcer le déplacement d'un élément sous les éléments flottants. On peut, par exemple, vouloir que les paragraphes soient adjacents aux éléments flottants mais que les titres soient sur leur propre ligne. Voir la documentation de [`clear`](/fr/docs/Web/CSS/clear) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le contexte de formatage des blocs](/fr/docs/Web/CSS/CSS_display/Block_formatting_context)
- La propriété [`clear`](/fr/docs/Web/CSS/clear) qui permet de forcer le déplacement d'un élément sous un élément flottant
