---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-decoration-color
---
{{CSSRef}}

La propriété **`text-decoration-color`** définit la couleur utilisée pour dessiner les lignes décorant le texte (quel que soit le style définit {{cssxref("text-decoration-line")}}).

La propriété raccourcie {{cssxref("text-decoration")}} permet de paramétrer cette propriété et d'autres propriétés associées aux décorations.

{{EmbedInteractiveExample("pages/css/text-decoration-color.html")}}

> **Note :** Lorsqu'on définit plusieurs décorations à la fois, il peut être plus pratique d'utiliser la propriété raccourcie {{cssxref("text-decoration")}}.

Il est préférable d'utiliser cette propriété pour colorer ces décorations plutôt que d'utiliser d'autres éléments HTML.

> **Note :** CSS ne fournit pas de mécanisme spécifique pour définir une couleur par type de ligne. On peut toutefois y parvenir en imbriquant des éléments mis en forme différemment.

## Syntaxe

```css
/* Couleurs */
/* Valeurs de type <color> */
text-decoration-color: currentColor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgba(255, 128, 128, 0.5);
text-decoration-color: transparent;

/* Valeurs globales */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: unset;
```

### Valeurs

- `<color>`
  - : La propriété `color` accepte différents mots-clés et valeurs numériques. Pour plus de détails, voir {{cssxref("&lt;color&gt;")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="exemple">Du texte avec un effet au survol</p>
```

### CSS

```css
.exemple {
  text-decoration: underline;
  text-decoration-color: red;
}

.exemple:hover {
  color: blue;
  text-decoration: line-through;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                                                    | Statut                                       | Commentaires                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text Decoration', '#text-decoration-color-property', 'text-decoration-color')}} | {{Spec2('CSS3 Text Decoration')}} | Définition initiale. La propriété {{cssxref("text-decoration")}} n'était pas une propriété raccourcie auparavant. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.text-decoration-color")}}

## Voir aussi

- La propriété raccourcie {{cssxref("text-decoration")}} qui permet, entre autres, de paramétrer `text-decoration-color`.
- Le type de données {{cssxref("&lt;color&gt;")}}
- D'autres propriétés relatives aux couleurs : {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}
- [Appliquer des couleurs aux éléments HTML](/fr/docs/Web/HTML/Applying_color)
