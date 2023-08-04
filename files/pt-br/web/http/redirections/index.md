---
title: Redirecionamentos em HTTP
slug: Web/HTTP/Redirections
---

{{HTTPSidebar}}

Redirecionamento de URL, também conhecido como encaminhamento de URL, é uma técnica que à uma página, formulário ou uma aplicação web inteira, mais de um endereço de URL. HTTP fornece uma espécie especial de respostas, _**HTTP redirects**_, executar esta operação é utilizada para vários objetivos: redirecionamento temporário enquanto está sendo feita a manutenção do web site, redirecionamento permanente para manter links externos funcionando após alterações na arquitetura do web site, páginas de progresso enquanto é feito o envio de um arquivo, e assim por diante.

## Princípio

Em HTTP, um redirecionamento é acionado pelo servidor enviando respostas especiais para uma solicitação: _redirects_. Os redirecionamentos HTTP são respostas com um código de status de 3xx. Um navegador, ao receber uma resposta de redirecionamento, usa o novo URL fornecido e carrega-o imediatamente: a maior parte do tempo, o redirecionamento é transparente para o usuário, além de um pequeno desempenho.

![](httpredirect.png)

Existem vários tipos de redirecionamentos e eles se enquadram em três categorias: redirecionamentos permanentes, temporários e especiais.

### Redirecionamentos permanentes

Estes redirecionamentos devem durar permanentemente. Eles implicam que o URL original não deve mais ser usado e que o novo é preferido. Os robôs dos mecanismos de pesquisa desencadeiam uma atualização do URL associado para o recurso em seus índices.

