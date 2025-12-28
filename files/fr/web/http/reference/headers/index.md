---
title: En-têtes HTTP
short-title: En-têtes
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

Les **en-têtes HTTP** permettent au client et au serveur de transmettre des informations supplémentaires avec un message dans une requête ou une réponse.
En HTTP/1.X, un en-tête est un nom insensible à la casse suivi d'un deux-points, puis d'éventuels espaces qui seront ignorés, et enfin de sa valeur (par exemple&nbsp;: `Allow: POST`).
En HTTP/2 et versions ultérieures, les en-têtes sont affichés en minuscules dans les outils de développement (`accept: */*`), et précédés d'un deux-points pour un groupe spécial de [pseudo-en-têtes](/fr/docs/Web/HTTP/Guides/Messages#pseudo-en-têtes) (`:status: 200`).
Vous trouverez plus d'informations sur la syntaxe dans chaque version du protocole sur la page [Messages HTTP](/fr/docs/Web/HTTP/Guides/Messages).

Des en-têtes propriétaires personnalisés ont historiquement été utilisés avec le préfixe `X-`, mais cette convention a été dépréciée en 2012 en raison des inconvénients qu'elle a causés lorsque des champs non standard sont devenus standard dans la [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648)&nbsp;; d'autres sont listés dans le [registre IANA des noms de champs HTTP <sup>(angl.)</up>](https://www.iana.org/assignments/http-fields/http-fields.xhtml), dont le contenu original a été défini dans la [RFC 4229 <sup>(angl.)</up>](https://datatracker.ietf.org/doc/html/rfc4229).
Le registre IANA répertorie les en-têtes, y compris [des informations sur leur statut <sup>(angl.)</up>](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Les en-têtes peuvent être groupés selon leur contexte&nbsp;:

- {{Glossary("Request header", "Les en-têtes de requête")}}
  - : Contiennent des informations additionnelles à propos de la ressource à récupérer ou à propos du client qui la demande.
- {{Glossary("Response header", "Les en-têtes de réponse")}}
  - : Contiennent des informations supplémentaires au sujet de la réponse (par exemple son emplacement), ou au sujet du serveur qui la fournit.
- {{Glossary("Representation header", "Les en-têtes de représentation")}}
  - : Contiennent des informations à propos du corps de la ressource, comme son [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types), ou le type de compression ou d'encodage appliqué.
- {{Glossary("Payload header", "Les en-têtes de charge utile")}}
  - : Contiennent des informations indépendantes de la représentation sur la charge utile, comme la longueur du contenu ou l'encodage utilisé pour le transport.

Les en-têtes peuvent aussi être groupés selon comment ils sont traités par {{Glossary("Proxy_server", "les serveurs mandataires")}}&nbsp;:

- En-têtes de bout en bout (<i lang="en">end-to-end headers</i>)
  - : Ces en-têtes doivent être transmis au destinataire final du message&nbsp;; c'est-à-dire le serveur dans le cas d'une requête ou le client dans le cas d'une réponse. Les serveurs mandataires intermédiaires doivent retransmettre les en-têtes de bout en bout sans modification et doivent les mettre en cache.
- En-têtes de point à point (<i lang="en">hop-by-hop headers</i>)
  - : Ces en-têtes n'ont de sens que pour une unique connexion de la [couche transport](https://fr.wikipedia.org/wiki/Couche_transport) et ne doivent pas être retransmis par des serveurs mandataires ou mis en cache. Seuls des en-têtes point à point peuvent être définis avec l'en-tête [`Connection`](/fr/docs/Web/HTTP/Reference/Headers/Connection).

## Authentification

- {{HTTPHeader("WWW-Authenticate")}}
  - : Définit la méthode d'authentification qui doit être utilisée pour obtenir l'accès à la ressource.
- {{HTTPHeader("Authorization")}}
  - : Contient les informations d'authentification pour authentifier un agent utilisateur avec un serveur.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Définit la méthode d'authentification qui doit être utilisée pour obtenir la ressource derrière un serveur mandataire.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Contient les informations d'authentification nécessaires pour authentifier un agent utilisateur avec un serveur mandataire.

## Mise en cache

- {{HTTPHeader("Age")}}
  - : La durée en secondes pendant laquelle un objet a été dans le cache d'un serveur mandataire.
- {{HTTPHeader("Cache-Control")}}
  - : Définit des directives pour les mécanismes de mise en cache dans les requêtes et les réponses.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Nettoie les données de navigation (par exemple, les cookies, le stockage local et le cache) associé au site qui envoie la réponse.
- {{HTTPHeader("Expires")}}
  - : La date et l'heure après lesquelles la réponse est considérée comme périmée.
- {{HTTPHeader("No-Vary-Search")}} {{Experimental_Inline}}
  - : Définit un ensemble de règles qui déterminent comment les paramètres de requête d'une URL affecteront la correspondance du cache. Ces règles dictent si la même URL avec des paramètres différents doit être enregistrée comme des entrées distinctes dans le cache du navigateur.

## En-têtes conditionnels

- {{HTTPHeader("Last-Modified")}}
  - : La date à laquelle la ressource a été modifiée pour la dernière fois. Cette date est utilisée pour comparer plusieurs versions d'une même ressource. Moins précise qu'{{HTTPHeader("ETag")}}, elle est plus simple à calculer dans certains environnements. Les requêtes conditionnelles avec {{HTTPHeader("If-Modified-Since")}} et {{HTTPHeader("If-Unmodified-Since")}} utilisent cette valeur pour modifier le comportement de la requête.
- {{HTTPHeader("ETag")}}
  - : Une chaîne de caractères unique qui identifie la version de la ressource. Les requêtes conditionnelles avec {{HTTPHeader("If-Match")}} et {{HTTPHeader("If-None-Match")}} utilisent cette valeur pour modifier le comportement de la requête.
- {{HTTPHeader("If-Match")}}
  - : Rend la requête conditionnelle et applique la méthode uniquement si la ressource enregistrée correspond à l'un des ETag donnés.
- {{HTTPHeader("If-None-Match")}}
  - : Rend la requête conditionnelle et applique la méthode uniquement si la ressource enregistrée _ne correspond pas_ à l'un des ETag donnés. Cet en-tête est utilisé afin de mettre à jour les caches (pour les requêtes sûres) ou pour empêcher de téléverser une nouvelle ressource lorsqu'une équivalente existe déjà.
- {{HTTPHeader("If-Modified-Since")}}
  - : Rend la requête conditionnelle pour que la ressource ne soit transmise que si elle a été modifiée après une date donnée. Cet en-tête est utilisé pour transmettre des données uniquement lorsque le cache est périmé.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Rend la requête conditionnelle pour que la ressource ne soit transmise que si elle n'a pas été modifiée après une date donnée. Cela permet de s'assurer de la cohérence d'un nouveau fragment d'un intervalle donné avec les anciens fragments, ou d'implémenter un système de contrôle concurrent optimiste pour la mise à jour de documents existants.
- {{HTTPHeader("Vary")}}
  - : Indique les en-têtes de requêtes qui ont influencé la fourniture de la réponse (entre une éventuelle version en cache et une version fraîche).

## Gestion de la connexion

- {{HTTPHeader("Connection")}}
  - : Contrôle si la connexion réseau reste ouverte après que la transaction actuelle a fini.
- {{HTTPHeader("Keep-Alive")}}
  - : Contrôle la durée pendant laquelle une connexion persistente devrait rester ouverte.

## Négociation de contenu

Pour plus d'informations à ce sujet, voir [l'article sur la négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Indique au serveur {{Glossary("MIME_type", "les types")}} de données qui peuvent être renvoyés pour le type de contenu de la réponse.
- {{HTTPHeader("Accept-Encoding")}}
  - : L'algorithme d'encodage, généralement [un algorithme de compression](/fr/docs/Web/HTTP/Guides/Compression), qui peut être utilisé pour la ressource renvoyée.
- {{HTTPHeader("Accept-Language")}}
  - : Indique au serveur la ou les langues dans lesquelles la ressource peut être renvoyée. Il s'agit d'une indication et cette valeur n'est pas nécessairement choisie par la personne. Il appartient au serveur de veiller à ne pas outrepasser des choix de locale explicites effectués par ailleurs (par exemple le choix d'une langue dans une liste déroulante).
- {{HTTPHeader("Accept-Patch")}}
  - : L'en-tête de réponse de _négociation de contenu de requête_ qui indique quels [types de média](/fr/docs/Web/HTTP/Guides/MIME_types) le serveur est capable de comprendre dans une requête {{HTTPMethod("PATCH")}}.
- {{HTTPHeader("Accept-Post")}}
  - : L'en-tête de réponse de _négociation de contenu de requête_ qui indique quels [types de média](/fr/docs/Web/HTTP/Guides/MIME_types) le serveur est capable de comprendre dans une requête {{HTTPMethod("POST")}}.

## Contrôles

- {{HTTPHeader("Expect")}}
  - : Indique les conditions à respecter par le serveur pour gérer correctement la requête.
- {{HTTPHeader("Max-Forwards")}}
  - : Lorsque la méthode {{HTTPMethod("TRACE")}} est utilisée, cet en-tête indique le nombre maximal de sauts que la requête peut effectuer avant de revenir à l'émetteur.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Contient les [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) enregistrés, précédemment envoyés par le serveur avec l'en-tête {{HTTPHeader("Set-Cookie")}}.
- {{HTTPHeader("Set-Cookie")}}
  - : Envoie des cookies de la part du serveur vers l'agent utilisateur.

## CORS

Pour plus d'informations, voir [la documentation CORS](/fr/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indique si les informations d'authentification peuvent être exposées lors d'une requête vers une autre origine.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Utilisé dans une réponse à {{Glossary("Preflight_request", "une requête préparatoire")}} pour indiquer les en-têtes HTTP qui peuvent être utilisés lors de la requête réelle.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Utilisé dans une réponse à {{Glossary("Preflight_request", "une requête préparatoire")}} pour indiquer les méthodes HTTP qui peuvent être utilisés lors de la requête réelle.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indique si la réponse peut être partagée.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indique la liste des en-têtes qui peuvent être exposés dans la réponse.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indique la durée pendant laquelle le résultat d'une requête préparatoire peut être mis en cache.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Utilisé lors de l'émission d'une requête préparatoire pour indiquer au serveur les en-têtes HTTP qui seront utilisés lors de la requête réelle.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Utilisé lors de l'émission d'une requête préparatoire pour indiquer au serveur [la méthode HTTP](/fr/docs/Web/HTTP/Reference/Methods) qui sera utilisée lors de la requête réelle.
- {{HTTPHeader("Origin")}}
  - : Indique l'origine de la requête.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Indique les origines autorisées à consulter les valeurs des attributs récupérés grâce à [l'API <i lang="en">Resource Timing</i>](/fr/docs/Web/API/Performance_API/Resource_timing) (au lieu que 0 soit fourni comme valeur par défaut en raison des restrictions entre les origines).

