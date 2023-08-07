---
title: Héritage et chaîne de prototype
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
---

{{jsSidebar("Advanced")}}

JavaScript peut prêter à confusion lorsqu'on est habitué à manipuler des langages de programmation manipulant les classes (tels que Java ou C++). En effet, JavaScript est un langage dynamique et ne possède pas de concept de classe à part entière (le mot-clé `class` a certes été ajouté avec ES2015 mais il s'agit uniquement de sucre syntaxique, JavaScript continue de reposer sur l'héritage prototypique).

En ce qui concerne l'héritage, JavaScript n'utilise qu'une seule structure : les objets. Chaque objet possède une propriété privée qui contient un lien vers un autre objet appelé le **prototype**. Ce prototype possède également son prototype et ainsi de suite, jusqu'à ce qu'un objet ait {{jsxref("null")}} comme prototype. Par définition, `null` ne possède pas de prototype et est ainsi le dernier maillon de la **chaîne de prototype**.

La majorité des objets JavaScript sont des instances de {{jsxref("Object")}} qui est l'avant dernier maillon de la chaîne de prototype.

Bien que cette confusion (entre classe et prototype) soit souvent avancée comme l'une des faiblesses de JavaScript, le modèle prototypique est plus puissant que le modèle classique et il est notamment possible de construire un modèle classique à partir d'un modèle prototypique.

## Héritage et chaîne de prototype

### Propriétés héritées

Les objets JavaScript sont des ensembles dynamiques de propriétés (les propriétés directement rattachées à un objet sont appelées **propriétés en propre (_own properties_)**). Les objets JavaScript possèdent également un lien vers un objet qui est leur prototype. Lorsqu'on tente d'accéder aux propriétés d'un objet, la propriété sera recherchée d'abord sur l'objet même, puis sur son prototype, puis sur le prototype du prototype et ainsi de suite jusqu'à ce qu'elle soit trouvée ou que la fin de la chaîne de prototype ait été atteinte.

> **Note :** Dans la spécification ECMAScript, on utilise la notation `unObjet.[[Prototype]]` pour faire référence au prototype de `unObjet`. Depuis ECMAScript 2015, on peut accéder à `[[Prototype]]` grâce aux accesseurs {{jsxref("Object.getPrototypeOf()")}} et {{jsxref("Object.setPrototypeOf()")}}. Cela est équivalent à la propriété JavaScript `__proto__` qui était non-standard avant ES2015 mais qui était de fait implémentée par la majorité des navigateurs.
>
> Cette propriété ne devrait pas être confondue avec la propriété `func.prototype` des fonctions qui définissent le `[[Prototype]]` à affecter aux instances des objets créés par cette fonction lorsqu'elle est utilisée comme constructeur. La propriété **`Object.prototype`** représente le prototype de {{jsxref("Object")}}.

Voici ce qui se produit lorsqu'on tente d'accéder à une propriété :

```js
// On commence par créer un objet o pour lequel la fonction f sera
// son constructeur et lui créera deux propriétés en propre
// a et b :
let f = function () {
  this.a = 1;
  this.b = 2;
};
let o = new f(); // {a: 1, b: 2}

// on ajoute des propriétés au prototype de la fonction
// f
f.prototype.b = 3;
f.prototype.c = 4;

// Note : on ne définit pas le prototype de f avec f.prototype = {b:3,c:4};
// car cela briserait la chaîne de prototype

// o.[[Prototype]] possède les propriétés b and c.
// o.[[Prototype]].[[Prototype]] est Object.prototype.
// Enfin, o.[[Prototype]].[[Prototype]].[[Prototype]] vaut null.
// On a alors atteint la fin de la chaîne de prototype car,
// par définition, null n'a pas de [[Prototype]].
// Ainsi, la chaîne complète est ici :
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// Existe-t-il une propriété 'a' en propre sur o ? Oui, elle vaut 1.

console.log(o.b); // 2
// Existe-t-il une propriété 'b' en propre sur o ? Oui, elle vaut 2.
// Le prototype possède également une propriété 'b' mais elle n'est pas
// utilisée.
// C'est ce qu'on appelle l'ombrage (shadowing en anglais)

console.log(o.c); // 4
// Existe-t-il une propriété 'c' en propre sur o ? Non, on vérifie le
// prototype.
// Existe-t-il une propriété 'c' en propre sur o.[[Prototype]] ?
// Oui, elle vaut 4.

console.log(o.d); // undefined
// Existe-t-il une propriété 'd' en propre sur o ? Non, on vérifie le
// prototype.
// Existe-t-il une propriété 'd' en propre sur o.[[Prototype]] ? Non, on vérifie le
// prototype.
// o.[[Prototype]].[[Prototype]] est Object.prototype et ne contient pas
// de propriété 'd' par défaut. On vérifie son prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] est null, on arrête la recherche
// aucune propriété n'est trouvée, le moteur renvoie undefined.
```

