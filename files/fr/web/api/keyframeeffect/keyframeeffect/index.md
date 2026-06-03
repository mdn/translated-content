---
title: "KeyframeEffect : le constructeur KeyframeEffect()"
short-title: KeyframeEffect()
slug: Web/API/KeyframeEffect/KeyframeEffect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

Le constructeur **`KeyframeEffect()`** de l'[API Web Animations](/fr/docs/Web/API/Web_Animations_API) retourne une nouvelle instance d'objet {{domxref("KeyframeEffect")}}, et permet également de cloner une instance d'objet d'effet d'image clé (<i lang="en">keyframe</i> en anglais) existante.

## Syntaxe

```js-nolint
new KeyframeEffect(cible, imagesCles)
new KeyframeEffect(cible, imagesCles, options)
new KeyframeEffect(sourceImagesCles)
```

### Paramètres

Le constructeur à plusieurs arguments (voir ci-dessus) crée une nouvelle instance d'objet {{domxref("KeyframeEffect")}}. Ses paramètres sont&nbsp;:

- `cible`
  - : L'élément DOM à animer, ou `null`.
- `imagesCles`
  - : Un [objet keyframes](/fr/docs/Web/API/Web_Animations_API/Keyframe_Formats) ou `null`.
- `options` {{optional_inline}}
  - : Soit un entier représentant la durée de l'animation (en millisecondes), soit un objet contenant un ou plusieurs des éléments suivants :
    - `delay` {{optional_inline}}
      - Le nombre de millisecondes à attendre avant le début de l'animation. Par défaut, 0.
    - `direction` {{optional_inline}}
      - Indique si l'animation se déroule vers l'avant (`normal`), à l'envers (`reverse`), change de direction après chaque itération (`alternate`), ou se déroule vers l'arrière et change de direction après chaque itération (`alternate-reverse`). Par défaut, `"normal"`.
    - `duration` {{optional_inline}}
      - Le nombre de millisecondes que chaque itération de l'animation prend pour se terminer. Par défaut, 0. Bien que cela soit techniquement optionnel, gardez à l'esprit que votre animation ne s'exécutera pas si cette valeur est 0.
    - `easing` {{optional_inline}}
      - Le taux de changement de l'animation au fil du temps. Accepte une {{cssxref("easing-function")}}, telle que `"linear"`, `"ease-in"`, `"step-end"`, ou `"cubic-bezier(0.42, 0, 0.58, 1)"`. Par défaut, `"linear"`.
    - `endDelay` {{optional_inline}}
      - Le nombre de millisecondes à attendre après la fin d'une animation. Ceci est principalement utile lors de la séquence d'animations en fonction du temps de fin d'une autre animation. Par défaut, 0.
    - `fill` {{optional_inline}}
      - Indique si les effets de l'animation doivent être reflétés par l'élément avant de jouer (`"backwards"`), conservés après la fin de l'animation (`"forwards"`), ou `les deux`. Par défaut, `"none"`.
    - `iterationStart` {{optional_inline}}
      - Décrit à quel point dans l'itération l'animation doit commencer. 0.5 indiquerait de commencer à mi-chemin de la première itération par exemple, et avec cette valeur définie, une animation avec 2 itérations se terminerait à mi-chemin d'une troisième itération. Par défaut, 0.0.
    - `iterations` {{optional_inline}}
      - Le nombre de fois que l'animation doit se répéter. Par défaut, `1`, et peut également prendre une valeur de {{jsxref("Infinity")}} pour la faire répéter aussi longtemps que l'élément existe.
    - `composite` {{optional_inline}}
      - Détermine comment les valeurs sont combinées entre cette animation et d'autres animations séparées qui ne spécifient pas leur propre opération composite. Par défaut,
        `replace`.
        - `add` indique un effet additif, où chaque itération successive s'appuie sur la précédente. Par exemple, avec `transform`, un
          `translateX(-200px)` ne remplacerait pas une valeur antérieure
          `rotate(20deg)` mais donnerait
          `translateX(-200px) rotate(20deg)`.
        - `accumulate` est similaire mais un peu plus intelligent&nbsp;: `blur(2)`
          et `blur(5)` deviennent `blur(7)`, pas
          `blur(2) blur(5)`.
        - `replace` écrase la valeur précédente avec la nouvelle.

    - `iterationComposite` {{optional_inline}}
      - Détermine comment les valeurs évoluent d'itération en itération dans cette animation. Peut être
        défini sur `accumulate` ou `replace` (voir ci-dessus). Par défaut,
        à `replace`.
    - `pseudoElement` {{optional_inline}}
      - Une chaîne de caractères `string` contenant un sélecteur de {{cssxref("pseudo-elements","pseudo-element")}}, tel que `"::before"`. Si présent, l'effet est appliqué à l'élément pseudo-sélectionné de `target`, plutôt qu'à `target` lui-même.

Le constructeur à un seul argument (voir ci-dessus) crée un clone d'une instance d'objet {{domxref("KeyframeEffect")}} existante. Son paramètre est le suivant&nbsp;:

- `sourceKeyFrames`
  - : Un objet {{domxref("KeyframeEffect")}} que vous souhaitez cloner.

## Exemples

Dans l'exemple suivant, le constructeur `KeyframeEffect` est utilisé pour créer un ensemble d'images clés qui dictent comment l'emoji doit rouler sur le sol&nbsp;:

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

- L'[interface KeyframeEffect](/fr/docs/Web/API/KeyframeEffect)
- L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
