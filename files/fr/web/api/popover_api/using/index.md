---
title: Using the Popover API
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 3ce863eafe
---

{{DefaultAPISidebar("Popover API")}}

L'**API Popover** est une API expérimentale qui fournit aux développeurs un mécanisme standard, cohérent et flexible pour afficher des contenus sous forme de popover par dessus les autres contenus d'une page. L'affichage des contenus en popovers peut être contrôlé soit de manière déclarative en utilisant des attributs HTML, soit via JavaScript. Cet article vous guide à travers les concepts et les fonctionnalités de l'API Popover, et vous montre comment l'utiliser.

## Créer des popovers déclaratif

Dans sa forme la plus simple, un popover est créer en ajoutant l'attribut `popover` à l'élément HTML qui va contenir le contenu du popover. Un `id` est également nécessaire pour pouvoir associer l'élément popover à un élément de contrôle.

```html
<div id="my-popover" popover>Contenu du popover</div>
```

> **Note :** Définir l'attribut `popover` sans valeur est équivalent à définir l'attribut `popover="auto"`.

Ajouter cet attribut masque l'élément dès le chargement de la page comme s'il avait la propriété CSS {{cssxref("display", "display: none")}}. Pour afficher/masquer le popover, il faut utiliser un ou plusieurs bouton de contrôle. Vous pouvez utiliser un élément {{htmlelement("button")}} (ou {{htmlelement("input")}} avec l'attribut `type="button"`) en lui ajoutant l'attribut [`popovertarget`](/fr/docs/Web/HTML/Element/button#popovertarget) avec la valeur de l'`id` de l'élément popover à contrôler.

```html
<button popovertarget="mypopover">Actionner le popover</button>
<div id="mypopover" popover>Contenu du popover</div>
```

Le comportement par défaut de l'élément de contrôle est de basculer l'état du popover entre affiché et masqué.

Vous pouvez modifier ce comportement en utilisant l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Element/button#popovertargetaction) avec les valeurs `"show"`, `"hide"` ou `"toggle"`. Par exemple, pour créer des boutons différent qui affichent ou masquent le popover, vous pouvez utiliser le code suivant :

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Afficher le popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Masquer le popover
</button>
<div id="mypopover" popover>Contenu du popover</div>
```

Vous pouvez voir ce code en action dans notre [exemple de popover déclaratif](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)).

> **Note:** Is l'attribut `popovertargetaction` n'est pas défini, sa valeur par défaut sera `"toggle"`.

Quand un popover est affiché, la propriété CSS `display:none` lui est retiré et il est placé dans la [couche supérieure](/fr/docs/Glossary/Top_layer), de cet manière il sera affiché par dessus les autres éléments de la page.

## L'état auto, et la "suppression légère"

Quand un élément popover à l'attribut `popover` ou `popover="auto"` il est considéré comme étant dans l'état "auto". Il y a deux comportements notables concernant cet état "auto" :

- Le popover peut être "supprimer légèrement" (_Light dismiss_). Cela signifie que vous pouvez masquer le popover en cliquant en dehors de celui-ci ou en appuyant sur la touche <kbd>Esc</kbd> du clavier.
- Un général, un seul popover peut être affiché à la fois. Si un popover est déjà affiché, l'affichage d'un autre popover masquera le premier. La seul exception à cette c'est si vous avez imbriquez des popovers les uns dans les autres. Lisez la section [Popover imbriqués](#popover-imbriqués) pour plus d'informations.

> **Note :** Les popovers `popover="auto"` sont également masqué lorsque les méthodes {{domxref("HTMLDialogElement.showModal()")}} et {{domxref("Element.requestFullscreen()")}} sont appelées sur un autre élément dans le document. Gardez à l'esprit qu'appeler ces méthodes sur un élément popover visible échouera dans la mesure ou ces méthodes n'ont aucun sens pour un popover visible. Cependant, vous pouvez appeler ces méthodes sur un élément avec l'attribut `popover` qui n'est pas encore visible.

L'état "auto" est utile si vous voulez juste afficher un seul popover à la foi. Par exemple si vous avez plusieurs message à afficher dans une interface d'apprentissage sans avoir un affichage confus et encombré, ou bien si vous voulez afficher un message de statut qui sera masquer automatiquement par le suivant.

Vous pouvez voir les comportement que l'on vient d'évoquer dans l'exemple [Popover multiple](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)). Essayez de "supprimer légèrement" les popovers une foi affichés, et observez ce qui ce passe si vous essayez d'en afficher plusieurs à la foi.

## Utiliser l'état "manuel"

L'alternative à l'état "auto" est **l'état "manuel"**, qu'on obtiens avec l'attribut `popover="manual"` sur un élément popover :

```html
<div id="mypopover" popover="manual">Contenu du popover</div>
```

Dans cet état :

- Le popover ne peut pas être "supprimer légèrement" (_Light dismiss_), bien que les boutons de contrôle déclaratif vu ci-avant fonctionnent toujours.
- Plusieurs popovers indépendant peuvent être affichés en même temps.

Vous pouvez voir ce code en action dans notre [exemple de popovers manuels](https://mdn.github.io/dom-examples/popover-api/basic-manual/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)).

## Afficher des popovers via JavaScript

Vous pouvez également afficher des popovers via un API JavaScript.

La propriété {{domxref("HTMLElement.popover")}} permet de connaître ou définir la valeur de l'attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover). Elle peut être utilisée pour créer un popover en JavaScript, ou simplement faire de la détection de fonctionnalité.

```js
function supportsPopovers() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

De même :

- {{domxref("HTMLButtonElement.popoverTargetElement")}} et {{domxref("HTMLInputElement.popoverTargetElement")}} permettent de connaître ou définir la valeur de l'attribut [`popovertarget`](/fr/docs/Web/HTML/Element/button#popovertarget), ce qui permet de créer des boutons de contrôle. Notez que la valeur de cette propriété est une référence vers l'élément popover.
- {{domxref("HTMLButtonElement.popoverTargetAction")}} et {{domxref("HTMLInputElement.popoverTargetAction")}} permettent de connaître ou définir la valeur de l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Element/button#popovertargetaction), ce qui permet de spécifier l'action à effectuer sur l'élément popover contrôlé par le bouton.

En utilisant ces trois propriétés, vous pouvez créer un bouton de contrôle et un élément popover en JavaScript :

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const keyboardHelpPara = document.getElementById("keyboard-help-para");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  toggleBtn.style.display = "none";
}
```

Vous disposez également de plusieurs méthodes pour afficher ou masquer un popover :

- {{domxref("HTMLElement.showPopover()")}} : Affiche un popover.
- {{domxref("HTMLElement.hidePopover()")}} : Masque un popover.
- {{domxref("HTMLElement.togglePopover()")}} : Bascule un popover entre les états affiché et masqué.

Par exemple, vous pouvez vouloir contrôler l'affichage d'une bulle d'aide en cliquant sur un bouton ou en pressant une touche du clavier. Le premier cas peut être obtenus via l'API déclarative ou via JavaScript comme vu ci-après.

Pour le second cas, vous pouvez créer un gestionnaire d'évènement qui va écouter l'usage de deux touches, une pour afficher le popover et une pour le masquer :

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    if (popover.matches(":popover-open")) {
      popover.hidePopover();
    }
  }

  if (event.key === "s") {
    if (!popover.matches(":popover-open")) {
      popover.showPopover();
    }
  }
});
```

Cet exemple utilise {{domxref("Element.matches()")}} pour déterminer programmatiquement si un élément popover est affiché ou non. La pseudo-classe {{cssxref(":popover-open")}} ne correspond qu'aux popovers ouverts. C'est important pour éviter les erreurs qui seront déclenchées si vous essayez d'afficher un popover déjà affiché ou de masquer un popover déjà masqué.

Une alternative serait de programmé une seule touche pour afficher _et_ masquer le popover, comme ceci :

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Allez voir notre [exemple d'interface d'aide](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) pour voir les propriétés JavaScript des popovers, la détection de fonctionnalité et la méthode `togglePopover()` en action.

## Masquer les popovers automatiquement avec un timer

Un autre cas d'utilisation courant en JavaScript, c'est de masquer un popover automatiquement après un certain temps. Par exemple, vous pouvez vouloir créer un système de "toast" de notification pour une application qui exécute de multiples actions en arrière plan (par exemple, du téléversement de fichiers multiples) et qui affichera une notification pour chaque action terminée. Pour cela, vous voulez utiliser des popovers manuels pour pouvoir en afficher plusieurs en même temps et utiliser {{domxref("setTimeout()")}} pour les supprimer`. Une fonction pour gérer ce genre de popover pourrait ressembler à ceci :

```js
function makeToast(result) {
  const popover = document.createElement("article");
  popover.popover = "manual";
  popover.classList.add("toast");
  popover.classList.add("newest");

  let msg;

  if (result === "success") {
    msg = "Action was successful!";
    popover.classList.add("success");
    successCount++;
  } else if (result === "failure") {
    msg = "Action failed!";
    popover.classList.add("failure");
    failCount++;
  } else {
    return;
  }

  popover.textContent = msg;
  document.body.appendChild(popover);
  popover.showPopover();

  updateCounter();

  setTimeout(() => {
    popover.hidePopover();
    popover.remove();
  }, 4000);
}
```

Vous pouvez également utiliser l'évènement {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} pour réaliser des actions avant qu'un popover s'affiche ou ne disparaisse. Dans notre exemple, nous exécutons la fonction `moveToastUp()` pour déplacer les popovers vers le haut afin de faire de la place pour le nouveau popover :

```js
popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    moveToastsUp();
  }
});

