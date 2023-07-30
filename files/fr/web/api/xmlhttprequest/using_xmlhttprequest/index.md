---
title: Utiliser XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
l10n:
  sourceCommit: c3a0924949863b43957b4ba2ad5e64558165672d
---

{{APIRef("XMLHttpRequest")}}

Dans ce guide, nous verrons comment utiliser [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) afin d'envoyer des requêtes [HTTP](/fr/docs/Web/HTTP) pour échanger des données entre le site web et un serveur.

Des exemples d'utilisation seront présentés.

Pour envoyer une requête HTTP, on pourra&nbsp;:

1. Créer un objet `XMLHttpRequest`
2. Ouvrir une URL
3. Envoyer la requête

Lorsque la transaction sera terminée, l'objet `XMLHttpRequest` contiendra les informations de la réponse, comme son corps et le [statut HTTP](/fr/docs/Web/HTTP/Status) résultant.

```js
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## Types de requêtes

Une requête envoyée avec `XMLHttpRequest` peut récupérer les données de façon asynchrone ou de façon synchrone. Le comportement obtenu est choisi avec le troisième argument optionnel `async` de la méthode [`XMLHttpRequest.open()`](/fr/docs/Web/API/XMLHttpRequest/open). Lorsque cet argument vaut `true` ou s'il n'est pas fourni, la requête est traitée de façon asynchrone. Sinon, le processus est géré de façon synchrone. Pour en savoir plus sur ces différents types de requêtes, vous pouvez consulter l'article [Requêtes synchrones et asynchrones](/fr/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests). Les requêtes synchrones ne peuvent pas être utilisées en dehors des <i lang="en">workers</i>, car elles bloqueraient l'interface principale.

> **Note :** Le constructeur `XMLHttpRequest` ne se limite pas aux seuls documents XML. Son nom commence par **"XML"**, car il a été créé lorsque le format d'échange principal était XML.

## Gérer les réponses

Il existe plusieurs types [d'attributs de réponse](https://xhr.spec.whatwg.org/) définis pour le constructeur [`XMLHttpRequest()`](/fr/docs/Web/API/XMLHttpRequest/XMLHttpRequest). Ces attributs indiquent au client qui a émis la requête des informations importantes quant au statut de la réponse. Pour les cas où il faut gérer une réponse qui n'est pas du texte, cela peut nécessiter des manipulations et une analyse que nous allons voir dans les sections suivantes.

### Analyser et manipuler la propriété `responseXML`

Lorsqu'on utilise `XMLHttpRequest` pour obtenir le contenu d'un document XML distant, la propriété [`responseXML`](/fr/docs/Web/API/XMLHttpRequest/responseXML) sera un objet DOM qui contient le document XML analysé. La manipulation et l'analyse d'un tel résultat n'est pas nécessairement simple. Il existe quatre méthodes principales pour analyser un tel document XML&nbsp;:

1. Utiliser [XPath](/fr/docs/Web/XPath) afin de cibler certains emplacements du document.
2. [Analyser et sérialiser manuellement le XML](/fr/docs/Web/Guide/Parsing_and_serializing_XML) afin d'obtenir des chaînes de caractères ou des objets.
3. Utiliser [`XMLSerializer`](/fr/docs/Web/API/XMLSerializer) afin de sérialiser **des arbres DOM en chaînes de caractères ou en fichiers**.
4. [Les expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) peuvent être utilisées pour scanner le document si on ne connaît pas son contenu au préalable. On peut ainsi retirer les sauts de ligne par exemple. Attention, cette méthode n'est à utiliser qu'en dernier recours, car si le code XML change légèrement, il faudra revoir la méthode.

> **Note :** `XMLHttpRequest` peut également interpréter un document HTML avec la propriété [`responseXML`](/fr/docs/Web/API/XMLHttpRequest/responseXML). Voir l'article à propos de [la prise en charge de HTML dans `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) pour apprendre comment faire.

### Traiter une propriété `responseText` contenant un document HTML

Lorsqu'on utilise `XMLHttpRequest` afin d'obtenir le contenu d'une page HTML distante, la propriété [`responseText`](/fr/docs/Web/API/XMLHttpRequest/responseText) sera une chaîne de caractères contenant le document HTML brut. La manipulation et l'analyse d'un tel résultat n'est pas nécessairement simple. Il existe trois méthodes principales pour analyser un tel document HTML&nbsp;:

