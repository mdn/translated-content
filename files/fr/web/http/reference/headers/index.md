---
title: En-têtes HTTP
slug: Web/HTTP/Reference/Headers
original_slug: Web/HTTP/Headers
l10n:
  sourceCommit: 53b19adf7936b1830f407813c3252b35c5eb925e
---

Les **en-têtes HTTP** permettent au client et au serveur de transmettre des informations supplémentaires avec la requête ou la réponse. Un en-tête est constitué de son nom (insensible à la casse) suivi d'un deux-points `:`, puis de sa valeur. Les espaces avant la valeur sont ignorés.

Des en-têtes propriétaires personnalisés peuvent être ajoutés en utilisant le préfixe `X-`, mais cette convention a été dépréciée en juin 2012, en raison des inconvénients qu'elle a présentés lorsque des champs non standard sont devenus standard dans [RFC 6648](https://tools.ietf.org/html/rfc6648)&nbsp;; les autres en-têtes possibles sont listés dans une [liste IANA](https://www.iana.org/assignments/message-headers/message-headers.xhtml) et ont été définis dans la [RFC 4229](https://tools.ietf.org/html/rfc4229). IANA maintient également une [liste des propositions de nouveaux en-têtes HTTP](https://www.iana.org/assignments/message-headers/message-headers.xhtml).

Les en-têtes peuvent être groupés selon leur contexte&nbsp;:

- [Les en-têtes de requête](/fr/docs/Glossary/Request_header)
  - : Contiennent des informations additionnelles à propos de la ressource à récupérer ou à propos du client qui la demande.
- [Les en-têtes de réponse](/fr/docs/Glossary/Response_header)
  - : Contiennent des informations supplémentaires au sujet de la réponse (par exemple son emplacement), ou au sujet du serveur qui la fournit.
- [Les en-têtes de représentation](/fr/docs/Glossary/Representation_header)
  - : Contiennent des informations à propos du corps de la ressource, comme son [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types), ou le type de compression ou d'encodage appliqué.
- [Les en-têtes de charge utile (<i lang="en">payload headers</i>)](/fr/docs/Glossary/Payload_header)
  - : Contiennent des informations indépendantes de la représentation sur la charge utile, comme la longueur du contenu ou l'encodage utilisé pour le transport.

Les en-têtes peuvent aussi être groupés selon comment ils sont traités par [les serveurs mandataires (<i lang="en">proxies</i>)](/fr/docs/Glossary/Proxy_server)&nbsp;:

- En-têtes de bout en bout (<i lang="en">end-to-end headers</i>)
  - : Ces en-têtes doivent être transmis au destinataire final du message&nbsp;; c'est-à-dire le serveur dans le cas d'une requête ou le client dans le cas d'une réponse. Les serveurs mandataires intermédiaires doivent retransmettre les en-têtes de bout en bout sans modification et doivent les mettre en cache.
- En-têtes de point à point (<i lang="en">hop-by-hop headers</i>)
  - : Ces en-têtes n'ont de sens que pour une unique connexion de la [couche transport](https://fr.wikipedia.org/wiki/Couche_transport) et ne doivent pas être retransmis par des serveurs mandataires ou mis en cache. Seuls des en-têtes point à point peuvent être définis avec l'en-tête [`Connection`](/fr/docs/Web/HTTP/Reference/Headers/Connection).

## Authentification

- [`WWW-Authenticate`](/fr/docs/Web/HTTP/Reference/Headers/WWW-Authenticate)
  - : Définit la méthode d'authentification qui doit être utilisée pour obtenir l'accès à la ressource.
- [`Authorization`](/fr/docs/Web/HTTP/Reference/Headers/Authorization)
  - : Contient les informations d'authentification pour authentifier un agent utilisateur avec un serveur.
- [`Proxy-Authenticate`](/fr/docs/Web/HTTP/Headers/Proxy-Authenticate)
  - : Définit la méthode d'authentification qui doit être utilisée pour obtenir la ressource derrière un serveur mandataire.
- [`Proxy-Authorization`](/fr/docs/Web/HTTP/Headers/Proxy-Authorization)
  - : Contient les informations d'authentification nécessaires pour authentifier un agent utilisateur avec un serveur mandataire.

## Mise en cache

- [`Age`](/fr/docs/Web/HTTP/Reference/Headers/Age)
  - : La durée en secondes pendant laquelle un objet a été dans le cache d'un serveur mandataire.
- [`Cache-Control`](/fr/docs/Web/HTTP/Reference/Headers/Cache-Control)
  - : Spécifie des directives pour les mécanismes de mise en cache dans les requêtes et les réponses.
