---
title: Fonctionnement hors connexion des PWA grâce aux service workers
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Maintenant que nous avons vu la structure de notre application js13kPWA, que nous avons configuré et fait fonctionner le squelette de base, voyons comment implémenter un mode hors connexion à l'aide des <i lang="en">service workers</i>. Dans cet article, nous examinerons comment ils sont utilisés dans notre [exemple js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) ([voir également le code source](https://github.com/mdn/pwa-examples/tree/master/js13kpwa)).

## Explication des service workers

Les <i lang="en">service workers</i> agissent comme des intermédiaires (<i lang="en">proxy</i>) virtuels entre le navigateur et le réseau. Ils permettent notamment de mettre proprement en cache les composants d'un site web pour les rendre disponibles quand l'appareil est hors connexion.

Ils s'exécutent dans un processus séparé de celui du code JavaScript principal de notre page et n'ont aucun accès à la structure DOM. Cela introduit une approche différente de celle de la programmation web traditionnelle&nbsp;: l'API est non bloquante et peut émettre et recevoir de la communication entre différents contextes. On peut fournir une tâche à exécuter à un <i lang="en">service worker</i> et recevoir le résultat quand il est prêt en utilisant une approche basée sur [les promesses (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

L'intérêt des <i lang="en">service workers</i> est loin de se limiter au mode déconnecté. Les <i lang="en">service workers</i> permettent entre autres de gérer des notifications, d'exécuter des calculs intensifs dans des processus séparés. Leur capacité à prendre le contrôle de requêtes réseau, les modifier, fournir des réponses personnalisées récupérées du cache ou générer complètement des réponses les rend particulièrement puissants.

Pour en savoir plus sur les <i lang="en">service workers</i>, lisez l'article [Fonctionnement hors connexion et en arrière-plan](/fr/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Les service workers dans l'application js13kPWA

Voyons comment l'application js13kPWA utilise les <i lang="en">service workers</i> pour fournir des fonctionnalités hors connexion.

### Enregistrer le <i lang="en">service worker</i>

Commençons par regarder le code qui enregistre un nouveau <i lang="en">service workers</i>. Dans le fichier `app.js`, on a ceci&nbsp;:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Si l'API des <i lang="en">service workers</i> est prise en charge dans le navigateur, notre <i lang="en">service worker</i> est enregistré pour le site en utilisant la méthode [`ServiceWorkerContainer.register()`](/fr/docs/Web/API/ServiceWorkerContainer/register). Son contenu se trouve dans le fichier `sw.js` et peut être exécuté une fois que l'enregistrement a réussi. C'est la seule partie de code du <i lang="en">service worker</i> qui se trouve dans le fichier `app.js`&nbsp;; tout le reste des éléments spécifiques au <i lang="en">service worker</i> se trouve dans le fichier `sw.js`.

### Le cycle de vie d'un <i lang="en">service worker</i>

Une fois que l'enregistrement a été réalisé, le fichier `sw.js` est automatiquement téléchargé, puis installé, et finalement activé.

#### Installation

L'API nous permet d'ajouter des gestionnaires d'évènements pour les évènements clef qui nous intéressent. Le premier est l'évènement `install`&nbsp;:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Dans l'écoute de l'évènement `install`, nous pouvons initialiser le cache et y ajouter des fichiers pour une utilisation hors connexion. C'est ce que fait notre application js13kPWA.

D'abord, on crée une variable pour enregistrer le nom du cache. Ensuite, les fichiers correspondant au squelette de l'application sont listés dans un tableau.

