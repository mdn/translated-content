---
title: Fonction CSS `sqrt()`
short-title: sqrt()
slug: Web/CSS/Reference/Values/sqrt
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`sqrt()`** est une fonction exponentielle qui retourne la [racine carrée](https://fr.wikipedia.org/wiki/Racine_carrée) d'un nombre.

La fonction `pow(x, 0.5)` est équivalente à `sqrt(x)`.

## Syntaxe

```css
/* Valeur de type <number> */
width: calc(100px * sqrt(9)); /*  300px */
width: calc(100px * sqrt(25)); /*  500px */
width: calc(100px * sqrt(100)); /* 1000px */
```

### Paramètres

La fonction `sqrt(x)` n'accepte qu'une seule valeur comme paramètre.

- `x`
  - : Un calcul qui se résout en un nombre ({{CSSxRef("&lt;number&gt;")}}) supérieur ou égal à 0.

### Valeur de retour

Retourne un nombre ({{CSSxRef("&lt;number&gt;")}}) qui est la racine carrée de `x`.

- Si `x` est `+∞`, le résultat est `+∞`.
- Si `x` est `0⁻`, le résultat est `0⁻`.
- Si `x` est inférieur à `0`, le résultat est `NaN`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Changer la taille des boîtes en fonction de la racine carrée

Cet exemple montre comment utiliser la fonction `sqrt()` pour calculer des tailles.

#### HTML

```html
<div class="boxes">
  <div class="box">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

Ici, nous utilisons des [propriétés personnalisées CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) pour définir les tailles à utiliser. Tout d'abord, nous déclarons la première taille (`--size-0`), qui est ensuite utilisée pour calculer les autres tailles.

- `--size-1` est calculé en multipliant la valeur de `--size-0` (50px) par la racine carrée de 4 (2), ce qui donne 100px.
- `--size-2` est calculé en multipliant la valeur de `--size-0` (50px) par la racine carrée de 9 (3), ce qui donne 150px.
- `--size-3` est calculé en multipliant la valeur de `--size-0` (50px) par la racine carrée de 16 (4), ce qui donne 200px.

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * sqrt(4)); /*  100px */
  --size-2: calc(var(--size-0) * sqrt(9)); /*  150px */
  --size-3: calc(var(--size-0) * sqrt(16)); /*  200px */
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

Les tailles sont ensuite appliquées en tant que valeurs de `width` et `height` des sélecteurs.

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

{{EmbedLiveSample("Changer la taille des boîtes en fonction de la racine carrée", "100%", 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("pow()")}}
- La fonction {{CSSxRef("hypot()")}}
- La fonction {{CSSxRef("log()")}}
- La fonction {{CSSxRef("exp()")}}
