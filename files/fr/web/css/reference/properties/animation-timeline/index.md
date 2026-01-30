---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`animation-timeline`** définit la chronologie utilisée pour contrôler la progression d'une animation CSS.

## Syntaxe

```css
/* Mots-clés */
animation-timeline: none;
animation-timeline: auto;

/* Chronologie nommée */
animation-timeline: --timeline_name;

/* Chronologie de progression de défilement anonyme */
animation-timeline: scroll();
animation-timeline: scroll(x root);

/* Chronologie de progression de vue anonyme */
animation-timeline: view();
animation-timeline: view(inline);
animation-timeline: view(x 200px auto);

/* Valeurs multiples */
animation-timeline: --progress-bar-timeline, --carousel-timeline;
animation-timeline: auto, view(20% 80%), none, scroll(inline nearest);

/* Valeurs globales */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Valeurs

La propriété `animation-timeline` se définit comme une ou plusieurs valeurs séparées par des virgules, chacune pouvant être l'une des suivantes&nbsp;:

- `none`
  - : L'animation n'est associée à aucune chronologie et aucune animation n'est exécutée.

- `auto`
  - : La chronologie de l'animation est l'objet {{DOMxRef("DocumentTimeline")}} par défaut du document. C'est la valeur par défaut.

- {{CSSxRef("animation-timeline/scroll", "scroll()")}}
  - : Définit l'élément racine, le défileur le plus proche ou l'élément lui-même comme une chronologie de progression de défilement anonyme, et éventuellement la direction de défilement du défileur.

- {{CSSxRef("animation-timeline/view", "view()")}}
  - : Définit le conteneur de défilement ancêtre le plus proche comme une chronologie de progression de vue anonyme, avec la possibilité d'écraser la direction d'axe `baseline` par défaut et les retraits de début et de fin `auto`.

- `<dashed-ident>`
  - : Le nom d'une chronologie pilotée par le défilement ou de progression de vue, tel que défini par la propriété {{CSSxRef('scroll-timeline-name')}} ou {{CSSxRef('view-timeline-name')}} du conteneur de défilement (ou la propriété raccourcie {{CSSxRef('scroll-timeline')}} ou {{CSSxRef('view-timeline')}}).

## Description

La chronologie par défaut d'une animation par étapes CSS est la chronologie {{DOMxRef("DocumentTimeline")}}. La propriété `animation-timeline` peut être utilisée pour définir une ligne de temps nommée ou anonyme pour la progression du défilement ou de l'affichage. Elle peut également être utilisée pour définir explicitement la ligne temporelle par défaut du document afin de contrôler la progression de l'animation d'un élément ou pour ne pas avoir de ligne temporelle du tout, auquel cas l'élément ne s'anime pas.

Les types de chronologies suivants peuvent être définis via `animation-timeline`&nbsp;:

- {{DOMxRef("DocumentTimeline")}}
  - : La chronologie par défaut du document, qui progresse en fonction du temps écoulé depuis que le document a été chargé pour la première fois dans le navigateur. C'est la ligne de temps traditionnellement associée aux animations CSS et elle est sélectionnée avec la valeur `auto`, ou en ne définissant pas de valeur `animation-timeline` du tout, car c'est la valeur par défaut.
- [Chronologie de la progression du défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologies_de_progression_du_défilement)
  - : La progression de l'animation se fait par le défilement horizontal ou vertical d'un élément défilable, ou _défileur_. L'élément qui fournit la ligne temporelle de progression du défilement peut être défini de deux manières&nbsp;:
    - [Chronologie de la progression du défilement nommé](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_du_défilement_nommé)
      - : Le défileur est explicitement nommé en définissant la propriété {{CSSxRef("scroll-timeline-name")}} (ou la propriété raccourcie {{CSSxRef("scroll-timeline")}}) sur un {{CSSxRef("dashed-ident")}}&nbsp;; ce nom `<dashed-ident>` est ensuite défini comme valeur de la propriété `animation-timeline`.
    - [Chronologie de la progression du défilement anonyme](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_du_défilement_anonyme)
      - : La propriété `animation-timeline` de l'élément à animer est définie sur la fonction {{CSSxRef("animation-timeline/scroll", "scroll()")}}. Les deux paramètres optionnels de la fonction définissent le défileur fournissant la chronologie de progression du défilement et l'axe de défilement à utiliser.
- [Chronologie de la progression de la vue](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologies_de_progression_de_la_vue)
  - : Une animation par étapes progresse en fonction du changement de visibilité d'un élément à l'intérieur d'un défileur&nbsp;; cet élément est appelé le _sujet_. Par défaut, la chronologie est à `0%` lorsque l'élément devient visible pour la première fois à un bord du défileur, et est à `100%` lorsque son bord de fin sort du bord opposé du défileur. Une chronologie de progression de vue peut être spécifiée de deux manières&nbsp;:
    - [Chronologie de la progression de la vue nommée](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée)
      - : Le sujet est explicitement nommé en définissant la propriété {{CSSxRef("view-timeline-name")}} (ou la propriété raccourcie {{CSSxRef("view-timeline")}}) sur un `<dashed-ident>`. Lorsque vous définissez la propriété `animation-timeline` de l'élément à animer sur ce `<dashed-ident>`, la visibilité du sujet contrôle la progression de l'animation de l'élément. Notez que l'élément à animer ne doit pas être le même que le sujet.
    - [Chronologie de la progression de la vue anonyme](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_anonyme)
      - : La propriété `animation-timeline` de l'élément à animer est définie sur une fonction {{CSSxRef("animation-timeline/view", "view()")}}, ce qui provoque son animation en fonction de sa visibilité dans la zone de défilement de son défileur parent le plus proche.
- Pas de chronologie
  - : Toutes les chronologies d'animation peuvent être supprimées en sélectionnant une valeur de `none`. Lorsque `animation-timeline: none` est défini, aucune animation ne se produira car il n'y a pas de chronologie à suivre.

La propriété `animation-timeline` est incluse dans la propriété raccourcie {{CSSxRef("animation")}} en tant que valeur de réinitialisation uniquement. Cela signifie que l'inclusion de `animation` réinitialise une valeur `animation-timeline` précédemment déclarée à `auto`. Comme ce composant de la propriété raccourcie est uniquement une réinitialisation, une valeur spécifique ne peut pas être définie via `animation`. Lors de la création d'[animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines), vous devez déclarer `animation-timeline` après avoir déclaré toute propriété raccourcie `animation` pour qu'elle prenne effet.

Si vous définissez plusieurs valeurs séparées par des virgules, chaque valeur de `animation-timeline` est appliquée à une seule animation dans l'ordre dans lequel les valeurs {{CSSxRef("animation-name")}} apparaissent. Si le nombre de valeurs dans la déclaration `animation-timeline` est supérieur au nombre de valeurs `animation-name`, les valeurs de chronologie excédentaires sont ignorées. S'il y a moins de valeurs `animation-timeline` que de valeurs `animation-name`, les valeurs `animation-timeline` sont répétées, dans l'ordre, jusqu'à ce que chaque `animation-name` ait une chronologie associée.

Si deux ou plusieurs lignes de temps partagent le même nom `<dashed-ident>` et la même spécificité, la dernière déclarée dans la cascade sera utilisée. Si aucune ligne de temps correspondant à un nom inclus dans la `animation-timeline` n'est trouvée, la `animation-name` associée à cette valeur n'est pas associée à une ligne de temps.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple montre l'utilisation de base de la propriété `animation-timeline`, ainsi que les valeurs `none`, `auto` et la valeur par défaut (`auto`).

#### HTML

Nous avons un {{HTMLElement("article")}} avec trois enfants {{HTMLElement("section")}}. Chaque `<section>` possède un `id` unique et un enfant {{HTMLElement("div")}}.

```html
<article>
  <section id="none">
    <div></div>
  </section>
  <section id="auto">
    <div></div>
  </section>
  <section id="default">
    <div></div>
  </section>
