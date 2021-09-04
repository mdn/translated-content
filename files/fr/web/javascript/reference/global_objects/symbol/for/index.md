---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/for
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/for
---
{{JSRef}}

La méthode **`Symbol.for(clé)`** permet de chercher parmi les symboles existants enregistrés dans le registre global de l'environnement d'exécution. Si un symbole associé à la clé donnée existe, il est renvoyé par la fonction, sinon un nouveau symbole associé à cette clé est créé dans le registre.

{{EmbedInteractiveExample("pages/js/symbol-for.html")}}

## Syntaxe

    Symbol.for(clé);

### Paramètres

- clé
  - : Une chaîne de caractères, obligatoire. La clé correspondant au symbole (également utilisée pour la description du symbole).

### Valeur de retour

Un symbole existant s'il en a été trouvé un avec la clé fournie. Sinon, un nouveau symbole est créé puis renvoyé par la méthode.

## Description

À la différence de `Symbol()`, la méthode `Symbol.for()` crée un symbole enregistré dans le registre global. `Symbol.for()` ne crée pas nécessairement un nouveau symbole pour chaque appel, elle vérifie d'abord si un symbole avec la `clé` donnée est d'ores et déjà présent dans le registre. Si c'est le cas, le symbole correspondant est renvoyé, sinon `Symbol.for()` crée un nouveau symbol global.

### Registre global pour les symboles

Le registre global des symboles est une liste, initialement vide, dont les éléments ont la structure suivante :

| Nom du champ | Valeur                                                                                  |
| ------------ | --------------------------------------------------------------------------------------- |
| [[key]]      | Une chaîne de caractères représentant la clé pour identifier un symbole en particulier. |
| [[symbol]]   | Un symbole enregistré de façon globale.                                                 |

## Exemples

```js
Symbol.for("toto"); // crée un nouveau symbole global
Symbol.for("toto"); // renvoie le symbole déjà existant

// Globalement on a un symbole par clé, localement non
Symbol.for("machin") === Symbol.for("machin"); // true
Symbol("machin") === Symbol("machin"); // false

// La clé sert également de description
var sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

Afin d'éviter des conflits entre les clés des symboles globaux liés à votre application et les autres symboles potentiels (bibliothèques externes, etc...), il peut être judicieux de les préfixer :

```js
Symbol.for("mdn.toto");
Symbol.for("mdn.machin");
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.for', 'Symbol.for')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.for', 'Symbol.for')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.for")}}

## Voir aussi

- {{jsxref("Symbol.keyFor()")}}
