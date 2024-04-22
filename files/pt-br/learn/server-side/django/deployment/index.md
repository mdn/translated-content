---
title: "Tutorial Django Parte 11: Hospedando Django para produção"
slug: Learn/Server-side/Django/Deployment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}

Agora que criou (e testou) um fantástico website de Biblioteca Local, vai querer instalá-lo em um servidor web público para que possa ser acessado pelo pessoal da biblioteca e membros através da Internet. Este artigo fornece uma visão geral de como poderá encontrar um servidor de hospedagem para instalar o seu web site, e o que precisa fazer para ter o seu site web pronto para produção.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        <p>
          Completar todos os tópicos do tutorial anterior, incluindo o
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Testing"
            >Tutorial Django Parte 10: Testando uma aplicação web Django.</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectivo:</th>
      <td>
        Para saber onde e como se pode hospedar uma aplicação Django na
        produção.
      </td>
    </tr>
  </tbody>
</table>

## Visão geral

Uma vez terminado o seu website (ou terminado "o suficiente" para iniciar testes públicos) vai precisar publicá-lo em um host mais público e acessível do que o seu computador de desenvolvimento pessoal.

Até agora tem trabalhado em um ambiente de desenvolvimento, utilizando o servidor web de desenvolvimento Django para compartilhar o seu site com o navegador/rede local, e executando o seu site com configurações de desenvolvimento (inseguras) que expõem debug e outras informações privadas. Antes de poder hospedar um website externamente, vai precisar fazer primeiro:

- Faça algumas alterações nas configurações do seu projeto.
- Escolher um ambiente para hospedar a aplicação Django.
- Escolher um ambiente para hospedar qualquer arquivo estático.
- Configurar uma infraestrutura de nível de produção para servir seu website.

