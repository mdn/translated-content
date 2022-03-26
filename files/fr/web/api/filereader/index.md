---
title: FileReader
slug: Web/API/FileReader
tags:
  - API
  - File
  - Interface
  - Référence(2)
translation_of: Web/API/FileReader
---
{{APIRef("File API")}}

L'objet **`FileReader`** permet à des applications web de lire le contenu de fichiers (ou de tampons de mémoire brute) de façon asynchrone. On peut ainsi lire le contenu des objets {{domxref("File")}} ou {{domxref("Blob")}} (qui représentent respectivement un fichier ou des données).

Les objets qui sont des fichiers peuvent être obtenus à partir d'un objet {{domxref("FileList")}}, renvoyé lorsque l'utilisateur sélectionne des fichiers grâce à un élément {{HTMLElement("input")}}, via un glisser-déposer avec un objet [`DataTransfer`](/fr/docs/Web/API/DataTransfer) ou grâce à l'API `mozGetAsFile()` API de {{domxref("HTMLCanvasElement")}}.

{{AvailableInWorkers}}

## Constructeur

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : Ce constructeur renvoie un nouvel objet `FileReader`.

Pour plus d'informations et d'exemples, consulter [utiliser des fichiers depuis des applications web](/fr/docs/Using_files_from_web_applications).

## Propriétés

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : Un objet {{domxref("DOMError")}} qui représente l'erreur qui s'est produite lors de la lecture du fichier.
- {{domxref("FileReader.readyState")}} {{readonlyinline}}

  - : Un nombre qui indique l'état du `FileReader`. Cette valeur est l'une des suivantes :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>EMPTY</code></td>
          <td><code>0</code></td>
          <td>Aucune donnée n'a encore été chargée.</td>
        </tr>
        <tr>
          <td><code>LOADING</code></td>
          <td><code>1</code></td>
          <td>Des données sont en cours de chargement.</td>
        </tr>
        <tr>
          <td><code>DONE</code></td>
          <td><code>2</code></td>
          <td>La demande de lecture est complètement terminée.</td>
        </tr>
      </tbody>
    </table>

- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : Le contenu du fichier. Cette propriété est uniquement valide lorsque l'opération de lecture est terminée et le format des données dépend de la méthode utilisée pour l'opération de lecture.

### Gestionnaire d'évènements

- {{domxref("FileReader.onabort")}}
  - : Un gestionnaire pour l'évènement {{event("abort")}}. Cet évènement est déclenché à chaque fois que l'opération de lecture est interrompue.
- {{domxref("FileReader.onerror")}}
  - : Un gestionnaire pour l'évènement {{event("error")}}. Cet évènement est déclenché à chaque fois qu'il y a une erreur pendant l'opération de lecture.
- {{domxref("FileReader.onload")}}
  - : Un gestionnaire pour l'évènement {{event("load")}}. Cet évènement est déclenché à chaque fois qu'une opération de lecture est menée à bien.
- {{domxref("FileReader.onloadstart")}}
  - : Un gestionnaire pour l'évènement {{event("loadstart")}}. Cet évènement est déclenché chaque fois qu'une opération de lecture commence.
- {{domxref("FileReader.onloadend")}}
  - : Un gestionnaire pour l'évènement {{event("loadend")}}. Cet évènement est déclenché chaque fois qu'une opération de lecture est terminée (que ce soit un succès ou un échec).
- {{domxref("FileReader.onprogress")}}
  - : Un gestionnaire pour l'évènement {{event("progress")}}. Cet évènement est déclenché lorsque la lecture du {{domxref("Blob")}} est en cours.

> **Note :** `FileReader` hérite de l'interface {{domxref("EventTarget")}} et tout ces évènements peuvent donc être « écoutés » grâce à la méthode {{domxref("EventTarget.addEventListener()","addEventListener")}}.

## Méthodes

- {{domxref("FileReader.abort()")}}
  - : Cette méthode interrompt l'opération de lecture. Après avoir renvoyé une valeur, l'état `readyState` aura la valeur `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Cette méthode démarre la lecture du contenu pour le blob indiqué. Une fois que la lecture est terminée, l'attribut `result` contient un objet {{domxref("ArrayBuffer")}} représentant les données du fichier.
- {{domxref("FileReader.readAsBinaryString()")}} {{non-standard_inline}}
  - : Cette méthode démarre la lecture du contenu pour le blob indiqué. Une fois que la lecture est terminée, l'attribut `result` contient les données binaires brutes sous la forme d'une chaîne de caractères.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Cette méthode démarre la lecture du contenu pour le blob indiqué. Une fois que la lecture est terminée, l'attribut `result` contient une URL de données qui représente les données du fichier.
- {{domxref("FileReader.readAsText()")}}
  - : Cette méthode démarre la lecture du contenu pour le blob indiqué. Une fois la lecture terminée, l'attribut `result` contient les données du fichier sous la forme d'une chaîne de caractères.

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("File API", "#dfn-filereader", "FileReader")}} | {{Spec2("File API")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.FileReader")}}

## Voir aussi

- [Manipuler des fichiers depuis des applications web](/fr/docs/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
