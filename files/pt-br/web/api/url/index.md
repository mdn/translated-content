---
title: URL
slug: Web/API/URL
---

{{APIRef("URL API")}}

A interface **`URL`** é usada para analisar, construir, normalizar e codificar {{glossary("URL", "URLs")}}. Ela trabalha com a disponibilização de propriedades para facilitar a leitura e modificar componentes da URL.

Normalmente você cria um novo objeto `URL` especificando a URL como string quando seu construtor é chamado, ou provendo uma URL relativa e URL base. Você pode facilmente ler e analisar os compoentes de uma URL ou fazer alterações na URL.

Se o seu navegador não tem suporte ao construtor {{domxref("URL.URL", "URL()")}}, você pode acessar o objeto URL utilizando a interface {{domxref("Window")}} propriedade {{domxref("URL")}}. Certifique-se de verificar se algum de seus navegadores precisa deste prefixo.

{{AvailableInWorkers}}

## Construtor

- {{domxref("URL.URL", "URL()")}}
  - : Cria e retorna o objeto `URL` referenciando a URL especificada utilizando uma sring URL
    absolute, ou uma string URL relativa e uma string URL base.

## Propriedades

- {{domxref("URL.hash", "hash")}}
  - : Uma {{domxref("USVString")}} contendo o `'#'` seguido pelo fragmento identificador da URL.
- {{domxref("URL.host", "host")}}
  - : Uma {{domxref("USVString")}} contendo o domínio (that is the _hostname_) seguido por (se a porta foi especificada) um `':'` e a _port_ da URL.
- {{domxref("URL.hostname", "hostname")}}
  - : Uma {{domxref("USVString")}} contendo o domínio da URL.
- {{domxref("URL.href", "href")}}
  - : Uma função {{Glossary("stringifier")}} que retorna uma {{domxref("USVString")}} com toda a URL.
- {{domxref("URL.origin", "origin")}} {{readonlyInline}}
  - : Retorna uma {{domxref("USVString")}} contendo a origem da URL, este é seu esquema, domínio e sua porta.
- {{domxref("URL.password", "password")}}
  - : Uma {{domxref("USVString")}} com a senha especificada antes do nome do domínio.
- {{domxref("URL.pathname", "pathname")}}
  - : Uma {{domxref("USVString")}} contendo a inicial `'/'` seguido pelo caminho da URL, não inclui a query string ou fragmento.
- {{domxref("URL.port", "port")}}
  - : Uma {{domxref("USVString")}} contendo o número da porta da URL.
- {{domxref("URL.protocol", "protocol")}}
  - : Uma {{domxref("USVString")}} contendo o esquema de protocolo da URL, incluindo o final `':'`.
- {{domxref("URL.search", "search")}}
  - : Uma {{domxref("USVString")}} indicando a string de parâmetros de URL's; Se algum parâmetro é disponibilizado, esta string inclui todos eles começando pelo caracter `?`.
- {{domxref("URL.searchParams", "searchParams")}} {{readonlyInline}}
  - : Um objeto {{domxref("URLSearchParams")}} que pode ser utilizado para acessar individualmente os parâmetros encontrados em `search`.
- {{domxref("URL.username","username")}}
  - : Uma {{domxref("USVString")}} contendo o nome de usuário especificado antes do nome do domínio.

## Métodos

- {{domxref("URL.toString", "toString()")}}
  - : Retorna uma {{domxref("USVString")}} com toda a URL. Isto é um sinônimo para {{domxref("URL.href")}}, embora não pode ser usado para modificar o valor.
- {{domxref("URL.toJSON", "toJSON()")}}
  - : Retorna uma {{domxref("USVString")}} com toda a URL. Ela retorna a mesma string da propriedade `href`.

## Métodos estáticos

- {{domxref("URL.createObjectURL", "createObjectURL()")}}
  - : Retorna um {{domxref("DOMString")}} contendo uma única blob URL, isto é a URL com `blob:` com seu esquema, seguido de uma string com identificador único do objeto no navegador.
- {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}
  - : Anula uma URL criada anteriormente utilizando o {{domxref("URL.createObjectURL()")}}.

## Notas de uso

O construtor recebe o parâmetro `url`, e o parâmetro opcional `base` para usar como base do parâmetro `url` é uma URL relativa:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

Propriedades da URL podem ser definidas para construir a URL:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"
```

As Urls são codificadas de acordo com as regras encontradas em {{RFC(3986)}}. Para instância:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

A interface {{domxref("URLSearchParams")}} é usada pra criar e manipular a query string da URL.

Para obter os parâmetros da URL atual, você pode utilizar isso:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

O método {{domxref("URL.toString", "toString()")}} de `URL` apenas retorna o valor da propriedade {{domxref("URL.href", "href")}}, para que o construtor possa ser usado pra normalizar e codificar diretamente a URL.

```js
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- [Polyfill de `URL` em `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/pt-BR/docs/Web/API/URL_API)
- [O que é uma URL](/pt-BR/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- A propriedade contem uma `URL` objeto: {{domxref("URL")}}.
- {{domxref("URLSearchParams")}}.