function moveToastsUp() {
  const toasts = document.querySelectorAll(".toast");

  toasts.forEach((toast) => {
    if (toast.classList.contains("newest")) {
      toast.style.bottom = `5px`;
      toast.classList.remove("newest");
    } else {
      const prevValue = toast.style.bottom.replace("px", "");
      const newValue = parseInt(prevValue) + 50;
      toast.style.bottom = `${newValue}px`;
    }
  });
}
```

Allez voir notre exemple de [Toast popover](https://mdn.github.io/dom-examples/popover-api/toast-popovers/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/toast-popovers)) pour voir ce bout de code en action, avec des explications complète sous forme de commentaires.

## Popover imbriqués

Il y a une exception à la règle qui dit qu'un seul popover peut être affiché à la foi : les popovers imbriqués. Dans ce cas, plusieurs popover peuvent être affichés en même temps, du fait de leur relation les uns par rapport aux autres. Ce comportement est supporté pour permettre certain cas d'utilisation comme les menus imbriqués.

Il y a trois façons de créer des popovers imbriqués :

1. Descendants DOM direct :

```html
<div popover>
  Parent
  <div popover>Child</div>
</div>
```

1. En utilisant l'attribut `popovertarget` :

```html
<div popover>
  Parent
  <button popovertarget="foo">Cliquez ici</button>
