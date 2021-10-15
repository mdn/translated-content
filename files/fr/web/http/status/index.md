---
title: Codes de réponse HTTP
slug: Web/HTTP/Status
tags:
  - HTTP
  - Status codes
  - TopicStub
translation_of: Web/HTTP/Status
---
{{HTTPSidebar}}

Les codes de statut de réponse HTTP indiquent si une requête [HTTP](/en-US/docs/Web/HTTP) a été exécutée avec succès ou non. Les réponses sont regroupées en cinq classes:

1.  Les réponses informatives (100 - 199),
2.  Les réponses de succès (200 - 299),
3.  Les redirections (300 - 399),
4.  Les erreurs du client (400 - 499),
5.  Les erreurs du serveur (500 - 599).

## Réponses informatives

- {{HTTPStatus(100, "100 Continue")}}
  - : Cette réponse intermédiaire indique que tout est OK pour le moment et que le client peut continuer sa requête ou l'ignorer si celle-ci est déjà finie.
- {{HTTPStatus(101, "101 Switching Protocol")}}
  - : Ce code est envoyé en réponse à un en-tête de requête {{HTTPHeader("Upgrade")}} de la part du client et indique le protocole sur lequel passe le serveur.
- {{HTTPStatus(103, "103 Processing")}} ({{Glossary("WebDAV")}})
  - : Ce code indique que le serveur a reçu et traite la requête, mais qu'aucune réponse n'est disponible pour le moment.

## Réponses de succès

- {{HTTPStatus(200, "200 OK")}}
  - : La requête a réussi. Le signification du succès peut varier selon la méthode HTTP : GET : La ressource a été récupérée et est retransmise dans le corps du message. HEAD : Les en-têtes d'entité sont dans le corps du message. POST : La ressource décrivant le résultat de l'action est transmise dans le corps du message. TRACE : Le corps du message contient le message de requête tel que reçu par le serveur
- {{HTTPStatus(201, "201 Created")}}
  - : La requête a réussi et une nouvelle ressource a été créée en guise de résultat. Il s'agit typiquement de la réponse envoyée après une requête PUT.
- {{HTTPStatus(202, "202 Accepted")}}
  - : La requête a été reçue mais n'a pas encore été traitée. C'est une réponse évasive, ce qui signifie qu'il n'y a aucun moyen en HTTP d'envoyer une réponse asynchrone ultérieure indiquant le résultat issu du traitement de la requête. Elle est destinée aux cas où un autre processus ou serveur gère la requête, et peut être utile pour faire du traitement par lots.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Ce code de réponse signifie que l'ensemble de méta-informations renvoyé n'est pas exactement l'ensemble disponible sur le serveur d'origine, mais plutôt un ensemble collecté à partir d'une copie locale ou tierce. À l'exception de cette condition, une réponse 200 OK est préférable.
- {{HTTPStatus(204, "204 No Content")}}
  - : Il n'y a pas de contenu à envoyer pour cette requête, mais les en-têtes peuvent être utiles. L'agent utilisateur peut mettre à jour ses en-têtes en cache pour cette ressource en les remplaçant par les nouveaux.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Ce code de réponse est envoyé après avoir traité une requête indiquant à l'agent utilisateur qu'il peut réinitialiser la vue du document qui a envoyé la requête.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Ce code de réponse est utilisé en réaction à l'en-tête Range envoyé par le client pour séparer le téléchargement en plusieurs flux.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Une réponse multi-statut donne des informations sur des ressources multiples dans les situations où les codes de statut multiples sont appropriés.
