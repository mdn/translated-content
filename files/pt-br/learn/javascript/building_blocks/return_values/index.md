---
title: Valores de retorno de função
slug: Learn/JavaScript/Building_blocks/Return_values
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Há um último conceito essencial para discutirmos neste curso, para fechar nossa visão das funções — valores de retorno. Algumas funções não retornam um valor significativo após a conclusão, mas outras o fazem, e é importante entender quais são seus valores, como utilizá-los em seu código e como fazer com que suas próprias funções personalizadas retornem valores úteis. Nós vamos cobrir tudo isso abaixo.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        <p>
          Conhecimento básico de internet, compreenção básica de HTML e CSS,
          <a href="/pt-BR/docs/Learn/JavaScript/First_steps"
            >JavaScript primeiros passos</a
          >,
          <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions"
            >Funções — reutilizando blocos de código</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender os valores de retorno de uma função, e como utilizá-los</td>
    </tr>
  </tbody>
</table>

## Quais são os valores de retorno?

**Valores de retorno** são exatamente como soam — valores retornados pela função quando são concluídos. Você já conheceu os valores de retorno várias vezes, embora possa não ter pensado neles explicitamente. Vamos voltar para algum código familiar:

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Nós vimos exatamente este bloco de código em nosso primeiro artigo de função. Estamos invocando a função [replace()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace) na string `myText` e passando a ela dois parâmetros — a substring para localizar e a substring para substituí-la. Quando essa função é concluída (termina a execução), ela retorna um valor, que é uma nova string com a substituição feita. No código acima, estamos salvando esse valor de retorno como o valor da variável `newString`.

Se você observar a página de referência MDN da função de substituição, verá uma seção chamada [Valor de retorno](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Return_value). É muito útil conhecer e entender quais valores são retornados por funções, portanto, tentamos incluir essas informações sempre que possível.

