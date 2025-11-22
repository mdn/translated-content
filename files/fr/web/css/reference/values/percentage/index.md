---
title: <percentage>
slug: Web/CSS/Reference/Values/percentage
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<percentage>`** représente une valeur en pourcentage. Il est souvent utilisé pour définir une taille relative à l'objet parent d'un élément. De nombreuses propriétés peuvent utiliser des pourcentages, telles que {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}} et {{CSSxRef("font-size")}}.

> [!NOTE]
> Seules les valeurs calculées peuvent être héritées. Ainsi, même si une valeur en pourcentage est utilisée sur la propriété parente, une valeur réelle (comme une largeur en pixels pour une valeur {{CSSxRef("&lt;length&gt;")}}) sera accessible sur la propriété héritée, et non la valeur en pourcentage.

## Syntaxe

Le type de données `<percentage>` est composé d'un {{CSSxRef("&lt;number&gt;")}} suivi du signe pourcentage (`%`). Il peut éventuellement être précédé d'un seul signe `+` ou `-`, bien que les valeurs négatives ne soient pas valides pour toutes les propriétés. Comme pour toutes les dimensions CSS, il n'y a aucun espace entre le symbole et le nombre.

## Interpolation

Lorsqu'elles sont animées, les valeurs du type `<percentage>` sont {{Glossary("interpolation", "interpolées")}} sous forme de nombres réels à virgule flottante. La rapidité de l'interpolation est déterminée par la [fonction de temporisation](/fr/docs/Web/CSS/Reference/Values/easing-function) associée à l'animation.

## Exemples

### `width` et `margin-left`

```html
<div class="container">
  <div class="box1">width : 50%, left-margin : 20%</div>
  <div class="box2">width : 30%, left-margin : 60%</div>
</div>
```

```css
.container {
  background-color: navy;
}

.box1 {
  width: 50%;
  margin-left: 20%;
  background-color: chartreuse;
}

.box2 {
  width: 30%;
  margin-left: 60%;
  background-color: pink;
}
```

{{EmbedLiveSample('`width` et `margin-left`', 600, 140)}}

### `font-size`

```html
<div class="container">
  <p>Texte en taille normale (18px)</p>
  <p><span class="half">50% (9px)</span></p>
  <p><span class="double">200% (36px)</span></p>
</div>
```

```css
.container {
  font-size: 18px;
}

.half {
  font-size: 50%;
}

.double {
  font-size: 200%;
}
```

{{EmbedLiveSample('`font-size`', 'auto', 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de données {{CSSxRef("&lt;length-percentage&gt;")}}
- Le module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
