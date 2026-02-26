---
title: margin-inline
slug: Web/CSS/Reference/Properties/margin-inline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`margin-inline`** est une propriété raccourcie qui définit à la fois les marges logiques de début et de fin en ligne d'un élément, lesquelles correspondent à des marges physiques selon le mode d'écriture, la direction et l'orientation du texte de l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-inline")}}

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline: 10px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">Un</div>
    <div class="col transition-all" id="example-element">Deux</div>
    <div class="col">Trois</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("margin-inline-end")}}

## Syntaxe

```css
/* Valeurs de type <length> */
margin-inline: 10px 20px; /* Une longueur absolue */
margin-inline: 1em 2em; /* Une longueur relative à la taille du texte */
margin-inline: 5% 2%; /* Une longueur relative à la largeur ou hauteur du bloc englobant */
margin-inline: 10px; /* Une valeur utilisée pour les deux côtés */
margin-inline: anchor-size(width);
margin-inline: calc(anchor-size(self-block) / 5) auto;

/* Valeurs avec un mot-clé */
margin-inline: auto;

/* Valeurs globales */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

Cette propriété correspond aux propriétés {{CSSxRef("margin-top")}} et {{CSSxRef("margin-bottom")}}, ou aux propriétés {{CSSxRef("margin-right")}} et {{CSSxRef("margin-left")}}, selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

La propriété `margin-inline` peut être définie avec une ou deux valeurs.

- Avec **une** valeur, la même marge s'applique au **début et à la fin**.
- Avec **deux** valeurs, la première marge s'applique au **début**, la seconde à la **fin**.

### Valeurs

La propriété `margin-inline` peut prendre les mêmes valeurs que la propriété {{CSSxRef("margin", "", "#valeurs")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les marges de début et de fin en ligne

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
  writing-mode: vertical-rl;
  margin-inline: 20px 40px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir les marges de début et de fin en ligne", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Les propriétés physiques associées&nbsp;: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
