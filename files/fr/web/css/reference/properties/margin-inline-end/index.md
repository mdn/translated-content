---
title: margin-inline-end
slug: Web/CSS/Reference/Properties/margin-inline-end
l10n:
  sourceCommit: 12b2bba6348add286377d12f0806d43ddc72bdb7
---

La propriété [CSS](/fr/docs/Web/CSS) **`margin-inline-end`** définit la marge logique de fin en ligne d'un élément, qui correspond à une marge physique selon le mode d'écriture, la direction et l'orientation du texte de l'élément. Autrement dit, elle correspond à la propriété {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} ou {{CSSxRef("margin-left")}} selon les valeurs définies pour {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: margin-inline-end")}}

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline-end: 20%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
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
/* Valeurs de type <length> */
margin-inline-end: 10px; /* Une longueur absolue */
margin-inline-end: 1em; /* Une longueur relative à la taille du texte */
margin-inline-end: 5%; /* Une largeur relative à la largeur du bloc englobant */
margin-inline-end: anchor-size(height);
margin-inline-end: calc(anchor-size(--my-anchor self-inline, 25px) / 5);

/* Valeurs avec un mot-clé */
margin-inline-end: auto;

/* Valeurs globales */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: revert;
margin-inline-end: revert-layer;
margin-inline-end: unset;
```

Elle est liée à {{CSSxRef("margin-block-start")}}, {{CSSxRef("margin-block-end")}} et {{CSSxRef("margin-inline-start")}}, qui définissent les autres marges de l'élément.

### Valeurs

La propriété `margin-inline-end` peut prendre les mêmes valeurs que la propriété {{CSSxRef("margin-top")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la marge de fin en ligne

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
  margin-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Résultat

{{EmbedLiveSample("Définir la marge de fin en ligne", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- La propriété {{CSSxRef("margin-inline-start")}}
- Les propriétés physiques associées&nbsp;: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}} et {{CSSxRef("margin-left")}}
- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
