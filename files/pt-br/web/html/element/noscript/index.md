---
title: <noscript>
slug: Web/HTML/Element/noscript
---

{{HTMLSidebar}}

## Resumo

O **Elemento HTML `<noscript>`** define uma seção de html a ser inserida se um tipo de script não é suportado pela página ou se o script está desativado no navegador.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Metadata content](/pt-BR/docs/HTML/Content_categories#Metadata_content), [flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Conteúdo permitido_ Quando scripting está desabilitado e quando este é um descendente do elemento {{HTMLElement("head")}} : em qualquer ordem, de zero ou mais elementos {{HTMLElement("link")}}, zero ou mais elementos {{HTMLElement("style")}}, e zero ou mais elementos {{HTMLElement("meta")}}.
  Quando o script está desativado e quando não é descendente do elemento {{HTMLElement("head")}} : qualquer conteúdo transparente, mas nenhum elemento `<noscript>` entre seus descendentes.
  Nos outros casos: conteúdo de fluxo ou conteúdo de texto.
- _Omissão da tag_ Tags inicial e final obrigatórias.
- _Elemento pai permitidos_ Qualquer elemento que aceite '[conteúdo de texto](/pt-BR/docs/HTML/Content_categories#Phrasing_content)' ([phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content)), se não há um elemento `<noscript>` anterior ou em um elemento {{HTMLElement("head")}} (mas somente em um documento HTML), e também se não existe elemento `<noscript>` anterior.
- _Interface DOM_ {{domxref("HTMLElement")}}

## Atributos

Este elemento só inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Exemplo

```html
<noscript>
  <!-- referência a arquivo externo -->
  <a href="http://www.mozilla.com/">Link Externo</a>
</noscript>
<p>Rocks!</p>
```

### Resultado com o script ativado

Rocks!

### Resultado com o script desativado

[Link Externo](http://www.mozilla.com/)

Rocks!

## Especificações

| Specification                                                                            | Status                   | Comment |
| ---------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}}   | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'interact/scripts.html#h-18.3.1', '&lt;noscript&gt;')}}           | {{Spec2('HTML4.01')}}    |         |

## Compatibilidade com navegadores

{{Compat("html.elements.noscript")}}
