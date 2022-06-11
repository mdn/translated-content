---
title: translate()
slug: Web/CSS/transform-function/translate
translation_of: Web/CSS/transform-function/translate()
original_slug: Web/CSS/transform-function/translate()
browser-compat: css.types.transform-function.translate
---
{{CSSRef}}

La fonction **`translate()`** permet de déplacer un élément sur le plan représenté par le document. Cette transformation est définie à l'aide d'un vecteur dont les coordonnées définissent la quantité de déplacement sur chaque axe (horizontal et vertical).

![](translate.png)

La valeur obtenue par cette fonction est de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

## Syntaxe

```css
/* Avec une seule valeur <length-percentage> */
transform: translate(200px);
transform: translate(50%);

/* Avec deux valeurs <length-percentage> */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```
### Valeurs

- Avec une seule valeur `<length-percentage>`
  - : Cette valeur est de type [`<length>`](/fr/docs/Web/CSS/length) ou [`<percentage>`](/fr/docs/Web/CSS/percentage) et représente l'abscisse (la coordonnée horizontale) du vecteur de translation. La composante verticale du vecteur de translation sera nulle. Ainsi, `translate(2px)` est équivalent à `translate(2px, 0)`. Une valeur en pourcentage sera relative à la largeur de la boîte de référence définie par la propriété [`transform-box`](/fr/docs/Web/CSS/transform-box).
- Avec deux valeurs `<length-percentage>`
  - : Ces valeurs sont de type [`<length>`](/fr/docs/Web/CSS/length) ou [`<percentage>`](/fr/docs/Web/CSS/percentage) et décrivent respectivement l'abscisse (la coordonnée horizontale) et l'ordonnée (la coordonnée verticale) du vecteur de translation. Un premier pourcentage sera relatif à la largeur de la boîte de référence et un deuxième pourcentage sera relatif à sa hauteur (la boîte de référence étant définie par la propriété [`transform-box`](/fr/docs/Web/CSS/transform-box)).

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
        <p>
          Une translation plane n'est pas une transformation linéaire de ℝ<sup
            >2</sup
          >
          et ne peut donc pas être représentée sous la forme d'une matrice dans
          le système cartésien.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
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
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### Définir une translation horizontale

#### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px); /* Équivalent à : translateX(10px) ou translate(10px, 0) */
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_horizontale","100%","250")}}

### Définir une translation sur les deux axes

#### HTML

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_sur_les_deux_axes","100%","250")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
