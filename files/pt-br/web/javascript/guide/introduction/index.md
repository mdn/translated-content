---
title: Introdução
slug: Web/JavaScript/Guide/Introduction
tags:
  - Guia(2)
  - Introdução
  - JavaScript
  - básico
translation_of: Web/JavaScript/Guide/Introduction
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}</div>

<div class="summary">
<p>Este capítulo apresenta o JavaScript e discute alguns de seus conceitos fundamentais.</p>
</div>

<h2 id="O_que_você_realmente_já_deveria_saber">O que você realmente já deveria saber?</h2>

<p>Este guia assume que você tem os seguintes conhecimentos básicos:</p>

<ul>
 <li>Um entendimento geral da internet e da <em>World Wide Web</em> ({{Glossary("WWW")}}).</li>
 <li>Um bom conhecimento de  <em>HyperText Markup Language</em> ({{Glossary("HTML")}}).</li>
 <li>Alguma experiência em programação. Se você é novo em programação, veja alguns tutorias na página inicial sobre <a href="/pt-BR/docs/Web/JavaScript" title="/en-US/docs/">JavaScript</a>.</li>
</ul>

<h2 id="Onde_encontrar_informações_sobre_JavaScript">Onde encontrar informações sobre JavaScript</h2>

<p>A documentação de JavaScript na MDN inclui o seguinte:</p>

<ul>
 <li><a href="/en-US/Learn">Aprendendo sobre a internet</a> fornece informações aos iniciantes e introduz os conceitos básicos de programação e da internet.</li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Guide" title="en/Core_JavaScript_1.5_Guide">Guia JavaScript</a> (este guia) dá uma visão geral sobre a linguagem de programação JavaScript e seus objetos.</li>
 <li><a href="/pt-BR/docs/Web/JavaScript/Reference" title="en/JavaScript/Reference">Referência JavaScript</a> provê um material de referência detalhado da linguagem JavaScript.</li>
</ul>

<p>Se você é novo com JavaScript, comece com os artigos na <a href="/en-US/Learn">área de aprendizado</a> e com o <a href="/pt-BR/docs/Web/JavaScript/Guide" title="en/Core_JavaScript_1.5_Guide">Guia JavaScript</a>. Quando você já possuir uma compreensão dos princípios básicos, você pode usar a  <a href="/pt-BR/docs/Web/JavaScript/Reference" title="en/JavaScript/Reference">Referência JavaScript</a> para ter mais detalhes sobre objetos e declarações.</p>

<h2 id="O_que_é_JavaScript">O que é JavaScript?</h2>

<p>JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.</p>

<p>JavaScript  tem uma biblioteca padrão de objetos, como: <code>Array</code>, <code>Date</code>, e <code>Math</code>, e um conjunto de elementos que formam o núcleo da linguagem, tais como: operadores, estruturas de controle e declarações. O núcleo do JavaScript pode ser estendido para uma variedade de propósitos, complementando assim a linguagem:</p>

<ul>
 <li><em>O lado cliente do JavaScript</em> estende-se do núcleo linguagem, fornecendo objetos para controlar um navegador web e seu <em>Document Object Model</em> (DOM). Por exemplo, as extensões do lado do cliente permitem que uma aplicação coloque elementos em um formulário HTML e responda a eventos do usuário, como cliques do mouse, entrada de formulário e de navegação da página.</li>
 <li><em>O lado do servidor do JavaScript</em> estende-se do núcleo  da linguagem, fornecendo objetos relevantes à execução do JavaScript em um servidor. Por exemplo, as extensões do lado do servidor permitem que uma aplicação comunique-se com um banco de dados, garantindo a continuidade de informações de uma chamada para a outra da aplicação, ou executar manipulações de arquivos em um servidor.</li>
</ul>

<h2 id="JavaScript_and_Java" name="JavaScript_and_Java">JavaScript e Java</h2>

<p>JavaScript e Java são similares em algumas coisas, mas são diferentes em outras. O JavaScript assemelha-se ao Java, porém não possui tipagem estática e checagem rigída de tipos como o Java. <span id="result_box" lang="pt"><span title="In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values.">JavaScript segue a sintaxe básica do Java, convenções de nomenclatura e construções de controle de fluxo, razões pelas quais esta linguagem foi renomeada de LiveScript para JavaScript.</span></span></p>

