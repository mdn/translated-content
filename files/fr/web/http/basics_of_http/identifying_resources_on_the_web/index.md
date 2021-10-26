---
title: Identifier des ressources sur le Web
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
tags:
  - HTTP
translation_of: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
original_slug: Web/HTTP/Basics_of_HTTP/Identifier_des_ressources_sur_le_Web
---
{{HTTPSidebar}}

La cible d'une requête HTTP est appelée une "ressource", elle ne possède pas de type particulier. Il peut s'agir d'un document, d'une photo ou de n'importe quoi d'autre. Chaque ressource est identifiée à l'aide d'une _Uniform Resource Identifier_ ({{Glossary("URI")}}) utilisé au sein de HTTP pour identifier les ressources.

L'identité et l'emplacement d'une ressource sur le Web sont souvent déterminées via une URL (*Uniform Resource Locator*° un type d'URI. Il existe des cas valides où l'identité et l'emplacement d'une ressource ne sont pas obtenus par la même URI comme lorsque l'en-tête {{HTTPHeader("Alt-Svc")}} est utilisé. La ressource requise par le client doit alors être récupérée à partir d'un emplacement différent.

## URLs et URNs

### URLs

La forme la plus commune des URI est l'URL (_Uniform Resource Locator_ ({{Glossary("URL")}})) que l'on connaît sous le nom d'adresse web.

    https://developer.mozilla.org
    https://developer.mozilla.org/fr/docs/Learn/
    https://developer.mozilla.org/fr/search?q=URL

Vous pouvez entrer chacune de ces URLs dans votre navigateur pour lui demander de charger la page associée (il s'agit ici de la ressource).

Une URL est composée de différentes parties, certaines obligatoires et d'autres facultatives. Voici un exemple plus complet :

    http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

### URNs

Une URN ou _Uniform Resource Name_ est une URI qui identifie une ressource à l'aide d'un nom dans un espace de noms (namespace) particulier.

    urn:isbn:9780141036144
    urn:ietf:rfc:7230

Ces deux URNs correspondent :

- au livre 1984 de George Orwell,
- La spécification IETF 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntaxe des URIs (Uniform Resource Identifiers)

### Schéma ou protocole

- ![Protocole](mdn-url-protocol@x2.png)
  - : `http://` constitue le protocole, il indique le protocole qui doit être utilisé par le navigateur. Il s'agit généralement de HTTP ou de sa variante sécurisée HTTPS. Le Web nécessite l'un ou l'autre de ces protocoles néanmoins, les navigateurs sont capables de gérer d'autres protocoles tels que `mailto:` (pour ouvrir un client mail) or `ftp:` pour gérer un transfert de fichier. Essayez, lorsque vous naviguez, d'identifier les protocoles utilisés. Les schémas usuels sont :

| Schéma      | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| data        | [URIs de données](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)       |
| file        | Fichiers du système hôte sur lequel est installé le navigateur      |
| ftp         | [File Transfer Protocol](/fr/docs/Glossary/FTP)                     |
| http/https  | [Hyper text transfer protocol (sécurisé)](/fr/docs/Glossary/HTTP)   |
| mailto      | Adresse électronique                                                |
| ssh         | Secure shell                                                        |
| tel         | téléphone                                                           |
| urn         | Uniform Resource Names                                              |
| view-source | code source de la ressource                                         |
| ws/wss      | connexions (chiffrées) [WebSocket](/fr/docs/Web/API/WebSockets_API) |

### Autorité

- ![Nom de domaine](mdn-url-domain@x2.png)
  - : `www.exemple.com` est le nom de domaine ou l'autorité qui gère cet espace de noms. Il indique quel serveur Web est appelé. Il est aussi possible d'utiliser directement une adresse IP ({{Glossary("IP address")}}), néanmoins elles sont moins pratiques à manipuler pour des humains et sont donc moins fréquemment utilisées pour accéder à une ressource sur le Web.

### Port

- ![Port](mdn-url-port@x2.png)
  - : `:80` constitue le port. Il indique la "porte" technique à utiliser pour accéder à une ressource sur un serveur web. Il est généralement omis puisque le serveur web utilisera par défaut les ports standards pour HTTP (port 80 pour HTTP et 443 pour HTTPS) pour permettre l'accès aux ressources qu'il héberge. Dans le cas où le port par défaut n'est pas celui utilisé, il est obligatoire de le spécifier.

### Chemin

- ![Chemin du fichier](mdn-url-path@x2.png)
  - : `/chemin/du/fichier.html` constitue le chemin d'accès à la ressource sur le serveur web. Au début du Web, le chemin représentait un emplacement physique où le fichier était stocké, à l'heure actuelle il s'agit d'une abstraction gérée par le serveur web sans réelle existence physique..

### Requête

- ![Paramètres](mdn-url-parameters@x2.png)
  - : `?key1=value1&key2=value2` sont des paramètres additionnels fournis au serveur web. Ces paramètres sont un ensemble de clés/valeurs séparé par le symbole `&`. Le serveur web peut utiliser ces paramètres pour effectuer des tâches avant de retourner une ressource au client. Chaque serveur web possède ses propres règles en ce qui concerne la gestion des paramètres.

### Fragment

- ![Ancre](mdn-url-anchor@x2.png)
  - : `#QuelquePartDansLeDocument` est une ancre vers un morceau de la ressource en particulier, elle constitue une sorte de marque-page à l'intérieur de la ressource. Cela permet au navigateur de savoir où aller pour afficher le contenu à l'emplacement de l'ancre. Au sein d'une page HTML par exemple, le navigateur défilera jusqu'à ce point. Pour un document vidéo ou audio, le navigateur essaiera d'accéder au temps indiqué par l'ancre. On notera que la partie située après le caractère #, aussi appelé le fragment, n'est jamais envoyé au serveur avec la requête.

## Exemples

    https://developer.mozilla.org/en-US/docs/Learn
    tel:+1-816-555-1212
    git@github.com:mdn/browser-compat-data.git
    ftp://example.org/resource.txt
    urn:isbn:9780141036144

## Spécifications

| Spécification                                                            | Titre                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Uniform Resource Identifiers", "2.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Voir aussi

- [Qu'est-ce qu'une URL ?](/fr/docs/Learn/Common_questions/What_is_a_URL)
- [La liste des différents schémas des URIs, maintenue par l'IANA](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
