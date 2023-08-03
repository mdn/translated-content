---
title: Introdução a eventos
slug: Learn/JavaScript/Building_blocks/Events
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado. Por exemplo, se o usuário clica em um botão numa pagina web, você pode querer responder a esta ação mostrando na tela uma caixa de informações. Nesse artigo, nós iremos discutir sobre alguns conceitos importantes envolvendo eventos, e veremos como eles funcionam nos browsers. Isto não será algo cansativo para estudar; somente o que você precisar saber até agora.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos em informática, conhecimento básico em HTML e CSS,
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps"
          >JavaScript, primeiros passos</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender a teoria fundamentos dos eventos, como eles funcionam nos
        browsers, e como eventos podem ser diferentes dependendo do ambiente de
        desenvolvimento.
      </td>
    </tr>
  </tbody>
</table>

## Aventuras em Série

Como mencionado acima, **eventos** são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo — o sistema irá disparar algum tipo de sinal quando o evento acontecer, além de prover um mecanismo pelo qual alguma ação automática possa ser executada (ou seja, rodar algum código) quando o evento ocorrer. Por exemplo, em um aeroporto, quando a pista está livre para um avião decolar, um sinal é repassado ao piloto, e como resultado, ele inicia a decolagem.

![](mdn-mozilla-events-runway.png)

No caso da web, eventos são disparados dentro da janela do navegador, e tende a estarem anexados a algum item especifico nele — pode ser um único elemento, um conjunto de elementos, o HTML carregado na guia atual, ou toda a janela do navegador. Existem vários tipos diferentes de eventos que podem vir a acontecer, por exemplo:

- O usuário clicando com o mouse sobre um certo elemento ou passando o cursor do mouse sobre um certo elemento.
- O usuário pressionando uma tecla do teclado.
- O usuário redimensionando ou fechando a janela do navegador.
- Uma pagina da web terminando de carregar.
- Um formulário sendo enviado.
- Um video sendo reproduzido, interrompido, ou terminando sua reprodução.
- Um erro ocorrendo.

Você vai perceber com isso (e dando uma olhada no [Event reference](/pt-BR/docs/Web/Events) MDN) que **há uma** série de eventos que podem ser utilizados.

Cada evento disponivel possui um **manipulador de eventos** (event handler), que é um bloco de código (geralmente uma função JavaScript definida pelo usuário) que será executado quando o evento for disparado. Quando esse bloco de código é definido para rodar em resposta a um evento que foi disparado, nós dizemos que estamos **registrando um manipulador de eventos**. Note que manipuladores de eventos são, em alguns casos, chamados de **ouvinte de eventos** (event listeners) — eles são praticamente intercambiáveis para nossos propósitos, embora estritamente falando, eles trabalhem juntos. Os ouvintes escutam o evento acontecendo, e o manipulador é o codigo que roda em resposta a este acontecimento.

> **Nota:** É importante notar que eventos web não são parte do core da linguagem JavaScript — elas são definidas como parte das APIs JavaScript incorporadas ao navegador.

### Um exemplo simples

Vamos dar uma olhada em um simples exemplo para explicar o que nós queremos dizer aqui. Você já viu eventos e manipuladores de eventos sendo utilizados na maioria dos exemplos deste curso até agora, mas vamos recapitular somente para cimentar nosso conhecimento. No exemplo a seguir, nós temos um simples {{htmlelement("button")}} que quando pressionado, irá fazer com que o fundo mude para uma cor aleatória:

```html
<button>Change color</button>
```

```css hidden
button {
  margin: 10px;
}
```

O JavaScript seria algo como:

```js
var btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
```

Nesse código, nós guardamos uma referência ao botão dentro de uma variável chamada `btn`, usando a função {{domxref("Document.querySelector()")}}. Também definimos uma função que retorna um número aleatório. A terceira parte do código é o manipulador de eventos. A variável `btn` aponta para um elemento `<button>`, e esse tipo de objeto tem um número de eventos que podem ser disparados nele, assim sendo, manipuladores de eventos estão disponíveis.

