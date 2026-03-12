---
title: Utiliser l'API Fetch
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: fe1d7fb9b67ce826c4a748ce00e7b35ac4a54c7f
---

{{DefaultAPISidebar("Fetch API")}}

L'[API Fetch](/fr/docs/Web/API/Fetch_API) fournit une interface JavaScript pour effectuer des requêtes HTTP et traiter les réponses.

Fetch est le remplaçant moderne de {{DOMxRef("XMLHttpRequest")}}&nbsp;: contrairement à `XMLHttpRequest`, qui utilise des fonctions de rappel, Fetch est basé sur les promesses et s'intègre avec les fonctionnalités du web moderne telles que les [service workers](/fr/docs/Web/API/Service_Worker_API) et le [partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS).

Avec l'API Fetch, vous effectuez une requête en appelant {{DOMxRef("Window/fetch", "fetch()")}}, qui est disponible en tant que fonction globale dans les contextes {{DOMxRef("Window", "window")}} et {{DOMxRef("WorkerGlobalScope", "worker")}}. Vous lui passez un objet {{DOMxRef("Request")}} ou une chaîne contenant l'URL à récupérer, ainsi qu'un argument optionnel pour configurer la requête.

La fonction `fetch()` retourne une promesse ({{JSxRef("Promise")}}) qui est résolue avec un objet {{DOMxRef("Response")}} représentant la réponse du serveur. Vous pouvez alors vérifier le statut de la requête et extraire le corps de la réponse dans différents formats, y compris texte et JSON, en appelant la méthode appropriée sur la réponse.

Voici une fonction minimale qui utilise `fetch()` pour récupérer des données JSON depuis un serveur&nbsp;:

```js
async function getData() {
  const url = "https://exemple.org/produits.json";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();
    console.log(resultat);
  } catch (erreur) {
    console.error(erreur.message);
  }
}
```

Nous déclarons une chaîne de caractères contenant l'URL puis appelons `fetch()`, en passant l'URL sans options supplémentaires.

La fonction `fetch()` rejettera la promesse en cas de certaines erreurs, mais pas si le serveur répond avec un statut d'erreur comme {{HTTPStatus("404")}}&nbsp;: nous vérifions donc aussi le statut de la réponse et lançons une exception si ce n'est pas OK.

Sinon, nous récupérons le contenu du corps de la réponse au format {{Glossary("JSON")}} en appelant la méthode {{DOMxRef("Response.json()", "json()")}} de l'interface `Response`, et affichons l'une de ses valeurs. Notez que, comme `fetch()` elle-même, `json()` est asynchrone, tout comme toutes les autres méthodes d'accès au contenu du corps de la réponse.

Dans la suite de cette page, nous examinerons plus en détail les différentes étapes de ce processus.

## Effectuer une requête

Pour effectuer une requête, appelez `fetch()` en passant&nbsp;:

1. une définition de la ressource à récupérer. Cela peut être&nbsp;:
   - une chaîne de caractères contenant l'URL
   - un objet, comme une instance de {{DOMxRef("URL")}}, qui possède un {{Glossary("stringifier", "convertisseur en chaîne de caractères")}} produisant une chaîne de caractères contenant l'URL
   - une instance de {{DOMxRef("Request")}}
2. éventuellement, un objet contenant des options pour configurer la requête.

Dans cette section, nous allons regarder certaines des options les plus couramment utilisées. Pour lire toutes les options qui peuvent être données, voir la page de référence de la méthode {{DOMxRef("Window/fetch", "fetch()")}}.

### Définir la méthode

Par défaut, `fetch()` effectue une requête {{HTTPMethod("GET")}}, mais vous pouvez utiliser l'option `method` pour utiliser une [méthode de requête](/fr/docs/Web/HTTP/Reference/Methods) différente&nbsp;:

```js
const reponse = await fetch("https://exemple.org/post", {
  method: "POST",
  // …
});
```

Si l'option `mode` est définie sur `no-cors`, alors `method` doit être l'une des valeurs `GET`, `POST` ou `HEAD`.

