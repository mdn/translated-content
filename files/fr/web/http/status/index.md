---
title: Codes de réponse HTTP
slug: Web/HTTP/Status
---

{{HTTPSidebar}}

Les codes de statut de réponse HTTP indiquent si une requête [HTTP](/fr/docs/Web/HTTP) a été exécutée avec succès ou non. Les réponses sont regroupées en cinq classes&nbsp;:

1. [Les réponses informatives](#réponses_informatives) (`100` - `199`),
2. [Les réponses de succès](#réponses_de_succès) (`200` - `299`),
3. [Les messages de redirection](#messages_de_redirection) (`300` - `399`),
4. [Les erreurs du client](#réponses_derreur_côté_client) (`400` - `499`),
5. [Les erreurs du serveur](#réponses_derreur_côté_serveur) (`500` - `599`).

## Réponses informatives

- [`100 Continue`](/fr/docs/Web/HTTP/Status/100)
  - : Cette réponse intermédiaire indique que tout est OK pour le moment et que le client peut continuer sa requête ou l'ignorer si celle-ci est déjà finie.
- [`101 Switching Protocols`](/fr/docs/Web/HTTP/Status/101)
  - : Ce code est envoyé en réponse à un en-tête de requête [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade) de la part du client et indique le protocole sur lequel passe le serveur.
- [`102 Processing`](/fr/docs/Web/HTTP/Status/102) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : Ce code indique que le serveur a reçu et est en train de traiter la requête mais qu'une réponse n'est pas encore disponible.
- [`103 Early Hints`](/fr/docs/Web/HTTP/Status/103)
  - : Ce code de statut est conçu pour être utilisé avec l'en-tête [`Link`](/fr/docs/Web/HTTP/Headers/Link), ce qui permet à l'agent utilisateur de commencer [le préchargement](/fr/docs/Web/HTML/Link_types/preload) des ressources tandis que le serveur prépare une réponse.

## Réponses de succès

- [`200 OK`](/fr/docs/Web/HTTP/Status/200)

  - : La requête a réussi. La signification du succès peut varier selon la méthode HTTP&nbsp;:

    - `GET`&nbsp;: La ressource a été récupérée et est retransmise dans le corps du message.
    - `HEAD`&nbsp;: Les en-têtes d'entité sont présents dans la réponse et il n'y a pas de corps.
    - `PUT` ou `POST`&nbsp;: La ressource décrivant le résultat de l'action est transmise dans le corps du message.
    - `TRACE`&nbsp;: Le corps du message contient le message de requête tel que reçu par le serveur.

- [`201 Created`](/fr/docs/Web/HTTP/Status/201)
  - : La requête a réussi et une nouvelle ressource a été créée en guise de résultat. Il s'agit typiquement de la réponse envoyée après une requête `PUT` ou `POST`.
- [`202 Accepted`](/fr/docs/Web/HTTP/Status/202)
  - : La requête a été reçue mais n'a pas encore été traitée. C'est une réponse évasive, ce qui signifie qu'il n'y a aucun moyen en HTTP d'envoyer une réponse asynchrone ultérieure indiquant le résultat issu du traitement de la requête. Elle est destinée aux cas où un autre processus ou serveur gère la requête, et peut être utile pour faire du traitement par lots.
- [`203 Non-Authoritative Information`](/fr/docs/Web/HTTP/Status/203)
  - : Ce code de réponse signifie que l'ensemble de méta-informations renvoyé n'est pas exactement l'ensemble disponible sur le serveur d'origine, mais plutôt un ensemble collecté à partir d'une copie locale ou tierce. Ce code est utilisé la plupart du temps par les serveurs miroirs ou de sauvegarde d'une autre ressource. À l'exception de cette condition, une réponse `200 OK` est préférable.
- [`204 No Content`](/fr/docs/Web/HTTP/Status/204)
  - : Il n'y a pas de contenu à envoyer pour cette requête, mais les en-têtes peuvent être utiles. L'agent utilisateur peut mettre à jour ses en-têtes en cache pour cette ressource en les remplaçant par les nouveaux.
- [`205 Reset Content`](/fr/docs/Web/HTTP/Status/205)
  - : Indique à l'agent utilisateur de réinitialiser le document qui a envoyé cette requête.
- [`206 Partial Content`](/fr/docs/Web/HTTP/Status/206)
  - : Ce code de réponse est utilisé en réaction à l'en-tête [`Range`](/fr/docs/Web/HTTP/Headers/Range) envoyé par le client pour séparer le téléchargement en plusieurs flux.
- [`207 Multi-Status`](/fr/docs/Web/HTTP/Status/207) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : Une réponse multi-statut donne des informations sur des ressources multiples dans les situations où les codes de statut multiples sont appropriés.
- [`208 Already Reported`](/fr/docs/Web/HTTP/Status/208) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : Utilisé au sein d'un élément de réponse DAV `<dav:propstat>` pour éviter d'énumérer à maintes reprises les membres internes de bindings multiples vers la même collection.
- [`226 IM Used`](/fr/docs/Web/HTTP/Status/226) ([HTTP Delta encoding](https://tools.ietf.org/html/rfc3229))
  - : Le serveur a exécuté une requête `GET` pour la ressource, et la réponse est une représentation du résultat d'une ou plusieurs manipulations d'instance appliquées à l'instance courante.

## Messages de redirection

- [`300 Multiple Choices`](/fr/docs/Web/HTTP/Status/300)
  - : La requête a plusieurs réponses possibles. L'agent utilisateur ou l'utilisateur doit choisir l'une d'entre elles. Il n'y a pas de manière standard pour choisir l'une de ces réponses mais des liens HTML vers les choix sont recommandés afin de permettre à l'utilisateur de choisir.
- [`301 Moved Permanently`](/fr/docs/Web/HTTP/Status/301)
  - : Ce code de réponse signifie que l'URL de la ressource demandée a été modifiée. Une nouvelle URL est donnée dans la réponse.
- [`302 Found`](/fr/docs/Web/HTTP/Status/302)
  - : Ce code de réponse indique que l'URI de la ressource demandée a été modifiée _temporairement_. De nouveaux changements dans l'URI pourront être effectués ultérieurement. Par conséquent, cette même URI devrait être utilisée par le client pour les requêtes futures.
- [`303 See Other`](/fr/docs/Web/HTTP/Status/303)
  - : Le serveur a envoyé cette réponse pour diriger le client vers la ressource demandée via un autre URI en utilisant une requête `GET`.
- [`304 Not Modified`](/fr/docs/Web/HTTP/Status/304)
  - : Ce code est utilisé pour des raisons de cache. Il indique au client que la réponse n'a pas été modifiée. De fait, le client peut continuer à utiliser la même version de la réponse, mise en cache.
- `305 Use Proxy` {{deprecated_inline}}
  - : A été défini dans une version antérieure de la spécification HTTP pour indiquer qu'une réponse sollicitée doit transiter par un proxy. Ce code est aujourd'hui périmé pour des raisons de sécurité relatives à la configuration d'un proxy.
- `306 unused`
  - : Ce code de réponse n'est plus en service, son usage est actuellement réservé. Il était utilisé dans une version précédente de la spécification HTTP/1.1.
- [`307 Temporary Redirect`](/fr/docs/Web/HTTP/Status/307)
  - : Le serveur a envoyé cette réponse pour rediriger le client afin d'obtenir la ressource demandée via un autre URI, en utilisant la même méthode que précédemment. Ce code a la même sémantique que le code `302 Found`, à l'exception près que l'agent utilisateur _ne doit pas_ changer la méthode HTTP utilisée&nbsp;: si `POST` était utilisé dans la première requête, alors `POST` doit être utilisé dans la seconde.
- [`308 Permanent Redirect`](/fr/docs/Web/HTTP/Status/308)
  - : Cela signifie que la ressource a été déplacée de manière permanente vers une autre URI, spécifiée dans l'en-tête de réponse HTTP `Location:`. Ce code a la même sémantique que le code `301 Moved Permanently`, à l'exception près que l'agent utilisateur _ne doit pas_ changer la méthode HTTP utilisée&nbsp;: si `POST` était utilisé dans la première requête, alors `POST` doit être utilisé dans la seconde.

## Réponses d'erreur côté client

- [`400 Bad Request`](/fr/docs/Web/HTTP/Status/400)
  - : Cette réponse indique que le serveur n'a pas pu comprendre la requête à cause d'une syntaxe invalide.
- [`401 Unauthorized`](/fr/docs/Web/HTTP/Status/401)
  - : Bien que le standard HTTP indique «&nbsp;non-autorisé&nbsp;», la sémantique de cette réponse correspond à «&nbsp;non-authentifié&nbsp;»&nbsp;: le client doit s'authentifier afin d'obtenir la réponse demandée.
- [`402 Payment Required`](/fr/docs/Web/HTTP/Status/402) {{experimental_inline}}
  - : Ce code de réponse est réservé à une utilisation future. Le but initial justifiant la création de ce code était l'utilisation de systèmes de paiement numérique. Cependant, il n'est pas utilisé actuellement et aucune convention standard n'existe à ce sujet.
- [`403 Forbidden`](/fr/docs/Web/HTTP/Status/403)
  - : Le client n'a pas les droits d'accès au contenu, donc le serveur refuse de donner la véritable réponse.
- [`404 Not Found`](/fr/docs/Web/HTTP/Status/404)
  - : Le serveur n'a pas trouvé la ressource demandée. Ce code de réponse est principalement connu pour son apparition fréquente sur le web.
- [`405 Method Not Allowed`](/fr/docs/Web/HTTP/Status/405)
  - : La méthode de la requête est connue du serveur mais n'est pas prise en charge pour la ressource cible. Par exemple, une API peut ne pas autoriser l'utilisation du verbe `DELETE` pour supprimer une ressource.
- [`406 Not Acceptable`](/fr/docs/Web/HTTP/Status/406)
  - : Cette réponse est envoyée quand le serveur web, après une [négociation de contenu géré par le serveur](/fr/docs/Web/HTTP/Content_negotiation#la_négociation_de_contenu_gérée_par_le_serveur), ne trouve rien qui satisfasse les critères donnés par l'agent utilisateur.
- [`407 Proxy Authentication Required`](/fr/docs/Web/HTTP/Status/407)
  - : Similaire au code `401`, sauf que l'authentification doit être effectuée au travers d'un proxy.
- [`408 Request Timeout`](/fr/docs/Web/HTTP/Status/408)
  - : Cette réponse est envoyée via une connexion en attente par certains serveurs, même sans qu'il y ait de requête préalable de la part du client. Cela signifie que le serveur aimerait fermer cette connexion inutilisée. Cette réponse est bien plus utilisée depuis que certains navigateurs, comme Chrome, Firefox 27+ ou IE9, utilisent des [mécanismes de préconnexion HTTP](https://www.belshe.com/2011/02/10/the-era-of-browser-preconnect/) pour accélérer la navigation. Notez aussi que certains serveurs ferment simplement la connexion sans même envoyer ce message.
- [`409 Conflict`](/fr/docs/Web/HTTP/Status/409)
  - : Cette réponse est envoyée quand une requête entre en conflit avec l'état actuel du serveur.
- [`410 Gone`](/fr/docs/Web/HTTP/Status/410)
  - : Cette réponse est envoyée lorsque le contenu demandé a été supprimé de façon permanente du serveur, sans nouvelle adresse. Les clients doivent vider les caches et liens associés à cette ressource. La spécification HTTP a conçu ce code de statut pour qu'il soit utilisé pour des «&nbsp;services promotionnels limités dans le temps&nbsp;». Les API ne devraient pas se sentir obligées d'indiquer que des ressources ont été supprimées avec ce code de statut.
- [`411 Length Required`](/fr/docs/Web/HTTP/Status/411)
  - : Le serveur a rejeté la requête, car le champ d'en-tête `Content-Length` n'est pas défini et le serveur l'impose.
- [`412 Precondition Failed`](/fr/docs/Web/HTTP/Status/412)
  - : Le client a indiqué des préconditions dans ses en-têtes que le serveur ne remplit pas.
- [`413 Payload Too Large`](/fr/docs/Web/HTTP/Status/413)
  - : L'entité demandée est plus grosse que la limite définie par le serveur. Le serveur peut fermer la connexion ou retourner un champ d'en-tête `Retry-After`.
- [`414 URI Too Long`](/fr/docs/Web/HTTP/Status/414)
  - : L'URI interrogé par le client est plus long que ce que le serveur est en mesure d'interpréter.
- [`415 Unsupported Media Type`](/fr/docs/Web/HTTP/Status/415)
  - : Le format média des données demandées n'est pas supporté par le serveur, donc le serveur rejette la requête.
- [`416 Range Not Satisfiable`](/fr/docs/Web/HTTP/Status/416)
  - : La plage spécifiée par le champ d'en-tête `Range` de la requête ne peut pas être satisfaite&nbsp;; il est possible que la plage excède la taille des données provenant de l'URI ciblé.
- [`417 Expectation Failed`](/fr/docs/Web/HTTP/Status/417)
  - : Ce code de réponse signifie que les attentes indiquées par le champ d'en-tête de requête `Expect` n'ont pas pu être satisfaites par le serveur.
- [`418 I'm a teapot`](/fr/docs/Web/HTTP/Status/418)
  - : Le serveur refuse de brasser du café avec une théière.
- [`421 Misdirected Request`](/fr/docs/Web/HTTP/Status/421)
  - : La requête a été envoyée à un serveur incapable de produire une réponse. Ce code peut être envoyé par un serveur qui n'a pas été configuré pour produire des réponses sujettes à la combinaison de schémas et d'identités incluse dans l'URI de la requête.
- [`422 Unprocessable Entity`](/fr/docs/Web/HTTP/Status/422) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : La requête a bien été constituée mais n'a pas pu être traitée à cause d'erreurs sémantiques.
- [`423 Locked`](/fr/docs/Web/HTTP/Status/423) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : La ressource qui est en train d'être consultée est verrouillée.
- [`424 Failed Dependency`](/fr/docs/Web/HTTP/Status/424) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : La requête a échoué à cause de l'échec d'une requête précédente.
- [`425 Too Early`](/fr/docs/Web/HTTP/Status/425) {{experimental_inline}}
  - : Indiquer que le serveur ne souhaite pas traiter une requête qui pourrait être rejouée.
- [`426 Upgrade Required`](/fr/docs/Web/HTTP/Status/426)
  - : Le serveur refuse de traiter la requête en utilisant le protocole actuel mais peut accepter de le faire si le client opte pour un autre protocole. Le serveur _doit_ envoyer un en-tête [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade) dans la réponse 426 pour indiquer le(s) protocole(s) demandé(s) ([Section 6.7 de \[RFC7230\]](https://tools.ietf.org/html/rfc7230#section-6.7)).
- [`428 Precondition Required`](/fr/docs/Web/HTTP/Status/428)
  - : Le serveur d'origine impose que la requête soit conditionnelle. Ceci est prévu pour empêcher le problème de 'perte de mise à jour', où un client récupère l'état d'une ressource avec `GET`, le modifie, et le renvoie au serveur avec `PUT` pendant qu'un tiers modifie l'état du serveur, ce qui conduit à un conflit.
- [`429 Too Many Requests`](/fr/docs/Web/HTTP/Status/429)
  - : L'utilisateur a émis trop de requêtes dans un laps de temps donné.
- [`431 Request Header Fields Too Large`](/fr/docs/Web/HTTP/Status/431)
  - : Le serveur n'est pas disposé à traiter la requête, car les champs d'en-tête sont trop longs. La requête peut être renvoyée après avoir réduit la taille des en-têtes.
- [`451 Unavailable For Legal Reasons`](/fr/docs/Web/HTTP/Status/451)
  - : L'utilisateur tente d'accéder à une ressource illégale, telle qu'une page censurée par un gouvernement.

## Réponses d'erreur côté serveur

- [`500 Internal Server Error`](/fr/docs/Web/HTTP/Status/500)
  - : Le serveur a rencontré une situation qu'il ne sait pas traiter.
- [`501 Not Implemented`](/fr/docs/Web/HTTP/Status/501)
  - : La méthode de requête n'est pas supportée par le serveur et ne peut pas être traitée. Les seules méthodes que les serveurs sont tenus de prendre en charge (et donc pour lesquelles ils ne peuvent pas renvoyer ce code) sont `GET` et `HEAD`.
- [`502 Bad Gateway`](/fr/docs/Web/HTTP/Status/502)
  - : Cette réponse d'erreur signifie que le serveur, alors qu'il fonctionnait en tant que passerelle pour recevoir une réponse nécessaire pour traiter la requête, a reçu une réponse invalide.
- [`503 Service Unavailable`](/fr/docs/Web/HTTP/Status/503)
  - : Le serveur n'est pas prêt pour traiter la requête. Les causes les plus communes sont que le serveur est éteint pour maintenance ou qu'il est surchargé. Notez qu'avec cette réponse, une page ergonomique peut expliquer le problème. Ces réponses doivent être utilisées temporairement et le champ d'en-tête `Retry-After` doit, dans la mesure du possible, contenir une estimation de l'heure de reprise du service. Le webmestre doit aussi faire attention aux en-têtes de mise en cache qui sont envoyés avec cette réponse (qui ne doivent typiquement pas être mis en cache).
- [`504 Gateway Timeout`](/fr/docs/Web/HTTP/Status/504)
  - : Cette réponse d'erreur est renvoyée lorsque le serveur sert de passerelle et ne peut pas donner de réponse dans les temps.
- [`505 HTTP Version Not Supported`](/fr/docs/Web/HTTP/Status/505)
  - : La version de HTTP utilisée dans la requête n'est pas prise en charge par le serveur.
- [`506 Variant Also Negotiates`](/fr/docs/Web/HTTP/Status/506)
  - : Le serveur a une erreur de configuration interne&nbsp;: la négociation de contenu transparente pour la requête aboutit à une dépendance circulaire.
- [`507 Insufficient Storage`](/fr/docs/Web/HTTP/Status/507) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : Le serveur a une erreur de configuration interne&nbsp;: la ressource sélectionnée est configurée pour participer elle-même à une négociation de contenu transparente, et n'est par conséquent pas un nœud terminal valable dans le processus de négociation.
- [`508 Loop Detected`](/fr/docs/Web/HTTP/Status/508) ([WebDAV](/fr/docs/Glossary/WebDAV))
  - : Le serveur a détecté une boucle infinie en traitant la requête.
- [`510 Not Extended`](/fr/docs/Web/HTTP/Status/510)
  - : Des extensions supplémentaires sont requises afin que le serveur puisse satisfaire la requête.
- [`511 Network Authentication Required`](/fr/docs/Web/HTTP/Status/511)
  - : Le code de statut 511 indique que le client doit s'authentifier afin de pouvoir accéder au réseau.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Liste des codes de statut HTTP sur Wikipédia](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
- [Registre officiel des codes de statut HTTP par l'IANA](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
