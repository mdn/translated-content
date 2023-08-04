---
title: Nome de cabeçalho proibido
slug: Glossary/Forbidden_header_name
---

Um _nome de cabeçalho proibido_ é o nome de qualquer [cabeçalho HTTP](/pt-BR/docs/Web/HTTP/Headers) que não pode ser modificado programaticamente; especificamente, um nome de cabeçalho de **solicitação** HTTP (em contraste com um {{Glossary("Forbidden response header name")}}).

Modificar esses cabeçalhos é proibido porque o agente do usuário retém o controle total sobre eles. Nomes começando com `Sec-` são reservados para criar novos cabeçalhos seguros de {{glossary("API","APIs")}} usando [Fetch](/pt-BR/docs/Web/API/Fetch_API) que concedem aos desenvolvedores controle sobre cabeçalhos, como {{domxref("XMLHttpRequest")}}.

Nomes de cabeçalho proibidos começam com `Proxy-`ou `Sec-`, ou são um dos seguintes nomes:

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Host`
- `Keep-Alive`
- `Origin`
- `Proxy-`
- `Sec-`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

> **Nota:** O cabeçalho `User-Agent` não é mais proibido, de [acordo com a especificação](https://fetch.spec.whatwg.org/#terminology-headers) - consulte a lista de nomes de cabeçalhos proibidos (isso foi implementado no Firefox 43) - agora ele pode ser definido em um objeto e busca de [Headers](/pt-BR/docs/Web/API/Headers), ou via XHR [setRequestHeader()](/pt-BR/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29).
