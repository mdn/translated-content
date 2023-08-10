---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Timing-Allow-Origin`** especifica origens que são permitidas de ver os valores dos atributos por funcionalidades da [Resource Timing API](/pt-BR/docs/Web/API/Resource_Timing_API), na qual caso contrário será reportada como zero dada as restrições entre origens.

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
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>[, <origin>]*
```

## Diretivas

- \*
  - : O servidor pode especificar "\*" como um coringa, sendo assim permitindo qualquer origem de ver os tempos dos recursos.
- \<origin>
  - : Especifica uma URI que pode ver os tempos dos recursos. Você pode especificar várias origens, separadas por vírgulas.

## Exemplos

Para permitir qualquer recurso veja os tempos dos recursos:

```
Timing-Allow-Origin: *
```

Para permitir `https://developer.mozilla.org` de ver os tempos de recursos de, você pode especificar:

```
Timing-Allow-Origin: https://developer.mozilla.org
```

## Especificações

| Especificação                                                                        | Status                         | Comentário         |
| ------------------------------------------------------------------------------------ | ------------------------------ | ------------------ |
| {{SpecName('Resource Timing 3', '#sec-timing-allow-origin', 'Timing-Allow-Origin')}} | {{Spec2("Resource Timing 3")}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.Timing-Allow-Origin")}}

## Veja também

- [Resource Timing API](/pt-BR/docs/Web/API/Resource_Timing_API)
- [Usando a Resource Timing API](/pt-BR/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
- {{HTTPHeader("Vary")}}
