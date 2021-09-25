---
title: L'évolution du protocole HTTP
slug: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
tags:
  - Guide
  - HTTP
translation_of: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
---
<div>{{HTTPSidebar}}
<div>
<p><strong>Le protocole HTTP</strong> (HyperText Transfer Protocol) est le protocole qui sous-tend le World Wide Web. Conçu par Tim Berners-Lee et son équipe entre 1989 et 1991, HTTP a vécu de nombreux changements tout en conservant sa simplicité, étendant ainsi sa flexibilité. HTTP a évolué à partir d'un protocole sommaire d'échange de fichiers sur un réseau de confiance au sein d'un laboratoire jusqu'à devenir le labyrinthe moderne d'Internet permettant désormais le transport d'images, de vidéos en haute résolution et en 3D.</p>

<h2 id="Linvention_du_World_Wide_Web">L'invention du World Wide Web</h2>

<p>En 1989, alors qu'il travaillait au CERN, Tim Berners-Lee proposa la création d'un système hypertexte sur internet. Initialement nommé <em>Mesh, </em>il prit le nom de World Wide Web lors de sa mise en place en 1990. Bâti sur les protocoles existants TCP et IP, il consistait en quatre éléments de base :</p>

<ul>
 <li>Un format textuel pour représenter les documents hypertextes, l'<em><a href="/fr/docs/Web/HTML">HyperText Markup Language</a></em> (HTML).</li>
 <li>Un protocole simple pour échanger ces documents, l'<em>HyperText Transfer Protocol </em>(HTTP).</li>
 <li>Un logiciel client pour exposer (et modifier) ces documents, le premier navigateur web nommé <em>WorldWideWeb</em>.</li>
 <li>Un serveur pour garantir l'accès au document, version initiale du <em>httpd</em>.</li>
</ul>

<p>Ces quatre piliers étaient opératoires dès fin 1990, et les premiers serveurs extérieurs au CERN tournaient déjà début 1991. Le 6 août 1991, Tim Berners-Lee écrit un <a href="https://groups.google.com/forum/#!msg/alt.hypertext/eCTkkOoWTAY/urNMgHnS2gYJ">billet</a> sur le groupe de discussion public <em>alt.hypertext</em> : ce billet est dorénavant considéré comme point de départ officiel du World Wide Web en tant que projet public.</p>

<p>Le protocole HTTP utilisé dans ces premières phases était très simple. Plus tard surnommé HTTP/0.9, il était aussi parfois surnommé le protocole <em>une ligne</em> - "the one-line protocol".</p>

<h2 id="HTTP0.9_–_Le_protocole_une_ligne">HTTP/0.9 – Le protocole <em>une ligne</em></h2>

