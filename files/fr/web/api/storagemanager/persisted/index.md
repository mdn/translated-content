---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
---

{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

La propriété **`persisted`** de l'interface {{domxref("StorageManager")}} renvoie une {{jsxref('Promise')}} qui se résoud en `true` si le mode de boîte est est persistant pour le stockage de votre site.

## Syntaxe

```js
navigator.storage.persisted().then(function(persistent) { ... })
```

### Paramètres

Aucun.

### Valeur de retour

Une {{jsxref('Promise')}} qui se résoud en un {{jsxref('Boolean')}}.

## Example

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persisted().then(function (persistent) {
    if (persistent)
      console.log(
        "Le stockage ne sera pas nettoyé sauf en cas d’action humaine explicite",
      );
    else
      console.log(
        "Le stockage peut être nettoyé par l’UA en cas de pression de stockage.",
      );
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
