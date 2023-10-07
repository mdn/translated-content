---
title: Um primeiro mergulho no JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Agora você poderá aprender um pouco sobre a Teoria do Javascript e o que você poderá fazer com ele. Nós vamos lhe fornecer aqui um Curso rápido sobre as características básicas do JavaScript através de um tutorial completamente prático. Você irá construir um simples jogo de "Adivinhe o número", passo a passo.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos de informática, uma compreensão básica de HTML e
        CSS, uma compreensão do que é JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Ter um primeiro bit de experiência em escrever um pouco de JavaScript,
          e adquirir pelo menos uma compreensão básica do que envolve escrever
          um programa em JavaScript.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Nós não esperamos que você entenda todo o código imediatamente - Apenas queremos ensinar-lhe os melhores conceitos por enquanto e dar a você uma idéia de como o JavaScript (e outras linguagens de programação) funcionam. Em artigos posteriores você vai rever todos esses recursos com muito mais detalhes!

> **Nota:** Muitos dos recursos de código que você verá no JavaScript são iguais aos de outra linguagem de programação - funções, loops, etc. A sintaxe do código parece diferente, mas os conceitos ainda são praticamente os mesmos.

## Pensando como um Programador

Uma das coisas mais difíceis de aprender na programação não é a sintaxe que você precisa aprender, mas como aplicá-la para resolver problemas do mundo real. Você precisa começar a pensar como um programador - isso geralmente envolve olhar para as descrições do que seu programa precisa fazer e analisar como eles podem ser aplicados na solução real (prática), quais recursos de código são necessários para alcançar esse objetivo, e como fazê-los trabalhar em conjunto.

Isso requer um mistura de trabalho duro, experiência com a sintaxe de programação utilizada e prática, além de um pouco de criatividade, é claro. Quanto mais você programa, melhor programador se torna. Nós não prometemos transformar seu cérebro em um "cérebro de programador" em 5 minutos, mas vamos te dar todas as oportunidades para pensar na prática como um programador ao longo deste curso.

Com isso em mente, vejamos o exemplo que estaremos construindo neste artigo e analisaremos o processo geral de dissecá-lo em tarefas tangíveis.

## Exemplo — Jogo adivinhe um número

