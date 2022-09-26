---
title: Configurando o Node como ambiente de desenvolvimento
slug: Learn/Server-side/Express_Nodejs/development_environment
tags:
  - Express
  - Iniciante
  - Introdução
  - Node
  - nodejs
  - npm
  - server-side
  - web server
translation_of: Learn/Server-side/Express_Nodejs/development_environment
original_slug: Learn/Server-side/Express_Nodejs/ambiente_de_desenvolvimento
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}</div>

<p class="summary">Agora que você sabe para que serve o Express, nós vamos lhe mostrar como configurar e testar o ambiente Node/Express no Windows, Linux (Ubuntu) e macOS. Independentemente do sistema operacional que você prefere, este artigo deve lhe proporcionar o que você precisa para desenvolver aplicativos em Express.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-Requisitos:</th>
   <td>Saber como abrir um terminal/linha de comando. Saber como instalar pacotes de software no sistema operacional do computador utilizado para desenvolvimento</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Configurar o ambiente de desenvolvimento para Express (X.XX) em seu computador</td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_geral_do_ambiente_de_desenvolvimento_do_Express">Visão geral do ambiente de desenvolvimento do Express</h2>

<p><em>Node</em> e <em>Express </em>facilitam a configuração de seu computador para começar a desenvolver aplicações web. Esta seção fornece uma visão ampla de quais ferramentas serão necessárias, explica alguns métodos simples para instalar o Node (e Express) no Ubuntu, macOS e Windows e também mostra como você pode testar sua aplicação.</p>

<h3 id="O_que_é_o_ambiente_de_desenvolvimento_Express">O que é o ambiente de desenvolvimento Express?</h3>

<p>O ambiente de desenvolvimento <em>Express</em> inclui uma instalação do <em>Nodejs, </em>o pacote de gerenciamento<em> NPM </em>e (opcionalmente) o <em>Gerador de Aplicações Express </em>em seu computador local.</p>

<p>O <em>Node </em>e o <em>NPM </em>são instalados em conjunto por meio de um pacote binário preparado, instaladores, pacotes de gerenciamento de sistemas operacionais ou diretamente da fonte (como mostra a seção seguinte). O <em>Express </em>é então instalado pelo NPM como uma dependência de sua aplicação web <em>Express </em>individual (junto a outras bibliotecas como motores de modelo, drivers de banco de dados, autenticações middleware, middleware para arquivos estáticos, etc.)</p>

<p>NPM também pode ser utilizado para instalar (globalmente) o Express Application Generator, uma ferramenta que cria um "esqueleto" de um app Express, seguindo o padrão MVC. O gerador de app é opcional porque você não precisa dessa ferramenta para criar um app ou um construtor Express para ter a mesma arquitetura. Nós vamos usá-lo nesta seção porque nos permite iniciar uma aplicação de uma maneira mais rápida e promover uma estrutura modular.</p>

<div class="note">
<p><strong>Nota:</strong> Ao contrário de muitos outros framework que não oferecem um servidor web junto ao ambiente de desenvolvimento, o Node/Express cria e roda o seu próprio servidor web.</p>
</div>

<p>Há outras ferramentas periféricas que integram o ambiente de desenvolvimento, é o caso dos editores de textos (códigos), conhecidos como IDE, e versionadores de códigos, como o Git, que ajudam a gerenciar diferentes versões do código. Estamos partindo da ideia de que você já conhece essas ferramentas e as têm instaladas (em especial o editor de texto).</p>

<h3 id="Quais_sistemas_operacionais_têm_suporte">Quais sistemas operacionais têm suporte?</h3>

<p><em>Node</em> roda em Windows, macOS, diferentes versões do Linux, Docker, etc. Há uma lista de sistemas suportados que pode ser encontrada na página de <a href="https://nodejs.org/en/download/">Downloads</a> do Nodejs. Quase todos os computadores pessoais têm o que é necessário para rodar o Node. O Express roda no ambiente Node e, consequentemente, roda em qualquer plataforma que roda o <em>Node</em>.</p>

<p>Neste artigo, vamos abordar as instruções de configuração para Windows, macOS, e Ubuntu Linux.</p>

<h3 id="Qual_versão_do_NodeExpress_você_deve_usar">Qual versão do Node/Express você deve usar?</h3>

<p>Há várias <a href="https://nodejs.org/en/blog/release/">versões do Node</a> - as mais recentes contém correção de bugs, suporte para EMCAScript (JavaScript) e melhorias nas APIs do Node.</p>

