---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
---

{{JSRef}}

O método `trimStart()` remove espaços do começo de uma _string_. `trimLeft()` é um apelido para este método.

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## Sintaxe

```
str.trimStart();
str.trimLeft();
```

### Valor retornado

Uma nova _string_ representando a _string_ original sem os espaços no começo (fim à esquerda).

## Descrição

Os métodos `trimStart()` / `trimLeft()` retornam a _string_ sem os espaços no fim à esquerda. `trimLeft()` ou `trimStart()` não altera o valor da _string_ original.

### _Aliasing_

Para consistência com funções como {{jsxref("String.prototype.padStart")}} o nome padrão do método é `trimStart`. Entretanto, por razões de compatibilidade na _web_, `trimLeft` permanece como um apelido para `trimStart`. Em alguns motores isso significa:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Polyfill

```js
//https://github.com/FabioVergani/js-Polyfill_String-trimStart

(function (w) {
  var String = w.String,
    Proto = String.prototype;

  (function (o, p) {
    if (p in o ? (o[p] ? false : true) : true) {
      var r = /^\s+/;
      o[p] =
        o.trimLeft ||
        function () {
          return this.replace(r, "");
        };
    }
  })(Proto, "trimStart");
})(window);

/*
ES6:
(w=>{
    const String=w.String, Proto=String.prototype;

    ((o,p)=>{
        if(p in o?o[p]?false:true:true){
            const r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);
*/
```

## Exemplos

### Usando `trimStart()`

O seguinte exemplo mostra uma _string_ em caixa baixa `'foo '`:

```js
var str = "   foo  ";

console.log(str.length); // retorna 8

str = str.trimStart();
console.log(str.length); // retorna 5
console.log(str); // retorna 'foo  '
```

## Especificações

| Especificação                                                                             |
| ----------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.trimstart', ' String.prototype.trimStart')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.trimStart")}}

## Veja também

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
