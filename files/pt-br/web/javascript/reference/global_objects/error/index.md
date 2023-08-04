---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
---

{{JSRef}}

O construtor de **`Error`** cria um objeto de erro. Instâncias de objetos `Error` são lançadas quando erros de tempo de execução ocorrem. O objeto `Error` também pode ser usado como objeto base para exceções definidas pelo usuário. Veja abaixo tipos de erro padrões embutidos.

## Sintaxe

```
new Error([message[, fileName[, lineNumber]]])
```

### Parâmetros

- `message`
  - : Opcional. Descrição do erro legível para humanos.
- `fileName` {{non-standard_inline}}
  - : Opcional. O valor da propriedade `fileName` no objeto de erro criado. O padrão é o nome do arquivo contendo o código que chamou o construtor de `Error()`.
- `lineNumber` {{non-standard_inline}}
  - : Opcional. O valor da propriedade `lineNumber` no objeto de `Error` criado. O padrão é o número da linha contendo a invocação do construtor `Error()`.

## Descrição

Erros em tempo de execução resultam em novos objetos `Error` sendo criados e lançados.

Esta página documenta o uso do objeto `Error` em si e seu uso como uma função construtora. Para uma lista de propriedades e métodos herdados por instâncias de `Error`, veja {{jsxref("Error.prototype")}}.

### Tipos de erro

Além do construtor genérico de `Error`, existem outros seis construtores principais de erro no JavaScript. Para exceções em _client-side_, veja [Exceções na captura de Instruções](/pt-BR/docs/Web/JavaScript/Guide/Statements#Exception_Handling_Statements).

- {{jsxref("EvalError")}}
  - : Cria uma instância representando um erro que ocorre na função global. {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Cria uma instância representando um erro que ocorre quando um erro interno na _engine_ do JavaScript é lançado. Ex: "too much recursion".
- {{jsxref("RangeError")}}
  - : Cria uma instância representando um erro que ocorre quando um valor ou parâmetro numérico está fora de seus limites válidos.
- {{jsxref("ReferenceError")}}
  - : Cria uma instância representando um erro que ocorre ao de-referenciar uma referência inválida.
- {{jsxref("SyntaxError")}}
  - : Cria uma instância representando um erro que ocorre ao fazer o _parse_ do código em {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("TypeError")}}
  - : Cria uma instância representando um erro que ocorre quando uma variável ou parâmetro não é de um tipo válido.
- {{jsxref("URIError")}}
  - : Cria uma instância representando um erro que ocorre quando são passados parâmetros inválidos para {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} ou {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}.

## Propriedades

- {{jsxref("Error.prototype")}}
  - : Permite a criação de propriedades para instâncias de `Error`.

## Métodos

O objeto `Error` global não contém métodos próprios, entretanto, ele herda alguns métodos através da cadeia de _prototypes_.

## `Instâncias de Error`

{{page('pt-BR/docs/JavaScript/Reference/Global_Objects/Error/prototype', 'Description')}}

### Propriedades

{{page('pt-BR/docs/JavaScript/Reference/Global_Objects/Error/prototype', 'Properties')}}

### Métodos

{{page('pt-BR/docs/JavaScript/Reference/Global_Objects/Error/prototype', 'Methods')}}

## Exemplos

### Lançando um erro genérico

Geralmente você cria um objeto `Error` com a intenção de lançá-lo usando a palavra-chave {{jsxref("Statements/throw", "throw")}}. Você pode capturar o erro usando uma construção de {{jsxref("Statements/try...catch", "try...catch")}}:

```js
try {
  throw new Error("Oooops!");
} catch (e) {
  alert(e.name + ": " + e.message);
}
```

### Capturando um erro específico

Você pode escolher por capturar apenas tipos de erro específicos testando o tipo do erro com a propriedade {{jsxref("Object.prototype.constructor", "constructor")}} de erro ou, se você está escrevendo para _engines_ de JavaScript modernas, a palavra-chave {{jsxref("Operators/instanceof", "instanceof")}}:

```js
try {
  Objeto.Metodo();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ": " + e.message);
  }
  // ... etc
}
```

### Tipos de erro customizados

Você pode escolher definir seus próprios tipos de erro derivando de `Error` para conseguir usar `throw new MeuErro()` e usar `instanceof MeuErro` para checar o tipo de erro na captura da exceção. A forma comum para isso está demonstrada abaixo

> **Aviso:** Note que as instâncias `MeuErro` lançadas vão reportar valores de `lineNumber` e `fileName` incorretos, ao menos no Firefox.

Veja também ["esta discussão no Stackoverflow (em inglês): What's a good way to extend Error in JavaScript?"](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript).

```js
// Cria um novo objeto que herda o construtor de Error através do prototype.
function MeuErro(message) {
  this.name = "MeuErro";
  this.message = message || "Mensagem de erro padrão";
  this.stack = new Error().stack;
}
MeuErro.prototype = Object.create(MeuErro.prototype);
MeuErro.prototype.constructor = MeuErro;

try {
  throw new MeuErro();
} catch (e) {
  console.log(e.name); // 'MeuErro'
  console.log(e.message); // 'Mensagem de erro padrão'
}

try {
  throw new MeuErro("Mensagem customizada");
} catch (e) {
  console.log(e.name); // 'MeuErro'
  console.log(e.message); // 'Mensagem customizada'
}
```

## Especificações

| Especificação                                      | Status             | Comentário                                         |
| -------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                | {{Spec2('ES1')}}   | Definição inicial. Implementada no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.11', 'Error')}}       | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-error-objects', 'Error')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Error")}}

## Veja também

- {{jsxref("Error.prototype")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
