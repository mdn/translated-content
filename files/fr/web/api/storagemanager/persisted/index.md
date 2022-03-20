---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
translation_of: Web/API/StorageManager/persisted
---
{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

La propriété **`persisted`** de l’interface {{domxref("StorageManager")}} renvoie une {{jsxref('Promise')}} qui se résoud en `true` si le mode de boîte est est persistant pour le stockage de votre site.

## Syntaxe

    navigator.storage.persisted().then(function(persistent) { ... })

### Paramètres

Aucun.

### Valeur de retour

Une {{jsxref('Promise')}} qui se résoud en un {{jsxref('Boolean')}}.

## Example

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persisted().then(function(persistent) {
    if (persistent)
      console.log("Le stockage ne sera pas nettoyé sauf en cas d’action humaine explicite");
    else
      console.log("Le stockage peut être nettoyé par l’UA en cas de pression de stockage.");
  });
```

## Spécifications

| Spécification                                                                            | Statut                       | Commentaire          |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('Storage','#dom-storagemanager-persisted','persisted')}} | {{Spec2('Storage')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.StorageManager.persisted")}}
