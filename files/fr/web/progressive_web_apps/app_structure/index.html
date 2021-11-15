---
title: Structure d'une Progressive web app
slug: Web/Progressive_web_apps/App_structure
translation_of: Web/Progressive_web_apps/App_structure
---
<div>{{PreviousMenuNext("Web/Apps/Progressive/Introduction", "Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive")}}</div>

<p>Maintenant que nous avons pris connaissances des principes théoriques sur lesquelles sont bâties les PWAs, penchons nous sur la structure recommandée d'une vraie application. Nous commencerons par analyser l'application <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> et par examiner pourquoi elle est construite de cette façon et quels bénéfices elle en retire.</p>

<h2 id="Architecture_dune_application">Architecture d'une application</h2>

<p>Il existe deux approches majeures distinctes pour générer un site web - côté serveur ou côté client. Les deux approches ont leurs avantages et leurs inconvénients et vous pouvez panacher jusqu'à un certain point les deux approches. </p>

<ul>
 <li>La génération côté serveur (Server-side rendering ou SSR) signifie qu'un site web est généré sur le serveur, si bien qu'il bénéficie d'un temps de chargement initial plus court mais la navigation d'une page à l'autre impose de télécharger à chaque foois un nouveau contenu HTML. Cela fonctionne parfaitement pour les navigateurs mais au prix d'un temps de navigation accru pour passer d'une page à l'autre, et donc diminue la performance générale perçue - charger une page nécessite un nouvel allerr-retour avec le serveur.</li>
 <li>La génération côté client (Client-side rendering ou CSR) permet au site web d'être mis à jour presque instantanément en navigant sur des pages différentes mais nécessite au début un téléchargement intial plus important et un travail de rendu supplémentaires côté client. Le site web est plus lent lors d'une première visite mais peut être plus rapide ensuite quand on y navigue.</li>
</ul>

<p>Mélanger SSR et CSR peut permettre d'obtenir de meilleurs résultats - vous pouvez générer un site web côté serveur, mettre en cache son contenu puis mettre à jour le rendu côté client si et quand c'est nécessaire. Le chargement de la première page est rapide grâce au SSR et la navigation entre les pages est fluide car le client peut regénérer la page en ne modifiant que les parties qui ont changé.</p>

<p>Les PWAs peuvent être construite en utilisant l'approche que vous préférez, mais certaines fonctionneront mieux que les autres. L'approche la plus populaire est celle utilisant le concept d' "app shell"; qui mélange SSR et CSR exactement comme cela a été décrit plus haut et se conforme de surcroit à la méthodologie "déconnectée d'abord" ("offline first") que nous expliquerons en détails dans de prochains articles et que nous utiliserons dans notre application exemple. Il existe également une nouvelle approche utilisant l'<a href="/fr/docs/Web/API/Streams_API">API Streams</a> et dont nous parlerons brièvement.</p>

<h2 id="App_shell">App shell</h2>

<p>Le concept d'App shell s'occupe de charger une interface utilisateur minimale dès que possible puis de la mettre en cache de façon à ce qu'elle soit disponible en mode déconnecté lors des visites suivantes, avant de charger tout le contenu de l'application. De cette façon, la prochaine fois que quelqu'un visite l'application avec un appareil, l'interface utilisateur est chargée immédiatement depuis le cache puis les nouveaux contenus sont demandés au serveur (s'ils ne sont pas déjà disponibles dans le cache).</p>

<p>Cette structure est rapide et est également ressentie comme telle par l'utilisateur car il voit "quelque chose" instantanément, plutôt qu'un indicateur de chargement en train de tourner ou une page blanche. Cela permet également au site web d'être accessible en mode déconnecté si une connexion réseau n'est pas disponible.</p>

<p>Nous pouvons contrôler ce qui est demandé au serveur et ce qui est récupéré dans le cache grâce à un <a href="/fr/docs/Web/API/Service_Worker_API">service worker</a> qui sera expliqué en détail dans le prochain article - pour le moment, concentrons-nous sur la structure en elle-même.</p>

<h3 id="Pourquoi_dois-je_lutiliser">Pourquoi dois-je l'utiliser ?</h3>

