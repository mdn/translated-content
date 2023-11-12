---
title: "Tutorial Django Parte 8: Autenticação de usuário e permissões"
slug: Learn/Server-side/Django/Authentication
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}

Neste tutorial, mostraremos como permitir que os usuários efetuem login no seu site com suas próprias contas e como controlar o que eles podem fazer e ver com base em se eles estão ou não conectados e em suas permissões. Como parte desta demonstração, estenderemos o [LocalLibrary](/pt-BR/docs/Learn/Server-side/Django/Tutorial_local_library_website) website, adicionando páginas de login e logout e páginas específicas do usuário e da equipe para visualizar os livros emprestados.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conclua todos os tópicos do tutorial anterior, incluindo
        <a href="/pt-BR/docs/Learn/Server-side/Django/Sessions"
          >Django Tutorial Part 7: Sessions framework</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Para entender como configurar e usar a autenticação e permissões de
        usuário.
      </td>
    </tr>
  </tbody>
</table>

## Visão global

O Django fornece um sistema de autenticação e autorização ("permissão"), construído sobre a estrutura da sessão discutida no [tutorial anterior](/pt-BR/docs/Learn/Server-side/Django/Sessions), que permite verificar as credenciais do usuário e definir quais ações cada usuário tem permissão para executar. A estrutura inclui modelos internos para `Users` e `Groups` (uma maneira genérica de aplicar permissões a mais de um usuário por vez), permissões/sinalizadores que designam se um usuário pode executar uma tarefa, formulários e exibições para efetuar logon em usuários e exibir ferramentas para restringir o conteúdo.

> **Nota:** De acordo com o Django, o sistema de autenticação pretende ser muito genérico e, portanto, não fornece alguns recursos fornecidos em outros sistemas de autenticação na web. Soluções para alguns problemas comuns estão disponíveis como pacotes de terceiros. Por exemplo, limitação de tentativas de login e autenticação contra terceiros (por exemplo, OAuth).

Neste tutorial, mostraremos como habilitar a autenticação do usuário no diretório [LocalLibrary](/pt-BR/docs/Learn/Server-side/Django/Tutorial_local_library_website) website, crie suas próprias páginas de logon e logout, adicione permissões aos seus modelos e controle o acesso às páginas. Usaremos a autenticação/permissões para exibir listas de livros que foram emprestados para usuários e bibliotecários.

O sistema de autenticação é muito flexível e você pode criar seus URLs, formulários, visualizações e modelos a partir do zero, se quiser, apenas chamando a API fornecida para efetuar login no usuário. No entanto, neste artigo, vamos usar as visualizações e formulários de autenticação "stock" do Django para nossas páginas de logon e logout. Ainda precisamos criar alguns modelos, mas isso é bem fácil.

Também mostraremos como criar permissões e verificar o status e as permissões de login nas visualizações e nos modelos.

## Ativando a autenticação

A autenticação foi ativada automaticamente quando [criamos o esqueleto do site](/pt-BR/docs/Learn/Server-side/Django/skeleton_website) (no tutorial 2), para que você não precise fazer mais nada neste momento.

> **Nota:** A configuração necessária foi feita para nós quando criamos o aplicativo usando o comando `django-admin startproject`. As tabelas de banco de dados para usuários e permissões de modelo foram criadas quando chamamos pela primeira vez `python manage.py migrate`.

A configuração está definida nas seções `INSTALLED_APPS` e `MIDDLEWARE` no settings.py (**locallibrary/locallibrary/settings.py**), como mostrado abaixo:

```python
INSTALLED_APPS = [
    ...
    'django.contrib.auth',  #Core authentication framework and its default models.
    'django.contrib.contenttypes',  #Django content type system (allows permissions to be associated with models).
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',  #Manages sessions across requests
    ...
    'django.contrib.auth.middleware.AuthenticationMiddleware',  #Associates users with requests using sessions.
    ....
```

## Criando usuários e grupos

