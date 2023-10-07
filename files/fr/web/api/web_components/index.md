---
title: Web Components (composants web)
slug: Web/API/Web_components
---

{{DefaultAPISidebar("Web Components")}}

Les composants web (<i lang="en">Web Components</i>) sont un ensemble de plusieurs technologies qui permettent de créer des éléments personnalisés réutilisables, dont les fonctionnalités sont encapsulées en dehors du reste du code et qui peuvent être utilisées au sein d'applications web.

## Concepts et utilisation

On essaie tant que possible de réutiliser du code. Cette réutilisation n'a pas toujours été simple pour du HTML, CSS et JavaScript complexe utilisé pour créer des éléments d'interface utilisateur personnalisés. Réutiliser de tels éléments d'interface peuvent gâcher une page si on ne fait pas attention.

Les composants web (<i lang="en">Web Components</i> en anglais) visent à résoudre ces problèmes. Il s'agit de trois technologies qui peuvent être combinées ensemble pour créer des éléments sur mesure avec des fonctionnalités encapsulées et qu'on peut réutiliser à volonté, sans risque de collisions.

- **Les éléments personnalisés (<i lang="en">custom elements</i>)**&nbsp;: un ensemble d'API JavaScript qui permettent de définir des éléments personnalisés ainsi que leur comportement.
- **Le <i lang="en">Shadow DOM</i>**&nbsp;: un ensemble d'API JavaScript qui permettent d'attacher un DOM «&nbsp;sombre&nbsp;» encapsulé à un élément, qui est rendu séparément du DOM du document principal et de contrôler les fonctionnalités associées. Ainsi, les fonctionnalités d'un élément peuvent être gardées privées pour que la mise en forme et le script puissent être appliqués sans risque de collision avec les autres parties du document.
- **Les gabarits HTML**&nbsp;: les éléments [`<template>`](/fr/docs/Web/HTML/Element/template) et [`<slot>`](/fr/docs/Web/HTML/Element/slot) permettent d'écrire des gabarits de balisage qui ne sont pas affichés sur la page et qui peuvent être réutilisés comme base de la structure d'un élément personnalisé.

L'approche pour implémenter un composant web ressemble généralement à&nbsp;:

1. La création d'une classe pour définir les fonctionnalités du composant web (par exemple avec l'utilisation de la syntaxe de [classe ECMAScript 2015](/fr/docs/Web/JavaScript/Reference/Classes)).
2. L'enregistrement du nouvel élément personnalisé avec la méthode [`CustomElementRegistry.define()`](/fr/docs/Web/API/CustomElementRegistry/define), à laquelle on passe le nom de l'élément à définir, la classe ou la fonction contenant les fonctionnalités et, optionnellement, l'élément duquel il hérite.
3. Si c'est nécessaire, l'attache d'un DOM sombre à l'élément personnalisé avec la méthode [`Element.attachShadow()`](/fr/docs/Web/API/Element/attachShadow). L'ajout d'éléments fils, de gestionnaires d'évènement, etc. au DOM sombre à l'aide des méthodes usuelles pour le DOM.
4. Si c'est nécessaire, la définition d'un gabarit HTML avec [`<template>`](/fr/docs/Web/HTML/Element/template) et [`<slot>`](/fr/docs/Web/HTML/Element/slot). Là encore, on utilisera des méthodes DOM usuelles pour cloner le gabarit et l'attacher au DOM sombre.
5. L'utilisation de l'élément personnalisé où on veut sur la page, comme pour tout autre élément HTML.

## Tutoriels

- [Utiliser les éléments personnalisés](/fr/docs/Web/Web_Components/Using_custom_elements)
  - : Un guide illustrant comment utiliser les fonctionnalités des éléments personnalisés afin de créer des composants web simples et abordant les fonctions de rappel pour le cycle de vie de l'élément ainsi que d'autres fonctionnalités avancées.
- [Utiliser le DOM sombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/Web_Components/Using_shadow_DOM)
  - : Un guide abordant les fondamentaux du <i lang="en">shadow DOM</i>, illustrant comment attacher un DOM sombre à un élément, l'ajouter à l'arbre DOM, le mettre en forme, etc.
- [Utiliser les gabarits et emplacements](/fr/docs/Web/Web_Components/Using_templates_and_slots)
  - : Un guide illustrant comment définir une structure HTML réutilisable avec les éléments [`<template>`](/fr/docs/Web/HTML/Element/template) et [`<slot>`](/fr/docs/Web/HTML/Element/slot), avant d'utiliser cette structure à l'intérieur des composants web.

## Référence

### Les API pour les éléments personnalisés

- [`CustomElementRegistry`](/fr/docs/Web/API/CustomElementRegistry)
  - : Les fonctionnalités pour les éléments personnalisés et notamment la méthode [`CustomElementRegistry.define()`](/fr/docs/Web/API/CustomElementRegistry/define) qui est utilisée pour enregistrer de nouveaux éléments personnalisés afin qu'ils puissent être utilisés dans votre document.
