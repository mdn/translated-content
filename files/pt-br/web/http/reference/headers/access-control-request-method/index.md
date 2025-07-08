---
title: Access-Control-Request-Method
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Method
original_slug: Web/HTTP/Headers/Access-Control-Request-Method
---

O cabeçalho de requisição **`Access-Control-Request-Method`** é usado pelos navegadores quando executando uma {{glossary("preflight request")}}, para deixar o servidor sabendo quais [métodos HTTP](/pt-BR/docs/Web/HTTP/Reference/Methods) vão ser usados quando a requisição verdadeira for feita. Este cabeçalho é necessário como toda requisição pré-vôo é um {{HTTPMethod("OPTIONS")}} e não usa o mesmo método na requisição verdadeira.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Access-Control-Request-Method: <método>
```

## Diretivas

- \<método>
  - : Um dos [métodos de requisição HTTP](/pt-BR/docs/Web/HTTP/Reference/Methods), por exemplo: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} ou {{HTTPMethod("DELETE")}}.

## Exemplos

```
Access-Control-Request-Method: POST
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Access-Control-Request-Headers")}}