- [`Clear-Site-Data`](/fr/docs/Web/HTTP/Headers/Clear-Site-Data)
  - : Nettoie les données de navigation (par exemple, les cookies, le stockage local et le cache) associé au site qui envoie la réponse.
- [`Expires`](/fr/docs/Web/HTTP/Reference/Headers/Expires)
  - : La date et l'heure après lesquelles la réponse est considérée comme périmée.

## En-têtes conditionnels

- [`Last-Modified`](/fr/docs/Web/HTTP/Reference/Headers/Last-Modified)
  - : La date à laquelle la ressource a été modifiée pour la dernière fois. Cette date est utilisée pour comparer plusieurs versions d'une même ressource. Moins précise qu'[`ETag`](/fr/docs/Web/HTTP/Reference/Headers/ETag), elle est plus simple à calculer dans certains environnements. Les requêtes conditionnelles avec [`If-Modified-Since`](/fr/docs/Web/HTTP/Reference/Headers/If-Modified-Since) et [`If-Unmodified-Since`](/fr/docs/Web/HTTP/Headers/If-Unmodified-Since) utilisent cette valeur pour modifier le comportement de la requête.
- [`ETag`](/fr/docs/Web/HTTP/Reference/Headers/ETag)
  - : Une chaîne de caractères unique qui identifie la version de la ressource. Les requêtes conditionnelles avec [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match) et [`If-None-Match`](/fr/docs/Web/HTTP/Reference/Headers/If-None-Match) utilisent cette valeur pour modifier le comportement de la requête.
- [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match)
  - : Rend la requête conditionnelle et applique la méthode uniquement si la ressource enregistrée correspond à l'un des ETag donnés.
- [`If-None-Match`](/fr/docs/Web/HTTP/Reference/Headers/If-None-Match)
  - : Rend la requête conditionnelle et applique la méthode uniquement si la ressource enregistrée _ne correspond pas_ à l'un des ETag donnés. Cet en-tête est utilisé afin de mettre à jour les caches (pour les requêtes sûres) ou pour empêcher de téléverser une nouvelle ressource lorsqu'une équivalente existe déjà.
- [`If-Modified-Since`](/fr/docs/Web/HTTP/Reference/Headers/If-Modified-Since)
  - : Rend la requête conditionnelle pour que la ressource ne soit transmise que si elle a été modifiée après une date donnée. Cet en-tête est utilisé pour transmettre des données uniquement lorsque le cache est périmé.
- [`If-Unmodified-Since`](/fr/docs/Web/HTTP/Headers/If-Unmodified-Since)
  - : Rend la requête conditionnelle pour que la ressource ne soit transmise que si elle n'a pas été modifiée après une date donnée. Cela permet de s'assurer de la cohérence d'un nouveau fragment d'un intervalle donné avec les anciens fragments, ou d'implémenter un système de contrôle concurrent optimiste pour la mise à jour de documents existants.
- [`Vary`](/fr/docs/Web/HTTP/Reference/Headers/Vary)
  - : Indique les en-têtes de requêtes qui ont influencé la fourniture de la réponse (entre une éventuelle version en cache et une version fraîche).

## Gestion de la connexion

- [`Connection`](/fr/docs/Web/HTTP/Reference/Headers/Connection)
  - : Contrôle si la connexion réseau reste ouverte après que la transaction actuelle a fini.
- [`Keep-Alive`](/fr/docs/Web/HTTP/Headers/Keep-Alive)
  - : Contrôle la durée pendant laquelle une connexion persistente devrait rester ouverte.

## Négociation de contenu

Pour plus d'informations à ce sujet, voir [l'article sur la négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation).

- [`Accept`](/fr/docs/Web/HTTP/Reference/Headers/Accept)
  - : Indique au serveur [les types MIME](/fr/docs/Glossary/MIME_type) qui peuvent être renvoyés pour le type de contenu de la réponse.
- [`Accept-Encoding`](/fr/docs/Web/HTTP/Reference/Headers/Accept-Encoding)
  - : L'algorithme d'encodage, généralement [un algorithme de compression](/fr/docs/Web/HTTP/Guides/Compression), qui peut être utilisé pour la ressource renvoyée.
- [`Accept-Language`](/fr/docs/Web/HTTP/Reference/Headers/Accept-Language)
  - : Indique au serveur la ou les langues dans lesquelles la ressource peut être renvoyée. Il s'agit d'une indication et cette valeur n'est pas nécessairement choisie par la personne. Il appartient au serveur de veiller à ne pas outrepasser des choix de locale explicites effectués par ailleurs (par exemple le choix d'une langue dans une liste déroulante).

## Contrôles

- [`Expect`](/fr/docs/Web/HTTP/Headers/Expect)
  - : Indique les conditions à respecter par le serveur pour gérer correctement la requête.
