---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
---

{{jsSidebar("Statements")}}

A declaração **`function*`** (palavra chave `function` seguida de um asterisco) define uma _função geradora_ (_generator function_), que retorna um objeto {{jsxref("Global_Objects/Generator","Generator")}}.

{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}

Você também pode definir funções geradoras usando o construtor {{jsxref("GeneratorFunction")}} ou a sintaxe da expressão de uma função.

## Sintaxe

```
function* name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : O nome da função.
- `param`
  - : O nome do argumento que será passado á função. Uma função pode ter até 255 argumentos.
- `statements`
  - : As instruções que formam o corpo da função.

## Descrição

Geradores são funções cuja execução pode ser interrompida e posteriormente reconduzida. Seus contextos (de associações de variáveis) ficarão salvos entre cada recondução.

Geradores em JavaScript — especialmente quando combinados com _Promises_ — são uma ferramenta muito poderosa para programação assíncrona, por mitigarem — se não eliminarem — problemas com callbacks, como o [Callback Hell](http://callbackhell.com/) e [Inversão de Controle](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/). Funções [`async`](/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) são fundamentadas nisso.

Chamar uma função geradora não executa seu conteúdo imediatamente; ao invés disso um objeto _[iterator](/pt-BR/docs/Web/JavaScript/Guide/The_Iterator_protocol)_ é retornado. Quando o método `next()` do objeto _iterator_ é chamado, o conteúdo da função do gerador é executado até a primeira expressão {{jsxref("Operators/yield", "yield")}}, que especifica o valor a ser devolvido do _iterator_ ou com {{jsxref("Operators/yield*", "yield*")}} que delega para outra função geradora. O método `next()` retorna um objeto com uma propriedade `value` contendo o valor retornado e a propriedade _boolean_: `done` indicando se o gerador produziu seu último valor. Chamar o método `next()` com um argumento resumirá a execução da função geradora, substituindo a expressão `yield` onde a execução foi pausada com o argumento de `next()`.

Uma expressão `return` em um gerador, quando executada, fará com que o gerador termine (isto é, a propriedade `done` do objeto retornado será atribuído com o valor `true`). Se um valor foi retornado, este será usado como propriedade `value` do objeto retornado pelo gerador. Semelhantemente a uma expressão `return`, um erro lançado dentro do gerador o terminará — a não ser que tratado no corpo do gerador. Quando um gerador estiver terminado, chamadas `next` subsequentes não executarão nenhum código do gerador, retornarão simplesmente um objeto da seguinte forma: `{value: undefined, done: true}`.

## Exemplos

### Exemplo simples

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...
```

### Exemplo com yield\*

```js
function* outroGerador(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* gerador(i) {
  yield i;
  yield* outroGerador(i);
  yield i + 10;
}

var gen = gerador(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Passando argumentos em geradores

```
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// a primeira chamada next é executada desde o início da função
// até a primeira declaração yield
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
```

### Declaração de retono em um gerador

```
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### Geradores não possuem construtor

```
function* f() {}
var obj = new f; // lança o TypeError: f não é construtor
```

### Gerador definido em uma expressão

```
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
```

## Especificações

| Especificação                                                               | Status               | Comentário                                                                                                            |
| --------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-generator-function-definitions', 'function*')}}  | {{Spec2('ES2015')}}  | Definição inicial.                                                                                                    |
| {{SpecName('ES2016', '#sec-generator-function-definitions', 'function*')}}  | {{Spec2('ES2016')}}  | Mudou para que _generators_ não tenham a armadilha de \[\[Construct]] e irão lançar um erro, quando usados com `new`. |
| {{SpecName('ESDraft', '#sec-generator-function-definitions', 'function*')}} | {{Spec2('ESDraft')}} |                                                                                                                       |

## Compatibilidade com navegadores

{{Compat("javascript.statements.generator_function")}}

## Observações específicas Firefox

#### Generators e iterators no Firefox em versões anteriores a 26

Versões mais antigas do Firefox implementam uma versão antiga da proposta de _generators_. Na versão mais antiga, _generators_ foram intruídos a usarem a palavra chave `function`(sem um asterísco) dentre outras diferenças.

#### O retorno do objeto `IteratorResult` ao invés de um throw

Iniciando com Gecko 29, o _generator_ finalizado não lança mais um {{jsxref("TypeError")}} "generator has already finished". Ao invés disso, ele retorna um objeto `IteratorResult`, como por exemplo `{ value: undefined, done: true }` ([Erro do Firefox 958951](https://bugzil.la/958951)).

## Veja também

- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/pt-BR/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function declaration")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- Outras fontes na web:

  - [Regenerator](http://facebook.github.io/regenerator/) um ES6 generator que compila para ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia — JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Hemanth.HM: The New gen of \*gen(){}](https://www.youtube.com/watch?v=ZrgEZykBHVo&list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&index=1)
  - [Task.js](http://taskjs.org/)
