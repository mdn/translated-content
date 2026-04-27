---
title: "Élément HTML `<dialog>` : l'élément de boîte de dialogue"
short-title: <dialog>
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

L'élément [HTML](/fr/docs/Web/HTML) **`<dialog>`** représente une boite de dialogue ou un composant interactif (par exemple un inspecteur ou une fenêtre).

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> L'attribut `tabindex` ne doit pas être utilisé sur l'élément `<dialog>`. Voir les [notes additionnelles](#notes_additionnelles).

- `closedby`
  - : Définit les types d'actions utilisateur·ice qui peuvent être utilisées pour fermer l'élément `<dialog>`. Cet attribut distingue trois méthodes de fermeture&nbsp;:
    - Une _action de rejet léger_, où le `<dialog>` est fermé lorsque l'utilisateur·ice clique ou appuie à l'extérieur de la boîte de dialogue. Cela équivaut au comportement [«&nbsp;rejet léger&nbsp;» des fenêtres contextuelles en état «&nbsp;auto&nbsp;»](/fr/docs/Web/API/Popover_API/Using#létat_automatique_et_la_fermeture_légère).
    - Une _action spécifique à la plateforme_, comme l'appui sur la touche <kbd>Échap</kbd> sur les plateformes de bureau, ou un geste «&nbsp;retour&nbsp;» ou «&nbsp;fermer&nbsp;» sur les plateformes mobiles.
    - Un mécanisme défini par le·la développeur·euse, tel qu'un {{HTMLElement("button")}} avec un gestionnaire [`click`](/fr/docs/Web/API/Element/click_event) qui appelle {{DOMxRef("HTMLDialogElement.close()")}} ou la soumission d'un {{HTMLElement("form")}}.

    Valeurs possibles&nbsp;:
    - `any`
      - : Le dialogue peut être fermé par n'importe laquelle des trois méthodes.
    - `closerequest`
      - : Le dialogue peut être fermé par une action spécifique à la plateforme ou un mécanisme défini par le·la développeur·euse.
    - `none`
      - : Le dialogue ne peut être fermé que par un mécanisme défini par le·la développeur·euse.

    Si l'élément `<dialog>` ne possède pas de valeur `closedby` valide&nbsp;:
    - s'il a été ouvert avec {{DOMxRef("HTMLDialogElement.showModal()", "showModal()")}}, il se comporte comme si la valeur était `"closerequest"`
    - sinon, il se comporte comme si la valeur était `"none"`

- `open`
  - : Indique que la boîte de dialogue est active et disponible pour l'interaction. Si l'attribut `open` n'est pas présent, la boîte de dialogue n'est pas visible pour l'utilisateur·ice.
    Il est recommandé d'utiliser les méthodes `.show()` ou `.showModal()` pour afficher les dialogues, plutôt que l'attribut `open`. Si un `<dialog>` est ouvert avec l'attribut `open`, il est non-modal.

    > [!NOTE]
    > Bien qu'il soit possible d'alterner entre les états ouvert et fermé d'une boîte de dialogue non-modale en ajoutant ou retirant l'attribut `open`, cette approche n'est pas recommandée. Voir {{DOMxRef("HTMLDialogElement.open", "open")}} pour plus d'informations.

## Description

L'élément HTML `<dialog>` est utilisé pour créer des boîtes de dialogue modale qui peuvent être interactives ou non. Les boîtes de dialogue modale interrompent l'interaction, le reste de la page étant inerte, tandis que les boîtes de dialogue non-modale permettent une interaction avec le reste de la page.

### Contrôler les dialogues avec JavaScript

JavaScript peut être utilisé pour afficher l'élément `<dialog>`. L'utilisation de la méthode {{DOMxRef("HTMLDialogElement.showModal()", ".showModal()")}} pour afficher une boîte de dialogue modale et la méthode {{DOMxRef("HTMLDialogElement.show()", ".show()")}} pour afficher une boîte de dialogue non-modale. La boîte de dialogue peut être fermée à l'aide de la méthode {{DOMxRef("HTMLDialogElement.close()", ".close()")}} ou en utilisant la méthode [`dialog`](/fr/docs/Web/HTML/Reference/Elements/form#method) lors de la soumission d'un formulaire `<form>` imbriqué dans l'élément `<dialog>`. Les boîtes de dialogue modales peuvent également être fermées en appuyant sur la touche <kbd>Échap</kbd>.

### Boîtes de dialogue modales utilisant les commandes d'invocation

Les boîtes de dialogue modales peuvent être ouvertes et fermées de façon déclarative à l'aide des attributs HTML de [l'API des commandes d'invocation](/fr/docs/Web/API/Invoker_Commands_API) HTML attributes [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor) et [`command`](/fr/docs/Web/HTML/Reference/Elements/button#command), qui peuvent être définis sur les éléments {{HTMLElement("button")}}.

L'attribut `command` définit la commande particulière qui doit être envoyée lorsque l'élément `<button>` est cliqué, tandis que `commandfor` définit un `id` pour la boîte de dialogue cible.
Les commandes qui peuvent être envoyées pour les boîtes de dialogue sont [`"show-modal"`](/fr/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/fr/docs/Web/HTML/Reference/Elements/button#close) et [`"request-close"`](/fr/docs/Web/HTML/Reference/Elements/button#request-close).

L'exemple HTML ci-dessous montre comment appliquer les attributs à un élément `<button>` afin qu'il puisse être pressé pour ouvrir une boîte de dialogue modale `<dialog>` avec un `id` de `"mon-dialogue"`.

```html
<button command="show-modal" commandfor="mon-dialogue">
  Ouvrir la boîte de dialogue
</button>

<dialog id="mon-dialogue">
  <p>
    Cette boîte de dialogue a été ouverte à l'aide d'une commande d'invocation.
  </p>
  <button commandfor="mon-dialogue" command="close">Fermer</button>
</dialog>
```

### Boîtes de dialogue non-modales utilisant les commandes de la fenêtre contextuelle

Les boîtes de dialogue non-modales peuvent être ouvertes, fermées et basculées de façon déclarative à l'aide de [l'API Popover](/fr/docs/Web/API/Popover_API) et des attributs HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget) et [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction), qui peuvent être définis sur les éléments {{HTMLElement("button")}} et {{HTMLElement("input")}}.

L'élément `<dialog>` doit être transformé en fenêtre contextuelle en ajoutant l'attribut `popover`.
Vous pouvez ensuite utiliser `popovertarget` sur un bouton/une entrée pour indiquer la cible de la fenêtre contextuelle, et `popovertargetaction` pour spécifier l'action à effectuer lorsque le bouton est cliqué.
Notez que, puisque le dialogue est une fenêtre contextuelle, il sera non-modal, vous pouvez donc le fermer en cliquant à l'extérieur du dialogue.

Le HTML ci-dessous montre comment appliquer les attributs à un élément `<button>` afin qu'il puisse être pressé pour afficher et masquer un `<dialog>` non-modale avec un `id` de `"mon-dialogue"`.

```html
<button popovertarget="mon-dialogue">Ouvrir la boîte de dialogue</button>

<dialog id="mon-dialogue" popover>
  <p>Ce dialogue a été ouvert à l'aide d'un attribut popovertargetaction.</p>
  <button popovertarget="mon-dialogue" popovertargetaction="hide">
    Fermer
  </button>
</dialog>
```

L'API Popover fournit également des propriétés pouvant être utilisées pour obtenir et définir l'état en JavaScript.

### Fermer les boîtes de dialogue

Il est important de prévoir un mécanisme de fermeture pour chaque élément `<dialog>`, et de s'assurer que celui-ci fonctionne sur les appareils qui ne disposent peut‑être pas d'un clavier physique.

Il existe de nombreuses façons de fermer une boîte de dialogue&nbsp;:

- Soumettre le formulaire contenu dans l'élément `<dialog>` avec `method="dialog"` défini sur l'élément `<form>` (voir [l'exemple Utiliser l'attribut `open` du dialogue](#utiliser_lattribut_open_du_dialogue)).
- Cliquer à l'extérieur de la zone de dialogue lorsque le «&nbsp;rejet léger&nbsp;» est activé (voir [les attributs HTML de l'API de la fenêtre contextuelle](#attributs_html_de_lapi_popover)).
- Appuyer sur la touche <kbd>Échap</kbd>, dans les dialogues où ce comportement est activé (voir [les attributs HTML de l'API de la fenêtre contextuelle](#attributs_html_de_lapi_popover)).
- Appeler la méthode {{DOMxRef("HTMLDialogElement.close()")}} (voir [l'exemple de boîte de dialogue modale](#création_dune_boîte_de_dialogue_modale)).

### Mise en forme CSS

Un `<dialog>` peut être sélectionné en utilisant son nom d'élément (comme tout autre élément), et vous pouvez également faire correspondre son état en utilisant des pseudo-classes telles que {{CSSxRef(":modal")}} et {{CSSxRef(":open")}}.

Le pseudo-élément CSS {{CSSxRef("::backdrop")}} peut être utilisé pour créer un style derrière un élément `<dialog>` lorsque le dialogue est affiché avec {{DOMxRef("HTMLDialogElement.showModal()")}}. Par exemple, pour atténuer le contenu inaccessible derrière la boîte de dialogue modale.

## Notes additionnelles

- Les éléments {{HTMLElement("form")}} peuvent fermer un dialogue s'ils possèdent l'attribut `method="dialog"` ou si le bouton utilisé pour soumettre le formulaire a l'attribut [`formmethod="dialog"`](/fr/docs/Web/HTML/Reference/Elements/input#formmethod). Lorsqu'un tel formulaire est soumis, le dialogue se ferme avec sa propriété [`returnValue`](/fr/docs/Web/API/HTMLDialogElement/returnValue) définie sur la `value` (valeur) du bouton qui a été utilisé pour soumettre le formulaire.
- L'attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus) peut être ajouté à l'élément avec lequel la personne est censée interagir immédiatement après l'ouverture d'une boîte de dialogue modale. S'il n'y a pas d'élément impliquant une interaction immédiate, l'attribut `autofocus` peut être ajouté à l'élément `<dialog>` lui-même.
- Ne pas ajouter l'attribut `tabindex` à l'élément `<dialog>` car il n'est pas interactif et ne reçoit pas la sélection. Le contenu du dialogue, y compris le bouton de fermeture contenu dans le dialogue, peut recevoir la sélection et être interactif.

## Accessibilité

Lors de l'implémentation d'une fenêtre de dialogue, il est important de considérer l'endroit le plus approprié pour placer le point de sélection de la personne. Lorsque l'on utilise {{DOMxRef("HTMLDialogElement.showModal()")}} pour ouvrir un `<dialog>`, la sélection est placée sur le premier élément imbriqué pouvant recevoir la sélection. Indiquer explicitement l'emplacement initial de la sélection à l'aide de l'attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus) permet de s'assurer que la sélection initiale est placée sur l'élément considéré comme le meilleur emplacement initial pour un dialogue particulier. En cas de doute, comme il n'est pas toujours possible de savoir où la sélection initiale peut être placée dans un dialogue, en particulier dans les cas où le contenu d'un dialogue est rendu dynamiquement lorsqu'il est invoqué, l'élément `<dialog>` lui-même peut fournir le meilleur emplacement initial.

Veillez à ce qu'un mécanisme soit prévu pour permettre de fermer la boîte de dialogue. La meilleure façon de s'assurer que toutes les personnes peuvent fermer la boîte de dialogue est d'inclure un bouton explicite à cet effet, tel qu'un bouton de confirmation, d'annulation ou de fermeture.

Par défaut, une boîte de dialogue invoquée par la méthode `showModal()` peut être fermée en appuyant sur la touche <kbd>Échap</kbd>. Une boîte de dialogue non-modale ne se ferme pas par la touche <kbd>Échap</kbd> par défaut, et selon ce que représente la boîte de dialogue non-modale, ce comportement n'est peut-être pas souhaitable. Les utilisateur·ice·s de clavier s'attendent à ce que la touche <kbd>Échap</kbd> ferme les boîtes de dialogue modales&nbsp;; veillez à ce que ce comportement soit implémenté et maintenu. Si plusieurs boîtes de dialogue modales sont ouvertes, l'appui sur la touche <kbd>Échap</kbd> ne doit fermer que la dernière boîte de dialogue affichée. Lorsque l'on utilise `<dialog>`, ce comportement est fourni par le navigateur.

Bien que les boîtes de dialogue puissent être créées à l'aide d'autres éléments, l'élément natif `<dialog>` offre des caractéristiques d'utilisation et d'accessibilité qui doivent être reproduites si vous utilisez d'autres éléments dans un but similaire. Si vous créez une implémentation de dialogue personnalisée, assurez-vous que tous les comportements par défaut attendus sont pris en charge et que les recommandations d'étiquetage appropriées sont suivies.

L'élément `<dialog>` est exposé par les navigateurs d'une manière similaire aux dialogues personnalisés qui utilisent l'attribut ARIA [role="dialog"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role). Les éléments `<dialog>` invoqués par la méthode `showModal()` ont implicitement [aria-modal="true"](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), alors que les éléments `<dialog>` invoqués par la méthode `show()` ou affichés en utilisant l'attribut `open` ou en changeant la propriété CSS `display` par défaut d'un élément HTML `<dialog>` sont exposés en tant que `[aria-modal="false"]`. Lors de l'implémentation de dialogues modaux, tout ce qui n'est pas le `<dialog>` et son contenu doit être rendu inerte en utilisant l'attribut HTML universel [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert). Lorsque l'on utilise `<dialog>` avec la méthode `HTMLDialogElement.showModal()`, ce comportement est fourni par le navigateur.

## Exemples

### Attributs HTML de l'API Invoker Command

Cet exemple montre comment vous pouvez ouvrir et fermer une boîte de dialogue modale en utilisant les attributs HTML [`commandfor`](/fr/docs/Web/HTML/Reference/Elements/button#commandfor) et [`command`](/fr/docs/Web/HTML/Reference/Elements/button#command) de [l'API Invoker Commands](/fr/docs/Web/API/Invoker_Commands_API).

Tout d'abord, nous déclarons un élément {{HTMLElement("button")}}, en définissant l'attribut `command` sur [`"show-modal"`](/fr/docs/Web/HTML/Reference/Elements/button#show-modal), et l'attribut `commandfor` sur l'`id` du dialogue à ouvrir (`mon-dialogue`).
Ensuite, nous déclarons un élément `<dialog>` qui contient un `<button>` «&nbsp;Fermer&nbsp;». Ce bouton envoie la commande [`"close"`](/fr/docs/Web/HTML/Reference/Elements/button#close) au même `id` de dialogue.

```html
<button command="show-modal" commandfor="mon-dialogue">
  Ouvrir le dialogue
</button>

<dialog id="mon-dialogue">
  <p>Ce dialogue a été ouvert en utilisant une commande d'invocation.</p>
  <button commandfor="mon-dialogue" command="close">Fermer</button>
</dialog>
```

#### Résultat

Ouvrez le dialogue en appuyant sur le bouton «&nbsp;Ouvrir le dialogue&nbsp;».
Vous pouvez fermer le dialogue en sélectionnant le bouton «&nbsp;Fermer&nbsp;» ou en appuyant sur la touche <kbd>Échap</kbd>.

{{EmbedLiveSample("Attributs HTML de l'API Invoker Command", "100%", 200)}}

### Attributs HTML de l'API Popover

Cet exemple montre comment vous pouvez ouvrir et fermer un dialogue non modal en utilisant les attributs HTML [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget) et [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction) de [l'API Popover](/fr/docs/Web/API/Popover_API).

Un `<dialog>` est transformé en popover en ajoutant l'attribut `popover`.
Comme nous n'avons pas défini de valeur pour l'attribut, la valeur par défaut `"auto"` est utilisée.
Ça permet un comportement de «&nbsp;fermeture légère&nbsp;», permettant de fermer le dialogue en cliquant en dehors du dialogue ou en appuyant sur la touche <kbd>Échap</kbd>.
Nous aurions pu à la place définir `popover="manual"` pour désactiver le comportement de «&nbsp;fermeture légère&nbsp;», auquel cas le dialogue devrait être fermé en utilisant le bouton «&nbsp;Fermer&nbsp;».

On notera que nous n'avons pas défini l'attribut `popovertargetaction` pour le `<button>` qui ouvre le dialogue.
Il n'est pas nécessaire dans ce cas, car sa valeur par défaut est `toggle`, ce qui permet de basculer le dialogue entre ses états ouvert et fermé lorsque le bouton est cliqué.

```html
<button popovertarget="mon-dialogue">Ouvrir le dialogue</button>

<dialog id="mon-dialogue" popover>
  <p>Ce dialogue a été ouvert en utilisant un attribut popovertargetaction.</p>
  <button popovertarget="mon-dialogue" popovertargetaction="hide">
    Fermer
  </button>
</dialog>
```

#### Résultat

Ouvrez le dialogue en appuyant sur le bouton «&nbsp;Ouvrir le dialogue&nbsp;».
Vous pouvez fermer le dialogue en sélectionnant le bouton «&nbsp;Fermer&nbsp;» ou en appuyant sur la touche <kbd>Échap</kbd>.
Vous pouvez également le fermer en cliquant en dehors du dialogue, car il est non-modal.

{{EmbedLiveSample("Attributs HTML de l'API Popover", "100%", 200)}}

### Utiliser l'attribut `open` du dialogue

Cet exemple montre comment vous pouvez définir l'attribut booléen `open` sur un élément `<dialog>`, afin de créer un dialogue non modal uniquement en HTML qui est déjà ouvert lorsque la page se charge.

Le dialogue peut être fermé en cliquant sur le bouton «&nbsp;OK&nbsp;» car l'attribut `method` dans l'élément `<form>` est défini sur `"dialog"`.
Dans ce cas, aucun JavaScript n'est nécessaire pour fermer le formulaire.

```html
<dialog open>
  <p>Salutations, à toutes et à tous&nbsp;!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Résultat

Cette boîte de dialogue est initialement ouverte et non-modale en raison de la présence de l'attribut `open`.
Après avoir cliqué sur «&nbsp;OK&nbsp;», la boîte de dialogue est fermée, laissant le cadre de résultat vide.

{{EmbedLiveSample("Dialogue uniquement en HTML", "100%", 200)}}

> [!NOTE]
> Rechargez la page pour réinitialiser le résultat.

Lorsque la boîte de dialogue est fermée, aucune méthode n'est prévue pour la rouvrir. C'est pourquoi la méthode préférée pour afficher les boîtes de dialogue non-modales consiste à utiliser la méthode {{DOMxRef("HTMLDialogElement.show()")}}.
Il est possible de basculer l'affichage de la boîte de dialogue en ajoutant ou en retirant l'attribut booléen `open`, mais ce n'est pas la pratique recommandée.

### Création d'une boîte de dialogue modale

Cet exemple montre une boîte de dialogue modale avec un [arrière-plan en dégradé](/fr/docs/Web/CSS/Reference/Values/gradient). La méthode `.showModal()` ouvre la boîte de dialogue modale lorsque le bouton «&nbsp;Afficher la fenêtre&nbsp;» est activé. La boîte de dialogue peut être fermée en appuyant sur la touche <kbd>Échap</kbd> ou avec la méthode `close()` lorsque le bouton «&nbsp;Fermer&nbsp;» de la boîte de dialogue est activé.

Lorsqu'une boîte de dialogue s'ouvre, le navigateur donne, par défaut, la sélection au premier élément pouvant la recevoir dans la boîte de dialogue. Dans cet exemple, l'attribut [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus) est appliqué au bouton «&nbsp;Fermer&nbsp;», lui donnant la sélection à l'ouverture de la boîte de dialogue, car c'est l'élément avec lequel nous nous attendons à ce que la personne interagisse immédiatement après l'ouverture.

#### HTML

```html
<dialog>
  <button autofocus>Fermer</button>
  <p>Cette boîte de dialogue modale a un arrière-plan festif&nbsp;!</p>
</dialog>
<button>Afficher la fenêtre</button>
```

#### CSS

Nous pouvons styliser l'arrière-plan du dialogue en utilisant le pseudo-élément {{CSSxRef("::backdrop")}}.

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

Le dialogue est ouvert de façon modale en utilisant la méthode `.showModal()` et fermé en utilisant la méthode `.close()`.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Le bouton "Afficher la fenêtre" ouvre le dialogue
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Le bouton "Fermer" ferme le dialogue
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Résultat

{{EmbedLiveSample("Création d'une boîte de dialogue modale", "100%", 200)}}

Lorsque la boîte de dialogue modale est affichée, elle apparaît au-dessus de toutes les autres boîtes de dialogue éventuellement présentes. Tout ce qui se trouve en dehors de la boîte de dialogue modale est inerte et les interactions en dehors de cette dernière sont bloquées. Remarquez que lorsque la boîte de dialogue est ouverte, à l'exception d'elle-même, il n'est pas possible d'interagir avec le document&nbsp;; le bouton «&nbsp;Afficher la fenêtre&nbsp;» est en grande partie masqué par l'arrière-plan presque opaque de la boîte de dialogue et est inerte.

### Traitement de la valeur de retour d'une boîte de dialogue

Cet exemple illustre la propriété [`returnValue`](/fr/docs/Web/API/HTMLDialogElement/returnValue) de l'élément `<dialog>` et la fermeture d'une boîte de dialogue modale à l'aide d'un formulaire. Par défaut, la valeur de retour est la chaîne vide ou la valeur du bouton qui soumet le formulaire dans l'élément `<dialog>`, s'il y en a un.

Cet exemple ouvre une boîte de dialogue modale lorsque le bouton «&nbsp;Afficher la fenêtre&nbsp;» est activé. La boîte de dialogue contient un formulaire avec un {{HTMLElement("select")}} et deux {{HTMLElement("button")}}, dont la valeur par défaut est `type="submit"`. Un écouteur d'évènement met à jour la valeur du bouton «&nbsp;Confirmer&nbsp;» lorsque l'option sélectionnée change. Si le bouton «&nbsp;Confirmer&nbsp;» est activé pour fermer la boîte de dialogue, la valeur actuelle du bouton est la valeur de retour. Si la boîte de dialogue est fermée en appuyant sur le bouton «&nbsp;Annuler&nbsp;», la valeur de retour `returnValue` est `cancel`.

Lorsque le dialogue est fermé, la valeur de retour est affichée sous le bouton «&nbsp;Afficher la fenêtre&nbsp;». Si le dialogue est fermé en appuyant sur la touche <kbd>Échap</kbd>, la valeur de retour `returnValue` n'est pas mise à jour et l'événement `close` ne se produit pas, ce qui signifie que le texte dans l'élément {{HTMLElement("output")}} n'est pas mis à jour.

#### HTML

```html
<!-- Boîte de dialogue modale contenant un formulaire -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Animal préféré&nbsp;:
        <select>
          <option value="default">Choisissez…</option>
          <option>Crevette en saumure</option>
          <option>Panda rouge</option>
          <option>Singe-araignée</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Annuler</button>
      <button id="confirmBtn" value="default">Confirmer</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Afficher la fenêtre</button>
</p>
<output></output>
```

#### JavaScript

Le dialogue est ouvert grâce à un écouteur d'évènement sur le bouton «&nbsp;Afficher la fenêtre&nbsp;», qui appelle {{DOMxRef("HTMLDialogElement.showModal()")}} lorsque le bouton est activé.

Le dialogue se ferme lorsque le bouton «&nbsp;Annuler&nbsp;» est activé, car le `<button>` comprend l'attribut [`formmethod="dialog"`](/fr/docs/Web/HTML/Reference/Elements/input/submit#formmethod).
Lorsque la méthode d'un formulaire est [`dialog`](#notes_additionnelles), l'état du formulaire est enregistré mais non soumis, et le dialogue est fermé (l'attribut remplace la méthode par défaut {{HTTPMethod("GET")}} de l'élément {{HTMLElement("form")}}).
Sans `action`, la soumission du formulaire avec la méthode par défaut {{HTTPMethod("GET")}} entraîne le rechargement de la page.
Nous utilisons JavaScript pour empêcher la soumission et fermer le dialogue avec les méthodes {{DOMxRef("event.preventDefault()")}} et {{DOMxRef("HTMLDialogElement.close()")}}, respectivement.

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// Le bouton "Afficher la fenêtre" ouvre la boîte de dialogue modale
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// Le bouton "Annuler" ferme la boîte de dialogue sans soumettre le formulaire grâce à [formmethod="dialog"], ce qui déclenche un événement de fermeture.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "Pas de valeur retournée."
      : `Valeur retournée : ${favDialog.returnValue}.`; // Vérifie la présence de "default" au lieu d'une chaîne vide
});

// Empêche le bouton "Confirmer" de soumettre le formulaire par défaut et ferme la boîte de dialogue avec la méthode `close()`, ce qui déclenche l'événement "close".
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Nous ne voulons pas soumettre ce faux formulaire
  favDialog.close(selectEl.value); // Il faut envoyer la valeur du sélecteur ici.
});
```

#### Résultat

{{EmbedLiveSample("Traitement de la valeur de retour d'une boîte de dialogue", "100%", 300)}}

### Fermer un dialogue contenant un champ requis

Lorsqu'un formulaire à l'intérieur d'un dialogue contient un champ requis, l'agent utilisateur n'autorisera la fermeture du dialogue que si une valeur est fournie pour ce champ requis. Pour fermer un tel dialogue, utilisez soit l'attribut [`formnovalidate`](/fr/docs/Web/HTML/Reference/Elements/input#formnovalidate) sur le bouton de fermeture, soit appelez la méthode `close()` sur l'objet dialogue lorsque le bouton de fermeture est cliqué.

```html
<dialog id="dialog">
  <form method="dialog">
    <p>
      <label>
        Animal préféré&nbsp;:
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="Fermeture normale" />
      <input
        type="submit"
        id="novalidate-close"
        value="Fermeture sans validation"
        formnovalidate />
      <input type="submit" id="js-close" value="Fermeture JS" />
    </div>
  </form>
</dialog>
<p>
  <button id="show-dialog">Afficher la fenêtre</button>
</p>
<output></output>
```

```css hidden
[type="submit"] {
  margin-right: 1rem;
}
```

#### JavaScript

```js
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
```

#### Résultat

{{EmbedLiveSample("Fermer un dialogue contenant un champ requis", "100%", 300)}}

D'après la sortie, il est impossible de fermer le dialogue en utilisant le bouton _Fermeture normale_. En revanche, le dialogue peut être fermé si l'on contourne la validation du formulaire en utilisant l'attribut `formnovalidate` sur le bouton _Fermeture sans validation_. Le code peut aussi appeler `dialog.close()` pour fermer ce type de dialogue.

### Comparaison des comportements selon la valeur de `closedby`

Cet exemple illustre la différence de comportement entre les différentes valeurs de l'attribut [`closedby`](#closedby).

#### HTML

Nous fournissons trois éléments {{HTMLElement("button")}} et trois éléments `<dialog>`. Chaque bouton ouvre un dialogue différent qui illustre le comportement d'une des trois valeurs de l'attribut `closedby`&nbsp;: `none`, `closerequest` et `any`. Notez que chaque élément `<dialog>` contient un bouton `<button>` qui sert à le fermer.

```html live-sample___closedbyvalues
<p>Choisissez un type de <code>&lt;dialog&gt;</code>&nbsp;:</p>
<div id="controls">
  <button id="none-btn"><code>closedby="none"</code></button>
  <button id="closerequest-btn">
    <code>closedby="closerequest"</code>
  </button>
  <button id="any-btn"><code>closedby="any"</code></button>
</div>

<dialog closedby="none">
  <h2><code>closedby="none"</code></h2>
  <p>
    Fermeture possible uniquement avec un mécanisme prévu, dans ce cas en
    appuyant sur le bouton «&nbsp;Fermer&nbsp;» ci‑dessous.
  </p>
  <button class="close">Fermer</button>
</dialog>

<dialog closedby="closerequest">
  <h2><code>closedby="closerequest"</code></h2>
  <p>
    Fermeture possible avec le bouton «&nbsp;Fermer&nbsp;» ou la touche Échap.
  </p>
  <button class="close">Fermer</button>
</dialog>

<dialog closedby="any">
  <h2><code>closedby="any"</code></h2>
  <p>
    Fermeture possible avec le bouton «&nbsp;Fermer&nbsp;», la touche Échap, ou
    en cliquant en dehors du dialogue. Comportement de fermeture par clic à
    l'extérieur.
  </p>
  <button class="close">Fermer</button>
</dialog>
```

```css hidden live-sample___closedbyvalues
body {
  font-family: sans-serif;
}

#controls {
  display: flex;
  justify-content: space-around;
}

dialog {
  width: 480px;
  border-radius: 5px;
  border-color: rgb(0 0 0 / 0.3);
}

dialog h2 {
  margin: 0;
}

dialog p {
  line-height: 1.4;
}
```

#### JavaScript

Ici, nous attribuons des variables pour référencer les boutons de contrôle principaux, les éléments `<dialog>` et les boutons «&nbsp;Fermer&nbsp;» à l'intérieur des dialogues. Nous attachons un écouteur d'événement [`click`](/fr/docs/Web/API/Element/click_event) à chaque bouton de contrôle à l'aide de [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener), le gestionnaire d'événement ouvre l'élément `<dialog>` associé avec [`showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal). Nous parcourons ensuite les références aux boutons «&nbsp;Fermer&nbsp;», en affectant à chacun un gestionnaire `click` qui ferme son élément `<dialog>` avec [`close()`](/fr/docs/Web/API/HTMLDialogElement/close).

```js live-sample___closedbyvalues
const noneBtn = document.getElementById("none-btn");
const closerequestBtn = document.getElementById("closerequest-btn");
const anyBtn = document.getElementById("any-btn");

const noneDialog = document.querySelector("[closedby='none']");
const closerequestDialog = document.querySelector("[closedby='closerequest']");
const anyDialog = document.querySelector("[closedby='any']");

const closeBtns = document.querySelectorAll(".close");

noneBtn.addEventListener("click", () => {
  noneDialog.showModal();
});

closerequestBtn.addEventListener("click", () => {
  closerequestDialog.showModal();
});

anyBtn.addEventListener("click", () => {
  anyDialog.showModal();
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
});
```

#### Résultat

Le rendu est le suivant&nbsp;:

{{EmbedLiveSample("Comparaison des comportements selon la valeur de `closedby`", "100%", 300)}}

Essayez de cliquer sur chaque bouton pour ouvrir un dialogue. Le premier ne peut être fermé que par le clic sur son bouton «&nbsp;Fermer&nbsp;». Le second peut également être fermé avec une action spécifique à l'appareil telle que l'appui sur la touche <kbd>Échap</kbd>. Le troisième présente le [comportement dit de «&nbsp;fermeture légère&nbsp;»](/fr/docs/Web/API/Popover_API/Using#létat_automatique_et_la_fermeture_légère), il peut donc aussi être fermé en cliquant ou en appuyant en dehors du dialogue.

### Animation des boîtes de dialogue

Les éléments `<dialog>` sont réglés sur [`display: none;`](/fr/docs/Web/CSS/Reference/Properties/display) lorsqu'ils sont masqués et sur `display: block;` lorsqu'ils sont affichés, et sont retirés / ajoutés de la {{Glossary("top layer", "couche supérieure")}} ainsi que de l'[arbre d'accessibilité](/fr/docs/Web/Performance/Guides/How_browsers_work#construction_de_larbre_daccessibilité). Par conséquent, pour pouvoir animer les éléments `<dialog>`, la propriété {{CSSxRef("display")}} doit être animable. Les [navigateurs compatibles](/fr/docs/Web/CSS/Reference/Properties/display#compatibilité_des_navigateurs) animent la propriété `display` avec une variation du [type d'animation discrète](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète). Concrètement, le navigateur basculera entre `none` et une autre valeur de `display` afin que le contenu animé soit visible pendant toute la durée de l'animation.

Par exemple&nbsp;:

- Lorsqu'on anime `display` de `none` à `block` (ou vers une autre valeur visible de `display`), la valeur basculera en `block` à `0%` de la durée de l'animation pour être visible pendant toute la durée.
- Lorsqu'on anime `display` de `block` (ou d'une autre valeur visible) vers `none`, la valeur basculera en `none` à `100%` de la durée de l'animation pour rester visible pendant toute la durée.

> [!NOTE]
> Lorsqu'on anime en utilisant des [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions), il est nécessaire de définir [`transition-behavior: allow-discrete`](/fr/docs/Web/CSS/Reference/Properties/transition-behavior) pour activer le comportement décrit ci‑dessus. Ce comportement est disponible par défaut lors de l'utilisation des [animations CSS](/fr/docs/Web/CSS/Guides/Animations)&nbsp;; une étape équivalente n'est pas requise.

#### Transition des éléments de dialogue

Lorsqu'on anime des éléments `<dialog>` à l'aide de transitions CSS, les fonctionnalités suivantes sont nécessaires&nbsp;:

- la règle @ {{CSSxRef("@starting-style")}}
  - : Fournit un ensemble de valeurs de départ pour les propriétés appliquées au `<dialog>` à partir desquelles vous souhaitez effectuer la transition à chaque ouverture. Cela évite des comportements inattendus. Par défaut, les transitions CSS ne se produisent que lorsqu'une propriété change d'une valeur à une autre sur un élément visible&nbsp;; elles ne sont pas déclenchées lors des premières mises à jour de style d'un élément, ni lorsque la valeur de `display` passe de `none` à une autre.
- la propriété {{CSSxRef("display")}}
  - : Ajoutez `display` à la liste des transitions afin que le `<dialog>` reste en `display: block` (ou toute autre valeur visible de `display` définie pour l'état ouvert) pendant la durée de la transition, garantissant ainsi la visibilité des autres transitions.
- la propriété {{CSSxRef("overlay")}}
  - : Incluez `overlay` dans la liste des transitions pour que le retrait du `<dialog>` de la couche supérieure soit différé jusqu'à la fin de la transition, assurant ainsi la visibilité de la transition.
- la propriété {{CSSxRef("transition-behavior")}}
  - : Définissez `transition-behavior: allow-discrete` sur les transitions `display` et `overlay` (ou avec le raccourci {{CSSxRef("transition")}}) pour permettre des transitions discrètes sur ces deux propriétés qui ne sont pas animables par défaut.

Voici un exemple rapide pour illustrer.

##### HTML

Le HTML contient un élément `<dialog>` et un bouton pour afficher le dialogue. De plus, l'élément `<dialog>` contient un autre bouton pour le fermer.

```html
<dialog id="dialog">
  Contenu ici
  <button class="close">Fermer</button>
</dialog>

<button class="show">Afficher la fenêtre</button>
```

##### CSS

Dans le CSS, nous incluons un bloc `@starting-style` qui définit les styles de départ pour les propriétés `opacity` et `transform`, les styles de fin de transition sur l'état `dialog:open`, et les styles par défaut sur l'état `dialog` afin de permettre la transition inverse lorsque le `<dialog>` se referme. Notez que la liste `transition` du `<dialog>` inclut non seulement ces propriétés, mais aussi `display` et `overlay`, chacun avec `allow-discrete`.

Nous définissons également une valeur de style de départ pour la propriété {{CSSxRef("background-color")}} sur le sélecteur [`::backdrop`](/fr/docs/Web/CSS/Reference/Selectors/::backdrop) qui apparaît derrière le `<dialog>` lors de son ouverture, afin de fournir une belle animation d'assombrissement. Le sélecteur `dialog:open::backdrop` sélectionne uniquement les arrière-plans des éléments `<dialog>` lorsque le dialogue est ouvert.

```css
/* État ouvert du dialogue */
dialog:open {
  opacity: 1;
  transform: scaleY(1);
}

/* État fermé du dialogue */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    overlay 0.7s ease-out allow-discrete,
    display 0.7s ease-out allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* État avant ouverture */
/* Doit se trouver après la règle dialog:open précédente pour prendre effet,
    car la spécificité est la même */
@starting-style {
  dialog:open {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Transition du ::backdrop lorsque la boîte de dialogue modale est promue en couche supérieure */
dialog::backdrop {
  background-color: transparent;
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

dialog:open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Cette règle @starting-style ne peut pas être imbriquée dans le sélecteur ci‑dessus
   car le sélecteur imbriqué ne peut pas représenter des pseudo-éléments. */

@starting-style {
  dialog:open::backdrop {
    background-color: transparent;
  }
}
```

> [!NOTE]
> Dans les navigateurs qui ne prennent pas en charge la pseudo-classe {{CSSxRef(":open")}}, vous pouvez utiliser le sélecteur d'attribut `dialog[open]` pour styliser l'élément `<dialog>` lorsqu'il est ouvert.

##### JavaScript

Le JavaScript ajoute des gestionnaires d'événements aux boutons d'affichage et de fermeture pour ouvrir et fermer le `<dialog>` lorsqu'ils sont cliqués&nbsp;:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Résultat

Le code s'affiche comme suit&nbsp;:

{{EmbedLiveSample("Transition des éléments de dialogue", "100%", 200)}}

> [!NOTE]
> Parce que les éléments `<dialog>` passent de `display: none` à `display: block` à chaque affichage, le `<dialog>` passe de ses styles `@starting-style` à ses styles `dialog:open` à chaque transition d'entrée. Lorsque le `<dialog>` se ferme, il passe de son état `dialog:open` à l'état `dialog` par défaut.
>
> Il est possible que la transition de style à l'entrée et à la sortie diffère dans de tels cas. Consultez notre exemple [Démonstration de l'utilisation des styles de départ](/fr/docs/Web/CSS/Reference/At-rules/@starting-style#démonstration_de_lutilisation_des_styles_de_départ) pour en voir la démonstration.

#### Animations de `<dialog>` avec images‑clés

Lorsqu'on anime un `<dialog>` à l'aide d'animations CSS basées sur des images‑clés, il y a quelques différences à noter par rapport aux transitions&nbsp;:

- Vous ne fournissez pas de `@starting-style`.
- Vous incluez la valeur `display` dans une image‑clé&nbsp;; cette valeur sera celle utilisée pendant toute la durée de l'animation, ou jusqu'à ce qu'une autre valeur visible (non `none`) de `display` soit rencontrée.
- Il n'est pas nécessaire d'activer explicitement les animations discrètes&nbsp;; il n'existe pas d'équivalent à `allow-discrete` dans les images‑clés.
- Il n'est pas non plus nécessaire de définir `overlay` dans les images‑clés&nbsp;; l'animation de `display` gère l'animation du `<dialog>` entre l'état affiché et l'état masqué.

Let's have a look at an example so you can see what this looks like.

##### HTML

Le HTML contient un élément `<dialog>` et un bouton pour afficher le dialogue. De plus, l'élément `<dialog>` contient un autre bouton pour le fermer.

```html
<dialog id="dialog">
  Contenu ici
  <button class="close">Fermer</button>
</dialog>

<button class="show">Afficher la fenêtre</button>
```

##### CSS

Le CSS définit des images‑clés pour animer la transition entre les états fermé et affiché du `<dialog>`, ainsi que l'animation d'apparition du fond du `<dialog>`. Les animations du `<dialog>` incluent l'animation de `display` afin de s'assurer que les effets visuels restent visibles pendant toute la durée. Notez qu'il n'a pas été possible d'animer la disparition du fond — le fond est immédiatement retiré du DOM lorsque le `<dialog>` est fermé, il n'y a donc rien à animer.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog:open {
  animation: fade-in 0.7s ease-out;
}

dialog:open::backdrop {
  background-color: black;
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.25;
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

Enfin, le JavaScript ajoute des gestionnaires d'événements aux boutons pour permettre d'afficher et de fermer le `<dialog>`&nbsp;:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Résultat

Le code s'affiche comme suit&nbsp;:

{{EmbedLiveSample("Animations de `<dialog>` avec images‑clés", "100%", 200)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>, racine de sectionnement.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface API {{DOMxRef("HTMLDialogElement")}}
- L'évènement API {{DOMxRef("HTMLDialogElement/close_event", "close")}} de l'interface `HTMLDialogElement`
- L'évènement API {{DOMxRef("HTMLDialogElement/cancel_event", "cancel")}} de l'interface `HTMLDialogElement`
- La propriété API {{DOMxRef("HTMLDialogElement/open", "open")}} de l'interface `HTMLDialogElement`
- L'attribut universel [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert)
- Le pseudo-élément CSS {{CSSxRef("::backdrop")}}
- [Guide sur les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
