---
title: Utiliser XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

Dans ce guide, nous voyons comment utiliser {{DOMxRef("XMLHttpRequest")}} afin d'envoyer des requêtes [HTTP](/fr/docs/Web/HTTP) pour échanger des données entre le site web et un serveur.

Des exemples d'utilisation courants et plus rares de `XMLHttpRequest` sont inclus.

Pour envoyer une requête HTTP&nbsp;:

1. Créer un objet `XMLHttpRequest`
2. Ouvrir une URL
3. Envoyer la requête

Une fois la transaction terminée, l'objet `XMLHttpRequest` contient des informations utiles telles que le corps de la réponse et le [statut HTTP](/fr/docs/Web/HTTP/Reference/Status) du résultat.

```js
function ecouteurRequete() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", ecouteurRequete);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## Types de requêtes

Une requête envoyée avec `XMLHttpRequest` peut récupérer les données de façon asynchrone ou de façon synchrone. Le comportement obtenu est choisi avec le troisième argument optionnel `async` de la méthode [`XMLHttpRequest.open()`](/fr/docs/Web/API/XMLHttpRequest/open). Lorsque cet argument vaut `true` ou s'il n'est pas fourni, la requête est traitée de façon asynchrone. Sinon, le processus est géré de façon synchrone. Pour en savoir plus sur ces différents types de requêtes, vous pouvez consulter l'article [Requêtes synchrones et asynchrones](/fr/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests). Les requêtes synchrones ne peuvent pas être utilisées en dehors des <i lang="en">workers</i>, car elles bloquent l'interface principale.

> [!NOTE]
> Le constructeur `XMLHttpRequest` ne se limite pas aux seuls documents XML. Son nom commence par **"XML"**, car lorsqu'il est créé, le format principal utilisé pour l'échange de données asynchrone est XML.

## Gérer les réponses

Il existe plusieurs types [d'attributs de réponse <sup>(angl.)</sup>](https://xhr.spec.whatwg.org/) définis pour le constructeur {{DOMxRef("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}. Ces attributs indiquent au client qui a émis la requête des informations importantes quant au statut de la réponse. Pour les cas où il faut gérer une réponse qui n'est pas du texte, cela peut nécessiter des manipulations et une analyse que nous allons voir dans les sections suivantes.

### Analyser et manipuler la propriété `responseXML`

Lorsqu'on utilise `XMLHttpRequest` pour obtenir le contenu d'un document XML distant, la propriété {{DOMxRef("XMLHttpRequest.responseXML", "responseXML")}} est un objet DOM qui contient le document XML analysé. La manipulation et l'analyse d'un tel résultat n'est pas nécessairement simple. Il existe quatre méthodes principales pour analyser un tel document XML&nbsp;:

1. Utiliser [XPath](/fr/docs/Web/XML/XPath) afin de cibler certains emplacements du document.
2. [Analyser et sérialiser manuellement le XML](/fr/docs/Web/XML/Parsing_and_serializing_XML) afin d'obtenir des chaînes de caractères ou des objets.
3. Utiliser {{DOMxRef("XMLSerializer")}} afin de sérialiser **des arbres DOM en chaînes de caractères ou en fichiers**.
4. Les expressions rationnelles {{JSxRef("RegExp")}} sont utilisées pour scanner le document si on ne connaît pas son contenu au préalable. On peut ainsi retirer les sauts de ligne par exemple. Attention, cette méthode n'est à utiliser qu'en dernier recours, car si le code XML change légèrement, il faut revoir la méthode.

> [!NOTE]
> `XMLHttpRequest` peut également interpréter un document HTML avec la propriété {{DOMxRef("XMLHttpRequest.responseXML", "responseXML")}}. Voir l'article à propos du [HTML dans `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) pour apprendre comment faire.

### Traiter une propriété `responseText` contenant un document HTML

Lorsqu'on utilise `XMLHttpRequest` afin d'obtenir le contenu d'une page HTML distante, la propriété {{DOMxRef("XMLHttpRequest.responseText", "responseText")}} est une chaîne de caractères contenant le document HTML brut. La manipulation et l'analyse d'un tel résultat n'est pas nécessairement simple. Il existe trois méthodes principales pour analyser un tel document HTML&nbsp;:

1. Utiliser la propriété `XMLHttpRequest.responseXML` comme indiqué dans l'article [HTML dans `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
2. Injecter le contenu dans le corps d'un [fragment de document](/fr/docs/Web/API/DocumentFragment) à l'aide de `fragment.body.innerHTML` et traverser le DOM de ce fragment.
3. Les expressions rationnelles {{JSxRef("RegExp")}} sont utilisées pour scanner le document si on ne connaît pas son contenu au préalable. On peut ainsi retirer les sauts de ligne par exemple. Attention, cette méthode n'est à utiliser qu'en dernier recours, car si le code HTML change légèrement, il faut revoir la méthode.

## Gérer les données binaires

