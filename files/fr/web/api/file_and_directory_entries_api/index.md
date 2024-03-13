---
title: API fichier système
slug: Web/API/File_and_Directory_Entries_API
---

{{DefaultAPISidebar("File System API")}}{{Non-standard_header()}}

L'API fichier système simule un fichier système en local que les applications web peuvent utiliser. Vous pouvez développer des applications qui lisent, écrivent, et créent des fichiers et/ou des dossiers dans un espace virtuel.

Deux API très simulaires existent en fonction du comportement asynchrone ou synchrone souhaité. L'API synchrone est prévu pour être utilisée dans un {{domxref("Worker")}} et retournera les valeurs recherchées. The asynchronous API will not block and functions and the API will not return values; instead, you will need to supply a callback function to handle the response whenever it arrives.

## API asynchrone

L'API asynchrone a les interfaces suivantes :

- [FileSystem](/fr/docs/Web/API/FileSystem) représente un fichier système. L'objet est la passerelle à votre API toute entière.
- [Entry](/fr/docs/Web/API/FileSystemEntry) représente une entrée dans un fichier système. L'entrée peut être un fichier ou un dossier.
- [DirectoryEntry](/fr/docs/Web/API/FileSystemDirectoryEntry) représente un dossier dans un fichier système.
- [DirectoryReader](/fr/docs/Web/API/FileSystemDirectoryReader) vous permet la lecture de fichiers et dossiers à partir d'un dossier.
- [FileEntry](/fr/docs/Web/API/FileSystemFileEntry) représente un fichier dans un fichier système.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Commentaire Mozilla : [Why no FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/)
