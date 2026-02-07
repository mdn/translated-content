---
title: inset-inline-start
slug: Web/CSS/Reference/Properties/inset-inline-start
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`inset-inline-start`** définit le décalage logique de début en ligne d'un élément, qui correspond à un décalage physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond à la propriété {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} ou {{CSSxRef("left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Cette {{Glossary("inset properties", "propriété d'encart")}} n'a aucun effet sur les éléments non positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: inset-inline-start")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: horizontal-tb;
direction: rtl;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="example-container" id="example-element">
    <div id="abspos">
      Je suis positionné absolument avec inset-inline-start: 50px
    </div>
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
#example-element {
  border: 0.75em solid;
  padding: 0.75em;
  position: relative;
  width: 100%;
  min-height: 200px;
  unicode-bidi: bidi-override;
}

#abspos {
  background-color: yellow;
  color: black;
  border: 3px solid red;
  position: absolute;
  inset-inline-start: 50px;
  inline-size: 140px;
  min-block-size: 80px;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
inset-inline-start: 3px;
inset-inline-start: 2.4em;
inset-inline-start: calc(anchor(--my-anchor 50%) + 10px);
inset-inline-start: anchor-size(width);

/* Valeurs relatives à la largeur du bloc englobant */
/* Valeurs de type <percentage> */
inset-inline-start: 10%;

/* Valeurs avec un mot-clé */
inset-inline-start: auto;

/* Valeurs globales */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: revert;
inset-inline-start: revert-layer;
inset-inline-start: unset;
```

La propriété raccourcie pour `inset-inline-start` et {{CSSxRef("inset-inline-end")}} est {{CSSxRef("inset-inline")}}.

### Valeurs

La propriété `inset-inline-start` peut prendre les mêmes valeurs que la propriété {{CSSxRef("left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le décalage de début en ligne

#### HTML

```html
<div>
  <p class="exempleTexte">Texte pour l'exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exempleTexte {
  writing-mode: vertical-lr;
  position: relative;
  inset-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir le décalage de début en ligne", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés qui définissent d'autres décalages&nbsp;: {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}} et {{CSSxRef("inset-inline-end")}}
- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
