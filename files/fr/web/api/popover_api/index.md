---
title: API Popover
slug: Web/API/Popover_API
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{DefaultAPISidebar("Popover API")}}

L'**API Popover** offre aux développeur·euse·s un mécanisme standard, flexible et cohérent pour afficher des contenus sous forme de fenêtre contextuelle (<i lang="en">popover</i> en anglais) par-dessus les autres contenus d'une page. L'affichage des contenus en fenêtre contextuelle peut être contrôlé de manière déclarative en utilisant des attributs HTML, ou via JavaScript.

## Concepts et utilisation

Un schéma très courant sur le Web consiste à afficher des contenus par-dessus d'autres, attirant l'attention de la personne sur des informations importantes ou des actions à réaliser. Ces contenus peuvent prendre plusieurs noms&nbsp;: superpositions, <i lang="en">popups</i>, fenêtre contextuelle, boîtes de dialogue, etc. Nous les appellerons fenêtres contextuelles dans cette documentation. En règle générale, ils peuvent être&nbsp;:

- **modales**, ce qui signifie que, lorsqu'une fenêtre contextuelle est affichée, le reste de la page est rendu non interactif jusqu'à ce qu'on interagisse avec la fenêtre contextuelle d'une manière ou d'une autre (par exemple pour effectuer un choix important).
- **non modales**, ce qui signifie que le reste de la page reste interactif pendant que la fenêtre contextuelle est affichée.

Les fenêtres contextuelles créées à l'aide de l'API Popover sont toujours non-modales. Si vous souhaitez créer une fenêtre contextuelle modale, l'élément {{HTMLElement("dialog")}} est la bonne solution. Cependant, gardez à l'esprit que les éléments `<dialog>` ne sont pas placés dans [la couche supérieure](/fr/docs/Glossary/Top_layer) par défaut, contrairement aux fenêtres contextuelles. Il y a un recoupement important entre les deux&nbsp;: il est tout à fait possible de créer une fenêtre contextuelle persistante, et de la contrôler en utilisant du HTML déclaratif. Vous pouvez même transformer un élément `<dialog>` en fenêtre contextuelle si vous souhaitez combiner le contrôle des fenêtres contextuelles et le placement en surimpression avec la sémantique des boîtes de dialogue.

Les cas d'utilisation typiques de l'API Popover incluent les éléments d'interfaces utilisateur interactifs comme les menus d'action, les notifications personnalisées de type <i lang="en">toast</i>, les suggestions d'éléments de formulaire, les sélecteurs de contenu ou les interfaces d'apprentissage.

Vous pouvez créer des popovers de deux manières différentes&nbsp;:

- De manière déclarative, via un ensemble de nouveaux attributs HTML. Une fenêtre contextuelle simple avec un bouton d'activation peut être créée en utilisant le code suivant&nbsp;:

  ```html
  <button popovertarget="mypopover">Basculer le popover</button>
  <div id="mypopover" popover>Contenu du popover</div>
  ```

- Via une API JavaScript. Par exemple, la méthode {{DOMxRef("HTMLElement.togglePopover()")}} peut être utilisée pour basculer une fenêtre contextuelle entre les états affiché et masqué.

Il existe également de nouveaux évènements pour réagir à l'activation d'une fenêtre contextuelle, ainsi que des fonctionnalités CSS pour faciliter la mise en forme des fenêtres contextuelles. Toutes les fonctionnalités associées sont répertoriées ci-après.