### Définir un corps de requête

Le corps de la requête est la charge utile de la requête&nbsp;: c'est ce que le client envoie au serveur. Vous ne pouvez pas inclure de corps avec les requêtes `GET`, mais c'est utile pour les requêtes qui envoient du contenu au serveur, comme les requêtes {{HTTPMethod("POST")}} ou {{HTTPMethod("PUT")}}. Par exemple, si vous souhaitez téléverser un fichier vers le serveur, vous pouvez effectuer une requête `POST` et inclure le fichier comme corps de la requête.

Pour définir un corps de requête, passez-le en option `body`&nbsp;:

```js
const reponse = await fetch("https://exemple.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "exemple" }),
  // …
});
```

Vous pouvez fournir le corps comme une instance de l'un des types suivants&nbsp;:

- une chaîne de caractères
- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("TypedArray")}}
- {{JSxRef("DataView")}}
- {{DOMxRef("Blob")}}
- {{DOMxRef("File")}}
- {{DOMxRef("URLSearchParams")}}
- {{DOMxRef("FormData")}}
- {{DOMxRef("ReadableStream")}}

Les autres objets sont convertis en chaînes de caractères à l'aide de leur méthode `toString()`. Par exemple, vous pouvez utiliser un objet {{DOMxRef("URLSearchParams")}} pour encoder des données de formulaire (voir [Définir les en-têtes](#définir_les_en-têtes) pour plus d'informations)&nbsp;:

```js
const reponse = await fetch("https://exemple.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // Automatiquement converti en "username=exemple&password=motdepasse"
  body: new URLSearchParams({ username: "exemple", password: "motdepasse" }),
  // …
});
```

Notez que, tout comme les corps de réponse, les corps de requête sont des flux, et effectuer la requête lit le flux, donc si une requête contient un corps, vous ne pouvez pas l'utiliser deux fois&nbsp;:

```js example-bad
const requete = new Request("https://exemple.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "exemple" }),
});

const reponse1 = await fetch(requete);
console.log(reponse1.status);

// Provoquera une erreur : "Body has already been consumed."
const reponse2 = await fetch(requete);
console.log(reponse2.status);
```

À la place, vous devrez {{DOMxRef("Request.clone()", "créer un clone", "", "nocode")}} de la requête avant de l'envoyer&nbsp;:

```js
const requete1 = new Request("https://exemple.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "exemple" }),
});

const requete2 = requete1.clone();

const reponse1 = await fetch(requete1);
console.log(reponse1.status);

const reponse2 = await fetch(requete2);
console.log(reponse2.status);
```

