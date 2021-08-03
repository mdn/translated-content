---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
tags:
  - Function
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/apply
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/apply
---
{{JSRef}}

La méthode **`apply()`** appelle une fonction en lui passant une valeur `this` et des `arguments` sous forme d'un tableau (ou d'un objet [semblable à un tableau](/fr/docs/Web/JavaScript/Guide/Objets_élémentaires_JavaScript#Manipuler_des_objets_semblables_aux_tableaux)).

> **Note :** Bien que la syntaxe de cette fonction ressemble à celle de {{jsxref("Function.call", "call()")}}, elle est différente car `call()` accepte **une liste d'arguments**, tandis que `apply()` accepte un **tableau d'arguments**.

> **Note :** Quand on utilise {{jsxref("undefined")}} ou {{jsxref("null")}} comme premier argument pour cette fonction, on peut obtenir un résultat similaire avec la [syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition).

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntaxe

    fun.apply(thisArg, [argsArray])

### Paramètres

- `thisArg`
  - : La valeur de `this` fournie pour l'appel à la fonction _`fun`_. On notera que, sous certaines conditions, `this` peut ne pas être la valeur exacte vue par la méthode : si la méthode est une fonction utilisée en mode {{jsxref("Strict_mode", "mode non-strict", "", 1)}}, {{jsxref("null")}} et {{jsxref("undefined")}} seront remplacées par l'objet global, et les valeurs primitives seront encapsulées. Cet argument n'est pas optionnel.
- `argsArray`
  - : Un objet semblable à un tableau qui définit les arguments avec lesquel _`fun`_ devrait être appelée, ou {{jsxref("null")}} ou {{jsxref("undefined")}} si aucun argument n'est passé à la fonction. Avec ECMAScript 5, ces arguments peuvent être représentés par un objet semblable un tableau. Voir ci-après pour plus d'informations sur [la compatibilité des navigateurs](#compat).

### Valeur de retour

Le résultat obtenu en appelant la fonction avec la valeur `this` indiquée et les arguments fournis.

## Description

Il est possible d'utiliser un objet `this` différent lors de l'appel à une fonction existante. `this` fait référence à l'objet courant, l'objet appelant. Avec `apply`, on peut écrire une méthode une seule fois et en hériter dans un autre objet, sans avoir à la réécrire dans le nouvel objet.

`apply` est similaire à {{jsxref("Function.call", "call()")}}, hormis pour le type d'arguments supporté. Il est possible d'utiliser un tableau à la place d'un ensemble de paramètres. Avec `apply`, il est également possible d'utiliser un littéral de tableau, par exemple, `fun.apply(this, ['manger', 'bananes'])`, ou un objet {{jsxref("Array")}}, par exemple, `fun.apply(this, new Array('manger', 'bananes'))`.

On peut aussi passer {{jsxref("Fonctions/arguments", "arguments ")}} en tant que paramètre `argsArray`. `arguments` étant une variable locale à la fonction. Celle-ci peut également être utilisée pour tous les arguments non spécifiés de l'objet appelé. Ainsi, il n'est pas nécessaire de connaître les arguments de l'objet appelé lors d'un appel à la méthode `apply`. `arguments` peut être utilisé pour passer tous les arguments à l'objet appelé. L'objet appelé gèrera alors la manipulation des arguments.

Depuis la cinquième édition d'ECMAScript, il est possible d'utiliser des objet semblables à des tableaux à la place. En pratique tout objet possédant une propriété `length` et une propriété entière comprise entre `[0..length[` est un objet semblable à un tableau. On peut ainsi, par exemple, utiliser un objet {{domxref("NodeList")}} ou un objet quelconque comme `{'length': 2, '0': 'manger', '1': 'bananes'}`.

> **Note :** Beaucoup de navigateurs, y compris Chrome 14 et Internet Explorer 9 n'acceptent pas encore un objet semblable à un tableau, ils déclencheront un exception.

## Exemples

### Utiliser `apply` pour chaîner des constructeurs

Il est possible d'utiliser `apply` afin de chaîner les {{jsxref("Opérateurs/L_opérateur_new", "constructeurs","",1)}} d'un objet, de façon sembable au chaînage utilisé en java. Dans l'exemple suivant, on crée une {{jsxref("Function")}} globale appelée `construct`, qui permet d'utiliser un objet de type `Array` associé à un constructeur au lieu d'une liste d'arguments.

```js
Function.prototype.construct = function (aArgs) {
  var nouvelObjet = Object.create(this.prototype);
  this.apply(nouvelObjet, aArgs);
  return nouvelObjet;
};
```

> **Note :** La méthode {{jsxref("Object.create()")}} utilisée ci-avant est relativement nouvelle. Pour une autre méthode qui utilise les `closure`, on pourra utiliser :
>
> ```js
> Function.prototype.construct = function(aArgs) {
>   var fConstructeur = this, fNouveauConstructeur = function() {
>     fConstructeur.apply(this, aArgs);
>   };
>   fNouveauConstructeur.prototype = fConstructeur.prototype;
>   return new fNouveauConstructeur();
> };
> ```

Exemple d'utilisation :

```js
function MonConstructeur () {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["propriété" + nProp] = arguments[nProp];
    }
}

var monTableau = [4, "Coucou monde !", false];
var monInstance = MonConstructeur.construct(monTableau);

console.log(monInstance.propriété1); // "Coucou monde !"
console.log(monInstance instanceof MonConstructeur); // "true"
console.log(monInstance.constructor); // "MonConstructeur"
```

> **Note :** On pourrait également utiliser {{jsxref("Object/__proto__", "Object.__proto__")}}
>
> ```js
> Function.prototype.construct = function (aArgs) {
>   var oNew = {};
>   oNew.__proto__ = this.prototype;
>   this.apply(oNew, aArgs);
>   return oNew;
> };
> ```
>
> ou encore le constructeur {{jsxref("Function")}} :
>
> ```js
> Function.prototype.construct = function (aArgs) {
>   var fNewConstr = new Function("");
>   fNewConstr.prototype = this.prototype;
>   var oNew = new fNewConstr();
>   this.apply(oNew, aArgs);
>   return oNew;
> };
> ```

> **Note :** Attention, cette méthode non-native `Function.construct` ne fonctionnera pas avec certains contructeurs natifs (tels que {{jsxref("Date", "Date")}}). Dans ce cas précis, on peut utiliser la méthode {{jsxref("Function.bind")}} (pour exemple, si on prend le tableau suivant `[2012, 11, 4]` utilisé sur le constructeur de l'objet `Date` : on peut écrire ceci : `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` – cependant cela reste une pratique à éviter si possible et à ne pas utiliser en dans un environnement de production).

### Utiliser `apply` et des fonctions natives

Un usage singulier de `apply` permet d'appeler des fonctions natives pour réaliser par exemple des tâches qui autrement auraient nécessité une boucle sur toutes les valeurs d'un tableau. Pour illustrer ce concept, on prend l'exemple de `Math.max`/`Math.min` qui permettent d'extraire la valeur maximum/minimale de notre tableau.

```js
/* min/max tableau de nombres */
var nombres = [5, 6, 2, 3, 7];

/* usage de Math.min/Math.max et de la méthode apply */
var max = Math.max.apply(null, nombres);
/* Equivalent à Math.max(nombres[0], ...)
  ou Math.max(5, 6, ..) */

var min = Math.min.apply(null, nombres);

/* vs. algorithme trivial avec une boucle */
max = -Infinity, min = +Infinity;

for (var i = 0; i < nombres.length; i++) {
  if (nombres[i] > max)
    max = nombres[i];
  if (nombres[i] < min)
    min = nombres[i];
}
```

Note : l'utilisation de `apply` peut provoquer l'atteinte du seuil limite du nombres d'arguments supporté par le moteur Javascript. Les conséquences de cette utilisation abusive (on évoque plus de 10000 arguments) peuvent varier selon les moteurs Javascript (JavaScript contient une limite en dur de [65536](https://bugs.webkit.org/show_bug.cgi?id=80797)), car une liberté subsiste quant à l'implémentation du moteur. Des moteurs lèveront une exception si le seuil est atteint. Il est donc préférable d'apporter une attention toute particulière au nombre d'arguments passés. (Illustrerons ce cas dans l'exemple suivant avec un moteur factice capable de ne gérer que 4 arguments au maximum (les limites natives sont, bien sûr, plus élevées), et reprenons les arguments de l'exemple précédent `5, 6, 2, 3` passés à la méthode `apply` plutôt que notre tableau entier.) Imaginons que notre tableau soit progressivement peuplé de milliers d'éléments, une stratégie spécifique devra être appliquée, par exemple en appliquant la méthode apply sur des portions du tableau:

```js
function minimumDuTableau(tab) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, longueur = tab.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null,
                                tab.slice(i, Math.min(i + QUANTUM, longueur)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minimumDuTableau([5, 6, 2, 3, 7]);
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                         | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.3.4.3', 'Function.prototype.apply')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-function.prototype.apply', 'Function.prototype.apply')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-function.prototype.apply', 'Function.prototype.apply')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Function.apply")}}

## Voir aussi

- L'objet {{jsxref("Fonctions/arguments", "arguments")}}
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Fonctions", "Les fonctions et portées de fonctions", "", 1)}}
- {{jsxref("Reflect.apply()")}}
- [La syntaxe de décomposition permettant d'exploser un tableau](/fr/docs/Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition)
