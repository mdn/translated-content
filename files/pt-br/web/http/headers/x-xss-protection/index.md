---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`X-XSS-Protection`** é uma funcionalidade do Internet Explorer, Chrome e Safari que impede páginas de carregarem quando eles detectam ataques de scripting entre sites ({{Glossary("XSS")}}) refletidos. Apesar destas proteções serem majoritariamente desnecessárias em navegadores modernos em sites utilizando uma forte {{HTTPHeader("Content-Security-Policy")}} que desabilita o uso de JavaScript _inline_ (`'unsafe-inline'`), eles ainda podem oferecer proteções para usuários de navegadores mais antigos que ainda não suportam {{Glossary("CSP")}}.

> [!NOTE]
>
> - Chrome [removeu o XSS Auditor deles](https://www.chromestatus.com/feature/5021976655560704)
> - Firefox não tem, e [não irá implementar `X-XSS-Protection`](https://bugzilla.mozilla.org/show_bug.cgi?id=528661)
> - Edge [aposentou o filtro XSS deles](https://blogs.windows.com/windowsexperience/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/)Isso significa que se você não precisa dar suporte para navegadores legado, é recomendado que você use [`Content-Security-Policy`](/pt-BR/docs/Web/HTTP/Headers/Content-Security-Policy) sem permitir scripts `unsafe-inline` ao invés disso.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : Desabilita filtragem XSS.
- 1
  - : Habilita filtragem XSS (geralmente padrão em navegadores). Se um ataque de scripting entre sites é detectado, o navegador irá higienizar a página (remover as partes inseguras).
- 1; mode=block
  - : Habilita filtragem XSS. Ao invés de higienizar a página, o navegador irá impedir a renderização da página em que o ataque foi detectado.
- 1; report=\<reporting-URI> (Chromium somente)
  - : Habilita filtragem XSS. Se o ataque de scripting entre sites é detectado, o navegador irá higienizar a página e reportar a violação. Isso utiliza a funcionalidade da diretiva CSP {{CSP("report-uri")}} para enviar o relatório.

## Exemplos

Bloqueia páginas de carregarem quando elas detectam ataques XSS refletidos:

```bash
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```bash
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```bash
add_header "X-XSS-Protection" "1; mode=block";
```

## Especificações

Não faz parte de nenhuma especificação ou rascunho.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlando o XSS Filter (Controlling the XSS Filter) – Microsoft](https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/)
- [Entendendo o XSS Auditor (Understanding XSS Auditor) – Virtue Security](https://www.virtuesecurity.com/blog/understanding-xss-auditor/)
- [O mal-entendido X-XSS-Protection (The misunderstood X-XSS-Protection) – blog.innerht.ml](https://blog.innerht.ml/the-misunderstood-x-xss-protection/)