- [`Max-Forwards`](/fr/docs/Web/HTTP/Headers/Max-Forwards)
  - : Lorsque la méthode [`TRACE`](/fr/docs/Web/HTTP/Reference/Methods/TRACE) est utilisée, cet en-tête indique le nombre maximal de sauts que la requête peut effectuer avant de revenir à l'émetteur.

## Cookies

- [`Cookie`](/fr/docs/Web/HTTP/Headers/Cookie)
  - : Contient les [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) enregistrés, précédemment envoyés par le serveur avec l'en-tête [`Set-Cookie`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie).
- [`Set-Cookie`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie)
  - : Envoie des cookies de la part du serveur vers l'agent utilisateur.

## CORS

Pour plus d'informations, voir [la documentation CORS](/fr/docs/Web/HTTP/Guides/CORS).

- [`Access-Control-Allow-Credentials`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)
  - : Indique si les informations d'authentification peuvent être exposées lors d'une requête vers une autre origine.
- [`Access-Control-Allow-Headers`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)
  - : Utilisé dans une réponse à [une requête préparatoire (<i lang="en">preflight request</i>)](/fr/docs/Glossary/Preflight_request) pour indiquer les en-têtes HTTP qui peuvent être utilisés lors de la requête réelle.
- [`Access-Control-Allow-Methods`](/fr/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Methods)
  - : Utilisé dans une réponse à [une requête préparatoire (<i lang="en">preflight request</i>)](/fr/docs/Glossary/Preflight_request) pour indiquer les méthodes HTTP qui peuvent être utilisés lors de la requête réelle.
