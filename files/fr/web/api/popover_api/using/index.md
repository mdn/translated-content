---
title: Utilisation de l'API Popover
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{DefaultAPISidebar("Popover API")}}

L'**API Popover** offre un mécanisme standard, flexible et cohérent pour afficher des contenus sous forme de fenêtre contextuelle (<i lang="en">popover</i> en anglais) par-dessus les autres contenus d'une page. L'affichage des contenus en forme de fenêtre contextuelle peut être contrôlé de manière déclarative en utilisant des attributs HTML, ou via JavaScript. Cet article vous guide à travers les concepts et les fonctionnalités de l'API Popover, et vous montre comment l'utiliser.

## Créer des fenêtres contextuelles déclaratives

Dans sa forme la plus simple, une fenêtre contextuelle (<i lang="en">popover</i> en anglais) est créée en ajoutant l'attribut `popover` à l'élément HTML qui va contenir le contenu de la fenêtre contextuelle. Un `id` est également nécessaire pour pouvoir associer la fenêtre contextuelle à un élément de contrôle.

```html
<div id="my-popover" popover>Contenu de la fenêtre contextuelle</div>
```

> [!NOTE]
> Définir l'attribut `popover` sans valeur est équivalent à utiliser `popover="auto"`.

Ajouter cet attribut masque l'élément dès le chargement de la page, comme si on lui appliquait la déclaration CSS {{CSSxRef("display", "display: none")}}. Pour afficher/masquer la fenêtre contextuelle, il faut utiliser un ou plusieurs boutons de contrôle. Vous pouvez utiliser un élément HTML {{HTMLElement("button")}} (ou {{HTMLElement("input")}} avec l'attribut `type="button"`) en lui ajoutant l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget) avec la valeur de l'identifiant (attribut `id`) de l'élément fenêtre contextuelle à contrôler&nbsp;:

```html
<button popovertarget="mypopover">Basculer la fenêtre contextuelle</button>
<div id="mypopover" popover>Contenu de la fenêtre contextuelle</div>
```

Par défaut, l'élément de contrôle bascule l'état de la fenêtre contextuelle entre affiché et masqué.

Vous pouvez modifier ce comportement en utilisant l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction) avec les valeurs `"show"`, `"hide"` ou `"toggle"`. Par exemple, pour créer des boutons différents qui affichent ou masquent la fenêtre contextuelle, vous pouvez utiliser le code suivant&nbsp;:

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Afficher la fenêtre contextuelle
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Masquer la fenêtre contextuelle
</button>
<div id="mypopover" popover>Contenu de la fenêtre contextuelle</div>
```

Vous pouvez voir ce code en action dans [notre exemple de fenêtre contextuelle déclarative <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/basic-declarative/) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)).

> [!NOTE]
> Si l'attribut `popovertargetaction` est omis, `"toggle"` est l'action par défaut effectuée par le bouton de contrôle.

Quand une fenêtre contextuelle est affichée, la déclaration CSS `display:none` associée est retirée et il est placé dans la {{Glossary("top layer", "couche supérieure")}}, de cette manière elle est affichée par-dessus les autres éléments de la page.

### `command` et `commandfor`

Les attributs [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor) et [`command`](/fr/docs/Web/HTML/Reference/Elements/button#command) offrent une fonctionnalité très similaire à `popovertarget` et `popovertargetaction`, mais avec une conception plus générale destinée à fournir d'autres fonctionnalités au‑delà des commandes de popover, y compris des commandes personnalisées.

Le extrait de code précédent peut être réécrit ainsi&nbsp;:

```html live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">
  Afficher la fenêtre contextuelle
</button>
<button commandfor="mypopover" command="hide-popover">
  Masquer la fenêtre contextuelle
</button>
<div id="mypopover" popover>Contenu de la fenêtre contextuelle</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## L'état automatique, et la fermeture légère

Quand une fenêtre contextuelle a l'attribut `popover` ou `popover="auto"`, il est considéré comme ayant **l'état automatique**. Deux comportements notables s'appliquent avec cet état automatique&nbsp;:

- La fenêtre contextuelle peut être fermée légèrement (<i lang="en">light dismissed</i>). Cela signifie que vous pouvez masquer la fenêtre contextuelle en cliquant en dehors de celle-ci.
- La fenêtre contextuelle peut être fermée à l'aide des mécanismes fournis par le navigateur, comme la touche <kbd>Esc</kbd> du clavier.
- En général, une seule fenêtre contextuelle peut être affichée à la fois. Si une fenêtre contextuelle est déjà affichée, l'affichage d'une autre fenêtre contextuelle masquera la première. La seule exception porte sur les fenêtres contextuelles imbriquées les unes dans les autres. Lisez la section [<i lang="en">Popovers</i> imbriqués](#popovers_imbriqués) pour plus d'informations.

> [!NOTE]
> Les fenêtres contextuelles avec l'état automatique sont également masquées lorsque les méthodes {{DOMxRef("HTMLDialogElement.showModal()")}} et {{DOMxRef("Element.requestFullscreen()")}} sont appelées sur un autre élément du document. Gardez à l'esprit qu'appeler ces méthodes sur une fenêtre contextuelle visible échouera dans la mesure ou ces méthodes n'ont pas de sens pour une fenêtre contextuelle visible. Cependant, vous pouvez appeler ces méthodes sur un élément avec l'attribut `popover` qui n'est pas encore visible.

L'état automatique est utile pour afficher une seule fenêtre contextuelle à la fois. Cela peut être utile lorsqu'on a plusieurs messages à afficher les uns à la suite des autres (plutôt que d'avoir un affichage confus et encombré), ou lorsqu'on affiche des messages de statut, où le dernier l'emportera de toute façon sur le statut précédent.

Pour observer ce comportement, vous pouvez consulter [l'exemple de fenêtres contextuelles multiples <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/multiple-auto/) ([code source correspondant <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)). Essayez de fermer les fenêtres contextuelles affichées en cliquant en dehors de leur zone, et observez ce qui se passe si vous essayez d'en afficher plusieurs à la fois.

## Accessibilité des fenêtres contextuelles

Lorsque qu'une relation est établie entre une fenêtre contextuelle (<i lang="en">popover</i> en anglais) et son élément de contrôle (l'invocateur) via l'attribut `popovertarget`, l'API effectue automatiquement deux autres modifications de l'environnement pour permettre aux utilisateur·ice·s au clavier et aux technologies d'assistance (<abbr>TA</abbr>) d'interagir plus facilement avec la fenêtre contextuelle&nbsp;:

- Lorsque la fenêtre contextuelle est affichée, l'ordre de navigation au clavier est mis à jour de sorte que la fenêtre contextuelle soit la suivante dans la séquence&nbsp;: par exemple, lorsqu'un bouton est pressé pour afficher une fenêtre contextuelle, les boutons à l'intérieur de la fenêtre contextuelle seront ensuite dans l'ordre de tabulation (ils seront sélectionnés en appuyant sur la touche <kbd>Tab</kbd>). Inversement, lorsque la fenêtre contextuelle est fermée via le clavier (généralement avec la touche <kbd>Esc</kbd>), le focus est renvoyé vers l'invocateur.
- Pour permettre aux technologies d'assistance (<abbr>TA</abbr>) telles que les lecteurs d'écran de comprendre la relation entre l'invocateur et la fenêtre contextuelle, une relation implicite [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) et [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) est établie entre eux.

L'établissement de cette relation crée également une ancre implicite entre les deux — voir [Positionnement d'ancrage des fenêtres contextuelles](#positionnement_dancrage_des_fenêtres_contextuelles) pour plus de détails.

## Autres façons d'établir une relation invocateur—fenêtre contextuelle

Vous pouvez établir une relation invocateur—fenêtre contextuelle d'autres manières, en plus de l'utilisation de l'attribut `popovertarget`&nbsp;:

- En utilisant l'option `source` des méthodes {{DOMxRef("HTMLElement.showPopover()")}} ou {{DOMxRef("HTMLElement.togglePopover()")}}. Notez que dans ce cas, seuls les changements de l'ordre de navigation au clavier sont appliqués, et non la relation ARIA implicite. En effet, l'option `source` peut être définie sur n'importe quel type d'élément (pas seulement des `<button>`), et il n'est pas garanti que la relation ait du sens.
- Entre un élément {{HTMLElement("select")}} et son sélecteur déroulant, lorsqu'on l'active pour la fonctionnalité [élément select personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select) via la valeur `base-select` de la propriété {{CSSxRef("appearance")}}. Dans ce cas, une relation implicite invocateur—fenêtre contextuelle est créée entre les deux.

## L'état manuel des fenêtres contextuelles

Au lieu de l'état automatique, on peut utiliser **l'état manuel**, qu'on obtient en utilisant `popover="manual"` sur une fenêtre contextuelle&nbsp;:

```html
<div id="mypopover" popover="manual">Contenu de la fenêtre contextuelle</div>
```

Dans cet état&nbsp;:

- La fenêtre contextuelle ne peut pas être fermée en cliquant en dehors de sa zone (les boutons de contrôle déclaratif vus ci-avant fonctionnent toujours).
- Plusieurs fenêtres contextuelles indépendantes peuvent être affichées en même temps.

Vous pouvez voir ce code en action dans [notre exemple de fenêtres contextuelles manuelles multiples <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/multiple-manual/) ([code source correspondant <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)).

## Les évènements `beforetoggle` et `toggle`

Vous pouvez réagir à l'affichage ou à la fermeture d'une fenêtre contextuelle (<i lang="en">popover</i>) en écoutant les évènements [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) et [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event)&nbsp;:

- `beforetoggle` est déclenché juste avant qu'une fenêtre contextuelle ne s'affiche ou ne se ferme. Cela peut être utilisé, par exemple, pour empêcher l'affichage ou la fermeture de la fenêtre contextuelle (en utilisant {{DOMxRef("Event.preventDefault()")}}), pour ajouter des classes d'animation à une fenêtre contextuelle pour l'animer, ou pour nettoyer l'état d'une fenêtre contextuelle après son utilisation.
- `toggle` est déclenché juste après qu'une fenêtre contextuelle se soit affichée ou fermée. Il est généralement utilisé pour exécuter d'autres actions en réponse au changement d'état de la fenêtre contextuelle.

Ces deux évènements fournissent un objet d'évènement {{DOMxRef("ToggleEvent")}}. Cet évènement possède les caractéristiques suivantes en plus de celles héritées de l'objet {{DOMxRef("Event")}} par défaut&nbsp;:

- Les propriétés {{DOMxRef("ToggleEvent.oldState", "oldState")}} et {{DOMxRef("ToggleEvent.newState", "newState")}} indiquent depuis quel état et vers quel état la fenêtre contextuelle vient de passer, ce qui vous permet de réagir spécifiquement à l'ouverture ou à la fermeture d'une fenêtre contextuelle.
- La propriété {{DOMxRef("ToggleEvent.source", "source")}} contient une référence vers l'élément HTML de contrôle de la fenêtre contextuelle qui a initié le basculement, ce qui permet d'exécuter un code différent selon le contrôle ayant déclenché l'évènement.

Un exemple d'utilisation pourrait ressembler à ceci&nbsp;:

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

Consultez les liens de référence ci‑dessus pour plus d'informations et d'exemples.

## Afficher des fenêtres contextuelles via JavaScript

Vous pouvez également afficher des fenêtres contextuelles via une API JavaScript.

La propriété {{DOMxRef("HTMLElement.popover")}} permet de lire ou de définir la valeur de l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover). Elle peut être utilisée pour créer une fenêtre contextuelle en JavaScript, ou servir à la détection de fonctionnalité.

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

De même&nbsp;:

- {{DOMxRef("HTMLButtonElement.popoverTargetElement")}} and {{DOMxRef("HTMLInputElement.popoverTargetElement")}} permettent de connaître ou définir la valeur de l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget), ce qui permet de créer des boutons de contrôle. Notez que la valeur de cette propriété est une référence vers une fenêtre contextuelle.
- {{DOMxRef("HTMLButtonElement.popoverTargetAction")}} and {{DOMxRef("HTMLInputElement.popoverTargetAction")}} permettent de connaître ou définir la valeur de l'attribut [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction), ce qui permet de définir l'action à effectuer sur une fenêtre contextuelle contrôlée par le bouton.

