---
title: Construa sua própria função
slug: Learn/JavaScript/Building_blocks/Build_your_own_function
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}

Com a maior parte da teoria essencial tratada no artigo anterior, este artigo fornece experiência prática. Aqui você terá algumas práticas construindo sua própria função personalizada. Ao longo do caminho, também explicaremos alguns detalhes úteis sobre como lidar com funções.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Alfabetização básica em informática, um entendimento básico de HTML e
        CSS,
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps"
          >Primeiros passos do JavaScript</a
        >,
        <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions"
          >Funções — blocos reutilizáveis de código</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetiva:</th>
      <td>
        Para fornecer alguma prática na criação de uma função personalizada e
        explicar alguns detalhes associados mais úteis.
      </td>
    </tr>
  </tbody>
</table>

## Aprendizagem ativa: vamos construir uma função

A função personalizada que vamos construir será chamada `displayMessage()`. Ele exibirá uma caixa de mensagem personalizada em uma página da Web e atuará como um substituto personalizado para a função de [alert()](/pt-BR/docs/Web/API/Window/alert) interna do navegador. Já vimos isso antes, mas vamos apenas refrescar nossas memórias. Digite o seguinte no console JavaScript do seu navegador, em qualquer página de sua preferência:

```js
alert("This is a message");
```

A função `alert` leva um único argumento — a string exibida na caixa de alerta. Tente variar a string para mudar a mensagem.

A função `alert` é limitada: você pode alterar a mensagem, mas não pode variar com facilidade nada, como cor, ícone ou qualquer outra coisa. Nós vamos construir um que se mostrará mais divertido.

> **Nota:** Este exemplo deve funcionar bem em todos os navegadores modernos, mas o estilo pode parecer um pouco engraçado em navegadores um pouco mais antigos. Recomendamos que você faça esse exercício em um navegador moderno como o Firefox, o Opera ou o Chrome.

## A função básica

Para começar, vamos montar uma função básica.

