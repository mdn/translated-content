---
title: 'Django Tutorial Parte 5: Criando nossa home page'
slug: Learn/Server-side/Django/Home_page
tags:
  - Aprender
  - Artigo
  - Codificação
  - Iniciante
  - Tutorial
  - django
  - django templates
  - django views
  - lado servidor (server-side)
translation_of: Learn/Server-side/Django/Home_page
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}</div>

<p class="summary">Agora estamos prontos para adicionar o código que exibe nossa primeira página completa - uma home page do site <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary</a>. A página inicial mostrará o número de registros que temos para cada tipo de modelo e fornecerá links de navegação na barra lateral para nossas outras páginas. Ao longo do caminho, obteremos experiência prática ao escrever mapas e visualizações básicos de URL, obter registros do banco de dados e usar modelos.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Leia a <a href="/en-US/docs/Learn/Server-side/Django/Introduction">Introdução ao Django</a>. Conclua os tópicos do tutorial anterior (incluindo <a href="/en-US/docs/Learn/Server-side/Django/Admin_site">Django Tutorial Part 4: Django admin site</a>).</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Aprender a criar mapas e visualizações de URL simples (onde nenhum dado é codificado no URL), obtenha dados de modelos e crie modelos.</td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_Global">Visão Global</h2>

<p>Depois de definirmos nossos modelos e criarmos alguns registros iniciais da biblioteca para trabalhar, é hora de escrever o código que apresenta essas informações aos usuários. A primeira coisa que precisamos fazer é determinar quais informações queremos exibir em nossas páginas e definir os URLs a serem usados para retornar esses recursos. Em seguida, criaremos um mapeador de URLs, visualizações e modelos para exibir as páginas.</p>

<p>O diagrama a seguir descreve o fluxo de dados principal e os componentes necessários ao manipular solicitações e respostas HTTP. Como já implementamos o modelo, os principais componentes que criaremos são:</p>

<ul>
 <li>Mapeadores de URL para encaminhar os URLs suportados (e qualquer informação codificada nos URLs) para as funções de exibição apropriadas.</li>
 <li>View functions para obter os dados solicitados dos modelos, crie páginas HTML que exibem os dados e retorne as páginas ao usuário para visualização no navegador.</li>
 <li>Templates para usar ao renderizar dados nas visualizações.</li>
</ul>

<p><img alt="" src="https://mdn.mozillademos.org/files/13931/basic-django.png" style="display: block; margin: 0px auto;"></p>

<p>Como você verá na próxima seção, temos 5 páginas para exibir, o que é muita informação para documentar em um único artigo. Portanto, este artigo se concentrará em como implementar a página inicial e abordaremos as outras páginas em um artigo subsequente. Isso deve fornecer uma boa compreensão completa de como os mapeadores, visualizações e modelos de URL funcionam na prática.</p>

<h2 id="Definindo_os_URLs_do_recurso">Definindo os URLs do recurso</h2>

<p>Como esta versão do <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary </a>é essencialmente somente leitura para usuários finais, precisamos fornecer uma página de destino para o site (uma página inicial) e páginas que exibam visualizações de lista e detalhes de livros e autores.</p>

<p>As URLs que iremos precisar na nossa página são:</p>

<ul>
 <li><code>catalog/</code> — A página inicial (index).</li>
 <li><code>catalog/books/</code> — Uma lista de todos os livros.</li>
 <li><code>catalog/authors/</code> — Uma lista de todos os autores.</li>
 <li><code>catalog/book/<em>&lt;id&gt;</em></code> — A exibição de detalhes de um livro específico, com uma chave primária de campo <code><em>&lt;id&gt;</em></code> (o padrão). Por exemplo, o URL do terceiro livro adicionado à lista será <code>/catalog/book/3</code>.</li>
 <li><code>catalog/author/<em>&lt;id&gt;</em></code><em> </em>— A exibição de detalhes para o autor específico com um campo de chave primária de <em><code>&lt;id&gt;.  </code></em>Por exemplo, o URL do 11º autor adicionado à lista será  <code>/catalog/author/11</code>.</li>