Lorsquon définit une propriété sur un objet, cela définit une propriété en propre. La seule exception se produit lorsqu'on définit [un accesseur et/ou un mutateur](</fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#Définir_des_accesseurs_et_des_mutateurs_(getters_et_setters)>) sur une propriété héritée.

### Méthodes héritées

JavaScript ne possède pas de méthodes au sens des langages de classe. En effet, en JavaScript, toute fonction associée à un objet est également une propriété. Une fonction héritée se comportera comme n'importe quelle autre propriété (y compris pour l'ombrage mentionné ci-avant où on pourra parler de surcharge).

Lorsqu'une fonction héritée est exécutée, la valeur de [`this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this) pointe vers l'objet hérité et non vers l'objet prototype qui possède la fonction comme propriété en propre.

```js
var o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// Quand on appelle o.m ici, 'this' fera référence à o

var p = Object.create(o);
// p est un objet qui hérite de o

p.a = 4; // on crée une propriété 'a' en propre sur p
console.log(p.m()); // 5
// lorsque p.m est appelée, 'this' fait référence à p.
// Ainsi quand p hérite de m via o,
// 'this.a' signifie p.a, soit la propriété 'a' de p
```

## Utiliser les prototypes avec JavaScript

Regardons un peu plus en détail ce qui se déroule en arrière-plan.

