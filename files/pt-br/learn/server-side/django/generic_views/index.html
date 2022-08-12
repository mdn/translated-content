---
title: 'Tutorial Django Parte 6: Lista genérica e detail views'
slug: Learn/Server-side/Django/Generic_views
translation_of: Learn/Server-side/Django/Generic_views
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}</div>

<p class="summary">Este tutorial estende nosso website <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary</a>, adicionando páginas de lista e detalhes para livros e autores. Aqui, aprenderemos sobre visualizações genéricas baseadas em classe e mostraremos como elas podem reduzir a quantidade de código que você precisa escrever para casos de uso comuns. Também abordaremos o tratamento de URLs em mais detalhes, mostrando como executar a correspondência básica de padrões.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Conclua todos os tópicos do tutorial anterior, incluindo <a href="/pt-br/docs/Learn/Server-side/Django/Home_page">Django Tutorial Part 5: Creating our home page</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Para entender onde e como usar modos de exibição genéricos baseados em classe e como extrair padrões de URLs e passar as informações para modos de exibição.</td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_global">Visão global</h2>

<p>Neste tutorial, vamos concluir a primeira versão do website <a href="https://developer.mozilla.org/pt-br/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary</a> adicionando páginas de lista e detalhes de livros e autores (ou, para ser mais preciso, mostraremos como implementar as páginas do livro e você mesmo irá criar as páginas dos autores!)</p>

<p>O processo é semelhante à criação da página index, que mostramos no tutorial anterior. Ainda precisamos criar mapas de URL, views e templates. A principal diferença é que, para as páginas de detalhes, teremos o desafio adicional de extrair informações de padrões no URL e passá-las para a visualização. Para essas páginas, demonstraremos um tipo de exibição completamente diferente: lista genérica baseada em classe e exibições detalhadas. Isso pode reduzir significativamente a quantidade de código de visualização necessária, facilitando a gravação e a manutenção.</p>

<p>A parte final do tutorial demonstrará como paginar seus dados ao usar visualizações de lista genéricas baseadas em classe.</p>

<h2 id="Book_list_page">Book list page</h2>

<p>A página da lista de livros exibirá uma lista de todos os registros de livros disponíveis na página, acessados usando o URL: <code>catalog/books/</code>. A página exibirá um título e um autor para cada registro, com o título sendo um hiperlink para a página de detalhes do livro associada. A página terá a mesma estrutura e navegação que todas as outras páginas do site e, portanto, podemos estender o modelo base (<strong>base_generic.html</strong>) que criamos no tutorial anterior.</p>

<h3 id="URL_mapping">URL mapping</h3>

<p>Abra <strong>/catalog/urls.py</strong> e copie na linha mostrada em negrito abaixo. Quanto à página index, a função <code>path()</code> define um padrão para corresponder ao URL (<strong>'books/'</strong>), a função view que será chamado se o URL corresponder (<code>views.BookListView.as_view()</code>), e um nome para esse mapeamento específico.</p>

<pre class="brush: python notranslate">urlpatterns = [
    path('', views.index, name='index'),
<strong>    </strong>path<strong>('books/', views.BookListView.as_view(), name='books'),</strong>
]</pre>

<p>Conforme discutido no tutorial anterior, o URL já deve ter correspondencia <code>/catalog</code>, então a visualização será realmente chamada para o URL: <code>/catalog/books/</code>.</p>

<p>A função view tem um formato diferente do que antes - é porque essa view será realmente implementada como uma classe. Herdaremos de uma função view genérica existente que já faz a maior parte do que queremos que essa função view faça, em vez de escrever a nossa a partir do zero.</p>

<p>Para as class-based views do Django, acessamos uma função de visualização apropriada chamando o método de classe <code>as_view()</code>. Isso faz todo o trabalho de criar uma instância da classe e garantir que os métodos do manipulador certo sejam chamados para solicitações HTTP recebidas.</p>

<h3 id="View_class-based">View (class-based)</h3>

<p>Poderíamos escrever com facilidade a view da lista de livros como uma função regular (assim como a view index anterior), que consultaria todos os livros no banco de dados e depois chamaria <code>render()</code> para passar a lista para um modelo especificado. No entanto, usaremos uma view de lista genérica class-based (<code>ListView</code>) — uma classe que herda de uma view existente. Como a view genérica já implementa a maioria das funcionalidades necessárias e segue as práticas recomendadas do Django, poderemos criar uma exibição de lista mais robusta com menos código, menos repetições e, finalmente, menos manutenção.</p>

<p>Abra <strong>catalog/views.py</strong>, e copie o seguinte código na parte inferior do arquivo:</p>

<pre class="brush: python notranslate">from django.views import generic

class BookListView(generic.ListView):
    model = Book</pre>

<p>É isso aí! A view genérica consultará o banco de dados para obter todos os registros para o modelo especificado (<code>Book</code>) em seguida, renderize um template localizado em <strong>/locallibrary/catalog/templates/catalog/book_list.html</strong> (que criaremos abaixo). Dentro do template, você pode acessar a lista de livros com a variável de template denominada <code>object_list</code> OU <code>book_list</code> (i.e. genericamente "<code><em>the_model_name</em>_list</code>").</p>

