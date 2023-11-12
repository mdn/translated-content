---
title: Attr.localName
slug: Web/API/Attr/localName
---

{{APIRef("DOM")}}

A propriedade read-only **`Attr.localName`** retorna a parte do local de um nome qualificado de elemento.

> **Nota:** Antes do DOM4 essa API foi definida dentro da interface {{domxref("Node")}}.

## Sintaxe

```
name = attribute.localName
```

### Valor de retorno

Uma {{domxref("DOMString")}} representando a parte local do nome qualificado do atributo.

## Exemplo

O seguinte exemplo mostra "id" em um diálogo de alerta.

### Conteúdo HTML

```html
<button id="example">Click me</button>
```

### Conteúdo JavaScript

```js
const element = document.querySelector("#example");
element.addEventListener("click", function () {
  const attribute = element.attributes[0];
  alert(attribute.localName);
});
```

{{ EmbedLiveSample('Example','100%',30) }}

## Notas

O nome local de um atributo é a parte do nome qualificado do atributo the vem depois da vírgula. Nome qualificados são tipicamente utilizados em XML como parte do namespace(s) de um documento XML em particular.

> **Nota:** No Gecko 1.9.2 e anteriores, a propriedade retorna uma versão em letras maiúsculas do nome local para o atributo DOM do HTML (oposto a atributos XHTML no DOM do XML). Em versões posteriores, em conformidade com o HTML5, a propriedade retorna no caso de armazenamento interno do DOM, que é em letras minúsculas para ambos os atributos HTML no DOM do HTML e XHTML no DOM do XML.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.localName")}}
- {{domxref("Node.localName")}}