- [`Window.customElements`](/fr/docs/Web/API/Window/customElements)
  - : Renvoie une référence à l'objet `CustomElementRegistry`.
- [Fonctions de rappel pour le cycle de vie](/fr/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)

  - : Des fonctions de rappel spéciales qui définissent le comportement d'un élément personnalisé&nbsp;:

    - `connectedCallback`&nbsp;: appelée lorsque l'élément personnalisé est connecté pour la première fois au DOM du document.
    - `disconnectedCallback`&nbsp;: appelée lorsque l'élément personnalisé est déconnecté du DOM du document.
    - `adoptedCallback`&nbsp;: appelée lorsque l'élément personnalisé est déplacé vers un nouveau document.
    - `attributeChangedCallback`&nbsp;: appelé lorsque des attributs sont ajoutés, supprimés ou modifiés sur l'élément.

- Des extensions pour créer des éléments personnalisés de façon native&nbsp;:

  - : Les extensions suivantes sont définies&nbsp;:

    - L'attribut universel HTML [`is`](/fr/docs/Web/HTML/Global_attributes/is) qui permet d'indiquer qu'un élément HTML standard devrait se comporter à la manière d'un élément personnalisé enregistré.
    - L'option "is" de la méthode [`Document.createElement()`](/fr/docs/Web/API/Document/createElement) qui permet de créer une instance d'un élément HTML standard qui se comporte comme un élément personnalisé enregistré.

- Des pseudo-classes CSS&nbsp;:

  - : Quelques pseudo-classes CSS sont spécifiquement liées aux éléments personnalisés&nbsp;:

    - [`:defined`](/fr/docs/Web/CSS/:defined) cible tout élément défini, c'est-à-dire les éléments natifs et les éléments personnalisés définis avec `CustomElementRegistry.define()`.
    - [`:host`](/fr/docs/Web/CSS/:host) cible l'hôte sombre du [DOM sombre](/fr/docs/Web/Web_Components/Using_shadow_DOM) contenant le CSS à utiliser pour cet hôte. Autrement dit, elle permet de sélectionner un élément personnalisé depuis l'intérieur du DOM sombre.
    - [`:host()`](/fr/docs/Web/CSS/:host) cible l'hôte sombre du [DOM sombre](/fr/docs/Web/Web_Components/Using_shadow_DOM) contenant le CSS à utiliser en fonction d'un sélecteur passé en paramètre.
    - [`:host-context()`](</fr/docs/Web/CSS/:host-context()>) cible l'hôte sombre du [DOM sombre](/fr/docs/Web/Web_Components/Using_shadow_DOM) contenant le CSS à utiliser (afin de pouvoir sélectionner un élément personnalisé depuis son DOM sombre), uniquement si le sélecteur passé en argument à la fonction correspond à un ancêtre de l'élément dans la hiérarchie du DOM.

- Des pseudo-éléments CSS&nbsp;:

  - : Un pseudo-élément CSS est spécifiquement lié aux éléments personnalisés&nbsp;:

    - [`::part`](/fr/docs/Web/CSS/::part) représente tout élément au sein [d'un arbre sombre](/fr/docs/Web/Web_Components/Using_shadow_DOM) qui possède un attribut [`part`](/fr/docs/Web/HTML/Global_attributes/part) correspondant.

### Le DOM sombre (<i lang="en">Shadow DOM</i>)

- [`ShadowRoot`](/fr/docs/Web/API/ShadowRoot)
  - : Représente le nœud racine du sous-arbre du DOM sombre.
- Extensions à [`Element`](/fr/docs/Web/API/Element)

  - : Les extensions à l'interface `Element` pour le DOM sombre sont&nbsp;:

    - [`Element.attachShadow()`](/fr/docs/Web/API/Element/attachShadow) qui permet d'attacher un arbre de DOM sombre à l'élément indiqué.
    - [`Element.shadowRoot`](/fr/docs/Web/API/Element/shadowRoot) qui est une propriété qui retourne la racine sombre associée à l'élément indiqué, ou `null` s'il n'y a pas de racine sombre attachée.

- Additions à [`Node`](/fr/docs/Web/API/Node)

  - : Voici les ajouts à l'interface `Node` qui portent sur le DOM sombre&nbsp;:

    - [`Node.getRootNode()`](/fr/docs/Web/API/Node/getRootNode) qui est une méthode renvoyant la racine du contexte et qui inclut éventuellement la racine sombre si elle est disponible.
    - [`Node.isConnected`](/fr/docs/Web/API/Node/isConnected) qui est une propriété booléenne indiquant si le nœud est connecté (directement ou indirectement) à l'object contexte (soit [`Document`](/fr/docs/Web/API/Document) pour le cas du DOM normal ou soit [`ShadowRoot`](/fr/docs/Web/API/ShadowRoot) dans le cas du DOM sombre).

- Extensions à [`Event`](/fr/docs/Web/API/Event)

  - : Voici les extensions à l'interface `Event` relatives au DOM sombre&nbsp;:

    - [`Event.composed`](/fr/docs/Web/API/Event/composed) qui est une propriété booléenne indiquant si l'évènement se propagera au-delà des frontières du DOM sombre jusque dans le DOM standard.
    - [`Event.composedPath`](/fr/docs/Web/API/Event/composedPath) qui est une propriété renvoyant le chemin de l'évènement (les objets sur lesquels les gestionnaires d'évènements seront appelés). Cela n'inclut pas les nœuds des arbres sombres si la racine sombre a été créée avec un mode ([`ShadowRoot.mode`](/fr/docs/Web/API/ShadowRoot/mode)) fermé.

