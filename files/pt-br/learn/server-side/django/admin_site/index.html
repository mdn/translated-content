---
title: 'Tutorial Django Parte 4: Django admin site'
slug: Learn/Server-side/Django/Admin_site
tags:
  - Aprender
  - Artigo
  - Iniciante
  - Python
  - Tutorial
  - django
  - django_admin
  - lado servidor (server-side)
translation_of: Learn/Server-side/Django/Admin_site
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}</div>

<p class="summary">Agora que criamos modelos para o site da <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Tutorial_website_biblioteca_local">LocalLibrary</a>, usaremos o site do Django Admin para adicionar alguns dados de livros "reais". Primeiro, mostraremos como registrar os modelos no site de administração, depois mostraremos como fazer login e criar alguns dados. No final do artigo, mostraremos algumas maneiras de melhorar ainda mais a apresentação do site Admin.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">Pré-requisitos:</th>
   <td>Primeiro complete: <a href="/en-US/docs/Learn/Server-side/Django/Models">Tutorial Django Parte 3: Usando modelos</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objetivo:</th>
   <td>Para entender os benefícios e limitações do site de administração do Django, use-o para criar alguns registros para nossos modelos.</td>
  </tr>
 </tbody>
</table>

<h2 id="Visão_Geral">Visão Geral</h2>

<p>O aplicativo de administração do Django pode usar seus modelos para criar automaticamente uma área de site que você possa usar para criar, visualizar, atualizar e excluir registros. Isso pode poupar muito tempo durante o desenvolvimento, tornando muito fácil testar seus modelos e ter uma ideia de se você tem os dados corretos. O aplicativo administrativo também pode ser útil para gerenciar dados em produção, dependendo do tipo de site. O projeto Django o recomenda apenas para gerenciamento interno de dados (ou seja, apenas para uso por administradores ou pessoas internas à sua organização), pois a abordagem centrada no modelo não é necessariamente a melhor interface possível para todos os usuários e expõe muitos detalhes desnecessários sobre os modelos.</p>

<p>Toda a configuração necessária para incluir o aplicativo admin em seu site foi feita automaticamente quando você criou o <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/skeleton_website">esqueleto do projeto</a> (para obter informações sobre as dependências reais necessárias, consulte a <a href="https://docs.djangoproject.com/pt-br/2.1/ref/contrib/admin/">documentação do Django aqui</a>). Como resultado, tudo o que você precisa fazer para adicionar seus modelos ao aplicativo administrativo é registrá-los. No final deste artigo, forneceremos uma breve demonstração de como você pode configurar ainda mais a área de administração para exibir melhor nossos dados de modelo.</p>

<p>Depois de registrar os modelos, mostraremos como criar um novo "superusuário", acessar o site e criar alguns livros, autores, instâncias de livros e gêneros. Isso será útil para testar as visualizações e os modelos que começaremos a criar no próximo tutorial.</p>

<h2 id="Registrando_modelos">Registrando modelos</h2>

<p>Primeiro, abra o admin.py no aplicativo de catálogo (/locallibrary/catalog/admin.py). Atualmente parece com isso - note que ele já importa <code>django.contrib.admin</code>:</p>

<pre class="brush: python notranslate">from django.contrib import admin

# Register your models here.
</pre>

<p>Registre os modelos copiando o seguinte texto na parte inferior do arquivo. Este código simplesmente importa os modelos e, em seguida, chama <code>admin.site.register</code> para registrar cada um deles.</p>

<pre class="brush: python notranslate">from catalog.models import Author, Genre, Book, BookInstance

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
</pre>

