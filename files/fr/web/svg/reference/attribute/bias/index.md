---
title: bias
slug: Web/SVG/Reference/Attribute/bias
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

L'attribut **`bias`** décale la plage du filtre. Après avoir appliqué la matrice de convolution ({{SVGAttr("kernelMatrix")}}) de l'élément {{SVGElement("feConvolveMatrix")}} à l'image d'entrée pour obtenir un nombre et appliqué l'attribut {{SVGAttr("divisor")}}, l'attribut `bias` est ajouté à chaque composant. Cela permet de représenter des valeurs qui sont autrement limitées à 0 ou 1.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("feConvolveMatrix")}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>{{CSSxRef("&lt;number&gt;")}}</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

Une application de l'attribut bias est lorsque l'on souhaite que la valeur de gris `0.5` soit la réponse nulle du filtre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