<p><span lang="pt"><span title="In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values.">Em contraste com o sistema em tempo de compilação das classes construídas por declarações no Java, JavaScript suporta um sistema em tempo de execução com base em um pequeno número de tipos de dados representando valores numéricos, booleanos, e strings</span></span>. <span id="result_box" lang="pt"><span title="JavaScript has a prototype-based object model instead of the more common class-based object model.">JavaScript tem um modelo de objeto baseado em protótipo em vez do modelo, mais comum, de objeto baseado em classes. </span><span title="The prototype-based model provides dynamic inheritance;">O modelo baseado em protótipo fornece herança dinâmica; </span><span title="that is, what is inherited can vary for individual objects.">isto é, o que é herdado pode variar para objetos individuais. </span><span title="JavaScript also supports functions without any special declarative requirements.">JavaScript também suporta funções sem quaisquer requisitos especiais declarativos. </span><span title="Functions can be properties of objects, executing as loosely typed methods.

">As funções podem ser propriedades de objetos, executando como métodos.</span></span></p>

<p><span id="result_box" lang="pt"><span title="JavaScript is a very free-form language compared to Java.">JavaScript é uma linguagem mais livre em comparação a Java. </span><span title="You do not have to declare all variables, classes, and methods.">Você não tem de declarar todas as variáveis, classes e métodos. </span><span title="You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces.">Você não tem que se preocupar com o fato dos métodos serem públicos, privados ou protegidos, e você não tem que implementar interfaces. </span><span title="Variables, parameters, and function return types are not explicitly typed.

">Variáveis, parâmetros e tipo de retorno da função não são explicitamente tipados.</span></span></p>

<p><span id="result_box" lang="pt"><span class="hps">Java</span> <span class="hps">é</span> <span class="hps">uma linguagem de programação</span> <span class="hps">baseada em classes</span>, <span class="hps">projetada para</span> <span class="hps">execução rápida</span> <span class="hps">e segurança de tipos</span><span class="hps">.</span> <span class="hps">Segurança de tipo significa que</span><span>,</span> <span class="hps">por exemplo, </span><span class="hps">você não pode converter</span> <span class="hps">um</span> <span class="hps">número inteiro</span> <span class="hps">em</span> <span class="hps">Java</span> <span class="hps">para uma referência de objeto</span> <span class="hps">ou</span><span class="hps"> acessar a memória</span> <span class="hps">privada</span> <span class="hps">corrompendo</span> <span class="hps">bytecodes</span> <span class="hps">Java.</span> O m<span class="hps">odelo</span> <span class="hps">baseado em classes</span> <span class="hps">do</span> <span class="hps">Java</span> <span class="hps">significa que os programas são</span> <span class="hps">exclusivamente constituídos por</span> <span class="hps">classes e seus</span> <span class="hps">métodos.</span> <span class="hps">Herança de classe</span> <span class="hps">do</span> <span class="hps">Java</span> <span class="hps">e</span> <span class="hps">tipagem forte</span> <span class="hps">geralmente</span> <span class="hps">requerem</span> hierarquias de objetos fortemente acoplados<span>.</span> <span class="hps">Esses</span> <span class="hps">requisitos tornam</span> a <span class="hps">programação em</span> <span class="hps">Java</span> <span class="hps">mais complexa</span> <span class="hps">do que a programação em</span> <span class="hps">JavaScript.</span></span></p>

<p><span id="result_box" lang="pt"><span class="hps">Em contraste, </span> <span class="hps">JavaScript</span> <span class="alt-edited hps">descende</span> <span class="hps">em espírito</span> <span class="hps">de uma linhagem de linguagens menores com tipagem dinâmica, como </span><span class="hps">HyperTalk</span> <span class="hps">e</span> <span class="hps">dBASE</span><span>.</span> <span class="hps">Essas</span> <span class="hps">linguagens de script</span> <span class="hps">oferecem</span> <span class="hps">ferramentas de programação</span> <span class="hps">para um público muito</span> <span class="hps">mais amplo</span> <span class="hps">por causa de sua</span> <span class="hps">sintaxe</span> <span class="hps">mais fácil</span><span>, funções especializadas embutidas</span><span class="hps"> e</span> <span class="hps">requisitos mínimos para</span> <span class="hps">a criação de objetos</span><span>.</span></span></p>

