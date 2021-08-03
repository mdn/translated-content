---
title: Les tableaux typés en JavaScript
slug: Web/JavaScript/Typed_arrays
tags:
  - Advanced
  - Guide
  - JavaScript
  - Typed Arrays
translation_of: Web/JavaScript/Typed_arrays
original_slug: Web/JavaScript/Tableaux_typés
---
{{JsSidebar("Advanced")}}

Les tableaux typés JavaScript sont des objets semblables à des tableaux qui permettent d'accéder à des données binaires brutes. Pour rappel, les objets {{jsxref("Array")}} qui représentent des tableaux en JavaScript peuvent être agrandis ou réduits dynamiquement et permettent de stocker n'importe quelle valeur JavaScript. Afin que la manipulation de ces objets soit efficace, le moteur JavaScript applique un certain nombre d'optimisations. Cependant, avec les avancées réalisées (telles que les flux audio et vidéo avec WebRTC et les WebSockets), il devient nécessaire de pouvoir manipuler des données binaires brutes au sein de tableaux typés, c'est pour ça que ces objets ont été introduits.

Ne pas confondre les tableaux typés et les tableaux « classiques » ({{jsxref("Array")}}). En effet, la méthode {{jsxref("Array.isArray()")}} renverra `false` lorsqu'elle sera utilisée sur un tableau typé. De plus, certaines des méthodes des tableaux « classiques » ne sont pas disponibles pour les tableaux typés (par exemple `push` et `pop`).

## Tampon de mémoire et vue : l'architecture des tableaux typés

Afin de permettre une meilleure efficacité et une meilleure flexibilité, l'implémentation des tableaux typés JavaScript est séparée entre : les **tampons de mémoire (_buffers_)** d'une part et **les vues (_views_)** d'autre part. Un tampon de mémoire, implémenté avec l'objet {{jsxref("ArrayBuffer")}}, est un objet qui représente un fragment de données, il n'a pas de format à proprement parler et n'offre aucune fonctionnalité pour accéder à son contenu. Afin d'accéder à la mémoire contenue dans le tampon, on doit utiliser une vue. Une vue fournit un contexte (c'est-à-dire un type de donnée, un emplacement pour le début de la lecture (_offset_) et un nombre d'éléments ; c'est ce contexte qui permet de définir le tableau typé.