- {{HTTPStatus(208, "208 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Utilisé au sein d'un DAV : élément de réponse propstat pour éviter d'énumérer à maintes reprises les membres internes de bindings multiples vers la même collection.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://tools.ietf.org/html/rfc3229))
  - : Le serveur a exécuté une requête GET pour la ressource, et la réponse est une représentation du résultat d'une ou plusieurs manipulations d'instance appliquées à l'instance courante.

## Messages de redirection

- {{HTTPStatus(300, "300 Multiple Choice")}}
  - : La requête a plusieurs réponses possibles. L'agent utilisateur ou l'utilisateur doit choisir l'une d'entre elles. Il n'y a pas de manière standard pour choisir l'une de ces réponses.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Ce code de réponse signifie que l'URI de la ressource demandée a été modifiée. Une nouvelle URI sera probablement donnée dans la réponse.
- {{HTTPStatus(302, "302 Found")}}
  - : Ce code de réponse indique que l'URI de la ressource demandée a été modifiée _temporairement_. De nouveaux changements dans l'URI pourront être effectués ultérieurement. Par conséquent, cette même URI devrait être utilisée par le client pour les requêtes futures.
- {{HTTPStatus(303, "303 See Other")}}
  - : Le serveur a envoyé cette réponse pour diriger le client vers la ressource demandée via une autre URI en utilisant une requête GET.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Ce code est utilisé pour des raisons de cache. Il indique au client que la réponse n'a pas été modifiée. De fait, le client peut continuer à utiliser la même version de la réponse, mise en cache.
- {{HTTPStatus(305, "305 Use Proxy")}}
  - : A été défini dans une version antérieure de la spécification HTTP pour indiquer qu'une réponse sollicitée doit transiter par un proxy. Ce code est aujourd'hui périmé pour des raisons de sécurité relatives à la configuration d'un proxy.
- {{HTTPStatus(306, "306 unused")}}
  - : Ce code de réponse n'est plus en service, son usage est actuellement réservé. Il était utilisé dans une version précédente de la spécification HTTP 1.1.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Le serveur a envoyé cette réponse pour rediriger le client afin d'obtenir la ressource demandée via une autre URI, en utilisant la même méthode que précédemment. Ce code a la même sémantique que le code `302 Found`, à l'exception près que l'agent utilisateur _ne doit pas_ changer la méthode HTTP utilisée : si `POST` était utilisé dans la première requête, alors `POST` doit être utilisé dans la seconde.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Cela signifie que la ressource a été déplacée de manière permante vers une autre URI, spécifiée dans l'en-tête de réponse HTTP `Location:`. Ce code a la même sémantique que le code `301 Moved Permanently`, à l'exception près que l'agent utilisateur _ne doit pas_ changer la méthode HTTP utilisée : si `POST` était utilisé dans la première requête, alors `POST` doit être utilisé dans la seconde.

## Réponses d'erreur côté client

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Cette réponse indique que le serveur n'a pas pu comprendre la requête à cause d'une syntaxe invalide.
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Une identification est nécessaire pour obtenir la réponse demandée. Ceci est similaire au code 403, mais dans ce cas, l'identification est possible.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Ce code de réponse est réservé à une utilisation future. Le but initial justifiant la création de ce code était l'utilisation de systèmes de paiement numérique. Cependant, il n'est pas utilisé actuellement.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Le client n'a pas les droits d'accès au contenu, donc le serveur refuse de donner la véritable réponse.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Le serveur n'a pas trouvé la ressource demandée. Ce code de réponse est principalement connu pour son apparition fréquente sur le web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : La méthode de requête est connue du serveur mais a été désactivée et ne peut pas être utilisée. Les deux méthodes obligatoires, `GET` et `HEAD`, ne doivent jamais être désactivées et ne doivent pas retourner ce code d'erreur.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Cette réponse est envoyée quand le serveur web, après une [négotiation de contenu géré par le serveur](/en-US/docs/HTTP/Content_negotiation#Server-driven_negotiation), ne trouve rien qui satisfasse les critères donnés par l'agent utilisateur.

<!---->

- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Similaire au code 401, sauf que l'identification doit être faite par un proxy.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Cette réponse est envoyée via une connexion en attente par certains serveurs, même sans qu'il y ait de requête préalable de la part du client. Cela signifie que le serveur aimerait fermer cette connexion inutilisée. Cette réponse est bien plus utilisée depuis que certains navigateurs, comme Chrome, Firefox 27+ ou IE9, utilisent des [mécanismes de préconnexion HTTP](http://www.belshe.com/2011/02/10/the-era-of-browser-preconnect/) pour accélerer la navigation. Notez aussi que certains serveurs ferment simplement la connexion sans même envoyer ce message.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Cette réponse est envoyée quand une requête entre en conflit avec l'état actuel du serveur.
- {{HTTPStatus(410, "410 Gone")}}
  - : Cette réponse est envoyée quand le contenu demandé est supprimé du serveur.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Le serveur a rejeté la requête car le champ d'en-tête `Content-Length` n'est pas défini et le serveur l'impose.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Le client a indiqué des préconditions dans ses en-têtes que le serveur ne remplit pas.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : L'entité demandée est plus grosse que la limite définie par le serveur; le serveur peut fermer la connexion ou retourner un champ d'en-tête `Retry-After`.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : L'URI interrogé par le client est plus long que ce que le serveur est en mesure d'interpréter.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Le format média des données demandées n'est pas supporté par le serveur, donc le serveur rejette la requête.
- {{HTTPStatus(416, "416 Requested Range Not Satisfiable")}}
  - : La plage spécifiée par le champ d'en-tête `Range` de la requête ne peut pas être satisfaite ; il est possible que la plage excède la taille des données provenant de l'URI ciblé.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Ce code de réponse signifie que les attentes indiquées par le champ d'en-tête de requête `Expect` n'ont pas pu être satisfaites par le serveur.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Le serveur refuse de brasser du café avec une théière.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : La requête a été envoyée à un serveur incapable de produire une réponse. Ce code peut être envoyé par un serveur qui n'a pas été configuré pour produire des réponses sujettes à la combinaison de schémas et d'identités incluse dans l'URI de la requête.
- {{HTTPStatus(422, "422 Unprocessable Entity")}} ({{Glossary("WebDAV")}})
  - : La requête a bien été constituée mais n'a pas pu être traitée à cause d'erreurs sémantiques.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})
  - : La ressource qui est en train d'être consultée est verrouillée.

<!---->

- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})
  - : La requête a échoué à cause de l'échec d'une requête précédente.

