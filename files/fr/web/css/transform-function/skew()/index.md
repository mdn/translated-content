---
title: skew()
slug: Web/CSS/transform-function/skew()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/skew()
---
{{CSSRef}}

La fonction **`skew()`** permet d'opérer une distorsion en étirant chaque point de l'élément d'un certain angle dans une direction du plan. Pour cela, on augmente l'ordonnée d'un élément d'une valeur proportionnelle à l'angle donné et à la distance de l'origine. Plus le point est éloigné de l'origine, plus le décalage obtenu sera important.

{{EmbedInteractiveExample("pages/css/function-skew.html")}}

La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

## Syntaxe

    skew(ax)
    skew(ax, ay)

### Valeurs

- `ax`
  - : Une valeur de type {{cssxref("&lt;angle&gt;")}} qui représente l'angle avec lequel appliquer la distorsion selon l'axe des abscisses (axe horizontal).
- `ay`
  - : Une valeur de type {{cssxref("&lt;angle&gt;")}} qui représente l'angle avec lequel appliquer la distorsion selon l'axe des ordonnées (axe vertical).

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
 /* the same as skewX(10deg); */
  transform: skew(10deg);
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser_une_distorsion_horizontale","100%","200")}}

### Utiliser deux angles

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
  transform: skew(10deg, 10deg);
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser_deux_angles","100%","200")}}

## Spécifications

| Spécification                                                                                | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS3 Transforms", "#funcdef-transform-skew", "skew()")}} | {{Spec2("CSS3 Transforms")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
