---
title: API File System
slug: Web/API/File_System_API
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{DefaultAPISidebar("File System API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

L'API **du système de fichiers** — avec des extensions fournies avec [**l'API d'accès au système de fichiers** <sup>(angl.)</sup>](https://wicg.github.io/file-system-access/) pour accéder aux fichiers sur le système de fichiers d'un périphérique — permet de lire, d'écrire et de gérer des fichiers.

Voir [la relation avec d'autres API liées aux fichiers](/fr/docs/Web/API/File_API#relation_avec_d_autres_api_liées_aux_fichiers) pour une comparaison entre cette API, [l'API des entrées de fichiers et de répertoires](/fr/docs/Web/API/File_and_Directory_Entries_API) et [l'API de fichier](/fr/docs/Web/API/File_API).

## Concepts et utilisation

Cette API permet d'interagir avec les fichiers présents sur le périphérique local d'un·e utilisateur·ice ou sur un système de fichiers réseau accessible à ces derniers. Les fonctionnalités de base incluent la lecture, l'écriture ou la sauvegarde de fichiers, ainsi que l'accès à la structure des répertoires.

La plupart des interactions avec les fichiers et les répertoires se font par des gestionnaires. La classe parente {{DOMxRef("FileSystemHandle")}} permet de définir deux classes enfants&nbsp;: {{DOMxRef("FileSystemFileHandle")}} et {{DOMxRef("FileSystemDirectoryHandle")}}, pour les fichiers et les répertoires respectivement.

Les <i lang="en">handles</i> représentent un fichier ou un répertoire sur le système de l'utilisateur·ice. Vous pouvez y accéder en affichant un sélecteur de fichier ou de répertoire à l'aide de méthodes telles que {{DOMxRef("window.showOpenFilePicker()")}} et {{DOMxRef("window.showDirectoryPicker()")}}. Une fois ces méthodes appelées, le sélecteur s'affiche et l'utilisateur·ice choisit un fichier ou un répertoire. Si la sélection est réussie, un <i lang="en">handle</i> est retourné.

Vous pouvez également accéder aux <i lang="en">handles</i> de fichiers avec&nbsp;:

- La méthode {{DOMxRef("DataTransferItem.getAsFileSystemHandle()")}} de {{DOMxRef("HTML Drag and Drop API", "L'API Glisser-Déposer HTML", "", "nocode")}}.
- [L'API de gestion de fichiers <sup>(angl.)</sup>](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Chaque <i lang="en">handle</i> offre ses propres fonctionnalités et il existe quelques différences selon celui que vous utilisez (voir la section [Interfaces](#interfaces) pour plus de détails). Vous pouvez ensuite accéder aux données des fichiers ou aux informations (y compris les enfants) du répertoire sélectionné. Cette API apporte des fonctionnalités qui font défaut au Web. Cependant, la sécurité a été la principale préoccupation lors de la conception de l'API, et l'accès aux fichiers ou répertoires est interdit sauf si l'utilisateur·ice l'autorise explicitement (ce qui n'est pas le cas avec le [système de fichiers d'origine privé](#système_de_fichiers_d_origine_privé), qui n'est pas visible pour l'utilisateur·ice).

> [!NOTE]
> Les différentes exceptions pouvant être levées lors de l'utilisation des fonctionnalités de cette API sont répertoriées sur des pages pertinentes, comme défini dans la spécification. Cependant, la situation est rendue plus complexe par l'interaction entre l'API et le système d'exploitation sous-jacent. Une proposition a été faite pour [énumérer les mappages d'erreurs dans la spécification <sup>(angl.)</sup>](https://github.com/whatwg/fs/issues/57), qui inclut des informations utiles à ce sujet.

> [!NOTE]
> Les objets basés sur {{DOMxRef("FileSystemHandle")}} peuvent également être sérialisés dans une base de données {{DOMxRef("IndexedDB API", "IndexedDB", "", "nocode")}}, ou transférés via {{DOMxRef("window.postMessage", "postMessage()")}}.

### Système de fichiers d'origine privé

Le système de fichiers d'origine privé (OPFS) est un point de terminaison de stockage fourni dans le cadre de l'API du système de fichiers, qui est privé pour l'origine de la page et non visible pour l'utilisateur·ice comme le système de fichiers classique. Il donne accès à un type spécial de fichier hautement optimisé pour les performances et offre un accès en écriture directe à son contenu.

Voici quelques cas d'utilisation possibles&nbsp;:

- Applications avec téléchargement persistant
  - Lorsqu'un fichier ou un répertoire est sélectionné pour téléchargement, vous pouvez copier le fichier dans un bac à sable local et télécharger un morceau à la fois.
  - L'application peut reprendre les téléchargements après une interruption, comme la fermeture ou le plantage du navigateur, une perte de connexion ou l'arrêt de l'ordinateur.

- Jeux vidéo ou autres applications avec beaucoup de ressources multimédias
  - L'application télécharge un ou plusieurs gros fichiers (<i lang="en">tarballs</i>) et les extrait localement dans une structure de répertoires.
  - L'application précharge les ressources en arrière-plan, afin que l'utilisateur·ice puisse passer au niveau ou à la tâche suivante sans attendre un téléchargement.

- Éditeur audio ou photo avec accès hors ligne ou cache local (idéal pour les performances et la rapidité)
  - L'application peut écrire dans les fichiers en place (par exemple, écraser uniquement les balises `ID3`/`EXIF` et non le fichier entier).

- Visionnage vidéo hors ligne
  - L'application peut télécharger des fichiers volumineux (> 1 Go) pour une visualisation ultérieure.
  - L'application peut accéder à des fichiers partiellement téléchargés (afin que vous puissiez regarder le premier chapitre d'une vidéo, même si l'application est toujours en train de télécharger le reste du contenu ou si le téléchargement n'est pas terminé parce que vous deviez partir).

- Client de messagerie Web hors ligne
  - Le client télécharge des pièces jointes et les stocke localement.
  - Le client met en cache des pièces jointes pour un téléchargement ultérieur.

Lisez notre page sur le [système de fichiers d'origine privé](/fr/docs/Web/API/File_System_API/Origin_private_file_system) pour des instructions sur la façon de l'utiliser.

### Enregistrement de fichiers

- Pour les <i lang="en">handles</i> asynchrones, utilisez {{DOMxRef("FileSystemWritableFileStream")}}. Une fois que les données à enregistrer sont dans un format d'objet {{DOMxRef("Blob")}}, {{JSxRef("String")}}, chaîne de caractère littérale ou {{JSxRef("ArrayBuffer", "buffer")}}, vous pouvez ouvrir un flux et enregistrer les données dans un fichier existant ou un nouveau fichier.
- Pour {{DOMxRef("FileSystemSyncAccessHandle")}} (accès synchrone), vous écrivez les modifications dans un fichier en utilisant la méthode {{DOMxRef("FileSystemSyncAccessHandle.write", "write()")}}. Vous pouvez également appeler {{DOMxRef("FileSystemSyncAccessHandle.flush", "flush()")}} si vous avez besoin que les modifications soient enregistrées sur le disque à un moment précis (sinon, vous pouvez laisser le système d'exploitation sous-jacent gérer cela, ce qui convient dans la plupart des cas).

## Interfaces

- {{DOMxRef("FileSystemChangeRecord")}} {{Experimental_Inline}}
  - : Contient des détails d'un seul changement observé par un {{DOMxRef("FileSystemObserver")}}.
- {{DOMxRef("FileSystemHandle")}}
  - : Un objet qui représente un fichier ou une entrée de répertoire. Plusieurs gestionnaires peuvent représenter la même entrée. La plupart du temps, vous ne travaillez pas directement avec `FileSystemHandle`, mais plutôt avec ses interfaces enfants {{DOMxRef('FileSystemFileHandle')}} et {{DOMxRef('FileSystemDirectoryHandle')}}.
- {{DOMxRef("FileSystemFileHandle")}}
  - : Fournit un gestionnaire à une entrée du système de fichiers.
- {{DOMxRef("FileSystemDirectoryHandle")}}
  - : Fournit un gestionnaire à un répertoire du système de fichiers.
- {{DOMxRef("FileSystemObserver")}} {{Experimental_Inline}}
  - : Fournit un mécanisme pour observer les modifications des fichiers ou répertoires sélectionnés.
- {{DOMxRef("FileSystemSyncAccessHandle")}}
  - : Fournit un gestionnaire synchrone à une entrée du système de fichiers, qui fonctionne sur un seul fichier du disque. La nature synchrone des lectures et écritures de fichiers permet d'obtenir de meilleures performances pour les méthodes critiques dans les contextes où les opérations asynchrones entraînent une charge importante, par exemple&nbsp;: [WebAssembly](/fr/docs/WebAssembly). Cette classe n'est accessible qu'à l'intérieur des [Web Workers](/fr/docs/Web/API/Web_Workers_API) dédiés pour les fichiers dans le [système de fichiers d'origine privé](#système_de_fichiers_dorigine_privé).
- {{DOMxRef("FileSystemWritableFileStream")}}
  - : Un objet {{DOMxRef('WritableStream')}} avec des méthodes supplémentaires pratiques, qui fonctionnent sur un seul fichier sur le disque.

### Extensions vers d'autres interfaces

- {{DOMxRef("Window.showDirectoryPicker()")}}
  - : Affiche un sélecteur de répertoire qui permet à l'utilisateur·ice de sélectionner un répertoire.
- {{DOMxRef("Window.showOpenFilePicker()")}}
  - : Affiche un sélecteur de fichiers qui permet à un·e utilisateur·ice de sélectionner un fichier ou plusieurs fichiers.
- {{DOMxRef("Window.showSaveFilePicker()")}}
  - : Affiche un sélecteur de fichiers qui permet à un·e utilisateur·ice d'enregistrer un fichier.
- {{DOMxRef("DataTransferItem.getAsFileSystemHandle()")}}
  - : Retourne une {{JSxRef('Promise')}} (promesse) qui se réalise avec un {{DOMxRef('FileSystemFileHandle')}} si l'élément déplacé est un fichier ou s'accompagne avec un {{DOMxRef('FileSystemDirectoryHandle')}} si l'élément déplacé est un répertoire.
- {{DOMxRef("StorageManager.getDirectory()")}}
  - : Utilisé pour obtenir une référence à un objet {{DOMxRef("FileSystemDirectoryHandle")}} permettant l'accès à un répertoire et son contenu, stocké dans le [Système de fichiers privé d'origine](/fr/docs/Web/API/File_System_API/Origin_private_file_system). Retourne une promesse {{JSxRef('Promise')}} qui se complète avec un objet {{DOMxRef("FileSystemDirectoryHandle")}}.

## Exemples

### Accéder aux fichiers

Le code ci-dessous permet à l'utilisateur·ice de choisir un fichier dans le sélecteur de fichiers.

```js
async function getFile() {
  // Ouvre un sélecteur de fichiers et destructure le résultat pour obtenir le premier élément
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

La fonction asynchrone suivante présente un sélecteur de fichiers et une fois qu'un fichier est choisi, utilise la méthode `getFile()` pour récupérer le contenu.

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getTheFile() {
  // Ouvre un sélecteur de fichiers et destructure le résultat pour obtenir le premier élément
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // obtient le contenu du fichier
  const fileData = await fileHandle.getFile();
}
```

### Accéder aux répertoires

L'exemple suivant retourne un répertoire avec le nom défini. Si le répertoire n'existe pas, il est créé.

```js
const dirName = "directoryToGetName";

// il est supposé que nous avons un handle de répertoire : 'currentDirHandle'
const subDir = await currentDirHandle.getDirectoryHandle(dirName, {
  create: true,
});
```

La fonction asynchrone suivante utilise `resolve()` Pour trouver le chemin d'accès à un fichier choisi, par rapport à un gestionnaire de répertoire défini.

```js
async function returnPathDirectories(directoryHandle) {
  // Ouvre un sélecteur de fichiers et destructure le résultat pour obtenir le premier élément
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // L'utilisateur·ice a annulé, ou a échoué à ouvrir un fichier.
    return;
  }

  // Vérifie si le handle existe à l'intérieur de notre handle de répertoire
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // Pas à l'intérieur du handle de répertoire
  } else {
    // relativePaths est un tableau de noms, donnant le chemin relatif

    for (const name of relativePaths) {
      // log chaque entrée
      console.log(name);
    }
  }
}
```

### Écriture dans les fichiers

La fonction asynchrone suivante ouvre le sélecteur de fichiers de sauvegarde, qui retourne un {{DOMxRef("FileSystemFileHandle")}} une fois un fichier sélectionné. Un flux accessible en écriture est ensuite créé à l'aide de la méthode {{DOMxRef("FileSystemFileHandle.createWritable()")}}.

Un {{DOMxRef("Blob")}} défini par l'utilisateur·ice est ensuite écrit dans le flux qui est ensuite fermé.

```js
async function saveFile() {
  // crée un nouveau handle
  const newHandle = await window.showSaveFilePicker();

  // crée un FileSystemWritableFileStream pour écrire
  const writableStream = await newHandle.createWritable();

  // écrit notre fichier
  await writableStream.write(imgBlob);

  // ferme le fichier et écrit le contenu sur le disque
  await writableStream.close();
}
```

Les suivants montrent différents exemples d'options qui peuvent être transmises dans la méthode `write()`.

```js
// juste passer les données (pas d'options)
writableStream.write(data);

// écrit les données dans le flux à partir de la position déterminée
writableStream.write({ type: "write", position, data });

// met à jour le décalage du curseur de fichier actuel à la position spécifiée
writableStream.write({ type: "seek", position });

// redimensionne le fichier pour qu'il fasse la taille spécifiée en octets
writableStream.write({ type: "truncate", size });
```

### Lire et écrire des fichiers de manière synchrone dans OPFS

Cet exemple lit et écrit de manière synchrone un fichier au [Système de fichiers d'origine privé](#système_de_fichiers_d_origine_privé).

La fonction de gestionnaire d'événements asynchrones suivante est contenue dans un Web Worker. En recevant un message du thread principal, elle&nbsp;:

- Crée une trappe d'accès aux fichiers synchrones.
- Obtient la taille du fichier et crée un {{JSxRef("ArrayBuffer")}} pour le contenir.
- Lit le contenu du fichier dans le tampon.
- Encode le message et l'écrit à la fin du fichier.
- Persiste les modifications du disque et ferme la trappe d'accès.

```js
onmessage = async (e) => {
  // récupérer le message envoyé au travail depuis le script principal
  const message = e.data;

  // Obtenir la trappe de fichier de brouillon dans OPFS
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Obtenir la trappe d'accès synchrones
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Obtenir la taille du fichier.
  const fileSize = accessHandle.getSize();
  // Lire le contenu du fichier dans un tampon
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Écrire le message à la fin du fichier
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Persister les modifications sur le disque
  accessHandle.flush();

  // Toujours fermer FileSystemSyncAccessHandle si terminé
  accessHandle.close();
};
```

> [!NOTE]
> Dans les versions antérieures de la spécification, {{DOMxRef("FileSystemSyncAccessHandle.close()", "close()")}}, {{DOMxRef("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{DOMxRef("FileSystemSyncAccessHandle.getSize()", "getSize()")}} et {{DOMxRef("FileSystemSyncAccessHandle.truncate()", "truncate()")}} ont été spécifiés de manière non ergonomique comme méthodes asynchrones. Cela a maintenant été [modifié <sup>(angl.)</sup>](https://github.com/whatwg/fs/issues/7), mais certains navigateurs soutiennent toujours les versions asynchrones.

## Caractéristiques

{{Specifications}}

## Compatibilité du navigateur

{{Compat}}

## Voir aussi

- [L'API d'accès au système de fichiers&nbsp;: simplifiant l'accès aux fichiers locaux <sup>(angl.)</sup>](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Le système de fichiers d'origine privé <sup>(angl.)</sup>](https://web.dev/articles/origin-private-file-system)
