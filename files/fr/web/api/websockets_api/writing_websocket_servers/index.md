---
title: Écriture de serveurs WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("WebSockets API")}}

Un serveur WebSocket n'est rien d'autre qu'une application qui écoute un port d'un serveur TCP et qui suit un protocole spécifique. La création d'un serveur personnalisé peut sembler décourageante si vous ne l'avez jamais fait auparavant. En pratique, il peut cependant être assez simple d'implémenter un serveur WebSocket basique sur la plateforme de votre choix.

Un serveur WebSocket peut être écrit dans n'importe quel langage côté serveur capable d'utiliser des [connexions Berkeley](https://fr.wikipedia.org/wiki/Berkeley_sockets), comme C(++), Python, {{Glossary("PHP")}} ou [JavaScript côté serveur](/fr/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework). Il ne s'agit pas d'un tutoriel pour un langage particulier, mais d'un guide destiné à faciliter l'écriture de votre propre serveur.

Cet article suppose que vous maîtrisez déjà le fonctionnement de {{Glossary("HTTP")}} et que vous possédez un niveau de programmation modéré. Selon le langage choisi, des connaissances sur les sockets TCP peuvent être nécessaires. L'objectif de ce guide est de présenter les connaissances minimales requises pour écrire un serveur WebSocket.

> [!NOTE]
> Lisez la dernière spécification officielle des WebSockets, [RFC 6455 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Les sections 1 et 4-7 sont particulièrement intéressantes pour les développeur·euse·s de serveurs. La section 10 traite de la sécurité et vous devriez la consulter avant d'exposer votre serveur.

Un serveur WebSocket est expliqué ici à un niveau très bas. Les serveurs WebSocket sont souvent des serveurs séparés et spécialisés (pour l'équilibrage de charge ou d'autres raisons pratiques), aussi vous utiliserez fréquemment un [proxy inverse](https://fr.wikipedia.org/wiki/Proxy_inverse) (par exemple un serveur HTTP classique) pour détecter les poignées de main WebSocket, les prétraiter, et rediriger ces clients vers un véritable serveur WebSocket. Cela signifie que vous n'avez pas à alourdir votre code serveur avec des gestionnaires de cookies et d'authentification (par exemple).

## La « poignée de mains » du WebSocket

Tout d'abord, le serveur doit écouter les connexions socket entrantes en utilisant une socket TCP standard. Selon votre plateforme, cela peut être géré automatiquement. Par exemple, supposons que votre serveur écoute sur `exemple.com`, port 8000, et que votre serveur de sockets réponde aux requêtes {{HTTPMethod("GET")}} à `exemple.com/chat`.

> [!WARNING]
> Le serveur peut écouter sur n'importe quel port qu'il choisit, mais s'il choisit un port autre que 80 ou 443, il peut rencontrer des problèmes avec des pare-feu et/ou des proxies. Les navigateurs exigent généralement une connexion sécurisée pour les WebSockets, bien qu'ils puissent offrir une exception pour les appareils locaux.

La poignée de mains est le «&nbsp;Web&nbsp;» dans les WebSockets. C'est le pont entre HTTP et les WebSockets. Lors de la poignée de mains, les détails de la connexion sont négociés, et chaque partie peut se retirer avant la fin si les conditions ne sont pas favorables. Le serveur doit veiller à comprendre tout ce que le client demande, sinon des problèmes de sécurité peuvent survenir.

> [!NOTE]
> L'URI de la requête (`/chat` ici) n'a pas de signification définie dans la spécification. Ainsi, beaucoup de personnes l'utilisent pour permettre à un seul serveur de gérer plusieurs applications WebSocket. Par exemple, `exemple.com/chat` pourrait invoquer une application de dialogue multiutilisateurs, tandis que `/jeu` sur le même serveur pourrait invoquer un jeu multijoueur.

### Requête de poignée de mains côté client

Même si vous construisez votre serveur, un client doit tout de même initier le processus de poignée de main WebSocket en contactant le serveur et en demandant une connexion WebSocket. Vous devez donc savoir comment interpréter la requête du client. Le **client** enverra une requête HTTP assez standard avec des en-têtes qui ressemble à ceci (la version HTTP **doit** être 1.1 ou supérieure, et la méthode **doit** être `GET`)&nbsp;:

```http
GET /chat HTTP/1.1
Host: exemple.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

De plus, le serveur peut décider des demandes d'extension/sous-protocole à cet endroit&nbsp;; voir [Diverses informations utiles](#diverses_informations_utiles) pour les détails. L'entête `Sec-WebSocket-Accept` est importante en ce qu'elle doit être dérivée du {{HTTPHeader("Sec-WebSocket-Key")}} que le client lui a envoyé. Pour l'obtenir, concaténer la `Sec-WebSocket-Key` du client et la chaîne `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` (c'est une «&nbsp;[chaîne magique <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Magic_string)&nbsp;»), calculer le [SHA-1](https://fr.wikipedia.org/wiki/SHA-1) du résultat, puis renvoyer l'encodage [base64](https://fr.wikipedia.org/wiki/Base64) de ce hash.

> [!NOTE]
> Ce processus apparemment inutilement complexe existe afin qu'il soit évident pour le client que le serveur prend en charge les WebSockets. Ceci est important car des problèmes de sécurité pourraient survenir si le serveur acceptait une connexion WebSocket mais interprétait les données comme une requête HTTP.

Ainsi, si la clé était `"dGhlIHNhbXBsZSBub25jZQ=="`, la valeur de l'entête `Sec-WebSocket-Accept` est `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Une fois que le serveur a envoyé ces en-têtes, la poignée de mains est terminée et vous pouvez commencer l'échange de données&nbsp;!

> [!NOTE]
> Le serveur peut envoyer d'autres entêtes comme {{HTTPHeader("Set-Cookie")}}, ou demander une authentification ou des redirections via d'autres codes de statut, avant d'envoyer la réponse de poignée de main.

### La réponse du serveur lors de la poignée de mains

Lorsque le **serveur** reçoit la requête de poignée de main, il doit renvoyer une réponse spéciale indiquant que le protocole va passer de HTTP à WebSocket. Cet en‑tête ressemble à ce qui suit (n'oubliez pas que chaque ligne d'en‑tête se termine par `\r\n` et qu'il faut ajouter un `\r\n` supplémentaire après la dernière pour indiquer la fin de l'en‑tête)&nbsp;:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

De plus, le serveur peut décider des demandes d'extension/sous-protocole à cet endroit&nbsp;; voir [Diverses informations utiles](#diverses_informations_utiles) pour les détails. L'en‑tête `Sec-WebSocket-Accept` est importante en ce qu'elle doit être dérivée du {{HTTPHeader("Sec-WebSocket-Key")}} que le client lui a envoyé. Pour l'obtenir, concaténer la `Sec-WebSocket-Key` du client et la chaîne `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` (c'est une «&nbsp;[chaîne magique <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Magic_string)&nbsp;»), calculer le [SHA-1](https://fr.wikipedia.org/wiki/SHA-1) du résultat, puis renvoyer l'encodage [base64](https://fr.wikipedia.org/wiki/Base64) de ce hash.

> [!NOTE]
> Ce processus apparemment inutilement complexe existe afin qu'il soit évident pour le client que le serveur prend en charge les WebSockets. Ceci est important car des problèmes de sécurité pourraient survenir si le serveur acceptait une connexion WebSocket mais interprétait les données comme une requête HTTP.

Ainsi, si la clé était `"dGhlIHNhbXBsZSBub25jZQ=="`, la valeur de l'en-tête `Sec-WebSocket-Accept` serait `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Une fois que le serveur a envoyé ces en-têtes, la négociation est terminée et vous pouvez commencer à échanger des données &nbsp;!

> [!NOTE]
> Le serveur peut envoyer d'autres en-têtes tels que {{HTTPHeader("Set-Cookie")}}, ou demander une authentification ou des redirections via d'autres codes d'état, avant d'envoyer la réponse de poignée de main.

### Suivre les clients

Cela n'est pas directement lié au protocole WebSocket, mais cela mérite d'être mentionné ici&nbsp;: votre serveur doit garder une trace des connexions des clients afin de ne pas renouveler la négociation avec les clients qui ont déjà terminé la négociation. La même adresse IP client peut essayer de se connecter plusieurs fois. Cependant, le serveur peut les refuser s'ils tentent trop de connexions afin de se protéger contre [les attaques par déni de service](https://fr.wikipedia.org/wiki/Attaque_par_d%C3%A9ni_de_service).

Par exemple, vous pouvez conserver un tableau des noms d'utilisateur·ice ou des numéros d'identification avec le {{DOMxRef("WebSocket")}} correspondant et d'autres données que vous devez associer à cette connexion.

## L'échange de trames de données

Le client ou le serveur peuvent choisir d'envoyer un message à n'importe quel moment — c'est la magie des WebSockets. Cependant, extraire des informations de ces «&nbsp;trames&nbsp;» de données n'est pas une expérience si... magique. Bien que toutes les trames suivent un même format spécifique, les données allant du client vers le serveur sont masquées en utilisant le [cryptage XOR <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/XOR_cipher) (avec une clé de 32 bits). L'article 5 de la spécification décrit en détail ce processus.

### Format

Chaque trame (dans un sens ou dans un autre) suit le schéma suivant&nbsp;:

```plain
Trame de données du client vers le serveur (longueur du message 0 à 125) :

 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |          Masking-key          |
|I|S|S|S|  (4)  |A|     (7)     |             (32)              |
|N|V|V|V|       |S|             |                               |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+-------------------------------+
|    Masking-key (continued)    |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+

Trame de données du client vers le serveur (longueur du message 16 bits) :

 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16)              |
|N|V|V|V|       |S|   (== 126)  |                               |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+-------------------------------+
|                          Masking-key                          |
+---------------------------------------------------------------+
:                          Payload Data                         :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+

Trame de données du serveur vers le client (longueur du message 64 bits) :

 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (64)              |
|N|V|V|V|       |S|   (== 127)  |                               |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|               Extended payload length continued               |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |          Masking-key          |
+-------------------------------+-------------------------------+
|    Masking-key (continued)    |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+
```

Cela signifie qu'une trame contient les octets suivants&nbsp;:

- Premier octet&nbsp;:
  - Bit 0 FIN&nbsp;: indique s'il s'agit du dernier message d'une série. S'il vaut 0, le serveur continue d'écouter les autres parties du message&nbsp;; sinon, le serveur considère le message comme délivré. Plus d'informations à ce sujet plus loin.
  - Bits 1—3 RSV1, RSV2, RSV3&nbsp;: peuvent être ignorés, ils concernent les extensions.
  - Bits 4-7 OPCODE&nbsp;: définit comment interpréter les données utiles&nbsp;: `0x0` pour la continuation, `0x1` pour du texte (toujours encodé en UTF-8), `0x2` pour des données binaires, et d'autres «&nbsp;codes de contrôle&nbsp;» qui seront évoqués plus loin. Dans cette version des WebSockets, `0x3` à `0x7` et `0xB` à `0xF` n'ont pas de signification.
- Bit 8 MASK&nbsp;: indique si le message est codé. Les messages du client doivent être masqués, donc votre serveur doit s'attendre à ce que ce bit soit à 1. (En fait, [section 5.1 de la spécification](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1) indique que votre serveur doit se déconnecter d'un client qui envoie un message non masqué.) Les messages du serveur vers le client ne sont pas masqués et ce bit est à 0. Le masquage sera expliqué plus loin, dans [Lire et démasquer les données](#lire_et_démasquer_les_données). _Note&nbsp;: Vous devez masquer les messages même lorsque vous utilisez un socket sécurisé._
- Bits 9—15&nbsp;: longueur des données utiles. Peut aussi inclure les 2 ou 8 octets suivants&nbsp;; voir [Décoder la longueur des données utiles](#décoder_la_longueur_des_données_utiles).
- Si le masquage est utilisé (toujours vrai pour les messages client-serveur), les 4 octets suivants contiennent la clé de masquage&nbsp;; voir [Lire et démasquer les données](#lire_et_démasquer_les_données).
- Tous les octets suivants sont les données utiles.

### Décoder la longueur des données utiles

Pour lire les données utiles, vous devez savoir quand arrêter la lecture. C'est pourquoi il est important de connaître la longueur des données utiles. Malheureusement, ce n'est pas toujours simple. Pour la lire, suivez ces étapes&nbsp;:

1. Lire les bits 9 à 15 (inclus) et les interpréter comme un entier non signé. S'il vaut 125 ou moins, alors c'est la longueur&nbsp;; vous avez **terminé**. S'il vaut 126, passez à l'étape 2. S'il vaut 127, passez à l'étape 3.
2. Lire les 16 bits suivants et les interpréter comme un entier non signé. Vous avez **terminé**.
3. Lire les 64 bits suivants et les interpréter comme un entier non signé. (Le bit le plus significatif _doit_ être à 0.) Vous avez **terminé**.

### Lire et démasquer les données

Si le bit MASK a été fixé (et il devrait l'être, pour les messages client-serveur), lisez les 4 octets suivants (32 bits)&nbsp;; il s'agit de la clé de masquage. Une fois la longueur de la charge utile et la clé de masquage décodées, vous pouvez lire ce nombre d'octets depuis la socket. Appelons les données `ENCODED`, et la clé `MASK`. Pour obtenir `DECODED`, parcourez les octets de `ENCODED` et appliquez un XOR avec l'octet (i modulo 4) de `MASK`. Exemple en JavaScript&nbsp;:

```js
// La fonction reçoit la trame sous forme de Uint8Array.
// premierIndexApresLongueurChargeUtile est l'index du premier octet
// après la longueur de la charge utile, donc il peut être 2, 4 ou 10.
function getPayloadDecoded(trame, premierIndexApresLongueurChargeUtile) {
  const mask = trame.slice(
    premierIndexApresLongueurChargeUtile,
    premierIndexApresLongueurChargeUtile + 4,
  );
  const chargeUtileEncodee = trame.slice(
    premierIndexApresLongueurChargeUtile + 4,
  );
  // XOR sur chaque séquence de 4 octets dans la charge utile avec le
  // masque
  const chargeUtileDecodee = chargeUtileEncodee.map(
    (octet, i) => octet ^ mask[i % 4],
  );
  return chargeUtileDecodee;
}

const trame = Uint8Array.from([
  // FIN=1, RSV1-3=0, opcode=0x1 (texte)
  0b10000001,
  // MASK=1, charge utile de length=5
  0b10000101,
  // masque de 4 octets
  1, 2, 3, 4,
  // charge utile de 5 octets
  105, 103, 111, 104, 110,
]);

// Suppose que vous avez obtenu le nombre 2 en décodant correctement la
// longueur de la charge utile
const chargeUtileDecodee = getPayloadDecoded(trame, 2);
```

Vous pouvez maintenant déterminer ce que signifie `chargeUtileDecodee` selon votre application. Par exemple, vous pouvez [décoder](/fr/docs/Web/API/TextDecoder) cette donnée en UTF-8 si c'est un message texte.

```js
console.log(new TextDecoder().decode(chargeUtileDecodee)); // "bonjour"
```

Le masquage est une mesure de sécurité pour éviter que des parties malveillantes ne prédisent les données envoyées au serveur. Le client génère une clé de masquage aléatoire cryptographiquement pour chaque message.

### La fragmentation des messages

Les champs FIN et opcodes fonctionnent ensemble pour envoyer un message découpé en une multitude de trames. C'est ce que l'on appelle la _fragmentation des messages_. La fragmentation est seulement possible avec les opcodes de `0x0` à `0x2`.

Souvenez-vous de l'intérêt de l'opcode et ce qu'il implique dans l'échange des trames. Pour _0x1_ c'est du texte, pour _0x2_ des données binaires, etc. Toutefois pour _0x0_, la frame est dite "continue" (elle s'ajoute à la précédente). En voici un exemple plus clair, où il y a en réalité deux textes de message (sur 4 trames différentes)&nbsp;:

```plain
Client: FIN=1, opcode=0x1, msg="bonjour"
Server: (process complete message immediately) Salut.
Client: FIN=0, opcode=0x1, msg="et un"
Server: (listening, new message containing text started)
Client: FIN=0, opcode=0x0, msg="joyeux nouvel"
Server: (listening, payload concatenated to previous message)
Client: FIN=1, opcode=0x0, msg="an !"
Server: (process complete message) Bonne année à vous aussi !
```

Remarquez que la première trame contient un message complet (avec `FIN=1` et `opcode!=0x0`), donc le serveur peut traiter ou répondre comme il le souhaite. La seconde trame envoyée par le client contient une charge utile texte (`opcode=0x1`), mais le message complet n'est pas encore arrivé (`FIN=0`). Toutes les parties restantes de ce message sont envoyées avec des trames de continuation (`opcode=0x0`), et la dernière trame du message est marquée par `FIN=1`. [La section 5.4 de la spécification <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) décrit la fragmentation des messages.

## Pings et Pongs : le battement de coeur des WebSockets

À n'importe quel moment après la poignée de mains, le client ou le serveur peut choisir d'envoyer un ping à l'autre partie. Lorsqu'un ping est reçu, le·la destinataire doit renvoyer un pong dès que possible. Vous pouvez utiliser cela pour vérifier que le client est toujours connecté, par exemple.

Un ping ou un pong est simplement une trame classique, mais c'est une **trame de contrôle**. Les pings ont un opcode à `0x9`, et les pongs à `0xA`. Lorsque vous recevez un ping, renvoyez un pong avec exactement la même donnée utile que le ping (pour les pings et pongs, la longueur maximale de la charge utile est 125). Il se peut aussi que vous receviez un pong sans avoir envoyé de ping&nbsp;; ignorez-le si cela arrive.

> [!NOTE]
> Si vous avez reçu plusieurs pings avant d'avoir la possibilité d'envoyer un pong, vous n'envoyez qu'un seul pong.

## Clore la connexion

Pour clore une connexion, le client ou le serveur peut envoyer une trame de contrôle contenant une séquence de contrôle spécifique pour initier la poignée de main de fermeture (détaillée dans [la section 5.5.1 de la spécification <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Lorsqu'une telle trame est reçue, l'autre partie envoie une trame de fermeture en réponse. La première partie ferme alors la connexion. Toute donnée reçue après la fermeture de la connexion est ensuite ignorée.

## Diverses informations utiles

> [!NOTE]
> L'ensemble des codes, extensions et sous-protocoles liés aux WebSocket sont enregistrés dans le (registre) [IANA WebSocket Protocol Registry <sup>(angl.)</sup>](https://www.iana.org/assignments/websocket/websocket.xml).

Les extensions et sous-protocoles WebSocket sont négociés via les entêtes lors de [la poignée de mains](#la_«_poignée_de_mains_»_du_websocket). Parfois, extensions et sous-protocoles semblent très similaires, mais il existe une distinction claire. Les extensions contrôlent la _trame_ WebSocket et _modifient_ la charge utile, tandis que les sous-protocoles structurent la _charge utile_ WebSocket et ne modifient jamais rien d'autre. Les extensions sont optionnelles et généralisées (comme la compression)&nbsp;; les sous-protocoles sont obligatoires et ciblés (comme ceux pour le chat ou les jeux MMORPG).

### Les extensions

Pensez à une extension comme à la compression d'un fichier avant de l'envoyer par courriel ou email à quelqu'un. Quoi que vous fassiez, vous envoyez les _mêmes_ données sous différentes formes. Le·la destinataire pourra finalement obtenir les mêmes données que votre copie locale, mais elles sont envoyées différemment. C'est ce que fait une extension. WebSockets définit un protocole et une façon simple d'envoyer des données, mais une extension comme la compression peut permettre d'envoyer les mêmes données dans un format plus court.

> [!NOTE]
> Les extensions sont présentées et expliquées dans les sections 5.8, 9, 11.3.2, and 11.4 de la spécification.

### Les sous-protocoles

Considérez un sous-protocole comme un [schéma XML <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/XML_schema) personnalisé ou une [déclaration de doctype](https://fr.wikipedia.org/wiki/Document_type_definition). Vous utilisez toujours XML et sa syntaxe, mais vous êtes en plus restreint·e par une structure convenue. Les sous-protocoles WebSocket fonctionnent de la même façon. Ils n'introduisent rien de complexe, ils établissent simplement une structure. Comme un doctype ou un schéma, les deux parties doivent accepter le sous-protocole&nbsp;; contrairement à un doctype ou un schéma, le sous-protocole est implémenté côté serveur et ne peut pas être référencé de l'extérieur par le client.

> [!NOTE]
> Les sous-protocoles sont expliqués dans les sections 1.9, 4.2, 11.3.4, and 11.5 de la spécification.

A client has to ask for a specific subprotocol. To do so, it will send something like this _as part of the original handshake_:

```http
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

Ou son équivalent&nbsp;:

```http
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Le serveur doit désormais choisir l'un des protocoles suggérés par le client et qu'il peut prendre en charge. S'il peut en prendre plus d'un, le premier envoyé par le client sera privilégié. Dans notre exemple, le client envoit `soap` et `wamp`, le serveur qui supporte les deux enverra donc&nbsp;:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Le serveur ne peut (ne doit) envoyer plus d'un entête `Sec-WebSocket-Protocol`.
> S'il ne souhaite utiliser aucun sous-protocole, **_il ne doit pas envoyer d'entête `Sec-WebSocket-Protocol`_**. Envoyer un entête vide n'est pas correct. Le client peut alors interrompre la connexion s'il n'obtient pas le sous-protocole souhaité.

Si vous souhaitez que votre serveur puisse supporter certains sous-protocoles, vous pourriez avoir besoin d'une application ou de scripts supplémentaires sur le serveur. Imaginons par exemple que vous utilisiez le sous-protocole `json`. Dans ce sous-protocole, toutes les données sont transmises au format [JSON](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation). Si le client sollicite ce sous-protocole et que le serveur souhaite l'accepter, le serveur doit disposer d'un parseur JSON. En pratique, cela fera partie d'une bibliothèque, mais le serveur doit pouvoir traiter les données.

> [!NOTE]
> Pour éviter des conflits d'espaces de noms, il est recommandé d'utiliser le nom du sous-protocole comme partie d'une chaîne de domaine. Si vous développez une application de chat personnalisée qui utilise un format propriétaire exclusif à Exemple SA, vous pourriez utiliser&nbsp;: `Sec-WebSocket-Protocol: chat.exemple.com`. Notez que ce n'est pas obligatoire, c'est simplement une convention optionnelle, et vous pouvez utiliser n'importe quelle chaîne de caractères.

## Contenus associés

- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutoriel&nbsp;: serveur WebSocket en C#](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutoriel&nbsp;: serveur WebSocket en Java](/fr/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
