---
title: KeyframeEffect
slug: Web/API/KeyframeEffect
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

L'interface **`KeyframeEffect`** de l'[API Web Animations](/fr/docs/Web/API/Web_Animations_API) nous permet de créer des ensembles de propriétés et de valeurs animables, appelés **images clés** (<i lang="en">keyframes</i> en anglais). Ceux-ci peuvent ensuite être joués à l'aide du constructeur {{domxref("Animation.Animation", "Animation()")}}.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  - : Retourne une nouvelle instance d'objet `KeyframeEffect`, et permet également de cloner une instance d'objet d'effet de keyframe existante.

## Propriétés

- {{domxref("KeyframeEffect.target")}}
  - : Obtient et définit l'élément, ou l'élément d'origine du pseudo-élément, étant animé par cet objet. Cela peut être `null` pour les animations qui ne ciblent pas un élément ou un pseudo-élément spécifique.
- {{domxref("KeyframeEffect.pseudoElement")}}
  - : Obtient et définit le sélecteur du pseudo-élément étant animé par cet objet. Cela peut être `null` pour les animations qui ne ciblent pas un pseudo-élément.
- {{domxref("KeyframeEffect.iterationComposite")}}
  - : Obtient et définit l'opération de composition d'itération pour résoudre les changements de valeur de propriété de cet effet de keyframe.
- {{domxref("KeyframeEffect.composite")}}
  - : Obtient et définit l'opération de composition pour résoudre les changements de valeur de propriété entre cet effet de keyframe et d'autres effets de keyframe.

## Méthodes

_Cette interface hérite de certaines de ses méthodes de son parent, {{domxref("AnimationEffect")}}._

- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : Retourne les valeurs de timing calculées et actuelles pour cet effet de keyframe.
- {{domxref("KeyframeEffect.getKeyframes()")}}
  - : Retourne les images clés calculées qui composent cet effet ainsi que leurs décalages de keyframe calculés.
- {{domxref("AnimationEffect.getTiming()")}}
  - : Retourne l'objet associé à l'animation contenant toutes les valeurs de timing de l'animation.
- {{domxref("KeyframeEffect.setKeyframes()")}}
  - : Remplace l'ensemble des images clés qui composent cet effet.
- {{domxref("AnimationEffect.updateTiming()")}}
  - : Met à jour les propriétés de timing spécifiées.

## Exemples

Dans l'exemple suivant, le constructeur `KeyframeEffect` est utilisé pour créer un ensemble de keyframes qui dictent comment l'emoji rofl doit rouler sur le sol&nbsp;:

```js
const emoji = document.querySelector("div"); // l'élément à animer

const rollingKeyframes = new KeyframeEffect(
  emoji,
  [
    { transform: "translateX(0) rotate(0)" }, // image clé
    { transform: "translateX(200px) rotate(1.3turn)" }, // image clé
  ],
  {
    // options d'image clé
    duration: 2000,
    direction: "alternate",
    easing: "ease-in-out",
    iterations: "Infinity",
  },
);

const rollingAnimation = new Animation(rollingKeyframes, document.timeline);

// jouer l'animation "mort de rire"
rollingAnimation.play();
```

```html
<div>🤣</div>
```

```css hidden
body {
  box-shadow: 0 5px 5px pink;
}

div {
  width: fit-content;
  margin-left: calc(50% - 132px);
  font-size: 64px;
  user-select: none;
  margin-top: 1rem;
}
```

{{ EmbedLiveSample("exemples", "100%", "120") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