<div class="note">
<p><strong>Nota</strong>: Esse caminho estranho para a localização do template não é um erro de impressão - as visualizações genéricas procuram modelos em <code>/<em>application_name</em>/<em>the_model_name</em>_list.html</code> (<code>catalog/book_list.html</code> nesse caso) dentro do aplicativo <code>/<em>application_name</em>/templates/</code> diretório (<code>/catalog/templates/)</code>.</p>
</div>

<p>Você pode adicionar atributos para alterar o comportamento padrão acima. Por exemplo, você pode especificar outro arquivo do template se precisar ter várias visualizações que usem esse mesmo modelo ou se desejar usar um nome de variável de template diferente se <code>book_list</code> não é intuitivo para o seu caso de uso de template específico. Possivelmente, a variação mais útil é alterar/filtrar o subconjunto de resultados retornados - portanto, em vez de listar todos os livros, você pode listar os cinco principais livros que foram lidos por outros usuários.</p>

<pre class="brush: python notranslate">class BookListView(generic.ListView):
    model = Book
    context_object_name = 'my_book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location</pre>

<h4 id="Substituindo_métodos_em_class-based_views">Substituindo métodos em class-based views</h4>

<p>Embora não precisemos fazer isso aqui, você também pode substituir alguns dos métodos da classe.</p>

<p>Por exemplo, podemos substituir o método <code>get_queryset()</code> para alterar a lista de registros retornados. Isso é mais flexível do que apenas definir o atributo <code>queryset</code> como fizemos no fragmento de código anterior (embora não haja nenhum benefício real neste caso):</p>

<pre class="brush: python notranslate">class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
</pre>

<p>Também podemos substituir <code>get_context_data()</code> para passar variáveis de contexto adicionais para o template (por exemplo, a lista de livros é passada por padrão). O fragmento abaixo mostra como adicionar uma variável chamada "<code>some_data</code>" para o contexto (estaria disponível como uma variável de template).</p>

<pre class="brush: python notranslate">class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get the context
        context = super(BookListView, self).get_context_data(**kwargs)
        # Create any data and add it to the context
        context['some_data'] = 'This is just some data'
        return context</pre>

<p>Ao fazer isso, é importante seguir o padrão usado acima:</p>

<ul>
 <li>Primeiro obtenha o contexto existente da nossa superclasse.</li>
 <li>Em seguida, adicione as novas informações de contexto.</li>
 <li>Em seguida, retorne o novo contexto (atualizado).</li>
</ul>

<div class="note">
<p><strong>Nota</strong>: Confira <a href="https://docs.djangoproject.com/pt-br/2.1/topics/class-based-views/generic-display/">Built-in class-based generic views</a> (Django docs) para muitos mais exemplos do que você pode fazer.</p>
</div>

<h3 id="Criando_o_template_List_View">Criando o template List View</h3>

<p>Crie o arquivo HTML <strong>/locallibrary/catalog/templates/catalog/book_list.html</strong> e copie o texto abaixo. Como discutido acima, este é o arquivo de template padrão esperado pela list view genérica da class-based view (para um modelo chamado <code>Book</code> em um aplicativo chamado <code>catalog</code>).</p>

<p>Os templates para visualizações genéricas são como qualquer outro template (<em>embora</em>, é claro, o contexto/informações passadas para o template possam ser diferentes). Assim como em nosso template <em>index</em>, estendemos nosso template base na primeira linha e substituímos o bloco denominado <code>content</code>.</p>

<pre class="brush: html notranslate">{% extends "base_generic.html" %}

{% block content %}
  &lt;h1&gt;Book List&lt;/h1&gt;
  <strong>{% if book_list %}</strong>
  &lt;ul&gt;
    {% for book in book_list %}
      &lt;li&gt;
        &lt;a href="\{{ book.get_absolute_url }}"&gt;\{{ book.title }}&lt;/a&gt; (\{{book.author}})
      &lt;/li&gt;
    {% endfor %}
  &lt;/ul&gt;
  <strong>{% else %}</strong>
    &lt;p&gt;There are no books in the library.&lt;/p&gt;
  <strong>{% endif %} </strong>
{% endblock %}</pre>

<p>A view passa o contexto (lista de livros), por padrão, um <code>object_list</code> e <code>book_list</code> aliases; qualquer um funcionará.</p>

<h4 id="Execução_conditional">Execução conditional</h4>

<p>Nós usamos o <code><a href="https://docs.djangoproject.com/en/2.1/ref/templates/builtins/#if">if</a></code>, <code>else</code>, e <code>endif</code> template tags para verificar se o <code>book_list</code> foi definido e não está vazio. E se <code>book_list</code> está vazio, então a cláusula <code>else</code> exibe o  texto explicando que não há livros para listar. E se <code>book_list</code> não estiver vazio, percorreremos a lista de livros.</p>

<pre class="brush: html notranslate"><strong>{% if book_list %}</strong>
  &lt;!-- code here to list the books --&gt;
<strong>{% else %}</strong>
  &lt;p&gt;There are no books in the library.&lt;/p&gt;
<strong>{% endif %}</strong>
</pre>