<div class="note">Nota: Se você aceitou o desafio de criar um modelo para representar a linguagem natural de um livro (<a href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Models">consulte o artigo do tutorial de modelos</a>), importe-o e registre-o também!</div>

<p>Essa é a maneira mais simples de registrar um modelo ou modelos no site. O site de administração é altamente personalizável e falaremos mais sobre as outras maneiras de registrar seus modelos mais abaixo.</p>

<h2 id="Criando_um_super_usuário">Criando um super usuário</h2>

<p>Para fazer login no site de administração, precisamos de uma conta de usuário com o status da equipe ativado. Para visualizar e criar registros, também precisamos que esse usuário tenha permissões para gerenciar todos os nossos objetos. Você pode criar uma conta "superusuário" que tenha acesso total ao site e todas as permissões necessárias usando <strong>manage.py</strong>.</p>

<p>Chame o seguinte comando, no mesmo diretório que manage.py, para criar o superusuário. Você será solicitado a digitar um nome de usuário, endereço de e-mail e senha forte.</p>

<pre class="brush: bash notranslate">python3 manage.py createsuperuser
</pre>

<p>Quando esse comando for concluído, um novo superusuário será adicionado ao banco de dados. Agora reinicie o servidor de desenvolvimento para que possamos testar o login:</p>

<pre class="brush: bash notranslate">python3 manage.py runserver

</pre>

<h2 id="Fazendo_o_login_e_usando_o_site">Fazendo o login e usando o site</h2>

<p>Para fazer login no site, abra o URL /<em>admin</em> (e.g. <a href="http://127.0.0.1:8000/admin/">http://127.0.0.1:8000/admin</a>) e insira suas novas credenciais de usuário e senha de superusuário (você será redirecionado para a página de login e, em seguida, de volta para o URL /<em>admin </em>depois de inserir seus detalhes).</p>

<p>Esta parte do site exibe todos os nossos modelos, agrupados por aplicativo instalado. Você pode clicar no nome de um modelo para ir a uma tela que lista todos os seus registros associados e clicar nos registros para editá-los. Você também pode clicar diretamente no link Adicionar ao lado de cada modelo para começar a criar um registro desse tipo.</p>

<p><img alt="Admin Site - Home page" src="https://mdn.mozillademos.org/files/13975/admin_home.png" style="display: block; height: 634px; margin: 0px auto; width: 998px;"></p>

<p>Clique no link Adicionar à direita de Books para criar um novo livro (isso exibirá um diálogo muito parecido com o abaixo). Observe como os títulos de cada campo, o tipo de widget usado e o <code>help_text</code> (se houver) correspondem aos valores especificados no modelo.</p>

<p>Digite valores para os campos. Você pode criar novos autores ou gêneros pressionando o botão + ao lado dos respectivos campos (ou selecione os valores existentes nas listas, se você já os criou). Quando estiver pronto, você pode pressionar<strong> SALVAR, Salvar</strong> <strong>e adicionar </strong>outro ou S<strong>alvar e continuar editando</strong> para salvar o registro.</p>

<p><img alt="Admin Site - Book Add" src="https://mdn.mozillademos.org/files/13979/admin_book_add.png" style="border-style: solid; border-width: 1px; display: block; height: 780px; margin: 0px auto; width: 841px;"></p>

<div class="note">
<p>Observação: neste ponto, gostaríamos que você passasse algum tempo adicionando alguns livros, autores e gêneros (por exemplo, Fantasia) à sua inscrição. Certifique-se de que cada autor e gênero inclua alguns livros diferentes (isso tornará suas visualizações de lista e detalhes mais interessantes quando forem implementadas posteriormente na série de artigos).</p>
</div>

<p>Quando terminar de adicionar livros, clique no link <strong>Home</strong> no marcador superior para ser levado de volta à página principal do administrador. Então clique no link <strong>Books </strong> para exibir a lista atual de livros (ou em um dos outros links para ver outras listas de modelos). Agora que você adicionou alguns livros, a lista pode ser semelhante à captura de tela abaixo. O título de cada livro é exibido; este é o valor retornado no modelo do livro pelo método <code>__str__()</code> que especificamos no último artigo.</p>

<p><img alt="Admin Site - List of book objects" src="https://mdn.mozillademos.org/files/13935/admin_book_list.png" style="border-style: solid; border-width: 1px; display: block; height: 407px; margin: 0px auto; width: 1000px;"></p>

<p>Nessa lista, você pode excluir livros marcando a caixa de seleção ao lado do livro que não deseja, selecionando a ação excluir ... na lista suspensa Ação e pressionando o botão Ir. Você também pode adicionar novos livros pressionando o botão <strong>ADD BOOK</strong>. </p>

<p>Você pode editar um livro selecionando seu nome no link. A página de edição de um livro, mostrada abaixo, é quase idêntica à página "Adicionar". As principais diferenças são o título da página (Change book) e a adição de botões <strong>Delete</strong>, <strong>HISTORY</strong> e <strong>VIEW ON SITE</strong> (este último botão aparece porque definimos o método <code>get_absolute_url()</code> em nosso modelo).</p>

<p><img alt="Admin Site - Book Edit" src="https://mdn.mozillademos.org/files/13977/admin_book_modify.png" style="border-style: solid; border-width: 1px; display: block; height: 780px; margin: 0px auto; width: 841px;"></p>

<p>Agora navegue de volta para o <strong>Home</strong> page (usando o link Home, a trilha de navegação) e, em seguida, <strong>Author</strong> e listas de <strong>Genre</strong> — você já deve ter criado a partir de quando adicionou os novos livros, mas fique à vontade para adicionar um pouco mais.</p>

<p>O que você não terá é qualquer instância do livro, porque elas não são criadas a partir de livros (embora você possa criar <code>Book</code> a partir de <code>BookInstance</code> — esta é a natureza da <code>ForeignKey</code> field). Navegue de volta para a<em> Página inicial</em> e pressione o botão <em>Adicionar</em> associado para exibir a tela <em>Adicionar instância</em> do livro abaixo. Observe o ID grande e globalmente exclusivo, que pode ser usado para identificar separadamente uma única cópia de um livro na biblioteca.</p>

<p><img alt="Admin Site - BookInstance Add" src="https://mdn.mozillademos.org/files/13981/admin_bookinstance_add.png" style="border-style: solid; border-width: 1px; display: block; height: 514px; margin: 0px auto; width: 863px;"></p>

<p>Crie vários desses registros para cada um de seus livros. Defina o status como <em>Disponível</em> para pelo menos alguns registros e <em>Em empréstimo</em> para outros. Se o status <strong>não </strong>for <em>Disponível</em>, defina também uma <em>data de vencimento</em> futura.</p>

<p>É isso aí! Agora você aprendeu como configurar e usar o site de administração. Você também criou registros para <code>Book</code>, <code>BookInstance</code>, <code>Genre</code>, e <code>Author</code> que poderemos usar assim que criarmos nossas próprias visualizações e modelos.</p>

<h2 id="Configuração_Avançada">Configuração Avançada</h2>

<p>O Django faz um bom trabalho ao criar um site de administração básico usando as informações dos modelos registrados:</p>

<ul>
 <li>Cada modelo possui uma lista de registros individuais, identificados pela string criada com o método <code>__str__()</code> do modelo, e vinculado a visualizações de views/forms para edição. Por padrão, essa exibição tem um menu de ação na parte superior que você pode usar para executar operações de exclusão em massa nos registros.</li>
 <li>Os formulários de registro de detalhes do modelo para edição e adição de registros contêm todos os campos do modelo, dispostos verticalmente em sua ordem de declaração.  </li>
</ul>

<p>Você pode personalizar ainda mais a interface para torná-la ainda mais fácil de usar. Algumas das coisas que você pode fazer são:</p>

<ul>
 <li>List views:
  <ul>
   <li>Adicionar adicional fields/information exibido para cada registro.</li>
   <li>Adicione filtros para selecionar quais registros são listados, com base na data ou em algum outro valor de seleção (e.g. Book loan status).</li>
   <li>Adicione opções adicionais ao menu de ações nas exibições de lista e escolha onde esse menu é exibido no formulário.</li>
  </ul>
 </li>
 <li>Detail views
  <ul>
   <li>Escolha quais campos exibir (ou excluir), junto com sua ordem, agrupamento, se eles são editáveis, o widget usado, a orientação etc.</li>
   <li>Adicione campos relacionados a um registro para permitir a edição imediata (por exemplo, adicione a capacidade de adicionar e editar registros de livros enquanto cria o registro de autor).</li>
  </ul>
 </li>
</ul>

<p>In this section we're going to look at a few changes that will improve the interface for our <em>LocalLibrary</em>, including adding more information to <code>Book</code> and <code>Author</code> model lists, and improving the layout of their edit views. We won't change the <code>Language</code> and <code>Genre</code> model presentation because they only have one field each, so there is no real benefit in doing so!</p>

<p>You can find a complete reference of all the admin site customisation choices in <a href="https://docs.djangoproject.com/en/2.0/ref/contrib/admin/">The Django Admin site</a> (Django Docs).</p>

<h3 id="Registrando_uma_classe_ModelAdmin">Registrando uma classe ModelAdmin</h3>

<p>Para alterar como um modelo é exibido na interface de administração, você define uma classe ModelAdmin (que descreve o layout) e registra-o no modelo.</p>

<p>Vamos começar com o <code>Author</code> model. Abra <strong>admin.py</strong> no aplicativo de catálogo (/locallibrary/catalog/admin.py). Comente o seu registro original (prefixo com um #) para o <code>Author</code> model:</p>

<pre class="brush: js notranslate"># admin.site.register(Author)</pre>

<p>Agora adicione um novo <code>AuthorAdmin</code> e registre como mostrado abaixo.</p>

<pre class="brush: python notranslate"># Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
</pre>

<p>Agora vamos adicionar as classes <code>ModelAdmin</code> para <code>Book</code>, e <code>BookInstance</code>. Precisamos novamente comentar os registros originais:</p>

<pre class="brush: js notranslate"># admin.site.register(Book)
# admin.site.register(BookInstance)</pre>

<p>Agora, para criar e registrar os novos modelos; para o propósito desta demonstração, vamos usar o <code>@register</code> decorador para registrar os modelos (isso faz exatamente a mesma coisa que <code>admin.site.register()</code> sintaxe):</p>

<pre class="brush: python notranslate"># Register the Admin classes for Book using the decorator
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
</pre>

<p>Atualmente todas as nossas classes administrativas estão vazias (veja <code>pass</code>) então o comportamento do administrador não será alterado! Agora podemos estendê-los para definir nosso comportamento administrativo específico do modelo.</p>

<h3 id="Configure_list_views">Configure list views</h3>

<p>A LocalLibrary atualmente lista todos os autores usando o nome do objeto gerado a partir do método <code>__str__()</code> do modelo. Isso é bom quando você tem apenas alguns autores, mas quando você tem muitos, você pode acabar tendo duplicatas. Para diferenciá-los, ou apenas porque você quer mostrar informações mais interessantes sobre cada autor, você pode usar <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display">list_display</a> para adicionar campos adicionais à vista.</p>

<p>Substitua seu<code>AuthorAdmin</code> class com o código abaixo. Os nomes de campo a serem exibidos na lista são declarados em uma <em>tupla </em>na ordem requerida, conforme mostrado (esses são os mesmos nomes especificados em seu modelo original).</p>

<pre class="brush: python notranslate">class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
</pre>

<p>Agora navegue até a lista de autores em seu site. Os campos acima devem agora ser exibidos, assim:</p>

<p><img alt="Admin Site - Improved Author List" src="https://mdn.mozillademos.org/files/14023/admin_improved_author_list.png" style="border-style: solid; border-width: 1px; display: block; height: 302px; margin: 0px auto; width: 941px;"></p>

<p>Para o nosso <code>Book</code> model nós vamos adicionalmente exibir o <code>author</code> e <code>genre</code>. O <code>author</code> é uma variável <code>ForeignKey</code> (um-para-um) relacionamento, e assim será representado pelo valor <code>__str__()</code> para o registro associado. Substitua o <code>BookAdmin</code> class com a versão abaixo.</p>

<pre class="brush: python notranslate">class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
</pre>

<p>Infelizmente não podemos especificar diretamente a variável  <font face="Consolas, Liberation Mono, Courier, monospace">genre </font>na <code>list_display</code> porque é um <code>ManyToManyField</code>(O Django evita isso porque há um grande "custo" de acesso ao banco de dados ao fazer isso). Em vez disso, vamos definir uma função <code>display_genre</code> para obter as informações como uma string (esta é a função que chamamos acima; vamos defini-lo abaixo).</p>

<div class="note">
<p>Nota: Obtendo o <code>genre</code> pode não ser uma boa ideia aqui, por causa do "custo" da operação do banco de dados. Estamos mostrando como as funções de chamada em seus modelos podem ser muito úteis por outros motivos - por exemplo, para adicionar um link <em>Apagar </em>ao lado de cada item da lista.</p>
</div>

<p>Adicione o seguinte código ao seu <code>Book</code> model (<strong>models.py</strong>). Isso cria uma string a partir dos três primeiros valores da variavel <code>genre</code> (se existirem) e cria um <code>short_description</code> que pode ser usado no site administrativo para esse método.</p>

<pre class="brush: python notranslate">    def display_genre(self):
        """Create a string for the Genre. This is required to display genre in Admin."""
        return ', '.join(genre.name for genre in self.genre.all()[:3])

    display_genre.short_description = 'Genre'
</pre>

<p>Depois de salvar o modelo e o administrador atualizado, abra o site e vá para a página da lista Livros; você deve ver uma lista de livros como a abaixo:</p>

<p><img alt="Admin Site - Improved Book List" src="https://mdn.mozillademos.org/files/14025/admin_improved_book_list.png" style="border-style: solid; border-width: 1px; display: block; height: 337px; margin: 0px auto; width: 947px;"></p>

<p>O <code>Genre</code> model (e a <code>Language</code> model, se você definiu um) ambos têm um único campo, portanto, não faz sentido criar um modelo adicional para exibir campos adicionais.</p>

<div class="note">
<p>Nota: Vale a pena atualizar o<code>BookInstance</code> model list para mostrar pelo menos o status e a data de retorno esperada. Nós adicionamos isso como um desafio no final deste artigo!</p>
</div>

<h3 id="Adicionando_list_filters">Adicionando list filters</h3>

<p>Uma vez que você tenha muitos itens em uma lista, pode ser útil filtrar quais itens são exibidos. Isso é feito listando os campos no atributo <code>list_filter</code>. Substitua sua atual <code style="font-style: normal; font-weight: normal;">BookInstanceAdmin</code> class com o fragmento de código abaixo.</p>

<pre class="brush: python notranslate">class BookInstanceAdmin(admin.ModelAdmin):
<strong>    list_filter = ('status', 'due_back')</strong>
</pre>

<p>A visualização de lista agora incluirá uma caixa de filtro à direita. Observe como você pode escolher datas e status para filtrar os valores:</p>

<p><img alt="Admin Site - BookInstance List Filters" src="https://mdn.mozillademos.org/files/14037/admin_improved_bookinstance_list_filters.png" style="height: 528px; width: 960px;"></p>

<h3 id="Organizando_o_layout_da_detail_view">Organizando o layout da detail view</h3>

<p>Por padrão, as exibições detalhadas exibem todos os campos verticalmente, em sua ordem de declaração no modelo. Você pode alterar a ordem da declaração, quais campos são exibidos (ou excluídos), se as seções são usadas para organizar as informações, se os campos são exibidos horizontalmente ou verticalmente e até mesmo quais widgets de edição são usados nos formulários admin.</p>

<div class="note">
<p>Nota: Os modelos <em>LocalLibrary </em>são relativamente simples, portanto não é necessário alterar o layout; No entanto, faremos algumas alterações, só para mostrar como.</p>
</div>

<h4 id="Controlando_quais_campos_são_exibidos">Controlando quais campos são exibidos</h4>

<p>Atualize seu <code>AuthorAdmin</code> class para adicionar a linha <code>fields</code>, como mostrado abaixo (em negrito):</p>

<pre class="brush: python notranslate">class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
<strong>    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]</strong>
</pre>

<p>O atributo <code>fields</code> lista apenas os campos que devem ser exibidos no formulário, em ordem. Os campos são exibidos verticalmente por padrão, mas serão exibidos horizontalmente se você agrupá-los posteriormente em uma tupla (conforme mostrado nos campos "data" acima).</p>

<p>No seu site, acesse a visualização de detalhes do autor. Agora, ele deve aparecer como mostrado abaixo:</p>

<p><img alt="Admin Site - Improved Author Detail" src="https://mdn.mozillademos.org/files/14027/admin_improved_author_detail.png" style="border-style: solid; border-width: 1px; display: block; height: 282px; margin: 0px auto; width: 928px;"></p>

<div class="note">
<p>Nota: você também pode usar o atributo <code>exclude</code> para declarar uma lista de atributos a serem excluídos do formulário (todos os outros atributos no modelo serão exibidos).</p>
</div>

<h4 id="Seccionando_a_detail_view">Seccionando a detail view</h4>

<p>Você pode adicionar "seções" para agrupar informações de modelo relacionadas dentro do formulário detalhado, usando o atributo <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets">fieldsets</a>.</p>

<p>Na <code>BookInstance</code> model temos informações relacionadas ao que o livro é (i.e. <code>name</code>, <code>imprint</code>, e <code>id</code>) e quando estará disponível (<code>status</code>, <code>due_back</code>). Podemos adicionar estes em diferentes seções, adicionando o texto em negrito para o nosso <code>BookInstanceAdmin</code> class. </p>

<pre class="brush: python notranslate">@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

<strong>    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back')
        }),
    )</strong></pre>

