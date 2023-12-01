---
title: Écriture de serveurs WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
---

Un serveur WebSocket est une application TCP qui écoute sur n'importe quel port d'un serveur et suit un protocole spécifique, c'est aussi simple que cela. La création de son propre serveur TCP est quelque chose qui a tendance à effrayer alors qu'il n'est pas forcément très complexe de créer un serveur WebScoket sur la plateforme de votre choix.

Un serveur WebSocket peut être écrit dans n'importe quel language de programmation qui supporte les "[Berkeley sockets](https://fr.wikipedia.org/wiki/Berkeley_sockets)", par exemple C(++), python ou même PHP et JavaScript (avec nodejs). Ceci n'est pas un tutoriel destiné à un language particulier mais un guide aidant à l'écriture de votre propre serveur.

Avant de débuter, vous **devez** connaître précisément le fonctionnement du protocole HTTP et disposer d'une certaine expérience sur celui-ci. Des connaissances sur les sockets TCP dans votre langage de développement est également précieux. Ce guide ne présente ainsi que le _minimum_ des connaissances requises et non un guide ultime.

> **Note :** Lire la dernière spécification officielle sur les WebSockets [RFC 6455](http://datatracker.ietf.org/doc/rfc6455/?include_text=1). Les sections 1 et 4-7 sont particulièrement intéressantes pour ce qui nous occupe. La section 10 évoque la sécurité et doit être connue et mise en oeuvre avant d'exposer votre serveur au-delà du réseau local / lors de la mise en production.

Un serveur WebSocket est compris ici en "bas niveau" (_c'est-à-dire plus proche du langage machine que du langage humain_. Les WebSockets sont souvent séparés et spécialisés vis-à-vis de leurs homologues serveurs (pour des questions de montées en charge ou d'autres raisons), donc vous devez souvent utiliser un [proxy inverse](https://fr.wikipedia.org/wiki/Proxy_inverse) (_c'est-à-dire de l'extérieur vers l'intérieur du réseau local, comme pour un serveur HTTP classique_) pour détecter les "poignées de mains" spécifiques au WebSocket, qui précédent l'échange et permettent d'aiguiller les clients vers le bon logiciel. Dans ce cas, vous ne devez pas ajouter à votre serveur des _cookies_ et d'autres méthodes d'authentification.

## La "poignée de mains" du WebSocket

En tout premier lieu, le serveur doit écouter les connexions sockets entrantes utilisant le protocole TCP standard. Suivant votre plateforme, celui-ci peut déjà le faire pour vous. Pour l'exemple qui suit, nous prenons pour acquis que votre serveur écoute le domaine _exemple.com_ sur le port 8000 et votre serveur socket répond aux requêtes de type GET sur le chemin _/chat_.

> **Attention :** Si le serveur peut écouter n'importe quel port, mais que vous décidez de ne pas utiliser un port standard (80 ou 443 pour SSL), cela peut créer en avant des problèmes avec les parefeux et/ou les proxys. De plus, gardez en mémoire que certains navigateur Web (notablement Firefox 8+), n'autorisent pas les connexions WebSocket non-SSL sur une page SSL.

La _poignée de mains_ est la partie "Web" dans les WebSockets : c'est le pont entre le protocole HTTP et le WebSocket. Durant cette poignée, les détails (les paramètres) de la connexion sont négociés et l'une des parties peut interromptre la transaction avant la fin si l'un des termes ne lui est pas autorisé / ne lui est pas possible. Le serveur doit donc être attentif à comprendre parfaitement les demandes et attentes du client, sans quoi des procédures de sécurité seront déclenchées.

### La requête de _poignée de mains_ côté client

Même si vous construisez votre serveur au profit des WebSockets, votre client doit tout de même démarrer un processus dit de _poignée de main_. Vous devez donc savoir comment interprêter cette requête. En premier, le **client** enverra tout d'abord une requête HTTP correctement formée. La requête **doit** être à la version 1.1 ou supérieure et la méthode **doit** être de type GET :

```
GET /chat HTTP/1.1
Host: exemple.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Le client peut solliciter des extensions de protocoles ou des sous-protocoles à cet instant ; voir [Miscellaneous](#Miscellaneous) pour les détails. En outre, des en-têtes communs tel que _User-Agent_, _Referer_, _Cookie_ ou des en-têtes d'authentification peuvent être envoyés par la même requête : leur usage est laissé libre car ils ne se rapportent pas directement au WebSocket et au processus de poignée de main. A ce titre il semble préférable de les ignorer : d'ailleurs dans de nombreuses configurations communes, un proxy inverse les aura finalement déjà traitées.

Si un des entêtes n'est pas compris ou sa valeur n'est pas correcte, le serveur devrait envoyer une réponse "[400 Bad Request](/fr/docs/HTTP/Response_codes#400)" (_erreur 400 : la requête est incorrecte_) et clore immédiatement la connexion. Il peut par ailleurs indiquer la raison pour laquelle la poignée de mains a échoué dans le corps de réponse HTTP, mais le message peut ne jamais être affiché par le navigateur (_en somme, tout dépend du comportement du client_). Si le serveur ne comprend pas la version de WebSockets présentée, il doit envoyer dans la réponse un entête _Sec-WebSocket-Version_ correspondant à la ou les version-s supportée-s. Ici le guide explique la version 13, la plus récente à l'heure de l'écriture du tutoriel (_voir le tutoriel en version anglaise pour la date exacte ; il s'agit là d'une traduction_). Maintenant, nous allons passer à l'entête attendu : _Sec-WebSocket-Key_.

> **Note :** Un grand nombre de navigateurs enverront un [`Entête d'origine`](/fr/docs/HTTP/Access_control_CORS#Origin). Vous pouvez alors l'utiliser pour vérifier la sécurité de la transaction (par exemple vérifier la similitude des domaines, listes blanches ou noires, etc.) et éventuellement retourner une réponse [403 Forbidden](/fr/docs/HTTP/Response_codes#403) si l'origine ne vous plaît pas. Toutefois garder à l'esprit que cet entête peut être simulé ou trompeur (il peut être ajouté manuellement ou lors du transfert). De nombreuses applications refusent les transactions sans celui-ci.

> **Note :** L'URI de la requête (`/chat` dans notre cas) n'a pas de signification particulièrement dans les spécifications en usage&nbsp;: elle permet simplement, par convention, de disposer d'une multitude d'applications en parallèle grâce à WebSocket. Par exemple, `exemple.com/chat` peut être associée à une API/une application de dialogue multiutilisateurs lorsque `/game` invoquera son homologue pour un jeu.

> **Note :** [Les codes réguliers (_c-à-d défini par le protocole standard_) HTTP](/fr/docs/HTTP/Response_codes) ne peuvent être utilisés qu'**_avant_** la poignée : ceux après la poignée, sont définis d'une manière spécifique dans la section 7.4 de la documentation sus-nommée.

### La réponse du serveur lors de la poignée de mains

Lorsqu'il reçoit la requête du client, le serveur doit envoyer une réponse correctement formée dans un format non-standard HTTP et qui ressemble au code ci-dessous. Gardez à l'esprit que chaque entête se termine par un saut de ligne : _\r\n_&nbsp;; un saut de ligne doublé lors de l'envoi du dernier entête pour séparer du reste du corps (même si celui-ci est vide).

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

En sus, le serveur peut décider de proposer des extensions de protocoles ou des sous-protocoles à cet instant ; voir [Miscellaneous](#Miscellaneous) pour les détails. L'entête Sec-WebSocket-Accept nous intéresse ici : le serveur doit la former depuis l'entête Sec-WebSocket-Key envoyée précédemment par le client. Pour l'obtenir, vous devez concaténater (_rassembler_) la valeur de _Sec-WebSocket-Key_ et "_258EAFA5-E914-47DA-95CA-C5AB0DC85B11_" (valeur fixée par défaut : c'est une "[magic string](https://en.wikipedia.org/wiki/Magic_string)") puis procéder au hash par la méthode [SHA-1](https://en.wikipedia.org/wiki/SHA-1) du résultat et retourner le format au format [base64](https://en.wikipedia.org/wiki/Base64).

> **Note :** Ce processus qui peut paraître inutilement complexe, permet de certifier que le serveur et le client sont bien sur une base WebSocket et non une requête HTTP (qui serait alors mal interprétée).

Ainsi si la clé (la valeur de l'entête du client) était "`dGhlIHNhbXBsZSBub25jZQ==`", le retour (_Accept \* dans la version d'origine du tutoriel_) sera : "`s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`". Une fois que le serveur a envoyé les entêtes attendues, alors la poignée de mains est considérée comme effectuée et vous pouvez débuter l'échange de données !

> **Note :** Le serveur peut envoyer à ce moment, d'autres entêtes comme par exemple Set-Cookie, ou demander une authenficiation ou encore une redirection via les codes standards HTTP et ce **avant** la fin du processus de poignée de main.

### Suivre les clients confirmés

Cela ne concerne pas directement le protocole WebSocket, mais mérite d'être mentionné maintenant : votre serveur pourra suivre le socket client : il ne faut donc pas tenter une poignée de mains supplémentaire avec un client déjà confirmé. Un même client avec la même IP pourrait alors se connecter à de multiples reprises, mais être finalement rejeté et dénié par le serveur si les tentatives sont trop nombreuses selon les règles pouvant être édictées pour éviter les attaques dites de [déni de service](https://en.wikipedia.org/wiki/Denial_of_service).

## L'échange de trames de données

Le client ou le serveur peuvent choisir d'envoyer un message à n'importe quel moment à partir de la fin du processus de poignée de mains : c'est la magie des WebSockets (une connexion permanente). Cependant, l'extraction d'informations à partir des trames de données n'est pas une expérience si... magique. Bien que toutes les trames suivent un même format spécifique, les données allant du client vers le serveur sont masquées en utilisant le [cryptage XOR](https://en.wikipedia.org/wiki/XOR_cipher) (avec une clé de 32 bits). L'article 5 de la spécification décrit en détail ce processus.

### Format

> **Attention :** Dans cette partie, `payload` équivaut en bon français à _charge utile_. C'est-à-dire les données qui ne font pas partie du fonctionnement de la trame mais de l'échange entre le serveur et le client. Ainsi «&nbsp;<i lang="en">payload data</i>&nbsp;» est traduit par «&nbsp;données utiles&nbsp;».

Chaque trame (dans un sens ou dans un autre) suit le schéma suivant :

```
 0               1               2               3
 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
    4               5               6               7
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|     Extended payload length continued, if payload len == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
    8               9               10              11
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |Masking-key, if MASK set to 1  |
+-------------------------------+-------------------------------+
    12              13              14              15
+-------------------------------+-------------------------------+
| Masking-key (continued)       |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+
```

RSV1-3 peuvent être ignorés, ils concernent les extensions.

Le masquage de bits indique simplement si le message a été codé. Les messages du client doivent être masquée, de sorte que votre serveur doit attendre qu'il soit à 1. (_l'article 5.1 de la spécification prévoit que votre serveur doit se déconnecter d'un client si celui-ci envoie un message non masqué_). Lors de l'envoi d'une trame au client, ne masquez pas et ne réglez pas le bit de masque - cela sera expliqué plus tard.

Note: Vous devez masquer les messages même lorsque vous utilisez un socket sécurisé.

Le champ `opcode` définit comment est interpêtée la _charge utile_ (`payload data`) : ainsi `0x0` indique la consigne "continuer", `0x1` indique du texte (qui est systématiquement encodé en UTF-8), `0x2` pour des données binaires, et d'autres "codes de contrôle" qui seront évoqués plus tard. Dans cette version des WebSockets, `0x3` à 0x7 et `0xB` à `0xF` n'ont pas de significations particulières.

Le bit FIN indique si c'est le dernier message de la série \[_NDT : pour la concaténation, pas la fin de la connexion elle-même_]. S'il est à 0, alors le serveur doit attendre encore une ou plusieurs parties. Sinon le message est considéré comme complet.

### Connaître la taille des données utiles

Pour (pouvoir) lire les _données utiles_, vous devez savoir quand arrêter la lecture dans le flux des trames entrantes vers le serveur. C'est pourquoi il est important de connaître la taille des _données utiles_. Et malheureusement ce n'est pas toujours simple. Voici quelques étapes essentielles à connaître :

1. (_étape 1_) Lire tout d'abord les bits 9 à 15 (inclu) et les interprêter comme un entier non-signé. S'il équivaut à 125 ou moins, alors il correspond à la taille totale de la charge utile.
   S'il vaut à 126, allez à l'étape 2 ou sinon, s'il vaut 127, allez à l'étape 3.
2. (_étape 2_) Lire les 16 bits supplémentaires et les interprêter comme précédent (entier non-signé). Vous avez alors la taille des données utiles.
3. (_étape 3_) Lire les 64 bits supplémentaires et les interprêter comme précédent (entier non-signé). Vous avez alors la taille des données utiles. Attention, le bit le plus significatif doit rester à 0.

### Lire et démasquer les données

Si le bit MASK a été fixé (et il devrait l'être, pour les messages client-serveur), vous devez lire les 4 prochains octets (32 bits) : ils sont la clé de masquage. Une fois la longueur de charge utile connue et la clé de masquage décodée, vous pouvez poursuivre la lecture des autres bits comme étant les données utiles masquées. Par convention pour le reste du paragraphe, appelons-les _données encodées_, et la clé _masque_. Pour décoder les données, bouclez les octets du texte reçu en XOR avec l'octet du (_i modulo 4_) ième octet du _masque_. En voici le pseudo-code (_JavaScript valide_) :

```js
var DECODED = "";
for (var i = 0; i < ENCODED.length; i++) {
  DECODED[i] = ENCODED[i] ^ MASK[i % 4];
}
```

> **Note :** Ici la variable `DECODED` correspond aux données utiles à votre application - en fonction de l'utilisation ou non d'un sous-protocole (_si c'est `json`, vous devez encore décoder les données utiles reçues avec le parseur JSON_).

### La fragmentation des messages

Les champs FIN et opcodes fonctionnent ensemble pour envoyer un message découpé en une multitude de trames. C'est ce que l'on appelle la _fragmentation des messages_. La fragmentation est seulement possible avec les opcodes de `0x0` à `0x2`.

Souvenez-vous de l'intérêt de l'opcode et ce qu'il implique dans l'échange des trames. Pour _0x1_ c'est du texte, pour _0x2_ des données binaires, etc. Toutefois pour _0x0_, la frame est dite "continue" (elle s'ajoute à la précédente). En voici un exemple plus clair, où il y a en réalité deux textes de message (sur 4 trames différentes)&nbsp;:

```
Client: FIN=1, opcode=0x1, msg="hello"
Server: (process complete message immediately) Hi.
Client: FIN=0, opcode=0x1, msg="and a"
Server: (listening, new message containing text started)
Client: FIN=0, opcode=0x0, msg="happy new"
Server: (listening, payload concatenated to previous message)
Client: FIN=1, opcode=0x0, msg="year!"
Server: (process complete message) Happy new year to you too!
```

La première trame dispose d'un message en entier (FIN = 1 et optcode est différent de 0x0) : le serveur peut traiter la requête reçue et y répondre. A partir de la seconde trame et pour les deux suivantes (soit trois trames), l'opcode à 0x1 puis 0x0 signifie qu'il s'agit d'un texte suivi du reste du contenu (0x1 = texte ; 0x0 = la suite). La 3e trame à FIN = 1 indique la fin de la requête.
Voir la [section 5.4](http://tools.ietf.org/html/rfc6455#section-5.4) de la spécification pour les détails de cette partie.

## Pings-Pongs : le "coeur" des WebSockets

A n'importe quel moment après le processus de poignée de mains, le client ou le serveur peut choisir d'envoyer un _ping_ à l'autre partie. Lorsqu'il est reçu, l'autre partie doit renvoyer dès possible un _pong_. Cette pratique permet de vérifier et de maintenir la connexion avec le client par exemple.

Le _ping_ ou le _pong_ sont des trames classiques dites **de contrôle**. Les _pings_ disposent d'un opcode à `0x9` et les _pongs_ à `0xA`. Lorsqu'un _ping_ est envoyé, le _pong_ doit disposer de la même donnée utile en réponse que le ping (et d'une taille maximum autorisé de 125). Le _pong_ seul (c-à-d sans _ping_) est ignoré.

> **Note :** Lorsque plusieurs pings sont envoyés à la suite, un **seul** pong suffit en réponse (_le plus récent pour la donnée utile renvoyée_).

## Clore la connexion

La connexion peut être close à l'initiative du client ou du serveur grâce à l'envoi d'une trame de contrôle contenant des données spécifiques permettant d'interrompre la poignée de main (de lever définitivement le masque pour être plus précis ; voir la [section 5.5.1](http://tools.ietf.org/html/rfc6455#section-5.5.1)). Dès la réception de la trame, le récepteur envoit une trame spécifique de fermeture en retour (pour signifier la bonne compréhension de la fin de connexion). C'est l'émetteur à l'origine de la fermeture qui doit clore la connexion ; toutes les données supplémentaires sont éliminés / ignorés.

## Diverses informations utiles

> **Note :** L'ensemble des codes, extensions et sous-protocoles liés aux WebSocket sont enregistrés dans le (registre) [IANA WebSocket Protocol Registry](http://www.iana.org/assignments/websocket/websocket.xml).

Les extensions et sous-protocoles des WebSockets sont négociés durant [l'échange des entêtes de la poignée de mains](#PoignéeDeMain). Si l'on pourrait croire qu'extensions et sous-protocles sont finalement la même chose, il n'en est rien : **le contrôle des extensions agit sur les trames** ce qui modifie la charge utile ; **alors que les sous-protocoles modifient uniquement la charge utile,** et rien d'autre. Les extensions sont optionnelles et généralisées (par exemple pour la compression des données) ; les sous-protocoles sont souvent obligatoires et ciblés (par exemple dans le cadre d'une application de chat ou d'un jeu MMORPG).

> **Attention :** Les sous-extensions ou les sous-protocoles ne sont pas obligatoires pour l'échange de données par WebSockets ; mais l'esprit développé ici est de rendre soit plus efficace ou sécurisée la transmission (l'esprit d'une extension) ; soit de délimiter et de normaliser le contenu de l'échange (l'esprit d'un sous-protocole ; qui étend donc le protocole par défaut des WebSockets qu'est l'échange de texte simple au format UTF-8).

### Les extensions

L'idée des extensions pourrait être, par exemple, la compression d'un fichier avant de l'envoyer par courriel / email à quelqu'un : les données transférées ne changent pas de contenu, mais leur format oui (et leur taille aussi...). Ce n'est donc pas le format du contenu qui change que le mode transmission - c'est le principe des extensions en WebSockets, dont le principe de base est d'être un protocole simple d'échange de données.

> **Note :** Les extensions sont présentées et expliquées dans les sections 5.8, 9, 11.3.2, and 11.4 de la documentation sus-nommées.

### Les sous-protocoles

Les sous-protocoles sont à comparer à [un schéma XML](https://en.wikipedia.org/wiki/XML_schema) ou [une déclaration de DocType](https://en.wikipedia.org/wiki/Document_Type_Definition). Ainsi vous pouvez utiliser seulement du XML et sa syntaxe et, imposer par le biais des sous-protocoles, son utilisation durant l'échange WebSocket. C'est l'intérêt de ces sous-protocoles : établir une structure définie (_et intangible : le client se voit imposer la mise en oeuvre par le serveur_), bien que les deux doivent l'accepter pour communiquer ensemble.

> **Note :** Les sous-protocoles sont expliqués dans les sections 1.9, 4.2, 11.3.4, and 11.5 de la documentation sus-nommés.

Exemple : un client souhaite demander un sous-protocole spécifique. Pour se faire, il envoie dans les entêtes d'origine du processus de poignées de mains :

```
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

Ou son équivalent :

```
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Le serveur doit désormais choisir l'un des protocoles suggérés par le client et qu'il peut prendre en charge. S'il peut en prendre plus d'un, le premier envoyé par le client sera privilégié. Dans notre exemple, le client envoit `soap` et `wamp`, le serveur qui supporte les deux enverra donc&nbsp;:

```
Sec-WebSocket-Protocol: soap
```

> **Attention :** Le serveur ne peut (ne doit) envoyer plus d'un entête `Sec-Websocket-Protocol`. **S'il n'en supporte aucun, il ne doit pas renvoyer l'entête `Sec-WebSocket-Protocol` (l'entête vide n'est pas correct).** Le client peut alors interrompre la connexion s'il n'a pas le sous-protocole qu'il souhaite (ou qu'il supporte).

Si vous souhaitez que votre serveur puisse supporter certains sous-protocoles, vous pourriez avoir besoin d'une application ou de scripts supplémentaires sur le serveur. Imaginons par exemple que vous utilisiez le sous-protocole json - où toutes les données échangées par WebSockets sont donc formatés suivant le format [JSON](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation). Si le client sollicite ce sous-protocole et que le serveur souhaite l'accepter, vous **devez disposer** d'un parseur (d'un décodeur) JSON et décoder les données par celui-ci.

> **Note :** Pour éviter des conflits d'espaces de noms, il est recommandé d'utiliser le sous-protocole comme un sous-domaine de celui utilisé. Par exemple si vous utilisez un sous-protocole propriétaire qui utilise un format d'échange de données non-standard pour une application de _chat_ sur le domaine _exemple.com_, vous devrirez utiliser&nbsp;: `Sec-WebSocket-Protocol: chat.exemple.com`. S'il y a différentes versions possibles, modifiez le chemin pour faire correspondre le path à votre version comme ceci : `chat.exemple.com/2.0`. Notez que ce n'est pas obligatoire, c'est une convention d'écriture optionnel et qui peut être utilisée d'une toute autre façon.

## Contenus associés

- [Tutorial: Websocket server in C#](/fr/docs/WebSockets/Writing_WebSocket_server)
- [Writing WebSocket client applications](/fr/docs/WebSockets/Writing_WebSocket_client_applications)
- [Tutorial: Websocket server in VB.NET](/fr/docs/WebSockets/WebSocket_Server_Vb.NET)
