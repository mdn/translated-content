---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
---

{{JSRef}}

O método **`repeat()`** constrói e retorna uma nova string com um determinado número de cópias concatenadas da string original.

## Sintaxe

```
str.repeat(count);
```

### Parâmetros

- `count`
  - : Um número inteiro entre 0 e {{jsxref("Global_Objects/Number/POSITIVE_INFINITY", "+Infinity")}}, indicando o número de vezes que a string deve ser repetida.

### Valor retornado

Uma nova string contendo o número especificado de cópias da string original.

### Exceções

- {{jsxref("Errors/Negative_repetition_count", "RangeError")}}: o número de repetições não pode ser negativo.
- {{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: o número de repetições deve ser menor que infinito e não deve ultrapassar o tamanho máximo da string.

## Exemplos

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (o número será convertido para inteiro)
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() é um método genérico)
```

## Polyfill

O método `repeat()` foi adicionado à especificação ECMAScript 2015 e pode ainda não estar disponível em todas as implementações do JavaScript. No entanto, você pode usar o seguinte polyfill para implementar o `String.prototype.repeat()`:

```js
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    "use strict";
    if (this == null) {
      throw new TypeError(
        "não é possível converter " + this + " para um objeto",
      );
    }
    var str = "" + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError("o núm. de repetições não pode ser negativo");
    }
    if (count == Infinity) {
      throw new RangeError("o núm. de repetições deve ser menor que infinito");
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return "";
    }

    // Ao Garantir que count seja um inteiro de 31 bits nos dá uma grande otimização
    // na parte principal. Porém, navegadores atuais (de agosto de 2014 pra cá)
    // não conseguem mais manipular strings de 1 << 28 chars ou maiores, então:
    if (str.length * count >= 1 << 28) {
      throw new RangeError(
        "o núm. de repetições não deve estourar o tamanho máx. de uma string",
      );
    }
    var rpt = "";
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  };
}
```

#### Polyfill ES5

```
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

// teste:
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
```

#### Polyfill ES6

```
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
```

## Especificações

| Specification                                                                      | Status               | Comment            |
| ---------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-string.prototype.repeat', 'String.prototype.repeat')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-string.prototype.repeat', 'String.prototype.repeat')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.repeat")}}

## Veja também

- {{jsxref("String.prototype.concat()")}}
