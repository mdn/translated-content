---
title: HTTP
slug: Web/HTTP
translation_of: Web/HTTP
---
{{HTTPSidebar}}

**_<i lang="en">Hypertext Transfer Protocol</i> (HTTP) (ou protocole de transfert hypertexte en français)_** est un protocole de [la couche application](https://fr.wikipedia.org/wiki/Couche_application) servant à transmettre des documents hypermédias, comme HTML. Il a été conçu la communication entre les navigateurs web et les serveurs web mais peut également être utilisé à d'autres fins. Il suit le modèle classique [client-serveur](https://fr.wikipedia.org/wiki/Client-serveur) : un client ouvre une connexion, effectue une requête et attend jusqu'à recevoir une réponse. Il s'agit aussi d'un [protocole sans état](https://fr.wikipedia.org/wiki/Protocole_sans_%C3%A9tat), ce qui signifie que le serveur ne conserve aucune donnée (on parle d'état) entre deux requêtes.

## Tutoriels

Apprenez comment utiliser HTTP avec des guides et des tutoriels.

- [Aperçu du protocole HTTP](/fr/docs/Web/HTTP/Overview)
  - : Les fonctionnalités de base de ce protocole client-serveur : ce qui est permis par HTTP ainsi que le cadre d'utilisation de ce protocole.
- [Mise en cache avec HTTP](/fr/docs/Web/HTTP/Caching)
  - : La mise en cache est critique pour permettre aux sites web d'être rapides. Cet article décrit les différentes méthodes de mise en cache et l'utilisation des en-têtes HTTP afin de contrôler le cache.
- [Cookies HTTP](/fr/docs/Web/HTTP/Cookies)
  - : Le fonctionnement des cookies est décrit dans la [RFC 6265](https://tools.ietf.org/html/rfc6265). Lorsqu'un serveur répond à une requête HTTP, ce dernier peut envoyer un en-tête `Set-Cookie` avec la réponse. Le client retourne alors la valeur du cookie lors de chaque requête vers ce serveur via un en-tête `Cookie` dans la requête. Le cookie peut posséder une date d'expiration, être restreint à un domaine spécifique ou à un chemin d'accès donné.
- [<i lang="en">Cross-Origin Resource Sharing</i> (CORS ou partage des ressources entre différentes origines)](/fr/docs/Web/HTTP/CORS)
  - : **Les requêtes HTTP cross-sites** sont des requêtes HTTP pour des ressources situées dans un **domaine différent** de celui dans lequel se situe la ressource qui effectue la requête. Par exemple, une page HTML d'un domaine A (`http://domainea.example/`) effectue une requête pour une image au sein du domaine B (`http://domaineb.foo/image.jpg`) à l'aide de la balise `img`. Les pages web actuelles effectuent souvent des requêtes cross-sites pour charger des éléments comme des feuilles de style CSS, des images, des scripts ou d'autres ressources. CORS permet aux développeuses et développeurs web de contrôler la façon dont leur site doit se comporter lorsqu'il reçoit des requêtes d'une autre origine.
- [Évolution du protocole HTTP](/fr/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Une brève description des changements qui ont eu lieu entre les toutes premières versions de HTTP, HTTP/2, HTTP/3 plus récent voire au-delà.
- [Guide de sécurité Mozilla pour le Web](https://wiki.mozilla.org/Security/Guidelines/Web_Security)
  - : Une liste d'astuces visant à aider les équipes opérationnelles afin de créer des applications web mieux sécurisées (en anglais).
- [Les messages HTTP](/fr/docs/Web/HTTP/Messages)
  - : Une description des types et structures de chaque message pour HTTP/1.x et HTTP/2.
- [Une session HTTP classique](/fr/docs/Web/HTTP/Session)
  - : Un exemple et l'explication du déroulement d'une session HTTP classique.
- [Gestion des connexions en HTTP/1.x](/fr/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Un aperçu des trois modèles de gestion de connexion disponibles pour HTTP/1.x ainsi que leurs forces et faiblesses respectives.

## Référence

Naviguez dans la documentation détaillée de HTTP.

- [En-têtes HTTP](/fr/docs/Web/HTTP/Headers)
  - : Les messages d'en-tête HTTP sont utilisés pour décrire précisément la ressource ou le comportement du client ou du serveur. Un en-tête propriétaire sur mesure peut être ajouté en utilisant le préfixe `X-` ; d'autres en-têtes sont disponibles dans le [registre de l'IANA](https://www.iana.org/assignments/message-headers/perm-headers.html), dont le contenu original a été défini dans la [RFC 4229](https://tools.ietf.org/html/rfc4229). L'IANA maintient aussi un [registre des nouveaux messages d'en-tête HTTP qui sont proposés](https://www.iana.org/assignments/message-headers/prov-headers.html).
- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Methods)
  - : Différentes opérations peuvent être effectuées avec HTTP : les plus connues [`GET`](/fr/docs/Web/HTTP/Methods/GET), [`POST`](/fr/docs/Web/HTTP/Methods/POST), mais aussi des requêtes comme [`OPTIONS`](/fr/docs/Web/HTTP/Methods/OPTIONS), [`DELETE`](/fr/docs/Web/HTTP/Methods/DELETE) ou [`TRACE`](/fr/docs/Web/HTTP/Methods/TRACE).
- [Codes de réponse HTTP](/fr/docs/Web/HTTP/Response_codes)
  - : Les codes de réponses HTTP indiquent si une requête HTTP a été effectuée avec succès. Les réponses sont regroupées en cinq classes : les réponses informationnelles, les réponses de succès, les redirections, les erreurs client et les erreurs serveur.
- [Directives CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Les champs de l'en-tête de réponse [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) permettent aux administrateurs de contrôler les ressources accessibles pour un agent utilisateur au sein d'une page donnée. De manière générale, il s'agit de directives relatives à l'origine du serveur ainsi qu'aux points de terminaison des scripts.

## Outils et ressources

Outils utiles pour comprendre et déboguer HTTP.

- [Les outils de développement de Firefox](/fr/docs/Tools)
  - : [Moniteur réseau](/fr/docs/Tools/Network_Monitor)
- [Mozilla Observatory](https://observatory.mozilla.org/)
  - : Un projet conçu pour aider les développeuses et développeurs, les administratrices et administrateurs système ainsi que les professionnels de la sécurité à configurer leur site de manière sûre et sécurisée.
- [RedBot](https://redbot.org/)
  - : Des outils pour vérifier vos en-têtes liés à la gestion du cache.
- [How Browsers Work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
  - : Un article détaillé sur le fonctionnement d'un navigateur et l'organisation des requêtes HTTP durant la navigation.
