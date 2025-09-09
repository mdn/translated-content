---
title: X-Forwarded-For
slug: Web/HTTP/Reference/Headers/X-Forwarded-For
original_slug: Web/HTTP/Headers/X-Forwarded-For
---

O cabeçalho **`X-Forwarded-For`** (XFF) é de fato um cabeçalho padrão para identificar o endereço de IP original de um cliente conectando a um servidor web através de um proxy HTTP ou um balenceador de carga. Quando tráfego específico é interceptado entre clientes e servidores, _logs_ de acesso do servidor contém o endereço IP do proxy ou balanceador de carga somente. Para ver o endereço IP original do cliente, o cabeçalho de requisição `X-Forwarded-For` é utilizado.

Este cabeçalho é utilizado para depuração, estatísticas, e gerar conteúdo dependente localmente e por design ele expõe informações privadas sensíveis, como o endereço IP do cliente. Então a privacidade do usuário deve estar em mente quando utilizando este cabeçalho.

Uma versão padronizada deste cabeçalho é o cabeçalho HTTP {{HTTPHeader("Forwarded")}}.

`X-Forwarded-For` é também um cabeçalho de email indicando que uma mensagem de email foi redirecionada para outra conta.

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
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

## Diretivas

- \<client>
  - : O endereço de IP do cliente.
- \<proxy1>, \<proxy2>
  - : Se a requisição atravessa múltiplos proxies, os endereços IP de cada proxy sucessivo são listados. Isto significa, o endereço IP mais a direita é o endereço IP mais do proxy mais recente, e o endereço IP mais a esquerda é o endereço IP originário do cliente.

## Exemplos

```
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
```

Outras formas não padronizadas:

```
# Usado por alguns serviços da Google
X-ProxyUser-Ip: 203.0.113.19
```

## Especificações

Não pertence a nenhuma especificação atualmente. A versão padronizada do cabeçalho é {{HTTPHeader("Forwarded")}}.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