</article>
```

#### CSS

Nous utilisons la [mise en page flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) pour placer les trois sections côte à côte. Nous utilisons le [contenu généré](/fr/docs/Web/CSS/Guides/Generated_content) pour afficher l'`id`. Nous appliquons le même style à tous les éléments, en appliquant l'animation `rotate` de {{CSSxRef("@keyframes")}} qui fait tourner l'élément d'un tour complet. Avec la propriété raccourcie {{CSSxRef("animation")}}, nous déclarons des itérations infinies de 2 secondes, progressant linéairement de l'animation `rotate`, en alternant la direction de chaque animation.

```css
article {
  display: flex;
  gap: 10px;
  text-align: center;
}
section {
  background-color: beige;
  padding: 20px;
}
section::after {
  content: attr(id);
  display: block;
}
div {
  height: 100px;
  width: 100px;
  background-color: magenta;
  animation: rotate 2s infinite alternate linear;
}
@keyframes rotate {
  to {
    rotate: 1turn;
  }
}
```

La seule différence est la déclaration `animation-timeline` (ou son absence dans le cas de la valeur par défaut) pour chaque `<div>`.

```css
#none div {
  animation-timeline: none;
}
#auto div {
  animation-timeline: auto;
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: none) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `animation-timeline`.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

Comme la propriété `animation-timeline` est incluse dans la propriété raccourcie {{CSSxRef("animation")}} uniquement comme valeur de réinitialisation, `animation-timeline` doit être déclarée après la propriété raccourcie `animation`, ou être appliquée avec une spécificité supérieure à celle de la propriété raccourcie, pour être prise en compte.