<p>Cada seção tem seu próprio título (ou <code>None</code>,se você não quiser um título) e uma tupla associada de campos em um dicionário - o formato é complicado de descrever, mas bastante fácil de entender se você olhar o fragmento de código imediatamente acima.</p>

<p>Agora, navegue até uma visualização de instância do livro em seu website; o formulário deve aparecer como mostrado abaixo:</p>

<p><img alt="Admin Site - Improved BookInstance Detail with sections" src="https://mdn.mozillademos.org/files/14029/admin_improved_bookinstance_detail_sections.png" style="border-style: solid; border-width: 1px; display: block; height: 580px; margin: 0px auto; width: 947px;"></p>

<h3 id="Edição_inline_de_registros_associados">Edição inline de registros associados</h3>

<p>Às vezes, pode fazer sentido adicionar registros associados ao mesmo tempo. Por exemplo, pode fazer sentido ter as informações do livro e as informações sobre as cópias específicas que você tem na mesma página de detalhes.</p>

<p>Você pode fazer isso declarando <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines">inlines</a>, do tipo <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline">TabularInline</a> (horizonal layout) or <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.StackedInline">StackedInline</a> (layout vertical, assim como o layout do modelo padrão). Você pode adicionar ao <code>BookInstance</code> informações inline para o nosso <code>Book</code> detalhe, adicionando as linhas abaixo em negrito perto do seu <code>BookAdmin</code>:</p>

