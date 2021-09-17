---
title: scale3d()
slug: Web/CSS/transform-function/scale3d()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/scale3d()
---
{{CSSRef}}

La fonction **`scale3d()`** permet de modifier la taille d'un élément en appliquant une homothétie définie par un vecteur. Les composantes de ce vecteur permettent d'appliquer des échelles différentes selon les différentes dimensions.

{{EmbedInteractiveExample("pages/css/function-scale3d.html")}}

La transformation appliquée est définie par un vecteur dont les coordonnées définissent l'amplitude de l'homothétie dans chaque direction. Si les trois coordonnées du vecteur sont égales, la transformation est isotropique et la forme de l'élément est conservée.

Lorsque les composantes du vecteurs sont en dehors de l'intervalle `[-1, 1]`, la transformation agrandit l'élément dans le sens des coordonnées. Lorsque les composantes sont dans cet intervalle, cela réduit l'élément.

## Syntaxe

    scale3d(sx, sy, sz)

### Valeurs

- `sx`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}} qui représente l'abscisse du vecteur définissant l'homothétie.
- `sy`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}} qui représente l'ordonnée du vecteur définissant l'homothétie
- `sz`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}} qui représente la composante, selon l'axe Z, du vecteur définissant l'homothétie

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
        Cette transformation s'applique dans en 3 dimensions et ne peut pas être
        représentée sur le plan.
      </td>
      <td colspan="1" rowspan="2">
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
      <td colspan="1" rowspan="2">
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
<p>foo</p>
<p class="transformation">bar</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: perspective(500px) scale3d(0.8, 2, 0.2) translateZ(100px);
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Avec_origine_non_modifiée","100%","200")}}

### Avec origine translatée

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

.transformation {
  transform: scale3d(2, 3, 0);
  transform-origin: center;
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Avec_origine_translatée","100%","200")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS Transforms 2", "#funcdef-scale3d", "scale3d()")}} | {{Spec2("CSS Transforms 2")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`scaleZ()`](</fr/docs/Web/CSS/transform-function/scaleZ()>)
- [`translate3d()`](</fr/docs/Web/CSS/transform-function/translate3d()>)
- [`rotate3d()`](</fr/docs/Web/CSS/transform-function/rotate3d()>)
