---
title: line-break
slug: Web/CSS/line-break
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/line-break
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`line-break`** définit la façon dont les sauts de ligne sont gérés. Cette propriété affecte uniquement les textes en chinois, japonais ou coréen (CJK).

```css
/* Valeurs avec un mot-clé */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;

/* Valeurs globales */
line-break: inherit;
line-break: initial;
line-break: unset;
```

## Syntaxe

### Valeurs

- `auto`
  - : Les sauts de ligne sont gérés avec la règle par défaut.
- `loose`
  - : Les sauts de ligne sont appliqués afin d'obtenir des lignes courtes (comme pour un journal). L'agent utilisateur fixera une règle souple en fonction des conventions liées à la langue utilisée.
- `normal`
  - : L'agent utilisateur utilisera les règles normales liées à la langue utilisée
- `strict`
  - : L'agent utilisateur utilisera des règles strictes et passera à la ligne dès que ce sera nécessaire au vu des caractères du langage utilisé.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('CSS3 Text', '#line-break-property', 'line-break')}} | {{Spec2('CSS3 Text')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.line-break")}}
