---
title: Link
slug: Web/HTTP/Headers/Link
---

{{HTTPSidebar}}

O cabeçalho de entidade **`Link`** provém maneiras para serializar um ou mais links em cabeçalhos HTTP. Ele é semanticamente equivalente ao elemento HTML {{HTMLElement("link")}}.

## Sintaxe

```
Link: < uri-reference >; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : A referência da URI, precisa ser encapsulado entre `<` e `>`.

### Parâmetros

O cabeçalho _link_ contém parâmetros, os quais são separados com `;` e são equivalentes aos atributos do elemento {{HTMLElement("link")}}.

## Exemplos

A URI precisa ser encapsulado entre `<` e `>`:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### Especificando múltiplos _links_

Você pode especificar múltiplos _links_ separados por vírgulas, por exemplo:

```
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## Especificações

| Especificação                                          | Status   | Comentários       |
| ------------------------------------------------------ | -------- | ----------------- |
| {{RFC(8288, "Link Serialisation in HTTP Headers", 3)}} | IETF RFC |                   |
| {{RFC(5988, "The Link Header Field", 5)}}              | IETF RFC | Definição inicial |

## Compatibilidade com navegadores

{{Compat("http.headers.Link")}}

## Veja também

- {{HTTPStatus(103, "103 Early Hints")}}