<p>De maneira geral, você deve usar a versão mais recente do LTS (long-term supported), pois é a mais estável do que a versão "current". Além disso, você deve usar a versão current apenas se precisar de alguma funcionalidade que não está presente na versão LTS.</p>

<p>Para o Express, você deve usar sempre a versão mais completa.</p>

<h3 id="Sobre_o_banco_de_dados_e_outras_dependências">Sobre o banco de dados e outras dependências?</h3>

<p>Outras dependências, como database drivers, engine para templates, ferramentas para autenticação, etc, são parte da aplicação e são importadas para o ambiente a partir do NPM. Nós vamos falar sobre essa parte mais para frente.</p>

<h2 id="Instalando_o_Node">Instalando o Node</h2>

<p>Para utilizar o Express, você terá que instalar o Nodejs e o <a href="https://docs.npmjs.com/">NPM</a> em seu sistema operacional. Nas seções a seguir, vamos explicar o jeito mais fácil de instalar a versão LTS do Nodejs no Ubuntu Linux 16.04, macOS e Windows 10.</p>

<div class="note">
<p><strong>Dica:</strong> As seções abaixo mostram o jeito mais fácil de instalar o NPM nos Sistemas Operacionais. Se você utilizar outro sistema ou quer ver uma abordagem diferente para as plataformas atuais acesse <a href="https://nodejs.org/en/download/package-manager/">Instalando Node.js via NPM</a> (nodejs.org).</p>
</div>

<h3 id="Windows_e_macOS">Windows e macOS</h3>

<p>Instalar o Node e o NPM no Windows ou no macOS é uma tarefa rápida e simples. Siga os seguintes passos:</p>

<ol>
 <li>Baixar o instalador:
  <ol>
   <li>Vá para <a href="https://nodejs.org/en/">https://nodejs.org/en/</a></li>
   <li>Selecione o botão de download da versão LTS, que é a recomendada para a maioria dos usuários.</li>
  </ol>
 </li>
 <li>Instale o Node ao clicar duas vezes no arquivo de download. Siga a instalação a partir das janelas que vão aparecer na sua tela.</li>
</ol>

<h3 id="Ubuntu_16.04">Ubuntu 16.04</h3>

<p>O jeito mais fácil de instalar a versão LTS do Node é usar o NPM a partir do Ubuntu <em>binary distributions repository</em>. Isso pode ser feito de uma maneira muito simples. Rode os seguintes comandos no seu terminal.</p>

<pre class="brush: bash notranslate"><code>curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs</code>
</pre>

<div class="warning">
<p><strong>Atenção:</strong> Não faça a instalação direto do repositório normal do Ubuntu pois ele contém versões antigas do Node.</p>
</div>

<ol>
</ol>

<h3 id="Testando_a_instalação_do_Nodejs_e_do_NPM">Testando a instalação do Nodejs e do NPM</h3>

<p>O jeito mais fácil de testar se tudo correu bem na instalação é checar qual a versão do Node está rodando no computador. Para isso, vá ao terminal/command prompt e digite o seguinte comando para retornar a resposta com a versão mais recente.</p>

<pre class="brush: bash notranslate">&gt;node -v
v8.9.4</pre>

<p>O <em>NPM</em> também deve ter sido instalado. Você pode checar da seguinte maneira:</p>

<pre class="brush: bash notranslate">&gt;npm -v
5.6.0</pre>

<p>Uma maneira um pouco mais divertida de testar é criar um servidor web em "puro node". Vamos imprimir a tradicional frase "Hello World" no browser quando visitarmos uma determinada URL.</p>

<ol>
 <li>Crie um arquivo chamado hellonode.js e cole dentro dele o código abaixo. Estamos usando apenas o Node, sem o Express, e com sintaxe do ES6.
  <pre class="brush: js notranslate">//Chame o módulo HTTP
var http = require("http");

