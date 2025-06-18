---
title: Ferramentas para o desenvolvimento de jogos
slug: Games/Tools
---

{{GamesSidebar}}

Nesta página você pode encontrar links para a nossa ferramenta de desenvolvimento de jogos, artigos, os quais eventualmente abrangem frameworks, compiladores, e ferramentas de debug.

- [asm.js](/pt-BR/docs/Games/Tools/asm.js)
  - : Asm.js é um subconjunto muito limitado da linguagem JavaScript, que pode ser muito otimizado e executado em ahead-of-time (AOT) como motor de compilação para um desempenho muito mais rápido do que o seu desempenho JavaScript típico. Isto é, naturalmente, ótimo para jogos.
- [Emscripten](https://github.com/kripken/emscripten/wiki)
  - : Um compilador LLVM para JavaScript; com Emscripten, você pode compilar C++ e outras linguagens que podem compilar para bytecode LLVM em JavaScript de alto desempenho.Esta é uma ótima ferramenta para portar aplicativos para a Web! Há um [tutorial útil de Emscripten](https://github.com/kripken/emscripten/wiki/Tutorial) disponível na wiki. Note que estamos [cobrir o Emscripten em sua própria seção de MDN](/pt-BR/docs/Emscripten).
- [Gecko profiler](https://addons.mozilla.org/en-us/firefox/addon/gecko-profiler/)

  - : The Gecko profiler extension lets you profile your code to help figure out where your performance issues are so that you can make your game run at top speed

    A extensão Gecko profiler permite que você recorte seu código para ajudar a descobrir onde seus problemas de desempenho de modo a poder fazer o seu jogo executar em alta velocidade.

- [Motores de jogos e ferramentas](/pt-BR/docs/Games/Tools/Engines_and_tools)
  - : Uma lista de engines, templates e tecnologias úteis pare desenvolvedores de jogos.
- [Shumway](/pt-BR/docs/Mozilla/Projects/Shumway)
  - : O Shumway é um renderizador para o Adobe Flash construído inteiramente em JavaScript, WebGL, etc., reduzindo a diferença entre os padrões do Flash e da web. Este artigo mostra como fazer uso do Shumway e como contribuir correções e bugs para o projeto.
- Toolchain for developing and debugging games

  - : Como isso difere da depuração normal de aplicativos da web? Que ferramentas especializadas estão disponíveis? Um monte disso está sendo coberto pelo Will em [ferramentas](https://firefox-source-docs.mozilla.org/devtools-user/index.html), mas aqui nós devemos fornecer um tipo de tutorial de prática para jogos de depuração toolchain, com links para coisas do Will:

    - Visão geral de ferramentas básicas
    - [Editor de shader](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Ferramentas de performance (ainda en produção, estimada no início de 2014)
