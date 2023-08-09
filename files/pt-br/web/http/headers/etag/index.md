---
title: ETag
slug: Web/HTTP/Headers/ETag
---

{{HTTPSidebar}}

O HTTP provê no cabeçalho (header) da resposta (response), a **`ETag`** que é um identificador para uma versão específica de um recurso. A ETag permite que o cache torne-se mais eficiente e preserve o tráfego de dados (largura de banda), assim um web server não precisa reenviar uma resposta com todos os dados que não tiveram nenhuma mudança em seu conteúdo. Além disso, as ETags ajudam a impedir que atualizações simultâneas de um recurso sejam feitas por outros. Veja sobre (["mid-air collisions"](#Caching_of_unchanged_resources)).

Se o recurso numa URL sofre mudança, a `Etag` assume um novo valor que deve ser gerado pelo Web Server. Uma comparação entre elas podem determinar se as duas representações do recurso são iguais. Etags são similares às nossas impressões digitais, e por isso também podem ser usadas por alguns servidores como um forma de rastreamento. Elas podem ser configuradas a fim de que possam ser persistidas idenfinidamente por um servidor de rastreamento.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
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
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## Diretivas

- `W/` {{optional_inline}}
  - : `'W/'` (case-sensitive) Indica que um validador fraco está sendo usado (veja mais em [weak validator](/pt-BR/docs/Web/HTTP/Conditional_requests#Weak_validation)). _Etags Fracas_ são fáceis de serem geradas, mas possuem a desvantagem de serem menos usadas para comparações. _Validadores Fortes_ são ideais para comparações mas podem ser muito difíceis de serem gerados de uma forma eficaz. Os valores de uma Etag Fraca para duas representações de um único recurso podem ser equivalentes semanticamente, contudo não são idênticas em byte-for-byte. Isto significa que etags fracas impedem o cache efetivo quando requisições dentro de um intervalo de bytes são realizadas (veja mais em [byte range requests](/pt-BR/docs/Web/HTTP/Headers/Accept-Ranges) ), ao passo que etags fortes permitem que um intervalo de requisições aindam possam ser preservadas no cache.
- "\<etag_value>"
  - : Tag na Entidade que possui valor único o qual está representando o recurso requisitado. O valor será do tipo string com caracteres em ASCII que será exibido dentro de aspas duplas, como pode se vê ao lado `"675af34563dc-tr34"`. O método por qual o valor da `ETag` foi gerado não está especificado. Frequentemente, uma hash do conteúdo, uma hash da última modificação ou somente um número de revisão é usado. Por exemplo o MDN usa uma hash hexadecimal para o conteúdo do artigo da wiki.

## Exemplos

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Fugindo de ediçoes simultâneas

Com a ajuda da `ETag` e o cabeçalho {{HTTPHeader("If-Match")}} (_headers_), você pode detectar choque de edições simultânes.

Por exemplo, quando editamos o MDN, o conteúdo atual da wiki é criptografado e colocado dentro de uma `Etag` da resposta (response).

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Quando salvamos as mudanças para a página da wiki, (posting data), a requisição {{HTTPMethod("POST")}} conterá o cabeçalho {{HTTPHeader("If-Match")}} contendo o valor da `ETag` para checar a atualização.

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Se o hash não for compatível, isto significa que o documento foi editado durante determinado intervalo e uma resposta com o status {{HTTPStatus("412")}} `Precondition Failed` será enviada ao cliente.

### Armazenando recursos sem alterações

Outro uso típico de cabeçalho (header) com a `ETag` é para guardar recursos que não foram alterados. Se um usuário visitar um recurso dado por uma URL de novo, (é necessaíro ter a `ETag` configurada), e ele deseja saber se está obsoleto (_stale)_ (ou antigo para ser considerado como utilizável), o cliente enviará o valor da sua `ETag` por meio de um atributo no cabeçalho {{HTTPHeader("If-None-Match")}}, veja o exemplo abaixo:

```
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

O servidor irá comparar a `ETag` do cliente (enviada com `If-None-Match`) com a versão da `ETag` disponível para o recurso, e se ambos os valores forem compatíveis (isto é, o recurso não foi modificado), o servidor enviará de volta a resposta com status {{HTTPStatus("304")}} `Sem Modificação (Not modified)`, porém sem um body, comunicando ao cliente que a versão guardada na resposta ainda está atualizada (ou boa para uso, _fresh_).

## Especificações

| Especificação                  | Título                                                       |
| ------------------------------ | ------------------------------------------------------------ |
| {{RFC("7232", "ETag", "2.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.ETag")}}

## Veja também

- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
