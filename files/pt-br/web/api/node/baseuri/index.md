---
title: Node.baseURI
slug: Web/API/Node/baseURI
---

{{APIRef("DOM")}}

## Resumo

A propriedade somente leitura **`Node.baseURI`** retorna a URL base absoluta de um nó.

A URL base é usada para [resolver](http://developers.whatwg.org/urls.html#resolving-urls) URLs relativas quando o navegador precisa obter uma URL absoluta, por exemplo, quando processa o atributo `src` do elemento HTML {{HTMLElement("img")}} ou o atributo `xlink:href` do XML.

No caso comum, a URL base é simplesmente a localização do documento, mas ela pode ser afetada por vários fatores, incluindo o elemento {{HTMLElement("base")}} em HTML e o atributo [xml:base](/pt-BR/docs/XML/xml:base) em XML.

## Sintaxe

```
var baseURI = node.baseURI;
```

- `baseURI` é uma {{ domxref("DOMString") }} que representa a URL base do {{domxref("Node")}} especificado. Pode ser `null` caso não consiga obter uma URL absoluta.
- `node.baseURI` é somente leitura.
- `node.baseURI` pode mudar com o tempo (ver abaixo).

## Detalhes

### A URL base de um documento

É a URL base de um _documento_ padrão ao endereço do documento ( como exibido pelo navegador e disponível em {{domxref("window.location")}} ), mas pode mudar o padrão:

- Quando uma tag HTML {{HTMLElement("base")}} é encontrada no documento;
- Quando esse é um novo documento creado dinamicamente.

Veja a [seção URLs base do padrão HTML](http://developers.whatwg.org/urls.html#base-urls) para mais detalhes.

Você pode usar `{{domxref("document")}}.baseURI` para obter a URL base de um documento. Note que a obtenção da URL base para um documento pode retornar diferentes URLs ao longo do tempo se as tags {{HTMLElement("base")}} ou a localização do documento mudarem.

### A URL base de um elemento

A URL base de um elemento em HTML é, normalmente, igual a URL base do documento onde o nó está.

Se o documento contém atributos [`xml:base`](/pt-BR/docs/XML/xml:base) ( que você não deve fazer em documento HTML), o `element.baseURI` recebe os atributos `xml:base` dos elementos pai into account when computing the base URL. Veja [xml:base](/pt-BR/docs/XML/xml:base) para mais detalhes.

Você pode usar `{{domxref("element")}}.baseURI` para obter a URL base de um elemento.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- Elemento {{HTMLElement("base")}} (HTML)
- Atributo [`xml:base`](/pt-BR/docs/XML/xml:base) (Documentos XML)
- {{domxref("Node.baseURIObject")}} – uma variante desta API para complementos da Mozilla e código interno. Retorna a URL base como uma `nsIURI`
