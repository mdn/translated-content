---
title: Constructeur ArrayBuffer()
short-title: ArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Le constructeur **`ArrayBuffer()`** crée des objets {{JSxRef("ArrayBuffer")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur ArrayBuffer()", "shorter")}}

```js interactive-example
// Crée un objet ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);
// Résultat attendu : 8
```

## Syntaxe

```js-nolint
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

> [!NOTE]
> Vous ne pouvez construire `ArrayBuffer()` qu'avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Tenter de l'appeler sans `new` déclenche une exception {{JSxRef("TypeError")}}.

### Paramètres

- `length`
  - : La taille, en octets, du tableau de mémoire tampon à créer.
- `options` {{Optional_Inline}}
  - : Un objet qui peut contenir les propriétés suivantes&nbsp;:
    - `maxByteLength` {{Optional_Inline}}
      - : La taille maximale, en octets, à laquelle le tableau de mémoire tampon peut être redimensionné.

### Valeur de retour

Un nouvel objet `ArrayBuffer` de la taille définie, avec sa propriété {{JSxRef("ArrayBuffer/maxByteLength", "maxByteLength")}} définie à la valeur de `maxByteLength` si elle a été fournie. Son contenu est initialisé à 0.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `length` ou `maxByteLength` est supérieur à {{JSxRef("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) ou négatif.
    - `length` est supérieur à `maxByteLength`.

## Exemples

### Créer un objet `ArrayBuffer`

Dans cet exemple, on crée un tampon de 8 octets avec une vue {{JSxRef("Int32Array")}} qui y fait référence&nbsp;:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Créer un `ArrayBuffer` redimensionnable

Dans cet exemple, on crée un tampon de 8 octets qui peut être redimensionné jusqu'à une taille maximale de 16 octets, puis on le redimensionne à 12 octets avec {{JSxRef("ArrayBuffer/resize", "resize()")}}&nbsp;:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> [!NOTE]
> Il est recommandé de définir `maxByteLength` à la plus petite valeur possible pour votre cas d'utilisation. Cette valeur ne doit jamais dépasser `1073741824` (1 Go) afin de réduire le risque d'erreurs de mémoire insuffisante.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet global {{JSxRef("SharedArrayBuffer")}}
- [Prothèse d'émulation pour `ArrayBuffer` avec la bibliothèque `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
