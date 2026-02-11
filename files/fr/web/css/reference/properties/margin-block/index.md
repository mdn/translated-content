---
title: margin-block
slug: Web/CSS/Reference/Properties/margin-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`margin-block`** définit les marges logiques de début et de fin de bloc d'un élément, qui correspondent à des marges physiques selon le mode d'écriture, la direction et l'orientation du texte de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-block")}}

```css interactive-example-choice
margin-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block: 5% 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 1rem auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row">Un</div>
    <div class="row transition-all" id="example-element">Deux</div>
    <div class="row">Trois</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-block-end")}}

## Syntaxe

```css
/* Valeurs de type <length> */
margin-block: 10px 20px; /* Une longueur absolue */
margin-block: 1em 2em; /* Une longueur relative à la taille du texte */
margin-block: 5% 2%; /* Une longueur relative à la largeur ou hauteur du bloc englobant */
margin-block: 10px; /* Une valeur utilisée pour les deux côtés */
margin-block: anchor-size(inline);
margin-block: calc(anchor-size(width) / 4) 1em;

/* Valeurs avec un mot-clé */
margin-block: auto;

/* Valeurs globales */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

Cette propriété correspond aux propriétés {{CSSxRef("margin-top")}} et {{CSSxRef("margin-bottom")}}, ou aux propriétés {{CSSxRef("margin-right")}} et {{CSSxRef("margin-left")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

La propriété `margin-block` peut être définie avec une ou deux valeurs.

- Avec **une** valeur, la même marge s'applique au **début et à la fin**.
- Avec **deux** valeurs, la première marge s'applique au **début**, la seconde à la **fin**.

### Valeurs

La propriété `margin-block` accepte les mêmes valeurs que la propriété {{CSSxRef("margin", "", "#valeurs")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les marges de début et de fin de bloc

#### HTML

```html
<div>
  <p>Texte d'exemple</p>
</div>
<div class="exempleVertical">
  <p>Texte d'exemple</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-block: 20px 40px;
  background-color: tan;
}

.exempleVertical {
  writing-mode: vertical-rl;
}
```

#### Résultat

{{EmbedLiveSample("Définir les marges de début et de fin de bloc", 140, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Les propriétés physiques associées&nbsp;: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
