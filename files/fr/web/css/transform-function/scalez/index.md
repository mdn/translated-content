---
title: scaleZ()
slug: Web/CSS/transform-function/scaleZ
translation_of: Web/CSS/transform-function/scaleZ()
original_slug: Web/CSS/transform-function/scaleZ()
browser-compat: css.types.transform-function.scaleZ
---
{{CSSRef}}

La fonction **`scaleZ()`** modifie la coordonnée en Z de chaque point de l'élément avec un facteur multiplicateur donné. Si ce facteur vaut 1, l'opération appliquée sera l'identité. L'homothétie n'est pas isotropique et les angles de l'élément ne sont pas conservés. La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

{{EmbedInteractiveExample("pages/css/function-scaleZ.html")}}

`scaleZ(sz)` est une notation raccourcie équivalente à `scale3d(1, 1, sz)`.

`scaleZ(-1)` définit une symétrie axiale selon l'axe Z qui passe par l'origine (définie grâce à la propriété [`transform-origin`](/fr/docs/Web/CSS/transform-origin)).

Dans les exemples interactifs ci-avant, `perspective: 500px;` a été utilisée afin de créer un espace en trois dimensions et `transform-style: preserve-3d` permet de positionner les éléments enfants dans cet espace 3D.

## Syntaxe

```css
scaleZ(s)
```

### Valeurs

- `s`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/number) qui représente le facteur d'échelle à appliquer sur la côte (coordonnées en Z) de chaque point de l'élément.

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
        Cette transformation s'applique sur l'espace en trois dimensions et ne
        peut donc être représentée sous la forme d'une transformation plane.
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd><mtd>0</mtd></mtr
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
<div>Normal</div>
<div class="perspective">Avec translation</div>
<div class="scaled-translated">Avec mise à l'échelle</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.perspective {
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(400px) translateZ(-100px);
  background-color: limegreen;
}

.scaled-translated {
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(400px) scaleZ(2) translateZ(-100px);
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`scaleX()`](/fr/docs/Web/CSS/transform-function/scaleX())
- [`scaleY()`](/fr/docs/Web/CSS/transform-function/scaleY())
- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [`transform-origin`](/fr/docs/Web/CSS/transform-origin)