</ul>

<p>Os três primeiros URLs retornarão a página de índice, a lista de livros e a lista de autores. Esses URLs não codificam nenhuma informação adicional e as consultas que buscam dados no banco de dados sempre serão as mesmas. No entanto, os resultados retornados pelas consultas dependerão do conteúdo do banco de dados.</p>

<p>Por outro lado, os dois URLs finais exibirão informações detalhadas sobre um livro ou autor específico. Esses URLs codificam a identidade do item a ser exibido (representado por <code><em>&lt;id&gt;</em></code> acima). O mapeador de URLs extrairá as informações codificadas e as passará para a visualização, e a visualização determinará dinamicamente quais informações serão obtidas do banco de dados. Ao codificar as informações no URL, usaremos um único conjunto de mapeamento de URL, uma visualização e um modelo para lidar com todos os livros (ou autores). </p>

<div class="note">
<p><strong>Nota</strong>: Com o Django, você pode construir suas URLs da maneira que desejar - você pode codificar informações no corpo da URL, como mostrado acima, ou incluir <code>GET</code> parâmetros no URL, por exemplo <code>/book/?id=6</code>. Qualquer que seja a abordagem usada, os URLs devem ser mantidos limpos, lógicos e legíveis, conforme <a href="https://www.w3.org/Provider/Style/URI">recomendado pelo W3C</a>.<br>
 A documentação do Django recomenda informações de codificação no corpo da URL para obter um melhor design da URL.</p>
</div>

<p>Conforme mencionado na visão geral, o restante deste artigo descreve como construir a página index.</p>

<h2 id="Criando_a_página_index">Criando a página index</h2>

<p>A primeira página que criaremos é a página index (<code>catalog/</code>). A pagina index incluirá algum HTML estático, juntamente com "contagens" geradas de diferentes registros no banco de dados. Para fazer isso funcionar, criaremos um mapeamento de URL, uma visualização e um modelo.</p>

<div class="note">
<p><strong>Nota</strong>: Vale a pena prestar um pouco de atenção extra nesta seção. A maioria das informações também se aplica às outras páginas que criaremos.</p>
</div>

<h3 id="Mapeamento_de_URL">Mapeamento de URL</h3>

<p>Quando criamos o <a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">esqueleto do website</a>, atualizamos o arquivo <strong>locallibrary/urls.py</strong> para garantir que sempre que um URL que comece com <code>catalog/</code>  é recebido, o módulo URLConf <code>catalog.urls</code> processará a substring restante.</p>

<p>O seguinte snippet de código de <strong>locallibrary/urls.py </strong>inclui o modulo <code>catalog.urls</code>:</p>

<pre class="notranslate">urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
</pre>

<div class="note">
<p><strong>Nota</strong>: Sempre que o Django encontra a função de importação  <code><a href="https://docs.djangoproject.com/en/2.1/ref/urls/#django.urls.include" title="django.conf.urls.include">django.urls.include()</a></code>, divide a string da URL no caractere final designado e envia a subsequência restante para o módulo URLconf incluído para processamento adicional.</p>
</div>

<p>Também criamos um arquivo de espaço reservado para o modulo <em>URLConf</em>, chamado <strong>/catalog/urls.py</strong>. Adicione as seguintes linhas a esse arquivo: </p>

<pre class="brush: python notranslate">urlpatterns = [
<strong>    path('', views.index, name='index'),</strong>
]</pre>

<p>A função <code>path()</code> define o seguinte:</p>

<ul>
 <li>Um padrão de URL, que é uma sequência vazia: <code>''</code>. Discutiremos detalhadamente os padrões de URL ao trabalhar em outras visualizações.</li>
 <li>A view function that will be called if the URL pattern is detected: <code>views.index</code>,  which is the function named <code>index()</code> in the <strong>views.py </strong>file. </li>
</ul>

