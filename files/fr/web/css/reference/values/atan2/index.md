---
title: Fonction CSS `atan2()`
short-title: atan2()
slug: Web/CSS/Reference/Values/atan2
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`atan2()`** est une fonction trigonométrique qui retourne l'arc tangente de deux valeurs comprises entre `-∞` et `+∞`. La fonction accepte deux arguments et retourne un angle ({{CSSxRef("&lt;angle&gt;")}}) compris entre `-180deg` et `180deg`, sans impliquer d'unité spécifique comme les radians.

## Syntaxe

```css
/* Deux valeurs de type <number> */
transform: rotate(atan2(3, 2));

/* Deux valeurs de type <dimension> */
transform: rotate(atan2(1rem, -0.5rem));

/* Deux valeurs de type <percentage> */
transform: rotate(atan2(20%, -30%));

/* Autres valeurs */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### Paramètres

La fonction `atan2(y, x)` accepte deux valeurs séparées par des virgules comme paramètres. Chaque valeur peut être un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Les deux valeurs doivent être du même type, bien que si elles sont des dimensions, elles peuvent être de différentes unités (exemple&nbsp;: `atan2(100px, 5vw)` est valide).

- `y`
  - : La coordonnée y du point. Un calcul qui résout à un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}).
- `x`
  - : La coordonnée x du point. Un calcul qui résout à un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}).

### Valeur de retour

Étant donné deux valeurs `x` et `y`, la fonction `atan2(y, x)` calcule et retourne l'angle ({{CSSxRef("&lt;angle&gt;")}}) entre l'axe des x positif et le rayon partant de l'origine vers le point `(x, y)`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Faire pivoter des éléments

La fonction `atan2()` peut être utilisée avec {{CSSxRef("transform-function/rotate", "rotate")}} pour faire pivoter des éléments, car elle retourne un angle ({{CSSxRef("&lt;angle&gt;")}}).

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
  transform: rotate(atan2(3, 2));
}
div.box-2 {
  transform: rotate(atan2(3%, -2%));
}
div.box-3 {
  transform: rotate(atan2(-1, 0.5));
}
div.box-4 {
  transform: rotate(atan2(1, 0.5));
}
div.box-5 {
  transform: rotate(atan2(1rem, -0.5rem));
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
- La fonction {{CSSxRef("atan()")}}
- [Utiliser l'arithmétique typée CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