Voir [les flux verrouillés et perturbés](#flux_verrouillés_et_perturbés) pour plus d'informations.

### Définir les en-têtes

Les en-têtes de requête fournissent au serveur des informations sur la requête&nbsp;: par exemple, dans une requête `POST`, l'en-tête {{HTTPHeader("Content-Type")}} indique au serveur le format du corps de la requête.

Pour définir des en-têtes de requête, assignez-les à l'option `headers`.

Vous pouvez passer ici un objet littéral contenant des propriétés `nom-en-tête: valeur-en-tête`&nbsp;:

```js
const reponse = await fetch("https://exemple.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "exemple" }),
  // …
});
```

Vous pouvez aussi construire un objet {{DOMxRef("Headers")}}, ajouter des en-têtes à cet objet avec {{DOMxRef("Headers.append()")}}, puis assigner l'objet `Headers` à l'option `headers`&nbsp;:

```js
const mesEntetes = new Headers();
mesEntetes.append("Content-Type", "application/json");

const reponse = await fetch("https://exemple.org/post", {
  method: "POST",
  headers: mesEntetes,
  body: JSON.stringify({ username: "exemple" }),
  // …
});
```

Comparé à l'utilisation d'objets simples, l'objet `Headers` fournit une validation supplémentaire des entrées. Par exemple, il normalise les noms d'en-tête en minuscules, supprime les espaces en début et fin de valeur, et empêche certains en-têtes d'être définis. De nombreux en-têtes sont définis automatiquement par le navigateur et ne peuvent pas être définis par un script&nbsp;: ce sont les {{Glossary("Forbidden request header", "en-têtes de requête interdits")}}. Si l'option {{DOMxRef("Request.mode", "mode")}} est définie sur `no-cors`, l'ensemble des en-têtes autorisés est encore plus restreint.

### Envoyer des données dans une requête GET

Les requêtes `GET` n'ont pas de corps, mais vous pouvez tout de même envoyer des données au serveur en les ajoutant à l'URL sous forme de chaîne de requête. C'est une façon courante d'envoyer des données de formulaire au serveur. Vous pouvez le faire en utilisant {{DOMxRef("URLSearchParams")}} pour encoder les données, puis en les ajoutant à l'URL&nbsp;:

```js
const params = new URLSearchParams();
params.append("username", "exemple");

// Requête GET envoyée à https://exemple.org/login?username=exemple
const reponse = await fetch(`https://exemple.org/login?${params}`);
```

### Effectuer des requêtes inter-origines

La possibilité d'effectuer une requête inter-origines est déterminée par la valeur de l'option {{DOMxRef("RequestInit", "", "mode")}}. Cette option peut prendre l'une des trois valeurs suivantes&nbsp;: `cors`, `same-origin` ou `no-cors`.

- Pour les requêtes fetch, la valeur par défaut de `mode` est `cors`, ce qui signifie que si la requête est inter-origines, elle utilisera le mécanisme de [partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS). Cela signifie&nbsp;:
  - si la requête est une [requête simple](/fr/docs/Web/HTTP/Guides/CORS#requêtes_simples), la requête sera toujours envoyée, mais le serveur doit répondre avec l'en-tête {{HTTPHeader("Access-Control-Allow-Origin")}} approprié, sinon le navigateur ne partagera pas la réponse avec l'appelant.
  - si la requête n'est pas une requête simple, le navigateur enverra une [requête de pré-vérification](/fr/docs/Web/HTTP/Guides/CORS#requêtes_pré-vérifiées) pour vérifier que le serveur comprend CORS et autorise la requête, et la requête réelle ne sera envoyée que si le serveur répond à la requête de pré-vérification avec les en-têtes CORS appropriés.

- Définir `mode` sur `same-origin` interdit complètement les requêtes inter-origines.

- Définir `mode` sur `no-cors` désactive CORS pour les requêtes inter-origines. Cela restreint les en-têtes qui peuvent être définis et limite les méthodes à GET, HEAD et POST. La réponse est _opaque_, ce qui signifie que ses en-têtes et son corps ne sont pas accessibles en JavaScript. La plupart du temps, un site web ne devrait pas utiliser `no-cors`&nbsp;: son principal usage concerne certains cas d'utilisation des service workers.

Voir la documentation de référence pour {{DOMxRef("RequestInit", "", "mode")}} pour plus de détails.

### Inclure des informations d'authentification

Dans le contexte de l'API Fetch, une information d'authentification est une donnée supplémentaire envoyée avec la requête que le serveur peut utiliser pour authentifier l'utilisateur·ice. Tous les éléments suivants sont considérés comme des informations d'authentification&nbsp;:

- Cookies HTTP
- Certificats client {{Glossary("TLS")}}
- Les en-têtes {{HTTPHeader("Authorization")}} et {{HTTPHeader("Proxy-Authorization")}}.

Par défaut, les informations d'authentification ne sont incluses que dans les requêtes de même origine. Pour personnaliser ce comportement, ainsi que pour contrôler si le navigateur respecte les en-têtes de réponse **`Set-Cookie`**, définissez l'option [`credentials`](/fr/docs/Web/API/RequestInit#credentials), qui peut prendre l'une des trois valeurs suivantes&nbsp;:

- `omit`&nbsp;: n'envoie jamais d'informations d'authentification dans la requête et n'en inclut pas dans la réponse.
- `same-origin` (valeur par défaut)&nbsp;: n'envoie et n'inclut les informations d'authentification que pour les requêtes de même origine.
- `include`&nbsp;: inclut toujours les informations d'authentification, même pour les requêtes inter-origines.

Notez que si l'attribut [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) d'un cookie est défini sur `Strict` ou `Lax`, alors le cookie ne sera pas envoyé entre sites, même si `credentials` est défini sur `include`.

Inclure des informations d'authentification dans des requêtes inter-origines peut rendre un site vulnérable aux attaques de type {{Glossary("CSRF")}}. Ainsi, même si `credentials` est défini sur `include`, le serveur doit également accepter leur inclusion en ajoutant l'en-tête {{HTTPHeader("Access-Control-Allow-Credentials")}} dans sa réponse. De plus, dans ce cas, le serveur doit définir explicitement l'origine du client dans l'en-tête de réponse {{HTTPHeader("Access-Control-Allow-Origin")}} (c'est-à-dire que `*` n'est pas autorisé).

Cela signifie que si `credentials` est défini sur `include` et que la requête est inter-origines&nbsp;:

- Si la requête est une [requête simple](/fr/docs/Web/HTTP/Guides/CORS#requêtes_simples), alors la requête sera envoyée avec les informations d'authentification, mais le serveur doit définir les en-têtes de réponse {{HTTPHeader("Access-Control-Allow-Credentials")}} et {{HTTPHeader("Access-Control-Allow-Origin")}}, sinon le navigateur retournera une erreur réseau à l'appelant. Si le serveur définit les bons en-têtes, alors la réponse, y compris les informations d'authentification, sera transmise à l'appelant.

- Si la requête n'est pas une requête simple, alors le navigateur enverra une [requête de pré-vérification](/fr/docs/Web/HTTP/Guides/CORS#requêtes_pré-vérifiées) sans informations d'authentification, et le serveur doit définir les en-têtes de réponse {{HTTPHeader("Access-Control-Allow-Credentials")}} et {{HTTPHeader("Access-Control-Allow-Origin")}}, sinon le navigateur retournera une erreur réseau à l'appelant. Si le serveur définit les bons en-têtes, alors le navigateur poursuivra avec la requête réelle, y compris les informations d'authentification, et transmettra la réponse réelle, y compris les informations d'authentification, à l'appelant.

### Créer un objet `Request`

Le constructeur {{DOMxRef("Request.Request()", "Request()")}} prend les mêmes arguments que `fetch()` lui-même. Cela signifie qu'au lieu de passer des options à `fetch()`, vous pouvez passer les mêmes options au constructeur `Request()`, puis passer cet objet à `fetch()`.

Par exemple, on peut effectuer une requête POST en passant des options à `fetch()` avec un code comme celui-ci&nbsp;:

```js
const mesEntetes = new Headers();
mesEntetes.append("Content-Type", "application/json");

const reponse = await fetch("https://exemple.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "exemple" }),
  headers: mesEntetes,
});
```

Cependant, on peut réécrire cela pour passer les mêmes arguments au constructeur `Request()`&nbsp;:

```js
const mesEntetes = new Headers();
mesEntetes.append("Content-Type", "application/json");

