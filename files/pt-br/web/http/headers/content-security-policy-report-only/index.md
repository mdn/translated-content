---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Content-Security-Policy-Report-Only`** permite aos desenvolvedores _web_ experimentar políticas monitorando (mas não forçando) seus efeitos. Esses relatórios de violação consistem de documentos {{Glossary("JSON")}} enviados por uma requisição HTTP `POST` para a URI especificada.

Para mais informações, veja também este artigo em [Content Security Policy (CSP)](/pt-BR/docs/Web/HTTP/CSP).

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
    <tr>
      <th colspan="2" scope="row">
        Este cabeçalho não é suportado dentro de um elemento
        {{HTMLElement("meta")}}.
      </th>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Content-Security-Policy-Report-Only: <policy-directive>; <policy-directive>
```

## Diretivas

As diretivas do cabeçalho {{HTTPHeader("Content-Security-Policy")}} também podem ser aplicadas para `Content-Security-Policy-Report-Only`.

A diretiva CSP {{CSP("report-uri")}} deve ser utilizada com este cabeçalho, caso contrário este cabeçalho será uma custosa operação sem ação para a máquina.

## Exemplos

Este cabeçalho reporta violações que podem ter ocorrido. Você pode usar isso para trabalhar iterativamente na sua política de segurança de conteúdo. Você observa como seu site se comporta, observando para relatórios de violação ou [redirecionamento de _malware_](https://secure.wphackedhelp.com/blog/wordpress-malware-redirect-hack-cleanup/), então escolha a política forçada desejada pelo cabeçalho {{HTTPHeader("Content-Security-Policy")}}.

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

Se você ainda quer continuar recebendo relatórios, mas também quer reforçar a política, use o cabeçalho {{HTTPHeader("Content-Security-Policy")}} com a diretiva {{CSP("report-uri")}}.

```
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

## Sintaxe de relatório de violação

O objeto de relatório JSON contém os seguintes dados:

- `blocked-uri`
  - : A URI do recurso que estava bloqueada de carregar pela Política de Segurança de Conteúdo. Se a URI bloqueada é de uma origem diferente da URI do documento, então a URI bloqueada é truncada para conter somente o esquema, _host_, e a porta.
- `disposition`
  - : Ou `"enforce"` ou `"report"` dependendo se o cabeçalho {{HTTPHeader("Content-Security-Policy")}} ou o `Content-Security-Policy-Report-Only` é utilizado.
- `document-uri`
  - : A URI do documento na qual a violação ocorreu.
- `effective-directive`
  - : A diretiva na qual a execução causou a violação.
- `original-policy`
  - : A política original como especificada pelo cabeçalho HTTP `Content-Security-Policy-Report-Only`.
- `referrer`
  - : A referência do documento onde a violação ocorreu.
- `script-sample`
  - : Os primeiros 40 caracteres do _script_ em linha, manejador de evento, ou estilo que causou a violação.
- `status-code`
  - : O código de status HTTP do recurso no qual o objeto global foi instanciado.
- `violated-directive`
  - : O nome da seção da política que foi violada.

## Exemplo de relatório de violação

Vamos considerar a página localizada em `http://example.com/signup.html`. Ele usa a seguinte política, desabilitando tudo menos arquivos de estilo de `cdn.example.com`.

```
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

O HTML de `signup.html` se parece com isto:

```html
<!doctype html>
<html>
  <head>
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    ... Conteúdo ...
  </body>
</html>
```

Você consegue observar a violação? Arquivos de estilos são permitidos serem carregados somente de `cdn.example.com`, entretanto o site tenta carregar um de sua origem (`http://example.com`). O navegador capaz de executar CSP irá mandar o seguinte relatório de violação como requisição POST para `http://example.com/_/csp-reports`, quando o documento é visitado:

```js
{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "disposition": "report"
  }
}
```

Como você pode ver, o relatório inclui o caminho completo para o recurso violado em `blocked-uri`. Isso não é sempre o caso. Por exemplo, quando o `signup.html` irá tentar carregar o CSS de `http://anothercdn.example.com/stylesheet.css`, o navegador não irá incluir o caminho completo, somente a origem será inclusa (`http://anothercdn.example.com`). Isso é feito para prevenir o vazamento de informações sensíveis sobre recursos entre origens.

## Especificações

| Especificação           | Status               | Comentário         |
| ----------------------- | -------------------- | ------------------ |
| {{specName("CSP 3.0")}} | {{Spec2('CSP 3.0')}} | Sem alterações.    |
| {{specName("CSP 1.1")}} | {{Spec2('CSP 1.1')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Security-Policy-Report-Only")}}

## Veja também

- {{HTTPHeader("Content-Security-Policy")}}
- Diretiva CSP {{CSP("report-uri")}}
- [Segurança de conteúdo em WebExtensions](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Mostra políticas de privacidade e segurança nas Ferramentas de Desenvolvedor do Firefox](/pt-BR/docs/Tools/GCLI/Display_security_and_privacy_policies)
