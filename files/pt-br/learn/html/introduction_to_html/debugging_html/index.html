---
title: Debugging HTML
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
translation_of: Learn/HTML/Introduction_to_HTML/Debugging_HTML
original_slug: Aprender/HTML/Introducao_ao_HTML/Debugging_HTML
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</div>

<p class="summary">Escrever HTML é legal, mas e se algo der errado, e você não conseguir descobrir onde está o erro no código? Este artigo apresentará algumas ferramentas que podem ajudá-lo a encontrar e corrigir erros no HTML.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Familiaridade com HTML, conforme abordado, por exemplo, em <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Getting_started">Introdução ao HTML</a>, <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML">Fundamentos de texto em HTML</a> e <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Criando_hyperlinks">Criação de Hiperlinks</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Aprender o básico sobre o uso de ferramentas de depuração (debugging) para encontrar problemas em HTML.</td>
  </tr>
 </tbody>
</table>

<h2 id="Depurar_não_é_assustador">Depurar não é assustador</h2>

<p>Ao escrever algum tipo de código, tudo costuma ir bem, até o temido momento quando ocorre um erro — você fez algo errado, então seu código não funciona - talvez não funcione mais nada ou não funciona exatamente como você queria. Por exemplo, a seguir é mostrado um erro relatado ao tentar {{glossary("compilar")}} um programa simples escrito na linguagem <a href="https://www.rust-lang.org/">Rust</a>.</p>

