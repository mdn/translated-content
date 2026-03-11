---
title: inset
slug: Web/CSS/Reference/Properties/inset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`inset`** correspond aux propriétés {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et/ou {{CSSxRef("left")}}. Elle utilise la même syntaxe à valeurs multiples que la propriété raccourcie {{CSSxRef("margin")}}.

Ces {{Glossary("inset properties", "propriétés d'encart")}}, y compris `inset`, n'ont aucun effet sur les éléments non positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: inset")}}

```css interactive-example-choice
inset: 1em;
```

```css interactive-example-choice
inset: 5% 0;
```

```css interactive-example-choice
inset: 2em 50px 20px;
```

```css interactive-example-choice
inset: 10px 30% 20px 0;
```

```css interactive-example-choice
inset: 0;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">Je suis positionné absolument.</div>
    <p>
      Il y a autant de boue dans les rues que si les eaux venaient à peine de se
      retirer de la surface de la terre, et il ne serait pas étonnant de croiser
      un Mégalosaure, long d'une douzaine de mètres, se dandinant comme un
      lézard éléphantesque dans Holborn Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid #ad1457;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #07136c;
  border: 6px solid #ffa000;
  color: white;
  position: absolute;
  inset: 0;
}
```

Bien que faisant partie du module [des propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values), cette propriété ne définit pas de décalages _logiques_. Elle définit des décalages _physiques_, quel que soit le mode d'écriture, la direction ou l'orientation du texte de l'élément.

## Propriétés constitutives

Cette propriété est une abréviation pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("top")}}
- {{CSSxRef("right")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("left")}}

## Syntaxe

```css
/* Valeurs de type <length> */
inset: 10px; /* la valeur est appliquée à l'ensemble des côtés */
inset: 4px 8px; /* haut/bas gauche/droit */
inset: 5px 15px 10px; /* haut gauche/droit bas */
inset: 2.4em 3em 3em 3em; /* haut droit bas gauche */
inset: calc(anchor(50%) + 10px) anchor(self-start) auto auto;
inset: anchor-size(block) calc(anchor(50%) + 10px) auto
  calc(anchor-size(width) / 4);

/* pourcentages de la largeur/hauteur du bloc englobant */
inset: 10% 5% 5% 5%;

/* Valeur avec un mot-clé */
inset: auto;

/* Valeurs globales */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### Valeurs

La propriété `inset` prend les mêmes valeurs que la propriété {{CSSxRef("left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir des décalages pour un élément

#### HTML

```html
<div>
  <span class="exempleTexte">Texte d'exemple</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exempleTexte {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir des décalages pour un élément", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}
- Les propriétés {{CSSxRef("inset-block")}} et {{CSSxRef("inset-inline")}}
- La propriété {{CSSxRef("position")}}
- Le module [de positionnement CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
