---
title: scale3d()
slug: Web/CSS/transform-function/scale3d
translation_of: Web/CSS/transform-function/scale3d()
original_slug: Web/CSS/transform-function/scale3d()
browser-compat: css.types.transform-function.scale3d
---
{{CSSRef}}

La fonction **`scale3d()`** permet de modifier la taille d'un élément en appliquant une homothétie définie par un vecteur. Les composantes de ce vecteur permettent d'appliquer des échelles différentes selon les différentes dimensions.

{{EmbedInteractiveExample("pages/css/function-scale3d.html")}}

La transformation appliquée est définie par un vecteur dont les coordonnées définissent l'amplitude de l'homothétie dans chaque direction. Si les trois coordonnées du vecteur sont égales, la transformation est isotropique et la forme de l'élément est conservée.

Lorsque les composantes du vecteur sont en dehors de l'intervalle `[-1, 1]`, la transformation agrandit l'élément dans le sens des coordonnées. Lorsque les composantes sont dans cet intervalle, cela réduit l'élément.

## Syntaxe

La fonction `scale3d()` s'utilise avec trois valeurs dont chacune représente l'intensité de la transformation selon chaque direction.

```css
scale3d(sx, sy, sz)
```

### Valeurs

- `sx`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/number) qui représente l'abscisse du vecteur définissant l'homothétie.
- `sy`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/number) qui représente l'ordonnée du vecteur définissant l'homothétie
- `sz`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/number) qui représente la composante, selon l'axe Z, du vecteur définissant l'homothétie

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
      <td colspan="2">
        Cette transformation s'applique dans en 3 dimensions et ne peut pas être
        représentée sur le plan.
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd><mtd>0</mtd></mtr
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

### Avec origine non modifiée

#### HTML

```html
<div>Normal</div>
<div class="scaled">Mis à l'échelle</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Avec_origine_non_modifiée","100%","200")}}

### Avec origine translatée

#### HTML

```html
<div>Normal</div>
<div class="scaled">Mis à l'échelle</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  transform-origin: left;
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Avec_origine_translatée","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [`scaleZ()`](/fr/docs/Web/CSS/transform-function/scaleZ())
- [`translate3d()`](/fr/docs/Web/CSS/transform-function/translate3d())
- [`rotate3d()`](/fr/docs/Web/CSS/transform-function/rotate3d())
