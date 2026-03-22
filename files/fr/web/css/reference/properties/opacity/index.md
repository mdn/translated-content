---
title: opacity
slug: Web/CSS/Reference/Properties/opacity
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`opacity`** définit la transparence d'un élément. Autrement dit, elle permet de définir le degré de visibilité de l'arrière-plan sur lequel est placé l'élément.

{{InteractiveExample("Démonstration CSS&nbsp;: opacity")}}

```css interactive-example-choice
opacity: 0;
```

```css interactive-example-choice
opacity: 0.33;
```

```css interactive-example-choice
opacity: 1;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Londres. Le trimestre de la Saint-Michel vient de s'achever, et le Lord
    Chancelier siège à Lincoln's Inn Hall. Le temps de novembre est implacable.
    Il y a tant de boue dans les rues qu'on dirait que les eaux viennent à peine
    de se retirer de la surface de la terre, et il ne serait pas étonnant de
    croiser un mégalosaure, d'une quinzaine de mètres de long, se dandinant
    comme un lézard éléphantesque en haut de Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  background-color: #963770;
  color: white;
  padding: 1em;
}
```

## Syntaxe

```css
opacity: 0.9;
opacity: 90%;

/* Valeurs globales */
opacity: inherit;
opacity: initial;
opacity: revert;
opacity: revert-layer;
opacity: unset;
```

### Valeurs

- `<alpha-value>`
  - : Un nombre ({{CSSxRef("&lt;number&gt;")}}) dans l'intervalle `0.0` à `1.0`, inclus, ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) dans l'intervalle `0%` à `100%`, inclus, représentant l'opacité du canal (c'est-à-dire la valeur de son canal alpha). Toute valeur en dehors de l'intervalle, bien que valide, est ramenée à la limite la plus proche de l'intervalle.

    | Valeur                                                                                   | Signification                                                                                          |
    | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
    | `0`                                                                                      | L'élément est complètement transparent (c'est-à-dire invisible).                                       |
    | Toute valeur de type {{CSSxRef("&lt;number&gt;")}} strictement comprise entre `0` et `1` | L'élément est partiellement transparent (c'est-à-dire que le contenu derrière l'élément peut être vu). |
    | `1` (valeur par défaut)                                                                  | L'élément est complètement opaque (visuellement solide).                                               |

## Description

`opacity` s'applique à l'élément dans son ensemble, y compris à son contenu, même si la valeur n'est pas héritée par les éléments enfants. Ainsi, l'élément et ses enfants ont tous la même opacité par rapport à l'arrière-plan de l'élément, même s'ils ont des opacités différentes les uns par rapport aux autres.

Pour changer uniquement l'opacité d'un arrière-plan, utilisez la propriété {{CSSxRef("background")}} avec une [valeur de couleur](/fr/docs/Web/CSS/Reference/Values/color_value) qui permet un canal alpha. Par exemple&nbsp;:

```css
background: rgb(0 0 0 / 40%);
```

Lorsque la valeur de `opacity` est définie sur `0`, l'élément et tous ses enfants apparaissent invisibles, mais ils font toujours partie du DOM. Cela signifie qu'ils enregistrent toujours les [évènements de pointeur](/fr/docs/Web/API/Pointer_events) et, si les éléments font partie d'un ordre de tabulation, ils peuvent recevoir la sélection. Pour une bonne utilisabilité, assurez-vous de rendre ces éléments visibles lorsqu'ils reçoivent des interactions utilisateur ou utilisez la propriété CSS {{CSSxRef("pointer-events")}} pour désactiver les évènements de pointeur et retirer l'élément de l'ordre de tabulation en le désactivant avec l'attribut `disabled` ou en définissant [`tab-index="-1"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) pour les éléments interactifs non liés aux formulaires.

L'utilisation de `opacity` avec une valeur autre que `1` place l'élément dans un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context).

L'opacité seule ne doit pas être utilisée pour fournir des informations aux lecteurs d'écran. Utilisez l'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden), CSS {{CSSxRef("visibility")}}, ou les propriétés de style CSS {{CSSxRef("display")}}. Il est préférable d'éviter d'utiliser l'attribut [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden), mais si l'élément est masqué avec l'opacité, alors cachez-le également aux lecteurs d'écran.

### Transition d'opacité

Lors de la [transition](/fr/docs/Web/CSS/Guides/Transitions) de l'opacité des éléments lorsque vous les ajoutez à la page alors que le contenu était auparavant masqué avec [`visibility: hidden`](/fr/docs/Web/CSS/Reference/Properties/visibility#hidden), [`display: none`](/fr/docs/Web/CSS/Reference/Properties/display#none), ou [`content-visibility: hidden`](/fr/docs/Web/CSS/Reference/Properties/content-visibility#hidden), vous devez inclure à la fois un {{CSSxRef("@starting-style")}} et [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete)&nbsp;:

