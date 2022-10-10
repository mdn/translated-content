---
title: Cacheamento HTTP
slug: Web/HTTP/Caching
tags:
  - Cache
  - Cacheamento
  - Guía
  - HTTP
  - Internet
  - Rede
  - Web
translation_of: Web/HTTP/Caching
original_slug: Web/HTTP/HTTP
---
{{HTTPSidebar}}

A performance de websites e aplicações podem ser melhoradas significativamente ao reusar recursos previamente buscados. Caches em web reduzem latência e o tráfego de rede e assim diminuir o tempo necesário para exibir uma representação do recurso. Ao usar _caching_ em HTTP, websites se tornam mais responsivos.

## Diferentes tipos de _caches_

_Caching_ é uma técnica que guarda uma cópia de dado recurso e mostra de volta quando requisitado. Quando um web cache tem um recurso requerido em seu armazenamento, ele intercepta a solicitação e retorna sua cópia ao invés de fazer o download novamente do servidor original. Isto alcança vários objetivos: facilita o balanceamento do servidor que não precisa servir todos os _clients_ sozinho, e melhora a performance por estar próximo do _client_, por exemplo, ele leva menos tempo para transmitir o recurso de volta. Para um website, é um componente principal para alcançar alta performance. De outro lado, ele deve ser configurado devidamente pois não são todos os recursos que ficam idênticos para sempre: é importante colocar um recurso em cache somente até que ele mude, não mais que isso.

Há muitos tipos de caches: estes podem ser agrupados em duas categorias principais, caches privados ou compartilhados. Um _cache compartilhado_ é um cache que armazena respostas para serem reusadas por mais de um usuário. Um _cache privado_ é dedicado a um único usuário. Esta página irá falar principalmente sobre caches em navegadores e em _proxy_, mas há também caches de _gateway_, CDN, cache de proxy reverso e balanceadores de carga (_load balancers)_ que são implantados em servers da web para melhor confiabilidade, desempenho e dimensionamento de sites e aplicativos da web.

![What a cache provide, advantages/disadvantages of shared/private caches.](/en-US/docs/Web/HTTP/Caching/http_cache_type.png)

### Caches privados de browser

Um cache privado é dedicado para um único usuário. Você já pode ter visto _"caching"_ nas configurações de seu navegador. Um cache de browser guarda todos os documentos que foram baixados via [HTTP](/pt-BR/docs/Web/HTTP) pelo usuário. Este cache é usado para tornar disponíveis documentos visitados para navegação "para frente e para trás" (ou _back/forward_, em Inglês*)*, salvar, ver como fonte, etc. sem exigir uma viagem para o servidor. Também melhora a navegação offline de conteúdo em cache.

### Caches de proxy compartilhada

Uma cache compartilhada é uma cache que armazena respostas para serem reusadas por mais de um usuário. Por exemplo, um fornecedor de acesso à internet ou sua empresa pode ter definido uma web proxy como parte de sua infraestrutura de rede local para servir muitos usuários para que recursos populares sejam reusados numerosas vezes, reduzindo o tráfego de rede e latência.

## Alvos de operações de cache

Fazer cache de HTTP é opcional, mas reusar um recurso em cache é usualmente desejável. No entanto, caches HTTP comuns são tipicamente limitados a respostas em cache para {{HTTPMethod("GET")}} e podem declinar outros métodos. As chaves primárias de cache consistem de um método de requisição e um alvo URI (como requisições são alvos de cache, muitas vezes somente o URI é usado). Formas comuns de entrada de cache são:

- Resultados bem sucedidos de uma requisição: uma resposta {{HTTPStatus(200)}} (OK) para uma requisição {{HTTPMethod("GET")}} contendo recursos como documentos HTML, imagens ou arquivos.
- Redirecionamentos permanentes: uma resposta {{HTTPStatus(301)}} (Moved Permanently).
- Respostas de erro: um resultado {{HTTPStatus(404)}} (Not Found).
- Resultados incompletos: uma resposta {{HTTPStatus(206)}} (Partial Content).
- Outras respostas que não sejam {{HTTPMethod("GET")}} se algo mais adequado para uso como chave de cache é definido.

Uma entrada de cache pode também consistir de múltiplas respostas armazenadas diferenciadas por uma chave secundária, se a requisição é alvo de negociação de conteúdo. Para mais detalhes veja a informação sobre o cabeçalho {{HTTPHeader("Vary")}} abaixo.

## Controlando cache

### O cabeçalho `Cache-control`