<p>A condição acima verifica apenas um caso, mas você pode testar em condições adicionais usando a template tag <code>elif</code> (e.g. <code>{% elif var2 %}</code>). Para obter mais informações sobre operadores condicionais, consulte: <a href="https://docs.djangoproject.com/pt-br/2.1/ref/templates/builtins/#if">if</a>, <a href="https://docs.djangoproject.com/pt-br/2.1/ref/templates/builtins/#ifequal-and-ifnotequal">ifequal/ifnotequal</a>, e <a href="https://docs.djangoproject.com/pt-br/2.1/ref/templates/builtins/#ifchanged">ifchanged</a> em <a href="https://docs.djangoproject.com/pt-br/2.1/ref/templates/builtins">Built-in template tags and filters</a> (Django Docs).</p>

<h4 id="For_loops">For loops</h4>

<p>O template usa as template tags <a href="https://docs.djangoproject.com/pt-br/2.1/ref/templates/builtins/#for">for</a> e <code>endfor</code> para percorrer a lista de livros, como mostrado abaixo. Cada iteração preenche a variável de template <code>book</code> com informações para o item da lista atual.</p>

<pre class="brush: html notranslate">{% for <strong>book</strong> in book_list %}
  &lt;li&gt; &lt;!-- code here get information from each <strong>book</strong> item --&gt; &lt;/li&gt;
{% endfor %}
</pre>

<p>Embora não seja usado aqui, dentro do loop, o Django também criará outras variáveis que você pode usar para rastrear a iteração. Por exemplo, você pode testar a variável  <code>forloop.last</code> para executar o processamento condicional na última vez em que o loop é executado.</p>

<h4 id="Acessando_variáveis">Acessando variáveis</h4>

<p>O código dentro do loop cria um item de lista para cada livro que mostra o título (como um link para a exibição de detalhes ainda a ser criada) e o autor.</p>

<pre class="brush: html notranslate">&lt;a href="\{{ book.get_absolute_url }}"&gt;\{{ book.title }}&lt;/a&gt; (\{{book.author}})
</pre>

<p>Acessamos os <em>campos </em>do registro de livro associado usando a "notação de ponto" (e.g. <code>book.title</code> e <code>book.author</code>), onde o texto após o item <code>book</code> é o nome do campo (conforme definido no modelo).</p>

<p>Também podemos chamar <em>funções </em>no modelo de dentro do nosso template - nesse caso, chamamos <code>Book.get_absolute_url()</code> para obter um URL que você pode usar para exibir o registro de detalhe associado. Isso funciona desde que a função não tenha argumentos (não há como passar argumentos!)</p>

<div class="note">
<p><strong>Nota</strong>: Temos que ter um pouco de cuidado com os "efeitos colaterais" ao chamar funções em templates. Aqui apenas exibimos um URL, mas uma função pode fazer praticamente qualquer coisa - não queremos excluir nosso banco de dados (por exemplo) apenas renderizando nosso template!</p>
</div>

<h4 id="Atualize_o_template_base">Atualize o template base</h4>

<p>Abra o template base (<strong>/locallibrary/catalog/templates/<em>base_generic.html</em></strong>) e insira <strong>{% url 'books' %} </strong>no link da URL para <strong>All books</strong>,como mostrado abaixo. Isso habilitará o link em todas as páginas (podemos colocá-lo em prática agora que criamos o mapeador de URL "books").</p>

<pre class="brush: python notranslate">&lt;li&gt;&lt;a href="{% url 'index' %}"&gt;Home&lt;/a&gt;&lt;/li&gt;
<strong>&lt;li&gt;&lt;a href="{% url 'books' %}"&gt;All books&lt;/a&gt;&lt;/li&gt;</strong>
&lt;li&gt;&lt;a href=""&gt;All authors&lt;/a&gt;&lt;/li&gt;</pre>

<h3 id="Com_o_que_se_parece">Com o que se parece?</h3>

<p>Ainda não será possível criar a lista de livros, porque ainda falta uma dependência - o mapa de URL para as páginas de detalhes do livro, necessário para criar hiperlinks para livros individuais. Mostraremos as visualizações de lista e de detalhes após a próxima seção.</p>

<h2 id="Pagina_Book_detail">Pagina Book detail</h2>

<p>A página book detail exibirá informações sobre um livro específico, acessado usando o URL <code>catalog/book/<em>&lt;id&gt;</em></code> (onde <code><em>&lt;id&gt;</em></code> é a chave primária do livro). Além dos campos no model <code>Book</code> (author, summary, ISBN, language, e genre), também listaremos os detalhes das cópias disponíveis (<code>BookInstances</code>) incluindo o status, data prevista de retorno, impressão e ID. Isso permitirá que nossos leitores não apenas saibam sobre o livro, mas também confirmem se/quando ele está disponível.</p>

<h3 id="URL_mapping_2">URL mapping</h3>

<p>Abra <strong>/catalog/urls.py</strong> e adicione a URL '<strong>book-detail</strong>' mostrado em negrito abaixo. Esta função <code>path()</code> define um padrão, exibição de detalhes genérica associada à classe associada e um nome.</p>

<pre class="brush: python notranslate">urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
<strong>    path('book/&lt;int:pk&gt;', views.BookDetailView.as_view(), name='book-detail'),</strong>
]</pre>

