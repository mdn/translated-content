---
title: En-têtes HTTP
slug: Web/HTTP/Headers
---

{{HTTPSidebar}}

Les en-têtes HTTP permettent au client et au serveur de transmettre des informations supplémentaires avec la requête ou la réponse. Un en-tête de requête est constitué de son nom (insensible à la casse) suivi d'un deux-points `:`, puis de sa valeur (sans saut de ligne). L'espace blanc avant la valeur est ignoré.

Des en-têtes propriétaires personnalisés peuvent être ajoutés en utilisant le préfixe `X-`, mais cette convention a été abandonnée en juin 2012, en raison des inconvénients qu'elle a présenté lorsque des champs non standard sont devenus standard dans [RFC 6648](https://tools.ietf.org/html/rfc6648); les autres en-têtes possibles sont listés dans une [liste IANA](https://www.iana.org/assignments/message-headers/message-headers.xhtml) et ont été définis dans la [RFC 4229](https://tools.ietf.org/html/rfc4229). IANA maintient également une [liste des propositions de nouveaux entêtes HTTP](https://www.iana.org/assignments/message-headers/message-headers.xhtml).

Les en-têtes peuvent être groupés selon leur contexte :

- {{Glossary("General header","En-tête général")}} : en-têtes s'appliquant à la fois aux requêtes et aux réponses mais sans rapport avec les données éventuellement transmises dans le corps de la requête ou de la réponse.
- {{Glossary("Request header","En-tête de requête")}} : en-têtes contenant plus d'informations au sujet de la ressource à aller chercher ou à propos du client lui-même.
- {{Glossary("Response header","En-tête de réponse")}} : en-têtes contenant des informations additionnelles au sujet de la réponse comme son emplacement, ou au sujet du serveur lui-même (nom et version, etc.)
- {{Glossary("Entity header","En-tête d'entité")}} : en-têtes contenant plus d'informations au sujet du corps de l'entité comme la longueur de son contenu ou son [type MIME](/fr/docs/Glossaire/Type_MIME).

Les en-têtes peuvent aussi être groupés par la manière dont les {{Glossary("Proxy_server", "serveurs mandataires (proxies)")}} les traitent :

- {{httpheader("Connection")}}
- {{httpheader("Keep-Alive")}}
- {{httpheader("Proxy-Authenticate")}}
- {{httpheader("Proxy-Authorization")}}
- {{httpheader("TE")}}
- {{httpheader("Trailer")}}
- {{httpheader("Transfer-Encoding")}}
- {{httpheader("Upgrade")}} (voir aussi [mécanisme de mise à jour de protocole](/fr/docs/Web/HTTP/Protocol_upgrade_mechanism))

<!---->

- En-têtes de bout en bout ('End-to-end headers') :
  - : Ces entêtes doivent être transmis au destinataire final du message ; c'est-à-dire le serveur dans le cas d'une requête ou le client dans le cas d'une réponse. Les serveurs mandataires intermédiaires doivent retransmettre les en-têtes de bout en bout sans modification et doivent les mettre en cache.
- En-têtes de point à point ('Hop-by-hop headers') :
  - : Ces en-têtes n'ont de sens que pour une unique connexion de la [couche transport](https://fr.wikipedia.org/wiki/Couche_transport) et ne doivent pas être retransmis par des serveurs mandataires ou mis en cache. Il s'agit d'en-têtes tels que: {{httpheader("Connection")}}, {{httpheader("Keep-Alive")}}, {{httpheader("Proxy-Authenticate")}}, {{httpheader("Proxy-Authorization")}}, {{httpheader("TE")}}, {{httpheader("Trailer")}}, {{ httpheader("Transfer-Encoding")}} et {{httpheader("Upgrade")}}. A noter que seuls les en-têtes de point à point peuvent être utilisés avec l'en-tête général {{httpheader("Connection")}}.

La liste suivante résume les en-têtes HTTP en fonction de leur utilisation. Une liste triée par ordre alphabétique est disponible dans le panneau de navigation à gauche.

