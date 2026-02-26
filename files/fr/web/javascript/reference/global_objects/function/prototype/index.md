---
title: "Function : propriété prototype"
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété de données **`prototype`** d'une instance de {{JSxRef("Function")}} est utilisée lorsque la fonction est utilisée comme constructeur avec l'opérateur {{JSxRef("Operators/new", "new")}}. Elle deviendra le prototype du nouvel objet.

> [!NOTE]
> Tous les objets {{JSxRef("Function")}} n'ont pas la propriété `prototype` — voir [la description](#description).

## Valeur

Un objet.

{{js_property_attributes(1, 0, 0)}}

> [!NOTE]
> [Les classes](/fr/docs/Web/JavaScript/Reference/Classes) sont un type de fonction, donc la plupart de la description ici s'applique également à la propriété `prototype` des classes. La seule différence notable est que la propriété `prototype` d'une classe n'est pas modifiable.

## Description

Lorsque une fonction est appelée avec {{JSxRef("Operators/new", "new")}}, la propriété `prototype` du constructeur devient le prototype de l'objet résultant.

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

Vous pouvez lire [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#contructeurs) pour plus d'informations sur les interactions entre la propriété `prototype` d'une fonction constructeur et le prototype de l'objet résultant.

Une fonction ayant une propriété `prototype` n'est pas suffisante pour qu'elle soit éligible en tant que constructeur. [Les fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*) ont une propriété `prototype`, mais ne peuvent pas être appelées avec `new`&nbsp;:

```js
async function* fonctionGeneratriceAsynchrone() {}
function* fonctionGeneratrice() {}
```

Au lieu de cela, la propriété `prototype` des fonctions génératrices est utilisée lorsqu'elles sont appelées _sans_ `new`. La propriété `prototype` deviendra le prototype de l'objet [`Generator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator) retourné.

De plus, certaines fonctions peuvent avoir une propriété `prototype` mais lancer une exception de manière inconditionnelle lorsqu'elles sont appelées avec `new`. Par exemple, les fonctions [`Symbol()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) et [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) lancent une exception lorsqu'elles sont appelées avec `new`, car `Symbol.prototype` et `BigInt.prototype` sont uniquement destinés à fournir des méthodes pour les valeurs primitives, mais les objets wrapper ne doivent pas être construits directement.

Les fonctions suivantes n'ont pas de `prototype` et ne sont donc pas éligibles en tant que constructeurs, même si une propriété `prototype` est ultérieurement assignée manuellement&nbsp;:

```js
const methode = { toto() {} }.toto;
const fonctionFlechee = () => {};
async function fonctionAsynchrone() {}
```

Les constructeurs valides suivants ont une propriété `prototype`&nbsp;:

```js
class Classe {}
function fn() {}
```

Une [fonction liée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) n'a pas de propriété `prototype`, mais peut être constructible. Lorsqu'elle est construite, la fonction cible est construite à la place, et si la fonction cible est constructible, elle retournerait une instance normale.

```js
const fonctionLiee = function () {}.bind(null);
```

La propriété `prototype` d'une fonction, par défaut, est un objet simple avec une propriété&nbsp;: [`constructor`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), qui est une référence à la fonction elle-même. La propriété `constructor` est modifiable, non énumérable et configurable.

Si la propriété `prototype` d'une fonction est réassignée avec autre chose qu'un {{JSxRef("Object")}}, lorsque la fonction est appelée avec `new`, le prototype de l'objet retourné sera `Object.prototype` à la place. (En d'autres termes, `new` ignore la propriété `prototype` et construit un objet simple.)

```js
function Ctor() {}
Ctor.prototype = 3;
console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true
```

## Exemples

### Changer le prototype de toutes les instances en modifiant la propriété prototype

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### Ajouter une propriété qui n'est pas une méthode à la propriété prototype d'une classe

[Champs de classe](/fr/docs/Web/JavaScript/Reference/Classes/Public_class_fields) ajoutent des propriétés à chaque instance. Les méthodes de classe déclarent des propriétés _fonction_ sur le prototype. Cependant, il n'y a aucun moyen d'ajouter une propriété non fonctionnelle au prototype. Si vous souhaitez partager des données statiques entre toutes les instances (par exemple, [`Error.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name) est le même pour toutes les instances d'erreur), vous pouvez l'assigner manuellement sur le `prototype` d'une classe.

```js
class Chien {
  constructor(name) {
    this.name = name;
  }
}

Chien.prototype.espece = "chien";

console.log(new Chien("Jack").espece); // "chien"
```

Cela peut être rendu plus ergonomique en utilisant des [blocs d'initialisation statiques](/fr/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), qui sont appelés lorsque la classe est initialisée.

```js
class Chien {
  static {
    Chien.prototype.espece = "chien";
  }
  constructor(name) {
    this.name = name;
  }
}

console.log(new Chien("Jack").espece); // "chien"
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'objet {{JSxRef("Function")}}
- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructeurs)
