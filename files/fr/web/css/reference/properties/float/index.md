---
title: float
slug: Web/CSS/Reference/Properties/float
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`float`** indique qu'un élément doit être retiré du flux normal et doit être placé sur le côté droit ou sur le côté gauche de son conteneur. Le texte et les autres éléments en ligne (<i lang="en">inline</i> en anglais) entoureront alors l'élément flottant. L'élément est retiré du flux normal de la page mais s'inscrit toujours dans le flux (contrairement au [positionnement absolu](/fr/docs/Web/CSS/Reference/Properties/position#positionnement_absolu)).

{{InteractiveExample("Démonstration CSS&nbsp;: float")}}

```css interactive-example-choice
float: none;
```

```css interactive-example-choice
float: left;
```

```css interactive-example-choice
float: right;
```

```css interactive-example-choice
float: inline-start;
```

```css interactive-example-choice
float: inline-end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Faites-moi flotter</div>
    Autant de boue dans les rues que si les eaux venaient tout juste de se
    retirer de la surface de la terre, et il ne serait pas étonnant de croiser
    un Mégalosaure, long d'une quarantaine de pieds, se dandinant comme un
    lézard éléphantesque sur Holborn Hill.
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  width: 80%;
  line-height: normal;
}

#example-element {
  border: solid 10px #efac09;
  background-color: #040d46;
  color: white;
  padding: 1em;
  width: 40%;
}
```

Un _élément flottant_ est un élément pour lequel la valeur calculée de `float` est différente de `none`.

`float` implique l'utilisation d'une disposition en bloc, cette propriété modifie donc la valeur de {{CSSxRef("display")}} dans certains cas&nbsp;:

| Valeur définie       | Valeur calculée |
| -------------------- | --------------- |
| `inline`             | `block`         |
| `inline-block`       | `block`         |
| `inline-table`       | `table`         |
| `table-row`          | `block`         |
| `table-row-group`    | `block`         |
| `table-column`       | `block`         |
| `table-column-group` | `block`         |
| `table-cell`         | `block`         |
| `table-caption`      | `block`         |
| `table-header-group` | `block`         |
| `table-footer-group` | `block`         |
| `inline-flex`        | `flex`          |
| `inline-grid`        | `grid`          |
| _autre_              | _inchangée_     |

> [!NOTE]
> Lorsqu'on accède à une propriété CSS en JavaScript via l'objet {{DOMxRef("HTMLElement.style")}}, les noms de propriétés d'un seul mot sont utilisés tels quels. Bien que `float` soit un mot réservé en JavaScript, la propriété CSS `float` est accessible sous le nom `float` dans les navigateurs modernes. Dans les anciens navigateurs, il faut utiliser `cssFloat` pour accéder à la propriété `float`. (C'est similaire à la façon dont l'attribut «&nbsp;class&nbsp;» est accessible sous le nom «&nbsp;className&nbsp;» et l'attribut «&nbsp;for&nbsp;» d'un élément `<label>` est accessible sous le nom «&nbsp;htmlFor&nbsp;».)

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
  - : Un mot-clé indiquant que l'élément doit flotter du côté du début du bloc qui le contient. Pour les scripts `ltr` (les langues qui s'écrivent de la gauche vers la droite), c'est le bord gauche&nbsp;; pour les scripts `rtl`, c'est le bord droit.
- `inline-end`
  - : Un mot-clé indiquant que l'élément doit flotter du côté de la fin du bloc qui le contient. Pour les scripts `ltr` (les langues qui s'écrivent de la gauche vers la droite), c'est le bord droit&nbsp;; pour les scripts `rtl`, c'est le bord gauche.

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

{{EmbedLiveSample("Le positionnement des éléments flottants", 400, 190)}}

## Dégager des éléments du flottement

Parfois, on veut forcer le déplacement d'un élément sous les éléments flottants. On peut, par exemple, vouloir que les paragraphes soient adjacents aux éléments flottants mais que les titres soient sur leur propre ligne. Voir la documentation de {{CSSxRef("clear")}} pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le contexte de formatage des blocs](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- La propriété {{CSSxRef("clear")}} qui permet de forcer le déplacement d'un élément sous un élément flottant.
