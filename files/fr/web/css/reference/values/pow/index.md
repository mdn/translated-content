---
title: Fonction CSS `pow()`
short-title: pow()
slug: Web/CSS/Reference/Values/pow
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`pow()`** est une fonction exponentielle qui renvoie la valeur d'une base élevée à la puissance d'un nombre.

La fonction {{CSSxRef("exp")}} est un cas particulier de `pow()` où la valeur de la base est la constante mathématique [e](<https://fr.wikipedia.org/wiki/E_(nombre)>).

## Syntaxe

```css
/* Valeur de type <number> */
width: calc(10px * pow(5, 2)); /* 10px * 25 = 250px */
width: calc(10px * pow(5, 3)); /* 10px * 125 = 1250px */
width: calc(10px * pow(2, 10)); /* 10px * 1024 = 10240px */
```

### Paramètres

La fonction `pow(base, number)` accepte deux valeurs séparées par des virgules comme paramètres.

- `base`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}), représentant la base.
- `number`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}), représentant l'exposant.

### Valeur de retour

Retourne un nombre ({{CSSxRef("&lt;number&gt;")}}) représentant base<sup>number</sup>, c'est-à-dire `base` élevé à la puissance `number`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mise à l'échelle des titres par un ratio fixe

La fonction `pow()` peut être utile pour des stratégies comme le Modular Scale CSS, qui relie toutes les tailles de police d'une page entre elles par un ratio fixe.

#### HTML

```html
<h1>Titre 1</h1>
<h2>Titre 2</h2>
<h3>Titre 3</h3>
<h4>Titre 4</h4>
<h5>Titre 5</h5>
<h6>Titre 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * pow(1.5, 4));
}
h2 {
  font-size: calc(1rem * pow(1.5, 3));
}
h3 {
  font-size: calc(1rem * pow(1.5, 2));
}
h4 {
  font-size: calc(1rem * pow(1.5, 1));
}
h5 {
  font-size: calc(1rem * pow(1.5, 0));
}
h6 {
  font-size: calc(1rem * pow(1.5, -1));
}
```

#### Résultat

{{EmbedLiveSample("Mise à l'échelle des titres par un ratio fixe", "100%", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("sqrt()")}}
- La fonction {{CSSxRef("hypot()")}}
- La fonction {{CSSxRef("exp()")}}
- La fonction {{CSSxRef("log()")}}
