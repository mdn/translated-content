---
title: HTTP
slug: Web/HTTP
---

{{ HTTPSidebar }}

**_Hypertext Transfer Protocol (HTTP)_** é um protocolo de [camada de aplicação](https://pt.wikipedia.org/wiki/Camada_de_aplica%C3%A7%C3%A3o) para transmissão de documentos hipermídia, como o HTML. Foi desenvolvido para comunicação entre navegadores web e servidores web, porém pode ser utilizado para outros propósitos também. Segue um [modelo cliente-servidor](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) clássico, onde um cliente abre uma conexão, executa uma requisição e espera até receber uma resposta. É também um protocolo [sem estado](https://pt.wikipedia.org/wiki/Protocolo_sem_estado) ou [stateless protocol](https://en.wikipedia.org/wiki/Stateless_protocol), que significa que o servidor não mantem nenhum dado entre duas requisições (_state_). Apesar de ser frequentemente baseado em uma camada TCP/IP, pode ser utilizado em qualquer [camada de transporte](https://pt.wikipedia.org/wiki/Camada_de_transporte) confiável, ou seja, um protocolo que não perde mensagens silenciosamente como o UDP.

## Tutoriais

Aprenda como usar HTTP com guias e tutoriais.

- [Visão geral do HTTP](/pt-BR/docs/Web/HTTP/Overview)
  - : Apresenta os recursos básicos do protocolo cliente-servidor: o que pode fazer e quais seus usos.
- [Cache HTTP](/pt-BR/docs/Web/HTTP/Caching)
  - : O Cache é muito importante para websites rápidos. Este artigo descreve diferentes métodos de cache e como utilizar os cabeçalhos HTTP para controlá-los.
- [Cookies HTTP](/pt-BR/docs/Web/HTTP/Cookies)
  - : O funcionamento dos cookies é definido pela [RFC 6265](https://tools.ietf.org/html/rfc6265). Ao receber uma requisição HTTP, o servidor pode enviar um cabeçalho `Set-Cookie` com a resposta. Depois, o cliente retorna o valor do cookie a cada requisição ao mesmo servidor na forma de um cabeçalho `Cookie` HTTP. O cookie também pode ser configurado para expirar em um determinado tempo ou permanecer restrito a um domínio ou endereço específicos.
- [Controle de Acesso HTTP (CORS)](/pt-BR/docs/Web/HTTP/CORS)
  - : **As requisições CORS** são requisições HTTP de recursos de domínios diferentes do domínio que está fazendo a requisição. um exemplo é um site A (SiteA.com) realizando uma requisição de uma imagem por meio de um elemento _img_ para um site B (SiteB.com/img.png). Hoje em dia encontramos o CORS em grande maioria das páginas webs, carregando scripts, imagens, folhas de estilos, etc.
- [Dicas de cliente HTTP](/pt-BR/docs/Web/HTTP/Client_hints)
  - : **Dicas do cliente** são um conjunto de cabeçalhos de resposta que um servidor pode usar para solicitar proativamente informações de um cliente sobre o dispositivo, a rede, o usuário e as preferências específicas do agente do usuário.
    O servidor pode então determinar quais recursos enviar, com base nas informações que o cliente escolher fornecer.
- [Evolução do HTTP](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Uma breve descrição das mudanças que ocorreram no HTTP em versões mais antigas para o moderno HTTP/2 em diante.
- [Diretrizes de segurança da Web da Mozilla](https://infosec.mozilla.org/guidelines/web_security)
  - : uma coleção de dicas para ajudar as equipes operacionais na criação de aplicativos Web seguros.
- [Mensagens HTTP](/pt-BR/docs/Web/HTTP/Messages)
  - : Descreve os tipos e a estrutura das diferentes mensagens do HTTP/1.x e HTTP/2.
- [Uma sessão típica em HTTP](/pt-BR/docs/Web/HTTP/Session)
  - : Mostra e explica o fluxo de uma sessão HTTP normal.
- [Gerenciamento de conexões em HTTP/1.x](/pt-BR/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Descreve os três modelos de conexão disponíveis no HTTP/1.x, seus pontos fortes e fracos.
- [Controlando a pré-busca de DNS](/pt-BR/docs/Web/HTTP/Controlling_DNS_prefetching)
  - : O Firefox e outros navegadores atuais utilizam a **pré-busca de** **DNS**, ou seja, o navegador faz a busca do nome do domínio nos links contidos numa página antes que o recurso seja requisitado, como por exemplo imagens, scripts e folhas de estilo. Isto tudo ocorre em segundo plano, para que quando o recurso necessite ser carregado, o endereço DNS já esteja resolvido. Isto diminui a latência quando, por exemplo, um usuário clica em um link.

## Referências

Navegue por uma detalhada documentação de referências em HTTP.

- [Cabeçalhos HTTP](/pt-BR/docs/Web/HTTP/Headers)
  - : As mensagens de cabeçalho HTTP são utilizadas para realizar a descrição de algum recurso ou comportamento do cliente ou servidor. Propriedades personalizadas nos cabeçalhos utilizam o prefixo 'X-' ; Outras no [registro IANA](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers), cujo conteúdo original foi definido na [RFC 4229](https://tools.ietf.org/html/rfc4229). IANA também mantém o [registro de novas propostas para mensagens de cabeçalhos HTTP](https://www.iana.org/assignments/message-headers/prov-headers.html).
- [Métodos de requisição HTTP](/pt-BR/docs/Web/HTTP/Methods)
  - : As mais diferentes requisições podem ser utilizadas pelos métodos de requisições HTTP: {{HTTPMethod("GET")}} e {{HTTPMethod("POST")}}, mas também algumas requisições menos comuns pelos métodos {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}} ou {{HTTPMethod("TRACE")}}.
- [Respostas de códigos de status em HTTP](/pt-BR/docs/Web/HTTP/Response_codes)
  - : Os códigos de status do HTTP indicam quando uma requisição foi completada. Códigos de status são agrupados em cinco classes: Informações, respostas, respostas de sucesso, redirecionamentos, erros de cliente e erros de servidor.
- [Diretivas CSP](/pt-BR/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Os campos de cabeçalho de resposta {{HTTPHeader("Content-Security-Policy")}} permitem que os administradores do site controlem os recursos que o agente do usuário pode carregar para uma determinada página. Com algumas exceções, as políticas envolvem principalmente a especificação de origens de servidor e endpoints de script.

## Ferramentas & recursos

Ferramentas que irão lhe ajudar a testar e debugar as suas requisições HTTP.

- [Ferramentas de desenvolvedores Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Network monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [Observatório Mozilla](https://observatory.mozilla.org/)
  - : Um projeto desenvolvido para ajudar desenvolvedores, administradores de sistema e profissionais de segurança a configurar seus sites com segurança.
- [RedBot](https://redbot.org/)
  - : Uma ferramenta para visualizar seus Headers relacionados em cache.
- [Como os navegadores funcionam (2011)](https://web.dev/howbrowserswork/)
  - : Um artigo bem abrangente sobre a parte interna dos navegadores e os fluxos de requisições via protocolo HTTP. Um artigo que todos os desenvolvedores web, com certeza, deveriam ler.
