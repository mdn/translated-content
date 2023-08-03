---
title: O básico sobre objetos JavaScript
slug: Learn/JavaScript/Objects/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

Neste artigo, veremos a sintaxe fundamental de objetos JavaScript e revisitaremos alguns recursos JavaScript vistos anteriormente no curso, reiterando o fato de que muitos dos recursos que você já utilizou são objetos.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Interação básica com o computador, entendimento básico de HTML e CSS,
        familiaridade com o básico de JavaScript (ver
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps">Primeiros passos</a>
        e
        <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks"
          >Elementos construtivos</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender a teoria básica por trás da programação orientada a objetos,
        como isso se relaciona com o JavaScript ("quase tudo é objeto"), e como
        começar a trabalhar com objetos JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Objeto, noções básicas

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são.

Para começar, faça uma cópia do nosso arquivo [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html). Isto contém muito pouco — um elemento {{HTMLElement("script")}} para escrevermos nosso código-fonte. Vamos usar isto como base para explorar a sintaxe básica do objeto. Ao trabalhar com este exemplo, você deve ter seu [console de ferramentas de desenvolvedor JavaScript](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console) aberto e pronto para digitar alguns comandos.

Como acontece com muitas coisas em JavaScript, a criação de um objeto geralmente começa com a definição e a inicialização de uma variável. Tente digitar o código a seguir no arquivo que você baixou, salve e atualize:

```js
var pessoa = {};
```

Se você inserir `pessoa` no seu console JS e pressionar o botão, deverá obter o seguinte resultado:

```js
[object Object]
```

Parabéns, você acabou de criar seu primeiro objeto. Tarefa concluída! Mas este é um objeto vazio, então não podemos fazer muita coisa com isso. Vamos atualizar nosso objeto para ficar assim:

```js
var pessoa = {
  nome: ["Bob", "Smith"],
  idade: 32,
  sexo: "masculino",
  interesses: ["música", "esquiar"],
  bio: function () {
    alert(
      this.nome[0] +
        " " +
        this.nome[1] +
        " tem " +
        this.idade +
        " anos de idade. Ele gosta de " +
        this.interesses[0] +
        " e " +
        this.interesses[1] +
        ".",
    );
  },
  saudacao: function () {
    alert("Oi! Eu sou " + this.nome[0] + ".");
  },
};
```

Depois de salvar e atualizar, tente inserir alguns dos itens a seguir no console JavaScript no devtools do seu navegador:

```js
pessoa.nome;
pessoa.nome[0];
pessoa.idade;
pessoa.interesses[1];
pessoa.bio();
pessoa.saudacao();
```

Agora você tem alguns dados e funcionalidades dentro de seu objeto e é capaz de acessá-los com uma sintaxe simples e agradável!

> **Nota:** Se você está tendo problemas para fazer isto funcionar, tente comparar seu código com a nossa versão — veja [oojs-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html) (ou [veja um exemplo funcionando](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html)). O exemplo lhe dará uma tela em branco, mas tudo bem — novamente, abra seu devtools e tente digitar os comandos acima para ver a estrutura do objeto.

Então, o que está acontecendo? Bem, um objeto é composto de vários membros, cada um com um nome (ex.: `nome` e `idade` vistos acima), e um valor (ex.: `['Bob', 'Smith']` e `32`). Cada par nome/valor deve ser separado por uma vírgula e o nome e valor, em cada caso, separados por dois pontos. A sintaxe sempre segue esse padrão:

```js
var nomeDoObjeto = {
  nomeMembro1: valorMembro1,
  nomeMembro2: valorMembro2,
  nomeMembro3: valorMembro3,
};
```

O valor de um membro do objeto pode ser praticamente qualquer coisa. Em nosso objeto pessoa, temos uma string, um número, dois arrays e duas functions. Os primeiros quatro são data items (dados) e são referenciados como **propriedades** do objeto. Enquanto os dois últimos itens são funções que permitem que o objeto faça algo com esses dados. São chamados de **métodos** do objeto.

Um objeto como esse é chamado de **objeto literal** — ao pé da letra, escrevemos o conteúdo do objeto conforme o criamos. Isto está em contraste com objetos instanciados de classes, que veremos mais adiante.

É muito comum criar um objeto usando um objeto literal quando você deseja transferir uma série de itens de dados relacionados estruturados de alguma maneira, por exemplo, enviando uma solicitação para o servidor para ser colocado em um banco de dados. Enviar um único objeto é muito mais eficiente do que enviar vários itens individualmente, e é mais fácil trabalhar com um array, quando você deseja identificar itens individuais pelo nome.

## Notação de ponto

Acima, você acessou as propriedades de objetos e métodos usando **notação de ponto**. O objeto nome (pessoa) atua como **namespace** (espaço de nomes) — ele deve ser digitado primeiro para que você acesse qualquer coisa **encapsulada** dentro do objeto. Depois você escreve um ponto, então o item que quer acessar — isso pode ser o nome de uma simples propriedade, um item de um array ou a chamada para um dos métodos do objeto, por exemplo:

```js
pessoa.idade;
pessoa.interesse[1];
pessoa.bio();
```

### Sub-namespaces

É até possível fazer o valor de um membro de um objeto ser outro objeto. Por exemplo, tente alterar o nome do membro de:

```js
nome: ['Bob', 'Smith'],
```

para

```js
nome : {
  primeiro: 'Bob',
  ultimo: 'Smith'
},
```

Aqui estamos efetivamente criando um **sub-namespace**. Parece difícil, mas não é — para acessar esses itens você apenas precisa encadear mais um passo ao final de outro ponto. Tente isso aqui no console:

```js
pessoa.nome.primeiro;
pessoa.nome.ultimo;
```

**Importante**: Nesse ponto você também precisará revisar seus métodos e mudar quaisquer instâncias de

```js
nome[0];
nome[1];
```

para

```js
nome.primeiro;
nome.ultimo;
```

Caso contrário seus métodos não funcionarão.

## Notação de colchetes

Há outra forma de acessar propriedades do objeto — usando notação de colchetes. Ao invés desses:

```js
pessoa.idade;
pessoa.nome.primeiro;
```

Você pode usar:

```js
pessoa["idade"];
pessoa["nome"]["primeiro"];
```

Fica muito parecido com a maneira que acessamos itens de um array, e é basicamente a mesma coisa, só que ao invés de usarmos um número de índice para selecionar um item, usamos o nome associado a cada valor. Não é por menos que objetos às vezes são chamados de **arrays associativos** — eles mapeiam strings a valores do mesmo modo que arrays mapeiam números a valores.

## Setando membros do objeto

Até agora nós apenas procuramos receber (ou **apanhar**) membros de objetos — podemos também **setar** (atualizar) o valor de membros de objetos simplesmente declarando o membro que queremos setar (usando notação de ponto ou colchete), tipo assim:

```js
pessoa.idade = 45;
pessoa["nome"]["ultimo"] = "Cratchit";
```

Tente escrever as linhas acima e então apanhar seus membros novamente para ver como mudaram. Assim:

```js
pessoa.idade;
pessoa["nome"]["ultimo"];
```

Não podemos apenas atualizar valores existentes de propriedades e métodos; podemos também criar membros completamente novos. Tente isso aqui no console:

```js
pessoa["olhos"] = "castanho".pessoa.despedida = function () {
  alert("Adeus a todos!");
};
```

Podemos testar nossos novos membros:

```js
pessoa["olhos"];
pessoa.despedida();
```

Um aspecto útil de notação de colchetes é que ela pode ser usadada não apenas para setar valores dinamicamente, mas também nomes de membros. Vamos dizer que queremos que usuários possam armazenar tipos de valores personalizados em seus dados de 'pessoa', digitando o nome e o valor do membro em dois inputs de texto. Podemos obter esses valores dessa forma:

```js
var myDataName = nameInput.value;
var myDataValue = nameValue.value;
```

Podemos, então, adicionar esse novo nome e valor ao objeto pessoa assim:

```js
pessoa[myDataName] = myDataValue;
```

Para testar isso, tente adicionar as seguinte linhas em seu código, abaixo do fechamento da chaves do objeto `pessoa` :

```js
var myDataName = "altura";
var myDataValue = "1.75m";
pessoa[myDataName] = myDataValue;
```

Agora tente salvar e atualizar, entrando o seguinte no seu input de texto:

```js
pessoa.altura;
```

Adicionar uma propriedade a um objeto usando o método acima não é possível com a notação ponto, que só aceita um nome de membro literal, não aceita valor de variável apontando para um nome.

## O que é o "this"?

Você pode ter reparado algo levemente estranho em nossos métodos. Olhe esse aqui, por exemplo:

```js
saudacao: function(){
  alert("Oi! Meu nome é " + this.nome.primeiro + ".");
}
```

Você deve estar se perguntando o que é o "this". A palavra-chave `this` se refere ao objeto atual em que o código está sendo escrito — nesse caso o `this` se refere a `pessoa`. Então por que simplesmente não escrever `pessoa`? Como verá no artigo [Orientaçã a objeto em JavaScript para iniciantes](/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS), quando começamos a criar funções construtoras, etc, o `this` é muito útil — sempre lhe assegurará que os valores corretos estão sendo usados quando o contexto de um membro muda (exemplo: duas instâncias diferentes do objeto `pessoa` podem ter diferentes nomes, mas vão querer usar seu próprio nome ao usar a saudação).

Vamos ilustrar o que queremos dizer com um par de objetos pessoa:

```js
var pessoa1 = {
  nome: "Chris",
  saudacao: function () {
    alert("Oi! Meu nome é " + this.nome + ".");
  },
};

var pessoa2 = {
  nome: "Brian",
  saudacao: function () {
    alert("Oi! Meu nome é " + this.nome + ".");
  },
};
```

Neste caso, `pessoa1.saudacao()` gerará "Oi! Meu nome é Chris."; No entanto, `pessoa2.saudacao()` retornará "Oi! Meu nome é Brian.", mesmo que os códigos dos métodos sejam idênticos. Como dissemos antes, o `this` é igual ao código do objeto dentro dele — não é exatamente útil quando estamos escrevendo objetos literais na mão, mas é realmente incrível quando adicionamos objetos gerados dinamicamente (por exemplo usando **construtores**). Tudo ficará mais claro mais para frente.

## Você vem usando objetos o tempo todo

Enquanto passava por esses exemplos, você provavelmente andou pensando que essa notação de ponto que estamos usando é muito familiar. Isso é porque você vem usando isso durante todo o curso! Todas as vezes que trabalhamos num exemplo que usa uma API interna do navegador ou objetos Javascript, estamos usando objetos, porque esses recursos são construídos usando exatamente o mesmo tipo de estrutura de objetos que vimos aqui, embora mais complexos do que nossos exemplos básicos.

Então quando usamos métodos de strings como:

```js
minhaString.split(",");
```

Estamos usando um método disponível na instância da class [`String`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String). Toda vez que você cria uma string em seu código, essa string é automaticamente criada como uma instância de `String`, e, portanto, possui vários métodos e propriedades comuns que estão disponíveis para ela.

Quando você acessa o document object model usando linhas como estas:

```js
var minhaDiv = document.createElement("div");
var meuVideo = document.querySelector("video");
```

Você está usando métodos disponíveis na instância da class [`Document`](/pt-BR/docs/Web/API/Document). Cada vez que a página é recarrecada, uma instância de `Document` é criada, chamando `document`, que representa a estrutura inteira da página, conteúdo e outros recursos como sua URL. Novamente, isso significa que ela tem vários métodos e propriedades disponíveis nela.

O mesmo pode ser dito de basicamente qualquer outro objeto/API embutido que esteja usando — [`Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math), etc.

Note que Objetos/APIs embutidos nem sempre criam instâncias de objetos automaticamente. Por exemplo, a [API de Notificações](/pt-BR/docs/Web/API/Notifications_API) — que permite que navegadores modernos disparem notificações de sistema — requerem que você inicialize uma nova instância de objeto usando o construtor para cada notificação que queira disparar. Tente entrar o seguinte no seu console Javascript:

```js
var minhaNotificacao = new Notification("Hello!");
```

Novamente, olharemos constructores num artigo mais na frente.

> **Nota:** É útil pensar sobre como os objetos se comunicam **passando mensagens** - quando um objeto precisa de outro objeto para realizar algum tipo de ação, ele freqüentemente enviará uma mensagem para outro objeto através de um de seus métodos e aguardará uma resposta, que reconhecemos como um valor de retorno.

## Teste suas habilidades !

Você chegou ao fim desse artigo,entretanto você consegue lembrar as informações mais importantes? Você pode encontrar mais testes para verificar se você consolidou as informações antes que você siga adiante — veja [Test your skills: Object basics](/pt-BR/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics).

## Resumo

Parabéns, você chegou ao final de nosso primeiro artigo sobre objetos JS - agora você deve ter uma boa ideia de como trabalhar com objetos em Javascript - incluindo criar seus próprio objetos simples. Você também deve perceber que objetos são muito úteis como estruturas para armazenar dados e funcionalidades relacionadas - se tentar rastrear todas as propriedades e métodos do nosso objeto `pessoa` como variáveis e funções separadas, isso seria ineficiente e frustrante e correríamos o risco de termos outras variáveis e funções com o mesmo nome. Objetos nos permite manter informações guardadas em segurança em seus próprios pacotes, fora de perigo.

No próximo artigo vamos começar a ver a teoria de programação orientada a objetos (OOP) e em como suas técnicas podem ser usadas em Javascript.

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

## Nesse módulo

- [Noções Básicas de Objetos](/pt-BR/docs/Learn/JavaScript/Objects/Basics)
- [Orientação a objetos Javascript para iniciantes](/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Protótipos de Objetos](/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Herança no Javascript](/pt-BR/docs/Learn/JavaScript/Objects/Inheritance)
- [Trabalhando com JSON](/pt-BR/docs/Aprender/JavaScript/Objetos/JSON)
- [Prática de construção de Objetos](/pt-BR/docs/Aprender/JavaScript/Objetos/Object_building_practice)
- [Adicionando recursos à nossa demonstração de bolas pulantes](/pt-BR/docs/Aprender/JavaScript/Objetos/Adding_bouncing_balls_features)
