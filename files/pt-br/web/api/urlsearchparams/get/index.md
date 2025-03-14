---
title: URLSearchParams.get()
slug: Web/API/URLSearchParams/get
---

{{ApiRef("URL API")}}{{SeeCompatTable}}

O métod **get()** da interface {{domxref("URLSearchParams")}}, retorna o primeiro valor associado ao parametro de busca fornecido.

## Syntax

```
URLSearchParams.get(name)
```

### Parâmetros

- name
  - : O nome do parâmetro à ser retornado.

### Retorno

Um {{domxref("USVString")}} se o parâmetro de pesquisa for encontrado; Caso contrário, **`null`**.

## Exemplo

Se a URL da sua página é `https://example.com/?name=Jonathan&age=18` você pode obter o parâmetro 'name' e 'age' usando:

```
let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // retorna a string "Jonathan"
let age = parseInt(params.get("age"), 10); // retorna o número 18
```

Buscar um parâmetro que não esteja presente na string de pesquisa, retornará **`null`**:

```
let address = params.get("address"); // null
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
