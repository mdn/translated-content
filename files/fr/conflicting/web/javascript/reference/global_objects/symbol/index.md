---
title: Symbole
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Symbol
tags:
  - Glossaire
  - JavaScript
  - Partage
translation_of: Glossary/Symbol
original_slug: Glossary/Symbol
---
Cette page de glossaire décrit à la fois un type de données, appelé "symbole", et la fonction de classe, appelée "{{jsxref ("Symbol","symbole")}}()", qui (entre autres) crée des instances du type de données symbole .

Le type de données "symbol" est un type de données primitif dont la qualité est d'avoir des valeurs utilisables pour rendre les propriétés d'objets anonymes. Ce type de données est utilisé comme clé pour une propriété d'objet lorsque la propriété est destinée à être privée, pour l'utilisation interne d'une classe ou d'un type d'objet. Par exemple, les clés du symbole de type existent dans divers objets JavaScript intégrés. De même, les classes personnalisées peuvent créer des membres privés de cette façon. Le type de données de symbole est hautement spécialisé dans ce but, et remarquable pour son manque de polyvalence ; une instance de symbole peut être assignée à une valeur L, elle peut être contrôlée pour l'identité, et c'est tout; aucun autre opérateur ne s'applique. (Comparez ceci avec une instance de "Number", par exemple l'entier "42", qui a une panoplie d'opérateurs qui comparent ou combinent la valeur avec d'autres de son type.)

Une valeur ayant le type de données "symbole" peut être appelée "valeur de symbole". Dans l'environnement d'exécution JavaScript, une valeur de symbole est créée en appelant la fonction Symbol (), qui produit de façon dynamique une valeur unique anonyme. La seule utilisation judicieuse est de stocker le symbole, puis d'utiliser la valeur stockée pour créer une propriété d'objet. L'exemple suivant stocke le symbole dans un "var".

```js
var myPrivateMethod  = Symbol();
this[myPrivateMethod] = function() {...};
```

Lorsqu'une valeur de symbole est utilisée comme identifiant dans une affectation de propriété, la propriété (comme le symbole) est anonyme; et est également non dénombrable. Comme la propriété n'est pas énumérable, elle n'apparaîtra pas en tant que membre dans la construction de la boucle "`for (... in ...)`", et parce que la propriété est anonyme, elle n'apparaîtra pas dans le tableau des résultats de "`Object.getOwnPropertyNames()`". Vous pouvez accéder à la propriété en utilisant la valeur de symbole d'origine qui l'a créée ou en itérant sur le tableau de résultats de "`Object.getOwnPropertySymbols()`". Dans l'exemple de code précédent, l'accès à la propriété se fera via la valeur qui a été stockée dans la variable `myPrivateMethod`.

La fonction intégrée "{{jsxref("Symbol")}}`()`" est une classe incomplète qui renvoie une valeur de symbole lorsqu'elle est appelée en tant que fonction, qui génère une erreur lors de tentatives d'utilisation en tant que constructeur avec la syntaxe `new Symbol()`, qui a des méthodes statiques pour accéder à la table globale de symboles de JavaScript, et qui a des propriétés statiques pour adresser certains symboles qui sont présents dans les objets couramment utilisés. La création de valeurs de symboles par la fonction `Symbol()` a été expliquée ci-dessus. Le lancement d'une erreur sur les tentatives d'utilisation de `Symbol()` en tant que constructeur est expliqué comme une précaution contre la création accidentelle d'un objet qui pourrait provoquer une confusion. Les méthodes qui accèdent au registre global de symboles sont "`Symbol.for()`" et "`Symbol.keyFor()`" ; celles-ci servent de médiateur entre la table globale de symboles (ou "registre") et l'environnement d'exécution. Le registre de symboles est principalement construit par l'infrastructure du compilateur JavaScript, et le contenu du registre de symboles n'est pas disponible pour l'infrastructure d'exécution de JavaScript, à l'exception de ces méthodes de réflexion. La méthode `Symbol.for("tokenString")` retourne une valeur de symbole du registre et `Symbol.keyFor(symbolValue)` renvoie une chaîne de signes du registre ; chacun est l'inverse de l'autre, donc ce qui suit est vrai :

```js
Symbol.keyFor(Symbol.for("tokenString"))=="tokenString";  // vrai
```

La classe **Symbol** a certaines propriétés statiques qui, paradoxalement, nomment l'anonyme. Il n'y en a que quelques unes ; elles sont pour certaines soi-disant "bien connues" des symboles. Ce sont des symboles, pour certaines propriétés de méthode sélectionnées, qui se trouvent dans certains objets intégrés. L'exposition de ces symboles permet d'avoir un accès direct à ces comportements ; cet accès peut être utile, par exemple, dans la définition d'une classe personnalisée. Des exemples de symboles connus sont : "`Symbol.iterator`" pour les objets de type tableau, et "`Symbol.search`" pour les objets de type chaîne.

La fonction `Symbol()` et les valeurs de symbole qu'elle crée peuvent être utiles aux programmeurs qui conçoivent une classe personnalisée. Les valeurs de symboles fournissent un moyen par lequel les classes personnalisées peuvent créer des membres privés et gérer un registre de symboles propre à cette classe. Une classe personnalisée peut utiliser des valeurs de symbole pour créer des propriétés "propres" qui sont protégées contre les découvertes accidentelles. Dans la définition de classe, la valeur de symbole créée dynamiquement est enregistrée dans une variable étendue, disponible uniquement en privé dans la définition de classe. Il n'y a pas de chaîne symbolique ; la variable portée joue le rôle équivalent d'un signe.

Dans quelques langages de programmation, le type de donnée symbole est appelé un "atome".

Symbol peut avoir une description facultative, mais à des fins de débogage uniquement.

Le type symbole est une nouvelle fonctionnalité dans ECMAScript 2015 et il n'y a pas d'équivalent en ECMAScript 5.

```js
Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ Symbol(), Symbol() ]
```

## Pour approfondir

### Culture générale

- {{Interwiki("wikipedia", "Symbole (informatique)")}} sur Wikipédia
- [Structures et types de données](/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es) en JavaScript
