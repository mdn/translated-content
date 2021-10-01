---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
tags:
  - Error
  - JavaScript
  - RangeError
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/RangeError
original_slug: Web/JavaScript/Reference/Objets_globaux/RangeError
---
{{JSRef}}

L'objet **`RangeError`** permet d'indiquer une erreur lorsqu'une valeur fournie n'appartient pas à l'intervalle autorisé.

## Syntaxe

    new RangeError([message[, nomFichier[, numLigne]]])

### Paramètres

- `message`
  - : Paramètre optionnel. Une description lisible (humainement) de l'erreur.
- `nomFichier` {{non-standard_inline}}
  - : Paramètre optionnel. Le nom du fichier contenant le code à l'origine de cette exception.
- `numLigne `{{non-standard_inline}}
  - : Paramètre optionnel. Le numéro de la ligne du code à l'origine de cette exception.

## Description

Une exception `RangeError` est levée lorsqu'une valeur est passée comme argument à une fonction qui n'accepte pas de valeurs dans cet intervalle. Par exemple, cela peut être le cas quand on souhaite créer un tableau avec une longueur illégale via {{jsxref("Array")}} ou lorsqu'on passe des valeurs incorrectes aux méthodes {{jsxref("Number.toExponential()")}}, {{jsxref("Number.toFixed()")}} ou {{jsxref("Number.toPrecision()")}}. Cette exception n'est pas limitée aux problèmes d'intervalles numériques et peuvent également se produire lorsqu'on passe une valeur non autorisée à {{jsxref("String.prototype.normalize()")}}.

## Propriétés

- {{jsxref("RangeError.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à toutes les instances de `RangeError`.

## Méthodes

L'objet global `RangeError` ne contient pas de méthodes propres mais héritent de certaines méthodes via la chaîne de prototypes.

## Instances de `RangeError`

### Propriétés

{{ page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/RangeError/prototype','Properties') }}

### Méthodes

{{ page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/RangeError/prototype','Methods') }}

## Exemples

### Utiliser `RangeError`

```js
var MIN = 200;
var MAX = 300;
var vérifier = function( num ) {
  if( num < MIN || num > MAX ) {
    throw new RangeError( "Le paramètre doit être compris entre " + MIN + " et " + MAX );
  }
};

try {
  vérifier(500);
}
catch (e) {
  if (e instanceof RangeError ){
    // On gère ce qui se passe en cas d'erreur
  }
}
```

### Utiliser `RangeError` avec des valeurs non-numériques

```js
function verifier(valeur){
  if(["pomme", "banane", "carotte"].includes(valeur) === false){
    throw new RangeError("L'argument n'est pas un fruit parmi pomme / banane ou carotte.");
  }
}

try {
  verifier("chou");
}
catch(erreur) {
  if(erreur instanceof RangeError){
    //On gère ce qui se passe en cas d'erreur
  }
}
```

## Spécifications

| Spécification                                                                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                         | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.11.6.2', 'RangeError')}}                                                         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-native-error-types-used-in-this-standard-rangeerror', 'RangeError')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-rangeerror', 'RangeError')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RangeError")}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("RangeError.prototype")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
