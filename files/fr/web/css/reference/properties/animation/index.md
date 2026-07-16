---
title: Propriété CSS `animation`
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 8fbdeb7fdee69284a6423044f24b8b4a7140028f
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`animation`** permet d'appliquer une animation entre des styles. Il s'agit d'une propriété raccourcie pour {{CSSxRef("animation-name")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-timing-function")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-play-state")}} et {{CSSxRef("animation-timeline")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: animation")}}

```css interactive-example-choice
animation: 3s ease-in 1s infinite reverse both running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite alternate slide-in;
```

```css interactive-example-choice
animation: 0.5s linear 1s infinite alternate slide-in;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  margin: 20px;
  border: 5px solid #333333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

@keyframes slide-in {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

## Propriétés constitutives

C'est une propriété qui synthétise les propriétés suivantes&nbsp;:

- {{CSSxRef("animation-name")}}
- {{CSSxRef("animation-duration")}}
- {{CSSxRef("animation-timing-function")}}
- {{CSSxRef("animation-delay")}}
- {{CSSxRef("animation-direction")}}
- {{CSSxRef("animation-iteration-count")}}
- {{CSSxRef("animation-fill-mode")}}
- {{CSSxRef("animation-play-state")}}
- {{CSSxRef("animation-timeline")}}

## Syntaxe

```css
/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slide-in;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slide-in;

/* deux animations */
animation:
  3s linear slide-in,
  3s ease-out 5s slide-out;
