---
title: "KeyframeEffect : la propriété iterationComposite"
short-title: iterationComposite
slug: Web/API/KeyframeEffect/iterationComposite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

La propriété **`iterationComposite`** de l'interface {{domxref("KeyframeEffect")}} détermine comment les valeurs de propriété de l'animation s'accumulent ou se remplacent à chaque itération de l'animation.

## Valeur

L'une des valeurs suivantes&nbsp;:

- `replace`
  - : La valeur produite par le `keyframeEffect` est indépendante de l'itération en cours.
- `accumulate`
  - : Les itérations successives du `keyframeEffect` s'appuient sur la valeur finale de l'itération précédente.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- Propriétés des objets {{domxref("KeyframeEffect")}}
