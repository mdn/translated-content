---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Referenz
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/repeat
---
{{JSRef}}

Die **`repeat()`**-Funktion erzeugt und gibt eine Zeichenkette zurück, die die spezifizierte Anzahl von Kopien der angegebenen Zeichenkette aneinandergereiht enthält.

## Syntax

    str.repeat(Anzahl);

### Parameter

- `Anzahl`
  - : Eine Zahl zwischen 0 und +∞: \[0, +∞), die die Anzahl Kopien der Ursprungszeichenkette in der neu erzeugten Zeichenkette definiert.

### Rückgabeergebnis

Eine neue Zeichenkette mit der angegebenen Anzahl an Kopien der vorgegebenen Zeichenkette.

### Ausnahmen

- {{jsxref("Errors/Negative_repetition_count", "RangeError")}}: die Wiederholungsanzahl darf nicht negativ sein.
- {{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: die Anzahl an Wiederholungen darf nicht unendlich sein und die maximale Zeichenkettenlänge nicht überschreiten.

## Beispiele

```js
'abc'.repeat(-1);   // Parameterfehler
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (Anzahl wird in einen ganzzahligen Integer umgewandelt)
'abc'.repeat(1/0);  // Parameterfehler

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() ist eine generische Methode)
```

## Polyfill

Diese Funktion wurde zur ECMAScript 2015 Spezifikation hinzugefügt und steht unter Umständen noch nicht in allen JavaScript-Implementierungen zur Verfügung. Bedarfsweise können Sie die Methode `String.prototype.repeat()` durch folgenden Code zur Verfügung stellen:

```js
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}
```

#### Polyfill ES5

    //#es5
    'use strict';
    (function(win){
     var typeOf=(function(w){var f=function f(x){return typeof(x)},o=w.Symbol,p;if(o && typeof(o)==='function' && typeof(o.iterator)==='symbol'){p=o.prototype;f=function(x){return x && x.constructor===o && x!==p?'symbol':typeof x}};return f})(win),
     exist=function(o,p,t){return p in o && typeOf(o[p])===t};
     (function(w){
        var o=w.String.prototype;
        if(!exist(o,'repeat','function')){o.repeat=(function(A,E){return function(n){var i=n>>0,s=this,l=s.length,j;if(i===0||l<1){s=''}else{j=268435456;if(i<0||i>=j||i*l>j){throw new RE('Invalidcountvalue')}else if(i>0){s=A(++i).join(s)}};return s}})(w.Array,w.RangeError)};
     })(win);
    })(window);

    //test:
    console.clear();
    console.log(
    'abc'.repeat(false),//''
    'abc'.repeat({}),//''
    'abc'.repeat([]),//''
    'abc'.repeat(['']),//''
    'abc'.repeat([0]),//''
    'abc'.repeat([0,1]),//''
    'abc'.repeat([1,1]),//''
    'abc'.repeat(0),//''
    'abc'.repeat(.6),//''
    'abc'.repeat(true),//'abc'
    'abc'.repeat(1),//'abc'
    'abc'.repeat(2),//'abcabc'
    'abc'.repeat([2]),//'abcabc'
    'abc'.repeat(3.5),//'abcabcabc'
    ''.repeat(2)//''
    );
    console.log(
    'abc'.repeat(-Infinity),//RangeError: Invalid count value
    'abc'.repeat(Infinity),//RangeError: Invalid count value
    'abc'.repeat(1/0),//RangeError: Invalid count value
    'abc'.repeat(-1)//RangeError: Invalid count value
    );

    /*
    es5 src:
    'use strict';
    (function(win){

     var typeOf=(function(w){var f=function f(x){return typeof(x)},o=w.Symbol,p;if(o && typeof(o)==='function' && typeof(o.iterator)==='symbol'){p=o.prototype;f=function(x){return x && x.constructor===o && x!==p?'symbol':typeof x}};return f})(win),
     exist=function(o,p,t){return p in o && typeOf(o[p])===t};

     (function(w){
        var o=w.String.prototype;
        if(!exist(o,'repeat','function')){
            o.repeat=(function(A,E){
                return function(n){
                    var i=n>>0,s=this,l=s.length,j;
                    if(i===0||l<1){s=''}else{
                        j=268435456;
                        if(i<0||i>=j||i*l>j){throw new RE('Invalidcountvalue')}else if(i>0){s=A(++i).join(s)}
                    };
                    return s
                };
            })(w.Array,w.RangeError);
        };
        //..
     })(win);

    })(window);
    */

#### Polyfill ES6

    //#es6

    (w=>{

        const typeOf=(o=>{let f=x=>typeof x;if(o && 'function'===typeof o){const s='symbol';if(s===typeof o.iterator){const p=o.prototype;f=x=>x && x.constructor===o && x!==p?s:typeof x}};return f})(w.Symbol),

        exist=(o,p,t)=>p in o && typeOf(o[p])===t;

        (o=>{

            if(!exist(o,'repeat','function')){const A=w.Array,E=w.RangeError;o.repeat=function(n){var i=n>>0,s='';if(i!==0){let t=this;const l=t.length;if(l!==0){if(i<0||i>=(t=268435456)||i*l>t){throw new E('Invalid count value')}else if(i>0){s=A(++i).join(t)}}};return s}};

        })(w.String.prototype);

    })(window);

    /*

    es6 src:

    (w=>{

        const typeOf=(o=>{let f=x=>typeof x;if(o && 'function'===typeof o){const s='symbol';if(s===typeof o.iterator){const p=o.prototype;f=x=>x && x.constructor===o && x!==p?s:typeof x}};return f})(w.Symbol),

        exist=(o,p,t)=>p in o && typeOf(o[p])===t;


        (o=>{

            if(!exist(o,'repeat','function')){

                const A=w.Array;

                o.repeat=function(n){var i=n>>0,s='';if(i!==0){let t=this;const l=t.length;if(l!==0){if(i<0||i>=(t=268435456)||i*l>t){throw new RangeError('Invalid count value')}else if(i>0){s=A(++i).join(t)}}};return s};

            };

            //..

        })(w.String.prototype);


    })(window);

    */


    //test:

    console.clear();

    console.log(

    'abc'.repeat(false),//''

    'abc'.repeat({}),//''

    'abc'.repeat([]),//''

    'abc'.repeat(['']),//''

    'abc'.repeat([0]),//''

    'abc'.repeat([0,1]),//''

    'abc'.repeat([1,1]),//''

    'abc'.repeat(0),//''

    'abc'.repeat(.6),//''

    'abc'.repeat(true),//'abc'

    'abc'.repeat(1),//'abc'

    'abc'.repeat(2),//'abcabc'

    'abc'.repeat([2]),//'abcabc'

    'abc'.repeat(3.5),//'abcabcabc'

    ''.repeat(2)//''

    );

    console.log(

    'abc'.repeat(-Infinity),//RangeError: Invalid count value

    'abc'.repeat(Infinity),//RangeError: Invalid count value

    'abc'.repeat(1/0),//RangeError: Invalid count value

    'abc'.repeat(-1)//RangeError: Invalid count value

    );

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------- |
| {{SpecName('ES2015', '#sec-string.prototype.repeat', 'String.prototype.repeat')}} | {{Spec2('ES2015')}}     | Erste Definition. |
| {{SpecName('ESDraft', '#sec-string.prototype.repeat', 'String.prototype.repeat')}} | {{Spec2('ESDraft')}} |                   |

## Browserkompatibilität

{{Compat("javascript.builtins.String.repeat")}}
