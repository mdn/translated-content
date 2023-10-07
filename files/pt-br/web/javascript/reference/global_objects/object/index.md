---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
---

{{JSRef}}

O construtor `Object` cria um wrapper de objeto.

## Sintaxe

```
// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])
```

### Parametros

- `nameValuePair1, nameValuePair2, ... nameValuePairN`
  - : Pares de nomes (strings) e valores (qualquer valor) em que o nome é separado do valor por dois pontos.
- `value`
  - : Qualquer valor.

## Descrição

O construtor `Object` cria um wrapper de objeto para o valor fornecido. Se o valor for {{jsxref ("null")}} ou {{jsxref ("undefined")}}, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um Type que corresponde ao dado valor. Se o valor já for um objeto, ele retornará o valor.

Quando chamado em um contexto não-construtor, o `object` se comporta de forma idêntica ao `new Object ()`.

Veja também [object initializer / literal syntax](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Propriedades do construtor `Object`

- `Object.length`
  - : Tem um valor de 1.
- {{jsxref("Object.prototype")}}
  - : Permite a adição de propriedades a todos os objetos do tipo Object.

## Métodos do construtor `Object`

- {{jsxref("Object.assign()")}}
  - : Copia os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino.
- {{jsxref("Object.create()")}}
  - : Cria um novo objeto com o objeto e as propriedades do protótipo especificado.
- {{jsxref("Object.defineProperty()")}}
  - : Adiciona a propriedade nomeada descrita por um determinado descritor a um objeto.
- {{jsxref("Object.defineProperties()")}}
  - : Adiciona as propriedades nomeadas descritas pelos descritores fornecidos a um objeto.
- {{jsxref("Object.entries()")}}
  - : Retorna uma matriz contendo todos os pares `[key, value]` das próprias propriedades de string enumeráveis de um determinado objeto.
- {{jsxref("Object.freeze()")}}
  - : Congela um objeto: outro código não pode excluir ou alterar nenhuma propriedade.
- {{jsxref("Object.fromEntries()")}}
  - : Retorna um novo objeto de um iterável de pares de valor-chave (reverso à {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Retorna um descritor de propriedade para uma propriedade nomeada em um objeto.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Retorna um objeto contendo todos os descritores de propriedade para um objeto.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Retorna uma matriz contendo os nomes de todas as propriedades enumeráveis e não enumeráveis do próprio objeto fornecido.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Retorna uma matriz de todas as propriedades de símbolo encontradas diretamente sobre um determinado objeto.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Retorna o protótipo do objeto especificado.
- {{jsxref("Object.is()")}}
  - : Compara se dois valores são o mesmo valor. Equivale a todos os valores de `NaN` (que diferem da Comparação de Igualdade Abstrata e da Comparação de Igualdade Estrita).
- {{jsxref("Object.isExtensible()")}}
  - : Determina se a extensão de um objeto é permitida.
- {{jsxref("Object.isFrozen()")}}
  - : Determina se um objeto foi congelado.
- {{jsxref("Object.isSealed()")}}
  - : Determina se um objeto está selado.
- {{jsxref("Object.keys()")}}
  - : Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis do objeto fornecido.
- {{jsxref("Object.preventExtensions()")}}
  - : Impede qualquer extensão de um objeto.
- {{jsxref("Object.seal()")}}
  - : Impede que outro código exclua propriedades de um objeto.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Define o protótipo (isto é, a propriedade interna `[[Prototype]]`).
- {{jsxref("Object.values()")}}
  - : Retorna uma matriz contendo os valores que correspondem a todas as propriedades de string enumeráveis do próprio objeto.

## Instâncias de `Object` e `Object` de protótipo de objeto

Todos os objetos em JavaScript são descendentes do `Object`; todos os objetos herdam métodos e propriedades de {{jsxref("Object.prototype")}}, embora eles possam ser substituídos. Por exemplo, protótipos de outros construtores substituem a propriedade `constructor` e fornecer seus próprios métodos `toString()`. As alterações no objeto de protótipo `Object` são propagadas para todos os objetos, a menos que as propriedades e os métodos sujeitos a essas alterações sejam substituídos na cadeia de protótipos.

### Propriedades (enUS)

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Properties')}}

### Métodos (enUS)

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Methods')}}

## Excluindo uma propriedade de um objeto

Não há nenhum método em um Objeto para excluir suas próprias propriedades (por exemplo, como [`Map.prototype.delete()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)). Para isso, é necessário usar o operador delete.

## Exemplos

### Usando `Object` com tipos `undefined` e `null`

Os exemplos a seguir armazenam um `Object` vazio na variável "`o`":

```js
var o = new Object();
```

```js
var o = new Object(undefined);
```

```js
var o = new Object(null);
```

### Using `Object` to create `Boolean` objects

Os exemplos a seguir armazenam objetos {{jsxref("Boolean")}} na variável "`o`":

```js
// equivalent to o = new Boolean(true);
var o = new Object(true);
```

```js
// equivalent to o = new Boolean(false);
var o = new Object(Boolean());
```

## Especificações

| Especificações                                           | Status               | Comentário                                                                                        |
| -------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                      | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.0.                                                |
| {{SpecName('ES5.1', '#sec-15.2', 'Object')}}             | {{Spec2('ES5.1')}}   | ------------------------------------------------                                                  |
| {{SpecName('ES6', '#sec-object-objects', 'Object')}}     | {{Spec2('ES6')}}     | Adicionado `Object.assign`, `Object.getOwnPropertySymbols`, `Object.setPrototypeOf` e `Object.is` |
| {{SpecName('ESDraft', '#sec-object-objects', 'Object')}} | {{Spec2('ESDraft')}} | Adicionado `Object.entries`, `Object.values` e `Object.getOwnPropertyDescriptors`.                |

## Compatibilidade

{{Compat("javascript.builtins.Object")}}

## Veja também

- [Object initializer](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer)
