---
title: O que são as ferramentas de desenvolvimento do navegador
slug: Learn/Common_questions/What_are_browser_developer_tools
translation_of: Learn/Common_questions/What_are_browser_developer_tools
original_slug: Learn/Common_questions/ferramentas_de_desenvolvimento_do_navegador
---
<div>{{IncludeSubnav("/en-US/Learn")}}</div>

<div class="summary">
<p>Todo navegador web moderno inclui um poderoso conjunto de ferramentas para desenvolvedores. Essas ferramentas fazem muitas coisas, desde inspecionar o HTML, CSS e JavaScript recém carregado e quais recursos foram requeridos até mostrar quanto tempo a página precisou para carregar. Este artigo explica como usar as funções básicas das ferramentas para desenvolvedores do seu navegador.</p>
</div>

<div class="note">
<p><strong>Nota</strong>: Antes de você executar os exemplos abaixo, abra o <a href="http://mdn.github.io/beginner-html-site-scripted/">Beginner's example site</a> (site de exemplos do iniciante) que nós criamos durante o início da série de artigos da Web ( <a href="/en-US/Learn/Getting_started_with_the_web">Getting started with the Web</a> ). Você poderá abrir isso enquanto segue os passos abaixo.</p>
</div>

<h2 id="Como_abrir_o_devtools_no_seu_navegador">Como abrir o devtools no seu navegador</h2>

<p>O devtools está inserido no navegador em uma janela semelhante a esta:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9561/Screenshot%20from%202014-11-25%2012:32:57.png" style="display: block; height: 625px; margin: 0px auto; width: 775px;"></p>

<p>Como você acessa? Três modos:</p>

<ul>
 <li><em><strong>Teclado.</strong></em> <em><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd></em>, exceto:

  <ul>
   <li><strong>Internet Explorer.<kbd> </kbd></strong><em><kbd>F12</kbd> </em></li>
   <li><strong>Mac OS X. </strong><em><span class="Unicode"><kbd>⌘</kbd> + <kbd>⌥</kbd> +<kbd> I</kbd> </span></em></li>
  </ul>
 </li>
 <li><span class="Unicode"><em><strong>Menu bar. </strong></em></span>
  <ul>
   <li><strong>Firefox. </strong>Menu <img alt="" src="https://mdn.mozillademos.org/files/9637/2014-01-10-13-08-08-f52b8c.png" style="height: 16px; width: 16px;"> <span class="Unicode"><em><span class="Unicode">➤ <img alt="" src="https://mdn.mozillademos.org/files/9639/Screenshot%20from%202014-11-26%2014:24:56.png" style="height: 40px; width: 45px;"></span></em><em><span class="Unicode">➤ Toggle Tools, </span></em><span class="Unicode">or </span><em>Tools ➤</em></span><em> Web Developer ➤ Toggle Tools</em></li>
   <li><strong>Chrome.</strong> <em><span class="Unicode">View ➤</span> Developer ➤ Developer Tools</em></li>
   <li><strong>Safari.</strong> <em><span class="Unicode">Develop ➤</span> Show Web Inspector.</em> Se você não consegue ver o <em>menu Desenvolvedor</em> , vá para <em>Safari<span class="Unicode"> ➤</span> Preferências ➤ Avançado</em> e confira o <em>Show Develop menu no menu bar</em> checkbox. </li>
   <li><strong>Opera</strong>. <em><span class="Unicode">Developer ➤</span> Web Inspector</em></li>
  </ul>
 </li>
 <li><strong><em>Context menu.</em></strong> Pressione-e-segure/botão-direito no item da webpage (Ctrl-click on the Mac), e escolha <em>Inspect Element no</em> menu de contexto que aparece. (<em>An added bonus: </em>this method straight-away highlights the code of the element you right-clicked.)</li>
</ul>

<p><img alt="" src="https://mdn.mozillademos.org/files/9605/inspect-element-option.png" style="display: block; height: 264px; margin: 0px auto; width: 350px;"></p>

