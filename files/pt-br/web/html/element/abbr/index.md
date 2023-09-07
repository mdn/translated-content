---
title: <abbr>
slug: Web/HTML/Element/abbr
---

## Sumário

O _Elemento_ _HTML `<abbr>` _(ou Elemento de Abreviação HTML) representa uma abreviação e opcionalmente fornece uma descrição completa para ela. Se presente, o atributo **`title`** deve conter a descrição completa e apenas ela.

> **Note:** Quando presente, o número gramatical (singular/plural) do texto no atributo **`title`** deve ser correspondente ao do conteúdo do elemento `<abbr>`. Isso também deve ocorrer no caso das linguagens com mais de dois números gramaticais (por exemplo, em árabe não há somente palavras no singular e plural, mas tem também uma categoria dual).

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), [conteúdo de fraseamento](/pt-BR/docs/HTML/Content_categories#Phrasing_content), conteúdo palpável
- _Conteúdo permitido_[Conteúdo de fraseamento](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Omissão de tag_ {{no_tag_omission}}
- _Elementos-pai permitidos_ Qualquer elemento que aceite como filho [conteúdo de fraseamento](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Interface DOM_ {{domxref("HTMLElement")}} Após o Gecko 1.9.2 (Firefox 3.6) (e incluindo ele), o Firefox implementou a interface {{domxref("HTMLSpanElement")}} para este elemento.

## Atributos

Este elemento inclui apenas os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

Use o atributo **title** para definir a descrição completa da abreviação. Muitos navegadores exibem a descrição quando passa-se o mouse por cima da abreviação.

## Estilo padrão

O propósito deste elemento é meramente a conveniência de autores e todos os navegadores mostram ele como um elemento dentro de uma linha ({{cssxref('display')}}`: inline`) por padrão, embora o estilo aplicado sobre ele seja diferente entre diferentes navegadores:

- Alguns navegadores, como o Internet Explorer, não aplicam nenhum estilo à mais do que é aplicado ao elemento {{HTMLElement("span")}}.
- Opera, Firefox, e alguns outros adicionam um sublinhado pontilhado ao conteúdo do elemento.
- Alguns poucos navegadores não apenas adicionam um sublinhado pontilhado, mas também colocam o texto em versalete (small caps); para evitar este tipo de estilo, adicione algo como {{cssxref('font-variant')}}`: none` no CSS que administra este caso.

É fortemente recomendado que autores web não confiem no estilo padrão. Note que este elemento não é suportado pelo Internet Explorer anterior ao IE7. Como tais versões do IE também não permitem que se aplique estilo para elementos desconhecidos, o seguinte script é necessário para permitir isso:

```html
<!--[if lte IE 6]>
  <script>
    document.createElement("abbr");
  </script>
<![endif]-->
```

## Exemplo

```html
<p>Obama é presidente dos <abbr title="Estados Unidos da América">EUA</abbr></p>
```

### Resultado

Obama é presidente dos EUA

## Especificações

| Especificação                                                                             | Estado                   | Comentário |
| ----------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-abbr-element', '&lt;abbr&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'the-abbr-element.html#the-abbr-element', '&lt;abbr&gt;')}}       | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/text.html#edef-ABBR', '&lt;abbr&gt;')}}                    | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.abbr")}}

## Veja também

- Outros elementos que possuem [semântica à nível de texto](/pt-BR/docs/HTML/Text_level_semantics_conveying_elements): {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.

{{HTMLSidebar}}