## Authentification

- {{HTTPHeader("WWW-Authenticate")}}
  - : définit la méthode d'authentification qui doit être utilisée pour obtenir l'accès à la ressource.
- {{HTTPHeader("Authorization")}}
  - : contient les informations d'identification pour authentifier un agent utilisateur avec un serveur.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : définit la méthode d'authentification qui doit être utilisée pour obtenir la ressource derrière un serveur mandataire.
- {{HTTPHeader("Proxy-Authorization")}}
  - : contient les informations d'identification nécessaires pour authentifier un agent utilisateur avec un serveur mandataire.

## Mise en cache

- {{HTTPHeader("Age")}}
  - : la durée en secondes passée par l'objet dans un cache proxy.
- {{HTTPHeader("Cache-Control")}}
  - : spécifie des directives pour les mécanismes de mise en cache dans les requêtes et les réponses.
- {{HTTPHeader("Clear-Site-Data")}}
  - : nettoie les données de navigation (mouchards (_cookies_), stockage et cache) associé au site demandé.
- {{HTTPHeader("Expires")}}
  - : la date et l'heure après lesquelles la réponse est considérée comme périmée.
- {{HTTPHeader("Pragma")}}
  - : en-tête spécifique à la mise en œuvre pouvant avoir divers effets le long de la chaîne de requête-réponse. Utilisé pour la rétrocompatibilité avec les caches HTTP / 1.0 où l'en-tête `Cache-Control` n'est pas encore présent.
- {{HTTPHeader("Warning")}}
  - : un champ d'avertissement général contenant des informations sur les problèmes possibles.

## Astuces client

