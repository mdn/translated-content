---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
---

{{HTTPSidebar}}

O cabeçalho **`Forwarded`** contém informação dos [servidores de proxy reverso](/pt-BR/docs/Web/HTTP/Proxy_servers_and_tunneling) que é alterada ou perdida quando um proxy está envolvido no caminho da requisição.

A versão alternativa e de fato padrão deste cabeçalho são os cabeçalhos {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} e {{HTTPHeader("X-Forwarded-Proto")}}.

Este cabeçalho é utilizado para depuração, estatísticas, e gerar conteúdo localmente dependente e por design ele expõe informações privadas sensíveis, como o endereço IP do cliente. Sendo assim, a privacidade do usuário deve sempre estar em mente quando utilizando este cabeçalho.

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
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

## Diretivas

- \<identifier>

  - : Um identificador divulgando a informação que é alterada ou perdida usando um proxy. Ela pode ser tanto:

    - um endereço IP (v4 ou v6, opicionalmente com a porta, e IPv6 encapsulado por colchetes e aspas),
    - um identificador ofuscado (como um "\_hidden" ou "\_secret"),
    - ou "unknown" (desconhecido) quando a entidade precedente não é conhecida (e você ainda quer indicar que aquela repassagem da requisição foi feita).

- by=\<identifier>
  - : A interface onde a requisição chegou ao servidor proxy.
- for=\<identifier>
  - : O cliente que iniciou a requisição e subsequentes proxies na cadeia de proxies.
- host=\<host>
  - : O cabeçalho de requisição {{HTTPHeader("Host")}} como foi recebido pelo proxy.
- proto=\<http|https>
  - : Indica qual protocolo foi usado para fazer a requisição (tipicamente "http" ou "https").

## Exemplos

### Usando o cabeçalho `Forwarded`

```
Forwarded: for="_mdn"

# sem sensibilidade de capitalização
Forwarded: For="[2001:db8:cafe::17]:4711"

# separado por ponto e vírgula
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# múltiplos valores podem ser concatenados usando uma vírgula
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### Transicionando de `X-Forwarded-For` para `Forwarded`

Se a sua aplicação, servidor, ou proxy suporta o cabeçalho padrozinado `Forwarded`, o cabeçalho {{HTTPHeader("X-Forwarded-For")}} pode então ser substituído. Note que o endereço IPv6 está entre colchetes e aspas em `Forwarded`.

```
X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, "[2001:db8:cafe::17]"
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## Especificações

| Especificação                     | Título                   |
| --------------------------------- | ------------------------ |
| {{RFC("7239", "Forwarded", "4")}} | Forwarded HTTP Extension |

## Compatibilidade com navegadores

{{Compat("http.headers.Forwarded")}}

## Veja também

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – provém informação sobre o proxy em si, não sobre o cliente conectando a ele.
