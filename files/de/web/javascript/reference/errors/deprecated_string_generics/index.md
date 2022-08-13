---
title: 'Warning: String.x is deprecated; use String.prototype.x instead'
slug: Web/JavaScript/Reference/Errors/Deprecated_String_generics
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_String_generics
original_slug: Web/JavaScript/Reference/Fehler/Deprecated_String_generics
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: String.charAt            is deprecated; use String.prototype.charAt            instead
    Warning: String.charCodeAt        is deprecated; use String.prototype.charCodeAt        instead
    Warning: String.concat            is deprecated; use String.prototype.concat            instead
    Warning: String.contains          is deprecated; use String.prototype.contains          instead
    Warning: String.endsWith          is deprecated; use String.prototype.endsWith          instead
    Warning: String.includes          is deprecated; use String.prototype.includes          instead
    Warning: String.indexOf           is deprecated; use String.prototype.indexOf           instead
    Warning: String.lastIndexOf       is deprecated; use String.prototype.lastIndexOf       instead
    Warning: String.localeCompare     is deprecated; use String.prototype.localeCompare     instead
    Warning: String.match             is deprecated; use String.prototype.match             instead
    Warning: String.normalize         is deprecated; use String.prototype.normalize         instead
    Warning: String.replace           is deprecated; use String.prototype.replace           instead
    Warning: String.search            is deprecated; use String.prototype.search            instead
    Warning: String.slice             is deprecated; use String.prototype.slice             instead
    Warning: String.split             is deprecated; use String.prototype.split             instead
    Warning: String.startsWith        is deprecated; use String.prototype.startsWith        instead
    Warning: String.substr            is deprecated; use String.prototype.substr            instead
    Warning: String.substring         is deprecated; use String.prototype.substring         instead
    Warning: String.toLocaleLowerCase is deprecated; use String.prototype.toLocaleLowerCase instead
    Warning: String.toLocaleUpperCase is deprecated; use String.prototype.toLocaleUpperCase instead
    Warning: String.toLowerCase       is deprecated; use String.prototype.toLowerCase       instead
    Warning: String.toUpperCase       is deprecated; use String.prototype.toUpperCase       instead
    Warning: String.trim              is deprecated; use String.prototype.trim              instead
    Warning: String.trimLeft          is deprecated; use String.prototype.trimLeft          instead
    Warning: String.trimRight         is deprecated; use String.prototype.trimRight         instead

## Fehlertyp

Warnung. JavaScript unterbricht die Ausführung nicht.

## Was ist falsch gelaufen?

Die nicht standardisierten generischen {{jsxref("String")}} Methoden sind veraltet und werden in Zukunft gelöscht (keine Browserübergreifende Unterstützung, nur in Firefox verfügbar). String-Generics stellen String-Instanzmethoden für das String-Objekt bereit, wodurch String-Methoden auf jedes Objekt angewendet werden können.

Firefox {{bug(1222552)}} dokumentiert das Entfernen von generischen String Methoden.

## Beispiele

### Fehlerfälle

```js example-bad
var num = 15;
String.replace(num, /5/, '2');
```

### Gültige Fälle

```js example-good
var num = 15;
String(num).replace(/5/, '2');
```

## Shim

Das Folgende ist ein Shim zur Unterstützung nicht unterstützender Browser:

```js
/*globals define*/
// Assumes all supplied String instance methods already present
// (one may use shims for these if not available)
(function() {
  'use strict';

  var i,
    // We could also build the array of methods with the following, but the
    //   getOwnPropertyNames() method is non-shimable:
    // Object.getOwnPropertyNames(String).filter(function(methodName) {
    //   return typeof String[methodName] === 'function';
    // });
    methods = [
      'contains', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
      'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
      'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase', 'normalize',
      'toLocaleUpperCase', 'localeCompare', 'match', 'search', 'slice',
      'replace', 'split', 'substr', 'concat', 'localeCompare'
    ],
    methodCount = methods.length,
    assignStringGeneric = function(methodName) {
      var method = String.prototype[methodName];
      String[methodName] = function(arg1) {
        return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
      };
    };

  for (i = 0; i < methodCount; i++) {
    assignStringGeneric(methods[i]);
  }
}());
```

## Siehe auch

- {{jsxref("String")}}
- Es gibt ebenfalls {{jsxref("Global_Objects/Array", "Generische Array Methoden", "#Array_generic_methods", 1)}} (die auch veraltet sind).
