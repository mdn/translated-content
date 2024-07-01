---
title: Como usar Promises
slug: Learn/JavaScript/Asynchronous/Promises
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

**Promises** são a base da programação assíncrona moderna em JavaScript. Uma promise é um objeto retornado por uma função assíncrona, que representa o estado atual da operação. No momento em que a promise é retornada para quem à chamou, a operação muitas vezes ainda não foi finalizada, mas o objeto da promise oferece métodos para tratar o possível sucesso ou falha da operação.

<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos em informática, um básico entendimento do
        JavaScript e seus fundamentos.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender promises e como elas funcionam.</td>
    </tr>
  </tbody>
</table>

No último artigo falamos sobre o uso de callbacks para implementar funções assíncronas. Com esse design, você chama a função assíncrona, passando sua função de callback como parâmetro. A função executa imediatamente e chama seu callback quando a operação é finalizada.

Com uma API baseada em promises, a função assíncrona inicia a operação e retorna o objeto {{jsxref("Promise")}}. Você pode então anexar manipuladores nesse objeto, e esses manipuladores vão ser executados quando a operação tiver sucesso ou falhar.

## Usando a API fetch()

> **Nota:** Neste artigo, vamos explorar promises copiando exemplos de código desta página dentro do console Javascript do seu navegador. Para configurar isso:
>
> 1. abra o navegador e visite <https://example.org>
> 2. nesta aba, abra o console Javascript nas [ferramentas de desenvolvimento do navegador](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)
> 3. quando mostrarmos um exemplo, copie-o dentro do console. Você vai ter que recarregar a página cada vez que você começar um novo exemplo, caso contrário o console irá reclamar que você redeclarou a função `fetchPromise`.

Neste exemplo, vamos baixar o seguinte arquivo JSON <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json> e registrar algumas informações sobre ele.

Para isso, vamos fazer uma **Requisição HTTP** para o servidor. Em uma requisição HTTP, enviamos uma solicitação para o servidor e ele nos envia uma resposta de volta. Neste caso, vamos enviar uma solicitação para obter um arquivo JSON do servidor. Relembre o último artigo, onde fizamos requisições HTTP usando a API {{domxref("XMLHttpRequest")}}? Bem, neste artigo, usaremos a API {{domxref("fetch", "fetch()")}}, que é a substituição moderna baseada em promise para XMLHttpRequest.

Cole o seguinte código no console do seu navegador:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((resposta) => {
  console.log(`Resposta recebida: ${resposta.status}`);
});

console.log("Requisição iniciada…");
```

Aqui estamos:

1. chamando a API `fetch()`, e atribuindo o valor de retorno a variável `fetchPromise`.
2. imediatamente depois, exibimos no console a variável `fetchPromise`. Você deve ver algo parecido com: `Promise { <state>: "pending" }`, nos dizendo que temos um objeto `Promise`, ele tem uma propriedade `state` cujo valor no momento em que foi impresso é `"pending"` (`"pendente"`). O estado `"pending"` significa que a busca pela resposta ainda está ocorrendo.
3. passando uma função manipuladora dentro do método da Promise **`then()`**. Quando (e se) a operação de busca tiver exito a Promise vai chamar a função manipuladora, passando um objeto {{domxref("Response")}}, que contém a resposta do servidor.
4. imprimindo um log dizendo que iniciamos a requisição.

A saída completa deve ser algo parecido com:

```plain
Promise { <state>: "pending" }
Requisição iniciada…
Resposta recebida: 200
```

Note que `Requisição iniciada…` foi exibido antes de recebermos a resposta. Diferente de uma função síncrona, `fetch()` retorna enquanto a requisição ainda está ocorrendo, permitindo que nosso programa permaneça ágil. A resposta mostra o [status code](/pt-BR/docs/Web/HTTP/Status) `200` (OK), que significa que nossa requisição obteve sucesso.

Esse exemplo provavelmente se parece muito com o exemplo do último artigo, onde adicionamos manipuladores de eventos ao objeto {{domxref("XMLHttpRequest")}}. Em vez disso, passamos um manipulador dentro do método `then()` da promise retornada.

## Encadeamento de promises

Com a API `fetch()`, depois de obter um objeto `Response`, você precisa chamar outra função para obter os dados de resposta. Neste caso, queremos obter os dados de resposta como JSON, então chamaríamos o método {{domxref("Response/json", "json()")}} do objeto `Response`. Acontece que `json()` também é assíncrono. Portanto, este é um caso em que temos que chamar duas funções assíncronas sucessivas.

Tente isso:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
```

