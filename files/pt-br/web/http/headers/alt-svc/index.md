---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
---

O cabeçalho de resposta HTTP **`Alt-Svc`** é usado para indicar que serviços alternativos que podem ser utilizados para alcançar o mesmo recurso. Um serviço alternativo é definido por uma combinação de protocolo/host/porta.

## Sintaxe

```
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : O valor especial ''clear" indica que todas as requisições alternativas para aquela origem devem ser invalidadas.
- `<protocol-id>`
  - : O identificador de protocolo {{Glossary("ALPN")}}. Exemplos incluem o h2 para HTTP/2 e h3-25 como rascunho 25 para o protocolo HTTP/3.
- `<alt-authority>`
  - : A cadeia de caracteres entre aspas especificando a autoridade alternativa que consiste em uma sobrecarga de host opicional, dois pontos e um número de porta mandatório.
- `ma=<max-age>`{{Optional_Inline}}
  - : O número de segundos que o serviço alternativo é considerado "fresco". Se omitido, seu padrão é 24 horas. Entradas de serviços alternativos podem ser cacheados até o limite de _\<max-age>_ segundos, menos a idade da resposta (do cabeçalho Age). Se a entrada cacheada expirar, o cliente não pode mais usar o serviço alternativo para novas conexões.
- `persist=1`{{Optional_Inline}}
  - : Entradas cacheadas de serviços alternativos geralmente são limpas em mudanças nas configurações de rede. O uso do parâmetro persist=1 assegura que a entrada não será deletada para tais mudanças.

Múltiplas entradas podem ser especificadas em um único cabeçalho Alt-Svc usando vírgula como separador. Neste caso, as primeiras entradas são consideradas as mais preferíveis.

## Exemplos

```
Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600
```

## Especificações

| Especificação | Status   | Comentários        |
| ------------- | -------- | ------------------ |
| {{RFC(7838)}} | IETF RFC | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.Alt-Svc")}}

## Veja também

- [Identificando recursos na Web](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
