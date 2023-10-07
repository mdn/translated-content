---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
---

{{CSSRef}}

La propriété **`text-emphasis-color`** définit la couleur utilisée pour dessiner les marques d'emphase. Celle-ci peut être (re)définie grâce à la propriété raccourcie {{cssxref("text-emphasis")}}.

```css
/* Valeur initiale */
text-emphasis-color: currentColor;

/* Valeur de couleur */
/* Type <color> */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgba(90, 200, 160, 0.8);
text-emphasis-color: transparent;

/* Valeurs globales */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: unset;
```

## Syntaxe

### Valeurs

- `<color>`
  - : Définit la couleur utilisée pour les marques. Si on ne définit pas de couleur, ce sera la couleur courante du texte qui sera utilisée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p><em>Coucou</em>, je suis <em>là</em></p>
```

### CSS

```css
em {
  text-emphasis-style: sesame;
  text-emphasis-color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref('text-emphasis-style')}}
- {{cssxref('text-emphasis')}}.
- {{cssxref('text-emphasis-position')}}
- Le type de données {{cssxref("&lt;color&gt;")}}
- D'autres propriétés relatives aux couleurs {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}
- [Appliquer des couleurs sur des éléments HTML](/fr/docs/Web/HTML/Applying_color)
