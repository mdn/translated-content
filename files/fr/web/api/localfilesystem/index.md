---
title: LocalFileSystem
slug: Web/API/LocalFileSystem
translation_of: Web/API/LocalFileSystem
---
{{APIRef("File System API")}}{{non-standard_header()}}

L'interface `LocalFileSystem`, appartenant à l'API [File System](/fr/docs/Web/API/File_and_Directory_Entries_API/Introduction) fournit un accès à un système de fichier placé dans un bac à sable (_sandboxed file system_). Les méthodes de cette interface sont implémentées par les objets implémentants [`Window`](/fr/docs/Web/API/Window) ou [`Worker`](/fr/docs/Web/API/Worker).

## Concepts de base

### Créer un nouvel espace de stockage

Il est possible de demander l'accès à un système de fichier dans un bac à sable en utilisant la méthode `window.requestFileSystem()`. Lorsque la création de cet espace est effectuée, une fonction de rappel (_callback_) est appelée avec un objet [`FileSystem`](/fr/docs/Web/API/FileSystem) contenant deux propriétés : le nom et la racine du système de fichier ainsi créé.

Il est possible d'appeler cette méthode plusieurs fois pour différentes situations : on peut créer un espace de stockage temporaire et/ou un espace de stockage permanent (voir [l'article sur les concepts de base](/fr/docs/Web/API/File_and_Directory_Entries_API/Introduction) pour approfondir). On peut ainsi créer un espace de stockage temporaire pour mettre en cache certains fichiers (des images par exemple) afin d'améliorer les performances ou créer un espace de stockage pour des données applicatives (ex. des brouillons de messages créés par l'utilisateur) qui ne devraient pas être supprimées avant d'être répliquées sur les serveurs distants.

### Utiliser un stockage persistent

La méthode `requestFileSystem()` permet d'indiquer si on souhaite un stockage persistent ou temporaire. Un espace de stockage persistent est conservé dans le navigateur tant que l'utilisateur ou que l'application ne l'a pas supprimé. Pour créer un espace de stockage permanent, l'utilisateur doit fournir la permission à l'application de l'utiliser. En revanche, un espace de stockage temporaire peut être créé sans permission mais peut être libéré par le navigateur à tout moment.

Pour utiliser un stockage permanent, Chrome expose la méthode `requestQuota`. Il faut invoquer cette méthode ainsi :

    var requestedBytes = 1024*1024*10; // 10MB

    navigator.webkitPersistentStorage.requestQuota (
        requestedBytes, function(grantedBytes) {
            window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);

        }, function(e) { console.log('Error', e); }
    );

L'utilisateur doit fournir la permission à l'application pour enregistrer des données locales avant que l'application puisse utiliser le stockage permanent. Une fois que l'utilisateur a autorisé l'accès, il n'est plus nécessaire d'appeler `requestQuota()` (des appels ultérieurs n'auront aucun effet).

