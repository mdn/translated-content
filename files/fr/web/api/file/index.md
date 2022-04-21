---
title: File
slug: Web/API/File
tags:
  - DOM
  - File
translation_of: Web/API/File
---
{{APIRef}}

L’interface **`File`** fournit des informations sur des fichiers et permet au code JavaScript d’une une page web d’accéder à leurs contenus.

Les objets `File` sont généralements obtenus à partir de&nbsp;:

- l’objet {{domxref("FileList")}} retourné lorsque qu’un utilisateur ou une utilisatrice sélectionne des fichiers grâce à un élément {{HTMLElement("input")}}&nbsp;;
- l’objet {{domxref("DataTransfer")}} d’une opération de glisser-déposer&nbsp;;
- l’API `mozGetAsFile()` de l’élément {{domxref("HTMLCanvasElement")}}.

Dans Gecko, le code privilégié peut créer des objets `File` représentant tout fichier local sans nécessiter une interaction de l’utilisateur ou de l’utilisatrice (voir [Notes d'implémentation](#notes_dimplémentation) pour plus d’informations.)

Un objet `File` est un genre spécifique de {{domxref("Blob")}}, et peut être utilisé dans tout contexte où un blob peut l’être. En particulier, {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, et {{domxref("XMLHttpRequest", "", "send()")}} acceptent indifféremment des `Blob`s et des `File`s.

Voir [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File/Using_files_from_web_applications) pour plus d’informations et des exemples.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("File.File", "File()")}}
  - : Renvoie un `File` nouvellement construit.

## Propriétés

- {{domxref("File.lastModified")}} {{readonlyinline}}
  - : Renvoie le temps de dernière modification du fichier, exprimé en millisecondes écoulées depuis l’ère UNIX (1er janvier 1970 à minuit).
- {{domxref("File.lastModifiedDate")}} {{readonlyinline}} {{deprecated_inline}}
  - : Renvoie la {{jsxref("Date")}} de dernière modification du fichier.
- {{domxref("File.name")}} {{readonlyinline}}
  - : Renvoie le nom du fichier.
- {{domxref("File.webkitRelativePath")}} {{readonlyinline}} {{non-standard_inline}}
  - : Renvoie le chemin auquel l’URL du {{domxref("File")}} est relative.

`File` implémente {{domxref("Blob")}}, et ainsi possède les propriétés suivantes&nbsp;:

- {{domxref("File.size")}} {{readonlyinline}}
  - : Renvoie la taille du fichier en octets.
- {{domxref("File.type")}} {{readonlyinline}}
  - : Renvoie le type [MIME](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)du fichier.

## Méthodes

_L’interface `File` ne définit aucune méthode, mais hérite des méthodes de l’interface {{domxref("Blob")}}&nbsp;:_

- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : Renvoie un nouvel objet `Blob` contenant les données du blob source comprises dans l’intervalle d’octets spécifié.
- {{domxref("Blob.stream()", "Blob.stream()")}}
  - : Transforme le `File` en un {{domxref("ReadableStream")}} pouvant être utilisé pour lire le contenu du `File`.
- {{domxref("Blob.text()", "Blob.text()")}}
  - : Transforme le `File` en un flux (_stream_) et le lit en entier. Renvoie une {{jsxref("promise", "promesse")}} qui se résoud en une {{domxref("USVString")}} (texte).
- {{domxref("Blob.arrayBuffer()", "Blob.arrayBuffer()")}}
  - : Transforme le `File` en un flux (_stream_) et le lit en entier. Retourne une {{jsxref("promise", "promesse")}} qui se résoud en un {{domxref("ArrayBuffer")}}.

## Spécifications

| Spécification                    | Statut                       | Commentaire          |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('File API')}} | {{Spec2('File API')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.File")}}

### Notes d'implémentation

- Dans Gecko, vous pouvez utiliser API depuis du code chrome. Voir [Using the DOM File API in chrome code](/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) pour plus de détails. Pour l’utiliser depuis du code chrome, JSM, ou portée Bootstrap, vous devez l’importer en utilisant `Cu.importGlobalProperties(['File']);`
- À partir de Gecko 6.0 {{geckoRelease("6.0")}}, le code privilégié (par exemple au sein d’une extension) peut passer un objet `nsIFile` au constructeur DOM `File` pour spécifier le fichier à référencer.
- À partir de Gecko 8.0 {{geckoRelease("8.0")}}, vous pouvez utiliser `new File` pour créer des objets `File` depuis des composants XPCOM au lieu de devoir instancier les objets `nsIDOMFile` directement. Contrairement à {{domxref("Blob")}}, le constructeur prend le nom de fichier comme second argument. Le nom de fichier peut être une chaîne quelconque.

      new File(
        Array parts,
        String filename,
        BlobPropertyBag properties
      );

- Les propriétés et méthodes non standard suivantes ont été retirées de Gecko 7 {{geckoRelease("7.0")}}&nbsp;: {{domxref("File.fileName")}}, {{domxref("File.fileSize")}}, {{domxref("File.getAsBinary()")}}, {{domxref("File.getAsDataURL()")}}, {{domxref("File.getAsText()","File.getAsText(string encoding)")}} ({{bug("661876")}}). Les propriétés standard {{domxref("File.name")}}, {{domxref("Blob.size")}}, et les méthodes de {{domxref("FileReader")}} devraient être utilisées à la place.

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File/Using_files_from_web_applications)
- {{domxref("FileReader")}}
- [Using the DOM File API in chrome code](/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) (pour du code privilégié s’exécutant dans Gecko, tel que des extensions de Firefox)