<table class="standard-table">
 <caption>JavaScript vs Java</caption>
 <thead>
  <tr>
   <th scope="col">JavaScript</th>
   <th scope="col">Java</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Orientada a objeto. Sem distinção entre tipos e objetos. A herança é feita através do protótipo e as propriedades e métodos podem ser adicionadas a qualquer objeto dinamicamente.</td>
   <td>Baseada em classes. Objetos são divididos em classes e instâncias com toda a herança através da hierarquia da classe. Classes e instâncias não podem ter propriedades ou métodos adicionados dinamicamente.</td>
  </tr>
  <tr>
   <td>
    <p>Os tipos de dados das variáveis não precisam ser declarados (tipagem dinâmica)</p>
   </td>
   <td>
    <p>Os tipos de dados das variáveis devem ser declarados (tipagem estática).</p>
   </td>
  </tr>
  <tr>
   <td>Não pode escrever automaticamente no disco rigído.</td>
   <td>Pode escrever automaticamente no disco rigído.</td>
  </tr>
  <tr>
   <td>Linguagem não compilada</td>
   <td>Linguagem compilada</td>
  </tr>
 </tbody>
</table>

<p>Para mais informações sobre as diferenças entre JavaScript e Java, veja a seção <a href="/pt-BR/docs/Web/JavaScript/Guide/Detalhes_do_Modelo_do_Objeto" title="JavaScript/Guide/Details of the Object Model">Detalhes do modelo de objetos</a>.</p>

<h2 id="JavaScript_and_the_ECMAScript_Specification" name="JavaScript_and_the_ECMAScript_Specification">JavaScript e a especificação ECMAScript</h2>

<p>O JavaScript é padronizado pela <a class="external" href="http://www.ecma-international.org/">Ecma International</a> — a associação Europeia para a padronização de sistemas de comunicação e informação (antigamente ECMA era um acrônimo para  European Computer Manufacturers Association) <span id="result_box" lang="pt"><span class="hps">para entregar</span> <span class="hps">uma linguagem de programação</span> <span class="hps">padronizada,</span> <span class="hps">internacional</span> <span class="hps">baseada em</span> <span class="hps">JavaScript.</span> <span class="hps">Esta versão</span> <span class="hps">padronizada de</span> <span class="hps">JavaScript,</span> <span class="hps">chamada</span> <span class="hps">ECMAScript</span><span>, comporta-se</span> <span class="hps">da mesma forma</span> <span class="hps">em todas as aplicações</span> <span class="hps">que suportam o padrão</span><span>.</span> <span class="hps">As empresas podem usar</span> <span class="hps">a linguagem de</span> <span class="hps">padrão aberto</span> <span class="hps">para desenvolver a sua</span> <span class="hps">implementação de</span> <span class="hps">JavaScript.</span> <span class="hps">O padrão</span> <span class="hps">ECMAScript</span> <span class="hps">é documentado </span><span class="hps">na especificação</span> <span class="hps">ECMA</span><span>-262</span><span>.</span> <span class="hps">Veja</span> <a href="/pt-BR/docs/Web/JavaScript/New_in_JavaScript">Novidades em JavaScript</a> <span class="hps">para aprender mais sobre</span> <span class="hps">diferentes versões de</span> <span class="hps">JavaScript e</span> edições da especificação <span class="hps">ECMAScript</span><span class="hps">.</span></span></p>

<p>O padrão ECMA-262 também é aprovado pela <a class="external" href="http://www.iso.ch/">ISO</a> (International Organization for Standardization) como ISO-16262. Você também pode encontrar a especificação no site da <a class="external" href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">Ecma International</a>. A especificação ECMAScript não descreve o Document Object Model (DOM), que é padronizado pelo <a class="external" href="http://www.w3.org/">World Wide Web Consortium (W3C)</a>. O DOM define a maneira na qual os objetos do documento HTML estão expostos no seu script. Para ter uma ideia melhor sobre as diferentes tecnologias que são usadas durante a programação com JavaScript, consultar o artigo <a href="/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview">Visão Geral do JavaScript</a>.</p>

