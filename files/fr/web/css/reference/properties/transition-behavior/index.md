---
title: Propriété CSS `transition-behavior`
short-title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`transition-behavior`** définit si les transitions seront démarrées pour les propriétés dont le comportement d'animation est [discret](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* Valeurs globales */
transition-behavior: inherit;
transition-behavior: initial;
transition-behavior: revert;
transition-behavior: revert-layer;
transition-behavior: unset;
```

### Valeurs

- `allow-discrete`
  - : Les transitions seront démarrées sur l'élément pour les propriétés animées de manière discrète.
- `normal`
  - : Les transitions ne seront _pas_ démarrées sur l'élément pour les propriétés animées de manière discrète.

## Description

La propriété `transition-behavior` n'est pertinente que lorsqu'elle est utilisée en conjonction avec d'autres propriétés de transition, notamment {{CSSxRef("transition-property")}} et {{CSSxRef("transition-duration")}}, car aucune transition ne se produit si aucune propriété n'est animée sur une durée non nulle.

```css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

La valeur `transition-behavior` peut être incluse dans une déclaration raccourcie {{CSSxRef("transition")}}. Lorsqu'elle est incluse dans l'abrégé, en utilisant ou en par défaut toutes les propriétés, la valeur `allow-discrete` n'a aucun impact sur les propriétés animables normales. Le CSS suivant est équivalent aux déclarations en longue forme ci-dessus&nbsp;:

```css
.card {
  transition: all 0.25s;
  transition: all 0.25s allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

Dans l'exemple ci-dessus, nous incluons la propriété `transition` deux fois. La première instance n'inclut pas la valeur `allow-discrete` — cela fournit une compatibilité entre navigateurs, garantissant que les autres propriétés de la carte continuent de se transitionner dans les navigateurs qui ne prennent pas en charge `transition-behavior`.

### Comportement des animations discrètes

Les propriétés animées de manière discrète basculent généralement entre deux valeurs à 50% de l'animation entre les deux.

Il y a cependant une exception, qui se produit lors de l'animation vers ou depuis `display: none` ou `content-visibility: hidden`. Dans ce cas, le navigateur basculera entre les deux valeurs afin que le contenu transitionné soit affiché pendant toute la durée de l'animation.

Par exemple&nbsp;:

- Lors de l'animation de `display` de `none` à `block` (ou une autre valeur `display` visible), la valeur basculera à `block` à `0%` de la durée de l'animation afin qu'elle soit visible pendant toute la durée.
- Lors de l'animation de `display` de `block` (ou une autre valeur `display` visible) à `none`, la valeur basculera à `none` à `100%` de la durée de l'animation afin qu'elle soit visible pendant toute la durée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Transition d'une fenêtre contextuelle

Dans cet exemple, une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) est animée lorsqu'elle [transitionne](/fr/docs/Web/CSS/Guides/Transitions) de l'état caché à l'état affiché et inversement.

#### HTML

Le HTML contient un élément HTML {{HTMLElement("div")}} déclaré comme une fenêtre contextuelle en utilisant l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), et un élément HTML {{HTMLElement("button")}} désigné comme le contrôle d'affichage de la fenêtre contextuelle en utilisant son attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).

```html
<button popovertarget="ma-fenetre-contextuelle">
  Afficher la fenêtre contextuelle
</button>
<div popover="auto" id="ma-fenetre-contextuelle">
  Je suis une fenêtre contextuelle&nbsp;! Je devrais être animée.
</div>
```

#### CSS

```css hidden
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
}
```

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  /* État final de l'animation de sortie */
  opacity: 0;
  transform: scaleX(0);

  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.7s;
  transition-behavior: allow-discrete;
  /* En utilisant la propriété raccourcie transition, nous pourrions écrire :
    transition: 
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    ou même :
    transition: all 0.7s allow-discrete;
  */
}

/* Doit être inclus après la règle précédente [popover]:popover-open 
   pour prendre effet, car la spécificité est la même */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

Les deux propriétés que nous voulons animer sont {{CSSxRef("opacity")}} et {{CSSxRef("transform")}}&nbsp;: nous voulons que la fenêtre contextuelle s'estompe tout en grandissant et en rétrécissant dans la direction horizontale. Nous définissons un état de départ pour ces propriétés sur l'état caché par défaut de l'élément de la fenêtre contextuelle (sélectionné avec `[popover]`), et un état final sur l'état ouvert de la fenêtre contextuelle (sélectionné par la pseudo-classe {{CSSxRef(":popover-open")}}). Nous définissons ensuite une propriété {{CSSxRef("transition")}} pour animer entre les deux.

Parce que l'élément animé est promu au [niveau supérieur](/fr/docs/Glossary/Top_layer) lorsqu'il est affiché et retiré du niveau supérieur lorsqu'il est masqué — ce qui signifie également que son état masqué a {{CSSxRef("display", "display: none")}} défini — les propriétés suivantes sont ajoutées à la liste des éléments transitionnés pour que l'animation fonctionne dans les deux sens. Dans les deux cas, `transition-behavior: allow-discrete` est défini dans le raccourci pour activer l'animation discrète.

- `display`&nbsp;: Requis pour que l'élément animé soit visible (défini sur `display: block`) tout au long de l'animation d'entrée et de sortie. Sans cela, l'animation de sortie ne serait pas visible&nbsp;; en effet, la fenêtre contextuelle disparaîtrait simplement.
- {{CSSxRef("overlay")}}&nbsp;: Requis pour s'assurer que la suppression de l'élément du niveau supérieur est différée jusqu'à ce que l'animation soit terminée. Cela ne fait pas une grande différence pour des animations de base comme celle-ci, mais dans des cas plus complexes, ne pas le faire peut entraîner la suppression trop rapide de l'élément de la superposition, ce qui signifie que l'animation n'est pas fluide ou efficace.

En outre, un état de départ pour l'animation est défini à l'intérieur de la règle {{CSSxRef("@starting-style")}}. Cela est nécessaire pour éviter un comportement inattendu. Par défaut, les transitions ne sont pas déclenchées lors des premières mises à jour de style des éléments, ou lorsque le type `display` passe de `none` à un autre type. `@starting-style` permet de remplacer ce comportement par défaut de manière contrôlée. Sans cela, l'animation d'entrée ne se produirait pas et la fenêtre contextuelle apparaîtrait simplement.

#### Résultat

Le code s'affiche comme suit&nbsp;:

{{EmbedLiveSample("Transition d'une fenêtre contextuelle", "100%", 200)}}

> [!NOTE]
> Parce que les fenêtres contextuelles passent de `display: none` à `display: block` chaque fois qu'elles sont affichées, la fenêtre contextuelle passe de ses styles `@starting-style` à ses styles `[popover]:popover-open` à chaque fois que la transition d'entrée se produit. Lorsque la fenêtre contextuelle se ferme, elle passe de son état `[popover]:popover-open` à l'état `[popover]` par défaut.
>
> Il est possible que la transition de style à l'entrée et à la sortie soit différente dans de tels cas. Voir notre exemple [Démonstration de l'utilisation des styles de départ](/fr/docs/Web/CSS/Reference/At-rules/@starting-style#démonstration_de_lutilisation_des_styles_de_départ) pour une preuve de cela.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("overlay")}}
- La règle {{CSSxRef("@starting-style")}}
- Le module [des transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
- [Quatre nouvelles fonctionnalités CSS pour des animations d'entrée et de sortie fluides <sup>(angl.)</sup>](https://developer.chrome.com/blog/entry-exit-animations/) sur developer.chrome.com (2023)
