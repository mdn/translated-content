---
title: accent-color
slug: Web/CSS/accent-color
translation_of: Web/CSS/accent-color
browser-compat: css.properties.accent-color
---
{{CSSRef}}{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`accent-color`** définit la couleur d'accentuation ({{Glossary("accent")}}) des éléments. Une accentuation est présente sur des éléments HTML tels que des {{HTMLElement("input")}} de type [`checkbox`](/fr/docs/Web/HTML/Element/input/checkbox) ou [`radio`](/fr/docs/Web/HTML/Element/input/radio).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
accent-color: auto;

/* Valeurs de <color> */
accent-color: red;
accent-color: #5729e9;
accent-color: rgb(0, 200, 0);
accent-color: hsl(228, 4%, 24%);

/* Valeurs globales */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: unset;
```

### Valeurs

- `auto`
  - : Représente une couleur déterminée par l'agent utilisateur, qui devrait correspondre à la couleur d'accentuation de la plateforme, s'il y en a une.
- {{cssxref("&lt;color&gt;")}}
  - : Spécifie la couleur à utiliser en tant que couleur d'accentuation.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir une couleur d'accentuation personnalisée

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### Résultat

{{EmbedLiveSample('Exemples', 500, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}}
- [Appliquer des couleurs aux éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
- Le type de donnée {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}
