---
title: NEL
slug: Web/HTTP/Reference/Headers/NEL
original_slug: Web/HTTP/Headers/NEL
---

O cabeçalho de resposta HTTP **`NEL`** é usado para configurar o registro de _logs_ de requisição na rede.

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
NEL: { "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }
```

## Especificações

| Especificação                                                                                 |
| --------------------------------------------------------------------------------------------- |
| [Registro de Erros de Rede](https://w3c.github.io/network-error-logging/#nel-response-header) |

## Veja também

- [Explicação do Registro de Redes de Log \[Network Error Logging (NEL)\]](/pt-BR/docs/Web/HTTP/Network_Error_Logging)
