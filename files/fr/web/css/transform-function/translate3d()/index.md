---
title: translate3d()
slug: Web/CSS/transform-function/translate3d()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/translate3d()
---
{{CSSRef}}

La fonction CSS **`translate3d()`** permet de déplacer un élément dans l'espace tridimensionnel. Cette transformation est définie à l'aide d'un vecteur dont les coordonnées définissent l'amplitude du déplacement pour chaque direction.

{{EmbedInteractiveExample("pages/css/function-translate3d.html")}}

La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

## Syntaxe

    translate3d(tx, ty, tz)

### Valeurs

- `tx`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} qui représente l'abscisse du vecteur de translation (équivalente au déplacement horizontal).
- `ty`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} qui représente l'ordonnée du vecteur de translation (équivalente au déplacement vertical).
- `tz`
  - : Une valeur de type {{cssxref("&lt;length&gt;")}} qui représente la composante en profondeur du vecteur de translation (équivalente au déplacement en profondeur). La valeur ne peut pas être de type {{cssxref("&lt;percentage&gt;")}}, si c'est le cas, la règle décrivant la transformation sera considérée comme invalide.

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
        <p>
          Cette transformation s'applique en trois dimensions et ne peut donc
          être représentée sur le plan.
        </p>
      </td>
      <td colspan="1" rowspan="2">
        Une translation n'est pas une transformation linéaire de ℝ<sup>3</sup>
        et ne peut donc pas être représentée par une matrice dans le système
        cartésien.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtr
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

### Définir une translation sur un seul axe

#### HTML

```html
<p>Statique</p>
<p class="transformation">Bougé</p>
<p>Statique</p>
```

#### CSS

```css
p {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.transformation {
  transform: perspective(500px) translate3d(10px,0px,0px);
  /* equivalent to perspective(500px) translateX(10px)*/
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_sur_un_seul_axe","100%","250")}}

### Définir une translation sur les axes X et Z

#### HTML

```html
<p>Statique</p>
<p class="transformation">Bougé</p>
<p>Statique</p>
```

#### CSS

```css
p {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.transformation {
  transform: perspective(500px) translate3d(10px,0px,100px);
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Définir_une_translation_sur_les_axes_X_et_Z","100%","250")}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName("CSS Transforms 2", "#funcdef-translate3d", "translate3d()")}} | {{Spec2("CSS Transforms 2")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
