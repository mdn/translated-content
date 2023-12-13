---
title: Popover API
slug: Web/API/Popover_API
l10n:
  sourceCommit: e0d92259b4
---

{{DefaultAPISidebar("Popover API")}}

L'**API Popover** offre aux développeurs un mécanisme standard, flexible et cohérent pour afficher des contenus sous forme de popover par dessus les autres contenus d'une page. L'affichage des contenus en popovers peut être contrôlé soit de manière déclarative en utilisant des attributs HTML, soit via JavaScript.

## Concepts et utilisation

Un schéma très courant sur le Web est d'afficher des contenus par dessus d'autres contenus, attirant l'attention de l'utilisateur sur des informations importantes ou des actions à réaliser. Ces contenus peuvent prendre plusieurs noms — superpositions, popups, popovers, boîtes de dialogue, etc. Nous les appellerons popovers dans cette documentation. En règle générale, ils peuvent être :

- **modaux**, ce qui signifie que, lorsqu'un popover est affiché, le reste de la page est rendu non interactif jusqu'à ce qu'on interagisse avec le popover d'une manière ou d'une autre (par exemple, un choix important est fait).
- **non-modaux**, ce qui signifie que le reste de la page reste interactif pendant que le popover est affiché.

Les popovers créés à l'aide de l'API Popover sont toujours non-modaux. Si vous souhaitez créer un popover modal, l'élément {{htmlelement("dialog")}} est la bonne solution, cependant gardez à l'esprit que les éléments `<dialog>` ne sont pas placés dans le {{glossary("top layer")}} par défaut alors que les popovers le sont. Il y a un recoupement important entre les deux — vous pouvez par exemple vouloir créer un popover persistant, mais le contrôler en utilisant du HTML déclaratif. Vous pouvez même transformer un élément `<dialog>` en popover si vous souhaitez combiner le contrôle des popovers et le placement en surimpression avec la sémantique des boîtes de dialogue.

Les cas d'utilisation typiques de l'API Popover incluent les éléments d'interfaces utilisateur interactifs comme les menus d'action, les notifications personnalisées de type "toast", les suggestions d'éléments de formulaire, les sélecteurs de contenu ou les interfaces d'apprentissage.

Vous pouvez créer des popovers de deux manières différentes :

- De manière déclarative, via un ensemble de nouveaux attributs HTML. Un popover simple avec un bouton d'activation peut être créé en utilisant le code suivant :

  ```html
  <button popovertarget="mypopover">Basculer le popover</button>
  <div id="mypopover" popover>Contenu du popover</div>
  ```

- Via une API JavaScript. Par exemple, {{domxref("HTMLElement.togglePopover()")}} peut être utilisé pour basculer un popover entre les états affiché et masqué.

Il existe également de nouveaux événements pour réagir à l'activation d'un popover, ainsi que des fonctionnalités CSS pour faciliter le style des popovers. Toutes les nouvelles fonctionnalités sont répertoriées ci-après.

Voir [Utiliser l'API Popover](/fr/docs/Web/API/Popover_API/Using) pour un guide détaillé sur l'utilisation de cette API.

## Attributs HTML

- [`popover`](/fr/docs/Web/HTML/Global_attributes/popover)
  - : Un attribut global qui transforme un élément en élément popover ; prend un état de popover (`"auto"` ou `"manual"`) comme valeur.
- [`popovertarget`](/fr/docs/Web/HTML/Element/button#popovertarget)
  - : Transforme un élément {{htmlelement("button")}} ou {{htmlelement("input")}} en bouton de contrôle de popover ; prend l'ID de l'élément popover à contrôler comme valeur.
- [`popovertargetaction`](/fr/docs/Web/HTML/Element/button#popovertargetaction)
  - : Spécifie l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur l'élément popover contrôlé par un élément de contrôle {{htmlelement("button")}} ou {{htmlelement("input")}}.

## Fonctionnalités CSS

- {{cssxref("::backdrop")}}
  - : Le pseudo-élément `::backdrop` est un élément plein écran placé directement derrière les éléments popover, permettant d'ajouter des effets au contenu de la page derrière les popovers si nécessaire (par exemple en le floutant).
- {{cssxref(":popover-open")}}
  - : La pseudo-classe `:popover-open` correspond à un élément popover uniquement lorsqu'il est affiché — elle peut être utilisée pour styliser les éléments popover lorsqu'ils sont affichés.

## Interfaces

- {{domxref("ToggleEvent")}}
  - : Représente un événement notifiant l'utilisateur lorsqu'un élément popover bascule entre les états affiché et masqué. C'est l'objet d'événement pour les événements {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} et {{domxref("HTMLElement.toggle_event", "toggle")}}, qui se déclenchent sur les popovers lorsque leur état change.

## Extensions à d'autres interfaces

### Propriétés d'instance

- {{domxref("HTMLElement.popover")}}
  - : Donne accès ou permet de définir l'état de l'élément popover via JavaScript (`"auto"` ou `"manual"`). Il peut être utiliser pour faire de la détection de fonctionnalités. Cette propriété reflète l'attribut HTML [`popover`](/fr/docs/Web/HTML/Global_attributes/popover).
- {{domxref("HTMLButtonElement.popoverTargetElement")}} et {{domxref("HTMLInputElement.popoverTargetElement")}}
  - : Donne accès ou permet de définir l'élément popover contrôlé par le bouton. C'est l'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Element/button#popovertarget).
- {{domxref("HTMLButtonElement.popoverTargetAction")}} et {{domxref("HTMLInputElement.popoverTargetAction")}}
  - : Donne accès ou permet de définir l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur l'élément popover contrôlé par le bouton. Cette propriété reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Element/button#popovertargetaction).

### Méthodes d'instance

- {{domxref("HTMLElement.hidePopover()")}}
  - : Masque l'élément popover en le supprimant de la couche supérieure et en le masquant avec `display: none`.
- {{domxref("HTMLElement.showPopover()")}}
  - : Affiche l'élément popover en le plaçant dans la couche supérieure.
- {{domxref("HTMLElement.togglePopover()")}}
  - : Bascule l'élément popover entre les états affiché et masqué.

### Événements

- `HTMLElement` {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} event
  - : Déclenché juste avant que l'état d'un élément popover ne change entre affiché et masqué, ou vice versa.
- `HTMLElement` {{domxref("HTMLElement.toggle_event", "toggle")}} event
  - : Déclenché lorsque l'état d'un élément popover a changé entre les états affiché et masqué, ou vice versa. Cet événement existait déjà pour signaler le changement d'état de l'élément {{htmlelement("details")}} et il semblais logique de l'étendre pour prendre en charge les popovers.

## Examples

Voir notre [page d'exemples de l'API Popover](https://mdn.github.io/dom-examples/popover-api/) pour accéder à l'ensemble des exemples MDN sur ce sujet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