<p>A função <code>path()</code> também especifica um parâmetro de nome, que é um identificador exclusivo para esse mapeamento de URL específico. Você pode usar o nome para "reverter" o mapeador, ou seja, para criar dinamicamente um URL que aponte para o recurso que o mapeador foi projetado para manipular. Por exemplo, podemos usar o parâmetro name para vincular à nossa home page a partir de qualquer outra página adicionando o seguinte link em um modelo:</p>

<pre class="brush: html notranslate">&lt;a href="<strong>{% url 'index' %}</strong>"&gt;Home&lt;/a&gt;.</pre>

<div class="note">
<p><strong>Nota</strong>: Podemos codificar o link como em <code>&lt;a href="<strong>/catalog/</strong>"&gt;Home&lt;/a&gt;</code>), mas se alterarmos o padrão da nossa página inicial, por exemplo, para <code>/catalog/index</code>) os modelos não serão mais vinculados corretamente. Usar um mapeamento de URL invertido é muito mais flexível e robusto.</p>
</div>

<h3 id="View_function-based">View (function-based)</h3>

<p>Uma view é uma função que processa uma solicitação HTTP, busca os dados necessários no banco de dados, renderiza os dados em uma página HTML usando um modelo HTML e, em seguida, retorna o HTML gerado em uma resposta HTTP para exibir a página ao usuário. A visualização do índice segue esse modelo - ele busca informações sobre o número de <code>Book</code>, <code>BookInstance</code>, disponibilidade de  <code>BookInstance</code> e registros de <code>Author</code> que temos no banco de dados e passa essas informações para um modelo para exibição.</p>

<p>Abra <strong>catalog/views.py</strong> e observe que o arquivo já importa o <a href="https://docs.djangoproject.com/en/2.1/topics/http/shortcuts/#django.shortcuts.render">render()</a> da função shortcuts para gerar arquivo HTML usando um modelo e dados: </p>

<pre class="brush: python notranslate">from django.shortcuts import render

# Create your views here.
</pre>

<p>Cole as seguintes linhas na parte inferior do arquivo:</p>

<pre class="brush: python notranslate">from catalog.models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)</pre>

<p>A primeira linha importa as classes de models que usaremos para acessar dados em todas as nossas visualizações.</p>

<p>A primeira parte da função view busca o número de registros usando o atributo  <code>objects.all()</code> nas classes de modelo. Também recebe uma lista de objetos de  <code>BookInstance</code> que possuem um valor de 'a' (Disponibilidade) no campo status. Você pode encontrar mais informações sobre como acessar os dados do modelo em nosso tutorial anterior <a href="/en-US/docs/Learn/Server-side/Django/Models#Searching_for_records">Django Tutorial Part 3: Using models &gt; Searching for records</a>.</p>

<p>No final da função view chamamos a função <code>render()</code> para criar uma página HTML e retornar a página como resposta. essa função de atalho envolve várias outras funções para simplificar um caso de uso muito comum. A função <code>render()</code> aceita os seguintes parâmetros:</p>

<ul>
 <li>o objeto <code>request</code> original, que é um <code>HttpRequest</code>.</li>
 <li>um modelo HTML com espaços reservados para os dados.</li>
 <li>uma variável <code>context</code>, que é um dicionário Python, contendo os dados a serem inseridos nos espaços reservados. </li>
</ul>

<p>Falaremos mais sobre modelos e variáveis <code>context</code> na próxima seção. Vamos criar nosso template para que possamos exibir algo para o usuário!</p>

<h3 id="Template">Template</h3>

<p>Um template é um arquivo de texto que define a estrutura ou o layout de um arquivo (como uma página HTML), usa espaços reservados para representar o conteúdo real.</p>

<p>Django irá procurar automaticamente templates na pasta chamada '<strong>templates</strong>' em sua aplicação. Por exemplo, na exibição de index que acabamos de adicionar, a função <code>render()</code> espera encontrar o arquivo <em><strong>index.html</strong> em</em><em> </em><strong>/locallibrary/catalog/templates/</strong> e gera um erro se o arquivo não estiver presente.</p>