| Code  | Text                            | Method handling                                                                                                           | Typical use case                                           |
| ----- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `301` | `Movido permanentemente`        | {{HTTPMethod("GET")}} métodos inalterados. Outros podem ou não serem alterados para {{HTTPMethod("GET")}}.[\[1\]](#attr1) | Reorganização de um web site.                              |
| `308` | `Permanentemente redirecionado` | Método e corpo não alterados                                                                                              | Reorganização de um web site, com não-GET links/operações. |

\[1]A especificação não tinha intenção de permitir mudanças de método, mas praticamente existem agentes de usuários lá fazendo isso. 308 foi criado para remover a ambiguidade do comportamento ao usar métodos não-GET.

### Redirecionamentos temporários

Às vezes, o recurso solicitado não pode ser acessado a partir da sua localização canônica, mas pode ser acessado a partir de outro local. Neste caso, um redirecionamento temporário pode ser usado. Os robôs do mecanismo de busca não memorizam o novo e temporário link. Os redirecionamentos temporários também são usados ao criar, atualizar e excluir recursos para apresentar páginas de progresso temporárias.

| Code  | Text                          | Method handling                                                                                                           | Typical use case                                                                                                                                                                                                        |
| ----- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Encontrado`                  | {{HTTPMethod("GET")}} métodos inalterados. Outros podem ou não serem alterados para {{HTTPMethod("GET")}}.[\[2\]](#attr2) | A página da Web não está temporariamente disponível por motivos imprevisíveis. Dessa forma, os motores de busca não atualizam seus links.                                                                               |
| `303` | `Ver outro`                   | {{HTTPMethod("GET")}} Métodos inalterados. Outros _alterados_ para `GET` (corpo perdido).                                 | Usado para redirecionar após um {{HTTPMethod ("PUT")}} ou um {{HTTPMethod ("POST")}} para evitar uma atualização da página que reativaria a operação.                                                                   |
| `307` | `Redirecionamento temporário` | Método ou corpo não alterados                                                                                             | A página da Web não está temporariamente disponível por motivos imprevisíveis. Dessa forma, os motores de busca não atualizam seus links. Melhor que 302 quando os links / operações não-GET estão disponíveis no site. |

\[2] A especificação não tinha intenção de permitir mudanças de método, mas praticamente existem agentes de usuários lá fazendo isso. 307 foi criado para remover a ambiguidade do comportamento ao usar métodos não-GET.

### Redirecionamentos Especiais

Além desses redirecionamentos usuais, existem dois redirecionamentos específicos. O {{HTTPStatus ("304")}} (Não Modificado) redireciona uma página para a cópia em cache local (que estava obsoleta) e {{HTTPStatus ("300")}} (Múltipla escolha) é um redirecionamento manual: o corpo, apresentado pelo navegador como uma página da Web, lista os possíveis redirecionamentos e o usuário clica em um para selecioná-lo.

| Code  | Text               | Typical use case                                                                                                               |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `300` | `Múltipla Escolha` | Não muitas: as opções estão listadas em uma página HTML no corpo. Poderia ser servido com um estado {{HTTPStatus ("200")}} OK. |
| `304` | `Não Modificado`   | Atualização de cache: isso indica que o valor do cache ainda é recente e pode ser usado.                                       |

## Alternative way of specifying redirections

HTTP redirects aren't the only way to define redirections. There are two other methods: HTML redirections using the {{HTMLElement("meta")}} element, and JavaScript redirections using the [DOM](/pt-BR/docs/Web/API/Document_Object_Model).

### HTML redirections

HTTP redirects are the preferred way to create redirections, but sometimes the Web developer doesn't have control over the server or cannot configure it. For these specific cases, the Web developers can craft an HTML page with a {{HTMLElement("meta")}} element and the [`http-equiv`](/pt-BR/docs/Web/HTML/Element/meta#http-equiv) attribute set to `refresh` in the {{HTMLElement("head")}} of the page. When displaying the page, the browser will find this element and will go to the indicated page.

```html
<head>
  <meta http-equiv="refresh" content="0; URL=http://www.example.com/" />
</head>
```

The [`content`](/pt-BR/docs/Web/HTML/Global_attributes#content) attribute starts with a number indicating how many seconds the browser should wait before redirecting to the given URL. Always set it to `0`, for better accessibility.

Obviously, this method only works with HTML pages (or similar) and cannot be used for images or any other type of content.

> **Nota:** Note that these redirections break the back button in a browser: you can go back to a page with this header but it instantaneously moves forward again.

### JavaScript redirections

Redirections in JavaScript are created by setting a value to the {{domxref("window.location")}} property and the new page is loaded.

```js
window.location = "http://www.example.com/";
```

Like HTML redirections, this can't work on all resources, and obviously, this will only work on clients that execute JavaScript. On the other side, there are more possibilities as you can trigger the redirection only if some conditions are met, for example.

### Order of precedence

With three possibilities for URL redirections, several methods can be specified at the same time, but which one is applied first? The order of precedence is the following:

1. HTTP redirects are always executed first when there is not even a page transmitted, and of course not even read.
2. HTML redirects ({{HTMLElement("meta")}}) are executed if there weren't any HTTP redirects.
3. JavaScript redirects are used as the last resort, and only if JavaScript is enabled on the client side.

When possible, always try to use HTTP redirects, and don't use a {{HTMLElement("meta")}} element. If a developer changes the HTTP redirects and forgets the HTML redirects, redirects are no more identical or end up in an infinite loop, or other nightmares happen.

## Use cases

There are numerous use cases for redirects, but as performance is impacted with every redirect, their use should be kept to a minimum.

### Domain aliasing

Ideally, there is one location, and therefore one URL, for one resource. But there are reasons for wanting to have alternative names for a resource (several domains, like with and without the www prefix or shorter and easy to remember URLs, …). In these cases, rather than duplicating the resource, it is useful to use a redirect to the one true (canonical) URL.

Domain aliasing can be done for several reasons:

- Expanding the reach of your site. A common case is when your site resides under the `www.example.com` domain and accessing your pages from `example.com` should be possible, too. Redirections for `example.com` pages to `www.example.com` are set up in this case. You might also provide commonly used synonym names or frequent typos of your domain names.
- Moving to a different domain. For example, your company has been renamed and you when searching for the old name, you want people used to the old company Web site still find you under the new name.
- Forcing HTTPS. Requests to the HTTP version of your site will be redirected to the HTTPS version of your site.

### Keeping links alive

When you restructure Web sites, URLs of resources change. Even if you can update the internal links of your Web site to match the new naming scheme, you have no control over the URLs used by external resources. You don't want to break these links, as they bring you valuable users (and help your SEO), so you set up redirects from the old URLs to the new ones.

> **Nota:** Even if this technique also works for internal links, you should try to avoid having internal redirects. A redirect has a significant performance cost (as an extra HTTP request is done) and if you can avoid it by correcting internal links, you should fix these links.

### Temporary responses to unsafe requests

{{Glossary("safe", "Unsafe")}} requests modify the state of the server and the user shouldn't replay them inadvertently. Typically, you don't want your users to resend {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} or {{HTTPMethod("DELETE")}} requests. If you just serve the response as the result of this request, a simple press of the reload button will (possibly after a confirmation message), resend the request.

In this case, the server can send back a {{HTTPStatus("303")}} (See Other) response that will contain the right information, but if the reload button is pressed, only this page is redisplayed, without replaying the unsafe requests.

### Temporary responses to long requests

Some requests may need more time on the server like sometimes {{HTTPHeader("DELETE")}} requests that are scheduled for later processing. In this case, the response is a {{HTTPStatus("303")}} (See Other) redirect that links to a page indicating that the action has been scheduled, and eventually informs about the progress, or allows to cancel it.

## Configuring redirects in common servers

### Apache

Redirects can be set either in the server config file or in the `.htaccess` of each directory.

The [mod_alias](https://httpd.apache.org/docs/current/mod/mod_alias.html) module has `Redirect` and `Redirect_Match` directives that set up a {{HTTPStatus("302")}} response (by default):

```
<VirtualHost *:80>
  ServerName example.com
  Redirect / http://www.example.com
</VirtualHost>
```

The URL `http://example.com/` will be redirected to `http://www.example.com/` (but not `http://example.com/other.html` )

`Redirect_Match` does the same but takes a regular expression to define a collection of URLs that are affected:

```
RedirectMatch ^/images/(.*)$ http://images.example.com/$1
```

All documents in the `images/` folder will be redirected to a different domain.

If you don't want to set up a temporary redirect, an extra parameter (either the HTTP status code to use or the `permanent` keyword) can be used to set up a different redirect:

```
Redirect permanent / http://www.example.com
Redirect 301 / http://www.example.com
```

The [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) module can also be used to create redirects. It is more flexible, but a bit more complex to use.

### Nginx

In Nginx, you create a specific server block for the content you want to redirect:

```
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

To apply a redirect to a folder or a subset of the pages only, use the `rewrite` directive:

```
rewrite ^/images/(.*)$ http://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ http://images.example.com/$1 permanent;
```

### IIS

In IIS, you use the [`<httpRedirect>`](https://www.iis.net/configreference/system.webserver/httpredirect) element to configure redirections.

## Redirection loops

Redirection loops happen when successive redirections follow the one that has already been followed. In other words, there is a loop that will never be finished and no page will be found ultimately.

Most of the time this is a server problem, and if the server cannot detect it, it will send back a {{HTTPStatus("500")}} `Internal Server Error`. If you encounter such an error soon after modifying a server configuration, this is likely a redirection loop.

Sometimes, the server won't detect it: a redirection loop can spread over several servers which each don't have the full picture. In this case, browsers will detect it and post an error message. Firefox will display:

```
Firefox has detected that the server is redirecting the request for this address in a way that will never complete.
```

while Chrome will display:

```
This Webpage has a redirect loop
```

In both cases, the user can't do much (unless a corruption is happening on their side, like a mismatch of cache or cookies).

It is important to avoid redirection loops as they completely break the user experience.
