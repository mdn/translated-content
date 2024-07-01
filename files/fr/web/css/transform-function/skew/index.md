---
title: skew()
slug: Web/CSS/transform-function/skew
---

{{CSSRef}}

La fonction **`skew()`** permet d'opérer une distorsion en étirant chaque point de l'élément d'un certain angle dans une direction du plan. Pour cela, on augmente l'ordonnée d'un élément d'une valeur proportionnelle à l'angle donné et à la distance de l'origine. Plus le point est éloigné de l'origine, plus le décalage obtenu sera important.

{{EmbedInteractiveExample("pages/css/function-skew.html")}}

La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

## Syntaxe

La fonction `skew()` s'utilise avec une ou deux valeurs qui représente l'intensité de la distorsion appliquée dans chaque direction. Si une seule valeur est fournie, elle sera utilisée pour la distorsion sur l'axe horizontal et il n'y aura pas de distorsion verticale.

```css
skew(ax)

skew(ax, ay)
```

### Valeurs

- `ax`
  - : Une valeur de type [`<angle>`](/fr/docs/Web/CSS/angle) qui représente l'angle avec lequel appliquer la distorsion selon l'axe des abscisses (axe horizontal).
- `ay`
  - : Une valeur de type [`<angle>`](/fr/docs/Web/CSS/angle) qui représente l'angle avec lequel appliquer la distorsion selon l'axe des ordonnées (axe vertical).

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
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ><mtr></mtr></mtable></mfenced
        ></math>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### Utiliser une distorsion horizontale

#### HTML

```html
<div>Normal</div>
<div class="skewed">Distordu</div>
```

#### CSS

```css
body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg); /* Équivalent à skewX(10deg) */
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser_une_distorsion_horizontale","100%","200")}}

### Utiliser deux angles

#### HTML

```html
<div>Normal</div>
<div class="skewed">Distordu</div>
```

#### CSS

```css
body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg, 10deg);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser_deux_angles","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [`skewX()`](</fr/docs/Web/CSS/transform-function/skewX()>)
- [`skewY()`](</fr/docs/Web/CSS/transform-function/skewY()>)
