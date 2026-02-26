---
title: L'évolution du protocole HTTP
slug: Web/HTTP/Guides/Evolution_of_HTTP
original_slug: Web/HTTP/Evolution_of_HTTP
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP** (<i lang="en">HyperText Transfer Protocol</i>) est le protocole sous-jacent du World Wide Web. Développé par Tim Berners-Lee et son équipe entre 1989 et 1991, HTTP a connu de nombreuses évolutions qui ont permis de préserver sa simplicité tout en façonnant sa flexibilité. Découvrez comment HTTP est passé d'un protocole conçu pour échanger des fichiers dans un environnement de laboratoire semi-fiable à un labyrinthe moderne d'internet transportant des images et des vidéos en haute résolution et en 3D.

## Invention du World Wide Web

En 1989, alors qu'il travaillait au <abbr title="Centre Européen de Recherche Nucléaire">CERN</abbr>, Tim Berners-Lee rédige une proposition pour construire un système hypertexte sur Internet. Initialement appelé <i lang="en">Mesh</i>, il fut renommé <i lang="en">World Wide Web</i> lors de sa mise en œuvre en 1990. Construit sur les protocoles <abbr title="Transmission Control Protocol">TCP</abbr> et <abbr title="Internet Protocol">IP</abbr> existants, il reposait sur 4 éléments&nbsp;:

- Un format textuel pour représenter les documents hypertexte, le _[HyperText Markup Language](/fr/docs/Web/HTML)_ (HTML).
- Un protocole pour échanger ces documents, le _HyperText Transfer Protocol_ (HTTP).
- Un client pour afficher (et éditer) ces documents, le premier navigateur web appelé _WorldWideWeb_.
- Un serveur pour donner accès au document, une version précoce de _httpd_.

Ces quatre éléments étaient finalisés fin 1990, et les premiers serveurs fonctionnaient en dehors du CERN début 1991. Le 6 août 1991, Tim Berners-Lee [publie <sup>(angl.)</sup>](https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt) un message sur le groupe de discussion public _alt.hypertext_. Cet événement est aujourd'hui considéré comme le lancement officiel du World Wide Web en tant que projet public.

Le protocole HTTP utilisé à cette époque était très simple. Il fut plus tard nommé HTTP/0.9 et est parfois appelé le protocole en une ligne.

## HTTP/0.9 - Le protocole en _une ligne_

La version initiale de HTTP ne comportait pas de numéro de version&nbsp;; elle fut ensuite appelée 0.9 pour la différencier des versions ultérieures. HTTP/0.9 était extrêmement simple&nbsp;: les requêtes consistaient en une seule ligne et commençaient par la seule méthode possible {{HTTPMethod("GET")}} suivie du chemin vers la ressource. L'URL complète n'était pas incluse car le protocole, le serveur et le port n'étaient pas nécessaires une fois connecté au serveur.

```http
GET /ma-page.html
```

La réponse était elle aussi très simple&nbsp;: elle ne contenait que le fichier lui-même.

```html
<html>
  Une page web uniquement textuelle
</html>
```

Contrairement aux évolutions suivantes, il n'y avait pas d'en-têtes HTTP. Cela signifiait que seuls les fichiers HTML pouvaient être transmis. Il n'y avait pas de codes d'état ou d'erreur. En cas de problème, un fichier HTML spécifique était généré et incluait une description du problème à destination des humain·e·s.

## HTTP/1.0 - Vers l'extensibilité

HTTP/0.9 était très limité, mais les navigateurs et serveurs l'ont rapidement rendu plus polyvalent&nbsp;:

- Les informations de version étaient envoyées dans chaque requête (`HTTP/1.0` était ajouté à la ligne `GET`).
- Une ligne de code d'état était également envoyée au début d'une réponse. Cela permettait au navigateur de reconnaître le succès ou l'échec d'une requête et d'adapter son comportement en conséquence. Par exemple, mettre à jour ou utiliser son cache local d'une manière spécifique.
- Le concept d'en-têtes HTTP a été introduit pour les requêtes et les réponses. Les métadonnées pouvaient être transmises et le protocole est devenu extrêmement flexible et extensible.
- Des documents autres que des fichiers HTML simples pouvaient être transmis grâce à l'en-tête {{HTTPHeader("Content-Type")}}.