<pre class="brush: python notranslate"><strong>class BooksInstanceInline(admin.TabularInline):
    model = BookInstance</strong>

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
<strong>    inlines = [BooksInstanceInline]</strong>
</pre>

<p>Agora navegue até uma view pala um <code>Book</code> no seu site - na parte inferior, você verá as instâncias do livro relacionadas a este livro (imediatamente abaixo dos campos de gênero do livro):</p>

<p><img alt="Admin Site - Book with Inlines" src="https://mdn.mozillademos.org/files/14033/admin_improved_book_detail_inlines.png" style="border-style: solid; border-width: 1px; display: block; height: 889px; margin: 0px auto; width: 937px;"></p>

<p>Nesse caso, tudo o que fizemos foi declarar nossa classe inline tabular, que apenas adiciona todos os campos do modelo embutido. Você pode especificar todos os tipos de informações adicionais para o layout, incluindo os campos a serem exibidos, sua ordem, se eles são somente leitura ou não, etc. (veja <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline">TabularInline</a> para maiores informações).</p>

<div class="note">
<p>Nota: Existem alguns limites dolorosos nesta funcionalidade! Na captura de tela acima, temos três instâncias de livros existentes, seguidas de três espaços reservados para novas instâncias de livros (que são muito semelhantes!). Seria melhor não ter instâncias do livro reserva por padrão e apenas adicioná-las com o link <strong>Add another Book instance</strong> , ou poder listar apenas <code>BookInstance</code>s como links não legíveis daqui. A primeira opção pode ser feita configurando atributo <code>extra</code> para 0 no <code>BooksInstanceInline</code> model, tente você mesmo.</p>
</div>

<h2 id="Desafie-se">Desafie-se</h2>

<p>Aprendemos muito nesta seção, então agora é hora de você tentar algumas coisas.</p>

<ol>
 <li>Para a <em>listview</em> <code>BookInstance</code>, adicione o código para exibir o livro, o status, a data de devolução e o id (em vez do texto padrão <code>__str__()</code>).</li>
 <li>Adicione uma listagem <em>inline</em> de itens <code>Book</code> para a lista detalhada de <code>Author</code> usando a mesma abordagem que fizemos para  <code>Book</code>/<code>BookInstance</code>.</li>
</ol>

<ul>
</ul>

<h2 id="Resumo">Resumo</h2>

<p>É isso aí! Agora você aprendeu como configurar o site de administração na sua forma simples e aprimorada, como criar um superusuário, como navegar no site de administração e visualizar, excluir e atualizar registros. Ao longo do caminho você criou um monte de Livros, Instâncias de livros, Gêneros e Autores que poderemos listar e exibir assim que criarmos nossas próprias <em>views</em> e <em>templates</em>.</p>

<h2 id="Leitura_adicional">Leitura adicional</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.0/intro/tutorial02/#introducing-the-django-admin">Escrevendo seu primeiro app Django, parte 2: Apresentando o Django Admin</a>  (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/2.0/ref/contrib/admin/">O Django Admin site</a> (Django Docs)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}</p>

<h2 id="Neste_módulo">Neste módulo</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Introduction">Introdução ao Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/development_environment">Configurando um ambiente de desenvolvimento Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Tutorial Django: Website de uma biblioteca local</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">Tutorial Django Parte 2: Criando o escopo do website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Models">Django Parte 3: Utilizando models</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Admin_site">Django Parte 4: Django admin site</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Home_page">Django Parte 5: Criando nossa página principal</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Generic_views">Django Parte 6: Lista genérica e detail views</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Sessions">Django Parte 7: Framework de Sessões</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Authentication">Django Parte 8: Autenticação de Usuário e permissões</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Forms">Django Parte 9: Trabalhando com formulários</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial </a><a href="/en-US/docs/Learn/Server-side/Django/Testing">Django Parte 10: Testando uma aplicação web Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Tutorial Django Parte 11: Implantando Django em produção</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/web_application_security">Segurança de aplicações Django</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django mini blog</a></li>
</ul>
