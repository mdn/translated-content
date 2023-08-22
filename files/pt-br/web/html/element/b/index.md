---
title: <b>
slug: Web/HTML/Element/b
---

## Resumo

O **elemento HTML \<b>** representa um intervalo de texto estilísticamente diferente do texto normal, sem transmitir qualquer importância ou relevância. Ele é geralmente usado para destacar palavras-chaves em um resumo, nomes de produtos em um comentário ou outros vãos de texto cuja a apresentação típica seria negrito. Outro exemplo de seu uso é como marcação da frase principal de cada paragrafo de um artigo.

> **Note:** **Notas de Uso:**
>
> - Não confunda o elemento \<b> com os elementos {{HTMLElement("strong")}} , {{HTMLElement("em")}} ou {{HTMLElement("mark")}} . O elemento {{HTMLElement("strong")}} representa um texto com importância, {{HTMLElement("em")}} coloca alguma ênfase no texto e o elemento {{HTMLElement("mark")}} representa o texto relevante. O elemento \<b> não transmite essa informação semântica especial. Você deve usá-lo apenas quando os outros elementos citados não se encaixam na situação.
> - Também não é recomendado marcar títulos de cabeçalhos usando o elemento \<b>. Para isso, use as tags {{HTMLElement("h1")}} até {{HTMLElement("h6")}}. usando essas tags você terá liberdade de mudar o estilo padrão dos elementos e não ficará preso ao negrito do elemento \<b>.
> - É uma boa prática usar o atributo de classe \<b>, a fim de transmitir informação semântica adicional. Isso facilita o desenvolvimento de várias "stylings" de um documento web, sem a necessidade de alterar o seu código HTML.
> - Historicamente, o elemento \<b> foi criado para fazer o texto ficar em negrito. Porém as informações de estilo ficou obsoleta desde o HTML4, de modo que significado da tag \<b> foi alterado.
> - Se não a propósito semântico sobre o uso do elemento \<b>, usar a propriedade css [font-weight](/pt-BR/docs/CSS/font-weight) com algum volume seria uma escolha melhor para fazer o texto ficar em negrito.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), palpable content.
- _Permitted content_ [Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the [`HTMLSpanElement`](/pt-BR/docs/DOM/span) interface for

## Atributos

Este elemento só inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Exemplo

```html
<p>
  Este artigo descreve vários <b>níveis de texto</b>. Ele explica a utilização
  do elemento em um documento <b>HTML</b>.
</p>
Palavras-chave são exibidas com o estilo padrão do elemento
<b>, provavelmente em negrito.</b>
```

### Resultado

Este artigo descreve vários **níveis de texto**. Ele explica a utilização do elemento em um documento **HTML**.

Palavras-chave são exibidas com o estilo padrão do elemento \<b>, provavelmente em negrito.

## Especificações

| Especificaçoes                                                                      | Estado                   | Comentário |
| ----------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-b-element', '&lt;b&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-b-element', '&lt;b&gt;')}}   | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'present/graphics.html#h-15.2.1', '&lt;b&gt;')}}             | {{Spec2('HTML4.01')}}    |            |

## Navegadores Compatíveis

{{Compat("html.elements.b")}}

## Veja Também

- Outros elementos de transporte [text-level semantics](/pt-BR/docs/HTML/Text_level_semantics_conveying_elements): {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Using \<b> and \<i> elements (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)

{{HTMLSidebar}}
