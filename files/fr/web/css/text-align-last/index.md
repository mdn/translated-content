---
title: text-align-last
slug: Web/CSS/text-align-last
---

{{CSSRef}}

La propriété **`text-align-last`** définit la façon dont la dernière ligne d'un bloc, ou une ligne avant un retour à la ligne forcé, doit être alignée.

{{EmbedInteractiveExample("pages/css/text-align-last.html")}}

## Syntaxe

```css
/* Valeurs utilisant un mot-clé */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* Valeurs globales */
text-align-last: inherit;
text-align-last: initial;
text-align-last: unset;
```

### Valeurs

- `auto`
  - : La ligne concernée est alignée selon la valeur de {{cssxref("text-align")}} sauf si {{cssxref("text-align")}} vaut `justify`, auquel cas, cela aura le même effet que d'utiliser la valeur `start` pour `text-align-last`.
- `start`
  - : Cette valeur a le même effet que la valeur `left` si la direction du texte va de gauche à droite ou le même effet que `right` si la direction du texte va de droite à gauche.
- `end`
  - : Cette valeur a le même effet que la valeur `right` si la direction du texte va de gauche à droite ou le même effet que `left` si la direction du texte va de droite à gauche.
- `left`
  - : Les contenus en ligne (_inline_) sont alignés sur le bord gauche de la boîte contenant la ligne.
- `right`
  - : Les contenus en ligne (_inline_) sont alignés sur le bord droit de la boîte contenant la ligne.
- `center`
  - : Les contenus en ligne (_inline_) sont horizontalement centrés par rapport à la boîte contenant la ligne.
- `justify`
  - : Le texte est justifié. Les bords gauche et droit du texte sont alignés avec les bord gauche et droit du paragraphe.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p class="exemple">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

### CSS

```css
.exemple {
  text-align: justify;
  text-align-last: center;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("text-align")}}
