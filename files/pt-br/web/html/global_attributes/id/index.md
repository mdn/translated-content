---
title: id
slug: Web/HTML/Global_attributes/id
---

{{HTMLSidebar("Global_attributes")}}O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **id** define um identificador exclusivo (ID) que deve ser único por todo o documento. Seu objetivo é identificar o elemento ao navegar por âncoras (usando um identificador de fragmento), quando utilizar scripts ou estilizando (com CSS).

O valor deste atributo é uma string opaca: isso significa que os desenvolvedores não devem utilizá-lo para transmitir nenhuma informação. Significados específicos como, por exemplo, significado semântico não devem ser provenientes desta string.

O valor deste atributo não deve conter lacunas (espaços, tabulações etc.). Navegadores tratam IDs inadequadas que contenham lacunas como se as lacunas fossem parte do ID. Em contraste com o atributo **class**, que permite múltiplos valores separados por espaço, os elementos podem ter somente um único ID.

> **Nota:** Utilizar caracteres exceto letras e dígitos ASCII, `'_'`, `'-'` e `'.'` pode causar problemas de compatibilidade, já que eles não eram permitidos no HTML 4. Embora esta restrição fora suspensa no HTML 5, um ID deve iniciar com uma letra para fins de compatibilidade.

## Especificações

| Especificação                                                  | Status                   | Comentário                                                                                                                                                                                                                    |
| -------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-id-attribute", "id")}} | {{Spec2('HTML WHATWG')}} | Nenhuma mudança desde o mais recente snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                        |
| {{SpecName('HTML5.1', "dom.html#the-id-attribute", "id")}}     | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, nenhuma mudança desde {{SpecName('HTML5 W3C')}}                                                                                                                                      |
| {{SpecName('HTML5 W3C', "dom.html#the-id-attribute", "id")}}   | {{Spec2('HTML5 W3C')}}   | Snapshot de {{SpecName('HTML WHATWG')}}, passa a aceitar `'_'`, `'-'` and `'.'` se não estiverem no começo do ID. Se torna um atributo global verdadeiro.                                                                     |
| {{SpecName('HTML4.01', 'struct/global.html#adef-id', 'id')}}   | {{Spec2('HTML4.01')}}    | Suportado por todos os elementos menos {{HTMLElement("base")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("title")}}. |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.id")}}

## Veja também

- Todos os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}} para explorar este atributo.
