---
title: JavaScript Assíncrono
slug: Learn/JavaScript/Asynchronous
tags:
  - Beginner
  - CodingScripting
  - Guide
  - Guía
  - Iniciante
  - JavaScript
  - Landing
  - NeedsTranslation
  - Promises
  - TopicStub
  - async
  - asynchronous
  - await
  - callbacks
  - requestAnimationFrame
  - setInterval
  - setTimeout
translation_of: Learn/JavaScript/Asynchronous
---
<div>{{LearnSidebar}}</div>



<div><span class="seoSummary">Neste módulo vamos entender {{Glossary("JavaScript")}} <a href="/pt-BR/docs/Glossario/Assincrono">Assíncrono</a></span><span class="seoSummary">, porque isso é importante e como pode ser usado para lidar com operações potencialmente bloqueantes, como a busca de recursos em um servidor remoto.</span></div>

<h2 id="Pre_requisitos">Pre requisitos</h2>

<p>Javascript Assíncrono é um tópico razoavelmente avançado e é aconselhada a leitura dos módulos <a href="/pt-BR/docs/Learn/JavaScript/First_steps">Primeiros Passos com Javascript</a> e <a href="/pt-BR/docs/Aprender/JavaScript/Elementos_construtivos">Elementos construtivos do Javascript</a> antes de continuar.</p>

<p>Se você não estiver familiarizado com os conceitos de programação assíncrona, a sugestão é iniciar com o artigo <a href="/pt-BR/docs/Learn/JavaScript/Asynchronous/Conceitos">Conceitos gerais da programação assíncrona</a> desse módulo. Caso contrário, você pode provavelmente pular para o módulo <a href="/pt-BR/docs/Learn/JavaScript/Asynchronous/Introdu%C3%A7%C3%A3o">Introdução ao Javascript Assíncrono</a>.</p>

<div class="note">
<p><strong>Note</strong>: Se você está estudando a partir de um computador/tablet/ outro dispositivo onde não é capaz de criar seus próprios arquivos, é possível executar os códigos de exemplo (a maioria deles) em plataformas como <a href="http://jsbin.com/">JSBin</a> ou  <a href="https://thimble.mozilla.org/">Thimble</a>.</p>
</div>

<h2 id="Guias">Guias</h2>

<dl>
 <dt><a href="/pt-BR/docs/Learn/JavaScript/Asynchronous/Conceitos">Conceitos gerais da programação assíncrona</a></dt>
 <dd>
 <p>Nesse artigo vamos explorar um número de conceitos importantes relacionados à programação assíncrona e como aparece nos browsers Web. Você deve entender estes conceitos antes de seguir adiante através dos outros artigos neste módulo.</p>
 </dd>
 <dt><a href="/pt-BR/docs/Learn/JavaScript/Asynchronous/Introdu%C3%A7%C3%A3o">Introdução ao Javascript Assíncrono</a></dt>
 <dd>Nesse artigo vamos recapitular brevemente os problemas associados ao Javascript síncrono e introduzir algumas das diferentes técnicas do Javascript assícrono que irá encontrar mais a frente, mostrando como essas técnicas podem nos ajudar a resolver tais problemas.</dd>
 <dt><a href="/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals">Javascript assícrono cooperativo: Timeouts e intervalos</a></dt>
 <dd>Aqui contemplamos os métodos tradicionais que o Javascript possui disponível para executar código de forma assíncrona após decorrido um certo periodo de tempo ou em um intervalo regular (e.g. um determinado número de vezes por segundo), discutir sua utilidade e perceber alguns problemas inerentes a eles.</dd>
 <dt><a href="/pt-BR/docs/Learn/JavaScript/Asynchronous/Promises">Manipulando elegantemente operações assíncronas com Promises</a></dt>
 <dd>Promises são um novo recurso da linguagem Javascript que permitem adiar ações até que a ação anterior esteja concluída ou responder com falha. Isso é extremamente útil para montar uma sequência de operações para que funcione corretamente. Este artigo lhe orienta como as Promises funcionam, onde verá elas sendo utilizadas em <a href="/pt-BR/docs/WebAPI">WebAPIs</a>. Também aprenderá como escrever suas próprias promises.</dd>
 <dt><a href="/en-US/docs/Learn/JavaScript/Asynchronous/Async_await">Facilitando a programação assícrona com async e await</a></dt>
 <dd>Promises podem ser um pouco complexas de construir e entender. Por esse motivo, os navegadores modernos implementado funções <code>async</code> e o operador <code>await.</code> O primeiro permite que funções padrão se comportem implicitamente de forma assíncrona com promises, enquanto que o último pode ser usado dentro de funções <code>async</code> para esperar por 'promessas' antes que a função continue. Isso faz com que o encadeamento de 'promessas' seja mais fácil de ler.</dd>
 <dt><a href="/pt-BR/docs/Learn/JavaScript/Asynchronous/Escolhendo_abordagem_correta">Escolhendo a abordagem correta</a></dt>
 <dd>Para concluir este módulo, vamos considerar as diferentes técnicas de programação e as features que abordamos do começo ao fim, considerando quais e quando utilizar, com recomendações e advertências das armadilhas mais comuns.</dd>
</dl>

<h2 id="Veja_Também">Veja Também</h2>

<ul>
 <li><a href="https://eloquentjavascript.net/11_async.html">Programação Assícrona</a> do livro online <a href="https://eloquentjavascript.net/">Eloquent JavaScript</a>, por Marijn Haverbeke.</li>
</ul>

<div class="note">
<p><strong>Nota do tradutor</strong>: A segunda edição do <em>Eloquent Javascript</em> foi traduzida pela comunidade brasileira do Javascript e está disponível em <a href="https://github.com/braziljs/eloquente-javascript">Javascript Eloquente - 2ª Edição</a>. Até o momento da tradução deste artigo, a comunidade está trabalhando na conclusão da 3ª edição.</p>
</div>
