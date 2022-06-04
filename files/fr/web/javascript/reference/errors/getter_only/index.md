---
title: 'TypeError: setting a property that has only a getter'
slug: Web/JavaScript/Reference/Errors/Getter_only
tags:
  - Erreurs
  - JavaScript
  - Mode strict
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Getter_only
original_slug: Web/JavaScript/Reference/Erreurs/Getter_only
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Cannot set property "prop" of #<Object> which has only a getter (Chrome)
```

## Type d'erreur

{{jsxref("TypeError")}}, uniquement en [mode strict](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

## Quel est le problème ?

On essaie de fournir une nouvelle valeur pour une propriété qui ne dispose que d'un [accesseur](/fr/docs/Web/JavaScript/Reference/Fonctions/get). Ceci échouera en mode non-strict mais lèvera une exception {{jsxref("TypeError")}} en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

## Exemples

Dans l'exemple qui suit, on voit comment créer un accesseur sur une propriété. En revanche, dans la définition de l'objet, on n'inclut aucun [mutateur](/fr/docs/Web/JavaScript/Reference/Fonctions/set) et une exception `TypeError` sera déclenchée lorsqu'on voudra modifier la propriété `temperature` pour la passer à `30`. Pour plus de détails, on pourra consulter la page {{jsxref("Object.defineProperty()")}}.

```js example-bad
"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    }
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting a property that has only a getter
```

Pour corriger cette erreur, soit on retire la ligne 16 (où on tente de modifier la propriété) soit on implémente un mutateur, comme ceci :

```js example-good
"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## Voir aussi

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