```

### Valeurs

Une ou plusieurs déclarations `<animation>`, séparées par des virgules, chaque `<animation>` incluant&nbsp;:

- `<keyframes-name>` ou `none`
  - : Le nom d'une règle {{CSSxRef("@keyframes")}} qui définit l'animation à appliquer à un élément. La valeur initiale pour {{CSSxRef("animation-name")}} est `none`.
- `<animation-duration>`
  - : Détermine la durée nécessaire pour qu'une animation complète un cycle. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-duration")}}. La valeur initiale est `0s`.
- `<easing-function>`
  - : Détermine le type de transition. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-timing-function")}}. La valeur initiale est `ease`.
- `<animation-delay>`
  - : Détermine le temps à attendre après l'application de l'animation à un élément avant de commencer à exécuter l'animation. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-delay")}}. La valeur initiale est `0s`.
- `<single-animation-direction>`
  - : La direction dans laquelle l'animation est jouée. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-direction")}}. La valeur initiale pour {{CSSxRef("animation-direction")}} est `normal`.
- `<single-animation-iteration-count>`
  - : Le nombre de fois que l'animation est jouée. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-iteration-count")}}. La valeur initiale pour {{CSSxRef("animation-iteration-count")}} est `1`.
- `<single-animation-fill-mode>`
  - : Détermine comment les styles doivent être appliqués à la cible de l'animation avant et après son exécution. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-fill-mode")}}. La valeur initiale pour {{CSSxRef("animation-fill-mode")}} est `none`.
- `<single-animation-play-state>`
  - : Détermine si l'animation est en cours de lecture ou non. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-play-state")}}. La valeur initiale pour {{CSSxRef("animation-play-state")}} est `running`.
- `<single-animation-timeline>`
  - : Détermine la chronologie utilisée pour contrôler la progression de l'animation. La valeur doit être l'une de celles disponibles dans {{CSSxRef("animation-timeline")}}. La valeur initiale est `auto`.

## Description

La propriété `animation` est définie sous la forme d'une ou plusieurs animations distinctes, séparées par des virgules. Chaque `animation` de la liste d'animations séparées par des virgules définit {{CSSxRef("animation-name")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-timing-function")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-play-state")}} et {{CSSxRef("animation-timeline")}}. Si l'une des composantes n'est pas incluse dans une déclaration `animation`, la valeur de la composante est définie sur la valeur initiale de la composante.

### `animation-name`

Le composant `<animation-name>` de chaque animation correspond au nom de l'animation, qui peut être `none`, un {{CSSxRef("&lt;custom-ident&gt;")}}, ou un {{CSSxRef("&lt;string&gt;")}}. La valeur initiale de `animation-name` est `none`, ce qui signifie que si aucune valeur `animation-name` n'est déclarée dans la propriété raccourcie `animation`, aucune animation n'est appliquée à aucune des propriétés.

L'ordre des autres valeurs dans une définition d'animation est important pour distinguer une valeur {{CSSxRef("animation-name")}} des autres valeurs. Si une valeur dans la notation raccourcie `animation` peut être analysée comme une valeur pour une propriété d'animation autre que `animation-name`, alors la valeur est appliquée d'abord à cette propriété et non à `animation-name`. Pour cette raison, il est recommandé de définir une valeur pour `animation-name` comme dernière valeur d'une liste lors de l'utilisation de la notation raccourcie `animation`&nbsp;; cela reste vrai même lorsque vous définissez plusieurs animations séparées par des virgules en utilisant la notation raccourcie `animation`.

### Valeurs temporelles

Chaque animation peut inclure zéro, une ou deux occurrences de la valeur {{CSSxRef("&lt;time&gt;")}}. L'ordre des valeurs temporelles dans chaque définition d'animation est important&nbsp;: la première valeur pouvant être analysée comme une {{CSSxRef("&lt;time&gt;")}} est affectée à {{CSSxRef("animation-duration")}}, et la seconde est affectée à {{CSSxRef("animation-delay")}}.

Si aucune valeur `animation-duration` n'est définie dans la propriété raccourcie `animation`, la durée prend la valeur par défaut `0s`. Dans ce cas, l'animation a quand même lieu (les évènements [`animationStart`](/fr/docs/Web/API/Element/animationstart_event) et [`animationEnd`](/fr/docs/Web/API/Element/animationend_event) sont déclenchés), mais aucune animation n'est visible pour l'utilisateur·ice.

### `animation-timeline`

Si aucune `<animation-timeline>` n'est incluse dans la notation raccourcie `animation`, la déclaration raccourcie réinitialise toutes les valeurs `animation-timeline` précédemment déclarées à `auto`, ce qui définit la chronologie sur le {{DOMxRef("documentTimeline")}} par défaut.

Si une `<animation-timeline>` est incluse, mais que l'agent utilisateur ne prend pas en charge les valeurs `<animation-timeline>` dans la notation raccourcie, la déclaration entière de `animation` est invalide et est ignorée. Pour cette raison, lors de la création [d'animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), vous devez déclarer la propriété `animation-timeline` après avoir déclaré toute notation raccourcie `animation` pour qu'elle prenne effet.

D'une autre manière, la chronologie d'animation (`<animation-timeline>`) peut être définie dans la notation raccourcie `animation` au sein d'un bloc CSS {{CSSxRef("@supports")}}, par exemple&nbsp;:

```css
@supports (animation: view()) {
  /* CSS pour les navigateurs prennant en charge la définition de <animation-timeline> dans la notation raccourcie `animation` */
}
```

### `animation-fill-mode` et nouveaux contextes d'empilement

Dans le cas de la valeur [`forwards`](/fr/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) pour `animation-fill-mode`, les propriétés animées se comportent comme si elles étaient incluses dans une propriété {{CSSxRef("will-change")}}. Si un nouveau contexte d'empilement est créé pendant l'animation, l'élément cible conserve ce contexte d'empilement après la fin de l'animation.

## Accessibilité

Les animations qui clignotent ou scintillent sont problématiques, notamment pour les personnes souffrant de troubles cognitifs comme le trouble du déficit de l'attention avec ou sans hyperactivité (TDAH). De plus, certains types de mouvements peuvent déclencher des troubles vestibulaires, des crises d'épilepsie, des migraines ou une sensibilité scotopique.

Veillez à fournir un mécanisme permettant d'interrompre ou de désactiver l'animation ainsi qu'à utiliser [la requête `@media` de réduction des animations](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) pour offrir une expérience complémentaire aux utilisateur·ice·s qui ont exprimé une préférence pour la réduction des animations.

- [Concevoir des animations web plus sûres pour la sensibilité au mouvement <sup>(angl.)</sup>](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) sur A List Apart (2015)
- [Introduction à la requête média pour la réduction des animations <sup>(angl.)</sup>](https://css-tricks.com/introduction-reduced-motion-media-query/) sur CSS-Tricks (2017)
- [Conception réactive pour le mouvement <sup>(angl.)</sup>](https://webkit.org/blog/7551/responsive-design-for-motion/) sur WebKit (2017)
- [Explications WCAG sur MDN, explications de la règle 2.2 des WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.2_—_temps_suffisant_donner_aux_utilisateurs_et_utilisatrices_assez_de_temps_pour_lire_et_utiliser_le_contenu)
- [Comprendre le critère de succès 2.2.2&nbsp;: Pause, Arrêt, Cacher du WCAG | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) sur W3C (2026)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

> [!NOTE]
> Il est déconseillé d'animer les propriétés du [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model), car cela entraîne un recalcul de la mise en page et des repeints. L'animation de toute propriété du modèle de boîte est intrinsèquement coûteuse en ressources processeur&nbsp;; il est préférable d'animer la propriété [transform](/fr/docs/Web/CSS/Reference/Properties/transform).

### Utilisation simple : Un lever de soleil

Dans cet exemple, nous démontrons l'utilisation de base de la notation raccourcie `animation` en animant un soleil jaune à travers un ciel bleu clair. Le soleil s'élève jusqu'au centre de la zone d'affichage puis disparaît hors de vue.

#### HTML

Nous incluons un seul élément {{HTMLElement("div")}} pour représenter notre soleil.

```html
<div class="soleil"></div>
```

#### CSS

Nous commençons par créer le soleil et le ciel. Le ciel est la racine ({{CSSxRef(":root")}}) du document HTML. Nous masquons tout contenu en dehors de la zone d'affichage, ce qui, dans notre cas, est toute partie du soleil sous l'horizon, en définissant la propriété {{CSSxRef("overflow")}} sur `hidden`. Nous utilisons également la propriété {{CSSxRef("justify-content")}} pour centrer le soleil dans l'arrière-plan. Nous rendons le soleil jaune, déclarons sa hauteur ({{CSSxRef("height")}}) comme étant la hauteur de la zone d'affichage (`100vh`), et définissons sa largeur égale à sa hauteur en définissant la propriété {{CSSxRef("aspect-ratio")}} sur `1`. Nous transformons le `<div>` carré en cercle en utilisant la propriété {{CSSxRef("border-radius")}}.

```css
:root {
  overflow: hidden; /* masque toute partie du soleil sous l'horizon */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* centre le soleil dans l'arrière-plan */
}

