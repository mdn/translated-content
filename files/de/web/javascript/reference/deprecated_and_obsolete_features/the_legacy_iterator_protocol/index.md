---
title: The legacy Iterator protocol
slug: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
tags:
  - ES2015
  - JavaScript
  - Obsolet
  - next()
  - veralteter Iterator
translation_of: >-
  Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol
original_slug: >-
  Web/JavaScript/Reference/Veraltete_und_abgeschaffte_Features/The_legacy_Iterator_protocol
---
{{jsSidebar("More")}}

> **Warning:** **Kein Standard.** Das veraltete Iterator-Protokoll war ein SpiderMonkey-spezifisches Feature, welches in Firefox 58 entfernt wurde. Als Alternative werden [for..of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleifen und das [iterator protocol](/de/docs/Web/JavaScript/Guide/The_Iterator_protocol) empfohlen.

## Das veraltete Iterator-Protokoll

Vor Version 26 implementierte Firefox ein anderes Iterator-Protokoll, welches dem [ES2015 Iterator protocol](/de/docs/Web/JavaScript/Guide/The_Iterator_protocol) Standard entspricht.

Ein Objekt ist ein veralteter Iterator, wenn es eine `next()` Methode mit den folgenden Semantiken implementiert, welches zum Ende der Iteration {{jsxref("Global_Objects/StopIteration", "StopIteration")}} wirft.

| Property | Value                                                       |
| -------- | ----------------------------------------------------------- |
| `next`   | Eine Funktion ohne Argumente, welche einen Wert zurückgibt. |

### Unterschied zwischen dem veralteten und dem ES2015 Iterator-Protokoll

- Der Wert wurde direkt von der `next` Methode zurückgegeben, statt der Wert der `value` Eigenschaft eines Platzhalter-Objekts zu sein.
- Das Ende der Iteration wurde durch das Werfen eines {{jsxref("Global_Objects/StopIteration", "StopIteration")}} Objekts ausgedrückt.

### Einfaches Beispiel mit dem alten Protokoll

```js
function kreiereIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           if(nextIndex < array.length){
               return array[nextIndex++];
           else
               throw new StopIteration();
       }
    }
}

var it = kreiereIterator(['yo', 'ya']);

console.log(it.next()); // 'yo'
console.log(it.next()); // 'ya'
try{
    console.log(it.next());
}
catch(e){
    if(e instanceof StopIteration){
         // Iteration beendet.
    }
}
```

## Siehe auch

- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- Mehr [veraltete und obsolete Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
