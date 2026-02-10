---
title: margin-inline-start
slug: Web/CSS/Reference/Properties/margin-inline-start
l10n:
  sourceCommit: 12b2bba6348add286377d12f0806d43ddc72bdb7
---

La propriété [CSS](/fr/docs/Web/CSS) **`margin-inline-start`** définit la marge logique de début en ligne d'un élément, qui correspond à une marge physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Elle correspond à la propriété {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} ou {{CSSxRef("margin-left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-inline-start")}}

```css interactive-example-choice
margin-inline-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline-start: 20%;
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

## Syntaxe

```css
/* Valeurs de longt<length> */
margin-inline-start: 10px; /* Une longueur absolue */
margin-inline-start: 1em; /* Une longueur relative à la taille du texte */
margin-inline-start: 5%; /* Une largeur relative à la largeur du bloc englobant */
margin-inline-start: anchor-size(block);
margin-inline-start: calc(anchor-size(--my-anchor width, 30px) / 4);

/* Valeurs avec un mot-clé */
margin-inline-start: auto;

/* Valeurs globales */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: revert-layer;
margin-inline-start: unset;
```

Elle est liée à {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}} et {{CSSxRef("margin-inline-end")}}, qui définissent les autres marges de l'élément.

### Valeurs

La propriété `margin-inline-start` peut prendre les mêmes valeurs que la propriété {{CSSxRef("margin-top")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la marge de début en ligne

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
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir la marge de début en ligne", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- La propriété {{CSSxRef("margin-inline-end")}}
- Les propriétés physiques associées&nbsp;: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
