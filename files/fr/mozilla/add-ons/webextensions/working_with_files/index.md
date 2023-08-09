---
title: Travailler avec des fichiers
slug: Mozilla/Add-ons/WebExtensions/Working_with_files
---

{{AddonSidebar()}}

Votre extension de navigateur peut avoir besoin de fichiers pour offrir des fonctionnalités complètes. Cet article examine les cinq mécanismes permettant de gérer les fichiers :

- Téléchargement de fichiers dans le dossier de téléchargement sélectionné de l'utilisateur.
- Ouverture de fichiers à l'aide d'un sélecteur de fichiers dans une page Web.
- Ouverture de fichiers par glisser-déposer sur une page Web.
- Enregistrement de fichiers ou de blobs localement avec IndexedDB à l'aide de la bibliothèque idb-file-storage.
- Transmission de fichiers à une application native sur l'ordinateur de l'utilisateur.

Pour chacun de ces mécanismes, nous présentons leur utilisation avec des références à la documentation API pertinente, des guides et des exemples montrant comment utiliser l'API.

## Téléchargement de fichiers avec l'API de téléchargement

Ce mécanisme vous permet d'obtenir un fichier depuis votre site Web (ou tout emplacement que vous pouvez définir comme URL) vers l'ordinateur de l'utilisateur. La clé est {{WebExtAPIRef("downloads.download()")}}, qui, dans sa forme la plus simple, accepte une URL et télécharge le fichier de cette URL vers le dossier de téléchargement par défaut de l'utilisateur :

```js
browser.downloads.download({ url : ‘https://example.org/image.png’ })
```

Vous pouvez laisser l'utilisateur télécharger à un endroit de son choix en précisant le paramètre`saveAs`.

> **Note :** En utilisant [URL.createObjectURL()](/fr/docs/Web/API/URL/createObjectURL), vous pouvez également télécharger des fichiers et des blobs définis dans votre JavaScript, y compris le contenu local extrait de IndexedDB.

L'API de téléchargement fournit également des fonctionnalités pour annuler, mettre en pause, reprendre, effacer et supprimer les téléchargements, rechercher les fichiers téléchargés dans le gestionnaire de téléchargement, afficher les fichiers téléchargés dans le gestionnaire de fichiers de l'ordinateur, et ouvrir un fichier dans une application associée.