<p>Cette architecture permet à un site web de bénéficier de la plupart des fonctionnalités PWA - elle met en cache l'app shell et gère le contenu dynamique d'une manière qui améliore grandement les performances. En plus de la structure de base, vous pouvez ajouter d'autres fonctionnalités telles que <a href="/fr/docs/Web/Apps/Progressive/Add_to_home_screen">l'ajouter à l'écran d'accueil</a> ou <a href="/fr/docs/Web/API/Push_API">l'envoi de notifications</a>, sachant que l'application fonctionnera toujours correctement si elles ne sont pas prises en charge par le navigateur de l'utilisateur - c'est la beauté de l'amélioration continue.</p>

<p>Le site web se comporte comme une application native, offrant une interaction instantannée et de solides performances tout en conservant les avantages du web.</p>

<h3 id="Être_accessible_par_un_lien_progressive_et_de_conception_adaptative">Être accessible par un lien, progressive et de conception adaptative</h3>

<p>Il est important de se rappeler les avantages des PWA et de les garder à l'esprit lorsqu'on conçoit l'application. L'approche app shell permet aux sites web d'être :</p>

<ul>
 <li>Accessible par un lien: Même s'il se comporte comme une application native, il reste un site web - vous pouvez cliquer sur les liens d'une page et envoyer une URL à quelqu'un si vous voulez le partager.</li>
 <li>Progressive: Commencer avec un "bon vieux site web basic” et ajouter progressivement de nouvelles fonctionnalités tout en se rappelant de détecter si elles sont disponibles dans le navigateur et de gérer proprement toute erreur qui pourrait survenir si la prise en charge n'est pas disponible. Par exemple, un mode déconnecté possible grâce aux service workers n'est qu'une caractéristique bonus qui améliore l'expérience sur le site web, mais ce dernier reste totalement fonctionnel sans elle.</li>
 <li>Adaptatif: La conception web adaptative s'applique également aux applications web progressives, attendu que les deux sont principalement destinés aux appareils mobiles. Il y a tellements d'appareils différents en plus des navigateurs - il est important de préparer votre site web à fonctionner sur différentes tailles d'écran, supports d'affichage ou densité de pixels, en utilisant des technologies telles que  <a href="/fr/docs/Mozilla/Mobile/Viewport_meta_tag">les tags meta viewport</a>, <a href="/fr/docs/Web/CSS/Media_Queries/Using_media_queries">les reqêtes media CSS</a>, <a href="/fr/docs/Web/CSS/CSS_Flexible_Box_Layout">les Flexbox</a> et les <a href="/fr/docs/Web/CSS/CSS_Grid_Layout">Grid CSS</a>.</li>
</ul>

<h2 id="Approche_différente_les_streams">Approche différente : les streams</h2>

<p>Une approche totalement différente du rendu côté serveur - ou client - peut être obtenue à l'aide de l'<a href="/fr/docs/Web/API/Streams_API">API Streams</a>. Avec un peu d'aide des service workers, les streams peuvent grandement améliorer la façon dont nous analysons le contenu.</p>

<p>Le modèle app shell nécessite que toutes les ressources soient disponibles avant que le site puisse commencer à être rendu. C'est différent avec HTML pour lequel le navigateur diffuse immédiatement les données si bien que vous pouvez voir quand les éléments sont chargés et et rendus sur le site web. Pour que le JavaScript soit "opérationnel", cependant, il faut attendre qu'il ait été entièrement téléchargé au préalable.</p>

<p>L'API Streams permet aux développeurs d'avoir un accès direct au flux de données provenant du serveur - si vous voulez exécuter une opération sur les données (par exemple ajouter un filtre à une vidéo), vous n'avez plus besoin d'attendre que tout soit téléchargé et converti en un blob (ou autre) - vous pouvez commencer immédiatement. Cela permet un contrôle fin - le flux peut être démarré, chaîné avec un autre flux, annulé, ses erreurs contrôlées, et plus.</p>

<p>En théorie, le flux est un meilleur modèle, mais il est également plus complexe et au moment de la rédaction (mars 2018), l'API Stream est toujours un travail en cours et pas encore totalement disponible pour l'ensemble des navigateurs principaux. Quand elle sera disponible, elle sera le moyen le plus rapide de servir le contenu - les bénéfices sont sur le point d'être énormes en terme de performance.</p>

<p>Pour voir des exemples fonctionnels et disposer de davantage d'information, voir <a href="/fr/docs/Web/API/Streams_API">la documention de l'API Streams</a>.</p>

<h2 id="Structure_de_notre_application_exemple">Structure de notre application exemple</h2>

