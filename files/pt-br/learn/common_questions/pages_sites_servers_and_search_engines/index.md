---
title: 'Qual a diferença entre página web, site, servidor web e mecanismo de busca?'
slug: Learn/Common_questions/Pages_sites_servers_and_search_engines
tags:
  - Iniciante
  - Mecânica da Web
  - Precisa de Aprendizagem Ativa
translation_of: Learn/Common_questions/Pages_sites_servers_and_search_engines
---
<div class="summary">
<p><span class="seoSummary">Neste artigo, iremos apresentar diversos conceitos relacionados à Web: páginas web, sites, servidores web e mecanismos de busca. Estes termos são confundidos frequentemente por iniciantes na web, ou são empregados de forma incorreta. Vamos aprender o que cada um significa! </span></p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Você deverá conhecer <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Como_a_internet_funciona">como a Internet funciona</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Tornar o leitor apto a descrever as diferenças entre uma página web, um site, um servidor web e um mecanismo de busca.</td>
  </tr>
 </tbody>
</table>

<h2 id="Sumário">Sumário</h2>

<p>Como qualquer outra área do conhecimento, a web possui um grande número de jargões. Não se preocupe, nós não iremos te sobrecarregar com todos eles (temos um <a href="https://developer.mozilla.org/pt-BR/docs/Glossario">glossário</a> se você estiver curioso). Todavia, existem alguns termos básicos que você precisa conhecer inicialmente, já que você sempre ouvirá estas expressões enquanto estiver lendo sobre o assunto. É muito fácil confundir tais termos ocasionalmente, uma vez que eles se referem a funcionalidades relacionadas porém diferentes. Na verdade, às vezes você verá esses termos mal utilizados nos noticiários e em outros lugares, portanto, misturá-los é compreensível.</p>

<p>Cobriremos esses termos e tecnologias com mais detalhes à medida que exploramos mais, mas essas definições rápidas serão um ótimos começo para você:</p>

<dl>
 <dt>página web</dt>
 <dd>Um documento que pode ser mostrado em um navegador web como Firefox, Google Chrome, Opera, Microsoft Internet Explorer ou Edge, ou Safari da Apple. Tais documentos também podem ser referenciados apenas por "páginas".</dd>
 <dt>site</dt>
 <dd>Um conjunto de páginas web agrupadas juntas e geralmente conectadas juntas de diversas formas. Também conhecido como "web site" ou simplesmente "site".</dd>
 <dt>servidor web</dt>
 <dd>Um computador que hospeda um site na Internet.</dd>
 <dt>mecanismo de busca</dt>
 <dd>Um serviço da web que te auxilia a encontrar outras páginas da web, como o Google, o Bing, o Yahoo ou o DuckDuckGo. Os motores de busca são normalmente acessados através de um navegador da web (por exemplo, você pode realizar pesquisas em mecanismos de busca diretamente na barra de endereços do Firefox, Chrome, etc.) ou através de uma página da web (por exemplo, <a href="https://www.bing.com/">bing.com</a> ou <a href="https://duckduckgo.com/">duckduckgo.com</a>).</dd>
</dl>

<p>Vamos ver uma analogia simples - uma biblioteca pública. Isto é o que você geralmente faria ao visitar uma biblioteca:</p>

<ol>
 <li>Procura no índice de buscas e verifica o título do livro que você deseja.</li>
 <li>Anota o número de catálogo do livro desejado.</li>
 <li>Se dirige à seção particular que contém o livro, encontra o número catalográfico correto, e então apanha o livro.</li>
</ol>

<p>Comparemos a biblioteca com um servidor web:</p>

<ul>
 <li>A biblioteca é como um servidor web. Ela possui muitas seções, tal qual um servidor hospedando múltiplos websites.</li>
 <li>As diferentes seções (Ciências, Matemática, História, etc.) na biblioteca são como os sites. Cada seção é como um único site (duas seções não conterão os mesmos livros).</li>
 <li>Os livros em cada seção correspondem às páginas web. Um website pode conter diversas páginas, por exemplo, na seção de Ciências (o site) terá livros sobre calor, som, termodinâmica, estática, etc. (as páginas web). As páginas da web podem ser encontradas em um local exclusivo (URL).</li>
 <li>O índice de buscas é como o mecanismo de busca. Cada livro possui sua própria localização exclusiva na biblioteca (dois livros não podem ser armazenados no mesmo local), o que é especificado pelo código catalográfico.</li>
</ul>

<dl>
</dl>

<h2 id="Aprendizado_ativo">Aprendizado ativo</h2>

<p><em>Ainda não há nenhum aprendizado ativo. <a href="https://developer.mozilla.org/pt-BR/docs/MDN/Primeiros_Passos">Por favor, considere fazer uma contribuição</a>.</em></p>

<h2 id="Imersão_a_Fundo">Imersão a Fundo</h2>

<p>Bem, então vamos escavar um pouco mais a fundo sobre estes quatro termos, em como se inter-relacionam e por qual motivo são, ocasionalmente, confundidos entre si.</p>

<h3 id="Página_web">Página web</h3>

