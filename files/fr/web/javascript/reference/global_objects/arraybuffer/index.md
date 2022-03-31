---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
tags:
  - ArrayBuffer
  - Constructor
  - JavaScript
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
original_slug: Web/JavaScript/Reference/Objets_globaux/ArrayBuffer
---
{{JSRef}}

L'objet **`ArrayBuffer`** est utilisé afin de représenter un tampon (_buffer_) de données binaires de longueur fixe de façon générique. C'est un tableau d'octets. La manipulation du contenu d'un `ArrayBuffer` se fait de façon indirecte en créant un [tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray) ou un objet {{jsxref("DataView")}} qui permet de représenter le tampon dans un format donné qui permet de lire/écrire des contenus dans le tampon de mémoire.

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html")}}

## Syntaxe

    new ArrayBuffer(longueur)

### Paramètres

- `longueur`
  - : La taille, exprimée en octets, du tableau représentant le tampon.

### Valeur de retour

Un nouvel objet `ArrayBuffer` de la taille donnée. Ses éléments sont initialisés à 0.

### Exceptions

Une exception {{jsxref("RangeError")}} est levée lorsque l'argument `longueur` est supérieur à {{jsxref("Number.MAX_SAFE_INTEGER")}} (soit 2^53) ou s'il est négatif.

## Description

Le constructeur `ArrayBuffer` crée une nouvelle instance d'`ArrayBuffer` dont la longueur est celle donnée lors de la construction.

### Obtenir un tampon mémoire depuis des données existantes

- [À partir d'une chaîne de caractères en Base 64](/fr/docs/Décoder_encoder_en_base64#Annexe_.3A_D.C3.A9coder_une_cha.C3.AEne_en_base64_en_un_objet_Uint8Array_ou_ArrayBuffer)
- [À partir d'un fichier local](/fr/docs/Web/API/FileReader)

## Propriétés

- `ArrayBuffer.length`
  - : La longueur du constructeur `ArrayBuffer`. Elle vaut 1.
- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : La fonction de construction utilisée pour créer les objets dérivés.
- {{jsxref("ArrayBuffer.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à tous les objets `ArrayBuffer`.

## Méthodes

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(arg)")}}
  - : Cette méthode renvoie `true` si `arg` est une des vues sur l'`ArrayBuffer` telle qu'un [tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray) ou un objet {{jsxref("DataView")}}, sinon elle renvoie `false`.
- {{jsxref("ArrayBuffer.transfer", "ArrayBuffer.transfer(ancienTampon [, nouvelleLongueur])")}} {{experimental_inline}}
  - : Cette méthode renvoie un nouvel objet `ArrayBuffer` dont le contenu est transféré depuis les données de `ancienTampon` et qui est ensuite tronqué ou rallongé avec des zéros pour que la taille du nouveau tampon soit `nouvelleLongueur`.

## Les instances d'`ArrayBuffer`

Toutes les instances d'`ArrayBuffer` héritent de {{jsxref("ArrayBuffer.prototype")}}.

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer/prototype','Propri.C3.A9t.C3.A9s')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer/prototype','M.C3.A9thodes')}}

- {{jsxref("ArrayBuffer.slice()")}} {{non-standard_inline}}
  - : Cette méthode fournit la même fonctionnalité que {{jsxref("ArrayBuffer.prototype.slice()")}}.

## Exemple

Dans cet exemple, on crée un tampon sur 8 octets avec une vue {{jsxref("Int32Array")}} qui fait référence à ce tampon :

```js
var tampon = new ArrayBuffer(8);
var vue    = new Int32Array(tampon);
```

## Spécifications

| Spécification                                                                                | État                             | Commentaires                                                                                        |
| -------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                         | {{Spec2('Typed Array')}} | Remplacée par ECMAScript 6.                                                                         |
| {{SpecName('ES6', '#sec-arraybuffer-constructor', 'ArrayBuffer')}}     | {{Spec2('ES6')}}             | Définition initiale au sein d'un standard ECMA. `new` est obligaoire pour utiliser le constructeur. |
| {{SpecName('ESDraft', '#sec-arraybuffer-constructor', 'ArrayBuffer')}} | {{Spec2('ESDraft')}}     |                                                                                                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.ArrayBuffer")}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), `ArrayBuffer` doit être utilisée avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur `ArrayBuffer` comme une fonction, sans `new`, provoquera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = ArrayBuffer(10);
// TypeError: calling a builtin ArrayBuffer constructor
// without new is forbidden
```

```js example-good
var dv = new ArrayBuffer(10);
```

## Voir aussi

- [Les tableaux typés JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("SharedArrayBuffer")}}