#### Résultats

{{EmbedLiveSample("Utilisation simple", "100%", 170)}}

Notez que déclarer une valeur `auto` a le même effet que de laisser `animation-timeline` à sa valeur par défaut, et que `none` retire toutes les chronologies de l'élément, donc aucune animation dans le cas de `none`.

### Définir une chronologie de progression de défilement nommée

Dans cet exemple, la chronologie d'animation est définie sur une chronologie de progression de défilement horizontale.

#### HTML

Notre conteneur comprend trois éléments extensibles qui seront suffisamment larges pour garantir que notre conteneur soit une zone de défilement. Celui du milieu contient une forme que nous allons animer.

```html live-sample___named_scroll live-sample___anonymous_scroll
<div id="container">
  <div class="stretcher"></div>
  <div class="stretcher">
    <div id="shape"></div>
  </div>
  <div class="stretcher"></div>
</div>
```

#### CSS

Nous définissons le conteneur comme un conteneur flexible, en définissant une largeur ({{CSSxRef("width")}}) sur le conteneur qui correspond à la moitié de la largeur totale de ses enfants flexibles. L'ajout d'une valeur {{CSSxRef("overflow-x")}} de `scroll` lui donne une barre de défilement horizontale.

Notre chronologie de progression de défilement, définie à l'aide des propriétés {{CSSxRef("scroll-timeline-name")}} et {{CSSxRef("scroll-timeline-axis")}}, est nommée `--square-timeline`. Cette chronologie est appliquée à notre élément `#square` en utilisant `animation-timeline: --square-timeline`.

```css live-sample___named_scroll live-sample___anonymous_scroll
#container {
  display: flex;
  width: 300px;
  border: 1px solid;

  overflow-x: scroll;
  scroll-timeline-axis: inline;
  scroll-timeline-name: --square-timeline;
}

.stretcher {
  flex: 0 0 200px;
}
```

Le CSS ci-dessous définit un carré qui tourne dans des directions alternées selon la chronologie fournie par la propriété `animation-timeline`, qui est définie sur la chronologie `--square-timeline` nommée ci-dessus. L'animation est configurée pour se produire deux fois, dans des directions alternées, lorsqu'elle traverse la fenêtre d'affichage. Nous avons ajouté des [coins crantés](/fr/docs/Web/CSS/Reference/Properties/corner-shape) pour rendre l'effet d'animation plus visible.

```css live-sample___named_scroll live-sample___anonymous_scroll
#shape {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  corner-shape: notch;

  animation: rotateAnimation 1ms linear 2 alternate;
  animation-timeline: --square-timeline;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```css hidden live-sample___named_scroll live-sample___named_view