En utilisant ces trois propriétés, vous pouvez créer un bouton de contrôle et une fenêtre contextuelle en JavaScript&nbsp;:

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

- {{DOMxRef("HTMLElement.showPopover()")}} pour afficher une fenêtre contextuelle.
- {{DOMxRef("HTMLElement.hidePopover()")}} pour masquer une fenêtre contextuelle.
- {{DOMxRef("HTMLElement.togglePopover()")}} pour basculer d'une fenêtre contextuelle.

Par exemple, vous pourriez souhaiter permettre d'afficher et de masquer une fenêtre contextuelle en cliquant sur un bouton ou en appuyant sur une touche particulière du clavier. Le premier cas peut être obtenu de façon déclarative, ou vous pouvez le faire en JavaScript comme montré ci‑dessus.

Pour le second cas, vous pouvez créer un gestionnaire d'évènements qui programme deux touches distinctes — l'une pour ouvrir la fenêtre contextuelle et l'autre pour la refermer&nbsp;:

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

Cet exemple utilise {{DOMxRef("Element.matches()")}} pour déterminer programmatiquement si une fenêtre contextuelle est affichée ou non. La pseudo-classe {{CSSxRef(":popover-open")}} ne correspond qu'aux fenêtres contextuelles ouvertes. C'est important pour éviter les erreurs qui seront déclenchées si vous essayez d'afficher une fenêtre contextuelle déjà affichée ou de masquer une fenêtre contextuelle déjà masquée.

