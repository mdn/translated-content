---
title: skewX()
slug: Web/CSS/transform-function/skewX()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/skewX()
---
{{CSSRef}}

La fonction **`skewX()`** permet d'opérer une distorsion horizontale en étirant chaque point de l'élément d'un certain angle dans la direction horizontale. Pour cela, on augmente l'abscisse d'un élément d'une valeur proportionnelle à l'angle donné et à la distance de l'origine. Plus le point est éloigné de l'origine et loin de l'axe, plus le décalage obtenu sera important.

{{EmbedInteractiveExample("pages/css/function-skewX.html")}}

La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

`skewX(a)` est équivalent à [`skew(a)`](</fr/docs/Web/CSS/transform-function/skew()>).

## Syntaxe

    skewX(a)

### Valeurs

- `a`
  - : Une valeur de type {{cssxref("&lt;angle&gt;")}} qui représente l'angle avec lequel appliquer la distorsion selon l'axe des abscisses (axe horizontal).

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
              ><mtr>1<mtd>tan(ay)</mtd></mtr
              ><mtr>0<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 0 tan(a) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<p>toto</p>
<p class="transformation">truc</p>
```

### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: skewX(10deg);
  background-color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

| Spécification                                                                                | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS3 Transforms", "#funcdef-transform-skewx", "skewX()")}} | {{Spec2("CSS3 Transforms")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