<p>La version initiale de HTTP n'avait pas de numéro de version. Elle fut appelée 0.9 pour la différencier des versions ultérieures. HTTP/0.9 est extrêmement simple : la requête se compose d'une ligne unique et commence par la seule méthode possible {{HTTPMethod("GET")}}, suivie par le chemin pour accéder à la ressource (sans l'URL, puisque ni protocole, serveur ni port ne sont nécessaires quand on est connecté au serveur) :</p>

<pre>GET /monfichier.html</pre>

<p>La réponse est aussi extrêmement simple, il s'agit directement du fichier demandé :</p>

<pre>&lt;HTML&gt;
Une page HTML très simple
&lt;/HTML&gt;</pre>

<p>Contrairement aux évolutions suivantes, il n'y avait pas d'en-tête HTTP. Cela signifie que seuls des fichiers HTML pouvaient être transmis, à l'exclusion de tout autre type de documents. Il n'existait pas de code d'erreur ou d'état : en cas de problème, un fichier HTML particulier, contenant la description du problème rencontré, était renvoyé afin d'être lu par l'utilisateur.</p>

<h2 id="HTTP1.0_–_Mise_en_place_de_lextensibilité">HTTP/1.0 – Mise en place de l'extensibilité</h2>

<p>HTTP/0.9 était très limité. Navigateurs et serveurs l'ont rapidement étendu vers des usages plus polyvalents.</p>

<ul>
 <li>Dans chaque requête figurent dorénavant les informations de version (<code>HTTP/1.0</code> est ajouté à la ligne <code>GET</code>).</li>
 <li>Une ligne de code d'état est aussi envoyée au début de chaque réponse. Elle permet au navigateur de prendre connaissance du succès ou de l'échec de la requête, et de s'adapter en conséquence (avec une mise à jour, par exemple, ou en utilisant son cache local de manière spécifique).</li>
 <li>La notion d'en-tête HTTP a été mise en place à la fois pour les requêtes et pour les réponses. Elle autorise la transmission de métadonnées, et rend le protocole très flexible et extensible.</li>
 <li>Avec ces nouveaux en-têtes HTTP, il est désormais possible de transmettre d'autres documents que des fichiers HTML bruts (grâce à l'en-tête {{HTTPHeader("Content-Type")}}.</li>
</ul>

<p>Une requête typique ressemblait ainsi à :</p>

<pre>GET /pamage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
&lt;HTML&gt;
Une page avec une image
  &lt;IMG SRC="/monimage.gif"&gt;
&lt;/HTML&gt;</pre>

<p>Suivie d'une seconde connexion-requête pour le transfert de l'image :</p>

<pre>GET /monimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
<em>(contenu de l'image)</em></pre>

<p>Ces innovations n'ont pas été mises en place à la suite d'un effort concerté, mais par une approche expérimentale couvrant les années 1991-1995. Un serveur ou un navigateur ajoutaient une fonctionnalité pour voir si elle suscitait l'intérêt escompté. Nombre de problèmes d'interopérabilité relevaient du lot commun. Pour répondre à ces désagréments, un document d'information décrivant les pratiques communes a été publié en novembre 1996, {{RFC(1945)}}. Cela correspondait à la définition de HTTP/1.0. Mais rigoureusement parlant, il convient de noter qu'il ne possède pas l'état de standard officiel.</p>

<h2 id="HTTP1.1_–_Le_protocole_standardisé">HTTP/1.1 – Le protocole standardisé</h2>

<p>Parallèlement aux usages quelque peu chaotiques des différentes applications HTTP/1.0, dès 1995 c'est-à-dire bien avant la publication du document HTTP/1.0 l'année suivante, une standardisation appropriée se trouvait sur les rails. HTTP/1.1, première version standardisée de HTTP, fut publié début 1997, seulement quelques mois après HTTP/1.0.</p>

<p>HTTP/1.1 dissipait des ambiguïtés et introduisait de nombreuses améliorations.</p>

<ul>
 <li>Connexion pouvant être ré-utilisée : économie du temps qu'il faudrait pour en ouvrir plusieurs dans le but de présenter les ressources constituant le document original récupéré.</li>
 <li>Ajout du <em>pipelining</em> : permet d'envoyer une seconde requête avant que la réponse de la première ne soit complètement transmise, diminuant le temps de latence de la communication.</li>
 <li>Désormais les réponses par morceau sont aussi supportées.</li>
 <li>Mise en place de mécanismes de contrôle de caches additionnels.</li>
 <li>Mise en place de la négociation de contenu pour le langage, l'encodage et le type : le client et le serveur peuvent ainsi se mettre d'accord sur le contenu le plus adéquat à échanger.</li>
 <li>Grâce à l'en-tête {{HTTPHeader("Host")}}, la capacité à héberger différents domaines sur la même adresse IP autorise désormais une colocation de serveurs.</li>
</ul>

<p>Une suite typique de requêtes, toutes via la même connexion, ressemble dès lors à ceci :</p>

<pre>GET /fr/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/fr/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

<em>(contenu)</em>


GET /static/img/header-background.png HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/fr/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

<em>(contenu comprenant une image sur 3077 octets)</em></pre>

<p>HTTP/1.1 a été publié pour la première fois en tant que {{rfc(2068)}} en janvier 1997.</p>

<h2 id="Plus_de_quinze_années_dextension">Plus de quinze années d'extension</h2>

<p>Grâce à son extensibilité (création aisée de nouvelles en-têtes et méthodes) et bien que le protocole HTTP/1.1 ait été amélioré par deux révisions - {{RFC("2616")}} publiée en juin 1999, et les séries {{RFC("7230")}}-{{RFC("7235")}} publiées en juin 2014, en prévision de la publication de HTTP/2 - ce protocole s'est montré extrêmement stable pendant plus de quinze ans.</p>

<h3 id="HTTP_pour_des_transmissions_sécurisées">HTTP pour des transmissions sécurisées</h3>

<p>La modification principale du protocole HTTP a été faite vers la fin de l'année 1994. Au lieu d'envoyer HTTP vers une pile TCP/IP basique, Netscape Communication avait ajouté une couche additionnelle de transmission chiffrée : SSL. SSL 1.0 n'est jamais paru en-dehors des entreprises, mais SSL 2.0 et ses successeurs SSL 3.0 et SSL 3.1 ont permis aux sites web e-commerce, grâce au chiffrement, de garantir l'authenticité des messages échangés entre serveur et client. Le SSL a pris place dans les standards internationaux et est finalement devenu TLS. Ses versions 1.0, 1.1 et 1.2 sont apparues pour successivement mettre fin à des vulnérabilités. TLS 1.3 est actuellement en phase d'élaboration.</p>

<p>Dans le même temps, le besoin d'une couche de transport chiffrée s'est avéré de plus en plus nécessaire. Le Web avait perdu de la fiabilité relative d'un réseau principalement académique, pour devenir une jungle où publicitaires, individus problématiques aussi bien que criminels, rivalisent pour obtenir le maximum de données privées concernant les utilisateurs, tenter d'usurper leur identité, et même de remplacer les données transmises par des données altérées. Alors que les applications créées avec HTTP gagnaient en puissance, accédant à un nombre croissant de données privées - telles que listes de contacts, e-mail ou position géographique de l'utilisateur - le besoin d'obtenir TLS est devenu omniprésent, au-delà même des cas d'e-commerce.</p>

<h3 id="Utilisation_de_HTTP_dans_des_applications_complexes">Utilisation de HTTP dans des applications complexes</h3>

<p>La vision initiale du Web de Tim Berners-Lee ne se limitait pas uniquement à consulter des pages. Il imaginait un Web où tout un chacun pourrait ajouter et déplacer des documents à distance tel un système de fichiers distribué. Aux environs de 1996, HTTP a été étendu pour permettre l'édition. Un standard, appelé WebDAV fût alors créé. Il fut ensuite étendu à des applications spécifiques telles CardDAV pour gérer un répertoire d'adresses ou CalDAV pour gérer des calendriers. Toutes ces extensions se finissant par DAV avait une faiblesse : elles devaient être implémentées par le serveur pour pouvoir fonctionner, ce qui ne coulait pas de source. Leur utilisation au sein du Web est restée minimale.</p>

<p>En 2000, un nouveau modèle pour utiliser HTTP fût conçu : {{glossary("REST", "representational state transfer")}} (ou REST). Les actions induites par l'API n'étaient plus transmises par de nouvelles extensions de HTTP mais uniquement en accédant à des URIs à l'aides des méthodes HTTP/1.1 de base. Cela permettait à toute application web de fournir une API à partir de laquelle on autorisait la lecture ou l'écriture des données sans avoir à mettre à jour son serveur ou son navigateur web : tout ce dont on avait besoin était présent dans les fichiers transmis via les méthodes HTTP/1.1. L'inconvénient de l'approche REST étant que chaque site web définit son API REST non-standard et exerce un contrôle total à l'inverse des extensions *DAV ou les clients et les serveurs étaient interopérables. Les API REST sont devenues omniprésentes dans les années 2010.</p>

<p>Depuis 2005, le nombre d'APIs ouvertes sur des pages a énormément augmenté. Certaines APIs ont d'ailleurs étendu HTTP via des en-têtes HTTP spécifiques afin de répondre à des besoins particuliers tels que:</p>

<ul>
 <li><a href="/fr/docs/Web/API/Server-sent_events">Évènements générés par le serveur</a>, le serveur peut éventuellement pousser des messages au navigateur.</li>
 <li><a href="/fr/docs/Web/API/WebSocket_API">WebSocket</a>, un nouveau protocole qui peut être utilisé en passant à une version récente de HTTP.</li>
</ul>

<h3 id="Relâcher_les_contraintes_du_modèle_de_sécurité_du_Web">Relâcher les contraintes du modèle de sécurité du Web</h3>

<p>HTTP est indépendant du modèle de sécurité du Web, principalement créé via la <em><a href="/fr/docs/Web/Security/Same-origin_policy">same-origin policy</a></em>. En réalité le modèle de sécurité du Web s'est développé après la création de HTTP. D'années en années, il s'est avéré utile de devenir plus tolérant en termes d'origine de contenu, en supprimant certaines restrictions, sous certaines conditions. L'étendue des restrictions levées ainsi que l'application est transmise au client à l'aide d'en-têtes HTTP. Ces en-têtes sont définis au travers des spécifications <a href="/fr/docs/Glossary/CORS">Cross-Origin Resource Sharing</a> (CORS) ou <a href="/fr/docs/Web/Security/CSP">Content Security Policy</a> (CSP).</p>

<p>D'autres extensions de HTTP sont apparues, parfois de manière expérimentale. On mentionnera par exemple les en-têtes connus tels : Do Not Track (Ne pas me pister) ({{HTTPHeader("DNT")}}) permettant de contrôler la vie privée, {{HTTPHeader("X-Frame-Options")}}, ou {{HTTPHeader('Upgrade-Insecure-Requests')}} même s'il en existe beaucoup d'autres.</p>

<h2 id="HTTP2_–_Un_protocole_pour_plus_de_performances">HTTP/2 – Un protocole pour plus de performances</h2>

<p>Au fur et à mesure, les pages web sont devenues de plus en plus complexes quitte à devenir des applications à part entière. La quantité de contenu multimédia ainsi que le nombre de scripts permettant plus d'interactivité ont aussi augmenté, ainsi de plus en plus de données sont transférées via des requêtes HTTP. Les connexions HTTP/1.1 nécessite un ordre séquentiel pour être correctement gérées. En théorie, il est possible d'utiliser plusieurs connexions en parallèle (généralement entre 5 et 8), néanmoins, cela implique beaucoup d'adaptation et apporte énormément de complexité. Ainsi, le <em>pipelining</em> HTTP s'est révélé être un fardeau dans le monde du développement web.</p>

<p>Dans la première moitié des années 2010, Google a montré qu'il était possible d'utiliser une manière différente de communication entre un serveur et un navigateur, ce protocole expérimental porte le nom de SPDY. Cela a intéressé bon nombre de développeurs, que ce soit au niveau des serveurs ou des navigateurs. En augmentant la réactivité et en éliminant la duplication des données transmises, SPDY posa les bases du protocole HTTP/2.</p>

<p>Le protocole HTTP/2 diffère de HTTP/1.1 sur plusieurs aspects:</p>

<ul>
 <li>Il est encodé en binaire plutôt qu'en texte. Il ne peut donc plus être lu ou écrit à la main. Malgré cette difficulté, il est désormais possible d'implémenter des techniques d'optimisation avancée.</li>
 <li>C'est un protocole multiplexé. Plusieurs requêtes en parallèle peuvent être gérées au sein de la même connexion, supprimant ainsi la limitation séquentielle de HTTP/1.x.</li>
 <li>HTTP/2 compresse les en-têtes, étant donné que des en-têtes similaires sont échangés lors d'une suite de requêtes, on supprime ainsi la duplication et l'échange inutiles des données similaires.</li>
 <li>Il permet au serveur de remplir le cache du client avant qu'il ne soit demandé par ce dernier, on parle alors d'évènements générés par le serveur.</li>
</ul>

<p>Devenu un standard officiel en mai 2015, HTTP/2 a rencontré un large succès. En janvier 2018, 23.9% des sites web utilisent HTTP/2 (8.7% en 2016) (<a href="https://w3techs.com/technologies/details/ce-http2/all/all">source</a>). Ce qui représentait en 2015 plus de 68% des requêtes (<a href="https://www.keycdn.com/blog/http2-statistics/">source</a>). Les sites web générant beaucoup de trafic montre un taux d'adoption très rapide, ce qui s'explique par le gain de bande passante et les économies ainsi générées.</p>

<p>Cette adoption fulgurante de HTTP/2 s'explique probablement par le fait que cette nouvelle version ne nécessite pas de mise à jour des sites web et des applications, l'utilisation de HTTP/1.x ou HTTP/2 étant transparente. Il suffit qu'un serveur à jour et un navigateur moderne communiquent pour que cela fonctionne. La traction générée par les premiers utilisateurs ainsi que le renouvellement des serveurs devenant obsolètes entraînent la croissance de HTTP/2 sans que cela requiert des efforts supplémentaires.</p>

<h2 id="Après_HTTP2">Après HTTP/2</h2>

<p>HTTP n'a pas cessé d'évoluer depuis la parution de HTTP/2, de la même manière que pour HTTP/1.x, la modularité de HTTP permet toujours de lui ajouter de nouvelles fonctionnalités. Il est ainsi possible de mentionner les en-têtes suivants apparus en 2016 :</p>

<ul>
 <li>Prise en charge de {{HTTPHeader("Alt-Svc")}} qui permet de dissocier l'identification d'une ressource de son emplacement, permettant une optimisation du cache {{Glossary("CDN")}}.</li>
 <li>L'apparition de {{HTTPHeader("Client-Hints")}} qui permet au navigateur ou client de transmettre directement au serveur des informations relatives à ses contraintes matérielles propres.</li>
 <li>L'apparition de préfixes liés à la sécurité dans l'en-tête {{HTTPHeader("Cookie")}} permet désormais de s'assurer qu'un cookie sécurisé n'a pas été modifié</li>
</ul>

<p>Cette évolution de HTTP montre sa modularité ainsi que sa simplicité, permettant la création d'applications et l'adoption du protocole. L'environnement au sein duquel HTTP évolue à l'heure actuelle est sensiblement différent de celui dans lequel il a été créé au début des années 1990. La conception de HTTP s'avère aujourd'hui être un véritable chef-d’œuvre, elle a permis au Web d'évoluer sur un quart de siècle sans créer de scissions. En corrigeant les failles et en continuant à supporter le caractère extensible du protocole, HTTP/2 laisse présager d'un avenir brillant pour ce protocole.</p>
</div>
</div>
