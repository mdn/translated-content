---
title: Noções básicas de JavaScript
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
original_slug: Learn/Getting_started_with_the_web/JavaScript_basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript é uma linguagem de programação que adiciona interatividade ao seu site. Isso acontece em jogos, no comportamento das respostas quando botões são pressionados ou com entrada de dados em formulários; com estilo dinâmico; com animação, etc.
Este artigo ajuda você a começar a usar o JavaScript e aumenta sua compreensão do que é possível.

## O que é JavaScript?

{{Glossary("JavaScript")}} é uma poderosa linguagem de programação que pode adicionar interatividade a um site.
Foi inventado por Brendan Eich.

JavaScript é versátil e amigável para iniciantes.
Com mais experiência, você poderá criar jogos, gráficos 2D e 3D animados, aplicativos abrangentes baseados em banco de dados e muito mais!

O próprio JavaScript é relativamente compacto, mas muito flexível. Os desenvolvedores escreveram uma variedade de ferramentas sobre a linguagem JavaScript principal, desbloqueando uma grande quantidade de funcionalidades com o mínimo de esforço. Esses incluem:

- Interfaces de programação de aplicativos de navegador ({{Glossary("API","APIs")}}) incorporadas a navegadores da Web, fornecendo funcionalidades como criação dinâmica de HTML e definição de estilos CSS; coletar e manipular um fluxo de vídeo da webcam de um usuário ou gerar gráficos 3D e amostras de áudio.
- APIs de terceiros que permitem aos desenvolvedores incorporar funcionalidades em sites de outros provedores de conteúdo, como Twitter ou Facebook.
- Estruturas e bibliotecas de terceiros que você pode aplicar ao HTML para acelerar o trabalho de construção de sites e aplicativos.

Está fora do escopo deste artigo — como uma introdução leve ao JavaScript — apresentar os detalhes de como a linguagem JavaScript básica é diferente das ferramentas listadas acima. Você pode aprender mais na [área de aprendizado de JavaScript] do MDN (/pt-BR/docs/Learn/JavaScript), bem como em outras partes do MDN.

A seção abaixo apresenta alguns aspectos da linguagem principal e também oferece uma oportunidade de jogar com alguns recursos da API do navegador. Divirta-se!

## Um exemplo "Olá, mundo!"

JavaScript é uma das tecnologias da web modernas mais populares! À medida que suas habilidades em JavaScript aumentam, seus sites entrarão em uma nova dimensão de poder e criatividade.

No entanto, familiarizar-se com JavaScript é mais desafiador do que familiarizar-se com HTML e CSS. Você pode ter que começar pequeno e progredir gradualmente. Para começar, vamos examinar como adicionar JavaScript à sua página para criar um exemplo _Hello world!_. (_Hello world!_ é [o padrão para exemplos de programação introdutória](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).)

> [!WARNING]
> Se você não está acompanhando o restante do nosso curso, [faça o download deste código de exemplo](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) e use-o como ponto de partida.

1. Vá para o seu site de teste e crie uma nova pasta chamada `scripts`. Dentro da pasta scripts, crie um novo documento de texto chamado `main.js` e salve-o.
2. Em seu arquivo `index.html`, insira este código em uma nova linha, logo antes da tag de fechamento `</body>`:

   ```html
   <script src="scripts/main.js"></script>
   ```