Une alternative consiste à programmer une seule touche pour afficher _et_ masquer la fenêtre contextuelle, comme ceci&nbsp;:

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

Allez voir [notre exemple d'interface d'aide <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui) ([code source correspondant <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)) pour voir les propriétés JavaScript des fenêtres contextuelles, la détection de fonctionnalité et la méthode `togglePopover()` en action.

## Fenêtres contextuelles imbriqués

Il existe une exception à la règle indiquant qu'il ne peut y avoir qu'une seule fenêtre contextuelle (<i lang="en">popover</i> en anglais) affichée à la fois&nbsp;: les fenêtres contextuelles imbriquées. Dans ce cas, plusieurs fenêtres contextuelles peuvent être affichées en même temps, du fait de leur relation les uns par rapport aux autres. Ce comportement est pris en charge pour permettre certain cas d'utilisation comme les menus imbriqués.

Trois méthodes permettent de créer des fenêtres contextuelles imbriquées&nbsp;:

1. Avec un descendant direct dans le DOM&nbsp;:

   ```html
   <div popover>
     Parent
     <div popover>Enfant</div>
   </div>
   ```

2. En utilisant un invocateur/contrôle&nbsp;:

   ```html
   <div popover>
     Parent
     <button popovertarget="toto">Cliquez ici</button>
   </div>

   <div id="toto" popover>Enfant</div>
   ```

3. En utilisant l'attribut `anchor`&nbsp;:

   ```html
   <div popover id="toto">Parent</div>

   <div popover anchor="toto">Enfant</div>
   ```

Allez voir [notre exemple de menu imbriqué <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/nested-popovers/) ([code source correspondant <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)) pour avoir un exemple concret. La démonstration présente une barre de boutons&nbsp;; lorsqu'on appuie dessus, les boutons affichent des sous-menus contextuels `auto` dans lesquels d'autres options peuvent être sélectionnées. Cependant, lorsqu'on passe la souris dessus ou qu'ils ont le focus, les boutons affichent aussi des info-bulles (`hint`) pour indiquer à l'utilisateur ce que fait chaque bouton, sans masquer un sous-menu déjà visible.

## Utiliser l'état « hint » des fenêtres contextuelles

Il existe un troisième type de fenêtre contextuelle que vous pouvez créer — les fenêtres contextuelles d'indication (`hint` popovers), obtenues en définissant `popover="hint"` sur votre élément popover. Les fenêtres contextuelles `hint` ne ferment pas les fenêtres contextuelles `auto` lorsqu'elles sont affichées, mais ferment d'autres fenêtres contextuelles `hint`. Elles peuvent être fermées légèrement et répondent aux requêtes de fermeture.

Ceci est utile dans des situations où, par exemple, vous avez des boutons d'outils qui peuvent être pressés pour afficher des fenêtres contextuelles d'interface, tout en souhaitant afficher des info-bulles lorsque les boutons sont survolés, sans fermer les fenêtres contextuelles d'interface.

Les fenêtres contextuelles `hint` sont généralement affichées et masquées en réponse à des évènements JavaScript non liés au clic, tels que [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)/[`mouseout`](/fr/docs/Web/API/Element/mouseout_event) et [`focus`](/fr/docs/Web/API/Element/focus_event)/[`blur`](/fr/docs/Web/API/Element/blur_event). Cliquer sur un bouton pour ouvrir une fenêtre contextuelle `hint` provoquerait la fermeture légère d'une fenêtre contextuelle `auto` déjà ouverte.

Consultez notre [démonstration d'une fenêtre contextuelle d'indication <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)) pour un exemple qui se comporte exactement comme décrit ci‑dessus. La démonstration présente une barre de boutons&nbsp;; lorsqu'on appuie dessus, les boutons affichent des sous-menus contextuels `auto` dans lesquels d'autres options peuvent être sélectionnées. Cependant, lorsqu'on passe la souris dessus ou qu'ils ont le focus, les boutons affichent aussi des info-bulles (`hint`) pour indiquer à l'utilisateur ce que fait chaque bouton, sans masquer un sous-menu déjà visible.

