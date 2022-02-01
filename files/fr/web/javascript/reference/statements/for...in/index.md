---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
  - Instruction
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/for...in
original_slug: Web/JavaScript/Reference/Instructions/for...in
---
{{jsSidebar("Statements")}}

L'**instruction `for...in`** permet d'itérer sur les [propriétés énumérables](/fr/docs/Web/JavaScript/Caract%C3%A8re_%C3%A9num%C3%A9rable_des_propri%C3%A9t%C3%A9s_et_rattachement) d'un objet qui ne sont pas [des symboles](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Symbol). Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un {{jsxref("Instructions/bloc","bloc","",1)}} d'instructions).

{{EmbedInteractiveExample("pages/js/statement-forin.html")}}

## Syntaxe

    for (variable in objet) {
      instructions
    }

- `variable`
  - : Un nom de propriété différent est assigné à la variable à chaque itération de la boucle.
- `objet`
  - : L'objet dont les propriétés énumérables et qui ne sont pas des symboles sont parcourues par la boucle.

## Description

Une boucle `for...in` ne parcourt que les propriétés énumérables et qui ne sont pas des symboles. Les objets qui ont été créés par des constructeurs intégrés comme Array et Object ont hérité de propriétés non énumérables de `Object.prototype` et `String.prototype` comme les méthodes {{jsxref("String.prototype.indexOf","indexOf()")}} du type {{jsxref("String")}} ou {{jsxref("Object.prototype.toString","toString()")}} depuis {{jsxref("Object")}}. La boucle parcourera toutes les propriétés énumérables de l'objet et aussi celles dont il hérite du prototype du constructeur (les propriétés les plus proches de l'objet dans la chaîne des prototypes primeront sur les propriétés des prototypes).

### Les propriétés ajoutées, modifiées ou supprimées

Une boucle `for...in` parcourt les propriétés d'un objet dans un ordre arbitraire (voir l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}} pour plus d'explications quant à l'impossibilité de se fier à un tel ordre, au moins dans le cas où on souhaite gérer plusieurs navigateurs).

Si une propriété est modifiée dans une des itérations de la boucle et que la boucle itère ensuite sur cette propriété, sa valeur sera celle qui a été modifiée. Une propriété qui a été supprimée avant que la boucle n'itère sur celle-là ne sera pas dans la boucle. Les propriétés qui ont été ajoutées à l'objet pendant la boucle peuvent être ou ne pas être pris en compte.

Une bonne pratique consiste à ne pas ajouter, modifier ou supprimer une propriété d'un objet lors d'une itération qui ne concerne pas cette propriété. Il n'y a aucune certitude concernant la prise en compte d'une propriété ajoutée lors d'une telle boucle et il en va de même pour savoir si on a visité une propriété avant ou après qu'elle ait été modifiée ou de savoir si une itération de la boucle concernera une propriété avant que celle-ci soit supprimée.

### Utiliser `for...in` et parcourir un tableau

> **Note :** `for...in` ne doit pas être utilisée pour parcourir un {{jsxref("Array")}} lorsque l'ordre des éléments est important.

Les éléments des indices d'un tableau sont des propriétés énumérables dont les noms sont des entiers, excepté cela, elles sont en tout point identiques aux propriétés des objets en général. Ici aussi, il n'y a aucune certitude que `for...in` renvoie les indices dans un ordre particulier. Cette instruction listera également les propriétés énumérables dont les noms ne sont pas des entiers et celles qui sont héritées.

L'ordre dans lequel le parcours est effectué dépend de l'implémentation. Dans le cas d'un parcours de tableau utilisant `for...in`, on pourrait très bien avoir un ordre qui ne soit pas le même entre les différents environnements. Pour cette raison, il est préférable d'utiliser une boucle {{jsxref("Instructions/for","for")}} utilisant un compteur numérique (ou {{jsxref("Array.prototype.forEach","Array.forEach()")}} ou encore {{jsxref("Instructions/for...of","for...of")}}) lorsqu'on souhaite parcourir des tableaux dans un ordre bien défini.

### Itérer uniquement sur les propriétés non héritées

Si on souhaite ne parcourir que les propriétés propres d'un objet et pas celles rattachées à ses prototypes, on peut utiliser la méthode {{jsxref("Object.getOwnPropertyNames()")}} ou bien effectuer un test grâce à la méthode {{jsxref("Object.prototype.hasOwnProperty()")}} voire avec {{jsxref("Object.prototype.propertyIsEnumerable()")}}

## Exemples

La boucle `for...in` qui suit utilise parcourt l'objet `obj` et ses propriétés énumérables qui ne sont pas des symboles en fournissant la chaîne de caractères qui décrit le nom de la propriété et sa valeur.

```js
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Affiche dans la console :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

La fonction qui suit utilise {{jsxref("Object.hasOwnProperty", "hasOwnProperty()")}} pour ne pas afficher les propriétés héritées :

```js
var triangle = {a:1, b:2, c:3};

function TriangleCouleur() {
  this.couleur = "rouge";
}

TriangleCouleur.prototype = triangle;

var obj = new TriangleCouleur();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Affichera dans la console :
// "obj.couleur = rouge"
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES1', '#sec-12.6.3', 'for...in statement')}}                                 | {{Spec2('ES1')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-12.6.4', 'for...in statement')}}                                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-for-in-and-for-of-statements', 'for...in statement')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...in statement')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.statements.for_in")}}

### Expressions avec initialisateur

Avant SpiderMonkey 40 {{geckoRelease(40)}}, il était possible d'utiliser un initialisateur (`i=0`) dans un boucle `for...in` :

```js example-bad
var obj = {a:1, b:2, c:3};
for(var i=0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

Ce comportement non-standard a été retiré avec la version 40. Cela provoquera désormais une exception {{jsxref("SyntaxError")}} ("_[for-in loop head declarations may not have initializers](/fr/docs/Web/JavaScript/Reference/Erreurs/Invalid_for-in_initializer)_") en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) (cf. {{bug(748550)}} et {{bug(1164741)}}).

Les autres moteurs, tels que v8 (Chrome), Chakra (IE/Edge) et JSC (WebKit/Safari) recherchent également comment retirer ce comportement non standard.

## Voir aussi

- {{jsxref("Instructions/for...of","for...of")}} : une instruction semblable qui permet d'itérer sur les valeurs des propriétés
- {{jsxref("Instructions/for","for")}}
- [Le rattachement et le caractère énumérable des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Instructions/for_each...in", "for each...in")}} {{deprecated_inline}} : une instruction semblable, dépréciée, qui parcourt les valeurs des propriétés d'un objet plutôt que les noms.
