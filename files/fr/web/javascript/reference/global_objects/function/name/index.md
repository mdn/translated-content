---
title: "Function : propriété name"
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété de donnée **`name`** d'une instance de {{JSxRef("Function")}} indique le nom de la fonction tel que défini lors de sa création, ou peut être soit `anonymous` soit `''` (une chaîne vide) pour les fonctions créées anonymement.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Function.name")}}

```js interactive-example
const func1 = function () {};

const object = {
  func2: function () {},
};

console.log(func1.name);
// Résultat attendu : "func1"

console.log(object.func2.name);
// Résultat attendu : "func2"
```

## Valeur

Une chaîne de caractères.

{{js_property_attributes(0, 0, 1)}}

> [!NOTE]
> Dans les implémentations non-standards antérieures à ES2015, l'attribut `configurable` valait `false`.

## Description

La propriété `name` d'une fonction peut être utilisée pour identifier la fonction dans les outils de débogage ou les messages d'erreur. Elle n'a aucune signification sémantique pour le langage lui-même.

La propriété `name` est en lecture seule et ne peut pas être modifiée avec l'opérateur d'affectation&nbsp;:

```js
function uneFonction() {}

uneFonction.name = "autreFonction";
console.log(uneFonction.name); // uneFonction
```

Pour la modifier, utilisez {{JSxRef("Object.defineProperty()")}}.

La propriété `name` est généralement déduite de la façon dont la fonction est définie. Dans les sections suivantes, nous décrirons les différentes manières dont elle peut être déduite.

### Déclaration de fonction

La propriété `name` retourne le nom d'une déclaration de fonction.

```js
function faireQuelqueChose() {}
faireQuelqueChose.name; // "faireQuelqueChose"
```

### Déclaration de fonction exportée par défaut

Une déclaration [`export default`](/fr/docs/Web/JavaScript/Reference/Statements/export) exporte la fonction comme une déclaration plutôt qu'une expression. Si la déclaration est anonyme, le nom est `"default"`.

```js
// -- quelconqueModule.js --
export default function () {}

// -- main.js --
import quelconqueModule from "./quelconqueModule.js";

quelconqueModule.name; // "default"
```

### Le constructeur `Function`