1. Utiliser la propriété `XMLHttpRequest.responseXML` comme indiqué dans l'article [Prise en charge de HTML dans `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest).
2. Injecter le contenu dans le corps d'un [fragment de document](/fr/docs/Web/API/DocumentFragment) à l'aide de `fragment.body.innerHTML` et traverser le DOM de ce fragment.
3. [Les expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) peuvent être utilisées pour scanner le document si on ne connaît pas son contenu au préalable. On peut ainsi retirer les sauts de ligne par exemple. Attention, cette méthode n'est à utiliser qu'en dernier recours, car si le code HTML change légèrement, il faudra revoir la méthode.

## Gérer les données binaires

Bien que [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) soit généralement afin d'envoyer et de recevoir des données texte, on peut aussi l'utiliser pour envoyer et recevoir des données binaires. Il existe plusieurs méthodes pour ce faire, qui utilisent la méthode [`overrideMimeType()`](/fr/docs/Web/API/XMLHttpRequest/overrideMimeType)&nbsp;:

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// On récupère les données non-traitées comme une chaîne binaire
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

D'autres techniques plus modernes existent également. En effet [`responseType`](/fr/docs/Web/API/XMLHttpRequest/responseType) prend en charge plusieurs types de contenu, permettant ainsi d'envoyer et de recevoir des données binaires plus facilement.

Prenons le fragment de code qui suit, qui utilise `responseType` avec `"arraybuffer"` afin de récupérer le contenu distant dans un objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) qui stocke les données binaires.

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // pas responseText
  /* … */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

Pour plus d'exemples, voir la page [Envoyer et recevoir des données binaires](/fr/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data).

## Connaître l'avancement

`XMLHttpRequest` permet d'écouter différents évènements qui se produisent lors du traitement de la requête. Parmi ces évènements, on trouve de quoi notifier l'avancement, les erreurs, etc.

Pour suivre l'évolution d'un transfert avec `XMLHttpRequest`, on utilisera [`progress`](/fr/docs/Web/API/XMLHttpRequest/progress_event) qui implémente l'interface [`ProgressEvent`](/fr/docs/Web/API/ProgressEvent). Les évènements qui peuvent être écoutés pour connaître l'avancement de la requête sont&nbsp;:

- [`progress`](/fr/docs/Web/API/XMLHttpRequest/progress_event)
  - : La quantité de données reçues a changé.
- [`load`](/fr/docs/Web/API/XMLHttpRequest/load_event)
  - : Le transfert est terminé. Toutes les données sont désormais écrites dans `response`.

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// …

// Avancement du transfert du serveur au client (téléchargements)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // …
  } else {
    // Impossible de connaître l'avancement, car la taille
    // totale est inconnue
  }
}

function transferComplete(evt) {
  console.log("Le transfert est terminé.");
}

function transferFailed(evt) {
  console.log("Une erreur est survenue lors du transfert du fichier.");
}

function transferCanceled(evt) {
  console.log("Le transfert a été annulé.");
}
```

Les lignes 3 à 6 du fragment ci-avant ajoutent les gestionnaires d'évènements pour les différents évènements émis à propos du transfert des données à l'aide de `XMLHttpRequest`.

> **Note :** Ces gestionnaires d'évènements doivent être ajoutés avant d'appeler `open()` sur la requête. Sinon, les évènements `progress` ne seront pas captés.

Le gestionnaire d'évènement pour l'avancement, porté par la fonction `updateProgress()` dans l'exemple, reçoit le nombre total d'octets à transférer (`total`) ainsi que le nombre d'octets transférés jusqu'à présent (`loaded`). Toutefois, si le champ `lengthComputable` vaut `false`, la longueur totale est inconnue et vaudra `0` par défaut.

Les évènements d'avancement existent pour les téléchargements (<i lang="en">downloads</i>) et les téléversements (<i lang="en">uploads</i>). Pour les téléchargements, les évènements sont déclenchés sur l'objet `XMLHttpRequest`, comme illustré dans l'exemple précédent. Pour les téléversements, les évènements sont déclenchés sur l'objet `XMLHttpRequest.upload`, comme ceci&nbsp;:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

oReq.open();
```