<h2 id="O_Inspetor_DOM_explorer_e_editor_CSS">O Inspetor: DOM explorer e editor CSS</h2>

<p>O devtools usualmente abre por padrão o inspetor, que se parece com a  imagem abaixo. Esta ferramenta permite que você veja o resultado do  HTML  num site em execução, bem como o CSS aplicado en cada elemento na página.  Ele também lhe mostra as mudanças efetuadas no HTML e CSS e os resultados são produzidos imediatamente, ao vivo, na janela do navegador.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9607/inspector.png" style="display: block; height: 727px; margin: 0px auto; width: 800px;"></p>

<p>Se você não vê o inspector,</p>

<ul>
 <li>Clique a aba <em>Inspetor.</em></li>
 <li>No Internet Explorer, Clique a aba <em>DOM Explorer, </em>ou pressione <kbd>Ctrl</kbd> +<kbd> 1</kbd>.</li>
 <li>No Safari, os controles não são apresentados claramente, mas você poderia ver se não tiver selecionado algo para aparecerna janela.  Pressione o botão <em>Style para ver o</em> CSS.</li>
</ul>

<h3 id="Explore_o_inspector_DOM">Explore o inspector DOM</h3>

<p>Para começar tente pressionar o botão direito do mouse sobre um elemento HTML no inspetor do DOM e olhe para o menu de contexto. As opções do menu variam nos navegadores, mas os mais importantes são os mesmos.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9609/dev-tool-context-menu.png" style="display: block; height: 236px; margin: 0px auto; width: 200px;"></p>

<ul>
 <li><strong>Delete Node</strong> (às vezes Delete<em> Element</em>). Exclui o elemento atual.</li>
 <li><strong>Edit as HTML</strong> (às vezes <em>Add attribute</em>/<em>Edit text</em>). Permite alterar o HTML e ver os resultados na hora. Muito útil para depuração e teste.</li>
 <li><strong>:hover/:active/:focus</strong>. Força os estados dos elementos a serem alternados, para que você possa ver como seria seu estilo.</li>
 <li><strong>Copy/Copy as HTML</strong>. Copia o HTML atualmente selecionado.</li>
 <li>Alguns navegadores também têm Copy CSS Path e Copy XPath available, para permitir que você copie o seletor CSS ou a expressão XPath que selecionaria o elemento HTML atual.</li>
</ul>

<p>Tente editar alguns dos seus DOM agora. Clique duas vezes em um elemento ou clique com o botão direito do mouse e escolha Editar como HTML no menu de contexto. Você pode fazer alterações que quiser, mas não pode salvar suas alterações.</p>

<h3 id="Explorando_o_editor_de_CSS">Explorando o editor de CSS</h3>

<p>Por padrão, o editor CSS exibe as regras CSS aplicadas ao elemento atualmente selecionado:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9631/css-viewer-2.png" style="border: 1px solid black; display: block; height: 218px; margin: 0px auto; width: 326px;"></p>

<p>Esses recursos são especialmente úteis:</p>

<ul>
 <li>As regras aplicadas ao elemento atual são mostradas em ordem de mais específicas.</li>
 <li>Clique nas caixas de seleção ao lado de cada declaração para ver o que aconteceria se você removesse a declaração.</li>
 <li>Clique na pequena seta ao lado de cada propriedade abreviada para mostrar os equivalentes de longhand da propriedade.</li>
 <li>Clique no nome ou no valor de uma propriedade para exibir uma caixa de texto, na qual você pode digitar um novo valor para obter uma visualização ao vivo de uma alteração de estilo.</li>
 <li>Ao lado de cada regra está o nome do arquivo e o número da linha em que a regra está definida. Clicar nessa regra faz com que as ferramentas dev pularem para mostrá-la em sua própria visão, onde geralmente podem ser editadas e salvas.</li>
 <li>Você também pode clicar na chave de fechamento de qualquer regra para abrir uma caixa de texto em uma nova linha, onde você pode escrever uma declaração completamente nova para a sua página.</li>
</ul>

