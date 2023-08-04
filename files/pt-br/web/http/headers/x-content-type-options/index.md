---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
---

{{HTTPSidebar}}

O header de resposta HTTP **X-Content-Type-Options** é um marcador usado pelo servidor para indicar que os [MIME types](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types) enviados pelos headers {{HTTPHeader("Content-Type")}} não devem ser alterados e seguidos. Isto permite que o usuário opte por não participar do chamado [MIME Type Sniffing](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing) ou, em outras palavras, é uma forma de dizer que os webmasters estão vendo o que você está fazendo.

Este header foi incluído pela Microsoft no IE 8 como uma maneira de webmasters serem capazes de bloquear o _sniffing_ de conteúdo que acontecia na época, e podia transformar tipos MIME não executáveis em tipos executáveis. Desde então, outros browsers acataram a ideia mesmo que seus algoritmos de definição de MIME fossem menos agressivos.

Experts em segurança da informação geralmente esperam que este header esteja presente.

> **Nota:** Nota: `nosniff` só se aplica para tipos "script" e "style". Também, aplicar `nosniff` em tipos de imagem provou-se ser [incompatível com sites existentes](https://github.com/whatwg/fetch/issues/395).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo do header</th>
      <td>{{Glossary("Header de resposta")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Alteração de nome proibida")}}
      </th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
X-Content-Type-Options: nosniff
```

## Diretivas

- `nosniff`

  - : Bloqueia uma requisição se o tipo for:

    - "`style`" e o tipo MIME não é "`text/css`", ou
    - "`script`" e o tipo MIME não é um tipo [JavaScript](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type).

## Especificações

| Especificação                                                                                | Status             | Comentário        |
| -------------------------------------------------------------------------------------------- | ------------------ | ----------------- |
| {{SpecName("Fetch", "#x-content-type-options-header", "X-Content-Type-Options definition")}} | {{Spec2("Fetch")}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("http.headers.X-Content-Type-Options")}}

## Veja também

- {{HTTPHeader("Content-Type")}}
- A [definição original](https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/) do X-Content-Type-Options pela Microsoft.
- A ferramenta [Mozilla Observatory](https://mozilla.github.io/http-observatory-website/) testando a configuração (incluindo este header) de páginas por segurança e precaução.
- [Mitigando ataques de confusão de MIME no Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
