---
title: Gerador de histórias bobas
slug: Learn/JavaScript/First_steps/Silly_story_generator
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Nesta avaliação, você será encarregado de utilizar parte do conhecimento que você adquiriu nos artigos deste módulo e aplicá-lo para criar um aplicativo divertido que gera histórias bobas aleatórias. Divirta-se!

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Antes de tentar esta avaliação, você já deve ter trabalhado com todos os
        artigos deste módulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Testar a compreensão dos fundamentos de JavaScript, como variáveis,
        números, operadores, cadeias de caracteres e matrizes.
      </td>
    </tr>
  </tbody>
</table>

## Ponto de partida

Para começar esta avaliação, você deve:

- [Pegue o arquivo HTML](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html) para o exemplo e salve uma cópia local deste arquivo como index.html em um novo diretório em algum local do seu computador. Este arquivo ainda contém o CSS para estilizar o exemplo contido no arquivo.
- Vá para a [página que contém o texto bruto](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) e matenha-a aberta em uma aba separada do navegador em algum lugar. Você precisará dela mais tarde.

> **Nota:** Alternativamente, você pode utilizar um site como [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) para fazer a sua avaliação. Você pode colar o HTML, CSS e javaScript em um desses editores online. Se o editor online que você estiver utilizando não possuir um painel separado para javaScript, sinta-se a vontade para inseri-lo em um elemento \<script> dentro da página HTML.

## Resumo do projeto

Você recebeu algum HTML/CSS em bruto e algumas strings de texto e funções de JavaScript; Você precisa escrever o JavaScript necessário para transformar este em um programa funcional, que faz o seguinte:

- Gera uma história boba quando o botão "Gerar história aleatória" é pressionado.
- Substitui o nome padrão "Bob" na história com um nome personalizado, somente se um nome personalizado for inserido no campo de texto "Inserir nome personalizado" antes que o botão de geração seja pressionado.
- Gera outra história boba aleatória se você pressionar novamente o botão (e novamente...)

A seguinte captura de tela mostra um exemplo do que o programa concluído deve produzir:

![](assessment-1.png)

