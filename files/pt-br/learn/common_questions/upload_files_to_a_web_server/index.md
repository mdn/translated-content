---
title: Como eu faço o upload de arquivos para um servidor web ?
slug: Learn/Common_questions/Upload_files_to_a_web_server
tags:
  - FTP
  - GitHub
  - Iniciante
  - MecanismosWeb
  - hospedagem
  - rsync
  - sftp
translation_of: Learn/Common_questions/Upload_files_to_a_web_server
---
<div class="summary">
<p>Este artigo mostra como publicar seu site online usando ferramentas de transferência de arquivos.</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos :</th>
   <td>Você deve saber  <a href="https://developer.mozilla.org/en-US/Learn/What_is_a_web_server">what a web server is</a> e <a href="https://developer.mozilla.org/en-US/Learn/Understanding_domain_names">how domain names work</a>. Você também deve saber como <a href="/en-US/Learn/Set_up_a_basic_working_environment">set up a basic environment</a> e como <a href="/en-US/Learn/HTML/Write_a_simple_page_in_HTML">write a simple webpage</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Aprender como enviar arquivos para um servidor usando as várias ferramentas de transferências de arquivos disponíveis.</td>
  </tr>
 </tbody>
</table>

<h2 id="Resumo">Resumo</h2>

<p>Se você construiu uma página web básica (veja <a href="/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML basics</a>, por exemplo), provavelmente desejará colocá-la online, em um servidor da web. Neste artigo, discutiremos como fazer isso, usando várias opções disponíveis, como clientes SFTP, RSync e Github.</p>

<h2 id="SFTP">SFTP</h2>

<p>Existem vários clientes SFTP . Nossa demo cobre o FileZilla, já que é gratuito e está disponível para Windows, macOS e Linux. Para instalar o FileZilla, vá para a página de downloads do FileZilla, clique no botão Download grande e instale a partir do arquivo de instalação da maneira usual.</p>

<div class="note">
<p><strong>Nota</strong>: Claro que existem outras opções. Consulte <a href="/en-US/Learn/How_much_does_it_cost#Publishing_tools.3A_FTP_client">Publishing tools</a> para mais informações.</p>
</div>

<p>Abra o FileZilla, você verá algo semelhante a isso: </p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15767/filezilla-ui.png" style="display: block; height: 451px; margin: 0px auto; width: 690px;"></p>

<h3 id="Logging_in">Logging in</h3>

<p>Para este exemplo, vamos supor que nosso provedor de hospedagem (o serviço que hospedará nosso servidor web HTTP) seja uma empresa fictícia ,"Example hosting provider" , cujos URLs são semelhantes a este:  <code>mypersonalwebsite.examplehostingprovider.net</code>.</p>

<p>Acabamos de abrir uma conta e receber estas informações : </p>

<blockquote>
<p>Parabéns por abrir uma conta no Example Hosting Provider.</p>

<p>Sua conta: <code>demozilla</code></p>

<p>Seu site estará disponível em :   <code>demozilla.examplehostingprovider.net</code></p>

<p>Para publicar nessa conta, conecte-se por meio do SFTP com as seguintes credenciais :</p>

<ul>
 <li>Servidor SFTP: <code>sftp://demozilla.examplehostingprovider.net</code></li>
 <li>Usuário: <code>demozilla</code></li>
 <li>Senha: <code>quickbrownfox</code></li>
 <li>Porta: <code>5548</code></li>
 <li>Para publicar na web, coloque seus arquivos no diretório <code>Public/htdocs</code> .</li>
</ul>
</blockquote>

<p>Primeiramente, olhe em <code>http://demozilla.examplehostingprovider.net/</code> — como você pode ver até o momento, não há nada lá :</p>

<p><img alt="Our demozilla personal website, seen in a browser: it's empty" src="https://mdn.mozillademos.org/files/9615/demozilla-empty.png" style="border-style: solid; border-width: 1px; display: block; height: 233px; margin: 0 auto; width: 409px;"></p>

<div class="note">
<p><strong>Nota</strong>: Dependendo do seu provedor de hospedagem, na maioria das vezes você verá uma página dizendo algo como como "Este site é hospedado por [serviço de hospedagem]".Isso é claro, quando você acessa seu endereço da web pela primeira vez.</p>
</div>

<p>Para conectar seu cliente SFTP ao servidor, siga estas etapas:</p>

<ol>
 <li>Escolha o arquivo<em> &gt; Site Manager(Gerenciador de sites)...</em> no menu principal.</li>
 <li>Na janela do gerenciador de site, vá em novo site e preencha o nome do site como <strong>demozilla</strong> no espaço fornecido.</li>
 <li>Preencha o servidor SFTP que seu host forneceu no campo <em>Host:</em> field.</li>
 <li>Em <em>Logon Type(tipo de LogOn):</em> Escolha normal  e ,em seguida , preencha com o nome de usuário e a senha fornecida nos campos relevantes.</li>
 <li>Preencha a porta correta e outras informações.</li>
</ol>

<p>Sua janela estará semelhante a esta: </p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15769/site-manager.png" style="display: block; height: 561px; margin: 0px auto; width: 684px;"></p>

<p>Agora pressione <em>Connect</em> para conectar ao servidor SFTP.</p>

<p>Nota: Atenção, certifique-se de que seu provedor de hospedagem oferece conexão SFTP (FTP seguro) ao seu espaço de hospedagem. O FTP é inerentemente inseguro e você não deve usá-lo.</p>

<h3 id="Visão_local_e_remota">Visão local e remota</h3>

<p>Depois de conectada, sua tela deve ser semelhante a esta (conectamos a um exemplo nosso para lhe dar uma ideia):</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15768/connected.png" style="border-style: solid; border-width: 1px; display: block; height: 199px; margin: 0px auto; width: 700px;"></p>

<p>Vamos analisar o que você está vendo:</p>

<ul>
 <li>No painel esquerdo central, você vê seus arquivos locais. Navegue até o diretório onde você armazena seu site (e.g. <code>mdn</code>).</li>
 <li>No painel direito central, você vê arquivos remotos.Estamos conectados em nossa raiz FTP distante(Nesse caso, <code>users/demozilla</code>)</li>
 <li>No momento, você pode ignorar os painéis inferiores e superiores.Respectivamente, trata-se de um log de mensagens que mostra o status de conexão entre seu computador e o servidor SFTP e um log em tempo real de cada interação entre seu cliente SFTP e o servidor.</li>
</ul>

<h3 id="Enviando_para_o_servidor">Enviando para o servidor </h3>

<p>Nossas instruções de host de exemplo nos disseram "Para publicar na web, coloque seus arquivos no diretório <code>Public/htdocs</code> " Você precisa navegar até o diretório especificado no painel direito. Este diretório é efetivamente a raiz do seu site — onde seu arquivo <code>index.html</code> e outros irão.</p>

<p>Depois de encontrar o diretório remoto correto para colocar seus arquivos, para carregá-los no servidor, você precisa arrastá-los e soltá-los do painel esquerdo para o painel direito.</p>

<h3 id="Eles_estão_realmente_online">Eles estão realmente online ?</h3>

<p>Até agora, tudo bem ,  mas os arquivos estão realmente online ? Você pode verificar novamente voltando ao seu site (e.g. <code>http://demozilla.examplehostingprovider.net/</code>) no seu navegador:</p>

<p><img alt="Here we go: our website is live!" src="https://mdn.mozillademos.org/files/9627/here-we-go.png" style="border-style: solid; border-width: 1px; display: block; height: 442px; margin: 0 auto; width: 400px;"></p>

<p><span lang="fr">E </span><em lang="fr">voilà</em>! Nosso website está vivo!</p>

<h2 id="Rsync">Rsync</h2>

<p>{{Glossary("Rsync")}} é uma ferramenta de sincronização de arquivos local para remoto, que geralmente está disponível na maioria dos sistemas baseados em Unix (como macOS e Linux), mas também existem versões do Windows.</p>

<p>É visto como uma ferramenta mais avançada do que o SFTP, porque por padrão é usado na linha de comando. Um comando básico se parece com isto:</p>

<pre class="brush: bash notranslate">rsync [-options] SOURCE user@x.x.x.x:DESTINATION</pre>

<ul>
 <li><code>-options</code> é um travessão seguido por uma ou mais letras, por exemplo -v para mensagens de erros detalhadas e -b para fazer backups. Você pode ver a lista completa em <a href="https://linux.die.net/man/1/rsync">rsync man page</a> (Pesquise por "Options summary").</li>
 <li><code>SOURCE</code> é o caminho para o arquivo ou diretório local do qual você deseja copiar os arquivos.</li>
 <li><code>user@</code> são as credenciais de usuário no servidor remoto para o qual você deseja copiar os arquivos.</li>
 <li><code>x.x.x.x</code>  é o endereço de IP do servidor remoto.</li>
 <li><code>DESTINATION</code> é o caminho para o local que você deseja copiar seu diretório ou arquivos no servidor remoto.</li>
</ul>

<p>Você precisa obter esses detalhes do seu provedor de hospedagem.</p>

<p>Para mais informações, veja <a href="https://www.atlantic.net/hipaa-compliant-cloud-hosting-services/how-to-use-rsync-copy-sync-files-servers/">How to Use Rsync to Copy/Sync Files Between Servers</a>.</p>

<p>Obviamente, é uma boa ideia usar uma conexão segura, como no FTP. No caso do Rsync, você especifica os detalhes do SSH para fazer a conexão por SSH, usando a opção -e. Por exemplo:</p>

<pre class="brush: bash notranslate">rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION</pre>

<p>Você  pode encontrar mais detalhes sobre o assunto em <a href="https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh">How To Copy Files With Rsync Over SSH</a>.</p>

<h3 id="Ferramentas_Rsync_GUI">Ferramentas Rsync GUI</h3>

<p>Ferramentas GUI estão disponíveis para Rsync (para aqueles que não se sentem tão confortáveis ​​com o uso da linha de comando). <a href="https://acrosync.com/mac.html">Acrosync</a> é uma dessas ferramentas e está disponível para Windows e macOS</p>

<p>Novamente, você teria que obter as credenciais de conexão do seu provedor de hospedagem, mas desta forma você teria uma GUI para inseri-lás.</p>

<h2 id="GitHub">GitHub</h2>

<p>Github permite você publicar páginas por meio do <a href="https://pages.github.com/">GitHub pages</a> (gh-pages).</p>

<p>Cobrimos o básico de como usar isso no <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Publishing_your_website">Publishing your website</a> artigo do guia <a href="/en-US/Learn/Getting_started_with_the_web">Getting started with the Web</a> , então não vamos repetir tudo aqui.</p>

<p>No entanto, é importante saber que você também pode hospedar um site no GitHub, mas usar um domínio personalizado com ele. Para obter um guia detalhado, consulte <a href="https://help.github.com/articles/using-a-custom-domain-with-github-pages/">Using a custom domain with GitHub Pages</a> .</p>

<h2 id="Outros_métodos_para_enviar_arquivos">Outros métodos para enviar arquivos</h2>

<p>O protocolo FTP é um método conhecido de publicação de um site, mas não o único. Aqui estão algumas outras possibilidades:</p>

<ul>
 <li><strong>Web interfaces(Interfaces Web)</strong>. Uma interface HTML que atua como front-end para um serviço de envio de arquivo remoto. Fornecido pelo seu serviço de hospedagem.</li>
 <li><strong>{{Glossary("WebDAV")}}</strong>. Uma extensão do protocolo {{Glossary("HTTP")}} para permitir um gerenciamento de arquivos mais avançado.</li>
</ul>
