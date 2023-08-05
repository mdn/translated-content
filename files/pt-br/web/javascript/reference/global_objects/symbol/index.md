---
title: Símbolo
slug: Web/JavaScript/Reference/Global_Objects/Symbol
---

{{JSRef("Global_Objects", "Symbol")}}

## Sumário

A função `Symbol()` retorna um valor do tipo **símbolo (symbol)**, tem propriedades estáticas que expõem vários membros dos objetos nativos, possuem métodos estáticos que expõem o registro de símbolos globais e se parecem com uma classe de objeto nativo, mas estão incompletos como construtor porque não suportam a sintaxe "`new Symbol()`".

Cada valor símbolo retornado de `Symbol()` é único. Um símbolo pode ser usado como o identificador para propriedades de objetos; esse é o único propósito do tipo de dado. Algumas explicações sobre propósito e uso podem ser encontradas {{Glossary("Symbol", "no verbete do glossário para Symbol")}}.

O tipo de dado **símbolo** é um {{Glossary("Primitive", "tipo de dado primitivo")}}.

## Sintaxe

```
Symbol([descrição])
```

### Parâmetros

- `descrição` {{optional_inline}}
  - : String opcional. Uma descrição de símbolo no qual pode ser usado para debugar, mas não para acessar o próprio símbolo.

## Descrição

Para criar um novo símbolo primitivo, simplesmente escreva `Symbol()` com uma string opcional para sua descrição:

```js
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
```

O código acima cria três símbolos novos. Note que a função **_Symbol("foo")_** não faz a string **_"foo"_** ser um símbolo. Ela cria um novo símbolo a cada vez que é chamada:

```js
Symbol("foo") === Symbol("foo"); // false
```

A sintaxe a seguir com o operador {{jsxref("Operators/new", "new")}} vai resultar em um {{jsxref("TypeError")}}:

```js
var sym = new Symbol(); // TypeError
```

Isso evita que os autores criem um objeto empacotador explícito de `Symbol` em vez de um novo valor de símbolo. O que pode surpreender, pois, geralmente é possível criar objetos empacotadores explícitos em torno de tipos de dados primitivos (por exemplo, `new Boolean`, `new String` e `new Number`).

Se você realmente quiser criar um objeto empacotador de `Symbol`, você pode usar a função `Object()`:

```js
var sym = Symbol("foo");
typeof sym; // "symbol"
var symObj = Object(sym);
typeof symObj; // "object"
```

### Símbolos compartilhados no registro global de símbolo

A sintaxe acima usando a função `Symbol()` não criará um símbolo global que estará disponível em todo o seu código. Para criar símbolos disponíveis em vários arquivos em um escopo como se fosse global, use os métodos {{jsxref("Symbol.for()")}} e {{jsxref("Symbol.keyFor()")}} para definir e configurar símbolos no registro global de símbolo.

### Encontrando propriedades de símbolos em objetos

O método {{jsxref("Object.getOwnPropertySymbols()")}} retorna um array de símbolos e permite que você encontre propriedades de símbolos em um determinado objeto. Observe que cada objeto é inicializado sem suas próprias propriedades de símbolo, de modo que este array estará vazio, a menos que você estabeleça propriedades de símbolo no objeto.

## Propriedades

- `Symbol.length`
  - : Propriedade de tamanho cujo valor é 1.
- {{jsxref("Symbol.prototype")}}
  - : Representa o protótipo do `Symbol` construtor.

### Símbolos conhecidos

Em adição para seus próprios símbolos, JavaScript possui alguns símbolos built-in que representa os comportamentos internos da linguagem que não foram revelados para os desenvolvedores no ECMAScript 5 e anterior. Esses símbolos podem ser acessados usando as seguintes propriedades:

- Symbol.hasInstance
  - : Especificado como @@hasInstance. Um método que determina se um construtor de um objeto é reconhecido como a instância de um objeto. Usado por {{jsxref("Operators/instanceof", "instanceof")}}.
