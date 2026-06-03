---
title: "KeyframeEffect : la propriété composite"
short-title: composite
slug: Web/API/KeyframeEffect/composite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

La propriété **`composite`** de l'interface {{domxref("KeyframeEffect")}} détermine comment l'animation d'un élément agit sur ses valeurs de propriété sous-jacentes.

## Valeur

Pour comprendre ces valeurs, prenons l'exemple d'un `keyframeEffect` ayant pour valeur `blur(2)` appliqué sur une valeur de propriété sous-jacente `blur(3)`.

- `replace`
  - : Le `keyframeEffect` **remplace** la valeur sous-jacente avec laquelle il est combiné&nbsp;: `blur(2)` remplace `blur(3)`.
- `add`
  - : Le `keyframeEffect` est **ajouté** à la valeur sous-jacente avec laquelle il est combiné (dit _additif_)&nbsp;: `blur(2) blur(3)`.
- `accumulate`
  - : Le `keyframeEffect` est **accumulé** à la valeur sous-jacente&nbsp;: `blur(5)`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- Propriétés des objets {{domxref("KeyframeEffect")}}
- L'entrée du glossaire {{Glossary("Composite operation", "Opération composite")}}
