---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
tags:
  - JSON
  - JavaScript
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/JSON
original_slug: Web/JavaScript/Reference/Objets_globaux/JSON
---
{{JSRef}}

L’objet **`JSON`** contient des méthodes pour interpréter du [JSON](https://json.org/) (JavaScript Object Notation) (voir également la page du glossaire {{glossary("JSON")}}) et convertir des valeurs en JSON. Il ne peut être appelé ou construit, et, en dehors de ses deux méthodes, n’a pas de fonctionnalité propre.

## Différences entres JavaScript et JSON

JSON est une syntaxe pour sérialiser des objets, tableaux, nombres, chaînes de caractères, booléens et valeurs _null_. Elle est basée sur la syntaxe de JavaScript mais en est distincte : du code JavaScript n’est pas nécessairement du JSON, et du JSON n’est pas nécessairement du JavaScript.

- Pour les objets et les tableaux

  - Les noms de propriété doivent être des chaînes de caractères délimitées par des guillements doubles ; les _trailing commas_ sont interdits

- Pour les nombres

  - Les zéros non significatifs sont interdits ; un point décimal doit être suivi d’au moins un chiffre (plus exactement : `JSON.stringify()` ignorera les zéros mais `JSON.parse()` déclenchera une exception `SyntaxError`).

- Pour le texte : **tout texte JSON est une expression JavaScript** (pour les moteurs qui implémentent [cette proposition](https://github.com/tc39/proposal-json-superset)).

  - Pour les autres moteurs, seul un jeu limité de caractères peut être échappé ; certains caractères de contrôle sont interdits ; le séparateur de ligne Unicode ([U+2028](https://unicode-table.com/en/2028/)) et le séparateur de paragraphe ([U+2029](https://unicode-table.com/en/2029/)) sont autorisés en JSON mais pas en JavaScript dans les littéraux de chaînes de caractères.

Dans l'exemple suivant, on utilise {{jsxref("JSON.parse()")}} afin d'analyser la chaîne JSON et `eval` afin d'exécuter le code correspondant :

```js
var code = '"\u2028\u2029"';
JSON.parse(code); // vaut "\u2028\u2029" pour tous les moteurs
eval(code); // provoque une SyntaxError pour les anciens moteurs
```

## Syntaxe complète

```
JSON = null
    ou true ou false
    ou NombreJSON
    ou ChaîneJSON
    ou ObjetJSON
    ou TableauJSON

NombreJSON = - NombrePositif
          ou NombrePositif
NombrePositif = NombreDécimal
              ou NombreDécimal . Chiffres
              ou NombreDécimal . Chiffres PartiExposant
              ou NombreDécimal PartiExposant
NombreDécimal = 0
              ou UnÀNeuf Chiffres
PartiExposant = e Exposant
            ou E Exposant
Exposant = Chiffres
        ou + Chiffres
        ou - Chiffres
Chiffres = Chiffre
      ou Chiffres Chiffre
Chiffre = 0 à 9
UnÀNeuf = 1 à 9

ChaîneJSON = ""
          ou " ChaîneCaractères "
ChaîneCaractères = ChaîneCaractère
                ou ChaîneCaractères ChaîneCaractère
ChaîneCaractère = un caractère
                  sauf " ou \ ou U+0000 à U+001F
                ou SéquenceÉchappement
SéquenceÉchappement = \" ou \/ ou \\ ou \b ou \f ou \n ou \r ou \t
              ou \u ChifreHexadécimal ChifreHexadécimal ChifreHexadécimal ChifreHexadécimal
ChifreHexadécimal = 0 à 9
        ou A à F
        ou a à f

ObjetJSON = { }
          ou { Membres }
Membres = ChaîneJSON : JSON
        ou Membres , ChaîneJSON : JSON

TableauJSON = [ ]
          ou [ ÉlémentsTableau ]
ÉlémentsTableau = JSON
              ou ÉlémentsTableau , JSON
```

Des espaces blancs insignifiants peuvent être présents n’importe où sauf dans un `JSONNumber` (les nombres ne doivent pas contenir d’espaces blancs) ou dans un `JSONString` (where it is interpreted as the corresponding character in the string, or would cause an error). Les caractères tabulation ([U+0009](https://unicode-table.com/en/0009/)), retour chariot ([U+000D](https://unicode-table.com/en/000D/)), saut de ligne ([U+000A](https://unicode-table.com/en/000A/)), and espace ([U+0020](https://unicode-table.com/en/0020/)) sont les seuls caractères blancs valides.

## Méthodes

- {{jsxref("JSON.parse()", "JSON.parse(<var>texte</var>[, <var>revivificateur</var>])")}}
  - : Analysez le `texte` de la chaîne comme JSON, transformez éventuellement la valeur produite et ses propriétés, et renvoyez la valeur. Toute violation de la syntaxe JSON, y compris celles concernant les différences entre JavaScript et JSON, entraîne l'envoi d'un {{jsxref("SyntaxError")}}. L'option "`revivificateur`" permet d'interpréter ce que le `remplacement` a utilisé pour remplacer d'autres types de données.
- {{jsxref("JSON.stringify()", "JSON.stringify(<var>valeur</var>[, remplacement[, expace]])")}}
  - : Retourne une chaîne JSON correspondant à la valeur spécifiée, en incluant éventuellement seulement certaines propriétés ou en remplaçant les valeurs des propriétés d'une manière définie par l'utilisateur. Par défaut, toutes les instances de {{jsxref("undefined")}} sont remplacées par {{jsxref("null")}}, et les autres types de données natives non prises en charge sont censurés. L'option de `remplacement` permet de spécifier un autre comportement.

## Spécifications

| Spécification                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES5.1', '#sec-15.12', 'JSON')}}             | {{Spec2('ES5.1')}}     | Définition initiale. |
| {{SpecName('ES6', '#sec-json-object', 'JSON')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-json-object', 'JSON')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.JSON")}}

## Voir aussi

- {{jsxref("Date.prototype.toJSON()")}}
- Quelques outils permettant de manipuler des données en JSON

  - [JSON Compare](http://jsoncompare.org/) qui permet de comparer deux JSON
  - [JSON Beautifier](http://jsonbeautifier.org/) qui permet de visualiser et d'éditer un fichier JSON
  - [JSON Parser](https://jsonparser.org/) qui permet de formatter une chaîne JSON
  - [JSON Formatter](https://extendsclass.com/json-validator.html) qui permet de formatter et échapper une chaîne JSON
  - [JSON Validator](https://tools.learningcontainer.com/json-validator/) qui permet de valider une chaîne JSON
