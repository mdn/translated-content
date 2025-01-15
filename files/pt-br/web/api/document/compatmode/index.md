---
title: Document.compatMode
slug: Web/API/Document/compatMode
---

{{ ApiRef("DOM") }}

Indica se o documento está renderizado no [Quirks mode](/pt-BR/Quirks_Mode_and_Standards_Mode) ou no modo dos Padrões.

## Sintaxe

```
modo = document.compatMode
```

## Valores

- `"BackCompat"` se o documento está em **quirks mode**;
- `"CSS1Compat"` se o documento está no modo "não-_quirks_" (também conhecido como "**full standards mode**") ou "_limited-quirks_" (também conhecido como "**almost standards mode**").

<!---->

- `modo`
  - : É um valor enumerado que pode ser:

> [!NOTE]
> Nota: todos estes modos agora são definidos em padrões, então os antigos nomes "standards" e "almost standards" são sem sentido, e portanto não são mais usados nos padrões.

## Exemplo

```
if (document.compatMode == "BackCompat") {
  // in Quirks mode
}
```

## Especificações

- [DOM: Document.compatMode](https://dom.spec.whatwg.org/#dom-document-compatmode)