O cabeçalho-geral {{HTTPHeader("Cache-Control")}} HTTP/1.1 é usado para especificar diretivas para mecanismos de cache em ambas requisições e respostas. Use este cabeçalho para definir suas políticas de cache com a variedade de diretivas que fornece.

#### Não usar armazenamento de cache

O cache não deve armazenar nada sobre a requisição do cliente ou a resposta do servidor. Uma requisição é enviada ao servidor e uma resposta completa é baixada por cada e toda vez.

```
Cache-Control: no-store
Cache-Control: no-cache, no-store, must-revalidate
```

#### Sem fazer cache

Um cache irá enviar a requisição ao servidor de origem para validação antes de liberar uma cópia em cache.

```
Cache-Control: no-cache
```

#### Caches privados e públicos

A diretiva "public" indica que a resposta pode ser colocada em cache por qualquer cache. Isto pode ser útil, se páginas com autenticação HTTP ou códigos de status de resposta que não são normalmente colocadas em cache, devem agora ser colocadas. Por outro lado, "private" indica que a resposta é para um único usuário somente e não deve ser armazenada por um cache compartilhado. Um cache privado de navegador pode armazenar a resposta neste caso.

```
Cache-Control: private
Cache-Control: public
```

#### Data de validade

A diretiva mais importante aqui é "`max-age=<seconds>`" que é a quantidade máxima de tempo que um recurso será considerado "fresco". Contrário ao {{HTTPHeader("Expires")}}, esta diretiva é relativa ao tempo da requisição. Para os arquivos na aplicação que não irão mudar, você pode normalmente adicionar cache agressivamente. Isto inclui arquivos estáticos como imagens, arquivos CSS e Javascript, por exemplo.

Para mais detalhes, veja também a seção Tempo de Vida abaixo.

```
Cache-Control: max-age=31536000
```

#### Validação

