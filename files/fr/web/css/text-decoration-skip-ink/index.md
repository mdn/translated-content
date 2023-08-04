---
title: text-decoration-skip-ink
slug: Web/CSS/text-decoration-skip-ink
---

{{CSSRef}}

La propriété CSS **`text-decoration-skip-ink`** définit la façon dont la ligne décorative (en dessous ou au dessus du texte) est dessinée lorsqu'elle rencontre [le jambage](https://fr.wikipedia.org/wiki/Jambage) ou [la hampe](<https://fr.wikipedia.org/wiki/Fût_(typographie)>) d'un caractère (ou glyphe).

## Syntaxe

```css
/* Valeur avec un mot-clé */
text-decoration-skip-ink: none;
text-decoration-skip-ink: auto;

/* Valeurs globales */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: unset;
```

### Valeurs

- `none`
  - : La ligne décorative traverse l'ensemble des glyphes, qu'ils aient un jambage ou une hampe.
- `auto`
  - : La valeur par défaut : la ligne (au dessus ou en dessous du texte) est uniquement dessinée de façon à ne pas être proche des jambages ou hampes des glyphes. Autrement dit, la ligne est interrompue à chaque fois qu'elle croise un glyphe. ![An example of "text-decoration-skip: ink;".](decoration-skip-ink.png)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>Un instant après, Alice était à la poursuite du Lapin dans le terrier…</p>
```

### CSS

```css
p {
  margin: 0;
  font-size: 2em;
  text-decoration: underline blue;
  text-decoration-skip-ink: auto;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
