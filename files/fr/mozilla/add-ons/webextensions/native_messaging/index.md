---
title: Native messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
---

{{AddonSidebar}}

Native messaging permet à une extension d'échanger des messages avec une application native installée sur l'ordinateur de l'utilisateur. Ceci permet que des applications natives puissent fournir un service à des extensions sans avoir besoin d'être atteignables via internet. Un exemple typique est le gestionnaire de mots de passe : l'application native s'occupe du stockage et du chiffrement des mots de passe et communique avec l'extension afin de remplir les formulaires web. Native messaging permet aussi aux extensions d'accéder à des ressources qui ne sont pas accessibles via les API WebExtension, par exemple le matériel hardware particulier.

L'application native n'est pas installée ou gérée par le navigateur : elle est installée à l'aide du système d'installation du système d'exploitation sous‐jacent. En plus de l'application native elle‐même, vous devrez fournir un fichier JSON appelé «&nbsp;manifest hôte&nbsp;» (host manifest) ou «&nbsp;manifest d'application&nbsp;» (app manifest) et l'installer dans un emplacement défini sur l'ordinateur de l'utilisateur. Le fichier manifest de l'application décrit comment le navigateur peut se connecter à l'application native.

L'extension doit demander l'[autorisation](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) «&nbsp;nativeMessaging&nbsp;» dans son fichier manifest.json. À l'inverse, l'application native doit accorder l'autorisation à l'extension en incluant son ID dans le champ «&nbsp;allowed_extensions&nbsp;» (extensions autorisées) du manifest de l'application.

Par la suite, l'extension pourra échanger des messages en JSON avec l'application native en utilisant une série de fonctions de l'API {{WebExtAPIRef("runtime")}}. Du côté de l'application native, les messages seront reçus en utilisant l'entrée standard (stdin, standard input) et envoyés en utilisant la sortie standard (stdout, standard output).

![](native-messaging.png)

Le support de native messaging dans les extensions est généralement compatible avec Chrome, avec deux grandes différences :

- La liste `allowed_extensions` du manifest de l'application est un tableau d'ID d'applications, tandis que Chrome liste `allowed_origins`, sous la forme d'un tableau d'URL "chrome-extension".
- Le manifeste de l'application est stocké dans un emplacement différent [comparé à Chrome](https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location).

Il y a un exemple complet (en anglais) dans le répertoire « [native‐messaging](https://github.com/mdn/webextensions-examples/tree/master/native-messaging) » du dépôt «&nbsp;webextensions‐examples&nbsp;» sur GitHub. La plus grande partie du code de cet article est repris de cet exemple.

## Mise en œuvre

### Le manifest de l'extension (Extension manifest)

Si vous souhaitez que votre extension puisse communiquer avec une application native, alors :

- Vous devez ajouter la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) dans son fichier [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Vous devriez probablement spécifier explicitement l'id de votre add‐on, en utilisant la clé de manifest des [applications](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ( Parce que le manifest de l'application identifiera le jeu d'extensions qui sont autorisées à se connecter à celle-ci via la liste de leur ID).

Voici un exemple de fichier «&nbsp;manifest.json&nbsp;» :

```json
{
  "description": "Native messaging example extension",
  "manifest_version": 2,
  "name": "Native messaging example",
  "version": "1.0",
  "icons": {
    "48": "icons/message.svg"
  },

  "browser_specific_settings": {
    "gecko": {
      "id": "ping_pong@example.org",
      "strict_min_version": "50.0"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": "icons/message.svg"
  },

  "permissions": ["nativeMessaging"]
}
```

### Le manifest de l'application (App manifest)

Le manifest de l'application décrit au navigateur la manière avec laquelle il peut se connecter à l'application native.

Le fichier manifest de l'application doit être installé avec l'application native. C'est-à-dire que le navigateur lit et valide les fichiers de manifeste des applications mais ne les installe ni ne les gère. Ainsi, le modèle de sécurité pour savoir quand et comment ces fichiers sont installés et mis à jour ressemble beaucoup plus à celui des applications natives que celui des extensions utilisant les API WebExtension.

Pour plus de détails sur la syntaxe et l'emplacement du manifeste des applications natives, voir [manifest natifs](/fr/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Par exemple, voici un manifeste pour l'application native "ping_pong" :

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Ceci autorise l'application dont l'ID est « ping_pong\@example.org » à se connecter, en passant le nom « ping_pong » comme paramètre à la fonction de l'API {{WebExtAPIRef("runtime")}} concernée. L'application, elle‐même se trouve dans le fichier « /path/to/native‐messaging/app/ping_pong.py ».

> **Note :** Pour Windows dans l'exemple ci‐dessus, l'application native est un script Python. Il peut être compliqué d'amener Windows à faire fonctionner correctement des scripts Python, une méthode alternative est de fournir un fichier .bat, et de l'indiquer dans le manifest :
>
> ```json
> {
>   "name": "ping_pong",
>   "description": "Example host for native messaging",
>   "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
>   "type": "stdio",
>   "allowed_extensions": ["ping_pong@example.org"]
> }
> ```
>
> Le fichier batch invoquera alors le script Python :
>
> ```bash
> @echo off
>
> python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
> ```

## Opérations d'échange des messages

Ayant appliqué la configuration de ci‐dessus, une extension peut échanger des messages JSON avec une application native.

### Du côté de l'extension

La messagerie native ne peut pas être utilisée directement dans les scripts de contenu ; vous devrez le [faire indirect via des scripts d'arrière plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Il y a deux modèles à utiliser ici : la messagerie basée sur la connexion et la messagerie sans connexion.

#### Messagerie basée sur une connexion

Avec cette manière de faire, vous appelez la fonction {{WebExtAPIRef("runtime.connectNative()")}}, en lui passant comme paramètre le nom de l'application (la valeur de la propriété "name" du manifest de l'application). Ceci lance l'application si elle n'est pas encore démarrée et renverra un objet {{WebExtAPIRef("runtime.Port")}} à l'extension.

L'application native passe deux arguments lorsqu'elle démarre :

- le chemin complet du manifest de l'application
- (nouveau dans Firefox 55) l'ID (tel qu'indiqué dans la clé du manifest.json de [browser_specific_settings](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)) of the add-on that started it.

