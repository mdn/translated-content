---
title: Storage API
slug: Web/API/Storage_API
translation_of: Web/API/Storage_API
---
{{securecontext_header}}{{DefaultAPISidebar("Storage")}}

Le standard _Storage_ définit un système de stockage commun et partagé utilisable par toutes les API et technologies qui stockent des données accessibles par le contenu pour des sites web individuels. L’API Storage donne aux codes des sites la capacité de déterminer quelle quantité d’espace ils peuvent utiliser, combien ils utilisent déjà, et même contrôler s’ils ont besoin ou non d’être alertés avant que l’{{Glossary("user agent", "agent utilisateur")}} n’élimine des données de site afin de faire de la place pour autre chose.

{{AvailableInWorkers}}

Le stockage de site — les données stockées pour un site web qui sont gérées par le standard Storage — inclut&nbsp;:

- [les bases de données IndexedDB](/fr/docs/Web/API/IndexedDB_API)&nbsp;;
- [les données de l’API Cache](/fr/docs/Web/API/Cache)&nbsp;;
- [les enregistrements de Service Worker](/fr/docs/Web/API/Service_Worker_API)&nbsp;;
- [les données de l’API Web Storage](/fr/docs/Web/API/Web_Storage_API) gérées via {{domxref("window.localStorage")}}&nbsp;;
- les informations de l’état d’historique enregistrées via {{domxref("History.pushState()")}}&nbsp;;
- [les caches d’application](/fr/docs/Web/HTML/Using_the_application_cache)&nbsp;;
- [les données de notification](/fr/docs/Web/API/Notifications_API)&nbsp;;
- d’autres types de données accessibles par le site et spécifiques au site qui pourraient être maintenues.

## Unités de stockage de site

Le système de stockage de site décrit par le standard Storage, et avec lequel on interagit en utilisant l’API Storage, consiste en une seule **unité de stockage de site** pour chaque {{Glossary("origin", "origine")}}. In essence, chaque site web ou application web a sa propre unité de stockage dans laquelle ses données sont placées. Le diagramme ci-dessous présente un bassin de stockage de site contenant trois unités de stockage, montrant que les unités de stockage peuvent contenir différents types de données et avoir différents quotas (limites maximum de stockage).

![Un diagramme illustrant la façon dont l'espace de stockage du site se compose de plusieurs unités de stockage qui contienne des données de différentes API ainsi que l'espace libre restant avant que le quota soit atteint.](storageunits.png)

- L’origine 1 a des données Web Storage ainsi que des données IndexedDB, mais a également un peu d’espace libre restant&nbsp;; son utilisation actuelle n’a pas encore atteint son quota.
- L’origine 2 n’a pas encore de données stockées&nbsp;; c’est simplement une boîte vide en attente de contenu. Cette origine, toutefois, a un quota inférieur à celui des deux autres. Il peut s’agir d’un site visité moins souvent, ou d’un site connu pour avoir des besoins de stockage inférieurs.
- L’unité de stockage de l’origine 3 est complètement remplie&nbsp;; elle a atteint son quota et ne peut pas stocker de données supplémentaires sans que du contenu existant soit supprimé.

Les {{Glossary("User agent", "agents utilisateur")}} sont susceptibles d’utiliser diverses techniques pour déterminer le quota de différentes origines. Une des méthodes les plus probables — une que la spécification encourage spécifiquement, en fait — est de considérer la popularité et les niveaux d’utilisation de sites individuels pour déterminer quels doivent être leurs quotas. Il est également concevable que le navigateur puisse offrir une interface utilisateur pour personnaliser ces quotas.

## Modes de boîte

Le stockage de données en lui-même, au sein de chaque unité de stockage, est appelé sa **boîte**. Chaque unité de stockage de site a exactement une boîte dans laquelle toutes ses données sont placées, et a une **mode de boîte** qui décrit la politique de conservation de données pour cette boîte. Il existe deux modes&nbsp;:

- `"best-effort"`
  - : L’agent utilisateur essayera de conserver les données contenues dans la boîte aussi longtemps qu’il peut, _mais n’avertira pas l’utilisateur ou l’utilisatrice_ si l’espace de stockage approche sa limite et s’il devient nécessaire de nettoyer la boîte afin de réduire la pression de stockage.
- `"persistent"`
  - : L’agent utilisateur essayera de conserver les données aussi longtemps que possible, nettoyant toutes les boîtes `"best-effort"` avant de considérer le nettoyage d’une boîte marquée `"persistent"`. S’il devient nécessaire de considérer le nettoyage d’une boîte persistante, l’agent utilisateur notifiera l’utilisateur ou l’utilisatrice et fournira un moyen de nettoyer une ou plusieurs boîtes persistantes selon le besoin.

