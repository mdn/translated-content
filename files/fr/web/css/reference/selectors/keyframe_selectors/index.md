---
title: Sélecteurs d'images clés
slug: Web/CSS/Reference/Selectors/Keyframe_selectors
l10n:
  sourceCommit: f94b7a0b06a0e32df81ec8197720d306fe50a4a0
---

Les **sélecteurs d'images clés** CSS identifient des points spécifiques dans une chronologie d'animation où les styles d'images clés doivent être appliqués. Ces sélecteurs sont utilisés exclusivement dans la règle {{CSSxRef("@keyframes")}}.

## Syntaxe

```css
/* Mots clés */
from {
}
to {
}

/* Valeurs de type <percentage> */
0% {
}
50% {
}
100% {
}

/* Avec une <timeline-range-name> */
entry 20% {
}
exit 80% {
}

/* Listes de sélecteurs */
0%,
50%,
100% {
}
from,
to {
}
```

### Valeurs

- `from`
  - : Représente le début de la séquence d'animation. Il est équivalent à `0%`.
- `to`
  - : Représente la fin de la séquence d'animation. Il est équivalent à `100%`.
- `<percentage>`
  - : Un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) compris entre `0%` et `100%`, inclus, représentant la progression totale de la séquence d'animation.
- `<timeline-range-name> <percentage>`
  - : Une plage chronologique nommée ({{CSSxRef("&lt;timeline-range-name&gt;")}}) précédant un composant `<percentage>` représente un point de progression spécifique dans la plage de temps nommée.

## Description

Un `<keyframe-selector>` peut être le mot clé `to` ou `from`, un pourcentage compris entre `0%` et `100%`, inclus, ou une liste séparée par des virgules de ces mots clés et/ou pourcentages. Lorsque le pourcentage est précédé d'un {{CSSxRef("timeline-range-name")}}, il définit une plage chronologique si la chronologie de l'animation est une chronologie de progression de vue&nbsp;; sinon, le sélecteur est ignoré. Lorsqu'une liste de `<keyframe-selector>` séparée par des virgules est utilisée, le bloc de style qui suit s'applique à tous les points de progression définis.

### Valeurs à pourcentage valides

Les valeurs de pourcentage doivent inclure le signe pourcentage (`%`). Les valeurs sans unité (comme `0` et `20`) et les valeurs en dehors de la plage `0%` à `100%` (comme `-10%` ou `110%`) sont invalides et entraîneront l'ignorance du bloc de keyframes.

### Cascade, ordre, priorité et importance

Les valeurs de propriété définies par l'animation `@keyframes` sont plus importantes que toutes les styles normaux, ce qui signifie que, quelle que soit la [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity), une valeur animée remplacera les valeurs qui n'ont pas de drapeau {{CSSxRef("important", "!important")}}. Seules les valeurs de propriété importantes et les valeurs actuellement en transition prennent le dessus sur les valeurs animées.

Tous les sélecteurs d'images clés ont la même spécificité. L'ordre des sélecteurs d'images clés dans la liste de sélecteurs n'a pas d'importance. L'ordre source n'a d'importance que si un sélecteur d'image clé dupliqué déclare une valeur différente pour une propriété déjà déclarée sur le même sélecteur.

Le drapeau `!important` n'est pas valide dans une définition `@keyframes`.

### Sélecteurs de début et de fin omis

Si aucun keyframe `0%` (ou `from`) ou `100%` (ou `to`) n'est défini, le navigateur utilisera les styles calculés de l'élément pour ces états, permettant à l'animation de passer en douceur depuis ou vers les valeurs de propriété non animées de l'élément. Autrement dit, si une propriété est définie dans un keyframe au milieu de la chronologie sans être définie dans un bloc de sélecteur de début ou de fin, la propriété s'animera depuis sa valeur d'origine vers cette valeur.

Par exemple, si un élément a une couleur d'arrière-plan `red` et que l'animation suivante est appliquée&nbsp;:

```css
@keyframes changerPourViolet {
  25%,
  75% {
    background-color: purple;
  }
}
```