Este tutorial fornece algumas orientações sobre suas opções para escolher um site de hospedagem, uma breve visão geral do que você precisa fazer para deixar seu aplicativo Django pronto para produção e um exemplo prático de como instalar o site Biblioteca Local no serviço de hospedagem em nuvem do [Heroku.](https://www.heroku.com/)

## O que é um ambiente de produção?

O ambiente de produção é o ambiente fornecido pelo computador/servidor onde você executará seu site para consumo externo. O ambiente inclui:

- Hardware de computador no qual o website é executado.
- Sistema operacional (por exemplo, Linux, Windows).
- Linguagem de programação de tempo de execução e bibliotecas de estrutura sobre as quais seu site é escrito.
- Servidor da Web usado para servir páginas e outros conteúdos (por exemplo, Nginx, Apache).
- Servidor de aplicativos que passa solicitações "dinâmicas" entre seu site Django e o servidor web.
- Bancos de dados dos quais seu site depende.

> **Nota:**Dependendo de como sua produção está configurada, você também pode ter um proxy reverso, load balancer(balanceador de carga), etc.

O computador/servidor pode estar localizado em suas instalações e conectado à Internet por um link rápido, mas é muito mais comum usar um computador hospedado "na nuvem". O que isso realmente significa é que seu código é executado em algum computador remoto (ou possivelmente em um computador "virtual") no(s) centro(s) de dados da empresa de hospedagem. O servidor remoto geralmente oferece algum nível garantido de recursos de computação (por exemplo, CPU, RAM, memória de armazenamento, etc.) e conectividade com a Internet por um determinado preço.

Esse tipo de hardware de computação/rede acessível remotamente é conhecido como _Infraestrutura como Serviço_ (IaaS). Muitos fornecedores de IaaS fornecem opções para pré-instalar um sistema operacional específico, no qual você deve instalar os outros componentes de seu ambiente de produção. Outros fornecedores permitem que você selecione ambientes com mais recursos, talvez incluindo uma configuração completa de Django e servidor web.

> **Nota:** Ambientes pré-construídos podem tornar a configuração do seu site muito fácil porque reduzem a configuração, mas as opções disponíveis podem limitar você a um servidor desconhecido (ou outros componentes) e podem ser baseadas em uma versão mais antiga do sistema operacional. Freqüentemente, é melhor instalar você mesmo os componentes, para obter os que deseja e, quando precisar atualizar partes do sistema, tenha uma ideia de por onde começar!

Outros provedores de hospedagem oferecem suporte a Django como parte de uma oferta de _Plataforma como Serviço_ (PaaS). Nesse tipo de hospedagem, você não precisa se preocupar com a maior parte do seu ambiente de produção (servidor da web, servidor de aplicativos, balanceadores de carga), pois a plataforma host cuida disso para você (junto com a maior parte do que você precisa fazer para para dimensionar seu aplicativo). Isso torna a implantação muito fácil, porque você só precisa se concentrar em seu aplicativo da web e não em toda a outra infraestrutura de servidor.

Alguns desenvolvedores escolherão a maior flexibilidade fornecida por IaaS em vez de PaaS, enquanto outros apreciarão a sobrecarga de manutenção reduzida e escalonamento mais fácil de PaaS. Quando você está começando, configurar seu site em um sistema PaaS é muito mais fácil e é isso que faremos neste tutorial.

> **Nota:** **Dica:** Se você escolher um provedor de hospedagem compatível com Python / Django, ele deve fornecer instruções sobre como configurar um site Django usando diferentes configurações de servidor da web, servidor de aplicativos, proxy reverso, etc (isso não será relevante se você escolher um PaaS ) Por exemplo, existem muitos guias passo a passo para várias configurações nos [documentos da comunidade Digital Ocean Django.](https://www.digitalocean.com/community/tutorials?q=django)

## Escolhendo um provedor de hospedagem

Existem mais de 100 provedores de hospedagem que são conhecidos por oferecer suporte ativo ou funcionar bem com o Django (você pode encontrar uma lista bastante exaustiva em [Djangofriendly hosts](https://djangofriendly.com/index.html)). Esses fornecedores oferecem diferentes tipos de ambientes (IaaS, PaaS) e diferentes níveis de recursos de computação e rede a preços diferentes.

Algumas coisas a serem consideradas ao escolher um host:

- O quão ocupado seu site provavelmente estará e o custo dos dados e recursos de computação necessários para atender a essa demanda.
- Nível de suporte para escalonamento horizontal (adicionando mais máquinas) e verticalmente (atualizando para máquinas mais potentes) e os custos de fazê-lo.
- Onde o fornecedor possui centros de dados e, portanto, onde o acesso provavelmente será mais rápido.
- O histórico de tempo de atividade e desempenho do tempo de inatividade do host.
- Ferramentas fornecidas para gerenciar o site - são fáceis de usar e seguras (por exemplo, SFTP x FTP).
- Estruturas integradas para monitorar seu servidor.
- Limitações conhecidas. Alguns hosts bloqueiam deliberadamente certos serviços (por exemplo, e-mail). Outros oferecem apenas um certo número de horas de "tempo de vida" em algumas faixas de preço ou oferecem apenas uma pequena quantidade de armazenamento.
- Benefícios adicionais. Alguns provedores oferecem nomes de domínio gratuitos e suporte para certificados SSL que, de outra forma, você teria que pagar.
- Se o nível "gratuito" com o qual você está contando expira com o tempo e se o custo de migrar para um nível mais caro significa que você teria ficado melhor usando algum outro serviço em primeiro lugar!

A boa notícia quando você está começando é que existem alguns sites que fornecem ambientes de computação de "avaliação", "desenvolvedor" ou "amador" de graça. Esses são sempre ambientes com recursos limitados / restritos e você precisa estar ciente de que eles podem expirar após um período introdutório. No entanto, eles são ótimos para testar sites de baixo tráfego em um ambiente real e podem fornecer uma migração fácil para pagar por mais recursos quando seu site ficar mais ocupado. As escolhas populares nesta categoria incluem [Heroku](https://www.heroku.com/), [Python Anywhere](https://www.pythonanywhere.com/), [Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html), [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/windows/), etc.

Muitos provedores também têm uma camada "básica" que fornece níveis mais úteis de capacidade de computação e menos limitações. [Digital Ocean](https://www.digitalocean.com/) e [Python Anywhere](https://www.pythonanywhere.com/) são exemplos de provedores de hospedagem populares que oferecem uma camada de computação básica relativamente barata (na faixa de US$5 a US$10 por mês).

> **Nota:**Lembre-se de que o preço não é o único critério de seleção. Se o seu site for bem-sucedido, pode ser que a escalabilidade seja a consideração mais importante.

## Preparando seu site para publicação

O [esqueleto do site do Django](/pt-BR/docs/Learn/Server-side/Django/skeleton_website) criado usando as ferramentas django-admin e manage.py é configurado para tornar o desenvolvimento mais fácil. Muitas das configurações do projeto Django (especificadas em settings.py) devem ser diferentes para produção, por motivos de segurança ou desempenho.

> **Nota:** **Dica:** É comum ter um arquivo **settings.py** separado para produção e importar configurações confidenciais de um arquivo separado ou de uma variável de ambiente. Este arquivo deve ser protegido, mesmo se o resto do código-fonte estiver disponível em um repositório público.

As configurações críticas que você deve verificar são:

- `DEBUG`. Isso deve ser definido como `False` em produção (`DEBUG = False`). Isso impede que o rastreamento de depuração sensível/confidencial e as informações variáveis sejam exibidas.
- `SECRET_KEY`. Este é um grande valor aleatório usado para proteção contra CSRF etc. É importante que a chave usada na produção não esteja no controle de origem ou acessível fora do servidor de produção. Os documentos do Django sugerem que isso pode ser melhor carregado de uma variável de ambiente ou lido de um arquivo somente servidor.

  ```python
  # Read SECRET_KEY from an environment variable
  import os
  SECRET_KEY = os.environ['SECRET_KEY']

  # OR

  # Read secret key from a file
  with open('/etc/secret_key.txt') as f:
      SECRET_KEY = f.read().strip()
  ```

Vamos mudar o aplicativo LocalLibrary para que possamos ler nosso `SECRET_KEY` e `DEBUG` variáveis de variáveis de ambiente se forem definidas, mas caso contrário, use os valores padrão no arquivo de configuração.

Abra **/locallibrary/settings.py**, desative o original `SECRET_KEY`configuração e adicione as novas linhas conforme mostrado abaixo em **negrito**. Durante o desenvolvimento, nenhuma variável de ambiente será especificada para a chave, então o valor padrão será usado (não importa qual chave você usa aqui, ou se a chave "vaza", porque você não a usará na produção).

```python
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```

Em seguida, comente o existente `DEBUG` configuração e adicione a nova linha mostrada abaixo.

```python
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

O valor do `DEBUG` será `True` por padrão, mas será apenas `False` se o valor do `DJANGO_DEBUG` variável de ambiente é definida para `False`. Observe que as variáveis de ambiente são strings e não tipos Python. Portanto, precisamos comparar strings. A única maneira de definir o `DEBUG` variável para `False` é realmente configurá-lo para a string `False`

Você pode definir a variável de ambiente como False, emitindo o seguinte comando:

```bash
export DJANGO_DEBUG=False
```

Uma lista de verificação completa das configurações que você pode querer mudar é fornecida na [Lista de verificação de implantação](https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/) (documentos do Django). Você também pode listar vários deles usando o comando de terminal abaixo:

```python
python3 manage.py check --deploy
```

## Exemplo: Instalando LocalLibrary no Heroku

Esta seção fornece uma demonstração prática de como instalar a LocalLibrary na nuvem [Heroku PaaS.](https://www.heroku.com/)

### Por que Heroku?

Heroku é um dos mais antigos e populares serviços de PaaS baseados em nuvem. Originalmente, ele suportava apenas aplicativos Ruby, mas agora pode ser usado para hospedar aplicativos de muitos ambientes de programação, incluindo Django!

Estamos optando por usar o Heroku por vários motivos:

- O Heroku tem um [nível gratuito](https://www.heroku.com/pricing) que é realmente gratuito (embora com algumas limitações).
- Como PaaS, o Heroku cuida de grande parte da infraestrutura web para nós. Isso torna muito mais fácil começar, porque você não se preocupa com servidores, balanceadores de carga, proxies reversos ou qualquer outra infraestrutura web que o Heroku fornece para nós nos bastidores.
- Embora tenha algumas limitações, elas não afetarão este aplicativo específico. Por exemplo:

  - O Heroku fornece apenas armazenamento de curta duração, portanto, os arquivos carregados pelo usuário não podem ser armazenados com segurança no próprio Heroku.
  - O nível gratuito suspenderá um aplicativo da web inativo se não houver solicitações dentro de um período de meia hora. O site pode levar vários segundos para responder quando for ativado.
  - O nível gratuito limita o tempo de execução do seu site a uma determinada quantidade de horas todos os meses (sem incluir o tempo em que o site fica "adormecido"). Isso é bom para um site de baixo uso/demonstração, mas não será adequado se 100% de tempo de atividade for necessário.
  - Outras limitações estão listadas em [Limites](https://devcenter.heroku.com/articles/limits) (documentos do Heroku).

- Na maioria das vezes, ele simplesmente funciona e, se você acabar adorando, dimensionar seu aplicativo é muito fácil.

Embora o Heroku seja perfeito para hospedar esta demonstração, pode não ser perfeito para o seu site real. O Heroku torna as coisas fáceis de configurar e escalar, ao custo de ser menos flexível e potencialmente muito mais caro depois que você sai do nível gratuito.

### How does Heroku work?

Heroku runs Django websites within one or more "[Dynos](https://devcenter.heroku.com/articles/dynos)", which are isolated, virtualized Unix containers that provide the environment required to run an application. The dynos are completely isolated and have an _ephemeral_ file system (a short-lived file system that is cleaned/emptied every time the dyno restarts). The only thing that dynos share by default are application [configuration variables](https://devcenter.heroku.com/articles/config-vars). Heroku internally uses a load balancer to distribute web traffic to all "web" dynos. Since nothing is shared between them, Heroku can scale an app horizontally simply by adding more dynos (though of course you may also need to scale your database to accept additional connections).

Because the file system is ephemeral you can't install services required by your application directly (e.g. databases, queues, caching systems, storage, email services, etc). Instead Heroku web applications use backing services provided as independent "add-ons" by Heroku or 3rd parties. Once attached to your web application, the dynos access the services using information contained in application configuration variables.

In order to execute your application Heroku needs to be able to set up the appropriate environment and dependencies, and also understand how it is launched. For Django apps we provide this information in a number of text files:

- **runtime.txt**: the programming language and version to use.
- **requirements.txt**: the Python component dependencies, including Django.
- **Procfile**: A list of processes to be executed to start the web application. For Django this will usually be the Gunicorn web application server (with a `.wsgi` script).
- **wsgi.py**: [WSGI](http://wsgi.readthedocs.io/en/latest/what.html) configuration to call our Django application in the Heroku environment.

Developers interact with Heroku using a special client app/terminal, which is much like a Unix Bash shell. This allows you to upload code that is stored in a git repository, inspect the running processes, see logs, set configuration variables and much more!

In order to get our application to work on Heroku we'll need to put our Django web application into a git repository, add the files above, integrate with a database add-on, and make changes to properly handle static files.

Once we've done all that we can set up a Heroku account, get the Heroku client, and use it to install our website.

> **Nota:** The instructions below reflect how to work with Heroku at time of writing. If Heroku significantly change their processes, you may wish to instead check their setup documents: [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction).

That's all the overview you need in order to get started (see [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) for a more comprehensive guide).

### Creating an application repository in Github

Heroku is closely integrated with the **git** source code version control system, using it to upload/synchronise any changes you make to the live system. It does this by adding a new heroku "remote" repository named _heroku_ pointing to a repository for your source on the Heroku cloud. During development you use git to store changes on your "master" repository. When you want to deploy your site, you sync your changes to the Heroku repository.

> **Nota:** If you're used to following good software development practices you are probably already using git or some other SCM system. If you already have a git repository, then you can skip this step.

There are a lot of ways to work with git, but one of the easiest is to first set up an account on [Github](https://github.com/), create the repository there, and then sync to it locally:

1. Visit <https://github.com/> and create an account.
2. Once you are logged in, click the **+** link in the top toolbar and select **New repository**.
3. Fill in all the fields on this form. While these are not compulsory, they are strongly recommended.

   - Enter a new repository name (e.g. _django_local_library_), and description (e.g. "Local Library website written in Django".
   - Choose **Python** in the _Add .gitignore_ selection list.
   - Choose your preferred license in the _Add license_ selection list.
   - Check **Initialize this repository with a README**.

4. Press **Create repository**.
5. Click the green "**Clone or download**" button on your new repo page.
6. Copy the URL value from the text field inside the dialog box that appears (it should be something like: `https://github.com/<your_git_user_id>/django_local_library.git`).

Now that the repository ("repo") is created we are going to want to clone it on our local computer:

1. Install _git_ for your local computer (you can find versions for different platforms [here](https://git-scm.com/downloads)).
2. Open a command prompt/terminal and clone your repository using the URL you copied above:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   This will create the repository in a new folder in the current working directory.

3. Navigate into the new repo.

   ```bash
   cd django_local_library
   ```

The final steps are to copy your application into this local project directory and then add (or "push", in git lingo) the local repository to your remote Github repository:

1. Copy your Django application into this folder (all the files at the same level as **manage.py** and below, **not** their containing locallibrary folder).
2. Open the **.gitignore** file, copy the following lines into the bottom of it, and then save (this file is used to identify files that should not be uploaded to git by default).

   ```
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

3. Open a command prompt/terminal and use the `add` command to add all files to git. This adds the files which aren't ignored by the **.gitignore** file to the "staging area".

   ```bash
   git add -A
   ```

4. Use the `status` command to check that all files you are about to `commit` are correct (you want to include source files, not binaries, temporary files etc.). It should look a bit like the listing below.

   ```
   > git status
   On branch master
   Your branch is up-to-date with 'origin/master'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
           new file:   catalog/__init__.py
           ...
           new file:   catalog/migrations/0001_initial.py
           ...
           new file:   templates/registration/password_reset_form.html
   ```

5. When you're satisfied, `commit` the files to your local repository. This is essentially equivalent to signing off on the changes and making them an official part of the local repository.

   ```bash
   git commit -m "First version of application moved into github"
   ```

6. At this point, the remote repository has not been changed. Synchronise (`push`) your local repository to the remote Github repository using the following command:

   ```
   git push origin master
   ```

When this operation completes, you should be able to go back to the page on Github where you created your repo, refresh the page, and see that your whole application has now been uploaded. You can continue to update your repository as files change using this add/commit/push cycle.

> **Nota:** **Tip:** This is a good point to make a backup of your "vanilla" project — while some of the changes we're going to be making in the following sections might be useful for deployment on any platform (or development) others might not.
>
> The _best_ way to do this is to use _git_ to manage your revisions. With _git_ you can not only go back to a particular old version, but you can maintain this in a separate "branch" from your production changes and cherry-pick any changes to move between production and development branches. [Learning Git](https://help.github.com/articles/good-resources-for-learning-git-and-github/) is well worth the effort, but is beyond the scope of this topic.
>
> The _easiest_ way to do this is to just copy your files into another location. Use whichever approach best matches your knowledge of git!

### Update the app for Heroku

This section explains the changes you'll need to make to our _LocalLibrary_ application to get it to work on Heroku. While Heroku's [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) instructions assume you will use the Heroku client to also run your local development environment, our changes are compatible with the existing Django development server and the workflows we've already learned.

#### Procfile

Create the file `Procfile` (no extension) in the root of your GitHub repository to declare the application's process types and entry points. Copy the following text into it:

```
web: gunicorn locallibrary.wsgi --log-file -
```

The "`web:`" tells Heroku that this is a web dyno and can be sent HTTP traffic. The process to start in this dyno is _gunicorn_, which is a popular web application server that Heroku recommends. We start Gunicorn using the configuration information in the module `locallibrary.wsgi` (created with our application skeleton: **/locallibrary/wsgi.py**).

#### Gunicorn

[Gunicorn](http://gunicorn.org/) is the recommended HTTP server for use with Django on Heroku (as referenced in the Procfile above). It is a pure-Python HTTP server for WSGI applications that can run multiple Python concurrent processes within a single dyno (see [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) for more information).

While we won't need _Gunicorn_ to serve our LocalLibrary application during development, we'll install it so that it becomes part of our [requirements](#requirements) for Heroku to set up on the remote server.

Install _Gunicorn_ locally on the command line using _pip_ (which we installed when [setting up the development environment](/pt-BR/docs/Learn/Server-side/Django/development_environment)):

> **Nota:** Note: Make sure that you're in your Python virtual environment (use the `workon [name-of-virtual-environment]` command) before you install _Gunicorn_ and further modules with _pip_, or you might experience problems with importing these modules in your **/locallibrary/settings.py** file in the later sections.

```bash
pip3 install gunicorn
```

#### Database configuration

We can't use the default SQLite database on Heroku because it is file-based, and it would be deleted from the _ephemeral_ file system every time the application restarts (typically once a day, and every time the application or its configuration variables are changed).

The Heroku mechanism for handling this situation is to use a [database add-on](https://elements.heroku.com/addons#data-stores) and configure the web application using information from an environment [configuration variable](https://devcenter.heroku.com/articles/config-vars), set by the add-on. There are quite a lot of database options, but we'll use the [hobby tier](https://devcenter.heroku.com/articles/heroku-postgres-plans#plan-tiers) of the _Heroku postgres_ database as this is free, supported by Django, and automatically added to our new Heroku apps when using the free hobby dyno plan tier.

The database connection information is supplied to the web dyno using a configuration variable named `DATABASE_URL`. Rather than hard-coding this information into Django, Heroku recommends that developers use the [dj-database-url](https://warehouse.python.org/project/dj-database-url/) package to parse the `DATABASE_URL` environment variable and automatically convert it to Django's desired configuration format. In addition to installing the _dj-database-url_ package we'll also need to install [psycopg2](http://initd.org/psycopg/), as Django needs this to interact with Postgres databases.

##### dj-database-url (Django database configuration from environment variable)

Install _dj-database-url_ locally so that it becomes part of our [requirements](#requirements) for Heroku to set up on the remote server:

```
pip3 install dj-database-url
```

##### settings.py

Open **/locallibrary/settings.py** and copy the following configuration into the bottom of the file:

```
# Heroku: Update database configuration from $DATABASE_URL.
import dj_database_url
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)
```

> **Nota:**
>
> - We'll still be using SQLite during development because the `DATABASE_URL` environment variable will not be set on our development computer.
> - The value `conn_max_age=500` makes the connection persistent, which is far more efficient than recreating the connection on every request cycle. However, this is optional and can be removed if needed.

##### psycopg2 (Python Postgres database support)

Django needs _psycopg2_ to work with Postgres databases and you will need to add this to the [requirements.txt](#requirements) for Heroku to set this up on the remote server (as discussed in the requirements section below).

Django will use our SQLite database locally by default, because the `DATABASE_URL` environment variable isn't set in our local environment. If you want to switch to Postgres completely and use our Heroku free tier database for both development and production then you can. For example, to install psycopg2 and its dependencies locally on a Debian-flavoured Linux system you would use the following Bash/terminal commands:

```bash
sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
pip3 install psycopg2-binary
```

Installation instructions for the other platforms can be found on the [psycopg2 website here](http://initd.org/psycopg/docs/install.html).

However, you don't need to do this — you don't need PostgreSQL active on the local computer, as long as you give it to Heroku as a requirement, in `requirements.txt` (see below).

#### Serving static files in production

During development we used Django and the Django development web server to serve our static files (CSS, JavaScript, etc.). In a production environment we instead typically serve static files from a content delivery network (CDN) or the web server.

> **Nota:** Serving static files via Django/web application is inefficient because the requests have to pass through unnecessary additional code (Django) rather than being handled directly by the web server or a completely separate CDN. While this doesn't matter for local use during development, it would have a significant performance impact if we were to use the same approach in production.

To make it easy to host static files separately from the Django web application, Django provides the _collectstatic_ tool to collect these files for deployment (there is a settings variable that defines where the files should be collected when _collectstatic_ is run). Django templates refer to the hosting location of the static files relative to a settings variable (`STATIC_URL`), so that this can be changed if the static files are moved to another host/server.

The relevant setting variables are:

- `STATIC_URL`: This is the base URL location from which static files will be served, for example on a CDN. This is used for the static template variable that is accessed in our base template (see [Django Tutorial Part 5: Creating our home page](/pt-BR/docs/Learn/Server-side/Django/Home_page)).
- `STATIC_ROOT`: This is the absolute path to a directory where Django's "collectstatic" tool will gather any static files referenced in our templates. Once collected, these can then be uploaded as a group to wherever the files are to be hosted.
- `STATICFILES_DIRS`: This lists additional directories that Django's collectstatic tool should search for static files.

##### settings.py

Open **/locallibrary/settings.py** and copy the following configuration into the bottom of the file. The `BASE_DIR` should already have been defined in your file (the `STATIC_URL` may already have been defined within the file when it was created. While it will cause no harm, you might as well delete the duplicate previous reference).

```
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

We'll actually do the file serving using a library called [WhiteNoise](https://warehouse.python.org/project/whitenoise/), which we install and configure in the next section.

For more information, see [Django and Static Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku docs).

#### Whitenoise

There are many ways to serve static files in production (we saw the relevant Django settings in the previous sections). Heroku recommends using the [WhiteNoise](https://warehouse.python.org/project/whitenoise/) project for serving of static assets directly from Gunicorn in production.

> **Nota:**Heroku automatically calls _collectstatic_ and prepares your static files for use by WhiteNoise after it uploads your application. Check out [WhiteNoise](https://warehouse.python.org/project/whitenoise/) documentation for an explanation of how it works and why the implementation is a relatively efficient method for serving these files.

The steps to set up _WhiteNoise_ to use with the project are [given here](http://whitenoise.evans.io/en/stable/django.html) (and reproduced below):

##### WhiteNoise

Install whitenoise locally using the following command:

```
pip3 install whitenoise
```

##### settings.py

To install _WhiteNoise_ into your Django application, open **/locallibrary/settings.py**, find the `MIDDLEWARE` setting and add the `WhiteNoiseMiddleware` near the top of the list, just below the `SecurityMiddleware`:

```
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

Optionally, you can reduce the size of the static files when they are served (this is more efficient). Just add the following to the bottom of **/locallibrary/settings.py**:

```
# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

#### Requirements

The Python requirements of your web application must be stored in a file **requirements.txt** in the root of your repository. Heroku will then install these automatically when it rebuilds your environment. You can create this file using _pip_ on the command line (run the following in the repo root):

```bash
pip3 freeze > requirements.txt
```

After installing all the different dependencies above, your **requirements.txt** file should have _at least_ these items listed (though the version numbers may be different). Please delete any other dependencies not listed below, unless you've explicitly added them for this application.

```
dj-database-url==0.5.0
Django==2.1.5
gunicorn==19.9.0
psycopg2-binary==2.7.7
whitenoise==4.1.2
```

> **Nota:** Make sure that a **psycopg2** line like the one above is present! Even if you didn't install this locally then you should still add it to **requirements.txt**.

#### Runtime

The **runtime.txt** file, if defined, tells Heroku which programming language to use. Create the file in the root of the repo and add the following text:

```
python-3.7.0
```

> **Nota:** Heroku only supports a small number of [Python runtimes](https://devcenter.heroku.com/articles/python-support#supported-python-runtimes) (at time of writing, this includes the one above). Heroku will use a supported runtime irrespective of the value specified in this file.

#### Re-test and save changes to Github

Before we proceed, lets test the site again locally and make sure it wasn't broken by any of our changes above. Run the development web server as usual and then check the site still works as you expect on your browser.

```bash
python3 manage.py runserver
```

Next, lets `push` our changes to Github. In the terminal (after having navigated to our local repository), enter the following commands:

```python
git add -A
git commit -m "Added files and changes required for deployment to heroku"
git push origin master
```

We should now be ready to start deploying LocalLibrary on Heroku.

### Get a Heroku account

To start using Heroku you will first need to create an account:

- Go to [www.heroku.com](https://www.heroku.com/) and click the **SIGN UP FOR FREE** button.
- Enter your details and then press **CREATE FREE ACCOUNT**. You'll be asked to check your account for a sign-up email.
- Click the account activation link in the signup email. You'll be taken back to your account on the web browser.
- Enter your password and click **SET PASSWORD AND LOGIN**.
- You'll then be logged in and taken to the Heroku dashboard: <https://dashboard.heroku.com/apps>.

### Install the client

Download and install the Heroku client by following the [instructions on Heroku here](https://devcenter.heroku.com/articles/getting-started-with-python#set-up).

After the client is installed you will be able run commands. For example to get help on the client:

```bash
heroku help
```

### Create and upload the website

To create the app we run the "create" command in the root directory of our repository. This creates a git remote ("pointer to a remote repository") named _heroku_ in our local git environment.

```bash
heroku create
```

> **Nota:** You can name the remote if you like by specifying a value after "create". If you don't then you'll get a random name. The name is used in the default URL.

We can then push our app to the Heroku repository as shown below. This will upload the app, package it in a dyno, run collectstatic, and start the site.

```bash
git push heroku master
```

If we're lucky, the app is now "running" on the site, but it won't be working properly because we haven't set up the database tables for use by our application. To do this we need to use the `heroku run` command and start a "[one off dyno](https://devcenter.heroku.com/articles/deploying-python#one-off-dynos)" to perform a migrate operation. Enter the following command in your terminal:

```bash
heroku run python manage.py migrate
```

We're also going to need to be able to add books and authors, so lets also create our administration superuser, again using a one-off dyno:

```bash
heroku run python manage.py createsuperuser
```

Once this is complete, we can look at the site. It should work, although it won't have any books in it yet. To open your browser to the new website, use the command:

```bash
heroku open
```

Create some books in the admin site, and check out whether the site is behaving as you expect.

### Managing addons

You can check out the add-ons to your app using the `heroku addons` command. This will list all addons, and their price tier and state.

```bash
> heroku addons

Add-on                                     Plan       Price  State
─────────────────────────────────────────  ─────────  ─────  ───────
heroku-postgresql (postgresql-flat-26536)  hobby-dev  free   created
 └─ as DATABASE
```

Here we see that we have just one add-on, the postgres SQL database. This is free, and was created automatically when we created the app. You can open a web page to examine the database add-on (or any other add-on) in more detail using the following command:

```bash
heroku addons:open heroku-postgresql
```

Other commands allow you to create, destroy, upgrade and downgrade addons (using a similar syntax to opening). For more information see [Managing Add-ons](https://devcenter.heroku.com/articles/managing-add-ons) (Heroku docs).

### Setting configuration variables

You can check out the configuration variables for the site using the `heroku config` command. Below you can see that we have just one variable, the `DATABASE_URL` used to configure our database.

```bash
> heroku config

=== locallibrary Config Vars
DATABASE_URL: postgres://uzfnbcyxidzgrl:j2jkUFDF6OGGqxkgg7Hk3ilbZI@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3
```

If you recall from the section on [getting the website ready to publish](#Getting_your_website_ready_to_publish), we have to set environment variables for `DJANGO_SECRET_KEY` and `DJANGO_DEBUG`. Let's do this now.

> **Nota:** The secret key needs to be really secret! One way to generate a new key is to use the [Django Secret Key Generator](https://www.miniwebtool.com/django-secret-key-generator/).

We set `DJANGO_SECRET_KEY` using the `config:set` command (as shown below). Remember to use your own secret key!

```bash
> heroku config:set DJANGO_SECRET_KEY='eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&='

Setting DJANGO_SECRET_KEY and restarting locallibrary... done, v7
DJANGO_SECRET_KEY: eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
```

We similarly set `DJANGO_DEBUG`:

```bash
> heroku config:set DJANGO_DEBUG=

Setting DJANGO_DEBUG and restarting locallibrary... done, v8
```

If you visit the site now you'll get a "Bad request" error, because the [ALLOWED_HOSTS](https://docs.djangoproject.com/en/2.1/ref/settings/#allowed-hosts) setting is _required_ if you have `DEBUG=False` (as a security measure). Open **/locallibrary/settings.py** and change the `ALLOWED_HOSTS` setting to include your base app url (e.g. 'locallibrary1234.herokuapp.com') and the URL you normally use on your local development server.

```python
ALLOWED_HOSTS = ['<your app URL without the https:// prefix>.herokuapp.com','127.0.0.1']
# For example:
# ALLOWED_HOSTS = ['fathomless-scrubland-30645.herokuapp.com', '127.0.0.1']
```

Then save your settings and commit them to your Github repo and to Heroku:

```bash
git add -A
git commit -m 'Update ALLOWED_HOSTS with site and development server URL'
git push origin master
git push heroku master
```

> **Nota:** After the site update to Heroku completes, enter a URL that does not exist (e.g. **/catalog/doesnotexist/**). Previously this would have displayed a detailed debug page, but now you should just see a simple "Not Found" page.

### Debugging

The Heroku client provides a few tools for debugging:

```bash
# Show current logs
heroku logs

# Show current logs and keep updating with any new results
heroku logs --tail

# Add additional logging for collectstatic (this tool is run automatically during a build)
heroku config:set DEBUG_COLLECTSTATIC=1

# Display dyno status
heroku ps
```

If you need more information than these can provide you will need to start looking into [Django Logging](https://docs.djangoproject.com/en/2.1/topics/logging/).

## Summary

That's the end of this tutorial on setting up Django apps in production, and also the series of tutorials on working with Django. We hope you've found them useful. You can check out a fully worked-through version of the [source code on Github here](https://github.com/mdn/django-locallibrary-tutorial).

The next step is to read our last few articles, and then complete the assessment task.

## See also

- [Deploying Django](https://docs.djangoproject.com/en/2.1/howto/deployment/) (Django docs)

  - [Deployment checklist](https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/) (Django docs)
  - [Deploying static files](https://docs.djangoproject.com/en/2.1/howto/static-files/deployment/) (Django docs)
  - [How to deploy with WSGI](https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/) (Django docs)
  - [How to use Django with Apache and mod_wsgi](https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/modwsgi/) (Django docs)
  - [How to use Django with Gunicorn](https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/gunicorn/) (Django docs)

- Heroku

  - [Configuring Django apps for Heroku](https://devcenter.heroku.com/articles/django-app-configuration) (Heroku docs)
  - [Getting Started on Heroku with Django](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) (Heroku docs)
  - [Django and Static Assets](https://devcenter.heroku.com/articles/django-assets) (Heroku docs)
  - [Concurrency and Database Connections in Django](https://devcenter.heroku.com/articles/python-concurrency-and-database-connections) (Heroku docs)
  - [How Heroku works](https://devcenter.heroku.com/articles/how-heroku-works) (Heroku docs)
  - [Dynos and the Dyno Manager](https://devcenter.heroku.com/articles/dynos) (Heroku docs)
  - [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) (Heroku docs)
  - [Limits](https://devcenter.heroku.com/articles/limits) (Heroku docs)
  - [Deploying Python applications with Gunicorn](https://devcenter.heroku.com/articles/python-gunicorn) (Heroku docs)
  - [Deploying Python and Django apps on Heroku](https://devcenter.heroku.com/articles/deploying-python) (Heroku docs)
  - [Other Heroku Django docs](https://devcenter.heroku.com/search?q=django)

- Digital Ocean

  - [How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [Other Digital Ocean Django community docs](https://www.digitalocean.com/community/tutorials?q=django)

{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}
