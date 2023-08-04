---
title: Warning
slug: Web/HTTP/Headers/Warning
---

{{HTTPSidebar}}

> **Nota:** O cabeçalho `Warning` será depreciado em breve; veja [Warning (https://github.com/httpwg/http-core/issues/139)](https://github.com/httpwg/http-core/issues/139) e [Warning: header & stale-while-revalidate (https://github.com/whatwg/fetch/issues/913)](https://github.com/whatwg/fetch/issues/913) para mais detalhes.

O cabeçalho geral HTTP **`Warning`** contém informação sobre possíveis problemas com o status da mensagem. Mais de um cabeçalho `Warning` pode aparecer na resposta.

O cabeçalho `Warning` geralmente pode ser aplicado para qualquer mensagem, entretanto alguns códigos de aviso são específicos para caches e podem somente ser aplicados para mensagens de resposta.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalhos</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Diretivas

- \<warn-code>

  - : Um número de aviso de três dígitos. O primeiro dígito indica se é necessário o `Warning` ser deletado de uma resposta guardada depois da validação.

    - Códigos de aviso `1xx` descrevem o frescor ou status de validação da resposta e será deletado por um cache depois da deleção.
    - Códigos de aviso `2xx` descrevem algum aspecto da representação que não é retificada por uma validação e não será deletado por uma cache depois da validação a não que a resposta completa seja enviada.

- \<warn-agent>
  - : O nome ou pseudônimo do servidor ou software adicionando o cabeçalho `Warning` (pode ser "-" quando o agente não é conhecido).
- \<warn-text>
  - : Texto consultivo descrevendo o erro.
- \<warn-date>
  - : Opcional. Se mais de um cabeçalho `Warning` é enviado, inclui a data que corresponde com o cabeçalho {{HTTPHeader("Date")}}.

## Códigos de aviso (Warning)

O [registro de Códigos de Aviso HTTP em iana.org](http://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) define o espaço de nomes para códigos de aviso.

| Código | Texto                     | Descrição                                                                                                                                         |
| ------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110    | Resposta está velha       | A resposta provida pela cache está velha (o tempo de expiração já passou).                                                                        |
| 111    | Revalidação falhou        | Uma tentaiva de validar a resposta falhou, por causa da impossibilidade de alcançar o servidor.                                                   |
| 112    | Operação Desconectou      | O cache desconectou do resto da rede.                                                                                                             |
| 113    | Expiração Heurística      | Enviado se a cache escolhe heuristicamente um tempo de vida fresco maior que 24 horas e a idade da resposta é maior que 24 horas.                 |
| 199    | Aviso diverso             | Arbitrário, aviso não específico.                                                                                                                 |
| 214    | Transformação aplicada    | Adicionado por um proxy se ele aplica qualquer transformação na representação, como mudar a codificação de conteúdo, tipo de media ou semelhante. |
| 299    | Aviso diverso persistente | O mesmo que 199, mas indicando um aviso persistente.                                                                                              |

## Exemplos

```
Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## Especificações

| Especificação                     | Título                                          |
| --------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Warning", "5.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Compatibilidade com navegadores

{{Compat("http.headers.Warning")}}

## Veja também

- {{HTTPHeader("Date")}}
- [Código de resposta de status HTTP](/pt-BR/docs/Web/HTTP/Status)
