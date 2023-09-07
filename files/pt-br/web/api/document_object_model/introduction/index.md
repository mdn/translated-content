---
title: Introdução ao DOM
slug: Web/API/Document_Object_Model/Introduction
---

O DOM (Document Object Model) é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web. Neste guia, apresentaremos brevemente o DOM. Veremos como o DOM representa um documento {{Glossary ("HTML")}} ou {{Glossary ("XML")}} na memória e como você usa APIs para criar aplicativos e conteúdo da Web.

## O que é o DOM?

O Document Object Model (**DOM**) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.

Uma página da Web é um documento. Este documento pode ser exibido na janela do navegador ou como a fonte HTML. Mas é o mesmo documento nos dois casos. O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.

Os padrões [W3C DOM](https://www.w3.org/DOM/) e [WHATWG DOM](https://dom.spec.whatwg.org) são implementados na maioria dos navegadores modernos. Muitos navegadores estendem o padrão; portanto, é necessário ter cuidado ao usá-los na Web, onde os documentos podem ser acessados por vários navegadores com diferentes DOMs.

Por exemplo, o DOM padrão especifica que o método `getElementsByTagName` no código abaixo deve retornar uma lista de todos os elementos `<p>` no documento:

```js
var paragraphs = document.getElementsByTagName("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Todas as propriedades, métodos e eventos disponíveis para manipular e criar páginas da Web são organizados em objetos (por exemplo, o objeto de `document` que representa o próprio documento, o objeto de `table` que implementa a Interface especial DOM {{domxref ("HTMLTableElement")}}}} para acessar tabelas HTML e assim por diante). Esta documentação fornece uma referência objeto a objeto ao DOM.

O DOM moderno é construído usando várias APIs que trabalham juntas. O [DOM](/pt-BR/docs/Web/API/Document_Object_Model) principal define os objetos que descrevem fundamentalmente um documento e os objetos dentro dele. Isso é expandido conforme necessário por outras APIs que adicionam novos recursos e capacidades ao DOM. Por exemplo, a [HTML DOM API](/pt-BR/docs/Web/API/HTML_DOM) adiciona suporte para representar documentos HTML no DOM principal.

## DOM e JavaScript

O pequeno exemplo acima, como quase todos os exemplos nesta referência, é {{glossary ("JavaScript")}}. Ou seja, está escrito em JavaScript, mas usa o DOM para acessar o documento e seus elementos. O DOM não é uma linguagem de programação, mas sem ela, a linguagem JavaScript não teria nenhum modelo ou noção de páginas da web, documentos HTML, documentos XML e suas partes componentes (por exemplo, elementos). Cada elemento de um documento - o documento como um todo, o cabeçalho, as tabelas do documento, os cabeçalhos da tabela, o texto nas células da tabela - faz parte do modelo de objeto do documento desse documento, para que todos possam ser acessados e manipulados usando o método DOM e uma linguagem de script como JavaScript.

No início, o JavaScript e o DOM estavam fortemente interligados, mas, eventualmente, evoluíram para entidades separadas. O conteúdo da página é armazenado no DOM e pode ser acessado e manipulado via JavaScript, para que possamos escrever esta equação aproximada:

API (página HTML ou XML) = DOM + JS (linguagem de script)

O DOM foi projetado para ser independente de qualquer linguagem de programação específica, disponibilizando a representação estrutural do documento a partir de uma única API consistente. Embora nos concentremos exclusivamente no JavaScript nesta documentação de referência, as implementações do DOM podem ser construídas para qualquer idioma, como este exemplo em Python demonstra:

```python
# exemplo de DOM com Python
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # propriedade do objeto de documento DOM
p_list = doc.getElementsByTagName("para")
```

Para obter mais informações sobre quais tecnologias estão envolvidas na criação de JavaScript na Web, consulte [JavaScript technologies overview](/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview).

## Acessando o DOM

Você não precisa fazer nada de especial para começar a usar o DOM. Navegadores diferentes têm implementações diferentes do DOM, e essas implementações exibem graus variados de conformidade com o padrão DOM real (um assunto que tentamos evitar nesta documentação), mas todo navegador usa um modelo de objeto de documento para tornar as páginas da web acessíveis via JavaScript.

Quando você cria um script - seja embutido em um elemento(tag) `<script>` ou incluído na página da web por meio de uma instrução de carregamento de script - você pode começar imediatamente a usar a API para o {{domxref ("document")}} ou { {domxref ("Window", "window")}} elementos para manipular o próprio documento ou obter os filhos desse documento, que são os vários elementos na página da web. Sua programação DOM pode ser algo tão simples quanto o exemplo seguinte, que exibe uma mensagem de alerta usando a função {{domxref ("window.alert", "alert()")}} da função {{domxref ("Window", " window ")}} ou pode usar métodos DOM mais sofisticados para criar realmente novo conteúdo, como no extenso exemplo abaixo.

O JavaScript a seguir exibirá um alerta quando o documento for carregado (e quando todo o DOM estiver disponível para uso):

```html
<body onload="window.alert('Welcome to my home page!');"></body>
```

Outro exemplo. Esta função cria um novo elemento H1, adiciona texto a esse elemento e, em seguida, adiciona o `H1` à árvore deste documento:

```html
<html>
  <head>
    <script>
      // run this function when the document is loaded
      window.onload = function () {
        // create a couple of elements in an otherwise empty HTML page
        var heading = document.createElement("h1");
        var heading_text = document.createTextNode("Big Head!");
        heading.appendChild(heading_text);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## Tipos de dados fundamentais

Esta referência tenta descrever os vários objetos e tipos em termos simples. Mas há vários tipos de dados diferentes sendo transmitidos pela API que você deve conhecer.

> **Nota:** Como a grande maioria do código que usa o DOM gira em torno da manipulação de documentos HTML, é comum sempre se referir aos nós no DOM como **elementos**, pois em um documento HTML, cada nó é um elemento. Apesar de não ser estritamente precisa, a documentação que você encontrará no MDN frequentemente fará a mesma coisa, por causa de quão comum é essa suposição.

A tabela a seguir descreve brevemente esses tipos de dados.

<table class="standard-table">
  <thead>
    <tr>
      <th>Tipos de dados (Interface)</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td>
        Quando um membro retorna um objeto do tipo <code>document</code> (por
        exemplo, a propriedade <strong><code>ownerDocument </code></strong>de um
        elemento retorna o <code>document</code> ao qual ele pertence),esse
        objeto é o próprio objeto de <code>document</code> raiz. O capítulo
        <a href="/pt-BR/docs/Web/API/Document"
          >DOM <code>document</code> Reference</a
        >
        descreve o objeto do <code>document</code> .
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        Todo objeto localizado em um documento é um nó de algum tipo. Em um
        documento HTML, um objeto pode ser um nó de elemento, mas também um nó
        de texto ou atributo.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        <p>
          O tipo do <code>element</code> é baseado em <code>node</code>. Isso se
          refere a um elemento ou um nó do tipo <code>element</code> retornado
          por um membro do DOM API. Ao invés de dizer, por exemplo, que o método
          {{domxref("document.createElement()")}} retorna um objeto
          de referência para um nó, nós apenas dizemos que esse método retorna o
          <code>element</code> que acabou de ser criado no DOM. Os objetos do
          <code>element</code> implementam a interface DOM
          <code>Element</code> e também a mais básica interface
          <code>Node</code>, sendo ambas incluídas juntas nessa referência. Em
          um documento HTML, elementos são ainda mais aprimorados pelas APIs
          HTML DOM. A interface {{domxref("HTMLElement")}} bem como
          outras interfaces descrevem capacidades de tipos especifícos de
          elementos (por exemplo, {{domxref("HTMLTableElement")}} para
          elementos {{HTMLElement("table")}}).
        </p>
      </td>
    </tr>
    <tr>
      <td>{{domxref("NodeList")}}</td>
      <td>
        Uma <code>nodeList</code> é um array de elementos comos os que são
        retornados pelo método
        {{domxref("document.getElementsByTagName()")}}. Itens numa
        <code>nodeList</code> são acessados por índices em uma das duas formas:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        Esses dois são equivalentes. No primeiro,
        <strong><code>item()</code></strong> é o método único no objeto da
        <code>nodeList</code>. O último usa uma sintaxe típica de array para
        buscar o segundo item na lista.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Attribute")}}</td>
      <td>
        Quando um <code>attribute</code> é retornado por um membro (por exemplo,
        pelo método <strong><code>createAttribute()</code></strong
        >), é um objeto de referência que expõe uma interface especial (embora
        pequena) para atributos. Atributos são nós no DOM bem como elementos,
        mesmo que raramente você possa usá-los como tal.
      </td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td>
        <p>
          Um <code>namedNodeMap</code> é como um array, mas os itens são
          acessados por nome ou índice, embora este último caso seja meramente
          uma conveniência para enumeração, já que eles não estão em uma ordem
          específica na lista. O <code>namedNodeMap</code> possui um método
          <code>item()</code> para esse propósito, e você também pode adicionar
          e remover itens de um <code>namedNodeMap</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Tenha em mente algumas considerações de terminologia comuns que existem. É comum referir-se a qualquer nó {{domxref("Attribute")}} simplesmente como um **`attribute`**, por exemplo, e referir-se a um array de nós DOM como um **`nodeList`**. Você encontrará esses termos e outros a serem introduzidos e usados em toda a documentação.

## DOM interfaces

Esse guia é sobre os objetos e o que você pode usar ao manipular a hierarquia do DOM. Há muitos aspectos que tornam entender como eles funcionam confuso. Por exemplo, o objeto representando o elemento HTML `form` pega a propriedade **`name`** da interface do `HTMLFormElement` mas a sua propriedade **`className`** vem da interface `HTMLElement`. Em ambos os casos, a propriedade que você quer está naquele objeto do formulário.

Mas o relacionamento entre objetos e interfaces que são implementadas no DOM pode ser confuso, então essa seção busca mostrar um pouco sobre as interfaces na especificação do DOM e como elas são disponibilizadas.

### Interfaces e Objetos

Muitos objetos pegam emprestados de várias interfaces diferentes. O objeto table por exemplo implementa uma interface especializada {{domxref("HTMLTableElement")}}, que inclui métodos como `createCaption` e `insertRow`. Mas como é também um elemento HTML, `table` implementa a interface `Element` descrita no capítulo DOM {{domxref("Element")}} Reference. E finalmente, já que um elemento HTML é também, no que diz respeito ao DOM, um nó na árvore de nós que fazem o modelo de objeto para uma página HTML ou XML, o objeto table também implementa a interface `Node` mais básica, de onde deriva `Element`.

Quando você pegar a referência para um objeto `table`, como no exemplo a seguir, você rotineiramente usa todas as três interfaces de forma intercambiável no objeto, talvez sem saber.

```js
var tabela = document.getElementById("table");
var atributosTabela = tabela.attributes; // interface Node/Element
for (var i = 0; i < atributosTabela.length; i++) {
  // interface HTMLTableElement: atributo border
  if (atributosTabela[i].nodeName.toLowerCase() == "border")
    tabela.border = "1";
}
// interface HTMLTableElement: atributo summary
table.summary = "nota: aumento de borda";
```

### Interfaces Core no DOM

Essa seção lista algumas das interfaces mais utilizadas no DOM. A ideia não é descrever o que essas APIs fazem aqui mas para te dar uma ideia de que tipos de métodos e propriedades você verá bastante conforme for usando o DOM. Essas APIs são usadas nos exemplos mais extensos no capítulo de [DOM Examples](/pt-BR/docs/Web/API/Document_Object_Model/Examples) ao fim desse livro.

Objetos `Document` e `window` são os objetos cujas interfaces você geralmente utiliza mais frequentemente em programação DOM. De forma simples, o objeto `window` representa algo como o browser, e o objeto `document` é a raiz de todo o documento em si. `Element` herda dessa interface `Node` genérica, e juntamente com essas duas interfaces fornecem muitos dos métodos e propriedades que você utiliza em elementos individuais. Esses elementos podem também ter interfaces específicas para lidar com o tipo de dado que esses elementos contêm, como no exemplo do objeto `table` na seção anterior.

A seguir uma lista breve de APIs comuns em scripting de páginas web e XML usando o DOM.

- `{{domxref("document.getElementById", "", "", "1")}}(id)`
- `document.{{domxref("Element.getElementsByTagName", "getElementsByTagName", "", "1")}}(name)`
- `{{domxref("document.createElement", "", "", "1")}}(name)`
- `parentNode.{{domxref("Node.appendChild", "appendChild", "", "1")}}(node)`
- `element.{{domxref("element.innerHTML", "innerHTML", "", "1")}}`
- `element.{{domxref("HTMLElement.style", "style", "", "1")}}.left`
- `element.{{domxref("element.setAttribute", "setAttribute", "", "1")}}()`
- `element.{{domxref("element.getAttribute", "getAttribute", "", "1")}}()`
- `element.{{domxref("EventTarget.addEventListener", "addEventListener", "", "1")}}()`
- `{{domxref("window.content", "", "", "1")}}`
- `{{domxref("window.onload", "", "", "1")}}`
- `{{domxref("console.log", "", "", "1")}}()`
- `{{domxref("window.scrollTo", "", "", "1")}}()`

## Testando a DOM API

Esse documento fornece amostras para cada interface que você pode usar ao desenvolver. Em alguns casos, as amostras são páginas completas em HTML, com o acesso ao DOM em um elemento `<script>`, a interface (ex. botões) necessária para ativar o script num formulário, e os elementos HTML pelo qual o DOM opera listados também. Quando esse é o caso, você pode copiar e colar o exemplo em um novo documento HTML, salvar e rodar o exemplo pelo browser.

Há alguns casos, porém, que os exemplos são mais concisos. Para rodar exemplos que apenas demonstram o relacionamento básico da interface para os elementos HTML, você pode criar uma página teste em que as interfaces podem ser fácilmente acessadas por scripts. A simples página web a seguir fornece um elemento `<script>` no header em que você pode colocar funções para testar a interface, alguns elementos HTML com atributos que você consegue buscar, definir ou manipular, e a interface web do usuário necessária para chamar essas funções pelo broswer.

Você pode usar essa página teste ou criar uma similar para testar as interfaces DOM que quiser e ver como elas funcionam numa plataforma broswer. Você pode alterar os conteúdos da função `test()` como achar necessário, criar mais botões ou adicionar elementos se necessário.

```html
<html>
  <head>
    <title>Testes DOM</title>
    <script type="application/javascript">
      function setBodyAttr(attr, value) {
        if (document.body) eval("document.body." + attr + '="' + value + '"');
        else notSupported();
      }
    </script>
  </head>
  <body>
    <div style="margin: .5in; height: 400;">
      <p>
        <b><tt>text</tt></b>
      </p>
      <form>
        <select
          onChange="setBodyAttr('text',
        this.options[this.selectedIndex].value);">
          <option value="black">preto</option>
          <option value="darkblue">azul escuro</option>
        </select>
        <p>
          <b><tt>bgColor</tt></b>
        </p>
        <select
          onChange="setBodyAttr('bgColor',
        this.options[this.selectedIndex].value);">
          <option value="white">branco</option>
          <option value="lightgrey">cinza</option>
        </select>
        <p>
          <b><tt>link</tt></b>
        </p>
        <select
          onChange="setBodyAttr('link',
        this.options[this.selectedIndex].value);">
          <option value="blue">azul</option>
          <option value="green">verde</option>
        </select>
        <small>
          <a href="http://algum.website.tld/pagina.html" id="amostra">
            (link)</a
          ></small
        ><br />
      </form>
      <form>
        <input type="button" value="version" onclick="ver()" />
      </form>
    </div>
  </body>
</html>
```

Para testar várias interfaces numa única página - por exemplo, um conjunto de propriedades que afete as cores de uma página web - você pode criar uma página de teste similar com um console inteiro de botões, textfields e outros elementos HTML. A screenshot a seguir te dá uma ideia de como interfaces podem ser agrupadas para testes.

Figura 0.1 Página de Teste DOM

![Image:DOM_Ref_Introduction_to_the_DOM.gif](/@api/deki/files/173/=DOM_Ref_Introduction_to_the_DOM.gif)

Nesse exemplo, os menus drop-down atualizam dinamicamente os aspectos acessáveis pelo DOM na página web como o fundo (`bgColor`), a cor dos hiperlinks (`aLink`), e a cor do texto (`text`). Porém, ao desenhar suas páginas de teste, testar as interfaces conforme for lendo sobre elas é uma parte importante para aprender a usar o DOM de forma efetiva.

## Subnav

- [DOM Reference](/pt-BR/docs/Web/API/Document_Object_Model)
- [Introduction to the DOM](/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
- [Events and the DOM](/pt-BR/docs/Web/API/Document_Object_Model/Events)
- [Examples](/pt-BR/docs/Web/API/Document_Object_Model/Examples)

{{DefaultAPISidebar("DOM")}}
