---
title: font-family
slug: Web/CSS/@font-face/font-family
---

{{CSSRef}}

Le descripteur **`font-family`** permet aux auteurs d'un document de définir la police de caractères à utiliser au sein d'une règle @ {{cssxref("@font-face")}}.

## Syntaxe

```css
/* Valeurs de chaînes de caractères */
/* Type <string>                    */
font-family: "police de caractères a";
font-family: "une autre police";

/* Valeur de type <custom-ident> */
font-family: exemplepolice;
```

### Valeurs

- `<family-name>`
  - : Définit le nom de la police de caractères.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```css
@font-face {
  font-family: exemplepolice;
  src: url("exemplepolice.ttf");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
