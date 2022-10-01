---
title: Element.tagName
slug: Web/API/Element/tagName
tags:
  - API
  - DOM
  - Gecko
  - PrecisaCompatibilidadeBrowser
  - Propriedade
  - Referência DOM
translation_of: Web/API/Element/tagName
---
{{ApiRef("DOM")}}

Retorna o nome do elemento.

## Sintaxe

```
nomeDoElemento = element.tagName;
```

- `nomeDoElemento` é a string contendo o nome do elemento atual.

## Notas

Em XML (e linguagens baseadas, como XHTML), `tagName` conserva o _case_ (caixa alta/baixa) da tag. Nos elementos HTML da árvore do DOM marcados como documentos HTML, `tagName` retorna o nome do elemento em _uppercase_ (caixa alta). O valor de `tagName` é o mesmo que o [nodeName](/pt-BR/docs/Web/API/Node/nodeName)

## Exemplo

### conteúdo HTML

```html
<span id="exemplo">Descrição do exemplo...</span>
```

### conteúdo JavaScript

```js
var span = document.getElementById("exemplo");
console.log(span.tagName);
```

Em XHTML (ou qualquer outro formato XML), "`span`" será a saída. Em HTML, "`SPAN`" será a saída.

## Especificações

| Especificação                                                                                | Status                       | Comentário         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("DOM3 Core", "core.html#ID-104682815", "Element.tagName")}} | {{Spec2("DOM3 Core")}} | No change          |
| {{SpecName("DOM2 Core", "core.html#ID-104682815", "Element.tagName")}} | {{Spec2("DOM2 Core")}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("api.Element.tagName")}}