Bien que {{DOMxRef("XMLHttpRequest")}} soit le plus souvent utilisé pour envoyer et recevoir des données textuelles, il peut également être utilisé pour envoyer et recevoir du contenu binaire. Il existe plusieurs méthodes bien testées pour forcer la réponse d'un `XMLHttpRequest` à envoyer des données binaires. Celles-ci impliquent l'utilisation de la méthode {{DOMxRef("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} sur l'objet `XMLHttpRequest` et constituent une solution viable.

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// Récupère les données non-traitées comme une chaîne de caractères binaire
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

D'autres techniques plus modernes existent également. En effet {{DOMxRef("XMLHttpRequest.responseType", "responseType")}} prend en charge plusieurs types de contenu, permettant ainsi d'envoyer et de recevoir des données binaires plus facilement.

Prenons le fragment de code qui suit, qui utilise `responseType` avec `"arraybuffer"` afin de récupérer le contenu distant dans un objet {{JSxRef("ArrayBuffer")}} qui stocke les données binaires.

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

Pour plus d'exemples, voir la page [Envoyer et recevoir des données binaires](/fr/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data).

## Connaître l'avancement

`XMLHttpRequest` fournit la possibilité d'écouter différents évènements qui peuvent se produire pendant le traitement de la requête. Cela inclut les notifications périodiques d'avancement, les notifications d'erreur, et ainsi de suite.

Prend en charge la surveillance des évènements {{DOMxRef("XMLHttpRequestEventTarget/progress_event", "progress")}} pour les transferts `XMLHttpRequest` conformément à la [spécification des évènements de progression <sup>(angl.)</sup>](https://xhr.spec.whatwg.org/#interface-progressevent)&nbsp;: ces évènements implémentent l'interface {{DOMxRef("ProgressEvent")}}. Les évènements réels que vous pouvez surveiller pour déterminer l'état d'un transfert en cours sont&nbsp;:

- {{DOMxRef("XMLHttpRequestEventTarget/progress_event", "progress")}}
  - : Le nombre de données qui ont été récupérées a changé.
- {{DOMxRef("XMLHttpRequestEventTarget/load_event", "load")}}
  - : Le transfert est terminé&nbsp;; toutes les données sont désormais dans `response`

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", mettreAJourProgress);
req.addEventListener("load", transfertTermine);
req.addEventListener("error", transfertEchoue);
req.addEventListener("abort", transfertAnnule);

req.open();

// …

// Avancement du transfert du serveur au client (téléchargements)
function mettreAJourProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // …
  } else {
    // Impossible de connaître l'avancement, car la taille
    // totale est inconnue
  }
}

function transferComplet(evt) {
  console.log("Le transfert est terminé.");
}

function transferEchoue(evt) {
  console.log("Une erreur est survenue lors du transfert du fichier.");
}

function transferAnnule(evt) {
  console.log("Le transfert a été annulé.");
}
```

Les lignes 3 à 6 du fragment ci-avant ajoutent les gestionnaires d'évènements pour les différents évènements émis à propos du transfert des données à l'aide de `XMLHttpRequest`.

> [!NOTE]
> Ces gestionnaires d'évènements doivent être ajoutés avant d'appeler `open()` sur la requête. Sinon, les évènements `progress` ne sont pas captés.

Le gestionnaire d'évènement pour l'avancement, porté par la fonction `mettreAJourProgress()` dans l'exemple, reçoit le nombre total d'octets à transférer (`total`) ainsi que le nombre d'octets transférés jusqu'à présent (`loaded`). Toutefois, si le champ `lengthComputable` vaut `false`, la longueur totale est inconnue et vaut `0` par défaut.

Les évènements d'avancement existent pour les téléchargements (<i lang="en">downloads</i> en anglais) et les téléversements (<i lang="en">uploads</i> en anglais). Pour les téléchargements, les évènements sont déclenchés sur l'objet `XMLHttpRequest`, comme illustré dans l'exemple précédent. Pour les téléversements, les évènements sont déclenchés sur l'objet `XMLHttpRequest.upload`, comme ceci&nbsp;:

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", mettreAJourProgress);
req.upload.addEventListener("load", transfertComplet);
req.upload.addEventListener("error", transfertEchoue);
req.upload.addEventListener("abort", transfertAnnule);

req.open();
```

> [!NOTE]
> Les évènements d'avancement ne sont pas disponibles pour le protocole `file:`.

Les évènements d'avancement sont émis à chaque fragment (<i lang="en">chunk</i>) de données reçu, y compris le dernier fragment pour les cas où le paquet est reçu et la connexion fermée avant que l'évènement soit déclenché. Dans ce cas, l'évènement d'avancement est automatiquement déclenché lorsque l'évènement de chargement se produit pour ce paquet. Cela permet de surveiller l'avancement de façon fiable, à l'aide du seul évènement «&nbsp;progress&nbsp;».

On peut également détecter les trois conditions de fin de chargement (`abort`, `load` ou `error`) à l'aide de l'évènement `loadend`&nbsp;:

```js
req.addEventListener("loadend", finChargement);

function finChargement(e) {
  console.log(
    "Le transfert est terminé (mais on ne sait pas s'il a réussi ou non).",
  );
}
```

Notez qu'il n'est pas possible de savoir, à partir des informations reçues par l'évènement `loadend`, quelle condition a provoqué la fin de l'opération&nbsp;; toutefois, vous pouvez utiliser cet évènement pour gérer les tâches qui doivent être effectuées dans tous les scénarios de fin de transfert.

## Obtenir la date de dernière modification

```js
function obtenirEnTeteTemps() {
  console.log(this.getResponseHeader("Last-Modified")); // Une date GMTString valide ou null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // On utilise HEAD, car on ne veut récupérer que les en-têtes
  "votrepage.html",
);
req.onload = obtenirEnTeteTemps;
req.send();
```

### Réaliser une action lorsque la date de dernière modification change

Créons deux fonctions&nbsp;:

```js
function obtenirEnTeteTemps() {
  const derniereVisite = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`),
  );
  const derniereModification = Date.parse(
    this.getResponseHeader("Last-Modified"),
  );

  if (isNaN(derniereVisite) || derniereModification > derniereVisite) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(derniereVisite) &&
      this.callback(derniereModification, derniereVisite);
  }
}

