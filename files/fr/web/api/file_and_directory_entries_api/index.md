---
title: API fichier système
slug: Web/API/File_and_Directory_Entries_API
translation_of: Web/API/File_and_Directory_Entries_API
original_slug: Web/API/API_fichier_systeme
---

{{DefaultAPISidebar("File System API")}}{{Non-standard_header()}}

L'API fichier système simule un fichier système en local que les applications web peuvent utiliser. Vous pouvez développer des applications qui lisent, écrivent, et créent des fichiers et/ou des dossiers dans un espace virtuel.

Deux API très simulaires existent en fonction du comportement asynchrone ou synchrone souhaité. L'API synchrone est prévu pour être utilisée dans un {{domxref("Worker")}} et retournera les valeurs recherchées. The asynchronous API will not block and functions and the API will not return values; instead, you will need to supply a callback function to handle the response whenever it arrives.

## API asynchrone

L'API asynchrone a les interfaces suivantes :

- [LocalFileSystem](/fr/docs/DOM/File_API/File_System_API/LocalFileSystem) a deux méthodes globales qui vous permet d'avoir accès à un espace virtuel : requestFileSystem() et resolveLocalFileSystemURL().  Les méthodes sont implémentées par l'objet [window](/fr/docs/window) et le worker global scope.
- [FileSystem](/fr/docs/DOM/File_API/File_System_API/FileSystem) représente un fichier système. L'objet est la passerelle à votre API toute entière.
- [Entry](/fr/docs/DOM/File_API/File_System_API/Entry) représente une entrée dans un fichier système. L'entrée peut être un fichier ou un dossier.
- [DirectoryEntry](/fr/docs/DOM/File_API/File_System_API/DirectoryEntry) représente un dossier dans un fichier système.
- [DirectoryReader](/fr/docs/DOM/File_API/File_System_API/DirectoryReader) vous permet la lecture de fichiers et dossiers à partir d'un dossier.
- [FileEntry](/fr/docs/DOM/File_API/File_System_API/FileEntry) représente un fichier dans un fichier système.
- [FileError](/fr/docs/DOM/File_API/File_System_API/FileError) est une erreur que vous pourriez rencontrer pendant l'utilisation des méthodes asynchrones.

## API synchrone

L'API synchrone est utile avec les [WebWorkers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers). Contrairement à l'API asynchrone, l'API synchrone n'utilise pas les callbacks parce que les méthodes de l'API retournent des valeurs.

- [LocalFileSystemSync](/fr/docs/DOM/File_API/File_System_API/LocalFileSystemSync) a deux méthodes globales qui vous permet d'avoir accès à un espace virtuel : requestFileSystemSync() et resolveLocalFileSystemSyncURL(). Les méthodes sont implémentées par l'objet worker.
- [FileSystemSync](/fr/docs/DOM/File_API/File_System_API/FileSystemSync) représente un fichier système.
- [EntrySync](/fr/docs/DOM/File_API/File_System_API/EntrySync) représente une entrée dans un fichier système. L'entrée peut être un fichier ou un dossier.
- [DirectoryEntrySync](/fr/docs/DOM/File_API/File_System_API/DirectoryEntrySync) représente un dossier dans un fichier système.
- [DirectoryReaderSync](/fr/docs/DOM/File_API/File_System_API/DirectoryReaderSync)  vous permet la lecture de fichiers et dossiers à partir d'un dossier.
- [FileEntrySync](/fr/docs/DOM/File_API/File_System_API/FileEntrySync) représente un fichier dans un fichier système.
- [FileException](/fr/docs/DOM/File_API/File_System_API/FileException) est une erreur que vous pourriez rencontrer pendant l'utilisation des méthodes synchrones.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Commentaire Mozilla : [Why no FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/)
