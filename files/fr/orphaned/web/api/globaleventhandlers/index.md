---
title: GlobalEventHandlers
slug: orphaned/Web/API/GlobalEventHandlers
tags:
  - API
  - DOM
  - Gestionnaires d'évènements
  - évènements
translation_of: Web/API/GlobalEventHandlers
original_slug: Web/API/GlobalEventHandlers
---
{{ ApiRef("HTML DOM") }}

L'interface **`GlobalEventHandlers`** décrit les gestionnaires d'évènements usuels de nombreuses interfaces comme {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}} ou {{domxref("WorkerGlobalScope")}} pour les Web Workers. Chacune de ces interfaces peut implémenter plus de gestionnaires d'évènements.

`GlobalEventHandlers` est une interface brute et aucun objet de ce type ne peut être créé.

## Propriétés

Les propriétés des évènements, de la forme `onXYZ`, sont définies sur {{domxref("GlobalEventHandlers")}} et implémentées par {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}} et {{domxref("WorkerGlobalScope")}} pour les Web Workers.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event ("abort")}} est déclenché.
- {{domxref("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsqu'un évènement {{event("animationcancel")}} est envoyé, indiquant que l'exécution de l'[animation CSS](/fr/docs/Web/CSS/Animations_CSS) a été abandonnée.
- {{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsqu'un évènement {{event("animationend")}} est envoyé, indiquant que l'exécution de l'[animation CSS](/fr/docs/Web/CSS/Animations_CSS) a été abandonnée.
- {{domxref("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsqu'un évènement {{event("animationiteration")}} est envoyé , indiquant qu'une [animation CSS](/fr/docs/Web/CSS/Animations_CSS) a commencé à jouer une nouvelle itération de la séquence d'animation.
- {{domxref("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsqu'un évènement {{event("animationstart")}} est envoyé , indiquant qu'une [animation CSS](/fr/docs/Web/CSS/Animations_CSS) a commencé.
- {{domxref("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}
  - : un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsqu'un évènement {{event("auxclick")}} est envoyé , indiquant qu'un bouton non primaire a été enfoncé sur le périphérique d'entrée (par exemple, un bouton du milieu de la souris).
- {{domxref("GlobalEventHandlers.onblur")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("blur")}} est déclenché.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : est un {{domxref("OnErrorEventHandler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("error")}} est déclenché.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'évènement {{event("focus")}} est déclenché.
- {{domxref("GlobalEventHandlers.oncancel")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("cancel")}} est déclenché.
- {{domxref("GlobalEventHandlers.oncanplay")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("canplay")}} est déclenché.
- {{domxref("GlobalEventHandlers.oncanplaythrough")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("canplaythrough")}} est déclenché.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("change")}} est déclenché.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("click")}} est déclenché.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("close")}} est déclenché.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("contextmenu")}} est déclenché.
- {{domxref("GlobalEventHandlers.oncuechange")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("cuechange")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("dblclick")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondrag")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("drag")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondragend")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("dragend")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondragenter")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("dragenter")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondragexit")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("dragexit")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondragleave")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("dragleave")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondragover")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("dragover")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondragstart")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("dragstart")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondrop")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("drop")}} est déclenché.
- {{domxref("GlobalEventHandlers.ondurationchange")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("durationchange")}} est déclenché.
- {{domxref("GlobalEventHandlers.onemptied")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("emptied")}} est déclenché.
- {{domxref("GlobalEventHandlers.onended")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsqu'un événement {{event("ended")}} est déclenché.
- {{domxref("GlobalEventHandlers.ongotpointercapture")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque le type d'événement {{event("gotpointercapture")}} est déclenché.
- {{domxref("GlobalEventHandlers.oninput")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("input")}} est déclenché.
- {{domxref("GlobalEventHandlers.oninvalid")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("invalid")}} est déclenché.
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("keydown")}} est déclenché.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("keypress")}} est déclenché.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("keyup")}} est déclenché.
- {{domxref("GlobalEventHandlers.onload")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("load")}} est déclenché.
- {{domxref("GlobalEventHandlers.onloadeddata")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("loadeddata")}} est déclenché.
- {{domxref("GlobalEventHandlers.onloadedmetadata")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("loadedmetadata")}} est déclenché.
- {{domxref("GlobalEventHandlers.onloadend")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("loadend")}} est déclenché (lorsque la progression s'est arrêtée sur le chargement d'une ressource).
- {{domxref("GlobalEventHandlers.onloadstart")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("loadstart")}} est déclenché.
- {{domxref("GlobalEventHandlers.onlostpointercapture")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque le type d'événement {{event("lostpointercapture")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mousedown")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmouseenter")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mouseenter")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmouseleave")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mouseleave")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mousemove")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mouseout")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mouseover")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mouseup")}} est déclenché.
- {{domxref("GlobalEventHandlers.onmousewheel")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("mousewheel")}} est déclenché. Déprécié. Utiliser  `onwheel` à la place.
- {{ domxref("GlobalEventHandlers.onwheel") }}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("wheel")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpause")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pause")}} est déclenché.
- {{domxref("GlobalEventHandlers.onplay")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("play")}} est déclenché.
- {{domxref("GlobalEventHandlers.onplaying")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("playing")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerdown")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerdown")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointermove")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointermove")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerup")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerup")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointercancel")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointercancel")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerover")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerover")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerout")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerout")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerenter")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerevent")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerleave")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerleave")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerlockchange")}} est déclenché.
- {{domxref("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("pointerlockerror")}} est déclenché.
- {{domxref("GlobalEventHandlers.onprogress")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("progress")}} est déclenché.
- {{domxref("GlobalEventHandlers.onratechange")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("ratechange")}} est déclenché.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("reset")}} est déclenché.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("scroll")}} est déclenché.
- {{domxref("GlobalEventHandlers.onseeked")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("seeked")}} est déclenché.
- {{domxref("GlobalEventHandlers.onseeking")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("seeking")}} est déclenché.
- {{domxref("GlobalEventHandlers.onselect")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("select")}} est déclenché.
- {{domxref("GlobalEventHandlers.onselectstart")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("selectionchange")}} est déclenché, par exemple, quand l'utilisateur commence une nouvelle sélection de texte sur une page web.
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("selectionchange")}} est déclenché, par exemple, quand le texte sélectionné sur une page web change.
- {{domxref("GlobalEventHandlers.onshow")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("show")}} est déclenché.
- {{domxref("GlobalEventHandlers.onsort")}} {{experimental_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("sort")}} est déclenché.
- {{domxref("GlobalEventHandlers.onstalled")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("stalled")}} est déclenché.
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("submit")}} est déclenché.
- {{domxref("GlobalEventHandlers.onsuspend")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("suspend")}} est déclenché.
- {{domxref("GlobalEventHandlers.ontimeupdate")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("timeupdate")}} est déclenché.
- {{domxref("GlobalEventHandlers.onvolumechange")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("volumechange")}} est déclenché.
- {{domxref("GlobalEventHandlers.ontouchcancel")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("touchcancel")}} est déclenché.
- {{domxref("GlobalEventHandlers.ontouchend")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("touchend")}} est déclenché.
- {{domxref("GlobalEventHandlers.ontouchmove")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("touchmove")}} est déclenché.
- {{domxref("GlobalEventHandlers.ontouchstart")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("touchstart")}} est déclenché.
- {{domxref("GlobalEventHandlers.ontransitioncancel")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsqu'un évènement {{event("transitioncancel")}} est envoyé, indiquant qu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions) a été abandonnée.
- {{domxref("GlobalEventHandlers.ontransitionend")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) appelé lorsqu'un évènement {{event("transitionend")}} est envoyé, indiquant qu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions) est terminée.
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : est un {{event("Event_handlers", "event handler")}} (_gestionnaire d'évènements_) représentant le code à appeler lorsque l'événement {{event("waiting")}} est déclenché.

## Méthodes

_Cette interface ne définit aucune méthode._

## Spécifications

| Spécification                                                                                                                | Statut                               | Commentaire                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName("Selection API",'', 'Extension to GlobalEventHandlers')}}                                 | {{Spec2('Selection API')}} | Ajoute `onselectionchange.`                                                                                                                      |
| {{SpecName('Pointer Lock', '#extensions-to-the-document-interface', 'Extension of Document')}} | {{Spec2('Pointer Lock')}}     | Ajoute`onpointerlockchange` et `onpointerlockerror` sur{{domxref("Document")}}. Est implémenté expérimentalement `GlobalEventHandlers`. |
| {{SpecName('HTML WHATWG', '#globaleventhandlers', 'GlobalEventHandlers')}}                         | {{Spec2('HTML WHATWG')}}     | Pas de changement depuis le précédent {{SpecName("HTML5.1")}}.                                                                          |
| {{SpecName('HTML5.1', '#globaleventhandlers', 'GlobalEventHandlers')}}                                 | {{Spec2('HTML5.1')}}         | Instantané de {{SpecName("HTML WHATWG")}}. `onsort` ajouté depuis {{SpecName("HTML5 W3C")}}.                                     |
| {{SpecName("HTML5 W3C", "#globaleventhandlers", "GlobalEventHandlers")}}                             | {{Spec2('HTML5 W3C')}}         | Instantané de {{SpecName("HTML WHATWG")}}. Création de `GlobalEventHandlers`.                                                           |

## Compatibilité des navigateurs

{{Compat("api.GlobalEventHandlers")}}

## Voir aussi

- {{domxref("Element")}}
- {{event("Event_handlers", "event handler")}}
- {{domxref("Event")}}
