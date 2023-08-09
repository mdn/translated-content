---
title: <ruby>
slug: Web/HTML/Element/ruby
---

## Resumo

O **elemento** **HTML `<ruby>` **representa uma anotação ruby. Anotações ruby são para mostrar a pronúncia de caracteres do Leste Asiático

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Conteúdo de fluxo](/pt-BR/docs/Web/HTML/Content_categories#Flow_content), [conteúdo fraseado](/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content), conteúdo palpável.
- _Conteúdo permitido_ [Conteúdo fraseado](/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content).
- _Omissão de tag_ {{no_tag_omission}}
- _Elementos pais permitidos_ Ver prosa
- _Interface DOM_ {{domxref("HTMLElement")}}

## Atributos

Esse elemento somente inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Exemplos

### Exemplo 1: Caracter

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

### Exemplo 2: Palavra

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

## Especificações

| Especificação                                                                             | Status                   | Comentário |
| ----------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-ruby-element', '&lt;ruby&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-ruby-element', '&lt;ruby&gt;')}}   | {{Spec2('HTML5 W3C')}}   |            |

## Compatibilidade com navegadores

{{Compat("html.elements.ruby")}}

## Veja também

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}

{{ HTMLSidebar }}
