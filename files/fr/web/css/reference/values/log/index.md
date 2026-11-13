---
title: Fonction CSS `log()`
short-title: log()
slug: Web/CSS/Reference/Values/log
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`log()`** est une fonction exponentielle qui retourne le logarithme d'un nombre.

Un [logarithme](https://fr.wikipedia.org/wiki/Logarithme) est l'inverse de l'exponentiation. C'est le nombre auquel une base fixe doit être élevée pour obtenir le nombre passé en premier paramètre.

En CSS, lorsqu'un seul paramètre est passé, le logarithme naturel `e`, ou approximativement `2,7182818`, est utilisé, bien que la base puisse être définie à n'importe quelle valeur avec un deuxième paramètre optionnel.

## Syntaxe

```css
/* Valeur de type <number> */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Paramètres

La fonction `log(value [, base]?)` accepte deux valeurs séparées par des virgules comme paramètres.

- `value`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}) supérieur ou égal à 0. Représente la valeur dont le logarithme doit être pris.

- `base`
  - : Optionnel. Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}) supérieur ou égal à 0. Représente la base du logarithme. Si elle n'est pas définie, la base logarithmique par défaut `e` est utilisée.

### Valeur de retour

Le logarithme de `value`, lorsque `base` est défini.

Le logarithme naturel (base `e`) de `value`, lorsque `base` n'est pas défini.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser la fonction `log()` sur une échelle logarithmique

Cet exemple illustre comment la fonction `log()` peut être utilisée pour visualiser des valeurs de données en utilisant une [échelle logarithmique](https://fr.wikipedia.org/wiki/%C3%89chelle_logarithmique). La largeur de chaque barre dans cet exemple est relative à sa valeur de données sur une échelle logarithmique avec une base de 10. Sur chaque élément, sa valeur est assignée à une [propriété personnalisée CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) nommée `--value`, qui est ensuite utilisée par la classe `.truc` pour calculer sa largeur.

#### HTML

```html
<div class="truc" style="--value: 50">50</div>
<div class="truc" style="--value: 100">100</div>
<div class="truc" style="--value: 500">500</div>
<div class="truc" style="--value: 10000">10,000</div>
<div class="truc" style="--value: 2000000">2,000,000</div>
```

#### CSS

```css
.truc {
  width: calc(log(var(--value), 10) * 2em);
}
```

```css hidden
.truc {
  height: 2em;
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25em 0;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser la fonction `log()` sur une échelle logarithmique", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("pow()")}}
- La fonction {{CSSxRef("sqrt()")}}
- La fonction {{CSSxRef("hypot()")}}
- La fonction {{CSSxRef("exp()")}}
