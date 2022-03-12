---
title: Utiliser les Service Workers
slug: Web/API/Service_Worker_API/Using_Service_Workers
tags:
  - Guide
  - Service
  - ServiceWorker
  - Workers
  - basics
translation_of: Web/API/Service_Worker_API/Using_Service_Workers
---
{{ServiceWorkerSidebar}}

{{ SeeCompatTable() }}

Cet article fournit des informations pour bien débuter avec les service workers, en présentant une architecture de base, l'inscription d'un service worker, l'installation et l'activation d'un processus pour un nouveau service worker, la mise à jour d'un service worker, le contrôle du cache et la personnalisation des réponses, le tout dans le contexte d'une application de base disponible en mode déconnecté.

## Le préambule aux Service Workers

La perte de connexion est un problème majeur auquel sont confrontés les utilisateurs du web depuis des années. La meilleure application web au monde produirait un bien mauvais effet si vous ne pouviez pas la télécharger. Il y a eu de nombreuses tentatives pour mettre en place des technologies susceptibles de résoudre ce problème, comme le montre notre page [Offline](/fr/Apps/Build/Hors-ligne), et certains problèmes ont été résolus. Mais le problème principal reste l'absence d'un mécanisme de contrôle global pour la mise en cache des ressources et la personnalisation des requêtes réseau.

La première tentative— AppCache — semblait être une bonne idée parce qu'elle permettait de spécifier les ressources à mettre en cache de manière très simple. Cependant, elle faisait beaucoup de suppositions sur la manière de le mettre en place et échouait implacablement si votre application ne se pliait pas exactement à ces suppositions. Lisez [Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag) de Jake Archibald pour plus de détails.

> **Note :** à partir de Firefox 44, lorsque [AppCache](/fr/docs/Web/HTML/Utiliser_Application_Cache) est utilisé pour fournir un support déconnecté à une page, un message d'avertissement est alors affiché dans la console pour signaler aux développeurs d'utiliser plutôt les [Service workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers) ({{bug("1204581")}}.)

