---
title: Passo-a-Passo
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
tags:
  - Extensões Web
  - extensões firefox
  - passo-a-passo
translation_of: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
original_slug: Mozilla/Add-ons/WebExtensions/Passo-a-Passo
---
<p>Neste artigo iremos criar uma Extensão para Firefox do início ao fim.</p>

<p>A extensão adicionará um novo botão na barra de ferramentas do Firefox. Quando clicar no botão se exibirá um popup habilitando a escolha de um animal. Uma vez que o usuário escolher um animal, a página atual do navegador será substituida por uma imagem do animal escolhido.</p>

<p>Para implementar esse extensão, será necessário:</p>

<ul>
 <li><strong>definir a ação do navegador, que é um botão ligado a barra de ferramentas</strong>.<br>
  Para o botão nós iremos fornecer:
  <ul>
   <li>um icone chamado "beasts.png"</li>
   <li>um popup para abrir quando o botão for pressionado. O popup irá ter incluso HTML, CSS e JavaScript.</li>
  </ul>
 </li>
 <li><strong>escrever um content script, "beastify.js" que irá ser injetado na página web</strong>.<br>
  Este é o código que irá modificar a página.</li>
 <li><strong>empacotar alguma imagens de animais para substituir na página</strong>.<br>
  Nós iremos criar as imagens "web accessible resources" então a página poderá referenciar eles.</li>
</ul>

<p>Você pode visualizar toda a estrutura da extensão da seguinte forma:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11467/beastify-anatomy.svg" style="display: block; height: 664px; margin-left: auto; margin-right: auto; width: 500px;"></p>

<p>É uma extensão extremamente simples, mas mostra muitos conceitos básicos da API de Extensões:</p>

<ul>
 <li>adicionando um botão na barra de ferramentas</li>
 <li>Definindo um panel de popup usando HTML, CSS e JavaScript</li>
 <li>Injetando content scripts nas páginas</li>
 <li>comunicação entre content scripts e o resto das extensões</li>
 <li>empacotando recursos com sua extensão que serão usadas nas páginas</li>
</ul>

<p>Você pode encontrar o código completo da extensão no <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">GitHub</a>.</p>

<p>Para criar essa extensão você precisará do Firefox 45 ou mais recente.</p>

<h2 id="Escrevendo_a_WebExtension">Escrevendo a WebExtension</h2>

<p>Crie um novo diretório e navegue até ele:</p>

<pre class="brush: bash">mkdir beastify
cd beastify</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>Agora crie um novo arquivo chamado "manifest.json", e insira o seguinte conteúdo:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "applications": {
    "gecko": {
      "id": "beastify@mozilla.org"
    }
  },

  "permissions": [
    "http://*/*",
    "https://*/*"
  ],

  "browser_action": {
    "default_icon": "button/beasts.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]

}
</pre>

<ul>
 <li>As primeiras três chaves : <strong><code>manifest_version</code></strong>, <strong><code>name</code></strong>, e <strong><code>version</code></strong>, são obrigatórias e contém metadados básicos para a extensão.</li>
 <li><strong><code>permissions</code></strong> lista as permisões que a extensão precisa. Nós iremos apenas perguntar se pediremos permissão para modificar todas as páginas HTTP e HTTPS : veja a documentação para as chaves de  <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code>. Nós prefirimos por usar a permissão <code>activeTab</code> aqui , mas atualmente não é suportada pela Firefox.</li>
 <li><strong><code>browser_action</code></strong> especifica o botão da barra de ferramentas. Iremos fornecer três informações aqui:
  <ul>
   <li><strong><code>default_icon</code></strong> é obrigatório, e aponta para o icone do botão</li>
   <li><strong><code>default_title</code></strong> é opicional, e mostra a mensagem em um tooltip</li>
   <li><strong><code>default_popup</code></strong> é usado se você quer que um popup seja mostrado quando o usuário clicar no botão. Nós fazemos isto, então incluímos esta chave e apontamos para um arquivo HTML incluído na extensão.</li>
  </ul>
 </li>
 <li><strong><code>web_accessible_resources</code></strong> lista arquivos que queremos criar tornar acessível para as páginas. Uma vez que a extensão substitui as imagens da página com imagens que já empacotamos com a extensão , nós precisamos fazer estas imagens acessíveis à página.</li>
