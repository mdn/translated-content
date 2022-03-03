---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
tags:
  - JavaScript
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray
---
{{JSRef}}

Un objet **_TypedArray_** décrit une vue organisée à la façon d'un tableau pour manipuler [un tampon (_buffer_) de données binaires](/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer). `TypedArray` n'est pas une propriété globale, il n'existe pas non plus de constructeur `TypedArray`.  En revanche, plusieurs propriétés globales existent et leurs valeurs permettent de construire des tableaux typés (_typed arrays_) avec différents types de données. Ceux-ci sont listés ci-après. Les pages suivantes permettent de décrire les propriétés et méthodes qui peuvent être utilisées sur les différents tableaux typés.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## Syntaxe

    new TypedArray(longueur);
    new TypedArray(tableauTypé);
    new TypedArray(objet);
    new TypedArray(tampon [, décalageEnOctet [, longueur]]);

    // où TypedArray() est l'un de :

    Int8Array();
    Uint8Array();
    Uint8ClampedArray();
    Int16Array();
    Uint16Array();
    Int32Array();
    Uint32Array();
    Float32Array();
    Float64Array();
    BigInt64Array();
    BigUint64Array();

### Paramètres

- `longueur`
  - : Lorsque le constructeur est appelé avec un argument `longueur`, un tableau typé sera créé, contenant autant de zéros que `longueur` (par exemple avec une longueur de 3, on aura un tableau dont les trois éléments seront des zéros).
- `tableauTypé`
  - : Lorsque le constructeur est appelé avec un argument `tableauTypé`, qui peut être un tableau typé de n'importe quel type (par exemple `Int32Array`), le `tableauTypé` est copié dans un nouveau tableau typé. Chaque valeur du `tableauTypé` est convertie dans le type correspondant du nouveau tableau. Enfin, la longueur du tableau typé est fixée avec la longueur de `tableauTypé`.
- `objet`
  - : Lorsque le constructeur est invoqué avec un argument `objet`, un nouveau tableau typé est créé avec la méthode `TypedArray.from()`.
- `tampon`, `décalageOctet`, `longueur`
  - : Lorsque le constructeur est appelé avec un `tampon` (_buffer_) ainsi qu'avec les paramètres optionnels `décalageOctet` et `longueur`, un nouveau tableau typé est créé comme une vue pour l'objet {{jsxref("ArrayBuffer")}}. Les paramètres `décalageOctet` et `longueur` permettent de définir l'intervalle de mémoire du buffer qui est présenté dans la vue qu'est le tableau typé. Si les deux derniers paramètres sont absents, l'ensemble du `tampon` sera considéré. Si `longueur` est absent, on considèrera l'ensemble de `tampon` à partir de l'octet _décalageOctet_.

## Description

ECMAScript 2015 (ES6) définit un constructeur `%TypedArray%` qui est un `[[Prototype]]` de tous les constructeurs _TypedArray_. Ce constructeur n'est pas accessible directement. Il n'existe pas de  `%TypedArray%` global ou de propriété `TypedArray`.  Il est uniquement accessible via `Object.getPrototypeOf(Int8Array.prototype)` ou avec les méthodes semblables. L'ensemble des différents constructeurs *TypedArray*s hérite de propriétés communes de la fonction `%TypedArray%`. De plus, tous les prototypes des tableaux typés (_TypedArray_`.prototype`) ont `%TypedArray%.prototype` pour `[[Prototype]]`.

Le constructeur `%TypedArray%` en tant que tel n'est pas très utile. Toute tentative d'appel ou d'utilisation avec une expression `new` renverra `TypeError`, sauf quand il est utilisé par le moteur JavaScript lors de la création de l'objet quand le moteur supporte les sous-classes. À l'heure actuelle, il n'existe pas de tels moteurs, pour cette raison `%TypedArray%` est uniquement utile dans les fonctions d'émulation (_polyfill_) our pour les propriétés des différents constructeurs _TypedArray_.

Lorsqu'on crée une instance de _TypedArray_ (ex. une instance de `Int8Array` ou autre), un tampon de mémoire tableau est créé en interne par le moteur (si un objet `ArrayBuffer` est passé en argument, c'est celui-ci qui est utilisé). C'est l'adresse de cette mémoire tampon qui est sauvegardée comme une propriété interne à l'objet. Toutes les méthodes de `%TypedArray%.prototype` utiliseront ensuite cet espace pour les opérations.

### Accès aux propriétés

Il est possible d'accéder aux éléments du tableau en utilisant la notation usuelle avec les crochets. Cependant, définir ou accéder à des propriétés indexées ne se fera pas avec la chaîne de prototypes, même si l'indice utilisé est en dehors des limites du tableau. Les propriétés indexées seront uniquement basées sur le contenu du {{jsxref("ArrayBuffer")}} et ne consulteront pas les propriétés des objets. En revanche, il est toujours possible d'utiliser des propriétés nommées, comme avec les autres objets.

```js
// Définir et accéder du contenu avec la syntaxe usuelle
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Les propriétés indexées sur les prototypes ne sont pas consultées (Fx 25)
Int8Array.prototype[20] = "toto";
(new Int8Array(32))[20]; // 0
// y compris en dehors des limites
Int8Array.prototype[20] = "toto";
(new Int8Array(8))[20]; // undefined
// ou avec des index négatifs
Int8Array.prototype[-1] = "toto";
(new Int8Array(8))[-1]; // undefined

// Mais il est possible d'utiliser des propriétés nommées (Fx 30)
Int8Array.prototype.toto = "truc";
(new Int8Array(32)).toto; // "truc" 
```

