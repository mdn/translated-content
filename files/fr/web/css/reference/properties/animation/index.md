---
title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 7972cd926c2feb93bfc155d05aadd54786a7f66b
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

L'ordre des autres valeurs dans une définition d'animation est important pour distinguer une valeur {{CSSxRef("animation-name")}} des autres valeurs. Si une valeur dans la notation raccourcie `animation` peut être analysée comme une valeur pour une propriété d'animation autre que `animation-name`, alors la valeur sera appliquée d'abord à cette propriété et non à `animation-name`. Pour cette raison, il est recommandé de définir une valeur pour `animation-name` comme dernière valeur d'une liste lors de l'utilisation de la notation raccourcie `animation`&nbsp;; cela reste vrai même lorsque vous définissez plusieurs animations séparées par des virgules en utilisant la notation raccourcie `animation`.

### Valeurs temporelles

Chaque animation peut inclure zéro, une ou deux occurrences de la valeur {{CSSxRef("&lt;time&gt;")}}. L'ordre des valeurs temporelles dans chaque définition d'animation est important&nbsp;: la première valeur pouvant être analysée comme une {{CSSxRef("&lt;time&gt;")}} est affectée à {{CSSxRef("animation-duration")}}, et la seconde est affectée à {{CSSxRef("animation-delay")}}.

Si aucune valeur `animation-duration` n'est définie dans la propriété raccourcie `animation`, la durée prend la valeur par défaut `0s`. Dans ce cas, l'animation aura quand même lieu (les évènements [`animationStart`](/fr/docs/Web/API/Element/animationstart_event) et [`animationEnd`](/fr/docs/Web/API/Element/animationend_event) seront déclenchés), mais aucune animation ne sera visible pour l'utilisateur·ice.

### animation-timeline

Les implémentations actuelles de `animation` sont en mode réinitialisation uniquement&nbsp;: si aucun `<animation-timeline>` n'est inclus dans la notation raccourcie `animation`, la déclaration raccourcie réinitialisera toutes les valeurs `animation-timeline` précédemment déclarées à `auto`.

Par défaut, `animation-timeline` est le {{DOMxRef("documentTimeline")}}. Si une valeur est incluse, mais que l'agent utilisateur ne prend pas en charge les valeurs `<animation-timeline>` dans la notation raccourcie, la déclaration est invalide et est ignorée.

Cela signifie que, lors de la création [d'animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), vous devez déclarer la propriété `animation-timeline` après avoir déclaré toute notation raccourcie `animation` pour qu'elle prenne effet.

Alternativement, la propriété `animation-timeline` peut être utilisée dans la notation raccourcie `animation` au sein d'un bloc CSS {{CSSxRef("@supports")}}, par exemple&nbsp;:

```css
@supports (animation: view()) {
  /* CSS pour les navigateurs qui prennent en charge la définition de <animation-timeline> dans la notation raccourcie animation */
}
```

### `animation-fill-mode` et nouveaux contextes d'empilement

Dans le cas de la valeur [`forwards`](/fr/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) pour `animation-fill-mode`, les propriétés animées se comportent comme si elles étaient incluses dans une propriété {{CSSxRef("will-change")}}. Si un nouveau contexte d'empilement est créé pendant l'animation, l'élément cible conserve ce contexte d'empilement après la fin de l'animation.

## Accessibilité

Les animations qui clignotent ou scintillent sont problématiques, notamment pour les personnes souffrant de troubles cognitifs comme le trouble du déficit de l'attention avec ou sans hyperactivité (TDAH). De plus, certains types de mouvements peuvent déclencher des troubles vestibulaires, des crises d'épilepsie, des migraines ou une sensibilité scotopique.

Veillez à fournir un mécanisme permettant d'interrompre ou de désactiver l'animation ainsi qu'à utiliser [la requête média pour la préférence de réduction des animations](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) pour offrir une expérience complémentaire aux utilisateur·ice·s qui ont exprimé une préférence pour la réduction des animations.

- [Concevoir des animations web plus sûres pour la sensibilité au mouvement · Article de A List Apart <sup>(angl.)</sup>](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Introduction à la requête média pour la réduction des animations | CSS-Tricks <sup>(angl.)</sup>](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Conception réactive pour le mouvement | WebKit <sup>(angl.)</sup>](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [Explications WCAG sur MDN, explications de la règle 2.2 des WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.2_—_temps_suffisant_donner_aux_utilisateurs_et_utilisatrices_assez_de_temps_pour_lire_et_utiliser_le_contenu)
- [Comprendre le critère de succès 2.2.2 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

> [!NOTE]
> Il est déconseillé d'animer les propriétés du [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model). L'animation de toute propriété du modèle de boîte est intrinsèquement coûteuse en ressources processeur&nbsp;; il est préférable d'animer la propriété [transform](/fr/docs/Web/CSS/Reference/Properties/transform).

### Lever de soleil

Ici, nous animons un soleil jaune à travers un ciel bleu clair. Le soleil s'élève jusqu'au centre de la zone d'affichage puis disparaît hors de vue.

```html
<div class="soleil"></div>
```

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
  aspect-ratio: 1 / 1;
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

{{EmbedLiveSample("Lever de soleil")}}

### Animer plusieurs propriétés

En ajoutant à l'animation du soleil de l'exemple précédent, nous ajoutons une seconde animation qui change la couleur du soleil lorsqu'il s'élève et se couche. Le soleil commence rouge foncé lorsqu'il est sous l'horizon et devient orange vif lorsqu'il atteint le sommet.

```html
<div class="soleil"></div>
```

```css
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
  animation: 4s linear 0s infinite alternate animation-propriete-multiples;
}

/* il est possible d'animer plusieurs propriétés dans une seule animation */
@keyframes animation-propriete-multiples {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* les propriétés désactivées, c'est-à-dire 'filter', reviendront à leurs valeurs par défaut */
  }
}
```

{{EmbedLiveSample("Animer plusieurs propriétés")}}

### Appliquer plusieurs animations

Voici un soleil qui monte et descend sur un fond bleu clair. Le soleil tourne progressivement à travers un arc-en-ciel de couleurs. Le rythme de la position et de la couleur du soleil est indépendant.

```html
<div class="soleil"></div>
```

```css
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
  /* plusieurs animations sont séparées par des virgules, chaque animation a ses paramètres définis indépendamment */
  animation:
    4s linear 0s infinite alternate levee,
    24s linear 0s infinite psychedelic;
}

@keyframes levee {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample("Appliquer plusieurs animations")}}

### Enchaîner plusieurs animations

Voici un soleil jaune sur un fond bleu clair. Le soleil rebondit entre le côté gauche et le côté droit de la zone d'affichage. Le soleil reste dans la zone d'affichage même si une animation de montée est définie. La propriété transform de l'animation de montée est «&nbsp;surchargée&nbsp;» par l'animation de rebond.

```html
<div class="soleil"></div>
```

```css
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
  /*
      les animations déclarées plus tard dans la cascade vont remplacer
      les propriétés des animations déclarées précédemment
    */
  /* rebond « surcharge » la propriété transform définie par montée, ainsi le soleil ne se déplace que horizontalement */
  animation:
    4s linear 0s infinite alternate levee,
    4s linear 0s infinite alternate rebond;
}

@keyframes levee {
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

{{EmbedLiveSample("Enchaîner plusieurs animations")}}

Voir [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using#exemples) pour d'autres exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- L'interface API {{DOMxRef("AnimationEvent")}}
