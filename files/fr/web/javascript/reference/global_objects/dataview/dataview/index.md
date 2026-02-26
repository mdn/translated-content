---
title: Constructeur DataView()
short-title: DataView()
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`DataView()`** permet de construire des objets {{JSxRef("DataView")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur DataView")}}

```js interactive-example
// Créer un ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);

// Créer deux vues
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // À partir de l'octet 12 pour les 4 octets suivants
view1.setInt8(12, 42); // Mettre 42 dans l'emplacement 12

console.log(view2.getInt8(0));
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
new DataView(buffer)
new DataView(buffer, byteOffset)
new DataView(buffer, byteOffset, byteLength)
```

> [!NOTE]
> `DataView()` ne peut être construit qu'avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Tenter de l'appeler sans `new` déclenche une erreur {{JSxRef("TypeError")}}.

### Paramètres

- `buffer`
  - : Un objet {{JSxRef("ArrayBuffer")}} ou {{JSxRef("SharedArrayBuffer")}} existant à utiliser comme tampon de mémoire sur lequel portera la vue formée par le nouvel objet `DataView`.
- `byteOffset` {{Optional_Inline}}
  - : Le décalage, exprimé en octets, du premier octet référencé par la vue par rapport au tampon de mémoire. Par défaut, la vue commence au premier octet du tampon de mémoire.
- `byteLength` {{Optional_Inline}}
  - : Le nombre d'éléments dans le tableau des octets de la vue. Par défaut, la longueur de la vue correspondra à celle du tampon.

### Valeur de retour

Un nouvel objet {{JSxRef("DataView")}} représentant le tampon de données défini.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si les valeurs des paramètres `byteOffset` ou `byteLength` font que la vue dépasse la fin du tampon. En d'autres termes, `byteOffset + byteLength > buffer.byteLength`.

## Exemples

### Utiliser `DataView()`

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

- [Une prothèse d'émulation pour `DataView` avec la bibliothèque `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- L'objet {{JSxRef("DataView")}}
