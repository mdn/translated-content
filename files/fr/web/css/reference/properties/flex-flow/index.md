---
title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS **`flex-flow`**) définit la direction d'un conteneur flexible ainsi que son comportement de retour à la ligne.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Élément Un</div>
    <div>Élément Deux</div>
    <div>Élément Trois</div>
    <div>Élément Quatre</div>
    <div>Élément Cinq</div>
    <div>Élément Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## Propriétés constitutives

Cette propriété est une propriété abrégée pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-wrap")}}

## Syntaxe

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> et <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* Valeurs globales */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### Valeurs

Voir {{CSSxRef("flex-direction")}} et {{CSSxRef("flex-wrap")}} pour plus d'informations sur les valeurs que peuvent prendre ces deux propriétés.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir `column-reverse` et `wrap`

Dans cet exemple, l'axe principal est l'axe de bloc avec un **main-start** et un **main-end** inversés. Les éléments flexibles peuvent passer à la ligne, créant de nouvelles lignes si besoin.

```css
.container {
  flex-flow: column-reverse wrap;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les concepts de bases des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
