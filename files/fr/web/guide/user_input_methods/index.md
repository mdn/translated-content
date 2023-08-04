---
title: Entrées utilisateur et méthodes
slug: Web/Guide/User_input_methods
---

Les entrées utilisateur modernes vont au-delà du simple clavier et souris: pensez aux écrans tactiles par exemple. Cet article fournit des recommendations pour gérer les entrées utilisateur et implémenter les contrôles des Open Web Apps, ainsi que des FAQs, des exemples concrets, et des liens pour ceux qui ont besoin d'informations supplémentaires sur les technologies utilisées. Les APIs et événements abordés sont en autre [les événements tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events), [l'API Pointer Lock](/fr/docs/WebAPI/Pointer_Lock), [l'API Screen Orientation](/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation), [l'API Fullscreen](/fr/docs/Web/Guide/DOM/Using_full_screen_mode) et [Drag & Drop](/fr/docs/Web/API/API_HTML_Drag_and_Drop).

## Workflow entrées utilisateur et contrôles

La diagramme suivant illustre le déroulement des opérations typique pour implémenter les mécanismes d'entrée utilisateur:

![](user-input-and-controls.png)

Tout d'abord vous devez décider quels mécanismes en entrées vous voulez prendre en charge dans votre application: souris, clavier, doigt, etc. Une fois que vous avez décidé, vous pouvez les contrôler en utilisant les outils offerts par la plateforme web ou par des bibliothèques JavaScript.

## Recommandations

Les mécanismes en entrées dépendent des capacités de l'appareil qui exécute l'application:

- Certains appareils ont des écrans tactiles: le plateforme web dispose des [événements tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events) pour interpréter l'activité du doigt sur les interfaces tactiles.
- Pour les appareils ayant une souris/pavé tactile comme méthode de pointage, l'[API Pointer Lock](/fr/docs/WebAPI/Pointer_Lock) aide à implémenter un jeu 3D à la première personne ou toute autre application nécessisant un contrôle total du dispositif de pointage. L'[API Fullscreen](/fr/docs/Web/Guide/DOM/Using_full_screen_mode) quant à elle aide à afficher l'application en mode plein écran.
- En utilisant les fonctionnalités telles que les éléments [contentEditable](/fr/docs/Web/HTML/Contenu_editable), vous pouvez implémenter des éditeurs rich-text rapidement et avec [Drag\&Drop](/fr/docs/Web/API/API_HTML_Drag_and_Drop) vous pouvez laisser les utilisateurs déplacer des éléments dans votre application. Quand l'orientation de l'écran a de l'importance pour votre application, vous pouvez lire l'orientation de l'écran à travers l'[API Screen Orientation](/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) et verrouiller l'écran dans un sens.
- Vous devriez toujours être attentif à l'accessibilité du clavier quand c'est approprié — beaucoup d'utilisateurs web utilisent uniquement le clavier pour naviger sur les sites web et applications, et les bloquer hors de votre fonctionnalité est une mauvaise idée.

Vous trouverez ci-dessous un ensemble de recommandations et meilleures pratiques pour utiliser de tels outils dans des Open Web Apps.

### Décidez quel mécanisme en entrée vous utilisez

#### Clavier

La saisie du clavier peut être contrôlée par votre application. Par exemple, si vous voulez ajouter des contrôles déclenchés quand des touches sont pressées, vous devez ajouter un gestionnaire d'événement sur l'objet window:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

où `handleKeyDown` et `handleKeyUp` sont des fonctions implémentant les contrôles sur les événements `keydown` et `keyup`.

> **Note :** Jetez un coup d'oeil à la [Référence des événements](/fr/docs/Web/Events) et au guide {{domxref("KeyboardEvent")}} pour en savoir plus sur les événements de clavier.

#### Souris

Les événements qui se produisent quand l'utilisateur interagit avec un appareil de pointage comme une souris sont représentés par l'interface DOM {{domxref("MouseEvent")}}. Les événements de souris les plus communs sont [`click`](/fr/docs/Web/Events/click), [`dblclick`](/fr/docs/Web/Events/dblclick), [`mouseup`](/fr/docs/Web/Events/mouseup), et [`mousedown`](/fr/docs/Web/Events/mousedown). La liste de tous les événements souris utilisant l'interface MouseEvent est disponible dans la [Référence des événements](/fr/docs/Web/Events).