Voir [Utiliser l'API Popover](/fr/docs/Web/API/Popover_API/Using) pour un guide détaillé sur l'utilisation de cette API.

## Attributs HTML

- [`interestfor`](/fr/docs/Web/HTML/Reference/Elements/button#interestfor) {{Experimental_Inline}}
  - : Définit un élément HTML {{HTMLElement("a")}}, {{HTMLElement("button")}} ou {{HTMLElement("area")}}, ou un élément SVG `<a>` (voir [élément `<a>`](/fr/docs/Web/SVG/Reference/Element/a)), comme invocateur d'intérêt. Sa valeur est l'`id` de l'élément cible, qui sera affecté d'une manière ou d'une autre (généralement affiché ou masqué) lorsque l'intérêt est montré ou perdu sur l'élément invocateur.
- [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Un attribut universel qui transforme un élément en une fenêtre contextuelle (<i lang="en">popover</i> en anglais) et qui prend un état de fenêtre contextuelle (`"auto"`, `"hint"` ou `"manual"`) comme valeur.
- [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - : Transforme un élément {{HTMLElement("button")}} ou {{HTMLElement("input")}} en bouton de contrôle de fenêtre contextuelle. La valeur de cet attribut correspond à l'identifiant de la fenêtre contextuelle à contrôler.
- [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
  - : Spécifie l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur la fenêtre contextuelle contrôlée par un élément de contrôle {{HTMLElement("button")}} ou {{HTMLElement("input")}}.

## Fonctionnalités CSS

- {{CSSxRef("::backdrop")}}
  - : Le pseudo-élément `::backdrop` est un élément plein écran placé directement derrière les fenêtres contextuelles, permettant d'ajouter des effets au contenu de la page derrière les fenêtres contextuelles si nécessaire (par exemple en le floutant).
- {{CSSxRef("interest-delay")}}, {{CSSxRef("interest-delay-start")}} et {{CSSxRef("interest-delay-end")}} {{Experimental_Inline}}
  - : La propriété raccourcie `interest-delay` et ses formes longues associées `interest-delay-start` et `interest-delay-end` permettent d'ajouter un délai entre le moment où la personne montre ou perd son intérêt et le moment où le navigateur agit sur ce changement.
- {{CSSxRef(":interest-source")}} et {{CSSxRef(":interest-target")}}
  - : Ces sélecteurs servent à appliquer des styles respectivement à l'invocateur d'intérêt et à l'élément cible qui lui est associé, uniquement lorsque l'intérêt est indiqué.
- {{CSSxRef(":popover-open")}}
  - : La pseudo-classe `:popover-open` correspond à une fenêtre contextuelle uniquement lorsqu'elle est affichée. Elle peut être utilisée pour styliser les fenêtres contextuelles lorsqu'elles sont affichées.

## Interfaces

- {{DOMxRef("InterestEvent")}} {{Experimental_Inline}}
  - : L'objet événement pour les événements {{DOMxRef("HTMLElement.interest_event", "interest")}} et {{DOMxRef("HTMLElement.loseinterest_event", "loseinterest")}}. Il inclut une propriété `source` contenant une référence vers l'élément invocateur d'intérêt associé.
- {{DOMxRef("ToggleEvent")}}
  - : Représente un évènement de notification lorsqu'une fenêtre contextuelle bascule entre les états affiché et masqué. Elle est implémentée par les évènements {{DOMxRef("HTMLElement.beforetoggle_event", "beforetoggle")}} et {{DOMxRef("HTMLElement.toggle_event", "toggle")}}, qui se déclenchent sur les fenêtres contextuelles lorsque leur état change.

## Extensions aux autres interfaces

### Propriétés d'instance

- {{DOMxRef("HTMLButtonElement.interestForElement", "interestForElement")}} {{Experimental_Inline}}
  - : Obtient ou définit une référence vers l'élément ciblé par un invocateur d'intérêt. Si un invocateur d'intérêt HTML ou SVG référence un élément cible via son attribut `interestfor`, cet élément sera référencé dans la propriété `interestForElement` de l'objet DOM équivalent. Disponible sur les interfaces {{DOMxRef("HTMLButtonElement")}}, {{DOMxRef("HTMLAnchorElement")}}, {{DOMxRef("HTMLAreaElement")}} et {{DOMxRef("SVGAElement")}}.
- {{DOMxRef("HTMLElement.popover")}}
  - : Permet de connaître ou de modifier l'état de la fenêtre contextuelle (<i lang="en">popover</i> en anglais) via JavaScript (`"auto"` ou `"manual"`). Elle peut être utilisée pour détecter la prise en charge des fonctionnalités de fenêtre contextuelle. Cette propriété reflète l'attribut HTML [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover).
- {{DOMxRef("HTMLButtonElement.popoverTargetElement")}} et {{DOMxRef("HTMLInputElement.popoverTargetElement")}}
  - : Permet de connaître ou de modifier la fenêtre contextuelle contrôlée par le bouton. C'est l'équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget).
- {{DOMxRef("HTMLButtonElement.popoverTargetAction")}} et {{DOMxRef("HTMLInputElement.popoverTargetAction")}}
  - : Permet de connaître ou de modifier l'action à effectuer (`"hide"`, `"show"` ou `"toggle"`) sur la fenêtre contextuelle contrôlée par le bouton. Cette propriété reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction).

### Méthodes d'instance

- {{DOMxRef("HTMLElement.hidePopover()")}}
  - : Masque la fenêtre contextuelle (<i lang="en">popover</i> en anglais) en le supprimant de la couche supérieure et en le masquant avec `display: none`.
- {{DOMxRef("HTMLElement.showPopover()")}}
  - : Affiche la fenêtre contextuelle en la plaçant dans la couche supérieure.
- {{DOMxRef("HTMLElement.togglePopover()")}}
  - : Change l'état de la fenêtre contextuelle entre les états affiché et masqué.

### Évènements

- Évènement {{DOMxRef("HTMLElement.beforetoggle_event","beforetoggle")}}
  - : Déclenché juste avant que l'état d'une fenêtre contextuelle (<i lang="en">popover</i> en anglais) ne change entre affiché et masqué, ou vice versa.
- Évènement {{DOMxRef("HTMLElement.toggle_event", "toggle")}}
  - : Déclenché juste après que l'état d'une fenêtre contextuelle a changé entre affiché et masqué, ou inversement.
- {{DOMxRef("HTMLElement.interest_event", "interest")}} {{Experimental_Inline}}
  - : Déclenché sur l'élément cible d'un invocateur d'intérêt lorsque l'intérêt est montré, permettant d'exécuter du code en réponse.
- {{DOMxRef("HTMLElement.loseinterest_event", "loseinterest")}} {{Experimental_Inline}}
  - : Déclenché sur l'élément cible d'un invocateur d'intérêt lorsque l'intérêt est perdu, permettant d'exécuter du code en réponse.

## Exemples

- Voir notre collection de [Exemples de l'API Popover <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/popover-api/).
- Voir notre collection d'[exemples d'invocateurs d'intérêt <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/interest-invokers/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut global HTML [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
- L'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)
- L'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/button#popovertargetaction)
- Le pseudo-élément CSS {{CSSxRef("::backdrop")}}
- La pseudo-classe CSS {{CSSxRef(":popover-open")}}