> **Note :** Pour tous les exemples suivants, nous vous invitons à ouvrir la "console" de votre navigateur pour y copier/coller/éditer les fragments de code. Pour savoir comment lancer cette console, vous pouvez lire la documentation des navigateurs : [Firefox](/fr/docs/Tools), [Chrome](https://developers.google.com/web/tools/chrome-devtools/), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide).

En JavaScript, comme mentionné ci-dessus, les fonctions peuvent avoir des propriétés. Toutes les fonctions ont une propriété spéciale intitulée `prototype`.

```js
function faireUnTruc() {}
console.log(faireUnTruc.prototype); // Object {...}
// Peu importe comment vous déclarez la fonction.
// une fonction en JavaScript aura toujours une propriété
// prototype par défaut.
var faireUnTruc = function () {};
console.log(faireUnTruc.prototype); // Object {...}
```

Comme mentionné avant, `faireUnTruc()` possède une propriété par défaut `prototype`. Après avoir exécuté ce code dans une console, la console devrait afficher un objet semblable à :

```js
{
    constructor: ƒ faireUnTruc(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

On peut ajouter des propriétés au prototype de `faireUnTruc()` comme suit :

```js
function faireUnTruc() {}
faireUnTruc.prototype.toto = "truc";
console.log(faireUnTruc.prototype);
```

Produira le résultat suivant :

```js
{
    toto: "truc",
    constructor: ƒ faireUnTruc(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

On peut utiliser l'opérateur `new` afin de créer une instance de `faireUnTruc()` basée sur ce prototype. Pour utiliser l'opérateur `new`, il suffira d'appeler la fonction et de précéder cet appel avec le mot-clé `new`. Lorsqu'on appelle une fonction avec un opérateur `new`, celle-ci renvoie un objet qui est une instance de la fonction. On peut ensuite ajouter des propriétés sur cet objet.

Voyons le code qui suit :

```js
function faireUnTruc() {}
faireUnTruc.prototype.toto = "truc"; // on ajoute une propriété au prototype
var uneInstance = new faireUnTruc();
uneInstance.prop = "une valeur"; // on ajoute une propriété sur l'objet
console.log(uneInstance);
```

Exécuté, ce code produira le résultat suivant dans la console :

```js
{
    prop: "une valeur",
    __proto__: {
        toto: "truc",
        constructor: ƒ faireUnTruc(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

Comme nous l'avons vu avant, la valeur de `__proto__` pour `uneInstance` est `faireUnTruc.prototype`. Mais quel est l'intérêt ? Lorsqu'on accède à une propriété de `uneInstance`, le moteur contrôle d'abord si `uneInstance` possède cette propriété.

Si `uneInstance` ne possède pas cette propriété, le moteur contrôlera la propriété sur la propriété `__proto__` de `uneInstance` (c'est-à-dire `faireUnTruc.prototype`). Si la propriété `__proto__` de `uneInstance` possède la propriété qu'on recherche, ce sera celle-ci qui sera utilisée.

Si `__proto__` de `unTruc` ne possède pas la propriété recherchée, le moteur contrôle la propriété `__proto__` de la propriété `__proto__` de `uneInstance`. Par défaut, la propriété `__proto__` de n'importe quelle propriété `prototype` d'une fonction est `window.Object.prototype`. Ainsi, la propriété `__proto__` de la propriété `__proto__` de `uneInstance` (c'est-à-dire `__proto__` de `faireUnTruc.prototype` (c'est-à-dire. `Object.prototype`)) est contrôlée pour vérifier si la propriété y est présente.

Si la propriété n'est pas trouvée sur la propriété `__proto__` de la propriété `__proto__` de `uneInstance`, c'est la propriété `__proto__` de la propriété `__proto__` de la propriété `__proto__` de `uneInstance` qui est contrôlée. Cependant il y a un problème car la propriété `__proto__` de la propriété `__proto__` de la propriété `__proto__` de `unTruc` n'existe pas. Autrement dit, toute la chaîne de prototype a été parcouru et on ne peut pas remonter d'un cran sur un autre `__proto__` et le moteur peut conclure que la propriété n'existe pas pour cet objet et renvoyer `undefined`.

Regardons ce qui se produit dans la console avec un peu de code :

```js
function faireUnTruc() {}
faireUnTruc.prototype.toto = "truc";
var uneInstance = new faireUnTruc();
uneInstance.prop = "une valeur";
console.log("uneInstance.prop: " + uneInstance.prop);
console.log("uneInstance.toto: " + uneInstance.toto);
console.log("faireUnTruc.prop: " + faireUnTruc.prop);
console.log("faireUnTruc.toto: " + faireUnTruc.toto);
console.log("faireUnTruc.prototype.prop: " + faireUnTruc.prototype.prop);
console.log("faireUnTruc.prototype.toto:  " + faireUnTruc.prototype.toto);
```

Le résultat est le suivant :

```js
uneInstance.prop: une valeur
uneInstance.toto: truc
faireUnTruc.prop: undefined
faireUnTruc.toto: undefined
faireUnTruc.prototype.prop: undefined
faireUnTruc.prototype.toto: truc
```

## Les différentes façons de créer des objets et les impacts sur la chaîne de prototype

### Objets créés avec les raccourcis syntaxiques (littéraux)

```js
var o = { a: 1 };

// Le nouvel objet possède Object.prototype comme [[Prototype]]
// o ne possède pas de propriété 'hasOwnProperty' en propre
// hasOwnProperty est une propriété en propre de Object.prototype.
// o hérite de hasOwnProperty via Object.prototype
// Object.prototype possède null comme prototype.
// o ---> Object.prototype ---> null

var b = ["coucou", "ça va", "?"];

// Les tableaux (Array) héritent de Array.prototype
// (qui possède les méthodes indexOf, forEach, etc.)
// La chaîne de prototype est donc :
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Les fonctions héritent de Function.prototype
// (qui possède les méthodes call, bind, etc.)
// La chaîne de prototype est donc
// f ---> Function.prototype ---> Object.prototype ---> null
```

### Objets créés avec un constructeur

En JavaScript, un constructeur est _juste_ une fonction que l'on invoque avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new).

```js
function Graphe() {
  this.sommets = [];
  this.arêtes = [];
}

Graphe.prototype = {
  ajoutSommet: function (v) {
    this.sommets.push(v);
  },
};

var g = new Graphe();
// g est un objet qui possède les propriétés 'sommets' and 'arêtes' en propre.
// g.[[Prototype]] est la valeur de Graphe.prototype lorsque "new Graphe()" est exécuté.
```

### Objets créés avec `Object.create()`

ECMAScript 5 a introduit une nouvelle méthode : {{jsxref("Object.create()")}}. Appeler cette méthode crée un nouvel objet et le prototype de cet objet est le premier argument de cette fonction :

```js
var a = { a: 1 };
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (héritée)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, car d n'hérite pas de Object.prototype
```

#### Suppression des propriétés avec `delete`

L'opérateur [`delete`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete) permet de supprimer une propriété directement rattachée à un objet. En revanche, il n'empêchera pas l'exploration de la chaîne de prototype :

```js
let a = { toto: 1 };
let b = Object.create(a);

console.log(b.toto); // Affiche 1 car c'est une propriété disponible via le prototype
b.toto = 5;
console.log(b.toto); // Affiche 5, désormais cette propriété existe sur l'objet

delete b.toto;
console.log(b.toto); // Affiche 1 : la propriété n'est plus disponible sur l'objet mais
// on peut toujours la récupérer via le prototype
```

### Objets créés avec le mot-clé `class`

ECMAScript 2015 introduit plusieurs mots-clés destinés à créer du sucre syntaxique pour manipuler des [classes](/fr/docs/Web/JavaScript/Reference/Classes). Ces mots-clés sont {{jsxref("Instructions/class", "class")}}, {{jsxref("Classes/constructor", "constructor")}}, {{jsxref("Classes/static", "static")}}, {{jsxref("Classes/extends", "extends")}} et {{jsxref("Opérateurs/super", "super")}}.

```js
"use strict";

class Polygone {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}

class Carré extends Polygone {
  constructor(longueurCôté) {
    super(longueurCôté, longueurCôté);
  }
  get aire() {
    return this.hauteur * this.largeur;
  }
  set longueurCôté(nouvelleLongueur) {
    this.hauteur = nouvelleLongueur;
    this.largeur = nouvelleLongueur;
  }
}

var carré = new Carré(2);
```

### Performance

Le temps de recherche des propriétés sera plus élevé si ces propriétés sont situées plus loin dans la chaîne de prototype. Tenter d'accéder à ces propriétés éloignées pourra avoir un impact négatif sur les performances. De plus, tenter d'accéder à des propriétés inexistantes entraînera toujours le parcours de l'ensemble de la chaîne de prototype.

Lorsqu'on parcourt les propriétés d'un objet, **toutes** les propriétés énumérables situées sur la chaîne de prototype seront parcourues. Pour vérifier si un objet possède une propriété en propre plus que via sa chaîne de prototype, on devra utiliser la méthode [`hasOwnProperty()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty) qui est héritée grâce à `Object.prototype`. Prenons un exemple concret avec le cas du graphe traité dans un exemple précédent :

```js
console.log(g.hasOwnProperty("arêtes"));
// true

console.log(g.hasOwnProperty("nononon"));
// false

console.log(g.hasOwnProperty("ajoutSommet"));
// false

console.log(g.__proto__.hasOwnProperty("ajoutSommet"));
// true
```

> **Note :** Tester si une propriété vaut {{jsxref("undefined")}} ne suffit pas à vérifier la présence de la propriété sur un objet : une propriété peut très bien exister sur un objet mais valoir `undefined`.

### Mauvaise pratique : étendre les prototypes natifs

On peut parfois voir du code qui étend `Object.prototype` ou l'un des prototypes natifs.

Cette technique est intitulée _monkey patching_ et brise l'encapsulation. Bien qu'elle soit utilisée par certains _frameworks_, il n'existe pas de raison suffisante pour étendre les objets natifs avec des fonctionnalités non-standard.

La **seule** raison qui peut prévaloir pour l'extension de prototypes natifs est l'ajout de fonctionnalités JavaScript apparues avec les nouvelles versions des spécifications et moteurs afin d'en disposer dans de plus anciens environnements.

### Résumé des méthodes pour étendre la chaîne de prototype

Voici un tableau avec les quatre outils qui permettent d'étendre une chaîne de prototypes avec chacun leurs avantages et leurs inconvénients. Tous les exemples mentionnés permettent de créer le même objet `inst` (et affichant donc le même résultat dans la console) mais de façon différente.

<table class="standard-table">
  <tbody>
    <tr>
      <td style="width: 1%">Nom</td>
      <td>Exemples</td>
      <td>Avantages</td>
      <td style="vertical-align: top; width: 60%">Inconvénients</td>
    </tr>
    <tr>
      <td>Initialisation</td>
      <td>
        <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = new toto;
proto.truc_prop = "truc val";
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre
        >
      </td>
      <td style="vertical-align: top">
        Prise en charge par l'ensemble des navigateurs. Cette méthode est très
        rapide, standard et facilement optimisable.
      </td>
      <td>
        <p>
          Afin d'utiliser cette méthode, il faut que la fonction ait été
          initialisée. Pendant cette initialisation, le constructeur peut
          enregistrer des informations uniques qui doivent être générées pour
          chaque objet.
        </p>
        <p>
          Toutefois, il est possible que ces informations uniques ne soient
          générées qu'une seule fois.
        </p>
        <p>
          De plus, l'initialisation du constructeur peut ajouter des méthodes
          non souhaitées sur l'objet.
        </p>
        <p>Cela dit, ces problèmes ne se révèlent que rarement.</p>
      </td>
    </tr>
    <tr>
      <td><code>Object.create()</code></td>
      <td style="vertical-align: top">
        <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = Object.create(
  toto.prototype
);
proto.truc_prop = "truc val";
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre
        >
        <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = Object.create(
  toto.prototype,
  {
    truc_prop: {
      value: "truc val"
    }
  }
);
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop)</pre
        >
      </td>
      <td>
        Prise en charge par la majorité des navigateurs actuels. Elle permet de
        définir directement <code>__proto__</code> en une seule fois et le
        navigateur peut mieux optimiser l'objet. Elle permet aussi de créer des
        objets sans prototype avec <code>Object.create(null)</code>.
      </td>
      <td style="vertical-align: top">
        <p>
          Cette méthode n'est pas prise en charge par IE8 et les versions
          antérieures. Toutefois, Microsoft ayant mis un terme au support des
          systèmes qui utilisent ces navigateurs, ce ne devrait pas être un
          problème pour la plupart des navigation.
        </p>
        <p>
          De plus, la lenteur de l'initialisation de l'objet peut être causer
          des soucis de performances lorsqu'on utilise un deuxième argument car
          descripteur de propriété possède un objet rattaché. Lorsqu'on gère des
          centaines de milliers de descripteurs, cela peut entraîner un certain
          <em>lag</em>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>Object.setPrototypeOf()</code></p>
      </td>
      <td>
        <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = {
  truc_prop: "truc val"
};
Object.setPrototypeOf(
  proto, toto.prototype
);
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre
        >
        <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto;
proto=Object.setPrototypeOf(
  { truc_prop: "truc val" },
  toto.prototype
);
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop)</pre
        >
      </td>
      <td style="vertical-align: top">
        Prise en charge par l'ensemble des navigateurs actuels. Elle permet de
        manipuler dynamiquement le prototype d'un objet et également de
        rattacher un prototype à un objet qui n'aurait pas de prototype.
      </td>
      <td>
        Cette méthode devrait être dépréciée et possède des performances
        faibles. En effet, les moteurs tenteront d'optimiser la connaissance de
        la structure du prototype et cette méthode viendra à l'enconte de ces
        hypothèses et certains navigateurs pourront même recompiler le code pour
        le faire fonctionner selon les spécifications. Cette méthode n'est pas
        prise en charge par IE8 et les versions antérieures.
      </td>
    </tr>
    <tr>
      <td><code>__proto__</code></td>
      <td style="vertical-align: top">
        <pre class="brush: js">
