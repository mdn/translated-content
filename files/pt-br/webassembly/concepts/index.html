---
title: Conceitos do WebAssembly
slug: WebAssembly/Concepts
tags:
  - conceitos
  - plataforma web
translation_of: WebAssembly/Concepts
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">Este artigo explica os conceitos por trás de como o WebAssembly funciona, incluindo seus objetivos, os problemas que ele resolve e como ele roda dentro do mecanismo de renderização de um browser.</p>

<h2 id="O_que_é_WebAssembly">O que é WebAssembly?</h2>

<p>WebAssembly é um novo tipo de código que pode ser executado nos browsers modernos e fornece novas carecterísticas e maiores ganhos em performance. Ele não foi pensado incialmente para ser escrito à mão, ao contrário, foi pensado para ser um compilador-alvo eficiente para linguagens de baixo nível como C, C++, Rust, etc.</p>

<p>Ele possui implicações enormes para a plataforma web — ele fornece um caminho para executar códigos escritos em múltiplas linguagens na web, com velocidades próximas às das linguagens nativas com apps sendo executados na web, onde antes não era possível.</p>

<p>Além disso, você não precisa saber como criar código WebAssembly para tirar vantagem dele. Os módulos WebAssembly podem ser importados num app web (ou Node.js), expondo funções do WebAssembly para uso via JavaScript. Os frameworks de JavaScript poderiam usar o WebAssembly para conseguir enormes vantagens de performance e novas características enquanto disponibiliza funcionalidades aos desenvolvedores web.</p>

<h2 id="Objetivos_do_WebAssembly">Objetivos do WebAssembly</h2>

<p>WebAssembly está sendo criado em código aberto dentro do <a href="https://www.w3.org/community/webassembly/">W3C WebAssembly Community Group</a> com os seguintes objetivos:</p>

<ul>
 <li>Ser rápido, eficiente e móvel — o código WebAssembly pode ser executado a velocidades próximas de nativas entre diferentes plataformas, tirando vantagem das <a href="http://webassembly.org/docs/portability/#assumptions-for-efficient-execution">capacidades comuns de hardware</a>.</li>
 <li>Ser compreensível e debuggable — WebAssembly é uma linguagem assembly de baixo nível, mas ela tem um formato de texto compreensível para os humanos (especificação pela qual ainda está sendo finalizado) que permite que o código seja escrito, visto e debugado à mão.</li>
 <li>Manter a segurança — WebAssembly é especificado para ser executado num ambiente seguro e controlado. Como outros códigos web, ele reforçará as mesmas políticas de origem e permissões dos browsers.</li>
 <li>Não quebrar a web — WebAssembly foi pensado de maneira que ele seja executado em harmonia com outras tecnologias web, mantendo a compatibilidade retroativa.</li>
</ul>

<div class="note">
<p><strong>Nota</strong>: WebAssembly também terá usos fora dos ambientes web e JavaScript (veja <a href="http://webassembly.org/docs/non-web/">Non-web embeddings</a>).</p>
</div>

<h2 id="Como_o_WebAssembly_se_encaixa_na_plataforma_web">Como o WebAssembly se encaixa na plataforma web?</h2>

<p>A plataforma web pode ser dividida em duas partes:</p>

<ul>
 <li>Uma máquina virtual (VM) que executa o código de uma aplicação Web, por exemplo códigos JavaScript que enriquecem suas aplicações.</li>
 <li>Um conjunto de <a href="/en-US/docs/Web/API">Web APIs</a> que um Web app pode invocar para controlar funcionalidades web browser/device (dispositivo) e fazer as coisas acontecerem (<a href="/en-US/docs/Web/API/Document_Object_Model">DOM</a>, <a href="/en-US/docs/Web/API/CSS_Object_Model">CSSOM</a>, <a href="/en-US/docs/Web/API/WebGL_API">WebGL</a>, <a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a>, <a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a>, etc.).</li>
</ul>

<p>Historicamente, a VM tem tido permissão para carregar apenas JavaScript. Isto tem funcionado bem para nós, já que o JavaScript é poderoso o suficiente para resolver a maioria dos problemas da Web atualmente. No entanto, temos enfrentado problemas de performance, quando tentamos usar o JavaScript para tarefas mais intensivas como games em 3D, realidades virtual e aumentada, visão de computador, edição de imagens ou videos e um sem número de outros domínios que demandam performance nativa (veja <a href="http://webassembly.org/docs/use-cases/">Casos de uso WebAssembly</a> para mais ideias).</p>

