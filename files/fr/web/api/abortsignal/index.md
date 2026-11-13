---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

L'interface **`AbortSignal`** représente un objet signal qui permet de communiquer avec une opération asynchrone (comme une requête fetch) et de l'annuler si nécessaire avec un objet {{DOMxRef("AbortController")}}.

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
  - : Retourne une instance de `AbortSignal` déjà à l'état annulé.
- {{DOMxRef("AbortSignal/any_static", "AbortSignal.any()")}}
  - : Retourne un `AbortSignal` qui s'annule dès qu'un des signaux donnés est annulé.
- {{DOMxRef("AbortSignal/timeout_static", "AbortSignal.timeout()")}}
  - : Retourne une instance de `AbortSignal` qui s'annule automatiquement après un temps défini.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("AbortSignal.throwIfAborted()")}}
  - : Lève une exception avec la {{DOMxRef("AbortSignal.reason", "reason")}} du signal si celui-ci a été annulé&nbsp;; sinon, ne fait rien.

## Évènements

_Hérite également des évènements de son interface parente, {{DOMxRef("EventTarget")}}._

Écoutez cet évènement avec {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un gestionnaire à la propriété `oneventname` de cette interface.

- {{DOMxRef("AbortSignal/abort_event", "abort")}}
  - : Déclenché lorsque les opérations asynchrones avec lesquelles le signal communique sont annulées.
    Également disponible avec la propriété `onabort`.

## Exemples

### Annuler une opération `fetch` à l'aide d'un signal explicite

L'extrait suivant montre comment utiliser un signal pour annuler le téléchargement d'une vidéo avec [l'API Fetch](/fr/docs/Web/API/Fetch_API).

On commence par définir une variable pour notre `AbortController`.

Avant chaque [requête fetch](/fr/docs/Web/API/Window/fetch), on crée un nouveau contrôleur avec le constructeur {{DOMxRef("AbortController.AbortController","AbortController()")}}, puis on récupère une référence à son objet {{DOMxRef("AbortController.signal")}} `AbortSignal` associé avec la propriété.

> [!NOTE]
> Un `AbortSignal` ne peut être utilisé qu'une seule fois. Une fois annulé, tout appel à fetch utilisant ce même signal est immédiatement rejeté.

Lorsque la [requête fetch](/fr/docs/Web/API/Window/fetch) est lancée, on passe le `AbortSignal` en option dans l'objet d'options de la requête (voir `{ signal }` ci-dessous). Cela associe le signal et le contrôleur à la requête fetch et permet de l'annuler en appelant {{DOMxRef("AbortController.abort()")}}, comme illustré dans le second gestionnaire d'évènement.

Quand `abort()` est appelé, la promesse `fetch()` est rompue avec un `DOMException` nommé `AbortError`.

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

Si la requête est annulée après l'exécution de l'appel à `fetch()` mais avant que le corps de la réponse n'ait été lu, toute tentative de lecture du corps de la réponse rejette avec une exception `AbortError`.

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
Cela retourne un `AbortSignal` qui s'annule automatiquement après un certain nombre de millisecondes.

L'extrait ci-dessous montre comment réussir à télécharger un fichier ou gérer une erreur de délai d'attente après 5 secondes.
Notez qu'en cas de délai, la promesse `fetch()` est rompue avec un `DOMException` de type `TimeoutError`.
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

## Supprimer l'écouteur d'évènement `abort`

Signaux créés par des {{DOMxRef("AbortController")}} peuvent être collectés par le ramasse-miettes dès que le signal et son contrôleur propriétaire deviennent inaccessibles, même avec des écouteurs d'évènements `abort`, car il est garanti que l'évènement ne se déclenche pas. Cependant, les signaux dont l'annulation est gérée par autre chose qu'un contrôleur sont maintenus en vie par l'existence d'un écouteur d'évènement `abort`&nbsp;:

- Un signal qui n'est pas annulé et qui est retourné par {{DOMxRef("AbortSignal/any_static", "AbortSignal.any()")}} est maintenu en vie tant qu'il a encore des signaux sources et soit des écouteurs `abort` attachés, soit des étapes d'annulation internes enregistrées par une API.
- Un signal retourné par {{DOMxRef("AbortSignal/timeout_static", "AbortSignal.timeout()")}} est maintenu en vie tant que son délai d'attente est en cours et qu'il a des écouteurs `abort` attachés.

La fonction suivante combine l'annulation à l'échelle de l'application avec un signal fourni par l'appelant pour une opération individuelle. Elle ajoute un écouteur pour enregistrer l'annulation, mais s'appuie sur `{ once: true }` pour le supprimer&nbsp;:

```js example-bad
const globalController = new AbortController();

async function doOperation(url, localSignal) {
  const signal = AbortSignal.any([globalController.signal, localSignal]);
  signal.addEventListener("abort", () => console.log(`Annulé : ${url}`), {
    once: true,
  });

  const response = await fetch(url, { signal });
  return response.text();
}
```

`{ once: true }` supprime uniquement l'écouteur lorsque l'évènement se déclenche. Si aucun des signaux d'entrée n'est annulé, l'écouteur reste même après que le corps de la réponse a été lu. Des appels répétés peuvent donc conserver les signaux combinés et leurs écouteurs tant que le signal global reste accessible et que les signaux combinés restent non annulés. Le fait de jeter le signal combiné ne supprime pas l'écouteur, et `fetch()` ne nettoie pas les écouteurs ajoutés par votre code.

Au lieu de cela, supprimez l'écouteur lorsque l'opération se termine, qu'elle réussisse ou échoue. Utilisez un écouteur nommé afin de pouvoir le supprimer dans un bloc {{JSxRef("Statements/try...catch", "finally")}}&nbsp;:

```js
async function doOperation(url, localSignal) {
  const signal = AbortSignal.any([globalController.signal, localSignal]);
  const onAbort = () => console.log(`Aborted: ${url}`);
  signal.addEventListener("abort", onAbort, { once: true });

  try {
    const response = await fetch(url, { signal });
    return await response.text();
  } finally {
    signal.removeEventListener("abort", onAbort);
  }
}
```

Un `await` sur `response.text()` garantit que l'écouteur reste enregistré jusqu'à ce que le corps de la réponse ait été lu. Ce nettoyage concerne l'écouteur ajouté par l'exemple, et non la gestion interne de l'annulation par `fetch()`. Si une opération ne nécessite qu'une annulation à l'échelle de l'application, passez directement `globalController.signal` au lieu de créer un signal combiné.

### Implémenter une API annulable

Une API qui doit prendre en charge l'annulation peut accepter un objet `AbortSignal` et utiliser son état pour déclencher la gestion de l'annulation lorsque nécessaire.

Une API basée sur {{JSxRef("Promise")}} doit répondre au signal d'annulation en rompant toute promesse qui n'est pas acquittée avec la raison ({{DOMxRef("AbortSignal.reason", "reason")}}) d'annulation de `AbortSignal`.
Par exemple, considérez la fonction `myCoolPromiseAPI` ci-dessous, qui prend un signal et retourne une promesse.
La promesse est rompue immédiatement si le signal est déjà annulé ou si l'évènement d'annulation est détecté.
Sinon elle se complète normalement après un délais et résout la promesse.

Supprimez l'écouteur `abort` lorsque l'opération s'achève normalement, afin qu'un signal de longue durée ne conserve pas l'écouteur et les valeurs auxquelles il fait référence. Là encore, `{ once: true }` ne supprime l'écouteur que si le signal provoque effectivement un abandon.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // Si le signal est déjà annulé, lancez immédiatement une exception pour rejeter la promesse.
    signal.throwIfAborted();

    // Simule l'achèvement de l'opération principale après un délai.
    const timeoutId = setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve("Operation completed");
    }, 1000);

    function onAbort() {
      // Arrête l'opération principale et rompt avec la raison de l'annulation.
      clearTimeout(timeoutId);
      reject(signal.reason);
    }

    signal.addEventListener("abort", onAbort, { once: true });
  });
}
```

L'API peut alors être utilisée comme suit.
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
- [Récupération annulable](https://developer.chrome.com/blog/abortable-fetch?hl=fr) par Jake Archibald
