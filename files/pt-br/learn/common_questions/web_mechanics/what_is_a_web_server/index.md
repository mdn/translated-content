---
title: O que é um servidor web (web server)?
slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
---

Neste artigo vamos revisar o que são web servers, como eles funcionam, e por que eles são importantes.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Você deve saber
        <a href="/pt-BR/docs/Learn/Common_questions/Como_a_internet_funciona"
          >como a Internet funciona</a
        >
        e
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines"
          >entender a diferença entre uma página web, um site, um servidor web e
          um mecanismo de busca</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Você irá aprender o que é um servidor web e compreender de modo geral
        como ele funciona.
      </td>
    </tr>
  </tbody>
</table>

## Sumário

"Servidor web (_web server_)" pode referir ao hardware ou ao software, ou ambos trabalhando juntos.

1. Referente ao hardware, um servidor web é um computador que armazena arquivos que compõem os sites (por exemplo, documentos HTML, imagens, folhas de estilo, e arquivos JavaScript) e os entrega para o dispositivo do usuário final. Está conectado a Internet e pode ser acessado através do seu nome de domínio (DNS), como por exemplo `mozilla.org`.
2. Referente ao software, um servidor web inclui diversos componentes que controlam como os usuários acessam os arquivos hospedados (armazenados para disponibilização), no mínimo um _servidor HTTP._ Um servidor HTTP é um software que compreende {{Glossary("URL","URLs")}} (endereços web) e {{Glossary("HTTP")}} (o protocolo que seu navegador utiliza para visualizar páginas web.

Em um nível mais básico, o navegador fará uma requisição utilizando o protocolo HTTP sempre que necessitar de um um arquivo hospedado em um servidor web. Quando a requisição alcançar o servidor web correto (hardware), o _servidor HTTP_ (software) enviará o documento requerido, também via HTTP.

![Basic representation of a client/server connection through HTTP](web-server.svg)

Para publicar um website, é necessário ou um servidor web estático ou um dinâmico.

Um **servidor web estático** consiste em um computador (hardware) com um servidor HTTP (software). É chamado "estático" porque o servidor envia seus arquivos tal como foram criados e armazenados (hospedados) ao navegador.

Um **servidor web dinâmico** consiste em um servidor web estático com software adicional, mais comumente um servidor de aplicações (_application server)_ e um banco de dados (_database)._ É chamado "dinâmico" porque o servidor de aplicações atualiza os arquivos hospedados antes de enviá-los ao navegador através do servidor HTTP.

Por exemplo, para produzir as páginas finalizadas que você vê em seu navegador, o servidor de aplicações pode completar um modelo de página HTML (_HTML template_) com o conteúdo obtido de um banco de dados. Sites como o MDN ou a Wikipédia possuem vários milhares de páginas web, mas elas não são realmente documentos HTML, mas apenas alguns poucos _templates_ HTML e uma gigantesca base de dados. Essa configuração agiliza e facilita o gerenciamento e a entrega do conteúdo.

## Aprendizado ativo

_Ainda não há aprendizado ativo disponível. [Por favor, considere contribuir](/pt-BR/docs/MDN/Getting_started)._

## Entrando a fundo

Para carregar uma página _web_, como já foi dito, seu _browser_ envia uma requisição ao servidor _web_, que busca pelo arquivo requisitado no seu próprio espaço de armazenamento. Ao encontrar o arquivo, o servidor _web_ realiza a leitura, faz os processamentos necessários e o envia ao _browser_. Vamos olhar mais detalhamente para essas etapas.

### Servindo arquivos

Um servidor _web_ precisa primeiro armazenar os arquivos dos _websites_, como todos os documentos HTML e seus _assets_, que incluem imagens, páginas de estilo CSS, arquivos JavaScript, fontes e vídeos.

Técnicamente, você pode servir todos esses arquivos em seu próprio computador. Mas, é muito mais conveniente armazená-los em um servidor web dedicado que

- está sempre "vivo" e rodando
- está sempre conectado à Internet
- tem o mesmo endereço IP sempre (nem todos {{Glossary("ISP", "ISPs")}} fornecem um endereço IP fixo para linhas domésticas)
- é mantido por um provedor de terceiros

Por todas essas razões, encontrar um bom provedor de servidores é a chave para criar seu próprio _website_. Pesquise pelos vários serviços oferecidos e escolha aquele que melhor se alinha às suas necessidades e ao bolso (os serviçoes variam em uma faixa desde zero até milhares de dólares por mês). Você pode encontrar mais detalhes [nesse artigo](/en-US/Learn/How_much_does_it_cost#Hosting).

Uma vez que você escolheu uma solução de servidores web, você só precisa [fazer o _upload_ dos seus arquivos para o servidor _web_](/pt-BR/docs/Learn/Upload_files_to_a_web_server).

### Comunicando através do HTTP

Segundo, um servidor web fornece suporte para {{Glossary("HTTP")}} (protocolo de transferência de hipertexto). Como o próprio nome indica, o HTTP especifica como transferir arquivos de hipertexto (ou seja, documentos vinculados da web) entre dois computadores.

Um _protocolo_ é um conjunto de regras para comunicação entre dois computadores. HTTP é um protocolo textual sem estado.

- Textual
  - : Todos os comandos são de texto simples e legíveis por humanos.
- Sem estado
  - : Nem o servidor nem o cliente lembram de comunicações anteriores. Por exemplo, confiando apenas no HTTP, um servidor não consegue se lembrar de uma senha digitada ou da etapa em que você está em uma transação. Você precisa de um servidor de aplicativos para tarefas como essa. (Nós vamos cobrir esse tipo de tecnologia em mais artigos.)

O HTTP fornece regras claras sobre como um cliente e um servidor se comunicam. Abordaremos o próprio HTTP em um artigo técnico mais adiante. Por enquanto, apenas fique atento a estas coisas:

- Somente _clientes_ podem fazer requisições HTTP, e somente para _servidores._ Servidores podem apenas _responder_ a uma requisição HTTP dos _clientes_.
- Quando fizer a requisição de um arquivo via HTTP, os clientes devem fornecer a {{Glossary("URL")}} do arquivo.
- O servidor web _deve responder_ todas as requisições HTTP, mesmo que seja com uma mensagem de erro.

[![The MDN 404 page as an example of such error page](mdn-404.jpg)](/en-US/404)Em um servidor web, o servidor HTTP é responsável por processar e responder as requisições recebidas.

1. Ao receber uma requisição, um servidor HTTP primeiramente confirma se a URL requisitada corresponde ao arquivo existente.
2. Se confirmar, o servidor web envia o conteúdo do arquivo de volta ao navegador. Senão, o servidor de aplicações cria o arquivo necessário.
3. Se nenhum dos processos for possível, o servidor web retorna uma mensagem de erro ao navegador, mais conhecido como "404 Not Found". (Esse erro é tão comum que muitos desevolvedores web passam um bom tempo criando páginas de erro do 404.)

### Conteúdo estático vs. dinâmico

A grosso modo, um servidor pode fornecer tanto um conteúdo estático quanto dinâmico. "Estático" significa "da forma que está". Websites estáticos são os mais fáceis de configurar, então sugerimos que faça seu primeiro site estático.

"Dinâmico" significa que o servidor processa o conteúdo ou o gera a partir de um banco de dados. Essa solução fornece mais flexibilidade, mas a arquitetura fica mais difícil de lidar, fazendo com que seja dramaticamente mais complexo desenvolver o website.

Veja por exemplo a página na qual está lendo agora. No servidor web que a hospeda, há um servidor de aplicações que pega o conteúdo do artigo de um banco de dados, o formata, coloca dentro de um template HTML e lhe envia o resultado. Nesse caso, o servidor de aplicações é chamado de [Kuma](/pt-BR/docs/MDN/Kuma) e é desevolvido em [Python](https://www.python.org/) (usando o framework [Django](https://www.djangoproject.com/) ). A equipe da Mozilla desenvolveu o Kuma devido a necessidades específicas do MDN, mas há muitas aplicações similares em muitas outras tecnologias..

Existem tantos servidores de aplicações que é muito difícil sugerir algum em particular. Alguns servidores de aplicações atendem à categorias específicas de websites como blogs, wikis ou lojas virtuais. Outros, os chamados {{Glossary("CMS", "CMSs")}} (sistemas de gerenciamento de conteúdo), são mais genéricos. Se estiver desenvolvendo um website dinâmico, reserve um tempo para escolher uma ferramenta que atenda às suas necessidades. A menos que queria aprender sobre o desenvolvimento de um servidor web (que é uma área interessante por si só!), não há necessidade de criar seu próprio servidor de aplicação. Estará apenas reinventando a roda.

## Próximos passos

Agora que está familiarizado com os servidores web, você pode:

- ler sobre [quanto custa desenvolver para a web](/pt-BR/docs/Learn/How_much_does_it_cost) (em inglês)
- aprender mais sobre os [vários softwares necessários para criar um site](/pt-BR/docs/Learn/What_software_do_I_need) (em inglês)
- partir para a prática de [como fazer o upload de arquivos em um servidor web](/pt-BR/docs/Learn/Upload_files_to_a_web_server) (em inglês).