Pour utiliser cette API, vous devez avoir les [permissions API](/fr/docs/Web/API/Permissions#API_permissions) "downloads" spécifiées dans votre fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json).

Exemple : [Latest download](https://github.com/mdn/webextensions-examples/tree/master/latest-download)
API référence : [downloads API](/fr/Add-ons/WebExtensions/API/downloads)

## Ouverture de fichiers dans une extension avec un sélecteur de fichiers

Si vous souhaitez travailler avec un fichier de l'ordinateur de l'utilisateur, une option est de permettre à l'utilisateur de sélectionner un fichier à l'aide du navigateur de fichiers de l'ordinateur. Créez une nouvelle page ou injectez un code dans une page existante pour utiliser le type `file` de l'élément `input` HTML pour offrir à l'utilisateur un sélecteur de fichiers. Une fois que l'utilisateur a sélectionné un ou des fichiers, le script associé à la page peut accéder au contenu du fichier à l'aide du [DOM File API](/fr/docs/Web/API/File), de la même manière qu'une application web.

Exemple : [Imagify](https://github.com/mdn/webextensions-examples/tree/master/imagify)
Guide : [Using files from web applications](/fr/docs/Using_files_from_web_applications)
API références : [HTML input element](/fr/docs/Web/HTML/Element/input/file) | [DOM File API](/fr/docs/Web/API/File)

> **Note :** Si vous souhaitez accéder ou traiter tous les fichiers dans un dossier sélectionné, vous pouvez le faire en utilisant `<input type="file" webkitdirectory="true"/>` pour sélectionner le dossier et récupérer tous les fichiers qu'il contient.

## Ouverture de fichiers dans une extension avec glisser-déposer

L'API Web Drag and Drop offre une alternative à l'utilisation d'un sélecteur de fichiers. Pour utiliser cette méthode, établissez une zone de stockage qui correspond à votre interface utilisateur, puis ajoutez les récepteurs pour les évènements [dragenter](/fr/docs/Web/Events/dragenter) _(entrer)_, [dragover](/fr/docs/Web/Events/dragover) _(glisser)_, et [drop](/fr/docs/Web/Events/drop) _(déposer)_. Dans le gestionnaire de l'événement "déposer", votre code peut accéder à tout fichier déposé par l'utilisateur à partir de l'objet offert par la propriété dataTransfer en utilisant [DataTransfer.files](/fr/docs/Web/API/DataTransfer/files). Votre code peut alors accéder aux fichiers et les traiter en utilisant le [DOM File API](/fr/docs/Web/API/File).

Exemple : [Imagify](https://github.com/mdn/webextensions-examples/tree/master/imagify)
Guides : [Using files from web applications](/fr/docs/Using_files_from_web_applications) | [File drag and drop](/fr/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
API référence : [DOM File API](/fr/docs/Web/API/File)

## Enregistrement de fichiers de données localement avec la bibliothèque de stockage de fichiers IndexedDB

Si votre extension doit enregistrer des fichiers localement, [idb-file-storage library](https://www.npmjs.com/package/idb-file-storage) fournit une simple enveloppe de [IndexedDB API](/fr/docs/Web/API/API_IndexedDB) pour faciliter le stockage et la récupération des fichiers et des blobs .

Sur Firefox, cette bibliothèque fournit également un " Promise-based API wrapper" pour l'API IDBMutableFile non standard. (L'API IDBMutableFile permet aux extensions de créer et de maintenir un fichier objet de base de données IndexedDB qui fournit une API pour lire et modifier le contenu du fichier sans charger tout le fichier dans la mémoire.)

Les principales caractéristiques de la bibliothèque sont les suivantes :

- [getFileStorage](https://rpl.github.io/idb-file-storage/function/index.html#static-function-getFileStorage) qui renvoie une instance IDBFileStorage, créant le stockage nommé s'il n'existe pas.
- [IDBFileStorage](https://rpl.github.io/idb-file-storage/class/src/idb-file-storage.js~IDBFileStorage.html) qui fournit les méthodes pour sauvegarder et récupérer des fichiers tels que :

  - liste pour obtenir une liste de fichiers éventuellement filtrée dans la base de données.
  - mettre un fichier ou un blob dans la base de données.
  - récupérer un fichier ou un blob à partir de la base de données.
  - supprimer pour effacer un fichier ou un blob à partir de la base de données.

L'exemple [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/master/store-collected-images/webextension-plain) illustre comment utiliser la plupart de ces fonctionnalités. (IDBMutableFile n'est pas inclus, mais vous pouvez trouver des exemples dans le [idb-file-storage examples](https://rpl.github.io/idb-file-storage/examples/) ainsi qu'un certain nombre d'autres exemples de la bibliothèque en action).

L'exemple [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/master/store-collected-images/webextension-plain) permet aux utilisateurs d'ajouter des images à une collection en utilisant une option dans le menu contextuel de l'image. Les images sélectionnées sont collectées dans une fenêtre contextuelle et peuvent être enregistrées dans une collection nommée. Un bouton de la barre d'outils ({{WebExtAPIRef("browserAction")}}) ouvre la collection dans une page de navigation, sur laquelle l'utilisateur peut visualiser et supprimer des images enregistrées, avec une option de filtrage pour réduire les choix. [Voir l'exemple en action](https://youtu.be/t6aVqMMe2Rc).

Le fonctionnement de la bibliothèque peut être compris en regardant [image-store.js](https://github.com/mdn/webextensions-examples/blob/master/store-collected-images/webextension-plain/utils/image-store.js) dans /utils/ :

### Création du stockage et enregistrement des images

```js
async function saveCollectedBlobs(collectionName, collectedBlobs) {
  const storedImages = await getFileStorage({ name: "stored-images" });

  for (const item of collectedBlobs) {
    await storedImages.put(`${collectionName}/${item.uuid}`, item.blob);
  }
}
```

`saveCollectedBlobs` est appelé lorsque l'utilisateur clique sur Enregistrer dans la fenêtre contextuelle et a fourni un nom pour la collection d'images. D'abord, `getFileStorage` crée s'il n'existe pas déjà, ou récupère l' IndexedDB de la base de données "images stockées" dans l'objet `storedImages`. `storedImages.put` ajoute chaque image collectée à la base de données, sous le nom de la collection, en utilisant l'identifiant unique du blob (le nom du fichier). Si l'image en stock est identique à celle existatnt déjà dans la base de données, elle est écrasée. Si vous voulez éviter cela, interrogez la base de données d'abord en utilisant `imagesStore.list()` avec un filtre pour le nom du fichier et, si la liste renvoie un fichier, ajoutez un suffixe approprié au nom de la nouvelle image pour stocker un élément distinct.

### Récupération des images stockées pour l'affichage

```js
export async function loadStoredImages(filter) {
  const imagesStore = await getFileStorage({ name: "stored-images" });
  let listOptions = filter ? { includes: filter } : undefined;
  const imagesList = await imagesStore.list(listOptions);
  let storedImages = [];
  for (const storedName of imagesList) {
    const blob = await imagesStore.get(storedName);
    storedImages.push({ storedName, blobUrl: URL.createObjectURL(blob) });
  }
  return storedImages;
}
```

`loadStoredImages` est appelé lorsque l'utilisateur clique sur la vue ou la recharge dans la page de navigation de la collection. `getFileStorage` ouvre la base de données "images stockées", puis `imagesStore.list` obtient une liste filtrée des images stockées. Cette liste est ensuite utilisée pour récupérer des images avec `imagesStore.get` et créer une liste retournée à l'interface utilisateur.

Notez l'utilisation de [URL.createObjectURL(blob)](/fr/docs/Web/API/URL/createObjectURL) pour créer une URL qui fait référence au blob image. Cette URL est ensuite utilisée dans l'interface utilisateur ([navigate-collection.js](https://github.com/mdn/webextensions-examples/blob/master/store-collected-images/webextension-plain/navigate-collection.js)[collection.js](https://github.com/mdn/webextensions-examples/blob/master/store-collected-images/webextension-plain/navigate-collection.js)) pour afficher l'image.

### Suppression d'images collectées

```js
async function removeStoredImages(storedImages) {
  const imagesStore = await getFileStorage({ name: "stored-images" });
  for (const storedImage of storedImages) {
    URL.revokeObjectURL(storedImage.blobUrl);
    await imagesStore.remove(storedImage.storedName);
  }
}
```

`removeStoredImages` est appelé lorsque l'utilisateur clique sur "Delete" _(supprimer)_ dans la page de navigation de la collection. À nouveau, `getFileStorage` ouvre la base de données "stored-images" et `imagesStore.remove` supprime chaque image à partir de la liste filtrée des images.

Notez l'utilisation de [URL.revokeObjectURL()](/fr/docs/Web/API/URL/revokeObjectURL) pour révoquer explicitement l'URL du blob. Cela permet de libérer la mémoire allouée à l'URL. Si cela n'est pas fait, la mémoire n'est pas libérée jusqu'à ce que la page sur laquelle l'URL a été créée soit fermée. Si l'URL a été créée dans la page d'arrière-plan d'une extension, celle-ci n'est pas déchargée jusqu'à ce que l'extension soit désactivée, désinstallée ou rechargée, ce qui risque d'affecter inutilement les performances du navigateur. Si l'URL est créée dans la page d'une extension (nouvel onglet, fenêtre contextuelle ou barre latérale), la mémoire est libérée lorsque la page est fermée, mais il demeure de bonne pratique de révoquer l'URL lorsqu'elle n'est plus nécessaire.

Une fois que l'URL du blob a été révoquée, toute tentative de la charger entraînera une erreur. Par exemple, si l'URL du blob était utilisée comme attribut `SRC` d'un `IMG` tag, l'image ne sera pas chargée et ne sera pas visible. Il est donc recommandé de supprimer les URL de blobs révoquées des éléments HTML générés après leur révocation.

Exemple : [Store Collected Images](https://github.com/mdn/webextensions-examples/tree/master/store-collected-images/webextension-plain)
API Référence : [idb-file-storage library](https://rpl.github.io/idb-file-storage/)

> **Note :** Vous pouvez également utiliser l' [IndexedDB API](/fr/docs/Web/API/API_IndexedDB) pour stocker des données de votre extension. Cela peut être utile lorsque vous devez stocker des données qui ne sont pas bien gérées par les paires de clés / valeurs simples offertes par le DOM [Storage API](/fr/Add-ons/WebExtensions/API/Storage).

## Traitement de fichiers dans une application locale

Lorsque vous avez une application native ou que vous souhaitez offrir des fonctionnalités natives supplémentaires pour le traitement des fichiers, utilisez une messagerie pour transmettre un fichier à une application native pour traitement.

Vous avez deux options :

- Messagerie basée sur la connexion. Ici, vous déclenchez le processus avec "runtime.connectNative()", qui renvoie un objet [runtime.Port](/fr/Add-ons/WebExtensions/API/runtime/Port). Vous pouvez ensuite transmettre un message JSON à l'application native en utilisant la fonction de port "postMessage()". En utilisant la fonction de port "onMessage.addListener()" vous pouvez lire les messages venant de l'application native. Celle-ci est ouverte, si elle ne s'exécute pas, lorsque "runtime.connectNative()" est appelé et l'application reste en cours d'exécution jusqu'à ce que l'extension appelle la fonction "Port.disconnect()" ou que la page qui s'y rattache soit fermée.
- Messagerie sans connexion. Ici, vous utilisez "runtime.sendNativeMessage()" pour envoyer un message JSON à une nouvelle instance temporaire de l'application native. Le navigateur la ferme après avoir reçu un message de l'application native.

Pour ajouter le fichier ou le blob, vous souhaitez que l'application native utilise [JSON.stringify()](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

Pour utiliser cette méthode, l'extension doit demander la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "nativeMessaging" dans son fichier manifest.json. Réciproquement, l'application native doit accorder l'autorisation à l'extension en incluant son ID dans le champ "allowed_extensions" de l'application "manifest".

Exemple : [Native Messaging](https://github.com/mdn/webextensions-examples/tree/master/native-messaging) (illustre simplement une messagerie)
Guide : [Native messaging](/fr/Add-ons/WebExtensions/Native_messaging)
API référence : [runtime API](/fr/Add-ons/WebExtensions/API/runtime)
