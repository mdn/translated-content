---
title: L'opérateur get
slug: Web/JavaScript/Reference/Functions/get
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Functions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/get
original_slug: Web/JavaScript/Reference/Fonctions/get
---
{{jsSidebar("Functions")}}

La syntaxe **`get`** permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété.

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## Syntaxe

```js
{get prop() { ... } }
{get [expression]() { ... } }
```

### Paramètres

- `prop`
  - : Le nom de la propriété à lier à la fonction.
- `expression`
  - : Avec ECMAScript 2015, il est également possible d'utiliser des expressions renvoyant un nom de propriété calculé pour le lier à une fonction.

## Description

Il est parfois utile de créer une propriété qui renvoie une valeur dynamique calculée, ou de ne pas avoir recours à l'appel explicite d'une méthode pour renvoyer le statut d'une variable interne. En JavaScript, il est possible de faire cela en utilisant un _accesseur_. Il n'est pas possible d'avoir simultanément un _accesseur_ assimilé à une propriété et d'avoir cette propriété initialisée à une valeur, mais il est possible d'utiliser un _accesseur_ et un {{jsxref("Fonctions/set","mutateur","",1)}} pour créer une sorte de pseudo-propriété.

On notera que l'opérateur `get` :

- peut être identifié par un nombre ou une chaîne de caractères
- ne doit pas posséder de paramètre (lire la page [Changement ES5 : les fonctions _d'accession_ et _de mutation_ littérales doivent avoir maintenant zéro ou un paramètre.](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) _(en anglais)_ pour plus d'informations)
- ne doit pas apparaître dans un littéral objet avec un autre `get` ou une autre propriété avec le même identifiant (les codes suivants : `{ get x() { }, get x() { } }` et `{ x: ..., get x() { } }` sont interdits).

Un _accesseur_ peut être supprimé grâce à l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}}.

## Exemples

### Définir un accesseur avec l'opérateur `get`

Ce code va créer une pseudo-propriété `dernier` de l'objet `o` qui va retourner la dernière entrée du tableau `o.journal`&nbsp;:

```js
var o = {
  get dernier() {
    if (this.journal.length > 0) {
      return this.journal[this.journal.length - 1];
    }
    else {
      return null;
    }
  },
  journal: ["toto","actu"]
}
console.log(o.dernier); // "actu"
```

Notez qu'essayer d'assigner à `dernier` une valeur ne le modifiera pas.

### Supprimer un accesseur avec l'opérateur `delete`

```js
delete o.dernier;
```

### Définir un accesseur sur des objets existants grâce à `defineProperty`

Afin d'ajouter un accesseur à un objet qui existe déjà, on peut utiliser la méthode {{jsxref("Object.defineProperty()")}}.

```js
var o = { a:0 }

Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });

console.log(o.b) // Utilise l'accesseur qui génère a + 1 (qui correspond à 1)
```

### Utiliser un nom de propriété calculé

```js
var expr = "toto";

var obj = {
  get [expr]() { return "truc"; }
};

console.log(obj.toto); // "truc"
```

### Accesseurs mémoïsés

Les accesseurs permettent de définir des propriétés sur un objet mais ils ne calculent pas la valeur de la propriété tant qu'il n'y a pas d'accès envers celle-ci. Un accesseur délègue le coût de calcul jusqu'au moment où la valeur est vraiment nécessaire (si cette dernière n'est jamais utilisée, cela ne coûte alors rien).

Une technique supplémentaire pour optimiser ou retarder le calcul d'une valeur d'une propriété et de la mettre en cache pour les accès ultérieurs consiste à utiliser **des accesseurs intelligents « [mémoïsés](https://fr.wikipedia.org/wiki/M%C3%A9mo%C3%AFsation) »**. La valeur est calculée lors du premier appel de l'accesseur puis est mise en cache afin que les appels ultérieurs renvoient la valeur en cache sans la recalculer. Cette méthode peut s'avérer utile dans plusieurs situations :

- Si le calcul de la valeur est coûteux (il consomme beaucoup de RAM ou de temps CPU, il crée de nouveaux _threads_, il utilise des fichiers distants, etc.).
- Si la valeur est utilisée plus tard ou, dans certains cas, n'est pas utilisée du tout.
- Si elle est utilisée plusieurs fois, il n'est pas nécessaire de la recalculer car sa valeur ne changera pas.

Cela signifie qu'un tel accesseur ne doit pas être utilisé si la valeur peut être modifiée au cours du temps. En effet, avec la définition qu'on vient de lui donner, un tel accesseur ne recalculera pas la valeur.

Dans l'exemple suivant, l'objet possède un accesseur en propriété propre. Lors de l'accès à la propriété, la propriété est retirée de l'objet puis réajoutée mais sous forme d'une propriété de donnée (et non d'un accesseur). Enfin, la valeur est renvoyée :

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById("bookmarked-notification-anchor");
},
```

Cet exemple est utilisé dans le code de Firefox, notamment dans le code du module XPCOMUtils.jsm qui définit la fonction [`defineLazyGetter()`](</fr/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()>).

### `get` ou `defineProperty` ?

Bien que le mot-clé `get` et la méthode {{jsxref("Object.defineProperty()")}} aient des résultats similaires, il subsiste une différence lorsqu'on utilise [les classes](/fr/docs/Web/JavaScript/Reference/Instructions/class).

Lorsqu'on utilise `get`, la propriété sera définie sur le prototype de l'objet. Avec {{jsxref("Object.defineProperty()")}}, la propriété sera définie sur l'instance à laquelle la méthode s'applique.

```js
class Exemple {
  get coucou() {
    return 'monde';
  }
}

const obj = new Exemple();
console.log(obj.coucou);
// "monde"
console.log(Object.getOwnPropertyDescriptor(obj, 'coucou'));
// undefined
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'coucou'));
// { configurable: true, enumerable: false, get: function get coucou() { return 'monde'; }, set: undefined }
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires                           |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------------- |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}                     | {{Spec2('ES5.1')}}     | Définition initiale                    |
| {{SpecName('ES2015', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ES2015')}}     | Ajout des noms de propriétés calculés. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                        |

## Compatibilité des navigateurs

{{Compat("javascript.functions.get")}}

## Voir aussi

- [`set`](/fr/docs/Web/JavaScript/Reference/Fonctions/set)
- {{jsxref("Opérateurs/L_opérateur_delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineGetter", "__defineGetter__")}}
- {{jsxref("Object.defineSetter", "__defineSetter__")}}
- [Définir des accesseurs et mutateurs](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters), un chapitre du Guide JavaScript
