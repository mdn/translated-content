---
title: <html>
slug: Web/HTML/Element/html
---

## Sumário

O elemento **HTML \<html> **(ou _HTML root element_) representa a raiz de um HTML ou XHTML documento. Todos os outros elementos devem ser descendentes desse elemento.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ Nenhuma.
- _Conteúdo permitido_ Um elemento {{HTMLElement("head")}}, seguido por um elemento {{HTMLElement("body")}}.
- _Omissão de tag_ A tag inicial pode ser omitida se a primeira coisa dentro do elemento `<html>` não for um comentário.
  A tag final pode ser omitida se o elemento `<html>` não for imediatamente seguido por um comentário, e conter um elemento {{HTMLElement("body")}} ou que não está vazio, ou cuja tag inicial está presente.
- _Elementos pais permitidos_ Como o elemento raiz do documento, ou qualquer fragmento de subdocumento é permitido em um documento composto.
- _DOM interface_ {{domxref("HTMLhtmlElement")}}

## Atributos

Esse elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("manifest")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Especifica a URI de um recurso manifest indicando os recursos que devem ser carregados na memória local. Veja [Recursos offline em Firefox](/pt-BR/docs/HTML/Using_the_application_cache) para detalhes.
- {{htmlattrdef("version")}} {{deprecated_inline}}
  - : Especifica a versão da definição de tipo de documento HTML que governa o documento atual. Esse atributo não é necessário, porque é redundante com a informação de versão na declaração de tipo de documento.

## Exemplo

O DOCTYPE usado no exemplo seguinte indica HTML5.

```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

## Notas

Desde que o elemento `<html>` seja o primeiro em documento outro que comenta, esse é chamado o elemento raiz. Embora essa tag possa ser implícita, ou não requerida, com [HTML](/pt-BR/docs/HTML), essa é requerida para ser aberta e fechada em [XHTML](/pt-BR/docs/XHTML).

## Especificações

| Especificação                                                                       | Status                   | Comentário |
| ----------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-html-element', '&lt;html&gt;')}}      | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'the-html-element.html#the-html-element', '&lt;html&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'global.html#h-7.3', '&lt;html&gt;')}}                       | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade dos navegadores

{{Compat("html.elements.html")}}

## Veja também

- Elemento de alto nível MathML: {{MathMLElement("math")}}
- Elemento de alto nível SVG: {{SVGElement("svg")}}

{{HTMLSidebar}}
