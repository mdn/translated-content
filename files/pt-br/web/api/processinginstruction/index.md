---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
tags:
  - API
  - DOM
translation_of: Web/API/ProcessingInstruction
---
{{APIRef("DOM")}}

Uma **ProcessingInstruction (Instrução de Processamento)** incorpora instruções específicas de aplicações em [XML](/pt-BR/docs/XML_introduction) que pode ser ignorada por outras aplicações que não as reconhece. Mesmo se um processador XML ignora as instruções de processamento, irá dá-los um lugar no DOM.

Uma instrução de processamento é diferente de uma [declaração XML](/pt-BR/docs/XML/XML_Declaration), que fornece informação sobre o documento como por exemplo codificação de caracteres, e pode somente aparecer como o primeiro item em um documento.

Instruções de processamento definidas por usuário não podem começar com `'xml'`, pois estes são reservados (como `<?xml-stylesheet ?>)`.

Instruções de processamento herdam métodos e propriedades do [`Node`](/pt-BR/docs/Web/API/Node).

{{InheritanceDiagram(700,70)}}

### Atributos

- alvo (DOMString) - depois do `<?` e antes do _[whitespace](/pt-BR/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM)_ separando-o de `data`.
- dado (DOMString) - primeiro caractere _whitespace_ brancodepois de `target` e antes de `?>`

### Especificações

- [DOM Level 1 Core: ProcessingInstruction interface](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1004215813)

### Veja também

- [document.createProcessingInstruction](/en/DOM/document.createProcessingInstruction)
- [whitespace no DOM](/pt-BR/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM)