À cette époque, une requête et une réponse typiques ressemblaient à ceci&nbsp;:

```http
GET /ma-page.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
Une page avec une image
  <IMG SRC="/mon-image.gif">
</HTML>
```

Elle était suivie d'une seconde connexion et d'une requête pour récupérer l'image (avec la réponse correspondante)&nbsp;:

```http
GET /mon-image.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

HTTP/1.0 200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
(contenu de l'image)
```

Entre 1991 et 1995, ces évolutions ont été introduites de façon empirique. Un serveur et un navigateur ajoutaient une fonctionnalité et observaient si elle était adoptée. Les problèmes d'interopérabilité étaient fréquents. Pour résoudre ces problèmes, un document informatif décrivant les pratiques courantes fut publié en novembre 1996. Il s'agit du {{RFC(1945)}}, qui définit HTTP/1.0.

## HTTP/1.1 - Le protocole standardisé

Pendant ce temps, une véritable standardisation était en cours, en parallèle des différentes implémentations de HTTP/1.0. La première version standardisée de HTTP, HTTP/1.1, fut publiée début 1997, seulement quelques mois après HTTP/1.0.

HTTP/1.1 clarifie les ambiguïtés et introduit de nombreuses améliorations&nbsp;:

- Une connexion pouvait être réutilisée, ce qui permettait de gagner du temps. Il n'était plus nécessaire de l'ouvrir plusieurs fois pour afficher les ressources intégrées dans le document d'origine.
- Le pipelining a été ajouté. Cela permettait d'envoyer une seconde requête avant que la réponse à la première ne soit entièrement transmise. Cela réduisait la latence de la communication.
- Les réponses fragmentées («&nbsp;chunked&nbsp;») étaient également prises en charge.
- Des mécanismes supplémentaires de contrôle du cache ont été introduits.
- La négociation de contenu, incluant la langue, l'encodage et le type, a été introduite. Un client et un serveur pouvaient désormais s'accorder sur le contenu à échanger.
- Grâce à l'en-tête {{HTTPHeader("Host")}}, la possibilité d'héberger différents domaines sur la même adresse IP a permis la colocation de serveurs.

L'exemple suivant illustre une séquence typique de requêtes HTTP/1.1 envoyées sur une seule connexion TCP persistante, montrant comment les clients peuvent réutiliser les connexions pour charger les ressources plus efficacement.
La première requête récupère une page web, et le serveur répond avec un document HTML.
Le client envoie ensuite d'autres requêtes séquentiellement au fur et à mesure qu'il rencontre des ressources CSS et JavaScript dans le HTML&nbsp;:

```http
GET /fr/docs/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:141.0) Gecko/20100101 Firefox/141.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: fr-FR,fr;q=0.5
Accept-Encoding: gzip, deflate, br, zstd
Connection: keep-alive

HTTP/1.1 200 OK
accept-ranges: none
content-encoding: br
date: Tue, 01 Jul 2025 08:32:50 GMT
expires: Tue, 01 Jul 2025 09:26:50 GMT
cache-control: public, max-age=3600
age: 1926
last-modified: Sat, 28 Jun 2025 00:47:12 GMT
etag: W/"b55394ed2f274eea5d528cf6c91e1dcf"
content-type: text/html
vary: Accept-Encoding
content-length: 26178

[26178 octets de HTML]

GET /static/css/main.9e7d1ce5.css HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:141.0) Gecko/20100101 Firefox/141.0
Accept: text/css,*/*;q=0.1
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br, zstd

HTTP/1.1 200 OK
content-encoding: br
content-length: 43694
date: Mon, 30 Jun 2025 21:13:12 GMT
expires: Mon, 30 Jun 2025 21:47:29 GMT
cache-control: public, max-age=31536000
age: 42704
last-modified: Mon, 30 Jun 2025 00:33:45 GMT
etag: W/"d4f4d0955482844ad842986a9bcb7e8a"
content-type: text/css
vary: Accept-Encoding

[43694 octets de CSS]

GET /static/js/main.a918a4e7.js HTTP/1.1
Host: developer.mozilla.org
```

