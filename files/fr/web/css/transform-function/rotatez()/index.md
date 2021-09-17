---
title: rotateZ()
slug: Web/CSS/transform-function/rotateZ()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/rotateZ()
---
{{CSSRef}}

La fonction **`rotateZ()`** définit une transformation qui déplace l'élément autour de l'axe Z, sans déformer cet élément. L'angle de rotation est défini par l'argument passé à la fonction. Si l'angle indiqué est positif, le mouvement sera appliqué dans le sens horaire et sinon il sera appliqué dans le sens inverse des aiguilles d'une montre.

{{EmbedInteractiveExample("pages/css/function-rotateZ.html")}}

L'axe de la rotation passe par l'origine du repère, définie par la propriété {{cssxref("transform-origin")}}.

`rotateZ(a)` est une notation raccourcie équivalente à `rotate3D(0, 0, 1, a)`.

> **Note :** Contrairement aux rotations appliqués dans le plan, la composition de rotations dans l'espace n'est pas commutative. Autrement dit, l'ordre dans lequel on applique les rotations est déterminant.

## Syntaxe

    rotateZ(a)

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
      <td colspan="2" rowspan="2">
        Cette transformation s'applique dans l'espace (3D) et ne peut pas être
        représentée en deux dimensions.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd
                ><mtd>0</mtd></mtr
              ><mtr
                ><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
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
  transform: rotateZ(45deg);
  background-color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS Transforms 2", "#funcdef-rotatez", "rotateZ()")}} | {{Spec2("CSS Transforms 2")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