const maRequete = new Request("https://exemple.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "exemple" }),
  headers: mesEntetes,
});

const reponse = await fetch(maRequete);
```

Cela signifie aussi que vous pouvez créer une requête à partir d'une autre requête, tout en modifiant certaines de ses propriétés à l'aide du second argument&nbsp;:

```js
async function post(requete) {
  try {
    const reponse = await fetch(requete);
    const resultat = await reponse.json();
    console.log("Réussite :", resultat);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

const requete1 = new Request("https://exemple.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "exemple1" }),
});

const requete2 = new Request(requete1, {
  body: JSON.stringify({ username: "exemple2" }),
});

post(requete1);
post(requete2);
```

## Interrompre une requête

Pour rendre une requête annulable, créez un {{DOMxRef("AbortController")}}, et assignez son {{DOMxRef("AbortSignal")}} à la propriété `signal` de la requête.

Pour annuler la requête, appelez la méthode {{DOMxRef("AbortController.abort()", "abort()")}} du contrôleur. L'appel à `fetch()` rejettera la promesse avec une exception `AbortError`.

```js
const controleur = new AbortController();

const btnRecuperation = document.querySelector("#fetch");
btnRecuperation.addEventListener("click", async () => {
  try {
    console.log("Début de la récupération");
    const reponse = await fetch("https://exemple.org/get", {
      signal: controleur.signal,
    });
    console.log(`Réponse : ${reponse.status}`);
  } catch (e) {
    console.error(`Erreur : ${e}`);
  }
});

const btnAnnuler = document.querySelector("#cancel");
btnAnnuler.addEventListener("click", () => {
  controleur.abort();
  console.log("Récupération annulée");
});
```

Si la requête est annulée après que l'appel à `fetch()` a été accompli mais avant que le corps de la réponse n'ait été lu, alors toute tentative de lecture du corps de la réponse rejettera avec une exception `AbortError`.

```js
async function recuperer() {
  const controleur = new AbortController();
  const requete = new Request("https://exemple.org/get", {
    signal: controleur.signal,
  });

  const reponse = await fetch(requete);
  controleur.abort();
  // La ligne suivante va lever une exception `AbortError`
  const texte = await reponse.text();
  console.log(texte);
}
```

## Traiter la réponse

Dès que le navigateur a reçu le statut de la réponse et les en-têtes du serveur (et potentiellement avant que le corps de la réponse lui-même ait été reçu), la promesse retournée par `fetch()` est tenue avec un objet {{DOMxRef("Response")}}.

### Vérifier le statut de la réponse

La promesse retournée par `fetch()` sera rejetée en cas de certaines erreurs, comme une erreur réseau ou un mauvais schéma. Cependant, si le serveur répond avec une erreur comme {{HTTPStatus("404")}}, alors `fetch()` est tenue avec un objet `Response`, il faut donc vérifier le statut avant de lire le corps de la réponse.

La propriété {{DOMxRef("Response.status")}} donne le code de statut numérique, et la propriété {{DOMxRef("Response.ok")}} retourne `true` si le statut est dans la [plage 200](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès).

Un schéma courant consiste à vérifier la valeur de `ok` et à lancer une exception si elle vaut `false`&nbsp;:

```js
async function obtenirDonnees() {
  const url = "https://exemple.org/produits.json";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    // …
  } catch (erreur) {
    console.error(erreur.message);
  }
}
```

### Vérifier le type de la réponse

Les réponses possèdent une propriété {{DOMxRef("Response.type", "type")}} qui peut avoir l'une des valeurs suivantes&nbsp;:

- `basic`&nbsp;: la requête était de même origine.
- `cors`&nbsp;: la requête était une requête CORS inter-origines.
- `opaque`&nbsp;: la requête était une requête simple inter-origines effectuée avec le mode `no-cors`.
- `opaqueredirect`&nbsp;: la requête a défini l'option `redirect` sur `manual`, et le serveur a retourné un [statut de redirection](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection).

Le type détermine le contenu possible de la réponse, comme suit&nbsp;:

- Les réponses de type basic excluent les en-têtes de réponse de la liste de {{Glossary("Forbidden response header name", "nom d'en-tête de réponse interdit")}}.

- Les réponses CORS incluent uniquement les en-têtes de réponse de la liste de {{Glossary("CORS-safelisted response header", "en-tête de réponse autorisé par CORS")}}.

- Les réponses opaques et les réponses opaques de redirection ont un `status` de `0`, une liste d'en-têtes vide et un corps `null`.

### Vérifier les en-têtes

Comme pour la requête, la réponse possède une propriété {{DOMxRef("Response.headers", "headers")}} qui est un objet {{DOMxRef("Headers")}}, et celui-ci contient tous les en-têtes de réponse exposés aux scripts, sous réserve des exclusions selon le type de réponse.

Un cas d'usage courant consiste à vérifier le type de contenu avant d'essayer de lire le corps&nbsp;:

```js
async function recupererJSON(requete) {
  try {
    const reponse = await fetch(requete);
    const typeContenu = reponse.headers.get("content-type");
    if (!typeContenu || !typeContenu.includes("application/json")) {
      throw new TypeError("Oups, ce n'est pas du JSON !");
    }
    // Sinon, on peut lire le corps en JSON
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}
```

### Lire le corps de la réponse

L'interface `Response` fournit plusieurs méthodes pour récupérer l'intégralité du contenu du corps dans différents formats&nbsp;:

- {{DOMxRef("Response.arrayBuffer()")}}
- {{DOMxRef("Response.blob()")}}
- {{DOMxRef("Response.formData()")}}
- {{DOMxRef("Response.json()")}}
- {{DOMxRef("Response.text()")}}

Toutes ces méthodes sont asynchrones et retournent une promesse ({{JSxRef("Promise")}}) qui sera tenue avec le contenu du corps.

Dans cet exemple, on récupère une image et on la lit comme un {{DOMxRef("Blob")}}, que l'on peut ensuite utiliser pour créer une URL d'objet&nbsp;:

```js
const image = document.querySelector("img");

const url = "fleurs.jpg";

async function definirImage() {
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    const blob = await reponse.blob();
    const urlObjet = URL.createObjectURL(blob);
    image.src = urlObjet;
  } catch (e) {
    console.error(e);
  }
}
```

La méthode lancera une exception si le corps de la réponse n'est pas dans le format approprié&nbsp;: par exemple, si vous appelez `json()` sur une réponse qui ne peut pas être analysée comme JSON.

### Lire le corps de la réponse en flux

Les corps de requête et de réponse sont en réalité des objets {{DOMxRef("ReadableStream")}}, et chaque fois que vous les lisez, vous traitez le contenu en flux. Cela est avantageux pour la gestion de la mémoire, car le navigateur n'a pas besoin de mettre en mémoire tampon toute la réponse avant que l'appelant la récupère avec une méthode comme `json()`.

Cela signifie aussi que l'appelant peut traiter le contenu de façon incrémentale au fur et à mesure qu'il est reçu.

Par exemple, considérez une requête `GET` qui récupère un grand fichier texte et le traite d'une certaine manière, ou l'affiche à l'utilisateur·ice&nbsp;:

```js
const url = "https://www.exemple.org/un-gros-fichier.txt";