Quand le périphérique d'entrée est une souris, vous pouvez également contrôler les entrées utilisateur avec l'API Pointer Lock et implémenter le Drag & Drop (voir ci-dessous).

#### Toucher du doigt

Quand vous développez des applications web destinées à être installées sur des appareils à écran tactile, il est recommandé de prendre en considération les différentes capacités de l'appareil, en terme de résolution d'écran et d'entrée utilisateur. Les [événements tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events) peuvent vous aider à implémenter des éléments interactifs et des geste d'interactions courants sur les appareils à écran tactile.

Si vous voulez utiliser les événements tactiles, vous devez ajouter des gestionnaires d'événement et spécifier des fonctions de rappel, appelées quand l'événement est déclenché:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

où `element` est l'élément du DOM sur lequel vous voulez enregistrer les événements tactiles.

> **Note :** Pour plus d'informations sur ce que vous pouvez faire avec les événements tactiles, lisez le guide des [événements tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events).

#### Événements de pointeur

Quand vous avez affaire à des appareils qui incorporent de multiples formes d'entrée, comme la souris, le toucher du doigt et la saisie au stylet, il peut être difficile de développer une solution qui marche pour tous ces mécanismes de contrôle différents. Les [événements de pointeur](/fr/docs/Web/API/Pointer_events) aident les développeurs à gérer plus facilement les événements sur les appareils en normalisant le traitement de chacun d'entre eux. Un pointeur peut être n'importe quel contact sur l'écran, fait par le curseur d'une souris, d'un stylo, le toucher (y compris multi-touch) ou autre périphérique d'entrée de pointage. Les événements génériques pour gérer la saisie du pointeur ressemblent beaucoup à ceux pour la souris: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, etc.

