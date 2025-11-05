---
title: API Popover
slug: Web/API/Popover_API
l10n:
  sourceCommit: e0d92259b485a219840367cf4e23a7069f192eec
---

{{DefaultAPISidebar("Popover API")}}

L'**API Popover** offre aux développeuses et développeurs un mécanisme standard, flexible et cohérent pour afficher des contenus sous forme de <i lang="en">popover</i> par-dessus les autres contenus d'une page. L'affichage des contenus en <i lang="en">popovers</i> peut être contrôlé de manière déclarative en utilisant des attributs HTML, ou via JavaScript.

## Concepts et utilisation

Un schéma très courant sur le Web consiste à afficher des contenus par-dessus d'autres, attirant l'attention de la personne sur des informations importantes ou des actions à réaliser. Ces contenus peuvent prendre plusieurs noms&nbsp;: superpositions, <i lang="en">popups</i>, <i lang="en">popovers</i>, boîtes de dialogue, etc. Nous les appellerons <i lang="en">popovers</i> dans cette documentation. En règle générale, ils peuvent être&nbsp;:

- Modaux
  - : Ce qui signifie que, lorsqu'un <i lang="en">popover</i> est affiché, le reste de la page est rendu non interactif jusqu'à ce qu'on interagisse avec le <i lang="en">popovers</i> d'une manière ou d'une autre (par exemple pour effectuer un choix important).
- Non-modaux
  - : Ce qui signifie que le reste de la page reste interactif pendant que le <i lang="en">popover</i> est affiché.

Les <i lang="en">popovers</i> créés à l'aide de l'API Popover sont toujours non-modaux. Si vous souhaitez créer un <i lang="en">popover</i> modal, l'élément [`<dialog>`](/fr/docs/Web/HTML/Reference/Elements/dialog) est la bonne solution. Cependant, gardez à l'esprit que les éléments `<dialog>` ne sont pas placés dans [la couche supérieure](/fr/docs/Glossary/Top_layer) par défaut, contrairement aux <i lang="en">popovers</i>. Il y a un recoupement important entre les deux&nbsp;: il est tout à fait possible de créer un <i lang="en">popover</i> persistant, et de le contrôler en utilisant du HTML déclaratif. Vous pouvez même transformer un élément `<dialog>` en <i lang="en">popover</i> si vous souhaitez combiner le contrôle des <i lang="en">popovers</i> et le placement en surimpression avec la sémantique des boîtes de dialogue.

Les cas d'utilisation typiques de l'API Popover incluent les éléments d'interfaces utilisateur interactifs comme les menus d'action, les notifications personnalisées de type <i lang="en">toast</i>, les suggestions d'éléments de formulaire, les sélecteurs de contenu ou les interfaces d'apprentissage.

Vous pouvez créer des popovers de deux manières différentes&nbsp;:

- De manière déclarative, via un ensemble de nouveaux attributs HTML. Un <i lang="en">popover</i> simple avec un bouton d'activation peut être créé en utilisant le code suivant&nbsp;:

  ```html
  <button popovertarget="mypopover">Basculer le popover</button>
  <div id="mypopover" popover>Contenu du popover</div>
  ```

- Via une API JavaScript. Par exemple, la méthode [`HTMLElement.togglePopover()`](/fr/docs/Web/API/HTMLElement/togglePopover) peut être utilisée pour basculer un <i lang="en">popover</i> entre les états affiché et masqué.

Il existe également de nouveaux évènements pour réagir à l'activation d'un <i lang="en">popover</i>, ainsi que des fonctionnalités CSS pour faciliter la mise en forme des <i lang="en">popovers</i>. Toutes les fonctionnalités associées sont répertoriées ci-après.

