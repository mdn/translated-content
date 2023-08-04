---
title: WebAssembly
slug: WebAssembly
---

{{WebAssemblySidebar}}{{SeeCompatTable}}

O WebAssembly é um novo tipo de código que pode ser executado em browsers modernos — se trata de uma linguagem de baixo nível como assembly, com um formato binário compacto que executa com performance quase nativa e que fornece um novo alvo de compilação para linguagens como C/C++, para que possam ser executadas na web. Também foi projetado para executar em conjunto com o JavaScript, permitindo que ambos trabalhem juntos.

## Em poucas palavras

O WebAssembly tem enormes aplicações para a plataforma web — ele irá fornecer uma maneira de executar na web código escrito em diversas linguagens em velocidade quase nativa, com apps que não conseguiriam fazer isso antes.

O WebAssembly foi projetado para complementar e executar lado a lado com JavaScript — usando as APIs JavaScript do WebAssembly, você pode carregar módulos WebAssembly em um aplicativo JavaScript e compartilhar funcionalidade entre ambos. Isso permite que você aproveite o desempenho e poder da WebAssembly e a expressividade e flexibilidade do JavaScript nos mesmos aplicativos, mesmo que você não saiba como escrever código de WebAssembly.

E o que é ainda melhor é que ele está sendo desenvolvido como um padrão web através da [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) com participantes ativos de todos os principais fornecedores de browsers.

## Guias

- [Conceitos WebAssembly](/pt-BR/docs/WebAssembly/Concepts)
  - : Comece lendo os conceitos de alto nível por trás do WebAssembly - o que é, por que é tão útil, como ele se encaixa na plataforma web e como usá-lo.
- [Compilando C/C++ para WebAssembly](/pt-BR/docs/WebAssembly/C_to_wasm)
  - : Quando você escreve o código em C/C++, você pode então compilá-lo em .wasm usando uma ferramenta como [Emscripten](/pt-BR/docs/Mozilla/Projects/Emscripten/). Veja como isso funciona.
- [Carregando e executando código WebAssembly](/pt-BR/docs/WebAssembly/Loading_and_running)
  - : Depois de ter um .wasm, este artigo aborda como buscá-lo, compilá-lo e instanciá-lo, combinando a API [JavaScript WebAssembly](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly)como [Obter](/pt-BR/docs/Web/API/Fetch_API) ou APIs [XHR.](/pt-BR/docs/Web/API/XMLHttpRequest)
- [Compilando módulos de WebAssembly no cache](/pt-BR/docs/WebAssembly/Caching_modules)
  - : O cache de grandes módulos WebAssembly no cliente é útil para melhorar o desempenho da inicialização do aplicativo. Este artigo explica como usar isso usando [IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API).
- [Usando a API JavaScript do WebAssembly](/pt-BR/docs/WebAssembly/Using_the_JavaScript_API)
  - : Depois de carregar um módulo .wasm, você vai querer usá-lo. Neste artigo, mostramos como usar a WebAssembly através da API JavaScript da WebAssembly.
- [Exportando funções de WebAssembly](/pt-BR/docs/WebAssembly/Exported_functions)
  - : Funções WebAssembly exportadas são as reflexões de JavaScript das funções da WebAssembly e permitem chamar o código WebAssembly do JavaScript. Este artigo descreve o que são.
- [Compreendendo o formato de texto do WebAssembly](/pt-BR/docs/WebAssembly/Understanding_the_text_format)
  - : Este artigo explica o formato de texto wasm. Esta é a representação textual de baixo nível de um módulo .wasm mostrado nas ferramentas de desenvolvedor do navegador ao depurar.
- [Convertendo o formato de texto do WebAssembly para o wasm](/pt-BR/docs/WebAssembly/Text_format_to_wasm)
  - : Este artigo fornece um guia sobre como converter um módulo WebAssembly escrito no formato de texto em um binário .wasm.

## Referência da API

- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : Este objeto atua como o espaço para todas as funcionalidade relacionada à WebAssembly.
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module")}}
  - : A `WebAssembly.Module` o objeto contém o código da WebAssembly sem estado que já foi compilado pelo navegador e pode ser eficientemente [compartilhado com os trabalhos](/pt-BR/docs/Web/API/Worker/postMessage), [armazenados em cache no IndexedDB](</pt-BR/docs /WebAssembly/Caching_modules>), e instanciados várias vezes.
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance")}}
  - : A `WebAssembly.Instance` o objeto é uma instância executável e estável de um `Módulo`. Os objetos `Instanciados` contêm todas as [funções de WebAssembly exportadas](/pt-BR/docs/WebAssembly/Exported_functions)que permitem chamar o código WebAssembly do JavaScript.
- {{jsxref("Global_objects/WebAssembly/instantiate", "WebAssembly.instantiate()")}}
  - : The `WebAssembly.instantiate()` a função é a API primária para compilar e instanciar o código WebAssembly, retornando um `Module` e sua primeira `instância`.
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : Em `WebAssembly`. O objeto `Memory` é redimensionável {{jsxref ("Global_objects / ArrayBuffer","ArrayBuffer")}} que detém os bytes de memória invocados por uma `instância` de código.
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : Em `WebAssembly`. O objeto `Table` é uma matriz redimensionável de valores opacos, como referências de funções, acessadas por uma `instância` de código.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Cria um novo objeto WebAssembly `CompileError`.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Cria um novo objeto WebAssembly `LinkError`.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Cria um novo objeto WebAssembly `RuntimeError`.

## Exemplos

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Consulte nosso [webassembly-examples](https://github.com/mdn/webassembly-examples/) para outros exemplos.

## Especificações

| Especificações                 | Status                      | Comentários                                        |
| ------------------------------ | --------------------------- | -------------------------------------------------- |
| {{SpecName('WebAssembly JS')}} | {{Spec2('WebAssembly JS')}} | Definição inicial do projeto da API do JavaScript. |

## Compatibilidade do navegador

{{Compat("javascript.builtins.WebAssembly")}}

## Veja também

- [webassembly.org](http://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Large-Allocation HTTP header](/pt-BR/docs/Web/HTTP/Headers/Large-Allocation)