<h3 id="JavaScript_Documentation_versus_the_ECMAScript_Specification" name="JavaScript_Documentation_versus_the_ECMAScript_Specification">Documentação JavaScript versus Especificação ECMAScript</h3>

<p>A especificação ECMAScript é um conjunto de requisitos para a implementação ECMAScript; é útil se você desejar implementar recursos compatíveis com os padrões da linguagem em sua implementação ECMAScript ou <em>engine</em> (como SpiderMonkey no Firefox, ou v8 no Chrome).</p>

<p>O documento ECMAScript não se destina a ajudar programadores de script; utilize a documentação JavaScript para informações sobre como escrever scripts.</p>

<p>A especificação ECMAScript utiliza terminologia e sintaxe que podem ser desconhecidos para um programador JavaScript. Embora a descrição da linguagem possa ser diferente no ECMAScript, a linguagem em si continua sendo a mesma. JavaScript suporta todas as funcionalidades descritas na especificação ECMAScript.</p>

<p>A documentação JavaScript descreve aspectos da linguagem que são apropriadas para um programador JavaScript.</p>

<h2 id="Getting_started_with_JavaScript" name="Getting_started_with_JavaScript">Começando com JavaScript</h2>

<p>Começar a aprender JavaScript é fácil: Tudo o que você precisa é de um navegador web moderno. Esse guia inclui algumas características do JavaScript que só estão disponíveis nas últimas versões do Firefox, então, é recomendável o uso de uma versão mais recente do Firefox.</p>

<p>Há duas ferramentas no Firefox que são muito úteis para aprender JavaScript: O console web e o Scratchpad.</p>

<h3 id="O_console_web">O console web</h3>

<p>O <a href="/en-US/docs/Tools/Web_Console">console web</a> mostra informações sobre a página web que está sendo carregada atualmente e também inclui a <a href="/en-US/docs/Tools/Web_Console#The_command_line_interpreter">linha de comando</a> que você pode utilizar para executar códigos JavaScript na página atual.</p>

<p>Para abrir o console (Ctrl+Shift+K), selecione "Web Console" do menu "Web Developer", que está sob o menu "Tools" no Firefox. Ele aparece na parte inferior da janela do navegador. Na parte inferior do console está a linha de comando que você pode usar para colocar o JavaScript, e a saída é exibida no painel acima:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/7363/web-console-commandline.png" style="display: block; margin-left: auto; margin-right: auto;"></p>

<h3 id="Scratchpad">Scratchpad</h3>

<p>O Web Console é excelente para executar linhas únicas de JavaScript, mas embora você possa executar várias linhas, não é muito conveniente para isso, e você não pode salvar as amostras de código usando o Web Console. Assim, para exemplos mais complexos a ferramenta <a href="/en-US/docs/Tools/Scratchpad">Scratchpad</a> é melhor.</p>

<p>Para abrir o Scratchpad (Shift+F4), selecione "Scratchpad" do menu "Web Developer", que está sob o menu "Tools/Ferramentas" do Firefox. Ele abre em uma janela separada e é um editor que você pode usar para escrever e executar JavaScript no navegador. Você também pode salvar os scripts para o disco e carregá-los a partir do disco.  </p>

<p><img alt="" src="https://mdn.mozillademos.org/files/7365/scratchpad.png" style="display: block; margin-left: auto; margin-right: auto;"></p>

<h3 id="Hello_world">Hello world</h3>

<p>Para começar a escrever JavaScript, abra o Console Web ou o Scratchpad e escreva seu primeiro código JavaScript "Olá, mundo". </p>

<pre class="brush: js">function greetMe(nome) {
  alert("Olá, " + nome);
}

greetMe("mundo"); // "Olá, mundo"
</pre>

<p>Logo após, pressione Ctrl+R para executar o código em seu navegador.</p>

<p>Nas páginas seguintes, este guia irá apresentar-lhe a sintaxe e as características da linguagem JavaScript, de modo que você possa escrever aplicações mais complexas.</p>

<p>{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}</p>
