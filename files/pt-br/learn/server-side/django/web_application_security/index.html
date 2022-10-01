---
title: Segurança de aplicações web Django
slug: Learn/Server-side/Django/web_application_security
tags:
  - Aprender
  - Artigo
  - Codificação
  - Iniciante
  - Programação server-side
  - Python
  - Segurança
  - Segurança web
  - django
  - lado servidor (server-side)
translation_of: Learn/Server-side/Django/web_application_security
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}</div>

<p class="summary">Proteger dados do usuário é uma parte essencial de qualquer projeto de website. Anteriormente, explicamos algumas das ameaças de segurança mais comuns no artigo <a href="https://developer.mozilla.org/en-US/docs/Web/Security">Web security</a> — esse artigo fornece uma demonstração prática de como as proteções internas de Django lidam com essas ameaças.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Ler o tópico "<a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security">Website security</a>" de Programação Server-side. Conclua os tópicos do tutorial Django tutorial até (e incluindo) pelos menos <a href="/en-US/docs/Learn/Server-side/Django/Forms">Tutorial Django Parte 9: Trabalhando com formulários</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>Para entender as principais coisas que você precisa fazer (ou não fazer) para proteger seu aplicatico web Django.</td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_geral">Visão geral</h2>

<p>O tópico <a href="https://developer.mozilla.org/en-US/docs/Web/Security">Website security</a> fornece uma visão geral do que  a segurança de website siginifica para o projeto server-side e algumas das ameaças mais comuns contra as quais você deve se proteger. Uma das mensagens chave nesse artigo é que quase todos os ataques são bem sucedidos quando a aplicação web confia nos dados do navegador.</p>

<div class="warning">
<p><strong>Importante:</strong> A lição mais importante que você pode aprender sobre segurança de website é <strong>nunca confiar nos dados do navegador</strong>. Isso inclui dados de requisição GET em parâmetros de URL, dados <code>POST</code>, cabeçalhos HTTP e cookies, arquivos enviados por usuários, etc. Sempre verifique e "desinfete" todos os dados recebidos. Sempre assuma o pior.</p>
</div>

<p>A boa notícia para usuários Django é que muitas das ameaças mais comuns são tratadas pelo framework! O artigo <a href="https://docs.djangoproject.com/en/2.0/topics/security/">Segurança no Django</a> (Django docs) explica os recursos de segurança e como proteger um website desenvolvido pelo Django.</p>

<h2 id="Ameaçasproteções_comuns">Ameaças/proteções comuns</h2>

<p>Em vez de  duplicar a documentação do Django aqui, neste artigo demonstraremos apenas alguns dos recursos de segurança no contexto do nosso tutorial Django da <a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary</a>.</p>

<h3 id="Cross_site_scripting_XSS">Cross site scripting (XSS)</h3>

<p>XSS é um termo utilizado para descrever uma classe de ataques que permitem um invasor injetar scripts no lado cliente, através do website, no navegador de outros usuários. Issi geralmente é conseguido armazenando scripts maliciosos no banco de dados onde eles podem ser recuperado e exibidos para outros usuários, ou fazendo com que usuários cliquem em um link que fará com que o JavaScript do invasor seja executado pelo navegador do usuário.</p>

<p>O sistema de <em>templates</em> do Django protege você da maioria dos ataques XSS <a href="https://docs.djangoproject.com/en/2.0/ref/templates/language/#automatic-html-escaping">escapando de caracteres específicos</a> que são "perigosos" em HTML. Podemos demonstrar isso tentando injetar algum JavaScript em nosso website LocalLibrary  usando o <em>form</em> Create-author que configuramos em <a href="/en-US/docs/Learn/Server-side/Django/Forms">Django Tutorial Parte 9: Trabalhando com formulários</a>.</p>

