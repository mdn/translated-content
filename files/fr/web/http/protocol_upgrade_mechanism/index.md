---
title: Mécanisme de mise à niveau du protocole
slug: Web/HTTP/Protocol_upgrade_mechanism
l10n:
  sourceCommit: 53b19adf7936b1830f407813c3252b35c5eb925e
---

{{HTTPSidebar}}

Le protocole [HTTP/1.1](/fr/docs/Web/HTTP) dispose d'un mécanisme spécifique pour basculer une connexion déjà établie sur un autre protocole, en utilisant l'en-tête [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade).

Ce mécanisme est indicatif et la bascule sur un autre protocole ne peut être forcée. Il appartient aux implémentations de choisir si elles veulent ou non basculer sur un nouveau protocole (et ce même si elles prennent en charge le protocole demandé). En pratique, ce mécanisme est généralement utilisé pour mettre en place une connexion WebSocket.

On notera que HTTP/2 interdit explicitement ce mécanisme, il est propre à HTTP/1.1.

## Mettre à niveau des connexions HTTP/1.1

L'en-tête [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade) est utilisé par les clients pour inviter le serveur à basculer sur l'un des protocoles parmi ceux de la liste fournie, triée par ordre de préférence décroissant.

`Upgrade` étant un en-tête de point à point, il doit également être indiqué dans l'en-tête [`Connection`](/fr/docs/Web/HTTP/Headers/Connection). Une requête avec `Upgrade` ressemblera donc à quelque chose comme&nbsp;:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: exemple/1, toto/2
```

D'autres en-têtes peuvent être nécessaires selon le protocole demandé. Pour une bascule en [WebSocket](/fr/docs/Web/API/WebSocket), des en-têtes supplémentaires pourront être fournis pour configurer la connexion et fournir certains éléments de sécurité à l'ouverture de la connexion. Voir [Basculer sur une connexion WebSocket](#basculer_sur_une_connexion_websocket) pour plus de détails.

Si le serveur souhaite mettre à niveau la connexion, il renvoie une réponse au statut [`101 Switching Protocols`](/fr/docs/Web/HTTP/Status/101) avec un en-tête `Upgrade` indiquant le(s) protocole(s) vers le(s)quel(s) basculer. Si le serveur ne souhaite pas (ou ne peut pas) mettre à niveau la connexion, il ignore l'en-tête `Upgrade` et renvoie une réponse normale (par exemple [`200 OK`](/fr/docs/Web/HTTP/Status/200)).

Après avoir envoyé le code de statut `101`, le serveur peut commencer à échanger avec le nouveau protocole et déclencher les éventuels échanges préparatoires (<i lang="en">handshakes</i>) nécessaires propres au nouveau protocole. Dans la pratique, la connexion devient un flux d'échange bidirectionnel dès que la réponse mise à niveau est terminée et la requête qui a demandé la bascule peut alors être finalisée sur le nouveau protocole.

## Basculer sur une connexion WebSocket

Le passage à une connexion WebSocket représente le cas le plus courant pour la mise à niveau d'une connexion HTTP. Une connexion WebSocket commence toujours par une bascule à partir d'une connexion HTTP ou HTTPS. Cela est réalisé de façon transparente si vous ouvrez une nouvelle connexion en utilisant [l'API WebSocket](/fr/docs/Web/API/WebSocket) ou une autre bibliothèque implémentant WebSocket. On pourra par exemple ouvrir une connexion WebSocket avec la ligne de JavaScript suivante&nbsp;:

```js
webSocket = new WebSocket("wss://destination.server.ext", "optionalProtocol");
```

Le constructeur [`WebSocket()`](/fr/docs/Web/API/WebSocket/WebSocket) s'occupe de la création de la connexion HTTP/1.1 initiale, puis de la bascule et de la poignée de main avec le serveur.

> [!NOTE]
> Le schéma d'URL `"wss://"` permet d'ouvrir une connexion WebSocket sécurisée (contrairement à `"ws://"`).

Si vous devez créer une connexion WebSocket de zéro, vous devrez gérer la poignée de main avec le serveur. Après avoir créé la session HTTP/1.1 initiale, demandez la mise à niveau de la connexion en ajoutant les en-têtes [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade) et [`Connection`](/fr/docs/Web/HTTP/Headers/Connection) comme suit&nbsp;:

```http
Connection: Upgrade
Upgrade: websocket
```

## En-têtes propres à WebSocket

Les en-têtes suivants sont utilisés lors d'une mise à niveau vers une connexion WebSocket. En dehors des en-têtes [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade) et [`Connection`](/fr/docs/Web/HTTP/Headers/Connection), le reste est généralement optionnel ou géré de façon transparente par le navigateur et le serveur.

### `Sec-WebSocket-Extensions`

Indique une ou plusieurs extensions au niveau du protocole WebSocket qui sont demandées au serveur. Il est possible d'utiliser plusieurs en-têtes `Sec-WebSocket-Extension` dans une requête (le résultat est le même que si l'ensemble des extensions avait été indiqué dans une seule liste).

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Une liste d'extensions, séparées par des virgules, demandées au serveur (ou communiquées comme prises en charge par ce dernier). Ces extensions doivent faire partie du [registre IANA sur les noms d'extensions WebSocket](https://www.iana.org/assignments/websocket/websocket.xml#extension-name). Les extensions prenant des paramètres les indiquent avec un point-virgule comme séparateur.

Par exemple&nbsp;:

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

### `Sec-WebSocket-Key`

Cet en-tête fournit les informations nécessaires au serveur pour confirmer que le client est habilité à demander une mise à niveau en WebSocket. Cet en-tête peut être utilisé lorsque des clients non sécurisés (HTTP) souhaite basculer, afin de fournir certaines protections contre les abus. La valeur de la clé est calculée avec un algorithme défini par la spécification WebSocket. Une telle clé _ne fournit pas de sécurité_&nbsp;: elle permet d'éviter à des clients non-WebSocket de se connecter par inadvertance (ou malveillance) en WebSocket. Autrement dit, cette clé permet simplement de confirmer que «&nbsp;Oui, je souhaite réellement demander ouvrir une connexion WebSocket&nbsp;».

Cet en-tête est automatiquement ajouté par les clients qui choisissent de l'utiliser. On _ne peut pas_ ajouter cet en-tête en script avec les méthodes [`fetch()`](/fr/docs/Web/API/Window/fetch) ou [`XMLHttpRequest.setRequestHeader()`](/fr/docs/Web/API/XMLHttpRequest/setRequestHeader).

```http
Sec-WebSocket-Key: key
```

- `key`
  - : La clé pour la requête à mettre à niveau. Le client ajoute cette valeur s'il le souhaite et le serveur inclura une clé à lui en réponse, que le client validera avant de transmettre la réponse de mise à niveau.

L'en-tête de réponse du serveur [`Sec-WebSocket-Accept`](/fr/docs/Web/HTTP/Headers/Sec-WebSocket-Accept) contiendra une valeur calculée selon la valeur de la clé fournie (`key`).

### `Sec-WebSocket-Protocol`

L'en-tête `Sec-WebSocket-Protocol` indique un ou plusieurs protocoles WebSocket souhaités, triés par ordre de préférence décroissant. Le premier pris en charge par le serveur sera sélectionné et renvoyé dans un en-tête de réponse `Sec-WebSocket-Protocol`. Pour indiquer plusieurs protocoles, on pourra fournir une liste comme valeur ou utiliser plusieurs fois l'en-tête.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Une liste de noms de sous-protocoles triés par ordre de préférence décroissant. Les noms des sous-protocoles doivent faire partie du [registre IANA sur les noms des sous-protocoles WebSocket](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ou être une valeur spécifique, comprise par le client et par le serveur.

### `Sec-WebSocket-Version`

#### En-tête de requête

Indique la version du protocole WebSocket que le client souhaite utiliser, afin que le serveur puisse confirmer s'il prend en charge cette version.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : La version du protocole WebSocket avec laquelle le client souhaite communiquer au serveur. Le nombre devrait être la version la plus récente possible parmi celles indiquées dans [le registre IANA sur les numéros de version WebSocket](https://www.iana.org/assignments/websocket/websocket.xml#version-number). À l'heure actuelle, c'est la version 13 qui est la version finale la plus récente du protocole WebSocket.

#### En-tête de réponse

Si le serveur ne peut pas communiquer en utilisant la version demandée, il répondra avec une erreur (comme [`426 Upgrade Required`](/fr/docs/Web/HTTP/Status/426)) incluant un en-tête `Sec-WebSocket-Version` décrivant une liste des versions du protocole qui sont prises en charge. Si le serveur prend en charge la version du protocole demandée, aucun en-tête `Sec-WebSocket-Version` n'est inclus dans la réponse.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Une liste de versions, séparées par des virgules, du protocole WebSocket prises en charge par le serveur.

### `Sec-WebSocket-Accept`

`Sec-WebSocket-Accept` est un en-tête de réponse uniquement. Il est fourni par le serveur qui accepte d'initier une connexion WebSocket lors de la poignée de main initiale. Cet en-tête n'apparaît pas plus d'une fois dans les en-têtes de réponse.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Si l'en-tête [`Sec-WebSocket-Key`](/fr/docs/Web/HTTP/Headers/Sec-WebSocket-Key) a été fourni, la valeur de cet en-tête est calculée en prenant la clé, en lui concaténant la chaîne de caractères "258EAFA5-E914-47DA-95CA-C5AB0DC85B11", puis en calculant [l'empreinte SHA-1](https://fr.wikipedia.org/wiki/SHA-1), ce qui fournit une valeur sur 20 octets. Cette valeur est encodée en [Base64](/fr/docs/Glossary/Base64) pour obtenir la valeur finale passée à l'en-tête.

## Voir aussi

- [L'API WebSocket](/fr/docs/Web/API/WebSocket)
- [HTTP](/fr/docs/Web/HTTP)
- Les RFC de spécification associées
  - [`RFC 7230`](https://datatracker.ietf.org/doc/html/rfc7230)
  - [`RFC 6455`](https://datatracker.ietf.org/doc/html/rfc6455)
  - [`RFC 7540`](https://datatracker.ietf.org/doc/html/rfc7540)