<p><img alt="A console window showing the result of trying to compile a rust program with a missing quote around a string in a print statement. The error message reported is error: unterminated double quote string." src="https://mdn.mozillademos.org/files/12435/error-message.png" style="display: block; height: 520px; margin: 0px auto; width: 711px;">Aqui, a mensagem de erro é relativamente fácil de entender — "string de aspas duplas sem terminação". Se você olhar a listagem, provavelmente verá como <code>println!(Hello, world!");</code> pode estar faltando logicamente uma aspa dupla. No entanto, as mensagens de erro podem ficar mais complicadas e menos fáceis de interpretar à medida que os programas se tornam maiores, e até mesmo casos simples podem parecer um pouco intimidadores para alguém que não sabe nada sobre o Rust.</p>

<p>Depurar um código não tem que ser assustador, porém —  a chave para se sentir confortável em escrever e depurar qualquer linguagem ou código de programação é a familiaridade com a linguagem e as ferramentas.</p>

<h2 id="HTML_e_depuração">HTML e depuração</h2>

<p>HTML não é tão complicado de entender quanto o Rust. O HTML <strong>não é compilado</strong> em um formato diferente antes do navegador analisá-lo e mostrar o resultado (ele é interpretado, não compilado). E a sintaxe do {{glossary("elemento")}} HTML é muito mais fácil de entender do que uma "linguagem de programação real" como Rust, {{glossary("JavaScript")}}, ou {{glossary("Python")}}. A forma como os navegadores analisam o HTML é muito mais <strong>permissiva </strong>do que a forma como as linguagens de programação são executadas, o que é bom e ruim.</p>

<h3 id="Código_permissivo">Código permissivo</h3>

<p>Então, o que queremos dizer com permissivo? Bem, geralmente quando você faz algo errado no código, existem dois tipos principais de erros que você encontrará:</p>

<ul>
 <li><strong>Erros de sintaxe</strong>: São os erros de ortografia no seu código que realmente fazem com que o programa não seja executado, como o erro do Rust mostrado acima. Estes geralmente são fáceis de corrigir, desde que você esteja familiarizado com a sintaxe (forma de escrever) da linguagem e saiba o que significam as mensagens de erro.</li>
 <li><strong>Erros lógicos</strong>: São erros onde a sintaxe está correta, mas o código não é o que você pretendia, o que significa que o programa é executado incorretamente. Geralmente, eles são mais difíceis de corrigir do que erros de sintaxe, pois não há uma mensagem de erro para direcioná-lo para a origem deste erro.</li>
</ul>

<p>O próprio HTML não sofre de erros de sintaxe porque os navegadores o analisam permissivamente, o que significa que a página ainda é exibida mesmo se houver erros de sintaxe. Os navegadores têm regras internas para indicar como interpretar a marcação escrita incorretamente, para que você obtenha algo em execução, mesmo que não seja o esperado. Isso, claro, ainda pode ser um problema!</p>

<div class="note">
<p><strong>Nota</strong>: O HTML é analisado permissivamente porque, quando a web foi criada, foi decidido que permitir que as pessoas publicassem seus conteúdos era mais importante do que garantir que a sintaxe estivesse absolutamente correta. A web provavelmente não seria tão popular quanto é hoje, se tivesse sido mais rigorosa desde o início.</p>
</div>

<h3 id="Aprendizado_Ativo_Estudando_código_permissivo">Aprendizado Ativo: Estudando código permissivo</h3>

<p>É hora de estudar a natureza permissiva do código HTML.</p>

<ol>
 <li>Primeiramente, faça o download do <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html">debug-example demo</a> e o salve localmente. Esse exemplo contém erros propositais para que possamos explorá-los (tal código HTML é dito  <em><strong>badly-formed</strong></em>, em contraponto ao HTML <em><strong>well-formed</strong></em>).</li>
 <li>Em seguida, abra o arquivo em um navegador. Você verá algo como:<img alt="A simple HTML document with a title of HTML debugging examples, and some information about common HTML errors, such as unclosed elements, badly nested elements, and unclosed attributes. " src="https://mdn.mozillademos.org/files/12437/badly-formed-html.png" style="display: block; margin: 0 auto;"></li>
 <li>Isso claramente não parece bom; vamos dar uma olhada no código fonte para tentar achar os erros (somente o conteúdo de <em>body</em> é mostrado):
  <pre class="brush: html notranslate">&lt;h1&gt;HTML debugging examples&lt;/h1&gt;

&lt;p&gt;What causes errors in HTML?

&lt;ul&gt;
  &lt;li&gt;Unclosed elements: If an element is &lt;strong&gt;not closed properly,
      then its effect can spread to areas you didn't intend

  &lt;li&gt;Badly nested elements: Nesting elements properly is also very important
      for code behaving correctly. &lt;strong&gt;strong &lt;em&gt;strong emphasised?&lt;/strong&gt;
      what is this?&lt;/em&gt;

  &lt;li&gt;Unclosed attributes: Another common source of HTML problems. Let's
      look at an example: &lt;a href="https://www.mozilla.org/&gt;link to Mozilla
      homepage&lt;/a&gt;
&lt;/ul&gt;</pre>
 </li>
 <li>Vamos analisar os erros:
  <ul>
   <li>Os elementos {{htmlelement("p","parágrafo")}} e {{htmlelement("li","item da lista")}} não possuem <em>tags</em> de fechamento. Olhando a imagem acima, isso não parece ter afetado muito a renderização do HTML já que é fácil deduzir onde um elemento deveria terminar e outro, começar.</li>
   <li>O primeiro elemento {{htmlelement("strong")}} não possui <em>tag</em> de fechamento. Isto é um pouco mais problemático porque não é necessariamente fácil determinar onde um elemento deveria terminar. Assim, todo o resto do texto foi fortemente enfatizado.</li>
   <li>Essa seção foi aninhada incorretamente: <code>&lt;strong&gt;strong &lt;em&gt;strong emphasised?&lt;/strong&gt; what is this?&lt;/em&gt;</code>. Não é fácil dizer como esse trecho foi interpretado por causa do problema anterior.</li>
   <li>O valor do atributo {{htmlattrxref("href","a")}} não tem as aspas de fechamento. Isso parece ter causado o maior problema — o <em>link</em> não foi renderizado.</li>
  </ul>
 </li>
 <li>Agora vamos dar uma olhada no HTML que o navegador renderizou, comparando-o com o nosso código fonte. Para fazer isso, usaremos as ferramentas de desenvolvimento oferecidas pelo navegador. Se você não está familiarizado com estas ferramentas, dê uma olhadinha nesse tutorial: <a href="/pt-BR/docs/Learn/Common_questions/ferramentas_de_desenvolvimento_do_navegador">O que são as ferramentas de desenvolvimento do navegador</a>.</li>
 <li>No inspetor DOM, você pode ver como o HTML renderizado fica: <img alt="The HTML inspector in Firefox, with our example's paragraph highlighted, showing the text &quot;What causes errors in HTML?&quot; Here you can see that the paragraph element has been closed by the browser." src="https://mdn.mozillademos.org/files/12439/html-inspector.png" style="display: block; margin: 0 auto;"></li>
 <li>Utilizando o inspetor DOM, vamos explorar nosso código detalhadamente para ver como o navegador tentou consertar os erros do código HTML (nós fizemos a análise com o Firefox, mas outros navegadores modernos <em>devem</em> apresentar o mesmo resultado):
  <ul>
   <li>As <em>tags</em> de fechamento foram colocadas nos parágrafos e itens da lista.</li>
   <li>Não está claro onde o primeiro elemento <code>&lt;strong&gt;</code> deveria terminar, portanto o navegador envolveu cada bloco subsequente em uma <em>tag</em> <em>strong</em> própria até o fim do documento!</li>
   <li>O aninhamento incorreto foi corrigido pelo navegador da seguinte maneira:
    <pre class="brush: html notranslate">&lt;strong&gt;strong
  &lt;em&gt;strong emphasised?&lt;/em&gt;
&lt;/strong&gt;
&lt;em&gt; what is this?&lt;/em&gt;</pre>
   </li>
   <li>O link cujas aspas de fechamento não estavam presentes foi totalmente excluído da renderização. Então o último item ficou assim:
    <pre class="brush: html notranslate">&lt;li&gt;
  &lt;strong&gt;Unclosed attributes: Another common source of HTML problems.
  Let's look at an example: &lt;/strong&gt;
&lt;/li&gt;</pre>
   </li>
  </ul>
 </li>
</ol>

<h3 id="Validação_HTML">Validação HTML</h3>

<p>Então, você pode ver pelo exemplo acima que você realmente  quer ter certeza de que o seu HTML foi bem construido! Mas Como? Em um pequeno exemplo como o que foi visto acima, é facil analisar as linhas e achar os erros, mas e se fosse um gigante e complexo documento HTML?</p>

<p>A melhor estratégia é começar rodando a sua página HTML através do <a href="https://validator.w3.org/">Markup Validation Service</a> — criado e mantido pelo W3C, uma organização que cuida das especificações que define o HTML, CSS, e outras tecnologias WEB. Esta página considera um documento HTML como uma entrada, fazendo a leitura dela e retornando o que há de errado com o seu HTML.</p>

<p><img alt="The HTML validator homepage" src="https://mdn.mozillademos.org/files/12441/validator.png" style="display: block; margin: 0 auto;"></p>

<p>Para especificar o HTML a ser validado, você pode dar um endereço web, fazer o upload de um arquivo HTML, ou diretamente inserir o código HTML.</p>

<h3 id="Aprendizado_Ativo_Validando_um_documento_HTML">Aprendizado Ativo: Validando um documento HTML</h3>

<p>Vamos tentar fazer isto com o nosso <a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html">sample document</a>.</p>

<ol>
 <li>Primero, carregue o <a href="https://validator.w3.org/">Markup Validation Service</a> em uma aba no seu navegador, caso já não esteja carregada.</li>
 <li>Troque para a aba <a href="https://validator.w3.org/#validate_by_input">Validate by Direct Input</a>.</li>
 <li>Copie todo o código do documento de exemplo (não apenas o body) e cole dentro da grande área de texto mostrada no Markup Validation Service.</li>
 <li>Pressione o botão <em>Check</em>.</li>
</ol>

<p>Você deverá receber uma lista de erros e outras informações.</p>

<p><img alt="A list of of HTML validation results from the W3C markup validation service" src="https://mdn.mozillademos.org/files/12443/validation-results.png" style="display: block; margin: 0 auto;"></p>

<h4 id="Interpretando_as_mensagens_de_erros">Interpretando as mensagens de erros</h4>

<p>As mensagens de erros geralmente são úteis, mas algumas vezes elas não ajudam tanto; com um pouco de prática você pode descobrir como interpretar-lás para arrumar o seu código. Vamos dar uma olhada nas mensagens de erros e ver o que elas significam. Você verá que cada mensagem vem com um numero para a linha e um para a coluna afim de ajudar você a localizar o erro facilmente.</p>

<ul>
 <li>"End tag <code>li</code> implied, but there were open elements" (2 instances): Estas mensagens indicam que um elemento que esta aberto deveria estar fechado. O final da tag esta implicito, mas não esta realmente lá. A informação de linha/coluna indica para a primeira linha depois de onde a tag de fechamento realmente deveria estar, mas isto é uma pista boa o suficiente para ver o que há de errado.</li>
 <li>"Unclosed element <code>strong</code>": Este é muito fácil de entender — um {{htmlelement("strong")}} elemento esta aberto, e uma informação de linha/coluna indica diretamente para onde esta.</li>
 <li>"End tag <code>strong</code> violates nesting rules": Este aponta os elementos incorretamente aninhados, e a informação de linha/coluna aponta onde o erro está.</li>
 <li>"End of file reached when inside an attribute value. Ignoring tag": This one is rather cryptic; it refers to the fact that there is an attribute value not properly formed somewhere, possibly near the end of the file because the end of the file appears inside the attribute value. The fact that the browser doesn't render the link should give us a good clue as to what element is at fault.</li>
 <li>"End of file seen and there were open elements": This is a bit ambiguous, but basically refers to the fact there are open elements that need to be properly closed. The lines numbers point to the last few lines of the file, and this error message comes with a line of code that points out an example of an open element:
  <pre class="notranslate">example: &lt;a href="https://www.mozilla.org/&gt;link to Mozilla homepage&lt;/a&gt; ↩ &lt;/ul&gt;↩ &lt;/body&gt;↩&lt;/html&gt;</pre>

  <div class="note">
  <p><strong>Note</strong>: An attribute missing a closing quote can result in an open element because the rest of the document is interpreted as the attribute's content.</p>
  </div>
 </li>
 <li>"Unclosed element <code>ul</code>": This is not very helpful, as the {{htmlelement("ul")}} element <em>is</em> closed correctly. This error comes up because the {{htmlelement("a")}} element is not closed, due to the missing closing quote mark.</li>
</ul>

<p><span>If you can't work out what every error message means, don't worry about it — a good idea is to try fixing a few errors at a time. Then try revalidating your HTML to show what errors are left. Sometimes fixing an earlier error will also get rid of other error messages — several errors can often be caused by a single problem, in a domino effect.</span></p>

<p><span>You will know when all your errors are fixed when you see the following banner in your output: </span></p>

<p><img alt='Banner that reads "The document validates according to the specified schema(s) and to additional constraints checked by the validator."' src="https://mdn.mozillademos.org/files/12445/valid-html-banner.png" style="display: block; margin: 0 auto;"></p>

<h2 id="Summary">Summary</h2>

<p>So there we have it, an introduction to debugging HTML, which should give you some useful skills to count on when you start to debug CSS, JavaScript, and other types of code later on in your career. This also marks the end of the Introduction to HTML module learning articles — now you can go on to testing yourself with our assessments: the first one is linked below.</p>

<p>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}</p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li><a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Getting_started">Iniciando com HTML</a></li>
 <li><a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/The_head_metadata_in_HTML">O que está no cabeçalho? Metadados em HTML</a></li>
 <li><a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML">Fundamentos do texto em HTML</a></li>
 <li><a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Criando_hyperlinks">Criando hyperlinks</a></li>
 <li><a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Formatacao_avancada_texto">Formatação avançada de texto</a></li>
 <li><a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Estrutura_de_documento_e_sites">Estrutura de documento e sites</a></li>
 <li><a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Debugging_HTML">Debugging HTML</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter">Marking up a letter</a></li>
 <li><a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content">Structuring a page of content</a></li>
</ul>
