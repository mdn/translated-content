---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: 3ee333bf5e414ac81c452ec10fed7af645c96740
---

L'attribut **`baseline-shift`** permet de repositionner la ligne de base dominante par rapport à la ligne de base dominante de l'élément parent de contenu textuel. L'objet décalé peut être un indice ou un exposant.

> [!NOTE]
> En tant qu'attribut de présentation, `baseline-shift` possède également un équivalent en propriété CSS&nbsp;: {{CSSxRef("baseline-shift")}}. Lorsque les deux sont définis, la propriété CSS a la priorité.

> [!NOTE]
> Cette propriété va devenir obsolète et il est conseillé aux auteur·ice·s d'utiliser {{CSSxRef("vertical-align")}} à la place.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        {{CSSxRef("&lt;length-percentage&gt;")}} | <code>sub</code> |
        <code>super</code>
      </td>
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

- `sub`
  - : La ligne de base dominante est déplacée à la position par défaut pour les indices.
- `super`
  - : La ligne de base dominante est déplacée à la position par défaut pour les exposants.
- `<length-percentage>`
  - : Une valeur de longueur déplace vers le haut (valeur positive) ou vers le bas (valeur négative) la ligne de base dominante de l'élément parent de contenu textuel de la longueur définie.

    Une valeur en pourcentage déplace vers le haut (valeur positive) ou vers le bas (valeur négative) la ligne de base dominante de l'élément parent de contenu textuel du pourcentage défini de la hauteur de ligne ({{CSSxRef("line-height")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
