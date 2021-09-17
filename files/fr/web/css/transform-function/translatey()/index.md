---
title: translateY()
slug: Web/CSS/transform-function/translateY()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/translateY()
---
{{CSSRef}}

La fonction **`translateY()`** permet de déplacer un élement verticalement sur le plan. Cette transformation est caractérisée par une longueur (type {{cssxref("&lt;length&gt;")}}) qui définit l'amplitude du déplacement. La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

![](translatey.png)

`translateY(ty)` est une notation raccourcie équivalente à `translate(0, ty)`.

## Syntaxe

    translateY(t)

### Valeurs

- `t`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} qui représente l'ordonnée du vecteur de translation (la composante en Y).

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
          Une translation n'est pas une transformation linéaire sur ℝ<sup
            >2</sup
          >
          et on ne peut donc pas la représenter en utilisant une matrice
          exprimée dans le système cartésien.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><math
            ><mfenced
              ><mtable
                ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
                ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
                ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
              ></mfenced
            ></math
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>t</mtd></mtr
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
      <td><code>[1 0 0 1 0 t]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### HTML

```html
<p>toto</p>
<p class="transformation">truc</p>
<p>toto</p>
```

### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: translateY(10px);
  background-color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","250")}}

## Spécifications

| Spécification                                                                                                | État                                 | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName("CSS3 Transforms", "#funcdef-transform-translatey", "translateY()")}} | {{Spec2("CSS3 Transforms")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
