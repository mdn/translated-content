---
title: Trabalhando com JSON
slug: Learn/JavaScript/Objects/JSON
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript Object Notation (JSON) é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript. É comumente usado para transmitir dados em aplicativos da Web (por exemplo, enviar alguns dados do servidor para o cliente, para que possam ser exibidos em uma página da Web ou vice-versa). Você se deparará com isso com bastante frequência, portanto, neste artigo, oferecemos tudo o que você precisa para trabalhar com o JSON usando JavaScript, incluindo a análise do JSON para que você possa acessar os dados dentro dele e criar o JSON.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos</th>
      <td>
        <p>
          Conhecimento básico em informática, conhecimento básico de HTML e CSS,
          conhecimento básico de JavaScript veja
          <a href="/pt-BR/docs/Learn/JavaScript/First_steps"
            >Primeiros passos</a
          >
          e
          <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks"
            >Construindo blocos</a
          >) e o básico de OOJS (veja
          <a href="/pt-BR/docs/Learn/JavaScript/Object-oriented/Introduction"
            >Introdução a objetos</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Para entender como trabalhar com dados armazenados em JSON e criar
          seus próprios objetos JSON.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Não, sério, o que é o JSON?

{{glossary("JSON")}} é um formato de dados baseado em texto seguindo a sintaxe do objeto JavaScript, que foi popularizada por [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford). Mesmo que se assemelhe à sintaxe literal do objeto JavaScript, ele pode ser usado independentemente do JavaScript, e muitos ambientes de programação possuem a capacidade de ler (analisar) e gerar JSON

O JSON existe como uma string — útil quando você deseja transmitir dados por uma rede. Ele precisa ser convertido em um objeto JavaScript nativo quando você quiser acessar os dados. Isso não é um grande problema — o JavaScript fornece um objeto [JSON](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON) global que possui métodos disponíveis para conversão entre os dois.

> **Nota:** Converter uma string em um objeto nativo é chamado de análise, enquanto a conversão de um objeto nativo em uma string para que possa ser transmitida pela rede é chamada de _stringification_.

Um objeto JSON pode ser armazenado em seu próprio arquivo, que é basicamente apenas um arquivo de texto com uma extensão de `.json`, e um {{glossary("MIME type")}} de `application/json`.

### Estrutura JSON

Conforme descrito acima, um JSON é uma string cujo formato se parece muito com o formato literal do objeto JavaScript. Você pode incluir os mesmos tipos de dados básicos dentro do JSON, como em um objeto JavaScript padrão — strings, números, matrizes, booleanos e outros literais de objeto. Isso permite que você construa uma hierarquia de dados, assim:

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Se nós carregássemos esse objeto em um programa JavaScript, analisado em uma variável chamada `superHeroes` por exemplo, poderíamos então acessar os dados dentro dele usando a mesma notação dot / bracket que observamos no artigo básico do objeto [JavaScript](/pt-BR/docs/Learn/JavaScript/Objects/Basics). Por exemplo:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Para acessar os dados mais abaixo na hierarquia, basta encadear os nomes de propriedades e os índices de array necessários juntos. Por exemplo, para acessar o terceiro superpoder do segundo herói listado na lista de membros, você faria isso:

```js
superHeroes["members"][1]["powers"][2];
```

1. Primeiro temos o nome da variável — `superHeroes`.
2. Por dentro, queremos acessar a propriedade dos `members`, então usamos `["members"]`.
3. `members` contém uma matriz preenchida por objetos. Queremos acessar o segundo objeto dentro da matriz, então usamos `[1]`.
4. Dentro deste objeto, queremos acessar a propriedade `powers`, então usamos `["powers"]`.
5. Dentro da propriedade `powers` está um array contendo os superpoderes do herói selecionado. Nós queremos o terceiro, então nós usamos
   `[2]`.

> **Nota:** Nota: Nós fizemos o JSON visto acima disponível dentro de uma variável em nosso exemplo JSONTest.html (veja o código fonte). Tente carregar isso e depois acessar os dados dentro da variável pelo console JavaScript do seu navegador.

### Matrizes como JSON

Acima, mencionamos que o texto JSON basicamente se parece com um objeto JavaScript, e isso é basicamente correto. A razão pela qual dissemos "principalmente certo" é que uma matriz também é válida como JSON, por exemplo:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

O código acima é um JSON perfeitamente válido. Você teria que acessar itens de matriz (em sua versão analisada) iniciando com um índice de matriz, por exemplo `[0]["powers"][0]`.

### Outras notas

- O JSON é puramente um formato de dados — contém apenas propriedades, sem métodos.
- JSON requer aspas duplas para serem usadas em torno de strings e nomes de propriedades. Aspas simples não são válidas.
- Mesmo uma única vírgula ou cólon perdidos podem fazer com que um arquivo JSON dê errado e não funcione. Você deve ter o cuidado de validar quaisquer dados que você esteja tentando usar (embora o JSON gerado por computador seja menos provável de incluir erros, desde que o programa gerador esteja funcionando corretamente). Você pode validar o JSON usando um aplicativo como o [JSONLint](http://jsonlint.com/).
- O JSON pode realmente assumir a forma de qualquer tipo de dados que seja válido para inclusão dentro do JSON, não apenas matrizes ou objetos. Por exemplo, uma única string ou número seria um objeto JSON válido.
- Ao contrário do código JavaScript no qual as propriedades do objeto podem estar sem aspas, em JSON, somente strings entre aspas podem ser usadas como propriedades.

## Aprendizado ativo: trabalhando por meio de um exemplo de JSON

Então, vamos trabalhar em um exemplo para mostrar como poderíamos usar alguns dados JSON em um site.

### Começando

Para começar, faça cópias locais de nossos arquivos [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) e [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css). O último contém alguns CSS simples para estilizar nossa página, enquanto o primeiro contém um HTML muito simples:

```html
<header></header>

<section></section>
```

Mais um elemento {{HTMLElement("script")}} para conter o código JavaScript que escreveremos neste exercício. No momento, ele contém apenas duas linhas, que pegam referências aos elementos {{HTMLElement("header")}} e {{HTMLElement("section")}} e os armazenam em variáveis:

```js
var header = document.querySelector("header");
var section = document.querySelector("section");
```

Disponibilizamos nossos dados JSON em nosso GitHub, em<https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Vamos carregá-lo em nossa página e usar algumas manipulações de DOM nifty para exibi-lo, assim:

![](json-superheroes.png)

### Obtendo o JSON

Para obter o JSON, vamos usar uma API chamada {{domxref("XMLHttpRequest")}} (geralmente chamada de XHR). Esse é um objeto JavaScript muito útil que nos permite fazer solicitações de rede para recuperar recursos de um servidor via JavaScript (por exemplo, imagens, texto, JSON e até trechos de código HTML), o que significa que podemos atualizar pequenas seções de conteúdo sem ter que recarregar todo página. Isso levou a páginas da Web mais responsivas e parece empolgante, mas está além do escopo deste artigo ensinar isso com muito mais detalhes.

1. Para começar, vamos armazenar a URL do JSON que queremos recuperar em uma variável. Adicione o seguinte na parte inferior do seu código JavaScript:

   ```js
   var requestURL =
     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
   ```

2. Para criar uma solicitação, precisamos criar uma nova instância de objeto de solicitação a partir do construtor `XMLHttpRequest` usando a palavra-chave `new`. Adicione o seguinte abaixo sua última linha:

   ```js
   var request = new XMLHttpRequest();
   ```

3. Agora precisamos abrir uma nova solicitação usando o método [`open()`](/pt-BR/docs/Web/API/XMLHttpRequest/open) . Adicione a seguinte linha:

   ```js
   request.open("GET", requestURL);
   ```

   Isso leva pelo menos dois parâmetros — existem outros parâmetros opcionais disponíveis. Nós só precisamos dos dois obrigatórios para este exemplo simples:

   - O método HTTP a ser usado ao fazer a solicitação de rede. Neste caso, [`GET`](/pt-BR/docs/Web/HTTP/Methods/GET) é bom, pois estamos apenas recuperando alguns dados simples.
   - O URL para fazer a solicitação — esta é a URL do arquivo JSON que armazenamos anteriormente.

4. Em seguida, adicione as duas linhas a seguir — aqui estamos definindo o [`responseType`](/pt-BR/docs/Web/API/XMLHttpRequest/responseType) como JSON, para que o XHR saiba que o servidor retornará o JSON e que isso deve ser convertido nos bastidores em um objeto JavaScript. Em seguida, enviamos a solicitação com o método [`send()`](/pt-BR/docs/Web/API/XMLHttpRequest/send):

   ```js
   request.responseType = "json";
   request.send();
   ```

5. A última parte desta seção envolve aguardar a resposta retornar do servidor e, em seguida, lidar com ela. Adicione o seguinte código abaixo do seu código anterior:

   ```js
   request.onload = function () {
     var superHeroes = request.response;
     populateHeader(superHeroes);
     showHeroes(superHeroes);
   };
   ```

Aqui estamos armazenando a resposta ao nosso pedido (disponível na propriedade [`response`](/pt-BR/docs/Web/API/XMLHttpRequest/response)) em uma variável chamada `superHeroes`; essa variável agora conterá o objeto JavaScript com base no JSON! Então, estamos passando esse objeto para duas chamadas de função — a primeira preencherá o <`header>` com os dados corretos, enquanto a segunda criará uma ficha de informações para cada herói da equipe e a inserirá na `<section>`.

Envolvemos o código em um manipulador de eventos que é executado quando o evento de carregamento é acionado no objeto de solicitação (consulte [`onload`](/pt-BR/docs/Web/API/XMLHttpRequestEventTarget/onload)) — isso ocorre porque o evento load é acionado quando a resposta é retornada com sucesso; Fazê-lo desta forma garante que `request.response` estará definitivamente disponível quando chegarmos a tentar fazer algo com ele.

### Preenchendo o Cabeçalho

Agora, recuperamos os dados JSON e os convertemos em um objeto JavaScript, vamos usá-lo escrevendo as duas funções mencionadas acima. Primeiro de tudo, adicione a seguinte definição de função abaixo do código anterior:

```js
function populateHeader(jsonObj) {
  var myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  var myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}
```

Nós chamamos o parâmetro `jsonObj`, para nos lembrarmos que esse objeto JavaScript foi originado do JSON. Aqui, primeiro criamos um elemento {{HTMLElement("h1")}} como [`createElement()`](/pt-BR/docs/Web/API/Document/createElement), definimos seu [`textContent`](/pt-BR/docs/Web/API/Node/textContent) para igualar a propriedade `squadName` do objeto e, em seguida, o adicionamos ao cabeçalho usando [`appendChild()`](/pt-BR/docs/Web/API/Node/appendChild). Em seguida, fazemos uma operação muito semelhante com um parágrafo: criá-lo, definir seu conteúdo de texto e anexá-lo ao cabeçalho. A única diferença é que seu texto é definido como uma string concatenada contendo as propriedades `homeTown` e `formed` do objeto.

### Criando os cartões de informações do herói

Em seguida, adicione a seguinte função na parte inferior do código, que cria e exibe as cartas de super-heróis:

```js
function showHeroes(jsonObj) {
  var heroes = jsonObj["members"];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

Para começar, armazenamos a propriedade `members` do objeto JavaScript em uma nova variável. Esta matriz contém vários objetos que contêm as informações para cada herói.

Em seguida, usamos um [loop for](/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code#The_standard_for_loop) para percorrer cada objeto na matriz. Para cada um, nós:

1. Criamos vários novos elementos: um `<article>`, um `<h2>`, três `<p>`s, e um `<ul>`.
2. Definimos o \<h2> para conter o `name` do herói atual.
3. Preenchemos os três parágrafos com sua `secretIdentity`, `age`, e uma linha dizendo "Superpoderes:" para introduzir as informações na lista.
4. Armazenamos a propriedade `powers` em outra nova variável chamada `superPowers` — isso contém uma matriz que lista os superpoderes do herói atual.
5. Usamos outro loop `for` para percorrer os superpoderes do herói atual — para cada um criamos um elemento `<li>` colocamos o super poder dentro dele e colocamos o `listItem` dentro do elemento `<ul>` (`myList`) usando `appendChild()`.
6. A última coisa que fizemos foi acrescentar os `<h2>`, `<p>`s, e `<ul>` dentro do `<article>` (`myArticle`), depois acrescentar o `<article>` dentro do `<section>`. A ordem em que as coisas são anexadas é importante, pois essa é a ordem em que elas serão exibidas dentro do HTML.

> **Nota:** Se você está com problemas pegue um exemplo para trabalhar, tente nosso código fonte [heroes-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html) (veja isso [ao vivo](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) também.)

> **Nota:** Se você está tendo problemas para seguir a notação ponto / colchete que estamos usando para acessar o objeto JavaScript, pode ajudar a abrir o arquivo [superheroes.json](http://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) em outra guia ou em seu editor de texto, e consultá-lo enquanto observa nosso JavaScript. Você também pode consultar o artigo sobre conceitos [O básico de objetos JavaScript](/pt-BR/docs/Learn/JavaScript/Objects/Basics) para obter mais informações sobre a notação de pontos e colchetes.

## Conversão entre objetos e texto

O exemplo acima foi simples em termos de acesso ao objeto JavaScript, porque definimos a solicitação XHR para converter a resposta JSON diretamente em um objeto JavaScript usando:

```js
request.responseType = "json";
```

Mas às vezes não temos muita sorte — às vezes recebemos uma string JSON bruta e precisaremos convertê-la em um objeto por conta própria. E quando queremos enviar um objeto JavaScript pela rede, precisamos convertê-lo em JSON (uma string) antes de enviá-lo. Felizmente, esses dois problemas são tão comuns no desenvolvimento da Web que um objeto [JSON](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON) interno está disponível nos navegadores, o que contém os dois métodos a seguir:

- [`parse()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Aceita uma string JSON como um parâmetro e retorna o objeto JavaScript correspondente.
- [`stringify()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Aceita um objeto como um parâmetro e retorna o formato equivalente de string JSON.

Você pode ver o primeiro em ação em nosso exemplo [heroes-finished-json-parse.html](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) (veja o [source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html)) — isso faz exatamente a mesma coisa que o exemplo que construímos anteriormente, exceto pelo fato de configurarmos o XHR para retornar texto JSON bruto, em seguida, usado `parse()` para convertê-lo em um objeto JavaScript real. O trecho principal do código está aqui:

```js
request.open("GET", requestURL);
request.responseType = "text"; // now we're getting a string!
request.send();

request.onload = function () {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
```

Como você pode imaginar, `stringify()` funciona da maneira oposta. Tente inserir as seguintes linhas no console JavaScript de seu navegador, uma por uma, para vê-lo em ação:

```js
var myJSON = { name: "Chris", age: "38" };
myJSON;
var myString = JSON.stringify(myJSON);
myString;
```

Aqui estamos criando um objeto JavaScript, em seguida, verificando o que ele contém, convertendo-o em uma string JSON usando `stringify()` — salvando o valor de retorno em uma nova variável — e, em seguida, verificando-o novamente.

## Sumário

Neste artigo, fornecemos um guia simples para usar o JSON em seus programas, incluindo como criar e analisar o JSON e como acessar dados bloqueados nele. No próximo artigo começaremos a analisar o JavaScript orientado a objetos.

## Veja também

- [Objeto JSON página de refência](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Objeto XMLHttpRequest página de refência](/pt-BR/docs/Web/API/XMLHttpRequest)
- [Usando XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/Usando_XMLHttpRequest)
- [Métodos de requisição HTTP](/pt-BR/docs/Web/HTTP/Methods)
- [Site oficial JSON com o link para o padrão ECMA](http://json.org)

{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

## Nesse módulo

- [O básico de objetos](/pt-BR/docs/Learn/JavaScript/Objects/Basics)
- [Orientação a objetos em JavaScript para iniciantes](/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Protótipos de objetos](/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Herança em JavaScript](/pt-BR/docs/Learn/JavaScript/Objects/Inheritance)
- [Trabalhando com dados em JSON](/pt-BR/docs/Learn/JavaScript/Objects/JSON)
- [Prática de construção de objetos](/pt-BR/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Adicionando melhorias para nossa demo bolas saltitantes](/pt-BR/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