<p>Para o path <em>book-detail</em> o padrão de URL usa uma sintaxe especial para capturar o ID específico do livro que queremos ver. A sintaxe é muito simples: colchetes angulares definem a parte da URL a ser capturada, incluindo o nome da variável que a view pode usar para acessar os dados capturados. Por exemplo, <strong>&lt;something&gt;</strong> , capturará o padrão marcado e passará o valor para a visualização como uma variável "alguma coisa". Opcionalmente, você pode preceder o nome da variável com um <a href="https://docs.djangoproject.com/pt-br/2.1/topics/http/urls/#path-converters">converter specification</a> que define o tipo de dados (int, str, slug, uuid, path).</p>

<p>Neste caso, usamos <code>'&lt;int:pk&gt;'</code><strong> </strong>para capturar o ID do livro, que deve ser uma sequência especialmente formatada e passá-la para a view como um parâmetro chamado <code>pk</code> (abreviatura de primary key). Esta é a id que está sendo usado para armazenar o livro exclusivamente no banco de dados, conforme definido no Book Model.</p>

<div class="note">
<p><strong>Nota</strong>: Como discutido anteriormente, nosso URL correspondente é realmente <code>catalog/book/&lt;digits&gt;</code> (porque estamos no aplicativo de <strong>catalog</strong>, <code>/catalog/</code> é assumido).</p>
</div>

<div class="warning">
<p><strong>Importante</strong>: A view de detalhes genérica class-based <em>espera </em>receber um parâmetro chamado <strong>pk</strong>. Se você estiver escrevendo sua própria função view, poderá usar o nome de qualquer parâmetro que desejar, ou mesmo transmitir as informações em um argumento sem nome.</p>
</div>

<h4 id="Correspondência_avançada_de_caminhosiniciador_de_expressão_regular">Correspondência avançada de caminhos/iniciador de expressão regular</h4>

<div class="note">
<p><strong>Nota</strong>: Você não precisará desta seção para concluir o tutorial! Nós fornecemos isso porque conhecer essa opção provavelmente será útil no seu futuro centrado no Django.</p>
</div>

<p>The pattern matching provided by <code>path()</code> is simple and useful for the (very common) cases where you just want to capture <em>any</em> string or integer. If you need more refined filtering (for example, to filter only strings that have a certain number of characters) then you can use the <a href="https://docs.djangoproject.com/en/2.1/ref/urls/#django.urls.re_path">re_path()</a> method.</p>

<p>This method is used just like <code>path()</code> except that it allows you to specify a pattern using a <a href="https://docs.python.org/3/library/re.html">Regular expression</a>. For example, the previous path could have been written as shown below:</p>

<pre class="brush: python notranslate"><strong>re_path(r'^book/(?P&lt;pk&gt;\d+)$', views.BookDetailView.as_view(), name='book-detail'),</strong>
</pre>

<p><em>Regular expressions</em> are an incredibly powerful pattern mapping tool. They are, frankly, quite unintuitive and scary for beginners. Below is a very short primer!</p>

<p>The first thing to know is that regular expressions should usually be declared using the raw string literal syntax (i.e. they are enclosed as shown: <strong>r'&lt;your regular expression text goes here&gt;'</strong>).</p>

<p>The main parts of the syntax you will need to know for declaring the pattern matches are:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Symbol</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>^</td>
   <td>Match the beginning of the text</td>
  </tr>
  <tr>
   <td>$</td>
   <td>Match the end of the text</td>
  </tr>
  <tr>
   <td>\d</td>
   <td>Match a digit (0, 1, 2, ... 9)</td>
  </tr>
  <tr>
   <td>\w</td>
   <td>Match a word character, e.g. any upper- or lower-case character in the alphabet, digit or the underscore character (_)</td>
  </tr>
  <tr>
   <td>+</td>
   <td>Match one or more of the preceding character. For example, to match one or more digits you would use <code>\d+</code>. To match one or more "a" characters, you could use <code>a+</code></td>
  </tr>
  <tr>
   <td>*</td>
   <td>Match zero or more of the preceding character. For example, to match nothing or a word you could use <code>\w*</code></td>
  </tr>
  <tr>
   <td>( )</td>
   <td>Capture the part of the pattern inside the brackets. Any captured values will be passed to the view as unnamed parameters (if multiple patterns are captured, the associated parameters will be supplied in the order that the captures were declared).</td>
  </tr>
  <tr>
   <td>(?P&lt;<em>name</em>&gt;...)</td>
   <td>Capture the pattern (indicated by ...) as a named variable (in this case "name"). The captured values are passed to the view with the name specified. Your view must therefore declare an argument with the same name!</td>
  </tr>
  <tr>
   <td>[  ]</td>
   <td>Match against one character in the set. For example, [abc] will match on 'a' or 'b' or 'c'. [-\w] will match on the '-' character or any word character.</td>
  </tr>
 </tbody>
</table>

<p>Most other characters can be taken literally!</p>

