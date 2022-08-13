---
title: Anatomia de uma WebExtension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
tags:
  - Extensões
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
original_slug: Mozilla/Add-ons/WebExtensions/Anatomia_de_uma_WebExtension
---
<p>Uma extensão consiste de uma coleção de arquivos, empacotados para distribuição e instalação. Nesse artigo vamos falar rapidamente sobre os arquivos que podem estar presentes em uma extensão.</p>

<p>Toda extensão contém um arquivo chamado <a href="/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#manifest.json">"manifest.json"</a>. Ele pode conter ponteiros para quatro outros tipos de arquivos:</p>

<ul>
 <li><a href="/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_pages">background pages</a>: implementação de lógica de longa duração</li>
 <li><a href="/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts">content scripts</a>: executado no contexto de páginas web</li>
 <li><a href="/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Browser_actions">browser action files</a>: implementação de botões na toolbar</li>
 <li><a href="/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Web_accessible_resources">web accessible resources</a>: torna o conteúdo do pacote acessível a páginas web e scripts de conteúdo</li>
</ul>

<p><img alt="" src="https://mdn.mozillademos.org/files/11465/webextension-anatomy.svg" style="display: block; height: 871px; margin-left: auto; margin-right: auto; width: 600px;"></p>

<h2 id="manifest.json">manifest.json</h2>

<p>Esse é o único arquivo que está presente em toda WebExtension. Ele contém metadados básicos sobre a extensão, tais como o nome, a versão e as permissões que ela necessita. Também provê ponteiros para outros arquivos na extensão.</p>

<p>Para mais detalhes sobre o arquivo "manifest.json", acesse a <a href="/en-US/Add-ons/WebExtensions/manifest.json">página de referência.</a></p>

<h2 id="Background_pages">Background pages</h2>

<p>Muitas vezes as WebExtensions precisam manter um estado ou performance operativa de longa duração, independentemente do ciclo de vida das páginas ou janelas do navegador. As background pages e os scripts servem pra isso.</p>

<p>Background scripts são carregados assim que a extensão tem sua carga concluída, e permanecem carregados até que ela seja desativada ou desinstalada. No script você pode fazer uso de qualquer uma das WbExtensions APIs.</p>

<p>Os background scripts não possuem acesso direto às páginas web. No entanto, eles podem carregar scripts de conteúdo na página, e podem se comunicar com os scripts de conteúdo usando uma API de envio de mensagens.</p>

<p>Você pode incluir uma background page usando a chave <code>background</code> no "manifest.json". Você não precisa informar a sua própria background page. Se você incluir uma página de background, um arquivo vazio será criado.</p>

<pre class="brush: json">// manifest.json

"background": {
  "scripts": ["background-script.js"]
}</pre>

<p>No entanto, você pode escolher informar a página de background como um arquivo HTML a parte:</p>

<pre class="brush: json">// manifest.json

"background": {
  "page": "background-page.html"
}</pre>

<h2 id="Scripts_de_conteúdo">Scripts de conteúdo</h2>

<p>Use os scripts de conteúdo para acessar e manipular páginas web. Scripts de conteúdo são carregados dentro das páginas web e executados em um contexto particular nessa página.</p>

<p>Eles podem ver e manipular páginas DOM,</p>

<p>Scripts de conteúdo podem ver e manipular o DOM das páginas, da mesma forma como os scripts normais carregados pela página.</p>

<p>Ao contrário dos scripts normais, os scripts de conteúdo podem:</p>

<ul>
 <li>fazer requisições XHR cross-domain</li>
 <li>utilizar um pequeno subconjunto de WebExtension APIs</li>
 <li>trocar mensagens com os scripts de background e acessar indiretamente todas as WebExtensions APIs.</li>
</ul>

<p>Scripts de conteúdo não podem acessar diretamente os scripts normais da página, mas podem trocar mensagens com eles através do uso da API window.postMessage.</p>

<p>Normalmente, quando falamos de scripts de conteúdo, estamos nos referindo a JavaScript, mas é possível injetar CSS em paginas web que utilizam o mesmo mecanismo.</p>

<p>Você pode injetar scripts de conteúdo em páginas web de duas formas: anexando os scripts para todas as páginas correspondentes a um padrão de URL, ou através de programação a partir de um script de background.</p>

<p>Para injetar scripts em páginas com base na URL, use a chave <code>content_scripts</code> no "manifest.json", informando um ou mais scripts e um array com os padrões:</p>

<pre class="brush: json">// manifest.json

"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["my-script.js"]
  }
]</pre>

<p>Se a URL da página corresponder aos padrões passados na chave <code>matches</code>, os scripts passados na chave <code>js</code> serão carregados.</p>

<p>Para injetar os scripts na página via programação (por exemplo, quando o usuário clicar em um botão) use a API <code>tabs</code>:</p>

<pre class="brush: js">// background.js

chrome.tabs.executeScript({
  file: "my-script.js"
});</pre>

<p>Aprenda mais sobre scripts de conteúdo lendo sua <a href="/en-US/Add-ons/SDK/Guides/Content_Scripts">documentação</a>.</p>

<h2 id="Ações_de_navegador">Ações de navegador</h2>

<p>Uma "ação de navegador" é um botão que você pode adicionar na barra de ferramentas do Firefox. O botão tem um ícone. Você pode informar múltiplos ícones em diferentes tamanhos:  fazendo isso, o navegador irá selecionar o ícone mais adequado para a densidade de pixels da tela.</p>

<p>Opcionalmente, você pode definir um popup para o botão usando HTML, CSS e JavaScript.</p>

<p>Se você não definir um popup, quando o usuário clicar no botão um evento será disparado, que pode ser ouvido nos scripts de background.</p>

<p>Se você define um popup, o evento não é disparado: ao invés disso, o popup será mostrado para que o usuário possa interagir. Os scripts executados em popup são capazes de utilizar WebExtension APIs.</p>

<p>Para aprender mais sobre ações de navegador, consulte a página da API.</p>

<h2 id="Recursos_acessíveis_na_web">Recursos acessíveis na web</h2>

<p>Recursos acessíveis na web são recursos como imagens, HTML, CSS, JavaScript, que podem ser incluídos na extensão e quer tornar acessível aos scripts de conteúdo e aos scripts da página. Eles podem ser referenciados a partir de scripts de página e de conteúdo, usando um URI scheme especial.</p>

<p>Por exemplo, se um script de conteúdo quer inserir algumas imagens em páginas da web, você pode incluí-los na extensão e torná-los acessíveis na web. Em seguida o script de conteúdo pode criar e acrescentar tags <a href="/en-US/docs/Web/HTML/Element/img">img</a> que fazem referência às imagens através do atributo <code>src</code>.</p>

<p>Para entender mais, veja a documentação sobre chaves no manifest.json em <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources">recursos acessíveis na web.</a></p>