<p>La structure du site web <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> est plutôt simple: elle consiste en un simple fichier HTML (<a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html">index.html</a>) avec un style CSS basique (<a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css">style.css</a>) et quelques images, scripts et polices de caractères. La structure du répertoire ressemble à ceci:</p>

<p><img alt="Folder structure of js13kPWA." src="js13kpwa-directory.png"></p>

<h3 id="Le_HTML">Le HTML</h3>

<p>Du point de vue HTML, l'app shell est tout ce qui est à l'extérieur de la section content:</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;title&gt;js13kGames A-Frame entries&lt;/title&gt;
	&lt;meta name="description" content="A list of A-Frame entries submitted to the js13kGames 2017 competition, used as an example for the MDN articles about Progressive Web Apps."&gt;
	&lt;meta name="author" content="end3r"&gt;
	&lt;meta name="theme-color" content="#B12A34"&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
	&lt;meta property="og:image" content="icons/icon-512.png"&gt;
	&lt;link rel="shortcut icon" href="favicon.ico"&gt;
	&lt;link rel="stylesheet" href="style.css"&gt;
	&lt;link rel="manifest" href="js13kpwa.webmanifest"&gt;
	&lt;script src="data/games.js" defer&gt;&lt;/script&gt;
	&lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
	&lt;p&gt;&lt;a class="logo" href="http://js13kgames.com"&gt;&lt;img src="img/js13kgames.png" alt="js13kGames"&gt;&lt;/a&gt;&lt;/p&gt;
&lt;/header&gt;
&lt;main&gt;
	&lt;h1&gt;js13kGames A-Frame entries&lt;/h1&gt;
	&lt;p class="description"&gt;List of games submitted to the &lt;a href="http://js13kgames.com/aframe"&gt;A-Frame category&lt;/a&gt; in the &lt;a href="http://2017.js13kgames.com"&gt;js13kGames 2017&lt;/a&gt; competition. You can &lt;a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa"&gt;fork js13kPWA on GitHub&lt;/a&gt; to check its source code.&lt;/p&gt;
	&lt;button id="notifications"&gt;Request dummy notifications&lt;/button&gt;
	&lt;section id="content"&gt;
		// Le contenu est inséré ici
	&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;
	&lt;p&gt;© js13kGames 2012-2018, created and maintained by &lt;a href="http://end3r.com"&gt;Andrzej Mazur&lt;/a&gt; from &lt;a href="http://enclavegames.com"&gt;Enclave Games&lt;/a&gt;.&lt;/p&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>La section {{htmlelement("head")}} contient certaines informations de base telles que le titre, la description et des liens vers les CSS, le manifeste web, le fichier JS contenant les jeux et  app.js — c'est là où notre application JavaScript est initialisée. Le {{htmlelement("body")}} est divisé en {{htmlelement("header")}} (contenant les images liées), {{htmlelement("main")}} la page (avec le titre, la description et un emplacement pour le contenu) et  {{htmlelement("footer")}} (le copyright et les liens).</p>

<p>Le seul travail de l'application est de lister toutes les entrées A-Frame de la compétition js13kGames 2017. Comme vous pouvez le voir, c'est un site web en une page tout ce qu'il y a de plus ordinaire - le but est d'avoir quelque chose de simple afin que nous puissions nous concentrer sur l'implémentation des réelles fonctionnalités PWA.</p>

<h3 id="Le_CSS">Le CSS</h3>

<p>Le CSS est également aussi linéaire que possible: il utilise {{cssxref("@font-face")}} pour charger et utiliser une police de caractères personnalisée et il applique quelques mises en forme simples des éléments HTML. L'approche globale est d'avoir une conception qui soit belle à la fois sur les mobiles (avec une approche de conception adaptative) et sur les ordinateurs de bureau.</p>

<h3 id="Le_fichier_JavaScript_principal">Le fichier JavaScript principal</h3>

<p>Le fichier app.js file exécute plusieurs choses que nous regarderons de plus près dans les prochains articles. Avant tout, il génère le contenu à l'aide de ce template:</p>