Algumas funções não retornam um valor de retorno como tal (em nossas páginas de referência, o valor de retorno é listado como `void` ou `undefined` em tais casos). Por exemplo, na [função displayMessage()](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html#L50) que criamos no artigo anterior, nenhum valor específico é retornado como resultado da função que está sendo chamada. Apenas faz uma caixa aparecer em algum lugar na tela — é isso!

Geralmente, um valor de retorno é usado onde a função é uma etapa intermediária em um cálculo de algum tipo. Você quer chegar a um resultado final, que envolve alguns valores. Esses valores precisam ser calculados por uma função, que retorna os resultados para que possam ser usados no próximo estágio do cálculo.

### Usando valores de retorno em suas próprias funções

Para retornar um valor de uma função personalizada, você precisa usar ... aguarde por isso ... a palavra-chave [return](/pt-BR/docs/Web/JavaScript/Reference/Statements/return). Vimos isso em ação recentemente em nosso exemplo [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html). Nossa função `draw()` desenha 100 círculos aleatórios em algum lugar em um HTML {{htmlelement("canvas")}}:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Dentro de cada iteração de loop, três chamadas são feitas para a função `random()` , para gerar um valor aleatório para a coordenada x do círculo atual, coordenada y e raio, respectivamente. A função `random()` recebe um parâmetro — um número inteiro — e retorna um número aleatório inteiro entre 0 e esse número. Se parece com isso:

```js
function randomNumber(number) {
  return Math.floor(Math.random() * number);
}
```

Isso pode ser escrito da seguinte maneira:

```js
function randomNumber(number) {
  var result = Math.floor(Math.random() * number);
  return result;
}
```

Mas a primeira versão é mais rápida de escrever e mais compacta.

Estamos retornando o resultado do cálculo `Math.floor(Math.random()*number)` cada vez que a função é chamada. Esse valor de retorno aparece no ponto em que a função foi chamada e o código continua. Então, por exemplo, se nós rodássemos a seguinte linha:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

e as três chamadas `random()` retornaram os valores 500, 200 e 35, respectivamente, a linha seria executada como se fosse isso:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

As chamadas de função na linha são executadas primeiro e seus valores de retorno substituem as chamadas de função, antes que a própria linha seja executada.

## Aprendizagem ativa: nossa própria função de valor de retorno

Vamos escrever nossas próprias funções com valores de retorno.

1. Primeiro de tudo, faça uma cópia local do arquivo [function-library.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library.html) do GitHub. Esta é uma página HTML simples contendo um campo de texto {{htmlelement("input")}} e um parágrafo. Há também um elemento {{htmlelement("script")}} no qual armazenamos uma referência a ambos os elementos HTML em duas variáveis. Esta pequena página permitirá que você insira um número na caixa de texto e exiba diferentes números relacionados a ele no parágrafo abaixo.
2. Vamos adicionar algumas funções úteis para este elemento `<script>`. Abaixo das duas linhas existentes de JavaScript, adicione as seguintes definições de função:

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     var x = num;
     while (x > 1) {
       num *= x - 1;
       x--;
     }
     return num;
   }
   ```

   As funções `squared()` e `cubed()` são bastante óbvias — elas retornam o quadrado ou cubo do número dado como um parâmetro. A função `factorial()` retorna o [fatorial](https://pt.wikipedia.org/wiki/Fatorial) do número fornecido.

3. Em seguida, vamos incluir uma maneira de imprimir informações sobre o número digitado na entrada de texto. Digite o seguinte manipulador de eventos abaixo das funções existentes:

   ```js
   input.onchange = function () {
     var num = input.value;
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent =
         num +
         " squared is " +
         squared(num) +
         ". " +
         num +
         " cubed is " +
         cubed(num) +
         ". " +
         num +
         " factorial is " +
         factorial(num) +
         ".";
     }
   };
   ```

   Aqui estamos criando um manipulador de eventos `onchange` que é executado sempre que o evento de mudança é acionado na entrada de texto — ou seja, quando um novo valor é inserido na entrada de texto e enviado (insira um valor e pressione tab por exemplo). Quando essa função anônima é executada, o valor existente inserido na entrada é armazenado na variável `num`.

   Em seguida, fazemos um teste condicional — se o valor inserido não for um número, imprimiremos uma mensagem de erro no parágrafo. O teste analisa se a expressão `isNaN(num)` retorna true. Usamos a função [isNaN()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN) para testar se o valor num não é um número — se for, retorna `true`, e, se não, `false`.

   Se o teste retorna `false`, o valor `num` é um número, então imprimimos uma frase dentro do elemento de parágrafo informando o que é o quadrado, o cubo e o fatorial do número. A sentença chama as funções `squared()`, `cubed()`, e `factorial()` para obter os valores necessários.

4. Salve seu código, carregue-o em um navegador e experimente.

> **Nota:** Se você tiver problemas para fazer o exemplo funcionar, sinta-se à vontade para verificar seu código na [versão finalizada no GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html) ([consulte também sua execução](http://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)), ou peça ajuda.

Neste ponto, gostaríamos que você escrevesse algumas funções e as adicionasse à biblioteca. Como sobre o quadrado ou raiz cúbica do número, ou a circunferência de um círculo com um raio de comprimento `num`?

Este exercício trouxe alguns pontos importantes além de ser um estudo sobre como usar a declaração de `return`. Além disso, temos:

- Analisamos outro exemplo de como escrever erros em nossas funções. Geralmente, é uma boa ideia verificar se os parâmetros necessários foram fornecidos e, no tipo de dados correto, e se eles são opcionais, que algum tipo de valor padrão é fornecido para permitir isso. Desta forma, o seu programa terá menos probabilidade de lançar erros.
- Pense na ideia de criar uma biblioteca de funções. À medida que você avança na sua carreira de programação, você começará a fazer o mesmo tipo de coisas uma e outra vez. É uma boa idéia começar a manter sua própria biblioteca de funções utilitárias que você usa com muita frequência — você pode então copiá-las para o seu novo código, ou até mesmo aplicá-las a qualquer página HTML onde você precisar.

## Conclusão

Então, temos isso — funções são divertidas, muito úteis e, embora haja muito o que falar em relação à sua sintaxe e funcionalidade, bastante compreensíveis, dados os artigos certos para se estudar.

Se houver algo que você não entendeu, fique à vontade para ler o artigo novamente ou entre em [contato conosco](/en-US/Learn#Contact_us) para pedir ajuda.

## Veja também

- [Funções detalhadas](/pt-BR/docs/Web/JavaScript/Reference/Functions) — um guia detalhado cobrindo informações relacionadas a funções mais avançadas.
- [Funções de retorno de chamada em JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — um padrão JavaScript comum é passar uma função para outra função como um argumento, que é então chamado dentro da primeira função. Isso está um pouco além do escopo deste curso, mas vale a pena ser estudado em pouco tempo.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