Dans les sections suivantes, nous passerons en revue toutes les parties importantes du code.

> [!NOTE]
> Vous _pouvez_ utiliser les fenêtres contextuelles `hint` conjointement avec des fenêtres contextuelles `manual`, bien qu'il n'y ait pas vraiment de raison impérative de le faire. Elles sont conçues pour contourner certaines limites des fenêtres contextuelles `auto`, permettant des cas d'utilisation comme celui décrit dans cette section.
>
> Notez également que `popover="hint"` revient à `popover="manual"` dans les navigateurs qui ne supportent pas la fonctionnalité.

> [!NOTE]
> Il existe une fonctionnalité connexe — les **invocateurs d'intérêt** — qui permet de créer facilement et de manière cohérente des fenêtres contextuelles au survol/à la sélection, sans nécessiter de JavaScript. Consultez [Utiliser les invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) pour en savoir plus.

### Créer les sous-menus avec `popover="auto"`

Les sous-menus contextuels sont créés de manière déclarative, à l'aide de fenêtres contextuelles `auto`.

D'abord, les boutons de contrôle&nbsp;:

```html
<section id="button-bar">
  <button popovertarget="submenu-1" popovertargetaction="toggle" id="menu-1">
    Menu A
  </button>

  <button popovertarget="submenu-2" popovertargetaction="toggle" id="menu-2">
    Menu B
  </button>

  <button popovertarget="submenu-3" popovertargetaction="toggle" id="menu-3">
    Menu C
  </button>
</section>
```

Ensuite, les fenêtres contextuelles elles‑mêmes&nbsp;:

```html
<div id="submenu-1" popover="auto">
  <button>Option A</button><br /><button>Option B</button>
</div>
<div id="submenu-2" popover="auto">
  <button>Option A</button><br /><button>Option B</button>
</div>
<div id="submenu-3" popover="auto">
  <button>Option A</button><br /><button>Option B</button>
</div>
```

### Créer les info‑bulles avec `popover="hint"`

Les fenêtres contextuelles des sous‑menus fonctionnent bien tels quels, ils s'ouvrent lorsque les boutons de la barre d'outils sont pressés. Mais comment afficher également des info‑bulles lorsque les boutons sont survolés ou ont le focus&nbsp;? D'abord, on crée les info‑bulles en HTML, en utilisant des fenêtres contextuelles `hint`&nbsp;:

```html
<div id="tooltip-1" class="tooltip" popover="hint">Tooltip A</div>
<div id="tooltip-2" class="tooltip" popover="hint">Tooltip B</div>
<div id="tooltip-3" class="tooltip" popover="hint">Tooltip C</div>
```

> [!NOTE]
> Dans la démo ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)), les info‑bulles sont imbriquées à l'intérieur des boutons de contrôle des fenêtres contextuelles. Cela fournit un meilleur repli dans les navigateurs qui ne prennent pas en charge le positionnement par ancre CSS — les fenêtres contextuelles `hint` apparaissent à côté des boutons de contrôle associés plutôt qu'à un autre emplacement.

Pour contrôler l'affichage et le masquage, nous devons utiliser JavaScript. Tout d'abord, nous récupérons des références vers les fenêtres contextuelles `hint` et les boutons de contrôle, dans deux {{DOMxRef("NodeList")}} distincts, en utilisant {{DOMxRef("Document.querySelectorAll()")}}&nbsp;:

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

Ensuite, nous créons une fonction `addEventListeners()` qui attache quatre écouteurs d'évènements (via {{DOMxRef("EventTarget.addEventListener()")}}) à un {{HTMLElement("button")}} donné, choisi en prenant le `<button>` à un indice spécifique dans la `NodeList` `btns`. Les fonctions agissent sur la fenêtre contextuelle `hint` au même indice dans la `NodeList` `tooltips`, ce qui permet de garder les boutons et les info‑bulles synchronisés — afficher/masquer la bonne info‑bulle lorsqu'un bouton est activé.

Les écouteurs d'évènements appellent la méthode [show](/fr/docs/Web/API/HTMLElement/showPopover) du popover sur [`mouseover`](/fr/docs/Web/API/Element/mouseover_event) et [`focus`](/fr/docs/Web/API/Element/focus_event), et la méthode [hide](/fr/docs/Web/API/HTMLElement/hidePopover) sur [`mouseout`](/fr/docs/Web/API/Element/mouseout_event) et [`blur`](/fr/docs/Web/API/Element/blur_event), ce qui signifie que les info‑bulles sont accessibles à la souris et au clavier.

