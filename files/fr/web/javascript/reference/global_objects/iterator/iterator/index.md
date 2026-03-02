---
title: Constructeur Iterator()
short-title: Iterator()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Le constructeur **`Iterator()`** est destiné à être utilisé comme la [superclasse](/fr/docs/Web/JavaScript/Reference/Classes/extends) d'autres classes qui créent des itérateurs. Il lève une erreur s'il est construit directement.

## Syntaxe

```js-nolint
new Iterator()
```

> [!NOTE]
> `Iterator()` peut seulement être construit avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` lance une {{JSxRef("TypeError")}}. De plus, `Iterator()` ne peut pas être construit lui-même — il est généralement construit implicitement via des appels à {{JSxRef("Operators/super", "super()")}} à l'intérieur du constructeur d'une sous-classe.

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet {{JSxRef("Iterator")}}.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Lorsque {{JSxRef("Operators/new.target", "new.target")}} est la fonction `Iterator` elle-même, c'est-à-dire lorsque le constructeur `Iterator` est construit.

## Description

`Iterator` représente une _classe abstraite_ — une classe qui fournit des utilitaires communs pour ses sous-classes, mais qui n'est pas destinée à être instanciée elle-même. C'est la superclasse de toutes les autres classes d'itérateurs, et elle est utilisée pour créer des sous-classes qui implémentent des algorithmes d'itération spécifiques — en particulier, toutes les sous-classes de `Iterator` doivent implémenter une méthode `next()` comme requis par le [protocole d'itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_»). Comme `Iterator` ne fournit pas réellement la méthode `next()`, il n'est pas logique de construire un `Iterator` directement.

Vous pouvez également utiliser {{JSxRef("Iterator.from()")}} pour créer une instance de `Iterator` à partir d'un objet itérable ou itérateur existant.

## Exemples

### Sous-classer Iterator

L'exemple suivant définit une structure de données personnalisée, `Range`, qui permet l'itération. Pour rendre un objet itérable, nous pouvons fournir une méthode [`[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) sous la forme d'une fonction génératrice&nbsp;:

```js
class Range {
  #debut;
  #fin;
  #etape;

  constructor(debut, fin, etape = 1) {
    this.#debut = debut;
    this.#fin = fin;
    this.#etape = etape;
  }

  *[Symbol.iterator]() {
    for (let valeur = this.#debut; valeur <= this.#fin; valeur += this.#etape) {
      yield valeur;
    }
  }
}

const fourchette = new Range(1, 5);
for (const nombre of fourchette) {
  console.log(nombre);
}
```

Ça fonctionne, mais ce n'est pas aussi agréable que le fonctionnement des itérateurs intégrés. Il y a deux problèmes&nbsp;:

- L'itérateur retourné hérite de {{JSxRef("Generator")}}, ce qui signifie que les modifications de `Generator.prototype` vont affecter l'itérateur retourné, constituant une fuite d'abstraction.
- L'itérateur retourné n'hérite pas d'un prototype personnalisé, ce qui complique l'ajout de méthodes supplémentaires à l'itérateur.

Nous pouvons imiter l'implémentation des itérateurs natifs, tels que [l'itérateurs de map](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator), en sous-classant `Iterator`. Cela permet de définir des propriétés supplémentaires, telles que [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag), tout en rendant disponibles les méthodes d'aide à l'itérateur sur l'itérateur retourné.

```js
class Plage {
  #debut;
  #fin;
  #etape;

  constructor(debut, fin, etape = 1) {
    this.#debut = debut;
    this.#fin = fin;
    this.#etape = etape;
  }

  static #PlageIterator = class extends Iterator {
    #act;
    #e;
    #f;
    constructor(range) {
      super();
      this.#act = range.#debut;
      this.#e = range.#etape;
      this.#f = range.#fin;
    }
    static {
      Object.defineProperty(this.prototype, Symbol.toStringTag, {
        value: "Plage Iterator",
        configurable: true,
        enumerable: false,
        writable: false,
      });

      // Empêcher #PlageIterator d'etre accessible a l'exterieur
      delete this.prototype.constructor;
    }
    next() {
      if (this.#act > this.#f) {
        return { valeur: undefined, fait: true };
      }
      const res = { valeur: this.#act, fait: false };
      this.#act += this.#e;
      return res;
    }
  };

  [Symbol.iterator]() {
    return new Plage.#PlageIterator(this);
  }
}

const plage = new Plage(1, 5);
for (const nombre of plage) {
  console.log(nombre);
}
```

Le modèle de sous-classement est utile si vous souhaitez créer de nombreux itérateurs personnalisés. Si vous avez un objet itérable ou un itérateur existant qui n'hérite pas de `Iterator`, et que vous souhaitez simplement appeler les méthodes d'aide de l'itérateur dessus, vous pouvez utiliser {{JSxRef("Iterator.from()")}} pour créer une instance `Iterator` ponctuelle.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode statique {{JSxRef("Iterator.from()")}}
