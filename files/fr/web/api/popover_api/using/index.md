---
title: Utiliser l'API Popover
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 9deef40cf7146b3b7654c1b6d93f79a0769d879d
---

{{DefaultAPISidebar("Popover API")}}

L'**API Popover** offre un mécanisme standard, flexible et cohérent pour afficher des contenus sous forme de <i lang="en">popover</i> par-dessus les autres contenus d'une page. L'affichage des contenus en <i lang="en">popovers</i> peut être contrôlé de manière déclarative en utilisant des attributs HTML, ou via JavaScript. Cet article vous guide à travers les concepts et les fonctionnalités de l'API Popover, et vous montre comment l'utiliser.

## Créer des <i lang="en">popovers</i> déclaratifs

Dans sa forme la plus simple, un <i lang="en">popover</i> est créé en ajoutant l'attribut `popover` à l'élément HTML qui va contenir le contenu du <i lang="en">popover</i>. Un `id` est également nécessaire pour pouvoir associer l'élément <i lang="en">popover</i> à un élément de contrôle.

```html
<div id="my-popover" popover>Contenu du popover</div>
```

> [!NOTE]
> Définir l'attribut `popover` sans valeur est équivalent à utiliser `popover="auto"`.

Ajouter cet attribut masque l'élément dès le chargement de la page, comme si on lui appliquait la déclaration CSS [`display: none`](/fr/docs/Web/CSS/display). Pour afficher/masquer le <i lang="en">popover</i>, il faut utiliser un ou plusieurs boutons de contrôle. Vous pouvez utiliser un élément [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button) (ou [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) avec l'attribut `type="button"`) en lui ajoutant l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget) avec la valeur de l'identifiant (attribut `id`) de l'élément <i lang="en">popover</i> à contrôler.

```html
<button popovertarget="mypopover">Actionner le popover</button>
<div id="mypopover" popover>Contenu du popover</div>
```

Par défaut, l'élément de contrôle bascule l'état du <i lang="en">popover</i> entre affiché et masqué.

Vous pouvez modifier ce comportement en utilisant l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction) avec les valeurs `"show"`, `"hide"` ou `"toggle"`. Par exemple, pour créer des boutons différents qui affichent ou masquent le <i lang="en">popover</i>, vous pouvez utiliser le code suivant&nbsp;:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Afficher le popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Masquer le popover
</button>
<div id="mypopover" popover>Contenu du popover</div>
```

Vous pouvez voir ce code en action dans [notre exemple de <i lang="en">popover</i> déclaratif](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([voir le code source](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)).

> [!NOTE]
> Si l'attribut `popovertargetaction` n'est pas défini, il vaudra `"toggle"` par défaut.

Quand un <i lang="en">popover</i> est affiché, la déclaration CSS `display:none` associée est retirée et il est placé dans la [couche supérieure](/fr/docs/Glossary/Top_layer)&nbsp;: de cette manière il est affiché par-dessus les autres éléments de la page.

## L'état automatique, et la fermeture légère

Quand un élément <i lang="en">popover</i> a l'attribut `popover` ou `popover="auto"`, il est considéré comme ayant **l'état automatique**. Deux comportements notables s'appliquent avec cet état automatique&nbsp;:

- Le <i lang="en">popover</i> peut être fermé légèrement (<i lang="en">light dismissed</i>). Cela signifie que vous pouvez masquer le <i lang="en">popover</i> en cliquant en dehors de celui-ci.
- Le <i lang="en">popover</i> peut être fermé à l'aide des mécanismes fournis par le navigateur, comme la touche <kbd>Esc</kbd> du clavier.
- En général, un seul <i lang="en">popover</i> peut être affiché à la fois. Si un <i lang="en">popover</i> est déjà affiché, l'affichage d'un autre <i lang="en">popover</i> masquera le premier. La seule exception porte sur les <i lang="en">popovers</i> imbriqués les uns dans les autres. Lisez la section [<i lang="en">Popovers</i> imbriqués](#popovers_imbriqués) pour plus d'informations.

> [!NOTE]
> Les <i lang="en">popovers</i> avec l'état automatique sont également masqués lorsque les méthodes [`HTMLDialogElement.showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal) et [`Element.requestFullscreen()`](/fr/docs/Web/API/Element/requestFullscreen) sont appelées sur un autre élément du document. Gardez à l'esprit qu'appeler ces méthodes sur un élément <i lang="en">popover</i> visible échouera dans la mesure ou ces méthodes n'ont pas de sens pour un <i lang="en">popover</i> visible. Cependant, vous pouvez appeler ces méthodes sur un élément avec l'attribut `popover` qui n'est pas encore visible.