<p>Adicionalmente, o custo de baixar, parsear e compilar aplicações JavaScript muito grandes, é proibitivo. Plataformas mobile e outras de recursos restritos, podem ampliar ainda mais estes gargalos de performance.</p>

<p>WebAssembly é uma linguagem diferente do JavaScript, mas não foi pensada para ser sua substituta. Ao contrário, foi pensada para complementar e trabalhar lado a lado com o JavaScript, permitindo aos desenvolvedores web tirarem vantagem dos pontos fortes das duas linguagens:</p>

<ul>
 <li>JavaScript é uma linguagem de alto nível, flexível e expressiva o suficiente para escrever aplicações web. Ela tem muitas vantagens — é dinamicamente tipada, não ncessita ser compilada e tem um enorme ecossistema que disponibiliza poderosos frameworks, bibliotecas (libs) e outros recursos.</li>
 <li>WebAssembly é uma linguagem de baixo nível do tipo assembly com um formato binário compacto, que é executado com performance próximo à nativa, que disponibiliza linguagens com modelos de memória de baixo nível como C++ e Rust, com uma compilação-alvo, assim podendo ser executados na web. (Note que o WebAssembly tem uma <a href="http://webassembly.org/docs/high-level-goals/">meta futura de suporte de alto nível</a> para linguagens com modelos de memória garbage-collected.)</li>
</ul>

<p>Com o advento do WebAssembly nos browsers, a máquina virtual a que nos referimos antes, vai carregar e executar dois tipos de código — JavaScript E WebAssembly.</p>

<p>Os diferentes tipos de códigos podem invocar um ao outro conforme necessário — o <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly">WebAssembly JavaScript API</a> encapsula código WebAssembly exportado com funções JavaScript que podem ser invocados normalmente, e código WebAssembly pode importar de forma síncrona, funções normais de JavaScript. Na verdade, a unidade básica do código WebAssembly é chamado de módulo, e módulos WebAssembly são semelhantes em vários níveis aos módulos de ES2015.</p>

<h3 id="Conceitos-chave_do_WebAssembly">Conceitos-chave do WebAssembly</h3>

<p>Existem diversos conceitos-chave que precisam ser compreendidos, sobre como o WebAssembly é executado no browser. Todos estes conceitos são refletidos 1:1 na <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly">WebAssembly JavaScript API</a>.</p>

<ul>
 <li><strong>Módulo</strong>: Representa o binário do WebAssembly que foi compilado pelo browser, em código executável pela máquina. Um módulo não tem estado e, tal qual um <a href="/en-US/docs/Web/API/Blob">Blob</a>, pode ser explicitamente compartilhado entre janelas e workers (via <code><a href="/en-US/docs/Web/API/MessagePort/postMessage">postMessage()</a></code>). Um Módulo declara imports e exports, assim com um módulo ES2015.</li>
 <li><strong>Memória</strong>: Um ArrayBuffer redimensionável que contém um array linear de bytes, lidos e escritos pelas intruções de memória de baixo nível do WebAssembly.</li>
 <li><strong>Tabela</strong>: Um array tipado de referências redimensionável (por exemplo para funções) que, em outra situação, não poderia ser armazenado como bytes puros na Memória (por questões de segurança e portabilidade).</li>
 <li><strong>Instância</strong>: Um Módulo pareado com todo o estado utilizado durante a execução, incluindo uma Memória, Tabela e um conjunto de valores importados. Uma Instância é como um módulo ES2015 que foi carregado em um global específico com um conjunto de importações específico.</li>
</ul>

<p>A API JavaScript disponibiliza aos desenvolvedores a habilidade de criar módulos, memórias, tabelas e instâncias. Dada uma instância WebAssembly, o código JavaScript pode, de forma síncrona, invocar seus exports, os quais são expostos como funções normais de JavaScript. Funções arbitrárias de JavaScript também podem ser invocadas de forma síncrona pelo código WebAssembly, sendo passados nestas funções JavaScript como imports para um instância WebAssembly.</p>

<p>Uma vez que o JavaScript tem controle total sobre como o código WebAssembly é carregado, compilado e executado, desenvolvedores JavaScript poderiam até pensar no WebAssembly como apenas uma ferramenta do JavaScript, para geração de funções de alta performance de forma eficiente.</p>