Neste exemplo, como antes, adicionamos um manipulador `then()` à promise retornada por `fetch()`. Mas desta vez, nosso manipulador chama `response.json()`, e então passa um novo manipulador `then()` para a promise retornada por `response.json()`.

Isso deve registrar "baked beans" (o nome do primeiro produto listado em "products.json").

Mas espere! Lembra do último artigo, onde dissemos que ao chamar um callback dentro de outro callback, obtínhamos sucessivamente mais níveis de código aninhados? E dissemos que esse "inferno de callback" tornava nosso código difícil de entender? Isso não é exatamente o mesmo, apenas com chamadas `then()`?

Sim, claro. Mas a característica elegante das promises é que o próprio _`then()` retorna uma promise, que será completada com o resultado da função passada para ela_. Isso significa que podemos (e certamente devemos) reescrever o código acima assim:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
```

Em vez de chamar o segundo `then()` dentro do manipulador para o primeiro `then()`, podemos _retornar_ a promise retornada por `json()` e chamar o segundo `then()` nesse valor de retorno. Isso é chamado de **encadeamento de promises** e significa que podemos evitar níveis cada vez maiores de indentação quando precisamos fazer chamadas de função assíncronas consecutivas.

Antes de passarmos para a próxima etapa, há mais uma peça a ser adicionada. Precisamos verificar se o servidor aceitou e foi capaz de lidar com a solicitação antes de tentarmos lê-la. Faremos isso verificando o código de status na resposta e lançando um erro se não estiver "OK":

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
```

## Capturando errors

Isso nos leva à última parte: como lidamos com os erros? A API `fetch()` pode lançar um erro por vários motivos (por exemplo, porque não havia conectividade de rede ou a URL estava malformada de alguma forma) e estamos lançando um erro nós mesmos se o servidor retornar um erro.

No último artigo, vimos que o tratamento de erros pode ser muito difícil com callbacks aninhados, fazendo com que tratemos erros em todos os níveis de aninhamento.

Para suportar o tratamento de erros, os objetos `Promise` fornecem um método {{jsxref("Promise/catch", "catch()")}}. Que é muito parecido com `then()`: você chama e passa uma função manipuladora. No entanto, enquanto o manipulador passado para `then()` é chamado quando a operação assíncrona _é bem-sucedida_, a função manipuladora passado para `catch()` é chamado quando a operação assíncrona _falha_.

Se você adicionar `catch()` ao final de uma cadeia de promises, ela será chamada quando qualquer uma das chamadas de função assíncrona falhar. Assim, você pode implementar uma operação como várias chamadas de função assíncronas consecutivas e ter um único local para lidar com todos os erros.

Experimente esta versão do nosso código `fetch()`. Adicionamos um manipulador de erros usando `catch()` e também modificamos a URL para que a solicitação falhe.

```js
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((resposta) => {
    if (!resposta.ok) {
      throw new Error(`HTTP error: ${resposta.status}`);
    }
    return resposta.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Não foi possível obter os produtos: ${error}`);
  });