```js
const cacheName = "js13kPWA-v1";
const appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
  "/pwa-examples/js13kpwa/fonts/graduate.eot",
  "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  "/pwa-examples/js13kpwa/fonts/graduate.woff",
  "/pwa-examples/js13kpwa/favicon.ico",
  "/pwa-examples/js13kpwa/img/js13kgames.png",
  "/pwa-examples/js13kpwa/img/bg.png",
  "/pwa-examples/js13kpwa/icons/icon-32.png",
  "/pwa-examples/js13kpwa/icons/icon-64.png",
  "/pwa-examples/js13kpwa/icons/icon-96.png",
  "/pwa-examples/js13kpwa/icons/icon-128.png",
  "/pwa-examples/js13kpwa/icons/icon-168.png",
  "/pwa-examples/js13kpwa/icons/icon-192.png",
  "/pwa-examples/js13kpwa/icons/icon-256.png",
  "/pwa-examples/js13kpwa/icons/icon-512.png",
];
```

Après, les liens vers les images à charger en même temps que le contenu du fichier `data/games.js` sont générés dans un second tableau. Puis, les deux tableaux sont fusionnés en utilisant la fonction [`Array.prototype.concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

```js
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Ensuite, nous pouvons gérer l'évènement `install` lui-même&nbsp;:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(contentToCache);
    })(),
  );
});
```

Expliquons ici deux éléments&nbsp;: le rôle de [`ExtendableEvent.waitUntil`](/fr/docs/Web/API/ExtendableEvent/waitUntil) fait et l'objet [`caches`](/fr/docs/Web/API/Window/caches).

Le <i lang="en">service worker</i> ne s'installe pas tant que le code situé à l'intérieur de `waitUntil()` n'est pas exécuté. Cette méthode renvoie une promesse, ce qui permet un fonctionnement asynchrone adéquat&nbsp;: l'installation peut prendre du temps et nous devons attendre qu'elle soit terminée.

`caches` est un objet [`CacheStorage`](/fr/docs/Web/API/CacheStorage) spécial, accessible dans la portée du <i lang="en">service worker</i> et qui permet d'enregistrer les données. On ne peut pas ici utiliser [l'API <i lang="en">Web Storage</i>](/fr/docs/Web/API/Web_Storage_API), car elle est synchrone. Avec les <i lang="en">service workers</i>, nous utilisons l'API Cache à la place.

Ici, nous ouvrons un cache sous un nom donné, puis nous lui ajoutons tous les fichiers que notre application utilise, de telle sorte qu'ils soient disponibles au prochain chargement de l'application. Les ressources sont identifiées par leur URL de requête, relative à [l'emplacement](/fr/docs/Web/API/WorkerGlobalScope/location) du <i lang="en">worker</i>.

Vous aurez peut-être remarqué que nous n'avons pas mis en cache le fichier `game.js`. Ce fichier contient les données utilisées pour afficher les jeux. En réalité, ces données seraient plutôt récupérées depuis une API ou une base de données. Mettre en cache ces données signifierait qu'elles ne seraient pas mises à jour périodiquement quand une connexion au réseau est disponible. Nous n'entrerons pas dans les détails ici, cependant [l'API de synchronisation périodique en arrière-plan (expérimentale)](/fr/docs/Web/API/Web_Periodic_Background_Synchronization_API) constitue une bonne lecture complémentaire sur le sujet.

#### Activation

Il y a également un évènement `activate` qui est utilisé de la même façon que `install`. Cet évènement est habituellement utilisé pour supprimer tout fichier qui n'est plus nécessaire et nettoyer derrière l'application en général. Nous n'avons pas besoin de faire ça dans notre application, donc nous l'omettrons.

### Répondre aux requêtes

Nous avons également un évènement `fetch` à notre disposition et qui est déclenché à chaque fois qu'une requête HTTP est émise par notre application. Ceci est très utile, car il nous permet d'intercepter des requêtes et d'y répondre de façon personnalisée. Voic un exemple d'utilisation simplifié&nbsp;:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

La réponse peut être ce que nous voulons&nbsp;: le fichier demandé, sa copie mise en cache ou un bout de code JavaScript qui fera quelque chose de particulier. Les possibilités sont infinies.

Dans notre application d'exemple, nous servons le contenu à partir du cache plutôt qu'à partir du réseau tant que la ressource se trouve effectivement dans le cache. Nous faisons ceci, que l'application soit en mode connecté ou déconnecté. Si le fichier n'est pas dans le cache, l'application commence par l'ajouter avant de le servir&nbsp;:

```js
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});
```

Ici, nous répondons à l'évènement `fetch` grâce à une fonction qui essaie de trouver la ressource dans le cache et de renvoyer la réponse si elle y est. Si elle n'y est pas, nous utilisons une autre requête de récupération pour aller la chercher via le réseau, puis enregistrer la réponse dans le cache de telle sorte qu'elle y soit disponible pour la prochaine demande.

La méthode [`FetchEvent.respondWith()`](/fr/docs/Web/API/FetchEvent/respondWith) prend le contrôle&nbsp;: c'est la partie qui agit en tant que serveur intermédiaire entre l'application et le réseau. Ceci nous permet de répondre à chacune des requêtes avec la réponse que nous voulons&nbsp;: préparée par le <i lang="en">service worker</i>, récupérée dans le cache et modifiée si nécessaire.

Ça y est&nbsp;! Notre application met en cache ses ressources lors de l'installation et les sert en les récupérant dans le cache, si bien qu'elle fonctionne même si l'appareil n'a pas de connexion. Elle met également en cache les contenus dès qu'il y en a des nouveaux.

## Mises à jour

Il reste un point à couvrir&nbsp;: comment mettre à jour un <i lang="en">service worker</i> quand une nouvelle version de l'application contenant de nouveaux éléments est disponible&nbsp;? C'est le numéro de version dans le nom du cache qui nous apporte la solution&nbsp;:

```js
const cacheName = "js13kPWA-v1";
```

Quand ceci est mis à jour en v2, nous pouvons alors ajouter tous nos fichiers (en incluant nos nouveaux fichiers) dans un nouveau cache&nbsp;:

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// …

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })(),
  );
});
```

