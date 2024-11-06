---
title: CSSValue
slug: Web/API/CSSValue
---

{{APIRef ("DOM")}}L'interface **CSSValue** représente la valeur calculée actuelle d'une propriété CSS.

## Propriétés

- {{domxref("CSSValue.cssText")}}
  - : Une {{domxref ("DOMString")}} représentant la valeur actuelle.
- {{domxref("CSSValue.cssValueType")}} {{readonlyInline}}

  - : Un raccourci non signé ( `unsigned short` ) représentant un code définissant le type de valeur. Les valeurs possibles sont:

    <table class="standard-table">
      <tbody>
        <tr>
          <td class="header">Constant</td>
          <td class="header">Description</td>
        </tr>
        <tr>
          <td><code>CSS_CUSTOM</code></td>
          <td><p>La valeur est une valeur personnalisée.</p></td>
        </tr>
        <tr>
          <td><code>CSS_INHERIT</code></td>
          <td>La valeur est héritée et cssText contient "inherit".</td>
        </tr>
        <tr>
          <td><code>CSS_PRIMITIVE_VALUE</code></td>
          <td>
            La valeur est une valeur primitive et une instance de l'interface
            {{domxref ("CSSPrimitiveValue")}} peut être obtenue en
            utilisant des méthodes de casting spécifiques à la liaison sur cette
            instance de l'interface CSSValue.
          </td>
        </tr>
        <tr>
          <td><code>CSS_VALUE_LIST</code></td>
          <td>
            La valeur est une liste CSSValue et une instance de l'interface
            {{domxref ("CSSValueList")}} peut être obtenue en utilisant des
            méthodes de casting spécifiques à la liaison sur cette instance de
            l'interface CSSValue.
          </td>
        </tr>
      </tbody>
    </table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("CSSPrimitiveValue")}}
- {{domxref("CSSValueList")}}
