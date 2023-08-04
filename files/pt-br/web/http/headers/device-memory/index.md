---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

O cabeçalho **`Device-Memory`** é um cabeçalho da [Device Memory API](/pt-BR/docs/Web/API/Device_Memory_API) que funciona como os cabeçalhos [Client Hints](/pt-BR/docs/Glossary/Client_hints) que representão a quantidade aproximada de RAM que o dispositivo do cliente possui.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>?</td>
    </tr>
  </tbody>
</table>

> **Nota:** Client Hints são acessíveis somente em origens seguras (via TLS). O servidor pode optar em receber o cabeçalho `Device-Memory` do cliente mandando os cabeçalhos de resposta {{HTTPHeader("Accept-CH")}} e {{HTTPHeader("Accept-CH-Lifetime")}}.

## Sintaxe

A quantidade de RAM no dispositivo pode ser usada como variável de pegada, The amount of device RAM can be used as a fingerprinting variable, então os valores para este cabeçalho são intencionalmente grosseiros para reduzir potenciais usos indesejados. O cabeçalho pode ter os seguintes valores: `0.25`, `0.5`, `1`, `2`, `4`, `8`.

```
Device-Memory: <number>
```

## Exemplos

O servidor precisa primeiro optar por aceitar o cabeçalho `Device-Memory` mandando os cabeçalhos de resposta {{HTTPHeader("Accept-CH")}} contendo `Device-Memory` e {{HTTPHeader("Accept-CH-Lifetime")}}.

```
Accept-CH: Device-Memory
Accept-CH-Lifetime: 86400
```

Então nas requisições subsequentes, o cliente enviará o cabeçalho `Device-Memory` de volta:

```
Device-Memory: 1
```

## Especificações

| Especificação                                                                         | Status                     | Comentário         |
| ------------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| {{SpecName("Device Memory","#sec-device-memory-client-hint-header","Device-Memory")}} | {{Spec2('Device Memory')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.Device-Memory")}}

## Veja também

- [Device Memory API](/pt-BR/docs/Web/API/Device_Memory_API)
- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
- {{DOMxRef("Navigator.deviceMemory")}}