Você já criou seu primeiro usuário quando olhamos para o [site Django admin](/pt-BR/docs/Learn/Server-side/Django/Admin_site) no tutorial 4 (este era um superusuário, criado com o comando `python manage.py createsuperuser)`. Nosso superusuário já está autenticado e tem todas as permissões, portanto, precisamos criar um usuário de teste para representar um usuário normal do site. Usaremos o site de administração para criar nossos grupos de bibliotecas de locais e logins de sites, pois é uma das maneiras mais rápidas de fazer isso.

> **Nota:** Você também pode criar usuários programaticamente, conforme mostrado abaixo. Você precisaria fazer isso, por exemplo, se desenvolvesse uma interface para permitir que os usuários criassem seus próprios logins (você não deve conceder aos usuários acesso ao site de administração).
>
> ```python
> from django.contrib.auth.models import User
>
> # Create user and save to the database
> user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
>
> # Update fields and then save again
> user.first_name = 'John'
> user.last_name = 'Citizen'
> user.save()
> ```

Abaixo, primeiro criaremos um grupo e depois um usuário. Embora ainda não tenhamos permissões para adicionar aos membros da nossa biblioteca, se precisarmos mais tarde, será muito mais fácil adicioná-los uma vez ao grupo do que individualmente a cada membro.

Inicie o servidor de desenvolvimento e navegue até o site de administração em seu navegador da web local (`http://127.0.0.1:8000/admin/`). Entre no site usando as credenciais da sua conta de superusuário. O nível superior do site Admin exibe todos os seus modelos, classificados por "aplicativo Django". Na seção **Autenticação e Autorização**, você pode clicar nos links **Usuários** ou **Grupos** para ver seus registros existentes.

![Admin site - add groups or users](admin_authentication_add.png)

Primeiro vamos criar um novo grupo para os membros da nossa biblioteca.

1. Clique no botão **Adicionar** (ao lado de Grupo) para criar um novo grupo; digite o **Nome** "Library Members" para o grupo.![Admin site - add group](admin_authentication_add_group.png)
2. Não precisamos de permissões para o grupo, então pressione **SALVAR** (você será direcionado para uma lista de grupos).

Agora vamos criar um usuário:

1. Volte para a página inicial do site de administração
2. Clique no botão **Adicionar** ao lado de _Usuários_ para abrir a caixa de diálogo _Adicionar usuário_.![Admin site - add user pt1](admin_authentication_add_user_prt1.png)
3. Digite um nome de **usuário** e uma **senha/confirmação de senha** adequados para o usuário de teste
4. Pressione **SALVAR** para criar o usuário.

   O site de administração criará o novo usuário e levará você imediatamente para uma tela Alterar usuário, na qual é possível alterar seu **nome de usuário** e adicionar informações aos campos opcionais do modelo de usuário. Esses campos incluem o nome, o sobrenome, o endereço de email e o status e as permissões do usuário (somente o sinalizador **Ativo** deve ser definido). Mais abaixo, você pode especificar os grupos e permissões do usuário e ver datas importantes relacionadas ao usuário (por exemplo, a data de ingresso e a última data de login).![Admin site - add user pt2](admin_authentication_add_user_prt2.png)

5. Na seção _Grupos_, selecione grupo de **Library Members** na lista de _Grupos disponíveis_ e pressione a **seta para a direita** entre as caixas para movê-lo para a caixa _Grupos escolhidos_.![Admin site - add user to group](admin_authentication_user_add_group.png)
6. Não precisamos fazer mais nada aqui; basta selecionar **SALVAR** novamente, para ir para a lista de usuários.

É isso aí! Agora você tem uma conta de "membro normal da biblioteca" que poderá usar nos testes (depois de implementarmos as páginas para permitir o login).

> **Nota:** Você deve tentar criar outro usuário membro da biblioteca. Além disso, crie um grupo para bibliotecários e adicione um usuário a ele também!

## Configurando suas views de autenticação

O Django fornece quase tudo que você precisa para criar páginas de autenticação para lidar com o login, logout e gerenciamento de senhas "out of the box". Isso inclui um mapeador de URL, visualizações e formulários, mas não inclui os modelos - precisamos criar os nossos!

Nesta seção, mostramos como integrar o sistema padrão no site _LocalLibrary_ e criar os modelos. Vamos colocá-los nos principais URLs do projeto.

> **Nota:** Você não precisa usar nenhum desses códigos, mas é provável que queira, porque isso facilita muito as coisas. Você quase certamente precisará alterar o código de manipulação de formulários se alterar seu modelo de usuário (um tópico avançado!), Mas, mesmo assim, ainda poderá usar as funções padrão das views.

> **Nota:**Nesse caso, poderíamos colocar razoavelmente as páginas de autenticação, incluindo os URLs e modelos, dentro do nosso aplicativo de catálogo. No entanto, se tivéssemos vários aplicativos, seria melhor separar esse comportamento de login compartilhado e disponibilizá-lo em todo o site, e é isso que mostramos aqui!

### URLs do Projeto

Adicione o seguinte à parte inferior do arquivo urls.py do projeto (**locallibrary/locallibrary/urls.py**):

```python
#Add Django site authentication urls (for login, logout, password management)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

Navegue até URL `http://127.0.0.1:8000/accounts/` (observe a barra à direita!) e o Django mostrará um erro que não foi possível encontrar esse URL e listará todos os URLs que ele tentou. A partir disso, você pode ver os URLs que funcionarão, por exemplo:

> **Nota:**O uso do método acima adiciona os seguintes URLs com nomes entre colchetes, que podem ser usados para reverter os mapeamentos de URL. Você não precisa implementar mais nada - o mapeamento de URL acima mapeia automaticamente os URLs mencionados abaixo.
>
> ```python
> accounts/ login/ [name='login']
> accounts/ logout/ [name='logout']
> accounts/ password_change/ [name='password_change']
> accounts/ password_change/done/ [name='password_change_done']
> accounts/ password_reset/ [name='password_reset']
> accounts/ password_reset/done/ [name='password_reset_done']
> accounts/ reset/<uidb64>/<token>/ [name='password_reset_confirm']
> accounts/ reset/done/ [name='password_reset_complete']
> ```

Agora tente navegar para o URL de login (`http://127.0.0.1:8000/accounts/login/`). Isso falhará novamente, mas com um erro informando que estamos perdendo o modelo necessário (**registration/login.html**) no caminho de pesquisa do modelo. Você verá as seguintes linhas listadas na seção amarela na parte superior:

```python
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

A próxima etapa é criar um diretório de registro no caminho de pesquisa e adicionar o arquivo **login.html**.

### Diretório de Templates

Os URLs (e implicitamente, visualizações) que acabamos de adicionar esperam encontrar seus modelos associados em um diretório **/registration/** em algum lugar no caminho de pesquisa de modelos.

Neste site, colocaremos nossas páginas HTML no diretório **templates/registration/**. Esse diretório deve estar no diretório raiz do projeto, ou seja, o mesmo diretório que a pasta **catalog** e **locallibrary**. Por favor, crie essas pastas agora.

> **Nota:** Sua estrutura de pastas agora deve se parecer como abaixo:
> locallibrary (Django project folder)
> |\_catalog
> |\_locallibrary
> |\_templates **(new)**
> |\_registration

Para tornar esses diretórios visíveis para o carregador de modelos (ou seja, para colocar esse diretório no caminho de pesquisa de modelos), abra as configurações do projeto (**/locallibrary/locallibrary/settings.py**) e atualize o seção `TEMPLATES` linha `'DIRS'` como mostrado abaixo.

```python
TEMPLATES = [
    {
        ...
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        ...
```

### Template de login

> **Aviso:** **Importante**: Os modelos de autenticação fornecidos neste artigo são uma versão muito básica/ligeiramente modificada dos modelos de login de demonstração do Django. Pode ser necessário personalizá-los para seu próprio uso!

Crie um novo arquivo HTML chamado **/locallibrary/templates/registration/login.html** e forneça o seguinte conteúdo:

```django
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Your account doesn't have access to this page. To proceed,
      please login with an account that has access.</p>
    {% else %}
      <p>Please login to see this page.</p>
    {% endif %}
  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}
    <table>
      <tr>
        <td>\{{ form.username.label_tag }}</td>
        <td>\{{ form.username }}</td>
      </tr>
      <tr>
        <td>\{{ form.password.label_tag }}</td>
        <td>\{{ form.password }}</td>
      </tr>
    </table>
    <input type="submit" value="login" />
    <input type="hidden" name="next" value="\{{ next }}" />
  </form>

  {# Assumes you setup the password_reset view in your URLconf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

Este modelo compartilha algumas semelhanças com as que já vimos antes - estende nosso modelo base e substitui o bloco `content`. O restante do código é um código de manipulação de formulário bastante padrão, que discutiremos em um tutorial posterior. Por enquanto, tudo o que você precisa saber é que isso exibirá um formulário no qual é possível inserir seu nome de usuário e senha e que, se você inserir valores inválidos, será solicitado que você digite os valores corretos quando a página for atualizada.

Navegue de volta para a página de login (`http://127.0.0.1:8000/accounts/login/`). Depois de salvar seu modelo, você verá algo assim:

![Library login page v1](library_login.png)

Se você fizer login usando credenciais válidas, será redirecionado para outra página (por padrão, isso será `http://127.0.0.1:8000/accounts/profile/`). O problema é que, por padrão, o Django espera que, ao fazer o login, você deseje ser levado para uma página de perfil, o que pode ou não ser o caso. Como você ainda não definiu esta página, receberá outro erro!

Abra as configurações do projeto (**/locallibrary/locallibrary/settings.py**) e adicione o texto abaixo na parte inferior. Agora, quando você faz login, deve ser redirecionado para a página inicial do site por padrão.

```python
# Redirect to home URL after login (Default redirects to /accounts/profile/)
LOGIN_REDIRECT_URL = '/'
```

### Template de logout

Se você navegar para o URL de logout (`http://127.0.0.1:8000/accounts/logout/`) você verá um comportamento estranho - seu usuário será desconectado com certeza, mas será direcionado para a pagina de logout do **Admin**. Não é isso que você deseja, apenas porque o link de login nessa página o leva para a tela de login do administrador (e está disponível apenas para usuários que têm a permissão `is_staff`).

Crie e abra /**locallibrary/templates/registration/logged_out.html**. Copie o texto abaixo:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
```

Este modelo é muito simples. Ele apenas exibe uma mensagem informando que você foi desconectado e fornece um link que você pode pressionar para voltar à tela de login. Se você acessar o URL de logoff novamente, deverá ver esta página:

![Library logout page v1](library_logout.png)

### Templates para reset de password

O sistema de redefinição de senha padrão usa o email para enviar ao usuário um link de redefinição. Você precisa criar formulários para obter o endereço de email do usuário, enviar o email, permitir que ele insira uma nova senha e anotar quando todo o processo está completo.

Os seguintes modelos podem ser usados como ponto de partida.

#### Formulário para reset de password

Este é o formulário usado para obter o endereço de email do usuário (para enviar o email de redefinição de senha). Crie **/locallibrary/templates/registration/password_reset_form.html** e forneça o seguinte conteúdo:

```django
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    \{{ form.email.errors }}
  {% endif %}
      <p>\{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Reset password">
  </form>
{% endblock %}
```

#### Password reset done

Este formulário é exibido após a coleta do seu endereço de email. Crie **/locallibrary/templates/registration/password_reset_done.html**, e forneça o seguinte conteúdo:

```django
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

#### Password reset email

Este modelo fornece o texto do email em HTML que contém o link de redefinição que enviaremos aos usuários. Crie **/locallibrary/templates/registration/password_reset_email.html** e forneça o seguinte conteúdo:

```django
Someone asked for password reset for email \{{ email }}. Follow the link below:
\{{ protocol}}://\{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

#### Password reset confirm

É nesta página que você digita sua nova senha depois de clicar no link no e-mail de redefinição de senha. Crie **/locallibrary/templates/registration/password_reset_confirm.html** e forneça o seguinte conteúdo:

```django
{% extends "base_generic.html" %}

{% block content %}
  {% if validlink %}
    <p>Please enter (and confirm) your new password.</p>
    <form action="" method="post">
      {% csrf_token %}
      <table>
        <tr>
          <td>
            \{{ form.new_password1.errors }}
            <label for="id_new_password1">New password:</label>
          </td>
          <td>\{{ form.new_password1 }}</td>
        </tr>
        <tr>
          <td>
            \{{ form.new_password2.errors }}
            <label for="id_new_password2">Confirm password:</label>
          </td>
          <td>\{{ form.new_password2 }}</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="Change my password" /></td>
        </tr>
      </table>
    </form>
  {% else %}
    <h1>Password reset failed</h1>
    <p>
      The password reset link was invalid, possibly because it has already been
      used. Please request a new password reset.
    </p>
  {% endif %}
{% endblock %}
```

#### Password reset complete

Este é o último modelo de redefinição de senha, exibido para notificá-lo quando a redefinição de senha for bem-sucedida. Crie **/locallibrary/templates/registration/password_reset_complete.html** e forneça o seguinte conteúdo:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

### Testando as novas páginas de autenticação

Agora que você adicionou a configuração da URL e criou todos esses modelos, as páginas de autenticação agora devem funcionar!

Você pode testar as novas páginas de autenticação tentando fazer login e sair da sua conta de superusuário usando estes URLs:

- `http://127.0.0.1:8000/accounts/login/`
- `http://127.0.0.1:8000/accounts/logout/`

Você poderá testar a funcionalidade de redefinição de senha no link na página de login. **Esteja ciente de que o Django enviará apenas emails de redefinição para endereços (usuários) que já estão armazenados em seu banco de dados!**

> **Nota:** O sistema de redefinição de senha exige que seu site suporte e-mail, que está além do escopo deste artigo, portanto esta parte ainda não funcionará. Para permitir o teste, coloque a seguinte linha no final do seu arquivo settings.py. Isso registra todos os emails enviados ao console (para que você possa copiar o link de redefinição de senha do console).
>
> ```python
> EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
> ```
>
> Para mais informações, veja [Sending email](https://docs.djangoproject.com/en/2.1/topics/email/) (Django docs).

## Testando contra usuários autenticados

Esta seção analisa o que podemos fazer para controlar seletivamente o conteúdo que o usuário vê, com base em se está logado ou não.

### Testando nos templates

Você pode obter informações sobre o usuário conectado no momento em modelos com a variável de template `\{{ user }}` (isso é adicionado ao contexto do template por padrão quando você configura o projeto como fizemos em nosso esqueleto).

Normalmente você primeiro testará contra a variável de template `\{{ user.is_authenticated }}` para determinar se o usuário está qualificado para ver conteúdo específico. Para demonstrar isso, em seguida, atualizaremos nossa barra lateral para exibir um link "Login" se o usuário estiver desconectado e um link "Logout" se estiverem conectados.

Abra o template base (**/locallibrary/catalog/templates/base_generic.html**) e copie o texto a seguir no bloco `sidebar`, imediatamente antes da template tag `endblock`.

```django
  <ul class="sidebar-nav">
    ...

    {% if user.is_authenticated %}
      <li>User: \{{ user.get_username }}</li>
      <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
    {% else %}
      <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
    {% endif %}
  </ul>
```

Como você pode ver, usamos template tags `if`-`else`-`endif` para exibir condicionalmente o texto com base em `\{{ user.is_authenticated }}` ser verdadeiro. Se o usuário estiver autenticado, sabemos que temos um usuário válido, por isso chamamos `\{{ user.get_username }}` para exibir o nome deles.

Criamos os URLs dos links de logon e logout usando a template tag `url` e os nomes das respectivas configurações de URL. Observe também como anexamos `?next=\{{request.path}}` no final dos URLs. O que isso faz é adicionar um parâmetro de URL a seguir, contendo o endereço (URL) da página atual, ao final do URL vinculado. Após o usuário ter efetuado login/logout com sucesso, as visualizações usarão este valor "`next`" para redirecionar o usuário de volta à página em que ele clicou pela primeira vez no link de logon/logout.

> **Nota:** Experimente! Se você estiver na página inicial e clicar em Login/Logout na barra lateral, depois que a operação for concluída, você deverá voltar à mesma página.

### Testando nas views

Se você estiver usando views baseadas em funções, a maneira mais fácil de restringir o acesso a suas funções é aplicando o decorator `login_required` à sua função view, como mostrado abaixo. Se o usuário estiver logado, seu código de exibição será executado normalmente. Se o usuário não estiver conectado, isso será redirecionado para o URL de login definido nas configurações do projeto.(`settings.LOGIN_URL`), passando o caminho absoluto atual como o `next` no parametro da URL. Se o usuário conseguir fazer login, ele retornará a esta página, mas desta vez autenticado.

```python
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    ...
```

> **Nota:** Você pode fazer o mesmo tipo de coisa manualmente testando em`request.user.is_authenticated`, mas o decorator é muito mais conveniente!

Da mesma forma, a maneira mais fácil de restringir o acesso a usuários logados em suas visualizações baseadas em classe é derivar de `LoginRequiredMixin`. Você precisa declarar esse mixin primeiro na lista de superclasses, antes da classe de visualização principal.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    ...
```

Isso tem exatamente o mesmo comportamento de redirecionamento que o decorator `login_required`. Você também pode especificar um local alternativo para redirecionar o usuário se ele não estiver autenticado (`login_url`), e um nome de parâmetro de URL em vez de "`next`" para inserir o caminho absoluto atual (`redirect_field_name`).

```python
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

Para detalhes adicionais, consulte o [Django docs here](https://docs.djangoproject.com/en/2.1/topics/auth/default/#limiting-access-to-logged-in-users).

## Exemplo - listando os livros do usuário atual

Agora que sabemos como restringir uma página a um usuário específico, vamos criar uma visualização dos livros que o usuário atual emprestou.

Infelizmente, ainda não temos como os usuários emprestarem livros! Portanto, antes que possamos criar a lista de livros, primeiro estenderemos o modelo `BookInstance` para suportar o conceito de empréstimo e usar o aplicativo Django Admin para emprestar vários livros ao nosso usuário de teste.

### Models

Primeiro, teremos que possibilitar que os usuários tenham um `BookInstance` emprestado (já temos um `status` e uma data `due_back`, mas ainda não temos nenhuma associação entre esse modelo e um usuário. Vamos criar um usando um campo `ForeignKey` (one-to-many). Também precisamos de um mecanismo fácil para testar se um livro emprestado está vencido.

Abra **catalog/models.py**, e importe o model `User` de `django.contrib.auth.models` (adicione isso logo abaixo da linha de importação anterior na parte superior do arquivo, para `User` estar disponível para o código subsequente que faz uso dele):

```python
from django.contrib.auth.models import User
```

Em seguida, adicione o campo `borrower` para o modelo `BookInstance`:

```python
borrower = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
```

Enquanto estamos aqui, vamos adicionar uma propriedade que podemos chamar de nossos modelos para saber se uma instância específica de um livro está atrasada. Embora possamos calcular isso no próprio modelo, usando uma [property](https://docs.python.org/3/library/functions.html#property) como mostrado abaixo será muito mais eficiente.

Adicione isso em algum lugar perto da parte superior do arquivo:

```python
from datetime import date
```

Agora adicione a seguinte definição de propriedade a classe `BookInstance`:

```python
@property
def is_overdue(self):
    if self.due_back and date.today() > self.due_back:
        return True
    return False
```

> **Nota:** Primeiro, verificamos se `due_back` está vazio antes de fazer uma comparação. Um campo `due_back` vazio faria com que o Django gerasse um erro em vez de mostrar a página: valores vazios não são comparáveis. Isso não é algo que gostaríamos que nossos usuários experimentassem!

Agora que atualizamos nossos modelos, precisaremos fazer novas migrações no projeto e aplicá-las:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### Admin

Agora abra **catalog/admin.py**, e adicione o campo `borrower` para a classe `BookInstanceAdmin` em ambos os `list_display` e o `fieldsets` como mostrado abaixo. Isso tornará o campo visível na seção Admin, permitindo atribuir um `User` para um `BookInstance` quando necessário.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book','imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back','borrower')
        }),
    )
```

### Emprestando alguns livros

Agora que é possível emprestar livros para um usuário específico, vá e empreste vários `BookInstance`. Defina o campo `borrowed` para o usuário de teste, faça o `status` "On loan", e defina datas de vencimento no futuro e no passado.

> **Nota:** Não detalharemos o processo, pois você já sabe como usar o site Admin!

### Na view loan

Agora, adicionaremos uma view para obter a lista de todos os livros que foram emprestados ao usuário atual. Usaremos a mesma view de lista genérica baseada em classe com a qual estamos familiarizados, mas desta vez também importaremos e derivaremos de `LoginRequiredMixin`, para que apenas um usuário conectado possa chamar essa visualização. Também optaremos por declarar um `template_name`, em vez de usar o padrão, pois podemos ter algumas listas diferentes de registros BookInstance, com diferentes visualizações e modelos.

Adicione o seguinte a **catalog/views.py**:

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

Para restringir nossa consulta apenas ao objeto `BookInstance` para o usuário atual, reimplementamos `get_queryset()` como mostrado abaixo. Observe que "o" is the stored code for "on loan" (emprestado) e nós pedimos pela data `due_back` para que os itens mais antigos sejam exibidos primeiro.

### URL conf para livros on loan (emprestado)

Agora abra **/catalog/urls.py** e adicione um `path()` apontando para a visualização acima (você pode copiar o texto abaixo no final do arquivo).

```python
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

### Template para livros on loan (emprestado)

Agora, tudo o que precisamos fazer para esta página é adicionar um modelo. Primeiro, crie o arquivo de modelo **/catalog/templates/catalog/bookinstance_list_borrowed_user.html** e forneça o seguinte conteúdo:

```python
{% extends "base_generic.html" %}

{% block content %}
    <h1>Borrowed books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{bookinst.book.title}}</a> (\{{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

Este modelo é muito semelhante ao que criamos anteriormente para os objetos `Book` e `Author`. A única coisa "nova" aqui é que verificamos o método que adicionamos no modelo `(bookinst.is_overdue`) e use-o para alterar a cor dos itens em atraso.

Quando o servidor de desenvolvimento estiver em execução, agora você poderá visualizar a lista de um usuário conectado no seu navegador em `http://127.0.0.1:8000/catalog/mybooks/`. Experimente isso com o usuário conectado e desconectado (no segundo caso, você deve ser redirecionado para a página de login).

### Adicione a lista à barra lateral

O último passo é adicionar um link para esta nova página na barra lateral. Colocaremos isso na mesma seção em que exibimos outras informações para o usuário conectado.

Abra o template base (**/locallibrary/catalog/templates/base_generic.html**) e adicione a linha em negrito à barra lateral, como mostrado.

```python
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: \{{ user.get_username }}</li>
   <li><a href="{% url 'my-borrowed' %}">My Borrowed</a></li>
   <li><a href="{% url 'logout'%}?next=\{{request.path}}">Logout</a></li>
   {% else %}
   <li><a href="{% url 'login'%}?next=\{{request.path}}">Login</a></li>
   {% endif %}
 </ul>
```

### Com o que se parece?

Quando qualquer usuário estiver conectado, ele verá o link _My Borrowed_ na barra lateral e a lista de livros exibida abaixo (o primeiro livro não tem data de vencimento, que é um bug que esperamos corrigir em um tutorial posterior!) .

![Library - borrowed books by user](library_borrowed_by_user.png)

## Permissões

As permissões são associadas aos modelos e definem as operações que podem ser executadas em uma instância de modelo por um usuário que possui a permissão. Por padrão, o Django automaticamente fornece permissões de adição, alteração e exclusão para todos os modelos, o que permite que usuários com permissões executem as ações associadas através do site de administração. Você pode definir suas próprias permissões para modelos e concedê-las a usuários específicos. Você também pode alterar as permissões associadas a diferentes instâncias do mesmo modelo.

Testar permissões nas views e templates é muito semelhante ao teste no status de autenticação (e, na verdade, testar uma permissão também testa a autenticação).

### Models

A definição de permissões é feita na seção "`class Meta`" do modelo, usando o campo `permissions`. Você pode especificar quantas permissões você precisar em uma tupla, cada permissão sendo definida em uma tupla aninhada que contém o nome da permissão e o valor de exibição da permissão. Por exemplo, podemos definir uma permissão para permitir que um usuário marque que um livro foi retornado como mostrado:

```python
class BookInstance(models.Model):
    ...
    class Meta:
        ...
        permissions = (("can_mark_returned", "Set book as returned"),)
```

Poderíamos então atribuir a permissão a um grupo "Librarian" no site do administrador.

Abra **catalog/models.py**, e adicione a permissão como mostrado acima. Você ira precisar atualizar seus _migrations_ (execute `python3 manage.py makemigrations` e `python3 manage.py migrate`) para atualizar o banco de dados apropriadamente.

### Templates

As permissões do usuário atual são armazenadas em uma variável de modelo chamada `\{{ perms }}`. Você pode verificar se o usuário atual tem uma permissão específica usando o nome da variável específica no "aplicativo" associado ao Django — e.g. `\{{ perms.catalog.can_mark_returned }}` será `True` se o usuário tiver essa permissão, caso contrário, `False`. Normalmente testamos a permissão usando a template tag `{% if %}` como mostrado:

```python
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

### Views

As permissões podem ser testadas na exibição de funções usando o decorator `permission_required` ou em uma view baseada em classe usando o `PermissionRequiredMixin`. O padrão e o comportamento são os mesmos da autenticação de login, embora, é claro, você possa razoavelmente precisar adicionar várias permissões.

Função view decorator:

```python
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    ...
```

Um permission-required mixin para class-based views.

```python
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Or multiple permissions
    permission_required = ('catalog.can_mark_returned', 'catalog.can_edit')
    # Note that 'catalog.can_edit' is just an example
    # the catalog application doesn't have such permission!
```

### Exemplo

Não atualizaremos a _LocalLibrary_ aqui; talvez no próximo tutorial!

## Desafie-se

No início deste artigo, mostramos como criar uma página para o usuário atual, listando os livros emprestados. O desafio agora é criar uma página semelhante que seja visível apenas para bibliotecários, que exiba _todos_ os livros que foram emprestados e que inclua o nome de cada mutuário.

Você deve seguir o mesmo padrão da outra view. A principal diferença é que você precisará restringir a visualização apenas a bibliotecários. Você pode fazer isso com base no fato de o usuário ser um membro da equipe (decorator da função: `staff_member_required`, variável do template: `user.is_staff`) mas recomendamos que você use a permissão `can_mark_returned` e `PermissionRequiredMixin`, conforme descrito na seção anterior.

> **Aviso:** **Importante**: Lembre-se de não usar seu superusuário para testes baseados em permissões (as verificações de permissão sempre retornam verdadeiras para os superusuários, mesmo que uma permissão ainda não tenha sido definida!). Em vez disso, crie um usuário bibliotecário e adicione o recurso necessário.

Quando terminar, sua página será semelhante à captura de tela abaixo.

![All borrowed books, restricted to librarian](library_borrowed_all.png)

## Resumo

Excelente trabalho — Você criou um site no qual os membros da biblioteca podem fazer login e ver seu próprio conteúdo e que os bibliotecários (com as permissões corretas) podem usar para visualizar todos os livros emprestados e seus devedores. No momento, ainda estamos apenas visualizando conteúdo, mas os mesmos princípios e técnicas são usadas quando você deseja começar a modificar e adicionar dados.

Em nosso próximo artigo, veremos como você pode usar os formulários Django para coletar entradas do usuário, e então começar a modificar alguns dos nossos dados armazenados.

## Veja também

- [Autenticação de usuário no Django](https://docs.djangoproject.com/en/2.1/topics/auth/) (Django docs)
- [Usando o sistema (default) de Autenticação do Django](https://docs.djangoproject.com/en/2.1/topics/auth/default//) (Django docs)
- [Introdução a views baseadas em classe > Decorating class-based views](https://docs.djangoproject.com/en/2.1/topics/class-based-views/intro/#decorating-class-based-views) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Sessions", "Learn/Server-side/Django/Forms", "Learn/Server-side/Django")}}
