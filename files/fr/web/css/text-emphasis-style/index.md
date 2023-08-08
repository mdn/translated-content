---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
---

{{CSSRef}}

La propriété **`text-emphasis-style`** définit le type d'emphase utilisée. Celui-ci peut également être (re)défini via la propriété raccourcie {{cssxref("text-emphasis")}}.

```css
/* Valeur initiale */
/* Aucune marque d'emphase */
text-emphasis-style: none;

/*  Valeur distincte */
text-emphasis-style: "x";
text-emphasis-style: "点";
text-emphasis-style: "\25B2";
text-emphasis-style: "*";

/* Valeurs avec un mot-clé */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* Valeurs globales */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Aucune marque d'emphase.
- `filled`
  - : La forme est remplie avec une couleur unie. Si `filled` ou `open` est absent, ce sera la valeur par défaut.
- `open`
  - : La forme est vide.
- `dot`
  - : Cette valeur permet d'afficher des marques en forme de points. Le point rempli est le caractère `'•'` (`U+2022`) et le point vide est le caractère `'◦'` (`U+25E6`).
- `circle`
  - : Cette valeur permet d'afficher des marques en forme de cercles (plus grands que les points). Le cercle rempli est le caractère `'●'` (`U+25CF`) et celui pour le cercle ouvert est `'○'` (`U+25CB`).
- `double-circle`
  - : Cette valeur permet d'afficher des marques en forme de doubles cercles. Le double-cercle rempli est le caractère `'◉'` (`U+25C9`), et le double-cercle ouvert est le caractère `'◎'` (`U+25CE`).
- `triangle`
  - : Cette valeur permet d'afficher des marques en forme de triangles. Le triangle rempli correspond au caractère `'▲'` (`U+25B2`) et le triangle ouvert au caractère `'△'` (`U+25B3`).
- `sesame`
  - : Cette valeur permet d'afficher des marques en forme de points sésame :`'﹅'` (`U+FE45`) pour le caractère rempli et `'﹆'` (`U+FE46`) pour le caractère ouvert.
- `<string>`
  - : Utilise la chaîne fournie comme marque. Attention, l'agent utilisateur peut tronquer la chaîne ou choisir d'ignorer les chaînes qui ont plus d'un graphème. Il est donc conseillé de n'utiliser qu'une seule lettre.

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
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref('text-emphasis-color')}}
- {{cssxref('text-emphasis')}}.
- {{cssxref('text-emphasis-position')}}