//Crie um servidor HTTP para ouvir as requisições na porta 8000
http.createServer(function (request, response) {

   // Configure o resposta HTTP header com o HTTP status e Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Envie a resposta do body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Imprima URL para acessar o servidor
console.log('Server running at http://127.0.0.1:8000/')
</pre>

  <p>O código importa o módulo "http" e o utiliza para criar um servidor (<code>createServer()</code>) que escuta as requisições HTTP na porta 8000. O script, então, imprime a mensagem no console. A função <code>createServer()</code> recebe como argumento uma função callback que é chamada quando recebe uma requisição HTTP - isso retorna uma resposta com um status 200 ("OK") do HTTP e o texto "Hello World".</p>
 </li>
 <li>
  <div class="note">
  <p><strong>Nota:</strong>  Não se preocupe se você não entendeu exatamente o que esse código faz. Nós vamos explicar isso em mais detalhes quando iniciarmos a parte do Express.</p>
  </div>
 </li>
 <li>Inicie o servidor e navegue pelo mesmo diretório que o seu arquivo hellonode.js no terminal. Depois chame o Node da seguinte forma:
  <pre class="brush: bash notranslate">&gt;node hellonode.js
Server running at http://127.0.0.1:8000/
</pre>
 </li>
 <li>Navegue até a URL (<a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a>). Se tudo estiver funcionando bem, o browser vai apresentar a frase "Hello World".</li>
</ol>

<h2 id="Usando_o_NPM">Usando o NPM</h2>

<p>Ao lado do próprio Node, o NPM é a ferramenta de trabalho mais importante nas aplicações Node. O NPM é usado para buscar qualquer pacote (biblioteca JavaScript) que uma aplicação precisa para ser desenvolvida, testada ou produzida, além de ser adotado para rodar testes ao longo de todo o processo de desenvolvimento.</p>

<div class="note">
<p><strong>Nota:</strong> A partir da perspectiva do Node, Express é um pacote que precisa ser instalado utilizando o NPM e depois importado para o seu código.</p>
</div>

<p>Você pode usar o NPM separadamente para buscar cada pacote desejado. Em geral, nós gerenciamos as dependências com um arquivo chamado <a href="https://docs.npmjs.com/files/package.json">package.json</a>. Esse arquivo lista todas as dependências para um pacote JavaScript específico, incluindo o nome do pacote, a versão, descrição, arquivo de inicialização, produção de dependências, desenvolvimento de dependências, versões do Node que podem ser utilizadas. O <strong>package.json</strong> contém tudo que o NPM precisa para buscar e rodar a sua aplicação (se você está escrevendo uma biblioteca para ser reutilizável, você pode usar essa definição para fazer o upload do pacote para o repositório npm e deixá-lo acessível a qualquer usuário).</p>

<h3 id="Adicionando_dependências">Adicionando dependências</h3>

<p>Os passos seguintes mostram como baixar pacotes via NPM, salvá-los nas dependências do projeto e importá-los/chamá-los para dentro da aplicação Node.</p>

<div class="note">
<p><strong>Nota:</strong>  Nesta seção mostraremos como buscar e instalar o pacote do Express. Depois, explicaremos como esse e outros pacotes já estão especificados para nós graças ao <em>Express Application Generator</em>. É  muito importante entendermos como o NPM funciona e o que é criado com o generator. </p>
</div>

<ol>
 <li>Primeiro passo é criar um diretório para sua aplicação. No prompt, insira os comandos a seguir.
  <pre class="brush: bash notranslate">mkdir myapp
cd myapp</pre>
 </li>
 <li> Use o comando <code>npm init</code> para criar o arquivo <strong>package.json</strong> da sua aplicação. Esse comando registra para você uma série de informações, como o nome e a versão do seu aplicativo, além do nome do seu "entry point" (<strong>index.js</strong> por padrão). Por hora, vamos manter a configuração padrão.
  <pre class="brush: bash notranslate">npm init</pre>

  <p>Se você acessar o arquivo <strong>package.json</strong> (<code>cat packge.json</code>), você verá toda a configuração padrão e, ao final, o tipo de licença que o app está utilizando.</p>

  <pre class="brush: json notranslate">{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC"
}
</pre>
 </li>
 <li>Agora, instale o Express dentro do diretório <strong>myapp</strong>. O pacote será salvo automaticamente na lista de dependências do seu <strong>package.json</strong>.</li>
 <li>
  <pre class="brush: bash notranslate">npm install express</pre>

  <p>A lista de dependências do <strong>package.json</strong> agora mostra também a versão do Express que estamos usando. Está grifada no final do arquivo.</p>

  <pre class="brush: json notranslate">{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC",
<strong>  "dependencies": {
    "express": "^4.16.2"
  }</strong>
}
</pre>
 </li>
 <li>Para usar o Express, é preciso incluir a função <code>require()</code> no arquivo index.js dentro da sua aplicação. Crie esse arquivo agora mesmo na pasta raiz "<strong>myapp</strong>" e inclua o código a seguir.
  <pre class="notranslate"><code><strong>var express = require('express')</strong>
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(</code>8000<code>, function () {
  console.log('Example app listening on port </code>8000<code>!')
})</code>
</pre>

  <p>O código mostra uma aplicação web bem simples cujo objetivo único é imprimir a mensagem "HelloWorld". Em linhas gerais, esse arquivo importa o módulo do express e o utiliza para criar um servidor (<code>app</code>) que escuta as requisições HTTP pela porta 8000 e imprime a mensagem no console, além de definir qual URL usada para testar o servidor. A função <code>app.get()</code> responde apenas às requisições HTTP feitas com o método GET, desde que especificadas com o path ('/'). Nesse caso, chamando a função para enviar a mensagem <em>Hello World</em>!</p>
 </li>
 <li>Rode a linha de comando abaixo para iniciar o servidor.
  <pre class="brush: bash notranslate">&gt;node index.js
Example app listening on port 8000
</pre>
 </li>
 <li>Vá para a seguinte URL (<a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a>). Se tudo estiver funcionando corretamente, o browser vai mostrar a mensagem "Hello World!".</li>
</ol>

<h3 id="Desenvolvendo_dependências">Desenvolvendo dependências</h3>

<p>Se você utilizar uma dependência apenas durante o desenvolvimento da aplicação, é recomendado que você a salve como uma "development dependency". Dessa forma, o pacote não será utilizado no ambiente de produção. Por exemplo: caso utilizar o pacote <a href="http://eslint.org/">esling</a> (JavaScript Linting), você faria a instalação via NPM da seguinte forma.</p>

<pre class="brush: bash notranslate"><code>npm install eslint --save-dev</code></pre>

<p>Assim, a esling vai aparecer da seguinte forma na lista de dependências do <strong>package.json</strong>.</p>

<pre class="brush: js notranslate">  "devDependencies": {
    "eslint": "^4.12.1"
  }
</pre>

<div class="note">
<p><strong>Note:</strong> "<a href="https://en.wikipedia.org/wiki/Lint_(software)">Linters</a>" são ferramentas que nos ajudam a identificar e reportar que o código está sendo escrito dentro das melhores práticas.</p>
</div>

<h3 id="Rodando_tarefas">Rodando tarefas</h3>

<p>Além de definir e buscar dependências, você também pode nomear scripts dentro do seu arquivo <strong>package.json</strong> e chamar o NPM para executá-lo a partir de um <a href="https://docs.npmjs.com/cli/run-script">run-script</a> command. Essa abordagem é comum para automatizar testes e tarefas ao longo do desenvolvimento (por exemplo: minificar o JavaScript, reduzir imagens, LINT/análise de códigos, etc).</p>

<div class="note">
<p><strong>Nota:</strong> Ferramentas de automação de tarefas como o <a href="http://gulpjs.com/">Gulp</a> e o <a href="http://gruntjs.com/">Grunt</a> também podem ser utilizados, além de outros pacotes externos. </p>
</div>

<p>Para definir o script que roda o <em>esling</em>, citado na seção acima, nós precisamos adicionar o seguinte bloco no nosso <strong>package.json</strong> (importante: sua aplicação precisa ter como source está na pasta /src/js):</p>

<pre class="brush: js notranslate">"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
</pre>

<p>Explicando um pouco mais: <code>eslint src/js</code> é o comando que colocamos no nosso terminal para rodar o <code>eslint</code> nos arquivos JavaScript situados no diretório <code>src/js</code> dentro do diretório do nosso app. Incluindo o comando, criamos o comando de atalho - <code>lint</code>.</p>

<pre class="brush: bash notranslate"><code>npm run-script lint
# OR (using the alias)
npm run lint</code>
</pre>

<p>O exemplo pode não parecer mais curto do que o comando original, mas com o que você aprendeu é possível incluir comandos bem maiores dentro do npm scripts, como as cadeias de múltiplos comandos. Você pode até escrever um único script npm para rodar todos os seus testes de uma só vez.</p>

<h2 id="Instalando_o_Express_Application_Generator">Instalando o Express Application Generator</h2>

<p>O <a href="https://expressjs.com/en/starter/generator.html">Express Application Generator</a> é uma ferramenta que cria "esqueleto" para aplicações Express. A instalação é realizada via NPM como mostrada a seguir (o comando <code>-g</code> instala a pacote globalmente, ou seja, você pode acessá-lo de qualquer lugar do seu computador).</p>

<pre class="notranslate"><code>npm install express-generator -g</code></pre>

<p>Para criar um aplicativo Express chamado "helloworld" com as configurações padrões, vá até o local/pasta em que você deseja desenvolver o projeto e escreva a seguinte linha de comando:</p>

<pre class="brush: bash notranslate">express helloworld</pre>

<div class="note">
<p>Nota:  Você também pode definir a biblioteca de template que pretende usar e muitas outras configurações. Use o comando <code>help</code> para ver todas as opções. </p>

<pre class="brush: bash notranslate">express --help
</pre>
</div>

<p>O NPM vai criar um novo aplicativo Express em uma subpasta na localização em que você está. O progresso será apresentado no console. Para finalizar, o processo, a ferramenta mostrará os comandos que você precisa seguir para instalar a dependência Node e iniciar o seu app.</p>

<div class="note">
<p>O novo app terá um arquivo package.json no diretório raiz. Você pode abrir esse arquivo para checar o que foi instalado, incluindo o Express e Jade (template library) .</p>

<pre class="brush: js notranslate">{
  "name": "helloworld",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.18.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.15.5",
    "jade": "~1.11.0",
    "morgan": "~1.9.0",
    "serve-favicon": "~2.4.5"
  }
}</pre>
</div>

<p>Instale todas as dependências para o app helloworld com o NPM, de acordo com os comandos abaixo:</p>

<pre class="brush: bash notranslate">cd helloworld
npm install
</pre>

<p>Agora, rode o aplicativo (o comando muda um pouco entre Windows, Linux/macOS), como está no código a seguir:</p>

<pre class="brush: bash notranslate"># Rode o helloworld no Windows
SET DEBUG=helloworld:* &amp; npm start

# Rode helloworld no Linux/macOS
DEBUG=helloworld:* npm start
</pre>

<p>O comando DEBUG gera um loggin bem útil, apresentando resultados, como abaixo:</p>

<pre class="brush: bash notranslate">&gt;SET DEBUG=helloworld:* &amp; npm start

&gt; helloworld@0.0.0 start D:\Github\expresstests\helloworld
&gt; node ./bin/www

  helloworld:server Listening on port 3000 +0ms</pre>

<p>Abre um browser e navegue para <a href="http://127.0.0.1:3000/">http://127.0.0.1:3000/</a> e veja a página default apresentada pelo aplicativo.</p>

<p><img alt="Express - Generated App Default Screen" src="https://mdn.mozillademos.org/files/14331/express_default_screen.png" style="border-style: solid; border-width: 1px; display: block; height: 301px; margin: 0px auto; width: 675px;"></p>

<p>Vamos falar mais sobre o "gerador" quando chegarmos ao artigo referente à geração de esqueletos de uma aplicação.</p>

<ul>
</ul>

<h2 id="Sumário">Sumário</h2>

<p>Agora você tem o desenvolvimento do Node pronto para rodar no seu computador e que pode ser utilizado para criar aplicações web com o framework Express. Você também viu como o NPM é utilizado para importar o Express em sua aplicação e como criar um esqueleto a partir do Express Aplication Generator.</p>

<p>No próximo artigo, nós vamos iniciar um tutorial para construir uma aplicação web completa utilizando esse ambiente junto com as ferramentas.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://nodejs.org/en/download/">Downloads</a> página (nodejs.org)</li>
 <li><a href="https://nodejs.org/en/download/package-manager/">Installing Node.js via package manager</a> (nodejs.org)</li>
 <li><a href="http://expressjs.com/en/starter/installing.html">Installing Express</a> (expressjs.com)</li>
 <li><a href="https://expressjs.com/en/starter/generator.html">Express Application Generator</a> (expressjs.com)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}</p>

<h2 id="Outros_módulos">Outros módulos</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">Express/Node introduction</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment">Setting up a Node (Express) development environment</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">Express Tutorial: The Local Library website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Part 2: Creating a skeleton website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose">Express Tutorial Part 3: Using a Database (with Mongoose)</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Express Tutorial Part 4: Routes and controllers</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/forms">Express Tutorial Part 6: Working with forms</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/deployment">Express Tutorial Part 7: Deploying to production</a></li>
</ul>
