---
title: Conceitos do WebAssembly
slug: WebAssembly/Concepts
---

{{WebAssemblySidebar}}

Este artigo explica os conceitos por trás de como o WebAssembly funciona, incluindo seus objetivos, os problemas que ele resolve e como ele roda dentro do mecanismo de renderização de um browser.

## O que é WebAssembly?

WebAssembly é um novo tipo de código que pode ser executado nos browsers modernos e fornece novas carecterísticas e maiores ganhos em performance. Ele não foi pensado incialmente para ser escrito à mão, ao contrário, foi pensado para ser um compilador-alvo eficiente para linguagens de baixo nível como C, C++, Rust, etc.

Ele possui implicações enormes para a plataforma web — ele fornece um caminho para executar códigos escritos em múltiplas linguagens na web, com velocidades próximas às das linguagens nativas com apps sendo executados na web, onde antes não era possível.

Além disso, você não precisa saber como criar código WebAssembly para tirar vantagem dele. Os módulos WebAssembly podem ser importados num app web (ou Node.js), expondo funções do WebAssembly para uso via JavaScript. Os frameworks de JavaScript poderiam usar o WebAssembly para conseguir enormes vantagens de performance e novas características enquanto disponibiliza funcionalidades aos desenvolvedores web.

## Objetivos do WebAssembly

WebAssembly está sendo criado em código aberto dentro do [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) com os seguintes objetivos:

- Ser rápido, eficiente e móvel — o código WebAssembly pode ser executado a velocidades próximas de nativas entre diferentes plataformas, tirando vantagem das [capacidades comuns de hardware](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution).
- Ser compreensível e debuggable — WebAssembly é uma linguagem assembly de baixo nível, mas ela tem um formato de texto compreensível para os humanos (especificação pela qual ainda está sendo finalizado) que permite que o código seja escrito, visto e debugado à mão.
- Manter a segurança — WebAssembly é especificado para ser executado num ambiente seguro e controlado. Como outros códigos web, ele reforçará as mesmas políticas de origem e permissões dos browsers.
- Não quebrar a web — WebAssembly foi pensado de maneira que ele seja executado em harmonia com outras tecnologias web, mantendo a compatibilidade retroativa.

