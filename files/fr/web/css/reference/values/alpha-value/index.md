---
title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
original_slug: Web/CSS/alpha-value
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<alpha-value>`** représente une valeur qui peut être soit un {{CSSxRef("&lt;number&gt;")}} soit un {{CSSxRef("&lt;percentage&gt;")}}, et qui définit le **canal alpha** (<i lang="en">alpha channel</i>) ou la **transparence** d'une couleur.

## Syntaxe

La valeur d'un **`<alpha-value>`** s'exprime soit comme un [`<number>`](/fr/docs/Web/CSS/Reference/Values/number) soit comme un {{CSSxRef("percentage", "pourcentage")}}.

Si la valeur est donnée comme un nombre, l'intervalle utile est de 0 (totalement transparent) à 1 (totalement opaque), avec des valeurs décimales possibles entre les deux. Par exemple, 0.5 indique que la couleur de premier plan est utilisée à 50&nbsp;% et celle d'arrière-plan à 50&nbsp;%. Les valeurs en dehors de l'intervalle 0 à 1 sont autorisées, mais elles sont écrêtées à 0 ou 1.

Si la valeur alpha est donnée en pourcentage, 0&nbsp;% correspond à une transparence totale tandis que 100&nbsp;% indique une opacité totale.

## Syntaxe formelle

{{CSSSyntax}}

## Interpolation

Lorsqu'elles sont animées, les valeurs du type de donnée CSS `<alpha-value>` sont {{Glossary("interpolation", "interpolées")}} comme des nombres réels à virgule flottante. La vitesse de l'interpolation est déterminée par la [fonction de temporisation](/fr/docs/Web/CSS/Reference/Values/easing-function) associée à l'animation.

## Exemples

### Définir l'opacité de la couleur du texte

La fonction [`rgb()`](/fr/docs/Web/CSS/Reference/Values/color_value/rgb) accepte une quatrième valeur optionnelle pour spécifier une valeur alpha. L'exemple suivant montre comment appliquer une couleur avec 60&nbsp;% d'opacité&nbsp;:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Définir le seuil d'image de forme

Ici, une valeur alpha est utilisée pour déterminer quelles parties d'une image sont considérées comme faisant partie d'une forme&nbsp;:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Types de données CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
- [Couleur CSS](/fr/docs/Web/CSS/Guides/Colors)
- Le type de donnée [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value)