> **Note :** Chrome gère différemment les arguments passés :
>
> - Sous Linux et Mac, Chrome passe un argument, l'origine de l'extension qui l'a lancé sous la forme : `chrome-extension://[extensionID]`. Ceci permet à l'application d'identifier l'extension.
> - Sous Windows, Chrome passe deux arguments : le premier est l'origine de l'extension, et le second est une poignée à la fenêtre native Chrome qui a lancé l'application.

L'aplication continue de fonctionner jusqu'à ce que l'extension invoque `Port.disconnect()` ou jusqu'à ce que la page connectée soit fermée.

Pour envoyer des messages en utilisant `Port`, utilisez sa fonction `postMessage()`, en passant le message JSON à envoyer. Pour écouter les messages en utilisant `Port`, ajouter un écouteur (_listener_) en utilisant sa fonction `onMessage.addListener()`.

Voici un exemple de script « _background_ » qui établit une connection avec l'application « `ping_pong` », qui écoute à l'attente de messages de celle‐ci et qui lui envoie un message « ping » à chaque fois que l'utilisateur clique sur l'action du navigateur _(browser action)_ :

```js
/*
On startup, connect to the "ping_pong" app.
*/
var port = browser.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

#### Messagerie sans connexion

Avec cette manière de faire, vous invoquez la fonction {{WebExtAPIRef("runtime.sendNativeMessage()")}}, en lui passant comme arguments :

- le nom de l'application,
- le message JSON à envoyer,
- et optionnellement un callback.

Une nouvelle instance de l'application sera créée pour chaque message. L'application native passe deux arguments lorsqu'elle démarre :

- le chemin complet du manifest de l'application
- (nouveau dans Firefox 55), l'ID (tel qu'indiqué dans la clé du manifest.json de [browser_specific_settings](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)) de l'add‐on qui l'a démarré.

Le premier message envoyé par l'application est traité comme une réponse à l'invocation de la fonction `sendNativeMessage()`, et sera passé dans le callback.

Voici l'exemple précédent réécrit en utilisant `runtime.sendNativeMessage()`:

```js
function onResponse(response) {
  console.log("Received " + response);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  var sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

### Du côté de l'application

Du côté de l'application, vous utilisez l'entrée standard (standard input) pour recevoir les messages, et la sortie standard (standard output) pour les envoyer.

Chaque message est sérialisé sous forme de JSON, est encodé en UTF‐8 et est précédé d'une valeur 32 bits qui contient la longueur du message dans l'ordre des octets natifs.

La taille maximum d'un seul message envoyé par l'application est de 1MB. La taille maximum d'un message envoyé vers l'application est de 4GB.

Voici un exemple écrit en Python. Il écoute les messages de l'extension. Notez que le fichier doit être exécutable sous Linux. Si le message est "ping", il répond par un message "pong". C'est la version Python 2 :

```python
#!/usr/bin/python -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import json
import sys
import struct


# Read a message from stdin and decode it.
def get_message():
    raw_length = sys.stdin.read(4)
    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.read(message_length)
    return json.loads(message)


# Encode a message for transmission, given its content.
def encode_message(message_content):
    encoded_content = json.dumps(message_content)
    encoded_length = struct.pack('=I', len(encoded_content))
    return {'length': encoded_length, 'content': encoded_content}


# Send an encoded message to stdout.
def send_message(encoded_message):
    sys.stdout.write(encoded_message['length'])
    sys.stdout.write(encoded_message['content'])
    sys.stdout.flush()


while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))
```

En Python 3, les données binaires reçues doivent être décodées en une chaîne. Le contenu à renvoyer à l'addon doit être encodé en données binaires à l'aide d'une structure :

```python
#!/usr/bin/python -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import json
import sys
import struct


# Read a message from stdin and decode it.
def get_message():
    raw_length = sys.stdin.buffer.read(4)

    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.buffer.read(message_length).decode("utf-8")
    return json.loads(message)


# Encode a message for transmission, given its content.
def encode_message(message_content):
    encoded_content = json.dumps(message_content).encode("utf-8")
    encoded_length = struct.pack('=I', len(encoded_content))
    # use struct.pack("10s", bytes), to pack a string of the length of 10 characters
    return {'length': encoded_length, 'content': struct.pack(str(len(encoded_content))+"s",encoded_content)}


# Send an encoded message to stdout.
def send_message(encoded_message):
    sys.stdout.buffer.write(encoded_message['length'])
    sys.stdout.buffer.write(encoded_message['content'])
    sys.stdout.buffer.flush()


while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))
```

## Fermeture de l'application native

Si vous vous êtes connecté à l'application native en utilisant `runtime.connectNative()`, alors elle continuera de fonctionner jusqu'à ce que l'extension appelle `Port.disconnect()` ou que la page qui s'y est connectée soit fermée. Si vous avez démarré l'application native en utilisant `runtime.sendNativeMessage()`, alors elle sera fermée après qu'elle aura reçu le message et envoyé une réponse.

Pour fermer l'application native :

- Sur les système d'exploitation \*.nix comme Linux ou OS X, le navigateur envoie un SIGTERM à l'application native, puis un SIGKILL après que l'application ait eût l'occasion de finir de manière normale. Ces signaux sont propagés à tout sous‐processus sauf pour ceux qui se trouvent dans de nouveaux groupes de processus.
- Sous windows, le navigateur met le processus de l'application native dans un [Job object](<https://msdn.microsoft.com/fr-fr/library/windows/desktop/ms684161(v=vs.85).aspx>) et tue le processus. Si l'application native lance un autre processus et désire qu'il reste ouvert après que l'application native elle même soit fermée alors l'application native doit démarrer un autre processus avec le paramètre [`CREATE_BREAKAWAY_FROM_JOB`](<https://msdn.microsoft.com/fr/library/windows/desktop/ms684863(v=vs.85).aspx>).

## Dépannage

Si quelque chose se passe mal, vérifier dans la [console du navigateur](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Si l'application native renvoit quelque‐chose vers stderr (strandard error), le navigateur le renverra vers la console du navigateur. Donc si vous avez réussi à lancer l'application native, vous verrez toutes les messages d'erreurs qu'elle émet.

Si vous n'avez pas réussi à démarrer l'application, vous devriez voir un message d'erreur vous donnant un indice sur le problème.

```
"No such native application <name>"
```

- Vérifiez que le nom passé comme argument à la fonction `runtime.connectNative()` correspond au nom dans le manifest de l'application
- OS X / Linux : vérifiez que le nom du fichier de manifest de l'application est \<name>.json.
- Windows : vérifiez que la clé de registre est dans l'endroit correcte, et que son nom correspond au «&nbsp;name&nbsp;» dans le manifest de l'application.
- Windows : vérifiez que le chemin donné dans la clé de registre pointe vers le manifest de l'application.

  ```
  "Error: Invalid application <name>"
  ```

- Vérifier que le nom de l'application ne contient pas de caractères invalides.

  ```
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows : Si votre application est un script écrit en Python, vérifiez que Python est installé et que vous avez un chemin définit pour lui.

  ```
  "File at path <path> does not exist, or is not executable"
  ```

- Si vous voyez ce message, alors le fichier de manifest de l'application a été trouvé.
- Vérifier que le «&nbsp;chemin&nbsp;» dans le manifest de l'application est correct.
- Windows : vérifiez que vous avez «&nbsp;échappé&nbsp;» les séparateurs du chemin ("c:\\\path\\\to\\\file").
- Vérifiez que l'application se trouve bien à l'endroit indiqué par la propriété «&nbsp;path&nbsp;» dans le manifest de l'application.
- Vérifiez que l'application est exécutable.

  ```
  "This extension does not have permission to use native application <name>"
  ```

- Vérifier que le tableau «&nbsp;allowed_extensions&nbsp;» dans le manifest de l'application contient l'ID de l'add‐on.

  ```
  "TypeError: browser.runtime.connectNative is not a function"
  ```

- Vérifiez que l'extension à la permission « nativeMessaging »

  ```
  "[object Object] NativeMessaging.jsm:218"
  ```

- Il y a eu un problème lors du démarrage de l'application.

## Incompatibilités avec Chrome

Il existe un certain nombre de différences entre les navigateurs qui affectent la messagerie native dans les extensions web, notamment les arguments transmis à l'app native, l'emplacement du fichier manifeste, etc. Ces différences sont abordées dans [Incompatibilités Chrome > Messagerie native](/fr/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging).
