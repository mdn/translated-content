---
title: File
slug: Web/API/File
l10n:
  sourceCommit: 0a24354d9ac0cac0b9c6f47de27cbf758c9f32f4
---

{{APIRef("File API")}}{{AvailableInWorkers}}

L'interface **`File`** fournit des informations sur des fichiers et permet au code JavaScript d'une page web d'accéder à leur contenu.

Les objets `File` sont généralement obtenus à partir d'un objet {{DOMxRef("FileList")}} retourné lorsque l'utilisateur·ice sélectionne des fichiers à l'aide de l'élément HTML {{HTMLElement("input")}}, ou à partir de l'objet {{DOMxRef("DataTransfer")}} d'une opération de glisser-déposer.

Un objet `File` est un type spécifique de {{DOMxRef("Blob")}}, et peut être utilisé dans n'importe quel contexte où un Blob peut l'être. En particulier, les API suivantes acceptent à la fois des objets `Blob` et `File`&nbsp;:

- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}
- {{DOMxRef("Window.createImageBitmap()")}} et {{DOMxRef("WorkerGlobalScope.createImageBitmap()")}}
- l'option [`body`](/fr/docs/Web/API/RequestInit#body) de {{DOMxRef("Window/fetch", "fetch()")}}
- {{DOMxRef("XMLHttpRequest.send()")}}

Voir [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications) pour plus d'informations et des exemples.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("File.File", "File()")}}
  - : Retourne un `File` nouvellement construit.

## Propriétés d'instance

_L'interface `File` hérite également des propriétés de l'interface {{DOMxRef("Blob")}}._

- {{DOMxRef("File.lastModified")}} {{ReadOnlyInline}}
  - : Retourne le temps de dernière modification du fichier, exprimé en millisecondes écoulées depuis l'ère UNIX (1er janvier 1970 à minuit).
- {{DOMxRef("File.lastModifiedDate")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne la {{JSxRef("Date")}} de dernière modification du fichier référencé par l'objet `File`.
- {{DOMxRef("File.name")}} {{ReadOnlyInline}}
  - : Retourne le nom du fichier référencé par l'objet `File`.
- {{DOMxRef("File.webkitRelativePath")}} {{ReadOnlyInline}}
  - : Retourne le chemin auquel l'URL du `File` est relative.

## Méthodes d'instance

_L'interface `File` hérite également des méthodes de l'interface {{DOMxRef("Blob")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
- L'interface {{DOMxRef("FileReader")}}