async function recupererTexte(url) {
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const texte = await reponse.text();
    console.log(texte);
  } catch (e) {
    console.error(e);
  }
}
```

Si on utilise {{DOMxRef("Response.text()")}}, comme ci-dessus, il faut attendre que tout le fichier soit reçu avant de pouvoir en traiter une partie.

Si on lit la réponse en flux, on peut traiter des morceaux du corps au fur et à mesure qu'ils sont reçus du réseau&nbsp;:

```js
const url = "https://www.exemple.org/un-gros-fichier.txt";

async function recupererTexteEnFlux(url) {
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const flux = reponse.body.pipeThrough(new TextDecoderStream());
    for await (const valeur of flux) {
      console.log(valeur);
    }
  } catch (e) {
    console.error(e);
  }
}
```

Dans cet exemple, on {{JSxRef("Statements/for-await...of", "itère de façon asynchrone", "", "nocode")}} sur le flux, en traitant chaque morceau à mesure qu'il arrive.

Notez que lorsque vous accédez directement au corps de cette façon, vous obtenez les octets bruts de la réponse et devez les transformer vous-même. Ici, on appelle {{DOMxRef("ReadableStream.pipeThrough()")}} pour faire passer la réponse dans un {{DOMxRef("TextDecoderStream")}}, qui décode les données du corps encodées en UTF-8 en texte.

### Traiter un fichier texte ligne par ligne

Dans l'exemple ci-dessous, on récupère une ressource texte et on la traite ligne par ligne, en utilisant une expression régulière pour détecter les fins de ligne. Par simplicité, on suppose que le texte est en UTF-8 et on ne gère pas les erreurs de récupération&nbsp;:

```js
async function* iterateurLignesFichierTexte(urlFichier) {
  const reponse = await fetch(urlFichier);
  const lecteur = reponse.body.pipeThrough(new TextDecoderStream()).getReader();

  let { value: bloc = "", done: lecteurTermine } = await lecteur.read();

  const sautDeLigne = /\r?\n/g;
  let debutIndex = 0;

  while (true) {
    const resultat = sautDeLigne.exec(bloc);
    if (!resultat) {
      if (lecteurTermine) break;
      const reste = bloc.slice(debutIndex);
      ({ value: bloc, done: lecteurTermine } = await lecteur.read());
      bloc = reste + (bloc || "");
      debutIndex = sautDeLigne.lastIndex = 0;
      continue;
    }
    yield bloc.substring(debutIndex, resultat.index);
    debutIndex = sautDeLigne.lastIndex;
  }

  if (debutIndex < bloc.length) {
    // La dernière ligne ne se termine pas par un caractère de saut de ligne
    yield bloc.substring(debutIndex);
  }
}