Esse código rodará sempre que o evento de clique for disparado pelo elemento `<button>`, isto é, sempre que um usuário clicar nele.

Um exemplo de saída seria:

{{ EmbedLiveSample('A_simple_example', '100%', 200, "", "", "hide-codepen-jsfiddle") }}

### Não são apenas paginas da web

Outra coisa que vale mencionar a esse ponto é que eventos não são exclusivos ao JavaScript — muitas linguagens de programação possuem algum tipo de modelo de evento, e a maneira que elas funcionam irão, frequentemente, diferenciar-se da maneira que funciona em JavaScript. De fato, o modelo de evento no JavaScript para web pages difere dos outros modelos de evento do próprio JavaScript quando usados em outros ambientes.

Por exemplo, [Node.js](/pt-BR/docs/Learn/Server-side/Express_Nodejs) é um interpretador de código JavaScript muito popular que permite desenvolvedores a usarem JavaScript para construir aplicações de rede e do lado do servidor. O [Node.js event model](https://nodejs.org/docs/latest-v5.x/api/events.html) depende dos ouvintes para escutar eventos e emissores para emitir eventos periodicamente. — não parece tão diferente, mas o código é bem diferente, fazendo uso de funções como `on()` para registrar um ouvinte de evento e `once()` para registrar um ouvinte de evento que cancela o registro depois de ter sido executado uma vez. Os [Documentos do evento de conexão HTTP](https://nodejs.org/docs/latest-v8.x/api/http.html#http_event_connect) fornecem um bom exemplo de uso.

Como outro exemplo, agora você também pode usar o JavaScript para criar complementos entre navegadores — aprimoramentos da funcionalidade do navegador — usando uma tecnologia chamada [WebExtensions](/pt-BR/docs/Mozilla/Add-ons/WebExtensions). O modelo de eventos é semelhante ao modelo de eventos da Web, mas um pouco diferente — as propriedades dos event listeners são camel-cased, onde cada palavra é iniciada com maiúsculas e unidas sem espaços (por exemplo, `onMessage` em vez de `onmessage`), e precisam ser combinadas com a função `addListener`. Veja a página [runtime.onMessage](/en-US/Add-ons/WebExtensions/API/runtime/onMessage#Examples) para um exemplo.

Você não precisa entender nada sobre outros ambientes nesse estágio do aprendizado; nós só queríamos deixar claro que os eventos podem diferir em diferentes ambientes de programação.

## Formas de usar eventos da web

Há várias maneiras diferentes de adicionar código de ouvinte de evento a páginas da Web para que ele seja executado quando o evento associado for disparado. Nesta seção, revisaremos os diferentes mecanismos e discutiremos quais devem ser usados.

### Propriedades do manipulador de eventos

Essas são as propriedades que existem para conter o código do manipulador de eventos que vimos com mais frequência durante o curso. Voltando ao exemplo acima:

```js
var btn = document.querySelector("button");

btn.onclick = function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};
```

A propriedade [`onclick`](/pt-BR/docs/Web/API/GlobalEventHandlers/onclick) é a propriedade do manipulador de eventos que está sendo usada nesta situação. É essencialmente uma propriedade como qualquer outra disponível no botão (por exemplo, [`btn.textContent`](/pt-BR/docs/Web/API/Node/textContent), ou [`btn.style`](/pt-BR/docs/Web/API/HTMLElement/style)), mas é um tipo especial — quando você configura para ser igual a algum código, esse código será executado quando o evento é acionado no botão.

Você também pode definir a propriedade handler para ser igual a um nome de função nomeado (como vimos em [Construa sua própria função](/pt-BR/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)). O seguinte funcionaria da mesma forma:

```js
var btn = document.querySelector("button");

function bgChange() {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

Há muitas propriedades diferentes de manipulador de eventos disponíveis. Vamos fazer um experimento.

Primeiro de tudo, faça uma cópia local do [random-color-eventhandlerproperty.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerproperty.html), e abra-o no seu navegador. É apenas uma cópia do exemplo de cor aleatória simples com o qual já estamos jogando neste artigo. Agora tente alterar `btn.onclick` para os seguintes valores diferentes, por sua vez, e observando os resultados no exemplo:

- [`btn.onfocus`](/pt-BR/docs/Web/API/GlobalEventHandlers/onfocus) e [`btn.onblur`](/pt-BR/docs/Web/API/GlobalEventHandlers/onblur) — A cor mudará quando o botão estiver focado e fora de foco (tente pressionar a guia para aba no botão e desligar novamente). Eles geralmente são usados para exibir informações sobre como preencher campos de formulário quando eles estão focalizados ou exibir uma mensagem de erro se um campo de formulário tiver acabado de ser preenchido com um valor incorreto.
- [`btn.ondblclick`](/pt-BR/docs/Web/API/GlobalEventHandlers/ondblclick) — A cor só será alterada quando for clicada duas vezes.
- [`window.onkeypress`](/pt-BR/docs/Web/API/GlobalEventHandlers/onkeypress), [`window.onkeydown`](/pt-BR/docs/Web/API/GlobalEventHandlers/onkeydown), [`window.onkeyup`](/pt-BR/docs/Web/API/GlobalEventHandlers/onkeyup) — A cor mudará quando uma tecla for pressionada no teclado. `keypress` refere-se a um pressionamento geral (botão para baixo e depois para cima), enquanto `keydown` e `keyup` refere-se apenas a parte do pressionamento da tecla para baixo e de soltar a tecla para cima, respectivamente. Note que não funciona se você tentar registrar este manipulador de eventos no próprio botão — nós tivemos que registrá-lo no objeto [window](/pt-BR/docs/Web/API/Window), que representa toda a janela do navegador.
- [`btn.onmouseover`](/pt-BR/docs/Web/API/GlobalEventHandlers/onmouseover) e [`btn.onmouseout`](/pt-BR/docs/Web/API/GlobalEventHandlers/onmouseout) — A cor mudará quando o ponteiro do mouse for movido, de modo que comece a passar o mouse sobre o botão, ou quando parar de passar o mouse sobre o botão e sair dele, respectivamente.

Alguns eventos são muito gerais e estão disponíveis praticamente em qualquer lugar (por exemplo, um manipulador `onclick` pode ser registrado em quase qualquer elemento), enquanto alguns são mais específicos e úteis apenas em certas situações (por exemplo, faz sentido usar [onplay](/pt-BR/docs/Web/API/GlobalEventHandlers/GlobalEventHandlers.onplay) apenas em elementos específicos, como {{htmlelement("video")}}).

### Manipuladores de eventos in-line - não use esses

Você também pode ver um padrão como este em seu código:

```html
<button onclick="bgChange()">Press me</button>
```

```js
function bgChange() {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}
```

> **Nota:** Você pode encontrar o [código fonte completo](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventhandlerattributes.html) para este exemplo no GitHub (também [veja isso executando em tempo real](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventhandlerattributes.html)).

O método mais antigo de registrar manipuladores de eventos encontrados na Web envolveu **atributos HTML de manipulador de eventos** (também conhecidos como **manipuladores de eventos inline**) como o mostrado acima — o valor do atributo é literalmente o código JavaScript que você deseja executar quando o evento ocorre. O exemplo acima chama uma função definida dentro de um elemento {{htmlelement("script")}} na mesma página, mas você também pode inserir JavaScript diretamente dentro do atributo, por exemplo:

```html
<button onclick="alert('Hello, this is my old-fashioned event handler!');">
  Press me
</button>
```

Você encontrará equivalentes de atributo HTML para muitas das propriedades do manipulador de eventos; no entanto, você não deve usá-los — eles são considerados uma prática ruim. Pode parecer fácil usar um atributo manipulador de eventos se você estiver apenas fazendo algo realmente rápido, mas eles se tornam rapidamente incontroláveis e ineficientes.

Para começar, não é uma boa ideia misturar o seu HTML e o seu JavaScript, pois é difícil analisar — manter seu JavaScript em um só lugar é melhor; se estiver em um arquivo separado, você poderá aplicá-lo a vários documentos HTML.

Mesmo em um único arquivo, os manipuladores de eventos in-line não são uma boa ideia. Um botão está OK, mas e se você tivesse 100 botões? Você teria que adicionar 100 atributos ao arquivo; isso rapidamente se tornaria um pesadelo de manutenção. Com JavaScript, você poderia facilmente adicionar uma função de manipulador de eventos a todos os botões da página, não importando quantos fossem, usando algo assim:

```js
var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}
```

> **Nota:** Separar sua lógica de programação do seu conteúdo também torna seu site mais amigável aos mecanismos de pesquisa.

### addEventListener() e removeEventListener()

O mais novo tipo de mecanismo de evento é definido na Especificação de Eventos Nível 2 do [Document Object Model (DOM)](https://www.w3.org/TR/DOM-Level-2-Events/), que fornece aos navegadores uma nova função — [`addEventListener()`](/pt-BR/docs/Web/API/EventTarget/addEventListener). Isso funciona de maneira semelhante às propriedades do manipulador de eventos, mas a sintaxe é obviamente diferente. Poderíamos reescrever nosso exemplo de cor aleatória para ficar assim:

```js
var btn = document.querySelector("button");

function bgChange() {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", bgChange);
```

> **Nota:** Você pode encontrar o [código fonte completo](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-addeventlistener.html) para este exemplo no GitHub (também [veja isso executando em tempo real](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-addeventlistener.html)).

Dentro da função `addEventListener()`, especificamos dois parâmetros — o nome do evento para o qual queremos registrar esse manipulador, e o código que compreende a função do manipulador que queremos executar em resposta a ele. Note que é perfeitamente apropriado colocar todo o código dentro da função `addEventListener()`, em uma função anônima, assim:

```js
btn.addEventListener("click", function () {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
});
```

Esse mecanismo tem algumas vantagens sobre os mecanismos mais antigos discutidos anteriormente. Para começar, há uma função de contraparte, [`removeEventListener()`](/pt-BR/docs/Web/API/EventTarget/removeEventListener), que remove um listener adicionado anteriormente. Por exemplo, isso removeria o listener definido no primeiro bloco de código nesta seção:

```js
btn.removeEventListener("click", bgChange);
```

Isso não é significativo para programas pequenos e simples, mas para programas maiores e mais complexos, pode melhorar a eficiência para limpar antigos manipuladores de eventos não utilizados. Além disso, por exemplo, isso permite que você tenha o mesmo botão executando ações diferentes em circunstâncias diferentes — tudo o que você precisa fazer é adicionar / remover manipuladores de eventos conforme apropriado.

Em segundo lugar, você também pode registrar vários manipuladores para o mesmo ouvinte. Os dois manipuladores a seguir não seriam aplicados:

```js
myElement.onclick = functionA;
myElement.onclick = functionB;
```

Como a segunda linha sobrescreveria o valor de `onclick` definido pelo primeiro. Isso funcionaria, no entanto:

```js
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Ambas as funções serão executadas quando o elemento for clicado.

Além disso, há vários outros recursos e opções poderosos disponíveis com esse mecanismo de eventos. Estes são um pouco fora do escopo deste artigo, mas se você quiser ler sobre eles, dê uma olhada nas páginas de referência [`addEventListener()`](/pt-BR/docs/Web/API/EventTarget/addEventListener) e [`removeEventListener()`](/pt-BR/docs/Web/API/EventTarget/removeEventListener).

### Qual mecanismo devo usar?

Dos três mecanismos, você definitivamente não deve usar os atributos do manipulador de eventos HTML — estas são desatualizadas e más práticas, como mencionado acima.

Os outros dois são relativamente intercambiáveis, pelo menos para usos simples:

- As propriedades do manipulador de eventos têm menos poder e opções, mas melhor compatibilidade entre navegadores (sendo suportado desde o Internet Explorer 8). Você provavelmente deve começar com estes como você está aprendendo.
- Eventos DOM Nível 2 (`addEventListener()`, etc.) são mais poderosos, mas também podem se tornar mais complexos e menos bem suportados (suportados desde o Internet Explorer 9). Você também deve experimentá-los e tentar usá-los sempre que possível.

As principais vantagens do terceiro mecanismo são que você pode remover o código do manipulador de eventos, se necessário, usando `removeEventListener()`, e você pode adicionar vários listeners do mesmo tipo aos elementos, se necessário. Por exemplo, você pode chamar `addEventListener('click', function() { ... })` em um elemento várias vezes, com diferentes funções especificadas no segundo argumento. Isso é impossível com as propriedades do manipulador de eventos porque qualquer tentativa subseqüente de definir uma propriedade sobrescreverá as anteriores, por exemplo:

```js
element.onclick = function1;
element.onclick = function2;
etc.
```

> **Nota:** Se você for chamado para oferecer suporte a navegadores anteriores ao Internet Explorer 8 em seu trabalho, poderá encontrar dificuldades, pois esses navegadores antigos usam modelos de eventos diferentes dos navegadores mais recentes. Mas não tenha medo, a maioria das bibliotecas JavaScript (por exemplo, `jQuery`) tem funções internas que abstraem as diferenças entre navegadores. Não se preocupe muito com isso neste estágio de sua jornada de aprendizado.

## Outros conceitos de evento

Nesta seção, abordaremos brevemente alguns conceitos avançados que são relevantes para os eventos. Não é importante entendê-las totalmente neste momento, mas pode servir para explicar alguns padrões de código que você provavelmente encontrará ao longo do tempo.

### Objetos de evento

Às vezes, dentro de uma função de manipulador de eventos, você pode ver um parâmetro especificado com um nome como `event`, `evt`, ou simplesmente `e`. Isso é chamado de **event object**, e é passado automaticamente para os manipuladores de eventos para fornecer recursos e informações extras. Por exemplo, vamos reescrever nosso exemplo de cor aleatória novamente:

```js
function bgChange(e) {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
```

> **Nota:** Você pode encontrar o [código fonte completo](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/random-color-eventobject.html) para este exemplo no GitHub (também [veja isso executando em tempo real](http://mdn.github.io/learning-area/javascript/building-blocks/events/random-color-eventobject.html)).

Aqui você pode ver que estamos incluindo um objeto de evento, **e**, na função, e na função definindo um estilo de cor de fundo em `e.target` — que é o próprio botão. A propriedade `target` do objeto de evento é sempre uma referência ao elemento em que o evento acabou de ocorrer. Portanto, neste exemplo, estamos definindo uma cor de fundo aleatória no botão, não na página.

> **Nota:** Você pode usar qualquer nome que desejar para o objeto de evento — você só precisa escolher um nome que possa ser usado para referenciá-lo dentro da função de manipulador de eventos. `e`/`evt`/`event` são mais comumente usados pelos desenvolvedores porque são curtos e fáceis de lembrar. É sempre bom manter um padrão.

`e.target` é incrivelmente útil quando você deseja definir o mesmo manipulador de eventos em vários elementos e fazer algo com todos eles quando ocorre um evento neles. Você pode, por exemplo, ter um conjunto de 16 blocos que desaparecem quando são clicados. É útil poder sempre apenas definir a coisa para desaparecer como `e.target`, ao invés de ter que selecioná-lo de alguma forma mais difícil. No exemplo a seguir (veja [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/useful-eventtarget.html) para o código-fonte completo; veja também a [execução ao vivo](http://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) aqui), criamos 16 elementos {{htmlelement("div")}} usando JavaScript. Em seguida, selecionamos todos eles usando {{domxref("document.querySelectorAll()")}} e, em seguida, percorremos cada um deles, adicionando um manipulador onclick a cada um, de modo que uma cor aleatória seja aplicada a cada um deles quando clicados:

```js
var divs = document.querySelectorAll("div");

for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function (e) {
    e.target.style.backgroundColor = bgChange();
  };
}
```

A saída é a seguinte (tente clicar em cima — divirta-se):

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Useful event target example</title>
    <style>
      div {
        background-color: red;
        height: 100px;
        width: 25%;
        float: left;
      }
    </style>
  </head>
  <body>
    <script>
      for (var i = 1; i <= 16; i++) {
        var myDiv = document.createElement("div");
        document.body.appendChild(myDiv);
      }

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function bgChange() {
        var rndCol =
          "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
        return rndCol;
      }

      var divs = document.querySelectorAll("div");

      for (var i = 0; i < divs.length; i++) {
        divs[i].onclick = function (e) {
          e.target.style.backgroundColor = bgChange();
        };
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_example', '100%', 400, "", "", "hide-codepen-jsfiddle") }}

A maioria dos manipuladores de eventos que você encontrará apenas tem um conjunto padrão de propriedades e funções (métodos) disponíveis no objeto de evento (consulte a referência de objeto {{domxref("Event")}} para obter uma lista completa). Alguns manipuladores mais avançados, no entanto, adicionam propriedades especializadas contendo dados extras que precisam para funcionar. A [Media Recorder API](/pt-BR/docs/Web/API/MediaRecorder_API), por exemplo, tem um evento `dataavailable` que é acionado quando algum áudio ou vídeo é gravado e está disponível para fazer algo com (por exemplo, salvá-lo ou reproduzi-lo). O objeto de evento do manipulador correspondente [ondataavailable](/pt-BR/docs/Web/API/MediaRecorder/ondataavailable) tem uma propriedade de dados disponível contendo os dados de áudio ou vídeo gravados para permitir que você acesse e faça algo com ele.

### Evitando o comportamento padrão

Às vezes, você se deparará com uma situação em que deseja interromper um evento fazendo o que ele faz por padrão. O exemplo mais comum é o de um formulário da Web, por exemplo, um formulário de registro personalizado. Quando você preenche os detalhes e pressiona o botão Enviar, o comportamento natural é que os dados sejam enviados para uma página específica no servidor para processamento, e o navegador seja redirecionado para uma página de "mensagem de sucesso" de algum tipo (ou a mesma página, se outra não for especificada.)

O problema surge quando o usuário não submete os dados corretamente - como desenvolvedor, você deve interromper o envio para o servidor e fornecer uma mensagem de erro informando o que está errado e o que precisa ser feito para corrigir as coisas. Alguns navegadores suportam recursos automáticos de validação de dados de formulário, mas como muitos não oferecem isso, é recomendável não depender deles e implementar suas próprias verificações de validação. Vamos dar uma olhada em um exemplo simples.

Primeiro, um formulário HTML simples que requer que você digite seu primeiro e último nome:

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Agora algum JavaScript — aqui nós implementamos uma verificação muito simples dentro de um manipulador de evento onsubmit (o evento submit é disparado em um formulário quando é enviado) que testa se os campos de texto estão vazios. Se estiverem, chamamos a função [`preventDefault()`](/pt-BR/docs/Web/API/Event/preventDefault) no objeto de evento — que interrompe o envio do formulário — e, em seguida, exibir uma mensagem de erro no parágrafo abaixo do nosso formulário para informar ao usuário o que está errado:

```js
var form = document.querySelector("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var submit = document.getElementById("submit");
var para = document.querySelector("p");

form.onsubmit = function (e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
};
```

Obviamente, isso é uma validação de forma bastante fraca — ela não impediria o usuário de validar o formulário com espaços ou números inseridos nos campos, por exemplo — mas está tudo bem, por exemplo. A saída é a seguinte:

{{ EmbedLiveSample('Preventing_default_behavior', '100%', 140, "", "", "hide-codepen-jsfiddle") }}

> **Nota:** para o código fonte completo, veja [preventdefault-validation.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/preventdefault-validation.html) (também veja isso [executando em tempo real](http://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html) aqui.)

### Borbulhamento e captura de eventos

O assunto final a ser abordado aqui é algo que você não encontrará com frequência, mas pode ser uma dor real se você não entender. Borbulhamento e captura de eventos são dois mecanismos que descrevem o que acontece quando dois manipuladores do mesmo tipo de evento são ativados em um elemento. Vamos dar uma olhada em um exemplo para facilitar isso — abra o exemplo show-video-box.html em uma nova guia (e o [código-fonte](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html) em outra guia). Ele também está disponível ao vivo abaixo:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Show video box example</title>
    <style>
      div {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 480px;
        height: 380px;
        border-radius: 10px;
        background-color: #eee;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.1)
        );
      }

      .hidden {
        left: -50%;
      }

      .showing {
        left: 50%;
      }

      div video {
        display: block;
        width: 400px;
        margin: 40px auto;
      }
    </style>
  </head>
  <body>
    <button>Display video</button>

    <div class="hidden">
      <video>
        <source
          src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.mp4"
          type="video/mp4" />
        <source
          src="https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/events/rabbit320.webm"
          type="video/webm" />
        <p>
          Your browser doesn't support HTML5 video. Here is a
          <a href="rabbit320.mp4">link to the video</a> instead.
        </p>
      </video>
    </div>

    <script>
      var btn = document.querySelector("button");
      var videoBox = document.querySelector("div");
      var video = document.querySelector("video");

      btn.onclick = function () {
        displayVideo();
      };

      function displayVideo() {
        if (videoBox.getAttribute("class") === "hidden") {
          videoBox.setAttribute("class", "showing");
        }
      }

      videoBox.addEventListener("click", function () {
        videoBox.setAttribute("class", "hidden");
      });

      video.addEventListener("click", function () {
        video.play();
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_video_example', '100%', 500, "", "", "hide-codepen-jsfiddle") }}

Este é um exemplo bastante simples que mostra e oculta um {{htmlelement("div")}} com um elemento {{htmlelement("video")}} dentro dele:

```html
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="rabbit320.mp4" type="video/mp4" />
    <source src="rabbit320.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML5 video. Here is a
      <a href="rabbit320.mp4">link to the video</a> instead.
    </p>
  </video>
</div>
```

Quando o {{htmlelement("button")}} é clicado, o vídeo é exibido, alterando o atributo de classe em `<div>` de `hidden` para `showing` (o CSS do exemplo contém essas duas classes, que posicione a caixa fora da tela e na tela, respectivamente):

```js
btn.onclick = function () {
  videoBox.setAttribute("class", "showing");
};
```

Em seguida, adicionamos mais alguns manipuladores de eventos `onclick` — o primeiro ao `<div>` e o segundo ao `<video>`. A ideia é que, quando a área do `<div>` fora do vídeo for clicada, a caixa deve ser ocultada novamente; quando o vídeo em si é clicado, o vídeo deve começar a tocar.

```
videoBox.onclick = function() {
  videoBox.setAttribute('class', 'hidden');
};

video.onclick = function() {
  video.play();
};
```

Mas há um problema — atualmente, quando você clica no vídeo, ele começa a ser reproduzido, mas faz com que o `<div>` também fique oculto ao mesmo tempo. Isso ocorre porque o vídeo está dentro do `<div>` — é parte dele — portanto, clicar no vídeo realmente executa os dois manipuladores de eventos acima.

#### Borbulhando e capturando explicados

Quando um evento é acionado em um elemento que possui elementos pai (por exemplo, o {{htmlelement("video")}} no nosso caso), os navegadores modernos executam duas fases diferentes — a fase de **captura** e a fase de **bubbling**.

Na fase de **captura**:

- O navegador verifica se o ancestral mais externo do elemento ({{htmlelement("html")}}) tem um manipulador de eventos `onclick` registrado nele na fase de captura e o executa em caso afirmativo.
- Em seguida, ele passa para o próximo elemento dentro de `<html>` e faz a mesma coisa, depois o próximo, e assim por diante até alcançar o elemento que foi realmente clicado.

Na fase de **bubbling**, ocorre exatamente o oposto:

- O navegador verifica se o elemento que realmente foi clicado tem um manipulador de eventos `onclick` registrado nele na fase de bubbling e o executa em caso afirmativo.
- Em seguida, ele passa para o próximo elemento ancestral imediato e faz a mesma coisa, depois o próximo, e assim por diante, até alcançar o elemento `<html>`.

[![](bubbling-capturing.png)](bubbling-capturing.png)

(Clique na imagem para um diagrama maior)

Nos navegadores modernos, por padrão, todos os manipuladores de eventos são registrados na fase de bubbling. Portanto, em nosso exemplo atual, quando você clica no vídeo, o evento de clique passa do elemento `<video>` para o elemento `<html>` Pelo caminho:

- Ele encontra o manipulador `video.onclick...` e o executa, então o vídeo começa a ser reproduzido pela primeira vez.
- Em seguida, ele encontra o manipulador `videoBox.onclick...` e o executa, então o vídeo também está oculto.

#### Corrigindo o problema com stopPropagation()

Este é um comportamento irritante, mas existe uma maneira de corrigir isso! O objeto de evento padrão tem uma função disponível chamada [`stopPropagation()`](/pt-BR/docs/Web/API/Event/stopPropagation), que quando invocada no objeto de evento de um manipulador, faz com que o manipulador seja executado, mas o evento não borbulha mais acima na cadeia, portanto, mais nenhum manipulador rodará.

Podemos, portanto, consertar nosso problema atual alterando a segunda função do manipulador no bloco de códigos anterior para isto:

```js
video.onclick = function (e) {
  e.stopPropagation();
  video.play();
};
```

Você pode tentar fazer uma cópia local do código-fonte [show-video-box.html source code](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box.html) e tentar corrigi-lo sozinho, ou observar o resultado corrigido em [show-video-box-fixed.html](http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html) (veja também o [código-fonte](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/events/show-video-box-fixed.html) aqui).

> **Nota:** Por que se preocupar em capturar e borbulhar? Bem, nos velhos tempos em que os navegadores eram muito menos compatíveis entre si do que são agora, o Netscape usava apenas captura de eventos, e o Internet Explorer usava apenas borbulhamento de eventos. Quando o W3C decidiu tentar padronizar o comportamento e chegar a um consenso, eles acabaram com esse sistema que incluía ambos, que é o único navegador moderno implementado.

> **Nota:** Como mencionado acima, por padrão, todos os manipuladores de eventos são registrados na fase de bubbling, e isso faz mais sentido na maioria das vezes. Se você realmente quiser registrar um evento na fase de captura, registre seu manipulador usando [`addEventListener()`](/pt-BR/docs/Web/API/EventTarget/addEventListener), e defina a propriedade terceira opcional como `true`.

#### Delegação de eventos

O borbulhar também nos permite aproveitar a **delegação de eventos** — esse conceito depende do fato de que, se você quiser que algum código seja executado quando clicar em qualquer um de um grande número de elementos filho, você pode definir o ouvinte de evento em seu pai e ter os eventos que acontecem neles confluem com o pai, em vez de precisar definir o ouvinte de evento em cada filho individualmente.

Um bom exemplo é uma série de itens de lista — Se você quiser que cada um deles apareça uma mensagem quando clicado, você pode definir o ouvinte de evento `click` no pai `<ul>`, e ele irá aparecer nos itens da lista.

Este conceito é explicado mais adiante no blog de David Walsh, com vários exemplos — veja [Como funciona a delegação de eventos em JavaScript.](https://davidwalsh.name/event-delegate)

## Conclusão

Agora você deve saber tudo o que precisa saber sobre os eventos da Web nesse estágio inicial. Como mencionado acima, os eventos não são realmente parte do núcleo do JavaScript — eles são definidos nas APIs da Web do navegador.

Além disso, é importante entender que os diferentes contextos nos quais o JavaScript é usado tendem a ter diferentes modelos de evento — de APIs da Web a outras áreas, como WebExtensions de navegador e Node.js (JavaScript do lado do servidor). Não esperamos que você entenda todas essas áreas agora, mas certamente ajuda a entender os fundamentos dos eventos à medida que você avança no aprendizado do desenvolvimento da web.

Se houver algo que você não entendeu, fique à vontade para ler o artigo novamente, ou [entre em contato conosco](/en-US/Learn#Contact_us) para pedir ajuda.

## Veja também

- [Event order](http://www.quirksmode.org/js/events_order.html) (discussion of capturing and bubbling) — an excellently detailed piece by Peter-Paul Koch.
- [Event accessing](http://www.quirksmode.org/js/events_access.html) (discussion of the event object) — another excellently detailed piece by Peter-Paul Koch.
- [Event reference](/pt-BR/docs/Web/Events)

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}