Les service workers devraient finalement résoudre ces problèmes. La syntaxe du service Worker est plus complexe que celle de l'AppCache, mais en contrepartie vous pouvez utiliser JavaScript pour contrôler les comportements induits par votre cache local avec une granularité beaucoup plus fine, vous permettant ainsi d'adresser ce problème et beaucoup d'autres. Avec l'aide d'un Service Worker, vous pouvez facilement configurer une application pour d'abord utiliser des ressources mises en cache, fournissant ainsi une première expérience par défaut même en mode déconnecté, avant de récupérer davantage de données depuis le réseau (principe connu généralement sous le nom de [Offline First](http://offlinefirst.org/)). Cette façon de faire est déjà disponible avec les applications natives, ce qui est l'une des raisons principales de la préférence accordée à ces applications plutôt qu'aux applications web.

## Préparatifs aux Service Workers

De nombreuses fonctionnalités des service workers sont désormais disponibles par défaut dans les plus récentes versions des navigateurs qui les supportent. Cependant, si vous constatez que le code de la démo ne fonctionne pas dans votre version actuelle, vous pourriez avoir besoin d'activer une configuration :

- **Firefox Nightly** : rendez-vous sur `about:config` et configurer  `dom.serviceWorkers.enabled` à true; redémarrer le navigateur.
- **Chrome Canary** : rendez-vous sur `chrome://flags` et activer `experimental-web-platform-features`; redémarrer le navigateur (à noter que certaines fonctionnalités sont désormais activées par défaut dans Chrome.)
- **Opera** : rendez-vous sur `opera://flags` et activer `Support for ServiceWorker`; redémarrer le navigateur.

Vous aurez aussi besoin de servir votre code via HTTPS — les Service Workers sont contraints à s'exécuter au travers d'HTTPS pour des raisons de sécurité. GitHub est donc un bon endroit pour héberger des expérimentations, puisqu'il supporte HTTPS. Et pour faciliter le développement en local, le **localhost** est considéré comme une origine sécurisée.

## Architecture de base

Avec les service workers, les étapes suivantes sont généralement observées pour une configuration simple :

1.  L'URL du service worker URL est récupérée et enregistrée via {{domxref("serviceWorkerContainer.register()")}}.
2.  En cas de succès, le service worker est exécuté dans un {{domxref("ServiceWorkerGlobalScope") }}; c'est en gros une sorte de contexte de worker spécial, fonctionnant hors du fil d'exécution du script principal, sans accès au DOM.
3.  Le service worker est désormais prêt à traiter des événements.
4.  Une tentative d'installation du worker a lieu lorsque les pages contrôlées par le service worker sont accédées par la suite. Un événement install est toujours le premier envoyé à un service worker (ça peut être le point de départ pour procéder au remplissage d'une base IndexedDB, et à la mise en cache de ressources du site). C'est tout à fait le même type de procédure que l'installation d'une application native ou Firefox OS — en mettant l'ensemble à disposition pour un usage déconnecté.
5.  Lorsque le gestionnaire `oninstall` se termine, on considère que le service worker est installé.
6.  L'étape suivante est l'activation. Lorsque le service worker est installé, il reçoit alors un événement activate. L'utilité première de `onactivate` est de nettoyer les ressources utilisées dans les versions précédentes du script du Service Worker.
7.  Le Service Worker contrôle désormais les pages, mais seulement celles ouvertes après que le `register()` ait réussi. Ainsi un document à sa création s'accompagne ou non d'un Service Worker et conserve cet état tout au long de sa durée de vie. Ainsi les documents devront être rechargés pour réellement être contrôlés.

![](sw-lifecycle.png)

### Promesses

[Les Promesses](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sont un puissant mécanisme pour exécuter des opérations asynchrones, dont le succès de l'une dépend du succès de l'autre. Ce mécanisme est au coeur du fonctionnement des service workers.

Les promesses peuvent effectuer bien des choses, mais pour le moment il suffit de savoir que si une promesse est retournée, on peut lui attacher un `.then()` et inclure des fonctions de rappel en cas de succès, d'échec, etc., ou bien un `.catch()` et inclure une fonction de rappel en cas d'échec.

Comparons la structure d'une fonction classique de rappel synchrone à la promesse asynchrone équivalente.

#### sync

```js
try {
  var value = myFunction();
  console.log(value);
} catch(err) {
  console.log(err);
}
```

#### async

```js
myFunction().then(function(value) {
  console.log(value);
  }).catch(function(err) {
  console.log(err);
});
```

Dans le premier exemple, on doit attendre que l'exécution de `myFunction()` retourne `value` avant de poursuivre l'exécution de tout autre code. Dans le second exemple, `myFunction()` retourne une promesse pour `value`, ainsi le reste du code peut continuer à s'exécuter. Lorsque la promesse est résolue, le code à l'intérieur de `then` s'exécutera, de manière asynchrone.

Qu'en est-il sur un exemple concret — qu'en est-il si, lors d'un chargement dynamique d'images, on veut être sûre qu'elles soient bien chargées avant de les afficher ? C'est une démarche standard à adopter, mais parfois problématique. On peut utiliser `.onload` pour n'afficher l'image qu'après qu'elle soit chargée, mais qu'en est-il des événements qui démarrent avant qu'on ne commence à les écouter ? On pourrait essayer un contournement en utilisant `.complete`, mais ce n'est toujours pas infaillible, et que faire en cas d'images multiples ? Et, ummm, tout cela reste synchrone, et bloque donc le fil d'exécution principal.

Alternativement, on pourrait faire notre propre promesse pour gérer ce genre de cas. (Voir l'exemple du [test de promesses](https://github.com/mdn/promises-test) pour le code source, ou [le voir fonctionner en direct](https://mdn.github.io/promises-test/).)

> **Note :** la mise en place d'un véritable service worker utiliserait la mise en cache et onfetch plutôt que l'API obsolète XMLHttpRequest. Ces fonctionnalités ne sont pas utilisées ici afin de se concentrer sur la compréhension des promesses.

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    request.send();
  });
}
```

On retourne une nouvelle promesse en utilisant le constructeur `Promise()`, qui prend en argument une fonction de rappel avec les paramètres `resolve` et `reject`. Quelque part dans la fonction, on a besoin de définir à quoi correspond pour la promesse d'être résolue avec succès ou bien d'être rejetée — dans ce cas, retourner un statut 200 OK status ou pas — et donc appeler `resolve` en cas de succès, ou `reject` en cas d'échec. Le reste du contenu de cette fonction correspond à une utilisation plutôt classique d'XHR, et n'appelle pas de commentaires particuliers pour le moment.

Lorsqu'on appelle la fonction `imgLoad()`, on l'appelle avec l'url de l'image à charger, comme on pourrait s'en douter, mais le reste du code est un peu différent :

```js
var body = document.querySelector('body');
var myImage = new Image();

