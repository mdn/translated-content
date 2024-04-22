---
title: Segurança de aplicações web Django
slug: Learn/Server-side/Django/web_application_security
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}

Proteger dados do usuário é uma parte essencial de qualquer projeto de website. Anteriormente, explicamos algumas das ameaças de segurança mais comuns no artigo [Web security](/pt-BR/docs/Web/Security) — esse artigo fornece uma demonstração prática de como as proteções internas de Django lidam com essas ameaças.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Ler o tópico "<a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/First_steps/Website_security"
          >Website security</a
        >" de Programação Server-side. Conclua os tópicos do tutorial Django
        tutorial até (e incluindo) pelos menos
        <a href="/pt-BR/docs/Learn/Server-side/Django/Forms"
          >Tutorial Django Parte 9: Trabalhando com formulários</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Para entender as principais coisas que você precisa fazer (ou não fazer)
        para proteger seu aplicatico web Django.
      </td>
    </tr>
  </tbody>
</table>

## Visão geral

O tópico [Website security](/pt-BR/docs/Web/Security) fornece uma visão geral do que a segurança de website siginifica para o projeto server-side e algumas das ameaças mais comuns contra as quais você deve se proteger. Uma das mensagens chave nesse artigo é que quase todos os ataques são bem sucedidos quando a aplicação web confia nos dados do navegador.

> **Aviso:** **Importante:** A lição mais importante que você pode aprender sobre segurança de website é **nunca confiar nos dados do navegador**. Isso inclui dados de requisição GET em parâmetros de URL, dados `POST`, cabeçalhos HTTP e cookies, arquivos enviados por usuários, etc. Sempre verifique e "desinfete" todos os dados recebidos. Sempre assuma o pior.