3. Isso faz o mesmo trabalho que o elemento {{htmlelement("link")}} para CSS. Ele aplica o JavaScript à página, para que possa afetar o HTML (junto com o CSS e qualquer outra coisa na página).
4. Adicione este código ao arquivo `main.js`:

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Olá mundo!";
   ```

5. Certifique-se de que os arquivos HTML e JavaScript foram salvos. Em seguida, carregue `index.html` em seu navegador. Você deve ver algo assim:

![Título "hello world" acima de um logotipo do firefox](hello-world.png)

> [!NOTE]
> A razão pela qual as instruções (acima) colocam o elemento {{htmlelement("script")}} perto da parte inferior do arquivo HTML é que o navegador lê o código na ordem em que aparece no arquivo.
>
> Se o JavaScript carregar primeiro e supostamente afetar o HTML que ainda não foi carregado, pode haver problemas. Colocar JavaScript perto da parte inferior de uma página HTML é uma maneira de acomodar essa dependência. Para saber mais sobre abordagens alternativas, consulte [Estratégias de carregamento de script](/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#script_loading_strategies).

### O que aconteceu?

O texto do cabeçalho mudou para _Hello world!_ usando JavaScript. Você fez isso usando uma função chamada {{domxref("Document.querySelector", "querySelector()")}} para obter uma referência ao seu título e armazená-lo em uma variável chamada `myHeading`. Isso é semelhante ao que fizemos usando seletores CSS. Quando você deseja fazer algo em um elemento, primeiro precisa selecioná-lo.

Em seguida, o código define o valor da propriedade {{domxref("Node.textContent", "textContent")}} da variável `myHeading` (que representa o conteúdo do cabeçalho) como _Hello world!_.

> [!NOTE]
> Ambos os recursos usados neste exercício são partes do [Modelo de Objeto de Document (DOM)](/pt-BR/docs/Web/API/Document_Object_Model), que tem a capacidade de manipular documentos.

## Curso intensivo de fundamentos da linguagem

Para entender melhor como o JavaScript funciona, vamos explicar alguns dos principais recursos da linguagem. Vale a pena notar que esses recursos são comuns a todas as linguagens de programação. Se você dominar esses fundamentos, terá uma vantagem inicial na codificação em outras linguagens também!

> [!WARNING]
> neste artigo, tente inserir as linhas de código de exemplo em seu console JavaScript para ver o que acontece. Para obter mais detalhes sobre consoles JavaScript, consulte [Descubra as ferramentas de desenvolvedor do navegador](/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

### Variáveis

{{Glossary("Variable", "Variables")}} são contêineres que armazenam valores. Você começa declarando uma variável com a palavra-chave [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let), seguida do nome que você dá à variável:

```js
let myVariable;
```

Um ponto e vírgula no final de uma linha indica onde uma instrução termina. Só é necessário quando você precisa separar instruções em uma única linha. No entanto, algumas pessoas acreditam que é uma boa prática colocar ponto-e-vírgula no final de cada instrução. Existem outras regras para quando você deve e não deve usar ponto-e-vírgula. Para obter mais detalhes, consulte [Your Guide to Semicolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/).

Você pode nomear uma variável para praticamente qualquer coisa, mas há algumas restrições. (Consulte [esta seção sobre regras de nomenclatura](/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#variables).) Se não tiver certeza, você pode [verificar o nome da variável](https://mothereff.in/js-variables) para ver se é válido.

JavaScript diferencia maiúsculas de minúsculas. Isso significa que `minhaVariável` não é o mesmo que `minhavariável`. Se você tiver problemas em seu código, verifique o caso!

Depois de declarar uma variável, você pode atribuir um valor a ela:

```js
myVariable = "Bob";
```

Além disso, você pode fazer essas duas operações na mesma linha:

```js
let myVariable = "Bob";
```

Você recupera o valor chamando o nome da variável:

```js
myVariable;
```

Depois de atribuir um valor a uma variável, você pode alterá-lo posteriormente no código:

```js
let myVariable = "Bob";
myVariable = "Steve";
```

Observe que as variáveis podem conter valores que têm diferentes [tipos de dados](/pt-BR/docs/Web/JavaScript/Guide/Data_structures):

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Variável</th>
      <th scope="col">Explicação</th>
      <th scope="col">Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{Glossary("String")}}</th>
      <td>
        Esta é uma sequência de texto conhecida como string. Para significar que o valor
        for uma string, coloque-a entre aspas simples.
      </td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number")}}</th>
      <td>Isto é um número. Os números não têm aspas.</td>
      <td><code>deixe minhaVariável = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean")}}</th>
      <td>
        Este é um valor Verdadeiro/Falso. As palavras <code>true</code> e
        <code>false</code> são palavras-chave especiais que não precisam de aspas.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array")}}</th>
      <td>
        Esta é uma estrutura que permite armazenar vários valores em um único
        referência.
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />Refere-se a cada
        membro do array assim:<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, etc.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object")}}</th>
      <td>
        Isso pode ser qualquer coisa. Tudo em JavaScript é um objeto e pode ser
        armazenados em uma variável. Tenha isso em mente enquanto aprende.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />Todos
        os exemplos acima também.
      </td>
    </tr>
  </tbody>
</table>

Então, por que precisamos de variáveis? As variáveis são necessárias para fazer qualquer coisa interessante na programação. Se os valores não pudessem ser alterados, você não poderia fazer nada dinâmico, como personalizar uma mensagem de saudação ou alterar uma imagem exibida em uma galeria de imagens.

### Comentários

Comentários são trechos de texto que podem ser adicionados junto com o código. O navegador ignora o texto marcado como comentários. Você pode escrever comentários em JavaScript da mesma forma que em CSS:

```js
/*
Tudo no meio é um comentário.
*/
```

Se o seu comentário não contém quebras de linha, é uma opção colocá-lo atrás de duas barras como esta:

```js
// Isso é um comentário
```

### Operadores

Um `{{Glossary("operator")}}` é um símbolo matemático que produz um resultado baseado em dois valores (ou variáveis). Na tabela a seguir, você pode ver alguns dos operadores mais simples, juntamente com alguns exemplos para experimentar no console JavaScript.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Operador</th>
      <th scope="col">Explicação</th>
      <th scope="col">Símbolo(s)</th>
      <th scope="col">Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Adição</th>
      <td>Adicione dois números ou combine duas strings.</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Olá ' + 'mundo!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Subtração, Multiplicação, Divisão</th>
      <td>Eles fazem o que você espera que façam em matemática básica.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code>9 - 3;<br />8 * 2; // multiplicar em JS é um asterisco<br />9 / 3;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Atribuição</th>
      <td>Como você já viu: isso atribui um valor a uma variável.</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Igualdade estrita</th>
      <td>
        Isso executa um teste para ver se dois valores são iguais. Ele retorna um
        Resultado <code>true</code>/<code>false</code> (booleano).
      </td>
      <td><code>===</code></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Não, não é igual</th>
      <td>
        Isso retorna o valor logicamente oposto do que precede. Acontece
        um <code>true</code> em um <code>false</code>, etc. Quando é usado
        ao lado do operador de igualdade, o operador de negação testa se dois
        os valores <em>não</em> são iguais.
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          Para "Not", a expressão básica é <code>true</code>, mas o
          a comparação retorna <code>false</code> porque nós a negamos:
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          "Não é igual" dá basicamente o mesmo resultado com diferentes
          sintaxe. Aqui estamos testando "é <code>myVariable</code> NÃO igual a
          3". Isso retorna <code> false</code> porque <code>myVariable</code> É
          igual a 3:
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Existem muito mais operadores para explorar, mas isso é o suficiente por enquanto. Consulte [Expressões e operadores](/pt-BR/docs/Web/JavaScript/Reference/Operators) para obter uma lista completa.

> [!NOTE]
> misturar tipos de dados pode levar a alguns resultados estranhos ao realizar cálculos. Tenha cuidado para se referir às suas variáveis corretamente e obter os resultados esperados. Por exemplo, digite `'35' + '25'` em seu console. Por que você não consegue o resultado que esperava? Como as aspas transformam os números em strings, você acabou concatenando strings em vez de adicionar números. Se você inserir `35 + 25`, obterá o total dos dois números.

### Condicionais

Condicionais são estruturas de código usadas para testar se uma expressão retorna verdadeira ou não. Uma forma muito comum de condicionais é a instrução `if...else`. Por exemplo:

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Sim, eu amo sorvete de chocolate!");
} else {
  alert("Aaaah, mas chocolate é o meu favorito…");
}
```

