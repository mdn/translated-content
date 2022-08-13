---
title: matrix()
slug: Web/CSS/transform-function/matrix
tags:
  - CSS
  - Funkcje CSS
  - Referencje
  - Transformacje CSS
  - wymagaPrzykładu
translation_of: Web/CSS/transform-function/matrix()
original_slug: Web/CSS/transform-function/matrix()
---
{{CSSRef}}

CSS-owa funkcja `matrix() `określa jednolitą macierz (matrix) transformacji 2D i składa się z sześciu określonych wartości. Wartości stałe tych macierzy są implementowane oraz nie działają jak parametry; pozostałe parametry są opisywane w porządku głównej kolumny.

`matrix(a, b, c, d, tx, ty)` to shorthand dla `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

> **Note:** **Adnotacja**: Od Firefoxa 16, Gecko akceptuje wartośc {{cssxref("&lt;length&gt;")}} dla **tx** oraz **ty**.

## Składnia

    matrix(a, b, c, d, tx, ty)

## Wartości

- _a_ _b_ _c_ _d_
  - : {{cssxref("&lt;number&gt;")}} opisują transformacje linearne.
- _tx_ _ty_
  - : {{cssxref("&lt;number&gt;")}} opisują transformacje do zastosowania.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Współrzędne kartezjańskie na ℝ<sup>2</sup></th>
      <th scope="col">Współrzędne jednorodne na ℝℙ<sup>2</sup></th>
      <th scope="col">Współrzędne kartezjańskie na ℝ<sup>3</sup></th>
      <th scope="col">Współrzędne jednorodne na ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd></mtr>
              <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
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
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

## Przykłady

TBD
