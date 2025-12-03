---
title: <angle>
slug: Web/CSS/Reference/Values/angle
original_slug: Web/CSS/angle
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<angle>`** représente une valeur d'angle exprimée en degrés, grades, radians ou tours. Il est utilisé, par exemple, dans les {{CSSxRef("&lt;gradient&gt;")}} et dans certaines fonctions {{CSSxRef("transform")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: &lt;angle&gt;")}}

```css interactive-example-choice
transform: rotate(45deg);
```

```css interactive-example-choice
transform: rotate(3.1416rad);
```

```css interactive-example-choice
transform: rotate(-50grad);
```

```css interactive-example-choice
transform: rotate(1.75turn);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Cette boîte peut pivoter à différents angles.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #0118f3;
  padding: 0.75em;
  width: 180px;
  height: 120px;
  color: white;
}
```

## Syntaxe

Le type **`<angle>`** se compose d'une valeur {{CSSxRef("&lt;number&gt;")}} suivie de l'une des unités listées ci-dessous. Comme pour toutes les dimensions, il n'y a pas d'espace entre le littéral de l'unité et le nombre. L'unité d'angle est facultative après le nombre `0`.

Il peut être précédé d'un seul signe `+` ou `-`. Les nombres positifs représentent des angles dans le sens horaire, tandis que les nombres négatifs représentent des angles dans le sens antihoraire. Pour les propriétés statiques d'une unité donnée, un angle peut être représenté par plusieurs valeurs équivalentes. Par exemple, `90deg` équivaut à `-270deg`, et `1turn` équivaut à `4turn`. Pour les propriétés dynamiques, comme lors de l'application d'une {{CSSxRef("animation")}} ou d'une {{CSSxRef("transition")}}, l'effet obtenu sera néanmoins différent.

### Unités

- `deg`
  - : Représente un angle en [degrés](<https://fr.wikipedia.org/wiki/Degré_(angle)>). Un cercle complet correspond à `360deg`. Exemples&nbsp;: `0deg`, `90deg`, `14.23deg`.
- `grad`
  - : Représente un angle en [grades](<https://fr.wikipedia.org/wiki/Grade_(angle)>). Un cercle complet correspond à `400grad`. Exemples&nbsp;: `0grad`, `100grad`, `38.8grad`.
- `rad`
  - : Représente un angle en [radians](https://fr.wikipedia.org/wiki/Radian). Un cercle complet correspond à 2π radians (soit environ `6.2832rad`). `1rad` correspond à 180/π degrés. Exemples&nbsp;: `0rad`, `1.0708rad`, `6.2832rad`.
- `turn`
  - : Représente un angle en nombre de tours. Un cercle complet correspond à `1turn`. Exemples&nbsp;: `0turn`, `0.25turn`, `1.2turn`.

## Exemples

### Définir un angle droit dans le sens horaire

<table>
  <tbody>
    <tr>
      <td><img src="angle90.png" alt="Un schéma montrant une rotation de 90 degrés dans le sens horaire le long d'un cercle, du point le plus haut au point le plus à droite." /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Définir un angle plat

<table>
  <tbody>
    <tr>
      <td><img src="angle180.png" alt="Un schéma montrant une rotation de 180 degrés dans le sens horaire le long d'un cercle, du point le plus haut au point le plus bas." /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### Définir un angle droit dans le sens anti-horaire

<table>
  <tbody>
    <tr>
      <td><img src="angleminus90.png" alt="Un schéma montrant une rotation de 90 degrés dans le sens anti-horaire le long d'un cercle, du point le plus haut au point le plus à gauche." /></td>
      <td><code>-90deg = -100grad = -0.25turn ≈ -1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Définir un angle nul

<table>
  <tbody>
    <tr>
      <td><img src="angle0.png" alt="Un schéma montrant une rotation de 0 degré. Il n'y a aucun mouvement." /></td>
      <td><code>0 = 0deg = 0grad = 0turn = 0rad</code></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Types de données CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
- Le type de donnée [`<gradient>`](/fr/docs/Web/CSS/Reference/Values/gradient)
- Transformations CSS de rotation&nbsp;: [`rotate()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotate), [`rotate3d()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotate3d), [`rotateX()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotateX), [`rotateY()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotateY), [`rotateZ()`](/fr/docs/Web/CSS/Reference/Values/transform-function/rotateZ)
- [Transformations CSS](/fr/docs/Web/CSS/Guides/Transforms)
- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
