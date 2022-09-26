---
title: Instalando os programas básicos
slug: Learn/Getting_started_with_the_web/Installing_basic_software
tags:
  - Aprender
  - Ferramentas
  - Iniciante
  - Mecânica da Web
  - Navegador
  - configuração
  - editor de texto
  - l10:prioridade
translation_of: Learn/Getting_started_with_the_web/Installing_basic_software
original_slug: Aprender/Getting_started_with_the_web/instalando_programas_basicos
---
<div>{{LearnSidebar}}</div>

<div>{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}</div>

<div class="summary">
<p>Em <em>Instalando os programas básicos</em>, mostraremos quais ferramentas você precisa para o desenvolvimento web simples e como instalá-los apropriadamente.</p>
</div>

<h2 id="Quais_ferramentas_os_profissionais_usam">Quais ferramentas os profissionais usam?</h2>

<ul>
 <li><strong>Um computador</strong>. Talvez isso soe óbvio para algumas pessoas, mas alguns de vocês estão lendo esse artigo de um smartphone ou de um computador público. Para um desenvolvimento sério em web, é melhor investir em um desktop ou notebook rodando Windows, macOS ou Linux.</li>
 <li><strong>Um editor de texto</strong>, para escrever código. Pode ser um editor de texto (ex: <a href="https://code.visualstudio.com/">Visual Studio Code</a> (em inglês), <a href="https://notepad-plus-plus.org">Notepad++</a> (em inglês), <a href="https://www.sublimetext.com/">Sublime Text</a> (em inglês), <a href="https://atom.io/">Atom</a> (em inglês), <a href="http://brackets.io/">Brackets</a>, <a href="https://www.gnu.org/software/emacs/">GNU Emacs</a> (em inglês) ou <a href="https://www.vim.org">VIM</a> (em inglês)), ou um editor hibrído (ex: <a href="https://www.adobe.com/br/products/dreamweaver.html">Dreamweaver </a>ou <a href="https://www.jetbrains.com/webstorm/">WebStorm</a> (em inglês)). Editores de documentos do Office não são adequados para esse tipo de uso, pois ele se baseiam em elementos escondidos que interferem com os motores de renderização usados pelos navegadores.</li>
 <li><strong>Navegadores web</strong>, para testar os códigos. Atualmente os navegadores mais usados são <a href="https://www.mozilla.org/pt-BR/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/">Opera</a>, <a href="https://www.apple.com/br/safari/">Safari</a>, <a href="https://support.microsoft.com/pt-br/help/17621/internet-explorer-downloads">Internet Explorer</a> e <a href="https://www.microsoft.com/pt-br/windows/microsoft-edge">Microsoft Edge</a>. Você também deve testar o desempenho do seu site em dispositivos móveis e navegadores antigos que seu público-alvo ainda esteja usando (como o IE 8–10). O <a href="https://lynx.browser.org/">Lynx</a>, um navegador da Web baseado em texto, é ótimo para ver como o site é experimentado por usuários com deficiência.</li>
 <li><strong>Um editor gráfico</strong>, como o <a href="http://www.gimp.org/">GIMP</a> (em inglês), <a href="http://www.getpaint.net/">Paint.NET</a> (em inglês), <a href="https://www.adobe.com/br/products/photoshop.html">Photoshop</a>, or <a href="https://www.adobe.com/products/xd.html">XD</a> , para fazer imagens ou gráficos para suas páginas.</li>
 <li><strong>Um sistema de controle de versão</strong>, para gerenciar arquivos em servidores, colaborar em um projeto com uma equipe, compartilhar códigos e ativos, e evitar conflitos de edição. Atualmente, o <a href="http://git-scm.com/">Git</a> (em inglês) é o sistema de controle de versão mais popular junto com o serviço de hospedagem <a href="https://github.com/">GitHub</a> (em inglês) ou <a href="https://gitlab.com">GitLab</a> (em inglês).</li>
 <li><strong>Um programa de FTP</strong>, usado em contas de hospedagem web mais antigas para gerenciar arquivos em servidores (o <a href="git-scm.com">Git</a> está substituindo cada vez mais o FTP para esse propósito). Existem muitos programas de FTP disponíveis, incluindo o <a href="https://cyberduck.io">Cyberduck</a> (em inglês), o <a href="https://fetchsoftworks.com/">Fetch</a> (em inglês) e o <a href="https://filezilla-project.org">FileZilla</a> (em inglês).</li>
 <li><strong>Um sistema de automação</strong>, como o <a href="http://gruntjs.com/">Grunt</a> (em inglês) ou o <a href="http://gulpjs.com/">Gulp</a> (em inglês), para realizar tarefas repetitivas automaticamente, como por exemplo minificar o código e executar testes.</li>
 <li>Templates, bibliotecas, frameworks, etc., para acelerar a funcionalidade da escrita.</li>
 <li>Além de mais ferramentas!</li>