function siAChange(URL, fonctionRappel) {
  const req = new XMLHttpRequest();
  req.open(
    "HEAD" /* On utilise HEAD, car on ne veut récupérer que les en-têtes */,
    URL,
  );
  req.callback = fonctionRappel;
  req.filepath = URL;
  req.onload = obtenirEnTeteTemps;
  req.send();
}
```

Pour tester cet exemple&nbsp;:

```js
// Testons le fichier "votrepage.html"
siAChange("votrepage.html", function (modifie, visite) {
  console.log(
    `La page '${this.filepath}' a été modifiée le ${new Date(
      modifie,
    ).toLocaleString()} !`,
  );
});
```

Si vous souhaitez savoir si la page actuelle a changé, voyez l'article {{DOMxRef("document.lastModified")}}.

## `XMLHttpRequest` inter-site

Les navigateurs modernes prennent en charge les requêtes inter-sites en implémentant le standard [de partage de ressource entre les origines](/fr/docs/Web/HTTP/Guides/CORS) (CORS). Tant que le serveur est configuré pour autoriser les requêtes depuis l'origine de votre application web, `XMLHttpRequest` fonctionne correctement. Dans le cas contraire, une exception `INVALID_ACCESS_ERR` est levée.

## Outrepasser le cache

Pour outrepasser le cache avec une méthode qui fonctionne dans les différents navigateurs, on peut ajouter un horodatage à l'URL en s'assurant d'encoder correctement la valeur (avec `?` ou `&` où c'est nécessaire). Ainsi&nbsp;:

```plain
http://example.com/truc.html -> http://example.com/truc.html?12345
http://example.com/truc.html?bidule=machin -> http://example.com/truc.html?bidule=machin&12345
```

Le cache local étant indexé avec les URL, chaque requête est ainsi unique et passe outre le cache.

On peut ajuster les URL automatiquement avec le code qui suit&nbsp;:

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## Sécurité

La méthode recommandée pour activer les scripts inter-sites consiste à utiliser l'en-tête HTTP `Access-Control-Allow-Origin` dans la réponse à la requête XMLHttpRequest.

### Interruptions des requêtes XHR

Si vous constatez qu'une requête XMLHttpRequest reçoit `status=0` et `statusText=null`, cela signifie que la requête n'a pas été autorisée. Son état est [`UNSENT` <sup>(angl.)</sup>](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent). Cela se produit probablement lorsque l'origine de `XMLHttpRequest` (au moment de sa création) a changé lorsque la méthode `open()` est appelée par la suite. Ce cas peut se produire, par exemple, lorsqu'une requête XMLHttpRequest est déclenchée par un évènement de déchargement sur une fenêtre, que la requête XMLHttpRequest attendue est créée alors que la fenêtre à fermer est encore présente, puis que la requête est envoyée (autrement dit, que `open()` est appelée) lorsque cette fenêtre n'est plus sélectionnée et qu'une autre fenêtre l'est. Le moyen le plus efficace d'éviter ce problème consiste à ajouter un écouteur à l'évènement {{DOMxRef("Element/DOMActivate_event", "DOMActivate")}} de la nouvelle fenêtre, qui se déclenche lorsque l'évènement {{DOMxRef("Window/unload_event", "unload")}} de la fenêtre fermée se déclenche.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API Fetch](/fr/docs/Web/API/Fetch_API/Using_Fetch)
- [HTML dans `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [Le contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [XMLHttpRequest - REST et l'expérience utilisateur enrichie <sup>(angl.)</sup>](https://www.peej.co.uk/articles/rich-user-experience.html)
- [Spécification WHATWG pour l'objet `XMLHttpRequest` <sup>(angl.)</sup>](https://xhr.spec.whatwg.org/)