```

Tente executar esta versão: você deve ver o erro registrado pelo manipulador passado para `catch()`.

## Terminologia da promise

As promises vêm com uma terminologia bastante específica sobre a qual vale a pena esclarecer.

Primeiro, uma promise pode estar em um dos três estados:

- **pending**: a promise foi criada e a função assíncrona à qual está associada não foi concluída com sucesso ou falhou ainda. Este é o estado em que sua promise está quando é retornada de uma chamada para `fetch()`, e a solicitação ainda está sendo feita.
- **fulfilled**: a função assíncrona foi concluída com sucesso. Quando uma promise é _fulfilled_, seu manipulador `then()` é chamado.
- **rejected**: a função assíncrona falhou. Quando uma promise é _rejected_, seu manipulador `catch()` é chamado.

Observe que o significado de "sucesso" ou "falha" aqui depende da API em questão: por exemplo, `fetch()` considera uma solicitação que foi concluída com sucesso se o servidor retornar um erro como [404 Not Found](/pt-BR/docs/Web/HTTP/Status/404), mas não se um erro de rede impediu o envio da solicitação.

Às vezes, usamos o termo **settled** para cobrir tanto **fulfilled** quanto **rejected**.

Uma promise é **resolved** se for resolvida ou se tiver sido "bloqueada" para seguir o estado de outra promise.

O artigo [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) dá uma ótima explicação dos detalhes desta terminologia.

## Combinando múltiplas promises

A cadeia de promises é o que você precisa quando sua operação consiste em várias funções assíncronas e você precisa que cada uma seja concluída antes de iniciar a próxima. Mas existem outras maneiras de combinar chamadas de funções assíncronas, e a API `Promise` fornece alguns auxiliares para elas.

Às vezes, você precisa que todas as promises sejam cumpridas, mas elas não dependem umas das outras. Em um caso como esse, é muito mais eficiente iniciá-los todos juntos e ser notificado quando todos forem cumpridos. O método {{jsxref("Promise/all", "Promise.all()")}} é o que você precisa aqui. Recebe um array de promises e retorna uma única promise.

A promise retornada por `Promise.all()` é:

- **fulfilled** quando e se _todas_ as promises no array forem cumpridas. Nesse caso, o manipulador `then()` é chamado com uma matriz de todas as respostas, na mesma ordem em que as promises foram passadas para `all()`.
- **rejected** quando e se _qualquer_ uma das promises no array for rejeitada. Neste caso, o manipulador `catch()` é chamado com o erro lançado pela promise rejeitada.

Por exemplo:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Falha ao buscar: ${error}`);
  });
```

Aqui, estamos fazendo três requisições `fetch()` para três URLs diferentes. Se todas forem concluídas com sucesso, vamos imprimir no console o status da resposta de cada uma. Se qualquer uma falhar, imprimiremos o objeto de erro capturado por `.catch()`.

Com as URLs que fornecemos, todos as requisições devem ser conluídas com sucesso, embora para a segunda, o servidor retornará `404` (Not Found) em vez de `200` (OK) porque o arquivo solicitado não existe. Então a saída deve ser:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

Se tentarmos o mesmo código com uma URL mal formada, assim:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Falha ao buscar: ${error}`);
  });
```

Então podemos esperar que o manipulador `catch()` seja executado, e devemos ver algo como:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Às vezes, você pode precisar de qualquer uma de um conjunto de promises a serem cumpridas e não se importa com qual delas. Nesse caso, você deseja {{jsxref("Promise/any", "Promise.any()")}}. Isso é como `Promise.all()`, exceto que é concluída com sucesso assim que qualquer uma das promises for concluída com sucesso, ou rejeitada se todas forem rejeitadas:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Falha ao buscar: ${error}`);
  });
