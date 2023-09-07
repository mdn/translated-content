---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Access-Control-Max-Age`** indica por quanto tempo os resultados de uma {{glossary("preflight request")}} (que é a informação contida nos cabeçalhos {{HTTPHeader("Access-Control-Allow-Methods")}} e {{HTTPHeader("Access-Control-Allow-Headers")}}) pode ser cacheada (mantida).

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
Access-Control-Max-Age: <delta-segundos>
```

## Diretivas

- \<delta-segundos>
  - : Número máximo de segundos que os resultados podem ser cacheados.
    Firefox [limita isso em 24 horas](https://dxr.mozilla.org/mozilla-central/rev/7ae377917236b7e6111146aa9fb4c073c0efc7f4/netwerk/protocol/http/nsCORSListenerProxy.cpp#1131) (86400 segundos).
    Chromium (anterior à v76) [limita isso à 10 minutos](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=36&rcl=52002151773d8cd9ffc5f557cd7cc880fddcae3e) (600 segundos).
    Chromium (começando na v76) [limita isso à 2 horas](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?l=31&rcl=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa) (7200 segundos).
    Chromium também especifica o valor padrão de 5 segundos.
    O valor de **-1** irá desabilitar o cacheamento, requerendo uma requisição de checagem pré-vôo OPTIONS para todas as chamadas.

## Exemplos

Resultados cacheados para uma requisição pré-vôo por 10 minutos:

```
Access-Control-Max-Age: 600
```

## Especificações

| Especificação                                                                  | Status             | Comentários         |
| ------------------------------------------------------------------------------ | ------------------ | ------------------- |
| {{SpecName('Fetch','#http-access-control-max-age', 'Access-Control-Max-Age')}} | {{Spec2("Fetch")}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("http.headers.Access-Control-Max-Age")}}

## Veja também

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