Voir [Utiliser l'API Popover](/fr/docs/Web/API/Popover_API/Using) pour un guide détaillé sur l'utilisation de cette API.

## Attributs HTML

- [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Un attribut universel qui transforme un élément en élément <i lang="en">popover</i> et qui prend un état de <i lang="en">popover</i> (`"auto"` ou `"manual"`) comme valeur.
- [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Transforme un élément [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button) ou [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) en bouton de contrôle de <i lang="en">popover</i>. La valeur de cet attribut correspond à l'identifiant de l'élément <i lang="en">popover</i> à contrôler.
- [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Spécifie l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur l'élément <i lang="en">popover</i> contrôlé par un élément de contrôle [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button) ou [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input).

## Fonctionnalités CSS

- [`::backdrop`](/fr/docs/Web/CSS/Reference/Selectors/::backdrop)
  - : Le pseudo-élément `::backdrop` est un élément plein écran placé directement derrière les éléments <i lang="en">popovers</i>, permettant d'ajouter des effets au contenu de la page derrière les <i lang="en">popovers</i> si nécessaire (par exemple en le floutant).
- [`:popover-open`](/fr/docs/Web/CSS/Reference/Selectors/:popover-open)
  - : La pseudo-classe `:popover-open` correspond à un élément <i lang="en">popover</i> uniquement lorsqu'il est affiché. Elle peut être utilisée pour styliser les éléments <i lang="en">popovers</i> lorsqu'ils sont affichés.

## Interfaces

- [`ToggleEvent`](/fr/docs/Web/API/ToggleEvent)
  - : Représente un évènement de notification lorsqu'un élément <i lang="en">popover</i> bascule entre les états affiché et masqué. Elle est implémentée par les évènements [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) et [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event), qui se déclenchent sur les <i lang="en">popovers</i> lorsque leur état change.

## Extensions aux autres interfaces

### Propriétés d'instance

- [`HTMLElement.popover`](/fr/docs/Web/API/HTMLElement/popover)
  - : Permet de connaître ou de modifier l'état de l'élément <i lang="en">popover</i> via JavaScript (`"auto"` ou `"manual"`). Elle peut être utilisée pour détecter la prise en charge des fonctionnalités <i lang="en">popover</i>. Cette propriété reflète l'attribut HTML [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover).
- [`HTMLButtonElement.popoverTargetElement`](/fr/docs/Web/API/HTMLButtonElement/popoverTargetElement) et [`HTMLInputElement.popoverTargetElement`](/fr/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Permet de connaître ou de modifier l'élément <i lang="en">popover</i> contrôlé par le bouton. C'est l'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.popoverTargetAction`](/fr/docs/Web/API/HTMLButtonElement/popoverTargetAction) et [`HTMLInputElement.popoverTargetAction`](/fr/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Permet de connaître ou de modifier l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur l'élément <i lang="en">popover</i> contrôlé par le bouton. Cette propriété reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

### Méthodes d'instance

- [`HTMLElement.hidePopover()`](/fr/docs/Web/API/HTMLElement/hidePopover)
  - : Masque l'élément <i lang="en">popover</i> en le supprimant de la couche supérieure et en le masquant avec `display: none`.
- [`HTMLElement.showPopover()`](/fr/docs/Web/API/HTMLElement/showPopover)
  - : Affiche l'élément <i lang="en">popover</i> en le plaçant dans la couche supérieure.
- [`HTMLElement.togglePopover()`](/fr/docs/Web/API/HTMLElement/togglePopover)
  - : Bascule l'élément <i lang="en">popover</i> entre les états affiché et masqué.

### Évènements

- Évènement [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event), rattaché à `HTMLElement`
  - : Déclenché juste avant que l'état d'un élément <i lang="en">popover</i> ne change entre affiché et masqué, ou vice versa.
- Évènement [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event), rattaché à `HTMLElement`
  - : Déclenché lorsque l'état d'un élément <i lang="en">popover</i> a changé entre les états affiché et masqué, ou vice versa. Voir l'évènement analogue [`toggle` de `HTMLDetailsElement`](/fr/docs/Web/API/HTMLElement/toggle_event) qui signale les changements d'états des éléments [`<details>`](/fr/docs/Web/HTML/Reference/Elements/details).

## Exemples

Voir [notre page d'exemples de l'API Popover](https://mdn.github.io/dom-examples/popover-api/) pour accéder à l'ensemble des exemples MDN sur ce sujet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