<p>Você notará várias guias clicáveis na parte superior do Visualizador de CSS:</p>

<ul>
 <li><em>Computed</em>: Isso mostra os estilos calculados para o elemento atualmente selecionado (os valores finais normalizados que o navegador aplica).</li>
 <li><em>Box model</em>: Isso representa visualmente o modelo de caixa do elemento atual, para que você possa ver rapidamente o preenchimento, a borda e a margem aplicados a ele e o tamanho do conteúdo.</li>
 <li><em>Fonts</em>: No Firefox, a guia Fontes mostra as fontes aplicadas ao elemento atual.</li>
</ul>

<h3 id="Descubra_mais">Descubra mais</h3>

<p>Descubra mais sobre o Inspetor em diferentes navegadores:</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector">Inspetor de páginas do Firefox</a></li>
 <li><a href="http://msdn.microsoft.com/en-us/library/ie/dn255008%28v=vs.85%29.aspx">IE DOM Explorer</a></li>
 <li><a href="https://developer.chrome.com/devtools/docs/dom-and-styles">Chrome DOM inspector</a> (Inspetor da Opera funciona da mesma forma)</li>
 <li><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1">Inspetor do Safari DOM e explorador de estilo</a></li>
</ul>

<h2 id="O_depurador_JavaScript">O depurador JavaScript</h2>

<p>O depurador Javascript permite a visualização dos conteúdos das variáveis e a configuração dos pontos de paradas(breakpoints) no código. Breakpoints  são marcadores de linha para analisar a execução do código. A identificação previne problemas.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16239/firefox_debugger.png" style="border: 1px solid black; display: block; height: 556px; margin: 0 auto; width: 672px;"></p>

<p>Para acessar o (debugger)depurador:</p>

<p><strong>Firefox</strong>: Clique<img alt="" src="https://mdn.mozillademos.org/files/9637/2014-01-10-13-08-08-f52b8c.png" style="height: 16px; width: 16px;"> ➤ <em>Web Developer</em> ➤ <em>Debugger</em> ou pelo atalho <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> para abrir o Debugger Javascript.  Se a ferramenta já estiver vísivel, clique na aba <strong>Debugger</strong>.</p>

<p><strong>Chrome</strong>: Abra as ferramentas de desenvolvimento e selecione a aba Fontes(<strong>Sources)</strong>. (Opera funciona igualmente).</p>

<p><strong>Edge e Internet Explorer 11</strong>: Aperte <kbd>F12</kbd> então, <kbd>Ctrl</kbd> + <kbd>3</kbd>, ou se a ferramenta já estiver visível, clique na aba Debugger(depurador).</p>

<p><strong>Safari</strong>: Abra  as ferramentas de desenvolvedor e então selecione a aba Debugger(depurador).</p>

<h3 id="Explorando_o_depurador">Explorando o depurador</h3>

<p>Há três painéis no Depurador(debugger) no Firefox</p>

<h4 id="Lista_de_Arquivos">Lista de Arquivos</h4>

<p>O primeiro painel na parte esquerda contém uma lista de arquivos associado com a página que está sendo depurada(debugging). Selecione o arquivo da seleção. Clique no arquivo para selecionar e visualizar os conteúdos no painel central do Debugger.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16240/File_List.png" style="border: 1px solid black; display: block; height: 326px; margin: 0 auto; width: 350px;"></p>

<h4 id="Código_fonte">Código fonte</h4>

<p>Insira os pontos de parada (breakpoints) onde deseja que a execução pare. Na imagem abaixo, a linha selecionada é a 18 na qual tem um ponto de parada (breakpoint).</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16241/Source_code.png" style="border: 1px solid black; display: block; height: 251px; margin: 0 auto; width: 400px;"></p>

<h4 id="Veja_as_expressões_e_pontos_de_paradas">Veja as expressões e pontos de paradas</h4>

<p>À direita do painel é exibida uma lista de expressões e pontos de paradas adicionadas.</p>

<p>Na imagem, na primeira seção,  <strong>Watch expressions</strong>, mostra a lista de itens e variáveis que foram adicionadas.  Expanda a lista para visualizar os valores no vetor. </p>

