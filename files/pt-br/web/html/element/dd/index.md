---
title: '<dd>: elemento Detalhes da Descrição'
slug: Web/HTML/Element/dd
tags:
  - Definição
  - Detalhes da Descrição
  - Elemento
  - Elemento HTML
  - HTML
  - Internet
  - Referencia
  - Web
  - dd
  - detalhes
  - lista de descrições
  - lista descritiva
translation_of: Web/HTML/Element/dd
---
O **elemento HTML \<dd>** fornece detalhes ou uma definição mais completa do termo precedente (definido por {{HTMLElement("dt")}}) numa lista de descrições ({{HTMLElement("dl")}}).

| [Categorias de conteúdo](/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo) | Nenhuma.                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conteúdo permitido                                                          | [Conteúdo de fluxo](/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conte%C3%BAdo_de_fluxo).                                                                                                                            |
| Omissão de Tag                                                              | A Tag inicial ({{HTMLElement("dd")}}) é obrigatória. A Tag final (\</dd>) pode ser omitida se seguida imediatamente por outro elemento {{HTMLElement("dd")}}, ou se o elemento pai não tiver mais conteúdo. |
| Ancestrais permitidos                                                       | {{HTMLElement("dl")}} ou (em [WHATWG](/pt-BR/docs/Glossary/WHATWG) HTML) uma {{HTMLElement("div")}} que está dentro de uma {{HTMLElement("dl")}}.                                                     |
| Tags irmãs                                                                  | {{HTMLElement("dt")}} ou outro elemento {{HTMLElement("dd")}} .                                                                                                                                             |
| Papeis ARIA permitidos                                                      | Nenhum.                                                                                                                                                                                                                   |
| Tipo de elemento DOM                                                        | {{domxref("HTMLElement")}}                                                                                                                                                                                      |

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes) como seus.

- {{htmlattrdef("nowrap")}} {{Non-standard_inline}}
  - : Se o valor deste atributo for `yes`, o texto de definição não será envolvido. O valor padrão é `no`.

## Exemplo

Para exemplos, veja [os exemplos de \<dl>](/pt-BR/docs/Web/HTML/Element/dl#Exemplos).

## Especificações

| Especificação                                                                                            | Status                           | Comentário |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-dd-element', '&lt;dd&gt;')}}     | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-dd-element', '&lt;dd&gt;')}} | {{Spec2('HTML5 W3C')}}     |            |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dd&gt;')}}                 | {{Spec2('HTML4.01')}}     |            |

## Compatibilidade com navegadores

{{Compat("html.elements.dd")}}

## Veja também

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}
