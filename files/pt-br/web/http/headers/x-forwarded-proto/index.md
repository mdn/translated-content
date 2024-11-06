---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
---

{{HTTPSidebar}}

O cabeçalho **`X-Forwarded-Proto`** (XFP) é um cabeçalho padrão de fato para identificar o protocolo (HTTP ou HTTPS) que o cliente usava para conectar ao seu proxy ou balanceador de carga. Seus _logs_ de acesso do servidor contém o protocolo usado entre o servidor e o balanceador de carga, não o protocolo usado entre o cliente e o balanceador de carga. Para determinar o protocolo utilizado entre o cliente e o balanceador de carga, o cabeçalho de requisição `X-Forwarded-Proto` pode ser utilizado.

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
X-Forwarded-Proto: <protocol>
```

## Diretivas

- \<protocol>
  - : O protocolo encaminhado (http ou https).

## Exemplos

```
X-Forwarded-Proto: https
```

Outras formas não padronizadas:

```
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Especificações

Não pertence a nenhuma especificação atualmente. A versão padronizada do cabeçalho é {{HTTPHeader("Forwarded")}}.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
