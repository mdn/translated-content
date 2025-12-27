---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: 4854b2e695bd40ec2a124e15bf57b032f96e493d
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

L'interface **`AbortSignal`** représente un objet signal qui permet de communiquer avec une opération asynchrone (comme une requête fetch) et de l'annuler si nécessaire via un objet {{DOMxRef("AbortController")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("AbortSignal.aborted")}} {{ReadOnlyInline}}
  - : Un {{Glossary("Boolean", "booléen")}} qui indique si la ou les requêtes avec lesquelles le signal communique sont annulées (`true`) ou non (`false`).
- {{DOMxRef("AbortSignal.reason")}} {{ReadOnlyInline}}
  - : Une valeur JavaScript fournissant la raison de l'annulation, une fois le signal annulé.

## Méthodes statiques

_Hérite également des méthodes de son interface parente, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("AbortSignal/abort_static", "AbortSignal.abort()")}}
  - : Retourne une instance d'`AbortSignal` déjà à l'état annulé.
- {{DOMxRef("AbortSignal/any_static", "AbortSignal.any()")}}
  - : Retourne un `AbortSignal` qui s'annule dès qu'un des signaux donnés est annulé.
- {{DOMxRef("AbortSignal/timeout_static", "AbortSignal.timeout()")}}
  - : Retourne une instance d'`AbortSignal` qui s'annulera automatiquement après un temps défini.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("AbortSignal.throwIfAborted()")}}
  - : Lève une exception avec la {{DOMxRef("AbortSignal.reason", "reason")}} du signal si celui-ci a été annulé&nbsp;; sinon, ne fait rien.

## Évènements

_Hérite également des évènements de son interface parente, {{DOMxRef("EventTarget")}}._

Écoutez cet évènement avec {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un gestionnaire à la propriété `oneventname` de cette interface.

- {{DOMxRef("AbortSignal/abort_event", "abort")}}
  - : Déclenché lorsque les opérations asynchrones avec lesquelles le signal communique sont annulées.
    Également disponible via la propriété `onabort`.

## Exemples

### Annuler une opération `fetch` à l'aide d'un signal explicite

L'extrait suivant montre comment utiliser un signal pour annuler le téléchargement d'une vidéo avec l'[API Fetch](/fr/docs/Web/API/Fetch_API).

On commence par définir une variable pour notre `AbortController`.

Avant chaque [requête fetch](/fr/docs/Web/API/Window/fetch), on crée un nouveau contrôleur avec le constructeur {{DOMxRef("AbortController.AbortController","AbortController()")}}, puis on récupère une référence à son objet {{DOMxRef("AbortController.signal")}} `AbortSignal` associé via la propriété.

> [!NOTE]
> Un `AbortSignal` ne peut être utilisé qu'une seule fois. Une fois annulé, tout appel à fetch utilisant ce même signal sera immédiatement rejeté.

Lorsque la [requête fetch](/fr/docs/Web/API/Window/fetch) est lancée, on passe le `AbortSignal` en option dans l'objet d'options de la requête (voir `{ signal }` ci-dessous). Cela associe le signal et le contrôleur à la requête fetch et permet de l'annuler en appelant {{DOMxRef("AbortController.abort()")}}, comme illustré dans le second gestionnaire d'évènement.

Quand `abort()` est appelé, la promesse `fetch()` est rejetée avec un `DOMException` nommé `AbortError`.

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("Téléchargement annulé");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("Téléchargement terminé", response);
    // traite la réponse plus en détail
  } catch (err) {
    console.error(`Erreur de téléchargement : ${err.message}`);
  }
}
```

Si la requête est annulée après l'exécution de l'appel à `fetch()` mais avant que le corps de la réponse n'ait été lu, toute tentative de lecture du corps de la réponse rejettera avec une exception `AbortError`.

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://exemple.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // La ligne suivante génère une exception `AbortError`
  const text = await response.text();
  console.log(text);
}
```

Vous pouvez trouver un [exemple complet et fonctionnel sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/abort-api)&nbsp;; vous pouvez aussi le voir [en ligne <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/abort-api/).

### Annuler une opération `fetch` avec un délai d'expiration