> **Nota:** Para convenções de nomenclatura de função, você deve seguir as mesmas regras das [convenções de nomenclatura de variáveis](/en-US/Learn/JavaScript/First_steps/Variables#An_aside_on_variable_naming_rules). Algo bom é como você pode diferenciá-los — os nomes das funções aparecem com parênteses depois deles e as variáveis não.

1. Comece acessando o arquivo [function-start.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-start.html) e fazendo uma cópia local. Você verá que o HTML é simples — o corpo contém apenas um único botão. Também fornecemos algumas CSS básicas para estilizar a caixa de mensagem personalizada e um elemento {{htmlelement("script")}} vazio para colocar nosso JavaScript.
2. Em seguida, adicione o seguinte dentro do elemento `<script>` :

   ```js
   function displayMessage() {}
   ```

   Começamos com a palavra-chave `function`, o que significa que estamos definindo uma função. Isto é seguido pelo nome que queremos dar à nossa função, um par de parênteses e um conjunto de chaves. Quaisquer parâmetros que queremos dar à nossa função vão dentro dos parênteses, e o código que é executado quando chamamos a função vai dentro das chaves.

3. Por fim, adicione o seguinte código dentro das chaves:

   ```js
   var html = document.querySelector("html");

   var panel = document.createElement("div");
   panel.setAttribute("class", "msgBox");
   html.appendChild(panel);

   var msg = document.createElement("p");
   msg.textContent = "This is a message box";
   panel.appendChild(msg);

   var closeBtn = document.createElement("button");
   closeBtn.textContent = "x";
   panel.appendChild(closeBtn);

   closeBtn.onclick = function () {
     panel.parentNode.removeChild(panel);
   };
   ```

Isso é um monte de código para passar, então vamos guiá-lo pouco a pouco.

A primeira linha usa uma função da API do DOM chamada {{domxref("document.querySelector()")}} para selecionar o elemento {{htmlelement("html")}} e armazenar uma referência a ele em uma variável chamada `html`, para que possamos fazer coisas com ela mais tarde:

```js
var html = document.querySelector("html");
```

A próxima seção usa outra função da API do DOM chamada {{domxref("Document.createElement()")}} para criar um elemento {{htmlelement("div")}} elemento e armazenar uma referência a ele em uma variável chamada `panel`. Este elemento será o recipiente externo da nossa caixa de mensagens.

Em seguida, usamos outra função da API do DOM chamada {{domxref("Element.setAttribute()")}} para setar o atributo `class` atributo no nosso painel com um valor de `msgBox`. Isso é para facilitar o estilo do elemento — se você olhar para o CSS na página, verá que estamos usando um seletor de classe `.msgBox` para estilizar a caixa de mensagem e seu conteúdo.

Finalmente, chamamos uma função DOM chamada {{domxref("Node.appendChild()")}} na variável `html` que armazenamos anteriormente, que nidifica um elemento dentro do outro como um filho dele. Nós especificamos o painel `<div>` como o filho que queremos acrescentar dentro do elemento `<html>` Precisamos fazer isso porque o elemento que criamos não aparecerá na página sozinho — precisamos especificar onde colocá-lo.

```js
var panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
html.appendChild(panel);
```

As próximas duas seções fazem uso das mesmas funções `createElement()` e `appendChild()` que já vimos para criar dois novos elementos — um {{htmlelement("p")}} e um {{htmlelement("button")}} — e inseri-los na página como filhos do painel `<div>`. Nós usamos a sua propriedade {{domxref("Node.textContent")}} — que representa o conteúdo de texto de um elemento — para inserir uma mensagem dentro do parágrafo e um 'x' dentro do botão. Este botão será o que precisa ser clicado / ativado quando o usuário quiser fechar a caixa de mensagem.

```js
var msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

var closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Finalmente, usamos um manipulador eventos {{domxref("GlobalEventHandlers.onclick")}} para fazer com que, quando o botão é clicado, algum código seja executado para excluir todo o painel da página — para fechar a caixa de mensagem.

Resumidamente, o manipulador `onclick` é uma propriedade disponível no botão (ou, na verdade, qualquer elemento na página) que pode ser definida para uma função para especificar qual código será executado quando o botão for clicado. Você aprenderá muito mais sobre isso em nosso artigo de eventos posteriores. Estamos tornando o manipulador `onclick` igual a uma função anônima, que contém o código a ser executado quando o botão é clicado. A linha dentro da função usa a função da API do DOM {{domxref("Node.removeChild()")}} para especificar que queremos remover um elemento filho específico do elemento HTML — nesse caso, o painel `<div>`.

```js
closeBtn.onclick = function () {
  panel.parentNode.removeChild(panel);
};
```

Basicamente, todo esse bloco de código está gerando um bloco de HTML semelhante a isso e inserindo-o na página:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Isso foi um monte de código para trabalhar — não se preocupe muito se você não se lembra exatamente como tudo funciona agora! A parte principal que queremos focar aqui é a estrutura e uso da função, mas queremos mostrar algo interessante para este exemplo.

## Chamando a função

Você tem sua própria definição de função escrita em seu elemento `<script>`, mas não fará nada do jeito que está.

1. Tente incluir a seguinte linha abaixo da sua função para chamá-lo:

   ```js
   displayMessage();
   ```

   Esta linha chama a função, fazendo com que ela seja executada imediatamente. Quando você salvar seu código e recarregá-lo no navegador, verá a pequena caixa de mensagem aparecer imediatamente, apenas uma vez. Nós só estamos chamando uma vez, afinal.

2. Agora abra suas ferramentas de desenvolvedor do navegador na página de exemplo, vá para o console JavaScript e digite a linha novamente, você verá que ela aparece novamente! Então isso é divertido — agora temos uma função reutilizável que podemos chamar a qualquer momento que quisermos.

   Mas provavelmente queremos que apareça em resposta a ações do usuário e do sistema. Em um aplicativo real, essa caixa de mensagem provavelmente seria chamada em resposta a novos dados sendo disponibilizados, ou um erro ocorreria, ou o usuário tentando excluir seu perfil ("você tem certeza disso?") Ou o usuário adicionando um novo contato e a operação completando com sucesso ... etc.

   Nesta demonstração, faremos com que a caixa de mensagem apareça quando o usuário clicar no botão.

3. Exclua a linha anterior que você adicionou.
4. Em seguida, vamos selecionar o botão e armazenar uma referência a ele em uma variável. Adicione a seguinte linha ao seu código, acima da definição da função:

   ```js
   var btn = document.querySelector("button");
   ```

5. Por fim, adicione a seguinte linha abaixo da anterior:

   ```js
   btn.onclick = displayMessage;
   ```

   De maneira semelhante à nossa linha `closeBtn.onclick...` dentro da função, aqui estamos chamando algum código em resposta a um botão sendo clicado. Mas, neste caso, em vez de chamar uma função anônima contendo algum código, estamos chamando nosso nome de função diretamente.

6. Tente salvar e atualizar a página — agora você verá a caixa de mensagem quando clicar no botão.

Você pode estar se perguntando por que não incluímos os parênteses após o nome da função. Isso ocorre porque não queremos chamar a função imediatamente — somente depois que o botão foi clicado. Se você tentar mudar a linha para

```js
btn.onclick = displayMessage();
```

e salvar e recarregar, você verá que a caixa de mensagem aparece sem que o botão seja clicado! Os parênteses neste contexto são às vezes chamados de "operador de invocação de função". Você só os usa quando deseja executar a função imediatamente no escopo atual. No mesmo sentido, o código dentro da função anônima não é executado imediatamente, pois está dentro do escopo da função.

Se você tentou o último experimento, certifique-se de desfazer a última alteração antes de continuar.

## Melhorando a função com parâmetros

Tal como está, a função ainda não é muito útil — nós não queremos apenas mostrar a mesma mensagem padrão todas as vezes. Vamos melhorar nossa função adicionando alguns parâmetros, permitindo-nos chamá-lo com algumas opções diferentes.

1. Primeiro de tudo, atualize a primeira linha da função:

   ```js
   function displayMessage() {
   ```

   para isso:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Agora, quando chamamos a função, podemos fornecer dois valores de variáveis dentro dos parênteses para especificar a mensagem a ser exibida na caixa de mensagem e o tipo de mensagem que ela é.

2. Para utilizar o primeiro parâmetro, atualize a seguinte linha dentro da sua função:

   ```js
   msg.textContent = "This is a message box";
   ```

   to

   ```js
   msg.textContent = msgText;
   ```

3. Por último, mas não menos importante, você precisa atualizar sua chamada de função para incluir um texto de mensagem atualizado. Altere a seguinte linha:

   ```js
   btn.onclick = displayMessage;
   ```

   para este bloco:

   ```js
   btn.onclick = function () {
     displayMessage("Woo, this is a different message!");
   };
   ```

   Se quisermos especificar parâmetros dentro de parênteses para a função que estamos chamando, então não podemos chamá-la diretamente — precisamos colocá-lo dentro de uma função anônima para que não fique no escopo imediato e, portanto, não seja chamado imediatamente. Agora ele não será chamado até que o botão seja clicado.

4. Recarregue e tente o código novamente e você verá que ele ainda funciona muito bem, exceto que agora você também pode variar a mensagem dentro do parâmetro para obter mensagens diferentes exibidas na caixa!

### Um parâmetro mais complexo

Para o próximo parâmetro. Este vai envolver um pouco mais de trabalho — vamos configurá-lo para que, dependendo do parâmetro `msgType`, a função mostre um ícone diferente e uma cor de fundo diferente.

1. Primeiro de tudo, baixe os ícones necessários para este exercício ([aviso](https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/functions/icons/warning.png) e [batepapo](https://raw.githubusercontent.com/mdn/learning-area/master/javascript/building-blocks/functions/icons/chat.png)) do GitHub. Salve-os em uma nova pasta chamada `icons` no mesmo local que seu arquivo HTML.

   > **Nota:** Os icones [aviso](https://www.iconfinder.com/icons/1031466/alarm_alert_error_warning_icon) e [batepapo](https://www.iconfinder.com/icons/1031441/chat_message_text_icon) são encontrado em iconfinder.com, e desenhados por [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr). Obrigado!

2. Em seguida, encontre o CSS dentro do seu arquivo HTML. Faremos algumas alterações para abrir caminho para os ícones. Primeiro, atualize a largura do `.msgBox` de:

   ```css
   width: 200px;
   ```

   para:

   ```css
   width: 242px;
   ```

3. Em seguida, adicione as seguintes linhas dentro da regra `.msgBox p { ... }`:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Agora precisamos adicionar código à nossa função `displayMessage()` para manipular a exibição dos ícones. Adicione o seguinte bloco logo acima da chave de fechamento (`}`) da sua função:

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = "url(icons/warning.png)";
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = "url(icons/chat.png)";
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Aqui, se o parâmetro `msgType` estiver definido como `'warning'`, o ícone de aviso será exibido e a cor de fundo do painel será definida como vermelha. Se estiver definido para `'chat'`, o ícone de bate-papo é exibido e a cor de fundo do painel é definida como azul aqua. Se o parâmetro `msgType` não estiver definido (ou para algo diferente), então a parte `else { ... }` do código entra em jogo, e o parágrafo é simplesmente fornecido padding padrão e nenhum ícone, sem conjunto de cores do painel de fundo também. Isso fornece um estado padrão se nenhum parâmetro `msgType` for fornecido, significando que é um parâmetro opcional!

5. Vamos testar nossa função atualizada, tente atualizar a chamada `displayMessage()` a partir disso:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   para um destes:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Você pode ver como a nossa pequena função (agora nem tanto) está se tornando útil.

> **Nota:** Se você tiver problemas para fazer o exemplo funcionar, sinta-se à vontade para verificar seu código na [versão finalizada no GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html) ([veja-a também em execução](http://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), ou peça nos ajuda.

## Conclusão

Parabéns por chegar ao final! Este artigo levou você ao longo de todo o processo de criação de uma função prática personalizada, que com um pouco mais de trabalho poderia ser transplantada em um projeto real. No próximo artigo, vamos encerrar as funções explicando outro conceito relacionado essencial — valores de retorno.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}
