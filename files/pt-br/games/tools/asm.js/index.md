---
title: asm.js
slug: Games/Tools/asm.js
---

[Asm.js](http://asmjs.org/) é uma especificação que define um subconjunto de JavaScript que é altamente otimizável. Esta seção examina exatamente o que é permitido no subconjunto asm.js, que melhorias confere, Onde e como você pode fazer uso dele, e mais Principais recursos e exemplos.

## O que é asm.js, exatamente?

É muito pequeno estrita subconjunto de JavaScript, que permite que apenas coisas como `while`, `if`, números, chamado funções de nível superior, e outros meros constructos. Ele não permite que objetos, cordas, fechos, e basicamente qualquer coisa que requer a alocação heap. Asm.js se assemelha ao código C, em muitos aspectos, o objectivo é ainda válida JavaScript Chamada completamente que será executado em todos os motores atuais. Ele empurra motores de JS para otimizar este tipo de código e compiladores como emscripten Dá uma definição clara de que tipo de código para gerar. Vamos mostrar o que asm.js código se parece com e explicar como ele ajuda e como você pode usá-lo.

Este subconjunto de JavaScript já é altamente otimizado motores de JavaScript em Many fantasia usando Just-In-Time (JIT) compilação técnica. No entanto, através da definição de um padrão explícito podemos trabalhar com isso otimizando este tipo de código ainda mais e obter o máximo de desempenho como nós podemos sair dela. Ela torna mais fácil para colaborar através de vários motores de JS porque é fácil para falar e benchmark. A idéia é que este tipo de código de correr muito rápido em deveres Cada motor, e se isso não acontecer, é um bug e há uma motores de especificação claro que shoulds otimizar.

Ele aussi Torna mais fácil para as pessoas que escrevem compiladores que deseja gerar código de alto desempenho na Web. Podem consultar a especificação asm.js e sei que ele vai correr rápido Se eles aderem a asm.js padrões. Emscripten, um C / C ++ para compilador JavaScript, EMITE código asm.js para fazê-lo funcionar com desempenho quase nativo em vários navegadores.

Além disso, se um motor especialmente escolhe reconhecer asm.js código, há otimizações ainda mais que pode ser feito. Firefox é o único no navegador para fazer isso agora.

## Resumo linguagem asm.js

asm.js é uma linguagem de programação intermediária. asm.js: tem uma taxa de perfomance muito previsível Porque é limitado a um subconjunto muito limitado de JavaScript que fornece inteiros única estritamente tipados, flutuadores, aritmética, chamadas de função, e montão acessos. As características de desempenho estão mais perto de código nativo do que a de JavaScript padrão. Usando um subconjunto de asm.js JavaScript já é suportado pelos principais navegadores web. Desde asm.js executado em um navegador fortemente depende do navegador e do hardware.
