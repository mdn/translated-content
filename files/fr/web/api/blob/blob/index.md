---
title: Blob()
slug: Web/API/Blob/Blob
tags:
  - API
  - Blob
  - Constructeur
  - Experimental
  - File API
  - Reference
translation_of: Web/API/Blob/Blob
---
{{APIRef("File API")}}

Le constructeur **`Blob()`** retourne un nouvel objet {{domxref("Blob")}}. Le contenu d'un blob consiste en une concaténation de valeurs données dans le tableau passé en paramètre.

## Syntaxe

    var aBlob = new Blob( array)
    var aBlob = new Blob( array, options );

### Paramètres

- `array`
  - : Un tableau ({{jsxref("Array")}}) d'objets de type {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, ou un mélange de tels objets qui seront insérés dans le {{domxref("Blob")}}. Les chaînes `DOMString` seront encodées en UTF-8.
- `options` {{optional_inline}}

  - : Un paramètre optionnel qui est un dictionnaire `BlobPropertyBag` et qui peut être utilisé pour définir les deux attributs suivants :

    - `type` : cet attribut représente le type MIME du contenu du tableau qui sera inséré dans le blob. La valeur par défaut pour cette propriété est la chaîne vide `""`.
    - `endings` : cet attribut spécifie la façon dont les chaînes qui contiennent des sauts de lignes (`\n`) doivent être retranscrites. Il peut prendre l'une de ces valeurs :

      - `"native"` indiquera que les caractères de fin doivent être adaptés pour correspondre à ceux utilisés par le système d'exploitation
      - `"transparent"` indiquera que les fin de lignes sont stockées telles quelles dans le blob (aucune modification).

      La valeur par défaut pour cet attribut est `"transparent"`. {{non-standard_inline}}

## Exemples

```js
// Un tableau qui contient une seule DOMString
var aFileParts = ['<a id="a"><b id="b">Coucou :) !</b></a>'];

// Le blob
var oMyBlob = new Blob(aFileParts, {type : 'text/html'});
```

## Spécifications

| Spécification                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('File API', '#constructorBlob', 'Blob()')}} | {{Spec2('File API')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Blob.Blob")}}

## Voir aussi

- Le déprécié {{domxref("BlobBuilder")}} qui a été remplacé par ce constructeur.
