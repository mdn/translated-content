---
title: Analisando e serializando XML
slug: Web/XML/Guides/Parsing_and_serializing_XML
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Às vezes, pode ser necessário analisar o conteúdo {{Glossary("XML")}} e convertê-lo em uma árvore {{Glossary("DOM")}}, ou, inversamente, serializar uma árvore DOM existente em XML. Neste artigo, veremos os objetos fornecidos pela plataforma web para facilitar as tarefas comuns de serialização e análise de XML.

- {{domxref("XMLSerializer")}}
  - : Serializa árvores DOM, convertendo-as em strings contendo XML.
- {{domxref("DOMParser")}}
  - : Constrói uma árvore DOM analisando uma string contendo XML, retornando um {{domxref("XMLDocument")}} ou {{domxref("Document")}} conforme apropriado com base nos dados de entrada.
- {{domxref("Window/fetch", "fetch()")}}
  - : Carrega conteúdo de uma URL. O conteúdo XML é retornado como uma string de texto que você pode analisar usando `DOMParser`.
- {{domxref("XMLHttpRequest")}}
  - : O predecessor do `fetch()`. Ao contrário da API `fetch()`, o `XMLHttpRequest` pode retornar um recurso como `Document`, por meio de sua propriedade {{domxref("XMLHttpRequest.responseXML", "responseXML")}}.
- [XPath](/pt-BR/docs/Web/XML/XPath)
  - : Uma tecnologia para criar strings que contêm endereços para partes específicas de um documento XML, e localizar nós XML com base nesses endereços.

## Criando um documento XML

Usando uma das abordagens a seguir para criar um documento XML (que é uma instância de {{domxref("Document")}}).

### Analisando strings em árvores DOM

Este exemplo converte um fragmento XML em uma string em uma árvore DOM usando um {{domxref("DOMParser")}}:

```js
const xmlStr = '<q id="a"><span id="b">hey!</span></q>';
const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// imprime o nome do elemento raiz ou mensagem de erro
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  console.log("error while parsing");
} else {
  console.log(doc.documentElement.nodeName);
}
```

### Analisando recursos endereçáveis por URL em árvores DOM

#### Usando fetch

Aqui está um código de exemplo que lê e analisa um arquivo XML endereçável por URL em uma árvore DOM:

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

Este código busca o recurso como uma string de texto, então usa {{domxref("DOMParser.parseFromString()")}} para construir um {{domxref("XMLDocument")}}.

Se o documento for {{Glossary("HTML")}}, o código mostrado acima retornará um {{domxref("Document")}}. Se o documento for XML, o objeto resultante será na verdade um `XMLDocument`. Os dois tipos são essencialmente os mesmos; a diferença é em grande parte histórica, embora diferenciar tenha alguns benefícios práticos também.

> [!NOTE]
> Na verdade, existe também uma interface {{domxref("HTMLDocument")}}, mas não é necessariamente um tipo independente. Em alguns navegadores é, enquanto em outros é um alias para a interface `Document`.

## Serializando um documento XML

Dado um {{domxref("Document")}}, você pode serializar a árvore DOM do documento de volta em XML usando o método {{domxref("XMLSerializer.serializeToString()")}}.

Use as abordagens a seguir para serializar o conteúdo do documento XML que você criou na seção anterior.

### Serializando árvores DOM em strings

Primeiro, crie uma árvore DOM como descrito em [Usando o Document Object Model](/pt-BR/docs/Web/API/Document_Object_Model). Alternativamente, use uma árvore DOM obtida de {{ domxref("Window/fetch", "fetch()") }}.

Para serializar a árvore DOM `doc` em texto XML, chame {{domxref("XMLSerializer.serializeToString()")}}:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### Serializando documentos HTML

Se o DOM que você possui é um documento HTML, você pode serializar usando `serializeToString()`, mas há outra opção que muitos consideram mais simples: use a propriedade {{domxref("Element.innerHTML")}} (se você quiser apenas os descendentes do nó especificado) ou a propriedade {{domxref("Element.outerHTML")}} se você quiser o nó e todos os seus descendentes.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

Como resultado, `docInnerHtml` é uma string contendo o HTML do conteúdo do documento; ou seja, o conteúdo do elemento {{HTMLElement("body")}}.

Você pode obter o HTML correspondente ao `<body>` _e_ seus descendentes com este código:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## Veja também

- [XPath](/pt-BR/docs/Web/XML/XPath)
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}, {{domxref("XMLDocument")}} e {{domxref("HTMLDocument")}}
