---
title: Introdução ao lado servidor
slug: Learn/Server-side/First_steps/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

Bem-vindo ao curso de programação do lado do servidor para iniciantes do MDN! Neste primeiro artigo, examinamos a programação do lado do servidor de um alto nível, respondendo a perguntas como "o que é?", "Como ela difere da programação do lado do cliente?" E "por que é tão útil?" . Depois de ler este artigo, você entenderá o poder adicional disponível para sites por meio da codificação do lado do servidor.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos :</th>
      <td>
        Conhecimento básico de informática. Uma compreensão básica do que é um
        servidor web
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Objetivo :</p></th>
      <td>
        Ganhar familiaridade com o que é programação do lado do servidor, o que
        ela pode fazer e como ela difere da programação do lado do cliente.
      </td>
    </tr>
  </tbody>
</table>

A maioria dos sites de grande escala usa código do lado do servidor para exibir dinamicamente diferentes dados quando necessário, geralmente retirados de um banco de dados armazenado em um servidor e enviados ao cliente para serem exibidos por meio de algum código (por exemplo, HTML e JavaScript).

Talvez o benefício mais significativo do código do lado do servidor seja que ele permite personalizar o conteúdo do site para usuários individuais. Os sites dinâmicos podem destacar o conteúdo que é mais relevante com base nas preferências e hábitos do usuário. Ele também pode tornar os sites mais fáceis de usar, armazenando preferências e informações pessoais - por exemplo, reutilizando os detalhes armazenados do cartão de crédito para agilizar os pagamentos subsequentes.

Pode até permitir a interação com os usuários do site, enviando notificações e atualizações por e-mail ou por outros canais. Todos esses recursos permitem um envolvimento muito mais profundo com os usuários.

No mundo moderno do desenvolvimento web, aprender sobre desenvolvimento do lado do servidor é extremamente recomendado.

## O que é programação de site do lado do servidor ?

Navegadores comunicam-se com [web servers](/pt-BR/docs/Learn/Common_questions/What_is_a_web_server) utilizando o **H**yper**T**ext **T**ransfer **P**rotocol ({{glossary("HTTP")}}). Quando você clica em um link em uma página da web, envia um formulário ou faz uma pesquisa, uma **HTTP request(solicitação HTTP)** é enviada do seu navegador para o servidor de destino.