<p>Você pode verificar isso salvando as alterações anteriores e acessando <code>127.0.0.1:8000</code> no seu navegador - ele exibirá uma mensagem de erro bastante intuitiva: "<code>TemplateDoesNotExist at /catalog/</code>", e outros detalhes.</p>

<div class="note">
<p><strong>Nota</strong>: Com base no arquivo de configurações do seu projeto, o Django procurará templates em vários locais, pesquisando nos aplicativos instalados por padrão. Você pode descobrir mais sobre como o Django encontra templates e quais formatos ele suporta no <a href="https://docs.djangoproject.com/en/2.1/topics/templates/">the Templates section of the Django documentation</a>.</p>
</div>

<h4 id="Estendendo_templates">Estendendo templates</h4>

<p>O index template precisará de marcação HTML padrão para head e a body, juntamente com as seções de navegação para criar um link para as outras páginas do site (que ainda não criamos) e para as seções que exibem dados introdutórios de texto e livro.</p>

<p>Grande parte da estrutura HTML e de navegação será a mesma em todas as páginas do nosso site. Em vez de duplicar o código padrão em todas as páginas, você pode usar a linguagem de modelagem do Django para declarar um modelo base e depois estendê-lo para substituir apenas os bits que são diferentes para cada página específica.</p>

<p>O seguinte snippet de código é um template base de amostra de um arquivo <strong>base_generic.html</strong>. Em breve, criaremos o modelo para a LocalLibrary. O exemplo abaixo inclui HTML comum com seções para um título, uma barra lateral e o conteúdo principal marcado com as template tags de nome <code>block</code> e <code>endblock</code>, mostrado em negrito. Você pode deixar os blocos vazios ou incluir o conteúdo padrão a ser usado ao renderizar páginas derivadas do modelo.</p>

<div class="note">
<p><strong>Nota</strong>: Template <em>tags</em> são funções que você pode usar em um modelo para percorrer as listas, executar operações condicionais com base no valor de uma variável e assim por diante. Além das template tags, a sintaxe template permite que você faça referência a variáveis que são passadas para a template a partir da view e use filtros de template para formatar variáveis (por exemplo, para converter uma sequência em minúscula).</p>
</div>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  <strong>{% block title %}</strong>&lt;title&gt;Local Library&lt;/title&gt;<strong>{% endblock %}</strong>
&lt;/head&gt;
&lt;body&gt;
  <strong>{% block sidebar %}</strong>&lt;!-- insert default navigation text for every page --&gt;<strong>{% endblock %}</strong>
  <strong>{% block content %}</strong>&lt;!-- default content text (typically empty) --&gt;<strong>{% endblock %}</strong>
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Ao definir um template para uma visualização específica, primeiro especificamos o template base usando a template tag <code>extends</code> — veja o exemplo de código abaixo. Em seguida, declaramos quais seções do template queremos substituir (se houver), usando seções <code>block</code>/<code>endblock</code> como no template base. </p>

<p>Por exemplo, o trecho de código abaixo mostra como usar a template tag <code>extends</code> e substituir o block <code>content</code>. O HTML gerado incluirá o código e a estrutura definidos no template base, incluindo o conteúdo padrão que você definiu no block <code>title</code>, mas o novo block <code>content</code> no lugar do padrão.</p>

<pre class="brush: html notranslate">{% extends "base_generic.html" %}

{% block content %}
  &lt;h1&gt;Local Library Home&lt;/h1&gt;
  &lt;p&gt;Welcome to LocalLibrary, a website developed by &lt;em&gt;Mozilla Developer Network&lt;/em&gt;!&lt;/p&gt;
{% endblock %}</pre>

<h4 id="O_template_base_LocalLibrary">O template base LocalLibrary</h4>