## Les objets `TypedArray`

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Type</td>
      <td class="header">Intervalle</td>
      <td class="header">Taille (exprimée en octets)</td>
      <td class="header">Description</td>
      <td class="header">Type Web IDL</td>
      <td class="header">Type équivalent en C</td>
    </tr>
    <tr>
      <td>{{jsxref("Int8Array")}}</td>
      <td>-128 à 127</td>
      <td>1</td>
      <td>Entier signé en complément à deux sur 8 bits.</td>
      <td><code>byte</code></td>
      <td><code>int8_t</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Uint8Array")}}</td>
      <td>0 à 255</td>
      <td>1</td>
      <td>Entier non signé sur 8 bits.</td>
      <td><code>octet</code></td>
      <td><code>uint8_t</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Uint8ClampedArray")}}</td>
      <td>0 à 255</td>
      <td>1</td>
      <td>Entier non signé sur 8 bits (compris entre 0 et 255).</td>
      <td><code>octet</code></td>
      <td><code>uint8_t</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Int16Array")}}</td>
      <td>-32768 à 32767</td>
      <td>2</td>
      <td>Entier signé en complément à deux sur 16 bits.</td>
      <td><code>short</code></td>
      <td><code>int16_t</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Uint16Array")}}</td>
      <td>0 à 65535</td>
      <td>2</td>
      <td>Entier non signé sur 16 bits.</td>
      <td><code>unsigned short</code></td>
      <td><code>uint16_t</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Int32Array")}}</td>
      <td>-2147483648 à 2147483647</td>
      <td>4</td>
      <td>Entier signé en complément à deux sur 32 bits.</td>
      <td><code>long</code></td>
      <td><code>int32_t</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Uint32Array")}}</td>
      <td>0 à 4294967295</td>
      <td>4</td>
      <td>Entier non signé sur 32 bits.</td>
      <td><code>unsigned long</code></td>
      <td><code>uint32_t</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Float32Array")}}</td>
      <td>1.2x10^-38 à 3.4x10^38</td>
      <td>4</td>
      <td>
        Nombre flottant sur 32 bits selon la représentation IEEE (7 chiffres
        significatifs).
      </td>
      <td><code>unrestricted float</code></td>
      <td><code>float</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Float64Array")}}</td>
      <td>5.0x10^-324 à 1.8x10^308</td>
      <td>8</td>
      <td>
        Nombre flottant sur 64 bits selon la représentation IEEE (16 chiffres
        significatifs).
      </td>
      <td><code>unrestricted double</code></td>
      <td><code>double</code></td>
    </tr>
    <tr>
      <td>{{jsxref("BigInt64Array")}}</td>
      <td>-2^63 à 2^63-1</td>
      <td>8</td>
      <td>Nombre entier signé sur 64 bits en complément à deux.</td>
      <td><code>bigint</code></td>
      <td><code>int64_t (signed long long)</code></td>
    </tr>
    <tr>
      <td>{{jsxref("BigUint64Array")}}</td>
      <td>0 à 2^64-1</td>
      <td>8</td>
      <td>Nombre entier non signé sur 64 bits.</td>
      <td><code>bigint</code></td>
      <td><code>uint64_t (unsigned long long)</code></td>
    </tr>
  </tbody>
</table>

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Cette propriété renvoie un nombre correspondant à la taille d'un élément du tableau selon le type de tableau utilisé.
- _TypedArray_.length
  - : La propriété de longueur, elle vaut 3.
- {{jsxref("TypedArray.name")}}
  - : Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur (par exemple "Int8Array").
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : La fonction de construction utilisée pour créer des objets dérivés.
- {{jsxref("TypedArray.prototype")}}
  - : Le prototype des objets _TypedArray_.

## Méthodes

- {{jsxref("TypedArray.from()")}}
  - : Cette méthode permet de créer un nouveau tableau typé à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Cette méthode permet de créer un nouveau tableau typé à partir d'un nombre variable d'arguments. Voir aussi {{jsxref("Array.of()")}}.

## Prototype `TypedArray`

Toutes les instances de *TypedArray*s héritent de {{jsxref("TypedArray.prototype")}}.

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray/prototype','Propriétés')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray/prototype','Méthodes')}}

## Prothèse d'émulation (_polyfill_)

La plupart des méthodes des tableaux typés peuvent être en partie émulées grâce aux méthodes rattachées à {{jsxref("Array")}} :

```js
var typedArrayTypes = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, ​​​Int32Array, Uint32Array, ​​​Float32Array, Float64Array];
for (var k in typedArrayTypes){
  for (var v in Array.prototype){
    if (Array.prototype.hasOwnProperty(v) &&
  ​​​​​         !typedArrayTypes[k].prototype.hasOwnProperty(v)){
      typedArrayTypes[k].prototype[v] = Array.prototype[v];
    }
  }
}
```

## Spécifications

| Spécification                                                                                    | État                             | Commentaires                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                             | {{Spec2('Typed Array')}} | Défini comme `TypedArray` et interface `ArrayBufferView` avec les différents types de vues des tableaux typés. Cette spécification a été englobée dans ECMAScript 2015. |
| {{SpecName('ES6', '#sec-typedarray-objects', 'TypedArray Objects')}}     | {{Spec2('ES6')}}             | Définition initiale au sein d'un standard ECMA. `new` est obligatoire.                                                                                                  |
| {{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 a modifié les constructeurs `TypedArray` afin qu'ils utilisent l'opération `ToIndex` et puissent être utilisés sans argument.                           |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray")}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), les constructeurs `TypedArray` doivent être utilisés avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur `TypedArray` comme une fonction, sans `new`, provoquera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float64Array([1, 2, 3]);
```

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
