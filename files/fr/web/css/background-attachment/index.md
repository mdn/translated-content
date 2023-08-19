---
title: background-attachment
slug: Web/CSS/background-attachment
---

{{CSSRef}}

La propriété **`background-attachment`** définit si la position de l'image d'arrière-plan est fixée dans la zone d'affichage (<i lang="en">viewport</i>) ou si celle-ci défile avec le bloc englobant.

{{EmbedInteractiveExample("pages/css/background-attachment.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Valeurs globales */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: unset;
```

La propriété `background-attachment` est définie avec un des mots-clés de la liste suivante.

### Valeurs

- `fixed`
  - : Ce mot-clé indique que l'arrière-plan est fixe par rapport à la zone d'affichage (<i lang="en">viewport</i>). Ainsi, même si l'élément dispose d'outils de défilement, l'arrière-plan ciblé ne se déplacera pas avec l'élément (cette valeur n'est pas compatible avec [`background-clip: text`](/fr/docs/Web/CSS/background-clip)).
- `local`
  - : Ce mot-clé indique que l'arrière-plan se déplace avec le contenu de l'élément associé. Ainsi, si l'élément défile, l'arrière-plan défilera avec. Les zones de positionnement et de dessin de l'arrière-plan sont relatives à la zone de l'élément plutôt qu'au cadre extérieur.
- `scroll`
  - : Ce mot-clé indique que l'arrière-plan est fixé par rapport au contenu de l'élément (il ne défile pas avec) mais est rattaché à la bordure de l'élément.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple simple

#### CSS

```css
p {
  background-image: url("starsolid.gif");
  background-attachment: fixed;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
</p>
```

#### Résultat

{{EmbedLiveSample("")}}

### Gestion de plusieurs arrière-plans

On peut utiliser cette propriété lorsqu'on travaille avec plusieurs images en arrière-plan. On peut définir, pour chaque image, un `background-attachment` spécifique. Pour cela, on utilisera une liste, séparée par des virgules. Les images seront associées dans l'ordre à chaque propriété d'attachement.

#### CSS

```css
p {
  background-image: url("starsolid.gif"), url("startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
</p>
```

#### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gérer plusieurs arrière-plans](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
