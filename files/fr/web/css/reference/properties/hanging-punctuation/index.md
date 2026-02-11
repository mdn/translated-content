---
title: hanging-punctuation
slug: Web/CSS/Reference/Properties/hanging-punctuation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`hanging-punctuation`** indique si un signe de ponctuation se situant au début ou à la fin d'une ligne de texte doit rester sur cette ligne, quitte à sortir de la boîte qui représente la ligne.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: allow-end;

/* Valeurs avec deux mots-clés */
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last allow-end;

/* Valeurs avec trois mots-clés */
hanging-punctuation: first allow-end last;

/* Valeurs globales */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: revert;
hanging-punctuation: revert-layer;
hanging-punctuation: unset;
```

La propriété `hanging-punctuation` peut être définie avec une, deux ou trois valeurs séparées par des espaces.

### Valeurs

- `none`
  - : Aucun caractère ne reste suspendu.
- `first`
  - : Une parenthèse ou des guillemets ouvrants au début de la première ligne formatée d'un élément restent suspendus. Cela s'applique&nbsp;:
    - à tous les caractères des catégories Unicode [Ps <sup>(angl.)</sup>](https://unicodeplus.com/category/Ps), [Pf <sup>(angl.)</sup>](https://unicodeplus.com/category/Pf), [Pi <sup>(angl.)</sup>](https://unicodeplus.com/category/Pi)
    - aux guillemets `U+0027` APOSTROPHE (`'`) et `U+0022` GUILLEMET (`"`).

- `last`
  - : Une parenthèse ou des guillemets fermants à la fin de la dernière ligne formatée d'un élément restent suspendus. Cela s'applique&nbsp;:
    - à tous les caractères des catégories Unicode [Pe <sup>(angl.)</sup>](https://unicodeplus.com/category/Pe), [Pf <sup>(angl.)</sup>](https://unicodeplus.com/category/Pf), [Pi <sup>(angl.)</sup>](https://unicodeplus.com/category/Pi)
    - aux guillemets `U+0027` APOSTROPHE (`'`) et `U+0022` GUILLEMET (`"`).
- `allow-end`
  - : Un point ou une virgule en fin de ligne reste suspendu si la justification ne permet pas de le placer avant.

Les points et virgules autorisés à rester suspendus incluent&nbsp;:

- `U+002C`, VIRGULE
- `U+002E`, POINT
- `U+060C`, VIRGULE ARABE
- `U+06D4`, POINT ARABE
- `U+3001`, VIRGULE IDÉOGRAPHIQUE
- `U+3002`, POINT IDÉOGRAPHIQUE
- `U+FF0C`, VIRGULE PLEINE LARGEUR
- `U+FF0E`, POINT PLEINE LARGEUR
- `U+FE50`, PETITE VIRGULE
- `U+FE51`, PETITE VIRGULE IDÉOGRAPHIQUE
- `U+FE52`, PETIT POINT
- `U+FF61`, POINT IDÉOGRAPHIQUE DEMI-LARGEUR
- `U+FF64`, VIRGULE IDÉOGRAPHIQUE DEMI-LARGEUR

Les agents utilisateur peuvent inclure des caractères supplémentaires.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la suspension des guillemets ouvrants et fermants

#### HTML

```html
<p>
  «&nbsp;Pendant un instant, rien ne se produisit. Puis, après une seconde ou
  deux, rien ne continua à se produire.&nbsp;»
</p>

<p class="hanging">
  «&nbsp;Pendant un instant, rien ne se produisit. Puis, après une seconde ou
  deux, rien ne continua à se produire.&nbsp;»
</p>

<p class="hanging right">
  «&nbsp;Pendant un instant, rien ne se produisit. Puis, après une seconde ou
  deux, rien ne continua à se produire.&nbsp;»
</p>
```

### CSS

```css
p {
  width: 15em;
  border: 1px solid #cccccc;
  font-size: 2rem;
  font-style: italic;
  margin: 1em;
}

p.hanging {
  hanging-punctuation: first last;
}

p.right {
  text-align: right;
}
```

### Résultat

{{EmbedLiveSample("Définir la suspension des guillemets ouvrants et fermants")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('text-indent')}}
- [CSS Tricks&nbsp;: la suspension de la ponctuation <sup>(angl.)</sup>](https://css-tricks.com/almanac/properties/h/hanging-punctuation/)
