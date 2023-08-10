---
title: Controle de fluxo assíncrono usando async
slug: conflicting/Learn/Server-side/Express_Nodejs/Displaying_data
---

O código da _Controller_, para algumas de nossas páginas dependerá dos resultados de várias solicitações assíncronas, que talvez possam ser necessárias para serem executadas em uma ordem específica ou em paralelo. Para gerenciar o controle do nosso fluxo e renderizar páginas quando tivermos todas as informações necessárias disponíveis, usaremos o popular módulo [async](https://www.npmjs.com/package/async).

> **Nota:** Há várias outras maneiras de gerenciar o comportamento assíncrono e o controle de fluxo em JavaScript, um dos recursos Javascript que pode ser utilizado, são as [Promises](/pt-BR/docs/Mozilla/Add-ons/Techniques/Promises).

Async has a lot of useful methods (check out [the documentation](http://caolan.github.io/async/docs.html)). Some of the more important functions are:

- [`async.parallel()`](http://caolan.github.io/async/docs.html#parallel) executa qualquer operação que deva ser processada em paralelo.
- [`async.series()`](http://caolan.github.io/async/docs.html#series) garante que as operações assíncronas sejam executadas em série.
- [`async.waterfall()`](http://caolan.github.io/async/docs.html#waterfall) operações que devem ser executadas em série, baseando-se no resultado de cada operação anterior.

## Por que isso é necessário ?

A maioria dos métodos que usamos no Express são assíncronos - você especifica uma operação para executar, passando um _callback_. O método retorna imediatamente e o _callback_ é invocado quando a operação solicitada é concluída. Por convenção no _Express_, as funções de _callback_ passam um valor de erro como o primeiro parâmetro (ou nulo em sucesso) e os resultados da função (se houver algum) como o segundo parâmetro.

Se uma _Controller_ só precisa _executar_ _**uma** operação assíncrona_ para obter as informações necessárias para renderizar uma página, a implementação é fácil —simplesmente renderizamos o _template_ no _callback_. O código abaixo ilustra uma função que renderiza a contagem de um _model_ ExampleModel (usando o método `count()` do Mongoose.

```js
exports.example_model_count = function(req, res, next) {

  ExampleModel .count({ a_model_field: 'match_value' }, function (err, count) {
    // ... do something if there is an err

    // On success, render the result by passing count into the render function (here, as the variable 'data').
    res.render('the_template', { data: count } );
  });
}
```

However what if you need to make **multiple** asynchronous queries, and you can't render the page until all the operations have completed? A naive implementation could "daisy chain" the requests, kicking off subsequent requests in the callback of a previous request, and rendering the response in the final callback. The problem with this approach is that our requests would have to be run in series, even though it might be more efficient to run them in parallel. This could also result in complicated nested code, commonly referred to as [callback hell](http://callbackhell.com/).

A much better solution would be to execute all the requests in parallel and then have a single callback that executes when all of the queries have completed. This is the sort of flow operation that the _Async_ module makes easy!

## Operações assíncronas em paralelo

The method [`async.parallel()`](http://caolan.github.io/async/docs.html#parallel) is used to run multiple asynchronous operations in parallel.

The first argument to `async.parallel()` is a collection of the asynchronous functions to run (an array, object or other iterable). Each function is passed a `callback(err, result)` which it must call on completion with an error `err` (which can be `null`) and an optional `results` value.

The optional second argument to `async.parallel()` is a callback that will be run when all the functions in the first argument have completed. The callback is invoked with an error argument and a result collection that contains the results of the individual asynchronous operations. The result collection is of the same type as the first argument (i.e. if you pass an array of asynchronous functions, the final callback will be invoked with an array of results). If any of the parallel functions reports an error the callback is invoked early (with the error value).

The example below shows how this works when we pass an object as the first argument. As you can see, the results are _returned_ in an object with the same property names as the original functions that were passed in.

```js
async.parallel({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback
  function(err, results) {
    // 'results' is now equal to: {one: 1, two: 2, ..., something_else: some_value}
  }
);
```

If you instead pass an array of functions as the first argument, the results will be an array (the array order results will match the original order that the functions were declared—not the order in which they completed).

## Operações assíncronas em série

The method [`async.series()`](http://caolan.github.io/async/docs.html#series) is used to run multiple asynchronous operations in sequence, when subsequent functions do not depend on the output of earlier functions. It is essentially declared and behaves in the same way as `async.parallel()`.

```js
async.series({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback after the last asynchronous function completes.
  function(err, results) {
    // 'results' is now equals to: {one: 1, two: 2, ..., something_else: some_value}
  }
);
```

> **Nota:** The ECMAScript (JavaScript) language specification states that the order of enumeration of an object is undefined, so it is possible that the functions will not be called in the same order as you specify them on all platforms. If the order really is important, then you should pass an array instead of an object, as shown below.

```js
async.series([
  function(callback) {
    // do some stuff ...
    callback(null, 'one');
  },
  function(callback) {
    // do some more stuff ...
    callback(null, 'two');
  }
 ],
  // optional callback
  function(err, results) {
  // results is now equal to ['one', 'two']
  }
);
```

## Operações assíncronas dependentes em série

The method [`async.waterfall()`](http://caolan.github.io/async/docs.html#waterfall) is used to run multiple asynchronous operations in sequence when each operation is dependent on the result of the previous operation.

The callback invoked by each asynchronous function contains `null` for the first argument and results in subsequent arguments. Each function in the series takes the results arguments of the previous callback as the first parameters, and then a callback function. When all operations are complete, a final callback is invoked with the result of the last operation. The way this works is more clear when you consider the code fragment below (this example is from the _async_ documentation):

```js
async.waterfall([
  function(callback) {
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
  },
  function(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
  }
], function (err, result) {
  // result now equals 'done'
}
);
```

## Instalando o async

Install the async module using the NPM package manager so that we can use it in our code. You do this in the usual way, by opening a prompt in the root of the _LocalLibrary_ project and enter the following command:

```bash
npm install async
```

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of Part 5: [Template primer](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer).
