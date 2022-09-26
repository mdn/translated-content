---
title: Como você hospeda seu site no Google App Engine?
slug: Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine
translation_of: Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine
original_slug: Learn/Common_questions/Como_voce_hospeda_seu_site_Google_App_Engine
---
<p class="summary"><a href="https://cloud.google.com/appengine/" title="App Engine - Build Scalable Web &amp; Mobile Backends in Any Language  |  Google Cloud">Google App Engine</a> é uma plataforma poderosa que lhe permite construir e rodar aplicações na infraestrutura do Google —  se você precisa criar um aplicativo da web de várias camadas do zero ou hospedar um site estático. Aqui está um guia passo a passo para hospedar seu site no Google App Engine.</p>

<h2 id="Criando_um_projeto_na_plataforma_do_Google_Cloud">Criando um projeto na plataforma do Google Cloud</h2>

<p>Para usar as ferramentas do Google em seu próprio site ou aplicativo, você precisa criar um novo projeto no Google Cloud Platform. Isso requer ter uma conta do Google.</p>

<ol>
 <li>Vá para o <a href="https://console.cloud.google.com/projectselector/appengine">App Engine dashboard</a> no Google Cloud Platform e apert o botão <em>Create</em> (Criar).</li>
 <li>Se você não criou um projeto antes, precisará selecionar se deseja receber atualizações por email ou não, concordar com os Termos de Serviço e, em seguida, poderá continuar.</li>
 <li>Digite um nome para o projeto, edite a ID do seu projeto e anote-a. Para este tutorial, os seguintes valores são usados
  <ul>
   <li>Nome do projeto: <em>GAE Sample Site</em></li>
   <li>ID do Projeto: <em>gaesamplesite</em></li>
  </ul>
 </li>
 <li>Clique no botão <em>Create</em> para criar o seu projeto.</li>
</ol>

<h2 id="Criando_uma_aplicação">Criando uma aplicação</h2>

<p>Cada projeto do Cloud Platform pode conter um aplicativo do App Engine. Vamos preparar um aplicativo para o nosso projeto.</p>

<ol>
 <li>Precisamos de um aplicativo de amostra para publicar. Se você não tiver um para usar, faça o download e descompacte este <a href="http://gaesamplesite.appspot.com/downloads.html">aplicativo de exemplo</a>.</li>
 <li> Dê uma olhada na estrutura da aplicação padrão — A pasta <code>website</code> contem o conteúdo do seu website e <code>app.yaml</code> é o seu arquivo de configuração da aplicação.
  <ul>
   <li>O conteúdo do seu website deve ser posto dentro da pasta <code>website</code>, e sua página de destino deve ser denominada  <code>index.html</code>, mas fora isso ela pode conter qualquer coisa que você desejar.</li>
   <li>O arquivo <code>app.yaml</code> é um arquivo de configuração que fala ao App Engine como mapear URLs para os seus arquivos estáticos. Você não precisa editá-lo.</li>
  </ul>
 </li>
</ol>

<h2 id="Puplicando_sua_aplicação">Puplicando sua aplicação</h2>

<p>Agora que nós temos o nosso projeto pronto e arquivos padrões de aplicativo colocados juntos, vamos publicar nosso app.</p>

<ol>
 <li>Abra o <a href="https://console.cloud.google.com/cloudshell/editor">Google Cloud Shell</a>.</li>
 <li>Arraste e solte a pasta <code>sample-app</code> dentro do painel esquerdo do editor de código.</li>
 <li>Rode a seguinte linha de comando dentro para selecionar seu projeto:
  <pre class="brush:bash no-line-numbers" style="margin: 1em 0;">gcloud config set project <em>gaesamplesite</em></pre>
 </li>
 <li>Logo após rode o seguinte comando para ir ao diretório do seu app:
  <pre class="brush:bash no-line-numbers" style="margin: 1em 0;">cd <em>sample-app</em></pre>
 </li>
 <li>Você agora está pronto para armazenar sua aplicação, i.e. fazer o upload para o App Engine:
  <pre class="brush:bash no-line-numbers" style="margin: 1em 0;">gcloud app deploy</pre>
 </li>
 <li>Digite um número para escolher a região onde você quer que sua aplicação se localize.</li>
 <li>Digite <code>Y</code> para confirmar.</li>
 <li>Agora navegue no seu navegador para <em>your-project-id</em>.appspot.com to para ver seu website online. Por exemplo, para a ID do projeto <em>gaesamplesite</em>, vá para <a href="http://gaesamplesite.appspot.com/"><em>gaesamplesite</em>.appspot.com</a>.</li>
</ol>

<h2 id="Veja_também">Veja também</h2>

<p>Para aprender mais, veja <a href="https://cloud.google.com/appengine/docs/">Google App Engine Documentation</a>.</p>
