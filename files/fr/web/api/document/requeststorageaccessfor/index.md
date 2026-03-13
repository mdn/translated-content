---
title: "Document : méthode requestStorageAccessFor()"
short-title: requestStorageAccessFor()
slug: Web/API/Document/requestStorageAccessFor
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

La méthode **`requestStorageAccessFor()`** de l'interface {{DOMxRef("Document")}} permet aux sites de niveau supérieur de demander l'accès aux cookies tiers au nom du contenu intégré provenant d'un autre site dans le même [ensemble de sites liés](/fr/docs/Web/API/Storage_Access_API/Related_website_sets). Elle retourne une promesse ({{JSxRef("Promise")}}) qui se résout si l'accès est accordé et se rejette si l'accès est refusé.

## Syntaxe

```js-nolint
requestStorageAccessFor(requestedOrigin)
```

### Paramètres

- `requestedOrigin`
  - : Une chaîne de caractères représentant l'URL de l'origine pour laquelle vous demandez l'accès aux cookies tiers.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec `undefined` si l'accès aux cookies tiers a été accordé et se rejette si l'accès a été refusé.

Les requêtes à `requestStorageAccessFor()` sont automatiquement refusées sauf si le contenu de niveau supérieur traite actuellement un geste utilisateur·ice comme un appui ou un clic ({{Glossary("transient activation", "activation transitoire")}}), ou si l'autorisation a déjà été accordée précédemment. Si l'autorisation n'a pas été accordée auparavant, elles doivent être exécutées dans un gestionnaire d'évènement basé sur un geste utilisateur·ice. Le comportement du geste utilisateur·ice dépend de l'état de la promesse&nbsp;:

- Si la promesse est résolue (c'est-à-dire si l'autorisation a été accordée), alors le geste utilisateur·ice n'a pas été consommé, donc le script peut ensuite appeler des API qui nécessitent un geste utilisateur·ice.
- Si la promesse est rejetée (c'est-à-dire si l'autorisation n'a pas été accordée), alors le geste utilisateur·ice a été consommé, donc le script ne peut rien faire qui nécessite un geste. Cela empêche les scripts d'appeler `requestStorageAccessFor()` à nouveau si l'autorisation est refusée.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si le {{DOMxRef("Document")}} actuel n'est pas encore actif.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - La fenêtre du document n'est pas un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
    - Le document n'est pas le document de niveau supérieur.
    - Le document a une origine `null`.
    - L'origine fournie `requestedOrigin` est [opaque <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque).
    - Les sites de niveau supérieur et intégrés ne sont pas dans le même [ensemble de sites liés](/fr/docs/Web/API/Storage_Access_API/Related_website_sets).
    - Le {{HTMLElement("iframe")}} intégré est sandboxé, et le jeton `allow-storage-access-by-user-activation` n'est pas défini.
    - L'utilisation est bloquée par une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/storage-access", "storage-access")}}.
    - L'utilisation est refusée par la demande d'autorisation de l'agent utilisateur pour utiliser l'API.
- `TypeError`
  - : Levée si `requestedOrigin` n'est pas une URL valide.

## Description

La méthode `requestStorageAccessFor()` répond aux défis liés à l'adoption de l'API Storage Access sur les sites de niveau supérieur qui utilisent des images ou des scripts inter-sites nécessitant des cookies. Elle concerne les agents utilisateurs qui, par défaut, bloquent l'accès aux cookies [tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies), [non compartimentés](/fr/docs/Web/API/Storage_Access_API#cookies_non_partitionnés_ou_partitionnés) pour améliorer la confidentialité (par exemple, pour empêcher le pistage), et constitue une extension proposée de [l'API Storage Access](/fr/docs/Web/API/Storage_Access_API).

`requestStorageAccessFor()` peut permettre l'accès aux cookies tiers pour des ressources inter-sites directement intégrées dans un site de niveau supérieur qui ne peuvent pas demander elles-mêmes l'accès au stockage, par exemple des éléments HTML {{HTMLElement("img")}}. Le contenu inter-site intégré dans des `<iframe>` qui possède sa propre logique et ses propres ressources et nécessite l'accès aux cookies tiers doit demander l'accès au stockage en appelant {{DOMxRef("Document.requestStorageAccess()")}}.

Pour vérifier si l'autorisation d'accéder aux cookies tiers a déjà été accordée en appelant `requestStorageAccessFor()`, vous pouvez appeler {{DOMxRef("Permissions.query()")}} en définissant le nom de la fonctionnalité à `"top-level-storage-access"`. Cela diffère du nom de fonctionnalité utilisé pour la méthode régulière {{DOMxRef("Document.requestStorageAccess()")}}, qui est `"storage-access"`.

L'appel à `Permissions.query()` doit définir l'origine intégrée&nbsp;:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://www.exemple.com",
});
```

> [!NOTE]
> L'utilisation de cette fonctionnalité peut être bloquée par une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/storage-access", "storage-access")}} définie sur votre serveur (la même qui contrôle le reste de l'API Storage Access). De plus, le document doit passer des vérifications supplémentaires spécifiques au navigateur, telles que les listes autorisées, les listes bloquées, la classification sur l'appareil, les paramètres utilisateur ou les heuristiques anti [usurpation de clic](/fr/docs/Web/Security/Attacks/Clickjacking).

## Exemples

```js
function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://exemple.com").then(
      (res) => {
        // Utiliser l'accès au stockage
        faireUnTrucAvecLesCookies();
      },
      (err) => {
        // Gérer les erreurs
      },
    );
  }
}
```

Après un appel réussi à `requestStorageAccessFor()`, les requêtes inter-sites incluront les cookies si elles incluent [CORS](/fr/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin), donc les sites peuvent vouloir attendre avant de déclencher une requête. Ces requêtes doivent utiliser l'option [`credentials: "include"`](/fr/docs/Web/API/RequestInit#credentials) et les ressources doivent inclure l'attribut `crossorigin="use-credentials"`.

Par exemple&nbsp;:

```js
function checkCookie() {
  fetch("https://exemple.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Faire quelque chose
    });
}
```

> [!NOTE]
> Voir [Utiliser l'API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API/Using) pour un exemple plus complet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les méthodes {{DOMxRef("Document.hasStorageAccess()")}}, {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}, {{DOMxRef("Document.requestStorageAccess()")}}
- [Utiliser l'API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API/Using)
- [Introduction à l'API d'accès au stockage <sup>(angl.)</sup>](https://webkit.org/blog/8124/introducing-storage-access-api/) (Blog WebKit)