</div>

<div id="foo" popover>Enfant</div>
```

1. En utilisant l'attribut `anchor` :

```html
<div popover id="foo">Parent</div>

<div popover anchor="foo">Enfant</div>
```

Allez voir notre [exemple de menu imbriqué](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) pour avoir un exemple concret. Vous remarquerez que seul quelques évènements ont été utilisés pour afficher et masquer le sous-menu au clavier et à la souris, ainsi que pour tout masquer lorsqu'une option est sélectionnée. Selon les méthodes de chargement de contenu que vous utilisez, SPA ou pages multiples, tous les évènements ne seront pas nécessairement utiles, ils ont été inclus dans cet exemple pour montrer comment les utiliser.

## Appliquer du style aux popovers

L'API popover dispose de quelques fonctionnalités CSS qu'il est bon de connaître.

Pour ce qui est d'appliquer un style aux popovers eux-mêmes, vous pouvez les cibler avec le sélecteur d'attribut (`[popover]`) ou vous pouvez cibler les popovers ouverts avec la nouvelle pseudo-classe {{cssxref(":popover-open")}}.

Dans les premiers exemples que nous avons donnés dans cet article, vous avez peut-être remarqué que les popovers s'affichaient au milieux du viewport. Il s'agit du style par défaut défini via la feuille de style du navigateur :

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

Pour surcharger le style par défaut et faire apparaître le popover autre part, vous devez surcharger ce style par défaut avec quelque chose dans ce genre :

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

Vous pouvez voir un exemple en isolation de ce mecanisme dans notre [exemple de positionnement de popover](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)).

Le pseudo-élément {{cssxref("::backdrop")}} est un élément plein écran placé directement derrière les éléments popover dans le _{{glossary("top layer")}}_, ce qui permet d'ajouter des effets au contenu de la page derrière les popovers si nécessaire. Par exemple, vous pouvez vouloir flouter le contenu de la page derrière un popover pour aider l'utilisateur à ce concentrer sur le contenu du popover :

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Allez voir notre exemple de [d'arrière plan de popover flouté](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) pour vous faire une idée de ce que ça donne.

## Animation des popovers

Les popovers ont la propriété `display: none;` quand il sont fermé et `display: block;` quand il sont ouvert, ils sont également retiré/ajouté au _{{glossary("top layer")}}_ et à [l'arbre d'accessibilité](/fr/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree). En conséquence, pour que les popover puissent être animés, la propriété {{cssxref("display")}} doit pouvoir être animée. Les [navigateurs compatibles](/fr/docs/Web/CSS/display#compatibilité_des_navigateurs) animent `display` avec une variation de [l'animation des propriétés discrètes](/fr/docs/Web/CSS/CSS_animated_properties#discrete). Concrètement, le navigateur passera de la valeur `none` à une autre valeur de manière à ce que l'animation affiche le contenus tout du long. Ainsi, par exemple :

- Quand `display` est animé de `none` à `block` (ou tout autre valeur visible de `display`), la valeur va passer à `block` à 0% de la durée de l'animation, ce qui la rend visible du début à la fin.
- Quand `display` est animé de `block` (ou tout autre valeur visible de `display`) à `none`, la valeur va passer à `none` à 100% de la durée de l'animation, ce qui la rend visible du début à la fin.

> **Note :** Quand on anime en utilisant les [transitions CSS](/fr/docs/Web/CSS/CSS_transitions), la propriété [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/transition-behavior) doit être définie sur l'élément popover pour activer le comportement décrit ci-avant. Quand on anime avec les [animations CSS](/fr/docs/Web/CSS/CSS_Animations), le comportement décrit ci-avant est activé par défaut, pas besoin de définir cette propriété.

### Les transitions sur les popovers

Quand on anime un popover avec les transitions CSS, les éléments suivant sont requis :

- {{CSSxRef("@starting-style")}} at-rule
  - : Définissez un ensemble de valeurs de départ pour les propriétés appliquées au popover qui vont être la cible de la transformation. Ces valeurs seront utilisé lors de la première transition pour éviter des comportements inattendus. Par défaut, les transitions CSS ne sont possible que quand une propriété change de valeur sur un éléments visible. Elle ne s'applique pas lors du première affichage d'un élément, ou quand la valeur de `display` passe de `none` à une autre valeur.
- La propriété {{CSSxRef("display")}}
  - : Ajoutez `display` à la liste des transitions pour que le popover garde la valeur `display: block` (ou tout autre valeur visible de `display`) pendant toute la transition pour s'assurer que le contenu du popover soit visible tout du long.
- La propriété {{CSSxRef("overlay")}}
  - : Ajoutez `overlay` à la liste des transitions pour s'assurer que le popover reste dans le _{{glossary("top layer")}}_ pendant toute la transition pour s'assurer que le contenu du popover soit visible tout du long.
- La propriété {{cssxref("transition-behavior")}}
  - : Définissez `transition-behavior: allow-discrete;` sur l'élément popover pour activer les transition discrète des propriétés `display` et `overlay`, c'est deux propriétés n'étant pas animable par défaut.

Prenons un exemple pour voir ce que ça donne.

#### HTML

Le code HTML comprend un élément {{htmlelement("div")}} transformé en popover avec l'attribut global [`popover`](/fr/docs/Web/HTML/Global_attributes/popover), et un élément {{htmlelement("button")}} qui contrôle l'affichage du popover avec l'attribut [`popovertarget`](/fr/docs/Web/HTML/Element/input#popovertarget).

```html
<button popovertarget="mypopover">Afficher le popover</button>
<div popover="auto" id="mypopover">
  Je suis un Popover! Je devrais être animé.