function toto(){}
toto.prototype = {
  toto_prop: "toto val"
};
function truc(){}
var proto = {
  truc_prop: "truc val",
  __proto__: toto.prototype
};
truc.prototype = proto;
var inst = new truc();
console.log(inst.toto_prop);
console.log(inst.truc_prop);
</pre
        >
        <pre class="brush: js">
var inst = {
  __proto__: {
    truc_prop: "truc val",
    __proto__: {
      toto_prop: "toto val",
      __proto__: Object.prototype
    }
  }
};
console.log(inst.toto_prop);
console.log(inst.truc_prop)</pre
        >
      </td>
      <td>
        Prise en charge par l'ensemble des navigateurs actuels (y compris IE11
        et ultérieurs). Défiinir __proto__ sur quelque chose qui n'est pas un
        objet échouera silencieusement.
      </td>
      <td>
        Cette méthode est dépréciée et n'est pas performante car les moteurs
        tentent d'optimiser les prototypes. Aussi, le modifier ainsi
        dynamiquement bloque ces optimisations et peut causer la recompilation
        du code pour qu'il fonctionne selon les spécifications. Cette méthode
        n'est pas prise en charge par IE10 et les versions antérieures.
      </td>
    </tr>
  </tbody>
</table>

## `prototype` et `Object.getPrototypeOf()`