La couleur d'arrière-plan sera `red` au début de l'animation, passera à `purple` un quart du temps après le début, restera `purple` pendant la moitié de l'animation, puis repassera à `red`, la couleur d'arrière-plan d'origine, à partir de `75%` de la [chronologie de l'animation](/fr/docs/Web/CSS/Reference/Properties/animation-timeline). Voir l'exemple qui [omet `to` et `from`](#omettre_to_et_from).

#### Omettre les déclarations de propriétés

Lorsque vous créez une animation `@keyframes` pour animer plusieurs propriétés, vous n'avez pas à déclarer toutes les propriétés dans tous les blocs de sélecteurs d'images clés.

Par exemple, dans l'exemple [utilisation de base](#utilisation_de_base), l'opacité est déclarée dans tous les blocs de sélecteurs d'images clés, mais seules les valeurs de transformation de début et de fin sont définies. Dans ce cas, l'élément sera entièrement opaque `50%` de la chronologie de l'animation, mais le point auquel l'élément est transformé de `25vw` vers la droite dépend de la {{CSSxRef("animation-timing-function")}} — ce sera `50%` dans le cas de `linear`, mais pas si `ease-in` est utilisé (ce qui est le cas ici).

### Ordre de la cascade

Si plusieurs blocs de keyframes utilisent le même `<keyframe-selector>`, ils [se combinent selon la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction). Cela signifie que si la même propriété est définie dans plusieurs blocs avec le même sélecteur, la dernière déclaration dans la règle prévaut. S'ils définissent des propriétés différentes, elles sont fusionnées.

Cette animation répète des valeurs qui ne changent pas dans plusieurs blocs de sélecteurs, ce qui n'est pas nécessaire&nbsp;:

```css
@keyframes animationMoche {
  0% {
    transform: translateX(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
    background-color: purple;
  }
  75% {
    transform: translateX(0);
    opacity: 0;
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
    opacity: 0;
    background-color: purple;
  }
}
```

Nous pouvons utiliser la cascade pour regrouper des valeurs dans un seul bloc de sélecteur, puis les remplacer si nécessaire. Ce qui suit est équivalent à l'animation précédente, mais avec moins de lignes CSS&nbsp;:

```css
@keyframes animationMoche {
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    opacity: 1;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
  }
}
```

L'ordre est important&nbsp;! Nous ne pouvons pas ignorer la cascade. Si nous réorganisons ce qui précède de manière incorrecte, nous perdons les transitions. Ce qui suit rend l'élément violet, entièrement opaque, et réinitialise toutes les transformations pendant toute la durée de l'animation. Les valeurs de propriété sont appliquées et restent statiques parce que la dernière déclaration remplace les déclarations faites dans les blocs de sélecteurs d'images clés précédents.

```css
@keyframes mettreUniquementViolet {
  0% {
    background-color: yellow;
  }
  50% {
    opacity: 0;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
  }
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
    opacity: 1;
    background-color: purple;
  }
}
```

### Avec des plages chronologiques nommées

Définie à l'origine dans le [module d'animation CSS](/fr/docs/Web/CSS/Guides/Animations), le module [d'animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) a étendu le sélecteur d'images clés pour permettre d'inclure directement les informations de plage de progression de la chronologie dans la définition de l'animation `@keyframes`. Un {{CSSxRef("timeline-range-name")}} peut précéder le composant `<percentage>` du sélecteur pour attacher des images clés à des points de progression spécifiques dans la plage chronologique nommée. Le `<timeline-range-name>` représente la plage chronologique nommée prédéfinie sélectionnée, et le `<percentage>` qui suit représente la progression en pourcentage entre le début et la fin de cette plage chronologique nommée.

```css
@keyframes in-and-out {
  entry 0% {
    opacity: 0;
    transform: translateX(100%);
  }
  entry 100% {
    opacity: 1;
    transform: translateX(0);
  }
  exit 0% {
    opacity: 1;
    transform: translateX(0);
  }
  exit 100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
```

Si la chronologie d'animation de l'élément n'a pas de plage chronologique nommée correspondante, alors toutes les images clés attachées à des points sur cette plage chronologique nommée sont ignorées. Ces points d'attachement peuvent être en dehors de l'intervalle actif de l'animation. Lorsque cela se produit, les images clés automatiques `from` (`0%`) et `to` (`100%`) ne sont générées que pour les propriétés qui n'ont pas d'images clés à ou avant `0%` ou à ou après `100%`, respectivement. Voir le [guide des noms de plages chronologiques](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names) pour plus d'informations.

## Exemples

### Utilisation simple

Cet exemple montre l'utilisation de mots clés et de pourcentages en créant une animation d'images clés qui utilise ces types de sélecteurs d'images clés.

#### HTML

Nous incluons un élément que nous allons animer.

```html
<div>Je suis animé</div>
```

#### CSS

Nous appliquons quelques styles de base à notre boîte&nbsp;:

```css
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

Nous créons une animation {{CSSxRef("@keyframes")}}, en appliquant des styles aux mots clés `from` et `to` ainsi qu'à un pourcentage intermédiaire. Nous animons les propriétés {{CSSxRef("opacity")}} et {{CSSxRef("transform")}}.

```css
@keyframes slide-and-fade {
  from {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateX(50vw);
    opacity: 0;
  }
}
```

Nous appliquons notre animation à l'élément en utilisant la propriété abrégée {{CSSxRef("animation")}}&nbsp;:

```css
div {
  animation: slide-and-fade 4s ease-in infinite;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 200)}}

