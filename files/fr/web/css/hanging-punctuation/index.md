---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`hanging-punctuation`** indique si un signe de ponctuation se situant au début ou à la fin d'une ligne de texte doit rester sur cette ligne, quitte à sortir de la boîte qui représente la ligne.

```css
/* Valeurs avec un mot-clé */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* Valeurs avec deux mots-clés */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* Valeurs avec trois mots-clés */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;

/* Valeurs globales */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: unset;
```

## Syntaxe

Cette propriété peut être définie grâce à une, deux ou trois valeurs :

- Avec une valeur : on utilisera l'un des mots-clés de la liste ci-après
- Avec deux valeurs :

  - le mot-clé `first` avec un des mots-clés parmi : `last`, `allow-end` ou `force-end`
  - ou le mot-clé `last` avec un des mots-clés parmi : `last`, `allow-end` ou `force-end`

- Avec trois valeurs :

  - `first`, `allow-end` et `last`
  - ou `first`, `force-end` et `last`

### Valeurs

- `none`
  - : Aucun caractère ne reste suspendu sur la ligne.
- `first`
  - : Une parenthèse ou des guillemets ouvrants au début de la première ligne d'un texte restent sur la ligne.
- `last`
  - : Une parenthèse ou des guillemets fermants à la fin de la dernière ligne d'un texte restent sur la ligne.
- `force-end`
  - : Un point ou une virgule en fin de ligne restera sur cette ligne.
- `allow-end`
  - : Un point ou une virgule en fin de ligne restera sur cette ligne si la justification du texte ne laisse pas l'espace nécessaire.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim
  nunc mauris, et sollicitudin est scelerisque sed. Praesent laoreet tortor
  massa, sit amet vulputate nulla pharetra ut. Proin ornare commodo sodales.
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
  inceptos himenaeos.
</p>
```

### CSS

```css
p {
  hanging-punctuation: first;
  margin: 0.5rem;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