imgLoad('myLittleVader.jpg').then(function(response) {
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, function(Error) {
  console.log(Error);
});
```

A la fin de l'appel de la fonction, on ajoute la méthode `then()` de la promesse, qui contient deux fonctions — la première est exécutée lorsque la promesse est résolue avec succès, et la seconde est appelée lorsque la promesse est rejetée. Dans le cas d'une résolution, on affiche l'image dans : `myImage` et on l'ajoute au `body` (son argument est la valeur `request.response` contenue dans la méthode `resolve` de la promesse); en cas de rejet, on retourne une erreur dans la console.

Le tout se déroule de manière asynchrone.

> **Note :** il est possible d'assembler des appels de promesse, par exemple:
> `myPromise().then(success, failure).then(success).catch(failure);`

> **Note :** pour en savoir plus sur les promesses, consulter l'excellent article de Jake Archibald [JavaScript Promises: there and back again](http://www.html5rocks.com/en/tutorials/es6/promises/).

## Démo de service workers

Pour illustrer quelques principes de base de l'enregistrement et de l'installation d'un service worker, voici une simple démo appelée [sw-test](https://github.com/mdn/sw-test), qui présente juste une galerie d'images Star wars Lego. Elle utilise une fonction pilotée par une promesse pour lire les données d'une image à partir d'un objet JSON et charger les images en utilisant Ajax, avant d'afficher les images en bas de page. Les choses restent statiques et simples pour le moment. Elle enregistre aussi, installe et active un service worker, et lorsque la spécification est davantage supportée par les navigateurs, elle met en cache tous les fichiers requis pour un fonctionnement déconnecté !

![](demo-screenshot.png)

Vous pouvez consulter le [code source sur GitHub](https://github.com/mdn/sw-test/), et [voir l'exemple en direct](https://mdn.github.io/sw-test/). Le bout de code qui sera appelé est la promesse (voir [app.js lines 17-42](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L17-L42)), qui est une version modifiée du code présenté ci-dessus, dans la [démo du test de promesses](https://github.com/mdn/promises-test). Il en diffère de la façon suivante :

1.  Dans l'original, on considère l'URL d'une image à charger. Dans cette version, on passe un fragment JSON contenant toutes les données d'une seule image (voir à quoi il ressemble dans [image-list.js](https://github.com/mdn/sw-test/blob/gh-pages/image-list.js)). C'est parce que toutes les données pour que chaque promesse soit résolue doivent être passées avec la promesse, que c'est asynchrone. Si l'on passe juste l'url, et si l'on essaie alors d'accéder aux autres éléments dans le JSON séparément lorsqu'on itère plus tard avec la boucle `for()`, cela ne marchera pas, puisque la promesse ne se résolvera pas en même temps que les itérations sont faites (c'est un mécanisme synchrone.)
2.  La promesse est résolue en réalité avec un tableau, puisqu'on veut rendre le blob de l'image chargée disponible à la fonction de résolution plus tard dans le code, mais aussi le nom de l'image, les crédits et le texte alternatif (voir [app.js lines 26-29](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L26-L29)). Les promesses se résolvent seulement avec un seul argument, aussi si l'on souhaite la résoudre avec des valeurs multiples, on a besoin d'utiliser un tableau ou un objet.
3.  Pour accéder aux valeurs de la promesse résolue, on accède alors à cette fonction comme on peut s'y attendre (voir [app.js lines 55-59](https://github.com/mdn/sw-test/blob/gh-pages/app.js#L55-L59).) Cela peut sembler un peu étrange au premier abord, mais c'est la manière dont les promesses fonctionnent.

## Introduction aux service workers

Maintenant, c'est au tour des service workers !

### Enregistrer un worker

Le premier bloc de code dans le fichier JavaScript de l'application — `app.js` — se présente comme suit. C'est le point d'entrée pour utiliser des service workers.

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};
```

1.  Le bloc extérieur effectue un test de détection de fonctionnalité pour s'assurer que les service workers sont supportés avant d'essayer d'en enregistrer un.
2.  Ensuite, la fonction {{domxref("ServiceWorkerContainer.register()") }} est utilisée pour enregistrer le service worker de ce site, qui est juste un fichier JavaScript présent au sein de notre application (à noter qu'il s'agit de l'URL relative du fichier par rapport à l'origine, et non seulement le fichier JS qui le référence.)
3.  Le paramètre `scope` est optionnel, et peut être utilisé pour spécifier le sous-ensemble du contenu qui doit être soumis au contrôle du service worker. Dans ce cas, on a spécifié '`/sw-test/'`, ce qui signifie tous les contenus présents sous l'origine de l'application. S'il n'est pas précisé, il correspondra de toute façon par défaut à cette valeur; il a été explicitement spécifié ici à titre d'illustration.
4.  La fonction `.then()` de la promesse est utilisée pour chaîner un traitement en cas de succès à la structure de la promesse. Lorsque la promesse est résolue avec succès, le code qu'elle contient est exécuté.
5.  Finalement, une fonction `.catch()` est chaînée à la fin, qui s'exécutera si la promesse est rejetée.

A ce stade un service worker est enregistré, qui s'exécute dans le contexte d'un worker, et n'a donc aucun accès au DOM. Le code s'exécute ainsi dans le service worker, extérieurement aux pages normales dont il contrôle le chargement.

Un seul service worker peut contrôler de nombreuses pages. Chaque fois qu'une page au sein du scope est chargée, le service worker est installé et opère sur la page. Attention, il faut faire un usage prudent des variables globales dans le script du service worker : chaque page ne dispose pas de son propre et unique worker.

> **Note :** un service worker fonctionne comme un serveur proxy, permettant de modifier les requêtes et les réponses, de les remplacer par des éléments de son propre cache, et bien plus.

> **Note :** une chose importante à savoir au sujet des service workers est que si la détection de fonctionnalité est utilisée comme ci-dessus, les navigateurs qui ne supportent pas les service workers peuvent simplement utiliser l'application de la manière normalement attendue. De plus, si vous utilisez AppCache et SW sur une page, les navigateurs qui ne supportent pas SW mais supportent AppCache l'utiliseront, et les navigateurs qui supportent les deux ignoreront AppCache au profit de SW.

#### Pourquoi mon service worker échoue à s'enregistrer ?

Ce pourrait être pour les raisons suivantes :

1.  L'application ne fonctionne pas au travers d'HTTPS
2.  Le chemin du fichier du service worker file est syntaxiquement incorrect — il a besoin d'être exprimé relativement à l'origine, et non pas par rapport au répertoire racine. Dans l'exemple, le worker a comme emplacement `https://mdn.github.io/sw-test/sw.js`, et la racine de l'application est `https://mdn.github.io/sw-test/`. Mais la syntaxe du chemin s'écrit `/sw-test/sw.js`, `et non /sw.js`.
3.  Le service worker considéré se trouve sur une origine différente de celle de l'application. Ce qui n'est pas permis.

### Installer et activer : remplir le cache

Après l'enregistrement du service worker, le navigateur tente d'installer puis d'activer le service worker sur la page ou le site.

L'événement install est déclenché lorsqu'une installation se termine avec succès. L'événement install est généralement utilisé pour remplir le cache local du navigateur avec les ressources nécessaires pour faire fonctionner l'application en mode déconnecté. A cet effet, la toute nouvelle API de stockage est utilisée — {{domxref("cache")}} — un espace global au niveau du service worker qui permet de stocker les ressources fournies par les réponses, et indexées par leurs requêtes. Cette API fonctionne d'une manière similaire au cache standard du navigateur, mais le cache demeure spécifique au domaine. Il persiste jusqu'à ce qu'il en soit décidé autrement — de nouveau, le contrôle reste total.

> **Note :** L'API Cache n'est pas supportée par tous les navigateurs. (Voir la section {{anch("Compatibilité des navigateurs")}} pour plus d'informations.) Pour l'utiliser à l'heure actuelle, on peut envisager un polyfill comme celui fournit par la [démo Topeka de Google](https://github.com/Polymer/topeka/blob/master/sw.js), ou peut-être stocker les ressources dans [IndexedDB](/en-US/docs/Web/API/IndexedDB_API).

Commençons cette section par l'examen d'un exemple de code — c'est le [premier bloc présent dans le service worker](https://github.com/mdn/sw-test/blob/gh-pages/sw.js#L1-L18):

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
```

1.  Un écouteur d'événement `install` est d'abord ajouté au service worker (d'où le  `this`), puis une méthode {{domxref("ExtendableEvent.waitUntil()") }} est chaînée à l'événement — cela garantit que le Service Worker ne s'installera pas tant que le code à l'intérieur de `waitUntil()` n'a pas été exécuté avec succès.
2.  A l'intérieur de `waitUntil()` la méthode [`caches.open()`](/en-US/docs/Web/API/CacheStorage/open) est utilisée pour créer un nouveau cache appelé `v1`, ce qui constitue la version 1 du cache de ressources de notre site. Cette fonction retourne une promesse lorsque le cache est créé; une fois résolue, est appelée une fonction qui appelle elle-même `addAll()` sur le cache créé, avec pour paramètre un tableau d'URLs relatives à l'origine correspondant aux ressources à mettre en cache.
3.  Si la promesse est rejetée, l'installation échoue, et le worker ne fait rien de plus. Le code peut être alors corrigé et l'opération retentée la prochaine fois que l'enregistrement survient.
4.  Après une installation couronnée de succès, le service worker est activé. Cela ne fait pas une grande différence  la première fois que le service worker est installé/activé, mais cela fait plus sens lorsque le service worker est mis à jour (voir la section {{anch("Updating your service worker") }} plus bas.)

> **Note :** [localStorage](/fr/docs/Web/API/Web_Storage_API) fonctionne de la même façon que le cache du service worker, mais de manière synchrone, et il n'est donc pas autorisé dans les service workers.

> **Note :** [IndexedDB](/fr/docs/Web/API/API_IndexedDB) peut être utilisé dans un service worker pour le stockage des donnés si nécessaire.

### Réponses personnalisées aux requêtes

Une fois que les ressources du site sont mises en cache, les service workers doivent savoir quoi faire de ce contenu en cache. L'événement `fetch` permet de gérer cela facilement.

Un événement `fetch` se déclenche à chaque fois qu'une ressource contrôlée par un service worker est retournée, ce qui inclut les documents à l'intérieur du contour spécifié, et toute ressource référencée dans ces documents (par exemple `si index.html` effectue une requête vers un autre domaine pour l'insertion d'une image, cela se fait encore au travers de son service worker.)

On peut attacher un écouteur de l'événement `fetch` au service worker, puis appeler la méthode `respondWith()` sur l'événement pour détourner les réponses HTTP et les mettre à jour en leur jetant un sort particulier.

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    // la magie opère ici
  );
});
```

On peut déjà simplement répondre avec la ressource en cache dont l'url correspond à celle de la requête réseau, dans chaque cas :

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});
```

`caches.match(event.request)` permet de mettre en correspondance chaque ressource demandée sur le réseau avec la ressource équivalente en cache, si elle se trouve être disponible. La comparaison est effectuée via l'url et diverses en-têtes, comme habituellement avec des requêtes HTTP normales.

Voici quelques autres options disponibles pour que la magie opère (voir la [documentation de l'API Fetch](/fr/docs/Web/API/Fetch_API) pour plus d'informations sur les objets [`Request`](/fr/docs/Web/API/Request) et [`Response`](/fr/docs/Web/API/Response)).

1.  Le constructeur `{{domxref("Response.Response","Response()")}}` permet de créer une réponse personnalisée. Dans cet exemple, une chaîne de caractères est simplement retournée :

    ```js
    new Response('Hello from your friendly neighbourhood service worker!');
    ```

2.  La `Response` plus complexe ci-dessous montre qu'il est possible de passer optionnellement un ensemble d'en-têtes avec la réponse, émulant ainsi des en-têtes de réponse HTTP standards. Ici, on signale au navigateur quel est le type de contenu de notre réponse artificielle :

    ```js
    new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
      headers: { 'Content-Type': 'text/html' }
    })
    ```

3.  Si une correspondance n'est pas trouvée en cache, on peut indiquer simplement au navigateur d'effectuer ({{domxref("GlobalFetch.fetch","fetch")}}) la requête réseau par défaut pour cette ressource, afin de récupérer cette nouvelle ressource sur le réseau si disponible :

    ```js
    fetch(event.request)
    ```

4.  Si une correspondance n'est pas trouvée en cache et que le réseau n'est pas disponible, on peut alors faire correspondre la requête avec une page de rechange par défaut en guise de réponse en utilisant {{domxref("CacheStorage.match","match()")}}, comme suit :

    ```js
    caches.match('/fallback.html');
    ```

5.  On peut récupérer beaucoup d'informations à propos de chaque requête en interrogeant les paramètres de l'objet {{domxref("Request")}} retourné par {{domxref("FetchEvent")}} :

    ```js
    event.request.url
    event.request.method
    event.request.headers
    event.request.body
    ```

## Récupérer des requêtes en erreur

On vient de voir que `caches.match(event.request)` est important lorsqu'il y a correspondance avec le cache du service worker, mais qu'en est-il des cas où rien ne correspond ? Si aucune sorte de gestionnaire d'erreur n'est fourni, la promesse est rejetée et une erreur réseau est retournée lorsqu'aucune correspondance n'est trouvée.

Heureusement, la structure des service workers qui repose sur les promesses rend triviale la gestion des alternatives à une situation de succès. On pourrait faire ceci :

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request);
    })
  );
});
```