</ul>

<h2 id="Quais_ferramentas_eu_realmente_preciso_nesse_momento">Quais ferramentas eu realmente preciso nesse momento?</h2>

<p>Isso parece uma lista assustadora, mas felizmente, você pode começar a desenvolver web sem saber nada sobre a maioria deles. Neste artigo, vamos apenas configurá-lo com um mínimo  — um editor de texto e alguns navegadores modernos.</p>

<h3 id="Instalando_um_editor_de_texto">Instalando um editor de texto</h3>

<p>Você provavelmente já tem um editor de texto básico no seu computador. Por padrão, o Windows inclui o <a href="https://en.wikipedia.org/wiki/Microsoft_Notepad">Bloco de Notas</a> (em inglês) e o Mac OS vem com o <a href="https://en.wikipedia.org/wiki/TextEdit">TextEdit</a> (em inglês). Linux varia; Ubuntu vem com o <a href="http://en.wikipedia.org/wiki/Gedit">gedit</a> (em inglês) por padrão.</p>

<p>Para desenvolvimento web, você provavelmente pode ter mais do que o Bloco de Notas ou o TextEdit. Recomendamos começar com o <a href="https://code.visualstudio.com/">Visual Studio Code</a> (em inglês), que é um editor gratuito, que oferece visualizações ao vivo e dicas de código.</p>

<h3 id="Instalando_navegadores_web_modernos">Instalando navegadores web modernos</h3>

<p>Por enquanto, instalaremos alguns navegadores da Web para testar nosso código. Escolha seu sistema operacional abaixo e clique nos links relevantes para fazer o download dos instaladores dos seus navegadores favoritos:</p>

<ul>
 <li>Linux: <a href="https://www.mozilla.org/pt-BR/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/">Opera</a>, <a href="https://brave.com">Brave</a>.</li>
 <li>Windows: <a href="https://www.mozilla.org/pt-BR/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/">Opera</a>, <a href="https://support.microsoft.com/pt-br/help/17621/internet-explorer-downloads">Internet Explorer</a>, <a href="https://www.microsoft.com/pt-br/windows/microsoft-edge">Microsoft Edge</a>, <a href="https://brave.com">Brave</a> (O Windows 10 vem com o Edge por padrão, se você tem o Windows 7 ou acima, você pode instalar o internet explorer 11; caso contrário, você deve instalar um navegador alternativo)</li>
 <li>Mac: <a href="https://www.mozilla.org/pt-BR/firefox/new/">Firefox</a>, <a href="https://www.google.com/chrome/browser/">Chrome</a>, <a href="http://www.opera.com/">Opera</a>, <a href="https://www.apple.com/br/safari/">Safari</a>, <a href="https://brave.com">Brave</a> (Safari vem no iOS e macOS por padrão)</li>
</ul>

<p>Antes de continuar, você deve instalar pelo menos dois desses navegadores e tê-los disponíveis para teste.</p>

<div class="blockIndicator note">
<p>O Internet Explorer não é compatível com alguns recursos modernos da web e pode não ser capaz de executar seu projeto.</p>
</div>

<h3 id="Instalando_um_servidor_web_local">Instalando um servidor web local</h3>

<p>Alguns exemplos precisarão ser executados por um servidor web para funcionar com êxito. Você pode ver como fazer isso em <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Como_configurar_um_servidor_de_testes_local">Como eu configuro um servidor de teste localmente?</a></p>

<p>{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}</p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li id="Installing_basic_software"><a href="/pt-BR/docs/Aprender/Getting_started_with_the_web/instalando_programas_basicos">Instalando os programas básicos</a></li>
 <li id="What_will_your_website_look_like"><a href="/pt-BR/docs/Aprender/Getting_started_with_the_web/com_que_seu_site_vai_parecer">Com será o seu site?</a></li>
 <li id="Dealing_with_files"><a href="/pt-BR/docs/Aprender/Getting_started_with_the_web/lidando_com_arquivos">Lidando com arquivos</a></li>
 <li id="HTML_basics"><a href="/pt-BR/docs/Aprender/Getting_started_with_the_web/HTML_basico">HTML básico</a></li>
 <li id="CSS_basics"><a href="/pt-BR/docs/Aprender/Getting_started_with_the_web/CSS_basico">CSS básico</a></li>
 <li id="JavaScript_basics"><a href="/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico">Javascript básico</a></li>
 <li id="Publishing_your_website"><a href="https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/Publicando_seu_site">Publicando seu site</a></li>
 <li id="How_the_web_works"><a href="/pt-BR/docs/Aprender/Getting_started_with_the_web/Como_a_Web_funciona">Como a web funciona</a></li>
</ul>
