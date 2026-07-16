---
title: "KeyframeEffect : la méthode getKeyframes()"
short-title: getKeyframes()
slug: Web/API/KeyframeEffect/getKeyframes
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{ APIRef("Web Animations") }}

La méthode **`getKeyframes()`** de l'interface {{domxref("KeyframeEffect")}} renvoie un tableau des images clés (<i lang="en">keyframes</i> en anglais) calculées qui composent cette animation ainsi que leurs décalages calculés.

## Syntaxe

```js-nolint
getKeyframes()
```

### Paramètres

Aucun.

### Valeur de retour

Renvoie une séquence d'objets avec le format suivant&nbsp;:

- paires propriété/valeur
  - : Autant de paires propriété/valeur que contient chaque image clé de l'animation.
- `offset`
  - : Le décalage de l'image clé, spécifié comme un nombre entre `0.0` et `1.0` inclus ou `null`. Cela équivaut à indiquer des états de début et de fin en pourcentages dans les feuilles de style CSS avec `@keyframes`. Cette valeur vaudra `null` si l'image clé est espacée automatiquement.
- `computedOffset`
  - : Le décalage calculé pour cette image clé, déterminé lorsque la liste des images clés calculées a été produite. Contrairement à **`offset`**, ci-dessus, **`computedOffset`** n'est jamais `null`.
- `easing`
  - : La [fonction d'atténuation](/fr/docs/Web/CSS/Reference/Values/easing-function) utilisée de cette image clé jusqu'à la suivante de la série.
- `composite`
  - : L'opération {{domxref("KeyframeEffect.composite")}} utilisée pour combiner les valeurs spécifiées dans cette image clé avec la valeur sous-jacente. Cette propriété sera absente si l'opération de composition spécifiée sur l'effet est utilisée.

## Exemples

Dans l'exemple suivant, nous inspectons l'animation «&nbsp;rolling&nbsp;» pour voir ses images clés avec la méthode `getKeyframes()`&nbsp;:

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

// Tableau [ {…}, {…} ]
console.log(rollingAnimation.effect.getKeyframes());
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

{{ EmbedLiveSample("Examples", "100%", "120") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- Méthode des objets {{domxref("KeyframeEffect")}}
