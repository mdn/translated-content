---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
---

{{HTTPSidebar}}

O campo de cabeçalho genérico **`Cache-Control`** é usado para especificar diretivas para mecanismos de _cache_ tanto em requisições quanto em respostas. Diretivas de _cache_ são unidirecionais, o que significa que uma dada diretiva em uma requisição não implica em que a mesma seja dada na resposta.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

As diretivas são insensíveis à caixa (_case-insensitive)_ e tem um argumento opcional, que pode usar tanto a sintaxe de token quanto a de cadeias entre aspas. Multiplas diretivas são separadas por virgula.

### Diretivas de Cache de requisições

Diretivas `Cache-Control` padrão que podem ser usadas pelo cliente em uma requisição HTTP.

```
Cache-Control: max-age=<segundos>
Cache-Control: max-stale[=<segundos>]
Cache-Control: min-fresh=<segundos>
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: only-if-cached
```

### Diretivas de Cache de respostas

Diretivas `Cache-Control` padrão que podem ser usadas pelo servidor em uma resposta HTTP.

```
Cache-Control: must-revalidate
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: public
Cache-Control: private
Cache-Control: proxy-revalidate
Cache-Control: max-age=<segundos>
Cache-Control: s-maxage=<segundos>
```

### Diretivas `Cache-Control` Extendidas

Diretivas `Cache-Control` extendidas não são parte do cerne do documento HTTP caching standards. Verifique a [tabela de compatibilidade](#Browser_compatibility) para certificar-se do seu suporte.

```
Cache-Control: immutable
Cache-Control: stale-while-revalidate=<seconds>
Cache-Control: stale-if-error=<seconds>
```

## Diretivas

### Cacheabilidade

- `public`
  - : Indica que a resposta pode ser memorizada por qualquer cache.
- `private`
  - : Indica que a resposta é para um único usuário e não deve ser armazenada por um cache compartilhado. Um cache privativo pode armazenar a resposta.
- `no-cache`
  - : Força o cache a submeter a requisição ao servidor origem para validação antes de liberar a cópia em memória.
- `only-if-cached`
  - : Indica que novos dados não devem ser obtidos. Se este é o caso, o servidor deseja que o cliente obtenha a resposta somente uma vez e memorize (no cache). A partir desse momento o cliente deveria liberar somente a cópia em cache e evitar contactar o servidor origem para ver se há cópias novas.

### Expiração

- `max-age=<segundos>`
  - : Especifica o tempo máximo em que um recurso será considerado fresco. Ao contrário de `Expires`, esta diretiva é relativa à hora da requisição.
- `s-maxage=<segundos>`
  - : Tem precedência sobre `max-age` ou o cabeçalho `Expires`, mas só se aplica a caches compartilhados (p.ex., proxies) e é ignorada por caches privados.
- `max-stale[=<segundos>]`
  - : Indica que o cliente pode aceitar uma resposta que excedeu seu período de expiração. Opcionalmente, você pode informar um valor em segundos, indicando o tempo em que a resposta não será expirada.
- `min-fresh=<segundos>`
  - : Indica que o cliente quer uma resposta que será fresca por pelo menos o número de segundos especificado.
- `stale-while-revalidate=<segundos>` {{experimental_inline}}
  - : Indica que o cliente aceitará uma resposta de caducidade enquanto verifica uma fresca assincronamente em _background_. O valor em segundos indica por quanto tempo o cliente espera a resposta de caducidade.
- `stale-if-error=<segundos>` {{experimental_inline}}
  - : Indica que o cliente espera aceitar uma resposta de caducidade se falhou a verificação de uma fresca. O valor em segundos indica quanto tempo o cliente aceitará a resposta de caducidade após a expiração inicial.

### Revalidação e recarga

- `must-revalidate`
  - : O cache deve verificar o estado dos recursos caducos antes de usá-los e não usar recursos expirados.
- `proxy-revalidate`
  - : Mesmo que `must-revalidate`, mas só se aplica a caches compartilhados (p.ex., proxies) e é ignorado por um cache privado.
- `immutable`
  - : Indica que o corpo da resposta não mudará ao longo do tempo. O recurso, se ainda hábil, está inalterado no servidor e portanto o cliente não deverá enviar uma revalidação condicional para ele (p.ex. `If-None-Match` ou `If-Modified-Since`) a fim de verificar atualiações, mesmo quando o usuário recarrega explicitamente a página. Clientes que não reconhecem esta extensão devem ignorá-la, segundo a especificação HTTP. No Firefox, `immutable` é honrado somente em transações `https://`. Para mais informações, veja também este [blog post](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html).

### Outros

- `no-store`
  - : O cache não deverá armazenar qualquer coisa sobre a requisição do cliente ou a resposta do servidor.
- `no-transform`
  - : Nenhuma transformação ou conversão deverá ser feita no recurso. Os cabeçalhos Content-Encoding, Content-Range, Content-Type não devem ser modificados por um proxy. Um proxy não transparente deve, por exemplo, converter formatos de imagens a fim de economizar espaço de cache ou reduzir o tráfego no link lento. A diretiva `no-transform` não permite isso.

## Exemplos

### Prevenindo o cache

Para desligar o armazenamento em cache, você pode enviar o cabeçalho de resposta seguinte. Alem disso, veja também os cabeçalhos `Expires` e `Pragma`.

```bash
Cache-Control: no-cache, no-store, must-revalidate
```

### Cache de conteúdo estático

Para os arquivos da aplicação que não mudarão, você pode usar um cache mais agressivo enviando o cabeçalho de resposta abaixo. Isto inclui arquivos estáticos servidos pela aplicação tais como imagens, arquivos CSS e JavaScript, por exemplo. Veja também o cabeçalho `Expires`.

```bash
Cache-Control: public, max-age=31536000
```

## Especificações

| Especificação   | Título                                          |
| --------------- | ----------------------------------------------- |
| {{RFC("7234")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |
| {{RFC("5861")}} | HTTP Cache-Control Extensions for Stale Content |
| {{RFC("8246")}} | HTTP Immutable Responses                        |

## Compatibilidade com navegadores

{{Compat("http.headers.Cache-Control")}}

## Veja também

- [HTTP Caching FAQ](/pt-BR/docs/Web/HTTP/Caching_FAQ)
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}
