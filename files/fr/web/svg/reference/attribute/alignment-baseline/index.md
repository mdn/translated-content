---
title: alignment-baseline
slug: Web/SVG/Reference/Attribute/alignment-baseline
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

L'attribut **`alignment-baseline`** définit comment un objet est aligné par rapport à son parent. Cette propriété définit quelle ligne de base de cet élément doit être alignée avec la ligne de base correspondante du parent. Par exemple, cela permet aux {{Glossary("Baseline/Typography", "lignes de base alphabétiques")}} dans le texte romain de rester alignées lors des changements de taille de police. Par défaut, il utilise la ligne de base portant le même nom que la valeur calculée de la propriété `alignment-baseline`.

> [!NOTE]
> En tant qu'attribut de présentation, `alignment-baseline` possède également un équivalent en propriété CSS&nbsp;: {{CSSxRef("alignment-baseline")}}. Lorsque les deux sont spécifiés, la propriété CSS a la priorité.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>auto</code> | <code>baseline</code> | <code>before-edge</code> |
        <code>text-before-edge</code> | <code>middle</code> |
        <code>central</code> | <code>after-edge</code> |
        <code>text-after-edge</code> | <code>ideographic</code> |
        <code>alphabetic</code> | <code>hanging</code> |
        <code>mathematical</code> | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

- `auto` {{Deprecated_Inline}}
  - : La valeur est la ligne de base dominante du script auquel appartient le caractère, c'est-à-dire, utilisez la ligne de base dominante du parent.
- `baseline`
  - : Utilise le choix {{SVGAttr("dominant-baseline")}} du parent. Aligne la {{Glossary("baseline/typography", "ligne de base")}} correspondante de la boîte sur celle de son parent.
- `before-edge` {{Deprecated_Inline}}
  - : Le point d'alignement de l'objet aligné est aligné avec la ligne de base «&nbsp;before-edge&nbsp;» de l'élément de contenu textuel parent.
- `text-bottom`
  - : Fait correspondre le bas de la boîte au haut de la zone de contenu du parent.
- `text-before-edge`
  - : Le point d'alignement de l'objet aligné est aligné avec la ligne de base «&nbsp;text-before-edge&nbsp;» de l'élément de contenu textuel parent.

    > [!NOTE]
    > Ce mot-clé peut être associé à `text-top`.

- `middle`
  - : Aligne le milieu vertical de la boîte avec la ligne de base de la boîte parente plus la moitié de la hauteur en abscisse de la boîte parente.
- `central`
  - : Fait correspondre la ligne de base centrale de la boîte à la ligne de base centrale de son parent.
- `after-edge` {{Deprecated_Inline}}
  - : Le point d'alignement de l'objet aligné est aligné avec la ligne de base «&nbsp;after-edge&nbsp;» de l'élément de contenu textuel parent.
- `text-top`
  - : Fait correspondre le haut de la boîte au haut de la zone de contenu du parent.
- `text-after-edge`
  - : Le point d'alignement de l'objet aligné est aligné avec la ligne de base «&nbsp;text-after-edge&nbsp;» de l'élément de contenu textuel parent.

    > [!NOTE]
    > Ce mot-clé peut être associé à `text-bottom`.

- `ideographic`
  - : Fait correspondre la ligne de base inférieure de la face idéographique des caractères de la boîte à celle de son parent.
- `alphabetic`
  - : Fait correspondre la ligne de base alphabétique de la boîte à celle de son parent.
- `hanging`
  - : Le point d'alignement de l'objet aligné est aligné avec la ligne de base «&nbsp;hanging&nbsp;» de l'élément de contenu textuel parent.
- `mathematical`
  - : Fait correspondre la ligne de base mathématique de la boîte à celle de son parent.
- `top`
  - : Aligne le haut du sous-arbre aligné avec le haut de la boîte de ligne.
- `center`
  - : Aligne le centre du sous-arbre aligné avec le centre de la boîte de ligne.
- `bottom`
  - : Aligne le bas du sous-arbre aligné avec le bas de la boîte de ligne.

SVG 2 introduit quelques changements dans la définition de cette propriété. En particulier&nbsp;: les valeurs `auto`, `before-edge` et `after-edge` ont été supprimées. Pour assurer la compatibilité ascendante, `text-before-edge` peut être associé à `text-top` et `text-after-edge` à `text-bottom`. Il ne faut utiliser ni `text-before-edge` ni `text-after-edge` avec la propriété {{CSSxRef("vertical-align")}}.

## Exemples

```html
<svg
  width="480"
  height="120"
  viewBox="0 0 480 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Matérialisation des points d'ancrage -->
  <path
    d="M60,10 L60,110
              M30,10 L480,10
              M30,65 L480,65
              M30,110 L480,110
              "
    stroke="grey" />

  <!-- Points d'ancrage en action -->
  <text alignment-baseline="hanging" x="60" y="10">Un texte suspendu</text>

  <text alignment-baseline="middle" x="60" y="65">Un texte centré</text>

  <text alignment-baseline="baseline" x="60" y="110">
    Un texte sur la ligne de base
  </text>

  <!-- Matérialisation des points d'ancrage -->
  <circle cx="60" cy="10" r="3" fill="red" />
  <circle cx="60" cy="65" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
      text {
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{EmbedLiveSample("Example")}}

Pour l'alignement d'objets dans d'autres éléments (comme {{SVGElement("text")}}), voir {{SVGAttr("dominant-baseline")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("alignment-baseline")}}
- [L'alignement sur la ligne de base CSS](/fr/docs/Web/CSS/Guides/Box_alignment/Overview#alignement_sur_la_ligne_de_base)