L'établissement d'une connexion TCP est une étape coûteuse dans l'échange client-serveur, et la {{glossary("TCP slow start")}} implique que les connexions de longue durée sont plus rapides que les connexions nouvellement créées.
HTTP/1.1 permet de réutiliser une connexion TCP pour plusieurs requêtes et réponses, évitant ainsi de devoir créer une nouvelle connexion pour chaque requête.
Cependant, les clients devaient toujours attendre que chaque ressource soit téléchargée avant de demander la suivante ({{glossary("Head_of_line_blocking", "blocage en tête de ligne")}}).
Pour contourner cela, la plupart des navigateurs autorisent jusqu'à six connexions TCP par site web (ou {{glossary("origin", "origine")}}).
Avec six connexions parallèles, les navigateurs peuvent récupérer plusieurs ressources simultanément selon le modèle HTTP/1.1, ce qui a permis d'importantes améliorations de performance.

HTTP/1.1 a été publié pour la première fois sous {{rfc(2068)}} en janvier 1997.

## Plus de deux décennies de développement

L'extensibilité de HTTP a facilité la création de nouveaux en-têtes et méthodes. Même si le protocole HTTP/1.1 a été affiné lors de deux révisions, {{RFC("2616")}} publié en juin 1999 et {{RFC("7230")}}-{{RFC("7235")}} publié en juin 2014 avant la sortie de HTTP/2, il est resté extrêmement stable pendant plus de 15 ans. HTTP/1.1 a de nouveau été mis à jour en 2022 avec le {{RFC("9110")}}. Non seulement HTTP/1.1 a été mis à jour, mais l'ensemble de HTTP a été révisé et est désormais réparti dans les documents suivants&nbsp;: sémantique ({{RFC("9110")}}), mise en cache ({{RFC("9111")}}) applicables à toutes les versions de HTTP, et HTTP/1.1 ({{RFC("9112")}}), HTTP/2 ({{RFC("9113")}}), et HTTP/3 ({{RFC("9114")}}). De plus, la spécification a enfin obtenu le statut de Standard Internet (STD 97), alors qu'auparavant elle n'était qu'un standard proposé ou en brouillon.

### Utiliser HTTP pour des transmissions sécurisées

Le plus grand changement apporté à HTTP a eu lieu fin 1994. Au lieu d'envoyer HTTP sur une simple pile TCP/IP, la société Netscape Communications a créé une couche de transmission chiffrée supplémentaire&nbsp;: SSL. SSL 1.0 n'a jamais été publié, mais SSL 2.0 et son successeur SSL 3.0 ont permis la création de sites de commerce électronique. Pour cela, ils chiffraient et garantissaient l'authenticité des messages échangés entre le serveur et le client. SSL a finalement été standardisé et est devenu TLS.

À la même période, il est devenu évident qu'une couche de transport chiffrée était nécessaire. Le web n'était plus un réseau principalement académique, mais était devenu une jungle où publicitaires, individus et criminel·le·s rivalisaient pour obtenir un maximum de données privées. À mesure que les applications construites sur HTTP devenaient plus puissantes et nécessitaient l'accès à des informations privées comme les carnets d'adresses, les courriels et la localisation des utilisateur·ice·s, TLS est devenu indispensable au-delà du seul cas du commerce électronique.

### Utiliser HTTP pour des applications complexes

