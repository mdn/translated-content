---
title: text-decoration-thickness
slug: Web/CSS/text-decoration-thickness
---

{{CSSRef}}

La propriété CSS **`text-decoration-thickness`** définit l'épaisseur ou la largeur de la ligne de décoration utilisée sur le texte d'un élément (la ligne qui raye, souligne ou surligne le texte).

## Syntaxe

```css
/* Un seul mot-clé*/
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* Une valeur de longueur */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* Valeurs globales */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: unset;
```

### Valeurs

- `auto`
  - : Le navigateur choisit l'épaisseur pour la ligne de décoration.
- `from-font`
  - : Si le fichier de la police indique une épaisseur préférée, c'est cette valeur qui est utilisée. Si le fichier ne contient pas cette information, cette valeur est synonyme de `auto`.
- `<length>`
  - : Specifies the thickness of text decoration line as a {{cssxref('length')}}, overriding the font file suggestion or the browser default.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="longhand">Voici du texte avec un soulignement rouge de 2px.</p>
<p class="under-and-over">Celui est souligné et surligné.</p>
<p class="shorthand">
  Ce texte sera souligné avec une ligne bleue de 1px si la formulation
  raccourcie est prise en charge.
</p>
```

### CSS

```css
.longhand {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
}

.under-and-over {
  text-decoration-line: underline overline;
  text-decoration-style: solid;
  text-decoration-color: orange;
  text-decoration-thickness: 0.2rem;
}

.shorthand {
  text-decoration: underline solid blue 1px;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '', '', '')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("text-decoration")}}
- {{cssxref("text-underline-offset")}}
