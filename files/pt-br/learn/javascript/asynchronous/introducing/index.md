---
title: Introdução ao JavaScript Async
slug: Learn/JavaScript/Asynchronous/Introducing
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

Neste artigo, explicaremos o que é programação assíncrona, por que precisamos dela e discutiremos brevemente algumas das maneiras pelas quais as funções assíncronas foram implementadas historicamente em JavaScript.

<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico de informática, uma compreensão razoável de fundamentos de
        JavaScript, incluindo funções e manipuladores de eventos.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Para se familiarizar com o que é JavaScript assíncrono, como ele difere do JavaScript síncrono e por que precisamos dele.
      </td>
    </tr>
  </tbody>
</table>

A programação assíncrona é uma técnica que permite que seu programa inicie uma tarefa potencialmente de longa duração e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada, em vez de ter que esperar até que essa tarefa seja concluída. Uma vez que essa tarefa tenha terminado, seu programa é apresentado com o resultado.

Muitas funções fornecidas pelos navegadores, especialmente as mais interessantes, podem levar muito tempo e, portanto, são assíncronas. Por exemplo:

- Fazendo solicitações HTTP usando {{domxref("fetch", "fetch()")}}
- Acessar a câmera ou o microfone de um usuário usando {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}}
- Pedindo a um usuário para selecionar arquivos usando {{domxref("window/showOpenFilePicker", "showOpenFilePicker()")}}

Portanto, mesmo que você não precise _implementar_ suas próprias funções assíncronas com muita frequência, é muito provável que você precise _usá-las_ corretamente.

Neste artigo, começaremos analisando o problema com funções síncronas de longa duração, que tornam a programação assíncrona uma necessidade.

## Programação síncrona

Considere o seguinte código:

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

Este código:

1. Declara uma string chamada `name`.
2. Declara outra string chamada `greeting`, que usa `name`.
3. Emite a saudação para o console JavaScript.

Devemos observar aqui que o navegador efetivamente percorre o programa uma linha de cada vez, na ordem em que o escrevemos. Em cada ponto, o navegador espera que a linha termine seu trabalho antes de seguir para a próxima linha. Tem que fazer isso porque cada linha depende do trabalho feito nas linhas anteriores.

Isso torna este um **programa síncrono**. Ainda seria síncrono mesmo se chamássemos uma função separada, como esta:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Aqui, `makeGreeting()` é uma **função síncrona** porque o chamador precisa esperar que a função termine seu trabalho e retorne um valor antes que o chamador possa continuar.

### Uma função síncrona de longa duração

E se a função síncrona demorar muito?

O programa abaixo usa um algoritmo muito ineficiente para gerar vários números primos grandes quando um usuário clica no botão "Gerar primos". Quanto maior o número de primos que um usuário especificar, mais tempo a operação levará.

```html
<label for="quota">Número de primos:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Gerar primos</button>
<button id="reload">Recarregar</button>

<div id="output"></div>
```

```js
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("Uma função síncrona de longa duração", 600, 120)}}

Tente clicar em "Gerar primos". Dependendo da velocidade do seu computador, provavelmente levará alguns segundos até que o programa exiba a mensagem "Concluído!" mensagem.

### O problema com funções síncronas de longa duração

O próximo exemplo é igual ao anterior, exceto que adicionamos uma caixa de texto para você digitar. Desta vez, clique em "Gerar números primos" e tente digitar na caixa de texto imediatamente depois.

Você verá que enquanto nossa função `generatePrimes()` está sendo executado, nosso programa não responde: você não pode digitar nada, clicar em nada ou fazer qualquer outra coisa.

```html hidden
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Gerar primos</button>
<button id="reload">Recarregar</button>

<textarea id="user-input" rows="5" cols="62">
Tente digitar aqui imediatamente após pressionar "Gerar primos"
</textarea>

<div id="output"></div>
```

```css hidden
textarea {
  display: block;
  margin: 1rem 0;
}
```

```js hidden
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Terminou de gerar ${quota.value} primos!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("O problema com funções síncronas de longa duração", 600, 200)}}

Este é o problema básico com funções síncronas de longa duração. O que precisamos é de uma maneira para o nosso programa:

