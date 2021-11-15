---
title: Faire fonctionner les PWAs en mode déconnecté grâce aux Service workers
slug: Web/Progressive_web_apps/Offline_Service_workers
tags:
  - PWA
  - Progressive web app
  - Service Workers
  - hors-ligne
  - js13kGames
  - progressive
translation_of: Web/Progressive_web_apps/Offline_Service_workers
---
<div>{{PreviousMenuNext("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive")}}</div>

<p>Maintenant que nous avons vu à quoi ressemble l'architecture de js13kPWA et que nous avons configuré et exécuté la structure de base, voyons comment sont implémentées les fonctionnalités en mode déconnecté mettant en oeuvre Service Worker. Dans cet article, nous examinerons comment cela est utilisé dans notre <a href="https://mdn.github.io/pwa-examples/js13kpwa/">exemple js13kPWA</a> (<a href="https://github.com/mdn/pwa-examples/tree/master/js13kpwa">voir également le code source</a>). Nous examinerons comment ajouter la fonctionnalité mode déconnecté.</p>

<h2 id="Les_Service_workers_expliqués">Les Service workers expliqués</h2>

<p>Les Service Workers sont des proxy virtuels entre le navigateur et le réseau. Ils permettent enfin de régler les problèmes auxquels les développeurs front-end se débattent depuis des années — et plus particulièrement comment mettre proprement en cache les composants d'un site web et les rendre disponibles quand l'appareil de l'utilisateur est hors connexion.</p>

<p>Ils s'exécutent dans un processus séparé de celui du code JavaScript principal de notre page et n'ont aucun accès à la structure DOM. Cela introduit une approche différente de celle de la programmation web traditionnelle — l'API est non bloquante et peut émettre et recevoir de la communication entre différents contextes. Vous pouvez donner à un Service Worker quelque chose à faire et recevoir le résultat quand il est prêt en utilisant une approche basée sur les <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>.</p>

<p>Ils peuvent faire beaucoup plus que "simplement" offrir des capacités en mode déconnecté, comme gérer des notifications, exécuter des calculs intensifs dans des processus séparés, etc. Les Service Workers sont assez puissants car ils peuvent prendre le contrôle de requêtes réseau, les modifier, fournir des réponses personnalisées récupérées du cache ou générer complètement des réponses.</p>

<h3 id="Sécurité">Sécurité</h3>

<p>Puisqu'ils sont si puissants, les Service Workers ne peuvent être exécutés que dans des contextes sécurisés (c'est-à-dire HTTPS). Si vous voulez tester avant de pousser votre code en production, vous pouvez toujours tester sur le localhost ou configurer les pages GitHub — les deux prennent en charge le HTTPS.</p>

<h2 id="Mode_offline_first">Mode "offline first"</h2>

<p>Le modèle "offline first — ou "cache first" — est la stratégie la plus populaire pour délivrer du contenu à un utilisateur. Si une ressource est en cache et disponible hors ligne, on la sert avant de tenter de la télécharger depuis le serveur. Si elle n'est pas déjà en cache, on la télécharge et on la met en cache pour une utilisation future.</p>

<h2 id="Progressive_dans_PWA">"Progressive" dans PWA</h2>

<p>Lorsqu'implementés proprement en tant qu'amélioration progressive, les service workers peuvent profiter aux utilisateurs qui ont des navigateurs modernes qui implémentent l'API en offrant une prise en charge du mode déconnecté, mais ne casseront rien pour ceux qui utilisent des navigateurs plus anciens.</p>

<h2 id="Service_workers_dans_lapp_js13kPWA">Service workers dans l'app js13kPWA</h2>

<p>Assez de théorie — voyons un peu de code source !</p>

<h3 id="Enregistrer_le_Service_Worker">Enregistrer le Service Worker</h3>

<p>Commençons par regarder le code qui enregistre un nouveau Service Worker, dans le fichier app.js: </p>

