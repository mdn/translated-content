---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
tags:
  - Exception
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/throw
original_slug: Web/JavaScript/Reference/Instructions/throw
---
{{jsSidebar("Statements")}}

L'instruction **`throw`** permet de lever une exception définie par l'utilisateur. L'exécution de la fonction courante sera stoppée (les instructions situées après l'instruction `throw` ne seront pas exécutées) et le contrôle sera passé au premier bloc {{jsxref("Instructions/try...catch","catch")}} de la pile d'appels. Si aucun bloc `catch` ne se trouve dans les fonctions de la pile d'appels, le programme sera terminé.

{{EmbedInteractiveExample("pages/js/statement-throw.html")}}

## Syntaxe

```js
throw expression;
```

- `expression`
  - : L'expression qui fournit l'exception à lever.

## Description

L'instruction `throw` permet de lever (_throw_ en anglais) une exception. Lorsqu'on lève une exception, `expression` fournit la valeur de l'exception. Chacune des instructions ci-après permet de lever une exception :

```js
throw "monErreur"; // génère une exception étant une chaîne de caractères
throw 42;          // génère une exception ayant la valeur 42
throw true;        // génère une exception ayant la valeur true
throw new Error("Obligatoire");  // génère un objet Error avec le message "Obligatoire"
```

On notera également que l'instruction `throw` est affectée par {{jsxref("Grammaire_lexicale","l'insertion automatique de point-virgule","#Insertion_automatique_de_points-virgules",1)}} car il n'est pas permis d'avoir un caractère de fin de ligne entre le mot-clé `throw` et l'expression.

## Exemples

### Lever une exception qui est un objet

Il est possible de lever une exception qui est un objet et de faire référence aux propriétés de cet objet au sein du bloc `catch`. Dans l'exemple suivant, on crée un objet `monException` du type `ExceptionUtilisateur` puis on utilise cet objet avec une instruction `throw`.

```js
function ExceptionUtilisateur(message) {
   this.message = message;
   this.name = "ExceptionUtilisateur";
}
function getNomMois(mo) {
   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
   var mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil",
      "Août", "Sept", "Oct", "Nov", "Déc"];
   if (mois[mo] !== undefined) {
      return mois[mo];
   } else {
      throw new ExceptionUtilisateur("Numéro de mois invalide");
   }
}

try {
   // les instructions à tenter
   var monMois = 15; // 15 est en dehors des limites prévues
   var nomMois = getNomMois(monMois);
} catch (e) {
   nomMois = "unknown";
   console.error(e.message, e.name); // on passe les caractéristiques de l'exception
                                     // à un gestionnaire d'erreur
}
```

### Deuxième exemple avec un objet

Ici, on cherche à valider une chaîne de caractères représentant un code postal américain. Si le format utilisé est invalide, cela provoquera une exception avec un objet du type `ZipFormatIncorrectException`. (Le mot-clé {{jsxref("Instructions/const","const")}} introduit avec ECMAScript 6 est utilisé dans cet exemple).

```js
/*
 * Crée un objet ZipCode.
 *
 * Les formats acceptés sont :
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Si l'argument passé au constructeur ZipCode n'est pas conforme
 * à un de ces formats, une exception sera levée.
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // la valeur du code sera la première correspondance
      // dans la chaîne
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ZipFormatIncorrectException(zip);
   }
}

function ZipFormatIncorrectException(value) {
   this.value = value;
   this.message = "le format n'est pas conforme";
   this.toString = function() {
      return this.value + this.message;
   };
}

/*
 * Cette fonction pourrait être utilisée dans un script
 * pour valider des adresses
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function vérifierZipCode(z) {
   try {
      z = new ZipCode(z);
   } catch (e) {
      if (e instanceof ZipFormatIncorrectException) {
         return ZIPCODE_INVALID;
      } else {
         return ZIPCODE_UNKNOWN_ERROR;
      }
   }
   return z;
}

a = vérifierZipCode(95060);         // renvoie 95060
b = vérifierZipCode(9560);          // renvoie -1
c = vérifierZipCode("a");           // renvoie -1
d = vérifierZipCode("95060");       // renvoie 95060
e = vérifierZipCode("95060 1234");  // renvoie 95060 1234
```

### Propager une exception

L'instruction `throw` peut être utilisée pour transmettre une exception qui aurait été interceptée avec {{jsxref("Instructions/try...catch","catch")}}. Dans l'exemple suivant, on intercepte une exception avec une valeur numérique et on propage l'exception si la valeur est supérieure à 50. L'exception qui est levée se propage dans la fonction appelante ou au niveau le plus haut, visible par l'utilisateur.

```js
try {
   throw n; // lève une exception avec une valeur numérique
} catch (e) {
   if (e <= 50) {
      // des instructions pour gérer les cas entre 1 et 50
   } else {
      // ce cas ne peut pas être géré maintenant, on transmet l'exception
      throw e;
   }
}
```

## Spécifications

| Spécification                                                                            | État                         | Commentaires                                         |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                 | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.4 |
| {{SpecName('ES5.1', '#sec-12.13', 'throw statement')}}                 | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-throw-statement', 'throw statement')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-throw-statement', 'throw statement')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.statements.throw")}}

## Voir aussi

- {{jsxref("Instructions/try...catch","try...catch")}}
- {{jsxref("Error")}}
