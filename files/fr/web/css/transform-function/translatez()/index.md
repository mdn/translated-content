---
title: translateZ()
slug: Web/CSS/transform-function/translateZ()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/translateZ()
---
{{CSSRef}}

La fonction **`translateZ()`** permet de déplacer un élément selon l'axe z de l'espace tridimensionnel. Cette transformation est caractérisée par une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) qui définit l'amplitude du mouvement. La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

`translateZ(tz)` est un raccourci équivalent à `translate3d(0, 0, tz)`.

Dans les exemples interactifs ci-avant, `perspective: 500px;` a été utilisée afin de créer un espace en trois dimensions et `transform-style: preserve-3d` permet de positionner les éléments enfants (les 6 faces du cube) dans cet espace 3D.

## Syntaxe

    translateZ(t)

### Valeurs

- `t`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} qui représente la composante en Z du vecteur de translation appliqué. Cet argument ne peut pas être de type {{cssxref("&lt;percentage&gt;")}}, si c'est le cas, la propriété qui contient la transformation est considérée comme invalide.

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
        Cette transformation s'applique en trois dimensions et ne peut donc être
        représentée sur un plan.
      </td>
      <td colspan="1" rowspan="2">
        Une translation n'est pas une transformation linéaire sur ℝ<sup>3</sup>
        et ne peut donc pas être représentée avec une matrice dans le système
        cartésien.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtr
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
  /* On ajoute une perspective pour créer un */
  /* espace 3D. L'utilisateur regarde « depuis »*/
  /* 500px et on avance l'élément vers l'utili- */
  /* sateur de 200px */
  transform: perspective(500px) translateZ(200px);
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

Si la valeur fournie à `perspective()` est inférieure à l'argument de `translateZ()` (ex. `transform: perspective(200px) translateZ(300px);`), l'élément transformé ne sera pas visible car il sera situé au-delà de l'espace projeté sur l'écran. Plus l'écart entre ces deux arguments est faible, plus l'élément paraîtra proche de l'utilisateur.

## Spécifications

| Spécification                                                                                | État                                     | Commentaires                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| {{SpecName('CSS Transforms 2', '#transform-functions', 'transform')}} | {{Spec2('CSS Transforms 2')}} | Ajout des fonctions de transformations 3D au module standard _CSS Transforms_ |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("&lt;transform-function&gt;")}}
- [Les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- {{cssxref("transform")}}
- {{cssxref("transform-function/translateX", "translateX()")}} et {{cssxref("transform-function/translateY()", "translateY()")}}
