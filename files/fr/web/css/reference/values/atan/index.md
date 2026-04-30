---
title: Fonction CSS `atan()`
short-title: atan()
slug: Web/CSS/Reference/Values/atan
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`atan()`** est une fonction trigonométrique qui retourne l'arc tangente d'un nombre compris entre `-∞` et `+∞`. La fonction contient un seul calcul qui retourne un angle ({{CSSxRef("&lt;angle&gt;")}}) compris entre `-90deg` et `90deg`.

## Syntaxe

```css
/* Une seule valeur <number> */
transform: rotate(atan(1));
transform: rotate(atan(4 * 50));

/* Autres valeurs */
transform: rotate(atan(pi / 2));
transform: rotate(atan(e * 3));
```

### Paramètres

La fonction `atan(number)` n'accepte qu'une seule valeur comme paramètre.

- `number`
  - : Un calcul qui résulte en un nombre ({{CSSxRef("&lt;number&gt;")}}) compris entre `-∞` et `+∞`.

### Valeur de retour

L'arc tangente d'un `number` retournera toujours un angle ({{CSSxRef("&lt;angle&gt;")}}) compris entre `-90deg` et `90deg`.

- Si `number` est `0⁻`, le résultat est `0⁻`.
- Si `number` est `+∞`, le résultat est `90deg`.
- Si `number` est `-∞`, le résultat est `-90deg`.

C'est-à-dire&nbsp;:

- `atan(-infinity)` représentant `-90deg`.
- `atan(-1)` représentant `-45deg`
- `atan(0)` représentant `0deg`
- `atan(1)` représentant `45deg`
- `atan(infinity)` représentant `90deg`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Faire pivoter des éléments

La fonction `atan()` peut être utilisée avec {{CSSxRef("transform-function/rotate", "rotate")}} pour faire pivoter des éléments, car elle retourne un angle ({{CSSxRef("&lt;angle&gt;")}}).

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(atan(-99999));
}
div.box-2 {
  transform: rotate(atan(-1));
}
div.box-3 {
  transform: rotate(atan(0));
}
div.box-4 {
  transform: rotate(atan(1));
}
div.box-5 {
  transform: rotate(atan(99999));
}
```

#### Résultat

{{EmbedLiveSample("Faire pivoter des éléments", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("sin()")}}
- La fonction {{CSSxRef("cos()")}}
- La fonction {{CSSxRef("tan()")}}
- La fonction {{CSSxRef("asin()")}}
- La fonction {{CSSxRef("acos()")}}
- La fonction {{CSSxRef("atan2()")}}