```css
.card {
  transition:
    opacity 5s,
    display 5s;
  background-color: orange;

  transition-behavior: allow-discrete;
  @starting-style {
    opacity: 0;
  }
}

.card.hidden {
  display: none;
  opacity: 0;
}
```

Pour activer les transitions de premier style, des règles `@starting-style` sont nécessaires. Dans le code ci-dessus, définir `opacity: 0` dans `@starting-style` fournit un point de départ pour la transition lorsque l'élément reçoit sa mise à jour de style initiale. Pour plus de détails, voir {{CSSxRef("@starting-style")}}.

La définition de `transition-behavior: allow-discrete` est nécessaire pour effectuer la transition vers `display: none`. Voir la propriété {{CSSxRef("transition-behavior")}} pour plus de détails.

## Accessibilité

Si l'opacité du texte est ajustée, il est important de s'assurer que le ratio de contraste entre la couleur du texte et l'arrière-plan sur lequel le texte est placé est suffisamment élevé pour que les personnes ayant des déficiences visuelles puissent lire le contenu de la page.

Le ratio de contraste des couleurs est déterminé en comparant la luminosité des valeurs de couleur du texte ajustées par l'opacité et de l'arrière-plan. Pour répondre aux [Directives pour l'accessibilité des contenus Web (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/) actuelles, un ratio de 4,5:1 est requis pour le contenu textuel et de 3:1 pour les textes plus grands tels que les titres. Un texte de grande taille est défini comme ayant une taille de 18,66px et [gras](/fr/docs/Web/CSS/Reference/Properties/font-weight) ou plus, ou 24px ou plus.

- [WebAIM&nbsp;: Vérificateur de contraste des couleurs <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Comprendre le WCAG sur MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.3 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Divers systèmes d'exploitation offrent une préférence pour réduire la transparence. Pour définir une `opacity` en fonction des préférences de transparence des systèmes d'exploitation de l'utilisateur·ice, utilisez la requête média [`prefers-reduced-transparency`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'opacité

L'exemple suivant montre comment la propriété `opacity` modifie l'opacité de l'ensemble de l'élément et de son contenu, rendant ainsi le texte très difficile à lire.

#### HTML

```html
<div class="light">Vous pouvez à peine voir ceci.</div>
<div class="medium">Ceci est plus facile à voir.</div>
<div class="heavy">Ceci est très facile à voir.</div>
```

#### CSS

```css
div {
  background-color: yellow;
  font-weight: bold;
  font-size: 130%;
}
.light {
  opacity: 0.2; /* À peine voir le texte sur le fond */
}
.medium {
  opacity: 0.5; /* Voir le texte plus clairement sur le fond */
}
.heavy {
  opacity: 0.9; /* Voir le texte très clairement sur le fond */
}
```

#### Résultat

{{EmbedLiveSample("Définir l'opacité", 640, 105)}}

### Définir l'opacité au survol

Dans l'exemple suivant, l'opacité est modifiée au survol, de sorte que l'image de fond rayée de l'élément parent apparaît à travers l'image.

#### HTML

```html
<div class="wrapper">
  <img
    src="/shared-assets/images/examples/dino.svg"
    alt="MDN Dino"
    width="128"
    height="146"
    class="opacity" />
</div>
```

#### CSS

```css
img.opacity {
  opacity: 1;
}

img.opacity:hover {
  opacity: 0.5;
}

.wrapper {
  width: 200px;
  height: 160px;
  background-color: #f03cc3;
  background-image: linear-gradient(
    90deg,
    transparent 50%,
    rgb(255 255 255 / 50%) 50%
  );
  background-size: 20px 20px;
}
```

#### Résultat

{{EmbedLiveSample("Définir l'opacité au survol", 150, 200)}}

### Mettre en forme en fonction des préférences de l'utilisateur·ice

Pour mettre en forme les éléments en fonction des préférences de transparence des systèmes d'exploitation de l'utilisateur·ice, utilisez la requête média [`prefers-reduced-transparency`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency). L'exemple suivant montre comment utiliser la requête média `prefers-color-scheme` pour définir l'opacité souhaitée en fonction des préférences de l'utilisateur·ice.

```css
.element {
  opacity: 0.5;
}

@media (prefers-reduced-transparency) {
  .element {
    opacity: 1;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La requête média [`prefers-reduced-transparency`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)
- Le module [de couleur CSS](/fr/docs/Web/CSS/Guides/Colors)
- L'attribut SVG {{SVGAttr("opacity")}}
