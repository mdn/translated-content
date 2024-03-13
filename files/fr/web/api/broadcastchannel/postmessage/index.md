---
title: BroadcastChannel.postMessage()
slug: Web/API/BroadcastChannel/postMessage
l10n:
  sourceCommit: c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{APIRef("BroadCastChannel API")}}

La méthode **`BroadcastChannel.postMessage()`** envoie un message qui peut être de n'importe quel type d'[`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object) à chaque écouteur de n'importe quel [contexte de navigation](/fr/docs/Glossary/Browsing_context) d'une même [origine](/fr/docs/Glossary/Origin). Le message est transmis en tant qu'évènement [`message`](/fr/docs/Web/API/BroadcastChannel/message_event) ciblant chaque [`BroadcastChannel`](/fr/docs/Web/API/BroadcastChannel) lié au canal.

{{AvailableInWorkers}}

## Syntaxe

```js
canal.postMessage(message);
```

### Paramètres

- `message`
  - : Données à envoyer à la fenêtre. Les données sont sérialisées en utilisant l'[algorithme de clonage de structure](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Cela signifie que vous pouvez passer un large spectre de type de données de manière sûre à la fenêtre de destination sans avoir à réaliser le traitement de sérialisation par vous-même.

### Valeur de retour

Aucune.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`BroadcastChannel`](/fr/docs/Web/API/BroadcastChannel), l'interface à laquelle elle se rapporte.