1. Inicie uma operação de longa duração chamando uma função.
2. Faça com que essa função inicie a operação e retorne imediatamente, para que nosso programa ainda possa responder a outros eventos.
3. Notifique-nos com o resultado da operação quando ela for concluída.

Isso é precisamente o que as funções assíncronas podem fazer. O restante deste módulo explica como eles são implementados em JavaScript.

## Manipuladores de eventos

A descrição que acabamos de ver de funções assíncronas pode lembrá-lo de manipuladores de eventos e, se isso acontecer, você estará certo. Os manipuladores de eventos são realmente uma forma de programação assíncrona: você fornece uma função (o manipulador de eventos) que será chamada, não imediatamente, mas sempre que o evento ocorrer. Se "o evento" for "a operação assíncrona foi concluída", esse evento poderá ser usado para notificar o chamador sobre o resultado de uma chamada de função assíncrona.

Algumas APIs assíncronas iniciais usavam eventos exatamente dessa maneira. A API {{domxref("XMLHttpRequest")}} permite que você faça solicitações HTTP para um servidor remoto usando JavaScript. Como isso pode levar muito tempo, é uma API assíncrona e você é notificado sobre o andamento e a eventual conclusão de uma solicitação anexando ouvintes de eventos ao objeto `XMLHttpRequest`.

O exemplo a seguir mostra isso em ação. Pressione "Clique para iniciar a solicitação" para enviar uma solicitação. Criamos um novo {{domxref("XMLHttpRequest")}} e ouvimos seu evento {{domxref("XMLHttpRequest/loadend_event", "loadend")}}. O manipulador registra um "Concluído!" mensagem junto com o código de status.

Depois de adicionar o ouvinte do evento, enviamos a solicitação. Observe que, depois disso, podemos registrar "Requisição XHR iniciada": ou seja, nosso programa pode continuar em execução enquanto a solicitação estiver em andamento, e nosso manipulador de eventos será chamado quando a solicitação for concluída.

```html
<button id="xhr">Clique para iniciar a solicitação</button>
<button id="reload">Recarregar</button>

<pre readonly class="event-log"></pre>
```

```css hidden
pre {
  display: block;
  margin: 1rem 0;
}
```

```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Concluído com status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Iniciada solicitação XHR\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
```

{{EmbedLiveSample("Manipuladores de eventos", 600, 120)}}

Isso é exatamente como os [manipuladores de eventos que encontramos em um módulo anterior](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events), exceto que, em vez de o evento ser uma ação do usuário, como o usuário clicar um botão, o evento é uma mudança no estado de algum objeto.

## Manipuladores de eventos

Um manipulador de eventos é um tipo específico de callback. Um callback é apenas uma função que é passada para outra função, com a expectativa de que o callback seja chamado no momento apropriado. Como acabamos de ver, os retornos de chamada costumavam ser a principal forma de implementação de funções assíncronas em JavaScript.

No entanto, o código baseado em callback pode ficar difícil de entender quando o próprio callback precisa chamar funções que aceitam um callback. Esta é uma situação comum se você precisar realizar alguma operação que se decompõe em uma série de funções assíncronas. Por exemplo, considere o seguinte:

```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

Aqui temos uma única operação que é dividida em três etapas, onde cada etapa depende da última etapa. Em nosso exemplo, a primeira etapa adiciona 1 à entrada, a segunda adiciona 2 e a terceira adiciona 3. Começando com uma entrada de 0, o resultado final é 6 (0 + 1 + 2 + 3). Como um programa síncrono, isso é muito simples. Mas e se implementássemos as etapas usando retornos de chamada?

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

Como temos que chamar callbacks dentro de callbacks, obtemos uma função `doOperation()` profundamente aninhada, que é muito mais difícil de ler e depurar. Isso às vezes é chamado de "inferno de callback" ou "pirâmide da desgraça" (porque o recuo parece uma pirâmide de lado).

Quando aninhamos callbacks como este, também pode ficar muito difícil lidar com erros: muitas vezes você precisa lidar com erros em cada nível da "pirâmide", em vez de lidar com erros apenas uma vez no nível superior.

Por esses motivos, as APIs assíncronas mais modernas não usam retornos de chamada. Em vez disso, a base da programação assíncrona em JavaScript é a {{jsxref("Promise")}}, e esse é o assunto do próximo artigo.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}