<p><strong>NOTE</strong> : Nous utilisons la syntaxe des <strong>fonctions flèchées</strong> pour l'implémentation du Service Worker</p>

<pre class="brush: js notranslate">if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./pwa-examples/js13kpwa/sw.js');
};</pre>

<p>Si l'API service worker est prise en charge dans le navigateur, il est enregistré pour le site en utilisant la méthode {{domxref("ServiceWorkerContainer.register()")}}. Son contenu se trouve dans le fichier sw.js et peut être exécuté une fois que l'enregistrement a réussi. C'est la seule partie de code du Service Worker qui se trouve dans le fichier app.js. Tout le reste spécifique au Service Worker se trouve dans le fichier sw.js .</p>

<h3 id="Le_cycle_de_vie_dun_Service_Worker">Le cycle de vie d'un Service Worker</h3>

<p>Une fois que l'enregistrement a été réalisé, le fichier sw.js est automatiquement téléchargé, puis installé, et finalement activé.</p>

<h4 id="Installation">Installation</h4>

<p>L'API nous permet d'ajouter des intercepteurs d'événements ou <em>event listeners</em> pour les événements clef qui nous intéressent — le premier est l'événement <code>install</code>:</p>

<pre class="brush: js notranslate">self.addEventListener('install', (e) =&gt; {
    console.log('[Service Worker] Installation');
});</pre>

<p>Dans le listener <code>install</code>, nous pouvons initialiser le cache et y ajouter des fichiers pour une utilisation hors connexion. Notre app js13kPWA fait exactement ça.</p>

<p>D'abord, une variable pour enregistrer le nom du cache est créée, les fichiers de l'app shell sont listés dans un tableau.</p>

<pre class="brush: js notranslate">var cacheName = 'js13kPWA-v1';
var appShellFiles = [
  '/pwa-examples/js13kpwa/',
  '/pwa-examples/js13kpwa/index.html',
  '/pwa-examples/js13kpwa/app.js',
  '/pwa-examples/js13kpwa/style.css',
  '/pwa-examples/js13kpwa/fonts/graduate.eot',
  '/pwa-examples/js13kpwa/fonts/graduate.ttf',
  '/pwa-examples/js13kpwa/fonts/graduate.woff',
  '/pwa-examples/js13kpwa/favicon.ico',
  '/pwa-examples/js13kpwa/img/js13kgames.png',
  '/pwa-examples/js13kpwa/img/bg.png',
  '/pwa-examples/js13kpwa/icons/icon-32.png',
  '/pwa-examples/js13kpwa/icons/icon-64.png',
  '/pwa-examples/js13kpwa/icons/icon-96.png',
  '/pwa-examples/js13kpwa/icons/icon-128.png',
  '/pwa-examples/js13kpwa/icons/icon-168.png',
  '/pwa-examples/js13kpwa/icons/icon-192.png',
  '/pwa-examples/js13kpwa/icons/icon-256.png',
  '/pwa-examples/js13kpwa/icons/icon-512.png'
];</pre>

<p>Ensuite, les liens vers les images à charger en même temps que le contenu du fichier data/games.js sont générés dans un second tableau. Puis les deux tableaux sont fusionnés en utilisant la fonction {{jsxref("Array.prototype.concat()")}}.</p>

<pre class="brush: js notranslate">var gamesImages = [];
for(var i=0; i&lt;games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);</pre>

<p>Ensuite, nous pouvons gérer l'événement <code>install</code> lui-même:</p>

<pre class="brush: js notranslate">self.addEventListener('install', (e) =&gt; {
  console.log('[Service Worker] Installation');
  e.waitUntil(
    caches.open(cacheName).then((cache) =&gt; {
          console.log('[Service Worker] Mise en cache globale: app shell et contenu');
      return cache.addAll(contentToCache);
    })
  );
});</pre>

<p>Deux choses ici nécessitent une explication : ce que {{domxref("ExtendableEvent.waitUntil")}} fait et ce qu'est l'objet {{domxref("Caches","caches")}}.</p>

