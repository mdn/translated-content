---
title: StorageEstimate
slug: conflicting/Web/API/StorageManager/estimate
translation_of: Web/API/StorageEstimate
original_slug: Web/API/StorageEstimate
---
{{securecontext_header}}{{APIRef("Storage")}}

Le dictionnaire **`StorageEstimate`** est utilisé par le {{domxref("StorageManager")}} pour fournir des estimations de taille du stockage de données d’un site ou d’une application et de la quantité actuellement utilisée. La méthod {{domxref("StorageManager.estimate", "estimate()")}} renvoie un objet qui se conforme à ce dictionnaire quand sa {{jsxref("Promise")}} se résoud.

Ces valeurs sont seulement des estimations pour différentes raisons, telles que la performance, et la prévention de l’utilisation des informations de capacité de stockage à des fins de fingerprinting. Voir les pages de propriétés individuelles pour plus de détails.

## Propriétés

_Actuellement, ce dictionnaire a toujours les deux propriétés suivantes définies._

- {{domxref("StorageEstimate.quota", "quota")}} {{securecontext_inline}}
  - : Une valeur numérique qui fournit une approximation prudente du stockage total que l’appareil ou l’ordinateur met à disposition de l’origine ou de l’application web. Il est possible que plus d’espace que la valeur indiquée soit disponible, cependant vous ne pouvez pas supposer que c’est le cas.
- {{domxref("StorageEstimate.usage", "usage")}} {{securecontext_inline}}
  - : Une valeur numérique donnant une approximation de la quantité de stockage actuellement utilisée par le site ou l’application, parmi l’espace disponible indiqué par `quota`.

## Spécifications

| Spécification                                                                                | Statut                       | Commentaire          |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('Storage', '#dictdef-storageestimate', 'StorageEstimate')}} | {{Spec2('Storage')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.StorageEstimate")}}

## Voir aussi

- [l’API Storage](/en-US/docs/Web/API/Storage_API)
- {{domxref("StorageManager")}}
- {{domxref("StorageManager.estimate()")}}
- {{domxref("NavigatorStorage.storage", "navigator.storage")}}