Si vous devez annuler l'opération après un délai, vous pouvez utiliser la méthode statique {{DOMxRef("AbortSignal/timeout_static", "AbortSignal.timeout()")}}.
Cela retourne un `AbortSignal` qui s'annulera automatiquement après un certain nombre de millisecondes.

L'extrait ci-dessous montre comment réussir à télécharger un fichier ou gérer une erreur de délai d'attente après 5 secondes.
Notez qu'en cas de délai, la promesse `fetch()` est rejetée avec un `DOMException` de type `TimeoutError`.
Cela permet de différencier les délais (pour lesquels une notification utilisateur·ice est probablement requise) des annulations utilisateur·ice.

```js
const url = "video.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error(
      "Délai d'attente : il a fallu plus de 5 secondes pour obtenir le résultat !",
    );
  } else if (err.name === "AbortError") {
    console.error(
      "La récupération a été annulée par une action utilisateur (bouton d'arrêt du navigateur, fermeture de l'onglet, etc.).",
    );
  } else {
    // Une erreur réseau, ou un autre problème.
    console.error(`Erreur : type : ${err.name}, message : ${err.message}`);
  }
}
```

### Annuler un `fetch` avec délai ou annulation explicite

Si vous souhaitez annuler à partir de plusieurs signaux, vous pouvez utiliser {{DOMxRef("AbortSignal/any_static", "AbortSignal.any()")}} pour les combiner en un seul signal. L'exemple suivant montre cela avec {{DOMxRef("Window/fetch", "fetch")}}&nbsp;:

```js
try {
  const controller = new AbortController();
  const timeoutSignal = AbortSignal.timeout(5000);
  const res = await fetch(url, {
    // Cela annule le fetch lorsque l'un ou l'autre des signaux est annulé
    signal: AbortSignal.any([controller.signal, timeoutSignal]),
  });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // Notifie l'utilisateur·ice de l'annulation.
  } else if (e.name === "TimeoutError") {
    // Notifie l'utilisateur·ice du délai d'attente
  } else {
    // Une erreur réseau, ou un autre problème.
    console.log(`Type : ${e.name}, Message : ${e.message}`);
  }
}
```

> [!NOTE]
> Contrairement à l'utilisation de {{DOMxRef("AbortSignal/timeout_static", "AbortSignal.timeout()")}}, il n'est pas possible de savoir si l'annulation finale a été causée par un délai d'expiration.

### Implémenter une API annulable

Une API qui doit prendre en charge l'annulation peut accepter un objet `AbortSignal` et utiliser son état pour déclencher la gestion de l'annulation lorsque nécessaire.

Une API basée sur {{JSxRef("Promise")}} doit répondre au signal d'annulation en rejetant toute promesse non résolue avec la {{DOMxRef("AbortSignal.reason", "reason")}} d'annulation d'`AbortSignal`.
Par exemple, considérez la fonction `myCoolPromiseAPI` ci-dessous, qui prend un signal et retourne une promesse.
La promesse est rejetée immédiatement si le signal est déjà annulé ou si l'évènement d'annulation est détecté.
Sinon, elle s'exécute normalement et se résout ensuite.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // Si le signal est déjà annulé, lancez immédiatement une exception pour rejeter la promesse.
    signal.throwIfAborted();

    // Effectue le but principal de l'API
    // Appel resolve(result) une fois terminé.

    // Observe les signaux 'abort'
    // Le passage de `once: true` garantit que la promesse peut être collectée par le ramasse-miettes après l'appel à abort
    signal.addEventListener(
      "abort",
      () => {
        // Arrête l'opération principale
        // Rejette la promesse avec la raison de l'annulation.
        reject(signal.reason);
      },
      { once: true },
    );
  });
}
```

L'API pourrait alors être utilisée comme suit.
Notez que {{DOMxRef("AbortController.abort()")}} est appelé pour annuler l'opération.

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* …, */ signal })
  .then((result) => {})
  .catch((err) => {
    if (err.name === "AbortError") return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

Les API qui ne retournent pas de promesses peuvent réagir de manière similaire.
Dans certains cas, il peut être pertinent d'absorber le signal.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- [Récupération abortable](https://developer.chrome.com/blog/abortable-fetch?hl=fr) par Jake Archibald
