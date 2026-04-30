---
title: Fonction CSS `acos()`
short-title: acos()
slug: Web/CSS/Reference/Values/acos
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`acos()`** est une fonction trigonométrique qui renvoie le cosinus inverse d'un nombre compris entre `-1` et `1`. Cette fonction effectue un unique calcul qui renvoie le nombre correspondant de radians représentant un angle ({{CSSxRef("&lt;angle&gt;")}}) entre `0deg` et `180deg`.

## Syntaxe

```css
/* Valeurs de type <number> */
transform: rotate(acos(-0.2));
transform: rotate(acos(2 * 0.125));

/* Autres valeurs */
transform: rotate(acos(pi / 5));
transform: rotate(acos(e / 3));
```

### Paramètres

La fonction `acos()` prend une seule valeur en paramètre.

- `number`
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) compris entre `-1` et `1`.

### Valeur de retour

Le cosinus inverse d'un `number` retourne toujours un angle ({{CSSxRef("&lt;angle&gt;")}}) compris entre `0deg` et `180deg`.

- Si `number` est inférieur à `-1` ou supérieur à `1`, le résultat est `NaN`.
- Si `number` est exactement `1`, le résultat est `0`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Faire pivoter des éléments

La fonction `acos()` peut être utilisée avec {{CSSxRef("transform-function/rotate", "rotate")}} pour faire pivoter des éléments, car elle retourne un angle ({{CSSxRef("&lt;angle&gt;")}}).

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
  transform: rotate(acos(1));
}
div.box-2 {
  transform: rotate(acos(0.5));
}
div.box-3 {
  transform: rotate(acos(0));
}
div.box-4 {
  transform: rotate(acos(-0.5));
}
div.box-5 {
  transform: rotate(acos(-1));
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
- La fonction {{CSSxRef("atan()")}}
- La fonction {{CSSxRef("atan2()")}}