<p>Let's consider a few real examples of patterns:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Pattern</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><strong>r'^book/(?P&lt;pk&gt;\d+)$'</strong></td>
   <td>
    <p>This is the RE used in our URL mapper. It matches a string that has <code>book/</code> at the start of the line (<strong>^book/</strong>), then has one or more digits (<code>\d+</code>), and then ends (with no non-digit characters before the end of line marker).</p>

    <p>It also captures all the digits <strong>(?P&lt;pk&gt;\d+)</strong> and passes them to the view in a parameter named 'pk'. <strong>The captured values are always passed as a string!</strong></p>

    <p>For example, this would match <code>book/1234</code> , and send a variable <code>pk='1234'</code> to the view.</p>
   </td>
  </tr>
  <tr>
   <td><strong>r'^book/(\d+)$'</strong></td>
   <td>This matches the same URLs as the preceding case. The captured information would be sent as an unnamed argument to the view.</td>
  </tr>
  <tr>
   <td><strong>r'^book/(?P&lt;stub&gt;[-\w]+)$'</strong></td>
   <td>
    <p>This matches a string that has <code>book/</code> at the start of the line (<strong>^book/</strong>), then has one or more characters that are <em>either</em> a '-' or a word character (<strong>[-\w]+</strong>), and then ends. It also captures this set of characters and passes them to the view in a parameter named 'stub'.</p>

    <p>This is a fairly typical pattern for a "stub". Stubs are URL-friendly word-based primary keys for data. You might use a stub if you wanted your book URL to be more informative. For example <code>/catalog/book/the-secret-garden</code> rather than <code>/catalog/book/33</code>.</p>
   </td>
  </tr>
 </tbody>
</table>

<p>You can capture multiple patterns in the one match, and hence encode lots of different information in a URL.</p>

<div class="note">
<p><strong>Nota</strong>: Como desafio, considere como você pode codificar um URL para listar todos os livros lançados em um determinado ano, mês, dia e o RE que poderia ser usado para correspondê-lo.</p>
</div>

<h4 id="Passando_opções_adicionais_em_seus_mapas_de_URL">Passando opções adicionais em seus mapas de URL</h4>

<p>Um recurso que não usamos aqui, mas que você pode achar valioso, é que você pode declarar e passar <a href="https://docs.djangoproject.com/pt-br/2.1/topics/http/urls/#views-extra-options">opções adicionais</a> para a view. As opções são declaradas como um dicionário que você passa como o terceiro argumento sem nome para a função <code>path()</code>. Essa abordagem pode ser útil se você desejar usar a mesma visualização para vários recursos e transmitir dados para configurar seu comportamento em cada caso (abaixo, fornecemos um modelo diferente em cada caso).</p>

<pre class="brush: python notranslate">path('url/', views.my_reused_view, <strong>{'my_template_name': 'some_path'}</strong>, name='aurl'),
path('anotherurl/', views.my_reused_view, <strong>{'my_template_name': 'another_path'}</strong>, name='anotherurl'),
</pre>

<div class="note">
<p><strong>Nota:</strong> As opções extras e os padrões capturados nomeados são passados para a view como argumentos <em>nomeados</em>. Se você usar o <strong>mesmo nome</strong> para um padrão capturado e uma opção extra, somente o valor do padrão capturado será enviado para a visualização (o valor especificado na opção adicional será descartado).</p>
</div>

<h3 id="View_class-based_2">View (class-based)</h3>

<p>Abra <strong>catalog/views.py</strong>, e copie o seguinte código na parte inferior do arquivo:</p>

<pre class="brush: python notranslate">class BookDetailView(generic.DetailView):
    model = Book</pre>

<p>É isso aí! Tudo o que você precisa fazer agora é criar um modelo chamado <strong>/locallibrary/catalog/templates/catalog/book_detail.html</strong>, e a visualização passará as informações do banco de dados para o registro <code>Book</code> extraído pelo mapeador de URL. Dentro do modelo, você pode acessar a lista de livros com a variável de modelo denominada <code>object</code> ou <code>book</code> (i.e. genericamente "<code><em>the_model_name</em></code>").</p>

<p>Se necessário, você pode alterar o template usado e o nome do objeto de contexto usado para referenciar o livro no template. Você também pode substituir métodos para, por exemplo, adicionar informações adicionais ao contexto.</p>

<h4 id="O_que_acontece_se_o_registro_não_existir">O que acontece se o registro não existir?</h4>

<p>Se um registro solicitado não existir, a view de detalhes genérica class-based levantará uma exceção <code>Http404</code> para você automaticamente — em produção, isso exibirá automaticamente uma página apropriada de "resource not found", que você pode personalizar se desejar.</p>

<p>Apenas para lhe dar uma idéia de como isso funciona, o fragmento de código abaixo demonstra como você implementaria a exibição baseada em classe como uma função se você não estivesse usando a view de detalhe genérica class-based.</p>

<pre class="brush: python notranslate">def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
</pre>

<p>A view tenta primeiro obter o registro de livro específico do modelo. Se isso falhar, a view deve gerar uma exceção <code>Http404</code> para indicar que o livro "não foi encontrado". A etapa final é, como sempre, chamar <code>render()</code> com o nome do template e os dados do livro no parâmetro <code>context</code> (como um dicionário).</p>

<p>Como alternativa, podemos usar a função <code>get_object_or_404()</code> como um atalho para levantar uma exceção <code>Http404</code> se o registro não for encontrado.</p>