<p>Usaremos o seguinte snippet de código como modelo básico para o site <em>LocalLibrary</em>. Como você pode ver, ele contém algum código HTML e define blocos para <code>title</code>, <code>sidebar</code>, e <code>content</code>. Temos um título padrão e uma barra lateral padrão com links para listas de todos os livros e autores, ambos colocados em blocos para serem facilmente alterados no futuro.</p>

<div class="note">
<p><strong>Nota</strong>: Também introduzimos duas template tags adicionais: <code>url</code> e <code>load static</code>. Essas tags serão explicadas nas próximas seções.</p>
</div>

<p>Crie um novo arquivo <strong><em>base_generic.html </em></strong>em <strong>/locallibrary/catalog/templates/</strong> e cole o seguinte código no arquivo:</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  {% block title %}&lt;title&gt;Local Library&lt;/title&gt;{% endblock %}
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"&gt;
  &lt;!-- Add additional CSS in static file --&gt;
  {% load static %}
  &lt;link rel="stylesheet" href="{% static 'css/styles.css' %}"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container-fluid"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-sm-2"&gt;
      {% block sidebar %}
        &lt;ul class="sidebar-nav"&gt;
          &lt;li&gt;&lt;a href="{% url 'index' %}"&gt;Home&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=""&gt;All books&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=""&gt;All authors&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
     {% endblock %}
      &lt;/div&gt;
      &lt;div class="col-sm-10 "&gt;{% block content %}{% endblock %}&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>O template inclui CSS de <a href="http://getbootstrap.com/">Bootstrap</a> para melhorar o layout e a apresentação da página HTML. O uso do Bootstrap (ou outra estrutura da Web do lado do cliente) é uma maneira rápida de criar uma página atraente que é exibida bem em diferentes tamanhos de tela.</p>

<p>O template base também faz referência a um arquivo css local (<strong>styles.css</strong>) que fornece estilo adicional. Criar um arquivo <strong>styles.css </strong>em<strong> </strong><strong>/locallibrary/catalog/static/css/</strong> e cole o seguinte código no arquivo:</p>

<pre class="brush: css notranslate">.sidebar-nav {
    margin-top: 20px;
    padding: 0;
    list-style: none;
}</pre>

<h4 id="O_template_index">O template index</h4>

<p>Crie um novo arquivo HTML <strong><em>index.html </em></strong>em <strong>/locallibrary/catalog/templates/</strong> e cole o seguinte código no arquivo Esse código estende nosso modelo base na primeira linha e substitui o padrão block <code>content</code> para o template. </p>

<pre class="brush: html notranslate">{% extends "base_generic.html" %}

{% block content %}
  &lt;h1&gt;Local Library Home&lt;/h1&gt;
  &lt;p&gt;Welcome to LocalLibrary, a website developed by &lt;em&gt;Mozilla Developer Network&lt;/em&gt;!&lt;/p&gt;
  &lt;h2&gt;Dynamic content&lt;/h2&gt;
  &lt;p&gt;The library has the following record counts:&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;strong&gt;Books:&lt;/strong&gt; <strong>\{{ num_books }}</strong>&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Copies:&lt;/strong&gt; <strong>\{{ num_instances }}</strong>&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Copies available:&lt;/strong&gt; <strong>\{{ num_instances_available }}</strong>&lt;/li&gt;
    &lt;li&gt;&lt;strong&gt;Authors:&lt;/strong&gt; <strong>\{{ num_authors }}</strong>&lt;/li&gt;
  &lt;/ul&gt;
{% endblock %}</pre>

<p>Na seção <em>Dynamic content</em>, declaramos espaços reservados (<em>variáveis de template</em>) para as informações da exibição que queremos incluir. As variáveis são colocadas entre chaves (guiador), como mostrado em negrito no exemplo de código. </p>

<div class="note">
<p><strong>Nota:</strong> Você pode reconhecer facilmente variáveis de template e template tags (funções) - as variáveis são colocadas entre chaves (<code>\{{ num_books }}</code>), e as tags são colocadas em chaves simples com sinais de porcentagem (<code>{% extends "base_generic.html" %}</code>).</p>
</div>