Tim Berners-Lee n'imaginait pas à l'origine HTTP comme un média en lecture seule. Il souhaitait créer un web où chacun·e pourrait ajouter et déplacer des documents à distance&nbsp;: une sorte de système de fichiers distribué. Vers 1996, HTTP a été étendu pour permettre l'édition, et une norme appelée WebDAV a été créée. Elle s'est enrichie d'applications spécifiques comme CardDAV pour la gestion des carnets d'adresses et CalDAV pour les calendriers. Mais toutes ces extensions \*DAV avaient un défaut&nbsp;: elles n'étaient utilisables que si elles étaient implémentées par les serveurs.

En 2000, un nouveau modèle d'utilisation de HTTP a été conçu&nbsp;: {{glossary("REST", "transfert de représentation d'état")}} (ou REST). L'API ne reposait pas sur de nouvelles méthodes HTTP, mais sur l'accès à des URI spécifiques avec les méthodes HTTP/1.1 de base. Cela permettait à toute application web de proposer une API pour récupérer et modifier ses données sans avoir à mettre à jour les navigateurs ou les serveurs. Toutes les informations nécessaires étaient intégrées dans les fichiers servis via HTTP/1.1 standard. L'inconvénient du modèle REST était que chaque site définissait sa propre API REST non standard et en avait le contrôle total. Cela différait des extensions \*DAV où clients et serveurs étaient interopérables. Les API REST sont devenues très courantes dans les années 2010.

Depuis 2005, davantage d'API sont disponibles pour les pages web. Plusieurs de ces API créent des extensions du protocole HTTP pour des usages spécifiques&nbsp;:

- [Événements envoyés par le serveur](/fr/docs/Web/API/Server-sent_events), où le serveur peut envoyer occasionnellement des messages au navigateur.
- [WebSocket](/fr/docs/Web/API/WebSockets_API), un nouveau protocole pouvant être établi en mettant à niveau une connexion HTTP existante.

### Assouplir le modèle de sécurité du web

HTTP est indépendant du modèle de sécurité du web, connu sous le nom de [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy). En réalité, le modèle de sécurité actuel du web a été développé après la création de HTTP&nbsp;! Au fil des années, il s'est avéré utile d'assouplir certaines restrictions de cette politique sous certaines conditions. Le serveur transmettait au client, via de nouveaux en-têtes HTTP, dans quelle mesure et à quel moment lever ces restrictions. Ces en-têtes ont été définis dans des spécifications comme [Cross-Origin Resource Sharing](/fr/docs/Glossary/CORS) (CORS) et la [Content Security Policy](/fr/docs/Web/HTTP/Guides/CSP) (CSP).

En plus de ces grandes extensions, de nombreux autres en-têtes ont été ajoutés, parfois uniquement à titre expérimental. Parmi les en-têtes notables, on trouve Do Not Track ({{HTTPHeader("DNT")}}) pour contrôler la vie privée, {{HTTPHeader("X-Frame-Options")}}, et {{HTTPHeader('Upgrade-Insecure-Requests')}} mais il en existe bien d'autres.

## HTTP/2 - Un protocole pour de meilleures performances

Au fil des années, les pages web sont devenues plus complexes. Certaines sont même devenues de véritables applications. Plus de médias visuels étaient affichés et le volume ainsi que la taille des scripts ajoutant de l'interactivité ont aussi augmenté. Beaucoup plus de données étaient transmises via un nombre bien plus important de requêtes HTTP, ce qui a accru la complexité et la surcharge des connexions HTTP/1.1. Pour y remédier, Google a mis en œuvre un protocole expérimental, SPDY, au début des années 2010. Cette nouvelle façon d'échanger des données entre client et serveur a suscité l'intérêt des développeur·euse·s travaillant sur les navigateurs et les serveurs. SPDY a permis d'augmenter la réactivité et de résoudre le problème de la transmission de données en double, servant ainsi de base au protocole HTTP/2.

Le protocole HTTP/2 diffère de HTTP/1.1 sur plusieurs points&nbsp;:

