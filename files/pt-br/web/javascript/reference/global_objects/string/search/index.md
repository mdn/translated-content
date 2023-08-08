---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef}}

O método `search()` realiza uma busca por uma ocorrência entre uma expressão regular e uma {{jsxref ("String")}}.

## Sintaxe

```
str.search(regexp)
```

### Parâmetros

- `regexp`
  - : Um objeto contendo uma expressão regular. Se um objeto `obj` for passado como parâmetro e não for do tipo `RegExp`, ele será implicitamente convertido para uma {{jsxref("RegExp")}} através da instrução `new RegExp(obj)`.

### Valor retornado

O índice na string do primeiro trecho que satisfaz a expressão regular. Do contrário, o valor `-1` será retornado.

## Descrição

Quando você quiser saber se um padrão foi encontrado, e também saber seu índice dentro de uma string, use `search()`. (Se você deseja apenas saber se ele existe, use o método semelhante {{jsxref ("RegExp.prototype.test()", "test()")}} do protótipo RegExp, que retorna um booleano.)

Para obter mais informações (mas em compensação a execução se torna mais lenta), use {{jsxref ("String.prototype.match()", "match()")}} (semelhante ao método {{jsxref ("RegExp.prototype.exec()" , "exec()")}} da RegExp).

## Exemplos

### Usando `search()`

O exemplo a seguir pesquisa uma string com dois objetos `regexp` diferentes para mostrar uma pesquisa bem-sucedida (valor positivo) vs. uma pesquisa mal-sucedida (-1).

```js
let str = "hey JudE";
let re = /[A-Z]/g;
let reDot = /[.]/g;
console.log(str.search(re)); // retorna 4, que é o índice da primeira letra maiúscula "J"
console.log(str.search(reDot)); // retorna -1 pois não conseguiu encontrar o ponto "."
```

## Especificações

| Specificação                                                                       | Status               | Comentário(s)                                      |
| ---------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                                | {{Spec2('ES3')}}     | Definição inicial. Implementado no JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.12', 'String.prototype.search')}}                 | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.search', 'String.prototype.search')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.search', 'String.prototype.search')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.search")}}

## Notas específicas para a engine Gecko

- Antes do Gecko 8.0, `search()` foi implementado incorretamente. Quando era chamadosem parâmetros ou com {{jsxref("undefined")}}, ele buscava pela string '`undefined`', ao invés de buscar pela string vazia. Isto foi corrigido. Agora `'a'.search()` e `'a'.search(undefined)` corretamente retornam 0.
- A partir do Gecko 39, o argumento não-padrão `flags` está defasado (deprecated) e dispara um aviso no console ([Erro do Firefox 1142351](https://bugzil.la/1142351)).
- A partir do Gecko 47, o argumento não-padrão `flags` não é mais suportado em builds _non-release_ e em breve será removido inteiramente ([Erro do Firefox 1245801](https://bugzil.la/1245801)).
- A partir do Gecko 49, o argumento não-padrão `flags` não é mais suportado ([Erro do Firefox 1108382](https://bugzil.la/1108382)).

## Veja também

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
