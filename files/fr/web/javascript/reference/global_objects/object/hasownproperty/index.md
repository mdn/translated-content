---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty
---
{{JSRef}}

La méthode **`hasOwnProperty()`** retourne un booléen indiquant si l'objet possède la propriété spécifiée "en propre", sans que celle-ci provienne de la chaîne de prototypes de l'objet.

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

## Syntaxe

```js
obj.hasOwnProperty(prop)
```

### Paramètres

- `prop`
  - : Le nom ({{jsxref("String")}}) ou le symbole ({{jsxref("Symbol")}}) de la propriété à tester.

### Valeur de retour

Un booléen qui indique si l'objet possède ou non la propriété indiquée en argument et que celle-ci est directement rattachée à l'objet (elle ne provient pas de la chaîne de prototypes de l'objet). `hasOwnProperty()` renvoie `true` si la propriété existe et que sa valeur est {{jsxref("null")}} ou {{jsxref("undefined")}}.

## Description

Chaque objet descendant d'{{jsxref("Object")}} hérite de la méthode `hasOwnProperty()`. Cette méthode peut être utilisée pour déterminer si un objet a la propriété spécifiée en tant que propriété directe de cet objet. Contrairement à l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}, cette méthode ne vérifie pas la chaîne des prototypes de l'objet. Si l'objet est un tableau ({{jsxref("Array")}}), la méthode `hasOwnProperty()` pourra être utilisée afin de vérifier la présence d'un index.

## Exemples

### Utiliser `hasOwnProperty()` pour tester l'existence d'une propriété

L'exemple suivant détermine si l'objet `o` contient une propriété appelée `prop`:

```js
o = new Object();
o.hasOwnProperty('prop'); // false
o.prop = 'exists';
o.hasOwnProperty('prop'); // true
```

### Propriétés directes et propriétés héritées

L'exemple suivant illustre la différence entre les propriétés directes et les propriétés héritées à partir de la chaîne de prototypes :

```js
o = new Object();
o.prop = 'exists';

o.hasOwnProperty('prop');
// retourne true

o.hasOwnProperty('toString');
// retourne false

o.hasOwnProperty('hasOwnProperty');
// retourne false
```

### Parcourir les propriétés d'un objet

L'exemple suivant montre comment parcourir les propriétés d'un objet sans traiter les propriétés héritées. On notera que la boucle  {{jsxref("Instructions/for...in", "for...in")}} ne prend en compte que les éléments énumérables. Il ne faut donc pas déduire de l'absence de propriétés non-énumérables dans la boucle, que `hasOwnProperty()` est elle-même strictement restreinte aux éléments énumérables (comme c'est le cas pour {{jsxref("Object.getOwnPropertyNames()")}}) .

```js
var bidule = {
    truc: 'stack'
};

for (var nom in bidule) {
    if (bidule.hasOwnProperty(nom)) {
        console.log("C'est bien la propriété (" +
                     nom +
                     "), sa valeur : " + bidule[nom]
                    );
    }
    else {
        console.log(nom);
        // toString ou autre
    }
}
```

### `hasOwnProperty()` en tant que propriété

JavaScript ne protège pas le nom de propriété `hasOwnProperty`, ainsi il est possible qu'un objet puisse avoir une propriété avec ce nom, il sera donc nécessaire d'utiliser une version externe de la méthode pour obtenir des résultats corrects.

```js
var toto = {
  hasOwnProperty: function() {
    return false;
  },
  truc: 'Voici les dragons'
};

toto.hasOwnProperty('truc'); // renvoie toujours false

// On utilise une méthode d'un autre objet
// et on l'appelle avec this qui vaut toto
({}).hasOwnProperty.call(toto, 'truc'); // true

// On peut aussi utiliser la propriété hasOwnProperty de Object prototype
Object.prototype.hasOwnProperty.call(toto, 'truc'); // true
```

La dernière version utilisée permet de ne pas créer d'objet supplémentaire.

## Spécifications

| Spécification                                                                                                                        | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                             | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.2.4.5', 'Object.prototype.hasOwnProperty')}}                                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.hasOwnProperty")}}

## Voir aussi

- [Caractère énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Instructions/for...in", "for...in")}}
- {{jsxref("Opérateurs/L_opérateur_in", "in")}}
- [Guide JavaScript : Retours sur l'héritage](/fr/docs/Web/JavaScript/Guide/Retours_sur_héritage)
