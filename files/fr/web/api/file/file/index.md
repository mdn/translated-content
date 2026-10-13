---
title: "File : constructeur File()"
short-title: File()
slug: Web/API/File/File
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Le constructeur **`File()`** crée une nouvelle instance d'objet {{DOMxRef("File")}}.

## Syntaxe

```js-nolint
new File(fileBits, fileName)
new File(fileBits, fileName, options)
```

### Paramètres

- `fileBits`
  - : Un objet [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») tel qu'un tableau ({{JSxRef("Array")}}), contenant des {{JSxRef("ArrayBuffer")}}, des {{JSxRef("TypedArray")}}, des {{JSxRef("DataView")}}, des {{DOMxRef("Blob")}}, des chaînes de caractères, ou un mélange de ces éléments, qui sont placés à l'intérieur de l'objet {{DOMxRef("File")}}.
    Notez que les chaînes de caractères ici sont encodées en {{Glossary("UTF-8")}}, contrairement aux chaînes de caractères JavaScript habituelles en {{Glossary("UTF-16")}}.
- `fileName`
  - : Une chaîne de caractères représentant le nom du fichier ou le chemin vers le fichier.
- `options` {{Optional_Inline}}
  - : Un objet d'options contenant des attributs optionnels pour le fichier. Les options disponibles sont les suivantes&nbsp;:
    - `type` {{Optional_Inline}}
      - : Une chaîne de caractères représentant le type MIME du contenu qui est placé dans le fichier. La valeur par défaut est `""`.
    - `endings` {{Optional_Inline}}
      - : Comment interpréter les caractères de nouvelle ligne (`\n`) dans le contenu, si les données sont du texte. La valeur par défaut, `transparent`, copie les caractères de nouvelle ligne dans le blob sans les modifier. Pour convertir les nouvelles lignes selon la convention native du système hôte, définissez la valeur `native`.
    - `lastModified` {{Optional_Inline}}
      - : Un nombre représentant le nombre de millisecondes écoulées entre l'époque Unix et le moment où le fichier a été modifié pour la dernière fois. La valeur par défaut est {{JSxRef("Date.now()")}}.

## Exemples

```js
const file = new File(["toto"], "toto.txt", {
  type: "text/plain",
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("FileReader")}}
- L'interface {{DOMxRef("Blob")}}