- C'est un protocole binaire et non textuel. Il ne peut pas être lu ou créé manuellement. Malgré cette contrainte, il permet la mise en œuvre de techniques d'optimisation avancées.
- C'est un protocole multiplexé. Des requêtes parallèles peuvent être effectuées sur la même connexion, supprimant les contraintes du protocole HTTP/1.x.
- Il compresse les en-têtes. Ceux-ci étant souvent similaires entre plusieurs requêtes, cela supprime la duplication et la surcharge des données transmises.

Officiellement standardisé en mai 2015, l'utilisation de HTTP/2 a atteint un pic en janvier 2022 avec 46,9&nbsp;% de tous les sites web (voir [ces statistiques <sup>(angl.)</sup>](https://w3techs.com/technologies/details/ce-http2)). Les sites à fort trafic ont adopté le plus rapidement HTTP/2 afin de réduire la surcharge de transfert de données et les coûts associés.

Cette adoption rapide s'explique probablement par le fait que HTTP/2 ne nécessitait pas de modifications des sites et applications. Pour l'utiliser, il suffisait d'un serveur à jour communiquant avec un navigateur récent. Seul un nombre limité de groupes était nécessaire pour déclencher l'adoption, et à mesure que les anciennes versions de navigateurs et serveurs étaient remplacées, l'utilisation augmentait naturellement, sans effort significatif pour les développeur·euse·s web.

## Après HTTP/2

L'extensibilité de HTTP continue de permettre l'ajout de nouvelles fonctionnalités. On peut notamment citer de nouvelles extensions du protocole HTTP apparues en 2016&nbsp;:

- La prise en charge de {{HTTPHeader("Alt-Svc")}} a permis de dissocier l'identification et la localisation d'une ressource donnée. Cela a permis un mécanisme de cache {{Glossary("CDN")}} plus intelligent.
- L'introduction des [indications client](/fr/docs/Web/HTTP/Guides/Client_hints) a permis au navigateur ou au client de communiquer de manière proactive ses besoins et contraintes matérielles au serveur.
- L'introduction de préfixes liés à la sécurité dans l'en-tête {{HTTPHeader("Cookie")}} a permis de garantir que les cookies sécurisés ne pouvaient pas être modifiés.

## HTTP/3 - HTTP sur QUIC

La prochaine version majeure de HTTP, HTTP/3, conserve la même sémantique que les versions précédentes mais utilise {{Glossary("QUIC")}} au lieu de {{Glossary("TCP")}} pour la couche de transport. En octobre 2022, [26&nbsp;% de tous les sites web utilisaient HTTP/3 <sup>(angl.)</sup>](https://w3techs.com/technologies/details/ce-http3).

QUIC est conçu pour offrir une latence bien plus faible pour les connexions HTTP. Comme HTTP/2, c'est un protocole multiplexé, mais HTTP/2 fonctionne sur une seule connexion TCP, de sorte que la détection de perte de paquets et la retransmission gérées au niveau TCP peuvent bloquer tous les flux. QUIC fait transiter plusieurs flux sur {{Glossary("UDP")}} et gère la détection de perte de paquets et la retransmission indépendamment pour chaque flux, de sorte qu'en cas d'erreur, seul le flux contenant les données du paquet concerné est bloqué.

Défini dans le {{RFC("9114")}}, [HTTP/3 est pris en charge par la plupart des principaux navigateurs <sup>(angl.)</sup>](https://caniuse.com/http3) dont Chromium (et ses variantes comme Chrome et Edge) et Firefox.

## Voir aussi

- [Gestion des connexions dans HTTP/1.x](/fr/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Mécanisme de mise à niveau du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [Ressources et spécifications HTTP](/fr/docs/Web/HTTP/Reference/Resources_and_specifications)
- Termes du glossaire&nbsp;:
  - {{glossary('HTTP')}}
  - {{glossary('HTTP_2', 'HTTP/2')}}
  - {{glossary('QUIC')}}
  - {{glossary('Round Trip Time', 'Temps aller-retour (RTT)')}}
  - {{glossary('TCP slow start', 'Démarrage lent TCP')}}
  - {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
