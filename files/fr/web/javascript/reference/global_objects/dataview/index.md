---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
translation_of: Web/JavaScript/Reference/Global_Objects/DataView
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView
browser-compat: javascript.builtins.DataView
---
{{JSRef}}

La vue **`DataView`** fournit une interface de bas niveau pour lire et écrire des données de différents types numériques dans un objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), quel que soit le [«&nbsp;boutisme&nbsp;» (<i lang="en">endianness</i>)](https://fr.wikipedia.org/wiki/Boutisme) de la plateforme.

## Description

### Le boutisme (<i lang="en">endianness</i>)

Les formats numériques sur plusieurs octets sont représentés différemment en mémoire selon l'architecture de la machine (voir [la page du glossaire sur le boutisme](/fr/docs/Glossary/Endianness) pour plus d'explications). Les accesseurs `DataView` permettent de contrôler explicitement la façon dont se fait l'accès aux données, quel que soit le boutisme de l'ordinateur.

```js
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array utilise le boutisme de la plateforme
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true ou false
```

### Gestion des valeurs entières sur 64 bits

Certains navigateurs ne prennent pas en charge [`DataView.prototype.setBigInt64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64) et [`DataView.prototype.setBigUint64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64). Pour que les opérations sur 64 bits fonctionnent pour ces navigateurs, il est possible d'implémenter une fonction `getUint64()` qui permet d'obtenir des valeurs avec une précision correcte jusqu'à [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), ce qui peut être suffisant selon le cas d'usage.

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

On peut également créer un objet [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) si on veut avoir accès à 64 bits. Sur le plan des performances, les grands entiers ([`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) ont une taille variable, aussi leur manipulation sera nécessairement plus lente que celle des nombres stockés sur 32 bits. Ceci étant écrit, les valeurs natives [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) seront plus performantes que les implémentations tierces (bibliothèques, etc.).

```js
const BigInt = window.BigInt, bigThirtyTwo = BigInt(32), bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // on décompose la valeur 64 sur bits en deux nombres 32 bits (4 octets)
  const gauche = BigInt(dataview.getUint32(byteOffset|0, !!littleEndian)>>>0);
  const droite = BigInt(dataview.getUint32((byteOffset|0) + 4|0, !!littleEndian)>>>0);

  // on recombine les deux valeurs sur 32 bits et on la renvoie
  return littleEndian ? (droite<<bigThirtyTwo)|gauche : (gauche<<bigThirtyTwo)|droite;
}
```

## Constructeur

- [`DataView()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView)
  - : Crée un nouvel objet `DataView`.

## Propriétés des instances

- [`DataView.prototype.buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer)
  - : L'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) référencé par la vue courante. Cette propriété est déterminée au moment de la construction et est donc uniquement **accessible en lecture seule**.
- [`DataView.prototype.byteLength`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength)
  - : La longueur, exprimée en octets, de cette vue, à partir du début de l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Cette propriété est déterminée au moment de la construction et est donc uniquement **accessible en lecture seule**.
- [`DataView.prototype.byteOffset`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset)
  - : Le décalage, exprimé en octets, de cette vue, par rapport au début de l'objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) correspondant. Cette propriété est déterminée au moment de la construction et est donc uniquement **accessible en lecture seule**.

## Méthodes des instances

- [`DataView.prototype.getInt8()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8)
  - : Obtient un entier signé sur 8 bits (équivalent au type `byte`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getUint8()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8)
  - : Obtient un entier non-signé sur 8 bits (équivalent au type `unsigned byte`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getInt16()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16)
  - : Obtient un entier signé sur 16 bits (équivalent au type `short`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getUint16()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16)
  - : Obtient un entier non-signé sur 16 bits (équivalent au type `unsigned short`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getInt32()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32)
  - : Obtient un entier signé sur 32 bits (équivalent au type `long`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getUint32()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32)
  - : Obtient un entier non-signé sur 32 bits (équivalent au type `unsigned long`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getFloat32()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32)
  - : Obtient un nombre flottant signé sur 32 bits (équivalent au type `float`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getFloat64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64)
  - : Obtient un nombre flottant signé sur 64 bits (équivalent au type `double`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getBigInt64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64)
  - : Obtient un entier signé sur 64 bits (équivalent au type `long long`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.getBigUint64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64)
  - : Obtient un entier non-signé sur 64 bits (équivalent au type `unsigned long long`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setInt8()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8)
  - : Enregistre un entier signé sur 8 bits (équivalent au type `byte`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setUint8()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8)
  - : Enregistre un entier non-signé sur 8 bits (équivalent au type `unsigned byte`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setInt16()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16)
  - : Enregistre un entier signé sur 16 bits (équivalent au type `short`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setUint16()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16)
  - : Enregistre un entier non-signé sur 16 bits (équivalent au type `unsigned short`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setInt32()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32)
  - : Enregistre un entier signé sur 32 bits (équivalent au type `long`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setUint32()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32)
  - : Enregistre un entier non-signé sur 32 bits (équivalent au type `unsigned long`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setFloat32()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32)
  - : Enregistre un entier signé sur 32 bits (équivalent au type `float`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setFloat64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64)
  - : Enregistre un entier signé sur 64 bits (équivalent au type `double`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setBigInt64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64)
  - : Enregistre un entier signé sur 64 bits (équivalent au type `long long`) situé à l'octet relatif au début de la vue.
- [`DataView.prototype.setBigUint64()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64)
  - : Enregistre un entier non-signé sur 64 bits (équivalent au type `unsigned long long`) situé à l'octet relatif au début de la vue.

## Exemples

### Utiliser `DataView`

```js
let buffer = new ArrayBuffer(16);
let view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `DataView` dans `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [jDataView](https://github.com/jDataView/jDataView)&nbsp;: une bibliothèque JavaScript qui ajoute des prothèses et des extensions à l'API `DataView` afin de pouvoir la manipuler au travers des différents navigateurs et de Node.js.
- [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