> **Note :** Les événements du pointeur ne sont pas encore beaucoup pris en charge, mais le [polyfill pointer.js](https://github.com/mozilla/pointer.js) est disponible sur le compte GitHub de Mozilla.

### Implémentez les contrôles

#### Verrouiller le pointeur

Dans certains cas, typiquement dans le développement de jeux, vous pouvez avoir besoin d'accéder aux événements de la souris même lorsque le curseur dépasse la limite du navigateur ou de l'écran: l'{{domxref("Pointer_Lock_API", "API Pointer Lock")}} vous donne le contrôle total de l'appareil de pointage.

Voici le code pour demander que le pointeur soit bloqué à l'intérieur d'`element`:

```js
element.requestPointerLock();
```

> **Note :** Pour un tutoriel complet et la référence, lisez notre page {{domxref("Pointer_Lock_API", "Pointer Lock API")}}.

#### Orientation de l'écran

Si l'orientation de l'écran est importante pour votre application, vous pouvez lire l'état de l'orientation de l'écran, être informé quand cet état change, et verrouiller l'orientation dans un état spécifique (habituellement portrait ou paysage) à travers l'[API Screen Orientation](/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

Les données d'orientation peuvent être récupérées à travers l'attribut {{domxref("screen.orientation")}} ou à travers la media query [`orientation`](/fr/docs/Web/CSS/@media/orientation). Quand `screen.orientation` change, l'événement {{domxref("screen.orientationchange")}} est declenché sur l'objet screen. Verrouiller l'orientation de l'écran en possible en invoquant la méthode {{domxref("screen.lockOrientation")}}, tandis que la méthode {{domxref("screen.unlockOrientation")}} supprime le verrouillage de l'écran précédemment définit.

> **Note :** Pour plus d'informations sur l'API Screen Orientation API consultez [Gérer l'orientation de l'écran](/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

#### Plein écran

Vous pourriez avoir besoin de présenter un élément de votre application (comme une {{ htmlelement("video") }} par exemple) en mode plein écran. Vous pouvez y parvenir en appelant {{domxref("Element.requestFullscreen()")}} sur cet élément. Gardez à l'esprit que beaucoup de navigateurs l'implémentent encore avec un préfixe de fournisseur, vous aurez donc probablement besoin de découper votre code ainsi:

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
```

> **Note :** Pour en savoir plus sur la fonctionnalité de plein écran, lisez notre documentation [utiliser le plein écran](/fr/docs/Web/Guide/DOM/Using_full_screen_mode).

#### Drag & Drop

[Drag & Drop](/fr/docs/Web/API/API_HTML_Drag_and_Drop) (glisser/déposer) permet à l'utilisateur de votre application de cliquer sur un élément, maintenir le bouton de la souris enfoncé sur cet élément, le faire glisser vers un autre emplacement, et relacher le bouton de la souris pour le déposer à cet emplacement.

Voici un exemple qui permet à du contenu d'être déplacé:

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'Ce texte peut être déplacé')">
  Ce texte <strong>peut</strong> être déplacé.
</div>
```

Ici, on

- Définit l'attribut [`draggable`](/fr/docs/Web/HTML/Attributs_universels#attr-dir) à vrai pour que l'élément puisse être déplacé.
- Ajoute un gestionnaire d'événement [`dragstart`](/fr/docs/Web/Events/dragstart) qui définit les données de déplacement à l'intérieur.

> **Note :** Vous pouvez trouver plus d'informations dans la documentation MDN [Drag & Drop](/fr/docs/Web/API/API_HTML_Drag_and_Drop).

#### contentEditable

Dans un Open Web App, tout élément DOM peut être rendu directement éditable en utilisant l'attribut [`contenteditable`](/fr/docs/Web/HTML/Attributs_universels#attr-class).

```html
<div contenteditable="true">Ce texte peut être édité par l'utilisateur.</div>
```

> **Note :** Vous pouvez trouver les informations de compatibilité, des exemples et d'autres ressources dans le guide [Contenu Éditable](/fr/docs/Web/HTML/Contenu_editable).

## Exemples

- **[Suivre plusieurs points de contact à la fois](/fr/docs/Web/API/Touch_events#example)**
  - : Cet exemple permet de gérer un toucher multiple (plusieurs contacts simultanés), permettant ainsi à l'utilisateur de dessiner dans un `{{htmlelement("canvas")}}` avec plusieurs doigts. Cela ne fonctionne qu'avec les navigateurs supportant les interactions tactiles.
- **[Démo de verrouillage de pointeur simple](/fr/docs/WebAPI/Pointer_Lock#example)**
  - : Vous avons écrit une démo de verrouillage de pointeur pour vous montrer comment l'utiliser pour mettre en place un système de contrôle simple. Cette démo utilise JavaScript pour dessiner une balle dans un élément `{{htmlelement("canvas")}}`. Quand vous cliquez sur le canvas, le verrouillage du pointeur est utilisé pour supprimer le curseur de la souris à l'écran et vous permettre de déplacer la balle avec la souris.
- **[Démo contentEditable](http://html5demos.com/contenteditable)**
  - : Ceci est un exemple qui montre comment contenteditable peut être utilisé pour créer une section de document éditable, et dont l'état est sauvegardé en utilisant [LocalStorage](/fr/docs/Web/API/Web_Storage_API).

## Tutoriels

- [Événement tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events)
- [Gérer l'orientation de l'écran](/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Utiliser le mode plein écran](/fr/docs/Web/Guide/DOM/Using_full_screen_mode)
- [Drag & Drop de multiples éléments](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Opérations de glissement](/fr/docs/Web/API/API_HTML_Drag_and_Drop/Opérations_de_glissement)

## Référence

- {{domxref("MouseEvent")}}
- {{domxref("KeyboardEvent")}}
- [Événements tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events)
- [Pointer Lock API](/fr/docs/WebAPI/Pointer_Lock)
- [Screen Orientation API](/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Fullscreen API](/fr/docs/Web/Guide/DOM/Using_full_screen_mode)
- [Drag & Drop](/fr/docs/Web/API/API_HTML_Drag_and_Drop)
- [Content Editable](/fr/docs/Web/HTML/Contenu_editable)
- [Implementing TV remote control navigation](/fr/docs/Mozilla/Firefox_OS/TVs_connected_devices/TV_remote_control_navigation)
