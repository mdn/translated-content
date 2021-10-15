---
title: font-family
slug: Web/CSS/@font-face/font-family
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@font-face/font-family
---
{{CSSRef}}

Le descripteur **`font-family`** permet aux auteurs d'un document de définir la police de caractères à utiliser au sein d'une règle @ {{cssxref("@font-face")}}.

## Syntaxe

```css
/* Valeurs de chaînes de caractères */
/* Type <string>                    */
font-family: "police de caractères a";
font-family: 'une autre police';

/* Valeur de type <custom-ident> */
font-family: exemplepolice;
```

### Valeurs

- `<family-name>`
  - : Définit le nom de la police de caractères.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@font-face {
  font-family: exemplepolice;
  src: url('exemplepolice.ttf');
}
```

## Spécifications

| Spécification                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Fonts', '#font-family-desc', 'font-family')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.at-rules.font-face.font-family")}}
