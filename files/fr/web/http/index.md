---
title: HTTP
slug: Web/HTTP
translation_of: Web/HTTP
---
<div>{{HTTPSidebar}}</div>

<p><strong><dfn><i lang="en">Hypertext Transfer Protocol</i> (HTTP) (ou protocole de transfert hypertexte en français)</dfn></strong> est un protocole de <a href="https://fr.wikipedia.org/wiki/Couche_application">la couche application</a> servant à transmettre des documents hypermédias, comme HTML. Il a été conçu la communication entre les navigateurs web et les serveurs web mais peut également être utilisé à d'autres fins. Il suit le modèle classique <a href="https://fr.wikipedia.org/wiki/Client-serveur">client-serveur</a>&nbsp;: un client ouvre une connexion, effectue une requête et attend jusqu'à recevoir une réponse. Il s'agit aussi d'un <a href="https://fr.wikipedia.org/wiki/Protocole_sans_%C3%A9tat">protocole sans état</a>, ce qui signifie que le serveur ne conserve aucune donnée (on parle d'état) entre deux requêtes.</p>

<h2 id="tutorials">Tutoriels</h2>

<p>Apprenez comment utiliser HTTP avec des guides et des tutoriels.</p>

<dl>
  <dt><a href="/fr/docs/Web/HTTP/Overview">Aperçu du protocole HTTP</a></dt>
  <dd>Les fonctionnalités de base de ce protocole client-serveur : ce qui est permis par HTTP ainsi que le cadre d'utilisation de ce protocole.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Caching">Mise en cache avec HTTP</a></dt>
  <dd>La mise en cache est critique pour permettre aux sites web d'être rapides. Cet article décrit les différentes méthodes de mise en cache et l'utilisation des en-têtes HTTP afin de contrôler le cache.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Cookies">Cookies HTTP</a></dt>
  <dd>Le fonctionnement des cookies est décrit dans la <a href="https://tools.ietf.org/html/rfc6265">RFC 6265</a>. Lorsqu'un serveur répond à une requête HTTP, ce dernier peut envoyer un en-tête <code>Set-Cookie</code> avec la réponse. Le client retourne alors la valeur du cookie lors de chaque requête vers ce serveur via un en-tête <code>Cookie</code> dans la requête. Le cookie peut posséder une date d'expiration, être restreint à un domaine spécifique ou à un chemin d'accès donné.</dd>
  <dt><a href="/fr/docs/Web/HTTP/CORS"><i lang="en">Cross-Origin Resource Sharing</i> (CORS ou partage des ressources entre différentes origines)</a></dt>
  <dd><strong>Les requêtes HTTP cross-sites</strong> sont des requêtes HTTP pour des ressources situées dans un <strong>domaine différent</strong> de celui dans lequel se situe la ressource qui effectue la requête. Par exemple, une page HTML d'un domaine A (<code>http://domainea.example/</code>) effectue une requête pour une image au sein du domaine B (<code>http://domaineb.foo/image.jpg</code>) à l'aide de la balise <code>img</code>. Les pages web actuelles effectuent souvent des requêtes cross-sites pour charger des éléments comme des feuilles de style CSS, des images, des scripts ou d'autres ressources. CORS permet aux développeuses et développeurs web de contrôler la façon dont leur site doit se comporter lorsqu'il reçoit des requêtes d'une autre origine.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP">Évolution du protocole HTTP</a></dt>
  <dd>Une brève description des changements qui ont eu lieu entre les toutes premières versions de HTTP, HTTP/2, HTTP/3 plus récent voire au-delà.</dd>
  <dt><a href="https://wiki.mozilla.org/Security/Guidelines/Web_Security">Guide de sécurité Mozilla pour le Web</a></dt>
  <dd>Une liste d'astuces visant à aider les équipes opérationnelles afin de créer des applications web mieux sécurisées (en anglais).</dd>
  <dt><a href="/fr/docs/Web/HTTP/Messages">Les messages HTTP</a></dt>
  <dd>Une description des types et structures de chaque message pour HTTP/1.x et HTTP/2.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Session">Une session HTTP classique</a></dt>
  <dd>Un exemple et l'explication du déroulement d'une session HTTP classique.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Connection_management_in_HTTP_1.x">Gestion des connexions en HTTP/1.x</a></dt>
  <dd>Un aperçu des trois modèles de gestion de connexion disponibles pour HTTP/1.x ainsi que leurs forces et faiblesses respectives.</dd>
</dl>

<h2 id="reference">Référence</h2>

<p>Naviguez dans la documentation détaillée de HTTP.</p>

<dl>
  <dt><a href="/fr/docs/Web/HTTP/Headers">En-têtes HTTP</a></dt>
  <dd>Les messages d'en-tête HTTP sont utilisés pour décrire précisément la ressource ou le comportement du client ou du serveur. Un en-tête propriétaire sur mesure peut être ajouté en utilisant le préfixe <code>X-</code> ; d'autres en-têtes sont disponibles dans le <a href="https://www.iana.org/assignments/message-headers/perm-headers.html">registre de l'IANA</a>, dont le contenu original a été défini dans la <a href="https://tools.ietf.org/html/rfc4229">RFC 4229</a>. L'IANA maintient aussi un <a href="https://www.iana.org/assignments/message-headers/prov-headers.html">registre des nouveaux messages d'en-tête HTTP qui sont proposés</a>.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Methods">Méthodes de requête HTTP</a></dt>
  <dd>Différentes opérations peuvent être effectuées avec HTTP : les plus connues <a href="/fr/docs/Web/HTTP/Methods/GET"><code>GET</code></a>, <a href="/fr/docs/Web/HTTP/Methods/POST"><code>POST</code></a>, mais aussi des requêtes comme <a href="/fr/docs/Web/HTTP/Methods/OPTIONS"><code>OPTIONS</code></a>, <a href="/fr/docs/Web/HTTP/Methods/DELETE"><code>DELETE</code></a> ou <a href="/fr/docs/Web/HTTP/Methods/TRACE"><code>TRACE</code></a>.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Response_codes">Codes de réponse HTTP</a></dt>
  <dd>Les codes de réponses HTTP indiquent si une requête HTTP a été effectuée avec succès. Les réponses sont regroupées en cinq classes : les réponses informationnelles, les réponses de succès, les redirections, les erreurs client et les erreurs serveur.</dd>
  <dt><a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy">Directives CSP</a></dt>
  <dd>Les champs de l'en-tête de réponse <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy"><code>Content-Security-Policy</code></a> permettent aux administrateurs de contrôler les ressources accessibles pour un agent utilisateur au sein d'une page donnée. De manière générale, il s'agit de directives relatives à l'origine du serveur ainsi qu'aux points de terminaison des scripts.</dd>
</dl>

<h2 id="tools_resources">Outils et ressources</h2>

<p>Outils utiles pour comprendre et déboguer HTTP.</p>

<dl>
  <dt><a href="/fr/docs/Tools">Les outils de développement de Firefox</a></dt>
  <dd><a href="/fr/docs/Tools/Network_Monitor">Moniteur réseau</a></dd>
  <dt><a href="https://observatory.mozilla.org/">Mozilla Observatory</a></dt>
  <dd>
  <p>Un projet conçu pour aider les développeuses et développeurs, les administratrices et administrateurs système ainsi que les professionnels de la sécurité à configurer leur site de manière sûre et sécurisée.</p>
  </dd>
  <dt><a href="https://redbot.org/">RedBot</a></dt>
  <dd>Des outils pour vérifier vos en-têtes liés à la gestion du cache.</dd>
  <dt><a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/">How Browsers Work</a></dt>
  <dd>Un article détaillé sur le fonctionnement d'un navigateur et l'organisation des requêtes HTTP durant la navigation.</dd>
</dl>
