---
title: "@keyframes"
slug: Web/CSS/Reference/At-rules/@keyframes
original_slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 3d06d82cbddf640291fd66cf85cd9014c4e867c5
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@keyframes`** permet aux auteurs de définir les étapes qui composent la séquence d'une animation CSS. Cela permet de contrôler une animation plus finement que ce qu'on pourrait obtenir avec [les transitions](/fr/docs/Web/CSS/Guides/Transitions).

## Syntaxe

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

### Valeurs

- `<identifier>`
  - : Un nom ({{cssxref("custom-ident")}}) qui permet d'identifier la liste d'étapes. Cela doit être [un identifiant valide selon la syntaxe CSS](/fr/docs/Web/CSS/Reference/Values/custom-ident).
- `from`
  - : Indique le point de départ de l'animation (correspond à un avancement de `0%`).
- `to`
  - : Indique la fin de l'animation (correspond à un avancement de `100%`).
- {{cssxref("&lt;percentage&gt;")}}
  - : Le pourcentage d'avancement de l'animation auquel l'étape décrite s'applique.

Il est possible de manipuler la règle `@keyframes` via JavaScript et le CSSOM, notamment avec l'interface {{domxref("CSSKeyframesRule")}}.

## Description

Afin d'utiliser ces règles, on créera une règle `@keyframes` avec un nom pour chaque étape et on utilisera ce nom avec la propriété {{cssxref("animation-name")}} afin qu'une animation corresponde à la liste des étapes qui la composent. Chaque règle `@keyframes` contient une liste de sélecteurs d'étapes dont chacun contient le pourcentage d'avancement de l'animation auquel il correspond ainsi que les informations de styles qui correspondent à cette étape..

Les étapes peuvent être listées dans n'importe quel ordre. Elles seront enchaînées dans l'ordre indiqué par le pourcentage d'avancement.

### Validité de la liste des étapes

Si une liste d'étapes ne spécifie pas le début (`0%`/`from`) ou la fin (`100%`/`to`) d'une animation, le navigateur va utiliser les styles de l'élement définis par ailleurs. C'est assez pratique pour animer un élément depuis et vers son état initial.

Si les étapes décrivent des propriétés qui ne peuvent pas être animées, elles seront ignorées mais les autres propriétés seront bien animées.

### Résolution des doublons

Si plusieurs règles `@keyframes` existent avec le même nom, c'est la dernière qui est utilisée. Les règles `@keyframes` ne forment pas de cascade et il n'y a donc pas de dérivation entre les différentes règles qui porteraient le même nom.

Si, au sein d'une même règle, deux étapes décrivent le même pourcentage d'avancement, c'est la dernière qui est utilisée pour décrire ce moment de l'animation. Il n'y a aucune cascade qui composerait différentes étapes décrivant le même avancement.

### Gestion des propriétés absentes

Si des propriétés ne sont pas définies à chaque étape, elles sont interpolées si possible. Si ces propriétés ne peuvent pas être interpolées, elles sont retirées de l'animation :

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

Ici, la propriété {{cssxref("top")}} est animée en passant par les étapes `0%`, `30%` et `100%`. Quant à {{cssxref("left")}}, elle est animée aux étapes `0%`, `68%` , `72%` et `100%`.

### Quand une étape clé est définie plusieurs fois

Si une étape clé est définie plusieurs fois mais que toutes les propriétés concernées ne figurent pas dans chaque étape clé, toutes les valeurs spécifiées dans ces étapes clés sont prises en compte. Par exemple :

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

Dans cet exemple, à l'étape clé `50%`, les valeurs utilisées sont `top: 10px` et `left: 20px`.

Les étapes clés en cascade sont prises en charge à partir de Firefox 14.

### `!important` dans une étape

Les déclarations qui utilisent `!important` dans une description d'étape sont ignorées

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important; /* ignorée */
  }
  to {
    margin-top: 100px;
  }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* ignorée */
    margin-bottom: 50px;
  }
}
```

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples d'animation CSS

Regardez [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using) et [Animer les éléments lors du défilement avec les animations déclenchées par le défilement <sup>(angl.)</sup>](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) pour des exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("animation-range")}}
- [Animation déclenchée par le défilement en CSS](/fr/docs/Web/CSS/CSS_scroll-driven_animations)
- [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- Le module d'[animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- [Animer les éléments lors du défilement avec les animations déclenchées par le défilement <sup>(angl.)</sup>](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- {{domxref("AnimationEvent")}}
