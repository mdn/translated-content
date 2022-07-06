---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-decoration-line
---
{{CSSRef}}

La propriété **`text-decoration-line`** définit la façon dont les décorations linéaires sont ajoutées à un élément et notamment leur position (sous le texte, au-dessus ou en travers de celui-ci).

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

La propriété raccourcie {{cssxref("text-decoration")}} permet de paramétrer cette propriété et d'autres propriétés associées aux décorations.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;

/* Valeurs avec plusieurs mots-clés */
text-decoration-line: underline overline;                /* On a deux décorations pour la ligne */
text-decoration-line: overline underline line-through;   /* On a plusieurs décorations */

/* Valeurs globales */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: unset;
```

### Valeurs

Cette propriété peut avoir une ou plusieurs valeurs séparées par des espaces. Si aucune valeur n'est fournie, il n'y a pas de décoration ajoutée :

- `none`
  - : Aucune ligne ne décore le texte.
- `underline`
  - : Chaque ligne de texte est soulignée.
- `overline`
  - : Une ligne est dessinée au-dessus de chaque ligne de texte.
- `line-through`
  - : Une ligne est dessinée au milieu de chaque ligne de texte.
- `blink` {{deprecated_inline}}
  - : Le texte clignote. Les agents utilisateurs conformes peuvent ne pas suivre cette directive. Cette valeur est dépréciée et il est conseillé d'utiliser les [animations CSS](/fr/docs/Web/CSS/animation) pour obtenir un effet similaire.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>Voici un texte souligné avec une vaguelette rouge.</p>
```

### CSS

```css
p {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

### Résultat

{{EmbedLiveSample('Exemples', 300, 60)}}

## Spécifications

| Spécification                                                                                                    | État                                         | Commentaires                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text Decoration', '#text-decoration-line', 'text-decoration-line')}} | {{Spec2('CSS3 Text Decoration')}} | Définition initiale. La propriété {{cssxref("text-decoration")}} n'était pas une propriété raccourcie auparavant. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-decoration-line")}}

## Voir aussi

- La propriété raccourcie {{cssxref("text-decoration")}} qui permet, entre autres, de paramétrer `text-decoration-line`.
