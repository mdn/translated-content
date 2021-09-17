---
title: rotateY()
slug: Web/CSS/transform-function/rotateY()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/rotateY()
---
{{CSSRef}}

La fonction **`rotateY()`** définit une rotation, qui déplace l'élément autour de l'axe des ordonnées, sans le déformer. L'angle de rotation est défini par l'argument passé à la fonction. Si l'angle indiqué est positif, le mouvement sera appliqué dans le sens horaire et sinon il sera appliqué dans le sens inverse des aiguilles d'une montre.

{{EmbedInteractiveExample("pages/css/function-rotateY.html")}}

L'axe de la rotation passe par l'origine du repère, définie par la propriété {{cssxref("transform-origin")}}.

`rotateY(a)` est une notation raccourcie, équivalente à `rotate3D(0, 1, 0, a)`.

> **Note :** Contrairement aux rotations appliqués dans le plan, la composition de rotations dans l'espace n'est pas commutative. Autrement dit, l'ordre dans lequel on applique les rotations est déterminant.

## Syntaxe

    rotateY(a)

### Valeurs

- `a`
  - : Une valeur de type {{cssxref("&lt;angle&gt;")}} qui représente l'angle de la rotation. Un angle positif indique une rotation appliquée dans le sens horaire, un angle négatif applique une rotation dans le sens anti-horaire.

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
  transform: rotateY(60deg);
  background-color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS Transforms 2", "#funcdef-rotatey", "rotateY()")}} | {{Spec2("CSS Transforms 2")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
