---
title: "Window : méthode sizeToContent()"
short-title: sizeToContent()
slug: Web/API/Window/sizeToContent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

La méthode **`sizeToContent()`** de l'interface {{DOMxRef("Window")}} redimensionne la fenêtre en fonction de son contenu. Pour qu'elle fonctionne, le contenu du DOM doit être chargé lorsque cette fonction est appelée — par exemple, une fois que l'évènement {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}} a été déclenché.

Depuis Firefox 20, la taille minimale de la fenêtre est limitée afin d'empêcher la fenêtre d'être trop petite pour que l'utilisateur·ice puisse interagir avec.

## Syntaxe

```js-nolint
sizeToContent()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
window.sizeToContent();
```

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Window")}}