Un nouveau <i lang="en">service worker</i> est installé en arrière plan et le précédent (v1) fonctionne correctement jusqu'à ce que plus aucune page ne l'utilise. Le nouveau <i lang="en">service worker</i> est alors activé et prend en charge la gestion de la page en remplaçant l'ancien.

## Vider le cache

Vous rappelez-vous l'évènement `activate` que nous avions omis&nbsp;? Il peut être utilisé pour vider l'ancien cache dont nous n'avons désormais plus besoin&nbsp;:

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});
```

Nous nous assurons ainsi de n'avoir que les fichiers nécessaires en cache, de telle sorte que nous ne laissons pas de déchets derrière nous. [L'espace de cache disponible dans le navigateur est limité](/fr/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), mieux vaut donc le nettoyer dès que possible.

## Autres cas d'usage

Servir des fichiers depuis un cache n'est pas la seule fonctionnalité des <i lang="en">service workers</i>. Si vous avez des calculs coûteux à faire, vous pouvez les déporter du processus principal vers un <i lang="en">worker</i> pour les y exécuter, puis recevoir les résultats dès qu'ils sont disponibles. Pour les performances, vous pouvez aussi précharger des ressources qui ne sont pas encore nécessaires, et qui pourraient l'être dans un futur proche, ainsi l'application sera plus rapide lorsque les ressources seront effectivement utiles.

## Résumé

Dans cet article, nous avons rapidement abordé la façon de faire fonctionner notre PWA en mode déconnecté grâce aux <i lang="en">service workers</i>. Consultez la documentation si vous voulez en apprendre davantage sur les concepts qui sont derrière [l'API <i lang="en">Service Worker</i>](/fr/docs/Web/API/Service_Worker_API) et comment l'exploiter au mieux.

Les <i lang="en">service workers</i> sont également utilisés pour gérer les [notifications push](/fr/docs/Web/API/Push_API), que nous verrons dans un prochain article.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