A boa notícia para usuários Django é que muitas das ameaças mais comuns são tratadas pelo framework! O artigo [Segurança no Django](https://docs.djangoproject.com/en/2.0/topics/security/) (Django docs) explica os recursos de segurança e como proteger um website desenvolvido pelo Django.

## Ameaças/proteções comuns

Em vez de duplicar a documentação do Django aqui, neste artigo demonstraremos apenas alguns dos recursos de segurança no contexto do nosso tutorial Django da [LocalLibrary](/pt-BR/docs/Learn/Server-side/Django/Tutorial_local_library_website).

### Cross site scripting (XSS)

XSS é um termo utilizado para descrever uma classe de ataques que permitem um invasor injetar scripts no lado cliente, através do website, no navegador de outros usuários. Issi geralmente é conseguido armazenando scripts maliciosos no banco de dados onde eles podem ser recuperado e exibidos para outros usuários, ou fazendo com que usuários cliquem em um link que fará com que o JavaScript do invasor seja executado pelo navegador do usuário.

O sistema de _templates_ do Django protege você da maioria dos ataques XSS [escapando de caracteres específicos](https://docs.djangoproject.com/en/2.0/ref/templates/language/#automatic-html-escaping) que são "perigosos" em HTML. Podemos demonstrar isso tentando injetar algum JavaScript em nosso website LocalLibrary usando o _form_ Create-author que configuramos em [Django Tutorial Parte 9: Trabalhando com formulários](/pt-BR/docs/Learn/Server-side/Django/Forms).

1. Inicie o website usando o servidor de desenvolvimento (`python3 manage.py runserver`).
2. Abra o site em seu navegador local e faça login em sua conta de superusuário.
3. Navegue até a página de criação do autor (que deve estar na URL: [`http://127.0.0.1:8000/catalog/author/create/`](http://127.0.0.1:8000/catalog/author/create/)).
4. Digite os nomes e os detalhes de data para um novo usuário, e então acrescente o seguinte texto no campo Last Name :
   `<script>alert('Test alert');</script>`.
   ![Author Form XSS test](author_create_form_alert_xss.png)

   > **Nota:** Este é um script inofensivo que, se executado, exibirá uma caixa de alerta em seu navegador. Se o alerta é exibido quando você submeter o registro então o site está vulnerável a ameaças XSS.

5. Pressione **Submit** para salvar o registro.
6. Quando você salvar o autor, ele será exibido como mostrado abaixo. Por causa das proteções XSS o `alert()` não deve ser executado. Em vez disso o script é exibido como texto simples.![Author detail view XSS test](author_detail_alert_xss.png)

Se você visualizar o código fonte da página HTML, poderá ver que os carcteres perigosos para as tags de script foram trasnformadoes em seus equivalentes de código de escape inofensivos (ex. `>` agora é `&gt;`)

```html
<h1>
  Author: Boon&lt;script&gt;alert(&#39;Test alert&#39;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Usar templates Django protege você contra a maioria dos ataques de XSS. No entanto, é possível desativar esta proteção, e a proteção não é automaticamente aplicada a todas as tags que normalmente não seriam preenchidas pela entrada do usuário (por exemplo, o `help_text` em um campo de formulário normalmente não é preechido pelo usuário, então Django não escapa esses valores).

Também é possível que os ataques XSS se originem de outra fonte de dados não confiável, como cookies, webservices ou upload de arquivos (sempre que os dados não forem suficientemente limpos antes de serem incluídos em uma página). Se estiver exibindo dados dessas fontes, então pode ser necessário adicionar seu próprio código de limpeza.

### Proteção contra Cross site request forgery (CSRF)

Ataques CSRF permitem que um usuário malicioso execute ações usando as credenciais de outro usuário sem o conhecimento ou consentimento desse usuário. Por exemplo, considere o caso em que temos um hacker que quer criar autores adicionais para nossa LocalLibrary.

> **Nota:** Obviamente nosso hacker não está nisso por dinheiro! Um hacker mais ambicioso poderia usar a mesma abordagem em outros sites para realizar tarefas muito mais prejudiciais (ex. transferir dinheiro para suas prórpias contas, etc.)

Para fazer isso, eles podem criar um arquivo HTML como o abaixo, que contém um form de criação de autor (como o que usamos na seção anterior) que é enviado assim que o arquivo é carregado. Eles então enviariam o arquivo para todos os bibliotecários e sugeririam que eles abrissem o arquivo (ele contém algumas informações inofensivas, honestamente!). Se o arquivo for aberto por qualquer bibliotecário logado, o formulário será enviado com suas credenciais e um novo autor será criado.

```html
<html>
  <body onload="document.EvilForm.submit()">
    <form
      action="http://127.0.0.1:8000/catalog/author/create/"
      method="post"
      name="EvilForm">
      <table>
        <tr>
          <th><label for="id_first_name">First name:</label></th>
          <td>
            <input
              id="id_first_name"
              maxlength="100"
              name="first_name"
              type="text"
              value="Mad"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_last_name">Last name:</label></th>
          <td>
            <input
              id="id_last_name"
              maxlength="100"
              name="last_name"
              type="text"
              value="Man"
              required />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_birth">Date of birth:</label></th>
          <td>
            <input id="id_date_of_birth" name="date_of_birth" type="text" />
          </td>
        </tr>
        <tr>
          <th><label for="id_date_of_death">Died:</label></th>
          <td>
            <input
              id="id_date_of_death"
              name="date_of_death"
              type="text"
              value="12/10/2016" />
          </td>
        </tr>
      </table>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Execute o servidor web de desenvolvimento e faça login com a conta de superusuário. Copie o texto acima em um arquivo e abra-o no navegado. Você deve obter um erro de CSRF, porque Django tem protteção contra esse tipo de coisa!

A forma como a proteção é habilitada é incluindo a tag de template `{% csrf_token %}` em sua definição de formulário. Esse token é então renderizado em seu HTML como mostrado abaixo com um valor que é específico para o usuário no navegador atual.

```html
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
```

Django gera uma chave específica de usuário/navegador e irá rejeitar formulários que não contenham o campo, ou que contenham um valor de campo incorreto para o usuário/navegador.

Para usar esse tipo de ataque o hacker agora precisa descobrir e incluir a chave CSRF para o usuário alvo específico. Eles também não podem usar a abordagem "scattergun" de enviar um arquivo malicioso para todos bibliotecários e esperar que um deles abra, já que a chave CSRF é específica do navegador.

A proteção CSRF do Django é ativada por padrão. Você deve sempre usar a tag de template `{% csrf_token %}` em seus formulários e utilizar `POST` para requisições que podem alterar ou adicionar dados ao banco de dados.

### Outras proteções

Django also provides other forms of protection (most of which would be hard or not particularly useful to demonstrate):

- Proteção contra Injeção de SQL
  - : As vulnerabilidades de injeção de SQL (SQL injection) permitem usuários mal-intencionados executarem código SQL arbitrário em um banco de dados, permitindo que dados sejam acessados, modificados ou apagados independentemente das permissões do usuário. Em quase todos os casos você acessará o banco de dados usando querysets/models do Django, de mdo que o SQL resultante será devidamente escapado pelo driver de banco de dados subjacente. Se você precisa escrever consultas brutas ou SQL customizado precisará pensar explicitamente sobre como previnir injeção de SQL.
- Proteção contra Clickjacking
  - : Nesse ataque, um usuário malicioso sequestra clicks destinados a um site de visível no nível superior e os encaminha para uma página oculta abaixo. Essa técnica pode ser usada, por exemplo, para exibir um site de banco legítimo, mas capturar as credenciais de login em um [`<iframe>`](/pt-BR/docs/Web/HTML/Element/iframe) invisível, controlado pelo atacante. O Django possui [proteção contra clickjacking](https://docs.djangoproject.com/en/2.0/ref/clickjacking/#clickjacking-prevention) na forma do [`X-Frame-Options middleware`](https://docs.djangoproject.com/en/2.0/ref/middleware/#django.middleware.clickjacking.XFrameOptionsMiddleware) que, em um navegador de suporte, pode impedir que um site seja renderizado dentro de um frame.
- Aplicação de SSL/HTTPS
  - : SSL/HTTPS pode ser habilitado no servidor web para criptografar todo o tráfego entre o site e o navegador, incluindo credenciais de autenticação que seriam enviadas em texto simples (habilitar HTTPS é altamente recomendado). Se HTTPS estiver habilitado o Django fornece uma série de outras proteções que você pode utilizar:

<!---->

- [`SECURE_PROXY_SSL_HEADER`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_PROXY_SSL_HEADER) pode ser utilizado para verificar se o conteúdo é seguro, mesmo se for recebido de um proxy não HTTP.
- [`SECURE_SSL_REDIRECT`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_SSL_REDIRECT) é usado para redirecionar todas as requisições HTTP para HTTPS.
- Usar [HTTP Strict Transport Security](https://docs.djangoproject.com/en/2.0/ref/middleware/#http-strict-transport-security) (HSTS). Este é um cabeçalho HTTP que informa ao navegador que todas as conexões futuras com um determinado site devem sempre utilizar HTTPS. Combinada com o redirecionamento de requisições HTTP para HTTPS, essa configuração garante que HTTPS é sempre usado depois que uma conexão bem-sucedida ocorrer. HSTS pode ser configurado com [`SECURE_HSTS_SECONDS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_SECONDS) e [`SECURE_HSTS_INCLUDE_SUBDOMAINS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SECURE_HSTS_INCLUDE_SUBDOMAINS) ou no servidor web.
- Usar cookies "seguros" definindo [`SESSION_COOKIE_SECURE`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-SESSION_COOKIE_SECURE) e [`CSRF_COOKIE_SECURE`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-CSRF_COOKIE_SECURE) como `True`. Isso garantirá que os cookies sejam enviados apenas por HTTPS.

<!---->

- Validação de cabeçalho de host
  - : Usar [`ALLOWED_HOSTS`](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-ALLOWED_HOSTS) para aceitar apenas requisições de hosts confiáveis.

Existem muitas outras proteções, e ressalvas para o uso dos mecanismos acima. Embora esperamos que isso tenha dado a você uma visão geral do que o Django oferece, você ainda deve ler a documentação de segurança de Django.

## Resumo

Django tem proteções eficazes contra uma série de ameaças comuns, incluindo ataques XSS e CSRF. Neste artigo demonstramos como essas ameaças específicas são tratadas pelo Django em nosso website _LocalLibrary_. Também fornecemos uma breve visão geral de algumas das outras proteções.

Esta foi uma incursão muito breve em segurança web. Nós recomendamos fortemente que você leia [Segurança no Django](https://docs.djangoproject.com/en/2.0/topics/security/) para obter um entendimento mais profundo.

A próxima e última etapa neste módulo sobre Django é concluir a [tarefa de avaliação](/pt-BR/docs/Learn/Server-side/Django/django_assessment_blog).

## Veja também

- [Segurança no Django](https://docs.djangoproject.com/en/2.0/topics/security/) (Django docs)
- [Segurança de website no lado do servidor](/pt-BR/docs/Web/Security) (MDN)
- [Segurança web](/pt-BR/docs/Web/Security) (MDN)
- [Protegendo seu site](/pt-BR/docs/Web/Security/Securing_your_site) (MDN)

{{PreviousMenuNext("Learn/Server-side/Django/Deployment", "Learn/Server-side/Django/django_assessment_blog", "Learn/Server-side/Django")}}
