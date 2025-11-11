---
title: "HTTP : HyperText Transfer Protocol"
short-title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**_<i lang="en">Hypertext Transfer Protocol</i> (HTTP) (ou protocole de transfert hypertexte en français)_** est un protocole de [la couche application](https://fr.wikipedia.org/wiki/Couche_application) qui permet de transmettre des documents hypermédias, comme HTML. Il est conçu pour la communication entre les navigateurs web et les serveurs web, mais s'utilise aussi dans d'autres contextes.

HTTP suit le modèle classique [client-serveur](https://fr.wikipedia.org/wiki/Client-serveur)&nbsp;: un·e client·e ouvre une connexion, effectue une requête et attend de recevoir une réponse. C'est aussi un [protocole sans état](https://fr.wikipedia.org/wiki/Protocole_sans_état), ce qui signifie que le serveur ne conserve aucune donnée (état) entre deux requêtes.

## Référence

La documentation de la [référence HTTP](/fr/docs/Web/HTTP/Reference) contient des informations détaillées sur les en-têtes, les méthodes de requête, les codes de réponse et recense les spécifications et documents de référence pertinents.

- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
  - : Les en-têtes de message servent à transmettre des métadonnées sur une ressource ou un message HTTP, et à décrire le comportement du client ou du serveur.
- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
  - : Les méthodes de requête indiquent l'objectif de la requête et ce qui est attendu en cas de succès.
    Les méthodes les plus courantes sont {{HTTPMethod("GET")}} et {{HTTPMethod("POST")}} pour récupérer et envoyer des données aux serveurs, respectivement, mais d'autres méthodes existent pour d'autres usages.
- [Codes de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
  - : Les codes de réponse HTTP indiquent si une requête HTTP aboutit. Les réponses se regroupent en cinq classes&nbsp;: réponses informationnelles, succès, redirections, erreurs client et erreurs serveur.
- [Ressources et spécifications HTTP](/fr/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Cette page recense les ressources pertinentes sur HTTP depuis sa première spécification au début des années 1990.

Les sous-sections suivantes sont également notables&nbsp;:

- [Directives CSP](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)
  - : Les champs de l'en-tête de réponse [`Content-Security-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) permettent d'encadrer les ressources accessibles pour un·e utilisateur·ice sur une page donnée. Il s'agit en général de directives sur l'origine du serveur et les points de terminaison des scripts.
- [Directives Permissions-Policy](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : L'en-tête de réponse {{HTTPHeader("Permissions-Policy")}} permet d'autoriser ou d'interdire l'utilisation de fonctionnalités du navigateur dans un document ou dans tout élément {{HTMLElement("iframe")}} du document.
    Cette section liste les directives utilisables dans un en-tête Permissions-Policy, avec des pages de documentation qui expliquent leur fonctionnement et leur usage.

## Guides

HTTP est un protocole extensible qui repose sur des concepts comme les ressources et les identifiants uniformes de ressource (<i lang="en">URI</i> en anglais), une structure de message simple et un modèle de communication client-serveur.
De nombreuses extensions sont développées au fil du temps pour ajouter des fonctionnalités et faire évoluer la sémantique, notamment de nouvelles méthodes et en-têtes HTTP.

Les [guides HTTP](/fr/docs/Web/HTTP/Guides) sont classés de l'introduction générale vers des sujets spécialisés et orientés cas d'usage.
Nous vous conseillons de commencer par les guides fondamentaux avant d'explorer des articles plus ciblés.

- [Vue d'ensemble de HTTP](/fr/docs/Web/HTTP/Guides/Overview)
  - : Les principales caractéristiques de HTTP, ce qu'il permet, son usage dans l'architecture du Web et sa place dans la pile des protocoles.
- [Évolution de HTTP](/fr/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP apparaît au début des années 1990 et évolue à plusieurs reprises.
    Cet article retrace son histoire et décrit HTTP/0.9, HTTP/1.0, HTTP/1.1, jusqu'à HTTP/2 et HTTP/3, ainsi que les nouveautés introduites au fil du temps.
- [Session HTTP typique](/fr/docs/Web/HTTP/Guides/Session)
  - : Ce guide décrit le déroulement d'une session HTTP, de l'établissement de la connexion à l'envoi de la requête et la réception de la réponse.
- [Messages HTTP](/fr/docs/Web/HTTP/Guides/Messages)
  - : Les messages HTTP transmis comme requêtes et réponses ont une structure définie.
    Ce guide décrit cette structure générale, son objectif et les différents types de messages.
- [Types MIME](/fr/docs/Web/HTTP/Guides/MIME_types)
  - : Depuis HTTP/1.0, différents types de contenu transitent sur le Web.
    Ce guide explique comment cela fonctionne grâce à l'en-tête {{HTTPHeader("Content-Type")}} et à la norme MIME.
    Une liste des types courants utilisés par les développeur·euse·s web se trouve dans [Types MIME courants](/fr/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Compression dans HTTP](/fr/docs/Web/HTTP/Guides/Compression)
  - : Les navigateurs et serveurs compressent leurs messages avant de les envoyer sur le réseau pour réduire la quantité de données à transmettre, ce qui améliore la vitesse de transfert et l'utilisation de la bande passante.
- [Mise en cache HTTP](/fr/docs/Web/HTTP/Guides/Caching)
  - : La mise en cache est un mécanisme essentiel pour offrir des expériences rapides sur le Web et pour optimiser l'utilisation des ressources.
    Ce guide décrit différentes méthodes de mise en cache et comment utiliser les en-têtes HTTP pour les contrôler.
- [Authentification HTTP](/fr/docs/Web/HTTP/Guides/Authentication)
  - : L'authentification permet de vérifier l'identité d'un·e client·e lors de requêtes vers un serveur.
    Elle garantit que seules les personnes ou systèmes autorisés accèdent à certaines ressources.
- [Utilisation des cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies)
  - : Bien que HTTP soit un protocole sans état, un serveur peut envoyer un en-tête {{HTTPHeader("Set-Cookie")}} dans la réponse.
    Le client renvoie alors la valeur du cookie à chaque requête suivante vers le serveur via l'en-tête de requête {{HTTPHeader("Cookie")}}.
    Cela permet de stocker et d'échanger une petite quantité de données, ajoutant ainsi un état à certaines interactions client-serveur.
- [Redirections HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
  - : La redirection d'URL, aussi appelée réacheminement d'URL, est une technique qui permet d'attribuer plusieurs adresses à une page, un formulaire, un site web ou une application web.
    HTTP propose un type de réponse spécial, appelé redirection HTTP, pour cette opération.
- [Requêtes conditionnelles HTTP](/fr/docs/Web/HTTP/Guides/Conditional_requests)
  - : Dans les requêtes conditionnelles, le résultat dépend de la valeur d'un validateur dans la requête.
    Cette méthode s'utilise largement dans la [mise en cache](/fr/docs/Web/HTTP/Guides/Caching) et pour des cas comme la reprise de téléchargement, la prévention de pertes lors de modifications de documents sur le serveur, etc.
- [Requêtes de plage HTTP](/fr/docs/Web/HTTP/Guides/Range_requests)
  - : Une requête de plage demande au serveur d'envoyer une partie spécifique (ou plusieurs) d'une ressource au lieu de la ressource complète.
    Les requêtes de plage sont utiles lorsque le client a seulement besoin d'une partie d'un gros fichier, ou pour permettre à une application de mettre en pause et reprendre un téléchargement.
- [Négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP définit un ensemble d'en-têtes de message, à commencer par [`Accept`](/fr/docs/Web/HTTP/Reference/Headers/Accept), qui permet à un navigateur d'annoncer le format, la langue ou l'encodage préféré.
    Ce guide explique comment cette annonce fonctionne, comment le serveur réagit et comment il choisit la réponse la plus adaptée à une requête.
- [Gestion des connexions dans HTTP/1.x](/fr/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 est la première version à prendre en charge les connexions persistantes et le pipelining.
    Ce guide explique ces deux concepts, avec leurs avantages et inconvénients.
- [Mécanisme de mise à niveau du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 propose un mécanisme pour mettre à niveau une connexion déjà établie vers un autre protocole à l'aide de l'en-tête {{HTTPHeader("Upgrade")}}.
    Un·e client·e peut ainsi passer de HTTP/1.1 à HTTP/2, ou d'une connexion HTTP(S) à un [WebSocket](/fr/docs/Web/API/WebSocket) (`ws` / `wss`).
- [Serveurs mandataires et tunnels](/fr/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Un serveur mandataire (proxy) peut se trouver sur l'ordinateur de l'utilisateur·ice ou n'importe où entre l'ordinateur et le serveur de destination sur Internet.
    Ce guide présente les bases des proxys et introduit quelques options de configuration.
- [Indications client HTTP](/fr/docs/Web/HTTP/Guides/Client_hints)
  - : Les indications client (<i lang="en">Client Hints</i> en anglais) sont un ensemble d'en-têtes de réponse qu'un serveur peut utiliser pour demander de façon proactive des informations au client sur l'appareil, le réseau, l'utilisateur·ice et les préférences propres à l'agent utilisateur.
    Le serveur détermine alors quelles ressources envoyer, selon les informations que le client choisit de fournir.
- [Journalisation des erreurs réseau](/fr/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : La journalisation des erreurs réseau (<i lang="en">Network Error Logging</i> en anglais) est un mécanisme configurable via l'en-tête de réponse `NEL`.
    Cet en-tête expérimental permet aux sites et applications de recevoir des rapports sur les échecs (ou les succès) de récupération réseau depuis les navigateurs compatibles.
- [Détection du navigateur via l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Il est très rarement pertinent d'utiliser la détection de l'agent utilisateur pour identifier un navigateur, mais certains cas limites l'exigent.
    Ce guide explique comment procéder aussi correctement que possible lorsque cela s'avère nécessaire, en insistant sur les précautions à prendre avant d'adopter cette approche.

### Ressources associées

- [URI](/fr/docs/Web/URI)
  - : Les identifiants uniformes de ressource (URI) servent à décrire et localiser des ressources sur le Web et sont un composant essentiel des requêtes HTTP.
- [Configurer un serveur pour les médias Ogg](/fr/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Ce guide présente quelques modifications de configuration serveur qui peuvent être nécessaires pour que votre serveur web diffuse correctement des fichiers média Ogg.
    Ces informations peuvent aussi être utiles si vous rencontrez d'autres types de médias que votre serveur ne reconnaît pas encore.

## Outils et ressources

Outils utiles pour comprendre et déboguer HTTP.

- [Les outils de développement de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Moniteur réseau](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [Mozilla Observatory](/fr/observatory)
  - : Un projet conçu pour aider les développeuses et développeurs, les administratrices et administrateurs système ainsi que les professionnels de la sécurité à configurer leur site de manière sûre et sécurisée.
- [RedBot](https://redbot.org/)
  - : Des outils pour vérifier vos en-têtes liés à la gestion du cache.
- [nghttp2 <sup>(angl.)</sup>](https://github.com/nghttp2/nghttp2)
  - : Implémentation en C d'un client, serveur et proxy HTTP/2, avec des outils de test de charge, de mesure de performance, ainsi qu'un encodeur et décodeur HPACK.
- [curl <sup>(angl.)</sup>](https://github.com/curl/curl)
  - : Outil en ligne de commande pour transférer des données selon la syntaxe d'une URL.
    Prend en charge HTTP, HTTPS, WS, WSS, ainsi que de nombreux autres protocoles.
- [How Browsers Work (2011) <sup>(angl.)</sup>](https://web.dev/articles/howbrowserswork)
  - : Un article détaillé sur le fonctionnement d'un navigateur et l'organisation des requêtes HTTP durant la navigation.