<pre class="brush: js notranslate">var template = "&lt;article&gt;\n\
    &lt;img src='data/img/SLUG.jpg' alt='NAME'&gt;\n\
    &lt;h3&gt;#POS. NAME&lt;/h3&gt;\n\
    &lt;ul&gt;\n\
    &lt;li&gt;&lt;span&gt;Author:&lt;/span&gt; &lt;strong&gt;AUTHOR&lt;/strong&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;Twitter:&lt;/span&gt; &lt;a href='https://twitter.com/TWITTER'&gt;@TWITTER&lt;/a&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;Website:&lt;/span&gt; &lt;a href='http://WEBSITE/'&gt;WEBSITE&lt;/a&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;GitHub:&lt;/span&gt; &lt;a href='https://GITHUB'&gt;GITHUB&lt;/a&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;More:&lt;/span&gt; &lt;a href='http://js13kgames.com/entries/SLUG'&gt;js13kgames.com/entries/SLUG&lt;/a&gt;&lt;/li&gt;\n\
    &lt;/ul&gt;\n\
&lt;/article&gt;";
var content = '';
for(var i=0; i&lt;games.length; i++) {
    var entry = template.replace(/POS/g,(i+1))
        .replace(/SLUG/g,games[i].slug)
        .replace(/NAME/g,games[i].name)
        .replace(/AUTHOR/g,games[i].author)
        .replace(/TWITTER/g,games[i].twitter)
        .replace(/WEBSITE/g,games[i].website)
        .replace(/GITHUB/g,games[i].github);
    entry = entry.replace('&lt;a href=\'http:///\'&gt;&lt;/a&gt;','-');
    content += entry;
};
document.getElementById('content').innerHTML = content;</pre>

<p>Ensuite, il enregistre un service worker:</p>

<pre class="brush: js notranslate">if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-examples/js13kpwa/sw.js');
};</pre>

<p>Le bloc de code suivant demande la permission d'émettre des notifications quand un bouton est cliqué:</p>

<pre class="brush: js notranslate">var button = document.getElementById("notifications");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
});</pre>

<p>Le dernier bloc crée des notifications qui affichent  un élément choisi au hasard dans la liste des jeux:</p>

<pre class="brush: js notranslate">function randomNotification() {
    var randomItem = Math.floor(Math.random()*games.length);
    var notifTitle = games[randomItem].name;
    var notifBody = 'Created by '+games[randomItem].author+'.';
    var notifImg = 'data/img/'+games[randomItem].slug+'.jpg';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}</pre>

<h3 id="Le_service_worker">Le service worker</h3>

<p>Le dernier fichier que nous allons rapidement regarder est le service worker: sw.js — il importe d'abord les données du fichier games.js:</p>

<pre class="brush: js notranslate">self.importScripts('data/games.js');</pre>

<p>Ensuite, il crée une liste de tous les fichiers à mettre en cache, à la fois à partir de l'app shell et du contenu:</p>

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
];
var gamesImages = [];
for(var i=0; i&lt;games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);</pre>

<p>Le bloc suivant définit la phase d'initialisation de notre service worker lors de laquelle tous les fichiers contenus dans la liste précédente sont effectivement mis en cache:</p>

<pre class="brush: js notranslate">self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});</pre>

<p>Finalement, nous définissons ici le gestionnaire de l'événement fetch du service worker afin qu'il récupère le contenu du cache s'il y est disponible, offrant un fonctionnement hors connexion:</p>

<pre class="brush: js notranslate">self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});</pre>

<h3 id="Les_données_JavaScript">Les données JavaScript</h3>

<p>Les données des jeux sont présentes dans le dossier data sous la forme d'un objet JavaScript (<a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js">games.js</a>):</p>

<pre class="brush: js notranslate">var games = [
    {
        slug: 'lost-in-cyberspace',
        name: 'Lost in Cyberspace',
        author: 'Zosia and Bartek',
        twitter: 'bartaz',
        website: '',
        github: 'github.com/bartaz/lost-in-cyberspace'
    },
    {
        slug: 'vernissage',
        name: 'Vernissage',
        author: 'Platane',
        twitter: 'platane_',
        website: 'github.com/Platane',
        github: 'github.com/Platane/js13k-2017'
    },
// ...
    {
        slug: 'emma-3d',
        name: 'Emma-3D',
        author: 'Prateek Roushan',
        twitter: '',
        website: '',
        github: 'github.com/coderprateek/Emma-3D'
    }
];</pre>

<p>Chaque entrée possède sa propre image dans le dossier data/img. Ceci est notre contenu chargé dans la section content via JavaScript.</p>

<h2 id="A_suivre">A suivre</h2>

<p>Dans le prochain article, nous regarderons plus en détail comment l'app shell et le contenu sont mis en cache pour une utilisation en mode déconnecté grâce au service worker.</p>

<p>{{PreviousMenuNext("Web/Apps/Progressive/Introduction", "Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive")}}</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</p>
