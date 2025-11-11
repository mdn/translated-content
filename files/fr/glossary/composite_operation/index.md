---
title: Opération composite
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En CSS, la valeur d'une propriété dans une règle CSS est la _valeur sous-jacente_ de cette propriété, pour cette même propriété, la valeur dans [une étape d'animation (<i lang="en">keyframe</i>)](/fr/docs/Web/CSS/Reference/At-rules/@keyframes) est sa _valeur effective_.

L'_opération composite_ est l'opération qui permet de combiner la valeur effective et la valeur sous-jacente pour produire la valeur effective finale pour l'étape d'animation. Il existe trois types d'opérations composites&nbsp;:

- **Remplacement**&nbsp;: La valeur effective remplace la valeur sous-jacente. La valeur effective finale correspond à la valeur effective originelle.
- **Ajout**&nbsp;: La valeur effective est ajoutée à la valeur sous-jacente.
- **Accumulation**&nbsp;: La valeur effective est combinée à la valeur sous-jacente.

> [!NOTE]
> En CSS, l'opération composite s'applique uniquement aux opérations.

## Voir aussi

- {{CSSxRef("animation-composition")}}
- {{DOMxRef("KeyframeEffect.composite")}}
