---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
tags:
  - Constructor
  - DataView
  - JavaScript
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/DataView
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView
---
{{JSRef}}

La vue **`DataView`** fournit une interface de bas niveau pour lire et écrire des données de différents types numériques dans un {{jsxref("ArrayBuffer")}}, quel que soit le « [boutisme](https://fr.wikipedia.org/wiki/Endianness) » de la plate-forme.

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## Syntaxe

    new DataView(buffer [, décalageOctets [, longueurOctets]])

### Paramètres

- `buffer`
  - : Un {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}}{{experimental_inline}} existant à utiliser pour la mise en mémoire du nouvel objet `DataView`.
- `décalageOctets` {{optional_inline}}
  - : Le décalage, exprimé en octets, pour trouver le premier octet significatif du buffer à représenter dans la vue. Si ce paramètre n'est pas fourni, la vue commencera au premier octet du buffer.
- `longueurOctets` {{optional_inline}}
  - : Le nombre d'éléments dans le tableau d'octets. Si ce paramètre n'est pas fourni, la longueur de la vue correspondra à celle du buffer.

### Valeur de retour

Un nouvel objet `DataView` représentant le tampon mémoire (_buffer_) fourni.

L'objet ainsi renvoyé peut être vu comme un interpréteur du tampon mémoire. Cet objet sait comment convertir des nombres afin de lire ou d'écrire des valeurs dans le tampon. C'est la vue qui s'occupe de la gestion des entiers, de la conversion des flottants, du boutisme utilisé et des autres détails de représentation binaire.

### Erreurs renvoyées

- `{{jsxref("RangeError")}}`
  - : Renvoyée si les paramètres `décalageOctets` et `longueurOctets` dépassent la fin du buffer fourni.

Ainsi, si la taille du tampon mémoire est de 16 octets, que `décalageOctets`vaut 8 et que `longueurOctets` vaut 10, cette exception est levée car la vue résultante dépassera de deux octets la longueur totale du tampon mémoire.

## Description

### Le boutisme (_endianness_)

En utilisant cet objet, vous pouvez détecter le type d'architecture qui exécute votre script, ce qui peut être utile dans certains cas. Voici un fragment de code pour permettre cette détection. Voir {{Glossary("Endianness")}} pour plus d'informations.

```js
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /*littleEndian donc */);
  // Int16Array utilise le boutisme de la plate-forme
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true ou false
```

### Gestion des valeurs entières sur 64 bits

JavaScript manipule les nombres comme des valeurs sur 32 bits. Aussi, le moteur ne prend pas en charge la gestion des entiers sur 64 bits et on ne peut donc pas manipuler de telles valeurs avec `DataView`. Afin de contourner ce problème, on peut implémenter une méthode `getUint64()` afin d'otbenir une valeur avec une précision allant jusqu'à {{jsxref("Number.MAX_SAFE_INTEGER")}}, ce qui peut être suffisant dans certains cas.

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // on décompose la valeur 64 sur bits en deux nombres 32 bits
  const gauche = dataview.getUint32(byteOffset, littleEndian);
  const droite = dataview.getUint32(byteOffset + 4, littleEndian);

  // on combine les deux valeurs 32 bits
  const combinaison = littleEndian ? gauche + 2**32*droite : 2**32*gauche + droite;
  if(!Number.isSafeInteger(combinaison)){
    console.warn(combinaison, " dépasse MAX_SAFE_INTEGER : perte de précision !");
  }
  return combinaison;
}
```

On peut également créer un objet {{jsxref("BigInt")}} si on veut avoir accès à 64 bits :

```js
function getUin64BigInt(dataview, byteOffset, littleEndian) {
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset, littleEndian);

  const combined = littleEndian ?
    right.toString(16) + left.toString(16).padStart(8, '0') :
    left.toString(16) + right.toString(16).padStart(8, '0');

  return BigInt(`0x${combined}`);
}
```

> **Note :** Sur le plan des performances, les grands entiers ({{jsxref("BigInt")}} ont une taille variable, aussi leur manipulation sera nécessairement plus lente que celle des nombres stockés sur 32 bits. Ceci étant écrit, les valeurs natives {{jsxref("BigInt")}} seront plus performantes que les implémentations tierces (bibliothèques, etc.).

## Propriétés

Toutes les instances de `DataView` héritent de {{jsxref("DataView.prototype")}} qui permet d'ajouter des propriétés à l'ensemble des objets `DataView`.

{{page("fr/Web/JavaScript/Reference/Objets_globaux/DataView/prototype","Propriétés")}}

## Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/DataView/prototype','Méthodes')}}

## Exemples

```js
var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
```

## Spécifications

| Spécification                                                                        | État                             | Commentaires                                    |
| ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Remplacée par ECMAScript 6                      |
| {{SpecName('ES6', '#sec-dataview-constructor', 'DataView')}}     | {{Spec2('ES6')}}             | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-dataview-constructor', 'DataView')}} | {{Spec2('ESDraft')}}     |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.DataView")}}

### Notes de compatibilité

A partir de Firefox 40 {{geckoRelease(40)}}, `DataView` doit êre construit avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Si on invoque `DataView()` sans utiliser `new`, cela lèvera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = DataView(buffer, 0);
// TypeError: calling a builtin DataView constructor without new is forbidden
```

```js example-good
var dv = new DataView(buffer, 0);
```

## Voir aussi

- [jDataView](https://github.com/jDataView/jDataView) : une bibliothèque JavaScrit qui ajoute des prothèses et des extensions à l'API `DataView` afin de pouvoir la manipuler au travers des différents navigateurs et de Node.js.
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