<p>No futuro, módulos WebAssembly serão carregáveis assim como <a href="https://github.com/WebAssembly/proposals/issues/12">módulos ES2015</a> (usando <code>&lt;script type='module'&gt;</code>), o que quer dizer que o JavaScript será capaz de buscar, compilar e importar um módulo WebAssembly tão facilmente quanto um módulo ES2015.</p>

<h2 id="Como_eu_utilizo_o_WebAssembly_em_minha_aplicação">Como eu utilizo o WebAssembly em minha aplicação?</h2>

<p>Acima nós falamos sobre primitivas puras que o WebAssembly adiciona à plataforma Web: um formato binário para código e APIs para carregar e executar esse código binário. Agora vamos falar sobre como nós podemos utilizar estas primitivas na prática.</p>

<p>O ecossistema do WebAssembly está em seu estado inicial: sem dúvidas, mais ferramentas vão aparecer. Neste momento, existem quatro pontos de entrada principais: </p>

<ul>
 <li>Portando uma aplicação C/C++ com <a href="/en-US/docs/Mozilla/Projects/Emscripten">Emscripten</a>.</li>
 <li>Escrevendo ou gerando WebAssembly diretamente no nível do assembly.</li>
 <li>Escrevendo uma aplicação Rust e definindo WebAssembly como seu output.</li>
 <li>Usando <a href="https://docs.assemblyscript.org/">AssemblyScript</a> que se parece com TypeScript e compila ao binário WebAssembly.</li>
</ul>

<p>Vamos falar sobre estas opções:</p>

<h3 id="Portando_a_partir_de_CC">Portando a partir de C/C++</h3>

<p>Duas das muitas opções para criar códigos WASM, são um assembler wasm online ou <a href="/en-US/docs/Mozilla/Projects/Emscripten">Emscripten</a>. Existem algumas opções de assembler wasm online, como:</p>

<ul>
 <li><a href="https://wasdk.github.io/WasmFiddle/">WasmFiddle</a></li>
 <li><a href="https://anonyco.github.io/WasmFiddle/">WasmFiddle++</a></li>
 <li><a href="https://mbebenita.github.io/WasmExplorer/">WasmExplorer</a></li>
</ul>

<p>Estes são excelentes recursos para pessoas que estão tentando descobrir por onde começar, mas não possuem as otimizações e ferramentas do Emscripten.</p>

<p>A ferramenta Emscripten é capaz de pegar qualquer código fonte C/C++ e compilá-lo para um módulo .wasm, além da "cola" JavaScript necessária para carregar e executar o módulo, e um documento HTML para exibir os resultados do código.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14647/emscripten-diagram.png" style="display: block; height: 104px; margin: 0px auto; width: 764px;"></p>

<p>De maneira resumida, o processo funciona da seguinte maneira:</p>

<ol>
 <li><span id="docs-internal-guid-40340921-7fff-385f-85d0-d4ec1fd0e64e" style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Emscripten primeiro alimenta o C/C++ no clang+LLVM — um maduro compilador C/C++, enviado como parte do Xcode do OSX, por exemplo.</span></li>
 <li dir="ltr" style="list-style-type: decimal; font-size: 12pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;">
  <p dir="ltr" style="line-height: 1.5; margin-top: 10pt; margin-bottom: 10pt;"><span style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Emscripten transforma o resultado compilado do clang+LLVM em um binário .wasm</span></p>
 </li>
 <li dir="ltr" style="list-style-type: decimal; font-size: 12pt; font-family: Arial; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;">
  <p dir="ltr" style="line-height: 1.5; margin-top: 10pt; margin-bottom: 10pt;"><span style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Por si só, o WebAssembly atualmente não pode acessar diretamente o DOM; ele só pode chamar o JavaScript, transmitindo tipos de dados primitivos de ponto flutuante e inteiro. Portanto, para acessar qualquer API da Web, o WebAssembly precisa chamar o JavaScript, que faz a chamada da API da Web. Portanto, o Emscripten cria o código de “cola” HTML e JavaScript necessário para alcançar isso.</span></p>
 </li>
</ol>

<div class="note">
<p><strong>Nota</strong>: Existem planos futuros para <a href="https://github.com/WebAssembly/gc/blob/master/README.md">permitir o WebAssembly chamar APIs Web diretamente</a>.</p>
</div>

