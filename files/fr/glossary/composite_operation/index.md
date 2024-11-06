---
title: Opération composite
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 4e8db9b4072e90e349f3c18b2c6edfe898cfe6a2
---

{{GlossarySidebar}}

En CSS, la valeur d'une propriété dans une règle CSS est la _valeur sous-jacente_ de cette propriété, pour cette même propriété, la valeur dans [une étape d'animation (<i lang="en">keyframe</i>)](/fr/docs/Web/CSS/@keyframes) est sa _valeur effective_.

L'_opération composite_ est l'opération qui permet de combiner la valeur effective et la valeur sous-jacente pour produire la valeur effective finale pour l'étape d'animation. Il existe trois types d'opérations composites&nbsp;:

- Remplacement
  - : La valeur effective remplace la valeur sous-jacente. La valeur effective finale correspond à la valeur effective originelle.
- Ajout
  - : La valeur effective est ajoutée à la valeur sous-jacente.
- Accumulation
  - : La valeur effective est combinée à la valeur sous-jacente.

> [!NOTE]
> En CSS, l'opération composite s'applique uniquement aux opérations.

## Voir aussi

- [`animation-composition`](/fr/docs/Web/CSS/animation-composition)
- [`KeyframeEffect.composite`](/fr/docs/Web/API/KeyframeEffect/composite)