> **Note :** Les évènements d'avancement ne sont pas disponibles pour le protocole `file:`.

Les évènements d'avancements sont émis à chaque fragment (<i lang="en">chunk</i>) de données reçu, y compris le dernier fragment pour les cas où le paquet est reçu et la connexion fermée avant que l'évènement soit déclenché. Dans ce cas, l'évènement `progress` est automatiquement déclenché lorsque l'évènement `load` se produit pour ce paquet. Cela permet de surveiller l'avancement de façon fiable, à l'aide du seul évènement `progress`.

On peut également détecter les trois conditions de fin de chargement (`abort`, `load`, ou `error`) à l'aide de l'évènement `loadend`&nbsp;:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "Le transfert est terminé (mais on ne sait pas s'il a réussi ou non).",
  );
}
```

Il n'y a pas de certitude possible quant à l'information reçue par l'évènement `loadend` pour déterminer la condition de l'arrêt. Toutefois, cet évènement permet de gérer les tâches nécessaires à la fin des transferts.

## Soumettre des formulaires et envoyer des fichiers

On peut utiliser `XMLHttpRequest` afin d'envoyer des formulaires de deux façons&nbsp;:

- De façon autonome, sans autre API
- Avec l'API [`FormData`](/fr/docs/Web/API/FormData)

Utiliser l'API `FormData` sera souvent la solution la plus efficace, à l'inconvénient près que les données récupérées ne peuvent pas être transformées en chaînes de caractères avec [`JSON.stringify()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). L'utilisation d'XHR seul est plus compliquée, mais également plus flexible et plus puissante.

### Utiliser uniquement `XMLHttpRequest`

Lorsqu'on soumet des formulaires sans utiliser `FormData`, on pourra ne pas utiliser d'autres API dans la plupart des cas. Le seul contre-exemple porte sur le téléversement de fichiers, où il faudra utiliser l'API [`FileReader`](/fr/docs/Web/API/FileReader).

#### Une rapide introduction aux méthodes d'envoi

On peut soumettre un formulaire HTML ([`<form>`](/fr/docs/Web/HTML/Element/Form)) de quatre façons&nbsp;:

- En utilisant la méthode `POST` et avec l'attribut `enctype` qui vaut `application/x-www-form-urlencoded` (le comportement par défaut)
- En utilisant la méthode `POST` et avec l'attribut `enctype` qui vaut `text/plain`
- En utilisant la méthode `POST` et avec l'attribut `enctype` qui vaut `multipart/form-data`
- En utilisant la méthode `GET` (auquel cas, l'attribut `enctype` sera ignoré).

Prenons comme un exemple un formulaire avec deux champs, intitulés `toto` et `machin`. Si on utilise la méthode `POST`, le serveur recevra une chaîne de caractères semblable aux trois qui suivent selon le type d'encodage utilisé&nbsp;:

- Méthode&nbsp;: `POST`&nbsp;; Type d'encodage&nbsp;: `application/x-www-form-urlencoded` (default)&nbsp;:

  ```plain
  Content-Type: application/x-www-form-urlencoded

  toto=truc&machin=La+premiere+ligne.%0D%0ALa+seconde+ligne.%0D%0A
  ```

- Méthode&nbsp;: `POST`&nbsp;; Type d'encodage&nbsp;: `text/plain`&nbsp;:

  ```plain
  Content-Type: text/plain

  toto=truc
  machin=La premiere ligne.
  La seconde ligne.
  ```

- Méthode&nbsp;: `POST`&nbsp;; Type d'encodage&nbsp;: [`multipart/form-data`](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data)&nbsp;:

  ```plain
  Content-Type: multipart/form-data; boundary=---------------------------314911788813839

  -----------------------------314911788813839
  Content-Disposition: form-data; name="toto"

  truc
  -----------------------------314911788813839
  Content-Disposition: form-data; name="machin"

  La premiere ligne.
  La seconde ligne.

  -----------------------------314911788813839--
  ```

En revanche, en utilisant la méthode `GET`, ce sera une chaîne de caractères comme celle-ci qui sera ajoutée à l'URL&nbsp;:

```plain
?toto=truc&machin=La%20premiere%20ligne.%0ALa%20seconde%20ligne.
```

## Obtenir la date de dernière modification

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // Une date GMTString valide ou null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // On utilise HEAD, car on ne veut récupérer que les en-têtes
  "votrepage.html",
);
req.onload = getHeaderTime;
req.send();
```

### Réaliser une action lorsque la date de dernière modification change

Créons deux fonctions&nbsp;:

```js
function getHeaderTime() {
  const lastVisit = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`),
  );
  const lastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(lastVisit) || lastModified > lastVisit) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(lastVisit) && this.callback(lastModified, lastVisit);
  }
}

function ifHasChanged(URL, callback) {
  const req = new XMLHttpRequest();
  req.open(
    "HEAD" /* On utilise HEAD, car on ne veut récupérer que les en-têtes */,
    URL,
  );
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

Pour tester cet exemple&nbsp;:

```js
// Testons le fichier "votrepage.html"
ifHasChanged("votrepage.html", function (modified, visit) {
  console.log(
    `La page '${this.filepath}' a été modifiée le ${new Date(
      nModified,
    ).toLocaleString()}!`,
  );
});
```

Si vous souhaitez savoir si la page actuelle a changé, voyez l'article [`document.lastModified`](/fr/docs/Web/API/document.lastModified).

## Utiliser `XMLHttpRequest` entre différentes origines

Les navigateurs prennent en charge les requêtes entre différents sites/origines en implémentant le standard [CORS (<i lang="en">Cross-Origin Resource Sharing</i> (pour «&nbsp;partage des ressources entre différentes origines&nbsp;»)](/fr/docs/Web/HTTP/CORS). Tant que le serveur est configuré afin d'autoriser les requêtes depuis l'origine de votre application web, `XMLHttpRequest` fonctionnera correctement. Dans le cas contraire, une exception `INVALID_ACCESS_ERR` sera déclenchée.

## Outrepasser le cache

Pour outrepasser le cache avec une méthode qui fonctionne dans les différents navigateurs, on pourra ajouter un horodatage à l'URL en s'assurant d'encoder correctement la valeur (avec `?` ou `&` où c'est nécessaire). Ainsi&nbsp;:

```plain
http://example.com/truc.html -> http://example.com/truc.html?12345
http://example.com/truc.html?bidule=machin -> http://example.com/truc.html?bidule=machin&12345
```

Le cache local étant indexé avec les URL, chaque requête sera ainsi unique et passera outre le cache.

On peut ajuster les URL automatiquement avec le code qui suit&nbsp;:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Securité

La méthode recommandée pour autoriser les requêtes scriptées entre différentes origines est d'inclure l'en-tête HTTP [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) dans la réponse à la requête XHR.

### Interruptions des requêtes XHR

Si votre requête XHR se termine avec `status=0` et `statusText=null`, cela signifie que son exécution n'a pas été autorisée. Elle n'a pas été envoyée ([`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent)). Cela se produit généralement lorsque l'origine de la requête a changé entre la création et l'ouverture qui suit avec `open()`. Cela peut par exemple se produire lorsqu'une requête XHR est déclenchée pour un évènement `onunload` d'une fenêtre. La requête est créée lorsque la fenêtre à fermer existe encore, mais l'envoi qui suit (avec `open()`) se produit lorsque la fenêtre a perdu le focus et l'a passé à une autre fenêtre. Pour éviter ce problème, le mieux consistera à placer un gestionnaire d'évènements [`DOMActivate`](/fr/docs/Web/API/Element/DOMActivate_event) sur la nouvelle fenêtre lorsque la fenêtre à fermer reçoit l'évènement [`unload`](/fr/docs/Web/API/Window/unload_event).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Introduction à AJAX](/fr/docs/Web/Guide/AJAX/Getting_Started)
- [Utiliser l'API <i lang="en">Fetch</i>](/fr/docs/Web/API/Fetch_API/Using_Fetch)
- [Prise en charge de HTML dans `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/CORS)
- [Spécification WHATWG pour l'objet `XMLHttpRequest`](https://xhr.spec.whatwg.org/)
