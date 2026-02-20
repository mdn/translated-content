---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

La vue **`DataView`** fournit une interface de bas niveau pour lire et écrire des données de différents types numériques dans un objet {{JSxRef("ArrayBuffer")}}, quel que soit le [«&nbsp;boutisme&nbsp;»](https://fr.wikipedia.org/wiki/Boutisme) (<i lang="en">endianness</i> en anglais) de la plateforme.

## Description

### Boutisme

Les formats numériques sur plusieurs octets sont représentés différemment en mémoire selon l'architecture de la machine (voir [la page du glossaire sur le boutisme](/fr/docs/Glossary/Endianness) pour plus d'explications). Les accesseurs `DataView` permettent de contrôler explicitement la façon dont se fait l'accès aux données, quel que soit le boutisme de l'ordinateur.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array utilise le boutisme de la plateforme
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true ou false
```

> [!NOTE]
> Par défaut, `DataView` lit et écrit en grand-boutiste (<i lang="en">big-endian</i> en anglais), mais la plupart des plateformes utilisent le format petit-boutiste (<i lang="en">little-endian</i> en anglais).

## Constructeur

- {{JSxRef("DataView/DataView", "DataView()")}}
  - : Crée un nouvel objet `DataView`.

## Propriétés d'instances

Ces propriétés sont définies sur `DataView.prototype` et partagées par toutes les instances de `DataView`.

- {{JSxRef("DataView.prototype.buffer")}}
  - : Retourne l'objet {{JSxRef("ArrayBuffer")}} référencé par la `DataView`.
- {{JSxRef("DataView.prototype.byteLength")}}
  - : Retourne la longueur (en octets) du `DataView`.
- {{JSxRef("DataView.prototype.byteOffset")}}
  - : Retourne le décalage (en octets) du `DataView` depuis le début de son objet {{JSxRef("ArrayBuffer")}}.
- {{JSxRef("Object/constructor", "DataView.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `DataView`, la valeur initiale est le constructeur {{JSxRef("DataView/DataView", "DataView")}}.
- `DataView.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"DataView"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instances

- {{JSxRef("DataView.prototype.getBigInt64()")}}
  - : Lit 8 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un entier signé sur 64 bits.
- {{JSxRef("DataView.prototype.getBigUint64()")}}
  - : Lit 8 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un entier non-signé sur 64 bits.
- {{JSxRef("DataView.prototype.getFloat16()")}}
  - : Lit 2 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un nombre flottant sur 16 bits.
- {{JSxRef("DataView.prototype.getFloat32()")}}
  - : Lit 4 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un nombre flottant sur 32 bits.
- {{JSxRef("DataView.prototype.getFloat64()")}}
  - : Lit 8 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un nombre flottant sur 64 bits.
- {{JSxRef("DataView.prototype.getInt16()")}}
  - : Lit 2 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un entier signé sur 16 bits.
- {{JSxRef("DataView.prototype.getInt32()")}}
  - : Lit 4 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un entier signé sur 32 bits.
- {{JSxRef("DataView.prototype.getInt8()")}}
  - : Lit 1 octet à l'encart d'octet défini de cette `DataView` et l'interprète comme un entier signé sur 8 bits.
- {{JSxRef("DataView.prototype.getUint16()")}}
  - : Lit 2 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un entier non-signé sur 16 bits.
- {{JSxRef("DataView.prototype.getUint32()")}}
  - : Lit 4 octets à partir de l'encart d'octet défini de cette `DataView` et les interprète comme un entier non-signé sur 32 bits.
- {{JSxRef("DataView.prototype.getUint8()")}}
  - : Lit 1 octet à l'encart d'octet défini de cette `DataView` et l'interprète comme un entier non-signé sur 8 bits.
- {{JSxRef("DataView.prototype.setBigInt64()")}}
  - : Prend un `BigInt` et l'enregistre comme un entier signé sur 64 bits dans les 8 octets à partir de l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setBigUint64()")}}
  - : Prend un `BigInt` et l'enregistre comme un entier non-signé sur 64 bits dans les 8 octets à partir de l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setFloat16()")}}
  - : Prend un nombre et l'enregistre comme un flottant sur 16 bits dans les 2 octets à partir de l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setFloat32()")}}
  - : Prend un nombre et l'enregistre comme un flottant sur 32 bits dans les 4 octets à partir de l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setFloat64()")}}
  - : Prend un nombre et l'enregistre comme un flottant sur 64 bits dans les 8 octets à partir de l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setInt16()")}}
  - : Prend un nombre et l'enregistre comme un entier signé sur 16 bits dans les 2 octets à l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setInt32()")}}
  - : Prend un nombre et l'enregistre comme un entier signé sur 32 bits dans les 4 octets à l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setInt8()")}}
  - : Prend un nombre et l'enregistre comme un entier signé sur 8 bits dans l'octet à l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setUint16()")}}
  - : Prend un nombre et l'enregistre comme un entier non-signé sur 16 bits dans les 2 octets à l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setUint32()")}}
  - : Prend un nombre et l'enregistre comme un entier non-signé sur 32 bits dans les 4 octets à l'encart d'octet défini de cette `DataView`.
- {{JSxRef("DataView.prototype.setUint8()")}}
  - : Prend un nombre et l'enregistre comme un entier non-signé sur 8 bits dans l'octet à l'encart d'octet défini de cette `DataView`.

## Exemples

### Utiliser `DataView`

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `DataView` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("SharedArrayBuffer")}}
