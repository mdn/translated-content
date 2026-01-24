---
title: L'arbre de l'ombre (Shadow tree)
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Un **arbre de l'ombre**, ou **arbre fantôme** selon les usages, en anglais <i lang="en">shadow tree</i>, est un ensemble caché de nœuds du {{Glossary("DOM")}} dont le nœud supérieur est une **racine de l'ombre** (<i lang="en">shadow root</i> en anglais). La racine de l'ombre est le nœud supérieur d'un **DOM d'ombre** (<i lang="en">shadow DOM</i> en anglais) et ne fait pas partie de l'arbre DOM régulier du document.

La racine de l'ombre est attachée à un autre arbre de nœuds via un nœud DOM spécifique appelé son **hôte**. Cet hôte peut faire partie d'un autre arbre de l'ombre ou de l'arbre DOM régulier. L'arbre de nœuds de l'hôte d'une racine de l'ombre est parfois appelé **arbre de lumière** (<i lang="en">light tree</i> en anglais).

Les nœuds DOM cachés d'un arbre de l'ombre ne sont généralement pas affectés par ce qui est appliqué en dehors de l'arbre de l'ombre, et inversement. La **frontière de l'ombre**, là où le DOM de l'ombre se termine et où le DOM régulier commence, peut être franchie, mais seulement de façon très intentionnelle&nbsp;:

- Pour manipuler les nœuds d'un arbre de l'ombre depuis l'extérieur, il faut utiliser une [API Shadow DOM](/fr/docs/Web/API/Web_components/Using_shadow_DOM) spéciale.
- La mise en forme d'un arbre de l'ombre depuis l'extérieur peut être réalisée via le [ciblage CSS](/fr/docs/Web/CSS/Guides/Scoping) et les [parties de l'ombre en CSS](/fr/docs/Web/CSS/Guides/Shadow_parts).

## Voir aussi

- [Utiliser le DOM de l'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM)
- La propriété du DOM {{DOMxRef("Element.shadowRoot")}} et la méthode du DOM {{DOMxRef("Element.attachShadow()")}}
- L'interface {{DOMxRef("ShadowRoot")}}
- L'élément HTML {{HTMLElement("slot")}}
- [Le module des parties de l'ombre CSS](/fr/docs/Web/CSS/Guides/Shadow_parts)
- [Le module de ciblage CSS](/fr/docs/Web/CSS/Guides/Scoping)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Accessibility tree", "Arbre d'accessibilité")}}
