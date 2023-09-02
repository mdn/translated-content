---
title: class
slug: Web/HTML/Global_attributes/class
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **class** é uma lista das classes de um elemento, separada por espaços. Classes permitem a CSS e Javascript selecionar e acessar elementos específicos através dos [seletores de classe](/pt-BR/docs/Web/CSS/Class_selectors) ou funções como o método DOM {{domxref("document.getElementsByClassName")}}.

Apesar da especificação não impor requesitos sobre os nomes de classes, é considerada boa prática usar nomes que descrevam o propósito semântico do elemento, em vez de sua representação (e.g. _atributo_ para descrever um atributo em vez de _ítalico_, mesmo que um elemento desta classe possa ser representado por _ítalico)_. Nomes baseados em semântica permanecem coerentes mesmo se a representação da página mude.

## Especificações

| Especificação                                                   | Status                   | Comentário                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "elements.html#classes", "class")}}   | {{Spec2('HTML WHATWG')}} | Nenhuma mudança desde o mais recente snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                                                                             |
| {{SpecName('HTML5.1', "elements.html#classes", "class")}}       | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, nenhuma mudança desde {{SpecName('HTML5 W3C')}}                                                                                                                                                                                           |
| {{SpecName('HTML5 W3C', "elements.html#classes", "class")}}     | {{Spec2('HTML5 W3C')}}   | Snapshot de {{SpecName('HTML WHATWG')}}. Apartir de {{SpecName('HTML4.01')}}, `class` é um atributo global verdadeiro.                                                                                                                                                             |
| {{SpecName('HTML4.01', "struct/global.html#h-7.5.2", "class")}} | {{Spec2('HTML4.01')}}    | Suportado por todos os elementos menos {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, e {{HTMLElement("title")}}. |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.class")}}

## Veja também

- Todos os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).
