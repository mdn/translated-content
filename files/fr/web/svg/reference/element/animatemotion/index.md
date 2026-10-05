---
title: <animateMotion>
slug: Web/SVG/Reference/Element/animateMotion
l10n:
  sourceCommit: 603d83f1e1cdfd634e2f0b7b939466c7660822d3
---

L'élément [SVG](/fr/docs/Web/SVG) **`<animateMotion>`** fournit un moyen de définir comment un élément se déplace le long d'un chemin de mouvement.

> [!NOTE]
> Pour réutiliser un chemin existant, il est nécessaire d'utiliser un élément {{SVGElement("mpath")}} à l'intérieur de l'élément `<animateMotion>` au lieu de l'attribut {{SVGAttr("path")}}.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("keyPoints")}}
  - : Cet attribut indique, dans la plage `[0,1]`, à quel point l'objet se trouve le long du chemin pour chaque valeur associée dans {{SVGAttr("keyTimes")}}.
    _Type de valeur_&nbsp;: [**`<number>`**](/fr/docs/Web/SVG/Guides/Content_type#number)\*&nbsp;; _Valeur par défaut_&nbsp;: aucune&nbsp;; _Peut être animé_&nbsp;: **non**
- {{SVGAttr("path")}}
  - : Cet attribut définit le chemin du mouvement, en utilisant la même syntaxe que l'attribut {{SVGAttr('d')}}.
    _Type de valeur_&nbsp;: **`<string>`**&nbsp;; _Valeur par défaut_&nbsp;: aucune&nbsp;; _Peut être animé_&nbsp;: **non**
- {{SVGAttr("rotate")}}
  - : Cet attribut définit une rotation appliquée à l'élément animé le long d'un chemin, généralement pour le faire pointer dans la direction de l'animation.
    _Type de valeur_&nbsp;: [**`<number>`**](/fr/docs/Web/SVG/Guides/Content_type#number) | `auto` | `auto-reverse`&nbsp;; _Valeur par défaut_&nbsp;: `0`&nbsp;; _Peut être animé_&nbsp;: **non**

> [!NOTE]
> Pour `<animateMotion>`, la valeur par défaut de l'attribut {{SVGAttr("calcMode")}} est `paced`.

### Attributs d'animation

- [Les attributs de minutage d'animation](/fr/docs/Web/SVG/Reference/Attribute#attributs_pour_le_minutage_de_lanimation)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [Les attributs de valeur d'animation](/fr/docs/Web/SVG/Reference/Attribute#attributs_pour_les_valeurs_de_lanimation)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [Autres attributs d'animation](/fr/docs/Web/SVG/Reference/Attribute#attributs_danimation)
  - : Les plus notables&nbsp;: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [Les attributs d'évènements d'animation](/fr/docs/Web/SVG/Reference/Attribute#attributs_pour_la_gestion_des_évènements)
  - : Les plus notables&nbsp;: `onbegin`, `onend`, `onrepeat`

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGAnimateMotionElement")}}.

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```

{{EmbedLiveSample("Exemples", 150, "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{SVGElement("mpath")}}
