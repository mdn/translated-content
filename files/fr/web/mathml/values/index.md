---
title: Valeurs
slug: Web/MathML/Values
---

## Longueurs

Plusieurs éléments de présentation MathML possèdent des attributs qui acceptent des valeurs pour mesurer des tailles ou des espacements. MathML accepte différentes unités et constantes pour spécifier les longueurs.

### Unités

| Uniét | Description                                                                                                                     |
| ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| `em`  | Unité {{ Cssxref("font-size", "relative à la police") }}                                                                        |
| `ex`  | Unité {{ Cssxref("font-size", "relative à la police") }}. (La hauteur "x" de l'élément, `1ex ≈ 0.5em` dans beaucoup de polices) |
| `px`  | Pixels                                                                                                                          |
| `in`  | Pouces (1 pouce = 2,54 centimètres)                                                                                             |
| `cm`  | Centimètres                                                                                                                     |
| `mm`  | Millimètres                                                                                                                     |
| `pt`  | Points (1 point = 1/72 pouce)                                                                                                   |
| `pc`  | Picas (1 pica = 12 points)                                                                                                      |
| `%`   | Pourcentage de la valeur par défaut.                                                                                            |

### Constantes

<table class="standard-table">
  <thead>
    <tr>
      <th>Constante</th>
      <th>Valeur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>veryverythinmathspace</code></td>
      <td>1/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>verythinmathspace</code></td>
      <td>2/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>thinmathspace</code></td>
      <td>3/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>mediummathspace</code></td>
      <td>4/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>thickmathspace</code></td>
      <td>5/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>verythickmathspace</code></td>
      <td>6/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>veryverythickmathspace</code></td>
      <td>7/18<code>em</code></td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colspan="2">
        Les <em>contstantes</em> négatives ont été introduites avec Gecko 7.0 ([bug Firefox 650530](https://bugzil.la/650530))
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>negativeveryverythinmathspace</code></td>
      <td>-1/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeverythinmathspace</code></td>
      <td>-2/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativethinmathspace</code></td>
      <td>-3/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativemediummathspace</code></td>
      <td>-4/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativethickmathspace</code></td>
      <td>-5/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeverythickmathspace</code></td>
      <td>-6/18<code>em</code></td>
    </tr>
    <tr>
      <td><code>negativeveryverythickmathspace</code></td>
      <td>-7/18<code>em</code></td>
    </tr>
  </tbody>
</table>

Note : [L'association avec des espaces de noms a été dépréciée](http://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) dans MathML3 et a été retirée dans Gecko 15.0 ([bug 673759](https://bugzilla.mozilla.org/show_bug.cgi?id=673759)).