<pre class="brush: python notranslate">from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})</pre>

<h3 id="Criando_o_template_Detail_View">Criando o template Detail View</h3>

<p>Crie o arquivo HTML <strong>/locallibrary/catalog/templates/catalog/book_detail.html</strong> e forneça o conteúdo abaixo. Conforme discutido acima, este é o nome do arquivo de template padrão esperado pela view de <em>detalhes </em>genérica class-based (para um modelo chamado <code>Book</code> no aplicativo chamado <code>catalog</code>).</p>

<pre class="brush: html notranslate">{% extends "base_generic.html" %}

{% block content %}
  &lt;h1&gt;Title: \{{ book.title }}&lt;/h1&gt;

  &lt;p&gt;&lt;strong&gt;Author:&lt;/strong&gt; &lt;a href=""&gt;\{{ book.author }}&lt;/a&gt;&lt;/p&gt; &lt;!-- author detail link not yet defined --&gt;
  &lt;p&gt;&lt;strong&gt;Summary:&lt;/strong&gt; \{{ book.summary }}&lt;/p&gt;
  &lt;p&gt;&lt;strong&gt;ISBN:&lt;/strong&gt; \{{ book.isbn }}&lt;/p&gt;
  &lt;p&gt;&lt;strong&gt;Language:&lt;/strong&gt; \{{ book.language }}&lt;/p&gt;
  &lt;p&gt;&lt;strong&gt;Genre:&lt;/strong&gt; {% for genre in book.genre.all %} \{{ genre }}{% if not forloop.last %}, {% endif %}{% endfor %}&lt;/p&gt;

  &lt;div style="margin-left:20px;margin-top:20px"&gt;
    &lt;h4&gt;Copies&lt;/h4&gt;

    {% for copy in book.bookinstance_set.all %}
      &lt;hr&gt;
      &lt;p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}"&gt;\{{ copy.get_status_display }}&lt;/p&gt;
      {% if copy.status != 'a' %}
        &lt;p&gt;&lt;strong&gt;Due to be returned:&lt;/strong&gt; \{{copy.due_back}}&lt;/p&gt;
      {% endif %}
      &lt;p&gt;&lt;strong&gt;Imprint:&lt;/strong&gt; \{{copy.imprint}}&lt;/p&gt;
      &lt;p class="text-muted"&gt;&lt;strong&gt;Id:&lt;/strong&gt; \{{copy.id}}&lt;/p&gt;
    {% endfor %}
  &lt;/div&gt;
{% endblock %}</pre>

<ul>
</ul>

<div class="note">
<p>O link do autor no template acima tem um URL vazio porque ainda não criamos uma página de detalhes do autor. Uma vez que isso exista, você deve atualizar o URL assim:</p>

<pre class="notranslate">&lt;a href="<strong>{% url 'author-detail' book.author.pk %}</strong>"&gt;\{{ book.author }}&lt;/a&gt;
</pre>
</div>

<p>Embora um pouco maior, quase tudo neste template foi descrito anteriormente:</p>

<ul>
 <li>Estendemos nosso modelo básico e substituímos o bloco "content".</li>
 <li>Usamos o processamento condicional para determinar se deve ou não exibir conteúdo específico.</li>
 <li>Usamos <code>for</code> loops para percorrer as listas de objetos.</li>
 <li>Acessamos os campos de contexto usando a notação de ponto (porque usamos a exibição genérica detalhada, o contexto é chamado <code>book</code>; também poderíamos usar "<code>object</code>")</li>
</ul>

<p>A única coisa interessante que não vimos antes é a função <code>book.bookinstance_set.all()</code>. Este método é "automagicamente" construído pelo Django para retornar o conjunto de registros <code>BookInstance</code> associados com um <code>Book</code> em particular.</p>

<pre class="brush: python notranslate">{% for copy in book.bookinstance_set.all %}
  &lt;!-- code to iterate across each copy/instance of a book --&gt;
{% endfor %}</pre>

<p>Este método é necessário porque você declara um campo <code>ForeignKey</code> (um-para-muitos) somente no lado "um" do relacionamento. Como você não faz nada para declarar o relacionamento nos outros modelos ("muitos"), ele não possui nenhum campo para obter o conjunto de registros associados. Para superar esse problema, o Django constrói uma função "pesquisa reversa" chamada de forma apropriada, que você pode usar. O nome da função é construído com letras minúsculas no nome do modelo em que o <code>ForeignKey</code> foi declarado, seguido por <code>_set</code> (i.e. então a função criada em <code>Book</code> é <code>bookinstance_set()</code>).</p>

<div class="note">
<p><strong>Nota</strong>: Aqui usamos <code>all()</code> para obter todos os registros (o padrão). Enquanto você pode usar o método <code>filter()</code> para obter um subconjunto de registros no código, não é possível fazer isso diretamente nos modelos, porque não é possível especificar argumentos para funções.</p>

<p>Observe também que, se você não definir um pedido (na sua class-based view ou modelo), também verá erros do servidor de desenvolvimento como este:</p>