</ul>

<p>Perceba que todos os caminhos são relativos ao manifest.json.</p>

<h3 id="O_Botão_na_barra_de_ferramentas">O Botão na barra de ferramentas</h3>

<p>O botão na barra de ferramentas precisa de um icone,  e nosso manifest.json informa que nós teriamos um icone em "button/beasts.png".</p>

<p>Crie o diretório "button" e copie o icone com o nome "beasts.png". Você poderá usar um dos nossos <a href="https://github.com/mdn/webextensions-examples/blob/master/beastify/button/beasts.png">exemplo,</a> que é retirado do  <a href="https://www.iconfinder.com/iconsets/free-retina-icon-set">Aha-Soft’s Free Retina iconset</a> e usado sob os termos de sua <a href="http://www.iconbeast.com/faq/">licença</a>.</p>

<p>Se você não fornecer um popup, então um evento de click é lançado para sua extensão quando o usuário clicar no botão. Se você fornecer um popup, o evento de click não envia, mas ao invés disso, o popup é aberto. Nós queremos abrir um popup, então vamos criá-lo na próxima etapa.</p>

<h3 id="O_popup">O popup</h3>

<p>A função do popup é ativar a escolha do usuário para um dos três animais.</p>

<p>Crie um novo diretório chamado "popup" na raiz do projeto. Aqui é onde nós criar os códigos para o popup. O popup irá ser constituido em três arquivos :</p>

<ul>
 <li><strong><code>choose_beast.html</code></strong> Define o conteúdo do panel</li>
 <li><strong><code>choose_beast.css</code></strong> Estilo do conteúdo</li>
 <li><strong><code>choose_beast.js</code></strong> Captura a escolha do usuário executando um content script a aba ativa</li>
</ul>

<h4 id="choose_beast.html">choose_beast.html</h4>

<p>O arquivo HTML criado é este:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;link rel="stylesheet" href="choose_beast.css"/&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div class="beast"&gt;Frog&lt;/div&gt;
    &lt;div class="beast"&gt;Turtle&lt;/div&gt;
    &lt;div class="beast"&gt;Snake&lt;/div&gt;

    &lt;script src="choose_beast.js"&gt;&lt;/script&gt;
  &lt;/body&gt;

&lt;/html&gt;</pre>

<p>Nós temos um elemento para cada escolha de animal. Perceba que nós incluimos os arquivo CSS e JS nesse arquivo, igual a uma página web.</p>

<h4 id="choose_beast.css">choose_beast.css</h4>

<p>O CSS ajusta o tamanho do popup, garantindo que as três escolhas irão preencher o espaço, e daremos a eles algum estilo básico:</p>

<pre class="brush: css">html, body {
  height: 100px;
  width: 100px;
  margin: 0;
}

.beast {
  height: 30%;
  width: 90%;
  margin: 3% auto;
  padding-top: 6%;
  text-align: center;
  font-size: 1.5em;
  background-color: #E5F2F2;
  cursor: pointer;
}

.beast:hover {
  background-color: #CFF2F2;
}</pre>

<h4 id="choose_beast.js">choose_beast.js</h4>

<p>No JavaScript para o popup, nós iremos "escutar" o evento de click . Se o clique foi em uma das três escolhas de animais, nós iremos injetar um content script na aba ativa. Um vez que o content script é carregado , nós enviaremos uma mensagem com o animal escolhido:</p>

<pre class="brush: js">document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("beast")) {
    return;
  }

  var chosenBeast = e.target.textContent;

  chrome.tabs.executeScript(null, {
    file: "/content_scripts/beastify.js"
  });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {beast: chosenBeast});
  });

});
</pre>

