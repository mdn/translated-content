---
title: scaleZ()
slug: Web/CSS/transform-function/scaleZ()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/scaleZ()
---
{{CSSRef}}

La fonction **`scaleZ()`** modifie la coordonnée en Z de chaque point de l'élément avec un facteur multiplicateur donné. Si ce facteur vaut 1, l'opération appliqué sera l'identité. L'homothétie n'est pas isotropique et les angles de l'élément ne sont pas conservés. La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-scaleZ.html")}}

`scaleZ(sz)` est une notation raccourcie équivalente à `scale3d(1, 1, sz)`.

`scaleZ(-1)` définit une symétrie axiale selon l'axe Z qui passe par l'origine (définie grâce à la propriété {{cssxref("transform-origin")}}).

Dans les exemples interactifs ci-avant, `perspective: 500px;` a été utilisée afin de créer un espace en trois dimensions et `transform-style: preserve-3d` permet de positionner les éléments enfants dans cet espace 3D.

## Syntaxe

    scaleZ(s)

### Valeurs

- `s`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}} qui représente le facteur d'échelle à appliquer sur la côte (coordonnées en Z) de chaque point de l'élément.

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
        Cette transformation s'applique sur l'espace en trois dimensions et ne
        peut donc être représentée sous la forme d'une transformation plane.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd><mtd>0</mtd></mtr
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
<p class="translation">Translaté</p>
<p class="homothetie">Échelle</p>
```

### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.translation{
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(500px) translateZ(100px);
}

.homothetie{
  /* On ajoute une perspective pour créer un volume 3D */
  transform: perspective(500px) scaleZ(2) translateZ(100px);
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

| Spécification                                                                        | État                                     | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName("CSS Transforms 2", "#funcdef-scalez", "scaleZ()")}} | {{Spec2("CSS Transforms 2")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- [`scaleX()`](</fr/docs/Web/CSS/transform-function/scaleX()>)
- [`scaleY()`](</fr/docs/Web/CSS/transform-function/scaleY()>)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
