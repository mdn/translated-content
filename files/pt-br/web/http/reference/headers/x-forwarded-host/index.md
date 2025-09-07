---
title: X-Forwarded-Host
slug: Web/HTTP/Reference/Headers/X-Forwarded-Host
original_slug: Web/HTTP/Headers/X-Forwarded-Host
---

O cabeçalho **`X-Forwarded-Host`** (XFH) é um cabeçalho padrão de fato para identificar o _host_ original requisitado pelo cliente no cabeçalho de requisição HTTP {{HTTPHeader("Host")}}.

Nomes de _hosts_ e portes de proxies reversos (balanceadores de carga, CDNs) pode diferir do servidor de origem que manipula a solicitação, neste caso o cabeçalho `X-Forwarded-Host` é útil para determinar qual Host foi originalmente utilizado.

Este cabeçalho é utilizado para depuração, estatísticas, e gerar conteúdo dependente localmente e por design ele expõe informações privadas sensíveis, como o endereço IP do cliente. Então a privacidade do usuário deve estar em mente quando utilizando este cabeçalho.

Uma versão padronizada deste cabeçalho é o cabeçalho HTTP {{HTTPHeader("Forwarded")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
X-Forwarded-Host: <host>
```

## Diretivas

- \<host>
  - : O nome do domínio do servidor encaminhado.

## Exemplos

```
X-Forwarded-Host: id42.example-cdn.com
```

## Especificações

Não pertence a nenhuma especificação atualmente. A versão padronizada do cabeçalho é {{HTTPHeader("Forwarded")}}.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