<p>O importante a ser observado aqui é que as variáveis são nomeadas com as <em>chaves</em> que passamos para o dicionário <code>context</code> na função <code>render()</code> da nossa view (veja a amostra abaixo). As variáveis serão substituídas pelos <em>valores </em>associados quando o modelo for renderizado.</p>

<pre class="brush: python notranslate">context = {
    '<strong>num_books</strong>': num_books,
    '<strong>num_instances</strong>': num_instances,
    '<strong>num_instances_available</strong>': num_instances_available,
    '<strong>num_authors</strong>': num_authors,
}

return render(request, 'index.html', context=context)</pre>

<h4 id="Referenciando_arquivos_estáticos_nos_templates">Referenciando arquivos estáticos nos templates</h4>

<p>É provável que seu projeto use recursos estáticos, incluindo JavaScript, CSS e imagens. Como a localização desses arquivos pode não ser conhecida (ou pode mudar), o Django permite que você especifique a localização em seus modelos em relação a configuração global <code>STATIC_URL</code>. O site padrão do esqueleto define o valor de <code>STATIC_URL</code> para '<code>/static/</code>', mas você pode optar por hospedá-los em uma rede de entrega de conteúdo ou em outro local.</p>

<p>Dentro do template que você chama primeiro na template tag <code>load</code> especificando "static" para adicionar a biblioteca de modelos, conforme mostrado no exemplo de código abaixo. Você pode então usar a template tag <code>static</code> e especifique o URL relativo ao arquivo necessário.</p>

<pre class="brush: html notranslate">&lt;!-- Add additional CSS in static file --&gt;
{% load static %}
&lt;link rel="stylesheet" href="{% static 'css/styles.css' %}"&gt;</pre>

<p>Você pode adicionar uma imagem à página de maneira semelhante, por exemplo:</p>

<pre class="brush: html notranslate">{% load static %}
&lt;img src="{% static 'catalog/images/local_library_model_uml.png' %}" alt="UML diagram" style="width:555px;height:540px;"&gt;
</pre>

<div class="note">
<p><strong>Nota</strong>: Os exemplos acima especificam onde os arquivos estão localizados, mas o Django não os serve por padrão. Configuramos o servidor da web de desenvolvimento para exibir arquivos modificando o mapeador de URL global (<strong>/locallibrary/locallibrary/urls.py</strong>) quando <a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">criamos o esqueleto do website</a>, mas ainda precisamos ativar a veiculação de arquivos na produção. Veremos isso mais tarde.</p>
</div>

<p>Para obter mais informações sobre como <a href="https://docs.djangoproject.com/en/2.1/howto/static-files/">Trabalhar com arquivos estaticos</a>, consulte Gerenciando arquivos estáticos na documentação do Django.</p>

<h4 id="Vinculando_as_URLs">Vinculando as URLs</h4>

<p>O template base abaixo introduziu a template tag <code>url</code>.</p>

<pre class="brush: python notranslate">&lt;li&gt;&lt;a href="{% url 'index' %}"&gt;Home&lt;/a&gt;&lt;/li&gt;
</pre>

<p>Essa tag aceita o nome de uma função <code>path()</code> chamado em <strong>urls.py</strong> e os valores para quaisquer argumentos que a view associada receberá dessa função e retorna um URL que você pode usar para vincular ao recurso.</p>

<h4 id="Configurando_onde_encontrar_os_templates">Configurando onde encontrar os templates</h4>

<p>Você precisa dizer ao Django para procurar seus templates na pasta de templates. Para fazer isso, adicione o diretório de templates ao objeto TEMPLATES editando o arquivo <strong>settings.py</strong>, como mostrado em negrito, no seguinte exemplo de código:</p>

<pre class="brush: python notranslate">TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
<strong>            os.path.join(BASE_DIR, 'templates'),
</strong>        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]</pre>

<h2 id="Com_o_que_se_parece">Com o que se parece?</h2>

