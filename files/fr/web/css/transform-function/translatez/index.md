---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
translation_of: Web/CSS/transform-function/translateZ()
original_slug: Web/CSS/transform-function/translateZ()
browser-compat: css.types.transform-function.translateZ
---
{{CSSRef}}

La fonction **`translateZ()`** permet de déplacer un élément selon l'axe z de l'espace tridimensionnel. Cette transformation est caractérisée par une valeur de longueur (type [`<length>`](/fr/docs/Web/CSS/length)) qui définit l'amplitude du mouvement. La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

`translateZ(tz)` est un raccourci équivalent à `translate3d(0, 0, tz)`.

Dans les exemples interactifs ci-avant, `perspective: 500px;` a été utilisée afin de créer un espace en trois dimensions et `transform-style: preserve-3d` permet de positionner les éléments enfants (les 6 faces du cube) dans cet espace 3D.

## Syntaxe

```css
translateZ(tz)
```

### Valeurs

- `t`
  - : Une valeur de type [`<length>`](/fr/docs/Web/CSS/length) qui représente la composante en Z du vecteur de translation appliqué. Cet argument ne peut pas être de type [`<percentage>`](/fr/docs/Web/CSS/percentage), si c'est le cas, la propriété qui contient la transformation est considérée comme invalide.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>3</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        Cette transformation s'applique en trois dimensions et ne peut donc être
        représentée sur un plan.
      </td>
      <td colspan="1" rowspan="2">
        Une translation n'est pas une transformation linéaire sur ℝ<sup>3</sup>
        et ne peut donc pas être représentée avec une matrice dans le système
        cartésien.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  /* On ajoute une perspective pour créer un */
  /* espace 3D. L'utilisateur regarde « depuis »*/
  /* 500px et on avance l'élément vers l'utili- */
  /* sateur de 200px */
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

Si la valeur fournie à `perspective()` est inférieure à l'argument de `translateZ()` (ex. `transform: perspective(200px) translateZ(300px);`), l'élément transformé ne sera pas visible, car il sera situé au-delà de l'espace projeté sur l'écran. Plus l'écart entre ces deux arguments est faible, plus l'élément paraîtra proche de l'utilisateur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [Les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [`transform`](/fr/docs/Web/CSS/transform)
- [`translateX()`](/fr/docs/Web/CSS/transform-function/translateX()) et [`translateY()`](/fr/docs/Web/CSS/transform-function/translateY())
