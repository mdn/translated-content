---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
l10n:
  sourceCommit: 69a705c07d1cd6b8f3e5d711421a23a09f471958
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLBodyElement`** des propriétés particulières (au-delà de celles de l'interface {{ domxref("HTMLElement") }} dont-elle hérite également) pour manipuler les éléments.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- `HTMLBodyElement.aLink` {{deprecated_inline}}
  - : Une chaîne de caractères qui représente la couleur des liens hypertextes actifs.
- `HTMLBodyElement.background` {{deprecated_inline}}
  - : Une chaîne de caractères qui représente la description de l'emplacement de la ressource d'image d'arrière-plan. Notez que ce n'est pas un URI, même si certaines anciennes versions de certains navigateurs s'y attendent.
- `HTMLBodyElement.bgColor` {{deprecated_inline}}
  - : Une chaîne de caractères qui représente la couleur de fond du document.
- `HTMLBodyElement.link` {{deprecated_inline}}
  - : Une chaîne de caractères qui représente la couleur des liens non visités.
- `HTMLBodyElement.text` {{deprecated_inline}}
  - : Une chaîne de caractères qui représente la couleur de premier plan du texte.
- `HTMLBodyElement.vLink` {{deprecated_inline}}
  - : Une chaîne de caractères qui représente la couleur des liens visités.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

## Gestionnaires d'événements

Les événements de {{domxref("HTMLElement")}} sont hérités.

Les propriétés de gestionnaires d'événements `onXYZ` de {{domxref("Window")}} sont également disponibles comme alias ciblant l'objet `window`. Cependant, il est conseillé de les écouter directement sur l'objet `window` plutôt que sur `HTMLBodyElement`.

> [!NOTE]
> L'utilisation de `addEventListener()` sur `HTMLBodyElement` ne fonctionnera pas pour les gestionnaires d'événements `onXYZ` listés ci-dessous. Écoutez ces événements sur l'objet {{domxref("window")}} à la place.

- {{domxref("window.afterprint_event", "HTMLBodyElement.onafterprint")}}
  - : Se déclenche après que le document associé a commencé à être imprimé ou que l'aperçu avant impression a été fermé.
- {{domxref("window.beforeprint_event", "HTMLBodyElement.onbeforeprint")}}
  - : Se déclenche lorsque le document associé est sur le point d'être imprimé ou prévisualisé pour impression.
- {{domxref("window.beforeunload_event", "HTMLBodyElement.onbeforeunload")}}
  - : Se déclenche lorsque la fenêtre, le document et ses ressources sont sur le point d'être déchargés.
- {{domxref("window.blur_event", "HTMLBodyElement.onblur")}}
  - : Se déclenche lorsque la fenêtre perd la sélection.
- {{domxref("window.error_event", "HTMLBodyElement.onerror")}}
  - : Se déclenche lorsqu'une erreur se produit et se propage jusqu'à la fenêtre.
- {{domxref("window.focus_event", "HTMLBodyElement.onfocus")}}
  - : Se déclenche lorsque la fenêtre obtient la sélection.
- {{domxref("window.gamepadconnected_event", "HTMLBodyElement.ongamepadconnected")}}
  - : Se déclenche lorsque le navigateur détecte qu'une manette de jeu a été connectée ou la première fois qu'un bouton/axe de la manette est utilisé.
- {{domxref("window.gamepaddisconnected_event", "HTMLBodyElement.ongamepaddisconnected")}}
  - : Se déclenche lorsque le navigateur détecte qu'une manette de jeu a été déconnectée.
- {{domxref("window.hashchange_event", "HTMLBodyElement.onhashchange")}}
  - : Se déclenche lorsque l'identifiant de fragment de l'URL a changé (la partie de l'URL commençant par et suivant le symbole `#`).
- {{domxref("window.languagechange_event", "HTMLBodyElement.onlanguagechange")}}
  - : Se déclenche lorsque la langue préférée de l'utilisateur·ice change.
- {{domxref("window.load_event", "HTMLBodyElement.onload")}}
  - : Se déclenche lorsque le document a fini de se charger.
- {{domxref("window.message_event", "HTMLBodyElement.onmessage")}}
  - : Se déclenche lorsque la fenêtre reçoit un message, par exemple à la suite d'un appel à [`Window.postMessage()`](/fr/docs/Web/API/Window/postMessage) depuis un autre contexte de navigation.
- {{domxref("window.messageerror_event", "HTMLBodyElement.onmessageerror")}}
  - : Se déclenche lorsque la fenêtre reçoit un message qui ne peut pas être désérialisé.
- {{domxref("window.offline_event", "HTMLBodyElement.onoffline")}}
  - : Se déclenche lorsque le navigateur a perdu l'accès au réseau et que la valeur de {{domxref("Navigator.onLine")}} passe à `false`.
- {{domxref("window.online_event", "HTMLBodyElement.ononline")}}
  - : Se déclenche lorsque le navigateur a retrouvé l'accès au réseau et que la valeur de {{domxref("Navigator.onLine")}} passe à `true`.
- {{domxref("window.pagehide_event", "HTMLBodyElement.onpagehide")}}
  - : Se déclenche lorsque le navigateur masque la page courante lors de la présentation d'une autre page de l'historique de la session.
- {{domxref("window.pageshow_event", "HTMLBodyElement.onpageshow")}}
  - : Se déclenche lorsque le navigateur affiche le document de la fenêtre à la suite d'une navigation.
- {{domxref("window.popstate_event", "HTMLBodyElement.onpopstate")}}
  - : Se déclenche lorsque l'entrée d'historique active change pendant que l'utilisateur·ice navigue dans l'historique de la session.
- {{domxref("window.rejectionhandled_event", "HTMLBodyElement.onrejectionhandled")}}
  - : Se déclenche chaque fois qu'une promesse ({{jsxref("Promise")}}) JavaScript est rejetée et que le rejet a été pris en charge.
- {{domxref("window.resize_event", "HTMLBodyElement.onresize")}}
  - : Se déclenche lorsque la vue du document a été redimensionnée.
- {{domxref("document.scroll_event", "HTMLBodyElement.onscroll")}}
  - : Se déclenche lorsque la vue du document ou un élément a été défilé.
- {{domxref("window.storage_event", "HTMLBodyElement.onstorage")}}
  - : Se déclenche lorsqu'une zone de stockage (`localStorage`) a été modifiée dans le contexte d'un autre document.
- {{domxref("window.unhandledrejection_event", "HTMLBodyElement.onunhandledrejection")}}
  - : Se déclenche chaque fois qu'une promesse ({{jsxref("Promise")}}) est rejetée mais que le rejet n'a pas été pris en charge.
- {{domxref("window.unload_event", "HTMLBodyElement.onunload")}}
  - : Se déclenche lorsque le document est en cours de déchargement.

Notez que bien que `onblur`, `onerror`, `onfocus`, `onload`, `onresize` et `onscroll` soient disponibles sur n'importe quel élément, leur signification sur l'élément `<body>` n'est pas la même que sur les autres éléments. Ils écoutent les événements sur l'objet `window` à la place.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML mis en œuvre par cette interface&nbsp;: {{HTMLElement("body")}}
