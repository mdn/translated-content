---
title: scaleX()
slug: Web/CSS/transform-function/scaleX()
tags:
  - CSS
  - Fonction
  - Reference
  - Transformations CSS
translation_of: Web/CSS/transform-function/scaleX()
---
{{CSSRef}}

La fonction **`scaleX()`** permet de modifier l'abscisse de chaque sommet de l'élément par un facteur multiplicateur. L'homothétie obtenue n'est pas isotropique et les angles de l'élément ne sont pas conservés.

![](scalex.png)

`scaleX(sx)` est une notation raccourcie équivalente à `scale(sx, 1)` ou à `scale3d(sx, 1, 1)`.

`scaleX(-1)` définit une symétrie axiale par rapport à un axe vertical passant par l'origine du repère (définie grâce à la propriété {{cssxref("transform-origin")}}).

## Syntaxe

    scaleX(s)

### Valeurs

- `s`
  - : Une valeur de type {{cssxref("&lt;number&gt;")}} qui représente le facteur d'échelle de l'homothétie.

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
              ><mtr><mtd>s</mtd><mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
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
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
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
              ><mtr>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[s 0 0 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### Origine inchangée

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
  transform: scaleX(2);
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Origine_inchangée","100%","200")}}

### Origine déplacée

#### HTML

```html
<p>toto</p>
<p class="transformation">bar</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformation {
  transform: scaleX(2);
  transform-origin: left;
  background-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Origine_déplacée","100%","200")}}

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires        |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName("CSS3 Transforms", "#funcdef-transform-scalex", "scaleX()")}} | {{Spec2("CSS3 Transforms")}} | Définition initiale |

## Compatibilité des navigateurs

Voir la page sur le type de donnée [`<transform-function>`](/fr/docs/Web/CSS/transform-function#compatibilité_des_navigateurs) pour les informations de compatibilité associées.

## Voir aussi

- [`scaleY()`](</fr/docs/Web/CSS/transform-function/scaleY()>)
- [`scaleZ()`](</fr/docs/Web/CSS/transform-function/scaleZ()>)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