A expressão dentro do `if ()` é o teste. Isso usa o operador de igualdade estrita (conforme descrito acima) para comparar a variável `iceCream` com a string `chocolate` para ver se as duas são iguais. Se esta comparação retornar `true`, o primeiro bloco de código será executado. Se a comparação não for verdadeira, o segundo bloco de código — após a instrução `else` — será executado.

### Funções

{{Glossary("Function", "Functions")}} são uma forma de empacotar a funcionalidade que você deseja reutilizar. É possível definir um corpo de código como uma função que é executada quando você chama o nome da função em seu código. Esta é uma boa alternativa para escrever repetidamente o mesmo código. Você já viu alguns usos de funções. Por exemplo:

```js
let myVariable = document.querySelector("h1");
```

```js
alert("olá!");
```

Essas funções, `document.querySelector` e `alert`, são incorporadas ao navegador.

Se você ver algo que se parece com um nome de variável, mas é seguido por parênteses— `()` —provavelmente é uma função. As funções geralmente usam {{Glossary("Argument", "arguments")}}: bits de dados de que precisam para realizar seu trabalho. Os argumentos ficam dentro dos parênteses, separados por vírgulas se houver mais de um argumento.

Por exemplo, a função `alert()` faz com que uma caixa pop-up apareça dentro da janela do navegador, mas precisamos dar a ela uma string como argumento para informar à função qual mensagem exibir.

