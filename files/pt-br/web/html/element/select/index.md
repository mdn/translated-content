---
title: <select>
slug: Web/HTML/Element/select
---

## Sumário

O elemento HTML _select_ (\<select>) representa um controle que apresenta um menu de opções. As opções dentro do menu são representadas pelo elemento {{HTMLElement("option")}}, que podem ser agrupados por elementos `{{HTMLElement("optgroup")}}`. As opções podem ser pré-selecionadas para o usuário.

## Contexto de uso

| [Categorias de conteúdo](/pt-BR/docs/HTML/Categorias_de_conteúdo) | [conteúdo fluido](/pt-BR/docs/HTML/Categorias_de_conteúdo#Conteúdo_fluido), [conteúdo fraseado](/pt-BR/docs/HTML/Categorias_de_conteúdo#Conteúdo_fraseado), [conteúdo interativo](/pt-BR/docs/HTML/Categorias_de_conteúdo#Conteúdo_interativo), [listado](/pt-BR/docs/HTML/Categorias_de_conteúdo#Listado_em_formulários), [rotulável](/pt-BR/docs/HTML/Categorias_de_conteúdo#Rotulável_em_formulários), [resetável](/pt-BR/docs/HTML/Categorias_de_conteúdo#Resetável_em_formulários), e [enviável](/pt-BR/docs/HTML/Categorias_de_conteúdo#Enviável_em_formulários) [associado a formulários](/pt-BR/docs/HTML/Categorias_de_conteúdo#Associado_a_formulários) |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conteúdo permitido                                                | Zero ou mais elementos {{HTMLElement("option")}} ou {{HTMLElement("optgroup")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Omissão de tag                                                    | Nenhuma, tanto tag de início quanto de fim são obrigatórias                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Elementos pai permitidos                                          | qualquer elemento que aceite conteúdo fraseado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Atributos_globais).

- {{htmlattrdef("autofocus")}}
  - : Este atributo permite especificar que um controle de formulário deve ter foco de entrada quando a página é carregada, a não ser que o usuário o substitua, por exemplo digitando em um controle diferente. Somente um elemento de formulário em um documento pode ter o atributo `autofocus`, que é booleano.
- {{htmlattrdef("disabled")}}
  - : Este atributo booleano indica que o usuário não pode interagir com o controle. Caso esse atributo não seja especificado, o controle herda a configuração do elemento que o contém, por exemplo o elemento `fieldset`; se não há nenhum elemento que o contém com o atributo `disabled`, então o controle está habilitado.
- {{htmlattrdef("form")}}
  - : O elemento form ao qual o elemento select é associado (algo como "formulário dono" do select). Se este atributo for especificado, seu valor deve ser o ID de um elemento form no mesmo documento. Isso permite que você coloque elementos select em qualquer lugar dentro do documento, e não apenas como descendentes de elementos form.
- {{htmlattrdef("multiple")}}
  - : Este atributo booleano indica que várias opções podem ser selecionadas na lista. Se não for especificado, apenas uma opção poderá ser selecionada de cada vez.
- {{htmlattrdef("name")}}
  - : O nome do controle
- {{htmlattrdef("required")}}
  - : Um atributo booleano que indica que uma opção com um valor de string que não esteja vazia deve ser selecionada.
- {{htmlattrdef("size")}}
  - : Se o controle é apresentado como uma list box com scroll, este atributo representa o número de linhas na list box que devem estar visíveis num determinado momento. Os navegadores não são obrigados a apresentar elementos select com uma list box scroll. O valor padrão é 0.

> **Note:** **Nota sobre o Firefox:** De acordo com a especificação HTML5, o valor padrão para o size deveria ser 1; no entanto, na prática, notou-se que isso quebrava alguns sites, e nenhum outro navegador faz isso no momento, então a Mozilla escolheu por continuar devolvendo 0 por enquanto no Firefox.

## Interface DOM

Este elemento implementa a interface [`HTMLSelectElement`](/pt-BR/docs/DOM/HTMLSelectElement).

## Exemplos

```html
<!-- O segundo valor estará selecionado inicialmente -->
<select name="select">
  <option value="valor1">Valor 1</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
</select>
```

### Notas

O conteúdo deste elemento é estático e não [editável](/pt-BR/docs/HTML/Content_Editable).

A seguir um exemplo de como simular uma lista de seleção com opções editáveis, **mas esteja ciente** de que leitores de tela e dispositivos de acessibilidade _não_ interpretarão o formulário corretamente; este exemplo seria HTML inválido se os elementos corretos fossem usados:

[Este é um exemplo](/files/4563/editable_select.html) de um select editável usando um {{HTMLElement("fieldset")}} de [botões de opção](/pt-BR/docs/HTML/Element/Input) e [caixas de texto](/pt-BR/docs/HTML/Element/Input) (**escrito somente com CSS**, sem JavaScript),

## Especificações

| Especificação                                                                | Estado                 | Comentários |
| ---------------------------------------------------------------------------- | ---------------------- | ----------- |
| {{SpecName('HTML5 W3C', 'forms.html#the-select-element', '&lt;select&gt;')}} | {{Spec2('HTML5 W3C')}} |             |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.6', '&lt;select&gt;')}}     | {{Spec2('HTML4.01')}}  |             |
|                                                                              |                        |             |

## Compatibilidade com navegadores

{{Compat("html.elements.select")}}

## Veja também

- Outros elementos relacionados a formulários: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("option")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} e {{HTMLElement("meter")}}.

{{HTMLSidebar}}
