---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: c000698d544f932314050edec3f47b8b8dc906bf
---

{{APIRef("Web Animations API")}}

L'interface **`AnimationEvent`** représente les évènements apportant des informations sur les [animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

{{InheritanceDiagram}}

## Constructeur

- [`AnimationEvent()`](/fr/docs/Web/API/AnimationEvent/AnimationEvent)
  - : Crée un évènement `AnimationEvent` avec les paramètres spécifiés.

## Propriétés

_Hérite également des propriétés de son parent, [`Event`](/fr/docs/Web/API/Event)._

- [`animationName`](/fr/docs/Web/API/AnimationEvent/animationName) {{readonlyInline}}
  - : Une chaîne contenant la valeur de la propriété CSS [`animation-name`](/fr/docs/Web/CSS/animation-name) associée à la transition.
- [`elapsedTime`](/fr/docs/Web/API/AnimationEvent/elapsedTime) {{readonlyInline}}
  - : Un nombre à virgule flottante, équivalent à la durée pendant laquelle l'animation s'est déroulée, en secondes, depuis le déclenchement de cet évènement (excluant les temps de pause de l'animation). `elapsedTime` vaudra `0.0` pour un évènement `animationstart`, à moins que [`animation-delay`](/fr/docs/Web/CSS/animation-delay) n'ait une valeur négative. Dans ce cas, l'évènement sera déclenché avec une valeur de `(-1 * délai)` pour `elapsedTime`.
- [`pseudoElement`](/fr/docs/Web/API/AnimationEvent/pseudoElement) {{readonlyInline}}
  - : Une chaîne commençant par `::`, qui contient le nom du [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) sur lequel l'animation s'exécute. Si l'animation est exécutée sur l'élément et non sur un pseudo-élément, la chaîne sera vide (`""`).

## Méthodes

_Hérite des méthodes de son parent, [`Event`](/fr/docs/Web/API/Event)._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- Les propriétés CSS et règles @ relatives aux animations&nbsp;:
  - [`animation`](/fr/docs/Web/CSS/animation)
  - [`animation-delay`](/fr/docs/Web/CSS/animation-delay)
  - [`animation-direction`](/fr/docs/Web/CSS/animation-direction)
  - [`animation-duration`](/fr/docs/Web/CSS/animation-duration)
  - [`animation-fill-mode`](/fr/docs/Web/CSS/animation-fill-mode)
  - [`animation-iteration-count`](/fr/docs/Web/CSS/animation-iteration-count)
  - [`animation-name`](/fr/docs/Web/CSS/animation-name)
  - [`animation-play-state`](/fr/docs/Web/CSS/animation-play-state)
  - [`animation-timing-function`](/fr/docs/Web/CSS/animation-timing-function)
  - [`@keyframes`](/fr/docs/Web/CSS/@keyframes)