Les {{Glossary("Client_hints", "astuces clients")}} HTTP sont enc cours de création. La documentation actuelle est disponible sur le [site du groupe de travail sur HTTP](https://httpwg.org/http-extensions/client-hints.html).

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : les serveurs peuvent informer de leur niveau de support pour les Client Hints en utilisant l'en-tête `Accept-CH` ou en HTML avec l'élément `<meta>` ayant l'attribut `http-equiv` ([\[HTML5\]](https://httpwg.org/http-extensions/client-hints.html#HTML5)).
- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}}
  - : les serveurs peuvent demander au client de mémoriser l'ensemble des Client Hints que le serveur supporte pour une période de temps donnée, afin de permettre la livraison de Client Hints sur les requêtes suivantes vers l'origine du serveur ([\[RFC6454\]](https://httpwg.org/http-extensions/client-hints.html#RFC6454)).
- {{HTTPHeader("Content-DPR")}} {{experimental_inline}}
  - : un nombre indiquant le rapport entre le nombre de pixels physiques et le nombre de pixels CSS de l'image réponse sélectionnée.
- {{HTTPHeader("DPR")}} {{experimental_inline}}
  - : un nombre indiquant le Device Pixel Ratio (DPR) actuel du client, qui est le rapport du nombre de pixels physiques sur le nombre de pixels CSS (Section 5.2 of [\[CSSVAL\]](https://httpwg.org/http-extensions/client-hints.html#CSSVAL)) de la zone d'affichage (Section 9.1.1 of [\[CSS2\]](https://httpwg.org/http-extensions/client-hints.html#CSS2)) sur l'appareil.
- {{HTTPHeader("Device-Memory")}} {{experimental_inline}}
  - : faisant techniquement partie de l'API Device Memory, cet en-tête représente la quantité approximative de mémoire vive dont le client dispose.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : indique que les requêtes doivent être communiquées en TLS early data.
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : booléen indiquant les préférences de l'agent utilisateur pour réduire la quantité de données transmises.
- {{HTTPHeader("Viewport-Width")}} {{experimental_inline}}
  - : la largeur de la zone d'affichage, soit le nombre de pixels CSS. La valeur fournise est arrondie au plus grand proche supérieur. Si `Viewport-Width` apparait dans un message plus d'une fois, la dernière valeur écrase toutes les valeurs précédentes.
- {{HTTPHeader("Width")}} {{experimental_inline}}
  - : l'en-tête de requête `Width` représente la largeur de la ressource voulue en nombre de pixels physiques. La valeur fournise est arrondie au plus proche entier supérieur. Si la largeur de la ressource voulue est inconnue quand la requête ou la ressource n'a pas de largeur d'affichage, l'en-tête `Width` peut être omise. Si `Width` apparait dans un message plus d'une fois, la dernière valeur écrase toutes les valeurs précédentes.

## Conditionnels

- {{HTTPHeader("Last-Modified")}}
  - : c'est un validateur, la dernière date de modification de la ressource, utilisée pour comparer plusieurs versions de la même ressource. Il est moins précis que {{HTTPHeader("ETag")}}, mais plus facile à calculer dans certains environnements. Les requêtes conditionnelles utilisant {{HTTPHeader("If-Modified-Since")}} et {{HTTPHeader("If-Unmodified-Since")}} utilisent cette valeur pour modifier le comportement de la requête.
- {{HTTPHeader("ETag")}}
  - : c'est un validateur, une chaîne unique identifiant la version de la ressource. Les requêtes conditionnelles utilisant {{HTTPHeader("If-Match")}} et {{HTTPHeader("If-None-Match")}} utilisent cette valeur pour changer le comportement de la requête.
- {{HTTPHeader("If-Match")}}
  - : rend la requête conditionnelle et n'applique la méthode que si la ressource stockée correspond à l'un des ETags donnés.
- {{HTTPHeader("If-None-Match")}}
  - : rend la requête conditionnelle et n'applique la méthode que si la ressource stockée ne correspond à aucun des ETags donnés. Ceci est utilisé pour mettre à jour les caches (pour les requêtes sécurisées), ou pour empêcher de télécharger une nouvelle ressource lorsqu'elle existe déjà.
- {{HTTPHeader("If-Modified-Since")}}
  - : rend la requête conditionnelle et attend que l'entité soit transmise seulement si elle a été modifiée après la date donnée. Ceci est utilisé pour transmettre des données uniquement lorsque le cache est obsolète.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : rend la demande conditionnelle et attend que l'entité soit transmise seulement si elle n'a pas été modifiée après la date donnée. Ceci est utilisé pour assurer la cohérence d'un nouveau fragment d'une plage spécifique avec les précédentes, ou pour implémenter un système de contrôle de concurrence optimiste lors de la modification de documents existants.
- {{HTTPHeader("Vary")}}
  - : détermine comment faire correspondre les futurs en-têtes de demande pour décider si une réponse mise en cache peut être utilisée plutôt que d'en demander une nouvelle au serveur d'origine.

## Gestion de connexion

- {{HTTPHeader("Connection")}}
  - : contrôle si la connexion réseau reste ouverte après la fin de la transaction en cours.
- {{HTTPHeader("Keep-Alive")}}
  - : contrôle la durée pendant laquelle une connexion persistante doit rester ouverte.

## Négociation de contenu

- {{HTTPHeader("Accept")}}
  - : informe le serveur des types de données pouvant être renvoyés. C'est un type MIME.
- {{HTTPHeader("Accept-Charset")}}
  - : informe le serveur du jeu de caractères que le client peut comprendre.
- {{HTTPHeader("Accept-Encoding")}}
  - : informe le serveur sur l'algorithme de codage, généralement un algorithme de compression, qui peut être utilisé sur la ressource renvoyée.
- {{HTTPHeader("Accept-Language")}}
  - : informe le serveur de la langue que le serveur doit renvoyer. Ceci est un indice et n'est pas nécessairement sous le contrôle total de l'utilisateur : le serveur doit toujours faire attention à ne pas remplacer un choix explicite de l'utilisateur (telle la sélection d'une langue dans une liste déroulante).

## Contrôles

- {{HTTPHeader("Expect")}}
  - : indique ce qui est attendu de la part du serveur afin de pouvoier gérer correctement la requête.
- {{HTTPHeader("Max-Forwards")}}
  - : ...

## Cookies

- {{HTTPHeader("Cookie")}}
  - : contient les [cookies HTTP](/fr/docs/HTTP/Cookies) stockés précédemment envoyés par le serveur à l'aide de l'en-tête {{HTTPHeader("Set-Cookie")}}.
- {{HTTPHeader("Set-Cookie")}}
  - : envoie des cookies du serveur à l'agent utilisateur.

## [Cross-Origin Resource Sharing (CORS)](/fr/docs/Web/HTTP/CORS)

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : indique si la réponse peut être partagée.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : indique si la réponse à la demande peut être exposée lorsque l'indicateur d'informations d'identification est vrai.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : utilisé en réponse à une demande de contrôle en amont pour indiquer quels en-têtes HTTP peuvent être utilisés lors de la requête effective.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : spécifie la ou les méthodes autorisées lors de l'accès à la ressource en réponse à une demande de contrôle en amont.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : indique en-têtes pouvant être exposés dans le cadre de la réponse en listant leurs noms.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : indique la durée pendant laquelle les résultats d'une demande de contrôle en amont peuvent être mis en cache.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : utilisé lors de l'émission d'une demande de contrôle en amont pour indiquer au serveur les en-têtes HTTP qui seront utilisés lors de la requête effective.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Utilisé lors de l'émission d'une demande de contrôle en amont pour indiquer au serveur la [méthode HTTP](/fr/docs/Web/HTTP/Methods) à utiliser lors de la requête.
- {{HTTPHeader("Origin")}}
  - : indique l'origine d'une consultation.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : spécifie les origines autorisées à voir les valeurs des attributs récupérés via les fonctionnalités de l'[API Resource Timing](/fr/docs/Web/API/Resource_Timing_API), qui seraient autrement signalées comme étant zéro en raison des restrictions d'origines croisées.

## Ne pas suivre

- {{HTTPHeader("DNT")}}
  - : utilisé pour exprimer la préférence de suivi de l'utilisateur.
- {{HTTPHeader("Tk")}}
  - : indique l'état de suivi appliqué à la demande correspondante.

## Téléchargements

- {{HTTPHeader("Content-Disposition")}}
  - : est un en-tête de réponse si la ressource transmise doit être affichée en ligne (comportement par défaut lorsque l'en-tête n'est pas présent), ou doit être traitée comme un téléchargement et le navigateur doit présenter une fenêtre "Enregistrer sous".

## Informations sur le corps du message

- {{HTTPHeader("Content-Length")}}
  - : indique la taille du corps d'entité, en nombre décimal d'octets, envoyée au destinataire.
- {{HTTPHeader("Content-Type")}}
  - : indique le type de média de la ressource.
- {{HTTPHeader("Content-Encoding")}}
  - : utilisé pour spécifier l'algorithme de compression.
- {{HTTPHeader("Content-Language")}}
  - : décrit la (les) langue(s) destinée(s) à l'audience, de sorte qu'elle permette à l'utilisateur de se différencier en fonction de la langue préférée de l'utilisateur.
- {{HTTPHeader("Content-Location")}}
  - : indique un emplacement pour les données renvoyées.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : contient des informations du côté client des serveurs proxy qui sont modifiées ou perdues lorsqu'un proxy est impliqué dans le chemin de la requête.
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : identifie les adresses IP d'origine d'un client se connectant à un serveur Web via un proxy HTTP ou un répartiteur de charge.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : identifie l'hôte d'origine demandé à un client pour se connecter à votre proxy ou à votre équilibreur de charge.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : identifie le protocole (HTTP ou HTTPS) utilisé par un client pour se connecter à votre proxy ou votre équilibreur de charge.
- {{HTTPHeader("Via")}}
  - : ajoutés par des proxies, directs et inverses, et peuvent apparaître dans les en-têtes de requête et les en-têtes de réponse.

## Redirection

- {{HTTPHeader("Location")}}
  - : indique l'URL de la page de redirection.

## Contexte de requête

- {{HTTPHeader("From")}}
  - : contient une adresse électronique Internet pour un utilisateur humain qui contrôle l'agent utilisateur demandeur.
- {{HTTPHeader("Host")}}
  - : indique le nom de domaine du serveur (pour l'hébergement virtuel) et (facultativement) le numéro de port TCP sur lequel le serveur écoute.
- {{HTTPHeader("Referer")}}
  - : L'adresse de la page Web précédente à partir de laquelle un lien vers la page actuellement demandée a été suivi.
- {{HTTPHeader("Referrer-Policy")}}
  - : indique quelles informations de provenance envoyées dans l'en-tête {{HTTPHeader("Referer")}} doivent être incluses dans les requêtes effectuées.
- {{HTTPHeader("User-Agent")}}
  - : contient une chaîne caractéristique qui permet aux homologues du protocole réseau d'identifier le type d'application, le système d'exploitation, le fournisseur du logiciel ou la version du logiciel de l'agent utilisateur du logiciel demandeur. Voir aussi [la référence de chaîne de l'agent utilisateur Firefox](/fr/docs/HTTP/Gecko_user_agent_string_reference).

## Contexte de réponse

- {{HTTPHeader("Allow")}}
  - : répertorie l'ensemble des méthodes de requête HTTP prises en charge par une ressource.
- {{HTTPHeader("Server")}}
  - : contient des informations sur le logiciel utilisé par le serveur d'origine pour gérer la demande.

## Demandes de plage

- {{HTTPHeader("Accept-Ranges")}}
  - : indique si le serveur prend en charge les demandes de plage et, le cas échéant, dans quelle unité la plage peut être exprimée.
- {{HTTPHeader("Range")}}
  - : indique la partie d'un document que le serveur doit renvoyer.
- {{HTTPHeader("If-Range")}}
  - : crée une requête de plage conditionnelle qui n'est remplie que si l'étiquette et la date correspondent à la ressource distante. Utilisé pour empêcher le téléchargement de deux plages à partir d'une version incompatible de la ressource.
- {{HTTPHeader("Content-Range")}}
  - : situe une partie de message à l'intérieur du corps d'un message entier.

## Sécurité

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ({{Glossary("COEP")}})
  - : autorise un serveur à déclarer une règlementation sur les contenus embarqués pour un document donné.

<!---->

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} ({{Glossary("COOP")}})
  - : interdit les autres domaines d'ouvrir ou de contrôler une fenêtre.

<!---->

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} ({{Glossary("CORP")}})
  - : interdit les autre domaines de lire la réponse des ressources si cet en-tête leur est appliqué.

<!---->

- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : contrôle les ressources que l'agent utilisateur est autorisé à charger pour une page donnée.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : permet aux développeurs web d'expérimenter des stratégies en surveillant (mais non en appliquant) leurs effets. Ces rapports de violation sont constitués de documents {{Glossary("JSON")}} envoyés via une requête HTTP `POST` à l'URI spécifié.
- {{HTTPHeader("Expect-CT")}}
  - : permet aux sites de contrôler de manière stricte ou non l'adhérence aux règles de transparence des certificats, permettant ainsi de limiter les utilisations frauduleuses du certificat associé au site grâce à une vérification publique.
- {{HTTPHeader("Feature-Policy")}}
  - : permet d'autoriser ou d'interdire l'utilisation de fonctionnalités du navigateur dans son propre cadre et dans les cadres embarqués.
- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : permet aux application web d'isoler leurs origines.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : force la communication en utilisant HTTPS au lieu de HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : envoie un signal au serveur exprimant la préférence du client pour une réponse chiffrée et authentifiée, et qu'il peut gérer avec succès la directive {{CSP("upgrade-insecure-requests")}}.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : désactive le repérage MIME et force le navigateur à utiliser le type donné dans {{HTTPHeader("Content-Type")}}.
- {{HTTPHeader("X-Download-Options")}}
  - : indique que le navigateur (Internet Explorer uniquement) ne doit pas affiche l'option permettant d'ouvrir un fichier qui a été téléchargé depuis une application, pour empêcher les attaques par hameçonnage puisque le fichier pourrait autrement obtenir le droit de s'exécuter dans le contexte de l'application. Note : voir le [bogue MS Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18488178/) associé.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : indique si un navigateur doit être autorisé à afficher une page dans un {{HTMLElement("frame")}}, {{HTMLElement("iframe")}} ou {{HTMLElement("object")}}.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Spécifie si un fichier de règlementation interdomaines (`crossdomain.xml`) est autorisé. Ce fichier peut définir une règle pour accorder aux clients (comme Adobe Flash Player, Adobe Acrobat, Microsoft Silverlight ou Apache Flex) la permission de gérer des données entre domaines qui seraient autrement restreintes à cause de [Same-Origin Policy](/fr/docs/Web/Security/Same-origin_policy). Voir la [spécification Cross-domain Policy File](https://www.adobe.com/devnet/articles/crossdomain_policy_file_spec.html) pour plus d'informations.
- {{HTTPHeader("X-Powered-By")}}
  - : peut être défini par l'environnement hôte ou par d'autres cadriciels, il contient des informations sur eux sans fournir aucun information utile à l'application ni aux visiteurs. Désactivez cet en-tête pour éviter d'exposer des informations et des vulnérabilités potentielles.
- {{HTTPHeader("X-XSS-Protection")}}
  - : active le filtrage de script intersite.

### HTTP Public Key Pinning {{Glossary("HPKP")}}

HTTP Public Key Pinning a été déprécié et supprimé au profit de Certificate Transparency et {{HTTPHeader("Expect-CT")}}.

- {{HTTPHeader("Public-Key-Pins")}}
  - : associe une clé publique cryptographique spécifique à un certain serveur web pour réduire le risque d'attaques {{Glossary("MitM")}} à l'aide de certificats falsifiés.
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : envoie des rapports au _report-uri_ spécifié dans l'en-tête et permet toujours aux clients de se connecter au serveur même si l'association à la clé cryptographique est violée.

### En-têtes de requêtes de métadonnées

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : en-tête de requête indiquant la relation entre l'origine ayant initiée la requête et l'origine cible ; c'est un en-tête srtucutré dont la valeur peut être `cross-site`, `same-origin`, `same-site` ou `none`.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : en-tête de requête indiquant le mode de requête à un serveur ; c'est un en-tête structuré dont la valeur peut être `cors`, `navigate`, `nested-navigate`, `no-cors`, `same-origin` ou `websocket`.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : en-tête de requête indiquant si une requête de navigation a été déclenchée ou non par une action de l'utilisateur ; c'est un en-tête structuré dont la valeur est un booléen, soit `?0` ou pour faux et `?1` pour vrai.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : en-tête de requête indiquant la destination de la requête à un serveur ; c'est un en-tête structuré dont la valeur peut être `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, `xslt` ou `nested-document`.

## Évènements envoyés par le serveur

- {{HTTPHeader("Last-Event-ID")}}
  - : ...
- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : permet aux développeurs de déclarer une règlementation de rapportage d'erreur réseau.
- {{HTTPHeader("Ping-From")}}
  - : ...
- {{HTTPHeader("Ping-To")}}
  - : ...
- {{HTTPHeader("Report-To")}}
  - : utilisé pour spécifier un serveur de destination pour que le navigateur puisse y envoyer des rapports d'avertissements ou d'erreurs.

## Codage de transfert

- {{HTTPHeader("Transfer-Encoding")}}
  - : spécifie la forme de codage utilisée pour transférer en toute sécurité l'entité à l'utilisateur.
- {{HTTPHeader("TE")}}
  - : spécifie les encodages de transfert que l'agent utilisateur est prêt à accepter.
- {{HTTPHeader("Trailer")}}
  - : permet à l'expéditeur d'inclure des champs supplémentaires à la fin du message segmenté.

## WebSockets

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : ...

## Autres

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : ...
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : ...
- {{HTTPHeader("Alt-Svc")}}
  - : ...
- {{HTTPHeader("Date")}}
  - : contient la date et l'heure à laquelle le message a été généré.
- {{HTTPHeader("Large-Allocation")}}
  - : indique au navigateur que la page en cours de chargement souhaite effectuer une allocation importante.
- {{HTTPHeader("Link")}}
  - : ...
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : ...
- {{HTTPHeader("Retry-After")}}
  - : indique combien de temps l'agent utilisateur doit attendre avant de faire une autre demande consécutive.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : communique une liste de signatures pour un échange, chacune accompagnée d'informations sur la manière de déterminer son autorité et de rafraichir cette signature.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : identifie une liste ordonnée de champs d'en-tête de réponse à inclure dans une signature.
- {{HTTPHeader("Server-Timing")}}
  - : communique un ou plusieurs indicateurs et descriptions pour le cycle requête-réponse donné.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : utilisé pour supprimer la [restriction de chemin](https://w3c.github.io/ServiceWorker/#path-restriction) en incluant cet en-tête [dans la réponse d'un script Service Worker](https://w3c.github.io/ServiceWorker/#service-worker-script-response).
- {{HTTPHeader("SourceMap")}}
  - : liens ayant généré du code sur une [source](/fr/docs/Outils/Débogueur/Comment/Utiliser_une_source_map).
- {{HTTPHeader("Upgrade")}}
  - : le document RFC associé pour le [champ d'en-tête Upgrade est RFC 7230, section 6.7](https://tools.ietf.org/html/rfc7230#section-6.7). Le standard établit des règles pour la mise à niveau ou la modification d'un protocole différent sur le client, le serveur et la connexion au protocole de transport actuels. Par exemple, cette norme d'en-tête permet à un client de passer de HTTP 1.1 à HTTP 2.0, en supposant que le serveur décide de reconnaître et d'implémenter le champ d'en-tête Upgrade. Une requête de ce type ne peut etre contraignante et le serveur peut répondre en utilisant le protocole initial. Il peut être utilisé dans les en-têtes client et serveur. Si le champ d'en-tête Upgrade est spécifié, l'expéditeur DOIT également envoyer le champ d'en-tête Connection avec l'option de mise à niveau spécifiée. Pour plus de détails sur le [champ d'en-tête Connection, veuillez vous reporter à la section 6.1 du RFC susmentionné](https://tools.ietf.org/html/rfc7230#section-6.1).
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : contrôle le préchargement DNS, fonctionnalité par laquelle les navigateurs effectuent de manière proactive la résolution du nom de domaine sur les deux liens que l'utilisateur peut choisir de suivre ainsi que les URL des éléments référencés par le document, y compris les images, CSS, JavaScript, etc.
- {{HTTPHeader("X-Firefox-Spdy")}} {{deprecated_inline}} {{non-standard_inline}}
  - : ...
- {{HTTPHeader("X-Pingback")}} {{non-standard_inline}}
  - : ...
- {{HTTPHeader("X-Requested-With")}}
  - : ...
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : indique comment une page doit être indexée dans les résultats publics des moteurs de recherche ; cet en-tête est équivalent à `<meta name="robots" content="...">`
- {{HTTPHeader("X-UA-Compatible")}} {{non-standard_inline}}
  - : Utilisé par Internet Explorer pour signaler quel mode de document utiliser.

## Contribuer

Vous pouvez contribuer en [ajoutant un nouvel en-tête à la liste](/fr/docs/MDN/Contribute/Howto/Document_an_HTTP_header) ou en améliorant la documentation existante.

## Voir aussi

- [Page Wikipédia sur la liste des en-têtes HTTP](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
- [Registre des en-têtes par l'IANA](https://www.iana.org/assignments/message-headers/message-headers.xhtml) (en)
- [Groupe de travail HTTP](https://httpwg.org/specs/)