Si la promesse est rejetée, la fonction `catch()` retourne à la place la requête réseau par défaut, ce qui signifie que si le réseau est disponible la ressource sera chargée à partir du serveur.

Plus malin encore, on pourrait non seulement récupérer la ressource à partir du serveur, mais aussi la sauvegarder dans le cache afin que les requêtes ultérieures pour cette ressource puissent être disponibles aussi en mode déconnecté. Cela signifierait que toute image supplémentaire ajoutée à la galerie Star Wars pourrait être récupérée par l'application et mise en cache. Le code suivant illustre ce mécanisme :

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
```

Ici on retourne la requête réseau par défaut au moyen de `return fetch(event.request)`, qui retourne lui-même une promesse. Lorsque cette promesse est résolue, on exécute une fonction qui sollicite le cache en utilisant `caches.open('v1')`; une promesse est de nouveau retournée. Lorsque cette promesse est résolue, `cache.put()` est utilisée pour ajouter la ressource au cache. La ressource est récupérée à partir de `event.request`, et la réponse est alors clonée avec `response.clone()` et ajoutée au cache. Le clone est placé dans le cache, et la réponse originale est retournée au navigateur et délivrée à la page qui la requiert.

Pourquoi un clone ? Il se trouve que les flux de requête et de réponse peuvent seulement être lus une fois.  Afin de retourner la réponse au navigateur et de la mettre en cache, elle doit être clonée. Aussi, l'original est retourné au navigateur tandis que le clone est envoyé dans le cache. Ils sont chacun lus une seule fois.

Le dernier problème qui demeure alors est l'échec de la requête au cas où elle n'a aucune correspondance dans le cache et que le réseau n'est pas disponible. Fournir un document de rechange par défaut permet quoiqu'il arrive, à l'utilisateur de récupérer quelque chose :

```js
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(function() {
      return caches.match('/sw-test/gallery/myLittleVader.jpg');
    })
  );
});
```

Une image de rechange a été choisie parce que les seules mises à jour susceptibles d'échouer sont les nouvelles images, puisque tous les autres éléments dépendent de l'installation comme vu précédemment dans la description de l'écouteur de l'événement `install`.

## Suggestion d'amélioration d'un modèle de code

Ce code utilise un chaînage de promesses plus standard et retourne la réponse au document sans avoir à attendre que `caches.open()` soit résolue :

```js
this.addEventListener('fetch', function(event) {
  var response;
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(r) {
    response = r;
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function() {
    return caches.match('/sw-test/gallery/myLittleVader.jpg');
  }));
});
```

## Mettre à jour le service worker

Si le service worker a été précédemment installé, et qu'une nouvelle version du worker est disponible au chargement ou au rafraîchissement de la page, la nouvelle version est installée en arrière-plan, mais pas encore activée. Elle ne sera activée que lorsqu'il n'y aura plus aucune page chargée qui utilise encore l'ancien service worker. Dès lors qu'il n'y a plus de telles pages encore chargées, le nouveau service worker est activé.

On souhaite mettre à jour l'écouteur d'événement `install` dans le nouveau service worker de la façon suivante (à noter le nouveau numéro de version) :

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',

             …

              // include other new resources for the new version...
      ]);
    });
  );
});
```

