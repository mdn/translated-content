---
title: Como funciona o CSS
slug: Learn/CSS/First_steps/How_CSS_works
tags:
  - CSS
  - DOM
  - Iniciante
  - aprenda
translation_of: Learn/CSS/First_steps/How_CSS_works
---
<p>{{LearnSidebar}}<br>
 {{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Using_your_new_knowledge", "Learn/CSS/First_steps")}}</p>

<p class="summary">Nós aprendemos o básico de CSS, porque e como escrever simples folhas de estílo. Nesta lição, nós daremos uma olhada em como um navegador transforma um CSS e HTML em uma página da web.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisito:</th>
   <td>Alfabetização em computação básica, <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software">softwares básicos instalados</a>, conhecimento básico sobre <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files">trabalhar com arquivos</a>, e o básico de HTML (estude <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introdução ao HTML</a>.)</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Entender o básico sobre como o CSS e o HTML são interpretados pelo navegador (que em seu nome original chama-se browser do inglês), e o que acontece quando um browser encontra regras CSS mas não as compreende.</td>
  </tr>
 </tbody>
</table>

<h2 id="Como_o_CSS_funciona">Como o CSS funciona?</h2>

<p>Quando um navegador redenriza um documento, ele combina o documento com suas informações de estilo. E o documento é processado em estágios, nos quais estão listados abaixo. É sugerível ter em mente que esta é uma versão simplificada do que ocorre quando um navegador redenriza uma página web, e que diferentes navegadores podem manipular estes processos de diferentes formas. De toda forma, esta listagem é muito aproximada do processo comum feito pela maioria dos navegadores.</p>

<ol>
 <li>O navegador carrega o HTML (e.g. que é recebido pela internet).</li>
 <li>Ele então converte o {{Glossary("HTML")}} para um {{Glossary("DOM")}} (<em>Document Object Model</em>). O DOM representa o documento na memória do computador. O DOM será também melhor detalhado na próxima seção.</li>
 <li>O navegador então requisita a maioria dos recursos que estão lincados no documento HTML, elementos como imagens encorporadas e vídeos, e também, folhas de estilo CSS. O código em JavaScript é manipulado um pouco mais tarde durante o processo, e não falaremos muito sobre a manipulação do JavaScript agora para mantermos as coisas simples.</li>
 <li>O navegador analisa o CSS encontrado (fetched) e interpreta as diferentes regras por meio de seus diferentes tipos de seletores em diferentes baldes (buckets), tais como elementos (ex: h1, h2), classes (.myElement), ID (#myNav), e outros mais. Baseado nos seletores encontrados, o navegador insere as regras de estilização que devem ser aplicadas para cada node no DOM, e anexa o estilo para os elementos como foram especificados nas folhas de estilização (este processo intermediário é chamado de render tree ou árvore de renderização).</li>
 <li>A árvore de renderização é organizada na estrutura e deve aparecer depois das regras de estilo serem aplicadas ao documento.</li>
 <li>O visual de visualização da página é por fim mostrado na tela (este estágio é chamado de <em>painting</em> ou pintura).</li>
</ol>

<p>O diagrama a seguir também apresenta uma visão simples do processo.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11781/rendering.svg" style="height: auto; max-width: 635px; width: 100%;"></p>

<h2 id="Sobre_o_DOM">Sobre o DOM</h2>

<p>Um DOM uma estrutura árborea (tree-like). Cada elemento, atributo, ou fragmento de texto na linguagem de marcação (markup language) torna-se um {{Glossary("Node/DOM","DOM node (nó ou ponto de intersecção)")}} na estrutura de árvore. Os nodes (nós) são definidos por meio do relacionamento com outros nodes presentes DOM. Alguns elementos são pais ou superiores a elementos dentro de si (child node, ou em português, nós filhos ou nós secundários), e child nodes possuem elementos irmãos.</p>

<p>Compreender o DOM ajuda você organizar, debugar e manter seu CSS porque o DOM é onde seu CSS e o conteúdo do documento são combinados. Quando você começa a trabalhar com as DevTools do browser você estará navegando os elementos do DOM como itens ordenados selecionáveis para assim decidir quais regras de estilização aplicar.</p>

<h2 id="Uma_representação_prática_do_DOM">Uma representação prática do DOM</h2>

<p>Ao invés de um longa e chata explicação, vamos observar um exemplo para vermos como um trecho real de um documento HTML é convertido em um DOM.</p>

<p>Pegue o seguinte código HTML:</p>

<pre class="brush: html notranslate">&lt;p&gt;
  Let's use:
  &lt;span&gt;Cascading&lt;/span&gt;
  &lt;span&gt;Style&lt;/span&gt;
  &lt;span&gt;Sheets&lt;/span&gt;
&lt;/p&gt;
</pre>

<p>No DOM, o node (nó) especifica nosso elementro <code>&lt;p&gt;</code> como um elemento pai. Seus filhos são um text node e a árvore de nós que corresponde ao nossos elementos <code>&lt;span&gt;</code>. Os nós <code>SPAN</code> são também elementos pais, tendo os text nodes (textos dentro de si) como seus filhos:</p>

<pre class="notranslate">P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
</pre>

<p>Esta é a forma como um browser interpreta o nosso trecho de documento HTML acima apresentado — O browser renderiza a árvore DOM e nos retorna uma saída no browser da seguinte forma:</p>

<p>{{EmbedLiveSample('A_real_DOM_representation', '100%', 55)}}</p>

<div class="hidden">
<pre class="brush: css notranslate">p {margin:0;}</pre>
</div>

<h2 id="Aplicando_CSS_ao_DOM">Aplicando CSS ao DOM</h2>

<p>Vamos adicionar um curto CSS ao nosso documento, para estiliza-lo. Novamente, usamos o trecho HTML seguinte:</p>

<pre class="brush: html notranslate">&lt;p&gt;
  Let's use:
  &lt;span&gt;Cascading&lt;/span&gt;
  &lt;span&gt;Style&lt;/span&gt;
  &lt;span&gt;Sheets&lt;/span&gt;
&lt;/p&gt;</pre>

<p>Vamos supor que aplicamos o seguinte CSS a ele:</p>

<pre class="brush: css notranslate">span {
  border: 1px solid black;
  background-color: lime;
}</pre>

<p>O browser irá interpretar o HTML e criar um DOM baseado nele. Como a única regra de estilização CSS disponível possui um seletor <code>span</code>, o browser fará a combinação do CSS rapidamente! Ele irá aplicar a regra de estilo para cada um da árvore <code>&lt;span&gt;</code>s, e então paint (pintar) o resultado final na tela.</p>

<p>Ao atualizar há a seguinte saída:</p>

<p>{{EmbedLiveSample('Applying_CSS_to_the_DOM', '100%', 55)}}</p>

<p>Em nosso artigo <a href="/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS">Debugging CSS</a> no próximo módulo nós estaremos usando as DevTools do browser para debugar problemas no CSS, e aprenderemos mais sobre como o navegador interpreta o CSS.</p>

<h2 id="O_que_acontece_se_um_navegador_não_entende_o_CSS_encontrado">O que acontece se um navegador não entende o CSS encontrado?</h2>

<p><a href="/en-US/docs/Learn/CSS/First_steps/What_is_CSS#Browser_support">Em uma lição anterior</a>, eu mencionei que navegadores não implementam todo o novo CSS ao mesmo tempo. Em adição, muitas pessoas não usam a versão mais recente de um navegador. Dado que o CSS é processado o tempo todo, e que portanto está adiantado em relação ao que os browsers podem reconhecer, você pode imaginar o que acontece se um browser encontra um seletor ou uma declaração CSS que ele não reconhece.</p>

<p>A resposta é que ele não faz nada e vai para o próximo conteúdo em CSS!</p>

<p>Se um browser está analisando suas regras, e econtra uma porpriedade ou valor que ele não entende, ele o ignora e segue para a próxima declaração. Ele vai fazer isto se você cometeu algum erro ou digitou incorretamente uma propriedade ou valor, ou se tal propriedade ou valor é recente e o browser ainda não o processa.</p>

<p>Similarmente, se um browser encontra um seletor que não comprrende, ele o ignorará e seguirá para a próxima regra.</p>

<p>No exemplo abaixo usei a grafia em inglês britânico para a propriedade cor, o que a torna inválida e portanto ela não é reconhecida. Por isso, o parágrafo não recebe a coloração azul. Todos os outros CSS foram aplicados, no entanto, apenas aquele que foi considerado inválido foi ignorado.</p>

<div id="Skipping_example">
<pre class="brush: html notranslate">&lt;p&gt; Quero que este texto esteja grande, em negrito, e azul.&lt;/p&gt;</pre>

<pre class="brush: css notranslate">p {
  font-weight: bold;
  colour: blue; /* grafia incorreta da propriedade cor */
  font-size: 200%;
}</pre>
</div>

<p>{{EmbedLiveSample('Skipping_example', '100%', 200)}}</p>

<p>Este comportamento é bastante útil. Ele significa qeu você pode usar o novo CSS como uma melhoria, sabendo que não ocorrerá um erro se ele não for completamente compreendido - o browser  ou vai entender esta característica ou não. Em conjunto com a maneira que  a cascata funciona, e o fato que browsers usarão o último CSS que eles encontrarem numa folha de estilos quando você possui duas regras com a mesma especificidade, Você pode oferecer alternativas para browsers  que não processa CSS mais novos.</p>

<p>Isto funciona particularmente bem quando você usa um valor que é relativamente recente e que não é processado em todo lugar. Por exemplo, alguns browsers antigos não processam <code>calc()</code> como um valor. Eu posso dar um recuo com uma largura em pixels para um box, e então seguir e dar uma largura com o valor de <code>100% - 50px</code> com <code>calc()</code>. Browsers antigos irão utilizar a versão em pixels, ignorando a linha que trata de <code>calc()</code>, já que eles não a compreendem. Browsers mais novos irão interpretar inicialmente a linha que utiliza pixels, para em seguida a sobrepor com a linha utilizando <code>calc()</code> conforme ela aparece na cascata.</p>

<pre class="brush: css notranslate">.box {
  width: 500px;
  width: calc(100% - 50px);
}</pre>

<p>Iremos visualizar várias outras maneiras de auxiliar diferentes browsers em lições futuras.</p>

<h2 id="E_por_último">E por último</h2>

<p>Você está quase encerrando este módulo; só temos mais uma tarefa para fazer. No próximo artigo, você utilizará seu novo conhecimento para reestilizar um exemplo, testando seus aprendizados de CSS no processo.</p>

<p>{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Using_your_new_knowledge", "Learn/CSS/First_steps")}}</p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ol>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/What_is_CSS">O que é CSS?</a></li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/Getting_started">Começando com CSS</a></li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured">Como o CSS é estruturado</a></li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/How_CSS_works">Como o CSS funciona</a></li>
 <li><a href="/en-US/docs/Learn/CSS/First_steps/Using_your_new_knowledge">Utilizando seu novo conhecimento</a></li>
</ol>
