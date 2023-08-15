---
title: <address>
slug: Web/HTML/Element/address
---

## Resumo

O **elemento HTML `<address>`** fornece informações de contato para seu ancestral {{HTMLElement("article")}} ou {{HTMLElement("body")}} mais próximo; no segundo caso, ele se aplica ao documento inteiro.

A informação de contato fornecida por um conteúdo do elemento `<address>` pode tomar qualquer forma que é apropriada para o contexto, e pode incluir qualquer tipo de informação de contato necessária, como endereço físico, URL, email, telefone, mídia social, coordenadas geográficas, por aí vai. Deve incluir o nome da pessoa, grupo, ou organização para qual as informações de contato se referem.

`<address>` pode ser usado em uma variedade de contextos, como fornecer informação de contato de uma empresa no header da página, ou indicar o autor de um artigo incluindo um elemento `<address>` dentro do {{HTMLElement("article")}}.

- _[Categoria de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), conteúdo palpável.
- _Conteúdo permitido_[Conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), mas sem nenhum elemento \<address> aninhado, e sem conteúdo de cabeçalho ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}), e nem conteúdo de seção como ({{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}), e sem{{HTMLElement("header")}} ou o elemento {{HTMLElement("footer")}}.
- _Omissão de tag_ {{no_tag_omission}}
- _Elementos-pai permitidos_ Qualquer elemento que aceite [conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), exceto os elementos \<address> (de acordo com o princípio lógico da simetria, se a tag \<address>, como pai, não pode ter elemento \<address> como filho, então o mesmo conteúdo \<address> não pode ter tag \<address> como pai).
-
- _Regras ARIA permitidas_ Nenhuma
- _Interface DOM_ {{domxref("HTMLElement")}}. Antes do Gecko 2.0 (Firefox 4), Gecko implementava este elemento usando a interface {{domxref("HTMLSpanElement")}}

## Atributos

Este elemento inclui somente os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Notas de uso

- Para representar um endereço arbitrário, um que não é relacionado à informação para contato, use um elemento {{HTMLElement("p")}} ao invés do elemento \<address>.
- Este elemento não deve conter mais informação além da informação de contato, como uma data de publicação (a qual pertence ao elemento {{HTMLElement("time")}}).
- Tipicamente um elemento \<address> pode ser posicionado dentro do elemento {{HTMLElement("footer")}} da seção atual, se houver um.

## Exemplo

```html
<address>
  Voce pode contatar o autor em
  <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
  Se encontrar qualquer bug, por favor
  <a href="mailto:webmaster@somedomain.com">contate o administrador do site</a
  >.<br />
  Você tambem pode querer nos visitar:<br />
  Mozilla Foundation<br />
  1981 Landings Drive<br />
  Building K<br />
  Mountain View, CA 94043-0801<br />
  USA
</address>
```

Embora o elemento `address` exiba o texto com o mesmo estilo padrão que os elementos {{HTMLElement("i")}} ou {{HTMLElement("em")}}, ele é mais apropriado de ser usado quando se lida com informação de contato, já que ele fornece informação semântica adicional.

## Especificações

| Especificação                                                                       | Estado                   | Comentário |
| ----------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-address-element', '&lt;address&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'sections.html#the-address-element', '&lt;address&gt;')}}   | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.6', '&lt;address&gt;')}}           | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.address")}}

## Ver também

- Outros elementos relacionados à seção: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Seções e delineamento de um documento HTML5](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).
