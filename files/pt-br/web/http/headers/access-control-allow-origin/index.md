---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---

{{HTTPSidebar}}

O **`Access-Control-Allow-Origin`** cabeçalho de resposta indica se os recursos da resposta podem ser compartilhados com a {{glossary("origin")}} dada.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
```

## Diretivas

- `*`
  - : Para as requisições sem credenciais, o servidor pode especificar "\*" como um curinga, permitindo assim que qualquer origem acesse o recurso.
- `<origin>`
  - : Especifica a URI que pode acessar o recurso.

## Exemplos

Para permitir que qualquer origin acesse o seu recurso, você pode especificar desta forma:

```
Access-Control-Allow-Origin: *
```

Para permitir que `https://developer.mozilla.org` acesse seu recurso, você pode especificar:

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

### CORS e caching

Se o servidor especificar um host de origem em vez de "\*", ele também deverá incluir "Origin" no cabeçalho de resposta {{HTTPHeader ("Vary")}} para indicar aos clientes que as respostas do servidor serão diferentes com base no valor da solicitação Origin cabeçalho.

```
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Especificações

| Specification                                                                            | Status             | Comment             |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------- |
| {{SpecName('Fetch','#http-access-control-allow-origin', 'Access-Control-Allow-Origin')}} | {{Spec2("Fetch")}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("http.headers.Access-Control-Allow-Origin")}}

## Veja também

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