Tandis que la mise à jour se produit, la version précédente est encore en charge de récupérer des ressources. La nouvelle version est installée en arrière-plan. Le nouveau cache se nomme v2, et ainsi ne perturbe en rien le précédent cache nommé v1.

Lorsque plus aucune page n'utilise la version actuelle, le nouveau worker est activé et prend en charge les requêtes.

### Supprimer les anciens caches

Il existe un événement `activate`. Il est généralement utilisé pour faire un travail qui aurait interrompu le fonctionnement d'une version précédente alors qu'elle était encore en cours d'utilisation, comme par exemple se débarrasser des anciens caches. Il est aussi utile pour supprimer des données qui ne sont plus nécessaires afin d'éviter de surcharger l'espace disque — chaque navigateur dispose d'une limite physique quant à la capacité de stockage en cache dont le service worker peut bénéficier. Le navigateur gère au mieux l'espace disque, mais il peut supprimer le stockage du Cache pour une origine. Le navigateur supprimera généralement toutes les données d'une origine ou bien aucune.

Les promesses passées à `waitUntil()` bloqueront les autres événements jusqu'à réalisation complète, ainsi on a l'assurance que l'opération de nettoyage aura été menée à terme au moment où surviendra le premier événement `fetch` du nouveau cache.

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
```

## Outils de développement

Chrome dispose de `chrome://inspect/#service-workers`, qui montre l'activité du service worker courant et le stockage sur l'appareil, et `chrome://serviceworker-internals`, qui offre plus de détails et permet de démarrer/arrêter/déboguer le processus du worker. A l'avenir, des modes dégradé/déconnecté seront ajoutés pour simuler des connexions mauvaises ou inexistantes, ce qui sera une bonne chose.

Firefox a aussi commencé à implanter quelques outils utiles concernant les service workers :

- Consulter about:serviceworkers pour voir quels SWs sont enregistrés et les mettre à jour ou les supprimer.
- Lors de tests, il est possible de contourner la restriction HTTPS en cochant l'option "Activer les Service Workers via HTTP (lorsque la boîte à outils est ouverte)" dans les options des outils de développement de Firefox (la roue dentée dans le menu.)

## Voir aussi

- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/en-US/docs/Web/Guide/Performance/Using_web_workers)
