---
title: Ajouter des lecteurs de flux à Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

À partir de Firefox 2, Firefox prend en charge la sélection de différents lecteurs de flux RSS ou Atom à utiliser lorsque vous essayez de lire un flux. Cet article fournit des informations sur la façon d'ajouter la prise en charge de lecteurs supplémentaires non pris en charge par défaut.

## Ajouter un nouveau lecteur de flux basé sur le web

### Ajouter un lecteur de flux depuis une application web

La prise en charge de l'ajout de lecteurs de flux depuis le web a été supprimée de la spécification HTML5, et la prise en charge dans Firefox est prévue pour suppression à partir de Firefox 62. {{Deprecated_Inline}}

Dans les anciennes versions, le code JavaScript sur le web pouvait ajouter un lecteur de flux en utilisant la fonction `navigator.registerContentHandler()`, comme ceci&nbsp;:

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "https://www.exemple.com/?feed-feed=%s",
  "Mon lecteur de flux",
);
```

Notez que le contenu web est limité à l'ajout d'URL de gestionnaire ayant la même origine que la page effectuant l'appel.

### Ajouter un nouveau lecteur de flux manuellement

La prise en charge de l'ajout de nouveaux lecteurs de flux a été supprimée dans Firefox 63. {{Deprecated_Inline}}

Avant Firefox 63, pour ajouter la prise en charge d'un nouveau lecteur de flux basé sur le web, il fallait ajouter trois nouvelles préférences&nbsp;:

- `browser.contentHandlers.types.number.title`
  - : Le nom du lecteur de flux.
- `browser.contentHandlers.types.number.type`
  - : Pour un lecteur de flux, cela doit être `"application/vnd.mozilla.maybe.feed"`.
- `browser.contentHandlers.types.number.uri`
  - : L'URI du lecteur de flux. Utilisez `"%s"` là où l'URL du flux doit être insérée.

`number` doit être remplacé par le prochain numéro unique le plus élevé qui n'a pas encore été utilisé. Par exemple, si vous souhaitez ajouter un nouveau lecteur de flux appelé «&nbsp;Easy Reader&nbsp;», et qu'il existe déjà des gestionnaires de contenu définis avec les numéros 0 à 4, vous devez utiliser un `number` de 5, comme ceci&nbsp;:

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

Vous pouvez ajouter ces préférences manuellement, en visitant `about:config`.

### Ajouter une nouvelle application de lecteur de flux

La façon la plus simple de le faire est d'utiliser l'interface utilisateur fournie, en utilisant le panneau Flux dans la fenêtre Préférences (ou Options, selon votre plateforme).
