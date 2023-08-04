---
title: Básico sobre HTTP
slug: Web/HTTP/Basics_of_HTTP
---

{{HTTPSidebar}}

HTTP é um protocolo bem extensivo. Isso depende um pouco do conceito básico com noção de recursos e URIs, uma simples estrutura de mensagens, e uma estrutura de cliente-servidor para a comunicação ocorrer. Em cima destes conceitos básicos, várias versões surgiram ao longo do tempo, adicionando novas funcionalidades e novas semanticas para criar novos métodos HTTP ou cabeçalhos.

## Artigos

- [Visão geral sobre HTTP](/pt-BR/docs/Web/HTTP/Overview)
  - : Descreve o que é HTTP e quais as regras para arquitetura Web, sua posição na lista de protocolos.
- [Evolução do HTTP](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP foi criada no inicio dos anos 1990 e vem evoluindo ao longo do tempo. Esse artigo passa por sua história e descreve HTTP/0.9, HTTP/1.0, HTTP/1.1, e o moderno HTTP/2 bem como pequenas novidades adicionadas ao longo de seus anos.
- **Negociação entre versões HTTP**
  - : Explicações de como um cliente e um servidor conseguem negociar em uma versão expecífica do HTTP e enventuais atualizaçõs nos protocolos usados;
- [Recursos e URIs](/pt-BR/docs/Web/HTTP/Resources_and_URIs)
  - : Uma breve introdução sobre noção de recursos, identicadores e localizações na Web.
- [Identificando recursos na Web](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : Descreve como os recursos Web são referênciados e como encontrar eles.
- [Data URIs](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : Um tipo especifico de URIs que incorpora diretamente os recursos apresentados, Data URIs são muito convenientes, mas tem algumas ressalvas
- **Separando identidades e localização de recursos: O cabeçalho Alt-Svc HTTP**
  - : Na maioria das vezes, a indentidade ea localização de um recurso da Web são compartilhados, isso pode ser mudado com no cabeçalho {{HTTPHeader("Alt-Svc")}}.
- [MIME types](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : Desde HTTP/1.0, diferentes tipos de conteúdos poderam ser transmitidos. Esse artigo explica como funciona usando o {cabeçalho {HTTPHeader("Content-Type")}} e o MIME standard.
- [Escolhendo entre URLs www e sem-www](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : Ajuda de como usar o prefixo www no domínio ou não, esse artigo fala as consequencias da escolhe e também como fazer isso.
- Fluxo de sessões HTTP
  - : Esse artigo fundamente descreve uma típica sessão HTTP: o que acontece por trás do do navegador quando você clica em um link.
- [Mensagens HTTP](/pt-BR/docs/Web/HTTP/Messages)
  - : Mensagens HTTP transmitidas durante o pedido ou resposta tem uma clara estrutura; isso introduz descrição sobre essas estrutura no artigo, seus proprósitos e suas possibilidades.
- Quadro e estrutura de mensagens no HTTP/2
  - : HTTP/2 junta e representa mensagens do HTTP/1.x em um quadro binário. Esse artigo explica a estrutura do quadro, sua finalidade ea maneira como ele é codificado.
- [Gerenciamento de conexão no HTTP/1.x](/pt-BR/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 foi a primeira versão do HTTP a suportar conexão constante e canalizar elas. Esse artigo explica sobre estes dois conceitos.
- Gerenciamento de conexão no HTTP/2
  - : HTTP/2 Revisitou completamente como as conexões são criadas e mantidas: esse artigo explica como os quadros HTTP permitem multiplexação e resolver o bloco 'head-of-line' bloqueio das versões anteirores do HTTP.
- [Conteúdo da negociação](/pt-BR/docs/Web/HTTP/Content_negotiation)
  - : HTTP introduz um conjunto de cabeçalhos, começando com `Accept-` como o meio que o navegador anuncia o formato, linguagem, ou a codificação é preferida. Esse artigo explica como esse anuncio acontece, como o servidor é esperado para reagir e como será escolhido a melhor resposta.
