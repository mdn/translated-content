---
title: Fonction CSS `hypot()`
short-title: hypot()
slug: Web/CSS/Reference/Values/hypot
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`hypot()`** est une fonction exponentielle qui retourne la [racine carrée](https://fr.wikipedia.org/wiki/Racine_carrée) de la somme des carrés de ses paramètres.

Alors que {{CSSxRef("pow()")}} et {{CSSxRef("sqrt()")}} ne fonctionnent que sur des nombres sans unité, `hypot()` accepte des valeurs avec des unités, mais elles doivent toutes avoir le même [type](/fr/docs/Web/CSS/Reference/Values/Data_types).

## Syntaxe

```css
/* Valeur de type <number> */
width: hypot(2em); /* 2em */
width: hypot(3em, 4em); /* 5em */
width: hypot(30px, 40px); /* 50px */
width: hypot(48px, 64px); /* 80px */
width: hypot(3px, 4px, 5px); /* 7.0710678118654755px */
```

### Paramètres

La fonction `hypot(x [, ...]#)` accepte un ou plusieurs calculs séparés par des virgules comme paramètres.

- `x`, `x2`, ..., `xN`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}).

### Valeur de retour

Retourne un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) (en fonction des entrées), qui est la racine carrée de la somme des carrés de ses paramètres.

- Si l'une des entrées est `infinite`, le résultat est `+∞`.
- Si un seul paramètre est fourni, le résultat est la valeur absolue de son entrée. `hypot(2em)` et `hypot(-2em)` donnent tous deux `2em`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Tailles basées sur la fonction `hypot`

Cet exemple montre comment utiliser la fonction `hypot()` pour calculer des tailles.

#### HTML

```html
<div class="boxes">
  <div class="box">100px</div>
  <div class="box one">100px</div>
  <div class="box two">141.42px</div>
  <div class="box three">250px</div>
</div>
```

#### CSS

Ici, nous utilisons des [propriétés personnalisées CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) pour définir les tailles à utiliser. Tout d'abord, nous déclarons la première taille (`--size-0`) qui est ensuite utilisée pour calculer les autres tailles.

- `--size-1` est calculé avec l'hypoténuse de `--size-0` (100px). Cela prend la valeur au carré et, comme il n'y a pas d'autre valeur, retourne la racine carrée de la valeur, ce qui donne 100px.
- `--size-2` est calculé avec l'hypoténuse de `--size-0` (100px), deux fois. Cela prend le carré de la valeur (100px \* 100px = 10000px<sup>2</sup>) et l'ajoute au carré de `--size-0` à nouveau (10000px<sup>2</sup> + 10000px<sup>2</sup> = 20000px<sup>2</sup>) et retourne la racine carrée de la somme (√(20000px<sup>2</sup>)), ce qui donne 141.42px.
- `--size-3` est calculé avec l'hypoténuse `--size-0` \* 1.5 (150px) et `--size-0` \* 2 (200px). Le résultat est la racine carrée de la somme de leurs carrés&nbsp;: les valeurs sont mises au carré (22500px<sup>2</sup> et 40000px<sup>2</sup>) et additionnées (62500px<sup>2</sup>), la somme étant ensuite mise à la racine carrée (√(62500px<sup>2</sup>)) donnant 250px.

```css
:root {
  --size-0: 100px;
  --size-1: hypot(var(--size-0)); /*  100px */
  --size-2: hypot(var(--size-0), var(--size-0)); /*  141.42px */
  --size-3: hypot(
    calc(var(--size-0) * 1.5),
    calc(var(--size-0) * 2)
  ); /*  250px */
}
```

```css hidden
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: var(--size-0);
  height: var(--size-0);
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Les tailles sont ensuite appliquées comme valeurs de `width` et `height` des sélecteurs.

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### Résultat

{{EmbedLiveSample("Tailles basées sur la fonction `hypot`", "100%", 270)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("pow()")}}
- La fonction {{CSSxRef("sqrt()")}}
- La fonction {{CSSxRef("log()")}}
- La fonction {{CSSxRef("exp()")}}
