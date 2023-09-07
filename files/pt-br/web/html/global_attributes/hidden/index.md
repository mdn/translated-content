---
title: hidden
slug: Web/HTML/Global_attributes/hidden
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **`hidden`** é um atributo booleano que indica se um elemento é ou não _relevante_. Por exemplo, ele pode ser usado para esconder elementos de página que não podem ser usados até que o processo de login seja completo. Os navegadores não renderizarão elementos com o atributo `hidden` setado.

O atributo `hidden` não deve ser utilizado para esconder conteúdo que poderia legitimamente ser mostrado em outra apresentação, por exemplo, não é correto usar `hidden` para esconder abas de formulários em paineis, porque interfaces separadas por abas são meramente um tipo de apresentação em fluxo — o que pode ser igualmente mostrado em forma vertical com barra de rolagem. É similarmente incorreto usar este atributo para esconder conteúdo de apenas uma apresentação — se algo está marcado como `hidden`, ele está escondido de todas as apresentações incluindo, por exemplo, leitores de tela.

Elementos com `hidden` não devem estar ligados a outros elementos sem `hidden`. Elementos filhos de um elemento com o atributo `hidden` ainda estão ativos, ou seja, é possível executar a ação `submit` de um formulário ou uma tag `script` pode ser executada se em ambos os casos estes elementos forem filhos de um elemento com o atributo `hidden`.

Por exemplo, é incorreto o uso do atributo `href` referenciando a uma sessão marcada com o atributo `hidden`. Se o conteúdo não é aplicável ou relevante, não faz sentido fazer a referência.

Pode ser correto, entretanto, usar o atributo ARIA `aria-describedby`para referenciar descrições que estejam, elas mesmas, escondidas. Esconder as descrições implica que elas não são úteis por si só. Mas elas podem ser escritas de forma que sejam úteis no contexto específico do elemento que descrevem

Similarmente, um elemento canvas com atributo `hidden` poderia ser usado como buffer por um script de gráficos, e um controle de formulário, usando seu atributo form, poderia referir-se a um elemento `form` com atributo `hidden`.

> **Nota:** Mudar o valor da propriedade {{cssxref("display")}} no CSS de um elemento com o atributo `hidden` sobrescreve o comportamento. Por exemplo, elementos com o estilo `display: flex;` serão mostrados independente da presença do atributo `hidden`.

## Especificações

| Specification                                                                  | Status                   | Comment                                                              |
| ------------------------------------------------------------------------------ | ------------------------ | -------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#the-hidden-attribute", "hidden")}} | {{Spec2('HTML WHATWG')}} | Sem mudanças desde o último snapshot, {{SpecName('HTML5.1')}}        |
| {{SpecName('HTML WHATWG', "rendering.html#hiddenCSS", "Hidden elements")}}     | {{Spec2('HTML WHATWG')}} | Define o processamento padrão sugerido do atributo hidden usando CSS |
| {{SpecName('HTML5.1', "editing.html#the-hidden-attribute", "hidden")}}         | {{Spec2('HTML5.1')}}     | Definição inicial do snapshot de {{SpecName('HTML WHATWG')}}         |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.hidden")}}

## Veja também

- Todos os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).