Neste artigo vamos mostrar a você como construir este simples jogo, que pode ser visto abaixo:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Jogo adivinhe o número</title>
    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Jogo Adivinhe um número</h1>
    <p>
      Selecionamos um número aleatório entre 1 e 100. Veja se consegue adivinhar
      em 10 chances ou menos. Nós lhe diremos se seu palpite está com valor alto
      ou baixo.
    </p>
    <div class="form">
      <label for="guessField">Digite seu palpite: </label
      ><input type="text" id="guessField" class="guessField" />
      <input type="submit" value="Enviar palpite" class="guessSubmit" />
    </div>
    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>
  </body>
  <script>
    // Seu JavaScipt vem aqui
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guesses = document.querySelector(".guesses");
    var lastResult = document.querySelector(".lastResult");
    var lowOrHi = document.querySelector(".lowOrHi");
    var guessSubmit = document.querySelector(".guessSubmit");
    var guessField = document.querySelector(".guessField");
    var guessCount = 1;
    var resetButton;

    function checkGuess() {
      var userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = "Palpites anteriores: ";
      }

      guesses.textContent += userGuess + " ";

      if (userGuess === randomNumber) {
        lastResult.textContent = "Parabéns! Seu número está certo!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = "!!!FIM DE JOGO!!!";
        lowOrHi.textContent = "";
        setGameOver();
      } else {
        lastResult.textContent = "Errado!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
          lowOrHi.textContent = "Seu palpite está muito baixo!";
        } else if (userGuess > randomNumber) {
          lowOrHi.textContent = "Seu palpite está muito alto!";
        }
      }

      guessCount++;
      guessField.value = "";
    }

    guessSubmit.addEventListener("click", checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement("button");
      resetButton.textContent = "Iniciar novo jogo";
      document.body.appendChild(resetButton);
      resetButton.addEventListener("click", resetGame);
    }

    function resetGame() {
      guessCount = 1;
      var resetParas = document.querySelectorAll(".resultParas p");
      for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = "";
      guessField.focus();
      lastResult.style.backgroundColor = "white";
      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
  </script>
</html>
```

{{ EmbedLiveSample('Top_hidden_code', '100%', 320) }}

Vá em frente e jogue por um tempo para se familiarizar com o jogo antes de continuar.

Vamos imaginar que o seu chefe te deu as seguintes diretrizes para criar este jogo:

> Quero que você crie um jogo simples do tipo adivinhe um número. Ele deve gerar um número aleatório de 1 a 100, depois desafiar o jogador a adivinhar o número em 10 rodadas. A cada rodada deve ser dito ao jogador se ele está certo ou errado, se estiver errado, deve ser dito se o palpite é muito baixo ou muito alto. Também deve ser mostrado ao jogador os números que ele tentou adivinhar anteriormente. O jogo termina se o jogador acertar o número ou acabarem o número de tentativas. Quando o jogo acabar, deve ser dado ao jogador a opção de jogar novamente.

Olhando para o enunciado, a primeira coisa que devemos fazer é quebrá-lo em pequenas tarefas, da forma mais parecida com o pensamento de um programador quanto possível:

1. Gerar um número aleatório entre 1 e 100.
2. Gravar o número do turno que o jogador está. Iniciar em 1.
3. Dar ao jogador uma forma de adivinhar o número.
4. Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.
5. Depois, verificar se o palpite está correto.
6. Se estiver correto:

   1. Escrever mensagem de parabéns.
   2. Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
   3. Mostrar controle que permita ao jogador reiniciar o jogo.

7. Se o palpite estiver errado e o jogador ainda tem turnos sobrando:

   1. Dizer ao jogador que ele está errado.
   2. Permitir que ele insira outra resposta.
   3. Incrementar o número do turno em 1.

8. Se o jogador está errado mas não tem turnos sobrando:

   1. Dizer ao jogador que o jogo acabou.
   2. Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
   3. Mostrar controle que permita ao jogador reiniciar o jogo.

9. Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.

Então vamos em frente, olhando como podemos transformar esses passos em código, construindo esse exemplo e explorando as ferramentas do JavaScript ao longo do caminho.

### Configuração Inicial

Para iniciar este tutorial, gostaríamos que você fizesse uma cópia do arquivo [jogo-adivinhe-o-numero-inicio.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) ([ver demonstração](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Abra-o em um editor de texto e também no seu browser. No momento você vai apenas ver um simples cabeçalho, parágrafo de instruções e um formulário para entrada de informações, mas o formulário não fará nada por enquanto.

O lugar em que começaremos a escrever nosso código será dentro da tag {{htmlelement("script")}} na parte inferior do HTML:

```html
<script>
  // Seu JavaScript vai aqui
</script>
```

### Adicionando variáveis para armazenar nossos dados

Vamos começar. Primeiramente, adicione as seguintes linhas na sua tag {{htmlelement("script")}} :

```js
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");

var envioPalpite = document.querySelector(".envioPalpite");
var campoPalpite = document.querySelector(".campoPalpite");

var contagemPalpites = 1;
var botaoReinicio;
```

Aqui estamos setando as variáveis que precisamos para guardar os dados que nosso programa irá utilizar. Variáveis são basicamente recipientes para valores (como números, ou strings ou textos). Variáveis são criadas com a palavra-chave `var` seguida de um nome para sua variável. Você pode atribuir um valor para sua variável com um sinal de igual (`=`) seguido do valor que você quer dar a ela.

No nosso exemplo:

- À primeira variável — `numeroAleatorio` — é atribuído um número aleatório entre 1 e 100, calculado usando um algoritmo matemático.
- As próximas três variáveis são criadas para guardar uma referência para os parágrafos resultantes em nosso HTML, e são usadas para inserir valores nos parágrafos no código:

  ```html
  <p class="palpites"></p>
  <p class="ultimoResultado"></p>
  <p class="baixoOuAlto"></p>
  ```

- As próximas duas variáveis armazenam referências para o campo de texto e o botão de envio e são usados para controlar o envio do palpite.

  ```html
  <label for="campoPalpite">Digite seu palpite: </label
  ><input type="text" id="campoPalpite" class="campoPalpite" />
  <input type="submit" value="Enviar palpite" class="envioPalpite" />
  ```

- As últimas duas variáveis (contagemPalpites e botaoReinicio) são usadas para armazenar a contagem dos palpites do usuário, e o outro é uma referência para o botão de reset, que não existe ainda (mas irá existir).

> **Nota:** Você irá aprender muito mais sobre variáveis a partir do [próximo artigo](/pt-BR/docs/user:chrisdavidmills/variables).

### Funções

Em seguida, adicione o seguinte código abaixo do JavaScript anterior:

```js
function conferirPalpite() {
  alert("Eu sou um placeholder");
}
```

Funções são blocos reutilizáveis de código que você pode escrever uma vez e executá-lo de novo e de novo, eliminando a necessidade de repetir o código todas as vezes. Isso é realmente útil. Há várias formas de se definir funções, mas, por agora, vamos nos concentrar em um tipo simples. Aqui nós definimos uma função usando a palavra chave `function`, seguida de um nome, com parênteses colocados na sequência. Depois disso nós colocamos duas chaves (`{ }`). Dentro das chaves vai todo o código que queremos executar sempre que chamarmos a função.

O código é executado digitando o nome da função seguido pelos parênteses.

Tente salvar o seu código agora e atualizá-lo no navegador.

Vá até o [console JavaScript](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools), e insira a seguinte linha:

```js
conferirPalpite();
```

Você deverá ver um alerta aparecer dizendo "Eu sou um placeholder"; nós definimos uma função em nosso código que cria um alerta a qualquer hora em que a chamarmos.

> **Nota:** Você irá aprender muito mais sobre funções mais tarde no curso.

### Operadores

Os operadores JavaScript nos permite realizar testes, fazer cálculos matemáticos, unir sequências de texto, e outras coisas do tipo.

Vamos salvar nosso código e atualizar a página exibida em nosso navegador. Abra o [console JavaScript](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) se você ainda não o tiver aberto, para que possamos digitar os exemplos mostrados abaixo — digite cada um exatamente como mostrado na coluna "Exemplo", pressionando Return/Enter na sequência, e veja quais resultados são retornados. Se você não tiver fácil acesso às ferramentas de desenvolvimento do navegador você pode sempre utilizar o console embutido simples, como no exemplo abaixo:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Console JavaScript</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0c323d;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0c323d;
        color: #809089;
      }

      div {
        clear: both;
      }
    </style>
  </head>
  <body></body>

  <script>
    var geval = eval;

    function createInput() {
      var inputDiv = document.createElement("div");
      var inputPara = document.createElement("p");
      var inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);
      inputDiv.focus();

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch (e) {
        var result = "error — " + e.message;
      }

      var outputDiv = document.createElement("div");
      var outputPara = document.createElement("p");

      outputDiv.setAttribute("class", "output");
      outputPara.textContent = "Result: " + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = "0.5";

      createInput();
    }

    createInput();
  </script>
</html>
```

{{ EmbedLiveSample('Hidden_code', '100%', 300) }}

Primeiro vamos ver os operadores matemáticos, como por exemplo:

| Operador | Nome          | Exemplo   |
| -------- | ------------- | --------- |
| `+`      | Adição        | `6 + 9`   |
| `-`      | Subtração     | `20 - 15` |
| `*`      | Multiplicação | `3 * 7`   |
| `/`      | Divisão       | `10 / 5`  |

Você também pode usar o operador `+` para unir sequências de texto (isso é chamado de concatenação em programação). Tente inserir as seguintes linhas:

```js
var nome = "Bingo";
nome;
var ola = " diz olá!";
ola;
var cumprimento = nome + ola;
cumprimento;
```

Há também alguns atalhos para operadores disponíveis, chamados de operadores de atribuição ampliada (ou atribuição composta). Por exemplo, se você quer adicionar uma nova sequência de texto à uma existente e retornar o resultado, você pode fazer o seguinte:

```js
nome += " diz olá!";
```

Isso é equivalente a:

```js
nome = nome + " diz olá!";
```

Quando estamos rodando testes de verdadeiro/falso (por exemplo, condicinais internas — veja [abaixo](#conditionals), usamos operadores de comparação, por exemplo:

| Operador | Nome                                        | Exemplo                    |
| -------- | ------------------------------------------- | -------------------------- |
| `===`    | Igualdade estrita (é estritamente o mesmo?) | `5 === 2 + 4`              |
| `!==`    | Não-igualdade (não é o mesmo?)              | `'Chris' !== 'Ch' + 'ris'` |
| `<`      | Menor que                                   | `10 < 6`                   |
| `>`      | Maior que                                   | `10 > 20`                  |

### Condicionais

Voltando à nossa função `conferirPalpite()`, imagino que seja seguro dizer que não queremos que ela apenas exiba uma mensagem de teste (placeholder). Nós queremos verificar se o palpite do jogador está correto ou não, e responder apropriadamente.

Neste ponto, substitua sua função `conferirPalpite()` atual por esta versão:

```js
function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }
  palpites.textContent += palpiteUsuario + " ";

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você acertou!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = "!!!FIM DE JOGO!!!";
    baixoOuAlto.textContent = "";
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = "Errado!";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito baixo!";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está muito alto!";
    }
  }

  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}
```

Isso é bastante código — ufa! Vamos abordar cada seção e explicar o que faz.

- A primeira linha (linha 2 no código acima) declara uma variável chamada `palpiteUsuario` e define seu valor igual ao valor inserido pelo jogador no campo de texto. Nós também rodamos esse valor através do método embutido `Number()`, apenas para ter certeza de que o valor inserido é um número.
- Em seguida, encontramos nosso primero bloco de código condicional (linhas 3–5 no código acima). Um bloco de código condicional lhe permite executar código seletivamente, dependendo se uma condição é verdadeira ou não. Se parece um pouco com uma função, mas não é. A forma mais simples de um bloco condicional começa com a palavra chave `if`, depois os parênteses, depois as chaves. Dentro dos parênteses nós incluímos um teste. Se o teste retornar `true`(verdadeiro), o código dentro das chaves é executado. Caso contrário, não é executado, e seguimos para a próxima parte do código. Neste caso, o teste está verificando se a variável `contagemPalpites` é igual a `1` (isto é, se essa é ou não a primeira tentativa do jogador):

  ```js
  contagemPalpites === 1;
  ```

  Se a condição for verdadeira, nós tornamos o conteúdo do parágrafo de palpites, `<p class="palpites"></p>` igual a "Palpites anteriores: ". Caso contrário, o texto não é exibido.

- A linha 6 acrescenta o valor atual de `palpiteUsuario` ao final do parágrafo `palpites`, mais um espaço em branco para que haja espaçamento entre cada palpite mostrado.
- O próximo bloco (linhas 8–24 acima) fazem as seguintes conferências:

  - O primeiro `if(){ }` confere se o palpite do jogador é igual ao número aleatório (`numeroAleatorio`) definido no topo do nosso JavaScript. Se for, o jogador adivinhou corretamente o número e venceu o jogo. Então mostramos ao jogador uma mensagem de parabenização com uma agradável cor verde, limpamos o conteúdo do parágrado que informa sobre o palpite ser alto ou baixo `<p class="baixoOuAlto"></p>`, e executamos uma função chamada `configFimDeJogo()`, que iremos discutir mais tarde.
  - Agora nós encadeamos outro teste ao final deste anterior usando uma estrutura `else if(){ }`. Este confere se o palpite do jogador é sua última tentativa. Se for, o programa faz o mesmo que no bloco anterior, porém com uma mensagem de fim de jogo ao invés do texto de parabenização.
  - O bloco final encadeado ao final do código (`else { }`) contém código que só é executado se nenhum dos outros dois testes retornar verdadeiro (ou seja, o jogador não acertou o número, porém ainda tem mais tentativas restantes). Neste caso nós dizemos a ele que está errado, e então rodamos outro teste condicional para checar se o palpite foi maior ou menor do que a resposta certa, exibindo então uma mensagem apropriada para informá-lo se foi maior ou menor.

- As próximas três linhas da função (linhas 26–28) nos deixa preparados para o próximo palpite ser submetido. Nós somamos 1 à variável `contagemPalpites` para que o jogador use sua tentativa (`++` é uma operação de incremento — incrementa em 1), e o campo de texto do formulário de inserção seja esvaziado e focado novamente, pronto para que o próximo palpite seja inserido.

### Eventos

Neste ponto temos uma função `conferirPalpite()` bem implementada, mas ela não irá fazer nada pois nós não a chamamos ainda. Idealmente nós queremos que ela seja acionada quando o botão "Enviar palpite" for pressionado, e para fazer isso precisamos usar um evento. Eventos são ações que acontencem no navegador, como um botão sendo clicado, ou uma página carregada, ou um vídeo tocando; ações as quais podemos responder executando blocos de código. Os construtores que monitoram os acontecimentos de eventos são chamados de **event listeners**, e os blocos de código executados em resposta ao acontecimento do evento são chamados de **event handlers**.

Adicione a seguinte linha abaixo da chave de fechamento da sua função `conferirPalpite()`:

```js
envioPalpite.addEventListener("click", conferirPalpite);
```

Aqui nós estamos adicionando um _event listener_ ao botão `envioPalpite`. Esse é um método que aceita a inserção de dois valores (chamados de argumentos) — o tipo de envento que estamos monitorando (neste caso o evento `click`) como um _string_ (sequência de texto), e o código que queremos executar quando o evento ocorrer (neste caso a função `conferirPalpite()` — note que não temos que especificar os parênteses quando estivermos escrevendo dentro de {{domxref("EventTarget.addEventListener", "addEventListener()")}}).

Tente agora salvar e atualizar seu código, e seu exemplo deve funcionar agora, até um ponto. O único problema agora é que se você acertar o palpite ou ficar sem mais tentativas o jogo irá falhar, porque ainda não definimos a função `configFimDeJogo()` que deve ser executada uma vez que o jogo terminar. Vamos adicionar agora o código restante e completar a funcionalidade do nosso exemplo.

### Finalizando a funcionalidade do jogo

Vamos adicionar a função `configFimDeJogo()` ao final do nosso código e então explorá-lo. Adicione agora isso, abaixo do restante do seu JavaScript:

```js
function configFimDeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reiniciarJogo);
}
```

- As primeiras duas linhas desabilitam a entrada de texto do formulário e o clique do botão, definindo a propriedade _disabled_ (desabilitado) de cada um como `true` (verdadeiro). Isso é necessário, pois se não o fizermos, o usuário poderia submeter mais palpites depois do jogo ter terminado, o que iria bagunçar as coisas.
- As próximas três linhas geram um novo elemento {{htmlelement("button")}}, define o texto de seu rótulo como "Iniciar novo jogo", e o adiciona ao final do nosso HTML existente.
- A linha final define um monitor de evento (_event listener_) em nosso botão, para que quando seja clicado, uma função chamada `reiniciarJogo()` seja executada.

Agora precisamos definir essa função também! Adicione o seguinte código, novamente ao final do nosso JavaScript:

```js
function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarParas = document.querySelectorAll(".resultadoParas p");
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = "";
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();

  ultimoResultado.style.backgroundColor = "white";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
```

Esse longo bloco de código redefine completamente tudo do modo como era no início do jogo, para que o jogador possa jogá-lo novamente. Ele:

- Coloca o valor da variável `contagemPalpites` novamente igual a 1.
- Limpa todos os parágrafos de informativos.
- Remove o botão resete do nosso código.
- Habilita os elementos do formulários, esvazia e direciona o foco ao campo de texto, pronto para que um novo palpite seja inserido.
- Remove a cor de fundo do parágrafo `ultimoResultado`.
- Gera um novo número aleatório para que o jogador não esteja tentando adivinhar o mesmo número novamente!

**Neste ponto você deve ter um jogo (simples) completamente funcional — parabéns!**

Tudo o que temos que fazer agora neste artigo é falar sobre alguns outros recursos importantes que você já viu, mesmo que não os tenha notado ainda.

### Loops

Uma parte do código acima que precisamos olhar mais detalhadamente é o loop [for](/pt-BR/docs/Web/JavaScript/Reference/Statements/for). Loop é um conceito muito importante em programação, que permite a você continuar executando um pedaço do código repetidamente, até que determinada condição seja satisfeita.

Para começar, vá novamente até o [console JavaScript](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) do seu navegador, e insira o seguinte:

```js
for (var i = 1; i < 21; i++) {
  console.log(i);
}
```

O que aconteceu? Os números de 1 a 20 foram exibidos no seu console. Isso acontece por causa do loop. Um loop `for` utiliza a inserção de três valores (argumentos):

1. **Um valor inicial**: Nesse caso estamos iniciando a contagem em 1, mas poderia ser qualquer outro número que quisesse utilizar. Você pode substituir `i` por qualquer número que quiser também, mas `i` é utilizado por convenção porque é curto e fácil de lembrar.
2. **Uma condição de saída**: Aqui nós especificamos `i < 21` — o loop irá continuar rodando até que `i` não seja mais menor que 21. Quando `i` alcançar 21, o loop não será mais executado.
3. **Incremento**: Nós especificamos `i++`, que siginifica "adicione 1 à i". O loop irá rodar uma vez para cada valor de `i`, até que `i` alcance o valor de 21 (como abordado acima). Nesse caso, nós estamos simplesmente imprimindo o valor de `i` no console em cada iteração usando {{domxref("Console.log", "console.log()")}}.

Agora vamos olhar o loop em nosso jogo de adivinhar o número — o código seguinte pode ser encontrado dentro da função `reiniciarJogo()`:

```js
var reiniciarParas = document.querySelectorAll(".resultadoParas p");
for (var i = 0; i < reiniciarParas.length; i++) {
  reiniciarParas[i].textContent = "";
}
```

Esse código cria uma variável contendo uma lista de todos os parágrafos dentro de `<div class="resultadoParas">` usando o método {{domxref("Document.querySelectorAll", "querySelectorAll()")}}, e então faz o loop em cada um, removendo o conteúdo de texto dos mesmos.

### Uma pequena discussão sobre objetos

Vamos adicionar uma melhoria final antes de chegarmos a essa discussão. Adicione a linha seguinte logo abaixo da linha `var botaoReinicio;` próximo ao topo do seu JavaScript, em seguida salve nosso arquivo:

```js
campoPalpite.focus();
```

Essa linha usa o método {{domxref("HTMLElement.focus", "focus()")}} para automaticamente colocar o cursor dentro campo de texto do {{htmlelement("input")}} assim que a página carrega, significando que o usuário já pode começar a digitar o primeiro palpite, e não precisa clicar no campo do formulário primeiro. É apenas uma pequena adição, mas melhora a usabilidade — dando ao usuário uma boa dica visual do que ele deve fazer para jogar o jogo.

Vamos analisar o que está acontencedo aqui com um pouco mais de detalhes. Em JavaScript, tudo é um objeto. Um objeto é uma coleção de funcionalidades relacionadas armazenadas em um único agrupamento. Você pode criar seus próprios objetos, mas isso é bastante avançado e nós não iremos abordar até mais tarde no curso. Por agora, vamos apenas discutir brevemente os objetos pré-construídos presentes em seu navegador, que lhe permite fazer várias coisas úteis.

Neste caso particular, nós primeiro criamos a variável `campoPalpite` que armazena uma referência ao campo de inserção de texto do formulário em nosso HTML — a linha seguinte pode ser achada entre nossas declarações de variáveis próximas ao topo:

```js
var campoPalpite = document.querySelector(".campoPalpite");
```

Para pegar essa referência, usamos o método {{domxref("document.querySelector", "querySelector()")}} do objeto {{domxref("document")}}. `querySelector()` pega um pedaço de informação — um [seletor CSS](/pt-BR/docs/Learn/CSS/Introduction_to_CSS/Selectors) que seleciona o elemento ao qual você quer referenciar.

Como agora `campoPalpite` contém referência ao elemento {{htmlelement("input")}}, ele terá agora acesso a um número de propriedades (basicamente variáveis armazenadas dentro de objetos, sendo que alguns não podem ter seus valores alterados) e métodos (basicamente, funções armazenadas dentro de objetos). Um método disponível para elementos de inserção `<input>`, é o `focus()`, então agora podemos usar essa linha para focar o campo de inserção de texto:

```js
campoPalpite.focus();
```

Variáveis que não contém referências a elementos de formulário não terão `focus()` disponível para elas. Por exemplo, a variável `palpites` contém referência de um elemento {{htmlelement("p")}}, e `contagemPalpites` contém um número.

### Brincando com objetos do navegador

Vamos brincar um pouco com alguns objetos do navegador.

1. Primeiro abra seu programa em um navegador.
2. Em seguida, abra as [ferramentas de desenvolvimento do navegador](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools), e certifique-se de que a aba do console JavaScript esteja aberta.
3. Digite `campoPalpite` e o console irá lhe mostrar que a variável contém um elemento {{htmlelement("input")}}. Você também irá notar que o console completa automaticamente os nomes de objetos existentes dentro do ambiente de execução, incluindo suas variáveis!

   1. Agora digite o seguinte:

      ```js
      campoPalpite.value = "Olá";
      ```

      A propriedade `value` representa o valor atual inserido no campo de texto. Você verá que inserindo esse comando, nós mudamos o valor desse objeto!

4. Agora tente digitar `palpites` e pressione _return_. O console irá mostrar que a variável contém um elemento {{htmlelement("p")}}.
5. Agora tente inserir a linha seguinte:

   ```js
   palpites.value;
   ```

   O navegador irá retornar `undefined`, porque `value` não existe em parágrafos.

6. Para mudar o texto dentro de um parágrafo, você precisa da propriedade {{domxref("Node.textContent", "textContent")}}. Tente isso:

   ```js
   palpites.textContent = "Onde está meu parágrafo?";
   ```

7. Agora algo divertido. Tente inserir as linhas abaixo, uma por uma:

   ```js
   palpites.style.backgroundColor = "yellow";
   palpites.style.fontSize = "200%";
   palpites.style.padding = "10px";
   palpites.style.boxShadow = "3px 3px 6px black";
   ```

   Cada elemento em uma página tem uma propriedade `style`, que contém um objeto no qual estão inseridos em suas propriedades todos os estilos incorporados de CSS aplicados ao respectivo elemento. Isso nos permite configurar dinamicamente novos estilos CSS nos elementos usando JavaScript.

## Finalizado por enquanto

Então é isso, para construir o exemplo — você chegou ao final, muito bem! Teste o resultado do seu código, ou [jogue com nossa versão finalizada aqui](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Se você não conseguir fazer o exemplo funcionar, compare com o [código fonte](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
