---
title: <style>
slug: Web/HTML/Element/style
---

## Resumo

O **elemento HTML \<style>** contém informações de estilo para um documento ou uma parte do documento. As informações de estilo específico estão contidas dentro deste elemento, geralmente no [CSS](/pt-BR/docs/Web/CSS).

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_[Metadata content](/pt-BR/docs/Web/HTML/Content_categories#Metadata_content), e se o atributo `scoped` é apresentado: [flow content](/pt-BR/docs/Web/HTML/Content_categories#Flow_content).
- _Conteúdo Permitido_ Style information matching the language of the `type` attribute.
- _Omissão de Tag_ {{no_tag_omission}}
- _Permitted parent elements_ Qualquer elemento que aceite Metadata content.
- _Interface DOM_ {{domxref("HTMLStyleElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- type
  - : Este atributo define a linguagem de estilo como um tipo MIME (charset não deve ser especificado). ' text/css' presume se este atributo estiver ausente.
- media
  - : Qual mídia deve aplicar-se a este estilo. Deve ser uma consulta de mídia, consulte <http://dev.w3.org/csswg/css3-mediaqueries>.
- scoped
  - : Se este atributo está presente, então o estilo aplica-se apenas ao seu elemento pai. Se está ausente, o estilo aplica-se ao documento inteiro.
- title
  - : Especifica os conjuntos de folhas de estilo alternativa.
- disabled
  - : Se definido, desativa (não se aplica) às regras de estilo para a {{domxref("document","Document")}} que são especificadas no elemento.

## Exemplos

### Uma folha de estilo simples

```html
<style type="text/css">
  body {
    color: red;
  }
</style>
```

### Uma folha de estilos com escopo

```html
<article>
  <div>
    The scoped attribute allows for you to include style elements mid-document.
    Inside rules only apply to the parent element.
  </div>
  <p>
    This text should be black. If it is red your browser does not support the
    scoped attribute.
  </p>
  <section>
    <style scoped>
      p {
        color: red;
      }
    </style>
    <p>This should be red.</p>
  </section>
</article>
```

#### Amostra

{{ EmbedLiveSample('A_scoped_stylesheet', '100%', '200') }}

## Especificações

| Specification                                                                      | Status                     | Comment                                     |
| ---------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------- |
| {{ SpecName('HTML WHATWG', 'document-metadata.html#the-style-element', 'style') }} | {{ Spec2('HTML WHATWG') }} | No change from {{ SpecName('HTML5 W3C') }}. |
| {{ SpecName('HTML5 W3C', 'document-metadata.html#the-style-element', 'style') }}   | {{ Spec2('HTML5 W3C') }}   | Added the `scoped` attribute                |
| {{ SpecName('HTML4.01', 'present/styles.html#h-14.2.3', 'style') }}                | {{ Spec2('HTML4.01') }}    |                                             |

## Compatibilidade com navegadores

{{Compat("html.elements.style")}}

## Veja também

- O elemento {{HTMLElement("link")}} que permite usar folhas de estilo externas.

{{HTMLSidebar}}