<pre class="notranslate">[29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
/foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: &lt;QuerySet [&lt;Author: Ortiz, David&gt;, &lt;Author: H. McRaven, William&gt;, &lt;Author: Leigh, Melinda&gt;]&gt;
  allow_empty_first_page=allow_empty_first_page, **kwargs)
</pre>

<p>Isso acontece porque o <a href="https://docs.djangoproject.com/pt-br/2.1/topics/pagination/#paginator-objects">objeto paginator</a> espera ver algum ORDER BY sendo executado no seu banco de dados subjacente. Sem ele, não é possível garantir que os registros que estão sendo retornados estejam na ordem certa!<strong> </strong></p>

<p>Este tutorial não atingiu a <strong>Paginação </strong>(ainda, mas em breve), mas como você não pode usar <code>sort_by()</code> e passar um parâmetro (o mesmo com <code>filter()</code> descrito acima), você terá que escolher entre três opções:</p>

<ol>
 <li>Adicione um <code>ordering</code> dentro de uma declaração <code>class Meta</code> no seu model.</li>
 <li>Adicione um atributo <code>queryset</code> na sua class-based view, especificando um <code>order_by()</code>.</li>
 <li>Adicione um método <code>get_queryset</code> à sua class-based view personalisada e também especifique o <code>order_by()</code>.</li>
</ol>

<p>Se você decidir ir com uma <code>class Meta</code> no model <code>Author</code> (provavelmente não tão flexível quanto personalizar o class-based view, mas fácil o suficiente), você terminará com algo assim:</p>

<pre class="notranslate">class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'

<strong>    class Meta:
        ordering = ['last_name']</strong></pre>

<p>Obviamente, o campo não precisa ser <code>last_name</code>: poderia ser qualquer outro.</p>

<p>E por último, mas não menos importante, você deve classificar por um atributo/coluna que realmente tenha um índice (exclusivo ou não) em seu banco de dados para evitar problemas de desempenho. Obviamente, isso não será necessário aqui (e provavelmente estamos nos adiantando muito) com tão poucos livros (e usuários!), Mas é algo a ser lembrado em projetos futuros.</p>
</div>

<h2 id="Com_o_que_se_parece_agora">Com o que se parece agora?</h2>

<p>Nesse ponto, deveríamos ter criado tudo o necessário para exibir a lista de livros e as páginas de detalhes do livro. Execute o servidor (<code>python3 manage.py runserver</code>) e abra no seu navegador <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a>.</p>

<div class="warning">
<p><strong>Aviso:</strong> Não clique em nenhum autor ou link de detalhes do autor ainda - você os criará no desafio!</p>
</div>

<p>Clique no link <strong>All books</strong> para exibir a lista de livros.</p>

<p><img alt="Book List Page" src="https://mdn.mozillademos.org/files/14049/book_list_page_no_pagination.png" style="border-style: solid; border-width: 1px; display: block; height: 216px; margin: 0px auto; width: 823px;"></p>

<p>Em seguida, clique no link de um dos seus livros. Se tudo estiver configurado corretamente, você deverá ver algo como a seguinte captura de tela.</p>

<p><img alt="Book Detail Page" src="https://mdn.mozillademos.org/files/14051/book_detail_page_no_pagination.png" style="border-style: solid; border-width: 1px; display: block; height: 783px; margin: 0px auto; width: 926px;"></p>

<h2 id="Paginação">Paginação</h2>

<p>Se você tiver apenas alguns registros, nossa página da lista de livros ficará bem. No entanto, à medida que você entra nas dezenas ou centenas de registros, a página levará progressivamente mais tempo para carregar (e terá muito conteúdo para navegar com sensatez). A solução para esse problema é adicionar paginação às exibições de lista, reduzindo o número de itens exibidos em cada página.</p>

<p>O Django possui excelente suporte embutido para paginação. Melhor ainda, isso é incorporado às exibições de lista genéricas baseadas em classes, para que você não precise fazer muito para habilitá-lo!</p>

<h3 id="Views">Views</h3>

<p>Abra <strong>catalog/views.py</strong>, e adicionea linha <code>paginate_by</code> mostrado em negrito abaixo.</p>

<pre class="brush: python notranslate">class BookListView(generic.ListView):
    model = Book
    <strong>paginate_by = 10</strong></pre>

<p>Com essa adição, assim que você tiver mais de 10 registros, a visualização começará a paginar os dados que envia para o modelo. As diferentes páginas são acessadas usando os parâmetros GET - para acessar a página 2, você usaria o URL: <code>/catalog/books/<strong>?page=2</strong></code>.</p>

<h3 id="Templates">Templates</h3>

<p>Agora que os dados estão paginados, precisamos adicionar suporte ao modelo para rolar pelo conjunto de resultados. Como podemos fazer isso em todas as visualizações de lista, faremos isso de uma maneira que possa ser adicionada ao modelo base. </p>

<p>Abra <strong>/locallibrary/catalog/templates/<em>base_generic.html</em></strong> e copie no seguinte bloco de paginação, abaixo do nosso bloco de conteúdo (destacado abaixo em negrito). O código primeiro verifica se a paginação está ativada na página atual. Nesse caso, adiciona os links seguintes e anteriores, conforme apropriado (e o número da página atual).</p>

<pre class="brush: python notranslate">{% block content %}{% endblock %}