<p>Le service worker ne s'installe pas tant que le code de <code>waitUntil</code> n'est pas exécuté. Il renvoie une promesse — Cette approche est nécessaire car l'installation peut prendre du temps, donc nous devons attendre qu'elle soit terminée.</p>

<p><code>caches</code> est un objet {{domxref("CacheStorage")}} spécial accessible dans la portée du Service Worker et qui permet d'enregistrer les données — l'enregistrement dans le <a href="/fr/docs/Web/API/Web_Storage_API">web storage</a> ne fonctionnera pas, parce que le web storage fonctionne de façon synchrone. Avec les Service Workers, nous utilisons l'API Cache à la place. Ici, nous ouvrons un cache sous un nom donné, puis nous lui ajoutons tous les fichiers que notre app utilise, de telle sorte qu'ils soient disponibles la prochaine fois qu'il sera chargé (identifié par l'URL de la requête).</p>

<p>Vous avez remarqué que nous n'avons pas mis en cache le fichier <code>game.js</code>. Ce fichier contient les données utilisées pour afficher les jeux. En réalité, ces données seront appelées depuis le endpoint d'une API ou depuis une base de données.Mettre en cache ces données signifierait qu'elles ne seraient mises à jour que périodiquement quand il y' a une connexion au réseau. Nous n'irons pas plus loin sur ce sujet, pour en savoir plus : <a href="/fr/docs/Web/API/Web_Periodic_Background_Synchronization_API">Web_Periodic_Background_Synchronization_API</a> .</p>

<h4 id="Activation">Activation</h4>

<p>Il y a également un événement <code>activate</code> qui est utilisé de la même façon que <code>install</code>. Cet événement est habituellement utilisé pour supprimer tout fichier qui n'est plus nécessaire et nettoyer derrière l'app en général. Nous n'avons pas besoin de faire ça dans notre app, donc nous l'omettrons.</p>

<h3 id="Répondre_aux_requêtes">Répondre aux requêtes</h3>

<p>Nous avons également un événement <code>fetch</code> à notre disposition et qui est déclenché à chaque fois qu'une requête HTTP est émise par notre app. Ceci est très  utile car ça nous permet d'intercepter des requêtes et d'y répondre de façon personnalisée. Voic un exemple d'utilisation simpliste:</p>

<pre class="brush: js notranslate">self.addEventListener('fetch', (e) =&gt; {
    console.log('[Service Worker] Ressource récupérée '+e.request.url);
});</pre>

<p>La réponse peut être ce que nous voulons: le fichier demandé, sa copie mise en cache ou un bout de code JavaScript qui fera quelque chose de particulier — les possibilités sont infinies.</p>

<p>Dans notre app d'exemple, nous servons le contenu à partir du cache plutôt qu'à partir du réseau tant que la ressource se trouve effectivement dans le cache. Nous faisons ceci que l'app soit en mode connecté ou déconnecté. Si le fichier n'est pas dans le cache, l'app commence par l'y ajouter avant de le servir:</p>

