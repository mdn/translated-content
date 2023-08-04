---
title: Comentário
slug: Web/CSS/Comments
---

ios{{CSSRef}}

## Sumário

Comments are used to add explanatory notes or prevent the browser from interpreting parts of the style sheet.

Comments can be placed where ever white space is allowed within a style sheet.

## Sintaxe

```
/* Comment */
```

## Exemplos

```css
/* A single line comment */

/*
A comment
which stretches
over several
lines
*/
```

## Notas

The `/* */` comment syntax is used for both single and multi line comments. There is no other way to specify comments in external style sheets. However, when using the `<style>` element, you may use `<!-- -->` to hide CSS from older browsers, although this is not recommended. As in most programming languages that use the `/* */` comment syntax, comments cannot be nested. In other words, the first instance of `*/` that follows an instance of `/*` closes the comment.

## Especificações

- [CSS 2.1 Syntax and basic data types #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## Veja também

- [CSS Reference](/pt-BR/docs/Web/CSS/Reference)
