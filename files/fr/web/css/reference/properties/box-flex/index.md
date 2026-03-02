---
title: box-flex
slug: Web/CSS/Reference/Properties/box-flex
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette propriété est utilisée pour contrôler certaines parties du modèle de boîtes XUL. Elle ne correspond ni à l'ancienne version de la spécification pour `box-flex` ni au comportement de `-webkit-box-flex`. Voir la page [Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) pour plus d'informations sur ce qui doit être utilisé à la place.

Les propriétés [CSS](/fr/docs/Web/CSS) **`-moz-box-flex`** et **`-webkit-box-flex`** définissent comment une `-moz-box` ou une `-webkit-box` s'étend pour remplir la boîte qui la contient, dans la direction de la mise en page de la boîte englobante.

## Syntaxe

```css
/* Valeurs de type <number> */
-moz-box-flex: 0;
-moz-box-flex: 2;
-moz-box-flex: 3.5;
-webkit-box-flex: 0;
-webkit-box-flex: 2;
-webkit-box-flex: 3.5;

/* Valeurs globales */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: revert;
-moz-box-flex: revert-layer;
-moz-box-flex: unset;
-webkit-box-flex: inherit;
-webkit-box-flex: initial;
-webkit-box-flex: revert;
-webkit-box-flex: revert-layer;
-webkit-box-flex: unset;
```

La propriété `box-flex` est définie comme un nombre ({{CSSxRef("&lt;number&gt;")}}). Si la valeur est 0, la boîte ne grandit pas. Si elle est supérieure à 0, la boîte grandit pour occuper une proportion de l'espace disponible.

## Notes

La boîte englobante distribue l'espace supplémentaire en proportion de la valeur de flex de chacun des éléments de contenu.

Les éléments de contenu qui ont une valeur de flex nulle ne grandissent pas.

Si un seul élément de contenu a une valeur de flex non nulle, il grandit pour occuper l'espace disponible.

Les éléments de contenu qui ont la même valeur de flex grandissent de la même quantité absolue.

Si la valeur de flex est définie via l'attribut `flex` de l'élément, le style est ignoré.

Pour que les éléments XUL d'une boîte englobante aient la même taille, définissez l'attribut `equalsize` de la boîte englobante à la valeur `always`. Cet attribut n'a pas de propriété CSS correspondante.

Une astuce pour que tous les éléments de contenu d'une boîte englobante aient la même taille consiste à leur donner tous une taille fixe (par exemple, `height: 0`), et la même valeur de `box-flex` supérieure à zéro (par exemple, `-moz-box-flex: 1`).

## Définition formelle

{{CSSInfo}}

### Syntaxe formelle

{{CSSSyntaxRaw(`box-flex = <number>`)}}

## Exemples

### Définir `box-flex`

```html
<div class="exemple">
  <p>Je m'étends sur l'espace.</p>
  <p>Je ne me dilate pas.</p>
</div>
```

```css
div.exemple {
  display: -moz-box;
  display: -webkit-box;
  border: 1px solid black;
  width: 100%;
}

div.exemple > p:nth-child(1) {
  -moz-box-flex: 1; /* Mozilla */
  -webkit-box-flex: 1; /* WebKit */
  border: 1px solid black;
}

div.exemple > p:nth-child(2) {
  -moz-box-flex: 0; /* Mozilla */
  -webkit-box-flex: 0; /* WebKit */
  border: 1px solid black;
}
```

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("box-orient")}}
- La propriété {{CSSxRef("box-pack")}}
- La propriété {{CSSxRef("box-direction")}}
- La propriété {{CSSxRef("flex")}}
