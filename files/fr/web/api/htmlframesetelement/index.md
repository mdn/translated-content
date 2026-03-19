---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

L'interface **`HTMLFrameSetElement`** fournit des propriétés spéciales (au-delà de celles de l'interface standard {{DOMxRef("HTMLElement")}} dont elles héritent aussi) pour manipuler les éléments {{HTMLElement("frameset")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLFrameSetElement.cols` {{Deprecated_Inline}}
  - : Est une chaîne de caractères structurée comme une liste séparée par des virgules spécifiant la largeur de chaque colonne à l'intérieur d'un jeu de cadres.
- `HTMLFrameSetElement.rows` {{Deprecated_Inline}}
  - : Est une chaîne de caractères structurée comme une liste séparée par des virgules spécifiant la hauteur de chaque colonne à l'intérieur d'un jeu de cadres.

## Méthodes d'instance

_Pas de méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Gestionnaires d'évènements

Les évènements de {{DOMxRef("HTMLElement")}} sont hérités.

Les propriétés de gestionnaire d'évènements `onXYZ` suivantes de {{DOMxRef("Window")}} sont également disponibles en tant qu'alias ciblant l'objet `window`. Cependant, il est conseillé de les écouter directement sur l'objet `window` plutôt que sur `HTMLFrameSetElement`.

> [!NOTE]
> L'utilisation de `addEventListener()` sur `HTMLFrameSetElement` ne fonctionnera pas pour les gestionnaires d'évènements `onXYZ` listés ci-dessous. Écoutez les événements sur l'objet {{DOMxRef("window")}} à la place.

- {{DOMxRef("window.afterprint_event", "HTMLFrameSetElement.onafterprint")}}
  - : Déclenché après que le document associé a commencé l'impression ou que l'aperçu avant impression a été fermé.
- {{DOMxRef("window.beforeprint_event", "HTMLFrameSetElement.onbeforeprint")}}
  - : Déclenché lorsque le document associé est sur le point d'être imprimé ou d'être affiché en aperçu avant impression.
- {{DOMxRef("window.beforeunload_event", "HTMLFrameSetElement.onbeforeunload")}}
  - : Déclenché lorsque la fenêtre, le document et ses ressources sont sur le point d'être déchargés.
- {{DOMxRef("window.gamepadconnected_event", "HTMLFrameSetElement.ongamepadconnected")}}
  - : Déclenché lorsque le navigateur détecte qu'une manette de jeu a été connectée ou la première fois qu'un bouton/axe de la manette est utilisé.
- {{DOMxRef("window.gamepaddisconnected_event", "HTMLFrameSetElement.ongamepaddisconnected")}}
  - : Déclenché lorsque le navigateur détecte qu'une manette de jeu a été déconnectée.
- {{DOMxRef("window.hashchange_event", "HTMLFrameSetElement.onhashchange")}}
  - : Déclenché lorsque l'identifiant de fragment de l'URL a changé (la partie de l'URL commençant par et suivant le symbole `#`).
- {{DOMxRef("window.languagechange_event", "HTMLFrameSetElement.onlanguagechange")}}
  - : Déclenché lorsque la langue préférée de l'utilisateur·ice change.
- {{DOMxRef("window.message_event", "HTMLFrameSetElement.onmessage")}}
  - : Déclenché lorsque la fenêtre reçoit un message, par exemple d'un appel à {{DOMxRef("Window.postMessage()")}} depuis un autre contexte de navigation.
- {{DOMxRef("window.messageerror_event", "HTMLFrameSetElement.onmessageerror")}}
  - : Déclenché lorsque la fenêtre reçoit un message qui ne peut pas être désérialisé.
- {{DOMxRef("window.offline_event", "HTMLFrameSetElement.onoffline")}}
  - : Déclenché lorsque le navigateur a perdu l'accès au réseau et que la valeur de {{DOMxRef("Navigator.onLine")}} passe à `false`.
- {{DOMxRef("window.online_event", "HTMLFrameSetElement.ononline")}}
  - : Déclenché lorsque le navigateur a retrouvé l'accès au réseau et que la valeur de {{DOMxRef("Navigator.onLine")}} passe à `true`.
- {{DOMxRef("window.pagehide_event", "HTMLFrameSetElement.onpagehide")}}
  - : Déclenché lorsque le navigateur masque la page courante lors de la présentation d'une page différente de l'historique de session.
- {{DOMxRef("window.pageshow_event", "HTMLFrameSetElement.onpageshow")}}
  - : Déclenché lorsque le navigateur affiche le document de la fenêtre suite à une navigation.
- {{DOMxRef("window.popstate_event", "HTMLFrameSetElement.onpopstate")}}
  - : Déclenché lorsque l'entrée d'historique active change pendant que l'utilisateur·ice navigue dans l'historique de session.
- {{DOMxRef("window.rejectionhandled_event", "HTMLFrameSetElement.onrejectionhandled")}}
  - : Déclenché chaque fois qu'une promesse ({{JSxRef("Promise")}}) JavaScript est rejetée et que le rejet a été géré.
- {{DOMxRef("window.storage_event", "HTMLFrameSetElement.onstorage")}}
  - : Déclenché lorsqu'une zone de stockage (`localStorage`) a été modifiée dans le contexte d'un autre document.
- {{DOMxRef("window.unhandledrejection_event", "HTMLFrameSetElement.onunhandledrejection")}}
  - : Déclenché chaque fois qu'une promesse ({{JSxRef("Promise")}}) est rejetée mais que le rejet n'a pas été géré.
- {{DOMxRef("window.unload_event", "HTMLFrameSetElement.onunload")}}
  - : Déclenché lorsque le document est en cours de déchargement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("frameset")}}
- L'équivalent de cet élément en dehors des cadres&nbsp;: `HTMLFrameSetElement`.
