---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
---

{{CSSRef}}

La propriété **`font-size-adjust`** permet de choisir une taille de police selon la taille des caractères en minuscules plutôt que selon la taille des majuscules.

```css
/* On utilise la taille de fonte définie */
font-size-adjust: none;

/* On utilise une fonte pour laquelle
   les minuscules font la moitié de la
   taille définie */
/* Type <number> */
font-size-adjust: 0.5;

/* Valeurs globales */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: unset;
```

Cela est particulièrement utile lorsque la lisibilité des fontes, notamment celles de petite taille, est déterminée par la taille des minuscules plutôt que par celle des majuscules.

La lisibilité peut devenir un problème lorsque la première police indiquée par {{cssxref("font-family")}} n'est pas disponible et que la police de remplacement possède un facteur de forme très différent (ce facteur correspond au ratio de la taille des minuscules sur la taille de la fonte).

Pour utiliser cette propriété d'une façon compatible avec les navigateurs qui ne prennent pas en charge `font-size-adjust`, on définira le facteur par lequel on multiplie la valeur de la propriété {{Cssxref("font-size")}}. Cela signifie généralement que la propriété doit correspondre au facteur de forme de la première fonte. Ainsi, lorsqu'une feuille de style définit :

```css
font-size: 14px;
font-size-adjust: 0.5;
```

On indique en fait que les minuscules de la fonte utilisée doivent mesurer `7px` de haut (0.5 × 14px).

## Syntaxe

### Valeurs

- `none`
  - : La taille de la fonte est uniquement choisie grâce à la propriété {{cssxref("font-size")}}.
- `<number>`

  - : La taille de la fonte est choisie afin que les minuscules (selon la taille horizontale de la fonte) mesurent X fois {{cssxref("font-size")}}.

    Le nombre indiqué (cf. le type {{cssxref("&lt;number&gt;")}}) devrait la plupart du temps correspondre au facteur de forme de la première fonte listée avec {{cssxref("font-family")}}. Cela permet d'obtenir le même résultat dans les différents navigateurs, qu'ils supportent `font-size-adjust` ou non.

    `0` entraînera une haute nulle pour le texte (qui sera donc caché). Pour d'anciens navigateurs, comme Firefox avant la version 40, `0` était géré comme `none`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>Exemples pour <code>font-size-adjust</code></p>

<p class="times">Voici la fonte Times sur 10 px, difficile à lire en petit.</p>

<p class="verdana">
  Voici la fonte Verdana sur 10px, plus lisible car sans empattement (serif).
</p>

<p class="adjtimes">
  et voilà le texte ajusté pour avoir le même facteur de forme qu'avec Verdana.
</p>
```

### CSS

```css
.times {
  font-family: Times, serif;
  font-size: 10 px;
}

.verdana {
  font-family: Verdana, sans-serif;
  font-size: 10 px;
}

.adjtimes {
  font-family: Times, serif;
  font-size-adjust: 0.58;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '500', '300')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Un billet de David Baron sur `font-size-adjust` (en anglais)](https://bugzilla.mozilla.org/show_bug.cgi?id=1144885)
