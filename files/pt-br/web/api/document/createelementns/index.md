---
title: Document.createElementNS()
slug: Web/API/Document/createElementNS
---

{{ApiRef("DOM")}}

Creates an element with the specified namespace URI and qualified name.

Cria um elemento com Namespace URI e nome qualificado, como especificado.

## Syntax

```
element = document.createElementNS(namespaceURI, qualifiedName);
```

- `element` é o [element](/pt-BR/docs/Web/API/Element) criado.
- `namespaceURI` é uma string que especifica o [namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) para associar com o elemento. A propriedade [namespaceURI](/pt-BR/docs/Web/API/Element/namespaceURI) do elemento criado é inicializada com os valores de `namespaceURI`. (Consulte seção abaixo para "Namespace URI's válidos")
- `qualifiedName` é uma string que especifica o tipo de elemento a ser criado. A propriedade [nodeName](/pt-BR/docs/Web/API/Node/nodeName) do elemento criado é inicializada com o valor de `qualifiedName`

## Namespace URI's válidos

- HTML - Use `https://www.w3.org/1999/xhtml`
- SVG - Use `https://www.w3.org/2000/svg`
- XBL - Use `http://www.mozilla.org/xbl`
- XUL - Use `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`

## Exemplo

Isso cria um novo elemento \<div> no namespace [XHTML](/pt-BR/docs/Glossary/XHTML) e anexa ele ao elemento vbox. Embora isso não seja um documento [XUL](/pt-BR/docs/XUL) extremamente útil, pode demonstrar o uso de elementos de dois namespaces diferentes em apenas um documento:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="https://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="text/javascript"><![CDATA[
 var container;
 var newdiv;
 var txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("https://www.w3.org/1999/xhtml","div");
   txtnode = document.createTextNode("Este é o texto construído dinâmicamente com createElementNS e createTextNode então é inserido no documento usando appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id='ContainerBox' flex='1'>
  <html:div>
   O script desta página irá colocar conteúdo dinâmico abaixo:
  </html:div>
 </vbox>

</page>
```

## Notas

O exemplo dado anteriormente usa script inline que não é recomendado em documentos XHTML. Este exemplo particular é atualmente um documento XUL com XHTML incorporado, contudo, a recomendação ainda se aplica. scripts Inline não causam nenhum problema neste pequeno exemplo, contudo, para qualquer trabalho sério você precisa ler sobre [Uso correto de CSS e JavaScript en documentos XHTML](/pt-BR/docs/Properly_Using_CSS_and_JavaScript_in_XHTML_Documents).

Para criar um elemento sem especificar seu namespace URI, use o método [createElement](createElement).

## Especificação

- [DOM 2 Core: createElementNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS)
- [Namespaces em XML](https://www.w3.org/TR/1999/REC-xml-names-19990114)

## Veja também

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
- [Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114/)