Para dar-lhe mais uma ideia, [dê uma olhada no exemplo concluído](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (sem espreitar o código fonte!)

## Passos para completar

As seções a seguir descrevem o que você precisa fazer.

Configuração básica:

1. Crie um novo arquivo chamado main.js, no mesmo diretório que o arquivo index.html.
2. Aplique o arquivo JavaScript externo ao seu HTML inserindo um elemento {{htmlelement ("script")}} no seu HTML referenciando o main.js. Coloque-o antes da etiqueta de fechamento {{htmlelement("body")}}.

Variáveis e funções iniciais:

1. No arquivo de texto cru, copie todo o código abaixo do cabeçalho "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" e cole-o no topo do arquivo main.js. Isso dá a você três variáveis que armazenam referências ao campo de texto "Inserir nome personalizado" (customName), o botão "Gerar história aleatória" (randomizar), E o elemento {{htmlelement ("p")}} na parte inferior do corpo HTML para onde a história será copiada (história), respectivamente. Além disso, você tem uma função chamada randomValueFromArray () que recebe um vetor e retorna um dos itens armazenados dentro do vetor aleatoriamente.
2. Agora, veja a segunda seção do arquivo de texto bruto - "2. RAW TEXT STRINGS". Ele contém strings de texto que atuarão como entrada em nosso programa. Gostaríamos que você armazenasse essas strings dentro de variáveis no main.js:

   1. Armazene a primeira, grande e longa linha de texto dentro de uma variável chamada storyText.
   2. Armazene o primeiro conjunto de três strings dentro de um vetor chamado insertX.
   3. Armazene o segundo conjunto de três strings dentro de um vetor chamado insertY.
   4. Armazene o terceiro conjunto de três strings dentro de um vetor chamado insertZ.

Colocando o manipulador de eventos e a função incompleta:

1. Agora volte ao arquivo de texto bruto.
2. Copie o código encontrado abaixo do cabeçalho "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" E cole ele na parte inferior do arquivo main.js. Isto:

   - Adicione um ouvinte de evento de clique à variável randomize para que, quando o botão que ele representa, for clicado, a função `result()` seja executada.
   - Adicione a função `result()` parcialmente concluída ao seu código. Para o restante da avaliação, você estará preenchendo linhas dentro desta função para completá-la e fazê-la funcionar corretamente.

Completando a função `result()`:

1. Crie uma nova variável chamada `newStory`, e defina seu valor como igual a `storyText`. Isso é necessário para que possamos criar uma nova história aleatória toda vez que o botão for pressionado e a função for executada. Se fizermos alterações diretamente no `storyText`, só poderemos gerar uma nova história uma vez.
2. Crie três novas variáveis chamadas `xItem`, `yItem`, e `zItem`, e torne-as iguais ao resultado da chamada da função `randomValueFromArray()` em seus três arrays (o resultado em cada caso será um item aleatório de cada array em que é chamado). Por exemplo, você pode chamar a função e fazer com que ela retorne uma string aleatória de `insertX` escrevendo `randomValueFromArray(insertX)`.
3. Em seguida, queremos substituir os três espaços reservados na variável `newStory` — `:insertx:`, `:inserty:`, e `:insertz:` — com strings armazenadas em `xItem`, `yItem`, e `zItem`. Existe um método de string específico que irá ajudá-lo aqui - em cada caso, faça a chamada para o método igual a `newStory`,então cada vez que é chamado, newStory é igual a si mesmo, mas com substituições feitas. Assim, cada vez que o botão é pressionado, esses espaços reservados são substituídos por uma string boba aleatória. Como uma dica adicional, o método em questão substitui apenas a primeira ocorrência da subseqüência de caracteres encontrada, portanto, talvez seja necessário fazer uma das chamadas duas vezes.
4. Dentro do primeiro bloco `if`, adicione outra chamada de método de substituição de string para substituir o nome 'Bob' encontrado na string `newStory` pela variável `name`. Neste bloco estamos dizendo "Se um valor foi inserido na entrada de texto `customName`, substitua Bob na história por esse nome personalizado ".
5. Dentro do segundo bloco `if`, estamos verificando se o botão de opção `uk` foi selecionado. Se assim for, converteremos os valores de peso e temperatura na história de libras e Fahrenheit em graus centígrados. O que você precisa fazer é o seguinte:

   1. Procure as fórmulas para converter libras em pedras e Fahrenheit em centígrados.
   2. Dentro da linha que define a variável `weight`, substitua 300 por um cálculo que converta 300 libras em pedras. Concatene `' stone'` no final do resultado da chamada geral `Math.round()`.
   3. Dentro da linha que define a variável `temperature`, substitua 94 por um cálculo que converta 94 graus Fahrenheit em graus centígrados. Concatene `' centigrade'` no resultado da chamada geral `Math.round()`.
   4. Apenas sob as duas definições de variáveis, adicione mais duas linhas de substituição de string que substituem '94 fahrenheit' pelo conteúdo da variável `temperature`, e '300 libras' com o conteúdo da variável `weight`.

6. Finalmente, na segunda e última linha da função, torne a propriedade`textContent` da variável `story` (que faz referência ao parágrafo) igual a `newStory`.

## Dicas e sugestões

- Você não precisa editar o HTML de nenhuma maneira, exceto para adicionar o JavaScript ao seu HTML.
- Se você não tiver certeza se o JavaScript é aplicado ao seu HTML corretamente, tente remover todo o restante do arquivo JavaScript temporariamente, adicionando um pouco de JavaScript que você sabe que criará um efeito óbvio, salvando e atualizando. Por exemplo, o seguinte transforma o plano de fundo do elemento {{htmlelement ("html")}} em vermelho - para que a janela inteira do navegador fique vermelha se o JavaScript for aplicado corretamente:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [Math.round()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round) é um método JavaScript integrado que simplesmente arredonda o resultado de um cálculo para o número inteiro mais próximo.

## Avaliação

Se você estiver seguindo esta avaliação como parte de um curso organizado, você está apto a entregar seu trabalho ao seu professor/mentor para avaliação. Se você é auto-didata, então você pode consultar o guia de marcação com bastante facilidade perguntando no [tópico do Discurso da área de aprendizagem](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294), ou no no canal [#mdn](irc://irc.mozilla.org/mdn) IRC no [IRC Mozilla](https://wiki.mozilla.org/IRC). Tente realizar o exercício primeiro — não há nada a ganhar com a trapaça!

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