<pre class="brush: js notranslate">self.addEventListener('fetch', (e) =&gt; {
  e.respondWith(
    caches.match(e.request).then((r) =&gt; {
          console.log('[Service Worker] Récupération de la ressource: '+e.request.url);
      return r || fetch(e.request).then((response) =&gt; {
                return caches.open(cacheName).then((cache) =&gt; {
          console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});</pre>

<p>Ici, nous répondons à l'événement <code>fetch</code> grâce à une fonction qui essaie de trouver la ressource dans le cache et de renvoyer la réponse si elle y est. Si elle n'y est pas, nous utilisons une autre requête de récupération pour aller la chercher via le réseau, puis enregistrer la réponse dans le cache de telle sorte qu'elle y soit disponible la prochaine fois qu'elle sera demandée.</p>

<p>La méthode {{domxref("FetchEvent.respondWith")}} prend le contrôle — c'est la partie qui agit en tant que serveur proxy entre l'application et le réseau. Ceci nous permet de répondre à chacune des requêtes avec la réponse que nous voulons: celle préparée par le Service Worker, celle récupérée dans le cache, modifiée si nécessaire.</p>

<p>ça y est ! Notre application met en cache ses ressources lors de l'installation et les sert en les récupérant dans le cache, si bien qu'elle fonctionne même si l'utilisateur n'a pas de connexion. Elle met également en cache les contenus dès qu'il y en a de nouveaux d'ajoutés.</p>

<h2 id="Mises_à_jour">Mises à jour</h2>

<p>Il reste un point à couvrir: comment mettre à jour un Service Worker quand une nouvelle version de l'application contenant de nouveaux éléments est disponible ? Le numéro de version dans le nom du cache est la clef de l'énigme:</p>

<pre class="brush: js notranslate">var cacheName = 'js13kPWA-v1';</pre>

<p>Quand ceci est mis à jour en v2, nous pouvons alors ajouter tous nos fichiers (en incluant nos nouveaux fichiers) dans un nouveau cache:</p>

<pre class="brush: js notranslate">contentToCache.push('/pwa-examples/js13kpwa/icons/icon-32.png');

// ...

self.addEventListener('install', (e) =&gt; {
  e.waitUntil(
    caches.open('js13kPWA-v2').then((cache) =&gt; {
      return cache.addAll(contentToCache);
    })
  );
});</pre>

<p>Un nouveau service worker est installé en arrière plan et le précédent (v1) fonctionne correctement jusqu'à ce que plus aucune page ne l'utilise — le nouveau Service Worker est alors activé et prend à son compte la gestion de la page à la place de l'ancien.</p>

<h2 id="Vider_le_cache">Vider le cache</h2>

<p>Vous vous rappelez l'événement <code>activate</code> que nous avons éludé ? Il peut être utilisé pour vider l'ancien cache dont nous n'avons désormais plus besoin:</p>

<pre class="brush: js notranslate">self.addEventListener('activate', (e) =&gt; {
  e.waitUntil(
    caches.keys().then((keyList) =&gt; {
          return Promise.all(keyList.map((key) =&gt; {
        if(cacheName.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});</pre>

<p>Ceci nous assure que nous avons seulement les fichiers dont nous avons besoin dans le cache, de telle sorte que nous ne laissions pas de déchets derrière nous; l'<a href="/fr/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria">espace de cache disponible dans le navigateur est limité</a>, c'est donc une bonne idée de nettoyer derrière nous.</p>

<h2 id="Autres_cas_dusage">Autres cas d'usage</h2>

<p>Servir des fichiers depuis le cache n'est pas la seule fonctionnalité que le Service Worker offre. Si vous avez des calculs coûteux à faire, vous pouvez en décharger le processus principal et les exécuter dans le worker, puis recevoir les résultats dès qu'ils sont disponibles. En gérant astucieusement les performances, vous pouvez pré-charger des ressources qui ne sont acutellement pas nécessaires, mais qui pourront l'être dans un futur proche, si bien que l'application sera plus rapide quand vous aurez effectivement besoin de ces ressources.</p>

<h2 id="Résumé">Résumé</h2>

<p>Dans cet article, nous avons rapidement abordé la façon de faire fonctionner notre PWA en mode déconnecté grâce aux service workers. Consultez  la documentation si vous voulez en apprendre davantage sur les concepts qui sont derrière l'<a href="/fr/docs/Web/API/Service_Worker_API">API Service Worker</a> et comment l'exploiter au mieux.</p>

<p>Les Service Workers sont également utilisés pour gérer les <a href="/fr/docs/Web/API/Push_API">push notifications </a><a href="/fr/docs//Web/API/Push_API"> </a>— ceci sera expliqué dans un prochain article.</p>

<p>{{PreviousMenuNext("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive")}}</p>

<div>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</div>