Você também pode definir suas próprias funções. No próximo exemplo, criamos uma função simples que recebe dois números como argumentos e os multiplica:

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Tente executar isso no console; então teste com vários argumentos. Por exemplo:

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> [!NOTE]
> A instrução [`return`](/pt-BR/docs/Web/JavaScript/Reference/Statements/return) diz ao navegador para retornar a variável `result` da função para que ela esteja disponível usar. Isso é necessário porque as variáveis definidas dentro das funções só estão disponíveis dentro dessas funções. Isso é chamado de variável {{Glossary("Scope", "scoping")}}. (Leia mais sobre [escopo de variável](/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope).)

### Eventos

A interatividade real em um site requer manipuladores de eventos. Essas são estruturas de código que detectam atividades no navegador e executam o código em resposta. O exemplo mais óbvio é lidar com o [evento de click](/pt-BR/docs/Web/API/Element/click_event), que é acionado pelo navegador quando você clica em algo com o mouse. Para demonstrar isso, digite o seguinte em seu console e clique na página da Web atual:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ai! Pare de me cutucar!");
});
```

Existem várias maneiras de anexar um manipulador de eventos a um elemento.
Aqui selecionamos o elemento {{htmlelement("html")}}. Em seguida, chamamos sua função [`addEventListener()`](/pt-BR/docs/Web/API/EventTarget/addEventListener), passando o nome do evento para ouvir (`'click'`) e uma função para executar quando o evento acontecer.

A função que acabamos de passar para `addEventListener()` aqui é chamada de _função anônima_, porque não tem um nome. Existe uma maneira alternativa de escrever funções anônimas, que chamamos de _função de seta_.
Uma função de seta usa `() =>` em vez de `function ()`:

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ai! Pare de me cutucar!");
});
```

## Melhorando nosso site de exemplo

Com esta revisão dos fundamentos do JavaScript concluída (acima), vamos adicionar alguns novos recursos ao nosso site de exemplo.

Antes de prosseguir, exclua o conteúdo atual do seu arquivo `main.js` — a parte que você adicionou anteriormente durante o "Hello world!" exemplo — e salve o arquivo vazio. Caso contrário, o código existente entrará em conflito com o novo código que você está prestes a adicionar.

### Adicionando um trocador de imagens

Nesta seção, você aprenderá como usar os recursos JavaScript e DOM API para alternar a exibição de uma das duas imagens. Essa alteração ocorrerá quando o usuário clicar na imagem exibida.

1. Escolha uma imagem que deseja apresentar em seu site de exemplo. Idealmente, a imagem terá o mesmo tamanho da imagem que você adicionou anteriormente ou o mais próximo possível.
2. Salve esta imagem em sua pasta `images`.
3. Renomeie a imagem _firefox2.png_.
4. Adicione o seguinte código JavaScript ao seu arquivo `main.js`.

   ```js
   const myImage = document.querySelector("img");

   myImage.onclick = () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   };
   ```

5. Salve todos os arquivos e carregue `index.html` no navegador. Agora, quando você clicar na imagem, ela deve mudar para a outra.

Isso é o que aconteceu. Você armazenou uma referência ao seu elemento {{htmlelement("img")}} na variável `myImage`. Em seguida, você tornou a propriedade do manipulador de eventos `onclick` desta variável igual a uma função sem nome (uma função "anônima"). Portanto, toda vez que esse elemento for clicado:

1. O código recupera o valor do atributo `src` da imagem.
2. O código usa uma condicional para verificar se o valor `src` é igual ao caminho da imagem original:
   1. Se for, o código altera o valor `src` para o caminho da segunda imagem, forçando a outra imagem a ser carregada dentro do elemento {{htmlelement("img")}}.
   2. Se não for (o que significa que já deve ter mudado), o valor `src` volta para o caminho da imagem original, para o estado original.

### Adicionando uma mensagem de boas-vindas personalizada

Em seguida, vamos alterar o título da página para uma mensagem de boas-vindas personalizada quando o usuário visitar o site pela primeira vez. Esta mensagem de boas-vindas persistirá. Caso o usuário saia do site e retorne posteriormente, salvaremos a mensagem usando a [Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API). Também incluiremos uma opção para alterar o usuário e, portanto, a mensagem de boas-vindas.

1. Em `index.html`, adicione a seguinte linha antes do elemento {{htmlelement("script")}}:

   ```html
   <button>Alterar usuário</button>
   ```

