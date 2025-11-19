---
title: Utiliser l'API Fetch
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 251eb2f8a9132e73e647b9b7ae987ea6e2b45edc
---

{{DefaultAPISidebar("Fetch API")}}

[L'API <i lang="en">Fetch</i>](/fr/docs/Web/API/Fetch_API) (en anglais, le verbe <i lang="en">fetch</i> signifie récupérer) fournit une interface JavaScript pour accéder et manipuler certaines parties du [protocole](/fr/docs/Glossary/Protocol), comme les requêtes et les réponses. Elle fournit également une méthode globale [`fetch()`](/fr/docs/Web/API/Window/fetch) qui permet un accès pratique aux ressources récupérées de façon asynchrone sur le réseau.

À la différence de [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) qui fonctionne à l'aide de fonctions de rappel (<i lang="en">callbacks</i>), l'API <i lang="en">Fetch</i> utilise les promesses et fournit une meilleure alternative, qui peut être utilisée dans [les <i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API). L'API <i lang="en">Fetch</i> intègre également des concepts HTTP avancés tels que [le CORS](/fr/docs/Web/HTTP/Guides/CORS) et d'autres extensions de HTTP.

Une requête de récupération ressemblera à ceci&nbsp;:

```js
async function afficherFilms() {
  const reponse = await fetch("http://example.com/films.json");
  const films = await reponse.json();
  console.log(films);
}
```

Dans cet exemple, nous récupérons un fichier JSON sur le Web, puis on analyse son contenu afin de pouvoir afficher les données dans la console. Dans sa forme la plus simple, `fetch()` utilise un argument qui correspond au chemin de la ressource à récupérer. Cet appel ne renvoie pas directement une réponse avec un corps en JSON, mais une promesse qui est résolue en un objet [`Response`](/fr/docs/Web/API/Response).

L'objet [`Response`](/fr/docs/Web/API/Response) ne contient pas directement le corps de la réponse en JSON mais fournit une représentation de l'ensemble de la réponse HTTP. Aussi, pour extraire le corps en JSON de l'objet [`Response`](/fr/docs/Web/API/Response), on utilise la méthode [`json()`](/fr/docs/Web/API/Response/json), qui renvoie une deuxième promesse dont la résolution fournit le résultat de l'analyse du corps de la réponse au format JSON.

> [!NOTE]
> Voir la section [corps](#corps) pour d'autres méthodes permettant d'extraire d'autres types de contenu du corps de la réponse.

Les requêtes de récupération sont contrôlées par la directive `connect-src` de [la politique de sécurité du contenu (<i lang="en">Content Security Policy</i> ou CSP)](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) plutôt que par la directive de la ressource qu'elles récupèrent.

## Fournir des options à la requête

La méthode `fetch()` permet l'utilisation optionnelle d'un deuxième paramètre, un objet `init` pour contrôler différents paramètres.

Voir [la page sur la méthode `fetch()`](/fr/docs/Web/API/Window/fetch) pour plus de détails et l'exhaustivité des options disponibles.

```js
// Exemple d'implémentation pour une requête POST
async function postData(url = "", donnees = {}) {
  // Les options par défaut sont indiquées par *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(donnees), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
  });
  return response.json(); // transforme la réponse JSON reçue en objet JavaScript natif
}

postData("https://example.com/solution", { solution: 42 }).then((donnees) => {
  console.log(donnees); // Les données JSON analysées par l'appel `donnees.json()`
});
```

On notera que `mode: "no-cors"` ne permet qu'un ensemble limité d'en-têtes dans la requête&nbsp;:

- `Accept`
- `Accept-Language`
- `Content-Language`
- `Content-Type` avec une valeur `application/x-www-form-urlencoded`, `multipart/form-data`, ou `text/plain`

## Interrompre une requête

Pour interrompre une opération `fetch()` en cours, on pourra utiliser les interfaces [`AbortController`](/fr/docs/Web/API/AbortController) et [`AbortSignal`](/fr/docs/Web/API/AbortSignal).

```js
const controleur = new AbortController();
const signal = controleur.signal;
const url = "video.mp4";

const btnTelechargement = document.querySelector("#telechargement");
const btnInterruption = document.querySelector("#interrompre");

btnTelechargement.addEventListener("click", async () => {
  try {
    const reponse = await fetch(url, { signal });
    console.log("Téléchargement terminé", reponse);
  } catch (error) {
    console.error(`Erreur lors du téléchargement : ${error.message}`);
  }
});

btnInterruption.addEventListener("click", () => {
  controleur.abort();
  console.log("Téléchargement interrompu");
});
```

## Envoyer une requête contenant les informations d'authentification

Pour que les navigateurs envoient une requête avec les informations d'authentification, tant pour les requêtes sur la même origine qu'entre origines différentes, on ajoutera `credentials: 'include'` à l'objet `init` passé à la méthode `fetch()`.

```js
fetch("https://example.com", {
  credentials: "include",
});
```

> [!NOTE]
> On ne pourra pas utiliser `Access-Control-Allow-Origin: *` pour les requêtes avec `credentials: 'include'`. Pour ces cas-là, il faut fournir l'origine exacte. Même si une extension de débridage du CORS est utilisée, la requête échouera.

> [!NOTE]
> Les navigateurs ne devraient pas envoyer d'informations d'authentification dans les _requêtes préparatoires_ (<i lang="en">preflight requests</i>), quelle que soit la valeur de cette option. Pour plus d'informations, voir [la section de la page CORS sur les requêtes avec informations d'authentification](/fr/docs/Web/HTTP/Guides/CORS#requêtes_avec_informations_dauthentification).

Si on souhaite uniquement envoyer les informations d'authentification lorsque l'URL de la requête se situe sur la même origine que le script appelant, on utilisera `credentials: 'same-origin'`.

```js
// Le script qui appelle se situe sur l'origine 'https://example.com'

fetch("https://example.com", {
  credentials: "same-origin",
});
```

Pour s'assurer que les navigateurs n'envoient aucune information d'authentification dans la requête, on utilisera `credentials: 'omit'`.

```js
fetch("https://example.com", {
  credentials: "omit",
});
```

## Téléverser des données JSON

On peut utiliser [`fetch()`](/fr/docs/Web/API/Window/fetch) pour envoyer des données au format JSON à un serveur avec une requête POST.

```js
async function postJSON(donnees) {
  try {
    const reponse = await fetch("https://example.com/profile", {
      method: "POST", // ou 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donnees),
    });

    const resultat = await reponse.json();
    console.log("Réussite :", resultat);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

const donnees = { login: "Jean Biche" };
postJSON(donnees);
```

## Téléverser un fichier

Les fichiers peuvent être envoyés à l'aide d'un élément HTML [`<input type="file" />`](/fr/docs/Web/HTML/Reference/Elements/input/file), de [`FormData`](/fr/docs/Web/API/FormData/FormData), et de [`fetch()`](/fr/docs/Web/API/Window/fetch).

```js
async function upload(donneesFormulaires) {
  try {
    const reponse = await fetch("https://example.com/profile/avatar", {
      method: "PUT",
      body: donneesFormulaires,
    });
    const resultat = await reponse.json();
    console.log("Réussite :", resultat);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

const donneesFormulaires = new FormData();
const champFichier = document.querySelector('input[type="file"]');

donneesFormulaires.append("username", "abc123");
donneesFormulaires.append("avatar", champFichier.files[0]);

upload(donneesFormulaires);
```

## Téléverser plusieurs fichiers

On peut envoyer plusieurs fichiers en utilisant un élément HTML [`<input type="file" multiple />`](/fr/docs/Web/HTML/Reference/Elements/input/file), [`FormData`](/fr/docs/Web/API/FormData/FormData), et [`fetch()`](/fr/docs/Web/API/Window/fetch).

```js
async function uploadMultiple(donneesFormulaires) {
  try {
    const reponse = await fetch("https://example.com/posts", {
      method: "POST",
      body: donneesFormulaires,
    });
    const resultat = await reponse.json();
    console.log("Réussite :", resultat);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

const photos = document.querySelector('input[type="file"][multiple]');
const donneesFormulaires = new FormData();

donneesFormulaires.append("title", "Mes vacances");

for (const [i, photo] of Array.from(photos.files).entries()) {
  donneesFormulaires.append(`photos_${i}`, photo);
}

uploadMultiple(donneesFormulaires);
```

## Traiter un fichier texte ligne à ligne

Les fragments reçus dans une réponse ne sont pas segmentés proprement à chaque fin de ligne. Il s'agit d'objets binaires [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), pas de chaînes de caractères. Si on récupère un fichier texte et qu'on souhaite le traiter ligne à ligne, il faut gérer cette représentation. Dans l'exemple qui suit, on illustre une façon de procéder en créant un itérateur sur les lignes (pour garder l'exemple simple, on considère que le texte est encodé en UTF-8 et on ne gère pas les erreurs de récupération).

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  const newline = /\r?\n/gm;
  let startIndex = 0;
  let result;

  while (true) {
    const result = newline.exec(chunk);
    if (!result) {
      if (readerDone) break;
      const remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = newline.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = newline.lastIndex;
  }

  if (startIndex < chunk.length) {
    // Last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}

async function run() {
  for await (const line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

run();
```

## Vérifier la réussite de l'opération

Une promesse [`fetch()`](/fr/docs/Web/API/Window/fetch) échouera avec une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) s'il y a une erreur réseau ou que la politique CORS est incorrectement configurée côté serveur. En revanche, une réponse 404 qui indiquerait un problème de permission ou autre ne déclencherait pas une telle erreur. Aussi, pour bien vérifier que l'opération `fetch()` est réussie, il faudra vérifier que la promesse est tenue, mais aussi vérifier que la propriété [`Response.ok`](/fr/docs/Web/API/Response/ok) vaut `true`. Le code correspondant ressemblerait à&nbsp;:

```js
async function fetchImage() {
  try {
    const response = await fetch("flowers.jpg");
    if (!response.ok) {
      throw new Error("La réponse n'est pas OK");
    }
    const myBlob = await response.blob();
    monImage.src = URL.createObjectURL(myBlob);
  } catch (error) {
    console.error("Un problème est survenu lors de la récupération :", error);
  }
}
```

## Fournir un objet `Request` sur mesure

Plutôt que de passer le chemin de la ressource à l'appel `fetch()`, on peut créer un objet représentant une requête à l'aide du constructeur [`Request()`](/fr/docs/Web/API/Request/Request) et passer cet objet comme argument à la méthode `fetch()`&nbsp;:

```js
async function fetchImage(request) {
  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error("La réponse n'est pas OK");
    }
    const monBlob = await response.blob();
    monImage.src = URL.createObjectURL(monBlob);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

const mesEntetes = new Headers();

const maRequete = new Request("flowers.jpg", {
  method: "GET",
  headers: mesEntetes,
  mode: "cors",
  cache: "default",
});

fetchImage(maRequete);
```

`Request()` accepte les mêmes paramètres que la méthode `fetch()`. On peut même lui passer un objet représentant une requête existante pour en créer une copie&nbsp;:

```js
const uneAutreRequete = new Request(maRequete, monInit);
```

Ce mécanisme de duplication est plutôt utile, car les corps des requêtes et des réponses ne peuvent être utilisés qu'une seule fois. En construisant une telle copie, on peut à nouveau utiliser la requête ou la réponse tout en adaptant les options `init` si besoin. Attention, la copie doit être effectuée avant que le corps ait été lu.

> [!NOTE]
> Il existe également la méthode [`clone()`](/fr/docs/Web/API/Request/clone) pour créer une copie. Ces deux méthodes de copie échoueront si le corps de la requête ou de la réponse originale a déjà été lu. En revanche, lire le corps d'une réponse ou d'une requête clonée ne modifiera pas l'état de lecture de l'original.

## En-têtes

L'interface [`Headers`](/fr/docs/Web/API/Headers) permet de créer ses propres objets représentant des en-têtes HTTP à l'aide du constructeur [`Headers()`](/fr/docs/Web/API/Headers/Headers). Un objet d'en-têtes est un tableau de correspondance entre des noms et des valeurs&nbsp;:

```js
const contenu = "Coucou le monde";
const mesEntetes = new Headers();
mesEntetes.append("Content-Type", "text/plain");
mesEntetes.append("Content-Length", contenu.length.toString());
mesEntetes.append("X-Custom-Header", "ATraiterImmediatement");
```

On pourra obtenir le même résultat en passant un tableau de tableaux ou un littéral objet au constructeur&nbsp;:

```js
const mesEntetes = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": contenu.length.toString(),
  "X-Custom-Header": "ATraiterImmediatement",
});
```

Le contenu de ces en-têtes peut être consulté et modifié&nbsp;:

```js
console.log(mesEntetes.has("Content-Type")); // true
console.log(mesEntetes.has("Set-Cookie")); // false
mesEntetes.set("Content-Type", "text/html");
mesEntetes.append("X-Custom-Header", "UneAutreValeur");

console.log(mesEntetes.get("Content-Length")); // 11
console.log(mesEntetes.get("X-Custom-Header")); // ['ATraiterImmediatement', 'UneAutreValeur']

mesEntetes.delete("X-Custom-Header");
console.log(mesEntetes.get("X-Custom-Header")); // null
```

Certaines de ces opérations ne sont utiles qu'avec les [<i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API), néanmoins, elles fournissent une API plus pratique pour manipuler les en-têtes.

Toutes les méthodes de `Headers` lèvent une exception `TypeError` si le nom d'en-tête utilisé n'est pas valide en HTTP. Les opérations de modification déclencheront une exception `TypeError` s'il y a une garde d'immuabilité ([voir ci-après](#garde)). Sinon, elles échouent de façon silencieuse&nbsp;:

```js
const maReponse = Response.error();
try {
  maReponse.headers.set("Origin", "http://mabanque.com");
} catch (e) {
  console.log("On ne se fait pas passer pour une banque !");
}
```

Un bon usage des en-têtes consiste à vérifier si le type de contenu est correct avant d'aller plus loin dans le traitement. Par exemple&nbsp;:

```js
async function fetchJSON(requete) {
  try {
    const reponse = await fetch(requete);
    const typeContenu = reponse.headers.get("content-type");
    if (!typeContenu || !typeContenu.includes("application/json")) {
      throw new TypeError("Ah, nous n'avons pas eu de JSON !");
    }
    const donneesJSON = await reponse.json();
    // on continue le traitement des données
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}
```

### Garde

Les en-têtes sont envoyés avec les requêtes et reçus avec les réponses. Plusieurs règles indiquent les informations qui peuvent ou non être modifiées et pour traduire cela, les objets des en-têtes ont une propriété interne `guard`. Cette dernière n'est pas exposée sur le Web, mais a un impact sur les opérations de modification qui sont permises.

Les valeurs pour `guard` sont&nbsp;:

- `none`
  - : La valeur par défaut.
- `request`
  - : Une garde pour l'objet d'en-têtes obtenus avec une requête ([`Request.headers`](/fr/docs/Web/API/Request/headers)).
- `request-no-cors`
  - : Une garde pour l'objet d'en-têtes obtenus avec une requête créée avec [`Request.mode`](/fr/docs/Web/API/Request/mode) `no-cors`.
- `response`
  - : Une garde pour l'objet d'en-têtes obtenus avec une réponse ([`Response.headers`](/fr/docs/Web/API/Response/headers)).
- `immutable`
  - : Une garde qui indique que l'objet d'en-têtes est en lecture seule. Elle est principalement utilisée pour les <i lang="en">service workers</i>.

> [!NOTE]
> Il n'est pas possible d'ajouter ou de modifier l'en-tête `Content-Length` d'un objet d'en-têtes de réponse avec une garde. De même, on ne pourra pas insérer d'en-tête `Set-Cookie` pour une réponse&nbsp;: les <i lang="en">service workers</i> ne sont pas autorisés à écrire des cookies dans des réponses de synthèse.

## Objets `Response`

Nous l'avons vu ci-avant, ce sont des instances de [`Response`](/fr/docs/Web/API/Response) qui sont renvoyées lors de la résolution des promesses fournies par `fetch()`.

Les propriétés les plus fréquemment utilisées pour ces objets `Response` sont&nbsp;:

- [`Response.status`](/fr/docs/Web/API/Response/status)
  - : Un entier contenant le code de statut HTTP de la réponse (la valeur par défaut est 200).
- [`Response.statusText`](/fr/docs/Web/API/Response/statusText)
  - : Une chaîne de caractères qui contient le message du code de statut HTTP (la valeur par défaut est la chaîne vide `""`). On notera que HTTP/2 [ne prend pas en charge](https://fetch.spec.whatwg.org/#concept-response-status-message) les messages de statut.
- [`Response.ok`](/fr/docs/Web/API/Response/ok)
  - : Nous avons vu cette propriété plus tôt dans cet article&nbsp;: il s'agit d'un raccourci pour vérifier que le statut appartient à l'intervalle 200-299. Cette propriété est une valeur booléenne.

On peut également créer des réponses artificiellement en JavaScript. Cela n'est généralement utile qu'au sein des [<i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API), lorsqu'on fournit une réponse sur mesure à une requête reçue en utilisant la méthode [`respondWith()`](/fr/docs/Web/API/FetchEvent/respondWith)&nbsp;:

```js
const monCorps = new Blob();

addEventListener("fetch", (event) => {
  // Un ServiceWorker qui intercepte une requête de récupération
  event.respondWith(
    new Response(monCorps, {
      headers: { "Content-Type": "text/plain" },
    }),
  );
});
```

Le constructeur [`Response()`](/fr/docs/Web/API/Response/Response) prend deux arguments optionnels&nbsp;:

- Un corps pour la réponse
- Un objet d'initialisation des paramètres, semblable à celui qu'on fournit au constructeur [`Request()`](/fr/docs/Web/API/Request/Request).

> [!NOTE]
> La méthode statique [`error()`](/fr/docs/Web/API/Response/error_static) renvoie une réponse d'erreur. De même, [`redirect()`](/fr/docs/Web/API/Response/redirect_static) renvoie une réponse résultant en une redirection vers l'URL indiquée. Ces méthodes sont uniquement pertinentes dans le cadre des <i lang="en">service workers</i>.

## Corps

Les requêtes et les réponses peuvent avoir un corps, contenant des données. Un corps pourra être une instance d'un des types suivants&nbsp;:

- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) (`Uint8Array`, etc.)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- [`Blob`](/fr/docs/Web/API/Blob)
- [`File`](/fr/docs/Web/API/File)
- [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) ou une chaîne de caractères littérale
- [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams)
- [`FormData`](/fr/docs/Web/API/FormData)

Les interfaces [`Request`](/fr/docs/Web/API/Request) et [`Response`](/fr/docs/Web/API/Response) partagent les méthodes suivantes pour extraire les données du corps. Toutes ces méthodes renvoient une promesse qui pourra être résolue avec le contenu effectif.

- [`Request.arrayBuffer()`](/fr/docs/Web/API/Request/arrayBuffer) / [`Response.arrayBuffer()`](/fr/docs/Web/API/Response/arrayBuffer)
- [`Request.blob()`](/fr/docs/Web/API/Request/blob) / [`Response.blob()`](/fr/docs/Web/API/Response/blob)
- [`Request.formData()`](/fr/docs/Web/API/Request/formData) / [`Response.formData()`](/fr/docs/Web/API/Response/formData)
- [`Request.json()`](/fr/docs/Web/API/Request/json) / [`Response.json()`](/fr/docs/Web/API/Response/json)
- [`Request.text()`](/fr/docs/Web/API/Request/text) / [`Response.text()`](/fr/docs/Web/API/Response/text)

> [!NOTE]
> Ces méthodes permettent de travailler plus facilement avec du contenu non-textuel (par rapport à ce que permettait `XMLHttpRequest`).

On peut fournir des corps aux requêtes en utilisant le deuxième paramètre et sa propriété `form`&nbsp;:

```js
const form = new FormData(document.getElementById("login-form"));
fetch("/login", {
  method: "POST",
  body: form,
});
```

Tant la requête que la réponse, ou la fonction `fetch()` essaieront de déterminer intelligemment le type de contenu. Une requête définira automatiquement un en-tête `Content-Type` si aucun n'a été fourni avec le paramètre [`options`](/fr/docs/Web/API/Window/fetch#options).

## Détection de la fonctionnalité

La prise en charge de l'API <i lang="en">Fetch</i> peut être détectée en vérifiant la présence de [`Headers`](/fr/docs/Web/API/Headers), [`Request`](/fr/docs/Web/API/Request), [`Response`](/fr/docs/Web/API/Response) ou [`fetch()`](/fr/docs/Web/API/Window/fetch) au sein des portées [`Window`](/fr/docs/Web/API/Window) ou [`Worker`](/fr/docs/Web/API/Worker). Par exemple&nbsp;:

```js
if (window.fetch) {
  // On exécute la requête avec Fetch ici
} else {
  // On tente autre chose avec XMLHttpRequest ?
}
```

## Différences avec `jQuery.ajax()`

La spécification de `fetch()` diffère de `jQuery.ajax()`&nbsp;:

- La promesse renvoyée par `fetch()` ne lèvera pas d'exception en cas d'erreurs HTTP, même si le statut de la réponse HTTP est 404 ou 500. Dès que le serveur répond avec les en-têtes, la promesse sera bien résolue (la propriété [`Response.ok`](/fr/docs/Web/API/Response/ok) étant fixée à `false` si le statut de la réponse est en dehors de l'intervalle [200, 299]). La promesse sera uniquement rompue s'il y a une erreur réseau ou tout autre évènement qui a empêché sa complétion.
- À moins que `fetch()` ne soit appelé avec l'option [`credentials`](/fr/docs/Web/API/Window/fetch#credentials) valant `include`, `fetch()`&nbsp;:
  - N'enverra pas de cookies pour les requêtes vers d'autres origines
  - N'écrira pas de cookies provenant de réponses d'autres origines

## Voir aussi

- [L'API <i lang="en">Service Worker</i>](/fr/docs/Web/API/Service_Worker_API)
- [La politique HTTP d'accès aux ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
- [Une prothèse d'émulation (<i lang="en">polyfill</i>) pour `fetch()`](https://github.com/JakeChampion/fetch)
- [D'autres exemples (en anglais) sur d'utilisation de <i lang="en">Fetch</i> sur GitHub](https://github.com/mdn/dom-examples/tree/main/fetch)