L'état automatique est utile pour afficher un seul <i lang="en">popover</i> à la fois. Cela peut être utile lorsqu'on a plusieurs messages à afficher les uns à la suite des autres (plutôt que d'avoir un affichage confus et encombré), ou lorsqu'on affiche des messages de statut, où le dernier l'emportera de toute façon sur le statut précédent.

Pour observer ce comportement, vous pouvez consulter [l'exemple <i lang="en">popovers</i> multiples](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([code source correspondant](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)). Essayez de fermer les <i lang="en">popovers</i> affichés en cliquant en dehors de leur zone, et observez ce qui se passe si vous essayez d'en afficher plusieurs à la fois.

## L'état manuel

Au lieu de l'état automatique, on peut utiliser **l'état manuel**, qu'on obtient en utilisant `popover="manual"` sur un élément <i lang="en">popover</i>&nbsp;:

```html
<div id="mypopover" popover="manual">Contenu du popover</div>
```

Dans cet état&nbsp;:

- Le <i lang="en">popover</i> ne peut pas être fermé en cliquant en dehors de sa zone (les boutons de contrôle déclaratif vus ci-avant fonctionnent toujours).
- Plusieurs <i lang="en">popovers</i> indépendants peuvent être affichés en même temps.

Vous pouvez voir ce code en action dans [notre exemple de <i lang="en">popovers</i> manuels](https://mdn.github.io/dom-examples/popover-api/basic-manual/) ([code source correspondant](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)).

## Afficher des <i lang="en">popovers</i> via JavaScript

Vous pouvez également afficher des <i lang="en">popovers</i> via une API JavaScript.

La propriété [`HTMLElement.popover`](/fr/docs/Web/API/HTMLElement/popover) permet de lire ou de définir la valeur de l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover). Elle peut être utilisée pour créer un <i lang="en">popover</i> en JavaScript, ou servir à la détection de fonctionnalité.

```js
function supportsPopovers() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

De même&nbsp;:

- [`HTMLButtonElement.popoverTargetElement`](/fr/docs/Web/API/HTMLButtonElement/popoverTargetElement) et [`HTMLInputElement.popoverTargetElement`](/fr/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Permettent de connaître ou définir la valeur de l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget), ce qui permet de créer des boutons de contrôle. Notez que la valeur de cette propriété est une référence vers l'élément <i lang="en">popover</i>.
- [`HTMLButtonElement.popoverTargetAction`](/fr/docs/Web/API/HTMLButtonElement/popoverTargetAction) et [`HTMLInputElement.popoverTargetAction`](/fr/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Permettent de connaître ou définir la valeur de l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction), ce qui permet de spécifier l'action à effectuer sur l'élément <i lang="en">popover</i> contrôlé par le bouton.

En utilisant ces trois propriétés, vous pouvez créer un bouton de contrôle et un élément <i lang="en">popover</i> en JavaScript&nbsp;:

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

Vous disposez également de plusieurs méthodes pour afficher ou masquer un popover&nbsp;:

- [`HTMLElement.showPopover()`](/fr/docs/Web/API/HTMLElement/showPopover)
  - : Affiche un <i lang="en">popover</i>.
- [`HTMLElement.hidePopover()`](/fr/docs/Web/API/HTMLElement/hidePopover)
  - : Masque un <i lang="en">popover</i>.
- [`HTMLElement.togglePopover()`](/fr/docs/Web/API/HTMLElement/togglePopover)
  - : Bascule un <i lang="en">popover</i> entre les états affiché et masqué.

Par exemple, vous pouvez vouloir contrôler l'affichage d'une bulle d'aide en&nbsp;:

- Cliquant sur un bouton
- En pressant une touche du clavier.

Le premier cas peut être obtenu grâce à la méthode HTML déclarative ou grâce à l'API JavaScript, comme illustré dans l'exemple précédent.

Pour le second cas, vous pouvez créer un gestionnaire d'évènement qui va écouter l'usage de deux touches, une pour afficher le popover et une pour le masquer&nbsp;:

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

Cet exemple utilise [`Element.matches()`](/fr/docs/Web/API/Element/matches) pour déterminer programmatiquement si un élément <i lang="en">popover</i> est affiché ou non. La pseudo-classe [`:popover-open`](/fr/docs/Web/CSS/:popover-open) ne correspond qu'aux <i lang="en">popover</i> ouverts. C'est important pour éviter les erreurs qui seront déclenchées si vous essayez d'afficher un <i lang="en">popover</i> déjà affiché ou de masquer un <i lang="en">popover</i> déjà masqué.

Une alternative consiste à programmer une seule touche pour afficher _et_ masquer le <i lang="en">popover</i>, comme ceci&nbsp;:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Allez voir [notre exemple d'interface d'aide](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui) ([code source correspondant](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) pour voir les propriétés JavaScript des <i lang="en">popovers</i>, la détection de fonctionnalité et la méthode `togglePopover()` en action.

## Masquer les <i lang="en">popovers</i> automatiquement avec un minuteur

Un autre scénario fréquent en JavaScript consiste à masquer un <i lang="en">popover</i> automatiquement après un certain temps. Par exemple, vous pouvez vouloir créer un système de notifications «&nbsp;toast&nbsp;» pour une application qui exécute de multiples actions en arrière plan (par exemple, du téléversement de fichiers multiples) et qui affichera une notification pour chaque action terminée. Pour cela, vous voulez utiliser des <i lang="en">popovers</i> manuels afin d'en afficher plusieurs en même temps et utiliser [`setTimeout()`](/fr/docs/Web/API/Window/setTimeout) pour les supprimer. Une fonction pour gérer ce genre de <i lang="en">popover</i> pourrait ressembler à ceci&nbsp;:

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

Vous pouvez également utiliser l'évènement [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) pour réaliser des actions avant qu'un <i lang="en">popover</i> s'affiche ou ne disparaisse. Dans notre exemple, nous exécutons la fonction `moveToastUp()` pour déplacer les <i lang="en">popovers</i> vers le haut afin de faire de la place pour le nouveau <i lang="en">popover</i>&nbsp;:

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

Allez voir [notre exemple de <i lang="en">popover</i> «&nbsp;toast&nbsp;»](https://mdn.github.io/dom-examples/popover-api/toast-popovers/) ([code source correspondant](https://github.com/mdn/dom-examples/tree/main/popover-api/toast-popovers)) pour voir ce bout de code en action, avec des explications complètes sous forme de commentaires.

## <i lang="en">Popovers</i> imbriqués

Il existe une exception à la règle indiquant qu'il ne peut y avoir qu'un seul <i lang="en">popover</i> affiché à la fois&nbsp;: les <i lang="en">popovers</i> imbriqués. Dans ce cas, plusieurs <i lang="en">popovers</i> peuvent être affichés en même temps, du fait de leur relation les uns par rapport aux autres. Ce comportement est pris en charge pour permettre certain cas d'utilisation comme les menus imbriqués.

Trois façons permettent de créer des <i lang="en">popovers</i> imbriqués&nbsp;:

- Avec un descendant direct dans le DOM

  ```html
  <div popover>
    Parent
    <div popover>Enfant</div>
  </div>
  ```

- En utilisant l'attribut `popovertarget`

  ```html
  <div popover>
    Parent
    <button popovertarget="toto">Cliquez ici</button>
  </div>

  <div id="toto" popover>Enfant</div>
  ```

- En utilisant l'attribut `anchor`

  ```html
  <div popover id="toto">Parent</div>

  <div popover anchor="toto">Enfant</div>
  ```

Allez voir [notre exemple de menu imbriqué](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([code source correspondant](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) pour avoir un exemple concret. Vous remarquerez que seuls quelques évènements ont été utilisés pour afficher et masquer le sous-menu au clavier et à la souris, ainsi que pour tout masquer lorsqu'une option est sélectionnée. Selon les méthodes de chargement de contenu que vous utilisez, SPA ou pages multiples, tous les évènements ne seront pas nécessairement utiles, ils ont été inclus dans cet exemple pour montrer comment les utiliser.

## Mettre en forme les <i lang="en">popovers</i>

L'API Popover dispose de quelques fonctionnalités CSS qu'il est bon de connaître.

Pour ce qui est d'appliquer un style aux <i lang="en">popovers</i> eux-mêmes, vous pouvez les cibler avec le sélecteur d'attribut (`[popover]`) ou vous pouvez cibler les popovers ouverts avec la pseudo-classe [`:popover-open`](/fr/docs/Web/CSS/:popover-open).

Dans les premiers exemples que nous avons donnés dans cet article, vous avez peut-être remarqué que les <i lang="en">popovers</i> s'affichaient au milieu de la zone d'affichage (<i lang="en">viewport</i>). Il s'agit du style par défaut, défini via la feuille de style du navigateur&nbsp;:

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

Pour surcharger le style par défaut et faire apparaître le <i lang="en">popover</i> autre part, vous devez surcharger ce style par défaut avec quelque chose dans ce genre&nbsp;:

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

Vous pouvez voir un exemple de cette surcharge dans [notre exemple de positionnement de <i lang="en">popover</i>](https://mdn.github.io/dom-examples/popover-api/popover-positioning/) ([code source correspondant](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)).

Le pseudo-élément [`::backdrop`](/fr/docs/Web/CSS/::backdrop) est un élément plein écran placé directement derrière les éléments <i lang="en">popovers</i> dans [la couche supérieure](/fr/docs/Glossary/Top_layer), ce qui permet d'ajouter des effets au contenu de la page derrière les <i lang="en">popovers</i> si nécessaire. Par exemple, vous pouvez vouloir flouter le contenu de la page derrière un <i lang="en">popover</i> pour aider l'utilisatrice ou l'utilisateur à se concentrer sur le contenu du <i lang="en">popover</i>&nbsp;:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Allez voir [notre exemple de <i lang="en">popover</i> avec arrière-plan flouté](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([code source correspondant](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) pour vous en faire une idée.

## Animer les <i lang="en">popovers</i>

Les <i lang="en">popovers</i> sont mis en forme avec la déclaration `display: none;` quand ils sont fermés et avec `display: block;` quand ils sont ouverts, et sont respectivement retirés/ajoutés à [la couche supérieure](/fr/docs/Glossary/Top_layer) et à [l'arbre d'accessibilité](/fr/docs/Web/Performance/Guides/How_browsers_work#construire_larbre_daccessibilité). En conséquence, pour que les <i lang="en">popovers</i> puissent être animés, la propriété [`display`](/fr/docs/Web/CSS/display) doit pouvoir être animée. Les [navigateurs compatibles](/fr/docs/Web/CSS/display#compatibilité_des_navigateurs) animent `display` avec [une variation discrète](/fr/docs/Web/CSS/CSS_animated_properties#discrete). Concrètement, le navigateur passera de la valeur `none` à une autre valeur de manière à ce que l'animation affiche le contenu tout du long. Ainsi&nbsp;:

- Quand `display` est animé de `none` à `block` (ou toute autre valeur visible de `display`), la valeur passera à `block` à 0% de la durée de l'animation, ce qui la rendra visible du début à la fin.
- Quand `display` est animé de `block` (ou toute autre valeur visible de `display`) à `none`, la valeur passera à `none` à 100% de la durée de l'animation, ce qui la rendra visible du début à la fin.

> [!NOTE]
> Quand on anime en utilisant [les transitions CSS](/fr/docs/Web/CSS/CSS_transitions), la déclaration [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/transition-behavior) doit être appliquée sur l'élément <i lang="en">popover</i> pour activer le comportement décrit ci-avant. Quand on anime avec [les animations CSS](/fr/docs/Web/CSS/CSS_animations), le comportement décrit ci-avant est activé par défaut, et il n'y a pas besoin de définir cette propriété.

### Les transitions sur les <i lang="en">popovers</i>

Quand on anime un <i lang="en">popover</i> à l'aide des transitions CSS, les éléments suivant sont nécessaires&nbsp;:

- Règle @ [`@starting-style`](/fr/docs/Web/CSS/@starting-style) {{experimental_inline}}
  - : Définissez un ensemble de valeurs de départ pour les propriétés appliquées au <i lang="en">popover</i> qui vont être la cible de la transformation. Ces valeurs seront utilisées lors de la première transition pour éviter des comportements inattendus. Par défaut, les transitions CSS ne sont possibles que quand une propriété change de valeur sur un élément visible. Elles ne s'appliquent pas lors du premier affichage d'un élément, ou quand `display` passe de `none` à une autre valeur.
- La propriété [`display`](/fr/docs/Web/CSS/display)
  - : Ajoutez `display` à la liste des transitions pour que le <i lang="en">popover</i> garde la valeur `display: block` (ou tout autre valeur visible de `display`) pendant toute la transition pour s'assurer que le contenu du <i lang="en">popover</i> soit visible tout du long.
- La propriété [`overlay`](/fr/docs/Web/CSS/overlay) {{experimental_inline}}
  - : Ajoutez `overlay` à la liste des transitions pour s'assurer que le <i lang="en">popover</i> reste dans [la couche supérieure](/fr/docs/Glossary/Top_layer) pendant toute la transition pour s'assurer que le contenu du <i lang="en">popover</i> soit visible tout du long.
- La propriété [`transition-behavior`](/fr/docs/Web/CSS/transition-behavior) {{experimental_inline}}
  - : Définissez `transition-behavior: allow-discrete;` sur l'élément <i lang="en">popover</i> pour activer les transitions discrètes des propriétés `display` et `overlay`, ces deux propriétés n'étant pas animables par défaut.

Prenons un exemple pour voir ce que ça donne.

#### HTML

Le code HTML comprend un élément [`<div>`](/fr/docs/Web/HTML/Reference/Elements/div) transformé en <i lang="en">popover</i> avec l'attribut global [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), et un élément [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button) qui contrôle l'affichage du <i lang="en">popover</i> avec l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/input#popovertarget).

```html
<button popovertarget="mypopover">Afficher le popover</button>
<div popover="auto" id="mypopover">
  Je suis un Popover ! Je devrais être animé.
</div>
```

#### CSS

Les deux propriétés du <i lang="en">popover</i> que nous voulons transitionner sont [`opacity`](/fr/docs/Web/CSS/opacity) et [`transform`](/fr/docs/Web/CSS/transform). Nous voulons que le <i lang="en">popover</i> apparaisse/disparaisse avec une transition en fondu enchaîné tout en grossissant ou rapetissant horizontalement. Pour cela, nous définissons un état de départ pour ces propriétés pour le <i lang="en">popover</i> fermé (sélectionné avec le [sélecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors) `[popover]`), et un état final correspondant au <i lang="en">popover</i> ouvert (sélectionné avec la pseudo-classe [`:popover-open`](/fr/docs/Web/CSS/:popover-open)). Nous utilisons également la propriété [`transition`](/fr/docs/Web/CSS/transition) pour définir les propriétés à animer et la durée de la transition.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

/* Transition appliquée au popover */

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* L'état final de l'animation de sortie */
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

/* Doit être placé après la règle [popover]:popover-open
   précédente pour prendre effet, car la spécificité est
   la même. */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition pour l'ombre du popover */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Équivalent à
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 0.25);
}

/* Le sélecteur d'imbrication ne peut pas
   représenter les pseudo-éléments et on ne peut
   donc pas imbriquer cette règle starting-style. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0);
  }
}
```

Comme vu précédemment, nous avons également&nbsp;:

- Défini un état de départ pour la `transition` dans un bloc `@starting-style`
- Ajouté `display` à la liste des propriétés à transitionner de manière à ce que l'élément animé soit visible (avec `display: block`) pendant toute l'animation. Sans cela, la transition de fermeture ne serait pas visible, le popover disparaîtrait instantanément.
- Ajouté `overlay` à la liste des propriétés à transitionner de manière à ce que l'élément popover reste dans [la couche supérieure](/fr/docs/Glossary/Top_layer) jusqu'à la fin de l'animation. L'impact de cet ajout n'est pas nécessairement perceptible pour des animations aussi simples que celle-ci. Cependant, dans certains cas plus complexes, le fait d'omettre cette propriété peut avoir pour conséquence de faire disparaitre l'élément avant la fin de l'animation de transition.
- Ajouté `allow-discrete` aux transitions des propriétés `display` et `overlay` pour activer les [transitions discrètes](/fr/docs/Web/CSS/CSS_animated_properties#discrete) de ces propriétés.

Vous noterez que nous avons également défini une transition pour le pseudo-élément [`::backdrop`](/fr/docs/Web/CSS/::backdrop) qui apparait derrière le <i lang="en">popover</i> quand il s'ouvre, provoquant un effet d'assombrissement du contenu de la page.

#### Résultat

Le code donne ce résultat&nbsp;:

{{EmbedLiveSample("", "100%", "200")}}

> [!NOTE]
> Parce que les <i lang="en">popovers</i> passent de `display: none` à `display: block` à chaque fois qu'ils apparaissent, le <i lang="en">popover</i> transitionne des styles définis dans `@starting-style` aux styles définis dans `[popover]:popover-open` à chaque fois qu'il apparait. Quand le <i lang="en">popover</i> se ferme, il transitionne des styles définis dans `[popover]:popover-open` aux styles définis dans `[popover]`.
>
> Il est possible que les styles de transition pour l'entrée et la sortie puissent être différents. Regarder [notre démonstration d'utilisation des styles de départ](/fr/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) pour voir un exemple.

### Les animations sur les <i lang="en">popovers</i>

Quand on anime un <i lang="en">popover</i> avec les animations CSS, il y a un plusieurs différences à connaître&nbsp;:

- On n'écrit pas de bloc `@starting-style`. Les valeurs initiales et finales de `display` sont fournies dans les étapes d'animation `to` et `from`.
- Il n'est pas nécessaire d'activer explicitement les transitions discrètes. Il n'y a pas d'équivalent à `allow-discrete` pour les étapes d'animation.
- Il n'est pas non plus nécessaire de définir `overlay` dans les étapes d'animation, c'est l'animation de `display` qui fait passer le <i lang="en">popover</i> de visible à masqué.

Prenons un exemple.

#### HTML

Le code HTML comprend un élément [`<div>`](/fr/docs/Web/HTML/Reference/Elements/div), transformé en <i lang="en">popover</i> avec l'attribut global [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), et un élément [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button) qui contrôle l'affichage du <i lang="en">popover</i> avec l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/input#popovertarget).

```html
<button popovertarget="mypopover">Afficher le popover</button>
<div popover="auto" id="mypopover">
  Je suis un Popover ! Je devrais être animé.
</div>
```

#### CSS

Nous avons défini des étapes d'animation pour l'affichage et la disparition du <i lang="en">popover</i>, ainsi qu'une animation dédiée à l'apparition de l'arrière-plan. Notez qu'il n'est pas possible d'animer la disparition de l'arrière-plan&nbsp;: celui-ci étant retiré immédiatement du DOM quand le <i lang="en">popover</i> se ferme, il n'y a plus rien à animer.

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

/* Étapes d'animation */

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
    /* display est nécessaire sur l'animation
       de fermeture pour que le popover soit
       visible jusqu'à la fin de l'animation. */
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleX(0);
    /* display: none n'est pas strictement
       nécessaire ici car c'est la valeur par
       défaut pour un popover fermer. Mais on
       l'inclut pour que le comportement soit
       clair. */
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

Le code donne ce résultat&nbsp;:

{{EmbedLiveSample("", "100%", "200")}}
