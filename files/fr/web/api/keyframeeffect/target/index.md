---
title: "KeyframeEffect : la propriété target"
short-title: target
slug: Web/API/KeyframeEffect/target
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

La propriété **`target`** de l'interface {{domxref("KeyframeEffect")}} représente l'élément ou le pseudo-élément animé. Elle peut valoir une valeur `null` pour les animations qui ne ciblent pas un élément spécifique. Elle agit à la fois comme accesseur et mutateur, sauf pour les animations et transitions générées par CSS.

## Valeur

Un objet {{domxref("Element")}} ou `null`.

## Exemples

Dans l'exemple suivant, `emoji` est défini comme l'élément `target` à animer&nbsp;:

```js
const emoji = document.querySelector("div"); // élément à animer

const rollingKeyframes = new KeyframeEffect(
  emoji,
  [
    { transform: "translateX(0) rotate(0)" }, // image-clé
    { transform: "translateX(200px) rotate(1.3turn)" }, // image-clé
  ],
  {
    // options des images-clés
    duration: 2000,
    direction: "alternate",
    easing: "ease-in-out",
    iterations: "Infinity",
  },
);

const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
rollingAnimation.play();

// affiche "<div>🤣</div>"
console.log(rollingKeyframes.target);
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
- Propriété des objets {{domxref("KeyframeEffect")}}
