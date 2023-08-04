---
title: Web Animations API
slug: Web/API/Web_Animations_API
---

{{DefaultAPISidebar("Web Animations")}}

L'**API Web Animations** permet de synchroniser et de chronométrer les changements de présentation d'une page Web, c'est-à-dire l'animation d'éléments DOM. Pour ce faire, il combine deux modèles : le modèle de synchronisation et le modèle d'animation.

## Concepts et utilisation

L'API Web Animations fournit un langage commun aux navigateurs et aux développeurs pour décrire les animations sur les éléments DOM. Pour obtenir plus d'informations sur les concepts derrière l'API et comment l'utiliser, lisez [Utilisation de l'API Web Animations](/fr/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Interfaces d'animations Web

- {{domxref("Animation")}}
  - : Fournit des commandes de lecture et une chronologie pour un nœud ou une source d'animation. Peut prendre un objet créé avec le constructeur {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}.
- {{domxref("KeyframeEffect")}}
  - : Décrit des ensembles de propriétés et de valeurs animables, appelées **images clés** (_keyframes_) et leurs [options de minutage](/fr/docs/Web/API/Web_Animations_API/Animation_timing_options) . Ceux-ci peuvent ensuite être lus en utilisant le constructeur {{domxref("Animation.Animation", "Animation()")}}.
- {{domxref("AnimationTimeline")}}
  - : Représente la chronologie de l'animation. Cette interface existe pour définir les fonctionnalités de la chronologie (héritées par {{domxref("DocumentTimeline")}} et les futurs objets de chronologie) et n'est pas elle-même accessible par les développeurs.
- {{domxref("AnimationEvent")}}
  - : Fait actuellement partie des animations CSS.
- {{domxref("DocumentTimeline")}}
  - : Représente les chronologies d'animation, y compris la chronologie du document par défaut (accessible à l'aide de la propriété {{domxref("Document.timeline")}}).
- {{domxref("EffectTiming")}}
  - : {{domxref("Element.animate()")}}, {{domxref("KeyframeEffectReadOnly.KeyframeEffectReadOnly()")}} et {{domxref("KeyframeEffect.KeyframeEffect()")}} acceptent tous un dictionnaire facultatif objet des propriétés de synchronisation.

## Extensions à d'autres interfaces

L'API Web Animations ajoute de nouvelles fonctionnalités à {{domxref("document")}} et {{domxref("element")}}.

### Extensions à l'interface `Document`

- {{domxref("document.timeline")}}
  - : L'objet `DocumentTimeline` représentant la chronologie du document par défaut.
- {{domxref("document.getAnimations()")}}
  - : Renvoie un tableau d'objets {{domxref("Animation")}} actuellement en vigueur sur les éléments du `document`.

### Extensions à l'interface `Element`

- {{domxref("Element.animate()")}}
  - : Une méthode de raccourci pour créer et lire une animation sur un élément. Il renvoie l'instance d'objet {{domxref("Animation")}} créée.
- {{domxref("Element.getAnimations()")}}
  - : Renvoie un tableau d'objets {{domxref("Animation")}} affectant actuellement un élément ou qui sont programmés pour le faire à l'avenir.

## Spécifications

{{Specifications}}

## Voir aussi

- [Utilisation de l'API Web Animations](/fr/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Démos d'animations web](https://mozdevs.github.io/Animation-examples/)
- [Polyfill / Prothèse d'implémentation](https://github.com/web-animations/web-animations-js)
- [Implémentation](https://birtles.github.io/areweanimatedyet/) actuelle de Firefox : [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [Test de prise en charge du navigateur](http://codepen.io/danwilson/pen/xGBKVq)
