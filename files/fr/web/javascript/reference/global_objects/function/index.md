---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Constructor
  - Function
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function
original_slug: Web/JavaScript/Reference/Objets_globaux/Function
---
{{JSRef}}

Le constructeur **`Function`** crée un nouvel _objet_ `Function`. En JavaScript, chaque fonction est un objet `Function`.

Appeler ce constructeur permet de créer des fonctions dynamiquement mais cette méthode souffre de défauts équivalents à {{jsxref("eval")}} en termes de sécurité et de performance. Toutefois, à la différence d'`eval`, le constructeur `Function` permet d'exécuter du code dans la portée globale.

{{EmbedInteractiveExample("pages/js/function-constructor.html")}}

## Syntaxe

    new Function ([arg1[, arg2[, ...argN]],] corpsFonction)

### Paramètres

- `arg1, arg2, ... argN`
  - : Les noms utilisés par la fonction pour les arguments formellement déclarés. Chacun doit être une chaîne de caractères correspondant à un identifiant JavaScript valide (ou une liste de telles chaînes séparées par des virgules). Par exemple : "`x`", "`uneValeur`", ou "`a,b`".
- `corpsFonction`
  - : Une chaîne de caractères qui contient les instructions JavaScript définissant la fonction.

## Description

Les objets `Function` créés avec le constructeur `Function` sont analysés quand la fonction est créée. Ceci est moins efficace que de déclarer une fonction grâce à une {{jsxref("Opérateurs/L_opérateur_function","expression de fonction","",1)}} ou à une instruction {{jsxref("Instructions/function","function")}} car celles crées de cette façon sont analysées avec le reste du code.

Tous les arguments passés à la fonction seront traités avec les noms des identifiants des paramètres de la fonction à créer, dans le même ordre dans lequel ils ont été passés. Si un argument n'est pas passé, la valeur du paramètre dans la fonction sera {{jsxref("undefined")}}.

Appeler le constructeur `Function` comme une fonction (c'est-à-dire sans utiliser l'opérateur {{jsxref("Opérateurs/L_opérateur_new","new")}}) a le même effet que quand il est appelé comme constructeur.

## Propriétés et méthodes de `Function`

L'objet global `Function` ne possède pas de méthodes ou de propriétés propres. Cependant, il est lui-même une fonction et hérite de certaines méthodes et propriétés depuis {{jsxref("Function.prototype")}} grâce à la chaîne de prototype.

## Le prototype de `Function`

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/prototype', 'Propri.C3.A9t.C3.A9s')}}

### Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/prototype', 'M.C3.A9thodes')}}

## Les instances de `Function`

Les instances de `Function` héritent des méthodes et propriétés de {{jsxref("Function.prototype")}}. Comme pour les autres constructeurs, il est possible de modifier le prototype du constructeur afin d'apporter des modifications à toutes les instances de `Function`.

## Exemple

### Définir des arguments avec le constructeur `Function`

Le code suivant permet de créer un objet `Function` qui utilise deux arguments :

```js
// Cet exemple peut être lancé dans votre console JavaScript

// On crée un fonction qui prend deux arguments
// et qui en renvoie la somme
var ajoute = new Function('a', 'b', 'return a + b');

// On appelle la fonction
ajoute(2, 6);
// > 8
```

Les arguments "`a`" et "`b`" sont les noms des arguments formellement déclarés utilisés dans le corps de la fonction : "`return a + b`".

### Différence entre le constructeur `Function` et les déclarations de fonction

Les fonctions créées avec le constructeur {{jsxref("Function()")}} ne créent pas de fermetures liées au contexte de leur création. Ainsi, lorsqu'elles sont exécutées, elles ne peuvent accéder qu'aux variables globales et à leurs propres valeurs locales. Elles ne peuvent pas accéder aux variables de la portée dans laquelle le constructeur `Function` a été invoqué. Le comportement est différent de celui qu'on obtient avec {{jsxref("eval")}} avec du code contenant une expression de fonction.

```js
var x = 10;

function créerFonction1() {
  var x = 20;
  return new Function("return x;"); // ici |x| fait référence au |x| global
}

function créerFonction2() {
  var x = 20;
  function f() {
    return x; // ici |x| fait référence au |x| local juste avant
  }
  return f;
}

var f1 = créerFonction1();
console.log(f1());          // 10
var f2 = créerFonction2();
console.log(f2());          // 20
```

Bien que ce code fonctionne dans un navigateur web, l'appel à `f1()` provoquera une {{jsxref("ReferenceError")}} dans Node.js car `x` ne sera pas trouvé. En effet, pour Node, la portée de plus haut niveau n'est pas la portée globale et `x` est ici local à la fonction.

## Spécifications

| Spécification                                                                    | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.3', 'Function')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-function-objects', 'Function')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-function-objects', 'Function')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Function")}}

## Voir aussi

- {{jsxref("Fonctions", "Les fonctions","",1)}}
- L'instruction {{jsxref("Instructions/function", "function")}}
- L'expression {{jsxref("Opérateurs/L_opérateur_function", "function")}}
- L'instruction {{jsxref("Instructions/function*", "function*")}}
- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
