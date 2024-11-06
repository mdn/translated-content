---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
---

{{APIRef("Service Workers API")}}

La propriété en lecture seule **`state`**, rattachée à l'interface [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker), renvoie une chaîne de caractères indiquant l'état courant du <i lang="en">service worker</i>. Sa valeur peut être&nbsp;:

- `"installing"`,
- `"installed"`,
- `"activating"`,
- `"activated"`,
- ou `"redundant"`.

## Valeur

Une chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) qui peut valoir&nbsp;:

- `"installing"`
  - : Le <i lang="en">service worker</i> est en cours d'installation. Pendant cet état, [`ExtendableEvent.waitUntil()`](/fr/docs/Web/API/ExtendableEvent/waitUntil) peut être appelé au sein du gestionnaire d'évènement `install` pour étendre la durée de vie du worker en installation jusqu'à ce que la promesse passée soit réussie. Cet état sert principalement à s'assurer que le <i lang="en">service worker</i> n'est pas actif tant que tous les caches n'ont pas été remplis.
- `"installed"`
  - : Dans cet état, le <i lang="en">service worker</i> est en attente.
- `"activating"`
  - : Dans cet état, le <i lang="en">service worker</i> est considéré comme actif. Pendant cet état, on peut appeler [`ExtendableEvent.waitUntil()`](/fr/docs/Web/API/ExtendableEvent/waitUntil) dans le gestionnaire d'évènements `onactivate` afin d'étendre la durée de vie du worker jusqu'à ce que la promesse passée soit réussie. Aucun évènement fonctionnel n'est diffusé tant que l'état n'est pas `"activated"`.
- `"activated"`
  - : Dans cet état, le <i lang="en">service worker</i> est considéré comme actif et comme pouvant gérer les évènements fonctionnels.
- `"redundant"`
  - : Un nouveau <i lang="en">service worker</i> qui remplace le <i lang="en">service worker</i> courant, ou le <i lang="en">service worker</i> courant qui est écarté en raison d'un échec d'installation.

## Exemples

Le fragment de code qui suit est tiré de [l'exemple `registration-events`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([voir la démo correspondante](https://googlechrome.github.io/samples/service-worker/registration-events/)). Le code surveille tout changement de `ServiceWorker.state` et renvoie la valeur.

```js
let serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector("#kind").textContent = "installing";
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector("#kind").textContent = "waiting";
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector("#kind").textContent = "active";
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", function (e) {
    logState(e.target.state);
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