Les fonctions créées avec le constructeur [`Function()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) ont pour nom `"anonymous"`.

```js
new Function().name; // "anonymous"
```

### Expression de fonction

Si l'expression de fonction est nommée, ce nom est utilisé comme propriété `name`.

```js
const quelconqueMethode = function quelconqueNomMethode() {};
quelconqueMethode.name; // "quelconqueNomMethode"
```

Les expressions de fonction anonymes, créées soit avec le mot-clé `function`, soit avec la syntaxe des fonctions fléchées, ont `""` (une chaîne de caractères vide) comme nom par défaut.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Cependant, de tels cas sont rares — généralement, afin d'appeler la fonction ailleurs, l'expression de fonction est associée à un identifiant. Le nom d'une expression de fonction anonyme peut être déduit dans certains contextes syntaxiques, y compris&nbsp;: [déclaration de variable et méthode](#declaration_de_variable_et_methode), [initialiseur et valeur par défaut](#initialiseur_et_valeur_par_defaut).

Un cas pratique où le nom ne peut pas être déduit est une fonction retournée par une autre fonction&nbsp;:

```js
function obtenirToto() {
  return () => {};
}
obtenirToto().name; // ""
```

### Déclaration de variable et méthode

Les variables et les méthodes peuvent déduire le nom d'une fonction anonyme à partir de leur position syntaxique.

```js
const f = function () {};
const objet = {
  quelconqueMethode: function () {},
};

console.log(f.name); // "f"
console.log(objet.quelconqueMethode.name); // "quelconqueMethode"
```

Il en va de même pour l'affectation&nbsp;:

```js
let f;
f = () => {};
f.name; // "f"
```

### Initialiseur et valeur par défaut

Les fonctions placées dans des initialiseurs (valeurs par défaut) de la [décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#valeur_par_défaut), des [paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters), des [champs de classe](/fr/docs/Web/JavaScript/Reference/Classes/Public_class_fields), etc., héritent du nom de l'identifiant auquel elles sont liées.

```js
const [f = () => {}] = [];
f.name; // "f"

const { quelconqueMethode: m = () => {} } = {};
m.name; // "m"

function toto(f = () => {}) {
  console.log(f.name);
}
toto(); // "f"

class Toto {
  static quelconqueMethode = () => {};
}
Toto.quelconqueMethode.name; // quelconqueMethode
```

### Méthode raccourcie

```js
const o = {
  tot() {},
};
o.tot.name; // "tot";
```

### Fonction liée

{{JSxRef("Function.prototype.bind()")}} produit une fonction dont le nom est la chaîne `"bound "` suivie du nom de la fonction liée.

```js
function toto() {}
toto.bind({}).name; // "bound toto"
```

### Accesseur et mutateur

Lorsque vous utilisez les propriétés d'accesseur [`get`](/fr/docs/Web/JavaScript/Reference/Functions/get) et [`set`](/fr/docs/Web/JavaScript/Reference/Functions/set), "get" ou "set" apparaît dans le nom de la fonction.

```js
const o = {
  get toto() {
    return 1;
  },
  set toto(x) {},
};

const descriptor = Object.getOwnPropertyDescriptor(o, "toto");
descriptor.get.name; // "get toto"
descriptor.set.name; // "set toto";
```

### Classe

Le nom d'une classe suit le même algorithme que les déclarations et expressions de fonction.

```js
class Toto {}
Toto.name; // "Toto"
```

> [!WARNING]
> JavaScript ne définira la propriété `name` d'une fonction que si une fonction n'a pas de propriété propre appelée `name`. Cependant, les [membres statiques](/fr/docs/Web/JavaScript/Reference/Classes/static) des classes seront définis comme des propriétés propres de la fonction constructeur de la classe, et empêcheront donc l'application du `name` intégré. Voir [l'exemple](#vérifier_le_nom_du_constructeur_dun_objet) ci-dessous.

### Symbole comme nom de fonction

Si un {{JSxRef("Symbol")}} est utilisé comme nom de fonction et que le symbole possède une description, le nom de la méthode sera cette description entre crochets.

```js
const sym1 = Symbol("toto");
const sym2 = Symbol();

const o = {
  [sym1]() {},
  [sym2]() {},
};

o[sym1].name; // "[toto]"
o[sym2].name; // "[]"
```

### Champs et méthodes privés

Les champs privés et les méthodes privées ont le dièse (`#`) comme partie de leur nom.

```js
class Toto {
  #champ = () => {};
  #methode() {}
  getNames() {
    console.log(this.#champ.name);
    console.log(this.#methode.name);
  }
}

new Toto().getNames();
// "#champ"
// "#methode"
```

## Exemples

### Vérifier le nom du constructeur d'un objet

Vous pouvez utiliser `obj.constructor.name` pour vérifier la «&nbsp;classe&nbsp;» d'un objet.

```js
function Toto() {} // Ou : class Toto {}

const totoInstance = new Toto();
console.log(totoInstance.constructor.name); // "Toto"
```

Cependant, comme les membres statiques deviennent des propriétés propres de la classe, on ne peut pas obtenir le nom de la classe pour pratiquement toute classe ayant une propriété de méthode statique `name()`&nbsp;:

```js
class Toto {
  constructor() {}
  static name() {}
}
```

Avec une méthode `static name()`, `Toto.name` ne contient plus le nom réel de la classe mais une référence à l'objet fonction `name()`. Essayer d'obtenir la classe de `totoInstance` via `totoInstance.constructor.name` ne donnera pas du tout le nom de la classe, mais une référence à la méthode statique de la classe. Exemple&nbsp;:

```js
const instanceToto = new Toto();
console.log(instanceToto.constructor.name); // ƒ name() {}
```

En raison de l'existence de champs statiques, `name` peut aussi ne pas être une fonction.

```js
class Toto {
  static name = 123;
}
console.log(new Toto().constructor.name); // 123
```

Si une classe possède une propriété statique appelée `name`, elle deviendra également _écrivable_. La définition intégrée en l'absence d'une définition statique personnalisée est _en lecture seule_&nbsp;:

```js
Toto.name = "Bonjour";
console.log(Toto.name); // "Bonjour" si la classe Toto a une propriété statique "name", mais "Toto" sinon.
```

Par conséquent, vous ne pouvez pas compter sur la propriété intégrée `name` pour contenir toujours le nom d'une classe.

### Compresseurs et outils de minification JavaScript

> [!WARNING]
> Faites attention lors de l'utilisation de la propriété `name` avec des transformations du code source, telles que celles effectuées par des compresseurs (minifieurs) ou des ofuscateurs JavaScript. Ces outils sont souvent utilisés dans une chaîne de construction JavaScript pour réduire la taille d'un programme avant son déploiement en production. De telles transformations modifient souvent le nom d'une fonction lors de la construction.

Le code source tel que&nbsp;:

```js
function Toto() {}
const toto = new Toto();

if (toto.constructor.name === "Toto") {
  console.log("'toto' est une instance de 'Toto'");
} else {
  console.log("Oops!");
}
```

peut être compressé en&nbsp;:

```js
function a() {}
const b = new a();
if (b.constructor.name === "Toto") {
  console.log("'toto' est une instance de 'Toto'");
} else {
  console.log("Oops!");
}
```

Dans la version non compressée, le programme exécute la branche vraie et affiche «&nbsp;'toto' est une instance de 'Toto'&nbsp;» — alors que dans la version compressée, il se comporte différemment et exécute la branche else. Si vous dépendez de la propriété `name`, comme dans l'exemple ci‑dessus, assurez‑vous que votre chaîne de construction ne modifie pas les noms de fonctions, ou ne supposez pas qu'une fonction ait un nom particulier.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Function: name` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-function)
- [Prothèse es-shims de `Function.prototype.name` <sup>(angl.)</sup>](https://www.npmjs.com/package/function.prototype.name)
- L'objet {{JSxRef("Function")}}