<p>Neste ponto, criamos todos os recursos necessários para exibir a página index. Execute o servidor (<code>python3 manage.py runserver</code>) e abra <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> no seu navegador. Se tudo estiver configurado corretamente, seu site deverá ter a seguinte captura de tela.</p>

<p><img alt="Index page for LocalLibrary website" src="https://mdn.mozillademos.org/files/14045/index_page_ok.png" style="border-style: solid; border-width: 1px; display: block; height: 356px; margin: 0px auto; width: 874px;"></p>

<div class="note">
<p><strong>Nota:</strong> Os links <strong>All books</strong> e <strong>All authors</strong> ainda não funcionarão porque os caminhos, visualizações e modelos para essas páginas não estão definidos. Acabamos de inserir espaços reservados para esses links no template <code>base_generic.html</code>.</p>
</div>

<h2 id="Desafie-se">Desafie-se</h2>

<p>Temos duas tarefas para testar a sua familiaridade com as consultas de modelos, views e templates</p>

<ol>
 <li>O modelo de <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Home_page#The_LocalLibrary_base_template">base</a> da BibliotecaLocal inclui um bloco de <code>título</code>. Substitua este bloco no modelo de índice e crie um novo título para a página.</li>
 <li>
  <div class="note">
  <p><strong>Dica: </strong>A seção<a href="#Extending_templates"> Extendendo Templates</a> explica como criar blocos e  extender um bloco em outro template.</p>
  </div>
 </li>
 <li>Modifique a <a href="#View_(function-based)">view</a> para gerar contagens para gêneros e livros que contenham uma palavra específica (case insensitive), e passe o resultado para o <code>contexto.</code> <span class="tlid-translation translation" lang="pt"><span title="">Isso é feito de maneira semelhante à criação e uso de <code>num_books</code> e <code>num_instances_available</code>.</span> <span title="">Em seguida, atualize o template do index para incluir essas variáveis.</span></span></li>
</ol>

<ul>
</ul>

<h2 id="Resumo">Resumo</h2>

<p>Acabamos de criar a página inicial do nosso site - uma página HTML que exibe uma série de registros do banco de dados e links para outras páginas ainda a serem criadas. Ao longo do caminho, aprendemos informações fundamentais sobre mapeadores de url, views, consulta do banco de dados com modelos, passagem de informações para um modelo a partir de uma view e criação e extensão de templates.</p>

<p>No próximo artigo, continuaremos sobre esse conhecimento para criar as quatro páginas restantes de nosso site.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/pt-br/3.1/intro/tutorial03/">Escrevendo sua primeira aplicação Django, parte 3: View e Templates</a> (documentação do Django)</li>
 <li><a href="https://docs.djangoproject.com/pt-br/3.1/topics/http/urls/">Despachante de URL</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/pt-br/3.1/topics/http/views/">Funções das Views </a> (DJango docs)</li>
 <li><a href="https://docs.djangoproject.com/pt-br/3.1/topics/templates/">Templates</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/howto/static-files/">Gerenciando arquivos estáticos</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/topics/http/shortcuts/#django.shortcuts.render">Funções de atalho do Django</a> (Django docs)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}</p>

<h2 id="Nesse_Módulo">Nesse Módulo</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Introduction">Introdução ao Django</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment">Configurando um ambiente de desenvolvimento Django</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial Django: Website de uma Biblioteca Local</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/skeleton_website">Tutorial Django Parte 2: Criando a base do website</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Models">Tutorial Django Parte 3: Utilizando models</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site">Tutorial Django Parte 4: Django admin site</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Home_page">Tutorial Django Parte 5: Criando nossa página principal</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Generic_views">Tutorial Django Parte 6: Lista genérica e detail views</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Sessions">Tutorial Django Parte 7: Sessões de Framework </a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Forms">Tutorial Django Parte 9: Trabalhando com formulários</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Testing">Tutorial Django Parte 10: Testando uma aplicação web Django</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial Django Parte 11: Implantando Django em produção</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/web_application_security">Segurança de aplicações web Django</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django mini blog</a></li>
</ul>