A solicitação inclui uma URL que identifica o recurso afetado, um método que define a ação necessária (por exemplo, para obter, excluir ou postar o recurso) e pode incluir informações adicionais codificadas em parâmetros de URL(Os pares field-value(campo-valor) são enviados por meio de uma [query string](https://en.wikipedia.org/wiki/Query_string)), como dados POST (dados enviados pelo método [HTTP POST](/pt-BR/docs/Web/HTTP/Methods/POST)), ou em associado {{glossary("Cookie", "cookies")}} .

Os servidores da web esperam por mensagens de solicitação do cliente, processam-nas quando chegam e respondem ao navegador da web com uma mensagem **HTTP response** . A resposta contém uma linha de status indicando se a solicitação foi bem-sucedida ou não (e.g. "HTTP/1.1 200 OK" for success).

O corpo de uma resposta bem-sucedida a uma solicitação conteria o recurso solicitado (por exemplo, uma nova página HTML ou uma imagem, etc ...), que poderia então ser exibido pelo navegador.

### Sites estáticos

O diagrama abaixo mostra uma arquitetura básica de servidor da web para um site estático (um site estático é aquele que retorna o mesmo conteúdo embutido em código do servidor sempre que um determinado recurso é solicitado). Quando um usuário deseja navegar para uma página, o navegador envia uma solicitação HTTP "GET" especificando seu URL.

O servidor recupera o documento solicitado de seu sistema de arquivos e retorna uma resposta HTTP contendo o documento e um [success status](/pt-BR/docs/Web/HTTP/Status#Successful_responses) (geralmente, 200 OK). Se o arquivo não puder ser recuperado por algum motivo, um status de erro será retornado(Veja [client error responses](/pt-BR/docs/Web/HTTP/Status#Client_error_responses) e [server error responses](/pt-BR/docs/Web/HTTP/Status#Server_error_responses)).

![A simplified diagram of a static web server.](basic_static_app_server.png)

### Sites dinâmicos

Um site dinâmico é aquele em que parte do conteúdo da resposta é gerado dinamicamente, apenas quando necessário. Em um site dinâmico, as páginas HTML são normalmente criadas inserindo dados de um banco de dados em espaços reservados em modelos HTML (essa é uma maneira muito mais eficiente de armazenar grandes quantidades de conteúdo do que usar sites estáticos).

Um site dinâmico pode retornar dados diferentes para um URL com base nas informações fornecidas pelo usuário ou preferências armazenadas e pode realizar outras operações como parte do retorno de uma resposta (e.g. enviando notificações).

A maior parte do código para oferecer suporte a um site dinâmico deve ser executado no servidor. A criação desse código é denominado "**server-side programming**" (ou às vezes "**back-end scripting**").

O diagrama abaixo mostra uma arquitetura simples para um site dinâmico. Como no diagrama anterior, os navegadores enviam solicitações HTTP para o servidor, então o servidor processa as solicitações e retorna as respostas HTTP apropriadas.

As solicitações de recursos estáticos são tratadas da mesma maneira que para sites estáticos (recursos estáticos são quaisquer arquivos que não mudam - normalmente: CSS, JavaScript, imagens, arquivos PDF pré-criados etc.).

![A simplified diagram of a web server that uses server-side programming to get information from a database and construct HTML from templates. This is the same diagram as is in the Client-Server overview.](web_application_with_html_and_steps.png)

As solicitações de recursos dinâmicos são encaminhadas (2) para o código do lado do servidor (mostrado no diagrama como uma web application). Para "solicitações dinâmicas", o servidor interpreta a solicitação, lê as informações necessárias do banco de dados (3), combina os dados recuperados com modelos HTML (4) e envia de volta uma resposta contendo o HTML gerado (5,6).

## A programação do lado do servidor e do lado cliente são iguais ?

Vamos agora voltar nossa atenção para o código envolvido na programação do lado do servidor e do lado do cliente. Em cada caso, o código é significativamente diferente:

- Eles têm objetivos e propósitos diferentes.
- Eles geralmente não usam as mesmas linguagens de programação (exceto JavaScript, que pode ser utilizado tanto no lado do servidor quanto no lado do cliente).
- Eles são executados em diferentes ambientes do sistema operacional.

O código em execução no navegador é conhecido como **client-side code** e se preocupa principalmente em melhorar a aparência e o comportamento de uma página da web renderizada. Isso inclui selecionar e definir o estilo dos componentes da IU, criação de layouts, navegação, validação de formulário etc. Por outro lado, a programação do site do lado do servidor envolve principalmente a escolha de qual conteúdo é retornado ao navegador em resposta às solicitações. O código do lado do servidor lida com tarefas como validação de dados e solicitações enviadas, usando bancos de dados para armazenar e recuperar dados e enviar os dados corretos para o cliente conforme necessário.

O código do lado do cliente é geralmente escrito em [HTML](/pt-BR/docs/Learn/HTML), [CSS](/pt-BR/docs/Learn/CSS), e [JavaScript](/pt-BR/docs/Learn/JavaScript) — ele é executado dentro de um navegador da web e tem pouco ou nenhum acesso ao sistema operacional subjacente (incluindo acesso limitado ao sistema de arquivos)

Os desenvolvedores da Web não podem controlar qual navegador cada usuário pode estar usando para visualizar um site - os navegadores fornecem níveis inconsistentes de compatibilidade com recursos de código do lado do cliente, e parte do desafio da programação do lado do cliente é lidar com as diferenças no suporte do navegador de maneira elegante.

O código do lado do servidor pode ser escrito algumas linguagens de programação - exemplos de linguagens da web do lado do servidor populares incluem PHP, Python, Ruby, C # e NodeJS (JavaScript). O código do lado do servidor tem acesso total ao sistema operacional do servidor e o desenvolvedor pode escolher qual linguagem de programação (e versão específica) deseja usar.

Desenvolvedores geralmente escrevem seus códigos utilizando **web frameworks**. Frameworks Web são coleções de funções, objetos, regras e outras construções de código projetadas para resolver problemas comuns, acelerar o desenvolvimento e simplificar os diferentes tipos de tarefas enfrentadas em um domínio específico.

Novamente, embora o código do lado do cliente e do servidor usem frameworks, os domínios são muito diferentes e, portanto, os frameworks também são. Os frameworks web do lado do cliente simplificam as tarefas de layout e apresentação, enquanto os frameworks web do lado do servidor fornecem muitas funcionalidades de servidor da web "comuns" que você mesmo poderia ter que implementar (por exemplo, suporte para sessões, suporte para usuários e autenticação, fácil acesso ao banco de dados, bibliotecas de modelos, etc.).

> **Nota:** Os frameworks do lado do cliente costumam ser usados para ajudar a acelerar o desenvolvimento do código do lado do cliente, mas você também pode escolher escrever todo o código manualmente; na verdade, escrever seu código manualmente pode ser mais rápido e eficiente se você precisar apenas de uma IU de site da Web pequena e simples.
>
> Em contraste, você quase nunca pensaria em escrever o componente do lado do servidor de um web application sem um framework - implementar um recurso vital como um servidor HTTP é realmente difícil de fazer do zero em, digamos, Python, mas frameworks web em Python como Django fornecem essa ferramenta , junto com outras ferramentas muito úteis.

## O que você pode fazer no lado do servidor ?

A programação do lado do servidor é muito útil porque nos permite fornecer com eficiência informações personalizadas para usuários individuais e, assim, criar uma experiência de usuário muito melhor.

Empresas como a Amazon usam programação do lado do servidor para construir resultados de pesquisa de produtos, fazer sugestões de produtos direcionados com base nas preferências do cliente e hábitos de compra anteriores, simplificar as compras, etc.

Os bancos usam a programação do lado do servidor para armazenar informações de contas e permitir que apenas usuários autorizados visualizem e façam transações. Outros serviços como Facebook, Twitter, Instagram e Wikipedia usam programação do lado do servidor para destacar, compartilhar e controlar o acesso ao conteúdo .

Alguns dos usos e benefícios comuns da programação do lado do servidor estão listados abaixo. Você notará que há alguma sobreposição!

### Armazenamento eficiente e entrega de informações

Imagine quantos produtos estão disponíveis na Amazon e quantas postagens foram escritas no Facebook? Criar uma página estática separada para cada produto ou postagem seria completamente impraticável.

A programação do lado do servidor nos permite, em vez disso, armazenar as informações em um banco de dados e construir e retornar dinamicamente HTML e outros tipos de arquivos (por exemplo, PDFs, imagens, etc.). Também é possível simplesmente retornar dados ({{glossary("JSON")}}, {{glossary("XML")}}, etc.) para renderização por frameworks web do lado do cliente apropriados (isso reduz a carga de processamento em um servidor e a quantidade de dados que precisa ser enviada).

O servidor não se limita a enviar informações de bancos de dados e pode, alternativamente, retornar o resultado de ferramentas de software ou dados de serviços de comunicação. O conteúdo pode até ser direcionado para o tipo de dispositivo que o cliente está recebendo.

Como as informações estão em um banco de dados, elas também podem ser mais facilmente compartilhadas e atualizadas com outros sistemas de negócios (por exemplo, quando os produtos são vendidos online ou em uma loja, a loja pode atualizar seu banco de dados de estoque).

> **Nota:** Sua imaginação não precisa trabalhar muito para ver os benefícios do código do lado do servidor para armazenamento e entrega eficientes de informações:
>
> 1. Vá em [Amazon](https://www.amazon.com) ou em outro site comercial.
> 2. Pesquise várias palavras-chave e observe como a estrutura da página não muda, embora os resultados mudem.
> 3. Abra dois ou três produtos diferentes. Observe novamente como eles têm uma estrutura e layout comuns, mas o conteúdo de diferentes produtos foi retirado do banco de dados.
>
> Para um termo de pesquisa comum ("peixe", digamos), você pode ver literalmente milhões de valores retornados. O uso de um banco de dados permite que sejam armazenados e compartilhados de forma eficiente, além de permitir que a apresentação das informações seja controlada em um só lugar.

### Experiência de usuário personalizada

Os servidores podem armazenar e usar informações sobre clientes para fornecer uma experiência de usuário conveniente e personalizada. Por exemplo, muitos sites armazenam cartões de crédito para que os detalhes não tenham que ser inseridos novamente. Sites como o Google Maps podem usar locais salvos ou atuais para fornecer informações de rota e pesquisar o histórico de viagens para destacar empresas locais nos resultados de pesquisa.

Uma análise mais profunda dos hábitos do usuário pode ser usada para antecipar seus interesses e personalizar ainda mais as respostas e notificações, por exemplo, fornecendo uma lista de locais visitados anteriormente ou que você pode querer ver em um mapa.

> **Nota:**[Google Maps](https://maps.google.com/) salva sua pesquisa e histórico de visitas. Locais visitados ou pesquisados com frequência são destacados mais do que outros.
>
> Os resultados de pesquisa do Google são otimizados com base em pesquisas anteriores.
>
> 1. Vá em [Google search](https://www.google.com).
> 2. Pesquise por "futeboll".
> 3. Agora tente digitar "favorito" na caixa de pesquisa e observe as previsões de pesquisa do preenchimento automático.
>
> Coincidência ? Nada!

### Acesso controlado ao conteúdo

A programação do lado do servidor permite que os sites restrinjam o acesso a usuários autorizados e forneçam apenas as informações que um usuário tem permissão para ver.

Exemplos do mundo real, incluem :

- Redes sociais como o Facebook permitem que os usuários controlem totalmente seus próprios dados, mas apenas permitem que seus amigos os visualizem ou comentem. O usuário determina quem pode ver seus dados e, por extensão, quais dados aparecem em seu feed - a autorização é uma parte central da experiência do usuário!
- O site em que você está agora controla o acesso ao conteúdo: os artigos são visíveis para todos, mas apenas os usuários que efetuaram login podem editá-los. Para tentar fazer isso, clique no botão Editar no topo desta página - se você estiver conectado, será exibida a visualização de edição; se você não estiver logado, será direcionado para a página de inscrição.

> **Nota:** Considere outros exemplos reais em que o acesso ao conteúdo é controlado. Por exemplo, o que você pode ver se acessar o site online do seu banco? Faça login em sua conta - quais informações adicionais você pode ver e modificar? Quais informações você pode ver que somente o banco pode alterar?

### Sessão de armazenamento / informações de estado

A programação do lado do servidor permite que os desenvolvedores façam uso de sessões - basicamente, um mecanismo que permite a um servidor armazenar informações sobre o usuário atual de um site e enviar diferentes respostas com base nessas informações.

Isso permite, por exemplo, que um site saiba que um usuário fez login anteriormente e exiba links para seus e-mails ou histórico de pedidos, ou talvez salve o estado de um jogo simples para que o usuário possa ir a um site novamente e continuar onde eles deixaram.

> **Nota:** :Visite um site de jornal que tem um modelo de assinatura e abra várias guias (por exemplo, The Age). Continue a visitar o site por algumas horas / dias. Eventualmente, você começará a ser redirecionado para páginas que explicam como se inscrever e não conseguirá acessar os artigos. Essas informações são um exemplo de informações de sessão armazenadas em cookies.

### Notificações e comunicação

Os servidores podem enviar notificações gerais ou específicas do usuário por meio do próprio site ou por e-mail, SMS, mensagens instantâneas, conversas por vídeo ou outros serviços de comunicação.

Alguns exemplos, incluem :

- Facebook e Twitter enviam e-mails e mensagens SMS para notificá-lo de novas comunicações.
- A Amazon envia regularmente e-mails de produtos que sugerem produtos semelhantes aos já comprados ou vistos nos quais você possa estar interessado.
- Um servidor da web pode enviar mensagens de aviso aos administradores do site alertando-os sobre a memória insuficiente no servidor ou atividade suspeita do usuário.

> **Nota:** O tipo mais comum de notificação é uma "confirmação de registro". Escolha quase todos os grandes sites de seu interesse (Google, Amazon, Instagram, etc.) e crie uma nova conta usando seu endereço de e-mail. Em breve, você receberá um e-mail confirmando seu registro ou solicitando confirmação para ativar sua conta.

### Análise de dados

Um site pode coletar muitos dados sobre os usuários: o que procuram, o que compram, o que recomendam, quanto tempo permanecem em cada página. A programação do lado do servidor pode ser usada para refinar as respostas com base na análise desses dados.

Por exemplo, Amazon e Google anunciam produtos com base em pesquisas anteriores (e compras).

> **Nota:** :Se você é um usuário do Facebook, vá para o seu feed principal e veja o fluxo de postagens. Observe como algumas das postagens estão fora da ordem numérica - em particular, as postagens com mais "curtidas" geralmente estão no topo da lista do que as postagens mais recentes.
>
> Observe também que tipo de anúncio está sendo mostrado - você pode ver anúncios de coisas que já viu em outros sites. O algoritmo do Facebook para destacar conteúdo e publicidade pode ser um pouco misterioso, mas é claro que depende de seus gostos e hábitos de visualização!

## Resumo

Parabéns, você chegou ao final do primeiro artigo sobre programação do lado do servidor.

Agora você aprendeu que o código do lado do servidor é executado em um servidor da web e que sua função principal é controlar quais informações são enviadas ao usuário (enquanto o código do lado do cliente lida principalmente com a estrutura e apresentação desses dados para o usuário) .

Você também deve entender que é útil porque nos permite criar sites que fornecem informações sob medida para usuários individuais de forma eficiente e têm uma boa ideia de algumas das coisas que você pode fazer quando for um programador do lado do servidor.

Por último, você deve entender que o código do lado do servidor pode ser escrito em várias linguagens de programação e que você deve usar um framewoek web para tornar todo o processo mais fácil.

Em um artigo futuro, ajudaremos você a escolher o melhor framework web para seu primeiro site. Aqui, vamos levá-lo pelas principais interações cliente-servidor com um pouco mais de detalhes.

{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

## Nesse módulo

- [Introduction to the server side](/pt-BR/docs/Learn/Server-side/First_steps/Introduction)
- [Client-Server overview](/pt-BR/docs/Learn/Server-side/First_steps/Client-Server_overview)
- [Server-side web frameworks](/pt-BR/docs/Learn/Server-side/First_steps/Web_frameworks)
- [Website security](/pt-BR/docs/Learn/Server-side/First_steps/Website_security)
