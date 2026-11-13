---
title: accumulate
slug: Web/SVG/Reference/Attribute/accumulate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

L'attribut **`accumulate`** contrôle si une animation est cumulative ou non.

Il est souvent utile que les animations répétées s'appuient sur les résultats précédents, en s'accumulant à chaque itération. Cet attribut indique à l'animation si la valeur est ajoutée à la valeur de l'attribut animé précédent à chaque itération.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>none</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

- `sum`
  - : Définit que chaque itération répétée après la première s'appuie sur la dernière valeur de l'itération précédente.
- `none`
  - : Définit que les itérations répétées ne sont pas cumulatives.

Cet attribut est ignoré si la valeur de l'attribut cible ne prend pas en charge l'addition, ou si l'élément d'animation ne se répète pas.

Cet attribut est ignoré si la fonction d'animation est définie uniquement avec l'attribut {{SVGAttr("to")}}.

## Spécifications

{{Specifications}}

## Voir aussi

- [Animation SVG avec SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
