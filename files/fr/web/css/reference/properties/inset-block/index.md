---
title: inset-block
slug: Web/CSS/Reference/Properties/inset-block
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`inset-block`** définit les décalages logiques de début et de fin de bloc d'un élément, qui correspondent à des décalages physiques selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond aux propriétés {{CSSxRef("top")}} et {{CSSxRef("bottom")}}, ou {{CSSxRef("right")}} et {{CSSxRef("left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

Cette {{Glossary("inset properties", "propriété d'encart")}} n'a aucun effet sur les éléments non positionnés.

{{InteractiveExample("Démonstration CSS&nbsp;: inset-block")}}

```css interactive-example-choice
inset-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inset-block: 5% 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-block: 1rem auto;
writing-mode: vertical-lr;
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

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block-start")}}

## Syntaxe

```css
/* Valeurs de type <length> */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* La valeur est appliquée des deux côtés */
inset-block: auto anchor(start);
inset-block: 10em anchor-size(--my-anchor height, 10%);

/* Les valeurs en pourcentage sont relatives à la largeur ou à la hauteur du bloc englobant */
/* Valeurs de type <percentage> */
inset-block: 10% 5%;

/* Valeur avec un mot-clé */
inset-block: auto;

/* Valeurs globales */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: revert-layer;
inset-block: unset;
```

### Valeurs

La propriété `inset-block` peut prendre les mêmes valeurs que la propriété {{CSSxRef("left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir des décalages de début et de fin de bloc

#### HTML

```html
<div>
  <p class="exempleTexte">Texte d'exemple</p>
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
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir des décalages de début et de fin de bloc", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes&nbsp;: {{CSSxRef("top")}}, {{CSSxRef("right")}}, {{CSSxRef("bottom")}} et {{CSSxRef("left")}}
- La propriété raccourcie {{CSSxRef("inset")}}
- Le raccourci en ligne correspondant&nbsp;: {{CSSxRef("inset-inline")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