<p>É usado três funções da API WebExtension:</p>

<ul>
 <li><strong><code>chrome.tabs.executeScript</code></strong> Para injetar um content script que se encontra em "content_scripts/beastify.js" na aba ativa</li>
 <li><strong><code>chrome.tabs.query</code></strong> Obter a aba ativa</li>
 <li><strong><code>chrome.tabs.sendMessage</code></strong> para enviar uma mensagem para o content scripts executando na aba ativa. A mensagem irá conter as propriedades do animal escolhido.</li>
</ul>

<h3 id="O_content_script">O content script</h3>

<p>Crie a novo diretório na pasta root do projeto chamado "content_scripts" e crie um novo arquivo com o nome "beastify.js", com o seguinte conteúdo:</p>

<pre class="brush: js">// Assign beastify() as a listener for messages from the extension.
chrome.runtime.onMessage.addListener(beastify);

function beastify(request, sender, sendResponse) {
  removeEverything();
  insertBeast(beastNameToURL(request.beast));
  chrome.runtime.onMessage.removeListener(beastify);
}

function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

function insertBeast(beastURL) {
  var beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}

function beastNameToURL(beastName) {
  switch (beastName) {
    case "Frog":
      return chrome.extension.getURL("beasts/frog.jpg");
    case "Snake":
      return chrome.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return chrome.extension.getURL("beasts/turtle.jpg");
  }
}

</pre>

<p>O content script  adiciona um listener da mensagem para a extensão (especificamente , para "choose_beast.js"). No listener:</p>

<ul>
 <li>remover todos os elementos em <code>document.body</code></li>
 <li>transforma os nomes dos animais em uma URL para ser usada na imagem</li>
 <li>Cria uma tag <code>&lt;img&gt;</code>, e insere no DOM</li>
 <li>Remove a mensagem da listener</li>
</ul>

<h3 id="Os_animais">Os animais</h3>

<p>Finalmente, nós precisamos incluir as imagens dos animais.</p>

<p>Crie um novo diretório chamado "beasts", e adicione as três imagens nos diretório, com os nomes apropriados. Você pode obter as imagens aqui no <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts">GitHub</a>, ou aqui:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11459/frog.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"><img alt="" src="https://mdn.mozillademos.org/files/11461/snake.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"><img alt="" src="https://mdn.mozillademos.org/files/11463/turtle.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"></p>

<h2 id="Empacotando_e_instalando">Empacotando e instalando</h2>

<p>Verifique se os seus arquivos estão estruturados de acordo com as informações abaixo:</p>

<pre>beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    button/
        beasts.png

    content_scripts/
        beastify.js

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json</pre>

<p>Extensões Firefox são empacotados como arquivos XPI, que são apenas arquivos ZIP com a extensão "XPI".</p>

<p>Um truque é que o arquivo ZIP  deve ser um dos arquivos de extensão . Portanto, para criar um XPI a partir dos arquivos beastify , navegue até o diretório " beastify " em um shell de comando e digite:</p>

<pre class="brush: bash">   # in beastify/
   zip -r ../beastify.xpi *</pre>



<p>Ou você pode compactar com alguma ferramenta do tipo WinRar escolhe a forma de empacotação ZIP e subistituir .zip para XPI</p>

<p>Para instalar o XPI, você apenas irá abrir o Firefox:</p>

<ul>
 <li>Vá até o Arquivos, seleciona Abrir arquivo, ou pressione Ctrl/Cmd+O</li>
 <li>selecione "beastify.xpi" na caixa de dialógo que abriu</li>
</ul>

<p>Você deverá receber um aviso de que você está instalando uma extensão não assinada. Aceite o aviso de advertência.</p>

<p>Você poderá ver o icone aparecer na barra de ferramentas. Abra uma nova página web, então click no icone, selecione um animal e veja a imagem que você escolheu na página.</p>
