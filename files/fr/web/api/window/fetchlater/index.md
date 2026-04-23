---
title: "Window : méthode fetchLater()"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

La méthode **`fetchLater()`** de l'interface {{DOMxRef("Window")}} crée une récupération différée.

Une requête `fetchLater()` est envoyée une fois que la page est quittée (elle est détruite ou entre dans le [bfcache](/fr/docs/Glossary/bfcache)), ou après un délai `activateAfter` fourni — selon ce qui se produit en premier.

La méthode `fetchLater()` retourne un objet {{DOMxRef("FetchLaterResult")}} contenant une seule valeur `activated` indiquant si la requête a déjà été envoyée. Notez que la méthode ne retourne pas le résultat de la récupération réelle lorsque cela se produit (puisqu'il est souvent envoyé après la destruction du document) et que toute la réponse de la récupération, y compris le corps et les en-têtes, est ignorée.

Les requêtes dont le corps est un {{DOMxRef("ReadableStream")}} ne peuvent pas être différées.

La méthode `fetchLater()` est contrôlée par la directive `connect-src` de la [politique de sécurité du contenu](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy), et non par la directive des ressources récupérées.

## Syntaxe

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Paramètres

La méthode `fetchLater()` prend tous les mêmes paramètres que {{DOMxRef("Window.fetch", "fetch()")}}, mais avec une option supplémentaire `activateAfter`.

- `resource`
  - : Cela définit la ressource que vous souhaitez récupérer. Identique à {{DOMxRef("Window.fetch", "fetch()")}}, cela peut être&nbsp;:
    - Une chaîne de caractères ou tout autre objet avec une {{Glossary("stringifier", "conversion en chaîne de caractères")}} — y compris un objet {{DOMxRef("URL")}} — qui fournit l'URL de la ressource que vous souhaitez récupérer. L'URL peut être relative à l'URL de base, qui est le {{DOMxRef("Node.baseURI", "baseURI")}} du document dans un contexte de fenêtre.
    - Un objet {{DOMxRef("Request")}}.

- `options` {{Optional_Inline}}
  - : Un objet {{DOMxRef("DeferredRequestInit")}} contenant tous les paramètres personnalisés que vous souhaitez appliquer à la requête, y compris une valeur de délai `activateAfter` qui définit combien de temps le résultat doit être différé avant l'envoi.

### Exceptions

Les [mêmes exceptions que pour `fetch()`](/fr/docs/Web/API/Window/fetch#exceptions) peuvent être levées pour `fetchLater()`, ainsi que les exceptions supplémentaires suivantes&nbsp;:

- {{DOMxRef("QuotaExceededError")}}
  - : L'utilisation de cette fonctionnalité a été bloquée en raison du dépassement du quota disponible. Voir [les quotas de `fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour plus de détails. Les appelants de `fetchLater()` doivent être prudents et gérer les erreurs `QuotaExceededError` dans presque tous les cas, surtout s'ils intègrent du JavaScript tiers.

- `RangeError` {{DOMxRef("DOMException")}}
  - : Levée lorsqu'une valeur négative pour `activateAfter` est définie.

- `TypeError` {{DOMxRef("DOMException")}}
  - : En plus des raisons pour `fetch()`, cette exception sera également levée pour une requête {{DOMxRef("ReadableStream")}} (qui ne peut pas être différée) ou pour l'utilisation d'URL non fiables (comme `http://`).

### Valeur de retour

Un objet {{DOMxRef("FetchLaterResult")}} contenant une propriété booléenne `activated` indiquant si la requête a déjà été envoyée.

> [!NOTE]
> Une fois la requête de récupération envoyée, sa réponse — y compris le corps et les en-têtes — n'est pas disponible et sera ignorée.

## Exemples

L'article sur [les quotas de `fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch) fournit des exemples de l'application des quotas.

### Différer une requête `GET` jusqu'à ce que la page soit quittée ou fermée

```js
fetchLater("/send_beacon");
```

### Différer une requête `POST` pendant environ une minute

Dans cet exemple, nous créons un objet {{DOMxRef("Request")}}, et fournissons une valeur `activateAfter` pour retarder l'envoi de la requête de 60 000 millisecondes (ou une minute)&nbsp;:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> L'heure réelle d'envoi est inconnue, car le navigateur peut attendre une période plus longue ou plus courte, par exemple pour optimiser le regroupement des récupérations différées.

### Différer une requête `POST` pendant environ une minute avec un `try/catch`

Le même exemple que ci-dessus, mais la meilleure pratique consiste à l'encapsuler dans un `try/catch`&nbsp;:

```js
try {
  fetchLater("/send_beacon", {
    method: "POST",
    body: getBeaconData(),
    activateAfter: 60000, // 1 minute
  });
} catch (e) {
  if (e instanceof QuotaExceededError) {
    // Gérer l'erreur de quota
  } else {
    // Gérer les autres erreurs
  }
}
```

### Différer une requête `POST` pendant environ une minute et créer une fonction pour vérifier si elle a été envoyée

```js
const result = fetchLater("https://report.exemple.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 minute */,
});

function checkIfFetched() {
  return result.activated;
}
```

### Mettre à jour une requête en attente

Dans cet exemple, nous utilisons un {{DOMxRef("AbortController")}} pour annuler et recréer la requête&nbsp;:

```js
let beaconResult = null;
let beaconAbort = null;

function updateBeacon(data) {
  const pending = !beaconResult || !beaconResult.activated;
  if (pending && beaconAbort) {
    beaconAbort.abort();
  }

  createBeacon(data);
}

function createBeacon(data) {
  if (beaconResult && !beaconResult.activated) {
    // Éviter de créer un beacon dupliqué si le précédent est encore en attente.
    return;
  }

  beaconAbort = new AbortController();
  beaconResult = fetchLater({
    url: data,
    signal: beaconAbort.signal,
  });
}
```

### Exemples invalides

Toutes les appels suivants à `fetchLater()` généreraient une exception&nbsp;:

```js
// Seules les URL potentiellement fiables sont prises en charge
fetchLater("http://untrusted.exemple.com");

// La longueur de la requête différée doit être connue
fetchLater("https://origin.exemple.com", { body: someDynamicStream });

// Le fetch différé ne fonctionne que sur les fenêtres actives
const detachedWindow = iframe.contentWindow;
iframe.remove();
detachedWindow.fetchLater("https://origin.exemple.com");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la récupération différée](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch)
- L'interface {{DOMxRef("FetchLaterResult")}}
- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