</div>
```

#### CSS

Les deux propriétés du popover que nous voulons transitionner sont {{cssxref("opacity")}} et {{cssxref("transform")}}. Nous voulons que le popover apparaisse/disparaisse avec une transition en fondu enchaîné tout en grossissant ou rapetissant horizontallement. Pour cela, nous définissons un état de départ pour ces propriétés correspondant au popover fermé (selectionné avec le [selecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors)) `[popover]`), et un état final correspondant au popover ouvert (selectionné avec la pseudo-classe {{cssxref(":popover-open")}}). Nous utilisons également la propriété {{cssxref("transition")}} pourdéfinir les propriétés à animer et la durée de la transition.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

/* Transition for the popover itself */

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Needs to be after the previous [popover]:popover-open rule
to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition for the popover's backdrop */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 0.25);
}

/* The nesting selector (&) cannot represent pseudo-elements
so this starting-style rule cannot be nested */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0);
  }
}
```

Comme nous l'avons vu précédement, nous avons également :

- défini un état de départ pour la `transition` dans un block `@starting-style`.
- ajouté `display` à la liste des propriétés à transitionner de manière à ce que l'élément animé soit visible (avec `display: block`) pendant toute l'animation. Sans cela, la transition de fermeture ne serait pas visible, le popover disparaîtrait instantanément.
- ajouté `overlay` à la liste des propriétés à transitionner de manière à ce que l'élément popover reste dans le _{{glossary("top layer")}}_ jusqu'à la fin de l'animation. L'impact de comportement n'est pas nécessairement perceptible pour des animations aussi simple que ce que nous faisons ici. Cependant, dans certain cas plus complexe, le fait d'omettre cette propriété peut avoir pour conséquence de faire disparaitre l'élément avant la fin de l'animation de transition.
- ajouté `allow-discrete` aux transitions des propriété `display` et `overlay` pour activer les [transitions discrètes](/fr/docs/Web/CSS/CSS_animated_properties#discrete) de ces propriétés.

Vous noterez que nous avons également défini une transition pour le pseudo-élément {{cssxref("::backdrop")}} qui apparait derrière le popover quand il s'ouvre, provoquant un effet d'assombrissement du contenu de la page.

#### Result

Le code done ce résultat :

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> **Note :** Parce que les popovers passe de `display: none` à `display: block` à chaque fois qu'ils apparaissent, le popover transitionne des style définis dans `@starting-style` aux styles définis dans `[popover]:popover-open` à chaque fois qu'il apparait. Quand le popover se ferme, il transitionne des styles définis dans `[popover]:popover-open` aux styles définis dans `[popover]`.
>
> Il est possible que les styles de transition pour l'entrée et la sortie puissent être différents. Regarder notre [Démonstration d'utilisation des styles de départ](/fr/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) pour voir un exemple de ce que ça donne.

