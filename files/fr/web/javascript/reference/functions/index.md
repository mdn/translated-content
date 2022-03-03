---
title: Fonctions et portée des fonctions
slug: Web/JavaScript/Reference/Functions
tags:
  - Function
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions
original_slug: Web/JavaScript/Reference/Fonctions
---
{{jsSidebar("Functions")}}

De manière générale, une fonction est un « sous-programme » qui peut être appelé par du code extérieur à la fonction (ou du code interne dans le cas d'une récursion). Comme le programme, une fonction est composée d'une suite d'instructions qui forment le _corps de la fonction_. Il est parfois possible de _passer_ des valeurs à une fonction et une fonction peut éventuellement _retourner_ (ou _renvoyer_) une valeur.

En JavaScript, les fonctions sont des objets de première classe. Cela signifie qu'elles peuvent être manipulées et échangées, qu'elles peuvent avoir des propriétés et des méthodes, comme tous les autres objets JavaScript. Les fonctions sont des objets {{jsxref("Objets_globaux/Function","Function")}}.

Pour plus d'informations et d'exemples, on pourra également consulter le [chapitre du Guide JavaScript sur les fonctions.](/fr/docs/Web/JavaScript/Guide/Fonctions)

## Description

Toute fonction JavaScript est en fait un objet `Function`. Voir la page {{jsxref("Objets_globaux/Function","Function")}} pour des informations sur les propriétés et les méthodes de ces objets.

Afin de renvoyer une valeur, la fonction doit comporter une instruction {{jsxref("Instructions/return","return")}} qui définit la valeur à renvoyer (sauf dans le cas d'un [constructeur](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/constructor) qui a été appelé avec le mot-clé {{jsxref("Opérateurs/L_opérateur_new")}}). Une fonction qui ne renvoie pas de valeur retourne {{jsxref("undefined")}}.

Les paramètres donnés lors de l'appel d'une fonction sont appelés les _arguments_ de la fonction. Les arguments sont passés _par valeur_ (_by value_ en anglais). Si la fonction modifie la valeur d'un argument, ce changement ne se répercute pas en dehors de la fonction. Il existe cependant les _références_ d'objets qui sont aussi des valeurs mais qui possèdent la particularité suivante : si la fonction modifie les propriété de l'objet de la référence, ce(s) changement(s) seront perceptibles en dehors de la fonction. Prenons l'exemple suivant :

```js
 /* Déclaration de la fonction 'maFonction' */
 function maFonction(monObjet)
 {
   monObjet.marque = "Toyota";
 }

 /*
  * Déclaration de la variable 'mavoiture';
  * création et initialisation d'un nouvel objet;
  * assigner une référence à 'mavoiture'
  */
 var mavoiture = {
   marque: "Honda",
   modele: "Accord",
   annee: 1998
 };

 /* Affiche 'Honda' */
 console.log(mavoiture.marque);

 /* Passer la référence de l'objet à la fonction */
 maFonction(mavoiture);

 /*
  * Affiche 'Toyota' pour valeur de la propriété 'marque'
  * de l'objet. C'est ce que la fonction a changé.
  */
 console.log(mavoiture.marque);
```

Le mot-clé [`this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this) ne fait pas référence à la fonction en cours d'exécution. Il faut donc faire référence aux objets `Function` par leurs noms, et ce même au sein du corps de la fonction.

## Définir des fonctions

Il y a plusieurs façons de définir des fonctions

### Déclarer une fonction (l'instruction `function`)

Il existe une syntaxe spécifique pour la déclaration des fonctions (vous pouvez consulter la page de l'instruction {{jsxref("Instructions/function","function")}} pour plus de détails) :

    function nom([param[, param[, ... param]]]) {
       instructions
    }

- `nom`
  - : Le nom de la fonction.
- `param`
  - : Le nom d'un argument à passer à la fonction (une fonction pouvant avoir jusqu'à 255 arguments).
- `instructions`
  - : Les instructions qui forment le corps de la fonction.

### Utiliser une expression de fonction (l'expression `function`)

L'expression d'une fonction se fait d'une façon similaire à la déclaration (veuillez consulter la page de l'expression {{jsxref("Opérateurs/L_opérateur_function","function")}} pour plus d'informations) :

    function [nom]([param] [, param] [..., param]) {
       instructions
    }

- `nom`
  - : Le nom de la fonction. Il est facultatif, auquel cas la fonction devient une fonction anonyme.
- `param`
  - : Le nom d'un argument à passer à la fonction.
- `instructions`
  - : Les instructions qui forment le corps de la fonction.

Voici un exemple d'expression de fonction **anonyme** (il n'y a pas de nom utilisé) :

```js
var maFonction = function() {
  /* instructions */
}
```

Il est également possible de fournir un nom lors de la définition afin de créer une expression de fonction **nommée** :

```js
var maFonction = function fonctionNommée(){
  /* instructions */
}
```

L'un des bénéfices d'utiliser une expression de fonction nommée est que son nom sera utilisé dans la pile d'appel lors qu'on aura une erreur. Avec le nom de la fonction, il sera plus facile de repérer l'origine de l'erreur.

Comme on peut le voir, ces deux derniers exemples ne commencent pas avec le mot-clé `function`. Les instructions qui déclarent des fonctions mais qui ne commencent pas avec `function` sont des expressions de fonction.

Lorsque les fonctions sont utilisées une unique fois, on peut utiliser une [« expression de fonction immédiatement invoquée » (ou plus généralement appelée _IIFE_ pour _Immediately Invokable Function Expression_ en anglais)](/fr/docs/Glossaire/IIFE).

```js
(function() {
    /* instruction */
})();
```

Les _IIFE_ sont des expressions de fonction appelées dès que la fonction est déclarée.

### Utiliser une déclaration de fonction génératrice (l'instruction `function*`)

Il existe une syntaxe spéciale pour déclarer des générateurs (voir la page sur l'instruction {{jsxref('Instructions/function*', 'function*')}} pour plus de détails) :

    function* nom([param[, param[, ... param]]]) {
       instructions
    }

- `nom`
  - : Le nom de la fonction.
- `param`
  - : Le nom d'un argument à passer à la fonction.
- `instructions`
  - : Les instructions qui forment le corps de la fonction.

### Utiliser une expression de générateur (l'expression `function*`)

Une expression de générateur est similaire à une déclaration de fonction génératrice et possède presque la même syntaxe (pour plus de détails, consulter la page sur l'expression {{jsxref('Opérateurs/function*', 'function*')}}) :

    function* [nom]([param[, param[, ... param]]]) {
       instructions
    }

- `nom`
  - : Le nom de la fonction. Ce paramètre peut être omis, auquel cas la fonction sera une fonction anonyme.
- `param`
  - : Le nom d'un argument à passer à la fonction.
- `instructions`
  - : Les instructions qui composent le corps de la fonction.

### Utiliser une expression de fonction fléchée (=>)

Une expression de fonction fléchée possède une syntaxe plus courte et est liée, de façon lexicale, à sa valeur (voir la page sur les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) pour plus de détails) :

    ([param[, param]]) => {
       instructions
    }

    param => expression

- `param`
  - : Le nom d'un argument. S'il n'y a pas d'arguments, cela doit être indiqué par `()`.  S'il y a un seul argument, les parenthèses ne sont pas obligatoires (par exemple :  `toto => 1`).
- `instructions` ou `expression`
  - : S'il y a plusieurs instructions, elles doivent être encadrées par des accolades. Une expression unique ne doit pas obligatoirement être entourée d'accolades. L'expression est également la valeur de retour implicite de la fonction.

### Le constructeur `Function`

> **Note :** L'utilisation du constructeur `Function` afin de créer des fonction n'est pas recommandée. En effet, il utilise une chaîne pour former le corps de la fonction et cela peut empêcher certaines optimisations du moteur JavaScript ainsi que provoquer d'autres problèmes.

Comme tous les autres objets, les objets {{jsxref("Function")}} peuvent être créés grâce à l'opérateur `new` :

    new Function (arg1, arg2, ... argN, corpsDeLaFonction)

- `arg1, arg2, ... argN`
  - : Plusieurs (zéro ou plus) noms qui seront utilisés par la fonction comme noms d'arguments formels. Chaque nom doit être une chaîne de caractères valide au sens d'un identifiant JavaScript ou alors être une liste de telles chaînes séparées par des virgules. On aura les exemples suivants : "`x`", "`laValeur`", ou "`a,b`".
- `corpsDeLaFonction`
  - : Une chaîne de caractères contenant les instructions JavaScript définissant la fonction.

L'invocation du constructeur `Function` en tant que fonction (sans utiliser l'opérateur `new`) a le même effet que son invocation en tant que constructeur.

### Le constructeur `GeneratorFunction`

> **Note :** `GeneratorFunction` n'est pas un objet global mais pourrait être obtenu à partir de l'instance de la fonction génératrice (voir la page {{jsxref("GeneratorFunction")}} pour plus de détails).

> **Note :** Le constructeur `GeneratorFunction` ne doit pas être utilisé pour créer des fonctions. En effet, il utilise une chaîne pour former le corps de la fonction et cela peut empêcher certaines optimisations du moteur JavaScript ainsi que provoquer d'autres problèmes.

Comme pour tous les autres objets, les objets {{jsxref("GeneratorFunction")}} peuvent être créés grâce à l'opérateur `new` :

    new GeneratorFunction (arg1, arg2, ... argN, corpsFonction)

- `arg1, arg2, ... argN`
  - : Plusieurs (zéro ou plus) noms qui seront utilisés par la fonction comme noms d'arguments formels. Chaque nom doit être une chaîne de caractères valide au sens d'un identifiant JavaScript ou alors être une liste de telles chaînes séparées par des virgules. On aura les exemples suivants : "`x`", "`theValue`", ou "`a,b`".
- `corpsFonction`
  - : Une chaîne de caractères contenant les instructions JavaScript définissant la fonction.

## Les paramètres d'une fonction

### Les paramètres par défaut

Les paramètres par défaut permettent aux paramètres déclarés d'une fonction de pouvoir être initialisés avec des valeurs par défaut s'ils ne sont pas fournis à la fonction ou s'ils valent `undefined`. Pour plus de détails, voir la page de la référence sur [les paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_défaut_des_arguments).

### Les paramètres du reste

Cette syntaxe permet de représenter un nombre indéfini d'arguments sous forme d'un tableau. Pour plus de détails, voir la page sur [les paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste).

## L'objet `arguments`

Il est possible de faire référence aux arguments d'une fonction au sein de cette fonction en utilisant l'objet `arguments`. Consulter la page [arguments](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments) pour plus d'informations.

- [`arguments`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments) : Un objet semblable à un tableau qui contient les arguments passés à la fonction qui est exécutée.
- [`arguments.callee`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments/callee) {{Deprecated_inline}} : La fonction en cours d'exécution.
- [`arguments.caller`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments/caller) {{Obsolete_inline}} : La fonction qui a appelé la fonction courante.
- [`arguments.length`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments/length) : Le nombre d'arguments passés à la fonction.

## Récursion

Une fonction peut faire référence à elle-même et s'appeler elle-même. Il y a trois façons pour qu'une fonction fasse appel à elle-même :

1.  le nom de la fonction
2.  [`arguments.callee`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments/callee)
3.  une variable interne faisant référence à la fonction

Avec l'exemple suivant :

```js
var truc = function toto() {
   // instructions
};
```

Ce qui suit sera équivalent au sein de la fonction :

1.  `toto()`
2.  `arguments.callee()`
3.  `truc()`

Une fonction qui s'appelle elle-même est appelée une fonction récursive. D'une certaine manière, une récursion est semblable à une boucle. Une récursion et une boucle exécutent le même code plusieurs fois et s'appuient sur une condition (afin d'éviter une boucle infinie, ou plutôt une récursion infinie ici). Ainsi la boucle suivante :

```js
var x = 0;
// "x < 10" est la condition de la boucle
while (x < 10) {
   // faire des choses
   x++;
}
```

peut être convertie en une fonction récursive et un appel à cette fonction :

```js
function boucle(x) {
   // "x >= 10" est la condition de sortie
   // (et équivaut à "!(x < 10)")
   if (x >= 10)
      return;
   // faire des choses
   boucle(x + 1); // l'appel récursif
}
boucle(0);
```

Cependant, certains algorithmes ne peuvent pas être traduits sous forme de boucles itératives. Ainsi, obtenir tous les nœuds d'un arbre (par exemple le DOM), est beaucoup plus facile à faire de manière récursive.

```js
function parcoursArbre(noeud) {
   if (noeud == null) //
      return;
   // faire quelque chose avec le noeud
   for (var i = 0; i < noeud.childNodes.length; i++) {
      parcoursArbre(noeud.childNodes[i]);
   }
}
```

Par rapport à la fonction `boucle`, chaque appel récursif enchaîne ici plusieurs appels récursifs successifs.

Il est théoriquement possible de convertir tout algorithme récursif en un algorithme non-récursif. Cependant, la logique du problème est souvent beaucoup plus complexe et l'on doit faire recours à une pile pour le résoudre. Mais la récursion n'est en fait rien d'autre que l'utilisation d'une pile : la pile de la fonction.

La comportement de la récursion en tant que pile peut être observée avec cet exemple :

```js
function truc(i) {
   if (i < 0)
      return;
   console.log('début :' + i);
   toto(i - 1);
   console.log('fin :' + i);
}
truc(3);
```

Elle produira le résultat suivant :

```js
début :3
début :2
début :1
début :0
fin :0
fin :1
fin :2
fin :3
```

## Fonctions imbriquées et fermetures

Il est possible d'imbriquer une fonction au sein d'une fonction. La fonction imbriquée (interne) est privée par rapport à la fonction (externe) qui la contient. Cela forme ce qu'on appelle une fermeture (_closure_ en anglais).

Une fermeture est une expression (généralement une fonction) possédant des variables libres ainsi qu'un environnement qui lie ces variable (autrement dit qui « ferme » l'expression).

Étant donné qu'une fonction imbriquée est une fermeture, cela signifie que la fonction imbriquée peut « hériter » des arguments et des variables de la fonction qui la contient. En d'autres termes, la fonction interne contient la portée de la fonction externe.

Pour résumer :

- on ne peut accéder à la fonction interne seulement avec des instructions contenues dans la fonction externe,

<!---->

- la fonction interne est une fermeture : la fonction interne peut utiliser des arguments et des variables de la fonction externe alors que la fonction externe ne peut pas utiliser de variables et d'arguments de la fonction interne.

L'exemple suivant, montre le cas de fonctions imbriquées :

```js
function ajouteCarres(a,b) {
   function carre(x) {
      return x * x;
   }
   return carre(a) + carre(b);
}
var a = ajouteCarres(2,3); // renvoie 13
var b = ajouteCarres(3,4); // renvoie 25
var c = ajouteCarres(4,5); // renvoie 41
```

Étant donné que la fonction interne est une fermeture, il est possible d'appeler la fonction externe et de définir des arguments pour la fonction externe mais aussi pour la fonction interne :

```js
function externe(x) {
   function interne(y) {
      return x + y;
   }
   return interne;
}
var fn_interne = externe(3);
var resultat = fn_interne(5); // renvoie 8

var resultat1 = externe(3)(5); // renvoie 8
```

### Conservation des variables

On voit alors que `x` est conservé lorsqu'`interne` est renvoyé. Une fermeture doit conserver les arguments et les variables au sein de toutes les portées auxquelles elle fait référence. Étant donné qu'éventuellement, chaque appel fournira des arguments différents, une nouvelle fermeture est créée pour chaque appel externe. La mémoire peut donc être libérée seulement lorsque `inside` n'est plus accessible.

Cela n'est pas différent du stockage de références avec d'autres objets, mais ça reste plus délicat à observer puisqu'on ne peut inspecter ou définir soi-même les références en question.

### Imbrication multiple de fonctions

On peut imbriquer plusieurs fonctions : une fonction (A) contien une fonction (B) qui contient une fonction (C). Ici les fonctions B et C forment des fermetures et aisni B peut accéder à A et C peut accéder à B. On peut donc en déduire, puisque C accède à B qui accède à A que C peut accéder à A. On voit donc que les fermetures peuvent contenir différentes portées. Elles peuvent, récursivement, contenir la portée des fonctions qui la contiennent. Ce mécanisme est appelé « chaînage de portée »  (_scope chaining_ en anglais). (Cette dénomination sera expliquée par la suite.)

On peut l'observer avec l'exemple suivant :

```js
function A(x) {
   function B(y) {
      function C(z) {
         console.log(x + y + z);
      }
      C(3);
   }
   B(2);
}
A(1); // crée un message d'alerte avec 6 (= 1 + 2 + 3)
```

Dans cet exemple, C accède à la variable y de B et à la variable x de A. Cela est possible parce que :

1.  `B` est une fermeture qui contient `A`, autrement dit `B` peut accéder aux arguments et aux variables de `A`
2.  `C` est une fermeture qui contient `B`
3.  Étant donné que la fermeture de `B` contient `A` et que celle de `C` contient `B`, `C` peut accéder à la fois aux arguments et variables de `B` _et_ `A`. Autrement dit, `C` *enchaîne les portées de*  `B` et `A` dans cet ordre.

La réciproque n'est pas vraie. `A` ne peut avoir accès à `C`, parce que `A` ne peut accéder ni aux variables ni aux arguments de `B`, or `C` est une variable de `B. C` est donc privé et seulement pour `B`.

### Conflits de noms

Lorsque deux arguments ou variables appartenant aux portées d'une fermeture ont le même nom, il y a un _conflit de noms_. La portée la plus interne l'emportera par rapport à la portée la plus externe. C'est ce qu'on appelle la chaîne de portée (_scope chain_ en anglais). Le premier maillon de cette chaîne est la portée la plus interne tandis que le dernier maillon est représenté par la portée la plus externe. Regardons l'exemple suivant :

```js
function externe() {
   var x = 10;
   function interne(x) {
      return x;
   }
   return interne;
}
resultat = externe()(20); // renvoie 20 et non pas 10
```

Le conflit de nom apparaît avec l'instruction `return x` et vient de la dénomination commune de l'argument `x` de la fonction `interne` et la variable `x` de la fonction `externe`. La chaîne de portée est, pour cet exemple : {`interne`, `externe`, objet globalt}. On voit alors que le  `x` de la fonction interne l'emporte sur le `x` de la fonction externe. 20 (`x` de la fonction `interne`) est donc renvoyé plutôt que 10 (`x` de la fonction `externe`).

## Définition des méthodes

### Les accesseurs et mutateurs (_getter_ et _setter_)

Il est possible de définir des méthodes qui sont accesseurs ou des mutateurs sur n'importe quel objet qui peut avoir de nouvelles propriétés. La syntaxe utilisée pour définir les _getters_ et _setters_ est celle utilisée avec les littéraux objets.

- [get](/fr/docs/Web/JavaScript/Reference/Fonctions/get)
  - : Permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accèdera à la propriété.
- [set](/fr/docs/Web/JavaScript/Reference/Fonctions/set)
  - : Permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on tentera de modifier cette propriété.

### Syntaxe des définitions de méthode ECMAScript **2015**

Avec ECMAScript 2015, il est possible de définir des méthodes de façon plus concise (à la façon de ce qui est déjà possible pour les getters et setters). Voir la page sur [les définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Fonctions/Définition_de_méthode) pour plus d'informations.

```js
var obj = {
  toto() {},
  truc() {}
};
```

## Constructeur, déclaration, expression ?

Comparons les exemples suivants :

1.  une fonction définie grâce au constructeur `Function` assignée à la variable `multiplier`

    ```js
    var multiplier = new Function("x", "y", "return x * y;");
    ```

2.  une déclaration de fonction d'une fonction appelée `multiplier`

    ```js
    function multiplier(x, y) {
       return x * y;
    }
    ```

3.  une expression de fonction d'une fonction anonyme assignée à la variable `multiplier`

    ```js
    var multiplier = function(x, y) {
       return x * y;
    };
    ```

4.  une expression de fonction d'une fonction nommée `fonction_nom` assignée à la variable `multiplier`

    ```js
    var multiplier = function function_nom(x, y) {
       return x * y;
    };
    ```

Tous ces exemples effectuent à peu près la même chose, mais différent sur quelques points :

- Il y a une distinction entre le nom de la fonction et la variable à laquelle elle est affectée :

  - le nom de la fonction ne peut être changé alors que la variable à laquelle la fonction a été assignée peut être réassignée.
  - le nom de la fonction ne peut-être utilisé qu'à l'intérieur du corps de la fonction. Toute tentative d'utilisation en dehors du corps de la fonction entraînera une erreur (ou `undefined` si le nom de la fonction a été déclaré auparavant avec une instruction `var`). Ainsi :

    ```js
        var y = function x() {};
        console.log(x); // renvoie une erreur
        ```

    Le nom de la fonction apparaît également lorsque la fonction est sérialisée avec la [méthode toString de l'objet `Function`](/fr/docs/JavaScript/Reference/R%C3%A9f%C3%A9rence_JavaScript/Objets_globaux/Function/toString).

    La variable à laquelle est assignée la fonction est seulement limitée par rapport à la portée. La portée au sein de laquelle la fonction est déclarée est donc garantie d'être dans la portée de la variable.

  - Comme le montre le quatrième exemple, le nom de la fonction peut être différent du nom de la variable à laquelle a été assignée la fonction. Les deux noms n'ont aucune relation entre eux.

- Une déclaration de fonction peut aussi créer une variable avec le même nom que la fonction. Ainsi, contrairement une expression de fonction, une déclaration de fonction permet d'accéder à la fonction grâce à son nom au sein de la portée dans laquelle elle a été définie :

  ```js
    function x() {}
    console.log(x); // affichera la fonction x sérialisée en une chaîne de caractères
    ```

  L'exemple qui suit montre que les noms de fonctions ne sont par liées aux variables auxquelles sont assignées les fonctions. Si une variable de fonction est assignée à une autre valeur, elle aura toujours le même nom de fonction :

  ```js
    function toto() {}
    console.log(toto); // message affichant la chaine de caractères "toto"
    var truc = toto;
    console.log(truc); // message affichant la chaine de caractères "toto"
    ```

- Une fonction définie grâce à « `new Function »` n'aura pas de nom de fonction. Cependant, le moteur JavaScript [SpiderMonkey](/fr/docs/SpiderMonkey), la forme sérialisée de la fonction apparaît comme si la fonction avait le nom « anonymous ». Le code `console.log(new Function())` produira :

  ```js
    function anonymous() {
    }
    ```

  La fonction n'ayant pas de nom effectif, `anonymous` n'est pas une variable à laquelle on pourra accéder au sein de la fonction. Par exemple, le code qui suit produira une erreur :

  ```js
    var toto = new Function("console.log(anonymous);");
    toto();
    ```

- À la différence des fonctions définies par les expressions de fonction ou par le constructeur `Function`, une fonction définie par une déclaration de fonction pourra être utilisée avant la déclaration. Ainsi :

  ```js
    toto(); // affichera TOTO !
    function toto() {
       console.log('TOTO !');
    }
    ```

- Une fonction définie par une expression de fonction hérite de la portée courante. La fonction forme donc une fermeture. En revanche, les fonctions définies par le constructeur `Function` n'héritent que de la portée globale (portée héritée par toutes les fonctions).
- Les fonctions définies par les expressions et les déclarations de fonctions ne sont analysées (parsées) qu'une seule fois. Celles définies grâce au constructeur `Function` ne le sont pas. Cela signifie que la chaîne de caractère représentant le corps de la fonction doit être analysée à chaque fois qu'elle est évaluée. Bien qu'une expression de fonction crée obligatoirement une fermeture, le corps de la fonction n'est pas parsé à nouveau. Les expressions de fonctions sont donc plus rapides que « `new Function(...)` ». Il faut donc éviter le constructeur `Function` autant que possible.
  Il faut cependant noter que les expressions et les déclarations imbriquées au sein d'une chaîne de caractère pour un constructeur `Function` ne sont analysées qu'une seule fois. On aura l'exemple suivant :

  ```js
    var toto = (new Function("var truc = \'TOTO !\';\nreturn(function() {\n\tconsole.log(truc);\n});"))();
    toto(); //La partie « function() {\n\tconsole.log(truc);\n} » de la chaîne de caractères n'est pas analysée à nouveau.
    ```

Une déclaration de fonction peut très facilement (et souvent involontairement) être transformée en une expression de fonction. Une déclaration de fonction cesse d'en être une lorsque :

- elle fait partie d'une expression
- ou elle n'est plus un « élément source » de la fonction ou du script. Un « élément source » est une instruction non-imbriquée du script ou d'un corps de fonction.

  ```js
    var x = 0;                 // élément source
    if (x === 0) {              // élément source
       x = 10;                 // pas un élément source
       function titi() {}      // pas un élément source
    }
    function toto() {          // élément source
       var y = 20;             // élément source
       function truc() {}      // élément source
       while (y === 10) {       // élément source
          function machin() {} // pas un élément source
          y++;                 // pas un élément source
       }
    }
    ```

### Exemples :

- ```js
    // déclaration de fonction
    function toto() {}

    // expression de fonction
    (function truc() {})

    // expression de fonction
    var x = function bonjour() {}
    ```

- ```js
    if (x) {
       // expression de fonction
       function monde() {}
    }
    ```

- ```js
    // déclaration de fonction
    function a() {
       // déclaration de fonction
       function b() {}
       if (0) {
          // expression de fonction
          function c() {}
       }
    }
    ```

## Définir une fonction de façon conditionnelle

Il est possible de définir des fonctions de manière conditionnelle en utilisant soit : //function statements// (une extension autorisée par le standard [ECMA-262 Edition 3](https://www.ecma-international.org/publications/standards/Ecma-262.htm)) soit le constructeur `Function`. Il faut noter que de telles instructions ne sont plus autorisées dans le standard [ES5 strict](https://bugzilla.mozilla.org/show_bug.cgi?id=609832). Il faut également savoir que cela ne fonctionne pas de manière homogène sur les différents navigateurs. Il est donc déconseillé d'utiliser cette fonctionnalité.

Dans le script qui suit, la fonction `zero` n'est jamais définie et ne peut donc être appelée car le test « `if (0)` » est toujours faux :

```js
if (0) {
   function zero() {
      console.log("C'est zero.");
   }
}
```

Si le script est changé et que la condition devient « `if (1)` », la fonction `zero` sera alors définie.

Bien que cette fonction ressemble à une déclaration de fonction, il s'agit en fait d'une expression (ou instruction) de fonction, car celle-ci est imbriquée au sein d'une autre instruction. (Consulter le paragraphe précédent pour une explication à ce sujet).

> **Note :** À la différence de [SpiderMonkey](/fr/docs/SpiderMonkey), certains moteurs JavaScript traîtent incorrectement les expressions de fonction avec un nom comme des définitions de fonction. Cela conduirait à la définition de la fonction `zero` et ce même avec la condition `if` valant faux. Une façon plus sûre de définir des fonctions de manière conditionnelle est de définir la fonction et de l'assigner à une variable :
>
> ```js
> if (0) {
>    var zero = function() {
>       console.log("C'est zero");
>    }
> }
> ```

## Les fonctions en tant que gestionnaires d'événements

En JavaScript, les gestionnaires d'événements [DOM](/fr/docs/DOM) (_event handlers_ en anglais) sont des fonctions (différentes des objets contenant une méthode `handleEvent` dans d'autres langages de liaison avec le DOM -_binding languages_ en anglais). Les fontions ont l'objet [event](/fr/docs/DOM/event) comme seul et unique paramètre. Comme tous les autres paramètres, si l'objet événement, n'a pas besoin d'être utilisé, il peut être absent de la liste des paramètres formels.

Les objets d'un document HTML susceptibles de recevoir des événements peuvent être par exemple : `window` (objets `Window`, y compris les objets frames), `document` (les objets `HTMLDocument`), et les éléments (les objets `Element`). Au sein du [DOM HTML](https://www.w3.org/TR/DOM-Level-2-HTML/), les objets recevant des événements possède des propriétés gestionnaires d'événements. Ces propriétés sont les noms des événements en minuscules préfixés par « on » (par exemple `onfocus`). Une autre façon, plus fiable, d'ajouter des auditeurs d'événements, est offert par les [événements DOM de niveau 2](https://www.w3.org/TR/DOM-Level-2-Events/).

Note : Les événements font partie de la logique DOM et non de celle de JavaScript. (JavaScript n'est qu'un langage permettant de manipuler le DOM.)

L'exemple suivant assigne une fonction au gestionnaire de l'événement « focus ».

```js
window.onfocus = function() {
   document.body.style.backgroundColor = 'white';
};
```

Si une fonction est assignée à une variable, il est possible d'assigner la variable à un gestionnaire d'événement. Le fragment de code qui suit assigne une fonction à la variable `setBGColor`.

```js
var setBGColor = new Function("document.body.style.backgroundColor = 'white';");
```

Il est alors possible d'utiliser cette variable pour assigner une fonction à un gestionnaire d'événement. Cela peut se faire de plusieurs manières, en voici deux décrites ici :

1.  écrire dans les propriétés de l'évément DOM HTML

    ```js
    document.form1.colorButton.onclick = setBGColor;
    ```

2.  l'attribut de l'événement HTML

    ```html
    <input type="button"
       value="Changer la couleur de fond"
       onclick="setBGColor();"/>
    ```

    Un gestionnaire d'événement défini de cette manière sera une fonction, nommée selon l'attribut, encadré du code spécifique nécessaire. C'est pourquoi les parenthèses sont ici nécessaires (`setBGColor()` et non pas `setBGColor`). Cela est équivalent à :

    ```js
    document.form1.colorButton.onclick = function onclick(event) {
       setBGColor();
    };
    ```

    Il faut noter la façon dont l'objet événement est passé à la fonction en tant que paramètre `event`. Cela permet au code d'utiliser l'objet `Event` :

    ```html
    <input ...
        onclick="console.log(event.target.tagName);"/>
    ```

Tout comme les autres propriétés faisant référence à une fonction, le gestionnaire d'événement peut agir come une méthode et `this` ferait alors référence à l'élément contenant le gestionnaire d'événement. Dans l'exemple suivant, la fonction à laquelle `onfocus` fait référence est appelée avec `this` qui a la valeur `window`.

```js
window.onfocus();
```

Une erreur faite souvent lorsque l'on commence à utiliser JavaScript est d'ajouter des parenthèses et/ou des paramètres à la fin de la variable. Cela revient à appeler le gestionnaire d'événement lorsqu'on l'assigne. Le fait d'ajouter ces parenthèses assignera la valeur de retour du gestionnaire d'événement. Cette valeur sera souvent` undefined `dans ces cas alors que l'on aurait souhaité obtenir le gestionnaire d'événement.

```js
document.form1.button1.onclick = setBGColor();
```

Afin de passer des paramètres à un gestionnaire d'événements, le gestionnaire doit être enveloppé dans une autre fonction, comme dans l'exemple suivant :

```js
document.form1.button1.onclick = function() {
   setBGColor('une valeur');
};
```

## Les fonctions de bloc

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), à partir d'ES2015 (ES6), la portée des fonctions définies dans un bloc est limitée à ce bloc. Avant ES2015, il était interdit d'utiliser les fonctions de bloc en mode strict..

```js
'use strict';

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// f() === 2 en mode non-strict
```

### Les fonctions de bloc dans du code non-strict

Non.

Dans du code non-strict, les déclarations de fonctions placées dans des blocs peuvent se comporter de façon étrange :

```js
if (onDevraitDéfinirZéro) {
   function zéro() { // DANGER: risque de compatibilité
      console.log("Voici zéro.");
   }
}
```

ES2015 indique que si `onDevraitDéfinirZéro` vaut `false`, `zéro` ne devrait jamais être défini car le bloc n'est jamais exécuté. En revanche, c'est une nouveauté liée à cette version du standard, non spécifiée auparavant. Certains navigateurs définissent `zéro` que le bloc soit exécuté ou non.

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), tous les navigateurs qui prennent en charge ES2015 gère cela de la même façon : `zéro` est uniquement défini si `onDevraitDéfinirZéro` vaut `true` et uniquement dans la portée du bloc induit par `if`.

Une méthode plus sûre est d'utiliser des expressions de fonction :

```js
var zéro;
if (0) {
   zéro = function() {
      console.log("Voici zéro.");
   };
}
```

## Exemples

### Renvoyer un nombre formaté

La fonction qui suit renvoie une chaîne de caractères contenant la représentation formatée d'un nombre avec un certain nombre de zéros préfixant le nombre.

```js
// Cette fonction renvoie une chaîne de caractères complétée par un préfixe composé de zéros
function padZeros(num, totalLen) {
   var numStr = num.toString();             // On initialise la valeur à renvoyer en chaîne de caractères
   var numZeros = totalLen - numStr.length; // On calcule le nombre de zéros
   for (var i = 1; i <= numZeros; i++) {
      numStr = "0" + numStr;
   }
   return numStr;
}
```

Les instructions qui suivent utilisent cette fonction

```js
var resultat;
resultat = padZeros(42,4); // renvoie "0042"
resultat = padZeros(42,2); // renvoie "42"
resultat = padZeros(5,4);  // renvoie "0005"
```

### Déterminer si une fonction existe

Il est possible de déterminer si oui ou non une fonction existe en utilisant l'opérateur `typeof`. Dans l'exemple qui suit, on teste pour savoir si l'objet `window` possède une propriété appelé `noFunc` qui serait une fonction. Si c'est le cas, elle sera utilisée, sinon on fera autre chose.

```js
 if ('function' === typeof window.noFunc) {
   // utilisation de noFunc()
 } else {
   // faire autre chose
 }
```

Il est à noter que, dans le test `if`, on utilise une référence à `noFunc` - il n'y a pas de parenthèses après le nom de la fonction, la fonction n'est donc pas appelée.

## Spécifications

| Spécification                                                                                                    | État                     | Commentaires                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}     | Définition initiale. Implémentée avec JavaScript 1.0                                     |
| {{SpecName('ES5.1', '#sec-13', 'Function Definition')}}                                         | {{Spec2('ES5.1')}} |                                                                                          |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}}                 | {{Spec2('ES6')}}     | Nouveautés : fonctions fléchées, générateurs, paramètres par défaut, paramètres du reste |
| {{SpecName('ES6', '#', 'function*')}}                                                                 | {{Spec2('ES6')}}     | Définition initiale.                                                                     |
| {{SpecName('ES6', '#sec-arrow-function-definitions', 'Arrow Function Definitions')}} | {{Spec2('ES6')}}     | Définition initiale.                                                                     |

## Compatibilité des navigateurs

{{Compat("javascript.functions")}}

## Voir aussi

- L'instruction {{jsxref("Instructions/function", "function")}}
- L'expression {{jsxref("Opérateurs/L_opérateur_function", "function")}}
- L'instruction {{jsxref("Instructions/function*", "function*")}}
- L'expression {{jsxref("Opérateurs/function*", "function*")}}
- {{jsxref("Function")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Fonctions/Fonctions_fléchées", "Les fonctions fléchées")}}
- {{jsxref("Fonctions/Valeurs_par_défaut_des_arguments", "Les paramètres par défaut","",1)}}
- {{jsxref("Fonctions/paramètres_du_reste", "Les paramètres du reste","",1)}}
- L'objet {{jsxref("Fonctions/arguments", "arguments")}}
- {{jsxref("Fonctions/get", "getter")}}
- {{jsxref("Fonctions/set", "setter")}}
- {{jsxref("Fonctions/Définition_de_méthode", "Les définitions de méthodes","",1)}}
- [Fonctions et portée des fonctions](/fr/docs/Web/JavaScript/Reference/Fonctions)
