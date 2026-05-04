---
title: Propriété CSS `overlay`
short-title: overlay
slug: Web/CSS/Reference/Properties/overlay
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`overlay`** définit si un élément apparaissant dans la [couche supérieure](/fr/docs/Glossary/Top_layer) (par exemple, une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) affichée ou un élément {{HTMLElement("dialog")}} de fenêtre bloquante) est réellement rendu dans la couche supérieure. Cette propriété n'est pertinente que dans une liste de valeurs {{CSSxRef("transition-property")}}, et uniquement si `allow-discrete` est défini comme {{CSSxRef("transition-behavior")}}.

Il est important de noter que `overlay` ne peut être défini que par le navigateur — les styles de l'auteur·ice ne peuvent pas modifier la valeur `overlay` d'un élément. Vous pouvez, cependant, ajouter `overlay` à la [liste des propriétés de transition](/fr/docs/Web/CSS/Reference/Properties/transition-property) définie sur un élément. Cela retarde sa suppression de la couche supérieure afin qu'elle puisse être animée au lieu de disparaître immédiatement.

> [!NOTE]
> Lors de la transition de `overlay`, vous devez définir [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior) sur la transition afin qu'elle soit animée. Les animations `overlay` diffèrent des [animations discrètes](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète) normales en ce que l'état visible (c'est-à-dire `auto`) sera toujours affiché pendant toute la durée de la transition, que ce soit l'état de départ ou d'arrivée.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overlay: auto;
overlay: none;

/* Valeurs globales */
overlay: inherit;
overlay: initial;
overlay: revert;
overlay: revert-layer;
overlay: unset;
```

### Valeurs

- `auto` {{Experimental_Inline}}
  - : L'élément est rendu dans la couche supérieure s'il est promu dans la couche supérieure.
- `none` {{Experimental_Inline}}
  - : L'élément n'est pas rendu dans la couche supérieure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Transition d'une fenêtre contextuelle

Dans cet exemple, une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) est animée lorsqu'elle [transitionne](/fr/docs/Web/CSS/Guides/Transitions) de l'état caché à l'état affiché, puis revient à l'état caché.

#### HTML

Le HTML contient un élément {{HTMLElement("div")}} déclaré comme une fenêtre contextuelle à l'aide de l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), et un élément {{HTMLElement("button")}} désigné comme le contrôle d'affichage de la fenêtre contextuelle à l'aide de son attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).

```html
<button popovertarget="mypopover">Afficher la fenêtre contextuelle</button>
<div popover="auto" id="mypopover">
  Je suis une fenêtre contextuelle&nbsp;! Je devrais être animée.
</div>
```

#### CSS

La propriété `overlay` n'est présente que dans la liste des propriétés de transition. Comme `overlay` est une propriété contrôlée par l'agent utilisateur, elle n'est pas déclarée dans les états pré-transition ou post-transition.

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* État final de l'animation de sortie */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Équivalent à
  transition: all 0.7s allow-discrete; */
}

/* Doit être inclus après la règle précédente [popover]:popover-open
   pour prendre effet, car la spécificité est la même */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition pour le fond de la fenêtre contextuelle */

[popover]::backdrop {
  background-color: transparent;
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Équivalent à
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Les sélecteurs imbriqués (&) ne peuvent pas représenter des pseudo-éléments, donc cette 
   règle starting-style ne peut pas être imbriquée. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: transparent;
  }
}
```

Les deux propriétés que nous voulons animer sont {{CSSxRef("opacity")}} et {{CSSxRef("transform")}}&nbsp;: nous voulons que la fenêtre contextuelle apparaisse et disparaisse en fondu tout en grandissant et rétrécissant horizontalement. Nous définissons un état de départ pour ces propriétés sur l'état caché par défaut de l'élément fenêtre contextuelle (sélectionné avec `[popover]`), et un état final sur l'état ouvert de la fenêtre contextuelle (sélectionné avec la pseudo-classe {{CSSxRef(":popover-open")}}). Nous définissons ensuite une propriété {{CSSxRef("transition")}} pour animer la transition entre les deux.

Comme l'élément animé est promu dans la [couche supérieure](/fr/docs/Glossary/Top_layer) lorsqu'il est affiché et retiré de la couche supérieure lorsqu'il est masqué, `overlay` est ajouté à la liste des éléments en transition. Cela garantit que la suppression de l'élément de la couche supérieure est différée jusqu'à la fin de l'animation. Cela ne fait pas une grande différence pour des animations basiques comme celle-ci, mais dans des cas plus complexes, ne pas faire cela peut entraîner la suppression trop rapide de l'élément de la couche supérieure, rendant l'animation non fluide ou inefficace. Notez que la valeur [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior) est également définie dans la propriété abrégée pour activer les transitions discrètes.

Les étapes suivantes sont également nécessaires pour que l'animation fonctionne dans les deux sens&nbsp;:

- Un état de départ pour l'animation est défini à l'intérieur de la règle {{CSSxRef("@starting-style")}}. Cela est nécessaire pour éviter un comportement inattendu. Par défaut, les transitions ne sont pas déclenchées lors des premières mises à jour de style des éléments, ou lorsque le type de `display` passe de `none` à un autre type. `@starting-style` vous permet de remplacer ce comportement par défaut de manière contrôlée et spécifique. Sans cela, l'animation d'entrée ne se produirait pas et la fenêtre contextuelle apparaîtrait simplement.
- `display` est également ajouté à la liste des éléments en transition afin que l'élément animé soit visible (défini sur `display: block`) pendant toute la durée de l'animation d'entrée et de sortie. Sans cela, l'animation de sortie ne serait pas visible&nbsp;; en effet, la fenêtre contextuelle disparaîtrait simplement. Là encore, `transition-behavior: allow-discrete` est requis dans ce cas pour que l'animation ait lieu.

Vous remarquerez que nous avons également inclus une transition sur le {{CSSxRef("::backdrop")}} qui apparaît derrière la fenêtre contextuelle lorsqu'elle s'ouvre, afin de fournir une animation d'assombrissement agréable. `[popover]:popover-open::backdrop` est nécessaire pour sélectionner le fond lorsque la fenêtre contextuelle est ouverte.

#### Résultat

Le code s'affiche comme suit&nbsp;:

{{EmbedLiveSample("Transition d'une fenêtre contextuelle", "100%", 200)}}

> [!NOTE]
> Parce que les fenêtres contextuelles passent de `display: none` à `display: block` chaque fois qu'elles sont affichées, la fenêtre contextuelle passe de ses styles `@starting-style` à ses styles `[popover]:popover-open` à chaque fois que la transition d'entrée se produit. Lorsque la fenêtre contextuelle se ferme, elle passe de son état `[popover]:popover-open` à l'état par défaut `[popover]`.
>
> Il est possible que la transition de style à l'entrée et à la sortie soit différente dans de tels cas. Voir notre exemple [Démonstration de l'utilisation des styles de départ](/fr/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) pour une preuve de cela.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [des transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
- La règle {{CSSxRef("@starting-style")}}
- La propriété {{CSSxRef("transition-behavior")}}
- [Quatre nouvelles fonctionnalités CSS pour des animations d'entrée et de sortie fluides <sup>(angl.)</sup>](https://developer.chrome.com/blog/entry-exit-animations/) sur developer.chrome.com (2023)