<p><span style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">O código de "cola" JavaScript não é tão simples quanto você imagina. Para começar, o Emscripten implementa bibliotecas populares de C/C++ como SDL, OpenGL, OpenAL e partes do POSIX. Essas bibliotecas são implementadas em termos de APIs da Web e, portanto, cada uma exige algum código JavaScript para conectar o WebAssembly à API da Web subjacente.</span></p>

<p dir="ltr" id="docs-internal-guid-052eef79-7fff-abe5-b985-780a26b0c1fe" style="line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;"><span style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Portanto, parte do código está implementando a funcionalidade de cada biblioteca respectiva usada pelo código C/C ++. O código de “cola” também contém a lógica para chamar as APIs JavaScript do WebAssembly mencionadas acima para buscar, carregar e executar o arquivo .wasm.</span></p>

<p dir="ltr" style="line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;"></p>

<p dir="ltr" style="line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;"><span style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">O documento HTML gerado carrega o arquivo JavaScript e grava stdout em um </span>{{htmlelement("textarea")}}<span style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">. Se o aplicativo usar OpenGL, o HTML também conterá um elemento </span>{{htmlelement("canvas")}}<span style="background-color: transparent; color: #000000; font-family: Arial; font-size: 12pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> usado como destino de renderização. É muito fácil modificar a saída do Emscripten e transformá-la em qualquer aplicativo da web que você precisar.</span></p>

<p dir="ltr" style="line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;"></p>

<p>Você pode encontrar a documentação completa em Emscripten em <a href="http://emscripten.org">emscripten.org</a>, e um guia para implementar a cadeia de ferramentas e compilar seu próprio aplicativo C/C ++ no wasm em <a href="https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm">Compiling from C/C++ to WebAssembly</a>.</p>

<h3 id="Escrevendo_WebAssembly_diretamente">Escrevendo WebAssembly diretamente</h3>

<p>Deseja criar seu próprio compilador, ou suas próprias ferramentas, ou criar uma biblioteca JavaScript que gere o WebAssembly em tempo de execução?</p>

<p>Da mesma maneira que as linguagens assembly físicas, o formato binário do WebAssembly tem uma representação de texto — os dois têm uma correspondência 1:1. Você pode escrever ou gerar esse formato manualmente e depois convertê-lo no formato binário com qualquer uma das várias <a href="http://webassembly.org/getting-started/advanced-tools/">WebAssemby text-to-binary tools</a>.</p>

<p>Para um guia simples de como fazer isso, consulte o artigo <a href="/en-US/docs/WebAssembly/Text_format_to_wasm">Converting WebAssembly text format to wasm</a>.</p>

<h3 id="Escrevendo_em_Rust_mirando_WebAssembly">Escrevendo em Rust mirando WebAssembly</h3>

<p>Também é possível escrever o código Rust e compilar para WebAssembly, graças ao trabalho incansável do Rust WebAssembly Working Group. Você pode começar a instalar a cadeia de ferramentas necessária, compilar um programa Rust de amostra em um pacote npm do WebAssembly e usá-lo em um aplicativo web de amostra, no artigo <a href="/en-US/docs/WebAssembly/Rust_to_wasm">Compiling from Rust to WebAssembly</a>.</p>

<h3 id="Usando_AssemblyScript">Usando AssemblyScript</h3>

<p>Para desenvolvedores web que quereem testar o WebAssembly sem a necessidade de abrende detalhes de C ou Rust, AssemblyScript irá sem a melhor opção. Ele gera um pequeno bundle e seu desempenho é um pouco mais lento comparado a C ou Rust. Você pode conferir sua documentação em <a href="https://docs.assemblyscript.org/">https://docs.assemblyscript.org/</a>.</p>

<h2 id="Sumário">Sumário</h2>

<p>Este artigo apresentou a você uma explicação sobre o que é o WebAssembly, porque ele é tão útil, como ele se encaixa na web e como você pode se utilizar dele.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/category/webassembly/">WebAssembly articles on Mozilla Hacks blog</a></li>
 <li><a href="https://research.mozilla.org/webassembly/">WebAssembly on Mozilla Research</a></li>
 <li><a href="/en-US/docs/WebAssembly/Loading_and_running">Loading and running WebAssembly code</a> — descubra como carregar seu próprio módulo WebAssembly numa página web.</li>
 <li><a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly JavaScript API</a> — descubra como utilizar outras características importantes do WebAssembly JavaScript API.</li>
</ul>
