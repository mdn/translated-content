---
title: Constructeur DataView()
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
---

{{JSRef}}

Le constructeur **`DataView()`** permet de construire des objets [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView).

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## Syntaxe

```js
new DataView(buffer);
new DataView(buffer, decalageOctets);
new DataView(buffer, decalageOctets, longueurOctets);
```

### Paramètres

- `buffer`
  - : Un objet [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) ou [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) existant à utiliser comme tampon de mémoire sur lequel portera la vue formée par le nouvel objet `DataView`.
- `decalageOctets` {{optional_inline}}
  - : Le décalage, exprimé en octets, du premier octet référencé par la vue par rapport au tampon de mémoire. Par défaut, la vue commence au premier octet du tampon de mémoire.
- `longueurOctets` {{optional_inline}}
  - : Le nombre d'éléments dans le tableau des octets de la vue. Par défaut, la longueur de la vue correspondra à celle du tampon.

### Valeur de retour

Un nouvel objet `DataView` qui fournit une vue sur le tampon de mémoire passé en argument.

Cet objet peut être vu comme un interpréteur du tableau d'octets fourni par le tampon de mémoire. Il permet de convertir les nombres afin qu'ils soient correctement écrits ou lus dans le tampon (ce qui inclut la gestion des entiers, la conversion des flottants, le boutisme, ainsi que les autres détails quant à la représentation binaire des nombres).

### Exceptions

- [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError)

  - : Levée si les valeurs des paramètres `decalageOctets` ou `longueurOctets` entraînent un dépassement de la vue après la fin du tampon.

    Ainsi, si le tampon de mémoire mesure 16 octets, que la valeur fournie pour `decalageOctets` est 8, et que celle fournie pour `longueurOctets` est 10, cette exception sera déclenchée, car la vue résultante dépassera de deux octets la taille du tampon.

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

- [Une prothèse d'émulation pour `DataView` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [`DataView`](/fr/docs/Web/JavaScript/Reference/Global_Objects/DataView)