<ol>
 <li>Inicie o website usando o servidor de desenvolvimento (<code>python3 manage.py runserver</code>).</li>
 <li>Abra o site em seu navegador local e faça login em sua conta de superusuário.</li>
 <li>Navegue até a página de criação do autor (que deve estar na URL: <code><a href="http://127.0.0.1:8000/catalog/author/create/">http://127.0.0.1:8000/catalog/author/create/</a></code>).</li>
 <li>Digite os nomes e os detalhes de data para um novo usuário, e então acrescente o seguinte texto no campo Last Name :<br>
  <code>&lt;script&gt;alert('Test alert');&lt;/script&gt;</code>.<br>
  <img alt="Author Form XSS test" src="https://mdn.mozillademos.org/files/14305/author_create_form_alert_xss.png" style="border-style: solid; border-width: 1px; height: 245px; width: 594px;">
  <div class="note">
  <p><strong>Nota:</strong> Este é um script inofensivo que, se executado, exibirá uma caixa de alerta em seu navegador. Se o alerta é exibido quando você submeter o registro então o site está vulnerável a ameaças XSS.</p>
  </div>
 </li>
 <li>Pressione <strong>Submit</strong> para salvar o registro.</li>
 <li>Quando você salvar o autor, ele será exibido como mostrado abaixo. Por causa das proteções XSS o <code>alert()</code> não deve ser executado. Em vez disso o script é exibido como texto simples.<img alt="Author detail view XSS test" src="https://mdn.mozillademos.org/files/14307/author_detail_alert_xss.png" style="border-style: solid; border-width: 1px; height: 248px; width: 986px;"></li>
</ol>

<p>Se você visualizar o código fonte da página HTML, poderá ver que os carcteres perigosos para as tags de script foram trasnformadoes em seus equivalentes de código de escape inofensivos (ex. <code>&gt;</code> agora é <code>&amp;gt;</code>)</p>

<pre class="brush: html notranslate">&lt;h1&gt;Author: Boon&amp;lt;script&amp;gt;alert(&amp;#39;Test alert&amp;#39;);&amp;lt;/script&amp;gt;, David (Boonie) &lt;/h1&gt;
</pre>

<p>Usar templates Django protege você contra a maioria dos ataques de XSS. No entanto, é possível desativar esta proteção, e a proteção não é automaticamente aplicada a todas as tags que normalmente não seriam preenchidas pela entrada do usuário (por exemplo, o <code>help_text</code> em um campo de formulário normalmente não é preechido pelo usuário, então Django não escapa esses valores).</p>

<p>Também é possível que os ataques XSS se originem de outra fonte de dados não confiável, como cookies, webservices ou upload de arquivos (sempre que os dados não forem suficientemente limpos antes de serem incluídos em uma página). Se estiver exibindo dados dessas fontes, então pode ser necessário adicionar seu próprio código de limpeza.</p>

<h3 id="Proteção_contra_Cross_site_request_forgery_CSRF">Proteção contra Cross site request forgery (CSRF) </h3>

<p>Ataques CSRF permitem que um usuário malicioso execute ações usando as credenciais de outro usuário sem o conhecimento ou consentimento desse usuário. Por exemplo, considere o caso em que temos um hacker que quer criar autores adicionais para nossa LocalLibrary.</p>

<div class="note">
<p><strong>Nota:</strong> Obviamente nosso hacker não está nisso por dinheiro! Um hacker mais ambicioso poderia usar a mesma abordagem em outros sites para realizar tarefas muito mais prejudiciais (ex. transferir dinheiro para suas prórpias contas, etc.)</p>
</div>

<p>Para fazer isso, eles podem criar um arquivo HTML como o abaixo, que contém um form de criação de autor (como o que usamos na seção anterior) que é enviado assim que o arquivo é carregado. Eles então enviariam o arquivo para todos os bibliotecários e sugeririam que eles abrissem o arquivo (ele contém algumas informações inofensivas, honestamente!). Se o arquivo for aberto por qualquer bibliotecário logado, o formulário será enviado com suas credenciais e um novo autor será criado.</p>

<pre class="brush: html notranslate">&lt;html&gt;
&lt;body onload='document.EvilForm.submit()'&gt;

&lt;form action="http://127.0.0.1:8000/catalog/author/create/" method="post" name='EvilForm'&gt;
  &lt;table&gt;
    &lt;tr&gt;&lt;th&gt;&lt;label for="id_first_name"&gt;First name:&lt;/label&gt;&lt;/th&gt;&lt;td&gt;&lt;input id="id_first_name" maxlength="100" name="first_name" type="text" value="Mad" required /&gt;&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th&gt;&lt;label for="id_last_name"&gt;Last name:&lt;/label&gt;&lt;/th&gt;&lt;td&gt;&lt;input id="id_last_name" maxlength="100" name="last_name" type="text" value="Man" required /&gt;&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th&gt;&lt;label for="id_date_of_birth"&gt;Date of birth:&lt;/label&gt;&lt;/th&gt;&lt;td&gt;&lt;input id="id_date_of_birth" name="date_of_birth" type="text" /&gt;&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;th&gt;&lt;label for="id_date_of_death"&gt;Died:&lt;/label&gt;&lt;/th&gt;&lt;td&gt;&lt;input id="id_date_of_death" name="date_of_death" type="text" value="12/10/2016" /&gt;&lt;/td&gt;&lt;/tr&gt;
  &lt;/table&gt;
  &lt;input type="submit" value="Submit" /&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Execute o servidor web de desenvolvimento e faça login com a conta de superusuário. Copie o texto acima em um arquivo e abra-o no navegado. Você deve obter um erro de CSRF, porque Django tem protteção contra esse tipo de coisa!</p>

<p>A forma como a proteção é habilitada é incluindo a tag de template <code>{% csrf_token %}</code> em sua definição de formulário. Esse token é então renderizado em seu HTML como mostrado abaixo com um valor que é específico para o usuário no navegador atual.</p>

<pre class="brush: html notranslate">&lt;input type='hidden' name='csrfmiddlewaretoken' value='0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW' /&gt;
</pre>

<p>Django gera uma chave específica de usuário/navegador e irá rejeitar formulários que não contenham o campo, ou que contenham um valor de campo incorreto para o usuário/navegador.</p>

<p>Para usar esse tipo de ataque o hacker agora precisa descobrir e incluir a chave CSRF para o usuário alvo específico. Eles também não podem usar a abordagem "scattergun" de enviar um arquivo malicioso para todos bibliotecários e esperar que um deles abra, já que a chave CSRF é específica do navegador.</p>

<p>A proteção CSRF do Django é ativada por padrão. Você deve sempre usar a tag de template <code>{% csrf_token %}</code> em seus formulários e utilizar <code>POST</code> para requisições que podem alterar ou adicionar dados ao banco de dados.</p>

<h3 id="Outras_proteções">Outras proteções</h3>

<p>Django also provides other forms of protection (most of which would be hard or not particularly useful to demonstrate):</p>

<dl>
 <dt>Proteção contra Injeção de SQL</dt>
 <dd>As vulnerabilidades de injeção de SQL (SQL injection) permitem usuários mal-intencionados executarem código SQL arbitrário em um banco de dados, permitindo que dados sejam acessados, modificados ou apagados independentemente das permissões do usuário. Em quase todos os casos você acessará o banco de dados usando querysets/models do Django, de mdo que o SQL resultante será devidamente escapado pelo driver de banco de dados subjacente. Se você precisa escrever consultas brutas ou SQL customizado precisará pensar explicitamente sobre como previnir injeção de SQL.</dd>
 <dt>Proteção contra Clickjacking </dt>
 <dd>Nesse ataque, um usuário malicioso sequestra clicks destinados a um site de visível no nível superior e os encaminha para uma página oculta abaixo. Essa técnica pode ser usada, por exemplo, para exibir um site de banco legítimo, mas capturar as credenciais de login em um <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" title="The HTML Inline Frame Element (&lt;iframe>) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frameset, but not both a body and a frameset. However, an &lt;iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window."><code>&lt;iframe&gt;</code></a> invisível, controlado pelo atacante. O Django possui <a href="https://docs.djangoproject.com/en/2.0/ref/clickjacking/#clickjacking-prevention">proteção contra clickjacking</a> na forma do <a href="https://docs.djangoproject.com/en/2.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware" title="django.middleware.clickjacking.XFrameOptionsMiddleware"><code>X-Frame-Options middleware</code></a> que, em um navegador de suporte, pode impedir que um site seja renderizado dentro de um frame.</dd>
 <dt>Aplicação de SSL/HTTPS</dt>
 <dd>SSL/HTTPS pode ser habilitado no servidor web para criptografar todo o tráfego entre o site e o navegador, incluindo credenciais de autenticação que seriam enviadas em texto simples (habilitar HTTPS é altamente recomendado). Se HTTPS estiver habilitado o Django fornece uma série de outras proteções que você pode utilizar:</dd>
</dl>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER"><code>SECURE_PROXY_SSL_HEADER</code></a> pode ser utilizado para verificar se o conteúdo é seguro, mesmo se for recebido de um proxy não HTTP.</li>
 <li><a href="https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT"><code>SECURE_SSL_REDIRECT</code></a> é usado para redirecionar todas as requisições HTTP para HTTPS.</li>
 <li>Usar <a href="https://docs.djangoproject.com/en/2.0/ref/middleware/#http-strict-transport-security">HTTP Strict Transport Security</a> (HSTS). Este é um cabeçalho HTTP que informa ao navegador que todas as conexões futuras com um determinado site devem sempre utilizar HTTPS. Combinada com o redirecionamento de requisições HTTP para HTTPS, essa configuração garante que HTTPS é sempre usado depois que uma conexão bem-sucedida ocorrer. HSTS pode ser configurado com <a href="https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS"><code>SECURE_HSTS_SECONDS</code></a> e <a href="https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS"><code>SECURE_HSTS_INCLUDE_SUBDOMAINS</code></a> ou no servidor web.</li>
 <li>Usar cookies "seguros" definindo <a href="https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE"><code>SESSION_COOKIE_SECURE</code></a> e <a href="https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE"><code>CSRF_COOKIE_SECURE</code></a> como <code>True</code>. Isso garantirá que os cookies sejam enviados apenas por HTTPS.</li>
</ul>

<dl>
 <dt>Validação de cabeçalho de host</dt>
 <dd>Usar <a href="https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-ALLOWED_HOSTS"><code>ALLOWED_HOSTS</code></a> para aceitar apenas requisições de hosts confiáveis.</dd>
</dl>

<p>Existem muitas outras proteções, e ressalvas para o uso dos mecanismos acima. Embora esperamos que isso tenha dado a você uma visão geral do que o Django oferece, você ainda deve ler a documentação de segurança de Django.</p>

<ul>
</ul>

<h2 id="Resumo">Resumo</h2>

<p>Django tem proteções eficazes contra uma série de ameaças comuns, incluindo ataques XSS e CSRF. Neste artigo demonstramos como essas ameaças específicas são tratadas pelo Django em nosso website <em>LocalLibrary</em>. Também fornecemos uma breve visão geral de algumas das outras proteções.</p>

<p>Esta foi uma incursão muito breve em segurança web. Nós recomendamos fortemente que você leia <a href="https://docs.djangoproject.com/en/2.0/topics/security/">Segurança no Django</a> para obter um entendimento mais profundo.</p>

<p>A próxima e última etapa neste módulo sobre Django é concluir a <a href="/en-US/docs/Learn/Server-side/Django/django_assessment_blog">tarefa de avaliação</a>.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.0/topics/security/">Segurança no Django</a> (Django docs)</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Security">Segurança de website no lado do servidor</a> (MDN)</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Security">Segurança web</a> (MDN)</li>
 <li><a href="/en-US/docs/Web/Security/Securing_your_site">Protegendo seu site</a> (MDN)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}</p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Introduction">Introdução ao Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/development_environment">Configurando um ambiente de desenvolvimento Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial Django: Website de uma Biblioteca Local</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/skeleton_website">Tutorial Django Parte 2: Criando a base do website</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Models">Tutorial Django Parte 3: Usando models</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Admin_site">Tutorial Django Parte 4: Django admin site</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Home_page">Tutorial Django Parte 5: Criando nossa página principal</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Generic_views">Tutorial Django Parte 6: Lista genérica e detail views</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Sessions">Tutorial Django Parte 7: Framework de Sessões</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Authentication">Tutorial Django Parte 8: Autenticação de Usuário e permissões</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Forms">Tutorial Django Parte 9: Trabalhando com formulários</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Testing">Tutorial Django Parte 10: Testando uma aplicação web Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/Deployment">Tutorial Django Parte 11: Implantando Django em produção</a></li>
 <li><a rel="nofollow" title="A página ainda não foi criada.">Segurança de aplicações web Django</a></li>
 <li><a href="/pt-BR/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django mini blog</a></li>
</ul>