### Listes de sélecteurs

En utilisant le même HTML et les mêmes styles de base que dans l'exemple précédent, cet exemple montre l'utilisation de sélecteurs séparés par des virgules pour regrouper des images clés, en appliquant les mêmes styles à plusieurs points d'une animation.

```html hidden
<div>Je suis animé</div>
```

#### CSS

Nous créons une animation `pulse` qui change la taille de notre élément.

```css
div {
  animation: pulse 4s linear infinite;
}

@keyframes pulse {
  0%,
  75% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  25%,
  100% {
    transform: scale(0.8);
  }
}
```

```css hidden
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

#### Résultat

{{EmbedLiveSample("Listes de sélecteurs", "100%", 125)}}

En utilisant une liste de sélecteurs avec plusieurs sélecteurs d'images clés séparés par des virgules, l'animation «&nbsp;marque une pause&nbsp;» depuis l'image clé `25%` jusqu'à l'image clé `75%`.

### Omettre `to` et `from`

Cet exemple montre comment, lorsque les sélecteurs d'images clés `to` ou `from` ne sont pas inclus dans une définition d'animation `@keyframes`, les propriétés animées s'animent vers et depuis les valeurs de propriété originales, non animées.

#### HTML

Nous incluons quelques éléments. Nous allons animer tous ces éléments.

```html
<div>Je suis animé</div>
<div>Je suis animé</div>
<div>Je suis animé</div>
```

#### CSS

Nous fournissons des mises en forme de base à nos éléments, et donnons à chacun une {{CSSxRef("outline-width")}} et une {{CSSxRef("background-color")}} différentes. Nous allons animer ces deux propriétés.

```css
div {
  background-color: magenta;
  outline: 10px dashed black;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
  margin: 35px auto;

  animation: changes 5s linear infinite;
}
div:first-of-type {
  background-color: blue;
  outline-width: 0;
}
div:last-of-type {
  background-color: green;
  outline-width: 20px;
}
```

Nous créons une animation qui définit la `background-color` et la `outline-width` d'un élément aux images clés `30%` et `40%`.

```css
@keyframes changes {
  30%, 40% {
    background-color: black;
    outline-width: 15px;
}
```

#### Résultat

{{EmbedLiveSample("Omettre `to` et `from`", "100%", 420)}}

Les propriétés `background-color` et `outline-width` sont définies dans les images clés `30%` et `40%`. En conséquence, les valeurs de `background-color` des éléments s'animent de `green`, `magenta` et `blue` à `black`, tandis que leurs valeurs de `outline-width` s'animent de `0px`, `10px` et `20px` à `15px`. Elles restent dans cet état pendant un dixième de l'animation — entre `30%` et `40%` de la durée. Après `40%` de la durée, ces propriétés s'animent à nouveau vers leurs valeurs initiales.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@keyframes")}}
- La propriété {{CSSxRef("animation")}}
- La propriété {{CSSxRef("animation-range")}}
- [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- [Les animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
