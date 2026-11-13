---
title: by
slug: Web/SVG/Reference/Attribute/by
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

L'attribut **`by`** définit une valeur de décalage relative pour un attribut qui est modifié lors d'une animation.

La valeur de départ pour l'attribut est soit indiquée en la définissant comme valeur pour l'attribut donné dans le nom d'attribut ({{SVGAttr("attributeName")}}) ou l'attribut {{SVGAttr("from")}}.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100">
    <animate attributeName="width" fill="freeze" by="50" dur="3s" />
  </rect>
</svg>
```

{{EmbedLiveSample("Exemples", 200, 200)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><em>Voir ci-dessous</em></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

Le type de valeur exact pour cet attribut dépend de la valeur de l'attribut qui est animé.

Lorsqu'une liste de valeurs est définie par l'attribut {{SVGAttr("values")}}, l'attribut `by` est ignoré.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