.soleil {
  background-color: yellow;
  border-radius: 50%; /* crée un arrière-plan circulaire */
  height: 100vh; /* donne au soleil la taille de la zone d'affichage */
  aspect-ratio: 1;
  animation: 4s linear 0s infinite alternate soleil-levant;
}

@keyframes soleil-levant {
  from {
    /* pousse le soleil en dessous de la zone d'affichage */
    transform: translateY(110vh);
  }
  to {
    /* ramène le soleil à sa position par défaut */
    transform: translateY(0);
  }
}
```

La dernière étape consiste à appliquer l'animation&nbsp;! Nous utilisons la propriété raccourcie `animation` pour appliquer l'animation par images clés `soleil-levant` au `<div>` `.soleil`. L'animation est définie pour se jouer indéfiniment, chaque itération durant 4 secondes&nbsp;; la direction de l'animation alterne à chaque itération&nbsp;:

```css
.soleil {
  animation: 4s linear 0s infinite alternate soleil-levant;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple : Un lever de soleil")}}

### Appliquer plusieurs animations

Cet exemple démontre l'application de plusieurs animations à un seul élément. En s'appuyant sur l'exemple précédent, avec un soleil qui se lève et se couche sur un fond bleu clair, nous allons ici faire tourner progressivement le soleil à travers un arc-en-ciel de couleurs. Le rythme de la position et de la couleur du soleil est indépendant.

```html hidden
<div class="soleil"></div>
```

```css hidden
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.soleil {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
}

@keyframes soleil-levant {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

Nous incluons le même HTML et CSS que dans l'exemple précédent, et ajoutons un second ensemble de `@keyframes` pour appliquer un filtre ({{CSSxRef("filter")}}) qui fait tourner la teinte à travers toutes les valeurs possibles en utilisant la fonction de filtre {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}&nbsp;:

```css
@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

Nous appliquons ensuite les deux animations à notre soleil. Plusieurs animations sont séparées par des virgules, et les paramètres de chaque animation sont définis indépendamment&nbsp;:

```css
.soleil {
  animation:
    4s linear 0s infinite alternate soleil-levant,
    24s linear 0s infinite psychedelic;
}
```

#### Résultats

{{EmbedLiveSample("Appliquer plusieurs animations")}}

### Enchaîner plusieurs animations

Cet exemple démontre ce qui se passe lorsque plusieurs animations définissent des valeurs pour la même propriété. Cet exemple s'appuie sur l'exemple [d'utilisation simple](#utilisation_simple_un_lever_de_soleil), avec deux animations appliquées qui définissent toutes deux une valeur pour la propriété {{CSSxRef("transform")}}.

```html hidden
<div class="soleil"></div>
```

```css hidden
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.soleil {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
}
```

Nous utilisons le même HTML et CSS que dans le premier exemple, y compris l'animation `soleil-levant` originale, et une deuxième animation nommée `rebond`. Les deux animations déclarent des valeurs pour la même propriété&nbsp;:

```css
@keyframes soleil-levant {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes rebond {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

Nous appliquons ensuite les deux animations à notre soleil. Lorsque deux animations appliquent des valeurs différentes à la même propriété, les animations déclarées plus tard dans la cascade remplacent les animations déclarées précédemment. Dans ce cas, la valeur `transform` de l'animation `rebond` «&nbsp;gagne&nbsp;» la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction#css_animations_and_the_cascade) et remplace la transformation définie par `soleil-levant`, donc le soleil ne se déplace que horizontalement.

```css
.soleil {
  animation:
    4s linear 0s infinite alternate soleil-levant,
    4s linear 0s infinite alternate rebond;
}
```

#### Résultats

{{EmbedLiveSample("Enchaîner plusieurs animations")}}

Le soleil rebondit entre les côtés gauche et droit de la fenêtre. Le soleil reste dans la fenêtre même si l'animation `soleil-levant` est définie. La propriété `transform` de l'animation `soleil-levant` est remplacée par l'animation `rebond`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
