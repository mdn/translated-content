---
title: matrix3d()
slug: Web/CSS/transform-function/matrix3d
translation_of: Web/CSS/transform-function/matrix3d()
original_slug: Web/CSS/transform-function/matrix3d()
browser-compat: css.types.transform-function.matrix3d
---
{{CSSRef}}

La fonction **`matrix3d()`** décrit une transformation en trois dimensions sous la forme d'une matrice homogène (4x4). Les 16 paramètres passés à la fonction sont listés par ligne puis par colonne. Le résultat de cette fonction est une valeur de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

## Syntaxe

La fonction `matrix3d()` s'utilise avec 16 valeurs qui sont décrites dans l'ordre des colonnes.

```css
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

### Valeurs

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_ _a3_ _b3_ _c3_ _d3_ _d4_
  - : Des valeurs de type [`<number>`](/fr/docs/Web/CSS/number) qui sont les coefficients de la matrice définissant la transformation linéaire.
- `a4` `b4 c4`
  - : Les coefficients de type [`<number>`](/fr/docs/Web/CSS/number) qui définissent la translation à appliquer.

> **Note :** Jusqu'à Firefox 16, Gecko permettait d'utiliser des valeurs [`<length>`](/fr/docs/Web/CSS/length) pour les coefficients `a4`, `b4` et `c4`.

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
        Cette transformation s'applique dans l'espace (3D) et ne peut pas être
        représentée en deux dimensions.
      </td>
      <td colspan="1" rowspan="2">
        Les matrices exprimées avec des coordonnées cartésiennes ne permettent
        pas de représenter des transformations 3D affines car les translations
        ne sont pas des transformations linéaires.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a1</mtd><mtd>a2</mtd><mtd>a3</mtd><mtd>a4</mtd></mtr
              ><mtr><mtd>b1</mtd><mtd>b2</mtd><mtd>b3</mtd><mtd>b4</mtd></mtr
              ><mtr><mtd>c1</mtd><mtd>c2</mtd><mtd>c3</mtd><mtd>c4</mtd></mtr
              ><mtr
                ><mtd>d1</mtd><mtd>d2</mtd><mtd>d3</mtd><mtd>d4</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Exemple simple

#### HTML

```html
<p>toto</p>
<p class="transformation">truc</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation{
  transform: matrix3d(0.87,-0.5,0.00,0,0.50,0.87,0.00,0,0,0,1,0,0,0,0,1);
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple","100%","200")}}

### Translation et homothétie matricielle

#### HTML

```html
<div class="foo">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Quos quaerat sit soluta, quisquam exercitationem delectus qui unde in facere
 necessitatibus aut quia porro dolorem nesciunt enim, at consequuntur aliquam esse?
</div>
```

#### CSS

```css
html {
  width: 100%;
}
body {
  height: 100vh;
  /* Centering content */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

}
.foo {
  width: 50%;
  padding: 1em;
  color: white;
  background: #ff8c66;
  border: 2px dashed black;
  text-align: center;
  font-family: system-ui, sans-serif;
  font-size: 14px;
   /* Setting up animation for better demonstration */
  animation: MotionScale 2s alternate linear infinite;
}

@keyframes MotionScale {
  from {
    /*
      Identity matrix is used as basis here.
      The matrix below describes the
      following transformations:
        Translates every X point by -50px
        Translates every Y point by -100px
        Translates every Z point by 0
        Scales down by 10%
    */
    transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      -50,-100,0,1.1
    );

  }
  50% {
    transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,0.9
    );
  }
  to {
     transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      50,100,0,1.1
    )
  }
}
```

#### Résultat

{{EmbedLiveSample('Translation_et_homothétie_matricielle', '100%', '400px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [Comprendre les matrices de transformations CSS (en anglais)](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
