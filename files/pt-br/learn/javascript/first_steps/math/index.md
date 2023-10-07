---
title: Matemática básica no JavaScript — números e operadores
slug: Learn/JavaScript/First_steps/Math
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

Neste ponto do curso estaremos discutindo matemática em JavaScript — Como podemos usar {{Glossary("Operador","operadores")}} e outros recursos para manipular números e fazer cálculos.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico em informática, uma compreensão básica de HTML e
        CSS, uma compreensão do que é o JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Ganhar familiaridade com o básico em matemática no JavaScript.</td>
    </tr>
  </tbody>
</table>

## Todo mundo ama matemática

Ok, talvez não. Alguns de nós gostam de matemática, alguns de nós tem a odiado desde que tivemos que aprender a tabuada de multiplicação e divisão na escola, e alguns de nós estão em algum lugar no meio dos dois cenários. Mas nenhum de nós pode negar que a matemática é uma parte fundamental da vida sem a qual não poderíamos ir muito longe. Isso é especialmente verdadeiro quando estamos aprendendo a programar em JavaScript (ou em qualquer outra linguagem, diga-se de passagem) — muito do que fazemos se baseia no processamento de dados numéricos, cálculo de novos valores, etc. Assim você não ficará surpreso em aprender que o JavaScript tem uma configuração completa de funções matemáticas disponíveis.

Este artigo discute apenas as partes básicas que você precisa saber agora.

### Tipos de números

Em programação, até mesmo o humilde sistema de números decimais que todos nós conhecemos tão bem é mais complicado do que você possa pensar. Usamos diferentes termos para descrever diferentes tipos de números decimais, por exemplo:

- **Integers** (inteiros) são números inteiros, ex. 10, 400 ou -5.
- **Números de ponto flutuante** _(floats)_ tem pontos e casas decimais, por exemplo 12.5 e 56.7786543.
- **Doubles** são tipos de _floats_ que tem uma precisão maior do que os números de ponto flutuante padrões (significando que eles são mais precisos, possuindo uma grande quantidade de casas decimais).

Temos até mesmo diferentes tipos de sistemas numéricos! O decimal tem por base 10 (o que significa que ele usa um número entre 0–9 em cada casa), mas temos também algo como:

- **Binário** — A linguagem de menor level dos computadores; 0s e 1s.
- **Octal** — Base 8, usa um caractere entre 0–7 em cada coluna.
- **Hexadecimal** — Base 16, usa um caractere entre 0–9 e depois um entre a–f em cada coluna. Você pode já ter encontrado esses números anteriormente, trabalhando com [cores no CSS](/pt-BR/docs/Aprender/CSS/Introduction_to_CSS/Valores_e_unidades#Valores_hexadecimais).

**Antes de se preocupar com seu cérebro estar derretendo, pare agora mesmo!** Para um começo, vamos nos ater aos números decimais no decorrer desse curso; você raramente irá se deparar com a necessidade de começar a pensar sobre os outros tipos, se é que vai precisar algum dia.

A segunda boa notícia é que, diferentemente de outras linguagens de programação, o JavaScript tem apenas um tipo de dados para números, você advinhou, {{jsxref("Number")}}. Isso significa que qualquer que seja o tipo de números com os quais você está lidando em JavaScript, você os manipula do mesmo jeito.

### Tudo é número para mim

Vamos brincar rapidamente com alguns números para nos familiarizarmos com a sintaxe básica que precisamos. Insira os comandos listados abaixo em seu [console JavaScript](/pt-BR/docs/Learn/Common_questions/ferramentas_de_desenvolvimento_do_navegador), ou use o console simples incorporado abaixo, se preferir.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/variables/index.html", '100%', 300)}}

**[Abra em uma nova janela](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/)**

1. Primeiramente, vamos declarar duas variáveis e as inicializar com um _integer_ e um _float_, respectivamente, então digitaremos os nomes das variáveis para verificar se está tudo em ordem:

   ```js
   var meuInt = 5;
   var meuFloat = 6.667;
   meuInt;
   meuFloat;
   ```

2. Valores numéricos são inseridos sem aspas — tente declarar e inicializar mais duas variáveis contendo números antes de seguir em frente.
3. Agora vamos checar se nossas duas variáveis originais são do mesmo tipo de dados. Há um operador chamado {{jsxref("Operators/typeof", "typeof")}} no JavaScript que faz isso. Insira as duas linhas conforme mostradas abaixo:

   ```js
   typeof meuInt;
   typeof meuFloat;
   ```

   Você deve obter `"number"` de volta nos dois casos — isso torna as coisas muito mais fáceis para nós do que se diferentes tipos de números tivessem diferentes tipos de dados, e tivéssemos que lidar com eles em diferentes maneiras. Ufa!

## Operadores aritméticos

São os operadores que utilizamos para fazer as operações aritiméticas básicas:

| Operador | Nome                                                | Propósito                                                                                    | Exemplo                                                                     |
| -------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `+`      | Adição                                              | Adiciona um número a outro.                                                                  | `6 + 9`                                                                     |
| `-`      | Subtração                                           | Subtrai o número da direita do número da esquerda.                                           | `20 - 15`                                                                   |
| `*`      | Multiplicação                                       | Multiplica um número pelo outro.                                                             | `3 * 7`                                                                     |
| `/`      | Divisão                                             | Divide o número da esquerda pelo número da direita.                                          | `10 / 5`                                                                    |
| `%`      | Restante _(Remainder_ - as vezes chamado de modulo) | Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita. | `8 % 3` (retorna 2; como três cabe duas vezes em 8, deixando 2 como resto.) |

> **Nota:** Você verá algumas vezes números envolvidos em aritimética chamados de {{Glossary("Operando", "operandos")}}.

Nós provavelmente não precisamos ensinar a você como fazer matemática básica, mas gostaríamos de testar seu entendimento da sintaxe envolvida. Tente inserir os exemplos abaixo no seu [console JavaScript](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools), ou use o console incorporado visto anteriormente, se preferir, para familiarizar-se com a sintaxe.

1. Primeiro tente inserir alguns exemplos simples por sua conta, como

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Você pode tentar declarar e inicializar alguns números dentro de variáveis, e tentar usá-los nas operações — as variáveis irão se comportar exatamente como os valores que elas armazenam para a finalidade das operações. Por exemplo:

   ```js
   var num1 = 10;
   var num2 = 50;
   9 * num1;
   num2 / num1;
   ```

3. Por último, nesta seção, tente inserir algumas expressões mais complexas, como:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Alguns dos exemplos do último bloco podem não ter retornado os valores que você estava esperando; a seção abaixo pode lhe explicar o porquê.

### Precedência de operador

Vamos olhar para o último exemplo, assumindo que `num2` guarda o valor 50 e `num1` possui o valor 10 (como iniciado acima):

```js
num2 + num1 / 8 + 2;
```

Como um ser humano, talvez você leia isso como _"50 mais 10 é igual a 60"_, depois _"8 mais 2 é igual a 10"_, e então _"60 dividido por 10 é igual a 6"_.

No entanto seu navegador vai ler _"10 dividido por 8 é igual a 1.25"_, então _"50 mais 1.25 mais 2 é igual a 53.25"_.

Isto acontence por causa da **precedência de operadores** — algumas operações serão aplicadas antes de outras quando calcularmos o resultado de uma soma (referida em programação como uma expressão). A precedência de operadores em JavaScript é semelhante ao ensinado nas aulas de matemática na escola — Multiplicação e divisão são realizados primeiro, depois a adição e subtração (a soma é sempre realizada da esquerda para a direita).

Se você quiser substituir a precedência do operador, poderá colocar parênteses em volta das partes que desejar serem explicitamente tratadas primeiro. Então, para obter um resultado de 6, poderíamos fazer isso:

```js
(num2 + num1) / (8 + 2);
```

Tente fazer e veja como fica.

> **Nota:** Uma lista completa de todos os operadores JavaScript e suas precedências pode ser vista em [Expressões e operadores](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operator_precedence).

## Operadores de incremento e decremento

Às vezes você desejará adicionar ou subtrair, repetidamente, um valor de uma variável numérica. Convenientemente isto pode ser feito usando os operadores incremento `++` e decremento `--`. Usamos `++` em nosso jogo "Adivinhe o número" no primeiro artigo [Um primeiro mergulho no JavaScript](/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash), quando adicionamos 1 ao nosso `contagemPalpites` para saber quantas adivinhações o usuário deixou após cada turno.

```js
contagemPalpites++;
```

> **Nota:** Eles são mais comumente usado em [Laços e iterações](/pt-BR/docs/Web/JavaScript/Guide/Lacos_e_iteracoes), que será visto no curso mais tarde. Por exemplo, digamos que você queira passar por uma lista de preços e adicionar imposto sobre vendas a cada um deles. Você usaria um loop para passar por cada valor e fazer o cálculo necessário para adicionar o imposto sobre vendas em cada caso. O incrementador é usado para mover para o próximo valor quando necessário. Na verdade, fornecemos um exemplo simples mostrando como isso é feito - [verifique ao vivo](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/loop.html) e observe o [código-fonte](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/maths/loop.html) para ver se consegue identificar os incrementadores! Veremos os _loops_ detalhadamente mais adiante no curso.

Vamos tentar brincar com eles no seu console. Para começar, note que você não pode aplicá-las diretamente a um número, o que pode parecer estranho, mas estamos atribuindo a variável um novo valor atualizado, não operando no próprio valor. O seguinte retornará um erro:

```js
3++;
```

Então, você só pode incrementar uma variável existente. Tente isto:

```js
var num1 = 4;
num1++;
```

Ok, segunda coisa estranha! Quando você fizer isso, verá um valor 4 retornado - isso ocorre porque o navegador retorna o valor atual e, _em seguida_, incrementa a variável. Você pode ver que ele foi incrementado se você retornar o valor da variável novamente:

```js
num1;
```

Acontece a mesma coisa com `--` : tente o seguinte

```js
var num2 = 6;
num2--;
num2;
```

> **Nota:** Você pode fazer o navegador fazer o contrário - incrementar/decrementar a variável e depois retornar o valor, colocando o operador no início da variável ao invés do final. Tente os exemplos acima novamente, mas desta vez use `++num1` e `--num2`.

## Operadores de atribuição

Operadores de atribuição são os que atribuem um valor à uma variável. Nós já usamos o básico, `=`, muitas vezes, simplesmente atribuindo à variável do lado esquerdo o valor indicado do lado direito do operador:

```js
var x = 3; // x contém o valor 3
var y = 4; // y contém o valor 4
x = y; // x agora contém o mesmo valor de y, 4
```

Mas existem alguns tipos mais complexos, que fornecem atalhos úteis para manter seu código mais puro e mais eficiente. Os mais comuns estão listados abaixo:

| Operator | Name                        | Purpose                                                                                                    | Example           | Shortcut for         |
| -------- | --------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`     | Atribuição de adição        | Adiciona o valor à direita ao valor da variável à esquerda e, em seguida, retorna o novo valor da variável | `x = 3; x += 4;`  | `x = 3; x = x + 4;`  |
| `-=`     | Atribuição de subtração     | Subtrai o valor à direita do valor da variável à esquerda e retorna o novo valor da variável               | `x = 6; x -= 3;`  | `x = 6; x = x - 3;`  |
| `*=`     | Atribuição de multiplicação | Multiplica o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável          | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`     | Atribuição de divisão       | Divide o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável              | `x = 10; x /= 5;` | `x = 10; x = x / 5;` |

Tente digitar alguns dos exemplos acima em seu console para ter uma ideia de como eles funcionam. Em cada caso, veja se você pode adivinhar qual é o valor antes de digitar a segunda linha.

Note que você pode muito bem usar outros valores no lado direito de cada expressão, por exemplo:

```js
var x = 3; // x contém o valor 3
var y = 4; // y contém o valor 4
x *= y; // x agora contém o valor 12
```

> **Nota:** Existem muitos [outros operadores de atribuição disponíveis](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_atribuicao), mas estes são os básicos que você deve aprender agora.

## Aprendizado ativo: dimensionando uma canvas box

Neste exercício, você manipulará alguns números e operadores para alterar o tamanho de uma caixa. A caixa é desenhada usando uma API do navegador chamada {{domxref("Canvas API", "", "", "true")}}. Não há necessidade de se preocupar sobre como isso funciona, apenas concentre-se na matemática por enquanto. A largura e altura da caixa (em pixels) são definidas pelas variáveis x e y, que recebem um valor inicial de 50.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 520)}}