<p>Na próxima seção, <strong>Pontos de paradas</strong>, lista os pontos de paradas na página. No arquivo  example.js, um breakpoint foi adicionado <code>listItems.push(inputNewItem.value);</code></p>

<p>As duas seções finais aparecem somente quando o código está executando.</p>

<p>A seção <strong>Call stack</strong> (chamada na pilha) mostra que o código foi executado para a linha atual. A função manuseia o clique do mouse e o código está pausado no ponto de parada (breakpoint).</p>

<p>A seção final, <strong>Scopes(escopos)</strong>, mostra os valores visíveis em vários pontos no código. Por exemplo, na imagem abaixo, os objetos disponíveis estão na função addItemClick.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16242/watch_items.png" style="border: 1px solid black; display: block; height: 743px; width: 350px;"></p>

<h2 id="O_console_JavaScript">O console JavaScript</h2>

<p>O console JavaScript é uma ferramenta incrivelmente útil para depurar códigos  em JavaScript que não está funcionando como o esperado. Ele permite que você execute linhas de JavaScript enquanto a página é carregada no navegador e relata os erros encontrados enquanto o navegador tenta executar o código.</p>

<p>Para acessar o console basta abrir ferramentas de desenvolvimentos e escolher a aba Console.</p>

<p>No Firefox o atalho é <kbd>ctrl</kbd> + <kbd>shift</kbd>+ <kbd>k</kbd> ou no menu comando:  <img alt="" src="https://mdn.mozillademos.org/files/9637/2014-01-10-13-08-08-f52b8c.png" style="height: 16px; width: 16px;"> <span class="Unicode"><em><span class="Unicode">➤ Web Developer </span></em><em><span class="Unicode">➤ Web Console, </span></em><span class="Unicode">or </span><em>Tools ➤</em></span><em> Web Developer ➤ Web Console.</em></p>

<p>Aparecerá uma janela como a seguinte:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/9541/console.png" style="border: 1px solid black; display: block; height: 249px; margin: 0px auto; width: 821px;"></p>

<p>Para ver o que acontece, tente inserir os seguintes trechos de código no console, um por um (e, em seguida, pressione Enter):</p>

<ol>
 <li>
  <pre class="brush: js">alert('hello!');</pre>
 </li>
 <li>
  <pre class="brush: js">document.querySelector('html').style.backgroundColor = 'purple';</pre>
 </li>
 <li>
  <pre class="brush: js">var myImage = document.createElement('img');
myImage.setAttribute('src','https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png');
document.querySelector('h1').appendChild(myImage);</pre>
 </li>
</ol>

<p>Agora, tente inserir as seguintes versões incorretas do código e veja o que você obtém.</p>

<ol>
 <li>
  <pre class="brush: js">alert('hello!);</pre>
 </li>
 <li>
  <pre class="brush: js">document.cheeseSelector('html').style.backgroundColor = 'purple';</pre>
 </li>
 <li>
  <pre class="brush: js">var myImage = document.createElement('img');
myBanana.setAttribute('src','https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png');
document.querySelector('h1').appendChild(myImage);</pre>
 </li>
</ol>

<p>Você começará a ver o tipo de erro que o navegador retorna. Muitas vezes, esses erros são bastante críticos, mas deve ser bem simples descobrir esses problemas!</p>

<h3 id="Descubra_mais_2">Descubra mais</h3>

<p>Descubra mais sobre o console JavaScript em diferentes navegadores:</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Console">Firefox Web Console</a></li>
 <li><a href="http://msdn.microsoft.com/en-us/library/ie/dn255006%28v=vs.85%29.aspx">IE JavaScript console</a></li>
 <li><a href="https://developer.chrome.com/devtools/docs/console">Chrome JavaScript Console</a> (O inspetor do Ópera funciona da mesma forma)</li>
 <li><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1">Safari Console</a></li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML">Debugging HTML</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS">Debugging CSS</a></li>
</ul>