- [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : Indique si la réponse peut être partagée.
- [`Access-Control-Expose-Headers`](/fr/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
  - : Indique la liste des en-têtes qui peuvent être exposés dans la réponse.
- [`Access-Control-Max-Age`](/fr/docs/Web/HTTP/Headers/Access-Control-Max-Age)
  - : Indique la durée pendant laquelle le résultat d'une requête préparatoire peut être mis en cache.
- [`Access-Control-Request-Headers`](/fr/docs/Web/HTTP/Reference/Headers/Access-Control-Request-Headers)
  - : Utilisé lors de l'émission d'une requête préparatoire pour indiquer au serveur les en-têtes HTTP qui seront utilisés lors de la requête réelle.
- [`Access-Control-Request-Method`](/fr/docs/Web/HTTP/Headers/Access-Control-Request-Method)
  - : Utilisé lors de l'émission d'une requête préparatoire pour indiquer au serveur [la méthode HTTP](/fr/docs/Web/HTTP/Reference/Methods) qui sera utilisée lors de la requête réelle.
- [`Origin`](/fr/docs/Web/HTTP/Reference/Headers/Origin)
  - : Indique l'origine de la requête.
- [`Timing-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Timing-Allow-Origin)
  - : Indique les origines autorisées à consulter les valeurs des attributs récupérés grâce à [l'API <i lang="en">Resource Timing</i>](/fr/docs/Web/API/Performance_API/Resource_timing) (au lieu que 0 soit fourni comme valeur par défaut en raison des restrictions entre les origines).

## Téléchargement

- [`Content-Disposition`](/fr/docs/Web/HTTP/Reference/Headers/Content-Disposition)
  - : Indique si la ressource transmise devrait être affichée dans le navigateur (le comportement par défaut en l'absence de l'en-tête), ou si elle devrait être gérée comme un téléchargement (auquel cas le navigateur affichera une boîte de dialogue pertinente).

## Informations sur le corps

- [`Content-Length`](/fr/docs/Web/HTTP/Reference/Headers/Content-Length)
  - : La taille de la ressource, exprimée en octets (sur une base décimale).
- [`Content-Type`](/fr/docs/Web/HTTP/Reference/Headers/Content-Type)
  - : Le type de média de la ressource.
- [`Content-Encoding`](/fr/docs/Web/HTTP/Reference/Headers/Content-Encoding)
  - : L'algorithme de compression utilisé.
- [`Content-Language`](/fr/docs/Web/HTTP/Reference/Headers/Content-Language)
  - : La langue humaine cible pour le public, qui permet à une personne de recevoir une ressource adaptée à sa locale.
- [`Content-Location`](/fr/docs/Web/HTTP/Headers/Content-Location)
  - : Indique un emplacement alternatif pour les données renvoyées.

## Gestion des serveurs mandataires (<i lang="en">proxies</i>)

- [`Forwarded`](/fr/docs/Web/HTTP/Headers/Forwarded)
  - : Permet d'ajouter des informations qui seraient perdues par ailleurs lors de la transmission par des serveurs mandataires.
- [`Via`](/fr/docs/Web/HTTP/Headers/Via)
  - : Information ajoutée par les serveurs mandataires (dans les deux sens) et qui peut apparaître dans les en-têtes de réponse et de requête.

## Redirection

- [`Location`](/fr/docs/Web/HTTP/Reference/Headers/Location)
  - : Indique l'URL vers laquelle rediriger la requête.
- [`Refresh`](/fr/docs/Web/HTTP/Headers/Refresh)
  - : Indique au navigateur de rafraîchir la page ou de rediriger vers une autre. Cet en-tête prend la même valeur qu'[un élément `<meta>` avec `http-equiv="refresh"`](/fr/docs/Web/HTML/Reference/Elements/meta#http-equiv).

## Contexte de la requête

- [`From`](/fr/docs/Web/HTTP/Headers/From)
  - : Contient une adresse électronique qui permet de s'adresser à la personne qui contrôle l'agent utilisateur qui a émis la requête.
- [`Host`](/fr/docs/Web/HTTP/Reference/Headers/Host)
  - : Indique le nom de domaine du serveur (pour l'hébergement virtuel) et l'éventuel numéro de port TCP sur lequel le serveur écoute.
- [`Referer`](/fr/docs/Web/HTTP/Reference/Headers/Referer)
  - : L'adresse de la page web précédente dont le lien a mené à la page actuellement demandée.
- [`Referrer-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Referrer-Policy)
  - : Gère les informations qui doivent être envoyées via l'en-tête [`Referer`](/fr/docs/Web/HTTP/Reference/Headers/Referer).
- [`User-Agent`](/fr/docs/Web/HTTP/Headers/User-Agent)
  - : Contient une chaîne de caractères spécifique qui permet aux pairs de protocole réseau d'identifier le type d'application, le système d'exploitation, l'éditeur ou la version du logiciel utilisé par l'agent utilisateur.

## Contexte de la réponse

- [`Allow`](/fr/docs/Web/HTTP/Reference/Headers/Allow)
  - : Indique l'ensemble des méthodes HTTP prises en charge par la ressource.
- [`Server`](/fr/docs/Web/HTTP/Reference/Headers/Server)
  - : Contient des informations à propos du logiciel utilisé par le serveur d'origine gérant la requête.

## Requêtes d'intervalle

- [`Accept-Ranges`](/fr/docs/Web/HTTP/Headers/Accept-Ranges)
  - : Indique si le serveur prend en charge les requêtes d'intervalle et, le cas échéant, l'unité selon laquelle l'intervalle doit être exprimé.
- [`Range`](/fr/docs/Web/HTTP/Headers/Range)
  - : Indique la partie du document que le serveur devrait renvoyer.
- [`If-Range`](/fr/docs/Web/HTTP/Headers/If-Range)
  - : Crée une requête d'intervalle conditionnelle qui est uniquement réussie si l'ETag ou la date fournie correspond à la ressource distante. Cet en-tête est utilisé afin d'éviter de télécharger deux intervalles pour des versions incompatibles d'une même ressource.
- [`Content-Range`](/fr/docs/Web/HTTP/Headers/Content-Range)
  - : Indique l'emplacement du message partiel au sein du corps complet.

## Sécurité

- [`Cross-Origin-Embedder-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
  - : Permet à un serveur d'indiquer une règle pour le chargement des ressources d'autres origines pour un document donné.
- [`Cross-Origin-Opener-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
  - : Empêche l'ouverture/le contrôle d'une fenêtre par d'autres domaines.
- [`Cross-Origin-Resource-Policy`](/fr/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy)
  - : Empêche d'autres domaines de lire la réponse pour les ressources auxquelles cet en-tête est appliqué. Voir aussi [la page d'explication sur](/fr/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) ([CSP](/fr/docs/Glossary/CSP))
  - : Contrôle les ressources qu'un agent utilisateur est autorisé à charger pour une page donnée.
- [`Content-Security-Policy-Report-Only`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only)
  - : Permet de surveiller les résultats de règles CSP sans pour autant les mettre en place. Les rapports émis en cas de violation sont des documents [JSON](/fr/docs/Glossary/JSON) envoyés par une requête HTTP `POST` à l'URI indiquée dans l'en-tête.
- [`Permissions-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
  - : Fournit un mécanisme pour autoriser ou interdire l'utilisation de certaines fonctionnalités dans le cadre de la page et dans les éventuels [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe) qu'elle embarque.
- [`Strict-Transport-Security`](/fr/docs/Web/HTTP/Headers/Strict-Transport-Security) ([HSTS](/fr/docs/Glossary/HSTS))
  - : Force la communication à passer par HTTPS plutôt que par HTTP.
- [`Upgrade-Insecure-Requests`](/fr/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests)
  - : Envoie un signal au serveur indiquant la préférence du client pour une réponse chiffrée et authentifiée, afin qu'il puisse correctement gérer la directive CSP [`upgrade-insecure-requests`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests).
- [`X-Content-Type-Options`](/fr/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : Désactive le choix heuristique du type MIME et force le navigateur à utiliser le type fourni via l'en-tête [`Content-Type`](/fr/docs/Web/HTTP/Reference/Headers/Content-Type).
- [`X-Frame-Options`](/fr/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Indique si un navigateur est autorisé à afficher une page dans un élément [`<frame>`](/fr/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](/fr/docs/Web/HTML/Reference/Elements/embed), ou [`<object>`](/fr/docs/Web/HTML/Reference/Elements/object).
- [`X-Permitted-Cross-Domain-Policies`](/fr/docs/Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies)
  - : Indique si un fichier de règles entre domaines (`crossdomain.xml`) est autorisé. Le fichier pourra définir des règles pour permettre aux clients comme Adobe Acrobat, ou Apache Flex de gérer des données entre différents domaines alors que cela aurait été interdit par [la politique d'origine unique](/fr/docs/Web/Security/Same-origin_policy). Voir [le fichier PDF de spécification sur le site d'Adobe](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf) pour plus d'informations.
- [`X-Powered-By`](/fr/docs/Web/HTTP/Headers/X-Powered-By)
  - : Cet en-tête pourra être défini par des environnements d'hébergement ou d'autres outils et contenir des informations à leur propos, qui ne sont pas utiles à l'application même ou aux personnes qui l'utilisent. Il est préférable de ne pas fournir cet en-tête aux clients pour éviter d'exposer certaines vulnérabilités.

### En-têtes de métadonnées pour les requêtes de récupération

Les [en-têtes de métadonnées pour les requêtes de récupération (<i lang="en">fetch metadata request header</i>)](/fr/docs/Glossary/Fetch_metadata_request_header) fournissent des informations à propos du contexte d'origine de la requête. Un serveur pourra les utiliser pour déterminer si une requête est autorisée, selon sa provenance et comment la ressource sera utilisée.

- [`Sec-Fetch-Site`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-Site)
  - : Indique la relation entre l'origine de la partie qui a initié la requête et l'origine de la ressource demandée. Il s'agit d'un en-tête structuré dont la valeur peut être `cross-site`, `same-origin`, `same-site`, ou `none`.
- [`Sec-Fetch-Mode`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-Mode)
  - : Indique le mode de la requête à un serveur. Il s'agit d'un en-tête structuré dont la valeur peut être `cors`, `navigate`, `no-cors`, `same-origin`, et `websocket`.
- [`Sec-Fetch-User`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-User)
  - : Indique si une requête de navigation a été déclenchée par une utilisatrice ou un utilisateur. Il s'agit d'un en-tête structuré booléen dont la valeur peut être `?0` (pour indiquer faux) ou `?1` (pour indiquer vrai).
- [`Sec-Fetch-Dest`](/fr/docs/Web/HTTP/Headers/Sec-Fetch-Dest)
  - : Indique la destination de la requête. Il s'agit d'un en-tête structuré dont la valeur peut être `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, ou `xslt`.

Les en-têtes de requêtes qui suivent ne sont pas à strictement parler des en-têtes de métadonnées pour les requêtes de récupération, mais fournissent des informations similaires sur le contexte d'utilisation d'une ressource. Un serveur pourra les utiliser afin de modifier le comportement de son cache ou les informations qu'il renvoie&nbsp;:

- [`Sec-Purpose`](/fr/docs/Web/HTTP/Headers/Sec-Purpose)
  - : Indique le but de la requête lorsque celui-ci n'est pas une utilisation immédiate par l'agent utilisateur. Cet en-tête prend actuellement une seule valeur possible&nbsp;: `prefetch`, qui indique que la ressource est récupérée de façon préventive, pour préparer une éventuelle navigation future vers celle-ci.
- [`Service-Worker-Navigation-Preload`](/fr/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload)
  - : Un en-tête de requête envoyé de façon préventive pour récupérer (via [`fetch()`](/fr/docs/Web/API/Window/fetch)) une ressource au démarrage d'un <i lang="en">service worker</i>. La valeur, définie via [`NavigationPreloadManager.setHeaderValue()`](/fr/docs/Web/API/NavigationPreloadManager/setHeaderValue), peut être utilisée afin d'informer un serveur qu'une ressource différente (que celle fournie pour une opération `fetch()` normale) devrait être renvoyée.

## Évènements émis par le serveur

- [`Report-To`](/fr/docs/Web/HTTP/Headers/Report-To)
  - : Cet en-tête fournir un point d'entrée à utiliser par le navigateur pour envoyer les rapports d'avertissement et d'erreur.

## Encodage lors du transfert

- [`Transfer-Encoding`](/fr/docs/Web/HTTP/Headers/Transfer-Encoding)
  - : Définit la forme d'encodage à utiliser pour transférer de façon sûre le corps de la requête au client.
- [`TE`](/fr/docs/Web/HTTP/Headers/TE)
  - : Indique les encodages de transfert acceptables pour l'agent utilisateur.
- [`Trailer`](/fr/docs/Web/HTTP/Reference/Headers/Trailer)
  - : Permet à l'émetteur d'inclure des champs complémentaires à la fin du message morcelé.

## Autres

- [`Alt-Svc`](/fr/docs/Web/HTTP/Headers/Alt-Svc)
  - : Utilisé pour lister les méthodes alternatives pour accéder au service.
- [`Alt-Used`](/fr/docs/Web/HTTP/Headers/Alt-Used)
  - : Utilisé pour identifier le service alternatif utilisé.
- [`Date`](/fr/docs/Web/HTTP/Reference/Headers/Date)
  - : Contient la date et l'heure à laquelle le message a été émis.
- [`Link`](/fr/docs/Web/HTTP/Reference/Headers/Link)
  - : Cet en-tête permet de sérialiser un ou plusieurs liens dans des en-têtes HTTP. Il est sémantiquement équivalent à l'élément HTML [`<link>`](/fr/docs/Web/HTML/Reference/Elements/link).
- [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After)
  - : Indique la durée pendant laquelle l'agent utilisateur devrait attendre avant d'envoyer une requête suivante.
- [`Server-Timing`](/fr/docs/Web/HTTP/Headers/Server-Timing)
  - : Permet de communiquer une ou plusieurs métriques et leur description pour un aller-retour requête-réponse donné.
- [`Service-Worker-Allowed`](/fr/docs/Web/HTTP/Headers/Service-Worker-Allowed)
  - : Utilisé afin de supprimer [la contrainte sur le chemin](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers#pourquoi_est-ce_lenregistrement_de_mon_service_worker_échoue_) lorsqu'il est inclus dans la réponse fournissant le script du <i lang="en">service worker</i> (voir [le paragraphe correspondant dans la spécification](https://w3c.github.io/ServiceWorker/#service-worker-script-response)).
- [`SourceMap`](/fr/docs/Web/HTTP/Headers/SourceMap)
  - : Pointe vers une [<i lang="en">source map</i>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) pour la ressource demandée.
- [`Upgrade`](/fr/docs/Web/HTTP/Reference/Headers/Upgrade)
  - : Cet en-tête, valable uniquement pour HTTP/1.1, permet de basculer une connexion déjà établie sur un protocole différent (en conservant le même protocole de transport). Ainsi, un client pourra l'utiliser pour demander que la connexion bascule de HTTP/1.1 vers HTTP/2 ou pour passer d'une connexion HTTPS à une connexion WebSocket.

## En-têtes expérimentaux

### Indications fournies par le client (<i lang="en">client hints</i>)

Les [indications client (ou <i lang="en">client hints</i> en anglais)](/fr/docs/Web/HTTP/Guides/Client_hints) sont des en-têtes de requêtes qui fournissent des informations à propos du client comme le type d'appareil ou les conditions réseau et qui permettent aux serveurs d'optimiser ce qui peut alors être servi dans ces conditions.

C'est aux serveurs de demander aux clients les indications qui les intéressent à l'aide de l'en-tête [`Accept-CH`](/fr/docs/Web/HTTP/Headers/Accept-CH). Le client pourra alors choisir d'inclure les en-têtes demandés dans les requêtes à venir.

- [`Accept-CH`](/fr/docs/Web/HTTP/Headers/Accept-CH) {{experimental_inline}}
  - : Les serveurs peuvent indiquer leur prise en charge des indications client à l'aide de l'en-tête `Accept-CH` ou d'un élément `<meta>` équivalent doté de l'attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta#http-equiv).
- [`Critical-CH`](/fr/docs/Web/HTTP/Headers/Critical-CH) {{experimental_inline}}
  - : Utilisé avec [`Accept-CH`](/fr/docs/Web/HTTP/Headers/Accept-CH), `Critical-CH` est utilisé pour indiquer que les indications client acceptées sont [des indications client critiques](/fr/docs/Web/HTTP/Guides/Client_hints#indications_client_critiques).

Les différentes catégories d'indication client sont listées ci-après.

#### Indications client pour l'agent utilisateur

Les [indications client pour l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints) sont des en-têtes de requête qui fournissent des informations à propos de l'agent utilisateur, de la plateforme et architecture sur lesquelles il est exécuté et à propos des préférences définies au niveau de l'agent utilisateur ou de la plateforme&nbsp;:

- [`Sec-CH-UA`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA) {{experimental_inline}}
  - : La marque et la version de l'agent utilisateur.
- [`Sec-CH-UA-Arch`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Arch) {{experimental_inline}}
  - : L'architecture de la plateforme sur laquelle est exécuté l'agent utilisateur.
- [`Sec-CH-UA-Bitness`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness) {{experimental_inline}}
  - : Le nombre de bits de l'architecture du processeur de la plateforme sur laquelle l'agent utilisateur est exécuté (par exemple, 64 pour 64 bits).
- [`Sec-CH-UA-Full-Version-List`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List) {{experimental_inline}}
  - : La version complète de chaque composante de la liste composant la marque de l'agent utilisateur.
- [`Sec-CH-UA-Mobile`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile) {{experimental_inline}}
  - : Indique si l'agent utilisateur est exécuté sur un appareil mobile ou s'il préfère plus généralement une ergonomie mobile.
- [`Sec-CH-UA-Model`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Model) {{experimental_inline}}
  - : Le modèle d'appareil sur lequel est exécuté l'agent utilisateur.
- [`Sec-CH-UA-Platform`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Platform) {{experimental_inline}}
  - : La plateforme et système d'exploitation sur lesquelles l'agent utilisateur est exécuté.
- [`Sec-CH-UA-Platform-Version`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version) {{experimental_inline}}
  - : La version du système d'exploitation sur lequel l'agent utilisateur est exécuté.
- [`Sec-CH-UA-Prefers-Color-Scheme`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Prefers-Color-Scheme) {{experimental_inline}}
  - : Indique la préférence de l'utilisatrice ou de l'utilisateur entre un thème clair ou un thème sombre.
- [`Sec-CH-UA-Prefers-Reduced-Motion`](/fr/docs/Web/HTTP/Headers/Sec-CH-UA-Prefers-Reduced-Motion) {{experimental_inline}}
  - : Indique la préférence de l'utilisatrice ou de l'utilisateur pour voir moins d'animations et d'effets décalant le contenu.

#### Indications client relatives à l'appareil

- [`Device-Memory`](/fr/docs/Web/HTTP/Headers/Device-Memory) {{experimental_inline}}
  - : Indique la quantité approximative de mémoire vive disponible sur le client. Cet en-tête s'inscrit dans [l'API <i lang="en">Device Memory</i>](/fr/docs/Web/API/Device_Memory_API).

#### Indications client relatives au réseau

Les indications client relatives au réseau permettent au serveur de choisir les informations envoyées selon la bande passante et la latence réseau du client.

- [`Downlink`](/fr/docs/Web/HTTP/Headers/Downlink) {{experimental_inline}}
  - : Une approximation de la bande passante, exprimée en Mo/s entre le client et le serveur. Cet en-tête s'inscrit dans [l'API <i lang="en">Network Information API</i>](/fr/docs/Web/API/Network_Information_API).
- [`ECT`](/fr/docs/Web/HTTP/Headers/ECT) {{experimental_inline}}
  - : Le [type de connexion effectif](/fr/docs/Glossary/Effective_connection_type) qui correspond le mieux à la latence et bande passante de la connexion. Cet en-tête s'inscrit dans [l'API <i lang="en">Network Information API</i>](/fr/docs/Web/API/Network_Information_API).
- [`RTT`](/fr/docs/Web/HTTP/Headers/RTT) {{experimental_inline}}
  - : Le temps d'aller-retour (RTT) au niveau de la couche d'application, exprimée en millisecondes, et qui inclut le temps de traitement du serveur. Cet en-tête s'inscrit dans [l'API <i lang="en">Network Information API</i>](/fr/docs/Web/API/Network_Information_API).
- [`Save-Data`](/fr/docs/Web/HTTP/Headers/Save-Data) {{experimental_inline}}
  - : Une chaîne de caractères indiquant la préférence de l'agent utilisateur pour un usage de données réduit.

### Confidentialité

- [`Sec-GPC`](/fr/docs/Web/HTTP/Headers/Sec-GPC) {{non-standard_inline}}{{experimental_inline}}
  - : Indique le consentement ou l'absence de consentement pour le partage des informations personnelles avec des tierces parties.

### Sécurité

- [`Origin-Isolation`](/fr/docs/Web/HTTP/Headers/Origin-Isolation) {{experimental_inline}}
  - : Fournit un mécanisme permettant aux applications web d'isoler leurs origines.

### Évènements émis par le serveur

- [`NEL`](/fr/docs/Web/HTTP/Headers/NEL) {{experimental_inline}}
  - : Définit un mécanisme pour les rapports relatifs aux erreurs réseau.

### Autres

- [`Accept-Push-Policy`](/fr/docs/Web/HTTP/Headers/Accept-Push-Policy) {{experimental_inline}}
  - : Un client pourra exprimer la gestion de la requête poussée par le serveur via cet en-tête (voir [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1)).
- [`Accept-Signature`](/fr/docs/Web/HTTP/Headers/Accept-Signature) {{experimental_inline}}
  - : Un client pourra envoyer cet en-tête afin d'indiquer son intention de tirer parti des signatures disponibles et d'indiquer les types de signature qu'il prend en charge (voir [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7)).
- [`Early-Data`](/fr/docs/Web/HTTP/Headers/Early-Data) {{experimental_inline}}
  - : Indique que la requête a été transmise avec les premières données TLS (<i lang="en">TLS early data</i>).
- [`Push-Policy`](/fr/docs/Web/HTTP/Headers/Push-Policy) {{experimental_inline}}
  - : Cet en-tête définit le comportement <i lang="en">push</i> du serveur pour le traitement d'une requête. Voir [`Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2).
- [`Signature`](/fr/docs/Web/HTTP/Headers/Signature) {{experimental_inline}}
  - : Cet en-tête contient une liste de signatures pour un échange, chacune étant accompagnée d'informations pour déterminer l'autorité correspondante et les moyens de rafraîchir la signature. Voir [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1).
- [`Signed-Headers`](/fr/docs/Web/HTTP/Headers/Signed-Headers) {{experimental_inline}}
  - : Cet en-tête contient une liste ordonnée des en-têtes à inclure dans une signature. Voir [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2).
- [`Supports-Loading-Mode`](/fr/docs/Web/HTTP/Headers/Supports-Loading-Mode) {{experimental_inline}}
  - : Défini par une cible de navigation afin d'opter pour des modes de chargement plus risqué, comme le [prérendu](/fr/docs/Web/API/Speculation_Rules_API#using_prerendering) pour un même site sur plusieurs origines. Seule la valeur `credentialed-prerender` peut être utilisée.

## En-têtes non-standards

- [`X-Forwarded-For`](/fr/docs/Web/HTTP/Headers/X-Forwarded-For) {{non-standard_inline}}
  - : Identifie l'adresse IP d'origine d'un client qui se connecte à un serveur web via un intermédiaire (comme un <i lang="en">proxy</i> ou un <i lang="en">load balancer</i>).
- [`X-Forwarded-Host`](/fr/docs/Web/HTTP/Headers/X-Forwarded-Host) {{non-standard_inline}}
  - : Identifie l'hôte demandé à l'origine par le client qui se connecte à l'intermédiaire (<i lang="en">proxy</i> ou un <i lang="en">load balancer</i>).
- [`X-Forwarded-Proto`](/fr/docs/Web/HTTP/Headers/X-Forwarded-Proto) {{non-standard_inline}}
  - : Identifie le protocole (HTTP ou HTTPS) utilisé par le client pour se connecter à l'intermédiaire (<i lang="en">proxy</i> ou un <i lang="en">load balancer</i>).
- [`X-DNS-Prefetch-Control`](/fr/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control) {{non-standard_inline}}
  - : Contrôle la récupération proactive du DNS, utilisée par les navigateurs pour résoudre en avance les noms de domaine que la personne pourra atteindre via les liens, images, fichiers CSS ou JavaScript, etc.
- [`X-Robots-Tag`](/fr/docs/Web/HTTP/Headers/X-Robots-Tag) {{non-standard_inline}}
  - : Cet en-tête indique comment une page web doit être indexée par les moteurs de recherche public. En pratique, cet en-tête est équivalent à `<meta name="robots" content="…">`. Voir [la page de documentation de Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag).

## En-têtes dépréciés

- [`Pragma`](/fr/docs/Web/HTTP/Headers/Pragma) {{deprecated_inline}}
  - : Un en-tête spécifique pour chaque implémentation pouvant avoir divers effets le long de la chaîne de requête-réponse. Utilisé pour la rétrocompatibilité avec les caches HTTP/1.0 où l'en-tête `Cache-Control` n'est pas encore présent.
- [`Warning`](/fr/docs/Web/HTTP/Headers/Warning) {{deprecated_inline}}
  - : Un champ d'avertissement général contenant des informations sur les problèmes possibles.

## Voir aussi

- [Registre des en-têtes par l'IANA (en anglais)](https://www.iana.org/assignments/message-headers/message-headers.xhtml)
- [Groupe de travail HTTP](https://httpwg.org/specs/)
