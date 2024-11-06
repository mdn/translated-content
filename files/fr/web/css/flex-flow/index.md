---
title: flex-flow
slug: Web/CSS/flex-flow
---

{{ CSSRef}}

La propriété CSS **`flex-flow`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) pour les propriétés {{cssxref("flex-direction")}} et {{cssxref("flex-wrap")}}.

{{EmbedInteractiveExample("pages/css/flex-flow.html")}}

Pour plus d'informations, voir la page [Utiliser les boîtes flexibles (_flexbox_) CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

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

- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide sur les boîtes flexibles : _[Ordonner les éléments flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
