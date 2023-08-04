---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
---

{{CSSRef}}

La propriété CSS **`text-underline-offset`** définit le décalage de la ligne de décoration du texte par rapport à sa position originale.

{{EmbedInteractiveExample("pages/css/text-underline-offset.html")}}

> **Note :** `text-underline-offset` n'est pas une propriété détaillée de {{cssxref('text-decoration')}}. Bien qu'un élément puisse avoir plusieurs lignes décoratives, `text-underline-offset` n'aura qu'un impact sur le soulignage (et pas sur les autres lignes telles que celles fournies par {{cssxref('text-decoration-line')}} avec `overline` ou `line-through`).

## Syntaxe

```css
/* Valeur simple */
text-underline-offset: none;
text-underline-offset: from-font;
text-underline-offset: 0.2em;

/* Valeurs globales */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: unset;
```

La propriété `text-underline-offset` est définie avec le mot-clé `none` ou avec une valeur de la liste suivante.

### Valeurs

- `auto`
  - : Le navigateur choisit un décalage approprié pour le soulignage.
- `from-font`
  - : Si le fichier de fonte inclut des informations quant à un décalage préféré, c'est cette valeur qui sera utilisée. Si le fichier de fonte n'a pas cette information, cette valeur se comportera comme `auto`.
- `<length>`
  - : Une longueur (valeur de type {{cssxref("&lt;length&gt;")}}) indiquant le décalage à utiliser. Il est recommandé d'utiliser des [`em`](/fr/docs/Web/CSS/length#em) comme unité afin que le décalage suive la taille de la police (quand on zoome par exemple).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
p {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
  text-underline-offset: 1em;
}

.deuxlignes {
  text-decoration-line: underline overline;
}
```

### HTML

```html
<p class="uneligne">Voici un texte souligné avec une ligne ondulée rouge !</p>
<p class="deuxlignes">
  Ce texte a une ligne en dessous et une ligne au dessus. Seule la ligne du
  dessous est déplacée.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', '', '', '')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("text-decoration")}}
