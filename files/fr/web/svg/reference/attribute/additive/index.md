---
title: additive
slug: Web/SVG/Reference/Attribute/additive
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

L'attribut **`additive`** contrôle si une animation est cumulative ou non.

Il est souvent utile de définir l'animation comme un décalage ou un delta par rapport à la valeur d'un attribut, plutôt que comme des valeurs absolues.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>replace</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

- `sum`
  - : Définit que l'animation s'ajoute à la valeur sous-jacente de l'attribut et aux autres animations de priorité inférieure.
- `replace`
  - : Définit que l'animation remplace la valeur sous-jacente de l'attribut et les autres animations de priorité inférieure. C'est la valeur par défaut, cependant le comportement est également affecté par les attributs de valeur d'animation {{SVGAttr("by")}} et {{SVGAttr("to")}}, comme décrit dans [Animation SMIL&nbsp;: Comment les attributs from, to et by affectent le comportement cumulatif <sup>(angl.)</sup>](https://www.w3.org/TR/smil-animation/#FromToByAndAdditive).

## Spécifications

{{Specifications}}

## Voir aussi

- [Animation SVG avec SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