<p>Uma <strong>página web </strong>é simplesmente um documento que é renderizado ("mostrado") por um <a href="https://developer.mozilla.org/pt-BR/docs/Glossario/Navegador">navegador</a>. Tais documentos são escritos com uso da linguagem {{Glossary("HTML")}} (a qual iremos ver em maiores detalhes em <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">outros artigos</a>). Uma página web pode possuir uma variedade de diferentes tipos de recursos incorporados a ela, como:</p>

<ul>
 <li><em>informação de estilo </em>— controlando como a página se apresenta e se comporta (<em>look-and-feel</em>)</li>
 <li><em>scripts</em> — os quais são responsáveis por adicionar interatividade à página</li>
 <li><em>mídia</em> — imagens, sons e vídeos.</li>
</ul>

<div class="note">
<p><strong>Nota:  </strong>Navegadores também são capazes de renderizar outros documentos, como arquivos {{Glossary("PDF")}} ou imagens, porém o termo <strong>página web </strong>se refere especificamente a documentos HTML. Todavia, usaremos apenas o termo <strong>documento</strong>.</p>
</div>

<p>Todas as páginas web disponíveis na web são alcançáveis através de um único endereço. Para acessar uma página, basta digitar seu endereço na barra de endereços do seu navegador:</p>

<p style="text-align: center;"><img alt="Example of a web page address in the browser address bar" src="https://mdn.mozillademos.org/files/8529/web-page.jpg" style="height: 239px; width: 650px;"></p>

<h3 id="Site">Site</h3>

<p>Um <em>site</em> é um conjunto de páginas web vinculadas (mais os recursos associados a elas) que compartilham um único nome de domínio. Cada página web de um dado website provê links explícitos - na maior parte do tempo na forma de texto clicável - que possibilitam a um usuário mover-se de uma página do website à outra.</p>

<p>Para acessar um website, digite o nome de domínio na barra de endereço do seu navegador, e então o navegador irá mostrar a página web principal daquele website, ou a <em>homepage</em> (casualmente referenciada como "a <em>home</em>").</p>

<p><img alt="Example of a web site domain name in the browser address bar" src="https://mdn.mozillademos.org/files/8531/web-site.jpg" style="display: block; height: 365px; margin: 0px auto; width: 650px;"></p>

<p>Os conceitos de página web e de website são especialmente fáceis de se confundir quando um <em>website  </em>possui apenas uma <em>página web</em>. Websites com esta característica são ocasionalmente chamados de <em>websites de página única </em>(<em>single-page website</em>).</p>

<h3 id="Servidor_web">Servidor web</h3>

<p>Um <em>servidor </em><em>web </em>nada mais é que um computador hospedando um ou mais <em>websites</em>. "Hospedar" significa que todas as <em>páginas web </em>e seus arquivos auxiliares estão disponíveis a partir daquele computador. O <em>servidor web </em>enviará qualquer <em>página web </em>a partir do <em>website </em>que está hospedado nele para o navegador de qualquer usuário que o tenha requisitado (feito uma <em>requisição</em>).</p>

<p>Não confunda <em>websites </em>e <em>servidores</em>. Por exemplo, caso você ouça alguém dizer: "Meu website não está respondendo", isto atualmente significa que o <em>servidor web </em>não está respondendo, logo o <em>website </em>encontra-se indisponível. Mais importante, uma vez que um único servidor web é capaz de hospedar múltiplos <em>websites</em>, o termo <em>servidor web </em>nunca deve ser empregado para se referir a um website, uma vez que isso pode provocar uma grande confusão. Em nosso exemplo anterior, caso disséssemos: "Meu servidor web não está respondendo", significaria que todos os websites hospedados naquele servidor específico encontrariam-se indisponíveis.</p>

<h3 id="Mecanismos_de_Pesquisa">Mecanismos de Pesquisa</h3>

<p>Mecanismos de pesquisa são uma fonte comum de confusão na web. Um mecanismo de pesquisa é um tipo especial de website que auxilia usuários a encontrar páginas web de <em>outros </em>websites.</p>

<p>Há um número abundante destas ferramentas: <a href="https://www.google.com/">Google</a>, <a href="https://www.bing.com/">Bing</a>, <a href="https://www.yandex.com/">Yandex</a>, <a href="https://duckduckgo.com/">DuckDuckGo</a> e diversos outros. Alguns são genéricos, outros especializam-se em tópicos específicos. Utilize qualquer um de sua preferência.</p>

<p>Muitos iniciantes na web confundem mecanismos de pesquisa e navegadores. Tornemos tudo mais claro: um <strong>navegador</strong> é uma aplicação de software que recupera e renderiza páginas web; um <strong>mecanismo de pesquisa</strong> é um website que ajuda pessoas a encontrarem páginas web de outros websites. A confusão ocorre porque, da primeira vez que alguém executa um navegador, este mostra uma página inicial de um mecanismo de pesquisa. Este comportamento faz sentido, pois, evidentemente, a primeira coisa que você deseja fazer com um navegador é encontrar uma página web para renderizar. Não confunda a infraestrutura (neste caso, o navegador) com o serviço (aqui representado pelo mecanismo de pesquisa). A distinção irá ajudá-lo muito, mas mesmo alguns profissionais tendem a falar de forma mais informal, portanto não se preocupe com isso.</p>

<p>Aqui há uma instância do Firefox mostrando uma caixa de pesquisa do Google como sua página inicial padrão:</p>

<p><img alt="Example of Firefox nightly displaying a custom Google page as default" src="https://mdn.mozillademos.org/files/8533/search-engine.jpg" style="display: block; height: 399px; margin: 0px auto; width: 650px;"></p>

<h2 id="Próximos_passos">Próximos passos</h2>

<ul>
 <li>Escavando a fundo: <a href="/en-US/docs/Learn/What_is_a_web_server">O que é um servidor web</a></li>
 <li>Veja como páginas web são vinculadas dentro de um website: <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_hyperlinks">Entendendo links na web</a></li>
</ul>
