---
title: StorageManager.persist()
slug: Web/API/StorageManager/persist
---

{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

La méthode **`persist()`** de l'interface {{domxref("StorageManager")}} fait une demande de permission d'utiliser un stockage persistant, et renvoie une {{jsxref('Promise')}} qui se résoud en `true` si la permission est accordée et le mode de boîte est persistant, et `false` dans le cas contraire.

## Syntaxe

```js
navigator.storage.persist().then(function(persistent) { ... })
```

### Paramètres

Aucun.

### Valeur de retour

Une {{jsxref('Promise')}} qui se résoud en un {{jsxref('Boolean')}}.

## Exemple

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persist().then(function (persistent) {
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
