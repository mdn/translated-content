---
title: scaleY()
slug: Web/CSS/transform-function/scaleY()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/scaleY()
---
{{CSSRef}}

La fonction **`scaleY()`** modifie l'ordonnée de chaque sommet de l'élément avec un facteur multiplicateur. L'homothétie n'est pas isotropique et les angles de l'élément ne sont pas conservés. La valeur obtenue par cette fonction est de type {{cssxref("&lt;transform-function&gt;")}}.

![](scaley.png)

`scaleY(sy)` est une notation raccourcie équivalente à `scale(1, sy)` ou à `scale3d(1, sy, 1)`.

`scaleY(-1)` définit une symétrie axiale selon un axe horizontal, passant par l'origine du repère (cette origine est définie grâce à la propriété {{cssxref("transform-origin")}}).

## Syntaxe

    scaleY(s)

### Valeurs

- `s`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}} qui indique le facteur d'échelle pour l'homothétie.

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
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>s</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>s</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>s</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>s</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 0 0 s 0 0]</code></td>
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
  transform: scaleY(2);
  background-color: blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","200")}}

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName("CSS3 Transforms", "#funcdef-transform-scaley", "scaleY()")}} | {{Spec2("CSS3 Transforms")}} | Définition initiale. |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- [`scaleX()`](</fr/docs/Web/CSS/transform-function/scaleX()>)
- [`scaleZ()`](</fr/docs/Web/CSS/transform-function/scaleZ()>)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
