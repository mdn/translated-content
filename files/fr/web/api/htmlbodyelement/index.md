---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLBodyElement`** des propriétés particulières (au-delà de celles de l'interface {{ domxref("HTMLElement") }} dont-elle hérite également) pour manipuler les éléments.

## Propriétés

_Propriétés hérite de son parent, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

- {{domxref("HTMLBodyElement.aLink")}} {{deprecated_inline}}
  - : Est un {{ domxref("DOMString") }} qui représente la couleur des liens hypertextes actifs.
- {{domxref("HTMLBodyElement.background")}} {{deprecated_inline}}
  - : Est un {{ domxref("DOMString") }} qui représente la description de l'emplacement de la ressource d'image d'arrière-plan. Notez que ce n'est pas un URI, même si certaines anciennes versions de certains navigateurs s'y attendent.
- {{domxref("HTMLBodyElement.bgColor")}} {{deprecated_inline}}
  - : Est un {{ domxref("DOMString") }} qui représente la couleur de fond du document.
- {{domxref("HTMLBodyElement.link")}} {{deprecated_inline}}
  - : Est un {{ domxref("DOMString") }} qui représente la couleur des liens non visités.
- {{domxref("HTMLBodyElement.text")}} {{deprecated_inline}}
  - : Est un {{ domxref("DOMString") }} qui représente la couleur de premier plan du texte.
- {{domxref("HTMLBodyElement.vLink")}} {{deprecated_inline}}
  - : Est un {{ domxref("DOMString") }} qui représente la couleur des liens visités.

## Méthodes

_Aucune méthode spécifique; méthodes hérite de ses parents, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

## Les gestionnaires d'événements

_Pas de gestionnaire d'événement spécifique; gestionnaires d'événements hérite de ses parents, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`afterprint`](/fr/docs/Web/API/Window/afterprint_event) est déclenché.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`beforeprint`](/fr/docs/Web/API/Window/beforeprint_event) est déclenché.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`beforeunload`](/fr/docs/Web/API/Window/beforeunload_event) est déclenché.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`hashchange`](/fr/docs/Web/API/Window/hashchange_event) est déclenché.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`languagechange`](/fr/docs/Web/API/Window/languagechange_event) est déclenché.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`message`](/fr/docs/Web/API/Window/message_event) est déclenché.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`offline`](/fr/docs/Web/API/Window/offline_event) est déclenché.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`online`](/fr/docs/Web/API/Window/online_event) est déclenché.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`pagehide`](/fr/docs/Web/API/Window/pagehide_event) est déclenché.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`pageshow`](/fr/docs/Web/API/Window/pageshow_event) est déclenché.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`popstate`](/fr/docs/Web/API/Window/popstate_event) est déclenché.
- {{domxref("WindowEventHandlers.onresize")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`resize`](/fr/docs/Web/API/Window/resize_event) est déclenché.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`storage`](/fr/docs/Web/API/Window/storage_event) est déclenché.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Est un gestionnaire d'évènement représentant le code d'appel lorsque l'événement [`unload`](/fr/docs/Web/API/Window/unload_event) est déclenché.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML mise en œuvre par cette interface: {{ HTMLElement("body") }}
