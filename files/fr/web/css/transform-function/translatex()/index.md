---
title: translateX()
slug: Web/CSS/transform-function/translateX()
translation-of: Web/CSS/transform-function/translateX()
browser-compat: css.types.transform-function.translateX
---
{{CSSRef}}

La fonction CSS **`translateX()`** permet d'appliquer une translation en 2D. La valeur obtenue sera du type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

![](transform-functions-translatex_2.png)

> **Note :** `translateX(tx)` est équivalent à `translate(tx, 0)` ou `translate3d(tx, 0, 0)`.

## Syntaxe

```css
/* Valeurs de type <length-percentage> */
transform: translateX(200px);
transform: translateX(50%);
```

### Values

- `<length-percentage>`
  - : Une valeur exprimant une longueur (type [`<length>`](/fr/docs/Web/CSS/length)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)) qui représente la composante horizontale du vecteur de translation. Lorsque la valeur est un pourcentage, elle est relative à la largeur de la boîte de référence définie par la propriété [`transform-box`](/fr/docs/Web/CSS/transform-box).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <p>
          Une translation n'étant pas une transformation linéaire pour ℝ<sup>2</sup>, elle ne peut pas être représentée par une matrice avec des coordonnées cartésiennes.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>t</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>t</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>t</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 t 0]</code></td>
    </tr>
  </tbody>
</table>

### Syntaxe formelle

```css
translateX([`<length-percentage>`](/fr/docs/Web/CSS/length-percentage))
```

## Exemples

### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateX(10px); /* Équivalent à translate(10px) */
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 250, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`translate()`](/fr/docs/Web/CSS/transform-function/translate)
- [`translateY()`](/fr/docs/Web/CSS/transform-function/translateY)
- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
