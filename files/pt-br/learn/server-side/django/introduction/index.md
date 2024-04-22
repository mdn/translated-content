---
title: Introdução ao Django
slug: Learn/Server-side/Django/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

Neste primeiro artigo do Django, respondemos a pergunta "O que é o Django?" e daremos uma visão geral do que torna este framework web especial. Vamos descrever os principais recursos, incluindo algumas das funcionalidades avançadas que não teremos tempo para abordar detalhadamente neste módulo. Também mostraremos alguns dos principais blocos de construção de um aplicativo Django (embora neste momento você ainda não tenha um ambiente de desenvolvimento para testá-lo).

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        <p>
          Conhecimentos básicos em computação. Um entendimento geral de
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/First_steps"
                >programação de websites do lado do servidor</a
              >
              e, em particular, a mecânica de
              <a href="/pt-BR/docs/">interações cliente-servidor em websites</a
              >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        Ganhar familiaridade com o que é o Django, quais funcionalidades ele
        fornece e os principais blocos de construção de uma aplicação django.
      </td>
    </tr>
  </tbody>
</table>

## O que é Django?

Django é um framework web Python de alto nível que permite o rápido desenvolvimento de sites seguros e de fácil manutenção. Construido por desenvolvedores experientes, o Django cuida de grande parte do trabalho de desenvolvimento web, para que você possa se concentrar em escrever seu aplicativo sem precisar reinventar a roda. É gratuito e de código aberto, tem uma comunidade próspera e ativa, ótima documentação e muitas opções de suporte gratuito e pago.

Django ajuda você a escrever programas que são:

- Completo
  - : Django segue a filosofia de "baterias incluídas" e fornece quase tudo que desenvolvedores possam querer fazer "fora da caixa". Como tudo o que você precisa é parte de um "produto", tudo funciona perfeitamente junto, seguindo princípios de design consistentes, contando uma extensa e [atualizada documentação](https://docs.djangoproject.com/pt-br/2.1/).
- Versátil

  - : Django pode ser (e tem sido) utilizado para construir quase todo tipo de website - desde sistema de gestão de conteúdo e wikis, passando por redes sociais e sites de notícias. Ele pode trabalhar com qualquer framework do lado do cliente, e pode entregar conteúdo em praticamente qualquer formato (incluindo HTML, feeds RSS, JSON, XML, etc). Esse site que você está lendo agora é baseado em Django.

    À medida em que, internamente, fornece opções para quase todo tipo de funcionalidade que você possa querer (por exemplo: vários banco de dados que são populares, motores de template, etc), ele pode também ser extendido para utilizar outros componentes, caso seja necessário.

- Seguro

  - : Django ajuda os desenvolvedores a evitar os erros de segurança mais comuns, fornecendo um framework que foi desenhado para "fazer as coisas certas", de modo a proteger o website automaticamente. Por exemplo, Django fornece uma maneira segura de gerenciar as contas dos usuários e suas senhas, evitando erros comuns, tais como colocar informações da sessão em cookies, onde ficam vulneráveis (ao invés disso os cookies contém apenas uma chave e os dados são armazenados no banco de dados), ou armazenar as senhas de forma direta, ao invés de gravar um hash para essas senhas.

    _Um hash de senha é um valor fixed-length (tamanho-fixo) criado mandando a senha por uma [cryptographic hash function (função hash criptográfica)](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash_criptogr%C3%A1fica). Django pode checar se uma senha inserida está correta executando ela pela função hash e comparando a saída com o valor hash armazenado. Porém devido a natureza "one-way" ("um-caminho") da função, mesmo que o valor hash armazenado estiver comprometido, é difcil para uma pessoa comentendo um ataque resolver a senha original._

    O Django ativa a proteção contra muitas vulnerabilidades por padrão, incluindo SQL injection (injeção de SQL), cross-site scripting, cross-site request forgery (Falsificação de solicitação entre sites), e clickjacking ("furto de click") (veja [Segurança de sites](/pt-BR/docs/Learn/Server-side/First_steps/Website_security) para mais detalhes de tais ataques).

- Escalável
  - : Django usa uma arquitetura baseada em componentes "[shared-nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)" ("nada-compartilhado") (cada parte da arquitetura é independente das outras, e consequentemente podem ser substituídas ou mudadas caso necessário). Ter uma separação clara entre as partes diferentes significa que pode se escalar para um tráfego aumentado adicionando hardware em qualquer nível: servidores de cache, servidores de banco de dados ou servidores de aplicação. Alguns dos sites mais ocupados escalaram o Django com sucesso para cumprir com as suas demandas (ex: Instagram e Disqus).
- Sustentável
  - : O código do Django é escrito usando princípios de design e padrões que encorajam a criação de codigo sustentável (que facilita a manutenção) e reusável. Em particular, isso utiliza o principio DRY - Don't Repeat Yourself (Não Repita a Si Mesmo) para que não haja duplicações desnecessárias, reduzindo a quantidade de código. O Django também promove o agrupamento de funcionalidades relacionadas para aplicativos reusáveis e, em um nível mais baixo, grupos de código relacionados para modulos (juntamente as linhas do padrão [MVC - Model View Controller](https://pt.wikipedia.org/wiki/MVC)).
- Portável
  - : Django é escrito em Python, que executa em muitas plataformas. Isso significa que você não esta preso em nenhuma plataforma de servidor em particular, e pode executar seus aplicativos em muitas distrubuições do Linux, Windows e Mac OS X. Além disso, o Django tem um bom suporte em muitos provedores de servidores de web, que muitas vezes provem infraestrutura especifca e documentação para hospedar sites feitos com Django.

## De onde o Django veio?

Django foi inicialmente desenvolvido entre 2003 e 2005 por um time de web que era responsável por criar e manter sites de jornal. Depois de criar um número de sites, o time começou a fatorar e reutilizar muitos de seus códigos comuns e padrões de design. Esse código comum evoluiu para um framework genérico de desenvolvimento web, que foi lançado como um projeto de código aberto nomeado "Django" em Julho de 2005.

Django continou a crescer e aprimorar, desde seu lançamento (1.0) em Setembro de 2008 até a versão recentemente lançada 2.0 em 2017. Cada lançamento adicionou novas funcionalidades e consertou falhas, variando entre suportar novos tipos de banco de dados, mecanismos de template e caches, até a adição de funções view "genéricas" e classes (que reduzem a quantidade de código que os desenvolvedores tem que escrever para um número de tarefas de programação).

> **Nota:** Cheque as [notas de lançamento](https://docs.djangoproject.com/pt-br/2.1/releases/) no site do Django para ver o que mudou nas versões mais recentes, e quanto trabalho esta sendo feito para tornar o Django melhor.

Django é um projeto de código aberto, colaborativo e próspero, com milhares de usuários contribuindo. Embora ainda tenha alguns recursos que refletem sua origem, Django evoluiu para um framework versátil que é capaz de desenvovler qualquer tipo de website.

## Quão popular é o Django?

Não há nenhum método disponível e definitivo para medir a popularidade dos framework server-side (lado do servidor) (apesar de sites como [Hot Frameworks](http://hotframeworks.com/) tentam acessar a popularidade usando mecanismos como contar o numero de projetos no GitHub e perguntas no StackOverflow para cada cada platafroma). Uma questão melhor é se o Django é "popular o suficiente" para evitar problemas de plataformas não populares. Ele continua a evoluir? Você consegue ajuda se precisar? Existem oportunidades para você ganhar dinheiro se voce aprender Django?

Baseado no número de sites com alto perfil que usam Django, o número de pessoas contribuindo para a base de código, e o número de pessoas provendo ambos suporte gratuito e pago, então sim, Django é um framework popular!

Alguns sites de alto perfil que usam Django são: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, and Open Stack (fonte: [Página inicial do django](https://www.djangoproject.com/)).

## O Django é opinativo?

Frameworks de web frequentemente referem a si mesmos como "opinativo" e "não opinativo".

Frameworks opinativos são aqueles com opiniões sobre o "modo correto" de como lidar com uma tarefa em particular. Eles frequentemente auxiliam no desenvolvimento rapido _em um domínio em particular_ (resolvendo problemas de um tipo em particular) porque o modo correto de fazer qualquer coisa normalmente já foi bem compreendido e bem documentado. Porém eles podem ser menos flexíveis para resolver problemas fora de seu principal domínio, e tendem a oferecer menos opções para quais componentes e abordagens eles podem usar.

Frameworks não opinativos, em contraste, possuem bem menos restrições sobre a melhor maneira de unir os componentes para atingir um objetivo, ou até mesmo quais componentes devem ser usados. Eles tornam mais fácil para os desenvolvedores usar as ferramentas mais adequadas para completar uma tarefa em particular, apesar do custo de você mesmo ter que achar esses componentes.

Django é "moderadamente opinativo" e, portantanto, oferece o "melhor dos dois mundo". Ele fornece um conjunto de componentes para lidar com a maioria das tarefas de desenvolvimento web, e uma (ou duas) maneiras preferidas de usá-las. No entanto, a arquitetura desacoplada do Django significa que você geralmente pode escolher entre várias opções diferentes, ou adicionar suporte para outras completamente novas, se desejar.

## Com o que o código do Django parece?

Em um site data-driven (orientado a dados) tradicional, um aplicativo web aguarda solicitações HTTP do navegador da web (ou outro cliente). Quando uma solicitação é recebida, o aplicativo calcula o que é necessário com base na URL e possivelmente nas informações dos dados `POST` ou `GET`. Dependendo do que for necessário, ele poderá ler ou gravar informações de um banco de dados ou executar outras tarefas necessárias para satisfazer a solicitação. O aplicativo retornará uma resposta para o navegador da web, normalmente criando dinamicamente uma página HTML para o navegador exibir, inserindo os dados recuperados em espaços reservados em um template HTML.

Aplicativos web feitos com Django geralmente agrupam o código que manipula cada uma dessas etapas em arquivos separados:

![](https://i.postimg.cc/W4yzpVcd/arq.png)

- **URLs:** Embora seja possível processar solicitações de cada URL por meio de uma única função, é muito mais simples fazer a manutenção do código escrevendo uma função view (vista) separada para manipular cada recurso. Um mapeador de URLs é usado para redirecionar solicitações HTTP para a view apropriada com base na URL da solicitação. O mapeador de URLs também pode corresponder padrões específicos de strings (cadeia de caracteres) ou dígitos que aparecem em um URL e transmiti-los a uma função view como dados.
- **View (Vista):** Uma view é uma função manipuladora de solicitações, que recebe solicitações HTTP e retorna respostas HTTP. As views acessam os dados necessários para satisfazer solicitações por meio dos _models (modelos)_ e encarregam a formatação da resposta aos _templates_.
- **Models (Modelos):** Modelos são objetos em Python que definem a estrutura dos dados de um aplicativo, e fornecem mecanismos para gerenciar (adicionar, modificar e excluir) e consultar registros no banco de dados.
- **Templates:** Um template é um arquivo de texto que define a estrutura ou o layout de um arquivo (como uma página HTML), com espaços reservados usados para representar o conteúdo real. Uma _view_ pode criar dinamicamente uma página HTML usando um template HTML, preenchendo-a com dados de um _model (modelo)_. Um template pode ser usado para definir a estrutura de qualquer tipo de arquivo; não precisa ser HTML!

> **Nota:** Django refere a essa organização como uma arquitetura nomeada "Model View Template (MVT)" ("Modelo Vista Template"). Ela tem muitas semelhanças com a familiar arquitetura [Model View Controller (Modelo Vista Controlador)](https://pt.wikipedia.org/wiki/MVC).

As seções abaixo lhe darão uma idéia de como essas partes principais de um aplicativo do Django se parecerão (nos vamos entrar em mais detalhes mais tarde no curso, assim que configurarmos um ambiente de desenvolvimento).

### Enviando a solicitação para a view correta (urls.py)

Um mapeador de URLs normalmente é armazenado em um arquivo chamado **urls.py**. No exemplo abaixo, o mapeador (`urlpatterns`) (_padrões de url_) define uma lista de mapeamentos entre _rotas_ (_padrões_ específicos de URL) e funções view correspondentes. Se uma solicitação HTTP for recebida com uma URL correspondente a um padrão especificado, a função view associada será chamada e a solicitação/requisição sera transmitida.

```
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book-detail, name='book-detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]

# favor utilizar o código acima no seu projeto ao invés do que está abaixo
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('livro/<int:id>/', views.livro-detalhes, name='livro-detalhes'),
#     path('catalogo/', include('catalogo.urls')),
#     re_path(r'^([0-9]+)/$', views.melhor),
# ]
```

O objeto `urlpatterns` é uma lista de funções `path()` (caminhos) e/ou `re_path()` (listas em Python são definidas usando colchetes, onde os itens são separados por vírgulas e podem conter opcionalmente uma vírgula no final. Por exemplo: **`[item1, item2, item3,]`**).

O primeiro argumento para ambos os métodos é uma rota (padrão) que será correspondida. O método `path()` usa sinais de menor e maior (<, >) para definir partes de uma URL que serão capturadas e passadas para a função view como argumentos nomeados. A função `re_path()` usa uma abordagem de correspondência de padrões flexível, conhecida como expressão regular. Nós vamos falar sobre isso em um artigo posterior!

O segundo argumento é outra função que será chamada quando o padrão for correspondido. A notação `views.book-detail` (`views.livro-detalhes`) indica que a função é chamada de `book-detail()` (`livro-detalhes()`) e pode ser encontrada em um módulo chamado `views` (ou seja, dentro de um arquivo chamado `views.py`)

### Manipulando a solicitação (views.py)

As view são o coração do aplicativo web, recebendo solicitações HTTP de clientes da web e retornando respostas HTTP. No meio disto, eles preparam os outros recursos do framework para acessar bancos de dados, renderizar (exibir) templates, etc.

O exemplo abaixo mostra uma função view mínima chamada `index()`, que poderia ter sido chamado pelo nosso mapeador de URLs na seção anterior. Como todas as funções _view_, ele recebe um objeto `HttpRequest` como um parâmetro (`request`) e retorna um objeto `HttpResponse`. Nesse caso, não fazemos nada com a solicitação, e nossa resposta simplesmente retorna uma string. Mostraremos uma solicitação que faz algo mais interessante em uma seção posterior.

```python
## filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')

# favor utilizar o código acima no seu projeto ao invés do que está abaixo
## nome do arquivo: views.py (Onde as funções view ficam)

from django.http import HttpResponse

def index(requisito):
    # Recebe um HttpRequest - o parametro requisito
    # Executar operações usando informações do requisito (solicitação).
    # Retornar HttpResponse
    return HttpResponse('Um oi do Django!')
```

> **Nota:** Um pouquinho de Python:
>
> - [Módulos do Python](https://docs.python.org/3/tutorial/modules.html) são "bibliotecas" de funções, armazenadas em arquivos separados, que podemos utilizar em nosso código. Aqui nós importamos apenas o objeto `HttpResponse` do módulo `django.http` para que possamos usá-lo em nossa view: `from django.http import HttpResponse`. Existem outras maneiras de importar alguns ou todos os objetos de um módulo.
> - As funções em Python são declaradas usando a palavra-chave `def` como mostrado acima, com parâmetros nomeados listados entre parênteses após o nome da função; a linha inteira termina em dois pontos. Observe como as próximas linhas são todas **recuadas**. O recuo é importante, pois especifica que as linhas de código estão dentro desse bloco específico (a indentação obrigatória é um recurso chave do Python e é um dos motivos pelos quais o código Python é tão fácil de ler).

Views geralmente são armazenadas em um arquivo chamado **views.py**.

### Definindo o modelo dos dados (models.py)

Os aplicativos web feitos com Django gerenciam e consultam dados por meio de objetos do Python chamados de modelos. Os modelos definem a estrutura dos dados armazenados, incluindo os _tipos_ do campo e possivelmente também seu tamanho máximo, valores padrão, opções de lista de seleção, texto de ajuda para documentação, texto de etiqueta (label) para formulários etc. A definição do modelo é independente do banco de dados subjacente — você pode escolher um dentre vários como parte das configurações do seu projeto. Uma vez que você escolheu qual banco de dados você quer usar, você não precisa se comunicar diretamente com ele — você apenas escreve a estrutura dos seus modelos e qualquer outro código, e o Django lida com todo o trabalho de se comunicar com o banco de dados para você.

O trecho de código abaixo mostra um modelo simples do Django para um objeto `Team` (Time). A classe `Team` é derivada da classe do Django `models.Model`. Ela define o nome e o nível da equipe como campos de caractere e especifica um número máximo de caracteres a serem armazenados para cada registro. O `team_level` (time_nivel) pode ser um de vários valores, portanto, o definimos como um campo de opção e fornecemos um mapeamento entre as opções a serem exibidas e os dados a serem armazenados, junto com um valor padrão.

```python
## filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        ...  #list other team levels
    )

    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')

# favor utilizar o código acima no seu projeto ao invés do que está abaixo
## nome do arquivo: models.py

from django.db import models

class Time(models.Model):
    # models.CharField define um campo de caractere no banco de dados e max_length define o tamanho maximo permitido
    time_nome = models.CharField(max_length=40)

    TIME_NIVEIS = (
        ('A09', 'Abaixo de 09'),
        ('A10', 'Abaixo de 10'),
        ('A11', 'Abaixo de 11'),
        ... #list other team levels
    )

    time_nivel = models.CharField(max_length=3,choices=TIME_NIVEIS,default='A11') # choices-opções / default-padrão
```

> **Nota:** Um pouquinho de Python:
>
> - O Python suporta "programação orientada a objetos", um estilo de programação onde organizamos nosso código em objetos, que incluem dados e funções relacionadas para operar nesses dados. Os objetos também podem herdar/estender/derivar de outros objetos, permitindo que um comportamento comum entre objetos relacionados seja compartilhado. Em Python, usamos a palavra-chave `class` (classe) para definir o "blueprint" (modelo/planta/plano) de um objeto. Podemos criar várias _instâncias_ específicas do tipo de objeto com base no modelo da classe.
>
>   Por exemplo, aqui temos uma classe `Team` (Time), que deriva da classe `Model`. Isso significa que é um modelo e conterá todos os métodos de um modelo, mas também podemos fornecer recursos especializados próprios. Em nosso modelo, definimos os campos que nosso banco de dados precisará para armazenar nossos dados, dando-lhes nomes específicos. O Django usa essas definições, incluindo os nomes dos campos, para criar o banco de dados subjacente.

### Consultando dados (views.py)

O modelo Django fornece uma query API simples para buscas no banco de dados. Isto pode combinar com um grande número de campos ao mesmo tempo utilizando diversos critérios (ex.: exato, maiúsculas e minúsculas (case-sensitive), maior que, etc.), e pode suportar definições complexas (por exemplo, você pode especificar a busca por times U11 que tem os nomes começando com 'Fr" ou terminando com "al").

O trecho de código mostra uma função da View (manipulador de recursos) para exibir todos os nossos times U09. A linha em negrito mostra como podemos usar a API modelo de consulta para filtrar todos os registros em que o campo `team_level` possui exatamente o texto 'U09' (observe como esse critério é passado para a função `filter()` com o argumento no campo de nome e o tipo de busca de correspondência (**exact**) separado por um sublinhado duplo: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)

# favor utilizar o código acima no seu projeto ao invés do código abaixo
## nome do arquivo: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    lista_times = Team.objects.filter(team_level__exact="U09")
    contexto = {'times_jovens': lista_times}
    return render(request, '/best/index.html', contexto)
```

A função `index()` usa a função `render()` para criar o `HttpResponse` que é enviado de volta para o navegador. Essa função é um atalho, ela cria um arquivo HTML combinando um modelo HTML específico com alguns dados (fornecidos pela variável denominada "`context`"). Na próxima seção, mostramos como os dados são inseridos no modelo para criar HTML.

### Renderizando dados (Modelos HTML)

O sistema de modelo permite especificar a estrutura de um documento de saída, usando espaços reservados para dados que serão preenchidos quando uma página for gerada. Os modelos geralmente são usados para criar HTML, mas também podem criar outros tipos de documentos. O Django suporta o sistema de modelos nativo e outra biblioteca Python popular chamada Jinja2 pronta para uso (também pode ser feita para suportar outros sistemas, se necessário).

O trecho de código mostra a aparência do modelo HTML chamado pela função `render()` na seção anterior. Este modelo foi escrito sob a premissa de que ele terá acesso a uma variável do tipo lista chamada `youngest_teams` quando for renderizada (contida na variável `context` dentro da função `render()` acima). Dentro do esqueleto HTML, temos um a expressão que primeiro verifica se a variável `youngest_teams` existe e a itera em um loop `for`. Em cada iteração, o modelo exibe o valor `team_name` de cada equipe em um elemento {{htmlelement("li")}}.

```python
## filename: best/templates/best/index.html

<!DOCTYPE html>
<html lang="en">
<body>

 {% if youngest_teams %}
    <ul>
    {% for team in youngest_teams %}
        <li>\{\{ team.team_name \}\}</li>
    {% endfor %}
    </ul>
{% else %}
    <p>No teams are available.</p>
{% endif %}

</body>
</html>

#favor utilizar o código acima no seu projeto ao invés do código abaixo
## nome do arquivo: best/templates/best/index.html

<!DOCTYPE html>
<html lang="pt">
<body>

 {% if youngest_teams %}
    <ul>
     {% for team in youngest_teams %}
         <li>\{\{ team.team_name \}\}</li>
     {% endfor %}     </ul> {% else %}
     <p>Nenhum time disponível.</p>
 {% endif %}
 </body>
 </html>
```

## O que mais você pode fazer?

As seções anteriores mostram os principais recursos que você usará na maioria dos aplicativos Web: mapeamento de URL, views, moldes e modelos. O Django também fornece outras coisas, como:

- **Formulários (Forms)**: Os formulários HTML são usados para coletar dados do usuário para processamento no servidor. Django simplifica a criação, validação e processamento de formulários.
- **Autenticação de usuário e permissões**: Django inclui um sistema robusto de autenticção e permissão de usuário, construído com a segurança em mente.
- **Caching**: Criar conteúdo dinamicamente é muito mais pesado (e lento) computacionalmente do que exibir conteúdo estático. O Django fornece armazenamento em cache flexível para que você possa armazenar toda ou parte de uma página pronta para que ela não seja renderizada novamente, exceto quando necessário.
- **Site de administração**: O site de administração do Django é incluído por padrão quando você cria um aplicativo usando o esqueleto básico. Ele facilita o fornecimento de uma página de administração para os administradores do site criarem, editarem e exibirem quaisquer modelos de dados em seu site
- **Serializando dados**: O Django facilita a serialização e a veiculação de dados como XML ou JSON. Isso pode ser útil ap criar um serviço Web (um site que serve apenas para que dados sejam consumidos por outros aplicativos ou sites e não exibe nada por si só), ou ao criar um site no qual o código do lado do cliente lida com todas as renderizações.

## Resumo

Parabéns, você completou o primeiro passo em sua jornada no Django! Agora você deve entender os principais benefícios do Django, um pouco sobre sua história e aproximadamente como podem ser as partes principais de um aplicativo Django. Você também deve ter aprendido algumas coisas sobre a linguagem de programação Python, incluindo a sintaxe para listas, funções e classes.

Você já viu algum código real do Django acima, mas, diferentemente do código do lado do cliente, você precisa configurar um ambiente de desenvolvimento para executá-lo. Esse é o nosso próximo passo.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