Une autre API, _Quota Management_, permet de connaître le quota alloué et l'espace consommé pour l'origine courante. On peut ainsi utiliser la méthode `window.webkitPersistentStorage.queryUsageAndQuota()`. Pour en savoir plus, voir cette [réponse StackOverflow](http://stackoverflow.com/a/29662985/89484).

### Origine unique

Le système de fichier est accessible depuis une seule origine. Cela signifie que votre application ne peut pas lire ou écrire des fichiers dans les systèmes de fichier éventuellement créés par d'autres applications. Par ailleurs, votre application ne peut pas accéder aux fichiers d'un répertoire arbitraire (ex. Mes Images, Mes Documents) sur le disque de l'utilisateur. Pour plus d'informations, voir [l'article d'introduction aux concepts de base](/fr/docs/Web/API/File_and_Directory_Entries_API/Introduction).

### Exemple

Voici un fragment de code qui illustre comment demander l'accès à un stockage sur le système de fichier.

```js
// Gestion des préfixes spécifiques au navigateur
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

// Le premier paramètre indique le type de stockage
// Ensuite, on indique la taille de l'espace demandé (en octets)
// initFs est la fonction à invoquer en cas de succès
// errorHandler est la fonction à invoquer en cas d'erreur ou de refus d'accès

window.requestFileSystem(window.PERSISTENT, 1024*1024,onInitFs,errorHandler);
```

## Constantes

| Constante    | Valeur | Description                                                                                                                                                                                                                           |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TEMPORARY`  | `0`    | Un espace de stockage temporaire qui peut être supprimé par le navigateur lorsque celui-ci l'estime nécessaire.                                                                                                                       |
| `PERSISTENT` | `1`    | Un espace de stockage qui reste permanent dans le navigateur tant que l'utilisateur ou que l'application ne l'a pas supprimé. L'utilisateur doit fournir une permission avant qu'une application puisse utiliser ce type de stockage. |

## Méthodes

### `requestFileSystem()`

Cette méthode permet de demander l'accès à uyn système de fichier pour stocker des données. On peut ainsi accéder à un système de fichier placé dans un bac à sable en demandant un objet `LocalFileSystem` avec la méthode globale `window.requestFileSystem()`.

    void requestFileSystem(
      in unsigned short type,
      in unsigned long long size,
      in FileSystemCallback successCallback,
      in ErrorCallback errorCallback
    );

#### Paramètres

- `type`
  - : Le type de stockage sur le système de fichier. La valeur de cet argument peut être `TEMPORARY` ou `PERSISTENT`.
- `size`
  - : L'espace de stockage, exprimé en octets, nécessaire à l'application.
- `successCallback`

  - : Une fonction de rappel à invoquer lorsque le navigateur fournit bien l'accès au système de fichier. Cette fonction reçoit en argument un objet [`FileSystem`](/fr/docs/Web/API/FileSystem) avec deux propriétés :

    - `name` - le nom unique, assigné par le navigateur au système de fichiers.
    - `root` - un objet `DirectoryEntry` en lecture seule qui représente la racine du système de fichier.

- `errorCallback`
  - : Une fonction de rappel à invoquer en cas d'erreur ou lorsque l'accès n'est pas autorisé. Cette fonction reçoit un objet `FileError` comme argument.

#### Valeur de retour

`void`

#### Exceptions

Cette méthode peut lever une exception [`FileError`](/en-US/docs/Web/API/FileError) avec le code suivant :

| Exception        | Description                                                                                                                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SECURITY_ERROR` | L'application n'est pas autorisée à accéder à l'interface _File System_. Par exemple, il est interdit d'utiliser `file://`. Pour plus de détails, consulter [l'article d'introduction aux concepts de base](/fr/docs/Web/API/File_and_Directory_Entries_API/Introduction#restrictions). |

### `resolveLocalFileSystemURL()`

Cette méthode permet de consulter une entrée pour un fichier ou un répertoire avec une URL locale.

    void resolveLocalFileSystemURL(
      in DOMString url,
      in EntryCallback successCallback,
      in optional ErrorCallback errorCallback
    );

#### Paramètres

- `url`
  - : L'URL du fichier local ou du répertoire sur le système de fichier.
- `successCallback`
  - : Une fonction de rappel à invoquer lorsque le navigateur fournit le fichier ou le répertoire de l'URL indiquée.
- `errorCallback`
  - : Une fonction de rappel à invoquer en cas d'erreur ou lorsque l'accès est refusé.

#### Valeur de retour

void

#### Exceptions

Cette méthode peut lever une exception [`FileError`](/fr/docs/Web/API/FileError) avec l'un des code suivants :

| Exception       | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| `ENCODING_ERR`  | La syntaxe de l'URL est invalide.                                                     |
| `NOT_FOUND_ERR` | La structure de l'URL est correcte mais elle réfère à une ressource qui n'existe pas. |
| `SECURITY_ERR`  | L'application n'est pas autorisée à accéder à l'interface pour le système de fichier. |

## Compatibilité des navigateurs

{{Compat("api.LocalFileSystem")}}

## Voir aussi

- La spécification : {{spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD")}}
- [La référence pour l'API _File System_](/fr/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [Une introduction aux concepts de base de l'API _File System_](/fr/docs/Web/API/File_and_Directory_Entries_API/Introduction)