```

Observe que, nesse caso, não podemos prever qual solicitação de busca será concluída primeiro.

Estas são apenas duas das funções extras `Promise` para combinar várias promises. Para saber mais sobre o restante, consulte a documentação de referência {{jsxref("Promise")}}.

## async e await

A palavra-chave {{jsxref("Statements/async_function", "async")}} oferece uma maneira mais simples de trabalhar com código assíncrono baseado em promise. Adicionar `async` no início de uma função a torna uma função assíncrona:

```js
async function myFunction() {
  // Esta é uma função assíncrona
}
```

Dentro de uma função assíncrona, você pode usar a palavra-chave `await` antes de uma chamada para uma função que retorna uma promise. Isso faz com que o código espere nesse ponto até que a promise seja liquidada, ponto em que o valor cumprido da promise é tratado como um valor de retorno ou o valor rejeitado é lançado.

Isso permite que você escreva código que usa funções assíncronas, mas se parece com código síncrono. Por exemplo, poderíamos usá-lo para reescrever nosso exemplo de busca:

```js
async function fetchProducts() {
  try {
    // após esta linha, nossa função irá esperar que a chamada `fetch()` seja resolvida
    // a chamada `fetch()` retornará uma resposta ou lançará um erro
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // após esta linha, nossa função irá esperar que a chamada `response.json()` seja resolvida
    // a chamada `response.json()` retornará o objeto JSON processado ou gerará um erro
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Não foi possível obter os produtos: ${error}`);
  }
}

fetchProducts();
```

Aqui, estamos chamando `await fetch()`, e ao invés de obter uma `Promise`, nosso chamador recebe de volta um objeto `Response` totalmente completo, como se `fetch()` fosse uma função síncrona!

Podemos até usar um bloco `try...catch` para tratamento de erros, exatamente como faríamos se o código fosse síncrono.

Observe, porém, que as funções assíncronas sempre retornam uma promise, então você não pode fazer algo como:

```js example-bad
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Não foi possível obter os produtos: ${error}`);
  }
}
const promise = fetchProducts();
console.log(promise[0].name); // "promise" é um objeto Promise, então isso não funcionará
```

Em vez disso, você precisaria fazer algo como:

```js
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Não foi possível obter os produtos: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
```

Além disso, observe que você só pode usar `await` dentro de uma função `async`, a menos que seu código esteja em um [módulo JavaScript](/pt-BR/docs/Web/JavaScript/Guide/Modules). Isso significa que você não pode fazer isso em um script normal:

```js
try {
  // usar await fora de uma função assíncrona só é permitido em um módulo
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
}
```

Você provavelmente usará muito funções `async` onde você poderia usar cadeias de promises, e elas tornam o trabalho com promises muito mais intuitivo.

Lembre-se de que, assim como uma cadeia de promises, `await` força operações assíncronas a serem concluídas em série. Isso é necessário se o resultado da próxima operação depender do resultado da última, mas se esse não for o caso, algo como `Promise.all()` terá melhor desempenho.

## Conclusão

As promises são a base da programação assíncrona no JavaScript moderno. Eles tornam mais fácil expressar e raciocinar sobre sequências de operações assíncronas sem retornos de chamada profundamente aninhados e suportam um estilo de tratamento de erros semelhante à instrução síncrona `try...catch`.

As palavras-chave `async` e `await` facilitam a criação de uma operação a partir de uma série de chamadas de função assíncronas consecutivas, evitando a necessidade de criar cadeias de promises explícitas e permitindo que você escreva um código que se pareça com o código síncrono.

As promises funcionam nas versões mais recentes de todos os navegadores modernos; o único lugar onde o suporte de promise será um problema é no Opera Mini e IE11 e versões anteriores.

Não abordamos todos os recursos das promises neste artigo, apenas os mais interessantes e úteis. Ao começar a aprender mais sobre promises, você encontrará mais recursos e técnicas.

Muitas APIs da Web modernas são baseadas em promises, incluindo [WebRTC](/pt-BR/docs/Web/API/WebRTC_API), [Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/pt-BR/docs/Web/API/Media_Capture_and_Streams_API) e muito mais.

## Veja também

- [`Promise()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using promises](/pt-BR/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) by Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}