JavaScript peut prêter à confusion pour les développeurs utilisant Java ou C++. JavaScript est un langage dynamique et les structures peuvent évoluer lors de l'exécution.

Vous avez peut-être remarqué que la fonction `A` possède une propriété spéciale intitulée `prototype`. Cette propriété spéciale fonctionne avec l'opérateur `new`. Elle permet de copier la référence l'objet prototype sur la propriété interne `[[Prototype]]` de la nouvelle instance créée. Ainsi, avec `var a1 = new A()`, le moteur JavaScript définira `a1.[[Prototype]] = A.prototype`. Quand on tente d'accéder à une des propriétés de l'instance, JavaScript vérifie la présence sur l'instance puis analyse son prototype `[[Prototype]]`. Cela signifie que tout ce qui est défini sur `prototype` est effectivement partagé par l'ensemble des instances et on peut même modifier `prototype` en cours de route afin de modifier indirectement l'ensemble des instances.

Dans l'exemple précédent, si on avait eu `var a1 = new A(); var a2 = new A();` alors `a1.faireUnTruc` aurait fait référence à `Object.getPrototypeOf(a1).faireUntruc` qui est identique à `A.prototype.faireUnTruc`. Autrement dit `Object.getPrototypeOf(a1).faireUnTruc == Object.getPrototypeOf(a2).faireUnTruc == A.prototype.faireUnTruc`.

