---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
---

{{HTTPSidebar}}

> **Nota:** Devido a um [bug no Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1074261), configurar Cross-Origin-Resource-Policy pode quebrar a renderização de PDF, impedindo visitantes de conseguir ler além da primeira página de alguns PDFs. Utilize com cuidado este cabeçalho em um ambiente de produção.

O cabeçalho de resposta HTTP **`Cross-Origin-Resource-Policy`** indica um desejo que o navegador bloqueie requisições que não sejam entre origens e/ou entre sites para um dado recurso.

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
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Exemplos

O cabeçalho de resposta abaixo pode causar a agentes de usuário compatíveis a desabilitar requisição que não sejam entre origens:

```
Cross-Origin-Resource-Policy: same-origin
```

Para mais exemplos, veja <https://resourcepolicy.fyi/>.

## Especificações

| Especificação                                                 | Status                                                     | Comentários       |
| ------------------------------------------------------------- | ---------------------------------------------------------- | ----------------- |
| {{SpecName("Fetch", '#cross-origin-resource-policy-header')}} | {{Spec2("Fetch", '#cross-origin-resource-policy-header')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("http.headers.Cross-Origin-Resource-Policy")}}

## Veja também

- [Explicação da Cross-Origin Resource Policy (CORP)](</pt-BR/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>)
- [Considere usar Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