> **Nota:** WebAssembly também terá usos fora dos ambientes web e JavaScript (veja [Non-web embeddings](http://webassembly.org/docs/non-web/)).

## Como o WebAssembly se encaixa na plataforma web?

A plataforma web pode ser dividida em duas partes:

- Uma máquina virtual (VM) que executa o código de uma aplicação Web, por exemplo códigos JavaScript que enriquecem suas aplicações.
- Um conjunto de [Web APIs](/pt-BR/docs/Web/API) que um Web app pode invocar para controlar funcionalidades web browser/device (dispositivo) e fazer as coisas acontecerem ([DOM](/pt-BR/docs/Web/API/Document_Object_Model), [CSSOM](/pt-BR/docs/Web/API/CSS_Object_Model), [WebGL](/pt-BR/docs/Web/API/WebGL_API), [IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API), [Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API), etc.).

Historicamente, a VM tem tido permissão para carregar apenas JavaScript. Isto tem funcionado bem para nós, já que o JavaScript é poderoso o suficiente para resolver a maioria dos problemas da Web atualmente. No entanto, temos enfrentado problemas de performance, quando tentamos usar o JavaScript para tarefas mais intensivas como games em 3D, realidades virtual e aumentada, visão de computador, edição de imagens ou videos e um sem número de outros domínios que demandam performance nativa (veja [Casos de uso WebAssembly](http://webassembly.org/docs/use-cases/) para mais ideias).

Adicionalmente, o custo de baixar, parsear e compilar aplicações JavaScript muito grandes, é proibitivo. Plataformas mobile e outras de recursos restritos, podem ampliar ainda mais estes gargalos de performance.

WebAssembly é uma linguagem diferente do JavaScript, mas não foi pensada para ser sua substituta. Ao contrário, foi pensada para complementar e trabalhar lado a lado com o JavaScript, permitindo aos desenvolvedores web tirarem vantagem dos pontos fortes das duas linguagens:

- JavaScript é uma linguagem de alto nível, flexível e expressiva o suficiente para escrever aplicações web. Ela tem muitas vantagens — é dinamicamente tipada, não ncessita ser compilada e tem um enorme ecossistema que disponibiliza poderosos frameworks, bibliotecas (libs) e outros recursos.
- WebAssembly é uma linguagem de baixo nível do tipo assembly com um formato binário compacto, que é executado com performance próximo à nativa, que disponibiliza linguagens com modelos de memória de baixo nível como C++ e Rust, com uma compilação-alvo, assim podendo ser executados na web. (Note que o WebAssembly tem uma [meta futura de suporte de alto nível](http://webassembly.org/docs/high-level-goals/) para linguagens com modelos de memória garbage-collected.)

Com o advento do WebAssembly nos browsers, a máquina virtual a que nos referimos antes, vai carregar e executar dois tipos de código — JavaScript E WebAssembly.

Os diferentes tipos de códigos podem invocar um ao outro conforme necessário — o [WebAssembly JavaScript API](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) encapsula código WebAssembly exportado com funções JavaScript que podem ser invocados normalmente, e código WebAssembly pode importar de forma síncrona, funções normais de JavaScript. Na verdade, a unidade básica do código WebAssembly é chamado de módulo, e módulos WebAssembly são semelhantes em vários níveis aos módulos de ES2015.

### Conceitos-chave do WebAssembly

Existem diversos conceitos-chave que precisam ser compreendidos, sobre como o WebAssembly é executado no browser. Todos estes conceitos são refletidos 1:1 na [WebAssembly JavaScript API](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly).

- **Módulo**: Representa o binário do WebAssembly que foi compilado pelo browser, em código executável pela máquina. Um módulo não tem estado e, tal qual um [Blob](/pt-BR/docs/Web/API/Blob), pode ser explicitamente compartilhado entre janelas e workers (via [`postMessage()`](/pt-BR/docs/Web/API/MessagePort/postMessage)). Um Módulo declara imports e exports, assim com um módulo ES2015.
- **Memória**: Um ArrayBuffer redimensionável que contém um array linear de bytes, lidos e escritos pelas intruções de memória de baixo nível do WebAssembly.
- **Tabela**: Um array tipado de referências redimensionável (por exemplo para funções) que, em outra situação, não poderia ser armazenado como bytes puros na Memória (por questões de segurança e portabilidade).
- **Instância**: Um Módulo pareado com todo o estado utilizado durante a execução, incluindo uma Memória, Tabela e um conjunto de valores importados. Uma Instância é como um módulo ES2015 que foi carregado em um global específico com um conjunto de importações específico.

A API JavaScript disponibiliza aos desenvolvedores a habilidade de criar módulos, memórias, tabelas e instâncias. Dada uma instância WebAssembly, o código JavaScript pode, de forma síncrona, invocar seus exports, os quais são expostos como funções normais de JavaScript. Funções arbitrárias de JavaScript também podem ser invocadas de forma síncrona pelo código WebAssembly, sendo passados nestas funções JavaScript como imports para um instância WebAssembly.

Uma vez que o JavaScript tem controle total sobre como o código WebAssembly é carregado, compilado e executado, desenvolvedores JavaScript poderiam até pensar no WebAssembly como apenas uma ferramenta do JavaScript, para geração de funções de alta performance de forma eficiente.

No futuro, módulos WebAssembly serão carregáveis assim como [módulos ES2015](https://github.com/WebAssembly/proposals/issues/12) (usando `<script type='module'>`), o que quer dizer que o JavaScript será capaz de buscar, compilar e importar um módulo WebAssembly tão facilmente quanto um módulo ES2015.

## Como eu utilizo o WebAssembly em minha aplicação?

Acima nós falamos sobre primitivas puras que o WebAssembly adiciona à plataforma Web: um formato binário para código e APIs para carregar e executar esse código binário. Agora vamos falar sobre como nós podemos utilizar estas primitivas na prática.

O ecossistema do WebAssembly está em seu estado inicial: sem dúvidas, mais ferramentas vão aparecer. Neste momento, existem quatro pontos de entrada principais:

- Portando uma aplicação C/C++ com [Emscripten](/pt-BR/docs/Mozilla/Projects/Emscripten).
- Escrevendo ou gerando WebAssembly diretamente no nível do assembly.
- Escrevendo uma aplicação Rust e definindo WebAssembly como seu output.
- Usando [AssemblyScript](https://docs.assemblyscript.org/) que se parece com TypeScript e compila ao binário WebAssembly.

Vamos falar sobre estas opções:

### Portando a partir de C/C++

Duas das muitas opções para criar códigos WASM, são um assembler wasm online ou [Emscripten](/pt-BR/docs/Mozilla/Projects/Emscripten). Existem algumas opções de assembler wasm online, como:

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddle/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Estes são excelentes recursos para pessoas que estão tentando descobrir por onde começar, mas não possuem as otimizações e ferramentas do Emscripten.

A ferramenta Emscripten é capaz de pegar qualquer código fonte C/C++ e compilá-lo para um módulo .wasm, além da "cola" JavaScript necessária para carregar e executar o módulo, e um documento HTML para exibir os resultados do código.

![](emscripten-diagram.png)

De maneira resumida, o processo funciona da seguinte maneira:

1. Emscripten primeiro alimenta o C/C++ no clang+LLVM — um maduro compilador C/C++, enviado como parte do Xcode do OSX, por exemplo.
2. Emscripten transforma o resultado compilado do clang+LLVM em um binário .wasm
3. Por si só, o WebAssembly atualmente não pode acessar diretamente o DOM; ele só pode chamar o JavaScript, transmitindo tipos de dados primitivos de ponto flutuante e inteiro. Portanto, para acessar qualquer API da Web, o WebAssembly precisa chamar o JavaScript, que faz a chamada da API da Web. Portanto, o Emscripten cria o código de "cola" HTML e JavaScript necessário para alcançar isso.

> **Nota:** Existem planos futuros para [permitir o WebAssembly chamar APIs Web diretamente](https://github.com/WebAssembly/gc/blob/master/README.md).

O código de "cola" JavaScript não é tão simples quanto você imagina. Para começar, o Emscripten implementa bibliotecas populares de C/C++ como SDL, OpenGL, OpenAL e partes do POSIX. Essas bibliotecas são implementadas em termos de APIs da Web e, portanto, cada uma exige algum código JavaScript para conectar o WebAssembly à API da Web subjacente.

Portanto, parte do código está implementando a funcionalidade de cada biblioteca respectiva usada pelo código C/C ++. O código de "cola" também contém a lógica para chamar as APIs JavaScript do WebAssembly mencionadas acima para buscar, carregar e executar o arquivo .wasm.

O documento HTML gerado carrega o arquivo JavaScript e grava stdout em um {{htmlelement("textarea")}}. Se o aplicativo usar OpenGL, o HTML também conterá um elemento {{htmlelement("canvas")}} usado como destino de renderização. É muito fácil modificar a saída do Emscripten e transformá-la em qualquer aplicativo da web que você precisar.

Você pode encontrar a documentação completa em Emscripten em [emscripten.org](http://emscripten.org), e um guia para implementar a cadeia de ferramentas e compilar seu próprio aplicativo C/C ++ no wasm em [Compiling from C/C++ to WebAssembly](/pt-BR/docs/WebAssembly/C_to_wasm).

### Escrevendo WebAssembly diretamente

Deseja criar seu próprio compilador, ou suas próprias ferramentas, ou criar uma biblioteca JavaScript que gere o WebAssembly em tempo de execução?

Da mesma maneira que as linguagens assembly físicas, o formato binário do WebAssembly tem uma representação de texto — os dois têm uma correspondência 1:1. Você pode escrever ou gerar esse formato manualmente e depois convertê-lo no formato binário com qualquer uma das várias [WebAssemby text-to-binary tools](http://webassembly.org/getting-started/advanced-tools/).

Para um guia simples de como fazer isso, consulte o artigo [Converting WebAssembly text format to wasm](/pt-BR/docs/WebAssembly/Text_format_to_wasm).

### Escrevendo em Rust mirando WebAssembly

Também é possível escrever o código Rust e compilar para WebAssembly, graças ao trabalho incansável do Rust WebAssembly Working Group. Você pode começar a instalar a cadeia de ferramentas necessária, compilar um programa Rust de amostra em um pacote npm do WebAssembly e usá-lo em um aplicativo web de amostra, no artigo [Compiling from Rust to WebAssembly](/pt-BR/docs/WebAssembly/Rust_to_wasm).

### Usando AssemblyScript

Para desenvolvedores web que quereem testar o WebAssembly sem a necessidade de abrende detalhes de C ou Rust, AssemblyScript irá sem a melhor opção. Ele gera um pequeno bundle e seu desempenho é um pouco mais lento comparado a C ou Rust. Você pode conferir sua documentação em <https://docs.assemblyscript.org/>.

## Sumário

Este artigo apresentou a você uma explicação sobre o que é o WebAssembly, porque ele é tão útil, como ele se encaixa na web e como você pode se utilizar dele.

## Veja também

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Loading and running WebAssembly code](/pt-BR/docs/WebAssembly/Loading_and_running) — descubra como carregar seu próprio módulo WebAssembly numa página web.
- [Using the WebAssembly JavaScript API](/pt-BR/docs/WebAssembly/Using_the_JavaScript_API) — descubra como utilizar outras características importantes do WebAssembly JavaScript API.