2. Em `main.js`, coloque o seguinte código no final do arquivo, exatamente como está escrito. Isso leva referências ao novo botão e ao cabeçalho, armazenando cada uma das variáveis internas:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Adicione a seguinte função para definir a saudação personalizada. Isso não vai fazer nada ainda, mas thisso vai mudar em breve.

   ```js
   function setUserName() {
     const myName = prompt("Por favor, digite o seu nome");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla é legal, ${myName}`;
   }
   ```

   A função `setUserName()` contém uma função [`prompt()`](/pt-BR/docs/Web/API/Window/prompt), que exibe uma caixa de diálogo, semelhante a `alert()`. Esta função `prompt()` faz mais do que `alert()`, solicitando ao usuário que insira dados e armazenando-os em uma variável após o usuário clicar em _OK._ Neste caso, estamos solicitando que o usuário insira um nome. Em seguida, o código chama uma API `localStorage`, que nos permite armazenar dados no navegador e recuperá-los posteriormente. Usamos a função `setItem()` do localStorage para criar e armazenar um item de dados chamado `'name'`, configurando seu valor para a variável `myName` que contém a entrada do usuário para o nome. Por fim, definimos o `textContent` do cabeçalho como uma string, mais o nome do usuário recém-armazenado.

4. Adicione o seguinte bloco de condição. Poderíamos chamar isso de código de inicialização, pois ele estrutura o aplicativo quando ele é carregado pela primeira vez.

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla é legal, ${storedName}`;
   }
   ```

   Esta primeira linha deste bloco utiliza o operador de negação (NOT lógico, representado pelo `!`) para verificar se os dados `nome` existem. Caso contrário, a função `setUserName()` é executada para criá-lo. Se existir (ou seja, o usuário definiu um nome de usuário durante uma visita anterior), recuperamos o nome armazenado usando `getItem()` e definimos o `textContent` do cabeçalho como uma string, mais o nome do usuário, conforme fez dentro de `setUserName()`.

5. Coloque este manipulador de evento `onclick` (abaixo) no botão. Quando clicado, `setUserName()` é executado. Isso permite que o usuário insira um nome diferente pressionando o botão.

   ```js
   myButton.onclick = () => {
     setUserName();
   };
   ```

### Um nome de usuário nulo?

Ao executar o exemplo e obter a caixa de diálogo que solicita que você insira seu nome de usuário, tente pressionar o botão _Cancelar_. Você deve terminar com um título que diz _Mozilla é legal, null_. Isso acontece porque, quando você cancela o prompt, o valor é definido como [`null`](/pt-BR/docs/Web/JavaScript/Reference/Operators/null). _Null_ é um valor especial em JavaScript que se refere à ausência de um valor.

Além disso, tente clicar em _OK_ sem inserir um nome. Você deve terminar com um título que diga _Mozilla é legal,_ por razões bastante óbvias.

Para evitar esses problemas, você pode verificar se o usuário não digitou um nome em branco. Atualize sua função `setUserName()` para isto:

```js
function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
}
```

Em linguagem humana, isso significa: Se `myName` não tiver valor, execute `setUserName()` novamente desde o início. Se ele tiver um valor (se a declaração acima não for verdadeira), armazene o valor em `localStorage` e defina-o como o texto do título.

## Conclusão

Se você seguiu todas as instruções deste artigo, deve terminar com uma página parecida com a imagem abaixo. Você também pode [ver nossa versão](https://mdn.github.io/beginner-html-site-scripted/).

![Aparência final da página HTML após a criação dos elementos: um cabeçalho, um grande logotipo centralizado, conteúdo e um botão](website-screen-scripted.png)

Se você ficar preso, pode comparar seu trabalho com nosso [código de exemplo finalizado no GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js) .

Acabamos de arranhar a superfície do JavaScript. Se você gostou de jogar e deseja ir além, aproveite os recursos listados abaixo.

## Veja também

- [Scripting dinâmico do lado do cliente com JavaScript](/pt-BR/docs/conflicting/Learn_web_development/Core/Scripting_785964b4c0711553d2bf3130baef052c6d78a03b4ce249eeb9d1ce2be1e3c308)
  - : Mergulhe no JavaScript com muito mais detalhes.
- [Aprenda JavaScript](https://learnjavascript.online/)
  - : Este é um excelente recurso para aspirantes a desenvolvedores da web! Aprenda JavaScript em um ambiente interativo, com aulas curtas e testes interativos, guiados por uma avaliação automatizada. As primeiras 40 aulas são gratuitas. O curso completo está disponível por um pequeno pagamento único.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