<strong>  {% block pagination %}
    {% if is_paginated %}
        &lt;div class="pagination"&gt;
            &lt;span class="page-links"&gt;
                {% if page_obj.has_previous %}
                    &lt;a href="\{{ request.path }}?page=\{{ page_obj.previous_page_number }}"&gt;previous&lt;/a&gt;
                {% endif %}
                &lt;span class="page-current"&gt;
                    Page \{{ page_obj.number }} of \{{ page_obj.paginator.num_pages }}.
                &lt;/span&gt;
                {% if page_obj.has_next %}
                    &lt;a href="\{{ request.path }}?page=\{{ page_obj.next_page_number }}"&gt;next&lt;/a&gt;
                {% endif %}
            &lt;/span&gt;
        &lt;/div&gt;
    {% endif %}
  {% endblock %} </strong></pre>

<p>O <code>page_obj</code> é um objeto de <a href="https://docs.djangoproject.com/pt-br/2.1/topics/pagination/#paginator-objects">Paginator</a> que existirá se a paginação estiver sendo usada na página atual. Permite obter todas as informações sobre a página atual, as páginas anteriores, quantas páginas existem, etc.</p>

<p>Usamos <code>\{{ request.path }}</code> para obter o URL da página atual para criar os links de paginação. Isso é útil porque é independente do objeto que estamos paginando.</p>

<p>É isso aí!</p>

<h3 id="Com_o_que_se_parece_agora_2">Com o que se parece agora?</h3>

<p>A captura de tela abaixo mostra a aparência da paginação - se você não inseriu mais de 10 títulos no banco de dados, pode testá-lo com mais facilidade, abaixando o número especificado na linha <code>paginate_by</code> no seu arquivo <strong>catalog/views.py</strong>. Para obter o resultado abaixo, alteramos para <code>paginate_by = 2</code>.</p>

<p>Os links de paginação são exibidos na parte inferior, com os links seguinte/anterior, dependendo da página em que você está.</p>

<p><img alt="Book List Page - paginated" src="https://mdn.mozillademos.org/files/14057/book_list_paginated.png" style="border-style: solid; border-width: 1px; display: block; height: 216px; margin: 0px auto; width: 924px;"></p>

<h2 id="Challenge_yourself">Challenge yourself</h2>

<p>The challenge in this article is to create the author detail and list views required to complete the project. These should be made available at the following URLs:</p>

<ul>
 <li><code>catalog/authors/</code> — The list of all authors.</li>
 <li><code>catalog/author/<em>&lt;id&gt;</em></code><em> </em>— The detail view for the specific author with a primary key field named <em><code>&lt;id&gt;</code></em></li>
</ul>

<p>The code required for the URL mappers and the views should be virtually identical to the <code>Book</code> list and detail views we created above. The templates will be different but will share similar behaviour.</p>

<div class="note">
<p><strong>Note</strong>:</p>

<ul>
 <li>Once you've created the URL mapper for the author list page you will also need to update the <strong>All authors</strong> link in the base template. Follow the <a href="#Update_the_base_template">same process</a> as we did when we updated the <strong>All books</strong> link.</li>
 <li>Once you've created the URL mapper for the author detail page, you should also update the <a href="#Creating_the_Detail_View_template">book detail view template</a> (<strong>/locallibrary/catalog/templates/catalog/book_detail.html</strong>) so that the author link points to your new author detail page (rather than being an empty URL). The line will change to add the template tag shown in bold below.
  <pre class="brush: html notranslate">&lt;p&gt;&lt;strong&gt;Author:&lt;/strong&gt; &lt;a href="<strong>{% url 'author-detail' book.author.pk %}</strong>"&gt;\{{ book.author }}&lt;/a&gt;&lt;/p&gt;
</pre>
 </li>
</ul>
</div>

<p>When you are finished, your pages should look something like the screenshots below.</p>

<p><img alt="Author List Page" src="https://mdn.mozillademos.org/files/14053/author_list_page_no_pagination.png" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<ul>
</ul>

<p><img alt="Author Detail Page" src="https://mdn.mozillademos.org/files/14055/author_detail_page_no_pagination.png" style="border-style: solid; border-width: 1px; display: block; height: 358px; margin: 0px auto; width: 825px;"></p>

<ul>
</ul>

<h2 id="Summary">Summary</h2>

<p>Congratulations, our basic library functionality is now complete! </p>

<p>In this article, we've learned how to use the generic class-based list and detail views and used them to create pages to view our books and authors. Along the way we've learned about pattern matching with regular expressions, and how you can pass data from URLs to your views. We've also learned a few more tricks for using templates. Last of all we've shown how to paginate list views so that our lists are manageable even when we have many records.</p>

<p>In our next articles, we'll extend this library to support user accounts, and thereby demonstrate user authentication, permissons, sessions, and forms.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.1/topics/class-based-views/generic-display/">Built-in class-based generic views</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/class-based-views/generic-display/">Generic display views</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/topics/class-based-views/intro/">Introduction to class-based views</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/ref/templates/builtins">Built-in template tags and filters</a> (Django docs).</li>
 <li><a href="https://docs.djangoproject.com/en/2.1/topics/pagination/">Pagination</a> (Django docs)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}</p>

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