## Téléchargement

- {{HTTPHeader("Content-Disposition")}}
  - : Indique si la ressource transmise devrait être affichée dans le navigateur (le comportement par défaut en l'absence de l'en-tête), ou si elle devrait être gérée comme un téléchargement (auquel cas le navigateur affichera une boîte de dialogue pertinente).

## Résumés d'intégrité

- {{HTTPHeader("Content-Digest")}} {{Experimental_Inline}}
  - : Fournit un {{Glossary("hash function", "digest")}} du flux d'octets encadré dans un message HTTP (le contenu du message) dépendant de {{HTTPHeader("Content-Encoding")}} et {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{Experimental_Inline}}
  - : Fournit un {{Glossary("hash function", "digest")}} de la représentation sélectionnée de la ressource cible avant la transmission.
    Contrairement à {{HTTPHeader("Content-Digest")}}, le résumé ne prend pas en compte {{HTTPHeader("Content-Encoding")}} ou {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{Experimental_Inline}}
  - : Indique le souhait d'un en-tête {{HTTPHeader("Content-Digest")}}.
    Il s'agit de l'analogue `Content-` de {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{Experimental_Inline}}
  - : Indique le souhait d'un en-tête {{HTTPHeader("Repr-Digest")}}.
    Il s'agit de l'analogue `Repr-` de {{HTTPHeader("Want-Content-Digest")}}.