```js
function addEventListeners(i) {
  btns[i].addEventListener("mouseover", () => {
    tooltips[i].showPopover({ source: btns[i] });
  });

  btns[i].addEventListener("mouseout", () => {
    tooltips[i].hidePopover();
  });

  btns[i].addEventListener("focus", () => {
    tooltips[i].showPopover({ source: btns[i] });
  });

  btns[i].addEventListener("blur", () => {
    tooltips[i].hidePopover();
  });
}
```

Enfin, nous utilisons une boucle [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for) pour itérer sur les `<button>` de la `NodeList` `btns`, en appelant `addEventListeners()` pour chacun afin que tous disposent des écouteurs d'évènements souhaités.

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## Mettre en forme les fenêtres contextuelles

Le pseudo-élément {{CSSxRef("::backdrop")}} est un élément plein écran placé directement derrière les fenêtres contextuelles (<i lang="en">popover</i> en anglais) affichées dans la {{Glossary("top layer", "couche supérieure")}}, ce qui permet d'ajouter des effets au contenu de la page situé derrière les fenêtres contextuelles si nécessaire. Par exemple, vous pouvez vouloir flouter le contenu se trouvant derrière la fenêtre contextuelle pour aider l'utilisateur·ice à se concentrer sur son contenu&nbsp;:

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