Quando usamos a diretiva "`must-revalidate`", o cache deve verificar o status dos recursos obsoletos antes de os usar e os expirados não deverão ser usados. Para mais detalhes, veja a seção [Validation](#Cache_validation) abaixo.

```
Cache-Control: must-revalidate
```

### O header `Pragma`

{{HTTPHeader("Pragma")}} é um header HTTP/1.0, não é especificado para respostas HTTP e não é, assim, uma reposição confiável para o cabeçalho geral HTTP/1.1 `Cache-Control`, apesar de se comportar da mesma forma que `Cache-Control: no-cache`, se o campo do cabeçalho `Cache-Control` é omitido em uma requisição.Use `Pragma` somente para compatibilidade com clients HTTP/1.0 mais antigos

## Tempo de Vida

Quando um recurso é armazenado em um cache, ele poderia teoricamente ser servido para sempre. Caches possuem armazenamento finito então itens são periodicamente removidos do armazenamento. Esse processo é chamado de _despejo de cache_. Por outro lado, alguns recursos podem mudar no servidor fazendo com que o cache fique desatualizado. Como o HTTP é um protocolo cliente-servidor, os servidores não podem contatar caches e clientes quando um recurso é alterado; eles precisam comunicar um tempo de expiração para o recurso. Antes deste período de expiração, o recurso é novo; após o tempo de expiração, o recurso é obsoleto. Os algoritmos de despejo geralmente privilegiam recursos novos em vez de recursos obsoletos. Observe que um recurso obsoleto não é despejado ou ignorado; quando o cache recebe uma solicitação para um recurso obsoleto, ele encaminha essa solicitação com um {{HTTPHeader ("If-None-Match")}} para verificar se, de fato, ainda está _fresco_. Em caso afirmativo, o servidor retorna um cabeçalho {{HTTPStatus ("304")}} (Não modificado) sem enviar o corpo do recurso solicitado, economizando alguma largura de banda.

Here is an example of this process with a shared cache proxy:

![Show how a proxy cache acts when a doc is not cache, in the cache and fresh, in the cache and stale.](https://mdn.mozillademos.org/files/13771/HTTPStaleness.png)

O tempo de Vida é calculado beaseado em vários headers. Se o "`Cache-control: max-age=N`" header é especificado, então o tempo de vida é igual a N. Se este header não está presente, o que ocorre com frequência, ele checa se um {{HTTPHeader("Expires")}} header está presente. Se um `Expires` header existe, então é o valor menos o valor do {{HTTPHeader("Date")}} header determina o tempo de vida. Finalmente, se nenhum header está presente, procure pelo {{HTTPHeader("Last-Modified")}} header. Se este header está presente, então o tempo de vidaé igual ao valor do `Date` header menos o valor do `Last-modified` header dividido por 10.
O valor de expiração é computado por:

```
expirationTime = responseTime + freshnessLifetime - currentAge
```

No qual `responseTime`é o tempo em que a resposta é recebida de acordo com o navegador.

### Revved resources

The more we use cached resources, the better the responsiveness and the performance of a Web site will be. To optimize this, good practices recommend to set expiration times as far in the future as possible. This is possible on resources that are regularly updated, or often, but is problematic for resources that are rarely and infrequently updated. They are the resources that would benefit the most from caching resources, yet this makes them very difficult to update. This is typical of the technical resources included and linked from each Web pages: JavaScript and CSS files change infrequently, but when they change you want them to be updated quickly.

Web developers invented a technique that Steve Souders called _revving_[\[1\]](https://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/). Infrequently updated files are named in specific way: in their URL, usually in the filename, a revision (or version) number is added. That way each new revision of this resource is considered as a resource on its own that _never_ changes and that can have an expiration time very far in the future, usually one year or even more. In order to have the new versions, all the links to them must be changed, that is the drawback of this method: additional complexity that is usually taken care of by the tool chain used by Web developers. When the infrequently variable resources change they induce an additional change to often variable resources. When these are read, the new versions of the others are also read.

This technique has an additional benefit: updating two cached resources at the same time will not lead to the situation where the out-dated version of one resource is used in combination with the new version of the other one. This is very important when web sites have CSS stylesheets or JS scripts that have mutual dependencies, i.e., they depend on each other because they refer to the same HTML elements.

![](https://mdn.mozillademos.org/files/13779/HTTPRevved.png)

The revision version added to revved resources doesn't need to be a classical revision string like 1.1.3, or even a monotonously growing suite of number. It can be anything that prevent collisions, like a hash or a date.

## Cache validation

Revalidation is triggered when the user presses the reload button. It is also triggered under normal browsing if the cached response includes the "`Cache-control: must-revalidate`" header. Another factor is the cache validation preferences in the `Advanced->Cache` preferences panel. There is an option to force a validation each time a document is loaded.

When a cached document's expiration time has been reached, it is either validated or fetched again. Validation can only occur if the server provided either a _strong validator_ or a _weak validator_.

### ETags

The {{HTTPHeader("ETag")}} response header is an _opaque-to-the-useragent_ value that can be used as a strong validator. That means that a HTTP user-agent, such as the browser, does not know what this string represents and can't predict what its value would be. If the `ETag` header was part of the response for a resource, the client can issue an {{HTTPHeader("If-None-Match")}} in the header of future requests – in order to validate the cached resource.

The {{HTTPHeader("Last-Modified")}} response header can be used as a weak validator. It is considered weak because it only has 1-second resolution. If the `Last-Modified` header is present in a response, then the client can issue an {{HTTPHeader("If-Modified-Since")}} request header to validate the cached document.

When a validation request is made, the server can either ignore the validation request and response with a normal {{HTTPStatus(200)}} `OK`, or it can return {{HTTPStatus(304)}} `Not Modified` (with an empty body) to instruct the browser to use its cached copy. The latter response can also include headers that update the expiration time of the cached document.

## Varying responses

The {{HTTPHeader("Vary")}} HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.

When a cache receives a request that can be satisfied by a cached response that has a `Vary` header field, it must not use that cached response unless all header fields as nominated by the `Vary` header match in both the original (cached) request and the new request.

![The Vary header leads cache to use more HTTP headers as key for the cache.](https://mdn.mozillademos.org/files/13769/HTTPVary.png)

This can be useful for serving content dynamically, for example. When using the `Vary: User-Agent` header, caching servers should consider the user agent when deciding whether to serve the page from cache. If you are serving different content to mobile users, it can help you to avoid that a cache may mistakenly serve a desktop version of your site to your mobile users. In addition, it can help Google and other search engines to discover the mobile version of a page, and might also tell them that no [Cloaking](https://en.wikipedia.org/wiki/Cloaking) is intended.

```
Vary: User-Agent
```

Because the {{HTTPHeader("User-Agent")}} header value is different ("varies") for mobile and desktop clients, caches will not be used to serve mobile content mistakenly to desktop users or vice versa.

## See also

- [RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): Caching](https://tools.ietf.org/html/rfc7234)
- [Caching Tutorial – Mark Nottingham](https://www.mnot.net/cache_docs)
- [HTTP caching – Ilya Grigorik](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
- [RedBot](https://redbot.org/), a tool to check your cache-related HTTP headers.
