---
title: Como a Internet funciona?
slug: Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
---

{{LearnSidebar}}

Este artigo discute sobre o que é e como funciona a internet.

<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Nenhum, mas encorajamos a ler primeiro
        <a href="/pt-BR/docs/Learn/Common_questions/Thinking_before_coding"
          >Como eu começo a criar meu site?</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Você irá aprender o básico da infraestrutura técnica da Web e a diferença entre Internet e Web.
      </td>
    </tr>
  </tbody>
</table>

## Resumo

A **Internet** é a espinha dorsal da Web, a infraestrutura técnica que faz a Web possível. Mas basicamente, a Internet é uma gigantesca rede de computadores que se comunicam juntos.

[A história da internet é um pouco obscura](https://pt.wikipedia.org/wiki/Internet#Hist.C3.B3ria). Ela começou nos anos 60 como um projeto de pesquisa consolidado pelo exército norte americano, e tornou-se uma infraestrutura pública nos anos 80 com o suporte dado por diversas universidades públicas e companhias privadas. As várias tecnologias que suportam a internet evoluíram através do tempo, mas a forma de funcionamento não mudou muito: Internet é uma forma de conectar computadores e garantir, em qualquer situação, que eles encontrem uma forma de se manter conectados.

## Aprendizado Ativo

- [Como a Internet funciona em 5 minutos](https://www.youtube.com/watch?v=7_LPdttKXPc): Um vídeo de 5 minutos para entender os conceitos básicos da Internet feito por Aaron Titus.

- [Como a Internet funciona?](https://www.youtube.com/watch?v=x3c1ih2NJEg): Vídeo animado de 9 minutos bem detalhado feito pelo canal Lesics (Learn Engineering Through Physics).

## Mergulho Profundo

### Uma rede simples

Quando dois computadores precisam se comunicar, você precisa conectá-los, seja fisicamente (normalmente com um [Cabo de rede](https://pt.wikipedia.org/wiki/Cabo_de_par_tran%C3%A7ado)) ou de uma forma sem fio (por exemplo com sistemas [WiFi](https://pt.wikipedia.org/wiki/Wi-Fi) ou [Bluetooth](https://pt.wikipedia.org/wiki/Bluetooth)). Todos os computadores modernos suportam alguma(s) dessas conexões.

> **Nota:** Até o final deste artigo nós estaremos falando apenas a respeito de cabos físicos, mas redes sem fio funcionam da mesma forma

![Dois computadores conectados](internet-schema-1.png)

Uma rede não é limitada a dois computadores. Você pode conectar quantos computadores desejar. Mas isto se torna complicado. Se você está tentando conectar, digamos, dez computadores, você irá precisar de 45 cabos, com 9 conexões por computador!

![Dez computadores conectados entre si](internet-schema-2.png)

Para resolver este problema, cada computador na rede está conectado a um pequeno computador especial chamado de _roteador_. Este _roteador_ tem um único trabalho: como um sinalizador em uma estação de trem, ter certeza de que a mensagem enviada por um determinado computador chegue ao computador destinatário corretamente. Para enviar uma mensagem para o computador B, o computador A deve enviar a mensagem para o roteador, que por sua vez encaminha a mensagem para o computador B e tem a certeza de que a mensagem não foi entregue ao computador C.

Uma vez que nós adicionamos um roteador no sistema, nossa rede de 10 computadores apenas necessitará de 10 cabos: uma única conexão para cada computador e um roteador com 10 conexões.

![10 computadores com um roteador](internet-schema-3.png)

### Uma rede de redes

Por enquanto, tudo bem. Mas como conectar centenas, milhares, bilhões de computadores? Claro que um único _roteador_ não pode se adaptar para tanto, mas, se você ler com cuidado, nós dissemos que um _roteador_ é um computador como qualquer outro, então o que nos impede de conectar dois _roteadores_ juntos? Nada, então façamos isto.

![Dois roteadores conectados](internet-schema-4.png)

Conectando computadores a roteadores, e então roteadores a roteadores nós podemos escalar nossa rede infinitamente.

![Roteadores conectados a roteadores](internet-schema-5.png)

Esta rede é muito parecida com o que chamamos de Internet, mas alguma coisa está faltando. Nós construímos tais redes para nossos próprios fins. Existem outras redes além das nossas ligadas em outros lugares: nossos amigos, vizinhos, qualquer pessoa pode ter uma rede de computadores. Mas é inviável ligarmos cabos entre nossas casas e o resto do mundo, então como nos podemos lidar com isso? Muito bem, já existem cabos ligados a sua casa, como por exemplo, cabos de eletricidade e telefone. A estrutura do telefone já conecta nossa casa com o resto do mundo, então é exatamente o que nós precisamos. Para conectar nossa rede a rede telefônica, precisamos de um equipamento especial chamado _modem_. Este _modem_ transforma a informação da nossa rede em uma informação gerenciável pela rede telefônica e vice-versa.

![Um roteador conectado a um modem](internet-schema-6.png)

Então nós estamos conectados à infraestrutura telefônica. O próximo passo é enviar mensagens da nossa rede para a rede que nós desejamos alcançar. Para fazer isto, vamos precisar conectar nossa rede a um Provedor de Serviço de Internet (ISP, em inglês). Um ISP é uma companhia que gerencia alguns roteadores especiais que são conectados e podem também acessar roteadores de outros ISPs. Então a mensagem da nossa rede é transportada para a rede de redes do ISP e então para a rede de destino. A Internet é composta por toda esta infraestrutura de redes.

![Pilha completa da Internet](internet-schema-7.png)

### Encontrando computadores

Se você quer enviar uma mensagem para um computador, você precisa especificar qual é este computador. Por isso, qualquer computador conectado à uma rede possui um único endereço de identificação, chamado de "Endereço IP" (onde IP, do inglês _Internet Protocol_, significa Protocolo de Internet). Este é um endereço composto por uma série de 4 números separados por pontos, por exemplo: `192.168.2.10`.

Isto é perfeito para computadores, mas nós seres humanos temos dificuldades para lembrar estes endereços. Para tornar as coisas mais fáceis, nós podemos dar apelidos aos endereços IP que nós humanos podemos compreender, chamados _nome de domínio_. Por exemplo, `google.com` é um nome de domínio usado para "apelidar" o endereço `142.250.190.78` (no momento em que este artigo foi escrito. Endereços de IP podem mudar). Então, usando o nome de domínio é uma forma mais simples de encontrar um computador na Internet.

![Mostrando como um nome de domínio pode criar um apelido para um endereço IP](dns-ip.png)

### A Internet e a Web

Como você deve ter notado, quando navegamos na Web com nossos navegadores, normalmente utilizamos os nomes de domínios para chegar a um website. Isto significa que a Internet e a Web são a mesma coisa? Não é tão simples assim. Como vimos, a Internet é uma infraestrutura técnica que permite conectar bilhões de computadores. Entre estes computadores, alguns computadores (chamados de _servidores Web_) podem enviar mensagens inteligíveis para navegadores Web. A _Internet_ é a infraestrutura, enquanto a _Web_ é um serviço construído sob esta infraestrutura. Vale a pena notar que existem diversos outros serviços que funcionam na Internet, tais como email e {{Glossary("IRC")}}.

### Intranets e Extranets

_Intranets_ são redes _privadas_ restritas aos membros de uma organização particular.
Elas são geralmente usadas para prover um portal para que tais membros tenham acesso a recursos compartilhados, possam colaborar e comunicarem-se entre si de forma segura.

Por exemplo, a intranet de uma organização pode hospedar páginas da web para compartilhar informações de departamentos ou equipes, unidades compartilhadas para gerenciamento de documentos e arquivos importantes, portais para executar tarefas de administração de negócios e ferramentas de colaboração como wikis, quadros de discussão e sistemas de mensagens.

_Extranets_ são bastante semelhantes às _Intranets_, exceto pelo fato de que abrem toda ou parte de uma rede privada para permitir o compartilhamento e a colaboração com outras organizações.

Elas são normalmente usadas para compartilhar informações de forma segura com clientes e partes interessadas que trabalham em estreita colaboração com uma empresa. Frequentemente, suas funções são semelhantes às fornecidas por uma intranet: informações e compartilhamento de arquivos, ferramentas de colaboração, fóruns de discussão, etc.

Tanto as intranets quanto as extranets são executadas no mesmo tipo de infraestrutura que a _Internet_ e usam os mesmos protocolos. Eles podem, portanto, ser acessados por membros autorizados de diferentes locais físicos.

![Representação Gráfica de como uma Extranet e uma Intranet funcionam](internet-schema-8.png)

## Próximos passos

- [Como a Web funciona](/pt-BR/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Entendendo a diferença entre uma página web, um website, um servidor web e um mecânismo de pesquisa](/pt-BR/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines)
- [Entendendo nomes de domínio](/pt-BR/docs/Learn/Common_questions/What_is_a_domain_name)