<!---->

- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Le serveur refuse de traiter la requête en utilisant le protocole actuel mais peut accepter de le faire si le client opte pour un autre protocole. Le serveur _doit_ envoyer un champ `Upgrade` dans l'en-tête de la réponse 426 pour indiquer le(s) protocole(s) demandé(s) ([Section 6.7 de \[RFC7230\]](https://tools.ietf.org/html/rfc7230#section-6.7)).
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Le serveur d'origine impose que la requête soit conditionnelle. Ceci est prévu pour empêcher le problème de 'perte de mise à jour', où un client récupère l'état d'une ressource avec GET, le modifie, et le renvoie au serveur avec PUT pendant qu'un tiers modifie l'état du serveur, ce qui conduit à un conflit.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : L'utilisateur a émis trop de requêtes dans un laps temps donné.
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Le serveur n'est pas disposé à traiter la requête car les champs d'en-tête sont trop longs. La requête PEUT être renvoyée après avoir réduit la taille des en-têtes.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : L'utilisateur tente d'accéder à une ressource illégale, telle qu'une page censurée par un gouvernement.

## Réponses d'erreur côté serveur

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Le serveur a rencontré une situation qu'il ne sait pas traiter.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : La méthode de requête n'est pas supportée par le serveur et ne peut pas être traitée. Les seules méthodes que les serveurs sont tenus de supporter (et donc pour lesquelles ils ne peuvent pas renvoyer ce code) sont `GET` et `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Cette réponse d'erreur signifie que le serveur, alors qu'il fonctionnait en tant que passerelle pour recevoir une reponse nécessaire pour traiter la requête, a reçu une réponse invalide.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Le serveur n'est pas prêt pour traiter la requête. Les causes les plus communes sont que le serveur est éteint pour maintenance ou qu'il est surchargé. Notez qu'avec cette réponse, une page ergonomique peut expliquer le problème. Ces réponses doivent être utilisées temporairement et le champ d'en-tête `Retry-After` doit, dans la mesure du possible, contenir une estimation de l'heure de reprise du service. Le webmestre doit aussi faire attention aux en-têtes de mise en cache qui sont envoyés avec cette réponse (qui ne doivent typiquement pas être mis en cache).
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Cette réponse d'erreur est renvoyée lorsque le serveur sert de passerelle et ne peut pas donner de réponse dans les temps.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : La version de HTTP utilisée dans la requête n'est pas supportée par le serveur.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Le serveur a une erreur de configuration interne : la négociation de contenu transparente pour la requête aboutit à une dépendance circulaire.
- {{HTTPStatus(507, "507 Insufficient Storage")}}
  - : Le serveur a une erreur de configuration interne : la ressource sélectionnée est configurée pour participer elle-même à une négociation de contenu transparente, et n'est par conséquent pas un nœud terminal valable dans le processus de négociation.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : Le serveur a détecté une boucle infinie en traitant la requête.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Des extensions supplémentaires sont requises afin que le serveur puisse satisfaire la requête.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Le code de statut 511 indique que le client doit s'authentifier afin de pouvoir accéder au réseau.

## Voir aussi

- [Liste des codes de statut HTTP sur Wikipedia](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
- [Registre officiel des codes de statut HTTP par l'IANA](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
