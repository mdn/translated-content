---
title: initial-letter
slug: Web/CSS/initial-letter
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/initial-letter
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`initial-letter`** permet de définir la mise en forme pour les lettrines (qu'elles soient abaissées, surélevées ou autre).

```css
/* Valeurs avec un mot-clé */
initial-letter: normal;

/* Valeurs numériques            */
/* Types <number> puis <integer> */
initial-letter: 1.5;   /* La première lettre occupe 1.5 lignes */
initial-letter: 3.0;   /* La première lettre occupe 3 lignes   */
initial-letter: 3.0 2; /* La première lettre occupe 3 lignes et
                          s'enfonce de deux lignes vers le bas */

/* Valeurs globales */
initial-letter: inherit;
initial-letter: initial;
initial-letter: unset;
```

## Syntaxe

La valeur de cette propriété peut être le mot-clé `normal` ou un nombre (`<number>`) éventuellement suivi d'un entier (`<integer>`).

### Valeurs

- `normal`
  - : Le texte se comporte de façon normale et on n'a pas de lettrines.
- `<number>`
  - : Cet argument définit le facteur de taille appliqué pour calculer la taille de la première lettre par rapport à la taille de la ligne du texte. Les valeurs négatives ne sont pas autorisées.
- `<integer>`
  - : Cet argument définit le nombre de lignes dont s'enfoncera la lettrine vers le bas. La valeur utilisée doit être supérieure à 0. Si cet argument est absent, on dupliquera la valeur du premier argument, arrondi vers le bas à l'entier positif le plus proche.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  -webkit-initial-letter: 3.0 2;
  initial-letter: 3.0 2;
}
```

### HTML

```html
<p class="exemple">
  Un grand rosier se trouvait à l’entrée du jardin ;
  les roses qu’il portait étaient blanches, mais trois
  jardiniers étaient en train de les peindre en rouge.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Inline', '#sizing-drop-initials', 'initial-letter')}} | {{Spec2('CSS3 Inline')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.initial-letter")}}