## Politique d'intégrité

- {{HTTPHeader("Integrity-Policy")}}
  - : Garantit que toutes les ressources chargées par l'agent utilisateur (d'un certain type) bénéficient des garanties de [l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity).
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Signale les ressources chargées par l'agent utilisateur qui violeraient les garanties de [l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity) si la politique d'intégrité était appliquée (en utilisant l'en-tête `Integrity-Policy`).

## Informations sur le corps

- {{HTTPHeader("Content-Length")}}
  - : La taille de la ressource, exprimée en octets (sur une base décimale).
- {{HTTPHeader("Content-Type")}}
  - : Le type de média de la ressource.
- {{HTTPHeader("Content-Encoding")}}
  - : L'algorithme de compression utilisé.
- {{HTTPHeader("Content-Language")}}
  - : La langue humaine cible pour le public, qui permet à une personne de recevoir une ressource adaptée à sa locale.
- {{HTTPHeader("Content-Location")}}
  - : Indique un emplacement alternatif pour les données renvoyées.

## Préférences

Les préférences peuvent être envoyées par les clients dans les requêtes pour indiquer des comportements optionnels pour les requêtes et les réponses.
La réponse du serveur peut indiquer si une préférence est appliquée, dans les cas où cela serait autrement ambigu pour le client.
Les navigateurs ne gèrent pas nativement l'envoi de préférences via ces en-têtes&nbsp;; ils sont utilisés dans des clients personnalisés et spécifiques à une implémentation.

- {{HTTPHeader("Prefer")}}
  - : Indique les préférences pour des comportements spécifiques du serveur lors du traitement de la requête. Par exemple, il peut demander un contenu de réponse minimal (`return=minimal`) ou un traitement asynchrone (`respond-async`). Le serveur traite la requête normalement si l'en-tête n'est pas pris en charge.
- {{HTTPHeader("Preference-Applied")}}
  - : Informe le client des préférences spécifiées dans l'en-tête `Prefer` qui ont été appliquées par le serveur. Il s'agit d'un en-tête uniquement de réponse fournissant de la transparence sur la gestion des préférences.

## Gestion des serveurs mandataires (<i lang="en">proxies</i>)

- {{HTTPHeader("Forwarded")}}
  - : Permet d'ajouter des informations qui seraient perdues par ailleurs lors de la transmission par des serveurs mandataires.
- {{HTTPHeader("Via")}}
  - : Information ajoutée par les serveurs mandataires (dans les deux sens) et qui peut apparaître dans les en-têtes de réponse et de requête.

## Requêtes d'intervalle

Les [requêtes d'intervalle HTTP](/fr/docs/Web/HTTP/Guides/Range_requests) permettent au client de demander une portion d'une ressource au serveur.
Les requêtes d'intervalle sont utiles pour des applications comme les lecteurs multimédias qui prennent en charge l'accès aléatoire, les outils de données qui savent qu'ils·elles n'ont besoin que d'une partie d'un gros fichier, et les gestionnaires de téléchargement qui permettent à l'utilisateur·ice de mettre en pause et de reprendre un téléchargement.

- {{HTTPHeader("Accept-Ranges")}}
  - : Indique si le serveur prend en charge les requêtes d'intervalle et, le cas échéant, l'unité selon laquelle l'intervalle doit être exprimé.
- {{HTTPHeader("Range")}}
  - : Indique la partie du document que le serveur devrait renvoyer.
- {{HTTPHeader("If-Range")}}
  - : Crée une requête d'intervalle conditionnelle qui est uniquement réussie si l'ETag ou la date fournie correspond à la ressource distante. Cet en-tête est utilisé afin d'éviter de télécharger deux intervalles pour des versions incompatibles d'une même ressource.
- {{HTTPHeader("Content-Range")}}
  - : Indique l'emplacement du message partiel au sein du corps complet.

## Redirection

- {{HTTPHeader("Location")}}
  - : Indique l'URL vers laquelle rediriger la requête.
- {{HTTPHeader("Refresh")}}
  - : Indique au navigateur de rafraîchir la page ou de rediriger vers une autre. Cet en-tête prend la même valeur qu'[un élément `<meta>` avec `http-equiv="refresh"`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Contexte de la requête

- {{HTTPHeader("From")}}
  - : Contient une adresse électronique qui permet de s'adresser à la personne qui contrôle l'agent utilisateur qui a émis la requête.
- {{HTTPHeader("Host")}}
  - : Indique le nom de domaine du serveur (pour l'hébergement virtuel) et l'éventuel numéro de port TCP sur lequel le serveur écoute.
- {{HTTPHeader("Referer")}}
  - : L'adresse de la page web précédente dont le lien a mené à la page actuellement demandée.
- {{HTTPHeader("Referrer-Policy")}}
  - : Gère les informations qui doivent être envoyées via l'en-tête {{HTTPHeader("Referer")}}.
- {{HTTPHeader("User-Agent")}}
  - : Contient une chaîne de caractères spécifique qui permet aux pairs de protocole réseau d'identifier le type d'application, le système d'exploitation, l'éditeur ou la version du logiciel utilisé par l'agent utilisateur.

## Contexte de la réponse

- {{HTTPHeader("Allow")}}
  - : Indique l'ensemble des méthodes HTTP prises en charge par la ressource.
- {{HTTPHeader("Server")}}
  - : Contient des informations à propos du logiciel utilisé par le serveur d'origine gérant la requête.

## Sécurité

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Permet à un serveur d'indiquer une règle pour le chargement des ressources d'autres origines pour un document donné.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Empêche l'ouverture/le contrôle d'une fenêtre par d'autres domaines.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Empêche d'autres domaines de lire la réponse pour les ressources auxquelles cet en-tête est appliqué. Voir aussi [la page d'explication sur](/fr/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Contrôle les ressources qu'un agent utilisateur est autorisé à charger pour une page donnée.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Permet de surveiller les résultats de règles CSP sans pour autant les mettre en place. Les rapports émis en cas de violation sont des documents {{Glossary("JSON")}} envoyés par une requête HTTP `POST` à l'URI indiquée dans l'en-tête.
- {{HTTPHeader("Expect-CT")}} {{Deprecated_Inline}}
  - : Permet aux sites d'activer le rapport et l'application de la [transparence des certificats](/fr/docs/Web/Security/Defenses/Certificate_Transparency) afin de détecter l'utilisation de certificats émis de manière incorrecte pour ce site.
- {{HTTPHeader("Permissions-Policy")}}
  - : Fournit un mécanisme pour autoriser ou interdire l'utilisation de certaines fonctionnalités dans le cadre de la page et dans les éventuels [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe) qu'elle embarque.
- {{HTTPHeader("Reporting-Endpoints")}} {{Experimental_Inline}}
  - : L'en-tête de réponse qui permet aux propriétaires de sites de définir un ou plusieurs points de terminaison utilisés pour recevoir des erreurs telles que les rapports de violation CSP, les rapports {{HTTPHeader("Cross-Origin-Opener-Policy")}}, ou d'autres violations génériques.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Force la communication à passer par HTTPS plutôt que par HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Envoie un signal au serveur indiquant la préférence du client pour une réponse chiffrée et authentifiée, afin qu'il puisse correctement gérer la directive CSP {{CSP("upgrade-insecure-requests")}}.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Désactive le choix heuristique du type MIME et force le navigateur à utiliser le type fourni via l'en-tête {{HTTPHeader("Content-Type")}}.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Indique si un navigateur est autorisé à afficher une page dans un élément HTML {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, ou {{HTMLElement("object")}}.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Indique si un fichier de règles entre domaines (`crossdomain.xml`) est autorisé. Le fichier pourra définir des règles pour permettre aux clients comme Adobe Acrobat, ou Apache Flex de gérer des données entre différents domaines alors que cela aurait été interdit par [la politique d'origine unique](/fr/docs/Web/Security/Defenses/Same-origin_policy).
    L'en-tête `X-Permitted-Cross-Domain-Policies` remplace ces fichiers de règles afin que les clients continuent de bloquer les requêtes non désirées.
- {{HTTPHeader("X-Powered-By")}}
  - : Cet en-tête pourra être défini par des environnements d'hébergement ou d'autres outils et contenir des informations à leur propos, qui ne sont pas utiles à l'application même ou aux personnes qui l'utilisent. Il est préférable de ne pas fournir cet en-tête aux clients pour éviter d'exposer certaines vulnérabilités.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Active le filtrage des scripts intersites (XSS).

### En-têtes de métadonnées pour les requêtes de récupération

Les {{Glossary("Fetch metadata request header", "en-têtes de métadonnées pour les requêtes de récupération")}} fournissent des informations à propos du contexte d'origine de la requête. Un serveur pourra les utiliser pour déterminer si une requête est autorisée, selon sa provenance et comment la ressource sera utilisée.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Indique la relation entre l'origine de la partie qui a initié la requête et l'origine de la ressource demandée. Il s'agit d'un en-tête structuré dont la valeur peut être `cross-site`, `same-origin`, `same-site`, ou `none`.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Indique le mode de la requête à un serveur. Il s'agit d'un en-tête structuré dont la valeur peut être `cors`, `navigate`, `no-cors`, `same-origin`, et `websocket`.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Indique si une requête de navigation a été déclenchée par une utilisatrice ou un utilisateur. Il s'agit d'un en-tête structuré booléen dont la valeur peut être `?0` (pour indiquer faux) ou `?1` (pour indiquer vrai).
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Indique la destination de la requête. Il s'agit d'un en-tête structuré dont la valeur peut être `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` et `xslt`.

Les en-têtes de requêtes qui suivent ne sont pas à strictement parler des en-têtes de métadonnées pour les requêtes de récupération, mais fournissent des informations similaires sur le contexte d'utilisation d'une ressource. Un serveur pourra les utiliser afin de modifier le comportement de son cache ou les informations qu'il retourne&nbsp;:

- {{HTTPHeader("Sec-Purpose")}}
  - : Indique le but de la requête lorsque celui-ci n'est pas une utilisation immédiate par l'agent utilisateur. Cet en-tête prend actuellement une seule valeur possible&nbsp;: `prefetch`, qui indique que la ressource est récupérée de façon préventive, pour préparer une éventuelle navigation future vers celle-ci.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Un en-tête de requête envoyé de façon préventive pour récupérer (via {{DOMxRef("Window/fetch", "fetch()")}}) une ressource au démarrage d'un <i lang="en">service worker</i>. La valeur, définie via {{DOMxRef("NavigationPreloadManager.setHeaderValue()")}}, peut être utilisée afin d'informer un serveur qu'une ressource différente (que celle fournie pour une opération `fetch()` normale) devrait être renvoyée.

## En-têtes d'accès au stockage lors du fetch

Ces en-têtes permettent un flux de travail amélioré pour l'[API Storage Access](/fr/docs/Web/API/Storage_Access_API).

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Indique le «&nbsp;statut d'accès au stockage&nbsp;» pour le contexte de fetch actuel, qui sera l'une des valeurs `none`, `inactive` ou `active`.
    Le serveur peut répondre avec `Activate-Storage-Access` pour demander au navigateur d'activer une autorisation inactive et de réessayer la requête, ou pour charger une ressource avec accès à ses cookies tiers si le statut est `active`.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Utilisé en réponse à `Sec-Fetch-Storage-Access` pour indiquer que le navigateur peut activer une autorisation existante pour un accès sécurisé et réessayer la requête avec les cookies, ou charger une ressource avec accès aux cookies si une autorisation est déjà activée.

## Évènements émis par le serveur

- {{HTTPHeader("Reporting-Endpoints")}}
  - : En-tête de réponse utilisé pour définir les points de terminaison du serveur où le navigateur doit envoyer les rapports d'avertissement et d'erreur lors de l'utilisation de l'[API Reporting](/fr/docs/Web/API/Reporting_API).
- {{HTTPHeader("Report-To")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : En-tête de réponse utilisé pour définir les points de terminaison du serveur où le navigateur doit envoyer les rapports d'avertissement et d'erreur lors de l'utilisation de l'[API Reporting](/fr/docs/Web/API/Reporting_API).

## Encodage lors du transfert

- {{HTTPHeader("Transfer-Encoding")}}
  - : Définit la forme d'encodage à utiliser pour transférer de façon sûre le corps de la requête au client.
- {{HTTPHeader("TE")}}
  - : Indique les encodages de transfert acceptables pour l'agent utilisateur.
- {{HTTPHeader("Trailer")}}
  - : Permet à l'émetteur d'inclure des champs complémentaires à la fin du message morcelé.

## WebSockets

En-têtes utilisés par l'[API WebSockets](/fr/docs/Web/API/WebSockets_API) lors de la [poignée de main WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#la_poignée_de_main_websocket)&nbsp;:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : En-tête de réponse qui indique que le serveur est prêt à passer à une connexion WebSocket.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Dans les requêtes, cet en-tête indique les extensions WebSocket prises en charge par le client par ordre de préférence.
    Dans les réponses, il indique l'extension sélectionnée par le serveur parmi les préférences du client.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : En-tête de requête contenant une clé qui vérifie que le client souhaite explicitement ouvrir un `WebSocket`.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Dans les requêtes, cet en-tête indique les sous-protocoles pris en charge par le client par ordre de préférence.
    Dans les réponses, il indique le sous-protocole sélectionné par le serveur parmi les préférences du client.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Dans les requêtes, cet en-tête indique la version du protocole WebSocket utilisée par le client.
    Dans les réponses, il n'est envoyé que si la version du protocole demandée n'est pas prise en charge par le serveur, et liste les versions prises en charge par le serveur.

## Autres

- {{HTTPHeader("Alt-Svc")}}
  - : Utilisé pour lister les méthodes alternatives pour accéder au service.
- {{HTTPHeader("Alt-Used")}}
  - : Utilisé pour identifier le service alternatif utilisé.
- {{HTTPHeader("Date")}}
  - : Contient la date et l'heure à laquelle le message a été émis.
- {{HTTPHeader("Link")}}
  - : Cet en-tête permet de sérialiser un ou plusieurs liens dans des en-têtes HTTP. Il est sémantiquement équivalent à l'élément HTML {{HTMLElement("link")}}.
- {{HTTPHeader("Retry-After")}}
  - : Indique la durée pendant laquelle l'agent utilisateur devrait attendre avant d'envoyer une requête suivante.
- {{HTTPHeader("Server-Timing")}}
  - : Permet de communiquer une ou plusieurs métriques et leur description pour un aller-retour requête-réponse donné.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Utilisé afin de supprimer [la contrainte sur le chemin](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers#pourquoi_est-ce_lenregistrement_de_mon_service_worker_échoue_) lorsqu'il est inclus dans la réponse fournissant le script du <i lang="en">service worker</i> (voir [le paragraphe correspondant dans la spécification](https://w3c.github.io/ServiceWorker/#service-worker-script-response)).
- {{HTTPHeader("SourceMap")}}
  - : Pointe vers une [<i lang="en">source map</i>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) pour la ressource demandée.
- {{HTTPHeader("Upgrade")}}
  - : Cet en-tête, valable uniquement pour HTTP/1.1, permet de basculer une connexion déjà établie sur un protocole différent (en conservant le même protocole de transport). Ainsi, un client pourra l'utiliser pour demander que la connexion bascule de HTTP/1.1 vers HTTP/2 ou pour passer d'une connexion HTTPS à une connexion WebSocket.
- {{HTTPHeader("Priority")}}
  - : Fournit une indication sur la priorité d'une requête de ressource particulière sur une connexion donnée.
    La valeur peut être envoyée dans une requête pour indiquer la priorité du client, ou dans une réponse si le serveur choisit de re-prioriser la requête.

## En-têtes expérimentaux

### En-têtes de rapport d'attribution

L'[API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API) permet aux développeur·euse·s de mesurer les conversions — par exemple lorsqu'un·e utilisateur·ice clique sur une publicité intégrée à un site puis achète l'article sur le site du vendeur — et d'accéder ensuite à des rapports sur ces conversions. Cela se fait sans recourir aux cookies de suivi tiers, mais en s'appuyant sur divers en-têtes pour enregistrer des **sources** et des **déclencheurs** qui sont associés pour indiquer une conversion.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Utilisé pour indiquer que la réponse correspondant à la requête actuelle est éligible à la participation au rapport d'attribution, en enregistrant soit une source d'attribution, soit un déclencheur d'attribution.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Inclus dans la réponse à une requête ayant inclus un en-tête `Attribution-Reporting-Eligible`, il sert à enregistrer une source d'attribution.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Inclus dans la réponse à une requête ayant inclus un en-tête `Attribution-Reporting-Eligible`, il sert à enregistrer un déclencheur d'attribution.

### Indications fournies par le client (<i lang="en">client hints</i>)

Les [indications client (ou <i lang="en">client hints</i> en anglais)](/fr/docs/Web/HTTP/Guides/Client_hints) sont des en-têtes de requêtes qui fournissent des informations à propos du client comme le type d'appareil ou les conditions réseau et qui permettent aux serveurs d'optimiser ce qui peut alors être servi dans ces conditions.

C'est aux serveurs de demander aux clients les indications qui les intéressent à l'aide de l'en-tête [`Accept-CH`](/fr/docs/Web/HTTP/Headers/Accept-CH). Le client pourra alors choisir d'inclure les en-têtes demandés dans les requêtes à venir.

- {{HTTPHeader("Accept-CH")}}
  - : Les serveurs peuvent indiquer leur prise en charge des indications client à l'aide de l'en-tête `Accept-CH` ou d'un élément `<meta>` équivalent doté de l'attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta#http-equiv).
- {{HTTPHeader("Critical-CH")}} {{Experimental_Inline}}
  - : Utilisé avec [`Accept-CH`](/fr/docs/Web/HTTP/Headers/Accept-CH), `Critical-CH` est utilisé pour indiquer que les indications client acceptées sont [des indications client critiques](/fr/docs/Web/HTTP/Guides/Client_hints#indications_client_critiques).

Les différentes catégories d'indication client sont listées ci-après.

#### Indications client pour l'agent utilisateur

Les [indications client pour l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints) sont des en-têtes de requête qui fournissent des informations à propos de l'agent utilisateur, de la plateforme et architecture sur lesquelles il est exécuté et à propos des préférences définies au niveau de l'agent utilisateur ou de la plateforme&nbsp;:

- {{HTTPHeader("Sec-CH-UA")}} {{Experimental_Inline}}
  - : La marque et la version de l'agent utilisateur.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{Experimental_Inline}}
  - : L'architecture de la plateforme sur laquelle est exécuté l'agent utilisateur.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{Experimental_Inline}}
  - : Le nombre de bits de l'architecture du processeur de la plateforme sur laquelle l'agent utilisateur est exécuté (par exemple, 64 pour 64 bits).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{Experimental_Inline}}
  - : Les facteurs de forme de l'agent utilisateur, décrivant comment l'utilisateur·ice interagit avec l'agent utilisateur.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{Deprecated_Inline}}
  - : La chaîne de caractères de la version complète de l'agent utilisateur.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{Experimental_Inline}}
  - : La version complète de chaque composante de la liste composant la marque de l'agent utilisateur.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{Experimental_Inline}}
  - : Indique si l'agent utilisateur est exécuté sur un appareil mobile ou s'il préfère plus généralement une ergonomie mobile.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{Experimental_Inline}}
  - : Le modèle d'appareil sur lequel est exécuté l'agent utilisateur.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{Experimental_Inline}}
  - : La plateforme et système d'exploitation sur lesquelles l'agent utilisateur est exécuté.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{Experimental_Inline}}
  - : La version du système d'exploitation sur lequel l'agent utilisateur est exécuté.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{Experimental_Inline}}
  - : Indique si le binaire de l'agent utilisateur s'exécute en mode 32 bits sur Windows 64 bits.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{Experimental_Inline}}
  - : Indique la préférence de l'utilisatrice ou de l'utilisateur entre un thème clair ou un thème sombre.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{Experimental_Inline}}
  - : Indique la préférence de l'utilisatrice ou de l'utilisateur pour voir moins d'animations et d'effets décalant le contenu.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{Experimental_Inline}}
  - : L'en-tête de requête indique la préférence de l'agent utilisateur pour une transparence réduite.

> [!NOTE]
> Les indices client pour l'agent utilisateur ne sont pas disponibles à l'intérieur des [cadres protégés](/fr/docs/Web/API/Fenced_frame_API), car ils reposent sur la délégation de la [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy), ce qui pourrait être utilisé pour divulguer des données.

#### Indices client pour les appareils et images réactives

- {{HTTPHeader("Sec-CH-Device-Memory")}} {{Experimental_Inline}}
  - : Quantité approximative de mémoire vive disponible sur le client. Fait partie de l'[API Device Memory](/fr/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("Sec-CH-DPR")}} {{Experimental_Inline}}
  - : L'en-tête de requête qui fournit le ratio de pixels de l'appareil client (le nombre de {{Glossary("device pixel", "pixels matériels")}} pour chaque {{Glossary("CSS pixel", "pixel CSS")}}).
- {{HTTPHeader("Sec-CH-Viewport-Height")}} {{Experimental_Inline}}
  - : L'en-tête de requête qui fournit la hauteur de la zone d'affichage du client en {{Glossary("CSS pixel", "pixels CSS")}}.
- {{HTTPHeader("Sec-CH-Viewport-Width")}} {{Experimental_Inline}}
  - : L'en-tête de requête qui fournit la largeur de la zone d'affichage du client en {{Glossary("CSS pixel", "pixels CSS")}}.
- {{HTTPHeader("Sec-CH-Width")}} {{Experimental_Inline}}
  - : L'en-tête de requête qui fournit la largeur de l'image en {{Glossary("CSS pixel", "pixels CSS")}}.

##### Indices client obsolètes pour les appareils et images réactives

- {{HTTPHeader("Device-Memory")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Normalisé sous {{HTTPHeader("Sec-CH-Device-Memory")}}
- {{HTTPHeader("DPR")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Normalisé sous {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Viewport-Width")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Normalisé sous {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Width")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Normalisé sous {{HTTPHeader("Sec-CH-Width")}}

#### Indications client relatives au réseau

Les indications client relatives au réseau permettent au serveur de choisir les informations envoyées selon la bande passante et la latence réseau du client.

- {{HTTPHeader("Downlink")}} {{Experimental_Inline}}
  - : Une approximation de la bande passante, exprimée en Mo/s entre le client et le serveur. Cet en-tête s'inscrit dans [l'API <i lang="en">Network Information</i>](/fr/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{Experimental_Inline}}
  - : Le [type de connexion effectif](/fr/docs/Glossary/Effective_connection_type) qui correspond le mieux à la latence et bande passante de la connexion. Cet en-tête s'inscrit dans [l'API <i lang="en">Network Information</i>](/fr/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{Experimental_Inline}}
  - : Le temps d'aller-retour (RTT) au niveau de la couche d'application, exprimée en millisecondes, et qui inclut le temps de traitement du serveur. Cet en-tête s'inscrit dans [l'API <i lang="en">Network Information</i>](/fr/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{Experimental_Inline}}
  - : Une chaîne de caractères `on` indiquant la préférence de l'agent utilisateur pour un usage de données réduit.

### Transport par dictionnaire de compression

[Le transport par dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) est une méthode qui consiste à utiliser un dictionnaire de compression partagé pour réduire la taille des réponses HTTP, plutôt que d'utiliser le dictionnaire statique standard de {{Glossary("Brotli compression", "compression Brotli")}} ou {{Glossary("Zstandard compression", "compression Zstandard")}}.

- {{HTTPHeader("Available-Dictionary")}} {{Experimental_Inline}}
  - : Un navigateur peut utiliser cet en-tête de requête pour indiquer le meilleur dictionnaire dont il dispose pour que le serveur l'utilise pour la compression.
- {{HTTPHeader("Dictionary-ID")}} {{Experimental_Inline}}
  - : Utilisé lorsqu'un navigateur dispose déjà d'un dictionnaire pour une ressource et que le serveur a fourni un `id` pour le dictionnaire dans l'en-tête `Use-As-Dictionary`.
    Les requêtes pour des ressources pouvant utiliser le dictionnaire comportent un en-tête `Available-Dictionary` et l'`id` du dictionnaire fourni par le serveur dans l'en-tête `Dictionary-ID`.
- {{HTTPHeader("Use-As-Dictionary")}} {{Experimental_Inline}}
  - : Liste les critères de correspondance pour lesquels le dictionnaire pourra être utilisé lors de futures requêtes.

### Confidentialité

- {{HTTPHeader("DNT")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : L'en-tête de requête qui indique la préférence de l'utilisateur·ice en matière de suivi (Ne Pas Suivre).
    Déprécié au profit du <i lang="en">Global Privacy Control</i> (<abbr>GPC</abbr>), qui est communiqué aux serveurs via l'en-tête {{HTTPHeader("Sec-GPC")}}, et accessible aux clients via {{DOMxRef("navigator.globalPrivacyControl")}}.
- {{HTTPHeader("Tk")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : En-tête de réponse qui indique le statut de suivi appliqué à la requête correspondante. Utilisé conjointement avec DNT.
- {{HTTPHeader("Sec-GPC")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Indique le consentement ou l'absence de consentement pour le partage des informations personnelles avec des tierces parties.

### Sécurité

- {{HTTPHeader("Origin-Agent-Cluster")}} {{Experimental_Inline}}
  - : L'en-tête de réponse utilisé pour indiquer que le {{DOMxRef("Document")}} associé doit être placé dans un _[groupe d'agents <sup>(angl.)</sup>](https://tc39.es/ecma262/#sec-agent-clusters) indexé par origine_.
    Cet isolement permet aux agents utilisateur d'allouer plus efficacement des ressources spécifiques à l'implémentation pour les groupes d'agents, comme des processus ou des fils d'exécution.

### Évènements émis par le serveur

- {{HTTPHeader("NEL")}} {{Experimental_Inline}}
  - : Définit un mécanisme pour les rapports relatifs aux erreurs réseau.

### API Topics

L'API Topics fournit un mécanisme permettant aux développeur·euse·s de mettre en œuvre des cas d'usage comme la publicité basée sur les centres d'intérêt (IBA).
Voir la documentation de l'[API Topics](/fr/docs/Web/API/Topics_API) pour plus d'informations.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : L'en-tête de réponse utilisé pour marquer les sujets d'intérêt déduits à partir de l'URL du site appelant, comme observé dans la réponse à une requête générée par une [fonctionnalité qui active l'API Topics](/fr/docs/Web/API/Topics_API/Using#quelles_fonctionnalités_api_activent_lapi_topics).
- {{HTTPHeader("Sec-Browsing-Topics")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : L'en-tête de requête qui envoie les sujets sélectionnés pour l'utilisateur·ice actuel·le avec la requête associée, utilisés par une plateforme publicitaire pour choisir une publicité personnalisée à afficher.

### Autres

- {{HTTPHeader("Accept-Signature")}} {{Experimental_Inline}}
  - : Un client pourra envoyer l'en-tête [`Accept-Signature` <sup>(angl.)</sup>](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7) afin d'indiquer son intention de tirer parti des signatures disponibles et d'indiquer les types de signature qu'il prend en charge.
- {{HTTPHeader("Early-Data")}} {{Experimental_Inline}}
  - : Indique que la requête a été transmise avec les premières données TLS (<i lang="en">TLS early data</i>).
- {{HTTPHeader("Idempotency-Key")}} {{Experimental_Inline}}
  - : Fournit une clé unique pour les requêtes `POST` et `PATCH`, permettant de les rendre idempotentes.
- {{HTTPHeader("Set-Login")}} {{Experimental_Inline}}
  - : L'en-tête de réponse envoyé par un fournisseur d'identité fédérée (IdP) pour définir son statut de connexion, c'est-à-dire si des utilisateur·ice·s sont connecté·e·s à l'IdP sur le navigateur actuel ou non.
    Ceci est stocké par le navigateur et utilisé par l'[API FedCM](/fr/docs/Web/API/FedCM_API).
- {{HTTPHeader("Signature")}} {{Experimental_Inline}}
  - : L'en-tête [`Signature` <sup>(angl.)</sup>](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1) contient une liste de signatures pour un échange, chacune étant accompagnée d'informations pour déterminer l'autorité correspondante et les moyens de rafraîchir la signature.
- {{HTTPHeader("Signed-Headers")}} {{Experimental_Inline}}
  - : L'en-tête [`Signed-Headers <sup>(angl.)</sup>`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2) contient une liste ordonnée des en-têtes à inclure dans une signature.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{Experimental_Inline}}
  - : Contient une ou plusieurs valeurs d'étiquette issues des règles de spéculation qui ont conduit à la spéculation, afin qu'un serveur puisse identifier quelle(s) règle(s) ont provoqué une spéculation et éventuellement les bloquer.
- {{HTTPHeader("Supports-Loading-Mode")}} {{Experimental_Inline}}
  - : Défini par une cible de navigation afin d'opter pour des modes de chargement plus risqué, comme le [prérendu](/fr/docs/Web/API/Speculation_Rules_API#utiliser_le_pré-rendu) pour un même site sur plusieurs origines. Seule la valeur `credentialed-prerender` peut être utilisée.

## En-têtes non-standards

- {{HTTPHeader("X-Forwarded-For")}} {{Non-standard_Inline}}
  - : Identifie l'adresse IP d'origine d'un client qui se connecte à un serveur web via un intermédiaire (comme un <i lang="en">proxy</i> ou un <i lang="en">load balancer</i>).
- {{HTTPHeader("X-Forwarded-Host")}} {{Non-standard_Inline}}
  - : Identifie l'hôte demandé à l'origine par le client qui se connecte à l'intermédiaire (<i lang="en">proxy</i> ou un <i lang="en">load balancer</i>).
- {{HTTPHeader("X-Forwarded-Proto")}} {{Non-standard_Inline}}
  - : Identifie le protocole (HTTP ou HTTPS) utilisé par le client pour se connecter à l'intermédiaire (<i lang="en">proxy</i> ou un <i lang="en">load balancer</i>).
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{Non-standard_Inline}}
  - : Contrôle la récupération proactive du DNS, utilisée par les navigateurs pour résoudre en avance les noms de domaine que la personne pourra atteindre via les liens, images, fichiers CSS ou JavaScript, etc.
- {{HTTPHeader("X-Robots-Tag")}} {{Non-standard_Inline}}
  - : L'en-tête HTTP [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=fr) indique comment une page web doit être indexée par les moteurs de recherche public. En pratique, cet en-tête est équivalent à [`<meta name="robots" content="…">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/robots).

## En-têtes dépréciés

- {{HTTPHeader("Pragma")}} {{Deprecated_Inline}}
  - : Un en-tête spécifique pour chaque implémentation pouvant avoir divers effets le long de la chaîne de requête-réponse. Utilisé pour la rétrocompatibilité avec les caches HTTP/1.0 où l'en-tête `Cache-Control` n'est pas encore présent.
- {{HTTPHeader("Warning")}} {{Deprecated_Inline}}
  - : Un champ d'avertissement général contenant des informations sur les problèmes possibles.

## Voir aussi

- [Page Wikipédia sur la liste des en-têtes HTTP <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [Registre des en-têtes par l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [Groupe de travail HTTP <sup>(angl.)</sup>](https://httpwg.org/specs/)
