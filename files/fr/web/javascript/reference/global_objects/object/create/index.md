---
title: "Object : méthode statique create()"
short-title: create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Object.create()`** crée un nouvel objet, en utilisant un objet existant comme prototype du nouvel objet créé.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.create()", "taller")}}

```js interactive-example
const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`Mon nom est ${this.name}. Suis-je humain ? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" est une propriété définie sur "me", mais pas sur "person"
me.isHuman = true; // Les propriétés héritées peuvent être écrasées

me.printIntroduction();
// Résultat attendu : "Mon nom est Matthew. Suis-je humain ? true"
```

## Syntaxe

```js-nolint
Object.create(proto)
Object.create(proto, propertiesObject)
```

### Paramètres

- `proto`
  - : L'objet qui est le prototype du nouvel objet créé.
- `propertiesObject` {{Optional_Inline}}
  - : Si défini et différent de {{JSxRef("undefined")}}, un objet dont les [propriétés propres énumérables](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) définissent des descripteurs de propriétés à ajouter au nouvel objet créé, avec les noms de propriétés correspondants. Ces propriétés correspondent au deuxième argument de {{JSxRef("Object.defineProperties()")}}.

### Valeur de retour

Un nouvel objet qui dispose du prototype et des propriétés indiquées.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `proto` n'est ni {{JSxRef("null")}}, ni un {{JSxRef("Object")}}.

## Exemples

### L'héritage classique avec `Object.create()`

Ci-dessous est un exemple de l'utilisation de `Object.create()` pour réaliser un héritage classique. Il s'agit d'un héritage unique, ce qui est tout ce que JavaScript prend en charge.

```js
// Forme, la classe parente
function Forme() {
  this.x = 0;
  this.y = 0;
}

// Méthode de la classe parente
Forme.prototype.deplacer = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Forme déplacée.");
};

// Rectangle - classe fille
function Rectangle() {
  Forme.call(this); // appel du constructeur parent
}

// La sous-classe hérite de la super-classe
Rectangle.prototype = Object.create(Forme.prototype, {
  // Si vous ne définissez pas Rectangle.prototype.constructor sur
  // Rectangle, il prend le prototype.constructor de Forme (le parent).
  // Pour éviter cela, nous définissons le prototype.constructor sur Rectangle (la sous-classe).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

const rect = new Rectangle();

console.log("instance de Rectangle ? ", rect instanceof Rectangle); // true
console.log("une instance de Forme ? ", rect instanceof Forme); // true
rect.deplacer(1, 1); // Affiche 'Forme déplacée.'
```

Notez qu'il existe certaines précautions à prendre lors de l'utilisation de `create()`, comme le fait de rajouter la propriété [`constructor`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) afin de garantir une sémantique correcte. Bien que `Object.create()` soit réputé plus performant que la modification du prototype avec {{JSxRef("Object.setPrototypeOf()")}}, la différence est en réalité négligeable si aucune instance n'est créée et si les accès aux propriétés ne sont pas encore optimisés. Dans le code moderne, la syntaxe [de classe](/fr/docs/Web/JavaScript/Reference/Classes) doit de toute façon être privilégiée.

### Utiliser l'argument `objetPropriétés` avec `Object.create()`

`Object.create()` permet un contrôle précis du processus de création d'objets. La [syntaxe d'initialisation d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer) est, en réalité, une syntaxe simplifiée de `Object.create()`. Grâce à `Object.create()`, il est possible de créer des objets avec un prototype défini, ainsi que certaines propriétés. Notez que le deuxième paramètre associe des clés à des _descripteurs de propriété_ — cela signifie que vous pouvez également contrôler l'énumérabilité, la configuration, etc. de chaque propriété, ce qui n'est pas possible avec les initialisations d'objets.

```js
o = {};
// Est équivalent à :
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // toto est une propriété de données ordinaire
  toto: {
    writable: true,
    configurable: true,
    value: "bonjour",
  },
  // truc est une propriété accesseur
  truc: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Définir `o.truc` sur", value);
    },
  },
});

// Crée un nouvel objet dont le prototype est un nouvel objet vide
// et ajoute une seule propriété 'p', dont la valeur est 42.
o = Object.create({}, { p: { value: 42 } });
```

Avec `Object.create()`, on peut créer un objet [avec un prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null). La syntaxe équivalente dans les initialisations d'objets est la clé [`__proto__`](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#changement_de_prototype).

```js
o = Object.create(null);
// Est équivalent à :
o = { __proto__: null };
```

Par défaut, les propriétés ne sont _pas_ modifiables, énumérables ou configurables.

```js
o.p = 24; // lève une erreur en mode strict
o.p; // 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false ; lève une erreur en mode strict
```

Pour définir une propriété avec les mêmes attributs que dans une initialisation, définissez explicitement `writable`, `enumerable` et `configurable`.

```js
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
// Ce n'est pas équivalent à :
// o2 = Object.create({ p: 42 })
// ce qui crée un objet avec pour prototype { p: 42 }
```

Vous pouvez utiliser `Object.create()` pour imiter le comportement de l'opérateur {{JSxRef("new")}}.

```js
function Constructor() {}
o = new Constructor();
// Est équivalent à :
o = Object.create(Constructor.prototype);
```

Bien sûr, si le constructeur `Constructor` contient du code d'initialisation, la méthode `Object.create()` ne peut pas le refléter.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.create` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- La méthode statique {{JSxRef("Object.defineProperty()")}}
- La méthode statique {{JSxRef("Object.defineProperties()")}}
- La méthode {{JSxRef("Object.prototype.isPrototypeOf()")}}
- La méthode statique {{JSxRef("Reflect.construct()")}}
- [Object.getPrototypeOf <sup>(angl.)</sup>](https://johnresig.com/blog/objectgetprototypeof/) par John Resig (2008)
