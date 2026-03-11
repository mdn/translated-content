---
title: "Document : méthode requestStorageAccess()"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
l10n:
  sourceCommit: 1296e665fd82a80bb17123725dcbf1f08b89ab4e
---

{{APIRef("Storage Access API")}}

La méthode **`requestStorageAccess()`** de l'interface {{DOMxRef("Document")}} permet au contenu chargé dans un contexte tiers (c'est-à-dire intégré dans un {{HTMLElement("iframe")}}) de demander l'accès aux [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) et à [l'état non compartimenté](/fr/docs/Web/Privacy/Guides/State_Partitioning#létat_du_partitionnement).
Ceci concerne les agents utilisateurs qui, par défaut, bloquent l'accès aux cookies tiers [non compartimentés](/fr/docs/Web/API/Storage_Access_API#cookies_non_partitionnés_ou_partitionnés) pour améliorer la confidentialité (par exemple, pour empêcher le pistage), et fait partie de [l'API Storage Access](/fr/docs/Web/API/Storage_Access_API).

Pour vérifier si l'autorisation d'accéder aux cookies tiers a déjà été accordée, vous pouvez appeler {{DOMxRef("Permissions.query()")}} en définissant le nom de la fonctionnalité à `"storage-access"`.

Après qu'une inclusion a activé l'autorisation `storage-access` en appelant `requestStorageAccess()`, elle doit se recharger.
Le navigateur va redemander la ressource avec les cookies tiers non compartimentés inclus, et les rendre disponibles à la ressource intégrée une fois chargée.

Les cookies tiers ne sont envoyés qu'avec les requêtes vers l'origine exacte de la ressource intégrée.
Les autres origines du même site qui souhaitent accéder à leurs cookies tiers devront activer l'autorisation d'accès au stockage accordée.
Les [en-têtes d'accès au stockage](/fr/docs/Web/API/Storage_Access_API#en-têtes_daccès_au_stockage) doivent être utilisés pour activer une autorisation `storage-access` accordée.
Notez que les en-têtes peuvent activer une autorisation accordée pour toute ressource intégrée, comme des images authentifiées, et pas seulement du code intégré dans un {{HTMLElement("iframe")}}.

Il est également possible d'activer une autorisation accordée pour un point de terminaison inter-origine, même site, en appelant `requestStorageAccess()` (cette fois sans l'exigence d'activation transitoire).
Cependant, cela ne fonctionne que pour activer l'autorisation pour du code intégré.
C'est aussi moins efficace que d'utiliser les en-têtes, car la ressource doit être chargée pour activer l'autorisation.

> [!NOTE]
> L'utilisation de cette fonctionnalité peut être bloquée par une [politique de permissions](/fr/docs/Web/HTTP/Headers/Permissions-Policy) {{HTTPHeader("Permissions-Policy/storage-access", "storage-access")}} définie sur votre serveur. De plus, le document doit passer des vérifications supplémentaires propres au navigateur telles que des listes d'autorisation, des listes de blocage, une classification sur l'appareil, les paramètres utilisateur·ice·s, des heuristiques anti [usurpation de clic](/fr/docs/Web/Security/Attacks/Clickjacking), ou demander explicitement la permission à l'utilisateur·ice.

## Syntaxe

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Paramètres

- `types` {{Optional_Inline}}
  - : Un objet contenant des propriétés qui contrôlent l'état non partitionné rendu accessible. Si non défini, la valeur par défaut de la propriété est `false`. Les propriétés disponibles sont les suivantes&nbsp;:
    - `all`
      - : Un booléen définissant si tous les états non partitionnés possibles doivent être rendus accessibles.
    - `cookies`
      - : Un booléen définissant si les cookies tiers doivent être rendus accessibles.
    - `sessionStorage`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.sessionStorage")}} doit être rendu accessible.
    - `localStorage`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.localStorage")}} doit être rendu accessible.
    - `indexedDB`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.indexedDB")}} doit être rendu accessible.
    - `locks`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.locks")}} doit être rendu accessible.
    - `caches`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.caches")}} doit être rendu accessible.
    - `getDirectory`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.getDirectory()")}} doit être rendu accessible.
    - `estimate`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.estimate()")}} doit être rendu accessible.
    - `createObjectURL`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.createObjectURL()")}} doit être rendu accessible.
    - `revokeObjectURL`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.revokeObjectURL()")}} doit être rendu accessible.
    - `BroadcastChannel`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.BroadcastChannel()")}} doit être rendu accessible.
    - `SharedWorker`
      - : Un booléen définissant si {{DOMxRef("StorageAccessHandle.SharedWorker()")}} doit être rendu accessible.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec `undefined` si l'accès aux cookies tiers a été accordé et qu'aucun paramètre `types` n'a été fourni, se résout avec {{DOMxRef("StorageAccessHandle")}} si l'accès à l'état non compartimenté demandé par le paramètre `types` a été accordé, et est rejetée si l'accès a été refusé.

Les requêtes à `requestStorageAccess()` sont automatiquement refusées sauf si le contenu intégré traite actuellement un geste utilisateur·ice comme un appui ou un clic ({{Glossary("transient activation", "activation transitoire")}}), ou si l'autorisation a déjà été accordée précédemment. Si l'autorisation n'a pas été accordée auparavant, elles doivent être exécutées dans un gestionnaire d'évènement basé sur un geste utilisateur·ice. Le comportement du geste utilisateur·ice dépend de l'état de la promesse&nbsp;:

- Si la promesse est résolue (c'est-à-dire si l'autorisation a été accordée), alors le geste utilisateur·ice n'a pas été consommé, donc le script peut ensuite appeler des API qui nécessitent un geste utilisateur·ice.
- Si la promesse est rejetée (c'est-à-dire si l'autorisation n'a pas été accordée), alors le geste utilisateur·ice a été consommé, donc le script ne peut rien faire qui nécessite un geste. Il s'agit d'une protection intentionnelle contre les abus — cela empêche les scripts d'appeler `requestStorageAccess()` en boucle jusqu'à ce que l'utilisateur·ice accepte l'invite.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - Le {{DOMxRef("Document")}} actuel n'est pas encore actif.
    - Le paramètre `types` est fourni et toutes ses propriétés sont `false`.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - La fenêtre du document n'est pas un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
    - L'utilisation est bloquée par une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/storage-access", "storage-access")}}.
    - Le document ou le document de niveau supérieur a une origine `null`.
    - Un {{HTMLElement("iframe")}} intégré est sandboxé, et le jeton `allow-storage-access-by-user-activation` n'est pas défini.
    - L'utilisation est refusée par la demande d'autorisation de l'agent utilisateur pour utiliser l'API.

## Exemples

### Utilisation simple

```js
document.requestStorageAccess().then(
  () => {
    console.log("accès aux cookies accordé");
  },
  () => {
    console.log("accès aux cookies refusé");
  },
);

document.requestStorageAccess({ localStorage: true }).then(
  (handle) => {
    console.log("accès à localStorage accordé");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("accès à localStorage refusé");
  },
);
```

> [!NOTE]
> Voir [Utiliser l'API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API/Using) pour un exemple plus complet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les méthodes {{DOMxRef("Document.hasStorageAccess()")}}, {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}, {{DOMxRef("Document.requestStorageAccessFor()")}}
- [Utiliser l'API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API/Using)
- [Introduction à l'API d'accès au stockage <sup>(angl.)</sup>](https://webkit.org/blog/8124/introducing-storage-access-api/) (Blog WebKit)