async function executer(urlDuFichier) {
  for await (const ligne of iterateurLignesFichierTexte(urlDuFichier)) {
    traiterLigne(ligne);
  }
}

function traiterLigne(ligne) {
  console.log(ligne);
}

executer("https://www.exemple.org/un-gros-fichier.txt");
```

### Flux verrouillés et perturbés

Les conséquences du fait que les corps de requête et de réponse sont des flux sont les suivantes&nbsp;:

- si un lecteur a été attaché à un flux avec `ReadableStream.getReader()`, alors le flux est _verrouillé_, et rien d'autre ne peut lire le flux.
- si du contenu a été lu depuis le flux, alors le flux est _perturbé_, et rien d'autre ne peut lire depuis le flux.

Cela signifie qu'il n'est pas possible de lire le même corps de réponse (ou de requête) plus d'une fois&nbsp;:

```js example-bad
async function obtenirDonnees() {
  const url = "https://exemple.org/produits.json";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat1 = await reponse.json();
    const resultat2 = await reponse.json(); // va lancer une exception
  } catch (erreur) {
    console.error(erreur.message);
  }
}
```

Si vous devez lire le corps plus d'une fois, vous devez appeler {{DOMxRef("Response.clone()")}} avant de lire le corps&nbsp;:

```js
async function obtenirDonnees() {
  const url = "https://exemple.org/produits.json";
  try {
    const reponse1 = await fetch(url);
    if (!reponse1.ok) {
      throw new Error(`Statut de réponse : ${reponse1.status}`);
    }

    const reponse2 = reponse1.clone();

    const resultat1 = await reponse1.json();
    const resultat2 = await reponse2.json();
  } catch (erreur) {
    console.error(erreur.message);
  }
}
```

C'est un schéma courant lors de [la mise en œuvre d'un cache hors ligne avec les service workers](/fr/docs/Web/Progressive_web_apps/Guides/Caching). Le service worker souhaite retourner la réponse à l'application, mais aussi mettre la réponse en cache. Il clone donc la réponse, retourne l'originale et met le clone en cache&nbsp;:

```js
async function cacheEnPremier(requete) {
  const reponseEnCache = await caches.match(requete);
  if (reponseEnCache) {
    return reponseEnCache;
  }
  try {
    const reponseReseau = await fetch(requete);
    if (reponseReseau.ok) {
      const cache = await caches.open("MonCache_1");
      cache.put(requete, reponseReseau.clone());
    }
    return reponseReseau;
  } catch (erreur) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (ressourcesPrecachees.includes(url.pathname)) {
    event.respondWith(cacheEnPremier(event.request));
  }
});
```

## Voir aussi

- [L'API Service Worker](/fr/docs/Web/API/Service_Worker_API)
- [L'API Streams](/fr/docs/Web/API/Streams_API)
- [La politique d'accès aux ressources inter-origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
- [Exemples d'utilisation de <i lang="en">Fetch</i> sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/fetch)