Modifier le mode de boîte d’une origine nécessite la permission d’utiliser la fonctionnalité `"persistent-storage"`.

## Persistance et nettoyage des données

Si le site ou l’application a la permission sur la fonctionnalité **`"persistent-storage"`**, il ou elle peut utiliser la méthode {{domxref("StorageManager.persist()")}} pour faire la requête que sa boîte devienne persistante. Il est également possible pour l’agent utilisateur de décider de rendre l’unité de stockage du site persistante sur la base de caractéristiques d’usage ou d’autres métriques. Les drapeaux (_flags_), algorithmes et types associés à la permission `"persistent-storage"`, sont tous positionnés sur les valeurs par défaut standard pour une permission, excepté que **l’état de permission** doit être le même sur l’ensemble de l’origine, et que si l’état de permission n’est pas `"granted"` (c’est-à-dire que si, pour une raison ou une autre, l’accès à la fonctionnalité de stockage persistant a été refusé), le mode de boîte de l’unité de stockage de site de l’origine est toujours `"best-effort"`.

> **Note :** Voir [Using the Permissions API](/fr/docs/Web/API/Permissions_API/Using_the_Permissions_API) pour plus de détails sur l’obtension et la gestion des permissions.

Lors du nettoyage d’unités de stockage de site, la boîte d’une origine est traitée comme une seule entité&nbsp;; si l’agent utilisateur a besoin de la nettoyer et si l’utilisateur ou l’utilisatrice approuve, le stockage de données entier est nettoyé plutôt que de fournir un moyen de nettoyer seulement les données d’une API individuelle.

Si une boîte est marquée `"persistent"`, le contenu ne sera pas nettoyé par l’agent utilisateur sans que l’origine des données elle-même, ou l’utilisateur ou l’utilisatrice, ne le fasse spécifiquement. Cela inclut des scénarios tels que l’utilisateur ou l’utilisatrice choisissant une option «&nbsp;nettoyer le cache&nbsp;» or «&nbsp;nettoyer l’historique récent&nbsp;». La permission de supprimer des unités de stockage persistantes sera spécifiquement demandée à l’utilisateur ou à l’utilisatrice.

## Estimations de quota et d’usage

L’agent utilisateur détermine, à l’aide du mécanisme de son choix, la quantité maximale de stockage qu’un site donné peut utiliser. Ce maximum est le **quota** de l’origine. La quantité de cet espace utilisée par le site est appelée son **usage**. Ces deux valeurs sont des estimations&nbsp;; elles sont imprécise pour plusieurs raisons&nbsp;:

- Les agents utilisateur sont encouragés à dissimuler la taille exacte des données utilisées par une origine donnée, pour empêcher que ces valeurs soient utilisées à des fins de fingerprinting.
- La dé-duplication, la compression et d’autres méthodes pour réduire la taille physique des données stockées peuvent être utilisées.
- Les quotas sont des estimations prudentes de l’espace disponible pour l’utilisation par l’origine, et devraient être inférieurs à l’espace disponible sur l’appareil pour tenter d’empêcher les débordements.

Les agents utilisateurs peuvent utiliser toute méthode de leur choix pour déterminer la taille du quota de l’origine, et sont encouragés par la spécification à fournir de l’espace supplémentaire aux sites populaires ou fréquemment visités.

Pour déterminer les valeurs de quota et d’usage estimées pour une origine donnée, utilisez la méthode {{domxref("StorageManager.estimate", "navigator.storage.estimate()")}}, qui retourne une promesse qui, une fois résolue, reçoit un {{domxref("StorageEstimate")}} qui contient ces nombres. Par exemple&nbsp;:

```js
navigator.storage.estimate().then(estimate => {
  // estimate.quota est le quota estimé
  // estimate.usage est le nombre estimé d’octets utilisés
});
```

## Spécifications

| Spécification                    | Statut                       | Commentaire          |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('Storage')}} | {{Spec2('Storage')}} | Définition initiale. |

## Compatibilité des navigateurs

### `StorageManager`

{{Compat("api.StorageManager")}}

## Voir aussi

- {{domxref("NavigatorStorage.storage", "navigator.storage")}}
- {{domxref("StorageManager")}} (l’objet renvoyé par `navigator.storage`)
- [Utiliser l’API Permissions](/fr/docs/Web/API/Permissions_API/Using_the_Permissions_API)