@layer no-support {
  @supports not (animation-timeline: --square-timeline) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les chronologies d'animation nommées.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Résultat

Faites défiler pour voir l'élément animé.

{{EmbedLiveSample("named_scroll", "100%", 150)}}

### Définir une chronologie de progression de défilement anonyme

Cet exemple étend le précédent, en appliquant une chronologie de progression de défilement anonyme à l'aide de la fonction `scroll()`.

#### CSS

Nous incluons tout le CSS de l'exemple précédent, en ne définissant que la propriété `animation-timeline` pour remplacer la valeur de l'exemple précédent. La chronologie est fournie par la valeur `scroll(inline nearest)`, qui sélectionne la barre de défilement dans la direction en ligne de l'ancêtre le plus proche qui possède des barres de défilement. Il s'agit de la barre de défilement verticale de l'élément `#container`, car les éléments `.stretcher` n'ont pas de contenu débordant et ne sont donc pas des conteneurs de défilement.

```css live-sample___anonymous_scroll
#shape {
  animation-timeline: scroll(inline nearest);
}
```

```css hidden live-sample___anonymous_scroll
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la fonction scroll().";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Résultat

Faites défiler pour voir l'élément carré animé.

{{EmbedLiveSample("anonymous_scroll", "100%", 150)}}

### Définir une chronologie de progression de vue nommée

Dans cet exemple, nous montrons comment créer et appliquer une chronologie de progression de vue nommée. Deux éléments seront animés, avec des éléments différents servant de conteneur de défilement.

#### HTML

```html-nolint hidden live-sample___named_view
<main class="scroller">
  <div class="container">
    <h1>Itinéraire</h1>
    <h2>Du Lincoln Memorial au Martin Luther King, Jr. Memorial</h2>
    <ol>
      <li>Se diriger vers le sud sur Lincoln Memorial Circle</li>
      <li>Tourner à droite vers Independence Ave</li>
      <li>Tourner à gauche sur Independence Ave</li>
      <li>Tourner à droite sur West Basin Dr</li>
      <li>Levez les yeux en arrivant au 64 Independence Ave&nbsp;!</li>
    </ol>
    <section>
```

Notre HTML comprend beaucoup de texte dans un conteneur à l'intérieur d'une zone de défilement, que nous avons masqué pour plus de clarté. Au milieu de ce mur de texte, nous incluons deux éléments `<div>` que nous allons animer en fonction de la visibilité de l'élément lui-même dans le premier cas et de la visibilité de son parent dans le second cas&nbsp;:

```html live-sample___named_view
<div class="animated-element self">SELF</div>
<div class="animated-element parent">PARENT</div>
```

```html-nolint hidden live-sample___named_view
</section>
<h2>Martin Luther King, Jr. Memorial to Lincoln Memorial</h2>
<ol>
  <li>Se diriger vers le nord en direction de Independence Ave SW</li
  ><li>Tourner à gauche sur Independence Ave</li
  ><li>Tourner à droite vers le mémorial des vétérans de la guerre de Corée</li
  ><li>Prendre une photo du mémorial en le dépassant.</li
  ><li>Se diriger vers le nord sur Lincoln Memorial Circle</li
  ><li>Levez les yeux. Vous ne pouvez pas le manquer&nbsp;!</li>
</ol>
  </div>
</main>
```

#### CSS

Nous créons une animation à images clés qui modifie l'opacité et l'échelle de l'élément, et nous l'appliquons aux deux éléments animés&nbsp;:

```css live-sample___named_view
@keyframes animation-effect {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}

.animated-element {
  animation: animation-effect 1ms linear;
}
```

L'élément `self` est explicitement nommé comme son propre conteneur de défilement en définissant la propriété `view-timeline-name` sur un `<dashed-ident>` et en définissant également ce nom `<dashed-ident>` comme valeur de la propriété `animation-timeline`. Dans le cas de `parent`, nous définissons le `container` comme conteneur de défilement pour l'élément animé&nbsp;:

```css live-sample___named_view
.self {
  view-timeline-name: --self-scroller-element;
  animation-timeline: --self-scroller-element;
}
.container {
  view-timeline-name: --parent-scroller-element;
}
.parent {
  animation-timeline: --parent-scroller-element;
}
```

Des déclarations CSS supplémentaires ont été masquées pour plus de clarté.

```css hidden live-sample___named_view
@layer setup {
  section {
    display: flex;
    gap: 10px;
  }
  main {
    width: 400px;
    padding: 1em;
    height: 300px;
    overflow: scroll;
    border: 1px solid;
    background-color: beige;
    font-family: sans-serif;
  }

  li {
    margin-bottom: 0.75lh;
  }

  .animated-element {
    height: 200px;
    width: calc(100% - 2em);
    margin: auto;
    background-color: forestgreen;
    background-image:
      repeating-linear-gradient(37deg, transparent 0 52px, beige 52px 57px),
      repeating-linear-gradient(94deg, transparent 0 52px, beige 52px 57px);
    border: 1px solid;
    font-size: 3em;
    place-content: center;
  }
}
```

#### Résultat

Faites défiler le conteneur pour voir les deux éléments s'animer.

{{EmbedLiveSample("named_view", "100%", 350)}}

Notez comment la visibilité de l'élément `self` contrôle sa propre animation. Dans ce cas, l'élément est à l'image clé `0%` lorsque le bord supérieur entre dans la zone visible, ou la partie visible du conteneur de défilement, et n'atteint l'image clé `100%` que lorsque le bord inférieur quitte la zone visible.

L'élément `parent` ne devient visible que lorsque ce parent est visible, ce qui signifie que lorsqu'il entre dans la vue, il est déjà à environ `25%` de l'animation. Il n'est qu'à environ `75%` de son animation lorsqu'il quitte le haut de la zone visible.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés d'animation {{CSSxRef("animation")}}, {{CSSxRef("animation-composition")}}, {{CSSxRef("animation-delay")}}, {{CSSxRef("animation-direction")}}, {{CSSxRef("animation-duration")}}, {{CSSxRef("animation-fill-mode")}}, {{CSSxRef("animation-iteration-count")}}, {{CSSxRef("animation-name")}}, {{CSSxRef("animation-play-state")}}, {{CSSxRef("animation-timing-function")}}
- Les propriétés de défilement {{CSSxRef("scroll-timeline-name")}}, {{CSSxRef("scroll-timeline-axis")}}, {{CSSxRef("scroll-timeline")}}
- Les propriétés de chronologie {{CSSxRef("view-timeline-name")}}, {{CSSxRef("view-timeline-axis")}}, {{CSSxRef("view-timeline")}}, {{CSSxRef("view-timeline-inset")}}
- L'interface API {{DOMxRef("AnimationTimeline")}}
- Le guide [pour utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- Le module [des animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
