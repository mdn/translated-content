---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Set-Cookie`** é usado para enviar cookies de um servidor para o agente usuário.

Para mais informações, veja o guia em [HTTP cookies](/pt-BR/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Set-Cookie: <nome-cookie>=<valor-cookie>
Set-Cookie: <nome-cookie>=<valor-cookie>; Expires=<date>
Set-Cookie: <nome-cookie>=<valor-cookie>; Max-Age=<non-zero-digit>
Set-Cookie: <nome-cookie>=<valor-cookie>; Domain=<domain-value>
Set-Cookie: <nome-cookie>=<valor-cookie>; Path=<path-value>
Set-Cookie: <nome-cookie>=<valor-cookie>; Secure
Set-Cookie: <nome-cookie>=<valor-cookie>; HttpOnly

Set-Cookie: <nome-cookie>=<valor-cookie>; SameSite=Strict
Set-Cookie: <nome-cookie>=<valor-cookie>; SameSite=Lax

// São possíveis multiplas diretivas, por exemplo:
Set-Cookie: <nome-cookie>=<valor-cookie>; Domain=<domain-value>; Secure; HttpOnly
```

## Diretivas

- `<nome-cookie>=<valor-cookie>`

  - : Um cookie começa com um par nome-valor:

    - Um `<nome-cookie>` pode ser qualquer caractere US-ASCII exeto caracteres de controle (CTLs), espaços, ou tabulações (TAB). Também não deve conter um separador de caractere como os seguintes: ( ) < > @ , ; : \ " / \[ ] ? = { }.
    - Um `<valor-cookie>` pode opcionalmente ser atribuido entre aspas duplas e qualquer caractere US-ASCII são permitidos, exceto caracteres de controle (CTLs), espaços em branco, aspas duplas, vírgula, barra invertida e ponto e vírgula. **Codificação**: Muitas implementações realizam codificação URL nos valores de cookie, contudo não é obrigatório pela especificação do RFC. Isso ajuda a satisfazer os requisitos sobre quais caracteres são permitidos para \<valor-cookie>.
    - **`Prefixo __Secure-`**: Cookies com o nome começando com `__Secure-` (hífen faz parte do prefixo) precisam ser atribuidos com a flag de segurança e precisam ser de uma página segura (HTTPS).
    - **`Prefixo __Host-`**: Cookies com o nome começando com `__Host-` (hífen faz parte do prefixoprecisam ser atribuidos com a flag de segurança, precisam ser de uma página segura (HTTPS), não precisam ter um domínio especificado (portanto não são enviados para subdomínios) e o caminho (path) precisa ser "/".

- Expires=\<data> {{optional_inline}}

  - : O tempo de vida máximo do cookie como uma marcação de tempo (timestamp) HTTP. Veja {{HTTPHeader("Date")}} para a formatação detalhada.

    Se não especificado, o cookie terá o tempo de vida de uma **sessão de cookie.** Uma sessão é finalizada quando o cliente é desligado, significando que as sessões de cookies serão removidos nesse momento. Contudo, muitos navegadores web têm uma característica denominada de "restaurar sessão" que salvará todas suas abas e as trará de volta na próxima vez em que você utilizar o navegador. Os cookies estarão também presentes e será como se o navegador nunca tivesse sido fechado.

    Quando uma data de expiração é atribuída, o tempo e a data são relativos ao cliente em que os cookies estão sendo configurados e não ao servidor.

- Max-Age=\<digito-diferente-de-0> {{optional_inline}}
  - : Número de segundos até o cookie expirar. Um ou mais digitos de 1 a 9. Navegadores antigos (ie6, ie7 e ie8) não suportam Max-Age. Para cada navegador, se ambos (Expires e Max-Age) forem atribuídos, Max-Age terá precedência.
- Domain=\<valor-domínio> {{optional_inline}}

  - : Especifica os hosts aos quais o cookie será enviado.

    - Se não for especificado, será usado o host do URL do documento atual, não incluindo subdomínios.
    - Ao contrário das especificações anteriores, pontos de prefixo em nomes de domínio (`.example.com`) são ignorados.
    - Se um domínio for especificado, subdomínios estarão sempre incluídos.

- Path=\<valor-caminho> {{optional_inline}}
  - : Indica um caminho (path) de URL que necessita existir no recurso solicitado antes de enviar o cabeçalho de Cookie. O caractere %x2F ("/") é interpretado como um separador de diretório e os sub-diretórios serão também correspondidos (por exemplo: Path=/docs, "/docs", "/docs/Web", ou "/docs/Web/HTTP" serão todos correspondidos).
- Secure {{optional_inline}}

  - : Um cookie seguro apenas será enviado para o servidor quando uma requisição utilizando os protocol SSL e HTTPS for realizada. No entanto, informações confidenciais ou sensíveis não deverão ser armazenadas ou transmitidas em Cookies HTTP pois todo o mecanismo é inerentemente inseguro e isso não significa, por exemplo que qualquer informação é criptografada.

    > **Nota:** Sites inseguros (`http:`) não podem mais atribuir cookies com a diretiva "secure" (novo em Chrome 52+ firefox Firefox 52+).

- HttpOnly {{optional_inline}}
  - : Cookies HttpOnly não são acessíveis via JavaScript através da propriedade {{domxref("Document.cookie")}}, as API's {{domxref("XMLHttpRequest")}} e {{domxref("Request")}} são utilizadas para aliviar ataques de cross-site scripting ({{Glossary("XSS")}}).
- SameSite=Strict
  SameSite=Lax {{optional_inline}} {{experimental_inline}}
  - : Permite que servidores garantam que um cookie não deve ser enviado juntamente com solicitações de sites cruzados (cross-site) , o que fornece novamente alguma proteção aos ataques de falsificação de solicitação entre sites (CSRF) ({{Glossary("CSRF")}}) _._

## Exemplos

### Sessão de cookie

Sessão de cookie serão removidos quando o cliente desligar. Eles não especificam as diretivas Expires ou Max-Age. Note que o navegador web tem frequentemente a opção "restaurar sessão" habilitada..

```
Set-Cookie: sessionid=38afes7a8; HttpOnly; Path=/
```

### Cookie permanente

Ao invés de expirar quando o cliente fecha, os cookies permantentes expiram numa data especificada (Expires), ou depois de uma duração de tempo especificada (Max-Age).

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### Domínios inválidos

Um cookie pertencente a um domínio que não inclui o servidor original, [deve ser rejeitado pelo agente usuário](https://tools.ietf.org/html/rfc6265#section-4.1.2.3). Por exemplo: O cookie seguinte será rejeitado se foi atribuído por um servidor hospedado em originalcompany.com.

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk; Path=/; Expires=Wed, 30 Aug 2019 00:00:00 GMT
```

### Prefixo do cookie

Nomes de cookies com os prefixos `__Secure-` e `__Host-` podem ser utilizados apenas de eles forem atribuídos com a diretiva `secure` de uma origem segura (HTTPS). Além disso, cookies com o prefixo `__Host-` devem ter um caminho (path) de `/` (o host inteiro) e não devem ter um atributo de dominio. Para clientes que não implementam prefixos de cookie, você não pode contar com essas garantias adicionais e os cookies serão sempre aceitos.

```
// Ambos aceitos quando de uma origem segura (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejeitado devido a não atribuição da diretiva Secure
Set-Cookie: __Secure-id=1

// Rejeitado devido a falta da diretiva Path=/
Set-Cookie: __Host-id=1; Secure

// Rejeitado devido a atribuição de um domínio
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```

## Especificações

| Especificação                                     | Título                          |
| ------------------------------------------------- | ------------------------------- |
| {{RFC("6265", "Set-Cookie", "4.1")}}              | HTTP State Management Mechanism |
| {{RFC("draft-ietf-httpbis-cookie-prefixes-00")}}  | Cookie Prefixes                 |
| {{RFC("draft-ietf-httpbis-cookie-same-site-00")}} | Same-Site Cookies               |
| {{RFC("draft-ietf-httpbis-cookie-alone-01")}}     | Strict Secure Cookies           |

## Compatibilidade com navegadores

{{Compat("http.headers.Set-Cookie")}}

## Notas de compatibilidade

- Começando com Chrome 53 e Firefox 52, sites inseguros (`http:`) não podem mais atribuir cookies com a diretiva "secure".

## Veja também

- [HTTP cookies](/pt-BR/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
