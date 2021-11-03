---
title: translate()
slug: Web/CSS/transform-function/translate()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/translate()
---
{{CSSRef}}

La fonction **`translate()`** permet de déplacer un élément sur le plan représenté par le document. Cette transformation est définie à l'aide d'un vecteur dont les coordonnées définissent la quantité de déplacement sur chaque axe (horizontal et vertical).

![](translate.png)

La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

## Syntaxe

    translate(tx)
    translate(tx, ty)

### Valeurs

- `tx`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} qui représente l'abscisse du vecteur de translation. Autrement dit, c'est l'amplitude du déplacement horizontal de la translation.
- `ty`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} qui représente l'ordonnée du vecteur de translation. Autrement dit, c'est l'amplitude du déplacement vertical de la translation. Si ce paramètre n'est pas utilisé, la valeur par défaut sera 0 : `translate(2)` sera donc équivalent à `translate(2, 0)`.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>3</sup></th>
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
<p>toto</p>
<p class="transformation">truc</p>
<p>toto</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: translate(10px);
  /* équivalent à translateX(10px)*/
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_horizontale","100%","250")}}

### Définir une translation sur les deux axes

#### HTML

```html
<p>toto</p>
<p class="transformation">truc</p>
<p>toto</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: translate(10px,10px);
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_sur_les_deux_axes","100%","250")}}

## Spécifications

| Spécification                                                                                            | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS3 Transforms', '#funcdef-transform-translate', 'translate()')}} | {{Spec2('CSS3 Transforms')}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