### Les gabarits HTML

- [`<template>`](/fr/docs/Web/HTML/Element/template)
  - : Cet élément contient un fragment HTML qui n'est pas affiché lors du chargement initial du document qui le contient mais qui peut être affiché lors de l'exécution à l'aide de JavaScript. Il est principalement utilisé pour la structure des éléments personnalisés. L'interface DOM correspondante est [`HTMLTemplateElement`](/fr/docs/Web/API/HTMLTemplateElement).
- [`<slot>`](/fr/docs/Web/HTML/Element/slot)
  - : Un emplacement à l'intérieur du composant web qui peut être utilisé pour votre balisage et qui permet de créer des arbres DOM séparés. L'interface DOM correspondante est [`HTMLSlotElement`](/fr/docs/Web/API/HTMLSlotElement).
- L'attribut HTML universel [`slot`](/fr/docs/Web/HTML/Global_attributes/slot)
  - : Il permet d'affecter un emplacement (<i lang="en">slot</i>) d'un arbre d'un DOM sombre à un élément.
- [`Element.assignedSlot`](/fr/docs/Web/API/Element/assignedSlot)
  - : Un attribut en lecture seule qui renvoie une référence à l'élément [`<slot>`](/fr/docs/Web/HTML/Element/slot) au sein duquel l'élément courant est inséré.
- [`Text.assignedSlot`](/fr/docs/Web/API/Text/assignedSlot)
  - : Un attribut en lecture seule qui renvoie une référence à l'élément [`<slot>`](/fr/docs/Web/HTML/Element/slot) au sein duquel le nœud texte est inséré.
- Les extensions à [`Element`](/fr/docs/Web/API/Element)

  - : Les extensions à l'interface `Element` sont&nbsp;:

    - [`Element.slot`](/fr/docs/Web/API/Element/slot) qui renvoie le nom de l'emplacement de DOM sombre associé à l'élément.

- Les pseudo-éléments CSS

  - : Voici les pseudo-éléments relatifs aux emplacements pour le shadow DOM&nbsp;:

    - [`::slotted`](/fr/docs/Web/CSS/::slotted) qui cible le contenu inséré dans un emplacement.

- L'évènement [`slotchange`](/fr/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Celui-ci est déclenché sur une instance de [`HTMLSlotElement`](/fr/docs/Web/API/HTMLSlotElement) (qui représente un élément [`<slot>`](/fr/docs/Web/HTML/Element/slot)) lorsque les nœuds contenus dans cet emplacement changent.

## Exemples

Différents exemples sont disponibles sur le dépôt GitHub [web-components-examples](https://github.com/mdn/web-components-examples).

## Spécifications

### Pour les éléments personnalisés et `template`

{{Specifications("html.elements.template")}}

### Pour le <i lang="en">Shadow DOM</i>

{{Specifications("api.ShadowRoot")}}

## Compatibilité des navigateurs

Les composants web sont pris en charge par défaut dans Firefox (63), Chrome, Opera, et Edge (79). Safari prend en charge certaines fonctionnalités des composants web mais moins que les autres navigateurs.

Pour plus de détails sur la compatibilité des différentes fonctionnalités, voyez les tableaux de compatibilité des pages de référence.

## Voir aussi

Voici différentes bibliothèques ou outils autour des composants web&nbsp;:

- [Open Web Components](https://open-wc.org/)
- [DataFormsJS](https://www.dataformsjs.com/)
- [FAST](https://fast.design/)
  - [Fast Element](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-element)
  - [Fast Foundation](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-foundation)
- [Hybrids](https://github.com/hybridsjs/hybrids)
- [Lit](https://lit.dev/)
- [Snuggsi](https://github.com/devpunks/snuggsi#readme)
- [Slim.js](https://github.com/slimjs/slim.js)
- [Stencil](https://stenciljs.com/)