### Les animations sur les popovers

Quand on anime un popover avec les animations CSS, il y a un certains nombres de différence à connaître :

- Vous n'écrivez pas de block `@starting-style`; Vous incluez l'état de `display` dans les clé d'animation `to` et `from`.
- Vous n'activez pas explicitement les transitions discrètes; Il n'y a pas d'équivalent à `allow-discrete` pour les clés d'animation.
- Vous n'avez pas besoin de définir `overlay` dans les clés d'animation; L'animation de `display` gère cela pour vous.

Prenons un exemple.

#### HTML

Le code HTML comprend un élément {{htmlelement("div")}} transformé en popover avec l'attribut global [`popover`](/fr/docs/Web/HTML/Global_attributes/popover), et un élément {{htmlelement("button")}} qui contrôle l'affichage du popover avec l'attribut [`popovertarget`](/fr/docs/Web/HTML/Element/input#popovertarget).

```html
<button popovertarget="mypopover">Afficher le popover</button>
<div popover="auto" id="mypopover">
  Je suis un Popover! Je devrais être animé.
</div>
```

#### CSS

Nous avons définis des clés d'animation pour l'affichage et la disparition du popover, ainsi qu'une animation uniquement pour l'apparition de l'arrière-plan. Notez qu'il n'est pas possible d'animer la disparition de l'arrière-plan, celui-ci étant retiré immédiatement du DOM quand le popover se ferme, il n'y a plus rien à animer.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
  animation: fade-out 0.7s ease-out;
}

[popover]:popover-open {
  animation: fade-in 0.7s ease-out;
}

[popover]:popover-open::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleX(1);
    /* display needed on the closing animation to keep the popover
    visible until the animation ends */
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleX(0);
    /* display: none not required here because it is the default value
    for a closed popover, but including it so the behavior is clear */
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0);
  }

  100% {
    background-color: rgb(0 0 0 / 0.25);
  }
}
```

#### Résultat

Le code donne ce résultat :

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}
