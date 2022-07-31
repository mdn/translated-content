---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
tags:
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/create
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/create
---
{{JSRef}}

La méthode **`Object.create()`** crée un nouvel objet avec un prototype donné et des propriétés données.

{{EmbedInteractiveExample("pages/js/object-create.html")}}

## Syntaxe

```js
Object.create(proto)
Object.create(proto, objetPropriétés)
```

### Paramètres

- `proto`
  - : L'objet qui sera le prototype du nouvel objet créé.
- `objetPropriétés`
  - : Paramètre optionnel. S'il est fourni et qu'il ne vaut pas {{jsxref("undefined")}}, il sera utilisé comme un objet dont les propriétés propres (celles qui ne sont pas héritées par la chaîne de prototypes) et énumérables définiront des descripteurs pour les propriétés à ajouter au nouvel objet, avec les mêmes noms. Ces propriétés correspondent au deuxième argument de {{jsxref("Object.defineProperties()")}}.

### Valeur de retour

Un nouvel objet qui dispose du prototype et des propriétés indiquées.

### Exceptions

Cette méthode lève une exception {{jsxref("TypeError")}} si le paramètre `objetPropriétés` vaut {{jsxref("null")}} ou s'il ne décrit pas des propriétés d'un objet.

## Exemples

### L'héritage classique avec `Object.create()`

Dans l'exemple ci-dessous, on utilise `Object.create()` afin de réaliser un héritage de classe. Ce modèle ne supporte que l'héritage unique (un objet hérite directement uniquement d'un autre objet) car JavaScript ne gère pas l'héritage multiple.

```js
// Forme, la classe parente
function Forme() {
  this.x = 0;
  this.y = 0;
}

// Méthode de la classe parente
Forme.prototype.déplacer = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Forme déplacée.');
};

// Rectangle - classe fille
function Rectangle() {
  // on appelle le constructeur parent
  Forme.call(this);
}

// La classe fille surcharge la classe parente
Rectangle.prototype = Object.create(Forme.prototype);

// Si on ne définit pas le constructeur avec Rectangle, il récupèrera le constructeur
// Forme (le parent).
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('instance de Rectangle ? ', (rect instanceof Rectangle));
// true
console.log('une instance de Forme ? ', (rect instanceof Forme));
 // true
rect.déplacer(1, 1);
// Affiche 'Forme déplacée.'
```

Si on souhaite hériter de plusieurs objets, on peut utiliser des _mixins_.

```js
function MaClasse() {
  ClasseParente1.call(this);
  ClasseParente2.call(this);
}

MaClasse.prototype = Object.create(ClasseParente1.prototype); // héritage d'une classe
Object.assign(MaClasse.prototype, ClasseParente2.prototype); // mixin pour une autre
MaClasse.prototype.constructor = MaClasse; // On réaffecte le constructeur

MaClasse.prototype.maMéthode = function() {
  // faire quelque chose
};
```

Ici, la méthode {{jsxref("Object.assign()")}} copie les propriétés du prototype de la classe parente (`ClassParente2`) sur le prototype de la classe fille (`MaClasse`), les rendant disponibles pour toutes les instances de `MaClasse`. `Object.assign()` a été introduit avec ES2015 et [une prothèse d'émulation (polyfill)](</fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/assign#Prothèse_d'émulation_(polyfill)>) est disponible. Si le support des navigateurs plus anciens est nécessaire, les méthodes [`jQuery.extend()`](https://api.jquery.com/jQuery.extend/) ou [`_.assign()`](https://lodash.com/docs/#assign) (Lodash) peuvent être utilisées.

### Utiliser l'argument `objetPropriétés` avec `Object.create()`

```js
var o;

// on crée un objet avec null
// comme prototype
o = Object.create(null);


o = {};
// est équivalent à :
o = Object.create(Object.prototype);


// Exemple où on crée un objet avec quelques propriétés
// (On voit ici que le second paramètres fait correspondre les clés
// avec des descripteurs de propriétés.)
o = Object.create(Object.prototype, {
  // toto est une propriété de donnée
  toto: { writable: true, configurable: true, value: 'hello' },
  // truc est une propriété d'accesseur/mutateur
  truc: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) { console.log('Définir `o.truc` à', value); }
/* avec les accesseurs ES2015 on aura :
    get() { return 10; },
    set(value) { console.log('Définir `o.truc` à', value); } */
  }
});


function Constructeur() {}
o = new Constructeur();
// est équivalent à :
o = Object.create(Constructeur.prototype);
// Bien entendu, si la fonction Constructeur
// possède des instructions pour l'initialisation,
// Object.create() ne pourra pas le reproduire


// on crée un nouvel objet dont le prototype est
// un nouvel objet vide et on y ajoute une propriété
// 'p' qui vaut 42
o = Object.create({}, { p: { value: 42 } });

// par défaut, les propriétés ne sont PAS
// écrivables, énumérables ou configurables
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// Pour définir une propriété selon ES3
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

// Équivalent à
// o2 = Object.create({p: 42});
```

## Spécifications

| Spécification                                                                        | État                         | Commentaires                                            |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.5', 'Object.create')}}             | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8.5. |
| {{SpecName('ES2015', '#sec-object.create', 'Object.create')}}     | {{Spec2('ES2015')}}     |                                                         |
| {{SpecName('ESDraft', '#sec-object.create', 'Object.create')}} | {{Spec2('ESDraft')}} |                                                         |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.create")}}

## Voir aussi

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- Le billet de John Resig sur [`getPrototypeOf()`](https://ejohn.org/blog/objectgetprototypeof/) (en anglais)