**[Abrir em nova janela](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Na caixa de código editável acima, há duas linhas marcadas com um comentário que gostaríamos que você atualizasse para aumentar/diminuir a caixa para determinados tamanhos, usando determinados operadores e/ou valores em cada caso. Vamos tentar o seguinte:

- Altere a linha que calcula x para que a caixa ainda tenha 50px de largura, mas que 50 seja calculado usando os números 43 e 7 e um operador aritmético.
- Altere a linha que calcula y tenha 75px de altura, mas que 75 seja calculado usando os números 25 e 3 e um operador aritmético.
- Altere a linha que calcula x para que a caixa tenha 250px de largura, mas que 250 seja calculado usando dois números e o operador resto (modulo).
- Altere a linha que calcula y para que a caixa tenha 150px de altura, mas que 150 seja calculado usando três números e os operadores de subtração e divisão.
- Altere a linha que calcula x para que a caixa tenha 200px de largura, mas que 200 seja calculado usando o número 4 e um operador de atribuição.
- Altere a linha que calcula y para que a caixa tenha 200px de altura, mas que 200 seja calculado usando os números 50 e 3, o operador de multiplicação e o operador de atribuição de adição.

Não se preocupe se você estragar totalmente o código. Você sempre pode pressionar o botão Reset para fazer as coisas funcionarem novamente. Depois de ter respondido corretamente a todas as perguntas acima, sinta-se à vontade para brincar um pouco com o código ou crie seus próprios desafios.

## Operadores de comparação

Às vezes, queremos executar testes verdadeiro / falso e, em seguida, agir de acordo, dependendo do resultado desse teste, para fazer isso, usamos **operadores de comparação**.

| Operator | Name                  | Purpose                                                                        | Example       |
| -------- | --------------------- | ------------------------------------------------------------------------------ | ------------- |
| `===`    | Igualdade estrita     | Verifica se o valor da esquerda e o da direita são idênticos entre si.         | `5 === 2 + 4` |
| `!==`    | Não-igualdade-estrita | Verifica se o valor da esquerda e o da direita **não** são idênticos entre si. | `5 !== 2 + 3` |
| `<`      | Menor que             | Verifica se o valor da esquerda é menor que o valor da direita.                | `10 < 6`      |
| `>`      | Maior que             | Verifica se o valor da esquerda é maior que o valor da direita.                | `10 > 20`     |
| <=       | Menor ou igual que    | Verifica se o valor da esquerda é menor que ou igual ao valor da direita.      | `3 <= 2`      |
| >=       | Maior ou igual que    | Verifica se o valor da esquerda é maior que ou igual ao valor da direita.      | `5 >= 4`      |

> **Nota:** Talvez você já tenha visto alguém usando `==` e`!=` afim de testar igualdade ou desigualdade em JavaScript. Estes são operadores válidos em JavaScript, mas que diferem de `===`/`!==`. As versões anteriores testam se os valores são os mesmos, mas não se os tipos de dados dos valores são os mesmos. As últimas versões estritas testam a igualdade de ambos os valores e seus tipos de dados. Elas tendem a resultar em menos erros, por isso recomendamos que você as use.

Se você tentar inserir alguns desses valores em um console, verá que todos eles retornam `true`/`false` — aqueles booleanos que mencionamos no último artigo. Eles são muito úteis, pois nos permitem tomar decisões em nosso código, e eles são usados toda vez que queremos fazer uma escolha de algum tipo. Por exemplo, booleanos podem ser usados para:

- Exibir o text label em um botão, dependendo se um recurso está ativado ou desativado
- Exibir uma mensagem de 'game over' se um jogo acabou ou uma mensagem de vitória se o jogo foi vencido
- Exibir uma saudação sazonal correta, dependendo da época de festas
- Aumentar ou diminuir o zoom do mapa, dependendo do nível de zoom selecionado

Veremos como codificar essa lógica quando examinarmos instruções condicionais em um artigo futuro. Por enquanto, vamos dar uma olhada em um exemplo rápido:

```html
<button>Iniciar máquina</button>
<p>A máquina está parada.</p>
```

```js
var btn = document.querySelector("button");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Iniciar máquina") {
    btn.textContent = "Parar máquina";
    txt.textContent = "A máquina iniciou!";
  } else {
    btn.textContent = "Iniciar máquina";
    txt.textContent = "A máquina está parada.";
  }
}
```

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[Abrir em nova janela](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Você pode ver o operador de igualdade sendo usado apenas dentro da função `updateBtn()`. Neste caso, não estamos testando se duas expressões matemáticas têm o mesmo valor, estamos testando se o conteúdo de texto de um botão contém uma certa string , mas ainda é o mesmo princípio em funcionamento. Se o botão estiver dizendo "Iniciar máquina" quando for pressionado, mudaremos o rótulo para "Parar máquina" e atualizaremos o rótulo conforme apropriado. Se o botão estiver dizendo "Parar máquina" quando for pressionado, nós trocamos a tela de volta.

> **Nota:** Esse controle que troca entre dois estados geralmente é chamado de **toggle**. Ele alterna entre um estado e outro - acender, apagar, etc.

## Resumo

Neste artigo, cobrimos as informações fundamentais que você precisa saber sobre números em JavaScript, por enquanto. Você verá os números sendo usados de novo e de novo, durante todo o aprendizado de JavaScript. Portanto, é uma boa ideia tirar isso do caminho agora. Se você é uma daquelas pessoas que não gosta de matemática, pode se consolar com o fato de este capítulo ser muito curto.

No próximo artigo, vamos explorar o texto e como o JavaScript nos permite manipulá-lo.

> **Nota:** Se você gosta de matemática e quer saber mais sobre como ela é implementada em JavaScriot, você pode encontrar muito mais detalhes na seção principal de JavaScript do MDN. Ótimos lugares para começar são os artigos [Números e datas](/pt-BR/docs/Web/JavaScript/Guide/Numeros_e_datas) e [Expressões e operadores](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators) .

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