Consultez notre [exemple d'arrière-plan flouté pour fenêtre contextuelle <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/blur-background/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)) pour voir un rendu.

### Positionnement des fenêtres contextuelles

En regardant les premiers exemples liés au début de l'article, vous avez peut‑être remarqué que les fenêtres contextuelles apparaissent au milieu de la zone d'affichage, s'adaptent à leur contenu et possèdent une bordure noire. Il s'agit du style par défaut, défini dans la feuille de style de l'agent utilisateur par la règle suivante&nbsp;:

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

### Positionnement d'ancrage des fenêtres contextuelles

L'API Popover propose une autre option de positionnement utile. Si vous souhaitez positionner une fenêtre contextuelle par rapport à son invocateur plutôt que par rapport à la zone d'affichage ou à un ancêtre positionné, vous pouvez tirer parti du fait que les fenêtres contextuelles et leurs invocateurs disposent d'une **référence d'ancre implicite**.

[Associer n'importe quel type de fenêtre contextuelle à son invocateur](#autres_façons_détablir_une_relation_invocateur—fenêtre_contextuelle) crée une référence d'ancre implicite entre les deux. Cela fait de l'invocateur l'**élément ancre** de la fenêtre contextuelle, ce qui signifie que vous pouvez positionner la fenêtre contextuelle par rapport à cet élément en utilisant le [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning).

Parce que l'association entre la fenêtre contextuelle et l'invocateur est implicite, il n'est pas nécessaire de créer une association explicite à l'aide des propriétés {{CSSxRef("anchor-name")}} et {{CSSxRef("position-anchor")}}. Vous devez toutefois définir de positionnement CSS.

Par exemple, vous pouvez utiliser une combinaison de valeurs de fonction {{CSSxRef("anchor()")}} appliquées aux {{Glossary("inset properties", "propriétés inset")}}, et des valeurs `anchor-center` sur les propriétés d'alignement&nbsp;:

```css
.my-popover {
  margin: 0;
  inset: auto;
  bottom: calc(anchor(top) + 20px);
  justify-self: anchor-center;
}
```

Ou vous pouvez utiliser la propriété {{CSSxRef("position-area")}}&nbsp;:

```css
.my-popover {
  margin: 0;
  inset: auto;
  position-area: top;
}
```

Lorsque vous utilisez {{CSSxRef("position-area")}} ou {{CSSxRef("anchor()")}} pour positionner des fenêtres contextuelles, gardez à l'esprit que [les styles par défaut des fenêtres contextuelles <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) peuvent entrer en conflit avec la position que vous essayez d'obtenir. Les coupables habituels sont les styles par défaut des propriétés `margin` et `inset`, il est donc conseillé de les réinitialiser, comme dans les exemples ci‑dessus. Le groupe de travail CSS, travaille [sur des moyens d'éviter d'avoir besoin de ce contournement<sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/10258).

Consultez [Utiliser le positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#positionnement_relatif_des_éléments_à_leur_ancre) pour plus de détails sur l'association des éléments ancre et positionnés, et sur le positionnement des éléments par rapport à leur ancre.

> [!NOTE]
> Pour un exemple utilisant cette association implicite, consultez notre [démonstration fenêtre contextuelle d'indication <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/popover-hint/) ([source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)). Si vous regardez le code CSS, vous verrez qu'aucune association d'ancre explicite n'est faite en utilisant les propriétés {{CSSxRef("anchor-name")}} et {{CSSxRef("position-anchor")}}.

> [!NOTE]
> Si vous souhaitez supprimer la référence d'ancre implicite pour empêcher la fenêtre contextuelle d'être ancrée à son invocateur, vous pouvez le faire en définissant la propriété `position-anchor` de la fenêtre contextuelle sur un nom d'ancre inexistant dans le document courant, par exemple `--not-an-anchor-name`. Voir aussi [supprimer une association d'ancre](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#supprimer_lassociation_à_une_ancre).

## Animation des fenêtres contextuelles

Les <i lang="en">popovers</i> sont mis en forme avec la déclaration `display: none;` quand ils sont fermés et avec `display: block;` quand ils sont ouverts, et sont respectivement retirés/ajoutés à {{Glossary("top layer", "la couche supérieure")}} et à [l'arbre d'accessibilité](/fr/docs/Web/Performance/Guides/How_browsers_work#construire_larbre_daccessibilité). En conséquence, pour que les <i lang="en">popovers</i> puissent être animés, la propriété {{CSSxRef("display")}} doit pouvoir être animée. Les [navigateurs compatibles](/fr/docs/Web/CSS/Reference/Properties/display#compatibilité_des_navigateurs) animent `display` avec [une variation discrète](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Concrètement, le navigateur passera de la valeur `none` à une autre valeur de manière à ce que l'animation affiche le contenu tout du long. Ainsi&nbsp;:

- Quand `display` est animé de `none` à `block` (ou toute autre valeur visible de `display`), la valeur passera à `block` à 0% de la durée de l'animation, ce qui la rendra visible du début à la fin.
- Quand `display` est animé de `block` (ou toute autre valeur visible de `display`) à `none`, la valeur passera à `none` à 100% de la durée de l'animation, ce qui la rendra visible du début à la fin.

> [!NOTE]
> Quand on anime en utilisant [les transitions CSS](/fr/docs/Web/CSS/Guides/Transitions), la déclaration [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/transition-behavior) doit être appliquée sur l'élément <i lang="en">popover</i> pour activer le comportement décrit ci-avant. Quand on anime avec [les animations CSS](/fr/docs/Web/CSS/Guides/Animations), le comportement décrit ci-avant est activé par défaut, et il n'y a pas besoin de définir cette propriété.

### Les transitions sur les <i lang="en">popovers</i>

Quand on anime un <i lang="en">popover</i> à l'aide des transitions CSS, les éléments suivant sont nécessaires&nbsp;:

- Règle @ {{CSSxRef("@starting-style")}}
  - : Définissez un ensemble de valeurs de départ pour les propriétés appliquées au <i lang="en">popover</i> qui vont être la cible de la transformation. Ces valeurs seront utilisées lors de la première transition pour éviter des comportements inattendus. Par défaut, les transitions CSS ne sont possibles que quand une propriété change de valeur sur un élément visible. Elles ne s'appliquent pas lors du premier affichage d'un élément, ou quand `display` passe de `none` à une autre valeur.
- La propriété {{CSSxRef("display")}}
  - : Ajoutez `display` à la liste des transitions pour que le <i lang="en">popover</i> garde la valeur `display: block` (ou tout autre valeur visible de `display`) pendant toute la transition pour s'assurer que le contenu du <i lang="en">popover</i> soit visible tout du long.
- La propriété {{CSSxRef("overlay")}}
  - : Ajoutez `overlay` à la liste des transitions pour s'assurer que le <i lang="en">popover</i> reste dans [la couche supérieure](/fr/docs/Glossary/Top_layer) pendant toute la transition pour s'assurer que le contenu du <i lang="en">popover</i> soit visible tout du long.
- La propriété {{CSSxRef("transition-behavior")}}
  - : Définissez `transition-behavior: allow-discrete` sur les transitions `display` et `overlay` (ou sur le raccourci {{CSSxRef("transition")}}) pour activer les transitions discrètes sur ces deux propriétés qui ne sont pas animables par défaut.

Prenons un exemple pour voir ce que ça donne&nbsp;:

#### HTML

Le code HTML comprend un élément {{HTMLElement("div")}} transformé en <i lang="en">popover</i> avec l'attribut global [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), et un élément {{HTMLElement("button")}} qui contrôle l'affichage du <i lang="en">popover</i> avec l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/input#popovertarget).

```html
<button popovertarget="mypopover">Afficher le popover</button>
<div popover="auto" id="mypopover">
  Je suis un Popover ! Je devrais être animé.
</div>
```

#### CSS

Les deux propriétés du <i lang="en">popover</i> que nous voulons transitionner sont {{CSSxRef("opacity")}} et {{CSSxRef("transform")}}. Nous voulons que le <i lang="en">popover</i> apparaisse/disparaisse avec une transition en fondu enchaîné tout en grossissant ou rapetissant horizontalement. Pour cela, nous définissons un état de départ pour ces propriétés pour le <i lang="en">popover</i> fermé (sélectionné avec le [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[popover]`), et un état final correspondant au <i lang="en">popover</i> ouvert (sélectionné avec la pseudo-classe {{CSSxRef(":popover-open")}}). Nous utilisons également la propriété {{CSSxRef("transition")}} pour définir les propriétés à animer et la durée de la transition.

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

/* Le sélecteur d'imbrication ne peut pas
   représenter les pseudo-éléments et on ne peut
   donc pas imbriquer cette règle starting-style. */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: transparent;
  }
}
```

Comme vu précédemment, nous avons également&nbsp;:

- Défini un état de départ pour la `transition` dans un bloc `@starting-style`
- Ajouté `display` à la liste des propriétés à transitionner de manière à ce que l'élément animé soit visible (avec `display: block`) pendant toute l'animation. Sans cela, la transition de fermeture ne serait pas visible, le popover disparaîtrait instantanément.
- Ajouté `overlay` à la liste des propriétés à transitionner de manière à ce que l'élément popover reste dans [la couche supérieure](/fr/docs/Glossary/Top_layer) jusqu'à la fin de l'animation. L'impact de cet ajout n'est pas nécessairement perceptible pour des animations aussi simples que celle-ci. Cependant, dans certains cas plus complexes, le fait d'omettre cette propriété peut avoir pour conséquence de faire disparaitre l'élément avant la fin de l'animation de transition.
- Ajouté `allow-discrete` aux transitions des propriétés `display` et `overlay` pour activer les [transitions discrètes](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) de ces propriétés.

Vous noterez que nous avons également défini une transition pour le pseudo-élément {{CSSxRef("::backdrop")}} qui apparait derrière le <i lang="en">popover</i> quand il s'ouvre, provoquant un effet d'assombrissement du contenu de la page.

#### Résultat

Le code donne ce résultat&nbsp;:

{{EmbedLiveSample("", "100%", "200")}}

> [!NOTE]
> Parce que les <i lang="en">popovers</i> passent de `display: none` à `display: block` à chaque fois qu'ils apparaissent, le <i lang="en">popover</i> transitionne des styles définis dans `@starting-style` aux styles définis dans `[popover]:popover-open` à chaque fois qu'il apparait. Quand le <i lang="en">popover</i> se ferme, il transitionne des styles définis dans `[popover]:popover-open` aux styles définis dans `[popover]`.
>
> Il est possible que les styles de transition pour l'entrée et la sortie puissent être différents. Regarder [notre démonstration d'utilisation des styles de départ](/fr/docs/Web/CSS/Reference/At-rules/@starting-style#démonstration_de_lutilisation_des_styles_de_départ) pour voir un exemple.

### Les animations sur les fenêtres contextuelles

Quand on anime un <i lang="en">popover</i> avec les animations CSS, il y a un plusieurs différences à connaître&nbsp;:

- On n'écrit pas de bloc `@starting-style`. Les valeurs initiales et finales de `display` sont fournies dans les étapes d'animation `to` et `from`.
- Il n'est pas nécessaire d'activer explicitement les transitions discrètes. Il n'y a pas d'équivalent à `allow-discrete` pour les étapes d'animation.
- Il n'est pas non plus nécessaire de définir `overlay` dans les étapes d'animation, c'est l'animation de `display` qui fait passer le <i lang="en">popover</i> de visible à masqué.

Prenons un exemple.

#### HTML

Le HTML contient un élément {{HTMLElement("div")}} déclaré comme fenêtre contextuelle, et un élément {{HTMLElement("button")}} désigné comme commande d'affichage de la fenêtre contextuelle&nbsp;:

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
    background-color: transparent;
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}
```

#### Résultat

Le code donne ce résultat&nbsp;:

{{EmbedLiveSample("Les animations sur les fenêtres contextuelles", "100%", "200")}}

## Voir aussi

- [Collection d'exemples de l'API Popover <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/)
