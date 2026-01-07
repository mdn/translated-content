---
title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
original_slug: Web/CSS/flex-flow
---

{{ CSSRef}}

La propriété CSS **`flex-flow`** est une [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) pour les propriétés {{cssxref("flex-direction")}} et {{cssxref("flex-wrap")}}.

{{InteractiveExample("CSS Demo: flex-flow")}}

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
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

Pour plus d'informations, voir la page [Utiliser les boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

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
flex-flow: unset;
```

### Valeurs

Voir {{cssxref("flex-direction")}} et {{cssxref("flex-wrap")}} pour plus d'informations sur les valeurs que peuvent prendre ces deux propriétés.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```css
element {
  /* L'axe principal sera la direction de bloc  */
  /* et on commencera par le bas (main-start et */
  /* main-end inversés. Les éléments flexibles  */
  /* passent sur une nouvelle ligne si besoin   */

  flex-flow: column-reverse wrap;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)_
- Guide sur les boîtes flexibles : _[Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)_
