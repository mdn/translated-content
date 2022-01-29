---
title: Blob
slug: Web/API/Blob
tags:
  - API
  - Référence(2)
  - WebAPI
translation_of: Web/API/Blob
---
{{APIRef("File API")}}

Un objet **`Blob`** représente un objet, semblable à un fichier, qui est immuable et qui contient des données brutes. Les _blobs_ (pour **B**inary **L**arge **Ob**jects) représentent des données qui ne sont pas dans un format JavaScript natif. L'interface {{domxref("File")}} est basée sur l'interface `Blob` et hérite des fonctionnalités de cette dernière tout en ajoutant des fonctionnalités pour gérer les fichiers sur le système de l'utilisateur.

Pour construire un `Blob` à partir d'objets qui ne sont pas des blobs ou à partir d'autres données, on pourra utiliser le constructeur {{domxref("Blob.Blob", "Blob()")}}. Pour créer un blob qui contient un sous-ensemble d'un autre blob, on pourra employer la méthode {{domxref("Blob.slice()", "slice()")}}. Pour obtenir un `Blob` à partir d'un fichier du système de l'utilisateur, consulter la documentation {{domxref("File")}}.

Les API qui acceptent des objets `Blob` sont également listées sur la documentation de {{domxref("File")}}.

> **Note :** La méthode `slice()` utilisait auparavant un deuxième argument qui indiquait le nombre d'octets à copier dans le nouveau blob. Si on utilisait un couple de valeur `début + longueur` qui dépassait la taille du blob source, le blob qui était renvoyé contenait les données à partir de l'indice de début et jusuq'à la fin du blob.

> **Note :** La méthode `slice()` doit être utilisée avec certains préfixes sur certaines versions de navigateurs : `blob.mozSlice()` pour Firefox 12 et antérieur, `blob.webkitSlice()` dans Safari. Un ancienne version de `slice()` sans préfixes avait une sémantique différente et est désormais obsolète. La prise en charge de `blob.mozSlice()` a été abandonnée avec Firefox 30.

## Constructeur

- {{domxref("Blob.Blob", "Blob(blobParts[, options])")}}
  - : Ce constructeur renvoie un nouvel objet `Blob` qui contient la concaténation des valeurs du tableau passé en paramètre.

## Propriétés

- {{domxref("Blob.isClosed")}} {{readonlyinline}} {{experimental_inline}}
  - : Un booléen qui indique si la méthode {{domxref("Blob.close()")}} a été appelée sur le blob. Les blobs qui ont été fermés ne peuvent pas être lus.
- {{domxref("Blob.size")}} {{readonlyinline}}
  - : La taille des données contenues dans l'objet `Blob`, exprimée en octets.
- {{domxref("Blob.type")}} {{readonlyinline}}
  - : Une chaîne de caractères qui indique le type MIME des données contenues dans le `Blob`. Si le type est inconnu, la chaîne de caractères est vide.

## Méthodes

- {{domxref("Blob.close()")}} {{experimental_inline}}
  - : Cette méthode clotûre le blob et libère éventuellement les ressources sous-jacentes.
- {{domxref("Blob.slice()", "Blob.slice([début[, fin[, contentType]]])")}}
  - : Cette méthode renvoie un nouvel objet `Blob` qui contient les données dans le fragment du `Blob` source entre `début` et `fin`.

## Exemples

### Utilisation du constructeur `Blob`

Le constructeur {{domxref("Blob.Blob", "Blob()")}} permet de créer des blobs à partir d'autres objets. Par exemple, on peut construire un blob à partir d'une chaîne de caractères :

    var debug = {coucou: "monde"};
    var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});

### Créer une URL de données vers un tableau typé

```js
var typedArray = GetTheTypedArraySomehow();

// On ajoute un type MIME pertinent
var blob = new Blob([typedArray], {type: 'application/octet-binary'});
var url = URL.createObjectURL(blob);

// url ressemblera à :
//   blob:d3958f5c-0777-0845-9dcf-2cb28783acaf

// désormais on peut utiliser l'URL dans tout
// contexte qui utilise des URL (img.src par
// exemple)
```

### Extraire des données à partir d'un blob

La seule façon de lire le contenu d'un blob est d'utiliser un objet {{domxref("FileReader")}}. Dans le code qui suit, on lit le contenu d'un blob sous la forme d'un tableau typé.

```js
var reader = new FileReader();
reader.addEventListener("loadend", function() {
   // reader.result contient le contenu du
   // blob sous la forme d'un tableau typé
});
reader.readAsArrayBuffer(blob);
```

En utilisant d'autres méthodes de {{domxref("FileReader")}}, on peut lire le contenu du blob si c'est une chaîne ou une URL de données.

## Spécifications

| Spécification                                        | État                         | Commentaires         |
| ---------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('File API','#blob','Blob')}} | {{Spec2('File API')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Blob")}}

## Voir aussi

- {{domxref("BlobBuilder")}}
- {{domxref("File")}}
- {{domxref("URL.createObjectURL")}}
- [Components.utils.importGlobalProperties](/fr/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.importGlobalProperties)
