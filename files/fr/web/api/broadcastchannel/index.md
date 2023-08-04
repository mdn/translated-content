---
title: BroadcastChannel
slug: Web/API/BroadcastChannel
l10n:
  sourceCommit: c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{APIRef("Broadcast Channel API")}}

L'interface **`BroadcastChannel`** représente un canal nommé auquel peut s'abonner n'importe quel [contexte de navigation](/fr/docs/Glossary/Browsing_context) d'une même [origine](/fr/docs/Glossary/Origin). Il permet la communication entre différents documents (dans différentes fenêtres, onglets, cadres ou iframes) d'une même origine. Les messages sont diffusés via un évènement [`message`](/fr/docs/Web/API/BroadcastChannel/message_event) déclenché à tout objet `BroadcastChannel` écoutant le canal, sauf celui qui l'a envoyé.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructeur

- [`BroadcastChannel()`](/fr/docs/Web/API/BroadcastChannel/BroadcastChannel)
  - : Crée un objet lié au canal nommé.

## Propriétés

_Cette interface hérite aussi des propriétés de son parent, [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`BroadcastChannel.name`](/fr/docs/Web/API/BroadcastChannel/name) {{ReadOnlyInline}}
  - : Retourne une chaîne, le nom du canal.

## Méthodes

_Cette interface hérite aussi des méthodes de son parent, [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`BroadcastChannel.postMessage()`](/fr/docs/Web/API/BroadcastChannel/postMessage)
  - : Envoie un message de n'importe quel type d'objet à l'objet `BroadcastChannel` écoutant sur le même canal.
- [`BroadcastChannel.close()`](/fr/docs/Web/API/BroadcastChannel/close)
  - : Ferme l'objet canal, indiquant qu'il n'aura plus aucun nouveau message et lui permettant finalement d'être libéré par le ramasse-miettes.

## Évènements

- [`message`](/fr/docs/Web/API/BroadcastChannel/message_event)
  - : Déclenché lorsqu'un message arrive sur le canal.
    Également accessible via la propriété `onmessage`.
- [`messageerror`](/fr/docs/Web/API/BroadcastChannel/messageerror_event)
  - : Déclenché lorsqu'un message arrive mais ne peut pas être désérialisé. Également accessible via la propriété `onmessageerror`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un autre moyen, plus fourni, de communiquer entre contextes navigateurs&nbsp;: [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker).
- [Vue d'ensemble de l'API <i lang="en">Broadcast Channel</i>](/fr/docs/Web/API/Broadcast_Channel_API)
