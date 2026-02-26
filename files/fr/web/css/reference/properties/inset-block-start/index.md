---
title: inset-block-start
slug: Web/CSS/Reference/Properties/inset-block-start
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`inset-block-start`** définit le décalage logique de début de bloc d'un élément, qui correspond à un encart physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond à la propriété {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} ou {{CSSxRef("left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Cette {{Glossary("inset properties", "propriété d'encart")}} n'a aucun effet sur les éléments non positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: inset-block-start")}}

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
      Je suis positionné absolument avec inset-block-start: 50px
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
  inset-block-start: 50px;
  inline-size: 140px;
}
```

## Syntaxe

```css
/* Valeurs de type <length> */
inset-block-start: 3px;
inset-block-start: 2.4em;
inset-block-start: anchor(end);
inset-block-start: calc(anchor-size(--my-anchor height, 70px) * 2);

/* Valeurs relatives à la largeur du bloc englobant */
/* Type de type <percentage> */
inset-block-start: 10%;

/* Valeurs avec un mot-clé */
inset-block-start: auto;

/* Valeurs globales */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: revert;
inset-block-start: revert-layer;
inset-block-start: unset;
```

### Valeurs

La propriété `inset-block-start` peut prendre les mêmes valeurs que la propriété {{CSSxRef("left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le décalage de début de bloc

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
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir le décalage de début de bloc", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés qui définissent d'autres décalages&nbsp;: {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} et {{CSSxRef("inset-inline-end")}}
- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