- Symbol.isConcatSpreadable
  - : Especificado como @@isConcatSpreadable. Um valor Booleano indicando se um objeto deve ser adicionado como elemento de uma array. Usado por {{jsxref("Array.prototype.concat()")}}.
- Symbol.isRegExp
  - : Especificado como @@isRegExp. Um valor Booleano indicando se um objeto pode ser usado como uma expressão regular.
- Symbol.iterator
  - : Especificado como @@iterator. Um método retornando o iterador padrão para um objeto. Usado por [`for...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of).
- Symbol.toPrimitive
  - : Especificado como @@toPrimitive. Um método convertendo um objeto para um valor primitivo.
- Symbol.toStringTag
  - : Especificado como @@toStringTag. Um valor string usado para descrição padrão de um objeto. Usado por {{jsxref("Object.prototype.toString()")}}
- Symbol.unscopables
  - : Especificado como @@unscopables. Uma Array com valores string que são valores propriedade. Esses são excluídos das ligações com o objeto associado.

## Métodos

- {{jsxref("Symbol.for()", "Symbol.for(key)")}}
  - : Procura por símbolos existentes com as chaves dada e retorna as chaves se forem encontradas. Caso contrário um novo símbolo será criado no registro de símbolo global com essa chave.
- {{jsxref("Symbol.keyFor", "Symbol.keyFor(sym)")}}
  - : Retorna um símbolo compartilhado do registro global de símbolo para o símbolo dado.

## `Symbol` protótipo

Todos os símbolos herdados de {{jsxref("Symbol.prototype")}}.

### Propriedades

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Symbol/prototype','Properties')}}

### Métodos

{{page('en-US/Web/JavaScript/Reference/Global_Objects/Symbol/prototype','Methods')}}

## Exemplos

### Usando o operador `typeof` com símbolos

O operador {{jsxref("Operators/typeof", "typeof")}} pode ajudar a identificar os símbolos.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Conversões de tipos de símbolos

Algumas anotações quando trabalhando com conversão de tipo de símbolos.

- Quando estiver tentando converter um símbolo para um número, um {{jsxref("TypeError")}} será retornado.
  (e.g. `+sym` or `sym | 0`).
- Quando usando operador de igualdade, `Object(sym) == sym` retorna `true`.
- `Symbol("foo") + "bar"` lança um {{jsxref("TypeError")}} (não pode converter um símbolo para string). Isso previne você de silenciosamente criar um novo nome de propriedade string a partir de um símbolo, por exemplo.
- A ["safer" `String(sym)` conversion](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion) funciona como uma chamada para {{jsxref("Symbol.prototype.toString()")}} com símbolos, mas note que uma `new String(sym)` será lançada.

### Símbolos e `for...in` iteração

Símbolos não são visíveis em [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) iterações. Além de, {{jsxref("Object.getOwnPropertyNames()")}} não retornará propriedades do objeto símbolo, entretanto, você pode fazer uso do {{jsxref("Object.getOwnPropertySymbols()")}} para conseguir esses resultados.

```js
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
  console.log(i); // logs "c" and "d"
}
```

### Símbolos e `JSON.stringify()`

Propriedade com chave de símbolo vão ser completamente ignoradas quando usando `JSON.stringify()`:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Para mais detalhes, veja {{jsxref("JSON.stringify()")}}.

### Objeto wrapper de símbolo como chave de propriedade

Quando um objeto wrapper de um símbolo é usado como uma chave de propriedade, esse objeto será coerced para o seu símbolo wrapper:

```js
var sym = Symbol("foo");
var obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // still 1
```

## Especificações

| Specification                                           | Status              | Comment            |
| ------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-symbol-objects', 'Symbol')}} | {{Spec2('ES2015')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol")}}

## Veja também

- [Glossary: Symbol data type](/pt-BR/docs/Glossary/Symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [Data types and data structures](/pt-BR/docs/Web/JavaScript/Data_structures)
