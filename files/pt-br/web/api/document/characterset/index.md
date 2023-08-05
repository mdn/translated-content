---
title: Document.characterSet
slug: Web/API/Document/characterSet
---

{{ ApiRef("DOM") }}A propriedade somente leitura Document.characterSet retorna a [character encoding](/pt-BR/docs/Glossary/character_encoding)(codificação de caracteres) do documento com o qual ele é renderizado atualmente. (Uma codificação de caracteres é um conjunto de caracteres e como interpretar bytes nesses caracteres.)

> **Nota:** Um "character set"(conjunto de caracteres) e "character encoding"(codificação de caracteres) estão relacionados, mas diferentes. Apesar do nome dessa propriedade, ela retorna a codificação.

Usuários podem sobrepor a codificação especificada pelo desenvolvedor dentro do cabeçalho [Content-Type](/pt-BR/docs/Web/HTTP/Headers/Content-Type) (tipo de conteúdo) ou embutida como \<meta charset = "utf-8">, como no menu <kbd>Exibir → Codificacao de Texto </kbd>. Essa substituição é fornecida para corrigir codificações especificadas pelo desenvolvedor incorretas que resultam em [texto ilegivel](https://en.wikipedia.org/wiki/Mojibake).

> **Nota:** As propriedades `document.charset` e `document.inputEncoding` são aliases legados para `document.characterSet`. Não use mais eles.

## Sintaxe

```
var string = document.characterSet;
```

## Exemplos

```html
<button onclick="console.log(document.characterSet);">
  Registro de Codificacao de Caracteres
</button>
<!-- mostra a codificacao de caracteres do documento no console do desevolvedor, como "ISO-8859-1" ou "UTF-8" -->
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