Autrement dit `prototype` peut être utilisé pour les types et `Object.getPrototypeOf()` pour les instances.

`[[Prototype]]` est analysé de façon récursive. Ainsi, `a1.faireUnTruc` correspondra à chercher `Object.getPrototypeOf(a1).faireUnTruc` puis `Object.getPrototypeOf(Object.getPrototypeOf(a1)).faireUnTruc` etc., jusqu'à ce qu'elle soit trouvée ou que `Object.getPrototypeOf` renvoie `null`.

Ainsi, quand on appelle :

```js
var o = new Toto();
```

Le moteur JavaScript effectue les étapes suivantes :

```js
var o = new Object();
o.[[Prototype]] = Toto.prototype;
Toto.call(o);
```

(ou quelque chose qui y ressemble) et si on écrit ensuite :

```js
o.unePropriété;
```

Le moteur vérifie si `o` possède une propriété `unePropriété` en propre. Si ce n'est pas le cas, il vérifie `Object.getPrototypeOf(o).unePropriété` et ainsi de suite.

## Conclusion

Il est essentiel de comprendre le modèle d'héritage prototypique avant d'écrire du code complexe qui repose sur ces notions. Il est également préférable d'avoir une idée de la longueur de la chaîne de prototype utilisée pour les différents objets et de fragmenter cette chaîne si besoin afin d'éviter des écueils de performances. Enfin, on veillera à ne pas étendre les prototypes natifs sauf afin d'émuler des nouvelles fonctionnalités qui ne seraient pas disponibles dans l'environnement utilisé.