![Typed arrays in an ArrayBuffer](https://mdn.mozillademos.org/files/8629/typed_arrays.png)

### `ArrayBuffer`

Le type {{jsxref("ArrayBuffer")}} est un type de données générique pour représenter un tampon de données de longueur fixe. Le contenu d'un `ArrayBuffer` ne peut pas être manipulé directement, il faut pour cela créer une vue sous forme d'un tableau typé ou une vue {{jsxref("DataView")}} qui représente le tampon dans un format donné et utiliser cet objet pour lire et écrire du contenu dans le tampon de données.

### Les vues sous forme de tableaux typés

Les tableaux typés qui sont les vues sur ces tampons de mémoire possèdent des noms explicites correspondant aux types numériques habituels tels que `Int8`, `Uint32`, `Float64` et ainsi de suite. Il existe un type de tableau typé spécial, `Uint8ClampedArray`. Ce type permet de ramener (_clamp_) les valeurs observées entre 0 et 255. Cela peut notamment être utilisé pour [traiter les données d'un canvas](/fr/docs/Web/API/ImageData) par exemple.

{{page("/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray", "Les_objets_TypedArray")}}

### `DataView`

Le type {{jsxref("DataView")}} permet de créer des objets qui seront des interfaces (bas niveau) pour lire/écrire des données dans le tampon de mémoire. Cela peut par exemple être utile lorsqu'on souhaite manipuler différents types de données. Les vues sous forme de tableaux typés suivent le même boutisme (endianness) que la plate-forme. Avec un objet `DataView`, il est possible de définir l'ordre des octets à considérer (qui sera par défaut du grand boutisme (_big-endian_) mais qui pourra être défini en petit boutisme (_little-endian_) dans les différentes méthodes d'accès/écriture).

## Les API Web utilisant les tableaux typés

- [`FileReader.prototype.readAsArrayBuffer()`](/fr/docs/Web/API/FileReader)
  - : La méthode `FileReader.prototype.readAsArrayBuffer()` permet de lire le contenu d'un [`Blob`](/fr/docs/Web/API/Blob) ou [`File`](/fr/docs/Web/API/File) donné.
- [`XMLHttpRequest.prototype.send()`](/fr/docs/Web/API/XMLHttpRequest)
  - : `XMLHttpRequest` et sa méthode `send()` peuvent désormais être utilisées avec un argument qui est un tableau typé ou un {{jsxref("ArrayBuffer")}}.
- [`ImageData.data`](/fr/docs/Web/API/ImageData)
  - : Un objet du type {{jsxref("Uint8ClampedArray")}} qui représente un tableau unidimensionnel contenant les données de l'image dans l'ordre RGBA, les entiers utilisés sont compris entre `0` et `255` (au sens large).

## Exemples

### Utiliser les vues et les tampons

Tout d'abord, il faut créer un tampon (_buffer_). Ici, on crée un buffer de 16 octets :

```js
let buffer = new ArrayBuffer(16);
```

Grâce à cette instruction, on dispose désormaits d'un fragment de mémoire dont tous les octets sont pré-initialisés à 0. Si c'est déjà une bonne chose de faite, cela n'a pas grande utilité. On peut déjà confirmer que la longueur du tampon est bien celle spécifiée initialement :

```js
if (buffer.byteLength === 16) {
  console.log("Oui, il mesure bien 16 octets.");
} else {
  console.log("Non, ce n'est pas la bonne taille !");
}
```

Avant qu'on puisse travailler avec ce tampon, il faut créer une vue. Ici, on crée une vue qui traite le tampon comme un tableau d'entiers signés représentés sur 32 bits :

```js
let int32View = new Int32Array(buffer);
```

Désormais, on peut accéder aux éléments du tableau typé comme avec un tableau classique :

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

Ce fragment de code permet de remplir les 4 éléments du tableau (4 éléments faisant chacun 4 octets, ce qui remplit les 16 octets du tableau) avec les valeurs 0, 2, 4, et 6.

### Plusieurs vues sur les mêmes données

On commence à avoir des cas d'utilisation intéressants quand on peut créer plusieurs vues sur les mêmes données. Ainsi, en utilisant le code précédent, on peut continuer avec :

```js
let int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log("Élément " + i + " : " + int16View[i]);
}
```

Ici, on crée une vue pour des éléments sur 16 bits qui partage le même tampon que la vue précédente (qui était une vue avec des éléments sur 32 bits) et on affiche les valeurs contenues dans le tampon sous formes d'entiers représentés sur 16 bits. Le résultat obtenu est ici 0, 0, 2, 0, 4, 0, 6, 0.

On peut aller encore plus loin, par exemple :

```js
int16View[0] = 32;
console.log("L'élément 0 du tableau 32 bits est désormais " + int32View[0]);
```

Le résultat obtenu sera "L'élément 0 du tableau 32 bits est désormais 32". Autrement dit, les deux tableaux typés construits ne sont que des vues sur le même tampon de données. Ce genre de manipulation peut être effectuée avec n'importe quel [type de vue](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

### Manipuler des structures de données complexes

En combinant un même tampon et plusieurs vue de différents types, chacune commençant à un endroit différent dans le tampon, il est possible d'interagir avec des données qui représentent des objets contenant plusieurs types de données. Cela permet entre autres d'intéragir avec des structures de données complexes telles que [WebGL](/fr/docs/Web/WebGL), des fichiers de données, des structures C (notamment avec [js-ctypes](/fr/docs/Mozilla/js-ctypes)).

Si on a cette structure C :

```cpp
struct uneStruct {
  unsigned long id;
  char nom_utilisateur[16];
  float montant;
};
```

On peut réceptionner les données d'un tampon qui contiendrait des objets de ce type grâce à:

```js
let buffer = new ArrayBuffer(24);

// ... on lit les données dans le tampon ...

let vueId = new Uint32Array(buffer, 0, 1);
let vueNomUtilisateur = new Uint8Array(buffer, 4, 16);
let vueMontant = new Float32Array(buffer, 20, 1);
```

On peut ensuite accéder au montant lié à un utilisateur, par exemple, avec `vueMontant[0]`.

> **Note :** [L'alignement des structures de données](https://fr.wikipedia.org/wiki/Alignement_en_m%C3%A9moire) dans une structure C dépend de la plate-forme. Il est donc nécessaire de prendre des précautions quant au format attendu.

### Convertir un tableau typé en un tableau normal

Dans certains cas d'utilisation, après avoir traité un tableau typé, il peut être utile de convertir le tableau typé en un tableau normal ({{jsxref("Array")}}) afin de bénificier des propriétés du prototype d'`Array`. Pour cela, on peut utiliser la méthode {{jsxref("Array.from")}}. Si `Array.from()` n'est pas disponible, on peut effectuer cette conversion de la façon suivante :

```js
let tableauTypé = new Uint8Array([1, 2, 3, 4]),
    tableauNormal = Array.prototype.slice.call(tableauTypé);
tableauNormal.length === 4;
tableauNormal.constructor === Array;
```

## Spécifications

| Spécification                                                                                    | État                             | Commentaires                                    |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------- |
| {{SpecName('Typed Array')}}                                                             | {{Spec2('Typed Array')}} | Remplacée par ECMAScript 2015.                  |
| {{SpecName('ES2015', '#sec-typedarray-objects', 'TypedArray Objects')}} | {{Spec2('ES2015')}}         | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}} | {{Spec2('ESDraft')}}     |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Int8Array")}}

## Voir aussi

- [Manipuler des chaînes encodées en base 64 avec des `ArrayBuffer`s ou des tableaux typés](/fr/docs/Décoder_encoder_en_base64#Annexe_.3A_D.C3.A9coder_une_cha.C3.AEne_en_base64_en_un_objet_Uint8Array_ou_ArrayBuffer)
- [`StringView` – une représentation des chaînes semblable à la réprésentation C, utilisant des tableaux typés](/fr/docs/Code_snippets/StringView)
- [Manipuler les pixels d'un canvas plus efficacement avec les tableaux typés](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays) (en anglais)
- [Les tableaux typés : des données binaires arrivent dans le navigateur](https://www.html5rocks.com/en/tutorials/webgl/typed_arrays) (en anglais)
- {{Glossary("Boutisme")}}
