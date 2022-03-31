---
title: rotateY()
slug: Web/CSS/transform-function/rotateY
translation_of: Web/CSS/transform-function/rotateY()
original_slug: Web/CSS/transform-function/rotateY()
browser-compat: css.types.transform-function.rotateY
---
{{CSSRef}}

La fonction **`rotateY()`** définit une rotation, qui déplace l'élément autour de l'axe des ordonnées, sans le déformer. L'angle de rotation est défini par l'argument passé à la fonction. Si l'angle indiqué est positif, le mouvement sera appliqué dans le sens horaire et sinon il sera appliqué dans le sens inverse des aiguilles d'une montre.

{{EmbedInteractiveExample("pages/css/function-rotateY.html")}}

L'axe de la rotation passe par l'origine du repère, définie par la propriété [`transform-origin`](/fr/docs/Web/CSS/transform-origin).

`rotateY(a)` est une notation raccourcie, équivalente à `rotate3D(0, 1, 0, a)`.

> **Note :** Contrairement aux rotations appliquées dans le plan, la composition de rotations dans l'espace n'est pas commutative. Autrement dit, l'ordre dans lequel on applique les rotations est déterminant.

## Syntaxe

L'angle de la rotation appliquée par `rotateY()` est fourni par une valeur [`<angle>`](/fr/docs/Web/CSS/angle). Si cette valeur est positive, la rotation s'effectuera dans le sens horaire&nbsp;; si elle est négative, la rotation s'effectuera dans le sens anti-horaire.

```css
rotateY(a)
```

### Valeurs

- `a`
  - : Une valeur de type [`<angle>`](/fr/docs/Web/CSS/angle) qui représente l'angle de la rotation. Un angle positif indique une rotation appliquée dans le sens horaire, un angle négatif applique une rotation dans le sens anti-horaire.

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
        Cette transformation s'applique dans l'espace (3D) et ne peut pas être
        représentée en deux dimensions.
      </td>
      <td colspan="1">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>0</mtd><mtd>sin(a)</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>cos(a)</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd>cos(a)</mtd><mtd>0</mtd><mtd>sin(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>cos(a)</mtd
                ><mtd>0</mtd></mtr
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
<div class="rotated">Tourné</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotateY(60deg);
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

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
