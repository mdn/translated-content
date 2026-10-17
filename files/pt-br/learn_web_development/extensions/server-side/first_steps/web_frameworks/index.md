---
title: Frameworks web do lado do servidor
short-title: Frameworks do lado do servidor
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

O artigo anterior mostrou como é a comunicação entre clientes e servidores web, a natureza das requisições e respostas HTTP e o que uma aplicação web do lado do servidor precisa fazer para responder às requisições de um navegador web. Com esse conhecimento em mãos, é hora de explorar como os frameworks web podem simplificar essas tarefas e dar uma ideia de como você escolheria um framework para sua primeira aplicação web do lado do servidor.

<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Compreensão básica de como o código do lado do servidor
        trata e responde a requisições HTTP (veja <a
          href="/pt-BR/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Visão geral cliente-servidor</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender como os frameworks web podem simplificar o
        desenvolvimento/manutenção do código do lado do servidor e levar
        o leitor a pensar sobre a escolha de um framework para o seu
        próprio desenvolvimento.
      </td>
    </tr>
  </tbody>
</table>

As seções a seguir ilustram alguns pontos usando trechos de código de frameworks web reais. Não se preocupe se nem **tudo** fizer sentido agora; vamos trabalhar o código com você nos nossos módulos específicos de cada framework.

## Visão geral

Os frameworks web do lado do servidor (também conhecidos como "frameworks de aplicações web") são frameworks de software que facilitam a escrita, a manutenção e o escalonamento de aplicações web. Eles fornecem ferramentas e bibliotecas que simplificam tarefas comuns do desenvolvimento web, incluindo o roteamento de URLs para os manipuladores adequados, a interação com bancos de dados, o suporte a sessões e autorização de usuários, a formatação da saída (por exemplo, HTML, JSON, XML) e a melhoria da segurança contra ataques web.

A próxima seção dá mais detalhes sobre como os frameworks web podem facilitar o desenvolvimento de aplicações web. Em seguida, explicaremos alguns dos critérios que você pode usar para escolher um framework web e, depois, listaremos algumas das suas opções.

## O que um framework web pode fazer por você?

Os frameworks web fornecem ferramentas e bibliotecas para simplificar operações comuns do desenvolvimento web. Você _não precisa_ usar um framework web do lado do servidor, mas é altamente recomendável: isso tornará a sua vida muito mais fácil.

Esta seção discute algumas das funcionalidades normalmente oferecidas pelos frameworks web (nem todos os frameworks fornecem necessariamente todos esses recursos!).

### Trabalhar diretamente com requisições e respostas HTTP

Como vimos no artigo anterior, servidores web e navegadores se comunicam por meio do protocolo HTTP: os servidores aguardam requisições HTTP do navegador e, em seguida, retornam informações em respostas HTTP. Os frameworks web permitem que você escreva uma sintaxe simplificada que gerará o código do lado do servidor necessário para trabalhar com essas requisições e respostas. Isso significa que você terá uma tarefa mais fácil, interagindo com código mais simples e de nível mais alto, em vez de primitivas de rede de nível mais baixo.

O exemplo abaixo mostra como isso funciona no framework web Django (Python). Cada função de "view" (um manipulador de requisições) recebe um objeto `HttpRequest` contendo as informações da requisição e deve retornar um objeto `HttpResponse` com a saída formatada (neste caso, uma string).

```python
# Função de view do Django
from django.http import HttpResponse

def index(request):
    # Recebe um HttpRequest (request)
    # executa operações usando informações da requisição.
    # Retorna HttpResponse
    return HttpResponse('String de saída a ser retornada')
```

### Encaminhar requisições para o manipulador adequado

A maioria dos sites oferece vários recursos diferentes, acessíveis por meio de URLs distintas. Tratar tudo isso em uma única função seria difícil de manter, então os frameworks web fornecem mecanismos simples para mapear padrões de URL para funções manipuladoras específicas. Essa abordagem também traz benefícios de manutenção, porque você pode mudar a URL usada para oferecer um determinado recurso sem precisar alterar o código subjacente.

Diferentes frameworks usam mecanismos distintos para esse mapeamento. Por exemplo, o framework web Flask (Python) adiciona rotas às funções de view usando um decorador.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Já o Django espera que os desenvolvedores definam uma lista de mapeamentos de URL entre um padrão de URL e uma função de view.

```python
urlpatterns = [
    url(r'^$', views.index),
    # exemplo: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Facilitar o acesso aos dados da requisição

Os dados podem ser codificados em uma requisição HTTP de várias maneiras. Uma requisição HTTP `GET` para obter arquivos ou dados do servidor pode codificar os dados necessários em parâmetros de URL ou na própria estrutura da URL. Uma requisição HTTP `POST` para atualizar um recurso no servidor, por outro lado, incluirá as informações de atualização como "dados POST" dentro do corpo da requisição. A requisição HTTP também pode incluir informações sobre a sessão ou o usuário atual em um cookie do lado do cliente.

Os frameworks web fornecem mecanismos adequados à linguagem de programação para acessar essas informações. Por exemplo, o objeto `HttpRequest` que o Django passa para cada função de view contém métodos e propriedades para acessar a URL de destino, o tipo de requisição (por exemplo, um HTTP `GET`), os parâmetros `GET` ou `POST`, os dados de cookies e de sessão etc. O Django também pode passar informações codificadas na estrutura da URL definindo "padrões de captura" no mapeador de URLs (veja o último trecho de código da seção anterior).

### Abstrair e simplificar o acesso a bancos de dados

Os sites usam bancos de dados para armazenar informações, tanto para compartilhar com os usuários quanto sobre os próprios usuários. Os frameworks web costumam fornecer uma camada de banco de dados que abstrai as operações de leitura, escrita, consulta e exclusão. Essa camada de abstração é chamada de Mapeador Objeto-Relacional (ORM, do inglês _Object-Relational Mapper_).

Usar um ORM traz dois benefícios:

- Você pode substituir o banco de dados subjacente sem precisar alterar o código que o utiliza. Isso permite que os desenvolvedores otimizem de acordo com as características de diferentes bancos de dados, conforme o uso.
- A validação básica dos dados pode ser implementada dentro do framework. Isso torna mais fácil e seguro verificar se os dados são armazenados no tipo de campo correto do banco de dados, se têm o formato adequado (por exemplo, um endereço de e-mail) e se não são maliciosos de nenhuma forma (os atacantes podem usar certos padrões de código para fazer coisas nocivas, como excluir registros do banco de dados).

Por exemplo, o framework web Django fornece um ORM e chama o objeto usado para definir a estrutura de um registro de _modelo_. O modelo especifica os _tipos_ de campo que serão armazenados, o que pode fornecer validação em nível de campo sobre quais informações podem ser salvas (por exemplo, um campo de e-mail permitiria apenas endereços de e-mail válidos). As definições dos campos também podem especificar seu tamanho máximo, valores padrão, opções de lista de seleção, texto de ajuda para documentação, texto de rótulo para formulários etc. O modelo não indica nenhuma informação sobre o banco de dados subjacente, pois isso é uma configuração que pode ser alterada separadamente do nosso código.

O primeiro trecho de código abaixo mostra um modelo Django muito simples para um objeto `Team`. Ele armazena o nome e o nível da equipe como campos de caracteres e especifica um número máximo de caracteres a serem armazenados em cada registro. `team_level` é um campo de escolha, então também fornecemos um mapeamento entre as opções a serem exibidas e os dados a serem armazenados, juntamente com um valor padrão.

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # Aqui seriam adicionadas as demais equipes
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

O modelo Django fornece uma API de consulta simples para pesquisar no banco de dados. Ela pode comparar vários campos ao mesmo tempo usando diferentes critérios (por exemplo, exato, sem distinção entre maiúsculas e minúsculas, maior que etc.) e pode oferecer suporte a instruções complexas (por exemplo, você pode especificar uma busca por equipes U11 cujo nome comece com "Fr" ou termine com "al").

O segundo trecho de código mostra uma função de view (manipulador de recursos) para exibir todas as nossas equipes U09. Neste caso, especificamos que queremos filtrar todos os registros em que o campo `team_level` tenha exatamente o texto 'U09' (observe abaixo como esse critério é passado para a função `filter()` como um argumento com o nome do campo e o tipo de correspondência separados por sublinhados duplos: **team_level\_\_exact**).

```python
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### Renderização de dados

Os frameworks web geralmente fornecem sistemas de templates. Eles permitem que você especifique a estrutura de um documento de saída, usando espaços reservados para os dados que serão adicionados quando a página for gerada. Os templates são frequentemente usados para criar HTML, mas também podem criar outros tipos de documentos.

Os frameworks web costumam fornecer um mecanismo que facilita a geração de outros formatos a partir dos dados armazenados, incluindo {{glossary("JSON")}} e {{glossary("XML")}}.

Por exemplo, o sistema de templates do Django permite especificar variáveis usando uma sintaxe de "chaves duplas" (por exemplo, `\{{ variable_name }}`), que serão substituídas pelos valores passados da função de view quando a página for renderizada. O sistema de templates também oferece suporte a expressões (com a sintaxe: `{% expression %}`), que permitem aos templates realizar operações simples, como iterar sobre os valores de uma lista passada ao template.

> [!NOTE]
> Muitos outros sistemas de templates usam uma sintaxe semelhante, por exemplo: Jinja2 (Python), Handlebars (JavaScript), Moustache (JavaScript) etc.

O trecho de código abaixo mostra como isso funciona. Continuando com o exemplo da "equipe mais jovem" da seção anterior, a view passa para o template HTML uma variável do tipo lista chamada `youngest_teams`. Dentro do esqueleto HTML, temos uma expressão que primeiro verifica se a variável `youngest_teams` existe e, em seguida, a percorre com um laço `for`. A cada iteração, o template exibe o valor `team_name` da equipe em um elemento de lista.

```django
#best/templates/best/index.html

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>\{{ team.team_name }}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>Nenhuma equipe disponível.</p>
    {% endif %}
  </body>
</html>
```

## Como escolher um framework web

Existem inúmeros frameworks web para quase todas as linguagens de programação que você queira usar (na próxima seção, listamos alguns dos frameworks mais populares). Com tantas opções, pode ser difícil determinar qual framework oferece o melhor ponto de partida para a sua nova aplicação web.

Alguns dos fatores que podem influenciar a sua decisão são:

- **Esforço de aprendizado:** O esforço necessário para aprender um framework web depende do quanto você está familiarizado com a linguagem de programação subjacente, da consistência da sua API, da qualidade da documentação e do tamanho e da atividade da sua comunidade. Se você está começando do zero em programação, considere o Django (é um dos mais fáceis de aprender com base nos critérios acima). Se você faz parte de uma equipe de desenvolvimento que já tem experiência significativa com um framework web ou linguagem de programação em particular, então faz sentido continuar com ele.
- **Produtividade:** A produtividade mede a rapidez com que você consegue criar novos recursos depois de se familiarizar com o framework, e inclui tanto o esforço de escrever quanto o de manter o código (já que você não consegue escrever novos recursos enquanto os antigos estão quebrados). Muitos dos fatores que afetam a produtividade são semelhantes aos do "esforço de aprendizado" — por exemplo, documentação, comunidade, experiência em programação etc. —; outros fatores incluem:
  - _Propósito ou origem do framework_: Alguns frameworks web foram criados inicialmente para resolver certos tipos de problemas e continuam sendo _melhores_ na criação de aplicações web com restrições semelhantes. Por exemplo, o Django foi criado para dar suporte ao desenvolvimento de um site de jornal, então é bom para blogs e outros sites que envolvem a publicação de conteúdo. Já o Flask é um framework muito mais leve e é excelente para criar aplicações web executadas em dispositivos embarcados.
  - _Opinativo versus não opinativo_: Um framework "opinativo" (_opinionated_) é aquele em que existem maneiras "ideais" recomendadas de resolver um problema específico. Esse tipo de framework tende a ser mais produtivo ao resolver problemas comuns, porque orienta você na direção certa, embora às vezes seja menos flexível.
  - _Com "baterias incluídas" versus faça você mesmo_: Alguns frameworks web incluem por padrão ferramentas e bibliotecas que abordam todos os problemas que seus desenvolvedores conseguiram imaginar, enquanto os frameworks mais leves esperam que os desenvolvedores web escolham as soluções para seus problemas entre bibliotecas independentes (o Django é um exemplo do primeiro caso, enquanto o Flask é um exemplo de framework muito leve). Os frameworks que incluem tudo costumam ser mais fáceis para começar, porque você já tem tudo de que precisa, e é provável que estejam bem integrados e bem documentados. No entanto, se um framework menor tem tudo de que você precisa (ou precisará), ele pode ser executado em ambientes mais limitados e terá um conjunto de conceitos menor e mais fácil de aprender.
  - _Se o framework incentiva ou não boas práticas de desenvolvimento_: Por exemplo, um framework que incentiva uma arquitetura [Model-View-Controller](/pt-BR/docs/Glossary/MVC) para separar o código em funções lógicas resultará em um código mais fácil de manter do que um que não impõe expectativas aos desenvolvedores. Da mesma forma, o design do framework pode ter um grande impacto na facilidade de testar e reutilizar o código.

- **Desempenho do framework ou da linguagem de programação:** Normalmente, a "velocidade" não é o fator mais importante na escolha, porque até ambientes de execução relativamente lentos como o Python são "mais do que suficientes" para sites de médio porte executados em hardware moderado. Os benefícios de velocidade percebidos em outra linguagem, como C++ ou JavaScript, podem muito bem ser anulados pelos custos de aprendizado e manutenção.
- **Suporte a cache:** À medida que o seu site web tiver mais sucesso, você pode descobrir que ele já não consegue lidar com o número de requisições que recebe conforme os usuários o acessam. Nesse ponto, você pode considerar adicionar suporte a cache. O cache é uma otimização em que você armazena toda ou parte de uma resposta web para que ela não precise ser recalculada em requisições posteriores. Retornar uma resposta em cache é muito mais rápido do que calculá-la do zero. O cache pode ser implementado no seu código ou no servidor (veja [proxy reverso](https://en.wikipedia.org/wiki/Reverse_proxy)). Os frameworks web oferecem diferentes níveis de suporte para definir qual conteúdo pode ser armazenado em cache.
- **Escalabilidade:** Quando o seu site web tiver um sucesso enorme, você esgotará os benefícios do cache e até atingirá os limites do _escalonamento vertical_ (executar a sua aplicação web em hardware mais potente). Nesse ponto, talvez você precise _escalar horizontalmente_ (dividir a carga distribuindo o seu site entre vários servidores web e bancos de dados) ou escalar "geograficamente", porque alguns dos seus clientes estão muito longe do seu servidor. O framework web que você escolher pode fazer uma grande diferença na facilidade de escalar o seu site.
- **Segurança web:** Alguns frameworks web oferecem melhor suporte para lidar com ataques web comuns. O Django, por exemplo, sanitiza toda a entrada do usuário proveniente dos templates HTML para que o JavaScript inserido pelo usuário não possa ser executado. Outros frameworks oferecem proteção semelhante, mas nem sempre ela vem habilitada por padrão.

Há muitos outros fatores possíveis, incluindo a licença, se o framework está ou não em desenvolvimento ativo etc.

Se você é um iniciante absoluto em programação, provavelmente escolherá o seu framework com base na "facilidade de aprendizado". Além da "facilidade de uso" da própria linguagem, uma documentação e tutoriais de alta qualidade e uma comunidade ativa que ajude os novos usuários são os seus recursos mais valiosos. Escolhemos o [Django](https://www.djangoproject.com/) (Python) e o [Express](https://expressjs.com/) (Node/JavaScript) para escrever os nossos exemplos mais adiante no curso, principalmente porque são fáceis de aprender e têm bom suporte.

> [!NOTE]
> Vamos visitar os sites principais do [Django](https://www.djangoproject.com/) (Python) e do [Express](https://expressjs.com/) (Node/JavaScript) e conferir a documentação e a comunidade de cada um.
>
> 1. Navegue até os sites principais (linkados acima).
>    - Clique nos links do menu de documentação (com nomes como "Documentation, Guide, API Reference, Getting Started" etc.).
>    - Você consegue ver tópicos que mostrem como configurar o roteamento de URLs, os templates e os bancos de dados/modelos?
>    - Os documentos são claros?
> 2. Navegue até as listas de e-mail de cada site (acessíveis a partir dos links da comunidade).
>    - Quantas perguntas foram publicadas nos últimos dias?
>    - Quantas têm resposta?
>    - Eles têm uma comunidade ativa?

## Alguns bons frameworks web?

Vamos agora analisar alguns frameworks web do lado do servidor específicos.

Os frameworks do lado do servidor abaixo representam _alguns_ dos mais populares disponíveis no momento da escrita deste texto. Todos eles têm tudo de que você precisa para ser produtivo: são de código aberto, estão em desenvolvimento ativo, têm comunidades entusiasmadas que criam documentação e ajudam os usuários em fóruns de discussão, e são usados em um grande número de sites de grande visibilidade. Existem muitos outros excelentes frameworks do lado do servidor que você pode descobrir com uma simples pesquisa na internet.

> [!NOTE]
> As descrições vêm (parcialmente) dos sites de cada framework!

### Django (Python)

O [Django](https://www.djangoproject.com/) é um framework web de alto nível para Python que incentiva o desenvolvimento rápido e um design limpo e pragmático. Criado por desenvolvedores experientes, ele cuida de grande parte das complicações do desenvolvimento web, para que você possa se concentrar em escrever a sua aplicação sem precisar reinventar a roda. É gratuito e de código aberto.

O Django segue a filosofia de "baterias incluídas" e oferece quase tudo de que a maioria dos desenvolvedores pode precisar "de fábrica". Como tudo está incluído, tudo funciona em conjunto, segue princípios de design consistentes e conta com documentação extensa e atualizada. Ele também é rápido, seguro e muito escalável. Por ser baseado em Python, o código do Django é fácil de ler e manter.

Entre os sites populares que usam o Django (de acordo com a página inicial do Django) estão: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest e Open Stack.

### Flask (Python)

O [Flask](https://flask.palletsprojects.com/) é um microframework para Python.

Embora seja minimalista, o Flask consegue criar sites sérios logo de cara. Ele inclui um servidor de desenvolvimento e um depurador, e oferece suporte a templates [Jinja2](https://github.com/pallets/jinja), cookies seguros, [testes unitários](https://en.wikipedia.org/wiki/Unit_testing) e despacho de requisições [RESTful](https://restapitutorial.com/). Tem boa documentação e uma comunidade ativa.

O Flask tornou-se extremamente popular, principalmente entre desenvolvedores que precisam oferecer serviços web em sistemas pequenos e com recursos limitados (por exemplo, executar um servidor web em um [Raspberry Pi](https://www.raspberrypi.org/), [controladores de drones](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) etc.).

### Express (Node.js/JavaScript)

O [Express](https://expressjs.com/) é um framework web rápido, não opinativo, flexível e minimalista para [Node.js](https://nodejs.org/en/) (o Node é um ambiente sem navegador para executar JavaScript). Ele fornece um conjunto robusto de recursos para aplicações web e móveis, e oferece métodos utilitários HTTP e [middleware](/pt-BR/docs/Glossary/Middleware) úteis.

O Express é extremamente popular, em parte porque facilita a migração de programadores web de JavaScript do lado do cliente para o desenvolvimento do lado do servidor, e em parte porque é eficiente no uso de recursos (o ambiente Node subjacente usa multitarefa leve dentro de uma única thread, em vez de criar processos separados para cada nova requisição web).

Como o Express é um framework web minimalista, ele não incorpora todos os componentes que você pode querer usar (por exemplo, o acesso a bancos de dados e o suporte a usuários e sessões são fornecidos por bibliotecas independentes). Existem muitos ótimos componentes independentes, mas às vezes pode ser difícil determinar qual é o melhor para um propósito específico!

Muitos frameworks populares do lado do servidor e full stack (que incluem tanto frameworks do lado do servidor quanto do lado do cliente) são baseados no Express, entre eles [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) e [Sails](https://sailsjs.com/).

Muitas empresas de grande visibilidade usam o Express, entre elas Uber, Accenture, IBM etc.

### Deno (JavaScript)

O [Deno](https://deno.com/) é um ambiente de execução e framework de [JavaScript](/pt-BR/docs/Web/JavaScript)/TypeScript simples, moderno e seguro, construído sobre o Chrome V8 e o [Rust](https://rust-lang.org/).

O Deno funciona com o [Tokio](https://tokio.rs/), um ambiente de execução assíncrono baseado em Rust que permite servir páginas web mais rapidamente. Ele também tem suporte interno ao [WebAssembly](/pt-BR/docs/WebAssembly), o que permite compilar código binário para uso no lado do cliente. O Deno busca suprir algumas das deficiências do [Node.js](/pt-BR/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) oferecendo um mecanismo que mantém uma melhor segurança de forma nativa.

Entre os recursos do Deno estão:

- Segurança por padrão. [Os módulos do Deno restringem as permissões](https://docs.deno.com/runtime/fundamentals/security/) de acesso a **arquivos**, **rede** ou **ambiente**, a menos que sejam explicitamente permitidas.
- Suporte a TypeScript **de fábrica**.
- Mecanismo `await` de primeira classe.
- Ferramenta de testes e formatador de código integrados (`deno fmt`).
- Compatibilidade com navegadores (JavaScript): os programas Deno escritos inteiramente em JavaScript, sem usar o namespace `Deno` (ou com um teste de recurso para detectá-lo), devem funcionar diretamente em qualquer navegador moderno.
- Empacotamento de scripts em um único arquivo JavaScript.

O Deno oferece uma forma simples, porém poderosa, de usar JavaScript tanto na programação do lado do cliente quanto do lado do servidor.

### Ruby on Rails (Ruby)

O [Rails](https://rubyonrails.org/) (normalmente conhecido como "Ruby on Rails") é um framework web escrito para a linguagem de programação Ruby.

O Rails segue uma filosofia de design muito semelhante à do Django. Assim como o Django, ele fornece mecanismos padrão para rotear URLs, acessar dados de um banco de dados, gerar HTML a partir de templates e formatar dados como {{glossary("JSON")}} ou {{glossary("XML")}}. Da mesma forma, incentiva o uso de padrões de design como DRY ("don't repeat yourself", não se repita: escreva o código uma única vez sempre que possível), MVC (model-view-controller) e vários outros.

Claro, há muitas diferenças devidas a decisões de design específicas e à natureza das linguagens.

O Rails tem sido usado em sites de grande visibilidade, entre eles: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/) e [Square](https://squareup.com/us/en).

### Laravel (PHP)

O [Laravel](https://laravel.com/) é um framework de aplicações web com uma sintaxe expressiva e elegante. O Laravel tenta tirar o sofrimento do desenvolvimento facilitando as tarefas comuns usadas na maioria dos projetos web, como:

- [Mecanismo de roteamento simples e rápido](https://laravel.com/docs/routing).
- [Poderoso contêiner de injeção de dependências](https://laravel.com/docs/container).
- Múltiplos backends para armazenamento de [sessões](https://laravel.com/docs/session) e [cache](https://laravel.com/docs/cache).
- [ORM de banco de dados](https://laravel.com/docs/eloquent) expressivo e intuitivo.
- [Migrações de esquema](https://laravel.com/docs/migrations) independentes do banco de dados.
- [Processamento robusto de tarefas em segundo plano](https://laravel.com/docs/queues).
- [Transmissão de eventos em tempo real](https://laravel.com/docs/broadcasting).

O Laravel é acessível, mas ao mesmo tempo poderoso, e oferece as ferramentas necessárias para aplicações grandes e robustas.

### ASP.NET

O [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) é um framework web de código aberto desenvolvido pela Microsoft para criar aplicações e serviços web modernos. Com o ASP.NET, você pode criar rapidamente sites baseados em HTML, CSS e JavaScript, escalá-los para uso por milhões de usuários e adicionar facilmente recursos mais complexos, como APIs web, formulários sobre dados ou comunicações em tempo real.

Uma das características marcantes do ASP.NET é ser construído sobre o [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR), o que permite que os programadores escrevam código ASP.NET usando qualquer linguagem .NET compatível (C#, Visual Basic etc.). Como muitos produtos da Microsoft, ele se beneficia de ótimas ferramentas (frequentemente gratuitas), de uma comunidade de desenvolvedores ativa e de documentação bem escrita.

O ASP.NET é usado pela Microsoft, pelo Xbox.com, pelo Stack Overflow e por muitos outros.

### Mojolicious (Perl)

O [Mojolicious](https://mojolicious.org/) é um framework web de nova geração para a linguagem de programação Perl.

Nos primeiros dias da web, muitas pessoas aprenderam Perl graças a uma excelente biblioteca Perl chamada [CGI](https://metacpan.org/pod/CGI). Ela era simples o bastante para começar sem saber muito sobre a linguagem e poderosa o bastante para continuar avançando. O Mojolicious leva essa ideia adiante usando tecnologias de ponta.

Alguns dos recursos oferecidos pelo Mojolicious são:

- Um framework web em tempo real, para fazer protótipos de um único arquivo crescerem facilmente até se tornarem aplicações web MVC bem estruturadas.
- Rotas RESTful, plug-ins, comandos, templates no estilo Perl, negociação de conteúdo, gerenciamento de sessões, validação de formulários, framework de testes, servidor de arquivos estáticos, detecção de CGI/[PSGI](https://plackperl.org/) e suporte a Unicode de primeira classe.
- Uma implementação completa de cliente/servidor HTTP e WebSocket, com suporte a IPv6, TLS, SNI, IDNA, proxy HTTP/SOCKS5, socket de domínio UNIX, Comet (long polling), keep-alive, pool de conexões, timeout, cookies, multipart e compressão gzip.
- Analisadores e geradores de JSON e HTML/XML com suporte a seletores CSS.
- Uma API muito limpa, portável e orientada a objetos, escrita em Perl puro e sem mágica oculta.
- Código recente baseado em anos de experiência, gratuito e de código aberto.

### Spring Boot (Java)

O [Spring Boot](https://spring.io/projects/spring-boot/) é um dos vários projetos oferecidos pelo [Spring](https://spring.io/). É um bom ponto de partida para fazer desenvolvimento web do lado do servidor usando [Java](https://www.java.com/).

Embora certamente não seja o único framework baseado em [Java](https://www.java.com/), ele é fácil de usar para criar aplicações independentes e de qualidade de produção baseadas no Spring que você pode simplesmente "executar". Ele oferece uma visão opinativa da plataforma Spring e das bibliotecas de terceiros, mas permite começar com um mínimo de complicação e configuração.

Pode ser usado para problemas pequenos, mas seu ponto forte é a construção de aplicações em maior escala que sigam uma abordagem em nuvem. Normalmente, várias aplicações são executadas em paralelo, comunicando-se entre si, com umas cuidando da interação com o usuário e outras do trabalho de backend (por exemplo, acessar bancos de dados ou outros serviços). Os balanceadores de carga ajudam a garantir redundância e confiabilidade, ou permitem tratar as requisições dos usuários de forma geolocalizada para garantir a capacidade de resposta.

## Resumo

Este artigo mostrou que os frameworks web podem facilitar o desenvolvimento e a manutenção do código do lado do servidor. Ele também apresentou uma visão geral de alto nível de alguns frameworks populares e discutiu os critérios para escolher um framework de aplicações web. Agora você deve ter pelo menos uma ideia de como escolher um framework web para o seu próprio desenvolvimento do lado do servidor. Se não tiver, não se preocupe: mais adiante no curso, daremos a você tutoriais detalhados sobre Django e Express para que você ganhe alguma experiência trabalhando de fato com um framework web.

No próximo artigo deste módulo, mudaremos um pouco de direção e falaremos sobre segurança web.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}